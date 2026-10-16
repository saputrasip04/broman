"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Film,
  UserCheck,
  Sparkles,
  Menu,
  X,
  LogOut,
  User,
  ClipboardCheck,
  FileSpreadsheet,
  Award,
  ChevronDown,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { UserSession } from "@/lib/auth";
import { useMenuVisibilityStore } from "@/lib/data/menu-store";
import { apiUrl } from "@/lib/api-client";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname.startsWith("/guru")) return null;
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [assessmentDropdownOpen, setAssessmentDropdownOpen] = useState(false);
  const [mobileAssessmentOpen, setMobileAssessmentOpen] = useState(true);
  const [currentUser, setCurrentUser] = useState<UserSession | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch(apiUrl("/api/auth/me"));
        if (res.ok) {
          const data = await res.json();
          setCurrentUser(data.user);
        }
      } catch {
        // Fallback jika offline
      }
    }
    loadUser();
  }, [pathname]);

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setAssessmentDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(apiUrl("/api/auth/logout"), { method: "POST" });
      setCurrentUser(null);
      router.push("/login");
      router.refresh();
    } catch {
      router.push("/login");
    }
  };

  const menuFlags = useMenuVisibilityStore();

  const navLinks = [
    ...(menuFlags.menu_assesment
      ? [
          {
            name: "Assesment",
            href: "/assesment",
            icon: ClipboardCheck,
            badge: "US & TKA",
            hasDropdown: true,
            children: [
              ...(menuFlags.menu_us
                ? [
                    {
                      name: "US (Ujian Semester)",
                      desc: "Evaluasi Semester Fase E & F",
                      href: "/assesment/us",
                      icon: FileSpreadsheet,
                      badge: "Semester",
                      color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
                    },
                  ]
                : []),
              ...(menuFlags.menu_tka
                ? [
                    {
                      name: "TKA (Tes Kompetensi Akademik)",
                      desc: "Simulasi Uji Kemahiran Vokasi (CBT Siswa)",
                      href: "/assesment/tka",
                      icon: Award,
                      badge: "CBT",
                      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
                    },
                    {
                      name: "Pusat Kendali Pengawas TKA",
                      desc: "Monitoring Live & Rilis Token Ujian",
                      href: "/assesment/tka/guru",
                      icon: UserCheck,
                      badge: "Pengawas",
                      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                    },
                    {
                      name: "Bank Soal CBT (Input Soal)",
                      desc: "Input & Kelola Paket Soal PG & Esai",
                      href: "/guru?pg=banksoal",
                      icon: BookOpen,
                      badge: "Bank Soal",
                      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
                    },
                  ]
                : []),
            ],
          },
        ]
      : []),
  ];

  const isAssessmentActive = pathname.startsWith("/assesment");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#0b0f19]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-amber-500 shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200">
            <Film className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-sky-300 bg-clip-text text-transparent">
                BroMan
              </span>
              <span className="rounded-full bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-sky-400 border border-sky-500/20">
                SMK BCF
              </span>
            </div>
            <span className="text-[11px] text-slate-400 -mt-1 hidden sm:inline">
              Broadcasting & Perfilman
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;

            // Render khusus untuk menu Assesment dengan Dropdown
            if (link.hasDropdown && link.children) {
              return (
                <div
                  key={link.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setAssessmentDropdownOpen(true)}
                  onMouseLeave={() => setAssessmentDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setAssessmentDropdownOpen(!assessmentDropdownOpen)}
                    className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                      isAssessmentActive
                        ? "bg-slate-800 text-sky-400 border border-slate-700/60 shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="whitespace-nowrap">{link.name}</span>
                    <span className="text-[10px] bg-gradient-to-r from-sky-500/20 to-amber-500/20 text-sky-300 border border-sky-500/30 px-1.5 py-0.5 rounded-full font-semibold whitespace-nowrap hidden lg:inline-flex">
                      {link.badge}
                    </span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 shrink-0 ${
                        assessmentDropdownOpen ? "rotate-180 text-sky-400" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu Box */}
                  {assessmentDropdownOpen && (
                    <div className="absolute left-0 mt-1 w-72 rounded-2xl border border-slate-800 bg-[#0f172a]/95 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-150 z-50">
                      <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800/80 mb-1">
                        Pilihan Menu Assesment
                      </div>

                      <div className="space-y-1">
                        {link.children.map((child) => {
                          const ChildIcon = child.icon;
                          const isChildActive = pathname === child.href;

                          return (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setAssessmentDropdownOpen(false)}
                              className={`flex items-start gap-3 p-2.5 rounded-xl transition-all group/item ${
                                isChildActive
                                  ? "bg-slate-800/90 text-white"
                                  : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                              }`}
                            >
                              <div
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${child.color}`}
                              >
                                <ChildIcon className="h-4 w-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold leading-snug group-hover/item:text-sky-300 transition-colors">
                                    {child.name}
                                  </span>
                                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                                    {child.badge}
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-400 truncate mt-0.5">
                                  {child.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Footer Portal Assesment */}
                      <div className="mt-2 pt-2 border-t border-slate-800/80">
                        <Link
                          href="/assesment"
                          onClick={() => setAssessmentDropdownOpen(false)}
                          className="flex items-center justify-between px-3 py-1.5 text-[11px] font-semibold text-sky-400 hover:text-sky-300 hover:bg-sky-500/10 rounded-lg transition-all"
                        >
                          <span>Buka Portal Assesment Lengkap</span>
                          <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-slate-800 text-sky-400 border border-slate-700/60 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap">{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] bg-slate-700/70 text-slate-300 px-1.5 py-0.5 rounded-full font-normal whitespace-nowrap hidden lg:inline-flex">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {currentUser ? (
            <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800 rounded-xl px-3 py-1.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                <User className="h-4 w-4" />
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-bold text-white leading-tight">
                  {currentUser.name}
                </span>
                <span className="text-[10px] text-slate-400 capitalize">
                  {currentUser.role === "super_admin"
                    ? "Super Admin"
                    : currentUser.role}
                </span>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                title="Keluar Akun"
                className="ml-1 text-slate-400 hover:text-rose-400 transition-colors p-1"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/20 hover:from-sky-400 hover:to-indigo-500 transition-all hover:shadow-sky-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="h-4 w-4" />
              <span>Masuk Akun</span>
            </Link>
          )}

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0d1322] px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;

            // Render khusus Assesment di Mobile
            if (link.hasDropdown && link.children) {
              return (
                <div key={link.name} className="space-y-1">
                  <div
                    onClick={() => setMobileAssessmentOpen(!mobileAssessmentOpen)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer ${
                      isAssessmentActive
                        ? "bg-slate-800 text-sky-400 font-semibold"
                        : "text-slate-300 hover:bg-slate-850 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-sky-400" />
                      <span>{link.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs bg-gradient-to-r from-sky-500/20 to-amber-500/20 text-sky-300 px-2 py-0.5 rounded-full border border-sky-500/30">
                        {link.badge}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-400 transition-transform ${
                          mobileAssessmentOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {mobileAssessmentOpen && (
                    <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-sky-500/30 ml-3">
                      {link.children.map((child) => {
                        const ChildIcon = child.icon;
                        const isChildActive = pathname === child.href;

                        return (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                              isChildActive
                                ? "bg-slate-800 text-sky-300 font-bold"
                                : "text-slate-400 hover:bg-slate-850 hover:text-white"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <ChildIcon className="h-3.5 w-3.5 text-slate-400" />
                              <span>{child.name}</span>
                            </div>
                            <span className="text-[10px] text-slate-500">
                              {child.badge}
                            </span>
                          </Link>
                        );
                      })}

                      <Link
                        href="/assesment"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
                      >
                        <span>Semua Portal Assesment →</span>
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? "bg-slate-800 text-sky-400 font-semibold"
                    : "text-slate-300 hover:bg-slate-850 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-slate-400" />
                  <span>{link.name}</span>
                </div>
                {link.badge && (
                  <span className="text-xs bg-slate-700/60 text-slate-300 px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
