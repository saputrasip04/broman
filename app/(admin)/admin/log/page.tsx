"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  Shield,
  Search,
  Download,
  Filter,
  Database,
} from "lucide-react";

interface AuditLogItem {
  id: string;
  timestamp: string;
  user: string;
  role: string;
  action: string;
  target: string;
  details: string;
  status: "success" | "warning" | "error";
}

export default function AdminLogPage() {
  const [logs, setLogs] = useState<AuditLogItem[]>([
    {
      id: "log-1",
      timestamp: "12 Okt 2026, 22:30:15",
      user: "Administrator BroMan",
      role: "super_admin",
      action: "FEATURE_TOGGLE_UPDATE",
      target: "Materi & Video",
      details: "Mengaktifkan modul materi dan video untuk seluruh jenjang",
      status: "success",
    },
  ]);

  // Ambil rekam jejak log aktivitas langsung dari MySQL
  useEffect(() => {
    async function loadLogs() {
      try {
        const res = await fetch("/broman/api/admin/log");
        const data = await res.json();
        if (data.success && Array.isArray(data.logs) && data.logs.length > 0) {
          setLogs(data.logs);
        }
      } catch (err) {
        console.warn("Gagal mengambil log dari MySQL:", err);
      }
    }
    loadLogs();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [actionFilter, setActionFilter] = useState("all");

  const filteredLogs = logs.filter((l) => {
    const matchesSearch =
      l.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.details.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = actionFilter === "all" || l.action === actionFilter;
    return matchesSearch && matchesFilter;
  });

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
            <span className="text-xs text-slate-400">FR-8 Audit Trail & Security Logs</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
            <Activity className="h-7 w-7 text-emerald-400" />
            Log Aktivitas & Audit Keamanan Sistem
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Rekam jejak setiap perubahan hak akses, toggle fitur, pengiriman tugas murid, dan interaksi sensitif sistem.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-3 py-2 text-xs text-emerald-300">
            <Database className="h-4 w-4 text-emerald-400" />
            <span>Audit Trail MySQL Aktif</span>
          </div>

          <button
            type="button"
            onClick={() => alert("Mengunduh audit-log-broman.csv...")}
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-850 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-all shadow-sm"
          >
            <Download className="h-4 w-4 text-emerald-400" />
            <span>Ekspor Log (CSV)</span>
          </button>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari pengguna, aksi, atau detail..."
            className="w-full rounded-xl border border-slate-800 bg-slate-900/80 pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="h-4 w-4 text-slate-500" />
          <select
            value={actionFilter}
            onChange={(e) => setActionFilter(e.target.value)}
            className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
          >
            <option value="all">Semua Jenis Aksi</option>
            <option value="FEATURE_TOGGLE_UPDATE">Feature Toggle Update</option>
            <option value="ACCESS_GRANT_UPDATE">Access Grant Update</option>
            <option value="BANK_SOAL_CREATE">Bank Soal</option>
            <option value="LKPD_SUBMISSION">Pengumpulan LKPD</option>
            <option value="QUIZ_ATTEMPT">Kuis Formatif</option>
          </select>
        </div>
      </div>

      {/* Logs Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden backdrop-blur-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950/80 text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-5 py-3.5">Waktu & Tanggal</th>
                <th className="px-5 py-3.5">Pengguna</th>
                <th className="px-5 py-3.5">Aksi (Event)</th>
                <th className="px-5 py-3.5">Target</th>
                <th className="px-5 py-3.5">Keterangan</th>
                <th className="px-5 py-3.5 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-850/50 transition-colors">
                  <td className="px-5 py-4 font-mono text-[11px] text-slate-400 whitespace-nowrap">
                    {log.timestamp}
                  </td>
                  <td className="px-5 py-4">
                    <div className="font-semibold text-white">{log.user}</div>
                    <div className="text-[10px] text-slate-500 capitalize">{log.role}</div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="font-mono text-[11px] bg-slate-800 text-sky-400 px-2 py-0.5 rounded border border-slate-700">
                      {log.action}
                    </span>
                  </td>
                  <td className="px-5 py-4 font-semibold text-slate-200">{log.target}</td>
                  <td className="px-5 py-4 text-slate-400 max-w-xs leading-relaxed">{log.details}</td>
                  <td className="px-5 py-4 text-center">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                      <Shield className="h-3 w-3" />
                      Tercatat
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
