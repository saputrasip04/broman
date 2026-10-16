import Link from "next/link";
import { ArrowLeft, Film, Tv, Clock, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { queryMySQL } from "@/lib/db/mysql";

export const instant = false;

export function generateStaticParams() {
  return [{ fase: "E" }, { fase: "F" }, { fase: "P" }];
}

export default async function FaseDetailPage({
  params,
}: {
  params: Promise<{ fase: string }>;
}) {
  const { fase } = await params;
  const isFaseE = fase.toUpperCase() === "E";
  const isFaseP = fase.toUpperCase() === "P";

  const faseTitle = isFaseE
    ? "Fase E (Kelas X) — Dasar-dasar Broadcasting dan Perfilman"
    : isFaseP
    ? "Mata Pelajaran Pilihan (Peminatan) — Desain 2 Dimensi & 3 Dimensi"
    : "Fase F (Kelas XI & XII) — Produksi dan Siaran Program Televisi";

  const rawBabs = isFaseE
    ? [
        { code: "E1", title: "Dunia Kerja, Profesi, dan Bisnis di Bidang Broadcasting dan Perfilman", hours: 18 },
        { code: "E2", title: "Perkembangan Media, Teknologi, Industri & Regulasi", hours: 18 },
        { code: "E3", title: "Teknik Dasar Pengoperasian Peralatan Audio Visual", hours: 24 },
        { code: "E4", title: "Teknik Dasar Proses Produksi & New Media", hours: 24 },
      ]
    : isFaseP
    ? [
        { code: "P1", title: "Peminatan Kelas XI (Desain 2 Dimensi dan 3 Dimensi) 3D", hours: 72 },
        { code: "P2", title: "Peminatan Kelas XII (Desain 2 Dimensi dan 3 Dimensi) 2D", hours: 72 },
      ]
    : [
        { code: "F1", title: "Manajemen Produksi dan Siaran Program Televisi", hours: 36 },
        { code: "F2", title: "Penulisan Naskah Televisi", hours: 36 },
        { code: "F3", title: "Penyutradaraan Televisi", hours: 40 },
        { code: "F4", title: "Tata Kamera dan Tata Cahaya Televisi", hours: 40 },
        { code: "F5", title: "Tata Suara Televisi", hours: 32 },
        { code: "F6", title: "Tata Artistik Televisi", hours: 32 },
        { code: "F7", title: "Editing Audio dan Video", hours: 36 },
        { code: "F8", title: "Penyiaran Online", hours: 28 },
      ];

  // Ambil alokasi JP teranyar dari MySQL jika tersedia
  let dbHoursMap: Record<string, number> = {};
  try {
    const dbRes = await queryMySQL<{ code: string; hours_allocation: number }>(
      "SELECT code, hours_allocation FROM babs"
    );
    if (dbRes.success && dbRes.data) {
      dbRes.data.forEach((r) => {
        dbHoursMap[r.code] = Number(r.hours_allocation);
      });
    }
  } catch {}

  const babs = rawBabs.map((b) => ({
    ...b,
    hours: dbHoursMap[b.code] ?? b.hours,
  }));

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/belajar"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-sky-400 transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali ke Daftar Fase & Peminatan
      </Link>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md mb-8">
        <div className="flex items-center gap-3 mb-2">
          {isFaseE ? (
            <Film className="h-6 w-6 text-sky-400" />
          ) : isFaseP ? (
            <Sparkles className="h-6 w-6 text-amber-400" />
          ) : (
            <Tv className="h-6 w-6 text-indigo-400" />
          )}
          <h1 className="text-2xl font-bold text-white">{faseTitle}</h1>
        </div>
        <p className="text-xs text-slate-400 max-w-2xl">
          Seluruh Elemen pada program ini telah diselaraskan dengan Capaian Pembelajaran (CP) resmi. Pilih salah satu Elemen untuk memulai materi pembelajaran, kuis interaktif, dan praktikum.
        </p>
      </div>

      <div className="space-y-4">
        {babs.map((bab) => (
          <Link
            key={bab.code}
            href={`/belajar/${fase.toUpperCase()}/${bab.code}`}
            className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/50 p-4 sm:p-5 hover:border-sky-500/40 hover:bg-slate-850 transition-all duration-200 group"
          >
            <div className="flex items-center gap-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold text-sm border ${
                bab.code === "P1"
                  ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                  : bab.code === "P2"
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  : "bg-sky-500/10 text-sky-400 border-sky-500/20"
              }`}>
                {bab.code}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-sky-300 transition-colors">
                  {bab.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-slate-500" />
                    {bab.hours} Jam Pelajaran
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Materi Siap
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 group-hover:translate-x-1 transition-transform">
              <span>Buka</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
