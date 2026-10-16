"use client";

import Link from "next/link";
import {
  Film,
  Tv,
  Clock,
  ArrowRight,
  Flame,
  ClipboardCheck,
  FileSpreadsheet,
  Award,
  Sparkles,
  Timer,
  CheckCircle2,
} from "lucide-react";
import { useMenuVisibilityStore } from "@/lib/data/menu-store";
import { useCurriculumStore } from "@/lib/data/curriculum-store";

export default function StudentDashboardPage() {
  const menuFlags = useMenuVisibilityStore();
  const storedCurriculum = useCurriculumStore();

  const rawFases = [
    {
      code: "E",
      title: "Fase E (Kelas X) — Dasar-dasar Broadcasting dan Perfilman",
      description: "4 Elemen materi dasar industri, regulasi, pengoperasian alat audio visual, dan simulasi proses produksi.",
      babsCount: 4,
      babs: [
        { code: "E1", title: "Dunia Kerja, Profesi, dan Bisnis di Bidang Broadcasting & Perfilman", hours: 18, progress: 100 },
        { code: "E2", title: "Perkembangan Media, Teknologi, dan Industri serta Regulasi", hours: 18, progress: 75 },
        { code: "E3", title: "Teknik Dasar Pengoperasian Peralatan Audio Visual", hours: 24, progress: 30 },
        { code: "E4", title: "Teknik Dasar Proses Produksi dan Media Baru (New Media)", hours: 24, progress: 0 },
      ],
    },
    {
      code: "F",
      title: "Fase F (Kelas XI & XII) — Produksi dan Siaran Program Televisi",
      description: "8 Elemen kejuruan produksi televisi: manajemen, naskah, sutradara, kamera & lighting, audio, artistik, editing, dan live streaming.",
      babsCount: 8,
      babs: [
        { code: "F1", title: "Manajemen Produksi dan Siaran Program Televisi", hours: 36, progress: 0 },
        { code: "F2", title: "Penulisan Naskah Televisi", hours: 36, progress: 0 },
        { code: "F3", title: "Penyutradaraan Televisi", hours: 40, progress: 0 },
        { code: "F4", title: "Tata Kamera dan Tata Cahaya Televisi", hours: 40, progress: 0 },
        { code: "F5", title: "Tata Suara Televisi", hours: 32, progress: 0 },
        { code: "F6", title: "Tata Artistik Televisi", hours: 32, progress: 0 },
        { code: "F7", title: "Editing Audio dan Video", hours: 36, progress: 0 },
        { code: "F8", title: "Penyiaran Online", hours: 28, progress: 0 },
      ],
    },
    {
      code: "P",
      title: "Mata Pelajaran Pilihan (Peminatan) — Desain 2D & 3D",
      description: "2 Elemen kejuruan pilihan: Peminatan Kelas XI 3D (Blender) dan Peminatan Kelas XII 2D (CorelDraw & Canva).",
      babsCount: 2,
      babs: [
        { code: "P1", title: "Peminatan Kelas XI (Desain 2 Dimensi dan 3 Dimensi) 3D", hours: 72, progress: 0 },
        { code: "P2", title: "Peminatan Kelas XII (Desain 2 Dimensi dan 3 Dimensi) 2D", hours: 72, progress: 0 },
      ],
    },
  ];

  const fases = rawFases.map((fase) => {
    const enrichedBabs = fase.babs.map((b) => ({
      ...b,
      hours: storedCurriculum[b.code]?.hours ?? b.hours,
    }));
    const totalHours = enrichedBabs.reduce((acc, curr) => acc + curr.hours, 0);
    return {
      ...fase,
      totalHours,
      babs: enrichedBabs,
    };
  });

  // Menu Fase E, Fase F, dan Peminatan selalu tampil utuh dan terstruktur untuk pembelajaran siswa
  const activeFases = fases;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Student Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-850 to-indigo-950/40 p-6 sm:p-8 backdrop-blur-xl mb-10 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                Siswa Aktif
              </span>
              <span className="text-xs text-slate-400">Kelas: X BCF 1</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Halo, Pelajar Broadcasting! 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Lanjutkan petualangan belajarmu di dunia pertelevisian dan perfilman. Selesaikan materi, kuis formatif C1-C6, dan praktikum LKPD.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-950/60 border border-slate-800 rounded-2xl p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Flame className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Streak Belajar</div>
              <div className="text-lg font-bold text-white">4 Hari Berturut</div>
              <div className="text-[11px] text-emerald-400 font-medium">Top 15% Kelas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fase List */}
      <div className="space-y-12">
        {activeFases.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/30 p-8 text-center text-slate-400">
            Kurikulum pembelajaran saat ini dinonaktifkan sementara oleh Administrator.
          </div>
        ) : (
          activeFases.map((fase) => (
          <div key={fase.code} className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  {fase.code === "E" ? (
                    <Film className="h-6 w-6 text-sky-400" />
                  ) : fase.code === "F" ? (
                    <Tv className="h-6 w-6 text-indigo-400" />
                  ) : (
                    <Sparkles className="h-6 w-6 text-amber-400" />
                  )}
                  {fase.title}
                </h2>
                <p className="text-xs text-slate-400 mt-1">{fase.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 font-medium">
                  Total {fase.babsCount} Elemen • {fase.totalHours} JP
                </span>
                <Link
                  href={`/belajar/${fase.code}`}
                  className="inline-flex items-center gap-1 rounded-lg border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-400 hover:bg-sky-500/20 hover:text-white transition-colors"
                >
                  <span>{fase.code === "P" ? "Buka Halaman Peminatan" : `Buka Halaman Fase ${fase.code}`}</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Elemen Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {fase.babs.map((bab) => (
                <div
                  key={bab.code}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 backdrop-blur-md flex flex-col justify-between hover:border-sky-500/40 hover:bg-slate-850 transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`rounded-lg px-2 py-0.5 text-xs font-bold ${
                        bab.code === "P1"
                          ? "bg-amber-500/10 border border-amber-500/20 text-amber-400"
                          : bab.code === "P2"
                          ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                          : "bg-sky-500/10 border border-sky-500/20 text-sky-400"
                      }`}>
                        ELEMEN {bab.code}
                      </span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {bab.hours} JP
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white line-clamp-2 mb-3">
                      {bab.title}
                    </h3>

                    {/* Progress Bar */}
                    <div className="space-y-1 mt-4">
                      <div className="flex justify-between text-[11px] text-slate-400">
                        <span>Progres Belajar</span>
                        <span className="font-semibold text-sky-400">{bab.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"
                          style={{ width: `${bab.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      {bab.progress === 100
                        ? "Selesai"
                        : bab.progress > 0
                        ? "Sedang Berjalan"
                        : "Belum Dimulai"}
                    </span>
                    <Link
                      href={`/belajar/${fase.code}/${bab.code}`}
                      className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1"
                    >
                      Buka Materi
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          ))
        )}
      </div>

      {/* Seksi Assesment (US & TKA) di Bagian Bawah Halaman Belajar */}
      {menuFlags.menu_assesment && (menuFlags.menu_us || menuFlags.menu_tka) && (
        <section id="assesment" className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 px-3 py-0.5 text-xs font-semibold text-sky-400">
                  <ClipboardCheck className="h-3.5 w-3.5" />
                  Menu Assesment & Evaluasi Daring
                </span>
                <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-xs font-semibold text-amber-400">
                  Kurikulum Merdeka SMK
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Assesment: {menuFlags.menu_us && menuFlags.menu_tka ? "US (Ujian Semester) & TKA" : menuFlags.menu_us ? "US (Ujian Semester)" : "TKA (Tes Kompetensi Akademik)"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-1">
                Setelah menyelesaikan seluruh materi pembelajaran Fase E dan Fase F, uji capaian kompetensi Anda melalui modul evaluasi resmi: Ujian Semester (US) dan Tes Kompetensi Akademik (TKA).
              </p>
            </div>

            <Link
              href="/assesment"
              className="self-start sm:self-auto inline-flex items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white transition-all"
            >
              <span>Buka Portal Lengkap</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Kartu Menu Utama Assesment */}
          <div className={`grid grid-cols-1 ${menuFlags.menu_us && menuFlags.menu_tka ? "md:grid-cols-2" : "max-w-2xl"} gap-6`}>
            {/* KARTU 1: US (Ujian Semester) */}
            {menuFlags.menu_us && (
              <div className="relative group rounded-3xl border border-sky-500/30 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-sky-950/20 p-6 sm:p-8 backdrop-blur-xl hover:border-sky-400/60 transition-all duration-300 shadow-xl hover:shadow-sky-500/10 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 shadow-lg shadow-sky-500/20">
                      <FileSpreadsheet className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-sky-500/10 border border-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-400">
                      Evaluasi Akhir Semester
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      US — Ujian Semester
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      Ujian akhir semester komprehensif berbasis 12 Elemen Capaian Pembelajaran. Tersedia paket <strong>Fase E (Kelas X)</strong> dan <strong>Fase F (Kelas XI/XII)</strong> dengan butir soal C1–C6.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                      <span>Soal C1–C6 Bloom (Pengetahuan, Pemahaman, Analisis Kasus)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                      <span>Timer otomatis, indikator ragu-ragu, dan nilai rapor instan</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Timer className="h-4 w-4 text-slate-500" />
                    <span>Durasi: 45 - 60 Menit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href="/assesment/us?fase=E"
                      className="rounded-xl border border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/20 px-3 py-2 text-xs font-semibold text-sky-300 transition-colors"
                    >
                      Fase E (X)
                    </Link>
                    <Link
                      href="/assesment/us?fase=F"
                      className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-sky-500/20 transition-all"
                    >
                      Fase F (XI/XII) →
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* KARTU 2: TKA (Tes Kompetensi Akademik) */}
            {menuFlags.menu_tka && (
              <div className="relative group rounded-3xl border border-amber-500/30 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-amber-950/20 p-6 sm:p-8 backdrop-blur-xl hover:border-amber-400/60 transition-all duration-300 shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-lg shadow-amber-500/20">
                      <Award className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-400">
                      Uji Kemahiran Vokasi
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      TKA — Tes Kompetensi Akademik
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      Simulasi tes standarisasi kompetensi kejuruan vokasi broadcasting & perfilman dengan 3 subtes terpadu: <strong>Regulasi Penyiaran</strong>, <strong>Logika Teknis AV</strong>, dan <strong>Manajemen Studio</strong>.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>Studi kasus riil industri TV & pemecahan masalah studio</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>Rapor Radar Kemahiran Vokasi & Predikat Kelulusan Industri</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Timer className="h-4 w-4 text-slate-500" />
                    <span>Durasi: 45 Menit CBT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href="/assesment/tka"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-amber-500/20 hover:from-amber-400 hover:to-orange-500 transition-all"
                    >
                      <span>Mulai Tes TKA</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
