import { NextRequest, NextResponse } from "next/server";
import { queryMySQL, checkMySQLStatus } from "@/lib/db/mysql";
import { randomUUID } from "crypto";
import {
  getAllRegisteredUsers,
  upsertRegisteredUser,
  toggleRegisteredUserStatus,
  deleteRegisteredUser,
} from "@/lib/data/user-registry";

export async function GET() {
  try {
    const dbStatus = await checkMySQLStatus();
    if (!dbStatus.connected) {
      return NextResponse.json({
        success: true,
        source: "cloud_registry",
        users: getAllRegisteredUsers(),
      });
    }

    const res = await queryMySQL<{
      id: string;
      name: string;
      identifier: string;
      role: "super_admin" | "guru" | "murid";
      email: string;
      kelas: string;
      isActive: number;
    }>(
      `SELECT 
         p.id, 
         p.full_name as name, 
         COALESCE(p.identifier, '') as identifier, 
         p.role, 
         COALESCE(p.email, '') as email, 
         COALESCE(
           c.name, 
           CASE 
             WHEN p.role = 'guru' THEN 'Guru Pengampu' 
             WHEN p.role = 'super_admin' THEN 'Kepala Lab BCF' 
             ELSE '-' 
           END
         ) as kelas,
         p.is_active as isActive
       FROM profiles p
       LEFT JOIN class_members cm ON p.id = cm.user_id
       LEFT JOIN classes c ON cm.class_id = c.id
       ORDER BY 
         CASE p.role
           WHEN 'super_admin' THEN 1
           WHEN 'guru' THEN 2
           WHEN 'murid' THEN 3
           ELSE 4
         END ASC,
         p.created_at DESC`
    );

    const formatted = (res.success && res.data ? res.data : []).map((u) => ({
      ...u,
      isActive: Boolean(u.isActive),
    }));

    // Sinkronkan ke registry memori agar konsisten
    formatted.forEach((u) => {
      upsertRegisteredUser({
        id: u.id,
        name: u.name,
        identifier: u.identifier,
        role: u.role,
        email: u.email,
        kelas: u.kelas,
        isActive: u.isActive,
      });
    });

    return NextResponse.json({
      success: true,
      source: "mysql_xampp",
      users: formatted,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const dbStatus = await checkMySQLStatus();

    // 1. Aksi Toggle Status Akun (Aktif / Nonaktif)
    if (body.action === "toggle_status" && body.id) {
      const nextActive = Boolean(body.isActive);
      toggleRegisteredUserStatus(body.id, nextActive);

      if (dbStatus.connected) {
        await queryMySQL(
          "UPDATE profiles SET is_active = ?, updated_at = NOW() WHERE id = ?",
          [nextActive ? 1 : 0, body.id]
        );

        const logId = randomUUID();
        await queryMySQL(
          `INSERT INTO activity_logs (id, user_id, action, entity, entity_id, meta)
           VALUES (?, 'usr-admin-01', 'TOGGLE_USER_STATUS', 'profiles', ?, ?)`,
          [logId, body.id, JSON.stringify({ is_active: nextActive })]
        );
      }

      return NextResponse.json({
        success: true,
        message: `Status pengguna berhasil diperbarui`,
      });
    }

    // 1b. Aksi Edit / Perbarui Data Pengguna
    if (body.action === "update_user" && body.id) {
      const { id, name, identifier, role = "murid", email, kelas } = body;
      if (!name || !identifier) {
        return NextResponse.json(
          { success: false, error: "Nama dan Nomor Identitas (NIS/NIP) wajib diisi" },
          { status: 400 }
        );
      }

      const cleanIdentifier = String(identifier).trim();
      const cleanRole = ["super_admin", "guru", "murid"].includes(role) ? role : "murid";
      const cleanEmail = email ? String(email).trim() : `${cleanIdentifier}@smk.sch.id`;

      const savedUser = upsertRegisteredUser({
        id,
        name: name.trim(),
        identifier: cleanIdentifier,
        role: cleanRole,
        email: cleanEmail,
        kelas,
      });

      if (dbStatus.connected) {
        await queryMySQL(
          `UPDATE profiles 
           SET full_name = ?, role = ?, identifier = ?, email = ?, updated_at = NOW()
           WHERE id = ?`,
          [name.trim(), cleanRole, cleanIdentifier, cleanEmail, id]
        );

        if (cleanRole === "murid" && kelas) {
          const clsRes = await queryMySQL<{ id: string }>(
            "SELECT id FROM classes WHERE name = ? LIMIT 1",
            [kelas.trim()]
          );
          if (clsRes.success && clsRes.data && clsRes.data.length > 0) {
            const classId = clsRes.data[0].id;
            await queryMySQL("DELETE FROM class_members WHERE user_id = ?", [id]);
            await queryMySQL(
              `INSERT INTO class_members (class_id, user_id, member_role)
               VALUES (?, ?, 'murid')`,
              [classId, id]
            );
          }
        } else {
          await queryMySQL("DELETE FROM class_members WHERE user_id = ?", [id]);
        }

        const logId = randomUUID();
        await queryMySQL(
          `INSERT INTO activity_logs (id, user_id, action, entity, entity_id, meta)
           VALUES (?, 'usr-admin-01', 'UPDATE_USER', 'profiles', ?, ?)`,
          [
            logId,
            id,
            JSON.stringify({ name: name.trim(), role: cleanRole, identifier: cleanIdentifier, kelas }),
          ]
        );
      }

      return NextResponse.json({
        success: true,
        message: `Data pengguna ${name} berhasil diperbarui`,
        user: savedUser,
      });
    }

    // 2. Aksi Batch Import Pengguna (dari template file / multi-input)
    if (Array.isArray(body.users) && body.users.length > 0) {
      let insertedCount = 0;
      for (const item of body.users) {
        if (!item.name || !item.identifier) continue;
        const role = item.role || "murid";
        const email = item.email || `${item.identifier}@smk.sch.id`;
        const userId =
          item.id ||
          `usr-${role}-${item.identifier.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}`;

        upsertRegisteredUser({
          id: userId,
          name: item.name,
          identifier: item.identifier,
          role,
          email,
          kelas: item.kelas,
        });

        if (dbStatus.connected) {
          await queryMySQL(
            `INSERT INTO profiles (id, full_name, role, identifier, email, is_active)
             VALUES (?, ?, ?, ?, ?, 1)
             ON DUPLICATE KEY UPDATE
               full_name = VALUES(full_name),
               role = VALUES(role),
               email = VALUES(email),
               is_active = 1`,
            [userId, item.name.trim(), role, String(item.identifier).trim(), email.trim()]
          );

          if (role === "murid" && item.kelas) {
            const clsRes = await queryMySQL<{ id: string }>(
              "SELECT id FROM classes WHERE name = ? LIMIT 1",
              [item.kelas.trim()]
            );
            if (clsRes.success && clsRes.data && clsRes.data.length > 0) {
              const classId = clsRes.data[0].id;
              await queryMySQL(
                `INSERT INTO class_members (class_id, user_id, member_role)
                 VALUES (?, ?, 'murid')
                 ON DUPLICATE KEY UPDATE member_role = 'murid'`,
                [classId, userId]
              );
            }
          }
        }
        insertedCount++;
      }

      if (dbStatus.connected) {
        const logId = randomUUID();
        await queryMySQL(
          `INSERT INTO activity_logs (id, user_id, action, entity, entity_id, meta)
           VALUES (?, 'usr-admin-01', 'BATCH_IMPORT_USERS', 'profiles', 'batch', ?)`,
          [logId, JSON.stringify({ count: insertedCount })]
        );
      }

      return NextResponse.json({
        success: true,
        message: `Berhasil mengimpor dan memperbarui ${insertedCount} akun pengguna`,
        count: insertedCount,
      });
    }

    // 3. Tambah Akun Pengguna Tunggal
    const { name, identifier, role = "murid", email, kelas } = body;

    if (!name || !identifier) {
      return NextResponse.json(
        { success: false, error: "Nama dan Nomor Identitas (NIS/NIP) wajib diisi" },
        { status: 400 }
      );
    }

    const cleanIdentifier = String(identifier).trim();
    const cleanRole = ["super_admin", "guru", "murid"].includes(role) ? role : "murid";
    const cleanEmail = email ? String(email).trim() : `${cleanIdentifier}@smk.sch.id`;
    const userId =
      body.id ||
      `usr-${cleanRole}-${cleanIdentifier.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}`;

    const savedUser = upsertRegisteredUser({
      id: userId,
      name: name.trim(),
      identifier: cleanIdentifier,
      role: cleanRole,
      email: cleanEmail,
      kelas,
      isActive: true,
    });

    if (dbStatus.connected) {
      await queryMySQL(
        `INSERT INTO profiles (id, full_name, role, identifier, email, is_active)
         VALUES (?, ?, ?, ?, ?, 1)
         ON DUPLICATE KEY UPDATE
           full_name = VALUES(full_name),
           role = VALUES(role),
           email = VALUES(email),
           is_active = 1`,
        [userId, name.trim(), cleanRole, cleanIdentifier, cleanEmail]
      );

      if (cleanRole === "murid" && kelas) {
        const clsRes = await queryMySQL<{ id: string }>(
          "SELECT id FROM classes WHERE name = ? LIMIT 1",
          [kelas.trim()]
        );
        if (clsRes.success && clsRes.data && clsRes.data.length > 0) {
          const classId = clsRes.data[0].id;
          await queryMySQL(
            `INSERT INTO class_members (class_id, user_id, member_role)
             VALUES (?, ?, 'murid')
             ON DUPLICATE KEY UPDATE member_role = 'murid'`,
            [classId, userId]
          );
        }
      }

      const logId = randomUUID();
      await queryMySQL(
        `INSERT INTO activity_logs (id, user_id, action, entity, entity_id, meta)
         VALUES (?, 'usr-admin-01', 'UPSERT_USER', 'profiles', ?, ?)`,
        [
          logId,
          userId,
          JSON.stringify({ name: name.trim(), role: cleanRole, identifier: cleanIdentifier, kelas }),
        ]
      );
    }

    return NextResponse.json({
      success: true,
      message: `Pengguna ${name} berhasil disimpan`,
      user: savedUser,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { searchParams } = new URL(req.url);
    const id = body.id || searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID pengguna wajib disertakan" },
        { status: 400 }
      );
    }

    // Hindari menghapus admin utama
    if (id === "usr-admin-01") {
      return NextResponse.json(
        { success: false, error: "Akun Super Admin utama tidak dapat dihapus" },
        { status: 403 }
      );
    }

    deleteRegisteredUser(id);

    const dbStatus = await checkMySQLStatus();
    if (dbStatus.connected) {
      await queryMySQL("DELETE FROM profiles WHERE id = ?", [id]);

      const logId = randomUUID();
      await queryMySQL(
        `INSERT INTO activity_logs (id, user_id, action, entity, entity_id, meta)
         VALUES (?, 'usr-admin-01', 'DELETE_USER', 'profiles', ?, ?)`,
        [logId, id, JSON.stringify({ deletedUserId: id })]
      );
    }

    return NextResponse.json({
      success: true,
      message: `Pengguna berhasil dihapus`,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
