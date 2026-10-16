"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  FileSpreadsheet,
  Timer,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  RotateCcw,
  Flag,
  Award,
  BookOpen,
  Film,
  Tv,
  Check,
  X,
  Sparkles,
} from "lucide-react";

interface QuestionItem {
  id: number;
  bloom: "C1" | "C2" | "C3" | "C4" | "C5" | "C6";
  elemen: string;
  stem: string;
  stimulus?: string;
  options: { key: string; text: string }[];
  correctKey: string;
  explanation: string;
}

const QUESTIONS_FASE_E: QuestionItem[] = [
  {
    id: 1,
    bloom: "C1",
    elemen: "E1 - Dunia Kerja & K3",
    stem: "Dalam struktur organisasi produksi film, penanggung jawab utama atas visi kreatif, mise-en-scène, dan penyutradaraan pemeran di lokasi shooting adalah...",
    options: [
      { key: "A", text: "Produser Eksekutif" },
      { key: "B", text: "Sutradara (Director)" },
      { key: "C", text: "Director of Photography (DoP)" },
      { key: "D", text: "Art Director" },
      { key: "E", text: "Gaffer" },
    ],
    correctKey: "B",
    explanation: "Sutradara (Director) memegang kemudi kreatif utama dalam mewujudkan naskah menjadi visual sinematik.",
  },
  {
    id: 2,
    bloom: "C2",
    elemen: "E1 - Budaya Kerja 5S",
    stem: "Seorang kru kamera selalu membiasakan diri membersihkan lensa, merapikan kabel HDMI, dan mengembalikan tripod ke tempat penyimpanan semula setelah shooting. Budaya kerja 5S yang tercermin adalah...",
    options: [
      { key: "A", text: "Seiri (Ringkas) dan Seiso (Resik)" },
      { key: "B", text: "Seiton (Rapi) dan Seiso (Resik)" },
      { key: "C", text: "Seiketsu (Rawat) dan Shitsuke (Rajin)" },
      { key: "D", text: "Seiso (Resik) dan Shitsuke (Rajin)" },
      { key: "E", text: "Seiton (Rapi) dan Seiketsu (Rawat)" },
    ],
    correctKey: "B",
    explanation: "Merapikan alat ke tempatnya adalah Seiton (Rapi), sedangkan membersihkan debu/lensa adalah Seiso (Resik).",
  },
  {
    id: 3,
    bloom: "C3",
    elemen: "E2 - Perkembangan Media & Regulasi",
    stem: "Sebuah rumah produksi mengunggah video teaser program web series ke YouTube menggunakan potongan lagu populer tanpa izin lisensi hak cipta (*mechanical rights*). Sanksi dan dampak hukum siber di Indonesia diatur dalam...",
    options: [
      { key: "A", text: "UU Ketenagakerjaan No. 13 Tahun 2003" },
      { key: "B", text: "UU Hak Cipta No. 28 Tahun 2014 & UU ITE" },
      { key: "C", text: "P3SPS KPI Bab V" },
      { key: "D", text: "UU Perlindungan Konsumen" },
      { key: "E", text: "Standar Operasional Penyiaran FTA" },
    ],
    correctKey: "B",
    explanation: "Pelanggaran penggunaan musik berhak cipta pada media digital diatur oleh UU Hak Cipta No. 28 Tahun 2014 serta regulasi siber UU ITE.",
  },
  {
    id: 4,
    bloom: "C4",
    elemen: "E3 - Tata Kamera & Audio Visual",
    stem: "Saat shooting adegan luar ruangan di bawah terik matahari siang, gambar terlihat terlalu terang (*overexposure*). Kamera sudah diatur pada ISO 100 dan Shutter Speed 1/50 detik (aturan 180° shutter untuk 25 fps). Solusi teknis sinematografi paling tepat tanpa merusak *motion blur* adalah...",
    stimulus: "Kondisi: Terik siang hari, ISO 100, Shutter 1/50s, bukaan lensa ingin tetap f/2.8 agar latar belakang bokeh.",
    options: [
      { key: "A", text: "Menaikkan Shutter Speed menjadi 1/2000 detik" },
      { key: "B", text: "Mengaktifkan ND (Neutral Density) Filter pada lensa" },
      { key: "C", text: "Menutup aperture hingga f/22" },
      { key: "D", text: "Mengubah format perekaman dari 25 fps ke 50 fps" },
      { key: "E", text: "Menurunkan White Balance ke 3200 Kelvin" },
    ],
    correctKey: "B",
    explanation: "Menggunakan Neutral Density (ND) filter mereduksi intensitas cahaya masuk tanpa mengubah shutter speed (menjaga motion blur) dan tanpa menutup aperture (menjaga depth of field).",
  },
  {
    id: 5,
    bloom: "C4",
    elemen: "E3 - Tata Suara Dasar",
    stem: "Dalam pengambilan suara wawancara luar ruangan yang berangin kencang, mikrofon kondenser menangkap suara gemuruh angin (*wind rumble*). Aksesori dan setelan audio yang wajib dipasang adalah...",
    options: [
      { key: "A", text: "Shockmount dan gain dinaikkan +12dB" },
      { key: "B", text: "Windshield bulu (Deadcat / Blimp) serta aktifkan High-Pass Filter (Low-Cut)" },
      { key: "C", text: "Pop filter studio dan aktifkan limiter" },
      { key: "D", text: "Ganti polar pattern menjadi omnidirectional" },
      { key: "E", text: "Gunakan kabel XLR balance 10 meter" },
    ],
    correctKey: "B",
    explanation: "Deadcat/Blimp memecah hembusan angin pada membran kapsul, dan High-Pass Filter (80Hz) memangkas frekuensi rendah rumble.",
  },
  {
    id: 6,
    bloom: "C5",
    elemen: "E4 - Proses Produksi",
    stem: "Evaluasi tahapan pra-produksi sebuah proyek film pendek menunjukkan bahwa jadwal shooting molor 4 jam karena aktor belum menghafal naskah dan lokasi belum mengantongi izin RT/RW setempat. Dokumen pra-produksi yang lalai disusun secara matang adalah...",
    options: [
      { key: "A", text: "Shooting Script dan Floor Plan" },
      { key: "B", text: "Call Sheet, Recce/Location Agreement, dan Jadwal Reading" },
      { key: "C", text: "Storyboard dan Moodboard Warna" },
      { key: "D", text: "Log Sheet dan Edit Decision List (EDL)" },
      { key: "E", text: "Budget Breakdown dan Poster Promosi" },
    ],
    correctKey: "B",
    explanation: "Perizinan lokasi memerlukan Recce & Location Permit, sementara kesiapan aktor dipersiapkan pada sesi Reading serta diatur waktu kedatangannya di Call Sheet.",
  },
  {
    id: 7,
    bloom: "C6",
    elemen: "E4 - Desain Pencahayaan 3-Point",
    stem: "Anda diminta merancang tata cahaya wawancara dramatis (*moody dark*) di mana sisi kiri wajah subjek tampak terang jelas, sisi kanan berbayang dramatis (rasio kontras tinggi 4:1), dan subjek terpisah tegas dari dinding latar belakang hitam. Konfigurasi lampu yang tepat adalah...",
    options: [
      { key: "A", text: "Key Light 100%, Fill Light 100%, Back Light 100%" },
      { key: "B", text: "Key Light sisi kiri 100%, Fill Light sisi kanan 25% (atau tanpa fill), Back/Rim Light 60% memisahkan rambut" },
      { key: "C", text: "Key Light di depan subjek, tanpa backlight, hanya background light" },
      { key: "D", text: "Dua lampu flood light dari atas subjek dengan diffuser" },
      { key: "E", text: "Key Light 50% dan Fill Light 80% untuk meminimalkan shadow" },
    ],
    correctKey: "B",
    explanation: "Rasio kontras tinggi (4:1) tercapai dengan Fill Light redup/minim (25%), Key Light dominan di satu sisi, dan Rim/Hair light untuk separasi subjek dari background gelap.",
  },
];

