"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sliders,
  Check,
  Info,
  ArrowLeft,
  Film,
  Tv,
  BookOpen,
  ClipboardCheck,
  FileSpreadsheet,
  Award,
  UserCheck,
  Sparkles,
  RotateCcw,
  Eye,
  EyeOff,
  Layout,
  Layers,
  ChevronDown,
  Clock,
  Database,
} from "lucide-react";
import {
  useMenuVisibilityStore,
  toggleMenuFlag,
  setMenuFlag,
  resetMenuFlagsToDefault,
  MenuVisibilityFlags,
} from "@/lib/data/menu-store";

export default function AdminFeatureTogglePage() {
  const flags = useMenuVisibilityStore();
  const [activeTab, setActiveTab] = useState<"navbar" | "modules">("navbar");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleToggle = (key: keyof MenuVisibilityFlags, label: string) => {
    const nextVal = toggleMenuFlag(key);
    showToast(
      `${label} berhasil ${nextVal ? "ditampilkan (SHOW)" : "disembunyikan (HIDE)"} & tersimpan ke MySQL!`
    );
  };

  const handleShowAllNavbar = () => {
    setMenuFlag("menu_belajar", true);
    setMenuFlag("menu_fase_e", true);
    setMenuFlag("menu_fase_f", true);
    setMenuFlag("menu_assesment", true);
    setMenuFlag("menu_us", true);
    setMenuFlag("menu_tka", true);
    setMenuFlag("menu_guru", true);
    showToast("Seluruh menu navbar diaktifkan & tersimpan ke MySQL!");
  };

  const handleResetDefault = () => {
    resetMenuFlagsToDefault();
    showToast("Pengaturan visibilitas berhasil di-reset ke default & disinkronkan ke MySQL!");
  };

  // Definisi Item Navigasi Navbar (Sesuai Tampilan Atas)
  const navbarSettings: {
    key: keyof MenuVisibilityFlags;
    title: string;
    description: string;
    icon: typeof BookOpen;
    badge: string;
    parent?: string;
  }[] = [
    {
      key: "menu_belajar",
      title: "Belajar (Murid) [Bilah Navigasi Atas]",
      description: "Teks menu di bilah navigasi atas (dashboard belajar tetap aktif di bawah).",
      icon: BookOpen,
      badge: "14 Elemen",
    },
    {
      key: "menu_fase_e",
      title: "Fase E [Bilah Navigasi Atas]",
      description: "Teks menu di bilah navigasi atas (modul Fase E tetap aktif di bawah).",
      icon: Film,
      badge: "Kelas X",
    },
    {
      key: "menu_fase_f",
      title: "Fase F [Bilah Navigasi Atas]",
      description: "Teks menu di bilah navigasi atas (modul Fase F tetap aktif di bawah).",
      icon: Tv,
      badge: "Kelas XI-XII",
    },
    {
      key: "menu_assesment",
      title: "Assesment (Induk)",
      description: "Menu induk evaluasi dan asesmen daring pada bilah navigasi.",
      icon: ClipboardCheck,
      badge: "US & TKA",
    },
    {
      key: "menu_us",
      title: "↳ US (Ujian Semester)",
      description: "Sub-menu Ujian Akhir Semester di dalam menu Assesment.",
      icon: FileSpreadsheet,
      badge: "Semester",
      parent: "Assesment",
    },
    {
      key: "menu_tka",
      title: "↳ TKA (Tes Kompetensi Akademik)",
      description: "Sub-menu simulasi tes standarisasi vokasi di dalam menu Assesment.",
      icon: Award,
      badge: "CBT",
      parent: "Assesment",
    },
    {
      key: "menu_guru",
      title: "Portal Guru",
      description: "Menu navigasi guru untuk akses kurikulum, bank soal, dan nilai.",
      icon: UserCheck,
      badge: "Pendidik",
    },
  ];

  // Definisi Item Modul Pembelajaran per Bab
  const moduleSettings: {
    key: keyof MenuVisibilityFlags;
    title: string;
    description: string;
  }[] = [
    {
      key: "materi",
      title: "Materi Interaktif",
      description: "Modul teks berjenjang, kartu pembelajaran, dan pemantik kasus.",
    },
    {
      key: "video",
      title: "Video Pembelajaran",
      description: "Video YouTube unlisted dan panduan menonton per Elemen.",
    },
    {
      key: "galeri",
      title: "Galeri Gambar & Visual",
      description: "Galeri foto peralatan, studio penyiaran, dan sketsa set.",
    },
    {
      key: "kuis",
      title: "Kuis Formatif (C1-C6)",
      description: "Kuis evaluasi formatif mandiri dengan pembahasan instan.",
    },
    {
      key: "game",
      title: "Game Edukatif",
      description: "Permainan drag & drop alat, flashcard shot, dan simulasi studio.",
    },
    {
      key: "lkpd",
      title: "Lembar Kerja Siswa (LKPD)",
      description: "LKPD praktikum, pengumpulan berkas daring, dan ekspor PDF.",
    },
    {
      key: "rpm",
      title: "Rencana Pembelajaran (RPM)",
      description: "Dokumen RPM Kurikulum Merdeka untuk pegangan guru.",
    },
    {
      key: "bank_soal",
      title: "Bank Soal & Import",
      description: "Pusat bank butir soal C1-C6, import Excel/Word, perakit kisi-kisi.",
    },
    {
      key: "leaderboard",
      title: "Papan Peringkat (Leaderboard)",
      description: "Peringkat skor kuis dan game untuk motivasi belajar siswa.",
    },
    {
      key: "progres",
      title: "Pelacakan Progres KKTP",
      description: "Rapor ketercapaian kriteria KKTP per individu dan rekap kelas.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back button */}
      <Link
        href="/admin"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-sky-400 transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali ke Dashboard Admin
      </Link>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-xs font-semibold text-amber-400">
              Admin Control Panel
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
              <Database className="h-3 w-3" />
              Auto-Sync ke MySQL
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
            <Sliders className="h-7 w-7 text-sky-400" />
            Pengaturan Visibilitas Menu (Show / Hide)
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Tentukan menu dan modul apa saja yang ditampilkan atau disembunyikan. Perubahan langsung aktif seketika (real-time).
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleShowAllNavbar}
            className="rounded-xl border border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/20 px-3 py-2 text-xs font-semibold text-sky-400 transition-colors"
          >
            Tampilkan Semua
          </button>
          <button
            type="button"
            onClick={handleResetDefault}
            className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-750 px-3 py-2 text-xs font-semibold text-slate-300 transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Default</span>
          </button>
        </div>
      </div>

      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-2xl bg-emerald-500/90 text-white px-4 py-3 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-200">
          <Check className="h-4 w-4" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Live Navbar Mini Preview */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md mb-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
            <Layout className="h-4 w-4 text-sky-400" />
            <span>Pratinjau Langsung Bilah Menu (Live Navbar Preview):</span>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">
            Tampilan Otomatis Mengikuti Switch di Bawah
          </span>
        </div>

        {/* Mockup Bar */}
        <div className="flex items-center gap-2 overflow-x-auto rounded-2xl border border-slate-800 bg-[#0b0f19] p-3 text-xs">
          <span className="font-extrabold text-white text-sm px-2">BroMan</span>

          {flags.menu_belajar && (
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 text-sky-400 px-2.5 py-1 font-medium border border-slate-700">
              <BookOpen className="h-3.5 w-3.5" />
              Belajar
            </span>
          )}

          {flags.menu_fase_e && (
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-850 text-slate-300 px-2.5 py-1 font-medium border border-slate-800">
              <Film className="h-3.5 w-3.5 text-sky-400" />
              Fase E
            </span>
          )}

          {flags.menu_fase_f && (
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-850 text-slate-300 px-2.5 py-1 font-medium border border-slate-800">
              <Tv className="h-3.5 w-3.5 text-indigo-400" />
              Fase F
            </span>
          )}

          {flags.menu_assesment && (
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-850 text-slate-300 px-2.5 py-1 font-medium border border-slate-800">
              <ClipboardCheck className="h-3.5 w-3.5 text-sky-400" />
              Assesment
              <span className="text-[9px] bg-sky-500/20 text-sky-300 px-1 rounded">
                {[flags.menu_us && "US", flags.menu_tka && "TKA"].filter(Boolean).join(" & ") || "Aktif"}
              </span>
              <ChevronDown className="h-3 w-3 text-slate-500" />
            </span>
          )}

          {flags.menu_guru && (
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-850 text-slate-300 px-2.5 py-1 font-medium border border-slate-800">
              <UserCheck className="h-3.5 w-3.5 text-slate-400" />
              Portal Guru
            </span>
          )}

          <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-850 text-slate-400 px-2.5 py-1 font-medium border border-slate-800 opacity-60">
            Admin
          </span>
        </div>
      </div>

      {/* Tabs Switcher: Navigasi vs Modul */}
      <div className="flex border-b border-slate-800 mb-6 gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("navbar")}
          className={`flex items-center gap-2 pb-3 px-4 text-sm font-bold border-b-2 transition-all ${
            activeTab === "navbar"
              ? "border-sky-500 text-sky-400"
              : "border-transparent text-slate-400 hover:text-white"
          }`}
        >
          <Layout className="h-4 w-4" />
          <span>Navigasi Menu Utama (Navbar)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("modules")}
          className={`flex items-center gap-2 pb-3 px-4 text-sm font-bold border-b-2 transition-all ${
            activeTab === "modules"
              ? "border-sky-500 text-sky-400"
              : "border-transparent text-slate-400 hover:text-white"
          }`}
        >
          <Layers className="h-4 w-4" />
          <span>Modul & Fitur Pembelajaran</span>
        </button>

        <Link
          href="/admin/kurikulum"
          className="flex items-center gap-2 pb-3 px-4 text-sm font-bold border-b-2 border-transparent text-amber-400 hover:text-amber-300 transition-all sm:ml-auto"
        >
          <Clock className="h-4 w-4" />
          <span>Alokasi JP (Jam Pelajaran) →</span>
        </Link>
      </div>

      {/* TAB 1: Navigasi Menu Utama (Navbar) */}
      {activeTab === "navbar" && (
        <div className="space-y-4">
          <p className="text-xs text-slate-400">
            Aktifkan tombol untuk <strong>menampilkan (SHOW)</strong> atau nonaktifkan untuk <strong>menyembunyikan (HIDE)</strong> menu dari bilah atas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {navbarSettings.map((item) => {
              const Icon = item.icon;
              const isEnabled = flags[item.key];

              return (
                <div
                  key={item.key}
                  className={`rounded-2xl border p-5 transition-all flex items-start justify-between gap-4 backdrop-blur-md ${
                    isEnabled
                      ? "border-sky-500/30 bg-slate-900/80 shadow-md"
                      : "border-slate-800 bg-slate-950/40 opacity-65"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                        isEnabled
                          ? "bg-sky-500/15 border-sky-500/30 text-sky-400"
                          : "bg-slate-800/60 border-slate-700 text-slate-500"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-white">
                          {item.title}
                        </span>
                        <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700/60 font-medium">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-2.5 flex items-center gap-2 text-[11px]">
                        <span
                          className={`inline-flex items-center gap-1 font-semibold ${
                            isEnabled ? "text-emerald-400" : "text-rose-400"
                          }`}
                        >
                          {isEnabled ? (
                            <>
                              <Eye className="h-3 w-3" />
                              <span>Ditampilkan (Visible)</span>
                            </>
                          ) : (
                            <>
                              <EyeOff className="h-3 w-3" />
                              <span>Disembunyikan (Hidden)</span>
                            </>
                          )}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="font-mono text-[10px] text-slate-500">
                          {item.key}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Switch Toggle */}
                  <button
                    type="button"
                    onClick={() => handleToggle(item.key, item.title)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      isEnabled ? "bg-sky-500" : "bg-slate-700"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                        isEnabled ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: Modul Pembelajaran per Bab */}
      {activeTab === "modules" && (
        <div className="space-y-4">
          <p className="text-xs text-slate-400">
            Aktifkan atau nonaktifkan fitur spesifik dalam modul materi/elemen kurikulum:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {moduleSettings.map((item) => {
              const isEnabled = flags[item.key];

              return (
                <div
                  key={item.key}
                  className={`rounded-2xl border p-5 transition-all flex items-start justify-between gap-4 backdrop-blur-md ${
                    isEnabled
                      ? "border-slate-800 bg-slate-900/70"
                      : "border-slate-800/60 bg-slate-950/40 opacity-65"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-white">
                        {item.title}
                      </span>
                      <span className="font-mono text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                        {item.key}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-2 text-[10px]">
                      Status:{" "}
                      <span
                        className={`font-semibold ${
                          isEnabled ? "text-emerald-400" : "text-rose-400"
                        }`}
                      >
                        {isEnabled ? "Aktif (Show)" : "Nonaktif (Hide)"}
                      </span>
                    </div>
                  </div>

                  {/* Switch Toggle */}
                  <button
                    type="button"
                    onClick={() => handleToggle(item.key, item.title)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      isEnabled ? "bg-sky-500" : "bg-slate-700"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                        isEnabled ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
