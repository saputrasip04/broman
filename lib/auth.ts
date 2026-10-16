import { cookies } from "next/headers";
import { type NextRequest } from "next/server";
import { UserRole } from "@/lib/types/database";

export interface UserSession {
  id: string;
  name: string;
  role: UserRole;
  identifier: string; // NIS, NIP, atau Email
  email?: string;
  kelas?: string;
}

export const SESSION_COOKIE_NAME = "broman_session";

// Daftar akun baku untuk demo dan pengujian
export const DEMO_USERS: Record<UserRole, UserSession> = {
  murid: {
    id: "usr-murid-10245",
    name: "Rizky Ramadhan",
    role: "murid",
    identifier: "10245",
    email: "rizky.ramadhan@siswa.smk.sch.id",
    kelas: "X BCF 1",
  },
  guru: {
    id: "usr-guru-19911004",
    name: "Saputra Indra Purnama, S.Pd.",
    role: "guru",
    identifier: "199110042022211007",
    email: "indra.purnama@smk.sch.id",
    kelas: "Guru Mata Pelajaran",
  },
  super_admin: {
    id: "usr-admin-01",
    name: "Administrator BroMan",
    role: "super_admin",
    identifier: "admin@smk.sch.id",
    email: "admin@smk.sch.id",
    kelas: "Super Admin Sekolah",
  },
};

/**
 * Mengambil sesi pengguna aktif di Server Components atau Route Handlers
 */
export async function getSession(): Promise<UserSession | null> {
  try {
    const cookieStore = await cookies();
    const cookie = cookieStore.get(SESSION_COOKIE_NAME);
    if (!cookie?.value) {
      // Default fallback untuk pengalaman penjelajahan langsung jika belum login
      return null;
    }
    const session = JSON.parse(cookie.value) as UserSession;
    return session;
  } catch {
    return null;
  }
}

/**
 * Mengambil sesi pengguna di dalam Middleware / Proxy Next.js
 */
export function getSessionFromRequest(request: NextRequest): UserSession | null {
  try {
    const cookie = request.cookies.get(SESSION_COOKIE_NAME);
    if (!cookie?.value) return null;
    const session = JSON.parse(cookie.value) as UserSession;
    return session;
  } catch {
    return null;
  }
}

/**
 * Menyimpan sesi pengguna ke cookie (Server Action / Route Handler)
 */
export async function setSession(user: UserSession): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 hari
  });
}

/**
 * Menghapus sesi pengguna saat logout
 */
export async function clearSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

/**
 * Memeriksa kecocokan role pengguna
 */
export function checkRole(
  userRole?: UserRole | null,
  allowedRoles: UserRole[] = ["super_admin"]
): boolean {
  if (!userRole) return false;
  if (userRole === "super_admin") return true; // Super admin selalu diizinkan
  return allowedRoles.includes(userRole);
}
