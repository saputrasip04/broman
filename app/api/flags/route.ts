import { NextResponse } from "next/server";
import { isEnabled } from "@/lib/flags";
import { toggleFeatureFlagSchema } from "@/lib/schemas/flags";
import { queryMySQL } from "@/lib/db/mysql";
import { createClient } from "@/lib/supabase/server";
import { UserRole } from "@/lib/types/database";

const DEFAULT_FLAGS = [
  { id: "ff-1", key: "materi", scope: "global", scope_ref: null, is_enabled: true, label: "Materi Belajar", description: "Modul materi & slide deck pembelajaran" },
  { id: "ff-2", key: "video", scope: "global", scope_ref: null, is_enabled: true, label: "Video Pembelajaran", description: "Video edukasi kejuruan broadcasting" },
  { id: "ff-3", key: "kuis", scope: "global", scope_ref: null, is_enabled: true, label: "Kuis Interaktif", description: "Kuis evaluasi formatif" },
  { id: "ff-4", key: "game", scope: "global", scope_ref: null, is_enabled: true, label: "Mini Game Edukasi", description: "Game edukasi interaktif" },
  { id: "ff-5", key: "ulangan", scope: "global", scope_ref: null, is_enabled: true, label: "Ulangan & CBT", description: "Asesmen sumatif & ujian online" },
  { id: "ff-6", key: "leaderboard", scope: "global", scope_ref: null, is_enabled: true, label: "Papan Peringkat", description: "Leaderboard prestasi murid" },
  { id: "ff-7", key: "bank_soal", scope: "global", scope_ref: null, is_enabled: true, label: "Bank Soal", description: "Pusat bank soal dan CBT" },
  { id: "ff-8", key: "lkpd", scope: "global", scope_ref: null, is_enabled: true, label: "LKPD", description: "Lembar Kerja Siswa" },
  { id: "ff-9", key: "rpm", scope: "global", scope_ref: null, is_enabled: true, label: "RPM (Guru)", description: "Rencana Pembelajaran Mendalam" },
  { id: "ff-10", key: "tka", scope: "global", scope_ref: null, is_enabled: true, label: "Simulasi TKA", description: "Tes Kompetensi Akademik / Kejuruan" },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");
  const fase = searchParams.get("fase") || undefined;
  const babId = searchParams.get("babId") || undefined;
  const rawRole = searchParams.get("role");
  const role: UserRole | undefined =
    rawRole === "super_admin" || rawRole === "guru" || rawRole === "murid"
      ? rawRole
      : undefined;

  if (key) {
    const active = await isEnabled(key, { fase, babId, role });
    return NextResponse.json({ key, is_enabled: active });
  }

  // 1. Coba ambil dari MySQL XAMPP
  try {
    const mysqlRes = await queryMySQL(
      "SELECT id, `key`, scope, scope_ref, is_enabled, label, description, updated_at FROM feature_flags ORDER BY `key` ASC"
    );

    if (mysqlRes.success && mysqlRes.data.length > 0) {
      const flags = mysqlRes.data.map((f: any) => ({
        ...f,
        is_enabled: Boolean(f.is_enabled),
      }));
      return NextResponse.json({ flags, source: "mysql_xampp" });
    }
  } catch {
    // Lanjut ke fallback
  }

  // 2. Fallback: Supabase jika dikonfigurasi
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  if (supabaseUrl && !supabaseUrl.includes("placeholder")) {
    try {
      const supabase = await createClient();
      const { data: flags, error } = await supabase.from("feature_flags").select("*");
      if (!error && flags && flags.length > 0) {
        return NextResponse.json({ flags, source: "supabase" });
      }
    } catch {
      // Abaikan
    }
  }

  return NextResponse.json({ flags: DEFAULT_FLAGS, source: "default_fallback" });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = toggleFeatureFlagSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { error: "Validasi gagal", details: validated.error.flatten() },
        { status: 400 }
      );
    }

    const { key, scope, scope_ref, is_enabled, label, description } = validated.data;
    const flagId = `ff-${key}-${scope}-${scope_ref || "global"}`;

    // 1. Coba simpan ke MySQL XAMPP
    try {
      const mysqlRes = await queryMySQL(
        `INSERT INTO feature_flags (id, \`key\`, scope, scope_ref, is_enabled, label, description, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, NOW())
         ON DUPLICATE KEY UPDATE
           is_enabled = VALUES(is_enabled),
           label = VALUES(label),
           description = VALUES(description),
           updated_at = NOW()`,
        [
          flagId,
          key,
          scope,
          scope_ref || null,
          is_enabled ? 1 : 0,
          label || key,
          description || "",
        ]
      );

      if (mysqlRes.success) {
        return NextResponse.json({
          success: true,
          savedTo: "mysql_xampp",
          flag: {
            id: flagId,
            key,
            scope,
            scope_ref: scope_ref || null,
            is_enabled,
            label: label || key,
            description: description || "",
            updated_at: new Date().toISOString(),
          },
        });
      }
    } catch {
      // Lanjut ke Supabase / memory fallback
    }

    // 2. Fallback: Supabase jika aktif
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
    if (supabaseUrl && !supabaseUrl.includes("placeholder")) {
      try {
        const supabase = await createClient();
        const { data, error } = await supabase
          .from("feature_flags")
          .upsert({
            key,
            scope,
            scope_ref: scope_ref || null,
            is_enabled,
            label,
            description,
            updated_at: new Date().toISOString(),
          })
          .select()
          .single();

        if (!error && data) {
          return NextResponse.json({ success: true, savedTo: "supabase", flag: data });
        }
      } catch {
        // Fallback ke response memori
      }
    }

    // 3. Fallback memori
    return NextResponse.json({
      success: true,
      savedTo: "memory_fallback",
      flag: {
        key,
        scope,
        scope_ref: scope_ref || null,
        is_enabled,
        label: label || key,
        description: description || "",
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
