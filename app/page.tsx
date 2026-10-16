import { Suspense } from "react";
import Link from "next/link";
import {
  Radio,
  BookOpen,
  Sparkles,
  ShieldAlert,
  FileSpreadsheet,
  Gamepad2,
  Trophy,
  Sliders,
} from "lucide-react";
import KurikulumExplorer from "@/components/kurikulum-explorer";

export default function HomePage() {

  return (
    <div className="relative overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-sky-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-48 right-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/15 blur-[140px] pointer-events-none" />
      <div className="absolute top-[800px] left-1/3 -z-10 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-10 sm:pt-12 sm:pb-14 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-medium text-sky-400 mb-6 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-sky-400 animate-spin" />
          <span>Kurikulum Merdeka & Pembelajaran Mendalam (*Deep Learning*)</span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Media Pembelajaran Interaktif{" "}
          <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-300 bg-clip-text text-transparent">
            Broadcasting & Perfilman
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
          Pondasi pembelajaran terstruktur dari{" "}
          <span className="text-white font-medium">CP → TP → ATP → KKTP</span>.
          Dilengkapi modul materi interaktif, video industri, kuis formatif, game edukasi,
          bank soal C1–C6, dan generator administrasi guru (RPM & LKPD).
        </p>


        {/* Quick Stats Bar */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4 backdrop-blur-md sm:grid-cols-4">
          <div className="border-r border-slate-800/60 last:border-none p-3 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">14 Elemen</div>
            <div className="text-xs text-slate-400 mt-1">Fase E, F & Peminatan</div>
          </div>
          <div className="border-r border-slate-800/60 last:border-none p-3 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-sky-400">C1 – C6</div>
            <div className="text-xs text-slate-400 mt-1">Level Kognitif Soal</div>
          </div>
          <div className="border-r border-slate-800/60 last:border-none p-3 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-indigo-400">8 Game</div>
            <div className="text-xs text-slate-400 mt-1">Tipe Game Edukatif</div>
          </div>
          <div className="p-3 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400">100%</div>
            <div className="text-xs text-slate-400 mt-1">Dukungan PWA & Mobile</div>
          </div>
        </div>
      </section>

      {/* Kurikulum Explorer Section */}
      <Suspense fallback={<div className="h-96 w-full animate-pulse bg-slate-900/20" />}>
        <KurikulumExplorer initialFase="E" />
      </Suspense>

      {/* 6 Pilar Utama Sistem BroMan */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Fitur Utama Media Pembelajaran BroMan
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl mx-auto">
            Dirancang khusus untuk memfasilitasi kebutuhan praktis siswa SMK dan kemudahan administrasi guru kejuruan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 mb-4 border border-sky-500/20">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Materi Kartu & Video Berpanduan
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Penjelasan inti dalam kartu singkat (maks. 120 kata) dilengkapi studi kasus industri pertelevisian, contoh nyata lokal, dan video pembelajaran YouTube terkurasi.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-4 border border-indigo-500/20">
              <Gamepad2 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Game Edukatif Tanpa Koding
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mendukung 8 mode permainan interaktif (drag & drop alat, flashcard istilah shot, urutan tahapan produksi, teka-teki silang, dan simulasi skenario studio TV).
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 mb-4 border border-emerald-500/20">
              <Trophy className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Bank Soal Kognitif Bloom C1–C6
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pengkategorian soal dari level hafalan (C1) hingga analisis stimulus naskah/alat (C4–C6). Dilengkapi fitur import template Excel & DOCX berkecepatan tinggi.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-4 border border-amber-500/20">
              <FileSpreadsheet className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Generator RPM & LKPD Praktik
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Penyusunan Rencana Pembelajaran Mendalam (RPM) berprinsip Berkesadaran-Bermakna-Menggembirakan serta LKPD praktikum siap ekspor PDF & DOCX.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-2xl border border-sky-500/30 bg-slate-900/60 p-6 backdrop-blur-md flex flex-col justify-between hover:border-sky-500/50 transition-all group">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 mb-4 border border-sky-500/20 group-hover:scale-105 transition-transform">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                Assesment Daring (US & TKA)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Ujian Semester (US) Fase E/F dan Tes Kompetensi Akademik (TKA) kejuruan berformat CBT: timer terlindungi, token akses, dan analisis radar kemahiran vokasi.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
              <Link
                href="/assesment/us"
                className="text-[11px] font-semibold text-sky-400 hover:text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded-lg px-2.5 py-1 transition-colors"
              >
                Ujian US →
              </Link>
              <Link
                href="/assesment/tka"
                className="text-[11px] font-semibold text-amber-400 hover:text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-lg px-2.5 py-1 transition-colors"
              >
                Simulasi TKA →
              </Link>
            </div>
          </div>

          {/* Card 6 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 mb-4 border border-purple-500/20">
              <Sliders className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Feature Toggle Instan (Admin)
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Kemudahan mengaktifkan atau menonaktifkan modul materi, kuis, game, atau ulangan secara fleksibel di tingkat global, fase, elemen, maupun role pengguna.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
