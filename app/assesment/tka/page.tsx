"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { apiUrl } from "@/lib/api-client";
import {
  Award,
  Timer,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Flag,
  BookOpen,
  Sparkles,
  BarChart3,
  Check,
  X,
  Target,
  BrainCircuit,
  Sliders,
  ShieldCheck,
  ExternalLink,
  QrCode,
  Camera,
  Upload,
  Smartphone,
  Laptop,
  Apple,
  Info,
  UserCheck,
  KeyRound,
  FileSpreadsheet,
  Layers,
  HelpCircle,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from "lucide-react";

interface TKAQuestion {
  id: number;
  subtest: "Regulasi & Etika" | "Logika Teknis AV" | "Manajemen & Studio";
  subtestId: 1 | 2 | 3;
  stem: string;
  context?: string;
  options: { key: string; text: string }[];
  correctKey: string;
  explanation: string;
}

const TKA_QUESTIONS: TKAQuestion[] = [
  // Subtes 1: Regulasi & Etika Penyiaran
  {
    id: 1,
    subtest: "Regulasi & Etika",
    subtestId: 1,
    context: "Studi Kasus Penyiaran Berita Kriminal Televisi:",
    stem: "Sebuah program berita televisi menyiarkan liputan langsung kasus tindak pidana asusila yang melibatkan korban di bawah umur. Kamera menyorot wajah anak tersebut secara samar (blur tipis) dan menyebutkan inisial nama lengkap serta nama sekolah korban. Berdasarkan P3SPS KPI dan UU Perlindungan Anak, pelanggaran etika penyiaran paling fatal yang dilakukan tim redaksi adalah...",
    options: [
      { key: "A", text: "Menyiarkan berita pada jam tayang non-dewasa" },
      { key: "B", text: "Membuka identitas anak yang menjadi korban tindak pidana sehingga memicu viktimisasi sekunder" },
      { key: "C", text: "Tidak menampilkan gambar orang tua korban di samping anak" },
      { key: "D", text: "Menggunakan mikrofon tanpa windshield" },
      { key: "E", text: "Mengunggah cuplikan siaran ke platform media sosial tanpa watermark stasiun TV" },
    ],
    correctKey: "B",
    explanation: "Pedoman Perilaku Penyiaran dan Standar Program Siaran (P3SPS) melarang keras pembukaan identitas anak (wajah, nama, keluarga, sekolah) korban kejahatan seksual demi menjaga masa depan dan martabat anak.",
  },
  {
    id: 2,
    subtest: "Regulasi & Etika",
    subtestId: 1,
    context: "Hak Cipta New Media & Internet Broadcasting:",
    stem: "Seorang editor membuat video promosi pariwisata daerah berdurasi 3 menit untuk diunggah ke YouTube dan Instagram stasiun TV lokal. Ia mengunduh lagu musisi indie berlisensi Creative Commons Attribution-NonCommercial (CC BY-NC). Namun, video promosi tersebut disponsori oleh sponsor komersial (brand hotel berbintang). Keputusan editor ini...",
    options: [
      { key: "A", text: "Tepat, karena mencantumkan nama artis di deskripsi video" },
      { key: "B", text: "Tepat, selama durasi lagu tidak melebihi 30 detik (prinsip fair use)" },
      { key: "C", text: "Melanggar lisensi, karena klausul 'NC (Non-Commercial)' melarang pemanfaatan lagu untuk konten yang bermuatan sponsor atau komersial" },
      { key: "D", text: "Sah secara hukum jika format video diedit menjadi format vertikal 9:16" },
      { key: "E", text: "Tidak bermasalah karena diunggah oleh stasiun TV yang memiliki izin penyiaran FTA" },
    ],
    correctKey: "C",
    explanation: "Lisensi CC BY-NC secara tegas melarang segala bentuk eksploitasi yang menghasilkan keuntungan finansial atau promosi komersial sponsor.",
  },

  // Subtes 2: Logika Teknis Audio-Visual
  {
    id: 3,
    subtest: "Logika Teknis AV",
    subtestId: 2,
    context: "Analisis Eksposur & Dynamic Range Digital:",
    stem: "Saat melakukan shooting adegan interior mobil di mana latar belakang jendela luar sangat terang benderang sementara subjek di dalam mobil gelap, kamera dengan profil warna Log (S-Log/C-Log) menampilkan clipping putih (zebra 100%) di area luar. Upaya teknis sinematografi paling efektif untuk menyeimbangkan dynamic range adegan tersebut adalah...",
    options: [
      { key: "A", text: "Menurunkan aperture ke f/22 dan mematikan lampu interior" },
      { key: "B", text: "Memasang filter ND Gradual pada kaca mobil dan menambahkan lampu LED fleksibel berdaya baterai dengan diffuser untuk mengisi (fill) subjek di dalam" },
      { key: "C", text: "Menaikkan ISO kamera ke nilai tertinggi (ISO 12800)" },
      { key: "D", text: "Mengubah frame rate dari 24 fps menjadi 120 fps" },
      { key: "E", text: "Mengarahkan kamera menghadap langsung ke kaca depan mobil" },
    ],
    correctKey: "B",
    explanation: "Memasang ND gradual mengurangi intensitas cahaya berlebih dari luar jendela, sementara lampu interior LED menaikkan exposure subjek sehingga rasio kontras berada dalam rentang dynamic range sensor kamera.",
  },
  {
    id: 4,
    subtest: "Logika Teknis AV",
    subtestId: 2,
    context: "Akustik Ruang & Polar Pattern Audio:",
    stem: "Sebuah studio rekaman podcast dadakan dibuat di dalam ruangan berdinding keramik dan kaca tanpa peredam busa. Saat merekam dengan dua mikrofon kondenser berjarak dekat, hasil audio terdengar bergema (reverberasi tajam) dan terjadi kebocoran suara antarnarasumber (*cross-bleed*). Solusi teknis audio terpadu adalah...",
    options: [
      { key: "A", text: "Mengganti mikrofon kondenser dengan mikrofon Dynamic ber-polar pattern Cardioid/Supercardioid, dan memasang moving blanket atau acoustic panel di titik pantul dinding" },
      { key: "B", text: "Menaikkan gain audio mixer hingga volume maksimal +10 dB" },
      { key: "C", text: "Mengganti kabel mikrofon menjadi kabel optik Toslink" },
      { key: "D", text: "Menjauhkan posisi mikrofon 2 meter dari mulut narasumber" },
      { key: "E", text: "Menerapkan efek flanger dan echo pada channel master" },
    ],
    correctKey: "A",
    explanation: "Mikrofon dynamic cardioid kurang sensitif terhadap pantulan ruang jarak jauh dibandingkan kondenser, dan acoustic panel/blanket menyerap gelombang pantul gema keramik.",
  },

  // Subtes 3: Manajemen & Problem Solving Studio TV
  {
    id: 5,
    subtest: "Manajemen & Studio",
    subtestId: 3,
    context: "Kendala Siaran Langsung (Live Broadcast Breakdown):",
    stem: "Sepuluh detik sebelum program talkshow siaran langsung (live) on-air, presenter utama mengalami batuk hebat dan mikrofon clip-on miliknya terlepas. Di monitor master switcher, sutradara (Program Director) harus mengambil keputusan cepat dalam hitungan detik. Keputusan manajerial studio yang paling profesional dan tenang adalah...",
    options: [
      { key: "A", text: "Membiarkan siaran dimulai dengan presenter batuk" },
      { key: "B", text: "Menginstruksikan operator VTR/Playout untuk memutar Filler/Opening bumper/VT selingan terlebih dahulu, sementara Floor Director (FD) memperbaiki mikrofon presenter" },
      { key: "C", text: "Mematikan pemancar stasiun televisi seketika" },
      { key: "D", text: "Menyalahkan Floor Director melalui intercom studio" },
      { key: "E", text: "Mengganti presenter dengan kameramen yang sedang memegang Kamera 1" },
    ],
    correctKey: "B",
    explanation: "Menayangkan VT/filler cadangan adalah SOP standar 'stand-by emergency plan' untuk mengulur waktu secara elegan di depan pemirsa televisi tanpa jeda mati (*dead air*).",
  },
  {
    id: 6,
    subtest: "Manajemen & Studio",
    subtestId: 3,
    context: "SOP K3 & Instalasi Kelistrikan Studio TV:",
    stem: "Dalam penataan lampu studio gantung (*lighting grid ceiling*), teknisi memasang lampu Fresnel seberat 8 kg pada pipa rigging menggunakan C-Clamp. Demi mematuhi Standar Keselamatan dan Kesehatan Kerja (K3), prosedur wajib yang TIDAK boleh dilewatkan adalah...",
    options: [
      { key: "A", text: "Memasang kabel pengaman baja (*Safety Bond/Safety Cable*) yang dikaitkan kuat antara badan lampu dan pipa rigging" },
      { key: "B", text: "Menghubungkan lampu langsung ke stopkontak rumah tangga tanpa sekring MCB" },
      { key: "C", text: "Mengecat badan lampu dengan warna merah mencolok" },
      { key: "D", text: "Menyalakan lampu pada intensitas 100% saat kru berada tepat di bawahnya" },
      { key: "E", text: "Melepas barn door agar lampu lebih ringan" },
    ],
    correctKey: "A",
    explanation: "Safety bond adalah perangkat keselamatan wajib pada instalasi lampu rigging atas untuk mencegah lampu jatuh menimpa kru atau presenter jika C-clamp mengalami kegagalan mekanis.",
  },
];

export default function TesKompetensiAkademikPage() {
  // Login Form States (ala CBT Yamaclaw)
  const [loginMethod, setLoginMethod] = useState<"form" | "scan">("form");
  const [usernameInput, setUsernameInput] = useState("2026-BCF-042");
  const [passwordInput, setPasswordInput] = useState("••••••");
  const [tokenInput, setTokenInput] = useState("TKAPRO");
  const [studentName, setStudentName] = useState("Ahmad Fauzan (X BCF 1)");
  const [cameraActive, setCameraActive] = useState(false);
  const [scanSuccessMessage, setScanSuccessMessage] = useState<string | null>(null);

  // Guide Tab
  const [guideTab, setGuideTab] = useState<"android" | "ios" | "pc">("android");

  // CBT Exam States
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(45 * 60); // 45 Menit
  const [isFinished, setIsFinished] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [fontSizeMode, setFontSizeMode] = useState<"normal" | "large" | "xlarge">("normal");
  const [userRole, setUserRole] = useState<string>("murid");

  useEffect(() => {
    fetch(apiUrl("/api/auth/me"))
      .then((res) => res.json())
      .then((data) => {
        if (data?.user?.role) setUserRole(data.user.role);
      })
      .catch(() => {});
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isTestStarted || isFinished) return;
    const interval = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isTestStarted, isFinished]);

  const handleStartTest = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!tokenInput.trim()) {
      alert("Masukkan token TKA terlebih dahulu.");
      return;
    }
    setIsTestStarted(true);
    setCurrentIndex(0);
    setAnswers({});
    setFlagged({});
    setIsFinished(false);
    setTimeLeftSeconds(45 * 60);
  };

  const handleSimulateCameraScan = () => {
    setCameraActive(true);
    setScanSuccessMessage("Membuka sensor optik kamera...");
    setTimeout(() => {
      setScanSuccessMessage("✅ Kartu Ujian Terdeteksi: 2026-BCF-042 (Ahmad Fauzan)");
      setUsernameInput("2026-BCF-042");
      setPasswordInput("••••••");
      setTokenInput("TKAPRO");
      setTimeout(() => {
        setCameraActive(false);
        handleStartTest();
      }, 1200);
    }, 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setScanSuccessMessage(`✅ Berkas ${e.target.files[0].name} terverifikasi. Memulai ujian...`);
      setTimeout(() => {
        handleStartTest();
      }, 1000);
    }
  };

  const handleSelectOption = (questionId: number, key: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: key,
    }));
  };

  const toggleFlag = (questionId: number) => {
    setFlagged((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Skor analisis per subtes
  const analysisResult = useMemo(() => {
    if (!isFinished) return null;

    let sub1Correct = 0, sub1Total = 0;
    let sub2Correct = 0, sub2Total = 0;
    let sub3Correct = 0, sub3Total = 0;

    TKA_QUESTIONS.forEach((q) => {
      const isCorrect = answers[q.id] === q.correctKey;
      if (q.subtestId === 1) {
        sub1Total++;
        if (isCorrect) sub1Correct++;
      } else if (q.subtestId === 2) {
        sub2Total++;
        if (isCorrect) sub2Correct++;
      } else if (q.subtestId === 3) {
        sub3Total++;
        if (isCorrect) sub3Correct++;
      }
    });

    const totalCorrect = sub1Correct + sub2Correct + sub3Correct;
    const totalQuestions = TKA_QUESTIONS.length;
    const overallScore = Math.round((totalCorrect / totalQuestions) * 100);

    const sub1Percent = Math.round((sub1Correct / sub1Total) * 100);
    const sub2Percent = Math.round((sub2Correct / sub2Total) * 100);
    const sub3Percent = Math.round((sub3Correct / sub3Total) * 100);

    let predicate = "Perlu Penguatan Vokasi";
    if (overallScore >= 85) predicate = "Sangat Kompeten (Mandiri)";
    else if (overallScore >= 70) predicate = "Kompeten Berstandar Industri";
    else if (overallScore >= 55) predicate = "Cukup Kompeten";

    return {
      overallScore,
      totalCorrect,
      totalQuestions,
      predicate,
      subtests: [
        { name: "Literasi & Regulasi Penyiaran", score: sub1Percent, correct: sub1Correct, total: sub1Total, color: "bg-sky-500" },
        { name: "Logika Teknis Audio-Visual", score: sub2Percent, correct: sub2Correct, total: sub2Total, color: "bg-indigo-500" },
        { name: "Manajemen & Studio TV", score: sub3Percent, correct: sub3Correct, total: sub3Total, color: "bg-amber-500" },
      ],
    };
  }, [isFinished, answers]);

  const currentQ = TKA_QUESTIONS[currentIndex];
  const answeredCount = Object.keys(answers).length;

  const fontClasses = {
    normal: "text-sm sm:text-base leading-relaxed",
    large: "text-base sm:text-lg leading-relaxed",
    xlarge: "text-lg sm:text-xl leading-relaxed",
  }[fontSizeMode];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Top Identity & Navigasi Silang (Siswa <-> Guru Pengawas) ala Yamaclaw CBT */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <Link
          href="/assesment"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Portal Assesment</span>
        </Link>

        {/* Link Terpadu Portal Guru & Pengawas (Khusus Guru & Admin) */}
        {(userRole === "guru" || userRole === "super_admin") && (
          <div className="flex items-center gap-3">
            <Link
              href="/assesment/tka/guru"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-3.5 py-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-all shadow-sm"
            >
              <UserCheck className="h-3.5 w-3.5" />
              <span>Portal Guru & Pengawas</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        )}
      </div>

      {/* TAMPILAN 1: Halaman Masuk Ujian CBT (Login & Scan Kartu ala Yamaclaw Server) */}
      {!isTestStarted && (
        <div className="space-y-10">
          {/* Hero Banner CBT Sekolah */}
          <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-r from-slate-900 via-slate-850 to-amber-950/40 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-400">
                    SMKN Broadcasting & Perfilman
                  </span>
                  <span className="rounded-full bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 text-xs font-semibold text-sky-400">
                    CBT Peserta Ujian
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Ujian Mandiri, Tertib & Penuh Integritas
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Sistem Computer Based Test (CBT) resmi Tes Kompetensi Akademik (TKA) Kejuruan Broadcasting & Perfilman. Junjung tinggi kejujuran, ketertiban, dan profesionalisme vokasi.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-slate-950/70 border border-slate-800 rounded-2xl p-4 shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Integritas CBT</div>
                  <div className="text-sm font-bold text-white">Anti-Cheat Mode</div>
                  <div className="text-[11px] text-emerald-400 font-medium">Enkripsi Jawaban Aktif</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form & Metode Masuk Ujian Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Box Kiri: Masuk Ujian & Scan Kartu */}
            <div className="lg:col-span-7 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <KeyRound className="h-5 w-5 text-amber-400" />
                    Masuk Ujian CBT
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Masukkan Username dan Password pada kartu ujian Anda.
                  </p>
                </div>

                {/* Tab Switcher: Form vs Scan */}
                <div className="flex rounded-xl bg-slate-950 border border-slate-800 p-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setLoginMethod("form")}
                    className={`rounded-lg px-3 py-1 font-semibold transition-all ${
                      loginMethod === "form"
                        ? "bg-amber-500 text-white shadow"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Form Login
                  </button>
                  <button
                    type="button"
                    onClick={() => setLoginMethod("scan")}
                    className={`rounded-lg px-3 py-1 font-semibold transition-all flex items-center gap-1.5 ${
                      loginMethod === "scan"
                        ? "bg-amber-500 text-white shadow"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <QrCode className="h-3.5 w-3.5" />
                    <span>Pindai Kartu</span>
                  </button>
                </div>
              </div>

              {/* METODE 1: FORM LOGIN MANUAL */}
              {loginMethod === "form" && (
                <form onSubmit={handleStartTest} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Username / Nomor Peserta Ujian:
                    </label>
                    <input
                      type="text"
                      value={usernameInput}
                      onChange={(e) => setUsernameInput(e.target.value)}
                      placeholder="Contoh: 2026-BCF-042"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 font-mono text-sm text-white focus:border-amber-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Password / PIN Ujian:
                    </label>
                    <input
                      type="password"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      placeholder="Password kartu ujian"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Token Ujian (Rilis Pengawas):
                      </label>
                      <span className="text-[11px] text-amber-400 font-mono">
                        Aktif: TKAPRO
                      </span>
                    </div>
                    <input
                      type="text"
                      value={tokenInput}
                      onChange={(e) => setTokenInput(e.target.value.toUpperCase())}
                      placeholder="Masukkan 6 Digit Token"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 font-mono text-sm text-white uppercase focus:border-amber-500 focus:outline-none"
                      required
                    />
                    <p className="text-[11px] text-slate-400 mt-1">
                      Minta token kepada pengawas ruang atau gunakan token default <code className="text-amber-400 font-bold">TKAPRO</code>.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 py-3 text-sm font-bold text-white shadow-xl shadow-amber-500/20 hover:from-amber-400 hover:to-orange-500 transition-all hover:scale-[1.01]"
                  >
                    <Target className="h-4 w-4" />
                    <span>Masuk & Kerjakan Soal TKA</span>
                  </button>
                </form>
              )}

              {/* METODE 2: SCAN KARTU UJIAN FISIK */}
              {loginMethod === "scan" && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-dashed border-amber-500/40 bg-slate-950/60 p-6 text-center space-y-4">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      <QrCode className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Pindai Barcode / QR Code Kartu Ujian
                      </h4>
                      <p className="text-xs text-slate-400 max-w-md mx-auto mt-1">
                        Arahkan fisik kartu ujian Anda ke kamera untuk masuk secara instan tanpa perlu mengetik nomor peserta dan kata sandi.
                      </p>
                    </div>

                    {scanSuccessMessage && (
                      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-semibold text-emerald-400 animate-pulse">
                        {scanSuccessMessage}
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleSimulateCameraScan}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2.5 text-xs font-bold text-white shadow transition-all hover:scale-[1.02]"
                      >
                        <Camera className="h-4 w-4" />
                        <span>Buka Kamera Scan</span>
                      </button>

                      <label className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-750 px-4 py-2.5 text-xs font-semibold text-slate-200 cursor-pointer transition-colors">
                        <Upload className="h-4 w-4" />
                        <span>Pilih Foto Kartu Ujian</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 leading-relaxed">
                    💡 <strong>Tips:</strong> Pastikan pencahayaan cukup dan QR Code pada kartu ujian berada di dalam bingkai bidik kamera.
                  </div>
                </div>
              )}
            </div>

            {/* Box Kanan: Panduan Pasang Aplikasi Ujian (Android, iOS, PC) ala Yamaclaw */}
            <div className="lg:col-span-5 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-xl shadow-xl space-y-4">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-sky-400" />
                  Panduan Pasang Aplikasi Ujian
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Langkah memasang portal CBT di berbagai perangkat
                </p>
              </div>

              {/* Tab Perangkat */}
              <div className="flex border-b border-slate-800 gap-2">
                <button
                  type="button"
                  onClick={() => setGuideTab("android")}
                  className={`flex items-center gap-1.5 pb-2 px-3 text-xs font-bold border-b-2 transition-all ${
                    guideTab === "android"
                      ? "border-sky-500 text-sky-400"
                      : "border-transparent text-slate-400 hover:text-white"
                  }`}
                >
                  <Smartphone className="h-3.5 w-3.5" />
                  <span>Android</span>
                </button>
                <button
                  type="button"
                  onClick={() => setGuideTab("ios")}
                  className={`flex items-center gap-1.5 pb-2 px-3 text-xs font-bold border-b-2 transition-all ${
                    guideTab === "ios"
                      ? "border-sky-500 text-sky-400"
                      : "border-transparent text-slate-400 hover:text-white"
                  }`}
                >
                  <Apple className="h-3.5 w-3.5" />
                  <span>iPhone / iPad</span>
                </button>
                <button
                  type="button"
                  onClick={() => setGuideTab("pc")}
                  className={`flex items-center gap-1.5 pb-2 px-3 text-xs font-bold border-b-2 transition-all ${
                    guideTab === "pc"
                      ? "border-sky-500 text-sky-400"
                      : "border-transparent text-slate-400 hover:text-white"
                  }`}
                >
                  <Laptop className="h-3.5 w-3.5" />
                  <span>Laptop / PC</span>
                </button>
              </div>

              {/* Isi Tab Panduan */}
              <div className="space-y-3 text-xs text-slate-300">
                {guideTab === "android" && (
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 font-bold text-[10px]">1</span>
                      <span>Buka peramban <strong>Google Chrome</strong> di smartphone Android Anda.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 font-bold text-[10px]">2</span>
                      <span>Ketuk tombol menu titik tiga (⋮) di pojok kanan atas.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 font-bold text-[10px]">3</span>
                      <span>Pilih opsi <strong>&quot;Tambahkan ke Layar Utama&quot;</strong> atau <strong>&quot;Instal Aplikasi&quot;</strong>.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 font-bold text-[10px]">4</span>
                      <span>Ikon aplikasi CBT BroMan akan muncul di beranda dan berjalan dalam mode layar penuh (Kiosk).</span>
                    </div>
                  </div>
                )}

                {guideTab === "ios" && (
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 font-bold text-[10px]">1</span>
                      <span>Buka peramban <strong>Safari</strong> di perangkat iPhone atau iPad Anda.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 font-bold text-[10px]">2</span>
                      <span>Tekan ikon tombol <strong>Bagikan (Share)</strong> di bilah bawah.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 font-bold text-[10px]">3</span>
                      <span>Gulir ke bawah lalu pilih <strong>&quot;Tambah ke Layar Utama&quot; (Add to Home Screen)</strong>.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 font-bold text-[10px]">4</span>
                      <span>Buka aplikasi dari beranda untuk mengaktifkan Single App Lockdown.</span>
                    </div>
                  </div>
                )}

                {guideTab === "pc" && (
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 font-bold text-[10px]">1</span>
                      <span>Gunakan browser <strong>Google Chrome</strong> atau <strong>Microsoft Edge</strong> versi terbaru.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 font-bold text-[10px]">2</span>
                      <span>Tekan tombol <strong>F11</strong> pada keyboard untuk mengaktifkan mode Layar Penuh (Fullscreen).</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 font-bold text-[10px]">3</span>
                      <span>Dilarang membuka tab baru atau aplikasi lain selama ujian berlangsung.</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Rincian 3 Subtes TKA */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  Cakupan 3 Subtes TKA:
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-1 text-[11px]">
                  <div className="text-sky-400 font-semibold">• Subtes 1: Regulasi & Etika Penyiaran (P3SPS KPI)</div>
                  <div className="text-indigo-400 font-semibold">• Subtes 2: Logika Teknis Audio-Visual & Kamera</div>
                  <div className="text-amber-400 font-semibold">• Subtes 3: Problem Solving Manajemen Studio TV</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAMPILAN 2: CBT Lembar Pengerjaan TKA Interaktif */}
      {isTestStarted && !isFinished && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sisi Kiri: Soal CBT */}
          <div className="lg:col-span-3 space-y-4">
            {/* Top Bar Pengawas & Peserta */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 font-bold text-amber-400 border border-amber-500/20 text-sm">
                  {currentIndex + 1}
                </span>
                <div>
                  <div className="text-xs font-semibold text-white">
                    Soal Nomor {currentIndex + 1} dari {TKA_QUESTIONS.length}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Subtes: <span className="font-semibold text-amber-400">{currentQ.subtest}</span>
                  </div>
                </div>
              </div>

              {/* Font Size Adjuster & Timer Bar */}
              <div className="flex items-center gap-3">
                {/* Font Adjuster (A-, A, A+) */}
                <div className="flex items-center rounded-xl border border-slate-800 bg-slate-950 p-1 text-xs">
                  <button
                    type="button"
                    title="Font Normal"
                    onClick={() => setFontSizeMode("normal")}
                    className={`px-2 py-0.5 rounded font-bold ${
                      fontSizeMode === "normal" ? "bg-amber-500 text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    A-
                  </button>
                  <button
                    type="button"
                    title="Font Sedang"
                    onClick={() => setFontSizeMode("large")}
                    className={`px-2 py-0.5 rounded font-bold ${
                      fontSizeMode === "large" ? "bg-amber-500 text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    A
                  </button>
                  <button
                    type="button"
                    title="Font Besar"
                    onClick={() => setFontSizeMode("xlarge")}
                    className={`px-2 py-0.5 rounded font-bold ${
                      fontSizeMode === "xlarge" ? "bg-amber-500 text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    A+
                  </button>
                </div>

                {/* Timer Bar */}
                <div className="flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-mono font-bold text-amber-400">
                  <Timer className="h-4 w-4" />
                  <span>{formatTimer(timeLeftSeconds)}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowConfirmModal(true)}
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-white shadow transition-all"
                >
                  Selesai Ujian
                </button>
              </div>
            </div>

            {/* Soal Box */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-md shadow-xl space-y-6">
              {currentQ.context && (
                <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 text-xs font-medium text-slate-300 border-l-4 border-l-amber-500">
                  <span className="font-bold text-amber-400 block mb-1">Konteks / Skenario Masalah:</span>
                  {currentQ.context}
                </div>
              )}

              <p className={`text-slate-100 font-medium ${fontClasses}`}>
                {currentQ.stem}
              </p>

              {/* Opsi Pilihan Ganda */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((opt) => {
                  const isSelected = answers[currentQ.id] === opt.key;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => handleSelectOption(currentQ.id, opt.key)}
                      className={`w-full flex items-start gap-3 rounded-2xl p-4 border text-left transition-all ${
                        isSelected
                          ? "border-amber-500 bg-amber-500/15 text-white shadow-md shadow-amber-500/10"
                          : "border-slate-800 bg-slate-950/50 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all ${
                          isSelected
                            ? "bg-amber-500 text-white"
                            : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        {opt.key}
                      </span>
                      <span className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Navigasi Bawah ala UNBK / Asesmen Nasional */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-800/80 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white disabled:opacity-40 transition-all"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Soal Sebelumnya</span>
                </button>

                {/* Tombol Ragu-Ragu (Kuning Resmi CBT) */}
                <button
                  type="button"
                  onClick={() => toggleFlag(currentQ.id)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all border ${
                    flagged[currentQ.id]
                      ? "border-amber-400 bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20"
                      : "border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20"
                  }`}
                >
                  <Flag className="h-3.5 w-3.5" />
                  <span>{flagged[currentQ.id] ? "Ragu-Ragu (Kuning)" : "Tandai Ragu"}</span>
                </button>

                {currentIndex < TKA_QUESTIONS.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentIndex((prev) => prev + 1)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 px-4 py-2 text-xs font-semibold text-white transition-all shadow"
                  >
                    <span>Soal Berikutnya</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowConfirmModal(true)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-bold text-white transition-all shadow"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Selesai & Kumpulkan</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Kisi-kisi Nomor Soal Lengkap */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 backdrop-blur-md shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  Daftar Soal CBT
                </h3>
                <span className="text-[11px] text-slate-400">
                  Terjawab: <strong>{answeredCount}</strong> / {TKA_QUESTIONS.length}
                </span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-2 mb-4">
                {TKA_QUESTIONS.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAnswered = !!answers[q.id];
                  const isFlag = !!flagged[q.id];

                  let colorClass = "border-slate-800 bg-slate-950 text-slate-400";
                  if (isFlag) {
                    colorClass = "border-amber-400 bg-amber-400 text-slate-950 font-black shadow";
                  } else if (isAnswered) {
                    colorClass = "border-emerald-500 bg-emerald-500/20 text-emerald-300 font-bold";
                  }

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-9 rounded-xl border text-xs font-semibold transition-all relative ${colorClass} ${
                        isCurrent ? "ring-2 ring-white ring-offset-1 ring-offset-slate-950" : ""
                      }`}
                    >
                      {idx + 1}
                      {isAnswered && !isFlag && (
                        <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Legend Status Soal ala CBT Nasional */}
              <div className="pt-3 border-t border-slate-800 space-y-1.5 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-500/40 border border-emerald-500 shrink-0" />
                  <span className="text-slate-300">Hijau: Sudah Terjawab</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-amber-400 border border-amber-300 shrink-0" />
                  <span className="text-slate-300">Kuning: Ditandai Ragu-Ragu</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-slate-950 border border-slate-700 shrink-0" />
                  <span className="text-slate-400">Abu-abu: Belum Terjawab</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAMPILAN 3: Rapor Analisis Kompetensi TKA */}
      {isFinished && analysisResult && (
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header Kartu Skor TKA */}
          <div className="rounded-3xl border border-amber-500/40 bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/30 p-8 backdrop-blur-xl shadow-2xl text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-4 shadow-xl shadow-amber-500/20">
              <Award className="h-8 w-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Rapor Evaluasi Tes Kompetensi Akademik (TKA)
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Standarisasi Vokasi Broadcasting & Perfilman SMKN BroMan
            </p>

            <div className="my-6 inline-flex flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-950/80 px-8 py-5 shadow-inner">
              <span className="text-4xl sm:text-6xl font-black text-amber-400">
                {analysisResult.overallScore}
              </span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
                Indeks Kemahiran TKA
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400 mb-6">
              <CheckCircle2 className="h-4 w-4" />
              <span>Predikat: {analysisResult.predicate}</span>
            </div>

            {/* Breakdown Subtes Grafik Bar */}
            <div className="max-w-xl mx-auto space-y-3 text-left pt-6 border-t border-slate-800">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 text-center">
                Analisis Capaian Per Subtes
              </h4>

              {analysisResult.subtests.map((sub, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">{sub.name}</span>
                    <span className="text-white font-bold">{sub.score}% ({sub.correct}/{sub.total})</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${sub.color} transition-all duration-1000`}
                      style={{ width: `${sub.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                type="button"
                onClick={() => {
                  setIsFinished(false);
                  setIsTestStarted(false);
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2.5 text-xs font-semibold text-white transition-all"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Ulangi Simulasi</span>
              </button>
              <Link
                href="/assesment"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2.5 text-xs font-semibold text-white shadow transition-all hover:scale-[1.02]"
              >
                <span>Kembali ke Portal Assesment</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Pembahasan Soal TKA */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-amber-400" />
              Pembahasan Kunci Jawaban & Logika Masalah
            </h3>

            {TKA_QUESTIONS.map((q, idx) => {
              const studentAns = answers[q.id];
              const isCorrect = studentAns === q.correctKey;

              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border p-5 sm:p-6 backdrop-blur-md transition-all ${
                    isCorrect
                      ? "border-emerald-500/30 bg-emerald-950/10"
                      : "border-rose-500/30 bg-rose-950/10"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-white">
                      Soal #{idx + 1} • {q.subtest}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                        isCorrect
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-rose-500/20 text-rose-300"
                      }`}
                    >
                      {isCorrect ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                      {isCorrect ? "Tepat" : "Belum Tepat"}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 mb-3">{q.stem}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                    <div className="p-2.5 rounded-xl border border-slate-800 bg-slate-950/60">
                      <span className="text-slate-400 block text-[10px]">Pilihan Anda:</span>
                      <span className={isCorrect ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>
                        {studentAns || "Tidak dijawab"}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl border border-slate-800 bg-slate-950/60">
                      <span className="text-slate-400 block text-[10px]">Kunci Tepat:</span>
                      <span className="text-amber-400 font-bold">{q.correctKey}</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-xs text-slate-300">
                    <span className="font-semibold text-amber-400 block mb-1">
                      💡 Solusi Standar Industri:
                    </span>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Modal Konfirmasi Selesai Ujian */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
              <AlertCircle className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-bold text-white">Konfirmasi Selesai Tes TKA</h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              Anda telah menjawab <strong>{answeredCount}</strong> dari <strong>{TKA_QUESTIONS.length}</strong> butir penalaran TKA. 
              {TKA_QUESTIONS.length - answeredCount > 0 && (
                <span className="text-rose-400 block mt-1">
                  Masih terdapat {TKA_QUESTIONS.length - answeredCount} butir yang belum terisi.
                </span>
              )}
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
              >
                Kembali Periksa
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowConfirmModal(false);
                  setIsFinished(true);
                }}
                className="rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow"
              >
                Kumpulkan & Analisis
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
