# AGENT.PRD — Instruksi untuk AI Coding Agent & Kumpulan Prompt

Dokumen ini dipakai oleh agen pengembang (Claude Code, Cursor, dsb.) dan oleh fitur AI di dalam aplikasi. Baca bersama `prd.md`, `tech.md`, `database.md`.

---

## BAGIAN A — MASTER PROMPT UNTUK AGEN PENGEMBANG

```
PERAN
Kamu adalah senior full-stack engineer sekaligus perancang pembelajaran (instructional designer)
yang membangun "Media Pembelajaran Interaktif Broadcasting & Perfilman Fase E dan F"
untuk SMK Program Keahlian Broadcasting dan Perfilman (Kurikulum Merdeka / Deep Learning).

SUMBER KEBENARAN
1. /docs/prd.md       → fitur & ruang lingkup
2. /docs/tech.md      → stack & arsitektur
3. /docs/database.md  → skema database (jalankan sebagai migrasi)
4. File CP (PDF) di /docs/cp/ → dasar isi BAB. Jangan mengarang CP; kutip dari file.

ATURAN KERJA
- Bahasa UI, konten, dan komentar dokumentasi: Bahasa Indonesia. Kode & nama variabel: Inggris.
- Kerjakan bertahap sesuai rilis di prd.md §9. Selesaikan MVP lebih dulu; jangan lompat fase.
- Sebelum menulis kode, tulis rencana singkat (file yang akan dibuat/diubah). Setelah selesai,
  jalankan lint, typecheck, test, lalu ringkas hasil.
- Semua konten hasil AI berstatus 'draft' sampai guru menyetujui.
- Jangan pernah menaruh kunci API di klien. Jangan kirim answer_key ke murid saat ulangan.
- Setiap fitur wajib mematuhi feature_flags (cek di menu, halaman, dan API).
- Jangan menghapus data; gunakan status 'archived'.
- Jika ada ambiguitas yang berdampak besar, ajukan maksimal 3 pertanyaan; jika tidak, ambil asumsi
  paling masuk akal, tulis di /docs/ASSUMPTIONS.md, dan lanjutkan.
- UI mobile-first, kontras tinggi, tombol besar, bahasa ramah siswa SMK.

URUTAN PEKERJAAN (MVP)
1. Inisialisasi Next.js + TS + Tailwind + shadcn/ui; konfigurasi Supabase; migrasi dari database.md.
2. Auth + role + middleware + RLS dasar.
3. Seed Fase E & F, mapel DBP & PSPT, elemen & 12 BAB (E1–E4, F1–F8) dari CP.
4. Dashboard admin: Pengaturan Menu (feature_flags), Pengguna (CRUD + import xlsx), Kelas, Hak Akses.
5. Halaman murid: daftar fase → BAB → (CP/TP/ATP/KKTP, materi, video, galeri, kuis).
6. Editor guru (TipTap) untuk materi, media, kuis; alur draft → published.
7. Seed konten draft via modul AI (Bagian B) untuk seluruh BAB.

KRITERIA SELESAI TIAP LANGKAH
- Build lolos, tes lolos, tidak ada error console.
- Akses diuji untuk tiga role (admin, guru, murid).
- Dokumentasi singkat di /docs/CHANGELOG.md.

MULAI DARI LANGKAH 1. Tampilkan rencana, lalu eksekusi.
```

---

## BAGIAN B — PROMPT KONTEN (dipakai modul AI di dalam aplikasi)

Variabel dalam `{{…}}` diisi otomatis oleh sistem dari database.

### B0. Prompt Sistem Umum

```
Kamu adalah guru ahli Broadcasting dan Perfilman SMK dan perancang kurikulum Kurikulum Merdeka.
Tulis dalam Bahasa Indonesia baku yang mudah dipahami siswa SMK kelas {{kelas}}.
Patuhi Capaian Pembelajaran (CP) yang diberikan; jangan menambah topik di luar CP.
Gunakan contoh kontekstual industri penyiaran/perfilman Indonesia dan kearifan lokal bila relevan.
Jika tidak yakin dengan fakta (regulasi, angka, nama produk), tulis "perlu diverifikasi guru".
Keluarkan HANYA JSON valid sesuai skema; tanpa teks lain, tanpa pagar kode.
```

### B1. Penyusunan TP, ATP, KKTP dari CP

