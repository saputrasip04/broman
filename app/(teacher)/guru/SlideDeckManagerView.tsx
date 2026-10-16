"use client";

import React, { useState, useMemo } from "react";
import {
  Layers,
  BookOpen,
  Plus,
  Edit3,
  Trash2,
  ArrowUp,
  ArrowDown,
  RotateCcw,
  Eye,
  Video,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Lightbulb,
  ExternalLink,
  X,
  Play,
  Film,
  AlertCircle,
  Save,
  Check,
} from "lucide-react";
import {
  useCurriculumStore,
  getStoredElemen,
  getContentSlides,
  addSlideToContent,
  updateSlideInContent,
  removeSlideFromContent,
  reorderSlidesInContent,
  resetContentSlidesToDefault,
  updateContentVideo,
} from "@/lib/data/curriculum-store";
import { ElemenData, MaterialCard } from "@/lib/data/curriculum";
import ElemenSlideDeck from "@/components/slide-deck/elemen-slide-deck";

interface SlideDeckManagerViewProps {
  onShowNotification: (msg: string) => void;
}

export default function SlideDeckManagerView({
  onShowNotification,
}: SlideDeckManagerViewProps) {
  const curriculum = useCurriculumStore();

  // State Pilihan Elemen dan Konten
  const [selectedElemenCode, setSelectedElemenCode] = useState("F4");
  const [selectedContentIndex, setSelectedContentIndex] = useState(0);

  // Modal States: Slide
  const [showSlideModal, setShowSlideModal] = useState(false);
  const [editingSlideIndex, setEditingSlideIndex] = useState<number | null>(null);
  const [slideTitle, setSlideTitle] = useState("");
  const [slideContent, setSlideContent] = useState("");
  const [slideDidYouKnow, setSlideDidYouKnow] = useState("");
  const [slideCaseStudy, setSlideCaseStudy] = useState("");

  // Modal States: Video YouTube
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoTitleInput, setVideoTitleInput] = useState("");
  const [videoUrlInput, setVideoUrlInput] = useState("");
  const [videoGuideInput, setVideoGuideInput] = useState("");

  // Modal State: Live Preview
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  // Data Elemen Aktif
  const activeElemen: ElemenData =
    curriculum[selectedElemenCode] || getStoredElemen(selectedElemenCode);

  // Sub-konten jika tersedia
  const contents = activeElemen.contents || [];
  const hasContents = contents.length > 0;

  // Pastikan indeks konten valid
  const safeContentIndex =
    hasContents && selectedContentIndex >= contents.length
      ? 0
      : selectedContentIndex;

  const activeContent = hasContents ? contents[safeContentIndex] : null;

  // Resolusi Slide yang sedang dikelola
  const slides: MaterialCard[] = useMemo(() => {
    if (activeContent) {
      return activeContent.materialCards || [];
    }
    return activeElemen.materialCards || [];
  }, [activeElemen, activeContent]);

  // Resolusi Video yang sedang dikaitkan
  const currentVideo = activeContent ? activeContent.video : activeElemen.video;

  // Identifikasi ID/Order target konten
  const targetContentId = activeContent ? activeContent.id : 1;

  // Handler Ganti Elemen
  const handleSelectElemen = (code: string) => {
    setSelectedElemenCode(code);
    setSelectedContentIndex(0);
  };

  // Handlers Slide
  const handleOpenAddSlide = () => {
    setEditingSlideIndex(null);
    setSlideTitle("");
    setSlideContent("");
    setSlideDidYouKnow("");
    setSlideCaseStudy("");
    setShowSlideModal(true);
  };

  const handleOpenEditSlide = (index: number) => {
    const card = slides[index];
    if (!card) return;
    setEditingSlideIndex(index);
    setSlideTitle(card.title);
    setSlideContent(card.content);
    setSlideDidYouKnow(card.didYouKnow || "");
    setSlideCaseStudy(card.caseStudy || "");
    setShowSlideModal(true);
  };

  const handleSaveSlide = (e: React.FormEvent) => {
    e.preventDefault();
    if (!slideTitle.trim() || !slideContent.trim()) {
      onShowNotification("Judul dan isi materi slide wajib diisi.");
      return;
    }

    const card: MaterialCard = {
      title: slideTitle.trim(),
      content: slideContent.trim(),
      didYouKnow: slideDidYouKnow.trim() || undefined,
      caseStudy: slideCaseStudy.trim() || undefined,
    };

    if (editingSlideIndex !== null) {
      updateSlideInContent(selectedElemenCode, targetContentId, editingSlideIndex, card);
      onShowNotification(`Slide #${editingSlideIndex + 1} berhasil diperbarui.`);
    } else {
      addSlideToContent(selectedElemenCode, targetContentId, card);
      onShowNotification(`Slide baru berhasil ditambahkan.`);
    }
    setShowSlideModal(false);
  };

  const handleDeleteSlide = (index: number) => {
    if (confirm(`Apakah Anda yakin ingin menghapus slide #${index + 1}?`)) {
      removeSlideFromContent(selectedElemenCode, targetContentId, index);
      onShowNotification(`Slide #${index + 1} berhasil dihapus.`);
    }
  };

  const handleMoveSlide = (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= slides.length) return;
    reorderSlidesInContent(selectedElemenCode, targetContentId, index, targetIndex);
    onShowNotification(`Urutan slide berhasil dipindahkan.`);
  };

  const handleResetSlides = () => {
    if (
      confirm(
        `Reset seluruh slide pada "${activeContent ? activeContent.title : activeElemen.title}" kembali ke materi default standar industri (minimal 20 slide)?`
      )
    ) {
      resetContentSlidesToDefault(selectedElemenCode, targetContentId);
      onShowNotification(`Slide berhasil dikembalikan ke materi bawaan standar industri.`);
    }
  };

  // Handlers Video YouTube
  const handleOpenEditVideo = () => {
    setVideoTitleInput(currentVideo?.title || "");
    setVideoUrlInput(currentVideo?.embedUrl || "");
    setVideoGuideInput(currentVideo?.guide || "");
    setShowVideoModal(true);
  };

  const handleSaveVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoTitleInput.trim() || !videoUrlInput.trim()) {
      onShowNotification("Judul video dan tautan embed YouTube wajib diisi.");
      return;
    }

    // Normalisasi tautan YouTube jika format biasa (watch?v= atau youtu.be/)
    let normalizedUrl = videoUrlInput.trim();
    if (normalizedUrl.includes("watch?v=")) {
      const vidId = normalizedUrl.split("watch?v=")[1]?.split("&")[0];
      if (vidId) normalizedUrl = `https://www.youtube.com/embed/${vidId}`;
    } else if (normalizedUrl.includes("youtu.be/")) {
      const vidId = normalizedUrl.split("youtu.be/")[1]?.split("?")[0];
      if (vidId) normalizedUrl = `https://www.youtube.com/embed/${vidId}`;
    }

    updateContentVideo(selectedElemenCode, targetContentId, {
      title: videoTitleInput.trim(),
      embedUrl: normalizedUrl,
      guide: videoGuideInput.trim() || "Amati langkah-langkah teknis dan catat poin-poin penting pada video.",
    });

    onShowNotification("Tautan video pembelajaran YouTube berhasil diperbarui.");
    setShowVideoModal(false);
  };

  // Elemen virtual untuk Live Preview di modal
  const previewElemenData: ElemenData = {
    ...activeElemen,
    title: activeContent ? `${activeElemen.title} — ${activeContent.shortTitle || activeContent.title}` : activeElemen.title,
    summary: activeContent ? activeContent.summary : activeElemen.summary,
    materialCards: slides,
  };

  return (
    <div className="space-y-6">
      {/* 1. Header Banner & Navigasi Utama */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200">
              <Layers className="h-3 w-3 text-sky-600" />
              Editor Slide Materi
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
              Kurikulum Merdeka BCF
            </span>
          </div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>Kelola & Kustomisasi Slide Deck Pembelajaran</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl leading-relaxed">
            Guru dapat menambah, mengedit teks materi, menyusun urutan slide (minimal 20 slide per topik), serta menautkan video tutorial edukasi YouTube berstandar industri pertelevisian & film.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setShowPreviewModal(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-all"
          >
            <Eye className="h-3.5 w-3.5 text-sky-400" />
            <span>Pratinjau Slide Deck</span>
          </button>
          <button
            type="button"
            onClick={handleResetSlides}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all"
            title="Kembalikan materi slide ke standar industri bawaan"
          >
            <RotateCcw className="h-3.5 w-3.5 text-slate-500" />
            <span>Reset ke Default</span>
          </button>
        </div>
      </div>

      {/* 2. Pemilih Elemen & Sub-Konten */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Dropdown Elemen */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              1. Pilih Elemen Kurikulum
            </label>
            <select
              value={selectedElemenCode}
              onChange={(e) => handleSelectElemen(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-2.5 text-xs text-slate-800 font-semibold focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white"
            >
              <optgroup label="FASE E (Kelas X) — Dasar BCF">
                <option value="E1">E1 — Dunia Kerja, Profesi & Bisnis BCF (18 JP)</option>
                <option value="E2">E2 — Perkembangan Media, AI & Regulasi (18 JP)</option>
                <option value="E3">E3 — Pengoperasian Peralatan Audio Visual (24 JP)</option>
                <option value="E4">E4 — Proses Produksi & New Media Kreatif (24 JP)</option>
              </optgroup>
              <optgroup label="FASE F (Kelas XI & XII) — Konsentrasi Produksi Televisi">
                <option value="F1">F1 — Manajemen Produksi & Siaran TV (36 JP)</option>
                <option value="F2">F2 — Penulisan Naskah Televisi (36 JP)</option>
                <option value="F3">F3 — Penyutradaraan Televisi (40 JP)</option>
                <option value="F4">F4 — Tata Kamera & Tata Cahaya TV (40 JP) ★ Acuan</option>
                <option value="F5">F5 — Tata Suara Televisi (32 JP)</option>
                <option value="F6">F6 — Tata Artistik Televisi (32 JP)</option>
                <option value="F7">F7 — Editing Audio dan Video (36 JP)</option>
                <option value="F8">F8 — Penyiaran Online / Digital Broadcast (28 JP)</option>
              </optgroup>
              <optgroup label="PEMINATAN KEJURUAN (Fase F)">
                <option value="P1">Peminatan XI — Desain 3D Blender (Kelas XI)</option>
                <option value="P2">Peminatan XII — Desain Grafis 2D Corel/Canva (Kelas XII)</option>
              </optgroup>
            </select>
          </div>

          {/* Dropdown Sub-Konten jika ada */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              2. Pilih Konten / Materi Pembelajaran
            </label>
            {hasContents ? (
              <select
                value={safeContentIndex}
                onChange={(e) => setSelectedContentIndex(Number(e.target.value))}
                className="w-full rounded-xl border border-slate-300 p-2.5 text-xs text-slate-800 font-semibold focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white"
              >
                {contents.map((c, idx) => (
                  <option key={c.id || idx} value={idx}>
                    Konten {c.order || idx + 1}: {c.shortTitle || c.title}
                  </option>
                ))}
              </select>
            ) : (
              <div className="w-full rounded-xl border border-dashed border-slate-200 p-2.5 text-xs text-slate-500 bg-slate-50 flex items-center justify-between">
                <span>Materi Tunggal Terpadu ({activeElemen.title})</span>
                <span className="font-bold text-slate-700">{slides.length} Slide</span>
              </div>
            )}
          </div>
        </div>

        {/* Informasi Ringkas Konten Terpilih */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-sky-50 via-indigo-50/40 to-slate-50 border border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900">
                {activeContent ? activeContent.title : activeElemen.title}
              </span>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-sky-200/80 text-sky-900">
                {slides.length} Slide Materi
              </span>
              {slides.length >= 20 ? (
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Standar 20+ Slide Terpenuhi
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                  {slides.length} / 20 Slide (Disarankan minimal 20 slide)
                </span>
              )}
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              {activeContent?.summary || activeElemen.summary}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleOpenAddSlide}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs shadow-sm transition-all"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Tambah Slide</span>
            </button>
            <button
              type="button"
              onClick={handleOpenEditVideo}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-sky-300 bg-white hover:bg-sky-50 text-sky-800 font-bold text-xs shadow-sm transition-all"
            >
              <Video className="h-3.5 w-3.5 text-rose-500" />
              <span>Kelola Video YouTube</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Kartu Integrasi Video YouTube */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
            <Video className="h-4 w-4 text-rose-600" />
            <span>Video Pembelajaran YouTube & Panduan Observasi</span>
          </div>
          <button
            type="button"
            onClick={handleOpenEditVideo}
            className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
          >
            <Edit3 className="h-3.5 w-3.5" />
            <span>Ubah Video / Panduan</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="w-full md:w-64 aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shrink-0 relative group">
            {currentVideo?.embedUrl ? (
              <iframe
                src={currentVideo.embedUrl}
                title={currentVideo.title}
                className="w-full h-full pointer-events-none"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 text-xs">
                <Video className="h-6 w-6 mb-1 text-slate-400" />
                <span>Belum ada video</span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                onClick={handleOpenEditVideo}
                className="p-2 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg"
              >
                Ganti URL Video
              </button>
            </div>
          </div>

          <div className="space-y-2 flex-1 text-xs">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Judul Video:</div>
              <h4 className="font-bold text-slate-900 text-sm">{currentVideo?.title || "Belum ada judul video"}</h4>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">URL Embed:</div>
              <code className="text-[11px] font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 block truncate max-w-xl">
                {currentVideo?.embedUrl || "-"}
              </code>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Panduan Observasi Siswa:</div>
              <p className="text-slate-600 text-[11px] leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                {currentVideo?.guide || "Pelajari prosedur kerja dan identifikasi peralatan yang digunakan pada video tutorial."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Daftar Kartu Slide Materi (Slide Deck List) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#0284c7]" />
              <span>Daftar Kartu Slide Materi ({slides.length} Slide)</span>
            </h3>
            <span className="text-[11px] text-slate-500">
              (Gunakan tombol panah naik/turun untuk mengatur alur slide)
            </span>
          </div>

          <button
            type="button"
            onClick={handleOpenAddSlide}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs shadow-sm transition-all"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Tambah Slide Baru</span>
          </button>
        </div>

        {slides.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-slate-300 text-slate-400 text-xs">
            Belum ada slide materi untuk konten ini. Klik tombol <strong>Tambah Slide Baru</strong> untuk mulai menyusun materi.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group hover:border-sky-300"
              >
                <div className="flex items-start gap-3.5 flex-1 min-w-0">
                  <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    #{idx + 1}
                  </div>
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-xs font-bold text-slate-900 truncate">
                        {slide.title}
                      </h4>
                      {slide.didYouKnow && (
                        <span className="px-2 py-0.5 rounded-full text-[9.5px] font-bold bg-amber-50 text-amber-700 border border-amber-200 shrink-0 flex items-center gap-0.5">
                          <Sparkles className="h-2.5 w-2.5" /> Fakta Industri
                        </span>
                      )}
                      {slide.caseStudy && (
                        <span className="px-2 py-0.5 rounded-full text-[9.5px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0 flex items-center gap-0.5">
                          <Lightbulb className="h-2.5 w-2.5" /> Studi Kasus
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                      {slide.content}
                    </p>
                  </div>
                </div>

                {/* Tombol Reorder & Aksi */}
                <div className="flex items-center gap-1.5 shrink-0 self-end md:self-center">
                  <button
                    type="button"
                    onClick={() => handleMoveSlide(idx, "up")}
                    disabled={idx === 0}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    title="Pindahkan ke atas"
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveSlide(idx, "down")}
                    disabled={idx === slides.length - 1}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    title="Pindahkan ke bawah"
                  >
                    <ArrowDown className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleOpenEditSlide(idx)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 font-bold text-xs transition-colors border border-sky-200"
                  >
                    <Edit3 className="h-3.5 w-3.5" />
                    <span>Edit</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteSlide(idx)}
                    className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors"
                    title="Hapus slide"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ============================================================== */}
      {/* 5. MODAL EDIT / TAMBAH SLIDE                                   */}
      {/* ============================================================== */}
      {showSlideModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Layers className="h-4 w-4 text-[#0284c7]" />
                {editingSlideIndex !== null
                  ? `Edit Slide #${editingSlideIndex + 1}`
                  : `Tambah Slide Baru ke Konten ${activeContent ? activeContent.order : 1}`}
              </h3>
              <button
                type="button"
                onClick={() => setShowSlideModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSaveSlide} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Judul Slide / Topik Bahasan <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={slideTitle}
                  onChange={(e) => setSlideTitle(e.target.value)}
                  placeholder="Contoh: Kalibrasi White Balance & Color Temperature Kamera"
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-800 font-semibold focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Uraian Materi Lengkap (Paragraf & Poin Teknis) <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={6}
                  value={slideContent}
                  onChange={(e) => setSlideContent(e.target.value)}
                  placeholder="Jelaskan konsep, fungsi teknis, prosedur operasional standar (SOP), dan parameter kunci..."
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-800 leading-relaxed focus:ring-2 focus:ring-sky-500 font-sans"
                  required
                />
                <p className="text-[10.5px] text-slate-400 mt-1">
                  Tip: Gunakan kalimat jelas, detail istilah broadcast (SKKNI/EBU/SMPTE), dan alur operasional terstruktur.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                    <span>Fakta Industri / Did You Know? (Opsional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={slideDidYouKnow}
                    onChange={(e) => setSlideDidYouKnow(e.target.value)}
                    placeholder="Contoh: Sensor broadcast mengukur color balance menggunakan kertas putih 18% gray card..."
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-800 leading-relaxed text-[11px]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Lightbulb className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Studi Kasus / Masalah Lapangan (Opsional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={slideCaseStudy}
                    onChange={(e) => setSlideCaseStudy(e.target.value)}
                    placeholder="Contoh: Jika gambar kamera indoor tampak kekuningan saat lampu dinyalakan, kalibrasikan WB ke 3200K Tungsten..."
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-800 leading-relaxed text-[11px]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowSlideModal(false)}
                  className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white px-5 py-2 font-bold shadow"
                >
                  Simpan Slide
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 6. MODAL KELOLA VIDEO YOUTUBE                                  */}
      {/* ============================================================== */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Video className="h-4 w-4 text-rose-600" />
                <span>Tautkan Video YouTube Pembelajaran</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowVideoModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSaveVideo} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Judul Video Tutorial / Materi <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={videoTitleInput}
                  onChange={(e) => setVideoTitleInput(e.target.value)}
                  placeholder="Misal: Tutorial Setting Three-Point Lighting Studio TV"
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-800 font-semibold"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Tautan Video YouTube (Link URL atau Embed) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={videoUrlInput}
                  onChange={(e) => setVideoUrlInput(e.target.value)}
                  placeholder="Contoh: https://www.youtube.com/watch?v=dQw4w9WgXcQ atau embed link"
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-800 font-mono text-[11px]"
                  required
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  Sistem otomatis mengubah link <code>watch?v=</code> atau <code>youtu.be/</code> menjadi tautan embed resmi.
                </p>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Panduan Observasi Siswa Saat Menonton Video
                </label>
                <textarea
                  rows={4}
                  value={videoGuideInput}
                  onChange={(e) => setVideoGuideInput(e.target.value)}
                  placeholder="Tuliskan 3-4 pertanyaan kunci yang wajib diamati dan dicatat siswa saat menonton video..."
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-800 leading-relaxed text-[11px]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowVideoModal(false)}
                  className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-rose-600 hover:bg-rose-500 text-white px-5 py-2 font-bold shadow"
                >
                  Simpan Video
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 7. MODAL PRATINJAU SLIDE DECK (LIVE PREVIEW)                   */}
      {/* ============================================================== */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-2 sm:p-6">
          <div className="w-full max-w-5xl h-[88vh] flex flex-col rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header Pratinjau */}
            <div className="bg-slate-950 border-b border-slate-800 px-5 py-3 flex items-center justify-between gap-3 shrink-0 text-white">
              <div className="flex items-center gap-2.5">
                <Eye className="h-4 w-4 text-sky-400" />
                <span className="text-xs font-bold">
                  Simulasi Tampilan Siswa: {previewElemenData.title} ({slides.length} Slide)
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowPreviewModal(false)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Komponen Slide Deck Asli */}
            <div className="flex-1 overflow-hidden p-2">
              <ElemenSlideDeck elemen={previewElemenData} embedded={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
