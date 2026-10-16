"use client";

import Link from "next/link";
import {
  Users,
  Sliders,
  FileSpreadsheet,
  Activity,
  UserCheck,
  GraduationCap,
  ArrowRight,
  FolderKanban,
  KeyRound,
  ShieldCheck,
  Clock,
  Database,
} from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    {
      label: "Total Murid Terdaftar",
      value: "128",
      sub: "Kelas X & XI BCF",
      icon: GraduationCap,
      color: "text-sky-400",
    },
    {
      label: "Guru Pengampu",
      value: "4",
      sub: "Aktif Mengelola",
      icon: UserCheck,
      color: "text-indigo-400",
    },
    {
      label: "Kelas & Rombel",
      value: "5",
      sub: "Tahun Ajaran 2026/2027",
      icon: FolderKanban,
      color: "text-amber-400",
    },
    {
      label: "Bank Soal Tersimpan",
      value: "240",
      sub: "C1 hingga C6",
      icon: FileSpreadsheet,
      color: "text-emerald-400",
    },
  ];

  const adminModules = [
    {
      title: "Pengaturan Menu (Feature Toggle)",
      description:
        "Aktifkan atau nonaktifkan menu materi, video, kuis, game, ulangan, dan leaderboard di tingkat global, fase, elemen, atau role pengguna.",
      href: "/admin/menu",
      icon: Sliders,
      badge: "FR-8 Dinamis",
      color: "text-sky-400",
      bgColor: "bg-sky-500/10 border-sky-500/20",
    },
    {
      title: "Alokasi Jam Pelajaran (JP Kurikulum)",
      description:
        "Kelola alokasi beban Jam Pelajaran (JP) untuk 14 Elemen Fase E (Kelas X), Fase F (Kelas XI & XII), dan Peminatan (2D/3D) secara fleksibel.",
      href: "/admin/kurikulum",
      icon: Clock,
      badge: "14 Elemen Editable JP",
      color: "text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Manajemen Pengguna & Import Excel",
      description:
        "CRUD akun murid dan guru, pembagian rombel, status keaktifan akun, serta import massal ratusan siswa via file Excel (.xlsx / .csv).",
      href: "/admin/pengguna",
      icon: Users,
      badge: "CRUD + Import",
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "Manajemen Kelas & Rombel",
      description:
        "Pengelompokan kelas X BCF 1, X BCF 2, XI BCF, XII BCF, penugasan wali kelas, dan pemetaan kurikulum ke Fase E atau Fase F.",
      href: "/admin/kelas",
      icon: FolderKanban,
      badge: "5 Rombel Aktif",
      color: "text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Matriks Hak Akses (Access Grants)",
      description:
        "Atur keterbukaan akses masing-masing dari 12 Elemen per rombel kelas dengan kontrol masa berlaku tahun ajaran.",
      href: "/admin/akses",
      icon: KeyRound,
      badge: "12 Elemen Matrix",
      color: "text-rose-400",
      bgColor: "bg-rose-500/10 border-rose-500/20",
    },
    {
      title: "Audit Log & Jejak Keamanan",
      description:
        "Rekam jejak real-time perubahan hak akses, pergantian toggle fitur, alokasi JP kurikulum, serta audit aktivitas sistem.",
      href: "/admin/log",
      icon: Activity,
      badge: "Real-Time Trail",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-xs font-semibold text-amber-400">
              Super Administrator
            </span>
            <span className="text-xs text-slate-400">BroMan Control Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Dashboard Utama Administrator
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Pusat kendali hak akses guru dan murid, pengaturan fitur dinamis, import akun massal, serta audit aktivitas sistem.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-3 py-2 text-xs text-emerald-400 font-semibold">
            <Database className="h-4 w-4" />
            MySQL XAMPP Terhubung (Auto-Persist)
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-slate-300 font-semibold">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Sistem Aman & Aktif
          </span>
        </div>
      </div>

      {/* Quick Action Banner: Pengaturan Visibilitas Menu (Show / Hide) */}
      <div className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 p-6 backdrop-blur-xl mb-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 shadow-lg shadow-sky-500/20">
              <Sliders className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="rounded-full bg-sky-500/10 border border-sky-500/20 px-2.5 py-0.5 text-xs font-semibold text-sky-400">
                  Feature Toggle & Visibility
                </span>
                <span className="text-xs text-slate-400">Kontrol Bilah Navigasi & Halaman</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Pengaturan Tampilan Menu (Show / Hide)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-0.5">
                Atur menu mana saja yang ingin ditampilkan atau disembunyikan: <strong>Belajar (Murid)</strong>, <strong>Fase E</strong>, <strong>Fase F</strong>, <strong>Assesment (US & TKA)</strong>, hingga <strong>Portal Guru</strong>.
              </p>
            </div>
          </div>
          <Link
            href="/admin/menu"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-sky-500/20 transition-all shrink-0"
          >
            <span>Atur Visibilitas Menu</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400">{s.label}</span>
                <Icon className={`h-4 w-4 ${s.color}`} />
              </div>
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-[11px] text-slate-500 mt-1">{s.sub}</div>
            </div>
          );
        })}
      </div>

      {/* Admin Modules Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">
            Modul Kontrol Administrator
          </h2>
          <span className="text-xs text-slate-400">
            6 Sub-Modul Tersedia
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {adminModules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md flex flex-col justify-between hover:border-slate-700 hover:bg-slate-850/60 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border ${m.bgColor} ${m.color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-300 border border-slate-700">
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {m.description}
                  </p>
                </div>

                <Link
                  href={m.href}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 pt-3 border-t border-slate-800/80"
                >
                  Buka Modul
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
