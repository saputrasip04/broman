# PRD — Media Pembelajaran Interaktif Broadcasting & Perfilman (Fase E & F)

Versi: 1.0 · Pemilik produk: Guru Broadcasting dan Perfilman · Bahasa antarmuka: Indonesia

---

## 1. Ringkasan

Aplikasi web media pembelajaran interaktif untuk mata pelajaran **Dasar-dasar Broadcasting dan Perfilman (Fase E)** dan **Produksi dan Siaran Program Televisi (Fase F)**. Seluruh materi disusun dari **Capaian Pembelajaran (CP)** → **Tujuan Pembelajaran (TP)** → **Alur Tujuan Pembelajaran (ATP)** → **Kriteria Ketercapaian TP (KKTP)**. Setiap CP/elemen menjadi satu **BAB**.

Aplikasi memuat materi, video, gambar, kuis, game, RPM, LKPD, bank soal C1–C6 (ulangan harian, semester, latihan TKA), serta dashboard admin untuk mengatur menu dan hak akses guru/murid.

## 2. Tujuan & Metrik Keberhasilan

| Tujuan | Metrik |
|---|---|
| Materi selaras CP dan terstruktur per BAB | 100% BAB memiliki CP, TP, ATP, KKTP, materi, kuis, LKPD, RPM |
| Mengurangi waktu guru menyusun soal | Pembuatan 20 soal via AI atau import < 5 menit |
| Murid aktif belajar mandiri | ≥ 70% murid menyelesaikan minimal 1 kuis/BAB |
| Kontrol penuh guru/admin | Menu dan fitur dapat di-enable/disable tanpa deploy ulang |

## 3. Pengguna (Role)

| Role | Hak utama |
|---|---|
| **Super Admin** | Semua akses: pengaturan menu, kelola guru & murid, kelola konten, bank soal, log |
| **Guru** | Kelola konten & bank soal pada mapel/fase yang diizinkan, buat ulangan, lihat nilai kelas |
| **Murid** | Akses materi, video, kuis, game, LKPD, ulangan sesuai hak akses; lihat progres & nilai sendiri |

## 4. Ruang Lingkup Konten (hasil analisis CP)

### 4.1 Fase E — Dasar-dasar Broadcasting dan Perfilman (4 BAB)

| BAB | Elemen / CP | Ringkasan cakupan |
|---|---|---|
| E1 | Dunia Kerja, Profesi, dan Bisnis | Profesi & level pekerjaan, basic job skills, K3, budaya kerja, technopreneur, peluang usaha, POS, kearifan lokal sebagai ide produksi |
| E2 | Perkembangan Media, Teknologi, Industri & Regulasi | Analog → digital, FTA & OTT, podcast, live streaming, streaming TV, web series, VOD, UU ITE, AI, perubahan iklim, ketenagakerjaan, life cycle produk (reuse/recycle) |
| E3 | Teknik Dasar Pengoperasian Peralatan Audio Visual | Fotografi dasar, tata kamera, tata artistik, tata suara, dasar editing, praktik singkat alat |
| E4 | Teknik Dasar Proses Produksi & New Media | Simulasi tahapan produksi sesuai POS lewat proyek audio visual sederhana |

### 4.2 Fase F — Produksi dan Siaran Program Televisi (8 BAB)

| BAB | Elemen / CP | Ringkasan cakupan |
|---|---|---|
| F1 | Manajemen Produksi dan Siaran | POS tahapan produksi, organisasi penyiaran, sumber daya, format & pola acara, target penonton, tren |
| F2 | Penulisan Naskah Televisi | Naskah jurnalistik & artistik, format, jenis, struktur |
| F3 | Penyutradaraan Televisi | Single & multicamera, analisis naskah, mise en scene, sinematografi, aba-aba |
| F4 | Tata Kamera dan Tata Cahaya | K3LH, framing, kamera & camera support, peralatan & teknik pencahayaan |
| F5 | Tata Suara Televisi | K3LH, anatomi & jenis alat, sound recorder, blocking mikrofon |
| F6 | Tata Artistik Televisi | Breakdown naskah, floorplan, sketsa set, properti, wardrobe, make up, hair style |
| F7 | Editing Audio dan Video | Manajemen file, pemilihan software, dokumen syuting & kerja editing, tahapan editing |
| F8 | Penyiaran Online | Konsep & rencana siaran online, poster & promosi digital, regulasi media sosial |

