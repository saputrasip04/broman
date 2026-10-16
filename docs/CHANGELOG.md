# CHANGELOG — BroMan (Broadcasting & Perfilman)

## [Fase 6: Integrasi Penuh XAMPP (MySQL & Apache) & Mode Hybrid] - 2026-10-14

### 1. Migrasi & Skema Database MySQL XAMPP (`broman_db`)
- Membuat file migrasi DDL komprehensif `database/broman_mysql_schema.sql` (31 Tabel relasional + Data Seed Awal).
- Pembuatan dan inisialisasi database `broman_db` di server lokal XAMPP MariaDB/MySQL (`F:\XAMPP\mysql\bin\mysql.exe`, Port 3306).
- Tabel yang dimigrasikan:
  - Master Kurikulum: `fases`, `mapel`, `elemen`, `babs`, `tujuan_pembelajaran`, `atp_items`, `kktp`, `materials`, `media_assets`.
  - Master Pengguna & Sekolah: `profiles`, `academic_years`, `classes`, `class_members`, `access_grants`.
  - Asesmen & CBT: `questions`, `question_options`, `packages`, `package_items`, `assessments`, `attempts`, `attempt_answers`, `quizzes`, `quiz_attempts`, `game_attempts`.
  - Sistem & Operasional: `feature_flags`, `games`, `lkpd`, `lkpd_submissions`, `rpm`, `progress`, `activity_logs`.
- Data seed otomatis:
  - 12 Elemen resmi BSKAP (E1-E4, F1-F8).
  - Profil baku: Super Admin, Guru Saputra Indra Purnama, Guru Bambang Sudibyo, Guru Ratna Sari, Siswa Rizky Ramadhan, Siswa Siti Nurhaliza, Siswa Dimas Anggara.
  - Tahun Ajaran 2026/2027 Ganjil & 4 Rombel Kelas (X BCF 1, X BCF 2, XI BCF, XII BCF).
  - 12 Feature flags baku global.

### 2. Konektor Database & Mode Hybrid di Next.js
- Pustaka `mysql2` terpasang di `package.json`.
- Modul pembantu koneksi pool `lib/db/mysql.ts`:
  - `getMySQLPool()`, `queryMySQL()`, dan `checkMySQLStatus()` dengan perlindungan connection timeout 3 detik untuk pencegahan hang.
- Konfigurasi variabel lingkungan di `.env.local` dan `.env.example`:
  - `MYSQL_HOST=localhost`, `MYSQL_PORT=3306`, `MYSQL_USER=root`, `MYSQL_PASSWORD=`, `MYSQL_DATABASE=broman_db`.
- Arsitektur **Hybrid Mode**:
  - `lib/flags.ts` & `app/api/flags/route.ts`: Membaca dan menyimpan toggle fitur langsung dari MySQL XAMPP jika aktif, dengan fallback aman ke Supabase / memory jika database lokal belum aktif.
  - `app/api/auth/login/route.ts`: Menyinkronkan identitas login pengguna dari tabel `profiles` di MySQL XAMPP dan memperbarui `last_login_at`.
  - `app/api/health/route.ts`: Mengembalikan status live MySQL XAMPP (status koneksi, jumlah tabel aktif, host, dan mode hybrid).
  - `app/api/db/sync/route.ts`: Endpoint khusus untuk verifikasi status sinkronisasi dan trigger upsert kurikulum ke MySQL.

### 3. Integrasi Apache XAMPP Htdocs
- Membuat folder gateway `F:\XAMPP\htdocs\broman` dan `public/xampp/index.php`.
- Portal terpadu `http://localhost/broman`:
  - Jika Next.js sedang berjalan: Otomatis melakukan reverse forward (302 Redirect) ke `http://localhost:3000`.
  - Jika Next.js belum aktif: Menampilkan *dashboard gateway* modern (status Apache, status MySQL `broman_db`, instruksi peluncuran aplikasi, link cepat ke phpMyAdmin, dan auto-detect polling).
- Skrip batch otomatis:
  - `sinkron-xampp.bat`: Skrip 1-klik untuk impor ulang skema SQL, validasi total tabel, dan pembaruan gateway htdocs.
  - `buka-broman.bat`: Memeriksa dan memastikan MySQL & Apache XAMPP aktif sebelum membuka peramban ke `http://localhost:3000`.
  - `F:\XAMPP\htdocs\broman\start-broman.bat`: Peluncur aplikasi langsung dari folder web server XAMPP.

---

## [Fase 1–5 Selesai: MVP Lengkap & Terminologi ELEMEN] - 2026-10-12

### 1. Langkah 1 — Inisialisasi & Arsitektur Dasar
- Framework Next.js 16 (App Router, Turbopack, Partial Prefetching, Cache Components) + TypeScript + Tailwind CSS.
- Pustaka inti: `@supabase/supabase-js`, `@supabase/ssr`, `lucide-react`, `zod`, `clsx`, `tailwind-merge`.
- Skrip migrasi DDL lengkap `supabase/migrations/01_initial_schema.sql` (12 Enums, 24 Tabel relasional, Indeks, RLS).
- Klien browser & server Supabase terisolasi di `lib/supabase/client.ts`, `server.ts`, dan `middleware.ts`.
- Desain *sleek dark mode* dengan *glassmorphism* bertema industri pertelevisian dan perfilman.

