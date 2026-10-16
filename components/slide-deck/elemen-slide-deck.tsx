"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Layers,
  HelpCircle,
  Lightbulb,
  Award,
  RotateCcw,
} from "lucide-react";
import { ElemenData, MaterialCard } from "@/lib/data/curriculum";

interface ElemenSlideDeckProps {
  elemen: ElemenData;
  onFinish?: () => void;
  embedded?: boolean;
}

export default function ElemenSlideDeck({
  elemen,
  onFinish,
  embedded = true,
}: ElemenSlideDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeCheckpoints, setActiveCheckpoints] = useState<Record<number, boolean>>({});

  const cards = elemen.materialCards || [];
  // Slide 0: Cover & CP
  // Slide 1..N: Kartu materi
  // Slide N+1: Rangkuman & Action
  const totalSlides = Math.max(3, cards.length + 2);

  // Quick topics list
  const topics = [
    { label: "Peta & Cover", slide: 0 },
    ...cards.map((c, idx) => ({
      label: `${idx + 1}. ${c.title.length > 20 ? c.title.substring(0, 18) + "…" : c.title}`,
      slide: idx + 1,
    })),
    { label: "Rangkuman", slide: totalSlides - 1 },
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(0, prev - 1));
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalSlides, isFullscreen]);

  const goToNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (onFinish) {
      onFinish();
    }
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      className={
        isFullscreen
          ? "fixed inset-0 z-50 bg-slate-950 flex flex-col text-slate-100 p-0"
          : embedded
          ? "w-full flex flex-col text-slate-100 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl"
          : "fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col text-slate-100 p-2 sm:p-6"
      }
    >
      {/* Top Control Bar */}
      <div className="bg-slate-900/95 border-b border-slate-800 px-4 py-3 flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center text-xs font-black shrink-0">
            {elemen.code}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-white truncate">
                Slide Pembelajaran: {elemen.title}
              </span>
              <span className="text-[10px] bg-sky-500/10 text-sky-300 font-bold px-2 py-0.5 rounded-full border border-sky-500/20 hidden md:inline-block shrink-0">
                Fase {elemen.fase} • {elemen.hours} JP
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium block truncate">
              Slide {currentSlide + 1} dari {totalSlides} • Navigasi via tombol panah keyboard
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition active:scale-95 text-xs font-semibold flex items-center gap-1.5 border border-slate-700"
            title={isFullscreen ? "Keluar Layar Penuh" : "Layar Penuh"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            <span className="text-[11px] hidden sm:inline">
              {isFullscreen ? "Keluar Penuh" : "Layar Penuh"}
            </span>
          </button>
        </div>
      </div>

      {/* Quick Topic Jump Pill Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-2 px-4 bg-slate-950/90 border-b border-slate-800 text-[11px] font-bold shrink-0 scrollbar-none">
        <span className="text-slate-400 shrink-0 mr-1 flex items-center gap-1 text-[10px] uppercase tracking-wider font-extrabold">
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          <span className="hidden sm:inline">Lompat Topik:</span>
        </span>
        {topics.map((t, idx) => {
          const isCurrentTopic = currentSlide === t.slide;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(t.slide)}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition active:scale-95 text-[10px] sm:text-[11px] ${
                isCurrentTopic
                  ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-sm font-bold"
                  : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Slim Progress Bar */}
      <div className="w-full bg-slate-800 h-1.5 shrink-0 overflow-hidden">
        <div
          className="bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 h-full transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Main Slide Presentation Stage */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[420px] sm:min-h-[500px]">
        {/* SLIDE 0: COVER & CAPAIAN PEMBELAJARAN */}
        {currentSlide === 0 && (
          <div className="max-w-4xl mx-auto w-full space-y-6 text-center animate-fadeIn py-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              <span>Modul Bahan Ajar Interaktif • ELEMEN {elemen.code}</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {elemen.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                {elemen.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mt-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Capaian Pembelajaran (CP)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {elemen.cpText}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>Cakupan Kompetensi</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {elemen.deskripsi}
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={goToNext}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-sky-500/25 transition active:scale-95"
              >
                <span>Mulai Slide Materi</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* SLIDE 1..N: MATERI TIAP KARTU */}
        {currentSlide > 0 && currentSlide <= cards.length && (
          (() => {
            const cardIndex = currentSlide - 1;
            const card: MaterialCard = cards[cardIndex];
            const isCheckpointActive = !!activeCheckpoints[cardIndex];

            return (
              <div className="max-w-4xl mx-auto w-full space-y-6 animate-fadeIn py-2">
                {/* Header Submateri */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-bold">
                      Topik #{currentSlide}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      ELEMEN {elemen.code} • Sub-Kompetensi
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {currentSlide} dari {totalSlides}
                  </span>
                </div>

                {/* Judul & Isi Materi Utama */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-snug">
                    {card.title}
                  </h3>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 sm:p-6 text-sm text-slate-200 leading-relaxed whitespace-pre-line shadow-inner">
                    {card.content}
                  </div>
                </div>

                {/* Studi Kasus & Fakta Menarik */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {card.caseStudy && (
                    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 sm:p-5 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                        <Lightbulb className="w-4 h-4 text-amber-400" />
                        <span>Studi Kasus Industri Penyiaran</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {card.caseStudy}
                      </p>
                    </div>
                  )}

                  {card.didYouKnow && (
                    <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-4 sm:p-5 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
                        <Sparkles className="w-4 h-4 text-sky-400" />
                        <span>Tahukah Kamu? (Wawasan Profesional)</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {card.didYouKnow}
                      </p>
                    </div>
                  )}
                </div>

                {/* Mini Checkpoint Pemahaman Langsung */}
                <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/5 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-indigo-300 font-medium">
                    <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Uji Pemahaman: Apakah Anda telah memahami prinsip kerja & standar teknis pada topik ini?</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCheckpoints((prev) => ({
                        ...prev,
                        [cardIndex]: !prev[cardIndex],
                      }));
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shrink-0 ${
                      isCheckpointActive
                        ? "bg-emerald-500 text-white shadow-sm"
                        : "bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isCheckpointActive ? "Telah Dikuasai" : "Tandai Paham"}</span>
                  </button>
                </div>
              </div>
            );
          })()
        )}

        {/* SLIDE TERAKHIR: RANGKUMAN & AKSI LANJUTAN */}
        {currentSlide === totalSlides - 1 && (
          <div className="max-w-3xl mx-auto w-full space-y-6 text-center animate-fadeIn py-4">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/10">
              <Award className="w-8 h-8 text-emerald-400" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Materi Presentasi Selesai!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                Anda telah mempelajari seluruh konsep inti pada{" "}
                <span className="text-sky-400 font-bold">ELEMEN {elemen.code}</span>.
                Lanjutkan ke tahap demonstrasi video, simulasi praktik, atau asesmen kuis untuk menguji penguasaan materi Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto pt-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-center">
                <div className="text-xl font-extrabold text-sky-400">{cards.length}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Topik Dikuasai</div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-center">
                <div className="text-xl font-extrabold text-indigo-400">{elemen.hours} JP</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Total Jam Pelajaran</div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-center">
                <div className="text-xl font-extrabold text-emerald-400">100%</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Progress Slide</div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentSlide(0)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs flex items-center gap-1.5 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi dari Awal</span>
              </button>
              {onFinish && (
                <button
                  type="button"
                  onClick={onFinish}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition active:scale-95"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Lanjut ke Langkah Berikutnya</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bg-slate-900/95 border-t border-slate-800 px-4 py-3 flex items-center justify-between gap-3 shrink-0">
        <button
          type="button"
          onClick={goToPrev}
          disabled={currentSlide === 0}
          className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-white text-xs font-semibold flex items-center gap-1.5 transition active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Sebelumnya</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
          <span>
            Slide <strong className="text-white">{currentSlide + 1}</strong> / {totalSlides}
          </span>
        </div>

        <button
          type="button"
          onClick={goToNext}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-sky-500/20 transition active:scale-95"
        >
          <span>{currentSlide === totalSlides - 1 ? "Selesai" : "Selanjutnya"}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
