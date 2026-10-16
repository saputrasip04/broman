import { NextRequest, NextResponse } from "next/server";
import { queryMySQL, checkMySQLStatus } from "@/lib/db/mysql";

export async function GET() {
  try {
    const dbStatus = await checkMySQLStatus();
    if (!dbStatus.connected) {
      return NextResponse.json({
        success: true,
        source: "memory_fallback",
        grants: {},
      });
    }

    // Ambil matriks hak akses yang aktif dari tabel access_grants dengan join classes & babs
    const res = await queryMySQL<{
      className: string;
      babCode: string;
      can_edit: number;
    }>(
      `SELECT c.name as className, b.code as babCode, g.can_edit
       FROM access_grants g
       INNER JOIN classes c ON g.class_id = c.id
       INNER JOIN babs b ON g.bab_id = b.id`
    );

    const grantsMap: Record<string, boolean> = {};

    if (res.success && res.data) {
      for (const row of res.data) {
        if (row.className && row.babCode) {
          const key = `${row.className}_${row.babCode}`;
          grantsMap[key] = true;
        }
      }
    }

    return NextResponse.json({
      success: true,
      source: "mysql_xampp",
      grants: grantsMap,
      count: Object.keys(grantsMap).length,
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
    if (!dbStatus.connected) {
      return NextResponse.json(
        { success: false, error: "Database MySQL tidak terhubung" },
        { status: 503 }
      );
    }

    // Mendukung single toggle atau batch update
    const items: { className: string; elemenCode: string; granted: boolean }[] = [];

    if (body.items && Array.isArray(body.items)) {
      for (const item of body.items) {
        if (item.className && item.elemenCode && typeof item.granted === "boolean") {
          items.push(item);
        }
      }
    } else if (body.className && body.elemenCode && typeof body.granted === "boolean") {
      items.push({
        className: body.className,
        elemenCode: body.elemenCode,
        granted: body.granted,
      });
    } else if (body.grants && typeof body.grants === "object") {
      for (const [key, val] of Object.entries(body.grants)) {
        const parts = key.split("_");
        if (parts.length >= 2) {
          const elemenCode = parts[parts.length - 1];
          const className = parts.slice(0, parts.length - 1).join("_");
          items.push({
            className,
            elemenCode,
            granted: Boolean(val),
          });
        }
      }
    }

    if (items.length === 0) {
      return NextResponse.json(
        { success: false, error: "Data hak akses tidak valid." },
        { status: 400 }
      );
    }

    let processedCount = 0;

    for (const item of items) {
      // 1. Cari atau buat class_id jika belum ada
      const classSlug = item.className.toLowerCase().replace(/[^a-z0-9]/g, "-");
      const classId = `cls-${classSlug}`;
      const babId = `bab-${item.elemenCode.toLowerCase()}`;
      const grantId = `ag-${classSlug}-${item.elemenCode.toLowerCase()}`;

      // Pastikan kelas ada di tabel classes
      await queryMySQL(
        `INSERT INTO classes (id, name, created_at)
         VALUES (?, ?, NOW())
         ON DUPLICATE KEY UPDATE name = VALUES(name)`,
        [classId, item.className]
      );

      if (item.granted) {
        // Berikan izin akses
        await queryMySQL(
          `INSERT INTO access_grants (id, class_id, bab_id, can_edit, granted_by, created_at)
           VALUES (?, ?, ?, 1, 'usr-admin-01', NOW())
           ON DUPLICATE KEY UPDATE can_edit = 1`,
          [grantId, classId, babId]
        );
      } else {
        // Cabut izin akses
        await queryMySQL(
          `DELETE FROM access_grants WHERE class_id = ? AND bab_id = ?`,
          [classId, babId]
        );
      }

      processedCount++;
    }

    // Catat ke activity_logs
    queryMySQL(
      "INSERT INTO activity_logs (action, entity, entity_id, meta) VALUES (?, ?, ?, ?)",
      [
        "UPDATE_ACCESS_GRANTS",
        "access_grants",
        items[0]?.className || "batch",
        JSON.stringify({ updatedCount: items.length, timestamp: new Date().toISOString() }),
      ]
    ).catch(() => {});

    return NextResponse.json({
      success: true,
      message: `Berhasil memperbarui ${processedCount} izin akses ke database MySQL.`,
      processedCount,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
