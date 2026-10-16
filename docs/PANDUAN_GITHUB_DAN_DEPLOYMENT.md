# 📘 Panduan Integrasi GitHub, Konfigurasi Basis Data & Deployment Publik BroMan

Dokumen ini berisi catatan teknis lengkap mengenai hasil audit sistem, konfigurasi basis data lokal dan *cloud*, panduan menghubungkan ke repositori GitHub **`saputrasip04`**, serta langkah-langkah pengaturan alamat website (*page address*) agar dapat diakses secara publik.

---

## 1. Hasil Audit Kesiapan Sistem (*System & Build Audit*)

Sebelum dilakukan *push* ke GitHub dan *deployment*, seluruh kode telah diuji dan diverifikasi:

| Komponen Uji | Perintah | Status | Keterangan |
|---|---|---|---|
| **TypeScript Typecheck** | `npx tsc --noEmit` | **Lolos (0 Error)** | Semua tipe data, interface, dan relasi komponen valid. |
| **Next.js Production Build** | `npm run build` | **Lolos (0 Error)** | 56 rute statis di-generate sukses dengan Next.js 16 (Turbopack). Seluruh Route Handler Dynamic API terkompilasi optimal. |
| **Koneksi Database MySQL** | `checkMySQLStatus()` | **Aktif & Sehat** | 31 tabel di database `broman_db` pada XAMPP (port 3306) terhubung. |
| **Keamanan Git (.gitignore)** | Git Status | **Aman** | Kredensial lokal (`.env.local`), `node_modules`, `.next`, `cookies.txt`, dan file log debug dikecualikan dari Git. |

Commit Git lokal perdana telah dibuat pada branch `main`:
- **Hash Commit**: `ac0eb34`
- **Pesan**: `feat: inisialisasi aplikasi BroMan LMS SMK Broadcasting & Perfilman`

---

## 2. Konfigurasi Basis Data (*Database Setup*)