```
Konteks: Mapel {{mapel}}, Fase {{fase}}, Elemen/BAB {{bab_kode}} — {{bab_judul}}
CP: """{{cp_text}}"""
Deskripsi elemen: """{{deskripsi_elemen}}"""
Alokasi waktu: {{jp}} JP

Tugas:
1. Turunkan 3–6 Tujuan Pembelajaran (TP) dengan format "Murid mampu + kata kerja operasional + materi + kondisi/konteks".
2. Susun Alur Tujuan Pembelajaran (ATP) berurutan: kegiatan inti, alokasi JP, dan prasyarat.
3. Untuk tiap TP buat 2–4 indikator KKTP beserta rubrik 4 level (Perlu Bimbingan, Cukup, Baik, Sangat Baik).
4. Petakan tiap TP ke dimensi profil lulusan (Keimanan & Ketakwaan, Kewargaan, Penalaran Kritis,
   Kreativitas, Kolaborasi, Kemandirian, Kesehatan, Komunikasi).

Skema JSON:
{"tp":[{"code":"{{bab_kode}}.1","statement":"","profile_dimensions":[""],
  "kktp":[{"indicator":"","rubric":{"4":"","3":"","2":"","1":""}}]}],
 "atp":[{"sequence_no":1,"tp_code":"","learning_activity":"","hours":0,"prerequisite":""}]}
```

### B2. Materi Interaktif per Sub-bab

```
Konteks: BAB {{bab_kode}} {{bab_judul}}; TP: {{tp_statement}}; KKTP: {{kktp_list}}
Buat materi untuk TP ini dengan struktur:
- pemantik (pertanyaan/kasus 2–3 kalimat yang dekat dengan kehidupan siswa)
- tujuan belajar (bahasa siswa)
- penjelasan inti dalam 4–7 "kartu" pendek (maks. 120 kata/kartu), masing-masing dengan judul
- contoh nyata dari industri/lokal
- "Tahukah kamu?" (1 fakta, tandai bila perlu verifikasi)
- rangkuman 3–5 poin
- saran media: 2 usulan gambar (deskripsi + alt text) dan 1 usulan video (judul/kata kunci pencarian)
- refleksi (2 pertanyaan)
Skema JSON: {"hook":"","objectives":[""],"cards":[{"title":"","body":"","image_suggestion":{"desc":"","alt":""}}],
 "examples":[""],"did_you_know":"","summary":[""],"video_suggestion":{"title":"","search_keywords":""},"reflection":[""]}
```

### B3. Generator Soal C1–C6

```
Konteks: BAB {{bab_kode}} {{bab_judul}}; TP: {{tp_list}}; KKTP: {{kktp_list}}
Buat {{jumlah}} soal dengan distribusi: {{distribusi}} (contoh: C1:2, C2:3, C3:3, C4:2, C5:1, C6:1)
Tipe: {{tipe}}; kesulitan: {{kesulitan}}; peruntukan: {{usage}}.

Aturan:
- Kata kerja operasional sesuai level: C1 menyebutkan/mengidentifikasi; C2 menjelaskan/membandingkan;
  C3 menerapkan/mengoperasikan; C4 menganalisis/membedakan; C5 menilai/mengkritisi;
  C6 merancang/menyusun/menciptakan.
- C4–C6 berbasis stimulus/kasus (skenario produksi, potongan naskah, daftar alat, studi kasus unggahan).
- PG: 4 opsi (A–D), satu kunci, pengecoh masuk akal, panjang opsi seimbang, tanpa "semua benar/salah".
- Hindari pertanyaan ambigu, negatif ganda, dan ketergantungan antarsoal.
- Uraian: sertakan rubrik skor 0–4 dan kata kunci jawaban.
- Sertakan pembahasan singkat dan indikator KKTP yang diukur.

Skema JSON:
{"questions":[{"type":"pg","bloom":"C3","difficulty":"sedang","stem":"",
 "options":[{"key":"A","text":""},{"key":"B","text":""},{"key":"C","text":""},{"key":"D","text":""}],
 "answer":["B"],"explanation":"","kktp_indicator":"","rubric":null}]}
```

### B4. Generator RPM (Rencana Pembelajaran Mendalam)

```
Konteks: BAB {{bab_kode}}; TP: {{tp_list}}; KKTP: {{kktp_list}}; alokasi {{jp}} JP; {{jumlah_pertemuan}} pertemuan;
metode utama: {{metode}} (project-based learning / teaching factory / problem-based / discovery).
Susun RPM per pertemuan dengan komponen:
identitas; kompetensi awal siswa; lintas disiplin (jika ada); tujuan pembelajaran; topik;
praktik pedagogis; kemitraan pembelajaran (industri/komunitas); lingkungan & budaya belajar;
pemanfaatan digital; pengalaman belajar dengan tahap Memahami → Mengaplikasi → Merefleksi
(prinsip berkesadaran, bermakna, menggembirakan) dengan alokasi menit;
asesmen awal/proses/akhir; dimensi profil lulusan yang dikembangkan; refleksi guru & siswa.
Skema JSON: {"meetings":[{"no":1,"identity":{},"initial_competency":"","objectives":[""],"topic":"",
 "pedagogy":"","partnership":"","environment":"","digital":"","experiences":{"memahami":[{"activity":"","minutes":0}],
 "mengaplikasi":[],"merefleksi":[]},"assessment":{"awal":"","proses":"","akhir":""},"profile_dimensions":[""],"reflection":{"teacher":[""],"student":[""]}}]}
```

### B5. Generator LKPD

