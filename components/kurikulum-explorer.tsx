"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Film,
  Tv,
  Camera,
  Video,
  Mic,
  Palette,
  Scissors,
  Radio,
  BookOpen,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sliders,
  Sparkles,
  Edit3,
  Check,
  X,
} from "lucide-react";
import { useCurriculumStore, updateElemenHours } from "@/lib/data/curriculum-store";

export interface KurikulumExplorerProps {
  initialFase?: "E" | "F" | "P";
}

export const babsFaseE = [
  {
    code: "E1",
    title: "Dunia Kerja, Profesi, dan Bisnis Broadcasting & Perfilman",
    hours: 18,
    icon: Film,
    summary:
      "Profesi & level pekerjaan, basic job skills, K3, budaya kerja 5S, technopreneur, peluang usaha, POS, dan kearifan lokal ide produksi.",
    color: "from-sky-500 to-blue-600",
  },
  {
    code: "E2",
    title: "Perkembangan Media, Teknologi, Industri & Regulasi",
    hours: 18,
    icon: Radio,
    summary:
      "Analog ke digital, FTA & OTT, podcast, live streaming, web series, VOD, etika siber UU ITE, dan perkembangan kecerdasan buatan (AI).",
    color: "from-indigo-500 to-purple-600",
  },
  {
    code: "E3",
    title: "Teknik Dasar Pengoperasian Peralatan Audio Visual",
    hours: 24,
    icon: Camera,
    summary:
      "Fotografi dasar, exposure triangle, tata kamera, komposisi, tata cahaya 3-point, tata suara mic boom, dan dasar editing NLE.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    code: "E4",
    title: "Teknik Dasar Proses Produksi & New Media",
    hours: 24,
    icon: Video,
    summary:
      "Simulasi tahapan produksi (pra-produksi, produksi, pasca) sesuai POS lewat proyek video pendek dan publikasi new media.",
    color: "from-amber-500 to-orange-600",
  },
];

export const babsFaseF = [
  {
    code: "F1",
    title: "Manajemen Produksi dan Siaran Televisi",
    hours: 36,
    icon: Sliders,
    summary:
      "POS tahapan produksi, struktur organisasi penyiaran, manajemen sumber daya, format program TV, rundown acara, dan tren penonton.",
    color: "from-sky-500 to-cyan-600",
  },
  {
    code: "F2",
    title: "Penulisan Naskah Televisi",
    hours: 36,
    icon: BookOpen,
    summary:
      "Naskah berita jurnalistik (news package), naskah artistik non-drama (talkshow, variety show), format split-page, dan treatment drama.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    code: "F3",
    title: "Penyutradaraan Televisi",
    hours: 40,
    icon: Film,
    summary:
      "Sutradara single & multi-camera studio, breakdown naskah, mise en scène, visual storytelling, floor plan, dan komando sutradara.",
    color: "from-indigo-500 to-violet-600",
  },
  {
    code: "F4",
    title: "Tata Kamera dan Tata Cahaya Televisi",
    hours: 40,
    icon: Camera,
    summary:
      "Standar K3LH studio, framing & movement kamera, jenis lensa, filter, camera support, tata lampu key/fill/back light, dan DMX control.",
    color: "from-fuchsia-500 to-pink-600",
  },
  {
    code: "F5",
    title: "Tata Suara Televisi",
    hours: 32,
    icon: Mic,
    summary:
      "K3LH tata suara, jenis mikrofon (condenser, dynamic, lavalier, shotgun), audio mixer console, sound recorder, dan blocking mic.",
    color: "from-amber-500 to-yellow-600",
  },
  {
    code: "F6",
    title: "Tata Artistik Televisi",
    hours: 32,
    icon: Palette,
    summary:
      "Breakdown naskah artistik, sketsa set dekorasi, floorplan studio, pemilihan properti, wardrobe kostum, dan tata rias karakter.",
    color: "from-emerald-500 to-green-600",
  },
  {
    code: "F7",
    title: "Editing Audio dan Video",
    hours: 36,
    icon: Scissors,
    summary:
      "Manajemen file footage, software NLE, dokumen logging & EDL, proses rough cut, fine cut, audio mixing, color grading, dan rendering.",
    color: "from-rose-500 to-red-600",
  },
  {
    code: "F8",
    title: "Penyiaran Online (Digital Broadcasting)",
    hours: 28,
    icon: Tv,
    summary:
      "Rencana live streaming multi-platform (OBS/vMix), perancangan poster digital, interaksi penonton digital, dan kepatuhan regulasi siber.",
    color: "from-teal-500 to-cyan-600",
  },
];

