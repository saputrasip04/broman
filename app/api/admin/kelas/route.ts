import { NextRequest, NextResponse } from "next/server";
import { queryMySQL, checkMySQLStatus } from "@/lib/db/mysql";
import { randomUUID } from "crypto";

export async function GET() {
  try {
    const dbStatus = await checkMySQLStatus();
    if (!dbStatus.connected) {
      return NextResponse.json({
        success: true,
        source: "memory_fallback",
        classes: [],
      });
    }

    const res = await queryMySQL<{
      id: string;
      name: string;
      fase: string;
      grade: string;
      waliKelas: string;
      academicYear: string;
      studentCount: number;
    }>(
      `SELECT 
         c.id, 
         c.name, 
         COALESCE(f.code, 'E') as fase,
         CASE 
           WHEN c.name LIKE 'X %' THEN 'Kelas X'
           WHEN c.name LIKE 'XI %' THEN 'Kelas XI'
           WHEN c.name LIKE 'XII %' THEN 'Kelas XII'
           ELSE 'Kelas X'
         END as grade,
         COALESCE(p.full_name, 'Belum Ditentukan') as waliKelas,
         COALESCE(ay.name, '2026/2027') as academicYear,
         (SELECT COUNT(*) FROM class_members cm WHERE cm.class_id = c.id AND cm.member_role = 'murid') as studentCount
       FROM classes c
       LEFT JOIN fases f ON c.fase_id = f.id
       LEFT JOIN academic_years ay ON c.academic_year_id = ay.id
       LEFT JOIN profiles p ON c.homeroom_teacher_id = p.id
       ORDER BY c.name ASC`
    );

    return NextResponse.json({
      success: true,
      source: "mysql_xampp",
      classes: res.success && res.data ? res.data : [],
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

    const { name, fase = "E", waliKelas } = body;
    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { success: false, error: "Nama kelas wajib diisi" },
        { status: 400 }
      );
    }

    // Tentukan fase_id
    const faseId = fase.toUpperCase() === "F" ? "fas-f-01" : "fas-e-01";

    // Tentukan academic_year_id aktif
    let academicYearId = "ay-2026-ganjil";
    const ayRes = await queryMySQL<{ id: string }>(
      "SELECT id FROM academic_years WHERE is_active = 1 LIMIT 1"
    );
    if (ayRes.success && ayRes.data && ayRes.data.length > 0) {
      academicYearId = ayRes.data[0].id;
    }

    // Cari guru jika nama wali kelas diisi
    let homeroomTeacherId: string | null = null;
    if (waliKelas && typeof waliKelas === "string" && waliKelas.trim() !== "") {
      const teacherRes = await queryMySQL<{ id: string }>(
        "SELECT id FROM profiles WHERE (full_name LIKE ? OR identifier = ?) AND role = 'guru' LIMIT 1",
        [`%${waliKelas.trim()}%`, waliKelas.trim()]
      );
      if (teacherRes.success && teacherRes.data && teacherRes.data.length > 0) {
        homeroomTeacherId = teacherRes.data[0].id;
      }
    }

    // Buat slug/id kelas yang konsisten
    const classSlug = "cls-" + name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
    const classId = body.id || classSlug;

    // Simpan ke tabel classes
    await queryMySQL(
      `INSERT INTO classes (id, academic_year_id, name, fase_id, homeroom_teacher_id)
       VALUES (?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         name = VALUES(name),
         fase_id = VALUES(fase_id),
         homeroom_teacher_id = COALESCE(VALUES(homeroom_teacher_id), homeroom_teacher_id)`,
      [classId, academicYearId, name.trim(), faseId, homeroomTeacherId]
    );

    // Catat log aktivitas
    const logId = randomUUID();
    await queryMySQL(
      `INSERT INTO activity_logs (id, user_id, action, entity, entity_id, meta)
       VALUES (?, 'usr-admin-01', 'UPSERT_CLASS', 'classes', ?, ?)`,
      [
        logId,
        classId,
        JSON.stringify({ name: name.trim(), fase, waliKelas, classId }),
      ]
    );

    return NextResponse.json({
      success: true,
      message: `Kelas ${name} berhasil disimpan ke basis data MySQL`,
      class: {
        id: classId,
        name: name.trim(),
        fase: fase.toUpperCase(),
        waliKelas: waliKelas || "Belum Ditentukan",
        academicYear: "2026/2027 Ganjil",
        studentCount: 0,
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const dbStatus = await checkMySQLStatus();
    if (!dbStatus.connected) {
      return NextResponse.json(
        { success: false, error: "Database MySQL tidak terhubung" },
        { status: 503 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const { searchParams } = new URL(req.url);
    const id = body.id || searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID kelas wajib disertakan" },
        { status: 400 }
      );
    }

    // Hapus kelas (class_members & access_grants cascades)
    await queryMySQL("DELETE FROM classes WHERE id = ?", [id]);

    // Catat log aktivitas
    const logId = randomUUID();
    await queryMySQL(
      `INSERT INTO activity_logs (id, user_id, action, entity, entity_id, meta)
       VALUES (?, 'usr-admin-01', 'DELETE_CLASS', 'classes', ?, ?)`,
      [logId, id, JSON.stringify({ deletedClassId: id })]
    );

    return NextResponse.json({
      success: true,
      message: `Kelas berhasil dihapus dari database MySQL`,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
