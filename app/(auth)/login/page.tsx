"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Film, Lock, User, ArrowRight, ShieldCheck, GraduationCap, BookOpen, Loader2 } from "lucide-react";
import { apiUrl } from "@/lib/api-client";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("10245");
  const [password, setPassword] = useState("murid123");
  const [role, setRole] = useState<"murid" | "guru" | "super_admin">("murid");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleQuickFill = (selectedRole: "murid" | "guru" | "super_admin") => {
    setRole(selectedRole);
    setErrorMsg("");
    if (selectedRole === "murid") {
      setIdentifier("10245"); // Contoh NIS Siswa
      setPassword("murid123");
    } else if (selectedRole === "guru") {
      setIdentifier("199002042022211009"); // NIP Guru (Very Kurniawan, S.Pd., Gr.)
      setPassword("guru123");
    } else {
      setIdentifier("admin@smk.sch.id");
      setPassword("admin123");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      let redirectTarget = "";
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        redirectTarget = params.get("redirect") || "";
      }

      const res = await fetch(apiUrl("/api/auth/login"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, identifier, password, redirectUrl: redirectTarget }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Gagal masuk ke sistem");
      }

      router.push(data.redirectUrl || "/belajar");
      router.refresh();
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Terjadi kesalahan saat masuk");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-amber-500 shadow-xl shadow-sky-500/20 mb-3">
            <Film className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Masuk ke BroMan
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Media Pembelajaran Broadcasting & Perfilman SMK
          </p>
        </div>

        {/* Demo Fast Login Switcher */}
        <div className="mb-6 rounded-xl border border-slate-800 bg-slate-900/70 p-3 backdrop-blur-md">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 text-center">
            Pilih Peran Akun (Mode Cepat):
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleQuickFill("murid")}
              className={`flex flex-col items-center gap-1 rounded-lg p-2 text-xs font-medium transition-all ${
                role === "murid"
                  ? "bg-sky-500/20 border border-sky-500 text-sky-300"
                  : "bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:text-white"
              }`}
            >
              <GraduationCap className="h-4 w-4" />
              <span>Murid</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickFill("guru")}
              className={`flex flex-col items-center gap-1 rounded-lg p-2 text-xs font-medium transition-all ${
                role === "guru"
                  ? "bg-indigo-500/20 border border-indigo-500 text-indigo-300"
                  : "bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Guru</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickFill("super_admin")}
              className={`flex flex-col items-center gap-1 rounded-lg p-2 text-xs font-medium transition-all ${
                role === "super_admin"
                  ? "bg-amber-500/20 border border-amber-500 text-amber-300"
                  : "bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:text-white"
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              <span>Admin</span>
            </button>
          </div>
        </div>

        {/* Login Form Box */}
        <div className="rounded-2xl border border-slate-800/90 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          {errorMsg && (
            <div className="mb-4 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300 text-center">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                NIS / NIP / Email Sekolah
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Contoh: 10245 / guru@smk.sch.id"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/70 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Kata Sandi
                </label>
                <span className="text-[11px] text-sky-400 hover:underline cursor-pointer">
                  Lupa sandi?
                </span>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/70 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-sky-600 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 hover:from-sky-400 hover:to-indigo-500 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Memverifikasi...</span>
                </>
              ) : (
                <>
                  <span>Masuk Sekarang</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-slate-500">
            Sistem terintegrasi Kurikulum Merdeka SMK BCF. <br />
            Hubungi administrator sekolah bila akun belum terdaftar.
          </div>
        </div>
      </div>
    </div>
  );
}
