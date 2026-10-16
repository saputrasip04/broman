# 🎬 BroMan — Learning Management System (LMS) SMK Broadcasting & Perfilman

Aplikasi LMS modern berstandar BSKAP Kurikulum Merdeka untuk Program Keahlian **Broadcasting & Perfilman** di Sekolah Menengah Kejuruan (SMK). Dilengkapi alur belajar interaktif 9 langkah, asesmen formatif & sumatif (US & TKA), portal guru dengan SlideDeck interaktif, serta Admin Control Panel dengan sinkronisasi basis data real-time.

---

## 🚀 Fitur Unggulan

- **Kurikulum Lengkap 14 Elemen**:
  - **Fase E (Kelas X)**: E1 s/d E4 (Dasar Industri, Media & Regulasi, Alat Audio Visual, Produksi & New Media).
  - **Fase F (Kelas XI & XII)**: F1 s/d F8 (Manajemen Produksi, Skenario, Sutradara, Kamera & Cahaya, Tata Suara, Artistik, Editing, Penyiaran Online).
  - **Peminatan Kejuruan**: Animasi 2D & Animasi 3D.
- **Alur Belajar 9 Langkah per Materi**:
  1. Pemantik & Stimulus Kritis (Hook)
  2. Pra-tes Diagnostik
  3. Materi Slide Deck Interaktif (Keyboard/Touch Navigasi)
  4. Video Pembelajaran Eksklusif
  5. Game Edukasi Mencocokkan Istilah (Matching Game)
  6. Studi Kasus Industri Nyata
  7. Kuis Formatif (C1–C6)
  8. Lembar Kerja Praktik Peserta Didik (LKPD)
  9. Jurnal Refleksi Diri
- **Assesment Center**:
  - Ujian Sekolah (US) Teori Kejuruan
  - Tes Kemampuan Akademik (TKA)
  - Portal Monitoring Skor Guru & Ekspor Hasil
- **Portal Guru & Bank Soal**:
  - Manajemen Soal C1–C6 per Elemen
  - Presentasi SlideDeck Pengajaran di Kelas
- **Admin Control Panel (Real-Time MySQL Persistence)**:
  - Visibilitas Menu Dinamis (Show / Hide)
  - Alokasi Beban Jam Pelajaran (Editable JP)
  - Matriks Hak Akses per Rombel (Access Grants)
  - Manajemen Rombel & Wali Kelas
  - Manajemen Pengguna (Siswa & Guru) + Impor Massal Excel (.xlsx)
  - Audit Trail & Log Keamanan Sistem

---

## 🛠️ Teknologi & Arsitektur

- **Frontend & Fullstack**: [Next.js](https://nextjs.org/) 16 (App Router + Turbopack), React 19, TypeScript
- **Styling**: Tailwind CSS, Lucide Icons, Glassmorphism UI
- **Basis Data**: MySQL (XAMPP Server Lokal / Cloud MySQL) dengan `mysql2` connection pool
- **Reverse Proxy**: Apache Reverse Proxy (`/broman`)

---

## 💻 Panduan Instalasi Lokal

### 1. Clone Repositori
```bash
git clone https://github.com/saputrasip04/broman.git
cd broman
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Konfigurasi Basis Data MySQL (XAMPP)
1. Nyalakan modul **Apache** dan **MySQL** di XAMPP Control Panel.
2. Buat database baru bernama `broman_db` di [phpMyAdmin](http://localhost/phpmyadmin).
3. Impor skema tabel yang telah disediakan dari berkas:
   ```
   database/broman_mysql_schema.sql
   ```
4. Salin berkas lingkungan konfigurasi:
   ```bash
   cp .env.example .env.local
   ```
   Sesuaikan kredensial MySQL jika menggunakan password (default XAMPP: user `root`, password kosong).

### 4. Jalankan Server Pengembangan
```bash
npm run dev
```
Buka browser pada: `http://localhost:3000/broman`

---

## 🌐 Panduan Publikasi / Deployment Online

### Opsi A: Deploy ke Vercel (Sangat Direkomendasikan untuk Next.js)
1. Buka [Vercel](https://vercel.com) dan login dengan akun GitHub Anda (`saputrasip04`).
2. Klik **"Add New Project"** $\rightarrow$ **"Import"** repositori `broman`.
3. Pada bagian **Environment Variables**, masukkan konfigurasi database MySQL cloud Anda (misal dari TiDB Cloud, Aiven, atau Railway).
4. Klik **"Deploy"**. Anda akan langsung mendapatkan URL publik resmi (contoh: `https://broman.vercel.app`) dengan SSL HTTPS gratis.

---

## 📄 Lisensi
Hak Cipta © 2026 SMK Broadcasting & Perfilman. Seluruh hak cipta dilindungi undang-undang.
