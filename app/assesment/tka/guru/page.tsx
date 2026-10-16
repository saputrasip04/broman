"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  KeyRound,
  RotateCcw,
  Download,
  Search,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Play,
  Pause,
  Award,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Laptop,
  Smartphone,
  Check,
  X,
  FileSpreadsheet,
  Sliders,
  Sparkles,
  BarChart3,
  LogOut,
  RefreshCw,
  UserCheck,
  BookOpen,
} from "lucide-react";
import { apiUrl } from "@/lib/api-client";

interface StudentParticipant {
  id: string;
  nis: string;
  name: string;
  rombel: string;
  device: "Android" | "iPhone" | "Laptop / PC";
  ipAddress: string;
  startTime: string;
  timeLeft: number; // in seconds
  answeredCount: number;
  totalQuestions: number;
  status: "Mengerjakan" | "Selesai" | "Belum Login" | "Terputus";
  score?: number;
  subtestScores?: { sub1: number; sub2: number; sub3: number };
}

export default function PortalGuruPengawasPage() {
  // Authentication & Session
  const [isSupervisorLoggedIn, setIsSupervisorLoggedIn] = useState(true);
  const [supervisorName, setSupervisorName] = useState("Very Kurniawan, S.Pd., Gr. (NIP. 199002042022211009)");
  const [roomName, setRoomName] = useState("Ruang CBT Lab Broadcasting 1");

  // Token Management
  const [currentToken, setCurrentToken] = useState("TKAPRO");
  const [tokenTimeLeft, setTokenTimeLeft] = useState(15 * 60); // 15 Menit auto refresh
  const [tokenCopied, setTokenCopied] = useState(false);
  const [tokenHistory, setTokenHistory] = useState<string[]>(["TKAPRO", "BCF829", "TKA551"]);

  // Toast & Modal State
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"monitor" | "rekap" | "token" | "setting">("monitor");
  const [filterRombel, setFilterRombel] = useState<string>("Semua");
  const [filterStatus, setFilterStatus] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [resetModalStudent, setResetModalStudent] = useState<StudentParticipant | null>(null);

  // Settings
  const [settingRandomQuestions, setSettingRandomQuestions] = useState(true);
  const [settingRandomOptions, setSettingRandomOptions] = useState(true);
  const [settingShowScoreToStudent, setSettingShowScoreToStudent] = useState(true);
  const [settingEnableFlagging, setSettingEnableFlagging] = useState(true);
  const [settingAntiCheatWarning, setSettingAntiCheatWarning] = useState(true);
  const [settingDuration, setSettingDuration] = useState("60");
  const [settingPassingGrade, setSettingPassingGrade] = useState("75");

  // User Session & Role (Akun Guru vs Super Admin)
  const [userRole, setUserRole] = useState<string>("guru");

  // Initial Mock Participants
  const [participants, setParticipants] = useState<StudentParticipant[]>([
    {
      id: "std-01",
      nis: "2026-BCF-001",
      name: "Aditya Pratama Putra",
      rombel: "X BCF 1",
      device: "Laptop / PC",
      ipAddress: "192.168.1.101",
      startTime: "08:00 WIB",
      timeLeft: 1680,
      answeredCount: 6,
      totalQuestions: 6,
      status: "Selesai",
      score: 83,
      subtestScores: { sub1: 100, sub2: 100, sub3: 50 },
    },
    {
      id: "std-02",
      nis: "2026-BCF-002",
      name: "Bagas Satria Wibowo",
      rombel: "X BCF 1",
      device: "Android",
      ipAddress: "192.168.1.104",
      startTime: "08:05 WIB",
      timeLeft: 1240,
      answeredCount: 5,
      totalQuestions: 6,
      status: "Mengerjakan",
    },
    {
      id: "std-03",
      nis: "2026-BCF-003",
      name: "Cantika Putri Ramadhani",
      rombel: "X BCF 1",
      device: "iPhone",
      ipAddress: "192.168.1.107",
      startTime: "08:02 WIB",
      timeLeft: 1420,
      answeredCount: 4,
      totalQuestions: 6,
      status: "Mengerjakan",
    },
    {
      id: "std-04",
      nis: "2026-BCF-004",
      name: "Davi Faturrahman",
      rombel: "X BCF 1",
      device: "Android",
      ipAddress: "192.168.1.110",
      startTime: "08:01 WIB",
      timeLeft: 1100,
      answeredCount: 3,
      totalQuestions: 6,
      status: "Terputus",
    },
    {
      id: "std-05",
      nis: "2026-BCF-005",
      name: "Eka Nurul Aisyah",
      rombel: "X BCF 2",
      device: "Laptop / PC",
      ipAddress: "192.168.1.112",
      startTime: "08:00 WIB",
      timeLeft: 1710,
      answeredCount: 6,
      totalQuestions: 6,
      status: "Selesai",
      score: 100,
      subtestScores: { sub1: 100, sub2: 100, sub3: 100 },
    },
    {
      id: "std-06",
      nis: "2026-BCF-006",
      name: "Farhan Maulana Akbar",
      rombel: "X BCF 2",
      device: "Android",
      ipAddress: "192.168.1.115",
      startTime: "08:10 WIB",
      timeLeft: 2100,
      answeredCount: 2,
      totalQuestions: 6,
      status: "Mengerjakan",
    },
    {
      id: "std-07",
      nis: "2026-BCF-007",
      name: "Gita Septiana",
      rombel: "X BCF 2",
      device: "Laptop / PC",
      ipAddress: "-",
      startTime: "-",
      timeLeft: 2700,
      answeredCount: 0,
      totalQuestions: 6,
      status: "Belum Login",
    },
    {
      id: "std-08",
      nis: "2026-BCF-008",
      name: "Hafizh Al-Rasyid",
      rombel: "XI BCF",
      device: "Laptop / PC",
      ipAddress: "192.168.1.119",
      startTime: "08:03 WIB",
      timeLeft: 1530,
      answeredCount: 6,
      totalQuestions: 6,
      status: "Selesai",
      score: 67,
      subtestScores: { sub1: 50, sub2: 100, sub3: 50 },
    },
  ]);

  // Timer countdown untuk token
  useEffect(() => {
    const timer = setInterval(() => {
      setTokenTimeLeft((prev) => {
        if (prev <= 1) {
          handleGenerateNewToken();
          return 15 * 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Deteksi sesi login aktif pengguna (Guru vs Admin)
  useEffect(() => {
    async function loadUserSession() {
      try {
        const res = await fetch(apiUrl("/api/auth/me"));
        if (res.ok) {
          const data = await res.json();
          if (data?.user?.role) {
            setUserRole(data.user.role);
          }
          if (data?.user?.name) {
            const nipStr = data.user.identifier ? ` (NIP. ${data.user.identifier})` : "";
            setSupervisorName(`${data.user.name}${nipStr}`);
          }
        }
      } catch (e) {
        console.error("Gagal memuat sesi autentikasi:", e);
      }
    }
    loadUserSession();
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleGenerateNewToken = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let newToken = "";
    for (let i = 0; i < 6; i++) {
      newToken += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCurrentToken(newToken);
    setTokenTimeLeft(15 * 60);
    setTokenHistory((prev) => [newToken, ...prev.slice(0, 4)]);
    showToast(`Token ujian baru dirilis: ${newToken}`);
  };

  const handleCopyToken = () => {
    navigator.clipboard.writeText(currentToken);
    setTokenCopied(true);
    setTimeout(() => setTokenCopied(false), 2000);
    showToast(`Token ${currentToken} berhasil disalin!`);
  };

  const handleResetStudentLogin = (studentId: string) => {
    setParticipants((prev) =>
      prev.map((s) => {
        if (s.id === studentId) {
          return {
            ...s,
            status: "Belum Login",
            ipAddress: "-",
          };
        }
        return s;
      })
    );
    setResetModalStudent(null);
    showToast("Sesi login siswa berhasil di-reset. Siswa dapat login kembali.");
  };

  const handleForceSubmit = (studentId: string) => {
    setParticipants((prev) =>
      prev.map((s) => {
        if (s.id === studentId) {
          return {
            ...s,
            status: "Selesai",
            timeLeft: 0,
            score: s.score || 70,
            subtestScores: s.subtestScores || { sub1: 60, sub2: 70, sub3: 80 },
          };
        }
        return s;
      })
    );
    showToast("Ujian peserta berhasil diselesaikan secara paksa.");
  };

  const handleDownloadRekapExcel = () => {
    const headers = "NIS,Nama Siswa,Kelas,Status,Durasi Mulai,Nilai Total,Subtes 1,Subtes 2,Subtes 3\n";
    const rows = participants
      .map(
        (s) =>
          `"${s.nis}","${s.name}","${s.rombel}","${s.status}","${s.startTime}","${s.score ?? "-"}","${
            s.subtestScores?.sub1 ?? "-"
          }","${s.subtestScores?.sub2 ?? "-"}","${s.subtestScores?.sub3 ?? "-"}"`
      )
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Rekap_Nilai_TKA_BCF_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Berkas Rekap Nilai TKA (.CSV) berhasil diunduh!");
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Filter Data Peserta
  const filteredParticipants = participants.filter((p) => {
    const matchRombel = filterRombel === "Semua" || p.rombel === filterRombel;
    const matchStatus = filterStatus === "Semua" || p.status === filterStatus;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.nis.toLowerCase().includes(searchQuery.toLowerCase());
    return matchRombel && matchStatus && matchSearch;
  });

  const totalRegistered = participants.length;
  const activeWorking = participants.filter((p) => p.status === "Mengerjakan").length;
  const finishedCount = participants.filter((p) => p.status === "Selesai").length;
  const disconnectedCount = participants.filter((p) => p.status === "Terputus").length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Top Banner & Header Identity ala CBT Yamaclaw */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-r from-slate-900 via-slate-850 to-amber-950/40 p-6 sm:p-8 backdrop-blur-xl mb-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-0.5 text-xs font-semibold text-amber-400">
                SMKN Broadcasting & Perfilman
              </span>
              <span className="rounded-full bg-sky-500/10 border border-sky-500/20 px-2.5 py-0.5 text-xs font-semibold text-sky-400">
                CBT Pengawas v4.2
              </span>
              <span className="text-xs text-slate-400">Status Server: Terkoneksi Lancar</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2.5">
              <ShieldCheck className="h-7 w-7 text-amber-400" />
              Pusat Kendali Asesmen & Evaluasi Pembelajaran
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Portal Guru & Pengawas Resmi Tes Kompetensi Akademik (TKA). Pantau aktivitas ruang ujian secara langsung, rilis token sesi, reset login kendala siswa, dan ekspor analisis butir soal.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/assesment/tka"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white transition-all shadow-md"
            >
              <ExternalLink className="h-3.5 w-3.5 text-amber-400" />
              <span>Portal Siswa (CBT)</span>
            </Link>

            {/* Tombol Akses Setting CBT (Muncul untuk Guru & Admin) */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("setting");
                showToast("Membuka Pengaturan & SOP Sesi CBT");
                const section = document.getElementById("cbt-tabs-section");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <Sliders className="h-3.5 w-3.5" />
              <span>Setting CBT</span>
            </button>

            {/* Tombol Dashboard Admin: Di-hide pada akun Guru, HANYA tampil jika akun Super Admin */}
            {userRole === "super_admin" && (
              <Link
                href="/admin"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2.5 text-xs font-bold text-slate-200 hover:text-white transition-all shadow-md"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
                <span>Dashboard Admin</span>
              </Link>
            )}
          </div>
        </div>

        {/* Info Pengawas Aktif */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <UserCheck className="h-4 w-4 text-amber-400" />
            <span>Pengawas Aktif: <strong className="text-white">{supervisorName}</strong></span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Ruang: <strong className="text-slate-200">{roomName}</strong></span>
            <span>Waktu Server: <strong className="text-emerald-400 font-mono">08:24:15 WIB</strong></span>
          </div>
        </div>
      </div>

      {/* Toast Notifikasi */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-2xl bg-emerald-500 text-white px-4 py-3 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-200 font-medium text-xs">
          <Check className="h-4 w-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 4 Kartu Ringkasan Real-Time */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400">Total Peserta Terdaftar</span>
            <Users className="h-4 w-4 text-sky-400" />
          </div>
          <div className="text-2xl font-bold text-white">{totalRegistered}</div>
          <div className="text-[11px] text-slate-500 mt-1">3 Rombel (X & XI BCF)</div>
        </div>

        <div className="rounded-2xl border border-sky-500/20 bg-sky-950/20 p-5 backdrop-blur-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-sky-300">Sedang Mengerjakan</span>
            <div className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
          </div>
          <div className="text-2xl font-bold text-sky-400">{activeWorking}</div>
          <div className="text-[11px] text-sky-400/80 mt-1">Live Terkoneksi CBT</div>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-5 backdrop-blur-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-emerald-300">Ujian Telah Selesai</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-emerald-400">{finishedCount}</div>
          <div className="text-[11px] text-emerald-400/80 mt-1">Jawaban Tersimpan Aman</div>
        </div>

        <div className="rounded-2xl border border-rose-500/20 bg-rose-950/20 p-5 backdrop-blur-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-rose-300">Terputus / Perlu Reset</span>
            <AlertTriangle className="h-4 w-4 text-rose-400" />
          </div>
          <div className="text-2xl font-bold text-rose-400">{disconnectedCount}</div>
          <div className="text-[11px] text-rose-400/80 mt-1">
            {disconnectedCount > 0 ? "Perlu Tindakan Pengawas" : "Tidak Ada Kendala"}
          </div>
        </div>
      </div>

      {/* Box Rilis Token CBT Real-Time */}
      <div className="rounded-3xl border border-amber-500/30 bg-slate-900/80 p-6 backdrop-blur-md mb-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-lg shadow-amber-500/20">
              <KeyRound className="h-7 w-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Rilis Token Sesi Ujian Aktif
                </span>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                  Auto-Refresh 15 Menit
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl sm:text-4xl font-mono font-black tracking-widest text-white bg-slate-950 border border-slate-800 px-4 py-1.5 rounded-2xl select-all">
                  {currentToken}
                </span>
                <button
                  type="button"
                  onClick={handleCopyToken}
                  className="rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-750 px-3 py-2 text-xs font-semibold text-slate-200 transition-colors"
                >
                  {tokenCopied ? "Disalin!" : "Salin Token"}
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Sisa waktu token berlaku: <span className="font-mono font-bold text-amber-400">{formatTimer(tokenTimeLeft)}</span>. Peserta ujian wajib menginput token ini pada kartu login.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={handleGenerateNewToken}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-amber-500/20 transition-all"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Rilis Token Baru</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadRekapExcel}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 px-4 py-2.5 text-xs font-bold text-emerald-400 transition-colors"
            >
              <FileSpreadsheet className="h-4 w-4" />
              <span>Download Nilai (.CSV)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Menu Pengawas */}
      <div id="cbt-tabs-section" className="flex border-b border-slate-800 mb-6 gap-2 overflow-x-auto scroll-mt-6">
        <button
          type="button"
          onClick={() => setActiveTab("monitor")}
          className={`flex items-center gap-2 pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
            activeTab === "monitor"
              ? "border-amber-500 text-amber-400"
              : "border-transparent text-slate-400 hover:text-white"
          }`}
        >
          <Users className="h-4 w-4" />
          <span>Monitoring Peserta Live ({participants.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("rekap")}
          className={`flex items-center gap-2 pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
            activeTab === "rekap"
              ? "border-amber-500 text-amber-400"
              : "border-transparent text-slate-400 hover:text-white"
          }`}
        >
          <BarChart3 className="h-4 w-4" />
          <span>Rekap Hasil & Analisis Butir Soal</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("setting")}
          className={`flex items-center gap-2 pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
            activeTab === "setting"
              ? "border-amber-500 text-amber-400"
              : "border-transparent text-slate-400 hover:text-white"
          }`}
        >
          <Sliders className="h-4 w-4" />
          <span>SOP & Pengaturan Sesi CBT</span>
        </button>
      </div>

      {/* TAB 1: Live Monitoring Peserta Ujian */}
      {activeTab === "monitor" && (
        <div className="space-y-4">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="h-3.5 w-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari nama atau NIS siswa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-xl border border-slate-700 bg-slate-950 pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none w-56 sm:w-64"
                />
              </div>

              <select
                value={filterRombel}
                onChange={(e) => setFilterRombel(e.target.value)}
                className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-300 focus:border-amber-500 focus:outline-none"
              >
                <option value="Semua">Semua Kelas</option>
                <option value="X BCF 1">X BCF 1</option>
                <option value="X BCF 2">X BCF 2</option>
                <option value="XI BCF">XI BCF</option>
              </select>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-300 focus:border-amber-500 focus:outline-none"
              >
                <option value="Semua">Semua Status</option>
                <option value="Mengerjakan">Mengerjakan</option>
                <option value="Selesai">Selesai</option>
                <option value="Terputus">Terputus / Kendala</option>
                <option value="Belum Login">Belum Login</option>
              </select>
            </div>

            <div className="text-xs text-slate-400">
              Menampilkan <strong>{filteredParticipants.length}</strong> peserta
            </div>
          </div>

          {/* Tabel Peserta CBT */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 uppercase font-semibold">
                <tr>
                  <th className="px-4 py-3">No</th>
                  <th className="px-4 py-3">NIS & Nama Peserta</th>
                  <th className="px-4 py-3">Kelas</th>
                  <th className="px-4 py-3">Perangkat & IP</th>
                  <th className="px-4 py-3">Mulai / Sisa Waktu</th>
                  <th className="px-4 py-3">Progres Soal</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Aksi Pengawas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {filteredParticipants.map((p, idx) => (
                  <tr key={p.id} className="hover:bg-slate-850/50 transition-colors">
                    <td className="px-4 py-3.5 font-mono text-slate-500">{idx + 1}</td>
                    <td className="px-4 py-3.5">
                      <div className="font-bold text-white">{p.name}</div>
                      <div className="text-[11px] font-mono text-amber-400/90">{p.nis}</div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="rounded-lg bg-slate-800 px-2 py-0.5 text-[11px] font-semibold text-slate-300">
                        {p.rombel}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        {p.device === "Laptop / PC" ? (
                          <Laptop className="h-3.5 w-3.5 text-sky-400" />
                        ) : (
                          <Smartphone className="h-3.5 w-3.5 text-amber-400" />
                        )}
                        <span>{p.device}</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">{p.ipAddress}</div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div>{p.startTime}</div>
                      {p.status === "Mengerjakan" && (
                        <div className="font-mono text-amber-400 font-bold">
                          {formatTimer(p.timeLeft)}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">
                          {p.answeredCount} / {p.totalQuestions}
                        </span>
                        <div className="w-16 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                          <div
                            className="h-full bg-amber-500 rounded-full"
                            style={{
                              width: `${(p.answeredCount / p.totalQuestions) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      {p.status === "Mengerjakan" && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-sky-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                          Mengerjakan
                        </span>
                      )}
                      {p.status === "Selesai" && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          Selesai ({p.score} Poin)
                        </span>
                      )}
                      {p.status === "Terputus" && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-rose-400">
                          <AlertTriangle className="h-3.5 w-3.5" />
                          Terputus
                        </span>
                      )}
                      {p.status === "Belum Login" && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 px-2.5 py-0.5 text-[11px] font-semibold text-slate-400">
                          Belum Login
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {p.status !== "Belum Login" && (
                          <button
                            type="button"
                            onClick={() => setResetModalStudent(p)}
                            title="Reset sesi jika siswa ganti HP atau browser error"
                            className="inline-flex items-center gap-1 rounded-lg border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-1 text-[11px] font-semibold text-amber-400 transition-colors"
                          >
                            <RotateCcw className="h-3 w-3" />
                            <span>Reset Login</span>
                          </button>
                        )}
                        {p.status === "Mengerjakan" && (
                          <button
                            type="button"
                            onClick={() => handleForceSubmit(p.id)}
                            title="Selesaikan ujian secara paksa"
                            className="inline-flex items-center gap-1 rounded-lg border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 px-2 py-1 text-[11px] font-semibold text-rose-400 transition-colors"
                          >
                            <X className="h-3 w-3" />
                            <span>Keluarkan</span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: Rekap Nilai & Analisis Butir Soal */}
      {activeTab === "rekap" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
            <div>
              <h3 className="text-base font-bold text-white">Rekapitulasi Nilai Peserta TKA</h3>
              <p className="text-xs text-slate-400">
                Hasil evaluasi 3 subtes: Regulasi & Etika, Logika Teknis AV, dan Manajemen Studio TV.
              </p>
            </div>
            <button
              type="button"
              onClick={handleDownloadRekapExcel}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2.5 text-xs font-bold text-white shadow transition-all"
            >
              <Download className="h-4 w-4" />
              <span>Ekspor Rekap Excel (.CSV)</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="text-xs text-slate-400 mb-1">Rata-rata Nilai Kelas</div>
              <div className="text-3xl font-extrabold text-amber-400">83.3</div>
              <div className="text-[11px] text-emerald-400 mt-1">Diatas KKM Vokasi (75.0)</div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="text-xs text-slate-400 mb-1">Nilai Tertinggi</div>
              <div className="text-3xl font-extrabold text-emerald-400">100.0</div>
              <div className="text-[11px] text-slate-400 mt-1">Eka Nurul Aisyah (X BCF 2)</div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="text-xs text-slate-400 mb-1">Tingkat Ketuntasan KKTP</div>
              <div className="text-3xl font-extrabold text-sky-400">88.5%</div>
              <div className="text-[11px] text-slate-400 mt-1">Predikat Kompeten Industri</div>
            </div>
          </div>

          {/* Rincian Peserta Selesai */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 uppercase font-semibold">
                <tr>
                  <th className="px-4 py-3">Nama Siswa</th>
                  <th className="px-4 py-3">Kelas</th>
                  <th className="px-4 py-3">Subtes 1 (Regulasi)</th>
                  <th className="px-4 py-3">Subtes 2 (Teknis AV)</th>
                  <th className="px-4 py-3">Subtes 3 (Studio TV)</th>
                  <th className="px-4 py-3">Skor Akhir</th>
                  <th className="px-4 py-3">Predikat Vokasi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {participants
                  .filter((p) => p.status === "Selesai")
                  .map((p) => (
                    <tr key={p.id} className="hover:bg-slate-850/50">
                      <td className="px-4 py-3 font-bold text-white">{p.name}</td>
                      <td className="px-4 py-3">{p.rombel}</td>
                      <td className="px-4 py-3 font-mono">{p.subtestScores?.sub1}%</td>
                      <td className="px-4 py-3 font-mono">{p.subtestScores?.sub2}%</td>
                      <td className="px-4 py-3 font-mono">{p.subtestScores?.sub3}%</td>
                      <td className="px-4 py-3 font-mono font-bold text-amber-400 text-sm">
                        {p.score}
                      </td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                          {p.score && p.score >= 85
                            ? "Sangat Kompeten"
                            : p.score && p.score >= 70
                            ? "Kompeten Industri"
                            : "Perlu Penguatan"}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: SOP & Pengaturan Sesi CBT */}
      {activeTab === "setting" && (
        <div className="space-y-4 max-w-3xl">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md space-y-5">
            <h3 className="text-base font-bold text-white mb-2">
              Standar Operasional Prosedur (SOP) & Konfigurasi Ujian CBT
            </h3>

            {/* Navigasi Cepat ke Input & Bank Soal CBT */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4">
              <div className="space-y-1">
                <div className="text-sm font-bold text-amber-300 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-amber-400" />
                  <span>Input & Kelola Butir Soal CBT</span>
                </div>
                <p className="text-xs text-slate-300">
                  Input butir soal baru (Pilihan Ganda & Esai), atur kunci jawaban, taksonomi Bloom C1–C6, upload gambar soal, atau import massal via Excel (.xlsx) / Word.
                </p>
              </div>
              <Link
                href="/guru?pg=banksoal"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 text-xs font-bold transition-all shadow-md shrink-0"
              >
                <span>Buka Bank Soal</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="text-sm font-semibold text-white">Acak Urutan Soal (Shuffle Questions)</div>
                <div className="text-xs text-slate-400">Urutan butir soal berbeda untuk setiap peserta ujian.</div>
              </div>
              <button
                type="button"
                onClick={() => setSettingRandomQuestions(!settingRandomQuestions)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                  settingRandomQuestions ? "bg-amber-500" : "bg-slate-700"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white transition ${
                    settingRandomQuestions ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="text-sm font-semibold text-white">Acak Pilihan Ganda (Shuffle Options A-E)</div>
                <div className="text-xs text-slate-400">Opsi pilihan jawaban diacak otomatis antarsiswa.</div>
              </div>
              <button
                type="button"
                onClick={() => setSettingRandomOptions(!settingRandomOptions)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                  settingRandomOptions ? "bg-amber-500" : "bg-slate-700"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white transition ${
                    settingRandomOptions ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="text-sm font-semibold text-white">Tampilkan Nilai ke Siswa Setelah Selesai</div>
                <div className="text-xs text-slate-400">Siswa dapat langsung melihat skor dan analisis radar subtes.</div>
              </div>
              <button
                type="button"
                onClick={() => setSettingShowScoreToStudent(!settingShowScoreToStudent)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                  settingShowScoreToStudent ? "bg-amber-500" : "bg-slate-700"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white transition ${
                    settingShowScoreToStudent ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="text-sm font-semibold text-white">Aktifkan Tombol Ragu-Ragu (Kuning)</div>
                <div className="text-xs text-slate-400">Siswa dapat menandai nomor soal yang belum yakin.</div>
              </div>
              <button
                type="button"
                onClick={() => setSettingEnableFlagging(!settingEnableFlagging)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                  settingEnableFlagging ? "bg-amber-500" : "bg-slate-700"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white transition ${
                    settingEnableFlagging ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="text-sm font-semibold text-white">Peringatan Anti Pindah Tab / Layar Penuh</div>
                <div className="text-xs text-slate-400">Catat log pelanggaran jika siswa meminimize aplikasi ujian.</div>
              </div>
              <button
                type="button"
                onClick={() => setSettingAntiCheatWarning(!settingAntiCheatWarning)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                  settingAntiCheatWarning ? "bg-amber-500" : "bg-slate-700"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white transition ${
                    settingAntiCheatWarning ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Durasi Pengerjaan Ujian */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="text-sm font-semibold text-white">Durasi Pengerjaan Ujian</div>
                <div className="text-xs text-slate-400">Alokasi waktu timer ujian untuk siswa per sesi.</div>
              </div>
              <select
                value={settingDuration}
                onChange={(e) => setSettingDuration(e.target.value)}
                className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500 font-semibold"
              >
                <option value="30">30 Menit</option>
                <option value="45">45 Menit</option>
                <option value="60">60 Menit</option>
                <option value="90">90 Menit</option>
                <option value="120">120 Menit</option>
              </select>
            </div>

            {/* Standar Kelulusan KKM */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="text-sm font-semibold text-white">KKM / Standar Kelulusan Kompetensi</div>
                <div className="text-xs text-slate-400">Batas minimal skor untuk predikat Kompeten Industri.</div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={settingPassingGrade}
                  onChange={(e) => setSettingPassingGrade(e.target.value)}
                  className="w-20 rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500 font-bold text-center"
                />
                <span className="text-xs text-slate-400">Poin</span>
              </div>
            </div>

            {/* Tombol Simpan Konfigurasi */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => showToast("Pengaturan CBT & SOP Ujian berhasil disimpan!")}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-orange-500 transition-all cursor-pointer"
              >
                <Check className="h-4 w-4" />
                <span>Simpan Pengaturan CBT</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Konfirmasi Reset Login Siswa */}
      {resetModalStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
              <RotateCcw className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-bold text-white">Konfirmasi Reset Login Peserta</h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              Anda akan me-reset sesi perangkat untuk peserta: <br />
              <strong className="text-white text-sm">{resetModalStudent.name}</strong> ({resetModalStudent.nis}) - {resetModalStudent.rombel}.
            </p>

            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-xs text-slate-400">
              ℹ️ Siswa dapat login kembali di perangkat baru/lama tanpa kehilangan riwayat jawaban yang sudah diisi.
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setResetModalStudent(null)}
                className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => handleResetStudentLogin(resetModalStudent.id)}
                className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-xs font-bold text-white shadow"
              >
                Reset Sesi Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