### 2. Langkah 2 — Autentikasi, Role Guard & Rute Terproteksi
- Utilitas autentikasi dan sesi di `lib/auth.ts` dengan penanganan multi-role: `super_admin`, `guru`, dan `murid`.
- Endpoint autentikasi: `POST /api/auth/login`, `POST /api/auth/logout`, dan `GET /api/auth/me`.
- Route Guard di `proxy.ts`:
  - Rute `/admin/**` diisolasi khusus `super_admin`; pengguna tanpa izin otomatis dialihkan ke `/login` atau `/unauthorized` (403 Forbidden).
  - Rute `/guru/**` diisolasi untuk `guru` dan `super_admin`.
- Halaman 403 Akses Ditolak di `app/unauthorized/page.tsx`.
- Navigasi responsif (`components/navbar.tsx`) menampilkan profil pengguna aktif, badge peran, dan tombol keluar (logout) instan.

### 3. Langkah 3 — Kurikulum Resmi 12 ELEMEN BSKAP (Fase E & F)
- Modul data kurikulum komprehensif di `lib/data/curriculum.ts`:
  - **Fase E (Kelas X - 84 JP):** ELEMEN E1 (Dunia Kerja & Bisnis BCF), ELEMEN E2 (Media, Teknologi & Regulasi), ELEMEN E3 (Peralatan Audio Visual), ELEMEN E4 (Proses Produksi & Media Baru).
  - **Fase F (Kelas XI–XII - 280 JP):** ELEMEN F1 (Manajemen Produksi TV), ELEMEN F2 (Naskah TV), ELEMEN F3 (Penyutradaraan TV), ELEMEN F4 (Tata Kamera & Cahaya), ELEMEN F5 (Tata Suara), ELEMEN F6 (Tata Artistik), ELEMEN F7 (Editing Audio Video), ELEMEN F8 (Penyiaran Online).
- Setiap Elemen memuat Capaian Pembelajaran (CP) teks BSKAP 032/H/KR/2024, Tujuan Pembelajaran (TP), Alur Tujuan Pembelajaran (ATP), Rubrik 4 Level KKTP, dimensi Profil Pelajar Pancasila, pemantik studi kasus, soal kuis C1-C6, game matching, dan LKPD praktikum.

### 4. Langkah 4 — Dashboard Administrator Terpadu (5 Sub-Modul)
- **Dashboard Utama (`app/(admin)/admin/page.tsx`):** Ringkasan statistik (siswa, guru, rombel, bank soal) dan kartu navigasi 5 modul.
- **Feature Toggle Dinamis (`app/(admin)/admin/menu/page.tsx`):** Kontrol instan on/off 12 fitur pada hierarki `Elemen > Fase > Role > Global`.
- **Manajemen Pengguna (`app/(admin)/admin/pengguna/page.tsx`):** Pencarian, filter peran, CRUD pengguna, modal tambah akun, dan simulator import massal file Excel (`.xlsx` / `.csv`).
- **Manajemen Kelas & Rombel (`app/(admin)/admin/kelas/page.tsx`):** Pengaturan rombel (X BCF 1, X BCF 2, XI BCF, XII BCF), wali kelas, kapasitas siswa, dan pemetaan fase.
- **Matriks Hak Akses (`app/(admin)/admin/akses/page.tsx`):** Access Grants Matrix untuk mengatur keterbukaan 12 Elemen per rombel kelas dengan batas waktu tahun ajaran.
- **Audit Log & Jejak Aktivitas (`app/(admin)/admin/log/page.tsx`):** Pencatatan real-time perubahan fitur, perubahan izin, aktivitas login, dan pengumpulan tugas.

### 5. Langkah 5 — Ruang Belajar Murid Terpadu untuk 12 ELEMEN
- Halaman Indeks Belajar (`app/(student)/belajar/page.tsx`) dengan pelacakan progres dan streak belajar harian.
- Halaman Fase (`app/(student)/belajar/[fase]/page.tsx`) dengan kartu ringkasan Elemen pembelajaran.
- Halaman Modul Elemen (`app/(student)/belajar/[fase]/[bab]/page.tsx` & `components/bab-learning-client.tsx`):
  - **Tab Materi Interaktif:** Kartu pembelajaran ringkas (<120 kata), studi kasus industri, dan kotak "Tahukah Kamu?".
  - **Tab TP & KKTP:** Capaian Pembelajaran, rincian TP, indikator KKTP, dan rubrik 4 level penilaian.
  - **Tab Video & Media:** Video edukasi YouTube embed unlisted dan panduan menonton terarah.
  - **Tab Kuis Formatif (C1–C6):** Evaluasi formatif interaktif dengan feedback otomatis, skor persentase, dan pembahasan instan tiap butir soal.
  - **Tab Game Edukatif:** Permainan pencocokan (matching) istilah alat dan fungsinya berpenghitung skor.
  - **Tab LKPD Praktikum:** Panduan langkah kerja praktik standar POS studio dan form pengumpulan berkas/link daring.

### 6. Standardisasi Terminologi
- Seluruh istilah kurikulum diubah dari "BAB" menjadi **"ELEMEN"** di seluruh halaman UI, badge pill, formulir, skema Zod, dan tabel admin.