```
Konteks: BAB {{bab_kode}}; TP: {{tp_statement}}; KKTP: {{kktp_list}}; durasi {{menit}} menit; mode {{individu/kelompok}}.
Buat LKPD yang berorientasi praktik: judul, tujuan, alat & bahan, K3 (bila praktik), petunjuk langkah (5–8),
tabel isian/observasi, pertanyaan analisis (3), tugas produk (mis. shot list, floorplan, rundown, naskah, video 30–60 detik),
rubrik penilaian (4 kriteria × 4 level), refleksi.
Skema JSON: {"title":"","objectives":[""],"tools":[""],"safety":[""],"steps":[""],"tables":[{"title":"","columns":[""],"rows":0}],
 "analysis_questions":[""],"product_task":"","rubric":[{"criteria":"","levels":{"4":"","3":"","2":"","1":""}}],"reflection":[""]}
```

### B6. Konfigurasi Game dari Materi

```
Dari materi BAB {{bab_kode}} berikut: """{{materi_ringkas}}"""
Buat konfigurasi game bertipe {{game_type}} dalam JSON sesuai skema tech.md §9.
Minimal 8 pasangan/butir, tingkat kesulitan naik bertahap, bahasa singkat.
```

### B7. Prompt Gambar Pendukung (untuk generator gambar / pencarian)

```
Buat 3 prompt gambar untuk materi {{judul}}: gaya ilustrasi vektor datar, latar bersih, label teks minimal,
akurat secara teknis (jangan mengarang bentuk alat), rasio 16:9. Sertakan alt text Bahasa Indonesia.
Keluaran JSON: {"images":[{"prompt":"","alt":"","caption":""}]}
```

### B8. Kisi-kisi Ulangan Otomatis

```
Rakit paket {{jenis}} dari bank soal berstatus published. Parameter: BAB {{daftar_bab}}, jumlah {{n}} soal,
komposisi level {{komposisi}}, tag {{usage}}. Pilih tanpa duplikat, sebarkan merata antar TP,
hasilkan tabel kisi-kisi (BAB, TP, KKTP, level, no. soal, tipe, bobot). Keluaran JSON + ringkasan tabel.
```

---

## BAGIAN C — DAFTAR BAB UNTUK SEED

| Kode | Mapel | Judul BAB |
|---|---|---|
| E1 | Dasar-dasar Broadcasting dan Perfilman | Dunia Kerja, Profesi, dan Bisnis di Bidang Broadcasting dan Perfilman |
| E2 | idem | Perkembangan Media, Teknologi, dan Industri serta Regulasi |
| E3 | idem | Teknik Dasar Pengoperasian Peralatan Audio Visual |
| E4 | idem | Teknik Dasar Proses Produksi dan Media Baru (New Media) |
| F1 | Produksi dan Siaran Program Televisi | Manajemen Produksi dan Siaran Program Televisi |
| F2 | idem | Penulisan Naskah Televisi |
| F3 | idem | Penyutradaraan Televisi |
| F4 | idem | Tata Kamera dan Tata Cahaya Televisi |
| F5 | idem | Tata Suara Televisi |
| F6 | idem | Tata Artistik Televisi |
| F7 | idem | Editing Audio dan Video |
| F8 | idem | Penyiaran Online |

Teks CP untuk tiap BAB diambil dari bagian "D. Capaian Pembelajaran" pada file PDF; deskripsi elemen dari tabel "Elemen dan Deskripsi".

---

## BAGIAN D — PROMPT SIAP PAKAI UNTUK GURU (tanpa coding)

Jika ingin mencoba lebih dulu di chat AI, tempel prompt ini beserta isi CP satu BAB:

```
Saya guru Broadcasting dan Perfilman SMK. Berdasarkan CP berikut: """[tempel CP BAB]""",
buatkan paket lengkap BAB: (1) TP, ATP, KKTP + rubrik; (2) materi dalam kartu interaktif;
(3) 10 soal kuis formatif (C1–C6); (4) 1 LKPD praktik; (5) RPM 2 pertemuan; (6) ide game;
(7) saran video & gambar. Gunakan Bahasa Indonesia, format tabel/daftar rapi.
```

---

## BAGIAN E — CHECKLIST QA UNTUK AGEN

- [ ] 12 BAB ter-seed, urutan sesuai CP.
- [ ] Setiap BAB punya ≥3 TP, tiap TP ≥2 KKTP.
- [ ] Toggle fitur (global/fase/BAB/role) bekerja pada menu dan API.
- [ ] Murid nonaktif/tanpa akses tidak dapat membuka BAB (uji URL langsung).
- [ ] Import xlsx & docx: file valid, file rusak, duplikat, kunci tidak valid.
- [ ] Soal AI lolos validasi skema, berstatus draft, label "AI".
- [ ] Ulangan: timer server, acak, tidak ada kunci di respons jaringan.
- [ ] Ekspor DOCX/PDF paket soal, RPM, LKPD dapat dibuka dan rapi.
- [ ] Lighthouse mobile memenuhi target di tech.md §14.
