# TECH — Spesifikasi Teknis

## 1. Stack yang Direkomendasikan

| Lapisan | Pilihan | Alasan |
|---|---|---|
| Framework | **Next.js 14+ (App Router) + TypeScript** | Full-stack, SSR, API route dalam satu repo |
| UI | **Tailwind CSS + shadcn/ui**, ikon lucide-react | Cepat, konsisten, responsif |
| Database | **PostgreSQL (Supabase)** | RLS, relasional, JSONB untuk konten fleksibel |
| Auth | **Supabase Auth** (email/NIS+password, opsional Google) | Role via tabel `profiles` |
| Storage | **Supabase Storage** (gambar, dokumen, unggahan LKPD) | Bucket publik & privat |
| Video | YouTube unlisted (embed) **atau** Storage/Cloudflare Stream | Hemat bandwidth |
| AI | **Claude API** (server-side saja) | Generate soal, materi, RPM, LKPD |
| Import/Export | `exceljs` (xlsx), `mammoth` (docx → HTML), `docx` (buat DOCX), `pdf-lib`/Puppeteer (PDF) | Template import & ekspor |
| Validasi | **Zod** | Skema bersama client/server |
| State & data | TanStack Query, React Hook Form | |
| Editor | **TipTap** | Rich text materi |
| Game | Komponen React + `dnd-kit` (drag & drop) + Framer Motion | Game dikonfigurasi via JSON |
| Grafik | Recharts | Dashboard analitik |
| PWA | `next-pwa` / Serwist | Instal di HP, cache materi |
| Hosting | Vercel (app) + Supabase (DB/Storage) | Mudah, murah untuk skala sekolah |
| Test | Vitest, Playwright (E2E), Zod schema test | |
| CI | GitHub Actions: lint, typecheck, test | |

Alternatif tanpa cloud: Docker Compose (Next.js + Postgres + MinIO) di server sekolah.

## 2. Arsitektur

```
Browser (PWA)
   │  HTTPS
Next.js (Vercel)
   ├─ Server Components / Route Handlers /api/*
   │     ├─ Auth guard + feature-flag guard
   │     ├─ AI service  ──► Claude API
   │     └─ Import/Export service (xlsx/docx/pdf)
   └─ Supabase (Postgres + RLS + Storage + Auth)
```

Prinsip: logika sensitif (AI key, penilaian, kunci jawaban) hanya di server. Klien tidak pernah menerima `correct_answer` sebelum jawaban dikirim pada mode ulangan.

## 3. Struktur Proyek

```
/app
  /(auth)/login
  /(student)/belajar/[fase]/[bab]/{materi,video,kuis,game,lkpd}
  /(teacher)/guru/{konten,bank-soal,paket,ulangan,nilai,rpm,lkpd}
  /(admin)/admin/{menu,pengguna,kelas,akses,log,pengaturan}
  /api/{ai,import,export,assessment,flags}
/components   (ui, editor, games, quiz)
/lib          (supabase, auth, flags, ai, importers, exporters, schemas)
/supabase     (migrations, seed)
/docs         (prd.md, tech.md, database.md, agent.prd.md)
/templates    (template-soal.xlsx, template-soal.docx, template-pengguna.xlsx)
```

## 4. Hak Akses & Feature Toggle

### 4.1 Role
`super_admin`, `guru`, `murid`. Middleware Next.js memeriksa sesi → role → rute. RLS di database sebagai lapis kedua.

### 4.2 Feature Flag
Tabel `feature_flags` (lihat database.md) dengan cakupan `global | fase | bab | role`. Resolusi (paling spesifik menang):

```ts
// lib/flags.ts
// urutan prioritas: bab > fase > role > global ; default = enabled
export async function isEnabled(key: string, ctx: {role: Role; fase?: string; babId?: string}) {...}
```

- Menu navigasi di-render dari daftar flag (server) sehingga yang nonaktif tidak tampil.
- Route handler dan halaman memanggil `requireFeature(key)`; jika nonaktif → 403/redirect.
- Cache 30 detik + `revalidateTag('flags')` setelah admin menyimpan.

Kunci fitur baku: `materi`, `video`, `galeri`, `kuis`, `game`, `lkpd`, `rpm`, `bank_soal`, `ulangan`, `tka`, `leaderboard`, `progres`.

### 4.3 Akses Konten
`access_grants` menentukan murid/kelas/guru mana boleh membuka fase/BAB. Aturan: murid melihat BAB bila (a) kelasnya diberi akses, dan (b) BAB berstatus `published`, dan (c) flag aktif.

## 5. Modul AI (Claude API)

- Endpoint: `POST /api/ai/questions`, `/api/ai/material`, `/api/ai/rpm`, `/api/ai/lkpd`, `/api/ai/tp-atp-kktp`.
- Gunakan model Claude terbaru yang tersedia; konfigurasi lewat env `AI_MODEL`.
- Output **JSON terstruktur**, divalidasi Zod; bila gagal → retry sekali lalu tampilkan error.
- Setiap hasil disimpan di `ai_generation_jobs` (prompt, parameter, hasil, status) dan menjadi **draft**.
- Batasi: rate limit per guru, maksimum 30 soal/permintaan, timeout, log biaya.
- Konteks wajib dikirim: CP, TP, KKTP, BAB, level C1–C6, tipe soal, bahasa Indonesia, tingkat kelas (X/XI/XII sesuai fase).

Skema keluaran soal:

```json
{
  "questions": [{
    "type": "pg",
    "bloom": "C3",
    "difficulty": "sedang",
    "stem": "…",
    "options": [{"key":"A","text":"…"},{"key":"B","text":"…"},{"key":"C","text":"…"},{"key":"D","text":"…"}],
    "answer": ["B"],
    "explanation": "…",
    "kktp_hint": "…"
  }]
}
```