const QUESTIONS_FASE_F: QuestionItem[] = [
  {
    id: 1,
    bloom: "C2",
    elemen: "F1 - Manajemen Produksi TV",
    stem: "Dalam siaran langsung program televisi berita (*live news*), dokumen panduan yang memuat urutan segmen acara, nomor video tape (VT), durasi per item, hingga cue presenter disebut...",
    options: [
      { key: "A", text: "Storyboard" },
      { key: "B", text: "Rundown Program Siaran" },
      { key: "C", text: "Treatment Naskah" },
      { key: "D", text: "Call Sheet" },
      { key: "E", text: "Floor Plan Studio" },
    ],
    correctKey: "B",
    explanation: "Rundown memuat urutan detik demi detik siaran, mencakup nomor segmen, durasi, VT, grafis (superimpose), dan komando switcher.",
  },
  {
    id: 2,
    bloom: "C3",
    elemen: "F2 - Penulisan Naskah TV",
    stem: "Format penulisan naskah non-drama televisi seperti talkshow dan majalah berita menggunakan model dua kolom (*split page*). Isi dari kolom kiri dan kolom kanan berturut-turut adalah...",
    options: [
      { key: "A", text: "Kolom kiri berisi Dialog; kolom kanan berisi Efek Visual" },
      { key: "B", text: "Kolom kiri berisi Video / Visual Petunjuk Teknis; kolom kanan berisi Audio / Narasi Dialog" },
      { key: "C", text: "Kolom kiri berisi Durasi; kolom kanan berisi Lokasi" },
      { key: "D", text: "Kolom kiri berisi Nama Presenter; kolom kanan berisi Kamera" },
      { key: "E", text: "Kolom kiri berisi Musik latar; kolom kanan berisi Storyboard" },
    ],
    correctKey: "B",
    explanation: "Format split page membagi kolom kiri untuk instruksi visual/kamera/grafis, dan kolom kanan untuk audio/suara/dialog.",
  },
  {
    id: 3,
    bloom: "C4",
    elemen: "F3 - Komando Sutradara Multi-Camera",
    stem: "Saat memimpin siaran talkshow studio multi-kamera, sutradara melihat pembawa acara beralih menatap Kamera 2. Sutradara memberi aba-aba 'Stand by Camera 2!' kemudian menekan tombol switcher dengan aba-aba...",
    options: [
      { key: "A", text: "'Roll Tape!'" },
      { key: "B", text: "'Take Two!' (atau Cut to Camera 2)" },
      { key: "C", text: "'Cue Presenter!'" },
      { key: "D", text: "'Fade to Black!'" },
      { key: "E", text: "'Pan Right Camera 2!'" },
    ],
    correctKey: "B",
    explanation: "Komando standar Program Director (PD) untuk memotong ke kamera 2 yang sedang on-air adalah 'Take Two'.",
  },
  {
    id: 4,
    bloom: "C4",
    elemen: "F4 - Tata Cahaya Studio",
    stem: "Pada pencahayaan studio TV bertema newsroom, terdapat bayangan ganda di bawah hidung dan leher presenter yang mengganggu estetika framing. Tindakan penata cahaya yang benar adalah...",
    options: [
      { key: "A", text: "Mematikan lampu backlight" },
      { key: "B", text: "Menambahkan difusi (softbox/frost) pada Key Light dan menaikkan Fill Light dengan rasio 2:1" },
      { key: "C", text: "Menaikkan posisi lampu key light hingga sudut 80 derajat" },
      { key: "D", text: "Mengganti lensa kamera dengan focal length tele" },
      { key: "E", text: "Menambah lampu spotlight langsung ke wajah" },
    ],
    correctKey: "B",
    explanation: "Softbox melunakkan hard shadow tajam di bawah hidung/dagu, dan fill light mengisi bayangan agar tidak terlalu kontras di layar TV.",
  },
  {
    id: 5,
    bloom: "C5",
    elemen: "F5 - Tata Suara Studio",
    stem: "Dua pembawa acara mengenakan mikrofon lavalier (clip-on) nirkabel dan duduk berdekatan (jarak 60 cm). Terdengar fenomena audio 'suara berongga/pipa' (*comb filtering phase cancellation*). Rekayasa audio mixer yang harus diterapkan adalah...",
    options: [
      { key: "A", text: "Menaikkan reverb pada kedua channel" },
      { key: "B", text: "Menerapkan aturan rasio 3:1 (3:1 distance rule) atau menggunakan automixer / ducking gating" },
      { key: "C", text: "Mematikan phantom power +48V" },
      { key: "D", text: "Mengubah kedua kabel menjadi mono unbalance" },
      { key: "E", text: "Menaikkan treble pada mic 1 dan bass pada mic 2" },
    ],
    correctKey: "B",
    explanation: "Comb filtering terjadi akibat bleed audio yang masuk ke 2 mikrofon dengan selisih waktu tipis. Aturan rasio 3:1 dan gating mencegah phase cancellation.",
  },
  {
    id: 6,
    bloom: "C6",
    elemen: "F7 - Editing Audio & Video NLE",
    stem: "Sebuah program dokumenter TV menggunakan multi-kamera 4K 10-bit Log. Komputer editing mengalami frame drop parah saat playback timeline. Solusi alur kerja pasca-produksi profesional yang efisien adalah...",
    options: [
      { key: "A", text: "Melakukan render final sebelum mulai memotong klip" },
      { key: "B", text: "Membuat alur kerja ProRes Proxy / DNxHR resolusi rendah untuk editing, lalu relink file RAW 4K saat color grading & export" },
      { key: "C", text: "Mengubah seluruh file menjadi MP4 720p resolusi rendah permanen" },
      { key: "D", text: "Menghapus audio scratch" },
      { key: "E", text: "Menonaktifkan timeline magnetic" },
    ],
    correctKey: "B",
    explanation: "Alur kerja Proxy memungkinkan editing lancar dengan file ringan, kemudian saat conform/finishing kembali dihubungkan ke file master 4K resolusi tinggi.",
  },
];