Aplikasi BroMan menggunakan basis data relasional MySQL. Berkas cetak biru (*schema blueprint*) tabel dan relasi tersimpan di:
👉 [`database/broman_mysql_schema.sql`](file:///f:/APPPSPT/BroMan/database/broman_mysql_schema.sql)

### A. Mode Lokal (Server XAMPP Komputer / Lab Sekolah)
Konfigurasi tersimpan pada berkas `.env.local`:
```env
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=broman_db
```
- Menjalankan aplikasi secara lokal: Cukup jalankan Apache dan MySQL di XAMPP, lalu jalankan `buka-broman.bat` atau `npm run dev`.
- Aplikasi dapat diakses di `http://localhost/broman` atau `http://localhost:3000/broman`.

### B. Mode Online / Cloud (Akses Publik Internet)
Karena database MySQL di XAMPP hanya hidup di komputer lokal (*localhost*), saat aplikasi di-hosting online Anda membutuhkan database MySQL berbasis cloud.

**Rekomendasi Penyedia Cloud MySQL Gratis & Cepat**:
1. **TiDB Cloud (Serverless MySQL)**:
   - Gratis hingga 5 GB penyimpanan, 100% kompatibel MySQL.
   - Pendaftaran mudah via akun GitHub di [tidbcloud.com](https://tidbcloud.com).
2. **Aiven for MySQL**:
   - Layanan cloud database terkelola berkinerja tinggi ([aiven.io](https://aiven.io)).
3. **Railway MySQL**:
   - Mendukung provisioning database MySQL instan ([railway.app](https://railway.app)).

**Langkah Impor ke Cloud**:
1. Buat database baru di salah satu penyedia cloud di atas.
2. Buka konsol SQL / phpMyAdmin cloud tersebut, lalu impor berkas `database/broman_mysql_schema.sql`.
3. Masukkan data kredensial (`MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DATABASE`) ke panel *Environment Variables* di dashboard hosting Anda.

---

## 3. Langkah Integrasi ke Akun GitHub (`saputrasip04`)

Informasi Git lokal pada komputer:
- **Nama Pengguna**: `saputrasip04`
- **Email**: `saputrasip04@gmail.com`
- **Alamat Remote**: `https://github.com/saputrasip04/broman.git`
- **Branch Utama**: `main`

### Langkah 1: Buat Repositori Baru di GitHub
1. Buka browser dan buka: **[https://github.com/new](https://github.com/new)** (pastikan login dengan akun `saputrasip04`).
2. Isi formulir pembuatan:
   - **Repository name**: `broman`
   - **Description** (opsional): `LMS SMK Broadcasting & Perfilman - Kurikulum Merdeka Fase E, F & Peminatan`
   - **Visibility**: Pilih **Public** atau **Private** sesuai kebutuhan.
3. ⚠️ **PERHATIAN PENTING**: **Jangan mencentang** opsi:
   - [ ] *Add a README file*
   - [ ] *Add .gitignore*
   - [ ] *Choose a license*  
   *(Biarkan kosong tidak tercentang karena seluruh berkas sudah lengkap di repositori lokal).*
4. Klik tombol **"Create repository"**.

### Langkah 2: Unggah (Push) Kode dari Terminal
Buka terminal PowerShell pada direktori proyek (`f:\APPPSPT\BroMan`), lalu jalankan perintah:

```powershell
git push -u origin main
```

> **Catatan**: Jika muncul jendela autentikasi dari *Git Credential Manager*, pilih **Sign in with your browser** untuk mengizinkan akses satu kali.

---

## 4. Pengaturan Alamat Halaman Website (*Page Address*)

### Perbedaan Arsitektur: GitHub Pages vs Vercel
- **GitHub Pages** (`saputrasip04.github.io/broman`):  
  Hanya mendukung file statis murni (HTML/CSS/JS). GitHub Pages **tidak menjalankan server Node.js** dan **tidak dapat mengeksekusi Route Handler API atau koneksi database MySQL**.
- **Vercel** (`broman.vercel.app`):  
  Platform cloud resmi dari pembuat Next.js. **100% GRATIS**, terhubung langsung dengan GitHub, mendukung penuh Server Components, Dynamic Route Handlers, dan koneksi database cloud.

---

### Panduan Setting Alamat Website via Vercel (Sangat Direkomendasikan)
Alamat website publik Anda: **`https://broman-saputrasip04.vercel.app`** (atau nama pilihan Anda).

1. Buka situs **[https://vercel.com/signup](https://vercel.com/signup)**.
2. Klik tombol **"Continue with GitHub"** dan login menggunakan akun `saputrasip04`.
3. Pada halaman dashboard Vercel, klik tombol **"Add New..."** lalu pilih **"Project"**.
4. Di daftar repositori GitHub yang muncul, temukan **`broman`**, lalu klik tombol **"Import"**.
5. Konfigurasi Proyek:
   - **Framework Preset**: Biarkan otomatis terdeteksi **Next.js**.
   - **Root Directory**: `./` (default).
   - **Build Command**: `npm run build` (default).
   - **Output Directory**: `.next` (default).
6. Di bagian **Environment Variables**, tambahkan konfigurasi jika menghubungkan ke MySQL Cloud:
   - `MYSQL_HOST`: *(host cloud Anda)*
   - `MYSQL_PORT`: `3306`
   - `MYSQL_USER`: *(user cloud Anda)*
   - `MYSQL_PASSWORD`: *(password cloud Anda)*
   - `MYSQL_DATABASE`: `broman_db`
7. Klik tombol biru **"Deploy"**.
8. Dalam waktu sekitar 1–2 menit, proses build akan selesai. Anda langsung mendapatkan **alamat halaman website resmi aktif** berprotokol HTTPS gratis yang dapat langsung dibagikan kepada guru dan siswa.

---

## 5. Alur Kerja Pembaruan (*Workflow Update Rutin*)

Setelah terintegrasi, setiap kali Anda melakukan perubahan kode atau penambahan materi di komputer lokal:

```powershell
# 1. Periksa status berkas yang berubah
git status

# 2. Tambahkan perubahan ke staging
git add .

# 3. Buat commit catatan perubahan
git commit -m "feat: perbarui materi pembelajaran dan fitur kuis"

# 4. Unggah ke GitHub (Vercel otomatis memperbarui website publik Anda)
git push
```

---

*Dokumen catatan ini dibuat otomatis pada 16 Oktober 2026 sebagai panduan resmi pengembangan dan publikasi BroMan LMS SMK Broadcasting & Perfilman.*
