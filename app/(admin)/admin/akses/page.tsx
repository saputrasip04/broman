"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  KeyRound,
  ArrowLeft,
  Check,
  CheckCircle2,
  Shield,
  Clock,
  Sparkles,
  Database,
} from "lucide-react";

export default function AdminAksesPage() {
  const classes = ["X BCF 1", "X BCF 2", "XI BCF 1", "XI BCF 2", "XII BCF 1"];
  const elements = [
    { code: "E1", title: "Dunia Kerja & Bisnis BCF", fase: "E" },
    { code: "E2", title: "Media, Teknologi & Regulasi", fase: "E" },
    { code: "E3", title: "Peralatan Audio Visual", fase: "E" },
    { code: "E4", title: "Proses Produksi & New Media", fase: "E" },
    { code: "F1", title: "Manajemen Produksi TV", fase: "F" },
    { code: "F2", title: "Penulisan Naskah TV", fase: "F" },
    { code: "F3", title: "Penyutradaraan TV", fase: "F" },
    { code: "F4", title: "Tata Kamera & Cahaya", fase: "F" },
    { code: "F5", title: "Tata Suara Televisi", fase: "F" },
    { code: "F6", title: "Tata Artistik Televisi", fase: "F" },
    { code: "F7", title: "Editing Audio Video", fase: "F" },
    { code: "F8", title: "Penyiaran Online", fase: "F" },
  ];

  // Inisialisasi matriks: Kelas X default dapat akses E1-E4, Kelas XI/XII dapat akses F1-F8
  const initialGrants: Record<string, boolean> = {};
  classes.forEach((c) => {
    elements.forEach((el) => {
      const key = `${c}_${el.code}`;
      if (c.startsWith("X ") && el.fase === "E") {
        initialGrants[key] = true;
      } else if (!c.startsWith("X ") && el.fase === "F") {
        initialGrants[key] = true;
      } else {
        initialGrants[key] = false;
      }
    });
  });

  const [grants, setGrants] = useState<Record<string, boolean>>(initialGrants);
  const [notice, setNotice] = useState<string | null>(null);

  // Load status hak akses teranyar dari basis data MySQL
  useEffect(() => {
    async function loadGrantsFromDB() {
      try {
        const res = await fetch("/broman/api/admin/akses");
        const data = await res.json();
        if (data.success && data.grants && Object.keys(data.grants).length > 0) {
          setGrants((prev) => ({
            ...prev,
            ...data.grants,
          }));
        }
      } catch (err) {
        console.warn("Gagal mengambil hak akses dari MySQL:", err);
      }
    }
    loadGrantsFromDB();
  }, []);

  const toggleGrant = (kelas: string, elemenCode: string) => {
    const key = `${kelas}_${elemenCode}`;
    const nextVal = !grants[key];

    setGrants((prev) => ({ ...prev, [key]: nextVal }));
    setNotice(`Izin akses ${elemenCode} untuk ${kelas} tersimpan ke MySQL (${nextVal ? "DIBUKA" : "DIKUNCI"}).`);
    setTimeout(() => setNotice(null), 2500);

    // Kirim sinkronisasi ke MySQL di background
    fetch("/broman/api/admin/akses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        className: kelas,
        elemenCode,
        granted: nextVal,
      }),
    }).catch(() => {});
  };

  const grantAllForClass = (kelas: string, faseTarget: "E" | "F") => {
    const itemsToUpdate: { className: string; elemenCode: string; granted: boolean }[] = [];

    setGrants((prev) => {
      const next = { ...prev };
      elements
        .filter((el) => el.fase === faseTarget)
        .forEach((el) => {
          next[`${kelas}_${el.code}`] = true;
          itemsToUpdate.push({
            className: kelas,
            elemenCode: el.code,
            granted: true,
          });
        });
      return next;
    });

    setNotice(`Semua Elemen Fase ${faseTarget} berhasil dibuka untuk ${kelas} & disimpan ke MySQL.`);
    setTimeout(() => setNotice(null), 3000);

    // Kirim batch sinkronisasi ke MySQL di background
    fetch("/broman/api/admin/akses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: itemsToUpdate }),
    }).catch(() => {});
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
            <span className="text-xs text-slate-400">FR-8 Access Grants Matrix</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
            <KeyRound className="h-7 w-7 text-sky-400" />
            Matriks Hak Akses Kurikulum & Elemen
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Atur keterbukaan modul materi per rombel kelas. Siswa hanya dapat membuka Elemen jika kelasnya diberi izin aktif.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-3 py-2 text-xs text-emerald-300">
            <Database className="h-4 w-4 text-emerald-400" />
            <span>Auto-Sync ke MySQL</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-slate-300">
            <Clock className="h-4 w-4 text-emerald-400" />
            <span>Masa Berlaku: TA 2026/2027</span>
          </div>
        </div>
      </div>

      {notice && (
        <div className="mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-xs font-semibold text-emerald-400 flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{notice}</span>
        </div>
      )}

      {/* Quick Action Bar */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Shield className="h-4 w-4 text-sky-400" />
          <span className="font-semibold text-white">Aksi Cepat Rombel:</span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            type="button"
            onClick={() => {
              grantAllForClass("X BCF 1", "E");
              grantAllForClass("X BCF 2", "E");
            }}
            className="rounded-xl border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 text-sky-300 font-medium hover:bg-sky-500/20 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Buka Semua Fase E untuk Kelas X
          </button>
          <button
            type="button"
            onClick={() => {
              grantAllForClass("XI BCF 1", "F");
              grantAllForClass("XI BCF 2", "F");
              grantAllForClass("XII BCF 1", "F");
            }}
            className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-indigo-300 font-medium hover:bg-indigo-500/20 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Buka Semua Fase F untuk Kelas XI & XII
          </button>
        </div>
      </div>

      {/* Access Matrix Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden backdrop-blur-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950/80 text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-5 py-3.5 sticky left-0 bg-slate-950 z-10">Rombel Kelas</th>
                {elements.map((el) => (
                  <th key={el.code} className="px-3 py-3.5 text-center min-w-[70px]">
                    <div className="font-bold text-white">{el.code}</div>
                    <div className="text-[10px] text-slate-500 lowercase">Fase {el.fase}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {classes.map((cls) => (
                <tr key={cls} className="hover:bg-slate-850/50 transition-colors">
                  <td className="px-5 py-4 font-bold text-white sticky left-0 bg-slate-900/90 z-10 border-r border-slate-800/80">
                    {cls}
                  </td>
                  {elements.map((el) => {
                    const key = `${cls}_${el.code}`;
                    const isGranted = grants[key] || false;

                    return (
                      <td key={el.code} className="px-3 py-4 text-center">
                        <button
                          type="button"
                          onClick={() => toggleGrant(cls, el.code)}
                          title={`${cls} → Elemen ${el.code}: ${isGranted ? "Diberikan" : "Terkunci"}`}
                          className={`h-7 w-7 rounded-lg inline-flex items-center justify-center transition-all ${
                            isGranted
                              ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/30"
                              : "bg-slate-800/60 border border-slate-700/40 text-slate-600 hover:text-slate-400 hover:bg-slate-800"
                          }`}
                        >
                          {isGranted ? <Check className="h-4 w-4 stroke-[3]" /> : "—"}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