Panduan kata kerja operasional Bloom disisipkan dalam prompt: C1 mengingat, C2 memahami, C3 menerapkan, C4 menganalisis, C5 mengevaluasi, C6 mencipta.

## 6. Import Soal (Excel & Word)

### 6.1 Template Excel (`template-soal.xlsx`, sheet `Soal`)

| Kolom | Isi | Wajib |
|---|---|---|
| kode_bab | contoh `E1`, `F4` | ✔ |
| tipe | `pg` / `pg_kompleks` / `benar_salah` / `menjodohkan` / `isian` / `uraian` | ✔ |
| level_bloom | `C1`–`C6` | ✔ |
| kesulitan | `mudah` / `sedang` / `sulit` | |
| soal | teks pertanyaan | ✔ |
| opsi_a … opsi_e | teks opsi | PG |
| kunci | `B` atau `A,C` atau teks isian | ✔ |
| pembahasan | teks | |
| tag_penggunaan | `ulangan_harian;semester;tka` | |
| kode_tp | contoh `E1.1` | |
| gambar_url | opsional | |

Sheet `Petunjuk` berisi aturan & contoh; sheet `Referensi` berisi daftar kode BAB/TP yang valid.

### 6.2 Template Word (`template-soal.docx`)
Format baku per soal (parser berbasis pola teks):

```
[BAB: F4] [TIPE: PG] [BLOOM: C3] [KESULITAN: sedang]
1. Teks pertanyaan …
A. …
B. …
C. …
D. …
KUNCI: B
PEMBAHASAN: …
---
```

Gambar di dalam docx diekstrak oleh `mammoth` dan disimpan ke Storage.

### 6.3 Alur Import
1. Unggah → simpan ke bucket privat → buat `import_jobs` (status `uploaded`).
2. Parse → validasi Zod per baris → hasil `preview` (valid, peringatan, error + nomor baris).
3. Guru memperbaiki/mengabaikan baris error → **Commit** (transaksi) → soal masuk status `draft` atau `approved` (pilihan guru).
4. Deteksi duplikat (hash teks soal ter-normalisasi) → tawarkan lewati/timpa.
5. Laporan akhir dapat diunduh.

Batas: 5 MB, 500 soal per berkas.

## 7. Ekspor

| Keluaran | Cara |
|---|---|
| Paket soal + kunci (DOCX/PDF) | `docx` / Puppeteer dari HTML templat |
| RPM, LKPD (DOCX/PDF) | Templat docx berisi placeholder |
| Rekap nilai | `exceljs` |
| Daftar pengguna/template pengguna | `exceljs` |

## 8. Penilaian & Ulangan

- Mulai ulangan: server membuat `attempt`, menentukan urutan acak (seed disimpan), mengirim soal **tanpa kunci**.
- Simpan jawaban tiap perubahan (debounce) via `PATCH /api/assessment/attempt/:id`.
- Kirim: server menghitung skor PG/BS/isian (normalisasi huruf & spasi); uraian ditandai `needs_review`.
- Timer divalidasi di server (`started_at + duration`).
- Anti-curang ringan: token ujian, acak soal/opsi, catat perpindahan tab (opsional, hanya log).

## 9. Game (Konfigurasi JSON)

```json
{
  "type": "matching",
  "title": "Alat dan Fungsinya",
  "pairs": [{"left":"Mic condenser","right":"Studio, sensitif"},
            {"left":"Mic dynamic","right":"Lapangan, tahan banting"}],
  "timeLimit": 90,
  "scoring": {"correct": 10, "wrong": -2}
}
```

Tipe: `matching`, `flashcard`, `sequencing`, `crossword`, `wordsearch`, `hotspot`, `speed_quiz`, `scenario`. Skor disimpan ke `game_attempts`. AI dapat menghasilkan konfigurasi JSON dari materi BAB.

## 10. Keamanan

- Env rahasia hanya server: `SUPABASE_SERVICE_ROLE_KEY`, `ANTHROPIC_API_KEY`.
- RLS aktif di semua tabel; murid hanya baca data miliknya.
- Sanitasi HTML materi (DOMPurify) dan whitelist embed (YouTube, Storage).
- Validasi MIME + ukuran file; pindai ekstensi ganda.
- Rate limit (Upstash/Vercel) pada login, AI, import.
- Audit log untuk perubahan akses dan toggle fitur.
- Backup harian database; ekspor manual dari admin.

## 11. Performa & PWA
- Gambar: `next/image`, WebP, lebar maksimum 1280 px.
- Lazy load video & game; kode game di-split per tipe.
- Service worker: cache materi teks & gambar BAB yang pernah dibuka.
- Indeks DB sesuai database.md.

## 12. Variabel Lingkungan

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ANTHROPIC_API_KEY=
AI_MODEL=
APP_BASE_URL=
MAX_IMPORT_ROWS=500
```

## 13. Standar Kode
- TypeScript strict, ESLint + Prettier, commit konvensional.
- Skema Zod tunggal di `/lib/schemas` dipakai form, API, dan importer.
- Setiap fitur: unit test untuk validasi/penilaian, E2E untuk alur kritis (login, kuis, ulangan, import, toggle).

## 14. Kriteria Penerimaan Teknis
- [ ] Toggle fitur memengaruhi menu & akses API dalam ≤ 30 dtk.
- [ ] Murid tidak dapat memperoleh kunci jawaban lewat network inspector saat ulangan.
- [ ] Import 200 soal xlsx selesai < 15 dtk dengan laporan error per baris.
- [ ] Semua hasil AI lolos validasi Zod atau gagal dengan pesan jelas.
- [ ] Lighthouse mobile: Performance ≥ 80, Accessibility ≥ 90.
