"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FolderKanban,
  Plus,
  Users,
  ArrowLeft,
  CheckCircle2,
  X,
  Trash2,
  Calendar,
  Database,
} from "lucide-react";

interface KelasItem {
  id: string;
  name: string;
  fase: "E" | "F";
  grade: string;
  waliKelas: string;
  studentCount: number;
  academicYear: string;
}

export default function AdminKelasPage() {
  const [kelasList, setKelasList] = useState<KelasItem[]>([
    {
      id: "cls-x-bcf-1",
      name: "X BCF 1",
      fase: "E",
      grade: "Kelas X",
      waliKelas: "Saputra Indra Purnama, S.Pd.",
      studentCount: 2,
      academicYear: "2026/2027",
    },
    {
      id: "cls-x-bcf-2",
      name: "X BCF 2",
      fase: "E",
      grade: "Kelas X",
      waliKelas: "Bambang Sudibyo, S.Sn., M.Pd.",
      studentCount: 1,
      academicYear: "2026/2027",
    },
    {
      id: "cls-xi-bcf",
      name: "XI BCF",
      fase: "F",
      grade: "Kelas XI",
      waliKelas: "Ratna Sari, M.Ds.",
      studentCount: 0,
      academicYear: "2026/2027",
    },
    {
      id: "cls-xii-bcf",
      name: "XII BCF",
      fase: "F",
      grade: "Kelas XII",
      waliKelas: "Saputra Indra Purnama, S.Pd.",
      studentCount: 0,
      academicYear: "2026/2027",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  // Ambil data kelas teranyar dari basis data MySQL
  useEffect(() => {
    async function loadClasses() {
      try {
        const res = await fetch("/broman/api/admin/kelas");
        const data = await res.json();
        if (data.success && Array.isArray(data.classes) && data.classes.length > 0) {
          setKelasList(data.classes);
        }
      } catch (err) {
        console.warn("Gagal mengambil data kelas dari MySQL:", err);
      }
    }
    loadClasses();
  }, []);

  // Form State
  const [className, setClassName] = useState("");
  const [fase, setFase] = useState<"E" | "F">("E");
  const [grade, setGrade] = useState("Kelas X");
  const [waliKelas, setWaliKelas] = useState("");

  const handleCreateKelas = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!className.trim()) return;

    const classSlug = "cls-" + className.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
    const newK: KelasItem = {
      id: classSlug,
      name: className.trim(),
      fase,
      grade,
      waliKelas: waliKelas.trim() || "Belum Ditentukan",
      studentCount: 0,
      academicYear: "2026/2027",
    };

    setKelasList((prev) => [...prev.filter((k) => k.id !== newK.id), newK]);
    setShowModal(false);
    setClassName("");
    setWaliKelas("");
    setNotice(`Kelas "${newK.name}" tersimpan ke database MySQL.`);
    setTimeout(() => setNotice(null), 3500);

    // Kirim ke API MySQL
    try {
      const res = await fetch("/broman/api/admin/kelas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newK.name,
          fase: newK.fase,
          grade: newK.grade,
          waliKelas: newK.waliKelas,
        }),
      });
      const data = await res.json();
      if (!data.success) {
        console.error("Gagal menyimpan kelas ke MySQL:", data.error);
      }
    } catch (err) {
      console.error("Error call API kelas:", err);
    }
  };

  const handleDeleteKelas = async (id: string, name: string) => {
    setKelasList((prev) => prev.filter((item) => item.id !== id));
    setNotice(`Kelas "${name}" dihapus dari database MySQL.`);
    setTimeout(() => setNotice(null), 3000);

    try {
      await fetch("/broman/api/admin/kelas", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
    } catch (err) {
      console.error("Error deleting class from MySQL:", err);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
            <span className="text-xs text-slate-400">FR-8 Rombel & Kelas</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
            <FolderKanban className="h-7 w-7 text-sky-400" />
            Manajemen Kelas & Rombongan Belajar
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Kelola pembagian rombel siswa SMK Broadcasting, penetapan wali kelas, dan pemetaan ke kurikulum Fase E atau F.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-3 py-2 text-xs text-emerald-300">
            <Database className="h-4 w-4 text-emerald-400" />
            <span>Auto-Sync ke MySQL</span>
          </div>

          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2.5 text-xs font-semibold text-white hover:opacity-95 transition-all shadow-md shadow-sky-500/20"
          >
            <Plus className="h-4 w-4" />
            <span>Tambah Kelas Baru</span>
          </button>
        </div>
      </div>

      {notice && (
        <div className="mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-xs font-semibold text-emerald-400 flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{notice}</span>
        </div>
      )}

      {/* Grid Kelas Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {kelasList.map((k) => (
          <div
            key={k.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md flex flex-col justify-between hover:border-sky-500/40 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="rounded-lg bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 text-xs font-bold text-sky-400">
                  Fase {k.fase} • {k.grade}
                </span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Calendar className="h-3 w-3 text-slate-500" />
                  {k.academicYear}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{k.name}</h3>
              <p className="text-xs text-slate-400 mb-4">
                Wali Kelas: <span className="text-slate-200 font-medium">{k.waliKelas}</span>
              </p>

              <div className="rounded-xl bg-slate-950/70 border border-slate-800/80 p-3 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-indigo-400" />
                  Jumlah Siswa
                </span>
                <span className="font-bold text-white">{k.studentCount} Orang</span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <Link
                href="/admin/pengguna"
                className="font-semibold text-sky-400 hover:text-sky-300"
              >
                Lihat Daftar Siswa →
              </Link>
              <button
                type="button"
                onClick={() => handleDeleteKelas(k.id, k.name)}
                className="text-slate-500 hover:text-rose-400 transition-colors"
                title="Hapus Rombel"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Tambah Kelas */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Plus className="h-5 w-5 text-sky-400" />
                Tambah Kelas / Rombel Baru
              </h3>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreateKelas} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Nama Rombel / Kelas</label>
                <input
                  type="text"
                  required
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  placeholder="Contoh: X BCF 3"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Fase Kurikulum</label>
                  <select
                    value={fase}
                    onChange={(e) => setFase(e.target.value as "E" | "F")}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="E">Fase E (Dasar BCF)</option>
                    <option value="F">Fase F (Produksi TV)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Tingkat Jenjang</label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="Kelas X">Kelas X</option>
                    <option value="Kelas XI">Kelas XI</option>
                    <option value="Kelas XII">Kelas XII</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Nama Wali Kelas</label>
                <input
                  type="text"
                  value={waliKelas}
                  onChange={(e) => setWaliKelas(e.target.value)}
                  placeholder="Nama guru wali kelas"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="pt-4 flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-xl border border-slate-700 px-4 py-2 text-slate-300 hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 font-semibold text-white shadow"
                >
                  Simpan Rombel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
