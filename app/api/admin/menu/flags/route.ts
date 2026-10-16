import { NextRequest, NextResponse } from "next/server";
import { queryMySQL, checkMySQLStatus } from "@/lib/db/mysql";
import { DEFAULT_MENU_FLAGS, MenuVisibilityFlags } from "@/lib/data/menu-types";

export async function GET() {
  try {
    const dbStatus = await checkMySQLStatus();
    if (!dbStatus.connected) {
      return NextResponse.json({
        success: true,
        source: "memory_fallback",
        flags: DEFAULT_MENU_FLAGS,
      });
    }

    const res = await queryMySQL<{ key: string; is_enabled: number; label?: string }>(
      "SELECT `key`, is_enabled, label FROM feature_flags WHERE scope = 'global'"
    );

    const mergedFlags: Partial<MenuVisibilityFlags> = { ...DEFAULT_MENU_FLAGS };

    if (res.success && res.data) {
      for (const row of res.data) {
        if (row.key in DEFAULT_MENU_FLAGS) {
          (mergedFlags as any)[row.key] = Boolean(row.is_enabled);
        }
      }
    }

    return NextResponse.json({
      success: true,
      source: "mysql_xampp",
      flags: mergedFlags,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const updates: { key: string; is_enabled: boolean; label?: string }[] = [];

    if (body.flags && typeof body.flags === "object") {
      for (const [k, v] of Object.entries(body.flags)) {
        updates.push({
          key: k,
          is_enabled: Boolean(v),
        });
      }
    } else if (body.key && typeof body.is_enabled === "boolean") {
      updates.push({
        key: body.key,
        is_enabled: body.is_enabled,
        label: body.label,
      });
    }

    if (updates.length === 0) {
      return NextResponse.json(
        { success: false, error: "Data setting menu tidak valid." },
        { status: 400 }
      );
    }

    const dbStatus = await checkMySQLStatus();
    let updatedInDb = 0;

    if (dbStatus.connected) {
      for (const u of updates) {
        const flagId = `ff-${u.key}`;
        const label = u.label || u.key.replace("menu_", "").replace(/_/g, " ").toUpperCase();

        const res = await queryMySQL(
          `INSERT INTO feature_flags (id, \`key\`, scope, scope_ref, is_enabled, label, updated_at)
           VALUES (?, ?, 'global', NULL, ?, ?, NOW())
           ON DUPLICATE KEY UPDATE is_enabled = VALUES(is_enabled), updated_at = NOW()`,
          [flagId, u.key, u.is_enabled ? 1 : 0, label]
        );

        if (res.success) {
          updatedInDb++;
          // Catat ke activity_logs
          queryMySQL(
            "INSERT INTO activity_logs (action, entity, entity_id, meta) VALUES (?, ?, ?, ?)",
            [
              "UPDATE_MENU_FLAG",
              "feature_flags",
              u.key,
              JSON.stringify({ is_enabled: u.is_enabled, timestamp: new Date().toISOString() }),
            ]
          ).catch(() => {});
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: `Berhasil menyimpan ${updates.length} pengaturan menu ke database MySQL.`,
      updatedInDb,
      databaseConnected: dbStatus.connected,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
