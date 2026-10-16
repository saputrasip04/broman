"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Clock,
  ArrowLeft,
  Save,
  RotateCcw,
  Check,
  Sparkles,
  Film,
  Tv,
  CheckCircle2,
  ExternalLink,
  Sliders,
  Database,
  Layers,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import { ALL_ELEMEN } from "@/lib/data/curriculum";
import {
  useCurriculumStore,
  updateMultipleElemenHours,
  updateElemenHours,
  resetCurriculumToDefault,
} from "@/lib/data/curriculum-store";

interface ElemenItem {
  code: string;
  fase: "E" | "F" | "P";
  title: string;
  summary: string;
  defaultHours: number;
}

const ALL_ELEMENTS_CONFIG: ElemenItem[] = [
  // Fase E
  {
    code: "E1",
    fase: "E",
    title: "Dunia Kerja, Profesi, dan Bisnis Broadcasting & Perfilman",
    summary: "Profesi & level pekerjaan, basic job skills, K3, budaya kerja 5S, technopreneur, peluang usaha, POS, dan kearifan lokal ide produksi.",
    defaultHours: 18,
  },
  {
    code: "E2",
    fase: "E",
    title: "Perkembangan Media, Teknologi, Industri & Regulasi",
    summary: "Analog ke digital, FTA & OTT, podcast, live streaming, web series, VOD, etika siber UU ITE, dan perkembangan kecerdasan buatan (AI).",
    defaultHours: 18,
  },
  {
    code: "E3",
    fase: "E",
    title: "Teknik Dasar Pengoperasian Peralatan Audio Visual",
    summary: "Fotografi dasar, exposure triangle, tata kamera, komposisi, tata cahaya 3-point, tata suara mic boom, dan dasar editing NLE.",
    defaultHours: 24,
  },
  {
    code: "E4",
    fase: "E",
    title: "Teknik Dasar Proses Produksi & New Media",
    summary: "Simulasi tahapan produksi (pra-produksi, produksi, pasca) sesuai POS lewat proyek video pendek dan publikasi new media.",
    defaultHours: 24,
  },

  // Fase F
  {
    code: "F1",
    fase: "F",
    title: "Manajemen Produksi dan Siaran Televisi",
    summary: "POS tahapan produksi, struktur organisasi penyiaran, manajemen sumber daya, format program TV, rundown acara, dan tren penonton.",
    defaultHours: 36,
  },
  {
    code: "F2",
    fase: "F",
    title: "Penulisan Naskah Televisi",
    summary: "Naskah berita jurnalistik (news package), naskah artistik non-drama (talkshow, variety show), format split-page, dan treatment drama.",
    defaultHours: 36,
  },
  {
    code: "F3",
    fase: "F",
    title: "Penyutradaraan Televisi",
    summary: "Sutradara single & multi-camera studio, breakdown naskah, mise en scène, visual storytelling, floor plan, dan komando sutradara.",
    defaultHours: 40,
  },
  {
    code: "F4",
    fase: "F",
    title: "Tata Kamera dan Tata Cahaya Televisi",
    summary: "Standar K3LH studio, framing & movement kamera, jenis lensa, filter, camera support, tata lampu key/fill/back light, dan DMX control.",
    defaultHours: 40,
  },
  {
    code: "F5",
    fase: "F",
    title: "Tata Suara Televisi",
    summary: "Akustik ruang studio, mikrofon kondenser/dinamik/lavalier/shotgun, audio mixer broadcast, multitrack DAW, audio meter LUFS/dBFS.",
    defaultHours: 32,
  },
  {
    code: "F6",
    fase: "F",
    title: "Tata Artistik Televisi",
    summary: "Desain visual studio, floor plan 2D, virtual set green screen & Unreal Engine, colour scheme, propmaster, make-up & wardrobe TV.",
    defaultHours: 32,
  },
  {
    code: "F7",
    fase: "F",
    title: "Editing Audio dan Video",
    summary: "Offline & online editing, color grading LUT Rec.709, sound design mixing -24 LUFS, motion graphic lower third, rendering broadcast MXF.",
    defaultHours: 36,
  },
  {
    code: "F8",
    fase: "F",
    title: "Penyiaran Online dan New Media",
    summary: "Live streaming multi-camera (OBS/vMix), RTMP/SRT streaming protocol, OTT/VOD CMS, optimasi SEO video, analitik penonton, cyber security.",
    defaultHours: 28,
  },

  // Peminatan
  {
    code: "P1",
    fase: "P",
    title: "Peminatan Kelas XI (Desain 2D & 3D) — Blender 3D Pipeline",
    summary: "Pemodelan 3D hard-surface & organic, UV mapping, material PBR, 3-point lighting studio, animasi kamera turntable, dan rendering Cycles/Eevee.",
    defaultHours: 72,
  },
  {
    code: "P2",
    fase: "P",
    title: "Peminatan Kelas XII (Desain 2D & 3D) — CorelDraw & Canva Graphic",
    summary: "Desain grafis 2 dimensi, layout template lower third TV, title-safe area 90%, brand identity siaran, dan ekspor aset vektor siap pakai.",
    defaultHours: 72,
  },
];

