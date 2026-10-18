import { UserRole } from "@/lib/types/database";
import { DEMO_USERS, UserSession } from "@/lib/auth";

export interface StoredUser {
  id: string;
  name: string;
  identifier: string;
  role: UserRole;
  email: string;
  kelas: string;
  isActive: boolean;
  createdAt: string;
}

// Inisialisasi daftar pengguna default
const INITIAL_USERS: StoredUser[] = [
  {
    id: "usr-admin-01",
    name: "Administrator BroMan",
    identifier: "admin@smk.sch.id",
    role: "super_admin",
    email: "admin@smk.sch.id",
    kelas: "Super Admin Sekolah",
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "usr-guru-199002042022211009",
    name: "Very Kurniawan, S.Pd., Gr.",
    identifier: "199002042022211009",
    role: "guru",
    email: "verykurniawan42@guru.smk.belajar.id",
    kelas: "Guru Pengampu",
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "usr-murid-10245",
    name: "Rizky Ramadhan",
    identifier: "10245",
    role: "murid",
    email: "rizky.ramadhan@siswa.smk.sch.id",
    kelas: "X BCF 1",
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "usr-murid-10246",
    name: "Siti Nurhaliza",
    identifier: "10246",
    role: "murid",
    email: "siti.nurhaliza@siswa.smk.sch.id",
    kelas: "X BCF 1",
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "usr-murid-10247",
    name: "Dimas Anggara",
    identifier: "10247",
    role: "murid",
    email: "dimas.anggara@siswa.smk.sch.id",
    kelas: "X BCF 2",
    isActive: true,
    createdAt: new Date().toISOString(),
  },
];

// Menggunakan globalThis agar state bertahan selama container serverless aktif
const globalKey = Symbol.for("broman.user_registry");
const globalObj = globalThis as unknown as { [key: symbol]: Map<string, StoredUser> };

if (!globalObj[globalKey]) {
  const map = new Map<string, StoredUser>();
  for (const u of INITIAL_USERS) {
    map.set(u.id, u);
  }
  globalObj[globalKey] = map;
}

const userMap: Map<string, StoredUser> = globalObj[globalKey];

export function getAllRegisteredUsers(): StoredUser[] {
  return Array.from(userMap.values());
}

export function findUserByIdentifier(identifier: string): StoredUser | null {
  const clean = identifier.trim().toLowerCase();
  for (const u of userMap.values()) {
    if (
      u.identifier.toLowerCase() === clean ||
      u.email.toLowerCase() === clean ||
      u.id.toLowerCase() === clean
    ) {
      return u;
    }
  }
  return null;
}

export function upsertRegisteredUser(user: Partial<StoredUser> & { name: string; identifier: string }): StoredUser {
  const cleanId =
    user.id ||
    `usr-${user.role || "murid"}-${user.identifier.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}`;

  const existing = userMap.get(cleanId);
  const updated: StoredUser = {
    id: cleanId,
    name: user.name.trim(),
    identifier: user.identifier.trim(),
    role: user.role || existing?.role || "murid",
    email: user.email ? user.email.trim() : `${user.identifier.trim()}@smk.sch.id`,
    kelas: user.kelas || existing?.kelas || (user.role === "guru" ? "Guru Pengampu" : user.role === "super_admin" ? "Kepala Lab BCF" : "X BCF 1"),
    isActive: user.isActive !== undefined ? user.isActive : existing?.isActive !== undefined ? existing.isActive : true,
    createdAt: existing?.createdAt || new Date().toISOString(),
  };

  userMap.set(cleanId, updated);
  return updated;
}

export function toggleRegisteredUserStatus(id: string, isActive: boolean): boolean {
  const existing = userMap.get(id);
  if (!existing) return false;
  existing.isActive = isActive;
  userMap.set(id, existing);
  return true;
}

export function deleteRegisteredUser(id: string): boolean {
  if (id === "usr-admin-01") return false; // Cegah hapus admin utama
  return userMap.delete(id);
}
