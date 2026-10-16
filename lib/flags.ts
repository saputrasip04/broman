import { queryMySQL } from "@/lib/db/mysql";
import { createClient } from "@/lib/supabase/server";
import { UserRole } from "@/lib/types/database";

export interface FlagContext {
  role?: UserRole;
  fase?: string;
  babId?: string;
}

interface FlagRecord {
  key: string;
  scope: string;
  scope_ref: string | null;
  is_enabled: boolean | number;
}

/**
 * Resolusi status Feature Flag berdasarkan urutan prioritas:
 * Elemen > Fase > Role > Global.
 * Mendukung mode Hybrid: Mengutamakan MySQL XAMPP jika aktif,
 * dengan fallback ke Supabase atau default aktif jika database belum aktif.
 */
export async function isEnabled(
  key: string,
  ctx: FlagContext = {}
): Promise<boolean> {
  // 1. Coba baca dari MySQL XAMPP
  try {
    const mysqlRes = await queryMySQL<FlagRecord>(
      "SELECT `key`, `scope`, `scope_ref`, `is_enabled` FROM `feature_flags` WHERE `key` = ?",
      [key]
    );

    if (mysqlRes.success && mysqlRes.data.length > 0) {
      const flags = mysqlRes.data;

      // a. Cek prioritas tertinggi: BAB
      if (ctx.babId) {
        const babFlag = flags.find(
          (f) => f.scope === "bab" && f.scope_ref === ctx.babId
        );
        if (babFlag !== undefined) return Boolean(babFlag.is_enabled);
      }

      // b. Cek prioritas kedua: Fase
      if (ctx.fase) {
        const faseFlag = flags.find(
          (f) => f.scope === "fase" && f.scope_ref === ctx.fase
        );
        if (faseFlag !== undefined) return Boolean(faseFlag.is_enabled);
      }

      // c. Cek prioritas ketiga: Role
      if (ctx.role) {
        const roleFlag = flags.find(
          (f) => f.scope === "role" && f.scope_ref === ctx.role
        );
        if (roleFlag !== undefined) return Boolean(roleFlag.is_enabled);
      }

      // d. Cek prioritas dasar: Global
      const globalFlag = flags.find((f) => f.scope === "global");
      if (globalFlag !== undefined) return Boolean(globalFlag.is_enabled);

      return true;
    }
  } catch {
    // Lanjut ke fallback di bawah
  }

  // 2. Fallback: Supabase (jika dikonfigurasi)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  if (supabaseUrl && !supabaseUrl.includes("placeholder")) {
    try {
      const supabase = await createClient();
      const { data: flags, error } = await supabase
        .from("feature_flags")
        .select("key, scope, scope_ref, is_enabled")
        .eq("key", key);

      if (!error && flags && flags.length > 0) {
        if (ctx.babId) {
          const babFlag = flags.find(
            (f) => f.scope === "bab" && f.scope_ref === ctx.babId
          );
          if (babFlag !== undefined) return Boolean(babFlag.is_enabled);
        }
        if (ctx.fase) {
          const faseFlag = flags.find(
            (f) => f.scope === "fase" && f.scope_ref === ctx.fase
          );
          if (faseFlag !== undefined) return Boolean(faseFlag.is_enabled);
        }
        if (ctx.role) {
          const roleFlag = flags.find(
            (f) => f.scope === "role" && f.scope_ref === ctx.role
          );
          if (roleFlag !== undefined) return Boolean(roleFlag.is_enabled);
        }
        const globalFlag = flags.find((f) => f.scope === "global");
        if (globalFlag !== undefined) return Boolean(globalFlag.is_enabled);
      }
    } catch {
      // Abaikan error fallback
    }
  }

  // Default jika belum ada flag di DB adalah aktif
  return true;
}

/**
 * Helper untuk route handlers / server actions yang mewajibkan fitur aktif
 */
export async function requireFeature(key: string, ctx: FlagContext = {}) {
  const active = await isEnabled(key, ctx);
  if (!active) {
    throw new Error(`Fitur '${key}' sedang dinonaktifkan oleh Administrator.`);
  }
}