export const babsPeminatan = [
  {
    code: "P1",
    title: "Peminatan Kelas XI (Desain 2 Dimensi dan 3 Dimensi) 3D",
    hours: 72,
    icon: Sparkles,
    summary:
      "Pipeline 3D industri dengan Blender: prosedur tahapan produksi 3D, pengoperasian Blender, pemodelan (modeling), material & tekstur, pencahayaan, animasi dasar, kamera virtual, rendering, dan pengaturan ekspor karya.",
    color: "from-amber-500 to-orange-600",
  },
  {
    code: "P2",
    title: "Peminatan Kelas XII (Desain 2 Dimensi dan 3 Dimensi) 2D",
    hours: 72,
    icon: Palette,
    summary:
      "Desain grafis 2D dengan CorelDraw & Canva: prosedur tahapan produksi 2D, teknik pengolahan objek, warna, teks, tata letak (layout), pemanfaatan aset grafis dan template, serta pengaturan ekspor/cetak karya siap pakai.",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function KurikulumExplorer({
  initialFase = "E",
}: KurikulumExplorerProps) {
  const [activeFase, setActiveFase] = useState<"E" | "F" | "P">(initialFase);
  const storedCurriculum = useCurriculumStore();
  const [editingCode, setEditingCode] = useState<string | null>(null);
  const [editHoursValue, setEditHoursValue] = useState<number>(18);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const f = params.get("fase");
      if (f && f.toUpperCase() === "P") {
        setActiveFase("P");
      } else if (f && f.toUpperCase() === "F") {
        setActiveFase("F");
      } else if (f && f.toUpperCase() === "E") {
        setActiveFase("E");
      } else if (window.location.hash.toLowerCase().includes("peminatan")) {
        setActiveFase("P");
      } else if (window.location.hash.toLowerCase().includes("fase-f")) {
        setActiveFase("F");
      }
    }
  }, []);

  const handleSelectFase = (fase: "E" | "F" | "P") => {
    setActiveFase(fase);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("fase", fase);
      window.history.replaceState({}, "", url.toString());
    }
  };

  const startEdit = (code: string, currentHours: number) => {
    setEditingCode(code);
    setEditHoursValue(currentHours);
  };

  const cancelEdit = () => {
    setEditingCode(null);
  };

  const saveEdit = (code: string) => {
    const val = Math.max(1, Math.min(300, isNaN(editHoursValue) ? 18 : editHoursValue));
    updateElemenHours(code, val);
    setEditingCode(null);
    setToastMessage(`Alokasi JP ELEMEN ${code} berhasil diubah menjadi ${val} JP!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const currentBabs =
    activeFase === "E" ? babsFaseE : activeFase === "F" ? babsFaseF : babsPeminatan;

  return (
    <section id="kurikulum" className="mx-auto max-w-7xl px-4 pt-4 pb-12 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-8 border-b border-slate-800/80 gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Eksplorasi Kurikulum & Elemen Pembelajaran
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Pilih fase atau mata pelajaran pilihan (peminatan) untuk melihat Capaian Pembelajaran, alokasi JP, dan lingkup materi.
          </p>
        </div>

        {/* Fase Switcher Tabs — E, F, Peminatan (Satu Baris Sejajar) */}
        <div className="flex items-center flex-nowrap gap-1 rounded-xl bg-slate-900 border border-slate-800 p-1 shrink-0 max-w-full overflow-x-auto">
          <Link
            href="/?fase=E#kurikulum"
            onClick={(e) => {
              e.preventDefault();
              handleSelectFase("E");
            }}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeFase === "E"
                ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Film className="h-4 w-4 shrink-0" />
            <span>Fase E (Kelas X)</span>
            <span className="rounded-full bg-black/25 px-1.5 py-0.5 text-[10px] font-bold shrink-0">
              4 Elemen
            </span>
          </Link>

          <Link
            href="/?fase=F#kurikulum"
            onClick={(e) => {
              e.preventDefault();
              handleSelectFase("F");
            }}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeFase === "F"
                ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Tv className="h-4 w-4 shrink-0" />
            <span>Fase F (Kelas XI & XII)</span>
            <span className="rounded-full bg-black/25 px-1.5 py-0.5 text-[10px] font-bold shrink-0">
              8 Elemen
            </span>
          </Link>

          <Link
            href="/?fase=P#kurikulum"
            onClick={(e) => {
              e.preventDefault();
              handleSelectFase("P");
            }}
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeFase === "P"
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="h-4 w-4 text-amber-300 shrink-0" />
            <span>Peminatan (2D & 3D)</span>
            <span className="rounded-full bg-black/25 px-1.5 py-0.5 text-[10px] font-bold shrink-0">
              2 Elemen
            </span>
          </Link>
        </div>
      </div>

      {/* Elemen Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentBabs.map((bab) => {
          const Icon = bab.icon;
          const dynamicHours = storedCurriculum?.[bab.code]?.hours ?? bab.hours;
          const isEditing = editingCode === bab.code;

          return (
            <div
              key={bab.code}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/60 p-6 backdrop-blur-md hover:border-sky-500/40 hover:bg-slate-850 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-lg bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 text-xs font-bold text-sky-400">
                    ELEMEN {bab.code}
                  </span>

                  {isEditing ? (
                    <div
                      className="flex items-center gap-1 bg-slate-800 border border-sky-500/60 rounded-xl p-1 shadow-lg animate-in fade-in zoom-in-95 duration-150 z-10"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="number"
                        min={1}
                        max={300}
                        value={editHoursValue}
                        onChange={(e) => setEditHoursValue(parseInt(e.target.value, 10))}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") saveEdit(bab.code);
                          if (e.key === "Escape") cancelEdit();
                        }}
                        autoFocus
                        className="w-12 rounded-lg bg-slate-900 border border-slate-700 px-1.5 py-0.5 text-center text-xs font-extrabold text-white focus:outline-none focus:border-sky-400"
                      />
                      <span className="text-[10px] font-bold text-slate-400">JP</span>
                      <button
                        type="button"
                        onClick={() => saveEdit(bab.code)}
                        className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
                        title="Simpan alokasi JP"
                      >
                        <Check className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white transition-colors"
                        title="Batal"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => startEdit(bab.code, dynamicHours)}
                      className="group/jp flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-slate-400 hover:text-white hover:bg-slate-800/80 border border-transparent hover:border-slate-700/80 transition-all cursor-pointer"
                      title="Klik untuk mengubah alokasi Jam Pelajaran (JP)"
                    >
                      <Clock className="h-3.5 w-3.5 text-slate-500 group-hover/jp:text-sky-400 transition-colors" />
                      <span className="font-semibold">{dynamicHours} JP</span>
                      <Edit3 className="h-3 w-3 opacity-0 group-hover/jp:opacity-100 text-sky-400 transition-opacity" />
                    </button>
                  )}
                </div>

                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${bab.color} text-white shadow-md group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2">
                  {bab.title}
                </h3>

                <p className="mt-2 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {bab.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  CP & TP Lengkap
                </span>
                <Link
                  href={`/belajar/${activeFase}/${bab.code}`}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1"
                >
                  Buka Elemen
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-2xl bg-slate-900 border border-emerald-500/40 text-emerald-400 px-4 py-3 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
          <span className="text-xs font-bold text-white">{toastMessage}</span>
        </div>
      )}
    </section>
  );
}