export default function AdminKurikulumJpPage() {
  const storedCurriculum = useCurriculumStore();
  const [activeFaseFilter, setActiveFaseFilter] = useState<"ALL" | "E" | "F" | "P">("ALL");
  const [hoursMap, setHoursMap] = useState<Record<string, number>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Inisialisasi state lokal dari store
  useEffect(() => {
    const initial: Record<string, number> = {};
    ALL_ELEMENTS_CONFIG.forEach((el) => {
      initial[el.code] = storedCurriculum[el.code]?.hours ?? el.defaultHours;
    });
    setHoursMap(initial);
  }, [storedCurriculum]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleHoursChange = (code: string, newHours: number) => {
    const safeHours = Math.max(1, Math.min(300, isNaN(newHours) ? 1 : newHours));
    setHoursMap((prev) => ({
      ...prev,
      [code]: safeHours,
    }));
    setHasChanges(true);
  };

  const handleQuickAdjust = (code: string, delta: number) => {
    const current = hoursMap[code] ?? 18;
    handleHoursChange(code, current + delta);
  };

  const handleSaveAll = async () => {
    setIsSaving(true);
    try {
      updateMultipleElemenHours(hoursMap);
      setHasChanges(false);
      showToast("Alokasi JP untuk 14 Elemen berhasil disimpan dan disinkronkan ke MySQL!");
    } catch (err: unknown) {
      showToast(`Gagal menyimpan alokasi JP: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleResetToDefault = () => {
    if (confirm("Kembalikan seluruh alokasi Jam Pelajaran (JP) ke standar baku kurikulum BSKAP?")) {
      const defaults: Record<string, number> = {};
      ALL_ELEMENTS_CONFIG.forEach((el) => {
        defaults[el.code] = el.defaultHours;
      });
      setHoursMap(defaults);
      updateMultipleElemenHours(defaults);
      setHasChanges(false);
      showToast("Seluruh alokasi JP berhasil di-reset ke standar baku BSKAP!");
    }
  };

  // Kalkulasi total JP
  const totalFaseE = ALL_ELEMENTS_CONFIG.filter((el) => el.fase === "E").reduce(
    (acc, el) => acc + (hoursMap[el.code] ?? el.defaultHours),
    0
  );
  const totalFaseF = ALL_ELEMENTS_CONFIG.filter((el) => el.fase === "F").reduce(
    (acc, el) => acc + (hoursMap[el.code] ?? el.defaultHours),
    0
  );
  const totalPeminatan = ALL_ELEMENTS_CONFIG.filter((el) => el.fase === "P").reduce(
    (acc, el) => acc + (hoursMap[el.code] ?? el.defaultHours),
    0
  );
  const totalSemua = totalFaseE + totalFaseF + totalPeminatan;

  const filteredElements =
    activeFaseFilter === "ALL"
      ? ALL_ELEMENTS_CONFIG
      : ALL_ELEMENTS_CONFIG.filter((el) => el.fase === activeFaseFilter);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-sky-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Dashboard Utama Admin
        </Link>
        <Link
          href="/#kurikulum"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
        >
          <span>Buka Pratinjau Eksplorasi Kurikulum</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-xs font-semibold text-amber-400">
              Admin Portal
            </span>
            <span className="text-xs text-slate-400">Manajemen Beban & Jam Pelajaran (JP)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2.5">
            <Clock className="h-8 w-8 text-sky-400" />
            Pengaturan Alokasi Jam Pelajaran (JP)
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
            Ubah beban alokasi Jam Pelajaran (JP) untuk setiap Elemen pembelajaran (E1–E4, F1–F8, P1–P2). Nilai yang diubah langsung aktif di portal belajar siswa, dashboard kurikulum, serta tersinkron ke tabel MySQL <code className="text-sky-300 font-mono">babs.hours_allocation</code>.
          </p>
        </div>

        {/* Global Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleResetToDefault}
            className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-750 px-3.5 py-2.5 text-xs font-semibold text-slate-300 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Reset BSKAP</span>
          </button>
          <button
            type="button"
            onClick={handleSaveAll}
            disabled={isSaving}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold text-white shadow-lg transition-all ${
              hasChanges
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-emerald-500/20 animate-pulse"
                : "bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-sky-500/20"
            }`}
          >
            <Save className="h-4 w-4" />
            <span>{isSaving ? "Menyimpan..." : hasChanges ? "Simpan Perubahan *" : "Simpan Semua JP"}</span>
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-2xl bg-slate-900 border border-emerald-500/40 text-emerald-400 px-5 py-3.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          <span className="text-xs font-bold text-white">{toastMessage}</span>
        </div>
      )}

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="rounded-2xl border border-sky-500/30 bg-sky-950/20 p-5 backdrop-blur-md">
          <div className="flex items-center justify-between text-xs text-sky-400 font-semibold mb-2">
            <span className="flex items-center gap-1.5">
              <Film className="h-4 w-4" />
              Fase E (Kelas X)
            </span>
            <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px]">4 Elemen</span>
          </div>
          <div className="text-3xl font-extrabold text-white">
            {totalFaseE} <span className="text-sm font-normal text-sky-400">JP</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Standar BSKAP: 84 JP</div>
        </div>

        <div className="rounded-2xl border border-indigo-500/30 bg-indigo-950/20 p-5 backdrop-blur-md">
          <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold mb-2">
            <span className="flex items-center gap-1.5">
              <Tv className="h-4 w-4" />
              Fase F (Kelas XI & XII)
            </span>
            <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px]">8 Elemen</span>
          </div>
          <div className="text-3xl font-extrabold text-white">
            {totalFaseF} <span className="text-sm font-normal text-indigo-400">JP</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Standar BSKAP: 280 JP</div>
        </div>

        <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-5 backdrop-blur-md">
          <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-2">
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" />
              Peminatan (2D & 3D)
            </span>
            <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px]">2 Elemen</span>
          </div>
          <div className="text-3xl font-extrabold text-white">
            {totalPeminatan} <span className="text-sm font-normal text-amber-400">JP</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Standar BSKAP: 144 JP</div>
        </div>

        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 backdrop-blur-md">
          <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold mb-2">
            <span className="flex items-center gap-1.5">
              <Database className="h-4 w-4" />
              Total Beban Belajar
            </span>
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px]">14 Elemen</span>
          </div>
          <div className="text-3xl font-extrabold text-white">
            {totalSemua} <span className="text-sm font-normal text-emerald-400">JP</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Tersinkronisasi ke MySQL & Client</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-1 rounded-xl bg-slate-900 border border-slate-800 p-1">
          <button
            type="button"
            onClick={() => setActiveFaseFilter("ALL")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
              activeFaseFilter === "ALL"
                ? "bg-slate-800 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Semua (14 Elemen)
          </button>
          <button
            type="button"
            onClick={() => setActiveFaseFilter("E")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
              activeFaseFilter === "E"
                ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Film className="h-3.5 w-3.5" />
            <span>Fase E (4)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveFaseFilter("F")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
              activeFaseFilter === "F"
                ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Tv className="h-3.5 w-3.5" />
            <span>Fase F (8)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveFaseFilter("P")}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
              activeFaseFilter === "P"
                ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Peminatan (2)</span>
          </button>
        </div>

        {hasChanges && (
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl">
            <AlertTriangle className="h-4 w-4" />
            <span>Ada perubahan alokasi JP yang belum disimpan!</span>
          </div>
        )}
      </div>

      {/* Grid of Elemen JP Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredElements.map((el) => {
          const currentHours = hoursMap[el.code] ?? el.defaultHours;
          const isModified = currentHours !== el.defaultHours;

          return (
            <div
              key={el.code}
              className={`rounded-2xl border bg-slate-900/70 p-5 backdrop-blur-md flex flex-col justify-between transition-all duration-200 ${
                isModified
                  ? "border-sky-500/50 shadow-lg shadow-sky-500/10"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              <div>
                {/* Header Card: Code & Live JP Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-lg px-2.5 py-1 text-xs font-extrabold ${
                        el.code.startsWith("E")
                          ? "bg-sky-500/10 border border-sky-500/20 text-sky-400"
                          : el.code.startsWith("F")
                          ? "bg-indigo-500/10 border border-indigo-500/20 text-indigo-400"
                          : el.code === "P1"
                          ? "bg-amber-500/10 border border-amber-500/20 text-amber-400"
                          : "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                      }`}
                    >
                      ELEMEN {el.code}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Fase {el.fase}
                    </span>
                  </div>

                  {isModified && (
                    <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-[10px] font-semibold text-amber-400">
                      Disesuaikan (Default: {el.defaultHours} JP)
                    </span>
                  )}
                </div>

                {/* Title & Summary */}
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 line-clamp-2">
                  {el.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {el.summary}
                </p>
              </div>

              {/* Bottom: JP Stepper & Number Input */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-sky-400" />
                    Alokasi Jam Pelajaran (JP):
                  </span>
                  <div className="text-xs font-bold text-sky-400 font-mono">
                    {currentHours} JP
                  </div>
                </div>

                {/* Direct Number Input & Stepper Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuickAdjust(el.code, -2)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-750 hover:text-white font-bold text-sm transition-colors"
                    title="Kurangi 2 JP"
                  >
                    -2
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickAdjust(el.code, -1)}
                    className="flex h-9 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-750 hover:text-white font-bold text-sm transition-colors"
                    title="Kurangi 1 JP"
                  >
                    -
                  </button>

                  <div className="relative flex-1">
                    <input
                      type="number"
                      min={1}
                      max={300}
                      value={currentHours}
                      onChange={(e) => handleHoursChange(el.code, parseInt(e.target.value, 10))}
                      className="w-full rounded-xl border border-slate-700 bg-slate-800/90 py-1.5 px-3 text-center text-sm font-extrabold text-white focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 pointer-events-none">
                      JP
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleQuickAdjust(el.code, 1)}
                    className="flex h-9 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-750 hover:text-white font-bold text-sm transition-colors"
                    title="Tambah 1 JP"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickAdjust(el.code, 2)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-750 hover:text-white font-bold text-sm transition-colors"
                    title="Tambah 2 JP"
                  >
                    +2
                  </button>
                </div>

                {/* Quick Presets */}
                <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-1 text-[11px] text-slate-500">
                  <span className="text-[10px] shrink-0 font-medium">Preset:</span>
                  {[18, 24, 32, 36, 40, 72].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handleHoursChange(el.code, preset)}
                      className={`rounded px-1.5 py-0.5 text-[10px] font-semibold border transition-colors ${
                        currentHours === preset
                          ? "bg-sky-500/20 border-sky-500/40 text-sky-300"
                          : "bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white"
                      }`}
                    >
                      {preset} JP
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Save Bar if changes detected */}
      {hasChanges && (
        <div className="sticky bottom-6 mt-8 z-40 rounded-2xl border border-sky-500/40 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 shrink-0">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Perubahan Alokasi JP Belum Disimpan
              </div>
              <div className="text-xs text-slate-400">
                Klik tombol simpan untuk memperbarui database MySQL dan antarmuka siswa.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleSaveAll}
              disabled={isSaving}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-emerald-500/20 transition-all"
            >
              <Save className="h-4 w-4" />
              <span>{isSaving ? "Menyimpan ke MySQL..." : "Simpan Semua Perubahan"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
