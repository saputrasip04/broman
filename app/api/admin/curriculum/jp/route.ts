import { NextRequest, NextResponse } from "next/server";
import { queryMySQL, checkMySQLStatus } from "@/lib/db/mysql";
import { ALL_ELEMEN } from "@/lib/data/curriculum";

export async function GET() {
  try {
    const dbStatus = await checkMySQLStatus();
    if (!dbStatus.connected) {
      // Fallback data dari ALL_ELEMEN
      const defaultData = Object.entries(ALL_ELEMEN).map(([code, el]) => ({
        code,
        hours: el.hours || 18,
      }));
      return NextResponse.json({
        success: true,
        source: "memory_fallback",
        data: defaultData,
      });
    }

    const res = await queryMySQL<{ code: string; hours_allocation: number }>(
      "SELECT code, hours_allocation FROM babs ORDER BY order_no ASC"
    );

    if (!res.success || !res.data || res.data.length === 0) {
      const defaultData = Object.entries(ALL_ELEMEN).map(([code, el]) => ({
        code,
        hours: el.hours || 18,
      }));
      return NextResponse.json({
        success: true,
        source: "memory_fallback",
        data: defaultData,
      });
    }

    const formatted = res.data.map((r) => ({
      code: r.code,
      hours: Number(r.hours_allocation),
    }));

    return NextResponse.json({
      success: true,
      source: "mysql_xampp",
      data: formatted,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const updates: { code: string; hours: number }[] = [];

    if (Array.isArray(body.updates)) {
      for (const item of body.updates) {
        if (item.code && typeof item.hours === "number" && item.hours > 0) {
          updates.push({ code: String(item.code).toUpperCase(), hours: Math.round(item.hours) });
        }
      }
    } else if (body.code && typeof body.hours === "number" && body.hours > 0) {
      updates.push({ code: String(body.code).toUpperCase(), hours: Math.round(body.hours) });
    }

    if (updates.length === 0) {
      return NextResponse.json(
        { success: false, error: "Data pembaruan JP tidak valid. Minimal tentukan kode elemen dan alokasi JP (> 0)." },
        { status: 400 }
      );
    }

    const dbStatus = await checkMySQLStatus();
    let updatedInDb = 0;

    if (dbStatus.connected) {
      for (const u of updates) {
        const el = ALL_ELEMEN[u.code];
        const babId = `bab-${u.code.toLowerCase()}`;
        const elemenId = `elm-${u.code.toLowerCase()}`;
        const mapelId = u.code.startsWith("E") ? "mpl-dbp-01" : "mpl-pspt-01";
        const orderNo = parseInt(u.code.replace(/[EFP]/g, ""), 10) || 1;
        const title = el?.title || `Elemen ${u.code}`;
        const summary = el?.summary || "";

        // Pastikan record elemen ada terlebih dahulu
        await queryMySQL(
          `INSERT INTO elemen (id, mapel_id, order_no, name, description, cp_text)
           VALUES (?, ?, ?, ?, ?, ?)
           ON DUPLICATE KEY UPDATE name = VALUES(name)`,
          [elemenId, mapelId, orderNo, title, el?.deskripsi || summary, el?.cpText || ""]
        );

        // Upsert record bab dengan jam alokasi JP baru
        const updateRes = await queryMySQL(
          `INSERT INTO babs (id, elemen_id, mapel_id, code, order_no, title, summary, hours_allocation, status)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'published')
           ON DUPLICATE KEY UPDATE hours_allocation = VALUES(hours_allocation)`,
          [babId, elemenId, mapelId, u.code, orderNo, title, summary, u.hours]
        );

        if (updateRes.success) {
          updatedInDb++;
          // Catat ke activity_logs jika tabel tersedia
          queryMySQL(
            "INSERT INTO activity_logs (action, entity, entity_id, meta) VALUES (?, ?, ?, ?)",
            [
              "UPDATE_JP",
              "babs",
              u.code,
              JSON.stringify({ hours: u.hours, timestamp: new Date().toISOString() }),
            ]
          ).catch(() => {});
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: `Berhasil memperbarui alokasi JP untuk ${updates.length} Elemen. (${updatedInDb} tersimpan ke MySQL)`,
      updates,
      updatedInDb,
      databaseConnected: dbStatus.connected,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
