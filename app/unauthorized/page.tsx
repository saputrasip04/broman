import Link from "next/link";
import { ShieldAlert, ArrowLeft, LogIn } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-rose-500/30 bg-slate-900/80 p-8 text-center backdrop-blur-xl shadow-2xl">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-4 shadow-lg">
          <ShieldAlert className="h-7 w-7" />
        </div>
        <h1 className="text-xl font-bold text-white mb-2">
          Akses Ditolak (403 Forbidden)
        </h1>
        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
          Akun Anda tidak memiliki wewenang atau hak akses untuk membuka halaman ini.
          Silakan masuk dengan akun yang memiliki peran sesuai (Guru atau Super Admin).
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/login"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-sky-500/20 hover:opacity-95 transition-opacity"
          >
            <LogIn className="h-4 w-4" />
            Ganti Akun
          </Link>
          <Link
            href="/belajar"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Ruang Belajar
          </Link>
        </div>
      </div>
    </div>
  );
}
