"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  BookOpen,
  Video,
  CheckSquare,
  Gamepad2,
  FileText,
  Target,
  Clock,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  RefreshCw,
  Award,
  ExternalLink,
  Send,
  Home,
  ChevronRight,
  ChevronLeft,
  Layers,
  Lightbulb,
  ArrowRight,
  Smile,
  Meh,
  Frown,
  Check,
  Table,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";
import { DEFAULT_ELEMEN_SUBMENUS, type ElemenData } from "@/lib/data/curriculum-types";
import { useStoredElemen } from "@/lib/data/curriculum-store";
import ElemenSlideDeck from "@/components/slide-deck/elemen-slide-deck";

interface BabLearningClientProps {
  fase: string;
  bab: string;
  initialKontenIndex?: number;
  initialStepIndex?: number;
}

export default function BabLearningClient({
  fase,
  bab,
  initialKontenIndex = 0,
  initialStepIndex = 0,
}: BabLearningClientProps) {
  // Ambil data kurikulum untuk Elemen ini secara reaktif dari store
  const elemenData = useStoredElemen(bab);

  const iconMap: Record<string, React.ElementType> = {
    hook: Sparkles,
    pretest: HelpCircle,
    materi: Layers,
    video: Video,
    game: Gamepad2,
    case: Lightbulb,
    kuis: CheckSquare,
    lkpd: FileText,
    journal: Target,
  };

  // Cek apakah elemen ini memiliki sub-konten (seperti Elemen F4: 4 Konten Utama)
  const hasContents = Boolean(elemenData.contents && elemenData.contents.length > 0);
  const [activeContentIndex, setActiveContentIndex] = useState(initialKontenIndex);
  const [showSyllabusTable, setShowSyllabusTable] = useState(false);
  const [isContentDropdownOpen, setIsContentDropdownOpen] = useState(false);
  const contentDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown saat klik di luar atau tekan Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        contentDropdownRef.current &&
        !contentDropdownRef.current.contains(event.target as Node)
      ) {
        setIsContentDropdownOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsContentDropdownOpen(false);
      }
    }
    if (isContentDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isContentDropdownOpen]);

  // Sinkronisasi parameter URL ?konten=1..4 & ?step=1..9 jika tersedia
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const kParam = params.get("konten");
      if (kParam) {
        const kNum = parseInt(kParam, 10);
        if (!isNaN(kNum) && kNum >= 1 && elemenData.contents && kNum <= elemenData.contents.length) {
          setActiveContentIndex(kNum - 1);
        }
      }
      const sParam = params.get("step");
      if (sParam) {
        const sNum = parseInt(sParam, 10);
        if (!isNaN(sNum) && sNum >= 1 && sNum <= 9) {
          setCurrentStepIndex(sNum - 1);
        }
      }
    }
  }, [elemenData.contents]);

  // Konten aktif saat ini
  const activeContent = hasContents && elemenData.contents
    ? elemenData.contents[activeContentIndex] || elemenData.contents[0]
    : null;

  // Resolusi data dinamis berdasarkan konten yang aktif
  const currentTitle = activeContent ? activeContent.title : elemenData.title;
  const currentShortTitle = activeContent ? (activeContent.shortTitle || activeContent.title) : elemenData.title;
  const currentSummary = activeContent ? activeContent.summary : elemenData.summary;
  const currentMaterialCards = activeContent ? activeContent.materialCards : (elemenData.materialCards || []);
  const currentVideo = activeContent ? activeContent.video : elemenData.video;
  const currentGamePairs = activeContent ? activeContent.gamePairs : (elemenData.gamePairs || []);
  const currentSampleQuestions = activeContent ? activeContent.sampleQuestions : (elemenData.sampleQuestions || []);
  const currentPretestQuestions = activeContent?.pretestQuestions && activeContent.pretestQuestions.length > 0
    ? activeContent.pretestQuestions
    : currentSampleQuestions.slice(0, 3);
  const currentLkpd = activeContent ? activeContent.lkpd : elemenData.lkpd;
  const currentHookQuestion = activeContent?.hookQuestion || elemenData.hookQuestion;
  const currentHookContext = activeContent?.hookContext || elemenData.hookContext;
  const currentCaseTitle = activeContent?.caseTitle || elemenData.caseTitle;
  const currentCaseScenario = activeContent?.caseScenario || elemenData.caseScenario;
  const currentCaseInstruction = activeContent?.caseInstruction || elemenData.caseInstruction;
  const currentJournalQuestions = activeContent?.journalQuestions;

  // Elemen virtual untuk SlideDeck agar mengikuti materi konten yang aktif
  const slideDeckElemen: ElemenData = {
    ...elemenData,
    title: activeContent ? `${elemenData.title} — ${currentShortTitle}` : elemenData.title,
    summary: currentSummary,
    materialCards: currentMaterialCards,
  };

  const rawSubMenus = activeContent?.subMenus || elemenData.subMenus || DEFAULT_ELEMEN_SUBMENUS;
  const configuredSubMenus = rawSubMenus.filter((s) => s.enabled).sort((a, b) => a.order - b.order);
  const activeSubMenus = configuredSubMenus.length > 0 ? configuredSubMenus : DEFAULT_ELEMEN_SUBMENUS;

  // Alur 9 Menu & Submenu Pembelajaran
  const steps = activeSubMenus.map((s) => ({
    id: s.id,
    title: s.title,
    subtitle:
      s.id === "materi"
        ? `${currentMaterialCards.length} Slide & Topik Utama`
        : s.subtitle,
    icon: iconMap[s.id] || BookOpen,
  }));

  const [currentStepIndex, setCurrentStepIndex] = useState(initialStepIndex);

  // Progress tracking per konten
  const activeContentKey = activeContent ? activeContent.id : "default";
  const [completedStepsByContent, setCompletedStepsByContent] = useState<Record<string, Record<number, boolean>>>({
    [activeContentKey]: { 0: true },
  });

  const completedSteps = completedStepsByContent[activeContentKey] || { 0: true };
  const markCurrentStepDone = (idx: number) => {
    setCompletedStepsByContent((prev) => ({
      ...prev,
      [activeContentKey]: {
        ...(prev[activeContentKey] || {}),
        [idx]: true,
      },
    }));
  };

  const currentStep = steps[currentStepIndex] || steps[0];
  const currentStepId = currentStep?.id || "materi";

  // State Step 1: Pemantik
  const [hookIdea, setHookIdea] = useState("");
  const [hookSubmitted, setHookSubmitted] = useState(false);

  // State Step 2: Pra-tes
  const [pretestAnswers, setPretestAnswers] = useState<Record<number, string>>({});
  const [pretestSubmitted, setPretestSubmitted] = useState(false);

  // State Step 3: View Mode Materi (Slide vs Cards)
  const [materiViewMode, setMateriViewMode] = useState<"slide" | "cards">("slide");

  // State Step 5: Game Matching
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);

  // State Step 6: Kasus Industri
  const [caseSolution, setCaseSolution] = useState("");
  const [caseSubmitted, setCaseSubmitted] = useState(false);

  // State Step 7: Kuis
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // State Step 8: LKPD
  const [submissionUrl, setSubmissionUrl] = useState("");
  const [submittedNotice, setSubmittedNotice] = useState(false);

  // State Step 9: Jurnal Refleksi
  const [journalAnswers, setJournalAnswers] = useState({ q1: "", q2: "", q3: "" });
  const [journalMood, setJournalMood] = useState<"semangat" | "cukup" | "bingung">("semangat");
  const [journalSaved, setJournalSaved] = useState(false);

  // Fungsi Pergantian Konten Utama
  const handleSwitchContent = (newIndex: number) => {
    setActiveContentIndex(newIndex);
    setCurrentStepIndex(0);
    setHookSubmitted(false);
    setHookIdea("");
    setPretestSubmitted(false);
    setPretestAnswers({});
    setMatchedPairs([]);
    setSelectedLeft(null);
    setCaseSubmitted(false);
    setCaseSolution("");
    setQuizSubmitted(false);
    setSelectedAnswers({});
    setJournalSaved(false);
    setJournalAnswers({ q1: "", q2: "", q3: "" });

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("konten", String(newIndex + 1));
      window.history.replaceState({}, "", url.toString());
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Navigasi Langkah Belajar
  const goToNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      const next = currentStepIndex + 1;
      setCurrentStepIndex(next);
      markCurrentStepDone(currentStepIndex);
      markCurrentStepDone(next);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handler Pra-tes
  const handlePretestSelect = (qIdx: number, optKey: string) => {
    if (pretestSubmitted) return;
    setPretestAnswers((prev) => ({ ...prev, [qIdx]: optKey }));
  };

  // Handler Game Matching
  const handleGameMatch = (pairId: number) => {
    if (selectedLeft === null) {
      setSelectedLeft(pairId);
    } else {
      if (selectedLeft === pairId && !matchedPairs.includes(pairId)) {
        setMatchedPairs((prev) => [...prev, pairId]);
      }
      setSelectedLeft(null);
    }
  };

  // Handler Kuis Utama
  const totalQuestions = currentSampleQuestions.length;
  const correctCount = currentSampleQuestions.filter(
    (q, idx) => selectedAnswers[idx] === q.correctKey
  ).length;
  const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const handleSelectAnswer = (qIndex: number, optionKey: string) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: optionKey }));
  };

  // Handler LKPD
  const handleLKPDPengumpulan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submissionUrl.trim()) return;
    setSubmittedNotice(true);
    markCurrentStepDone(7);
    setTimeout(() => setSubmittedNotice(false), 4000);
    setSubmissionUrl("");
  };

  // Perhitungan Progres Konten Aktif
  const completedCount = Object.keys(completedSteps).length;
  const progressPercent = Math.min(100, Math.round((completedCount / steps.length) * 100));

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Breadcrumb & Navigation Topbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Link href="/belajar" className="hover:text-sky-400 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Ruang Belajar</span>
          </Link>
          <span>/</span>
          <Link href={`/belajar/${fase}`} className="hover:text-sky-400 transition-colors">
            {fase.toUpperCase() === "P" ? "Peminatan" : `Fase ${fase}`}
          </Link>
          <span>/</span>
          <span className="text-white font-bold bg-slate-800 px-2.5 py-0.5 rounded-lg border border-slate-700">
            ELEMEN {bab}
          </span>
          {activeContent && (
            <>
              <span>/</span>
              <span className="text-sky-400 font-bold bg-sky-500/10 px-2.5 py-0.5 rounded-lg border border-sky-500/30 truncate max-w-[200px]">
                Konten #{activeContentIndex + 1}
              </span>
            </>
          )}
        </div>

        <Link
          href={`/belajar/${fase}`}
          className="text-xs text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{fase.toUpperCase() === "P" ? "Daftar Peminatan" : `Daftar Elemen Fase ${fase}`}</span>
        </Link>
      </div>

      {/* ===================================================================== */}
      {/* KONTEN SWITCHER LMS: 4 MENU MATERI UTAMA (SESUAI SILABUS GAMBAR 1)   */}
      {/* ===================================================================== */}
      {hasContents && elemenData.contents && (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 sm:p-6 backdrop-blur-xl shadow-2xl space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-500/30 px-3 py-0.5 rounded-full">
                  {elemenData.contents.length} Konten Pembelajaran
                </span>
                <span className="text-xs text-slate-400">
                  Standar BSKAP Kurikulum Merdeka
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white">
                Silabus Elemen: {elemenData.title}
              </h2>
            </div>
          </div>

          {/* Rincian CP, Konten, Kompetensi, dan Rumusan TP (Standar Gambar 1) via Native Details */}
          <details
            className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition-all duration-200"
            open={showSyllabusTable}
            onToggle={(e) => setShowSyllabusTable((e.currentTarget as HTMLDetailsElement).open)}
          >
            <summary className="list-none flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none">
              <div className="flex items-center gap-2">
                <Table className="w-4 h-4 text-sky-400" />
                <span className="text-xs sm:text-sm font-bold text-sky-300">
                  Rincian Matriks CP, Konten, Kompetensi & Rumusan TP (Standar Gambar 1)
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-700 bg-slate-800/90 group-open:bg-sky-500/20 text-xs font-semibold text-slate-300 group-open:text-sky-300 transition w-fit">
                <span className="group-open:hidden">Lihat Rincian CP & TP</span>
                <span className="hidden group-open:inline">Tutup Rincian CP & TP</span>
                <ChevronDown className="w-3.5 h-3.5 group-open:rotate-180 transition-transform duration-200" />
              </div>
            </summary>

            <div className="mt-4 pt-4 border-t border-slate-800/80 overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-[11px] uppercase tracking-wider text-slate-400 bg-slate-900/60">
                    <th className="p-3 font-bold">Elemen</th>
                    <th className="p-3 font-bold">Capaian Pembelajaran</th>
                    <th className="p-3 font-bold">Konten</th>
                    <th className="p-3 font-bold">Kompetensi</th>
                    <th className="p-3 font-bold">Rumusan Tujuan Pembelajaran</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {elemenData.contents.map((c, idx) => (
                    <tr key={c.id} className="hover:bg-slate-900/40 transition">
                      {idx === 0 && (
                        <>
                          <td rowSpan={elemenData.contents!.length} className="p-3 font-bold text-white align-top border-r border-slate-800/60 bg-slate-900/20">
                            {elemenData.title}
                          </td>
                          <td rowSpan={elemenData.contents!.length} className="p-3 text-slate-300 align-top border-r border-slate-800/60 bg-slate-900/10 leading-relaxed max-w-xs">
                            {elemenData.cpText}
                          </td>
                        </>
                      )}
                      <td className="p-3 font-semibold text-white border-r border-slate-800/60 align-top">
                        {c.title}
                      </td>
                      <td className="p-3 border-r border-slate-800/60 align-top">
                        <div className="flex flex-col gap-1">
                          {c.kompetensi.map((k, kIdx) => (
                            <span key={kIdx} className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 font-bold text-[10px] inline-block w-fit">
                              {k}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-3 align-top leading-relaxed">
                        <ul className="list-disc pl-4 space-y-1">
                          {c.tujuanPembelajaran.map((tp, tpIdx) => (
                            <li key={tpIdx}>{tp}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>

          {/* Menu Dropdown Konten Materi */}
          <div className="relative pt-1" ref={contentDropdownRef}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 rounded-2xl border border-sky-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950/30 shadow-lg shadow-sky-950/20">
              {/* Trigger Bar Konten Aktif */}
              <div
                onClick={() => setIsContentDropdownOpen(!isContentDropdownOpen)}
                className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0 cursor-pointer group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setIsContentDropdownOpen(!isContentDropdownOpen);
                  }
                }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200">
                  <Layers className="w-5 h-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg bg-sky-400 text-slate-950 font-extrabold shadow-sm">
                      KONTEN #{activeContentIndex + 1}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {activeContentIndex + 1} dari {elemenData.contents?.length || 0} Konten
                    </span>
                    {activeContent && (
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                          Object.keys(completedStepsByContent[activeContent.id] || {}).length >= steps.length
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-slate-800 text-slate-300 border border-slate-700"
                        }`}
                      >
                        {Object.keys(completedStepsByContent[activeContent.id] || {}).length >= steps.length && (
                          <Check className="w-3 h-3 text-emerald-400" />
                        )}
                        <span>
                          {Object.keys(completedStepsByContent[activeContent.id] || {}).length}/{steps.length} Selesai
                        </span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1">
                    {activeContent?.shortTitle || activeContent?.title}
                  </h3>

                  {activeContent?.kompetensi && activeContent.kompetensi.length > 0 && (
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {activeContent.kompetensi.map((k, kIdx) => (
                        <span
                          key={kIdx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-sky-500/10 text-sky-300 border border-sky-500/20"
                        >
                          {k}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons: Prev/Next Quick Switch + Dropdown Trigger Button */}
              <div className="flex items-center gap-2 shrink-0 self-end md:self-center pt-2 md:pt-0 border-t border-slate-800 md:border-t-0 w-full md:w-auto justify-between md:justify-end">
                {/* Tombol Cepat Prev / Next */}
                <div className="flex items-center rounded-xl bg-slate-950 border border-slate-800 p-0.5">
                  <button
                    type="button"
                    onClick={() => handleSwitchContent(Math.max(0, activeContentIndex - 1))}
                    disabled={activeContentIndex === 0}
                    title="Konten Sebelumnya"
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-bold text-slate-400 px-2.5 select-none">
                    {activeContentIndex + 1}/{elemenData.contents?.length || 0}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleSwitchContent(Math.min((elemenData.contents?.length || 1) - 1, activeContentIndex + 1))}
                    disabled={activeContentIndex === (elemenData.contents?.length || 1) - 1}
                    title="Konten Selanjutnya"
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Tombol Utama Buka/Tutup Pilihan Konten */}
                <button
                  type="button"
                  onClick={() => setIsContentDropdownOpen(!isContentDropdownOpen)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 shadow-md ${
                    isContentDropdownOpen
                      ? "bg-sky-500 text-slate-950 shadow-sky-500/30 ring-2 ring-sky-300"
                      : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600"
                  }`}
                >
                  <span>{isContentDropdownOpen ? "Tutup Pilihan Konten" : "Pilih Konten"}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isContentDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Panel Pilihan Konten Pembelajaran (In-Flow Expansion, Bersih & Bebas Bentrok Z-Index) */}
            {isContentDropdownOpen && (
              <div className="mt-4 pt-4 border-t border-slate-800 animate-in fade-in-50 slide-in-from-top-2 duration-200">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-sky-400" />
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                      Pilihan Konten Pembelajaran ({elemenData.contents.length} Konten)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-slate-400 hidden sm:inline">
                      Klik salah satu konten untuk langsung beralih materi
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsContentDropdownOpen(false)}
                      className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 transition"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>Tutup</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-h-[560px] overflow-y-auto pr-1">
                  {elemenData.contents.map((c, idx) => {
                    const isActive = activeContentIndex === idx;
                    const cStepsDone = Object.keys(completedStepsByContent[c.id] || {}).length;
                    const isCompleted = cStepsDone >= steps.length;

                    return (
                      <Link
                        key={c.id}
                        href={`/belajar/${fase}/${bab}?konten=${idx + 1}`}
                        onClick={(e) => {
                          if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                            handleSwitchContent(idx);
                            setIsContentDropdownOpen(false);
                          }
                        }}
                        className={`text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between group relative overflow-hidden ${
                          isActive
                            ? "bg-gradient-to-br from-sky-500/25 via-indigo-500/15 to-slate-900 border-sky-400 text-white shadow-lg shadow-sky-500/20 ring-2 ring-sky-400/50"
                            : isCompleted
                            ? "bg-slate-950/70 border-emerald-500/30 hover:border-emerald-500/60 text-slate-300 hover:bg-slate-900/90 hover:scale-[1.01]"
                            : "bg-slate-950/60 border-slate-800 hover:border-sky-500/40 text-slate-300 hover:bg-slate-900/90 hover:scale-[1.01]"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span
                              className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border text-center ${
                                isActive
                                  ? "bg-sky-400 text-slate-950 border-sky-300 font-extrabold"
                                  : "bg-slate-800 text-slate-300 border-slate-700"
                              }`}
                            >
                              Konten #{idx + 1}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 flex items-center gap-1 ${
                                isCompleted
                                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                  : "bg-slate-800 text-slate-400 border border-slate-700"
                              }`}
                            >
                              {isCompleted && <Check className="w-2.5 h-2.5 text-emerald-400" />}
                              <span>{cStepsDone}/{steps.length} Selesai</span>
                            </span>
                          </div>

                          <h4
                            className={`text-xs sm:text-sm font-bold line-clamp-2 mb-2 leading-snug ${
                              isActive ? "text-white" : "text-slate-200 group-hover:text-white"
                            }`}
                          >
                            {c.shortTitle || c.title}
                          </h4>

                          {c.kompetensi && c.kompetensi.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-2">
                              {c.kompetensi.slice(0, 3).map((k, kIdx) => (
                                <span
                                  key={kIdx}
                                  className={`text-[9px] px-1.5 py-0.5 rounded ${
                                    isActive
                                      ? "bg-sky-400/20 text-sky-200 border border-sky-400/30"
                                      : "bg-slate-900 text-slate-400 border border-slate-800"
                                  }`}
                                >
                                  {k}
                                </span>
                              ))}
                              {c.kompetensi.length > 3 && (
                                <span className="text-[9px] px-1 py-0.5 text-slate-500">
                                  +{c.kompetensi.length - 3}
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] mt-2">
                          {isActive ? (
                            <span className="inline-flex items-center gap-1.5 text-sky-400 font-bold">
                              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                              Sedang Dipelajari
                            </span>
                          ) : (
                            <span className="text-slate-400 group-hover:text-sky-300 transition-colors font-medium flex items-center gap-1">
                              Buka Konten Ini →
                            </span>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2-Column Responsive Layout (Sesuai LMS KIK Space) */}
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start space-y-6 lg:space-y-0">
        {/* =================================================================== */}
        {/* SIDEBAR NAVIGASI MENU & SUBMENU 9 LANGKAH (GAMBAR 2)                 */}
        {/* =================================================================== */}
        <aside className="lg:col-span-4 sticky top-20 space-y-4">
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-5 text-white shadow-2xl space-y-4">
            {/* Header Elemen & Konten Aktif */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-500/30 px-3 py-1 rounded-full">
                  {elemenData.fase === "P" ? "PEMINATAN" : `FASE ${elemenData.fase}`} • ELEMEN {elemenData.code}
                </span>
                <span className="text-xs font-bold text-slate-400 flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded-xl border border-slate-800">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  {elemenData.hours} JP
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-black text-white leading-tight">
                {currentTitle}
              </h1>
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                {currentSummary}
              </p>
            </div>

            {/* Progress Bar Langkah Belajar Konten Aktif */}
            <div className="space-y-1.5 pt-3 border-t border-slate-800">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-400">Progres Langkah:</span>
                <span className="text-sky-400">
                  {completedCount} dari {steps.length} selesai ({progressPercent}%)
                </span>
              </div>
              <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800/80">
                <div
                  className="bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 h-full rounded-full transition-all duration-300 shadow-sm"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Daftar Submenu 9 Langkah (Gambar 2) */}
            <div className="space-y-1.5 pt-3 border-t border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Menu & Submenu Belajar:
              </span>
              <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
                {steps.map((st, idx) => {
                  const Icon = st.icon;
                  const isActive = currentStepIndex === idx;
                  const isCompleted = Boolean(completedSteps[idx]);

                  return (
                    <Link
                      key={st.id}
                      href={`/belajar/${fase}/${bab}?konten=${activeContentIndex + 1}&step=${idx + 1}`}
                      onClick={(e) => {
                        if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                          e.preventDefault();
                          setCurrentStepIndex(idx);
                          markCurrentStepDone(idx);
                          if (typeof window !== "undefined") {
                            const url = new URL(window.location.href);
                            url.searchParams.set("step", String(idx + 1));
                            window.history.replaceState({}, "", url.toString());
                          }
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className={`w-full text-left p-2.5 rounded-2xl text-xs font-bold transition flex items-center justify-between border ${
                        isActive
                          ? "bg-gradient-to-r from-sky-500 to-indigo-600 border-sky-400 text-white shadow-lg shadow-sky-500/20"
                          : isCompleted
                          ? "bg-slate-950/80 border-slate-800 text-slate-200 hover:bg-slate-800"
                          : "bg-slate-950/40 border-slate-800/60 text-slate-400 hover:bg-slate-850 hover:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span
                          className={`w-6 h-6 rounded-xl flex items-center justify-center text-[10px] font-black shrink-0 ${
                            isActive
                              ? "bg-white text-indigo-700 shadow-xs"
                              : isCompleted
                              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          {isCompleted ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                        </span>
                        <div className="truncate text-left">
                          <span className="block truncate text-xs font-bold">{st.title}</span>
                          <span
                            className={`block truncate text-[10px] font-normal ${
                              isActive ? "text-sky-100" : "text-slate-400"
                            }`}
                          >
                            {st.subtitle}
                          </span>
                        </div>
                      </div>
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Standar BSKAP Kurikulum Merdeka */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" /> Standar BSKAP
              </span>
              <span className="text-slate-500 font-medium">Kurikulum Merdeka</span>
            </div>
          </div>
        </aside>

        {/* =================================================================== */}
        {/* KONTEN UTAMA: STAGE LANGKAH AKTIF                                   */}
        {/* =================================================================== */}
        <main className="lg:col-span-8 space-y-6">
          {/* Top Stage Banner */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6 backdrop-blur-xl shadow-xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-sky-500/15 text-sky-400 border border-sky-500/25 flex items-center justify-center font-black">
                {currentStepIndex + 1}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                  {activeContent ? `${currentShortTitle} • ` : ""}Langkah {currentStepIndex + 1} dari {steps.length}
                </span>
                <h2 className="text-lg sm:text-xl font-extrabold text-white">
                  {currentStep?.title}
                </h2>
              </div>
            </div>

            {/* Khusus Step Materi: Toggle Switcher View Mode */}
            {currentStepId === "materi" && (
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-2xl border border-slate-800 shrink-0">
                <button
                  type="button"
                  onClick={() => setMateriViewMode("slide")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                    materiViewMode === "slide"
                      ? "bg-sky-500 text-white shadow-xs"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mode Slide</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMateriViewMode("cards")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                    materiViewMode === "cards"
                      ? "bg-sky-500 text-white shadow-xs"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mode Kartu</span>
                </button>
              </div>
            )}
          </div>

          {/* ================================================================= */}
          {/* STEP 1: PEMANTIK & STIMULUS (HOOK)                                */}
          {/* ================================================================= */}
          {currentStepId === "hook" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="rounded-3xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 backdrop-blur-xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Pertanyaan Pemantik Berpikir Kritis</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  &ldquo;{currentHookQuestion}&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentHookContext}
                </p>
              </div>

              {/* Form Interaktif Respon Pemantik */}
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 space-y-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-sky-400" />
                  <span>Tuliskan Gagasan Pemantikmu:</span>
                </h4>
                <p className="text-xs text-slate-400">
                  Menurut analisismu, apa peran terpenting dari topik ini dalam proses siaran televisi berkualitas profesional?
                </p>

                {hookSubmitted ? (
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Luar biasa! Respon pemantikmu telah tersimpan. Lanjutkan ke langkah pra-tes untuk menguji pengetahuan awalmu.</span>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <textarea
                      rows={4}
                      value={hookIdea}
                      onChange={(e) => setHookIdea(e.target.value)}
                      placeholder="Contoh: Menurut saya, koordinasi dan prosedur teknis sangat krusial karena..."
                      className="w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 leading-relaxed"
                    />
                    <div className="flex justify-end">
                      <button
                        type="button"
                        disabled={!hookIdea.trim()}
                        onClick={() => {
                          setHookSubmitted(true);
                          markCurrentStepDone(0);
                        }}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 disabled:opacity-40 text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-sky-500/20 transition active:scale-95"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Kirim Respon & Lanjut</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* STEP 2: PRA-TES DIAGNOSTIK                                       */}
          {/* ================================================================= */}
          {currentStepId === "pretest" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-sky-400" />
                      <span>Pra-tes Diagnostik: {currentShortTitle}</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Uji mandiri 3 butir soal cepat untuk mendiagnosis penguasaan awalmu sebelum mempelajari modul.
                    </p>
                  </div>
                  {pretestSubmitted && (
                    <button
                      type="button"
                      onClick={() => {
                        setPretestAnswers({});
                        setPretestSubmitted(false);
                      }}
                      className="text-xs text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Ulangi
                    </button>
                  )}
                </div>

                <div className="space-y-5">
                  {currentPretestQuestions.map((q, idx) => {
                    const chosen = pretestAnswers[idx];
                    const isCorrect = chosen === q.correctKey;

                    return (
                      <div key={q.id} className="border border-slate-800 rounded-2xl p-4 bg-slate-950/60 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                            Pra-tes #{idx + 1} • {q.bloom}
                          </span>
                          {pretestSubmitted && (
                            <span className={`text-xs font-bold ${isCorrect ? "text-emerald-400" : "text-rose-400"}`}>
                              {isCorrect ? "✓ Benar" : "✕ Kurang Tepat"}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">{q.stem}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {q.options.map((opt) => {
                            const isSelected = chosen === opt.key;
                            let style = "border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800";
                            if (isSelected) style = "border-sky-500 bg-sky-500/20 text-sky-300 font-bold";
                            if (pretestSubmitted) {
                              if (opt.key === q.correctKey) style = "border-emerald-500 bg-emerald-500/20 text-emerald-300 font-bold";
                              else if (isSelected && !isCorrect) style = "border-rose-500 bg-rose-500/20 text-rose-300";
                            }

                            return (
                              <button
                                key={opt.key}
                                type="button"
                                onClick={() => handlePretestSelect(idx, opt.key)}
                                className={`flex items-start gap-2.5 rounded-xl border p-2.5 text-xs text-left transition ${style}`}
                              >
                                <span className="w-5 h-5 rounded-lg bg-black/40 flex items-center justify-center font-bold shrink-0">
                                  {opt.key}
                                </span>
                                <span className="leading-relaxed">{opt.text}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {!pretestSubmitted ? (
                  <div className="pt-3 flex justify-end">
                    <button
                      type="button"
                      disabled={Object.keys(pretestAnswers).length < currentPretestQuestions.length}
                      onClick={() => {
                        setPretestSubmitted(true);
                        markCurrentStepDone(1);
                      }}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 disabled:opacity-40 text-white text-xs font-bold shadow-md shadow-sky-500/20 transition active:scale-95"
                    >
                      Periksa Hasil Pra-tes
                    </button>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-300 font-medium">
                      Pra-tes selesai dievaluasi. Sekarang kamu siap mendalami materi di Slide Presentasi Interaktif!
                    </span>
                    <button
                      type="button"
                      onClick={goToNextStep}
                      className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition flex items-center gap-1.5"
                    >
                      <span>Lanjut ke Slide Materi</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* STEP 3: MATERI: SLIDE INTERAKTIF (ELEMEN SLIDE DECK)               */}
          {/* ================================================================= */}
          {currentStepId === "materi" && (
            <div className="space-y-6 animate-fadeIn">
              {materiViewMode === "slide" ? (
                /* Mode Slide Presentasi Interaktif */
                <ElemenSlideDeck
                  elemen={slideDeckElemen}
                  embedded={true}
                  onFinish={() => {
                    markCurrentStepDone(2);
                    goToNextStep();
                  }}
                />
              ) : (
                /* Mode Kartu Bacaan Ringkas */
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentMaterialCards.map((card, idx) => (
                      <div
                        key={idx}
                        className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl flex flex-col justify-between space-y-4"
                      >
                        <div className="space-y-2">
                          <span className="text-[11px] font-bold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20 uppercase tracking-wider">
                            Topik #{idx + 1}
                          </span>
                          <h3 className="text-base font-bold text-white">{card.title}</h3>
                          <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line">
                            {card.content}
                          </p>
                        </div>

                        {card.caseStudy && (
                          <div className="pt-3 border-t border-slate-800 text-[11px] text-amber-300 bg-amber-500/5 p-3 rounded-2xl border border-amber-500/20">
                            <span className="font-bold">Studi Kasus: </span>
                            {card.caseStudy}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <HelpCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Tahukah Kamu?</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {currentMaterialCards[0]?.didYouKnow ||
                          "Lulusan SMK Broadcasting dituntut menguasai integrasi multi-disiplin: pengoperasian alat teknis, kepekaan artistik tata gambar, dan kepatuhan kode etik penyiaran."}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ================================================================= */}
          {/* STEP 4: VIDEO & PANDUAN TEKNIS                                   */}
          {/* ================================================================= */}
          {currentStepId === "video" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl space-y-4">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Video className="w-5 h-5 text-red-400" />
                    <span>{currentVideo.title}</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-sky-400">Panduan Menonton: </strong>
                    {currentVideo.guide}
                  </p>
                </div>

                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex items-center justify-center text-center p-6">
                  <div className="space-y-3">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/20 text-red-500 border border-red-500/30">
                      <Video className="h-8 w-8" />
                    </div>
                    <div className="text-base font-bold text-white">{currentVideo.title}</div>
                    <p className="text-xs text-slate-400 max-w-md mx-auto">
                      Video demonstrasi resmi diselaraskan dengan BSKAP {currentShortTitle}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* STEP 5: SIMULASI & PRAKTIK INTERAKTIF (MINI-GAME MATCHING)       */}
          {/* ================================================================= */}
          {currentStepId === "game" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Gamepad2 className="w-5 h-5 text-indigo-400" />
                      <span>Simulasi Pasangan Istilah & Fungsi: {currentShortTitle}</span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Klik salah satu istilah di sebelah kiri, kemudian klik pasangan fungsi teknis yang tepat di sebelah kanan.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 shrink-0">
                    <Award className="w-4 h-4" />
                    <span>
                      Selesai: {matchedPairs.length} / {currentGamePairs.length}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Kolom A: Istilah / Perangkat
                    </span>
                    {currentGamePairs.map((p) => {
                      const isMatched = matchedPairs.includes(p.id);
                      const isSelected = selectedLeft === p.id;

                      return (
                        <button
                          key={p.id}
                          type="button"
                          disabled={isMatched}
                          onClick={() => handleGameMatch(p.id)}
                          className={`w-full rounded-2xl border p-3.5 text-xs font-semibold text-left transition ${
                            isMatched
                              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400 opacity-60"
                              : isSelected
                              ? "border-sky-500 bg-sky-500/20 text-sky-300 ring-2 ring-sky-500"
                              : "border-slate-800 bg-slate-950 hover:bg-slate-850 text-white"
                          }`}
                        >
                          {p.left} {isMatched && "✓"}
                        </button>
                      );
                    })}
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Kolom B: Definisi / Fungsi Teknis
                    </span>
                    {currentGamePairs.map((p) => {
                      const isMatched = matchedPairs.includes(p.id);

                      return (
                        <button
                          key={p.id}
                          type="button"
                          disabled={isMatched}
                          onClick={() => handleGameMatch(p.id)}
                          className={`w-full rounded-2xl border p-3.5 text-xs text-left transition leading-relaxed ${
                            isMatched
                              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400 opacity-60"
                              : "border-slate-800 bg-slate-950 hover:bg-slate-850 text-slate-200"
                          }`}
                        >
                          {p.right} {isMatched && "✓"}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {matchedPairs.length === currentGamePairs.length && currentGamePairs.length > 0 && (
                  <div className="mt-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-center space-y-2">
                    <p className="text-sm font-bold text-emerald-400">
                      🎉 Luar biasa! Semua pasangan konsep telah cocok secara presisi!
                    </p>
                    <button
                      type="button"
                      onClick={() => setMatchedPairs([])}
                      className="text-xs font-semibold text-sky-400 hover:underline"
                    >
                      Ulangi Permainan
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* STEP 6: STUDI KASUS INDUSTRI PENYIARAN                            */}
          {/* ================================================================= */}
          {currentStepId === "case" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>Studi Kasus Nyata Industri Penyiaran & Perfilman</span>
                </div>

                <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 text-xs sm:text-sm text-slate-200 leading-relaxed space-y-2">
                  <h4 className="font-bold text-white text-base">
                    {currentCaseTitle}
                  </h4>
                  <p>
                    {currentCaseScenario}
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                    Analisis & Rekomendasi Solusimu:
                  </h5>
                  <p className="text-xs text-slate-400">
                    {currentCaseInstruction}
                  </p>

                  {caseSubmitted ? (
                    <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>Analisis solusimu telah dicatat di portofolio! Lanjutkan ke asesmen kuis formatif.</span>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <textarea
                        rows={4}
                        value={caseSolution}
                        onChange={(e) => setCaseSolution(e.target.value)}
                        placeholder="Uraikan tindakanmu: 1) Koordinasi interkom dengan Floor Director, 2) Mitigasi darurat sesuai SOP, 3) ..."
                        className="w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 leading-relaxed"
                      />
                      <div className="flex justify-end">
                        <button
                          type="button"
                          disabled={!caseSolution.trim()}
                          onClick={() => {
                            setCaseSubmitted(true);
                            markCurrentStepDone(5);
                          }}
                          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 disabled:opacity-40 text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-sky-500/20 transition active:scale-95"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Simpan Solusi Kasus</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* STEP 7: KUIS FORMATIF (LEVEL BLOOM C1–C6)                         */}
          {/* ================================================================= */}
          {currentStepId === "kuis" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-indigo-400" />
                      <span>Kuis Formatif Terstandar BSKAP: {currentShortTitle}</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Asesmen sumatif akhir topik untuk mengukur pemahaman teori & analisis kejuruan.
                    </p>
                  </div>

                  {quizSubmitted && (
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-slate-950 border border-slate-800 px-4 py-2 text-center">
                        <span className="text-[11px] text-slate-400">Nilai: </span>
                        <span className="text-sm font-bold text-sky-400">{scorePercent} / 100</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedAnswers({});
                          setQuizSubmitted(false);
                        }}
                        className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Ulangi Kuis
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {currentSampleQuestions.map((q, idx) => {
                    const selected = selectedAnswers[idx];
                    const isCorrect = selected === q.correctKey;

                    return (
                      <div key={q.id} className="border border-slate-800 rounded-2xl p-5 bg-slate-950/50 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                            Soal #{idx + 1} • Taksonomi Bloom {q.bloom}
                          </span>
                          {quizSubmitted && (
                            <span className={`text-xs font-bold ${isCorrect ? "text-emerald-400" : "text-rose-400"}`}>
                              {isCorrect ? "✓ Jawaban Benar" : "✕ Kurang Tepat"}
                            </span>
                          )}
                        </div>

                        <p className="text-sm text-slate-100 font-medium leading-relaxed">{q.stem}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                          {q.options.map((opt) => {
                            const isChosen = selected === opt.key;
                            let style = "border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-850";
                            if (isChosen) style = "border-sky-500 bg-sky-500/20 text-sky-300 font-bold";
                            if (quizSubmitted) {
                              if (opt.key === q.correctKey) style = "border-emerald-500 bg-emerald-500/20 text-emerald-300 font-bold";
                              else if (isChosen && !isCorrect) style = "border-rose-500 bg-rose-500/20 text-rose-300";
                            }

                            return (
                              <button
                                key={opt.key}
                                type="button"
                                onClick={() => handleSelectAnswer(idx, opt.key)}
                                className={`flex items-start gap-3 rounded-xl border p-3 text-xs text-left transition ${style}`}
                              >
                                <span className="w-5 h-5 rounded-lg bg-black/40 flex items-center justify-center font-bold shrink-0">
                                  {opt.key}
                                </span>
                                <span className="leading-relaxed">{opt.text}</span>
                              </button>
                            );
                          })}
                        </div>

                        {quizSubmitted && (
                          <div className="mt-3 rounded-xl border border-slate-800 bg-slate-900/90 p-3.5 text-xs text-slate-300 space-y-1">
                            <span className="font-bold text-sky-400">Pembahasan & Rubrik: </span>
                            <p className="leading-relaxed">{q.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {!quizSubmitted ? (
                  <div className="pt-3 flex justify-end">
                    <button
                      type="button"
                      disabled={Object.keys(selectedAnswers).length < currentSampleQuestions.length}
                      onClick={() => {
                        setQuizSubmitted(true);
                        markCurrentStepDone(6);
                      }}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 disabled:opacity-40 text-white text-xs font-bold shadow-md shadow-sky-500/20 transition active:scale-95"
                    >
                      Periksa Seluruh Jawaban Kuis
                    </button>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-300">
                      Skor kuis formatif Anda: <strong className="text-sky-400">{scorePercent} / 100</strong>. Lanjutkan ke LKPD Praktikum.
                    </span>
                    <button
                      type="button"
                      onClick={goToNextStep}
                      className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold transition flex items-center gap-1.5"
                    >
                      <span>Lanjut ke LKPD Praktikum</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* STEP 8: LKPD PRAKTIKUM & PORTOFOLIO                               */}
          {/* ================================================================= */}
          {currentStepId === "lkpd" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <FileText className="w-5 h-5 text-emerald-400" />
                      <span>{currentLkpd.title}</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      <strong>Tujuan: </strong>{currentLkpd.objective}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => alert("Mengunduh Lembar Kerja Siswa (PDF LKPD Terstandar)...")}
                    className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition shrink-0"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Unduh PDF LKPD</span>
                  </button>
                </div>

                <div className="border border-slate-800 rounded-2xl p-5 bg-slate-950/60 space-y-4 text-xs text-slate-300 leading-relaxed">
                  <div>
                    <span className="font-bold text-white">Peralatan & Bahan Praktikum:</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {currentLkpd.tools.map((t, idx) => (
                        <span key={idx} className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-xl text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-3">
                    <span className="font-bold text-white">Langkah-Langkah Kerja:</span>
                    <ol className="list-decimal pl-5 mt-2 space-y-1.5 text-slate-300">
                      {currentLkpd.steps.map((s, idx) => (
                        <li key={idx}>{s}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="border-t border-slate-800 pt-3">
                    <span className="font-bold text-white">Format Luaran (Output Dokumen): </span>
                    <span className="text-sky-400 font-semibold">{currentLkpd.outputFormat}</span>
                  </div>

                  {/* Form Pengumpulan Link Portofolio */}
                  <div className="border-t border-slate-800 pt-4 space-y-3">
                    <span className="font-bold text-white block">Pengumpulan Tugas Praktikum Daring:</span>
                    <p className="text-slate-400">
                      Tautkan link Google Drive berkas PDF laporan, link video YouTube / dokumentasi hasil praktikum kelompokmu:
                    </p>

                    {submittedNotice && (
                      <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Tugas praktikum berhasil dikirimkan ke guru mata pelajaran!</span>
                      </div>
                    )}

                    <form onSubmit={handleLKPDPengumpulan} className="flex gap-2">
                      <input
                        type="url"
                        required
                        value={submissionUrl}
                        onChange={(e) => setSubmissionUrl(e.target.value)}
                        placeholder="https://drive.google.com/... atau https://youtu.be/..."
                        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                      />
                      <button
                        type="submit"
                        className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-xs font-bold text-white hover:opacity-95 transition"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Kirim</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* STEP 9: JURNAL REFLEKSI & CAPAIAN PEMBELAJARAN (TP/KKTP)          */}
          {/* ================================================================= */}
          {currentStepId === "journal" && (
            <div className="space-y-6 animate-fadeIn">
              {/* Form Refleksi 3-2-1 */}
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Target className="w-5 h-5 text-indigo-400" />
                      <span>Jurnal Refleksi Mandiri: {currentShortTitle}</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Catat refleksi belajarmu untuk memastikan pemahaman kompetensi modul ini.
                    </p>
                  </div>

                  <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setJournalMood("semangat")}
                      className={`p-1.5 rounded-lg text-xs transition ${
                        journalMood === "semangat" ? "bg-emerald-500 text-white" : "text-slate-400"
                      }`}
                      title="Sangat Semangat"
                    >
                      <Smile className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setJournalMood("cukup")}
                      className={`p-1.5 rounded-lg text-xs transition ${
                        journalMood === "cukup" ? "bg-amber-500 text-white" : "text-slate-400"
                      }`}
                      title="Cukup Paham"
                    >
                      <Meh className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setJournalMood("bingung")}
                      className={`p-1.5 rounded-lg text-xs transition ${
                        journalMood === "bingung" ? "bg-rose-500 text-white" : "text-slate-400"
                      }`}
                      title="Perlu Bimbingan"
                    >
                      <Frown className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1.5">
                    <label className="font-bold text-sky-400 block">
                      {currentJournalQuestions?.q1 || "3 Hal Baru yang Paling Berkesan Saya Pahami:"}
                    </label>
                    <textarea
                      rows={2}
                      value={journalAnswers.q1}
                      onChange={(e) => setJournalAnswers({ ...journalAnswers, q1: e.target.value })}
                      placeholder="Tuliskan pemahaman teknis atau konsep baru..."
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-amber-400 block">
                      {currentJournalQuestions?.q2 || "2 Hal yang Ingin Saya Eksplorasi Lebih Dalam di Studio/Lapangan:"}
                    </label>
                    <textarea
                      rows={2}
                      value={journalAnswers.q2}
                      onChange={(e) => setJournalAnswers({ ...journalAnswers, q2: e.target.value })}
                      placeholder="Tuliskan praktik atau pengoperasian alat yang ingin dicoba..."
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-rose-400 block">
                      {currentJournalQuestions?.q3 || "1 Pertanyaan / Kendala yang Masih Membutuhkan Diskusi dengan Guru:"}
                    </label>
                    <textarea
                      rows={2}
                      value={journalAnswers.q3}
                      onChange={(e) => setJournalAnswers({ ...journalAnswers, q3: e.target.value })}
                      placeholder="Tuliskan kendala teknis atau pertanyaan..."
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  {journalSaved ? (
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Jurnal refleksi berhasil disimpan! Anda telah menuntaskan seluruh siklus pembelajaran pada modul ini.</span>
                    </div>
                  ) : (
                    <div className="flex justify-end pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setJournalSaved(true);
                          markCurrentStepDone(8);
                        }}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xs flex items-center gap-2 shadow-md transition"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Simpan Jurnal Refleksi</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Tombol Lanjut ke Konten Berikutnya (Jika Ada Konten Berikutnya) */}
              {hasContents && elemenData.contents && activeContentIndex < elemenData.contents.length - 1 && (
                <div className="rounded-3xl border border-sky-500/30 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-slate-900 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="text-[10px] font-black uppercase tracking-wider text-sky-400 bg-sky-500/15 border border-sky-500/30 px-2.5 py-0.5 rounded-full inline-block">
                      Langkah Selanjutnya
                    </span>
                    <h4 className="text-base font-bold text-white">
                      Lanjut ke Konten #{activeContentIndex + 2}: {elemenData.contents[activeContentIndex + 1].shortTitle || elemenData.contents[activeContentIndex + 1].title}
                    </h4>
                    <p className="text-xs text-slate-300">
                      Lanjutkan ke materi berikutnya untuk melengkapi 4 kompetensi utama elemen ini.
                    </p>
                  </div>

                  <Link
                    href={`/belajar/${fase}/${bab}?konten=${activeContentIndex + 2}`}
                    onClick={(e) => {
                      if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                        handleSwitchContent(activeContentIndex + 1);
                      }
                    }}
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-sky-500/25 transition active:scale-95 shrink-0"
                  >
                    <span>Mulai Konten #{activeContentIndex + 2}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}

              {/* Ringkasan Capaian Pembelajaran & TP */}
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  <span>Target Capaian Pembelajaran BSKAP ELEMEN {elemenData.code}</span>
                </div>

                <div className="border border-slate-800 rounded-2xl p-4 bg-slate-950/60 text-xs text-slate-300 leading-relaxed italic">
                  &ldquo;{elemenData.cpText}&rdquo;
                </div>

                {activeContent?.tujuanPembelajaran && activeContent.tujuanPembelajaran.length > 0 ? (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-white block">Tujuan Pembelajaran Konten Ini:</span>
                    <ul className="space-y-1.5 pl-2 text-xs text-slate-300">
                      {activeContent.tujuanPembelajaran.map((tpStr, tpIdx) => (
                        <li key={tpIdx} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold shrink-0">✓</span>
                          <span>{tpStr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold text-white block">Tujuan Pembelajaran (TP):</span>
                    {elemenData.tp.map((tp) => (
                      <div key={tp.code} className="border border-slate-800 rounded-xl p-3.5 bg-slate-950/40 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                            {tp.code}
                          </span>
                          <span className="text-xs text-white font-semibold">{tp.statement}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {tp.profileDimensions.map((d) => (
                            <span key={d} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded-full border border-slate-800">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* CUSTOM / EXTRA STEP FALLBACK                                      */}
          {/* ================================================================= */}
          {!["hook", "pretest", "materi", "video", "game", "case", "kuis", "lkpd", "journal"].includes(currentStepId) && (
            <div className="space-y-6 animate-fadeIn">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 space-y-4 text-center">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {currentStep?.title || "Aktivitas Pembelajaran Tambahan"}
                </h3>
                <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                  {currentStep?.subtitle || "Langkah pembelajaran khusus ini telah dikonfigurasi oleh Guru Pengampu Kejuruan Broadcasting & Perfilman."}
                </p>
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 max-w-md mx-auto text-xs text-slate-400">
                  Ikuti arahan dan instruksi langsung dari guru pengampu di kelas / studio produksi.
                </div>
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* BOTTOM STEP NAVIGATION CONTROLLER                                  */}
          {/* ================================================================= */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 flex items-center justify-between gap-3 shadow-lg">
            <button
              type="button"
              disabled={currentStepIndex === 0}
              onClick={goToPrevStep}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-white text-xs font-semibold flex items-center gap-1.5 transition active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Langkah Sebelumnya</span>
              <span className="sm:hidden">Kembali</span>
            </button>

            <div className="text-xs font-bold text-slate-400 text-center">
              Langkah <strong className="text-white">{currentStepIndex + 1}</strong> dari {steps.length}
            </div>

            <button
              type="button"
              onClick={goToNextStep}
              disabled={currentStepIndex === steps.length - 1}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 disabled:opacity-40 disabled:pointer-events-none text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-sky-500/20 transition active:scale-95"
            >
              <span className="hidden sm:inline">Langkah Berikutnya</span>
              <span className="sm:hidden">Lanjut</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
