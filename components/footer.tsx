"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Film } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/guru")) return null;

  return (
    <footer className="border-t border-slate-800/80 bg-[#080c14] text-slate-400 text-sm mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 text-white font-bold">
                <Film className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                BroMan
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Media Pembelajaran Interaktif Broadcasting & Perfilman Fase E dan
              F SMK berbasis Kurikulum Merdeka & Pembelajaran Mendalam (*Deep Learning*).
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Sistem Aktif & Siap Digunakan
            </div>
          </div>

          {/* Kolom Kurikulum */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Kurikulum SMK
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/belajar/E" className="hover:text-sky-400 transition-colors">
                  Fase E: Dasar-dasar Broadcasting (4 Elemen)
                </Link>
              </li>
              <li>
                <Link href="/belajar/F" className="hover:text-sky-400 transition-colors">
                  Fase F: Produksi & Siaran TV (8 Elemen)
                </Link>
              </li>
              <li>
                <span className="text-slate-500">
                  Fase F: Produksi Film (Dalam Pengembangan)
                </span>
              </li>
              <li>
                <span className="text-slate-500">
                  Standar Capaian Pembelajaran (CP) BSKAP
                </span>
              </li>
            </ul>
          </div>

          {/* Fitur Interaktif */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Fitur Interaktif
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/assesment" className="hover:text-sky-400 transition-colors">
                  Portal Assesment Terpadu
                </Link>
              </li>
              <li>
                <Link href="/assesment/us" className="hover:text-sky-400 transition-colors">
                  US — Ujian Semester (Fase E & F)
                </Link>
              </li>
              <li>
                <Link href="/assesment/tka" className="hover:text-amber-400 transition-colors">
                  TKA — Tes Kompetensi Akademik (CBT)
                </Link>
              </li>
              <li>Generator RPM & LKPD Praktikum</li>
              <li>Bank Soal Kognitif Bloom (C1–C6)</li>
            </ul>
          </div>

          {/* Pengaturan & Akses */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Hak Akses & Pengaturan
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/guru" className="hover:text-sky-400 transition-colors">
                  Manajemen Konten Pembelajaran
                </Link>
              </li>
              <li>
                <Link href="/admin/menu" className="hover:text-sky-400 transition-colors">
                  Pengaturan Menu (Feature Toggle)
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-sky-400 transition-colors">
                  Dashboard Administrator
                </Link>
              </li>
              <li>
                <span className="text-slate-500">
                  Keamanan Data PDP & Row Level Security
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 BroMan — SMK Program Keahlian Broadcasting & Perfilman.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Dibuat untuk Pendidikan Vokasi Indonesia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