> **Catatan cakupan.** File Fase F yang diunggah hanya memuat mapel **Produksi dan Siaran Program Televisi** secara utuh; bagian **Produksi Film** (VI.126) terpotong dan **Dasar-dasar Animasi** bukan bagian pekerjaan ini. Arsitektur dibuat multi-mapel sehingga Produksi Film dapat ditambahkan nanti dengan mengunggah CP lengkapnya.

### 4.3 Struktur Isi Tiap BAB (wajib)
1. Identitas BAB (CP, elemen, alokasi waktu)
2. TP, ATP (urutan), KKTP (indikator + rubrik 4 level)
3. Peta konsep singkat
4. Materi interaktif (teks bertahap, accordion, gambar berlabel)
5. Video pembelajaran (embed/unggah) + panduan menonton
6. Galeri gambar pendukung (+ alt text & sumber/lisensi)
7. Kuis formatif (instan, dengan pembahasan)
8. Game edukatif (min. 1 per BAB)
9. LKPD (daring, dapat dicetak PDF)
10. RPM (Rencana Pembelajaran Mendalam) untuk guru
11. Refleksi murid
12. Bank soal BAB (C1–C6)

## 5. Kebutuhan Fungsional

### FR-1 Materi & Kurikulum
- FR-1.1 Hierarki: Fase → Mata Pelajaran → Elemen/CP → BAB → TP → Sub-materi.
- FR-1.2 Editor materi (rich text, sisipan gambar, video, tabel, blok interaktif).
- FR-1.3 Tampilan KKTP dan penanda ketercapaian per murid.
- FR-1.4 Seed awal: draft TP/ATP/KKTP/materi dibuat AI dari CP, wajib **review & publish** oleh guru (status draft → published).
- FR-1.5 Dukungan unggah CP baru (PDF) untuk menambah mapel/fase.

### FR-2 Video & Gambar
- Embed YouTube (unlisted) atau unggah ke storage; penanda waktu (chapter); pertanyaan sisipan (opsional).
- Galeri gambar dengan caption, alt text, kredit/lisensi; AI image prompt helper untuk membuat ilustrasi.

### FR-3 Kuis Formatif
- Tipe: pilihan ganda, PG kompleks, benar/salah, menjodohkan, isian singkat, uraian.
- Umpan balik & pembahasan instan; acak soal/opsi; batas percobaan; skor tersimpan.

### FR-4 Game Edukatif
Minimal templat berikut (konfigurasi JSON, tanpa coding ulang):
| Game | Contoh penggunaan |
|---|---|
| Matching / drag & drop | Cocokkan alat dengan fungsinya (mikrofon, lampu, kamera) |
| Flashcard | Istilah sinematografi, jenis shot |
| Urutkan (sequencing) | Tahapan produksi pra → produksi → pasca |
| Teka-teki silang / word search | Istilah penyiaran |
| Kuis kilat berwaktu + leaderboard | Review akhir BAB |
| Hotspot gambar | Anatomi kamera, mixer audio |
| Studio Simulation (scenario choice) | Memilih keputusan di situasi produksi |

### FR-5 RPM & LKPD
- Generator RPM berbasis TP/KKTP (komponen: identitas, kompetensi awal, dimensi profil lulusan, pengalaman belajar berkesadaran-bermakna-menggembirakan, asesmen, refleksi).
- Generator LKPD (tujuan, petunjuk, langkah kerja, tabel isian, rubrik).
- Ekspor **DOCX/PDF**; dapat diedit sebelum dipublikasikan; LKPD dapat dikerjakan dan dikumpulkan daring (teks/unggah berkas/tautan video).

