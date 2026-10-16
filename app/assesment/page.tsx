"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/lib/api-client";
import {
  ClipboardCheck,
  FileSpreadsheet,
  Award,
  Timer,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  KeyRound,
  Calendar,
  Layers,
  GraduationCap,
  Sparkles,
  BookOpen,
  Info,
} from "lucide-react";

export default function AssesmentHubPage() {
  const router = useRouter();
  const [tokenInput, setTokenInput] = useState("");
  const [tokenError, setTokenError] = useState("");
  const [userRole, setUserRole] = useState<string>("murid");

  useEffect(() => {
    fetch(apiUrl("/api/auth/me"))
      .then((res) => res.json())
      .then((data) => {
        if (data?.user?.role) setUserRole(data.user.role);
      })
      .catch(() => {});
  }, []);

  const isTeacherOrAdmin = userRole === "guru" || userRole === "super_admin";

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTokenError("");
    const cleaned = tokenInput.trim().toUpperCase();

    if (!cleaned) {
      setTokenError("Silakan masukkan token ujian terlebih dahulu.");
      return;
    }

    if (cleaned.startsWith("US") || cleaned.includes("SEMESTER")) {
      router.push(`/assesment/us?token=${encodeURIComponent(cleaned)}`);
    } else if (cleaned.startsWith("TKA") || cleaned.includes("AKADEMIK")) {
      router.push(`/assesment/tka?token=${encodeURIComponent(cleaned)}`);
    } else {
      // Default arahkan ke US dengan token terisi
      router.push(`/assesment/us?token=${encodeURIComponent(cleaned)}`);
    }
  };

  const activeSchedules = [
    {
      type: "US",
      title: "Ujian Akhir Semester Ganjil 2026 — Fase E (Kelas X)",
      scope: "Dasar Broadcasting: E1, E2, E3, E4",
      duration: "60 Menit",
      questionsCount: "25 Butir C1–C6",
      tokenHint: "US-E-2026",
      status: "Aktif",
      href: "/assesment/us?fase=E",
      color: "border-sky-500/30 bg-sky-500/10 text-sky-400",
    },
    {
      type: "US",
      title: "Ujian Akhir Semester Ganjil 2026 — Fase F (Kelas XI & XII)",
      scope: "Produksi Siaran TV: F1 s.d. F8",
      duration: "90 Menit",
      questionsCount: "40 Butir C1–C6",
      tokenHint: "US-F-2026",
      status: "Aktif",
      href: "/assesment/us?fase=F",
      color: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
    },
    {
      type: "TKA",
      title: "Simulasi TKA Kejuruan BCF Nasional 2026",
      scope: "3 Subtes Terpadu: Regulasi, Teknis AV, Manajemen Studio",
      duration: "45 Menit",
      questionsCount: "30 Butir Penalaran",
      tokenHint: "TKA-BCF-PRO",
      status: "Aktif",
      href: "/assesment/tka",
      color: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-850 to-indigo-950/50 p-6 sm:p-10 backdrop-blur-xl mb-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-400">
                <ClipboardCheck className="h-3.5 w-3.5" />
                Portal Assesment Terpadu
              </span>
              <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 text-xs font-semibold text-amber-400">
                Kurikulum Merdeka SMK
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pusat Assesment & Evaluasi Daring BroMan
            </h1>

            <p className="text-sm text-slate-300 leading-relaxed">
              Platform evaluasi belajar terstandarisasi untuk siswa Broadcasting & Perfilman SMK. 
              Pilih modul asesmen resmi: <strong>Ujian Semester (US)</strong> untuk capaian rapor berkala, atau <strong>Tes Kompetensi Akademik (TKA)</strong> untuk tolok ukur standar kemahiran vokasi industri.
            </p>
          </div>

          {/* Quick Token Launcher Card */}
          <div className="w-full md:w-80 rounded-2xl border border-slate-700/80 bg-slate-900/90 p-5 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-semibold text-white mb-2">
              <KeyRound className="h-4 w-4 text-amber-400" />
              <span>Mulai Cepat dengan Token</span>
            </div>
            <p className="text-[11px] text-slate-400 mb-3">
              Masukkan token yang dibagikan guru pengawas untuk langsung membuka sesi ujian.
            </p>

            <form onSubmit={handleTokenSubmit} className="space-y-2">
              <input
                type="text"
                placeholder="Contoh: US-E-2026 atau TKA-BCF-PRO"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs font-mono text-white placeholder-slate-500 uppercase focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all"
              />
              {tokenError && (
                <p className="text-[11px] text-rose-400">{tokenError}</p>
              )}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:from-sky-400 hover:to-indigo-500 transition-all shadow-md shadow-sky-500/20"
              >
                <span>Validasi & Buka Ujian</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Dua Pilihan Menu Assesment Utama: US dan TKA */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-sky-400" />
              Pilihan Menu Assesment
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Pilih jenis asesmen yang ingin Anda kerjakan atau simulasikan:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* KARTU 1: US (Ujian Semester) */}
          <div className="relative group rounded-3xl border border-sky-500/30 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-sky-950/20 p-6 sm:p-8 backdrop-blur-xl hover:border-sky-400/60 transition-all duration-300 shadow-xl hover:shadow-sky-500/10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 shadow-lg shadow-sky-500/20">
                  <FileSpreadsheet className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-sky-500/10 border border-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-400">
                  Ujian Akhir Semester
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  US — Ujian Semester
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Evaluasi komprehensif akhir semester untuk mata pelajaran <strong>Dasar Broadcasting (Fase E)</strong> dan <strong>Produksi & Siaran TV (Fase F)</strong>. Menguji penguasaan materi dari seluruh Elemen/BAB kurikulum.
                </p>
              </div>

              {/* Fitur Highlights US */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                  <span>Distribusi butir soal kognitif Bloom <strong>C1 hingga C6</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                  <span>Pilihan paket multi-fase: <strong>Fase E (Kelas X)</strong> & <strong>Fase F (Kelas XI/XII)</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                  <span>Timer otomatis, indikator ragu-ragu, dan pembobotan nilai rapor</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Timer className="h-4 w-4 text-slate-500" />
                <span>Durasi: 60 - 90 Menit</span>
              </div>
              <Link
                href="/assesment/us"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-sky-500/20 hover:from-sky-400 hover:to-blue-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Masuk ke Menu US</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* KARTU 2: TKA (Tes Kompetensi Akademik) */}
          <div className="relative group rounded-3xl border border-amber-500/30 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-amber-950/20 p-6 sm:p-8 backdrop-blur-xl hover:border-amber-400/60 transition-all duration-300 shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-lg shadow-amber-500/20">
                  <Award className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-400">
                  Standar Kompetensi Kejuruan
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  TKA — Tes Kompetensi Akademik
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Simulasi tes standarisasi kompetensi keahlian dan kemahiran vokasi broadcasting. Dirancang dalam format CBT modern dengan analisis diagnostik per subtes keterampilan studio.
                </p>
              </div>

              {/* Fitur Highlights TKA */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>3 Subtes: <strong>Literasi Regulasi</strong>, <strong>Logika Teknis AV</strong>, & <strong>Manajemen Produksi</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Format studi kasus industri nyata & pemecahan masalah produksi TV</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Rapor Radar Kemahiran Vokasi & Predikat Kelulusan Otomatis</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Timer className="h-4 w-4 text-slate-500" />
                <span>Durasi: 45 Menit CBT</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {isTeacherOrAdmin && (
                  <>
                    <Link
                      href="/guru?pg=banksoal"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-purple-500/30 bg-purple-950/40 hover:bg-purple-900/50 px-3.5 py-2.5 text-xs font-bold text-purple-300 hover:text-white transition-all shadow-md"
                    >
                      <BookOpen className="h-3.5 w-3.5 text-purple-400" />
                      <span>Bank Soal CBT</span>
                    </Link>
                    <Link
                      href="/assesment/tka/guru"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-750 px-3.5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white transition-all"
                    >
                      <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
                      <span>Portal Pengawas</span>
                    </Link>
                  </>
                )}
                <Link
                  href="/assesment/tka"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-orange-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Masuk CBT Siswa</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jadwal Ujian Aktif */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Calendar className="h-5 w-5 text-indigo-400" />
              Jadwal Sesi Ujian Aktif
            </h2>
            <p className="text-xs text-slate-400">
              Pilih salah satu sesi ujian terjadwal untuk langsung menuju lembar pengerjaan:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {activeSchedules.map((schedule, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-lg px-2.5 py-0.5 text-[11px] font-bold border ${schedule.color}`}
                  >
                    {schedule.type}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {schedule.status}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white leading-snug">
                  {schedule.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {schedule.scope}
                </p>

                <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                  <span className="flex items-center gap-1">
                    <Timer className="h-3 w-3 text-slate-500" />
                    {schedule.duration}
                  </span>
                  <span>•</span>
                  <span>{schedule.questionsCount}</span>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">
                  Token: {schedule.tokenHint}
                </span>
                <Link
                  href={schedule.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Ikuti Sesi</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tata Tertib & Keamanan CBT BroMan */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md">
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="h-5 w-5 text-emerald-400" />
          <h3 className="text-base font-bold text-white">
            Tata Tertib & Ketentuan CBT Asesmen BroMan
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 space-y-1.5">
            <div className="font-semibold text-sky-400 flex items-center gap-1.5">
              <Timer className="h-4 w-4" />
              1. Timer Terverifikasi
            </div>
            <p className="text-slate-400 leading-relaxed">
              Waktu ujian dihitung mundur secara otomatis. Jika durasi habis, jawaban yang telah tersimpan akan diserahkan secara otomatis ke sistem.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 space-y-1.5">
            <div className="font-semibold text-amber-400 flex items-center gap-1.5">
              <KeyRound className="h-4 w-4" />
              2. Token Akses Khusus
            </div>
            <p className="text-slate-400 leading-relaxed">
              Setiap sesi ujian dilindungi token akses. Pastikan memasukkan token yang valid sesuai rombel dan kelas masing-masing.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 space-y-1.5">
            <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" />
              3. Simpan Jawaban Otomatis
            </div>
            <p className="text-slate-400 leading-relaxed">
              Setiap jawaban yang Anda pilih langsung tersimpan di sistem. Anda dapat berpindah nomor secara fleksibel atau menandai ragu-ragu.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
