import { NextResponse } from "next/server";
import { checkMySQLStatus, queryMySQL } from "@/lib/db/mysql";
import { ALL_ELEMEN } from "@/lib/data/curriculum";

export async function GET() {
  const status = await checkMySQLStatus();

  if (!status.connected) {
    return NextResponse.json({
      success: false,
      connected: false,
      message: status.message,
      summary: null,
    });
  }

  // Ambil ringkasan baris data per tabel penting
  const [profilesRes, babsRes, flagsRes, classesRes, questionsRes] = await Promise.all([
    queryMySQL("SELECT COUNT(*) as count FROM profiles"),
    queryMySQL("SELECT COUNT(*) as count FROM babs"),
    queryMySQL("SELECT COUNT(*) as count FROM feature_flags"),
    queryMySQL("SELECT COUNT(*) as count FROM classes"),
    queryMySQL("SELECT COUNT(*) as count FROM questions"),
  ]);

  return NextResponse.json({
    success: true,
    connected: true,
    host: `${status.host}:${status.port}`,
    database: status.database,
    tablesCount: status.tablesCount,
    summary: {
      profiles: profilesRes.data[0]?.count || 0,
      elemen_babs: babsRes.data[0]?.count || 0,
      feature_flags: flagsRes.data[0]?.count || 0,
      classes: classesRes.data[0]?.count || 0,
      questions: questionsRes.data[0]?.count || 0,
    },
    message: "MySQL XAMPP tersinkron dan siap digunakan.",
  });
}

export async function POST() {
  const status = await checkMySQLStatus();
  if (!status.connected) {
    return NextResponse.json(
      {
        success: false,
        error: "MySQL XAMPP tidak dapat dihubungi. Pastikan modul MySQL pada XAMPP Control Panel telah aktif (status RUNNING di port 3306).",
      },
      { status: 503 }
    );
  }

  try {
    // Sinkronisasi data 14 Elemen jika tabel babs masih kosong atau perlu diperbarui
    let syncedElemenCount = 0;
    for (const [code, elemen] of Object.entries(ALL_ELEMEN)) {
      const babId = `bab-${code.toLowerCase()}`;
      const elemenId = `elm-${code.toLowerCase()}`;
      const mapelId = elemen.fase === "E" ? "mpl-dbp-01" : "mpl-pspt-01";
      const orderNo = parseInt(code.replace(/[EFP]/, ""), 10) || 1;

      // Upsert elemen
      await queryMySQL(
        `INSERT INTO elemen (id, mapel_id, order_no, name, description, cp_text)
         VALUES (?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE name = VALUES(name), description = VALUES(description), cp_text = VALUES(cp_text)`,
        [elemenId, mapelId, orderNo, elemen.title, elemen.deskripsi || elemen.summary, elemen.cpText]
      );

      // Upsert bab
      await queryMySQL(
        `INSERT INTO babs (id, elemen_id, mapel_id, code, order_no, title, summary, hours_allocation, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'published')
         ON DUPLICATE KEY UPDATE title = VALUES(title), summary = VALUES(summary), hours_allocation = VALUES(hours_allocation)`,
        [babId, elemenId, mapelId, code, orderNo, elemen.title, elemen.summary, elemen.hours || 18]
      );
      syncedElemenCount++;
    }

    return NextResponse.json({
      success: true,
      message: `Sinkronisasi data ke MySQL XAMPP berhasil. ${syncedElemenCount} Elemen kurikulum tersinkron.`,
      timestamp: new Date().toISOString(),
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