### FR-6 Bank Soal
- Atribut soal: BAB, TP, indikator KKTP, level kognitif **C1–C6**, tingkat kesulitan, tipe, pembahasan, tag penggunaan (`ulangan_harian`, `semester`, `tka`), sumber (`manual`/`ai`/`import`), status (`draft`/`approved`).
- **Generate AI:** pilih BAB/TP, jumlah, distribusi C1–C6, tipe → pratinjau → edit → simpan.
- **Import Excel (.xlsx) dan Word (.docx)** dengan template resmi yang dapat diunduh, validasi baris per baris, pratinjau error, lalu commit.
- Perakit paket: otomatis (kisi-kisi: jumlah per BAB × level) atau manual; acak; ekspor DOCX/PDF + kunci jawaban.
- Ulangan harian (per BAB), ulangan semester (multi-BAB), simulasi TKA (waktu & format khusus).
- Deteksi soal duplikat sederhana.

### FR-7 Asesmen Daring
- Guru menjadwalkan ulangan: kelas, waktu mulai/selesai, durasi, token akses, acak.
- Murid mengerjakan dengan timer & simpan otomatis; penilaian otomatis (PG) + penilaian manual (uraian).
- Analisis butir soal (tingkat kesukaran, daya beda sederhana) dan rekap nilai (ekspor Excel).

### FR-8 Dashboard Admin
- **Pengaturan Menu/Fitur (Feature Toggle):** aktif/nonaktif per menu (Materi, Video, Kuis, Game, LKPD, RPM, Bank Soal, Ulangan, TKA, Leaderboard) pada level: global, fase, BAB, atau role. Perubahan berlaku seketika.
- **Manajemen Pengguna:** daftar guru & murid (CRUD, import Excel massal, reset password, nonaktifkan).
- **Hak akses:** guru ↔ mapel/fase/kelas; murid ↔ kelas ↔ fase/BAB. Pengaturan masa berlaku akses.
- Kelola kelas & tahun ajaran.
- Log aktivitas, statistik penggunaan, backup/ekspor data.

### FR-9 Progres & Pelaporan
- Progres murid per BAB (materi dibaca, kuis, game, LKPD).
- Rapor ketercapaian KKTP; rekap kelas untuk guru.

## 6. Kebutuhan Non-Fungsional
- **Responsif** (HP murid prioritas), ringan di jaringan lambat, dapat di-install sebagai PWA.
- **Keamanan:** login berbasis role, RLS di database, kunci API AI hanya di server, rate limit, validasi file unggahan.
- **Privasi:** data murid minimal (nama, NIS, kelas); sesuai UU PDP.
- **Aksesibilitas:** kontras, alt text, subtitle video, ukuran font dapat diubah.
- **Performa:** halaman utama < 3 dtk (4G); dukungan ≥ 500 pengguna serentak untuk ulangan.
- **Konten AI:** semua hasil AI berstatus draft sampai disetujui guru; label "dibuat dengan bantuan AI".
- **Hak cipta:** setiap gambar/video wajib punya sumber & lisensi.

## 7. Alur Pengguna Utama
1. **Guru:** Login → pilih BAB → tinjau draft TP/ATP/KKTP → edit materi → tambah video/gambar → generate kuis/soal → publish.
2. **Murid:** Login → pilih Fase/BAB → baca materi → tonton video → kuis → game → LKPD → refleksi → lihat progres.
3. **Ulangan:** Guru rakit paket dari bank soal → jadwalkan → murid mengerjakan → nilai otomatis → analisis.
4. **Admin:** Dashboard → Pengaturan Menu → toggle → simpan; Pengguna → tambah/import → atur hak akses.

