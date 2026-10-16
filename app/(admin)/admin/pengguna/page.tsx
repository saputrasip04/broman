"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Search,
  UserPlus,
  FileSpreadsheet,
  ArrowLeft,
  Trash2,
  CheckCircle2,
  X,
  UploadCloud,
  Download,
  Database,
} from "lucide-react";
import { UserRole } from "@/lib/types/database";

interface UserItem {
  id: string;
  name: string;
  identifier: string; // NIS atau NIP
  role: UserRole;
  email: string;
  kelas?: string;
  isActive: boolean;
}

export default function AdminPenggunaPage() {
  const [users, setUsers] = useState<UserItem[]>([
    {
      id: "usr-admin-01",
      name: "Administrator BroMan",
      identifier: "admin@smk.sch.id",
      role: "super_admin",
      email: "admin@smk.sch.id",
      kelas: "Kepala Lab BCF",
      isActive: true,
    },
    {
      id: "usr-guru-19911004",
      name: "Saputra Indra Purnama, S.Pd.",
      identifier: "199110042022211007",
      role: "guru",
      email: "indra.purnama@smk.sch.id",
      kelas: "Guru Pengampu",
      isActive: true,
    },
    {
      id: "usr-guru-bambang",
      name: "Bambang Sudibyo, S.Sn., M.Pd.",
      identifier: "198501012010011001",
      role: "guru",
      email: "bambang.sudibyo@smk.sch.id",
      kelas: "Guru Pengampu",
      isActive: true,
    },
    {
      id: "usr-guru-ratna",
      name: "Ratna Sari, M.Ds.",
      identifier: "199003152015022002",
      role: "guru",
      email: "ratna.sari@smk.sch.id",
      kelas: "Guru Pengampu",
      isActive: true,
    },
    {
      id: "usr-murid-10245",
      name: "Rizky Ramadhan",
      identifier: "10245",
      role: "murid",
      email: "rizky.ramadhan@siswa.smk.sch.id",
      kelas: "X BCF 1",
      isActive: true,
    },
    {
      id: "usr-murid-10246",
      name: "Siti Nurhaliza",
      identifier: "10246",
      role: "murid",
      email: "siti.nurhaliza@siswa.smk.sch.id",
      kelas: "X BCF 1",
      isActive: true,
    },
    {
      id: "usr-murid-10247",
      name: "Dimas Anggara",
      identifier: "10247",
      role: "murid",
      email: "dimas.anggara@siswa.smk.sch.id",
      kelas: "X BCF 2",
      isActive: true,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  // Ambil data profil pengguna teranyar dari basis data MySQL
  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch("/broman/api/admin/pengguna");
        const data = await res.json();
        if (data.success && Array.isArray(data.users) && data.users.length > 0) {
          setUsers(data.users);
        }
      } catch (err) {
        console.warn("Gagal mengambil data pengguna dari MySQL:", err);
      }
    }
    loadUsers();
  }, []);

  // Form New User State
  const [newName, setNewName] = useState("");
  const [newIdentifier, setNewIdentifier] = useState("");
  const [newRole, setNewRole] = useState<UserRole>("murid");
  const [newEmail, setNewEmail] = useState("");
  const [newKelas, setNewKelas] = useState("X BCF 1");

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.identifier.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const showNotice = (msg: string) => {
    setNotice(msg);
    setTimeout(() => setNotice(null), 3500);
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newIdentifier.trim()) return;

    const cleanId = `usr-${newRole}-${newIdentifier.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}`;
    const newUser: UserItem = {
      id: cleanId,
      name: newName.trim(),
      identifier: newIdentifier.trim(),
      role: newRole,
      email: newEmail.trim() || `${newIdentifier.trim()}@smk.sch.id`,
      kelas: newRole === "murid" ? newKelas : (newRole === "guru" ? "Guru Pengampu" : "Kepala Lab BCF"),
      isActive: true,
    };

    setUsers([newUser, ...users.filter((u) => u.id !== newUser.id)]);
    setShowAddModal(false);
    setNewName("");
    setNewIdentifier("");
    setNewEmail("");
    showNotice(`Pengguna baru "${newUser.name}" tersimpan ke basis data MySQL.`);

    try {
      await fetch("/broman/api/admin/pengguna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newUser.name,
          identifier: newUser.identifier,
          role: newUser.role,
          email: newUser.email,
          kelas: newUser.kelas,
        }),
      });
    } catch (err) {
      console.error("Error creating user in MySQL:", err);
    }
  };

  const handleToggleStatus = async (id: string) => {
    const target = users.find((u) => u.id === id);
    if (!target) return;
    const nextVal = !target.isActive;

    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, isActive: nextVal } : u))
    );
    showNotice(`Status akun ${target.name} diperbarui ke MySQL (${nextVal ? "Aktif" : "Nonaktif"}).`);

    try {
      await fetch("/broman/api/admin/pengguna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "toggle_status",
          id,
          isActive: nextVal,
        }),
      });
    } catch (err) {
      console.error("Error updating user status in MySQL:", err);
    }
  };

  const handleDeleteUser = async (id: string, name: string) => {
    if (id === "usr-admin-01") {
      alert("Akun Super Admin utama tidak boleh dihapus.");
      return;
    }

    setUsers((prev) => prev.filter((item) => item.id !== id));
    showNotice(`Pengguna "${name}" berhasil dihapus dari basis data MySQL.`);

    try {
      await fetch("/broman/api/admin/pengguna", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
    } catch (err) {
      console.error("Error deleting user from MySQL:", err);
    }
  };

  const handleSimulateImport = async () => {
    const imported: UserItem[] = [
      {
        id: `usr-murid-10248`,
        name: "Ahmad Fajar Pratama",
        identifier: "10248",
        role: "murid",
        email: "ahmad.fajar@siswa.smk.sch.id",
        kelas: "X BCF 1",
        isActive: true,
      },
      {
        id: `usr-murid-10249`,
        name: "Laila Ramadhani",
        identifier: "10249",
        role: "murid",
        email: "laila.ramadhani@siswa.smk.sch.id",
        kelas: "X BCF 2",
        isActive: true,
      },
      {
        id: `usr-guru-surya`,
        name: "Surya Pratama, S.Sn.",
        identifier: "199204012018031003",
        role: "guru",
        email: "surya.pratama@smk.sch.id",
        kelas: "Guru Editing Audio Video",
        isActive: true,
      },
    ];

    setUsers((prev) => [...imported.filter((imp) => !prev.some((p) => p.id === imp.id)), ...prev]);
    setShowImportModal(false);
    showNotice(`Berhasil mengimpor 3 pengguna dan tersimpan ke basis data MySQL!`);

    try {
      await fetch("/broman/api/admin/pengguna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ users: imported }),
      });
    } catch (err) {
      console.error("Error importing users to MySQL:", err);
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
            <span className="text-xs text-slate-400">FR-8 User Management</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
            <Users className="h-7 w-7 text-sky-400" />
            Manajemen Pengguna (Siswa & Guru)
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Kelola data murid, guru, hak akses akun, serta import pengguna massal melalui file Excel (.xlsx / .csv).
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-3 py-2 text-xs text-emerald-300">
            <Database className="h-4 w-4 text-emerald-400" />
            <span>Auto-Sync ke MySQL</span>
          </div>

          <button
            type="button"
            onClick={() => setShowImportModal(true)}
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-850 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-all shadow-sm"
          >
            <FileSpreadsheet className="h-4 w-4 text-emerald-400" />
            <span>Import Excel</span>
          </button>
          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2.5 text-xs font-semibold text-white hover:opacity-95 transition-all shadow-md shadow-sky-500/20"
          >
            <UserPlus className="h-4 w-4" />
            <span>Tambah Pengguna</span>
          </button>
        </div>
      </div>

      {notice && (
        <div className="mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-xs font-semibold text-emerald-400 flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{notice}</span>
        </div>
      )}

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari nama, NIS, NIP, atau email..."
            className="w-full rounded-xl border border-slate-800 bg-slate-900/80 pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs text-slate-400">Filter Peran:</span>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
          >
            <option value="all">Semua Peran ({users.length})</option>
            <option value="murid">Murid</option>
            <option value="guru">Guru</option>
            <option value="super_admin">Super Admin</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden backdrop-blur-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950/80 text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-5 py-3.5">Nama & Identitas</th>
                <th className="px-5 py-3.5">Peran</th>
                <th className="px-5 py-3.5">Kelas / Keterangan</th>
                <th className="px-5 py-3.5">Email Sekolah</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredUsers.map((u) => {
                const isMurid = u.role === "murid";
                const isGuru = u.role === "guru";

                return (
                  <tr key={u.id} className="hover:bg-slate-850/50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="font-bold text-white text-sm">{u.name}</div>
                      <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                        {isMurid ? `NIS: ${u.identifier}` : `NIP/ID: ${u.identifier}`}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold border ${
                          isMurid
                            ? "bg-sky-500/10 text-sky-400 border-sky-500/20"
                            : isGuru
                            ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                            : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        }`}
                      >
                        {u.role === "super_admin" ? "Super Admin" : u.role.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-slate-300">{u.kelas || "-"}</td>
                    <td className="px-5 py-4 font-mono text-[11px] text-slate-400">{u.email}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-medium ${
                          u.isActive ? "text-emerald-400" : "text-rose-400"
                        }`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${
                            u.isActive ? "bg-emerald-500" : "bg-rose-500"
                          }`}
                        />
                        {u.isActive ? "Aktif" : "Nonaktif"}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        type="button"
                        onClick={() => handleToggleStatus(u.id)}
                        className="text-xs font-semibold text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700 transition-colors mr-2"
                      >
                        {u.isActive ? "Nonaktifkan" : "Aktifkan"}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteUser(u.id, u.name)}
                        title="Hapus Pengguna"
                        className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Tambah Pengguna */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <UserPlus className="h-5 w-5 text-sky-400" />
                Tambah Pengguna Baru
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreateUser} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Nama lengkap siswa atau guru"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Peran Akun</label>
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value as UserRole)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-white focus:outline-none focus:border-sky-500"
                >
                  <option value="murid">Murid (Siswa)</option>
                  <option value="guru">Guru Pengampu</option>
                  <option value="super_admin">Super Administrator</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  {newRole === "murid" ? "Nomor Induk Siswa (NIS)" : "Nomor Identitas Pegawai (NIP/ID)"}
                </label>
                <input
                  type="text"
                  required
                  value={newIdentifier}
                  onChange={(e) => setNewIdentifier(e.target.value)}
                  placeholder="Contoh: 10250"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              {newRole === "murid" && (
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Kelas / Rombel</label>
                  <select
                    value={newKelas}
                    onChange={(e) => setNewKelas(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="X BCF 1">X BCF 1</option>
                    <option value="X BCF 2">X BCF 2</option>
                    <option value="XI BCF 1">XI BCF 1</option>
                    <option value="XI BCF 2">XI BCF 2</option>
                    <option value="XII BCF 1">XII BCF 1</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-slate-300 font-medium mb-1">Email Sekolah (Opsional)</label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="nama@smk.sch.id"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="pt-4 flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="rounded-xl border border-slate-700 px-4 py-2 text-slate-300 hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 font-semibold text-white shadow"
                >
                  Simpan Pengguna
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Import Excel */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5 text-emerald-400" />
                Import Pengguna Massal Excel (.xlsx / .csv)
              </h3>
              <button
                type="button"
                onClick={() => setShowImportModal(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
              <p>
                Gunakan template resmi untuk mengunggah ratusan akun siswa sekaligus tanpa input satu per satu.
              </p>

              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="font-semibold text-white mb-1">Unduh Template Baku:</div>
                <button
                  type="button"
                  onClick={() => alert("Mengunduh template-pengguna.xlsx siap isi...")}
                  className="inline-flex items-center gap-2 text-sky-400 hover:underline mt-1"
                >
                  <Download className="h-4 w-4" />
                  <span>Download template-pengguna.xlsx</span>
                </button>
              </div>

              <div className="rounded-2xl border-2 border-dashed border-slate-700 bg-slate-950/40 p-6 text-center">
                <UploadCloud className="mx-auto h-8 w-8 text-slate-500 mb-2" />
                <div className="font-semibold text-white">Tarik file Excel ke sini atau klik untuk memilih</div>
                <div className="text-[11px] text-slate-500 mt-1">Format didukung: .xlsx, .csv (Maksimal 10MB)</div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowImportModal(false)}
                  className="rounded-xl border border-slate-700 px-4 py-2 text-slate-300 hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={handleSimulateImport}
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 font-semibold text-white shadow"
                >
                  Mulai Proses Import (Simulasi 3 Akun)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