function UjianSemesterContent() {
  const searchParams = useSearchParams();
  const initialFase = (searchParams.get("fase") || "E").toUpperCase() === "F" ? "F" : "E";

  const [fase, setFase] = useState<"E" | "F">(initialFase);
  const [tokenInput, setTokenInput] = useState(initialFase === "E" ? "US-E-2026" : "US-F-2026");
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(60 * 60); // 60 menit
  const [isFinished, setIsFinished] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const questions = useMemo(() => {
    return fase === "E" ? QUESTIONS_FASE_E : QUESTIONS_FASE_F;
  }, [fase]);

  // Timer hitung mundur saat ujian berjalan
  useEffect(() => {
    if (!isExamStarted || isFinished) return;

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
  }, [isExamStarted, isFinished]);

  const handleStartExam = () => {
    if (!tokenInput.trim()) {
      alert("Masukkan token ujian terlebih dahulu.");
      return;
    }
    setIsExamStarted(true);
    setCurrentIndex(0);
    setAnswers({});
    setFlagged({});
    setIsFinished(false);
    setTimeLeftSeconds(fase === "E" ? 45 * 60 : 60 * 60);
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

  const handleFinishExam = () => {
    setShowConfirmModal(false);
    setIsFinished(true);
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Perhitungan skor
  const scoreResult = useMemo(() => {
    if (!isFinished) return { correct: 0, total: questions.length, score: 0 };
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctKey) {
        correct++;
      }
    });
    const score = Math.round((correct / questions.length) * 100);
    return { correct, total: questions.length, score };
  }, [isFinished, questions, answers]);

  const answeredCount = Object.keys(answers).length;
  const currentQ = questions[currentIndex];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb & Title */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/assesment"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-sky-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Portal Assesment
        </Link>
        <span className="text-xs font-mono text-slate-400">
          Modul: US (Ujian Semester)
        </span>
      </div>

      {/* TAMPILAN 1: Form Persiapan & Mulai Ujian */}
      {!isExamStarted && (
        <div className="max-w-3xl mx-auto rounded-3xl border border-sky-500/30 bg-slate-900/90 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <FileSpreadsheet className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                Ujian Akhir Semester (US) Daring
              </h1>
              <p className="text-xs text-slate-400">
                Media Pembelajaran Broadcasting & Perfilman SMK BroMan
              </p>
            </div>
          </div>

          <div className="space-y-6 pt-4 border-t border-slate-800">
            {/* Pilihan Fase */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Pilih Fase / Tingkat Kelas:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setFase("E");
                    setTokenInput("US-E-2026");
                  }}
                  className={`flex items-center gap-3 rounded-2xl p-4 border text-left transition-all ${
                    fase === "E"
                      ? "border-sky-500 bg-sky-500/15 text-white shadow-lg shadow-sky-500/10"
                      : "border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white"
                  }`}
                >
                  <Film className="h-6 w-6 text-sky-400 shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-white">Fase E (Kelas X)</div>
                    <div className="text-xs text-slate-400">Dasar Broadcasting (E1–E4)</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setFase("F");
                    setTokenInput("US-F-2026");
                  }}
                  className={`flex items-center gap-3 rounded-2xl p-4 border text-left transition-all ${
                    fase === "F"
                      ? "border-indigo-500 bg-indigo-500/15 text-white shadow-lg shadow-indigo-500/10"
                      : "border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white"
                  }`}
                >
                  <Tv className="h-6 w-6 text-indigo-400 shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-white">Fase F (Kelas XI & XII)</div>
                    <div className="text-xs text-slate-400">Produksi Siaran TV (F1–F8)</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Input Token Ujian */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Token Akses Ujian:
              </label>
              <input
                type="text"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value.toUpperCase())}
                placeholder="Contoh: US-E-2026"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 font-mono text-sm text-white focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Token resmi semester: <code className="text-sky-400 font-bold">{fase === "E" ? "US-E-2026" : "US-F-2026"}</code>
              </p>
            </div>

            {/* Parameter & Ketentuan Ujian */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 space-y-2 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Total Butir Soal:</span>
                <span className="font-semibold text-white">{questions.length} Soal Pilihan Ganda (C1–C6)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Alokasi Waktu:</span>
                <span className="font-semibold text-sky-400">{fase === "E" ? "45 Menit" : "60 Menit"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Sistem Penilaian:</span>
                <span className="font-semibold text-emerald-400">Otomatis Terverifikasi & KKTP Rapor</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleStartExam}
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 py-3.5 text-sm font-bold text-white shadow-xl shadow-sky-500/20 hover:from-sky-400 hover:to-blue-500 transition-all hover:scale-[1.01]"
            >
              <Sparkles className="h-4 w-4" />
              <span>Mulai Pengerjaan Ujian Semester</span>
            </button>
          </div>
        </div>
      )}

      {/* TAMPILAN 2: Lembar Pengerjaan CBT Ujian Semester */}
      {isExamStarted && !isFinished && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sisi Kiri: Panel Soal (3 Kolom di Desktop) */}
          <div className="lg:col-span-3 space-y-4">
            {/* Top Exam Bar */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 backdrop-blur-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 font-bold text-sky-400 border border-sky-500/20 text-sm">
                  {currentIndex + 1}
                </span>
                <div>
                  <div className="text-xs font-semibold text-white">
                    Soal Nomor {currentIndex + 1} dari {questions.length}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Elemen: {currentQ.elemen} • Bloom:{" "}
                    <span className="font-semibold text-sky-400">{currentQ.bloom}</span>
                  </div>
                </div>
              </div>

              {/* Timer Bar */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-mono font-bold text-amber-400">
                  <Timer className="h-4 w-4 animate-spin-slow" />
                  <span>{formatTimer(timeLeftSeconds)}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowConfirmModal(true)}
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white shadow transition-all"
                >
                  Selesai Ujian
                </button>
              </div>
            </div>

            {/* Card Soal */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-md shadow-xl space-y-6">
              {currentQ.stimulus && (
                <div className="rounded-xl border border-slate-700/60 bg-slate-950/70 p-4 text-xs font-medium text-slate-300 border-l-4 border-l-sky-500">
                  <span className="font-bold text-sky-400 block mb-1">Stimulus / Konteks Kasus:</span>
                  {currentQ.stimulus}
                </div>
              )}

              <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                {currentQ.stem}
              </p>

              {/* Opsi Jawaban */}
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
                          ? "border-sky-500 bg-sky-500/15 text-white shadow-md shadow-sky-500/10"
                          : "border-slate-800 bg-slate-950/50 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all ${
                          isSelected
                            ? "bg-sky-500 text-white"
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

              {/* Navigasi Bawah */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-800/80 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white disabled:opacity-40 transition-all"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Sebelumnya</span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleFlag(currentQ.id)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold transition-all border ${
                    flagged[currentQ.id]
                      ? "border-amber-500 bg-amber-500/20 text-amber-300"
                      : "border-slate-800 bg-slate-800/50 text-slate-400 hover:text-amber-300"
                  }`}
                >
                  <Flag className="h-3.5 w-3.5" />
                  <span>{flagged[currentQ.id] ? "Ragu-ragu (Ditandai)" : "Tandai Ragu"}</span>
                </button>

                {currentIndex < questions.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentIndex((prev) => prev + 1)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 px-4 py-2 text-xs font-semibold text-white transition-all shadow"
                  >
                    <span>Berikutnya</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowConfirmModal(true)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-semibold text-white transition-all shadow"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Kirim Jawaban</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Kisi-kisi Nomor Soal (1 Kolom) */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 backdrop-blur-md shadow-lg">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Nomor Soal
              </h3>

              <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 gap-2 mb-4">
                {questions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAnswered = !!answers[q.id];
                  const isFlag = !!flagged[q.id];

                  let colorClass = "border-slate-800 bg-slate-950 text-slate-400";
                  if (isFlag) {
                    colorClass = "border-amber-500 bg-amber-500/20 text-amber-300 font-bold";
                  } else if (isAnswered) {
                    colorClass = "border-sky-500 bg-sky-500/20 text-sky-300 font-bold";
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
                      {isFlag && (
                        <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="pt-3 border-t border-slate-800 space-y-1.5 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded bg-sky-500/30 border border-sky-500" />
                  <span>Dijawab ({answeredCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded bg-amber-500/30 border border-amber-500" />
                  <span>Ragu-ragu ({Object.values(flagged).filter(Boolean).length})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded bg-slate-950 border border-slate-800" />
                  <span>Belum ({questions.length - answeredCount})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAMPILAN 3: Rapor & Pembahasan Hasil Ujian */}
      {isFinished && (
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Score Header Card */}
          <div className="rounded-3xl border border-sky-500/40 bg-gradient-to-b from-slate-900 via-slate-900 to-sky-950/30 p-8 backdrop-blur-xl shadow-2xl text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-500/10 border border-sky-500/30 text-sky-400 mb-4 shadow-xl shadow-sky-500/20">
              <Award className="h-8 w-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Rapor Hasil Ujian Akhir Semester
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Fase {fase} ({fase === "E" ? "Kelas X" : "Kelas XI & XII"}) • BroMan CBT
            </p>

            <div className="my-6 inline-flex flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-950/80 px-8 py-5 shadow-inner">
              <span className="text-4xl sm:text-6xl font-black text-sky-400">
                {scoreResult.score}
              </span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
                Skor Akhir (Skala 100)
              </span>
            </div>

            <div className="grid grid-cols-3 max-w-md mx-auto gap-3 text-xs mb-6">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                <div className="text-slate-400">Benar</div>
                <div className="text-lg font-bold text-emerald-400">{scoreResult.correct}</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                <div className="text-slate-400">Salah</div>
                <div className="text-lg font-bold text-rose-400">{scoreResult.total - scoreResult.correct}</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                <div className="text-slate-400">KKTP</div>
                <div className="text-lg font-bold text-sky-400">
                  {scoreResult.score >= 85
                    ? "Sangat Baik"
                    : scoreResult.score >= 75
                    ? "Baik"
                    : scoreResult.score >= 60
                    ? "Cukup"
                    : "Perlu Bimbingan"}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsFinished(false);
                  setIsExamStarted(false);
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2.5 text-xs font-semibold text-white transition-all"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Ulangi Ujian</span>
              </button>
              <Link
                href="/assesment"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow transition-all hover:scale-[1.02]"
              >
                <span>Kembali ke Portal Assesment</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Pembahasan Soal */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-sky-400" />
              Pembahasan Kunci Jawaban & Indikator Kognitif
            </h3>

            {questions.map((q, idx) => {
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
                      Soal #{idx + 1} • {q.elemen} ({q.bloom})
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                        isCorrect
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-rose-500/20 text-rose-300"
                      }`}
                    >
                      {isCorrect ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                      {isCorrect ? "Jawaban Benar" : "Jawaban Kurang Tepat"}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 mb-3">{q.stem}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                    <div className="p-2.5 rounded-xl border border-slate-800 bg-slate-950/60">
                      <span className="text-slate-400 block text-[10px]">Jawaban Anda:</span>
                      <span className={isCorrect ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>
                        {studentAns || "Tidak dijawab"}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl border border-slate-800 bg-slate-950/60">
                      <span className="text-slate-400 block text-[10px]">Kunci Jawaban Resmi:</span>
                      <span className="text-sky-400 font-bold">{q.correctKey}</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-xs text-slate-300">
                    <span className="font-semibold text-amber-400 block mb-1">
                      💡 Pembahasan Kurikulum:
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

            <h3 className="text-lg font-bold text-white">Konfirmasi Selesai Ujian</h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              Anda telah menjawab <strong>{answeredCount}</strong> dari <strong>{questions.length}</strong> butir soal. 
              {questions.length - answeredCount > 0 && (
                <span className="text-rose-400 block mt-1">
                  Peringatan: Masih ada {questions.length - answeredCount} butir soal yang belum Anda jawab!
                </span>
              )}
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
              >
                Periksa Kembali
              </button>
              <button
                type="button"
                onClick={handleFinishExam}
                className="rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow"
              >
                Ya, Kumpulkan Jawaban
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function UjianSemesterPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-20 text-center text-slate-400">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-2 border-sky-500 border-t-transparent mb-3" />
          <p className="text-xs">Memuat Lembar Ujian Semester...</p>
        </div>
      }
    >
      <UjianSemesterContent />
    </Suspense>
  );
}