## 8. Peta Konten Awal (Draft untuk Divalidasi Guru)

Contoh TP/KKTP berikut dibuat dari CP dan **harus divalidasi guru**; sistem menyimpannya sebagai draft.

| BAB | Contoh TP | Contoh indikator KKTP |
|---|---|---|
| E1 | Murid mampu menganalisis profesi dan level pekerjaan di industri radio, TV, dan film | Menyebutkan ≥5 profesi + tugas; membedakan level pekerjaan; menerapkan K3 dasar |
| E2 | Murid mampu menganalisis perkembangan media analog ke digital serta regulasinya | Menjelaskan perbedaan FTA vs OTT; menunjukkan pasal UU ITE relevan; menilai peran AI |
| E3 | Murid mampu mengoperasikan peralatan audio visual dasar | Mengatur eksposur dasar; memilih mikrofon yang tepat; melakukan framing dasar |
| E4 | Murid mampu menyimulasikan tahapan produksi audio visual sederhana sesuai POS | Menyusun rencana produksi; menghasilkan video pendek; evaluasi hasil |
| F1 | Murid mampu menyusun rencana produksi program TV sesuai target penonton | Menentukan format & pola acara; membuat jadwal & anggaran sederhana |
| F2 | Murid mampu menulis naskah jurnalistik dan artistik | Menggunakan format naskah benar; struktur lengkap |
| F3 | Murid mampu menerapkan penyutradaraan single & multicamera | Menganalisis naskah; memberi aba-aba benar; membuat shot list |
| F4 | Murid mampu mengoperasikan kamera dan pencahayaan sesuai K3LH | Framing tepat; menata lampu 3 titik; menggunakan camera support |
| F5 | Murid mampu mengoperasikan peralatan tata suara | Melakukan blocking mikrofon; mengatur level sound recorder |
| F6 | Murid mampu merancang tata artistik dari breakdown naskah | Membuat floorplan & sketsa set; daftar properti & wardrobe |
| F7 | Murid mampu mengedit audio dan video sesuai naskah | Mengelola file; menyusun timeline; membuat dokumen kerja editing |
| F8 | Murid mampu merencanakan dan menayangkan karya secara online | Membuat poster digital; menerapkan regulasi media sosial saat unggah |

## 9. Rilis Bertahap

| Fase | Isi | Estimasi |
|---|---|---|
| **MVP** | Auth & role, struktur Fase/BAB/CP/TP/KKTP, materi + video + gambar, kuis, dashboard admin (toggle + pengguna) | 4–6 minggu |
| **Rilis 2** | Bank soal (manual, AI, import), paket ulangan, penilaian daring | 3–4 minggu |
| **Rilis 3** | Game, LKPD & RPM generator + ekspor, progres & analitik | 3–4 minggu |
| **Rilis 4** | PWA offline, simulasi TKA, penambahan mapel (Produksi Film, dll.) | 2–3 minggu |

## 10. Risiko & Mitigasi
| Risiko | Mitigasi |
|---|---|
| Halusinasi/ketidaktepatan konten AI | Status draft, review guru, tombol "lapor kesalahan" |
| Koneksi murid lambat | PWA, kompresi gambar, video eksternal, lazy load |
| Kebocoran soal ulangan | Soal hanya dikirim saat ujian, acak, token, RLS |
| Hak cipta media | Wajib kolom sumber/lisensi, prioritaskan karya sendiri/CC |
| CP berubah | Versi CP & BAB; arsip tidak menghapus nilai lama |

## 11. Pertanyaan Terbuka
1. Satu sekolah atau multi-sekolah?
2. Login murid: NIS+password, atau Google Workspace sekolah?
3. Hosting: cloud (Vercel + Supabase) atau server sekolah?
4. Apakah Produksi Film (Fase F) akan dimasukkan pada rilis berikutnya? Unggah file CP lengkapnya.
