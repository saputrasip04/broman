# DATABASE — Skema PostgreSQL (Supabase)

Konvensi: `uuid` primary key (`gen_random_uuid()`), `created_at`/`updated_at` timestamptz, nama tabel snake_case. Semua tabel mengaktifkan **RLS**.

## 1. Diagram Relasi (ringkas)

```
profiles ─┬─ class_members ── classes
          ├─ access_grants
          └─ attempts ── attempt_answers
fases ── mapel ── elemen(CP) ── babs ─┬─ tujuan_pembelajaran(TP) ── kktp
                                      ├─ atp_items
                                      ├─ materials ── media_assets
                                      ├─ quizzes / games
                                      ├─ lkpd / rpm
                                      └─ questions ── question_options
                                              └─ package_items ── packages ── assessments
feature_flags · import_jobs · ai_generation_jobs · progress · activity_logs
```

## 2. Enum

```sql
create type user_role as enum ('super_admin','guru','murid');
create type content_status as enum ('draft','published','archived');
create type question_type as enum ('pg','pg_kompleks','benar_salah','menjodohkan','isian','uraian');
create type bloom_level as enum ('C1','C2','C3','C4','C5','C6');
create type difficulty as enum ('mudah','sedang','sulit');
create type question_source as enum ('manual','ai','import');
create type usage_tag as enum ('ulangan_harian','semester','tka','latihan');
create type assessment_kind as enum ('ulangan_harian','ulangan_semester','tka','latihan');
create type attempt_status as enum ('in_progress','submitted','graded');
create type flag_scope as enum ('global','fase','bab','role');
create type media_kind as enum ('video','image','document','audio');
create type game_type as enum ('matching','flashcard','sequencing','crossword','wordsearch','hotspot','speed_quiz','scenario');
create type job_status as enum ('uploaded','parsed','committed','failed');
```

## 3. Pengguna, Kelas, Akses

```sql
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role user_role not null default 'murid',
  identifier text unique,              -- NIS / NIP
  email text,
  is_active boolean not null default true,
  last_login_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table academic_years (
  id uuid primary key default gen_random_uuid(),
  name text not null,                  -- 2026/2027
  semester smallint check (semester in (1,2)),
  is_active boolean default false
);

create table classes (
  id uuid primary key default gen_random_uuid(),
  academic_year_id uuid references academic_years(id),
  name text not null,                  -- X BCF 1, XI BCF 2
  fase_id uuid,                        -- FK ditambah setelah tabel fases
  homeroom_teacher_id uuid references profiles(id)
);

create table class_members (
  class_id uuid references classes(id) on delete cascade,
  user_id uuid references profiles(id) on delete cascade,
  member_role user_role not null,      -- guru pengampu atau murid
  primary key (class_id, user_id)
);

-- Hak akses ke konten (fase/mapel/BAB) untuk kelas atau pengguna
create table access_grants (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  class_id uuid references classes(id) on delete cascade,
  fase_id uuid, mapel_id uuid, bab_id uuid,    -- salah satu/lebih; null = semua di bawahnya
  can_edit boolean default false,              -- true untuk guru pengelola konten
  valid_from timestamptz default now(),
  valid_until timestamptz,
  granted_by uuid references profiles(id),
  check (user_id is not null or class_id is not null)
);
create index on access_grants (user_id);
create index on access_grants (class_id);
```

## 4. Kurikulum

```sql
create table fases (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,           -- 'E', 'F'
  name text not null,                  -- Fase E (Kelas X)
  grade_levels text[]                  -- {'X'} / {'XI','XII'}
);
alter table classes add foreign key (fase_id) references fases(id);

create table mapel (
  id uuid primary key default gen_random_uuid(),
  fase_id uuid not null references fases(id),
  code text unique not null,           -- DBP (Dasar BCF), PSPT
  name text not null,                  -- Dasar-dasar Broadcasting dan Perfilman
  rationale text, objectives jsonb,    -- rasional & tujuan dari CP
  cp_source_ref text                   -- 'V.48', 'VI.125'
);

-- Elemen = bagian CP; satu elemen → satu BAB
create table elemen (
  id uuid primary key default gen_random_uuid(),
  mapel_id uuid not null references mapel(id) on delete cascade,
  order_no int not null,
  name text not null,
  description text,                    -- deskripsi elemen
  cp_text text not null                -- capaian pembelajaran (kutipan)
);

create table babs (
  id uuid primary key default gen_random_uuid(),
  elemen_id uuid not null references elemen(id) on delete cascade,
  mapel_id uuid not null references mapel(id),
  code text unique not null,           -- E1..E4, F1..F8
  order_no int not null,
  title text not null,
  summary text,
  cover_image_url text,
  hours_allocation int,                -- JP
  status content_status default 'draft',
  version int default 1,
  created_by uuid references profiles(id),
  created_at timestamptz default now(), updated_at timestamptz default now()
);

create table tujuan_pembelajaran (
  id uuid primary key default gen_random_uuid(),
  bab_id uuid not null references babs(id) on delete cascade,
  code text not null,                  -- E1.1
  order_no int not null,
  statement text not null,
  profile_dimensions text[],           -- 8 dimensi profil lulusan
  unique (bab_id, code)
);

create table atp_items (
  id uuid primary key default gen_random_uuid(),
  bab_id uuid not null references babs(id) on delete cascade,
  tp_id uuid references tujuan_pembelajaran(id) on delete cascade,
  sequence_no int not null,
  learning_activity text,
  hours int,
  semester smallint
);

create table kktp (
  id uuid primary key default gen_random_uuid(),
  tp_id uuid not null references tujuan_pembelajaran(id) on delete cascade,
  indicator text not null,
  rubric jsonb,                        -- {"4":"…","3":"…","2":"…","1":"…"}
  passing_score int default 75
);
```

## 5. Materi & Media

```sql
create table media_assets (
  id uuid primary key default gen_random_uuid(),
  kind media_kind not null,
  title text,
  url text not null,                   -- storage path atau youtube url
  provider text,                       -- 'storage' | 'youtube'
  alt_text text, caption text,
  credit text, license text,           -- sumber & lisensi
  duration_sec int,
  chapters jsonb,                      -- [{"t":30,"label":"Intro"}]
  uploaded_by uuid references profiles(id),
  created_at timestamptz default now()
);

create table materials (
  id uuid primary key default gen_random_uuid(),
  bab_id uuid not null references babs(id) on delete cascade,
  tp_id uuid references tujuan_pembelajaran(id),
  order_no int not null,
  title text not null,
  body jsonb not null,                 -- dokumen TipTap/ProseMirror
  media_ids uuid[] default '{}',
  est_minutes int,
  status content_status default 'draft',
  ai_generated boolean default false,
  updated_at timestamptz default now()
);
create index on materials (bab_id, order_no);

create table games (
  id uuid primary key default gen_random_uuid(),
  bab_id uuid not null references babs(id) on delete cascade,
  type game_type not null,
  title text not null,
  config jsonb not null,               -- lihat tech.md §9
  status content_status default 'draft'
);

create table lkpd (
  id uuid primary key default gen_random_uuid(),
  bab_id uuid not null references babs(id) on delete cascade,
  tp_id uuid references tujuan_pembelajaran(id),
  title text not null,
  content jsonb not null,              -- tujuan, petunjuk, langkah, tabel isian, rubrik
  allow_online_submission boolean default true,
  status content_status default 'draft'
);

create table lkpd_submissions (
  id uuid primary key default gen_random_uuid(),
  lkpd_id uuid references lkpd(id) on delete cascade,
  student_id uuid references profiles(id),
  answers jsonb, file_urls text[],
  score numeric(5,2), feedback text,
  submitted_at timestamptz default now(),
  graded_by uuid references profiles(id)
);

create table rpm (
  id uuid primary key default gen_random_uuid(),
  bab_id uuid not null references babs(id) on delete cascade,
  title text not null,
  content jsonb not null,              -- identitas, kompetensi awal, dimensi profil, pengalaman belajar, asesmen, refleksi
  owner_id uuid references profiles(id),
  status content_status default 'draft',
  updated_at timestamptz default now()
);
```

## 6. Bank Soal

```sql
create table questions (
  id uuid primary key default gen_random_uuid(),
  bab_id uuid not null references babs(id),
  tp_id uuid references tujuan_pembelajaran(id),
  kktp_id uuid references kktp(id),
  type question_type not null,
  bloom bloom_level not null,
  difficulty difficulty default 'sedang',
  stem text not null,
  stem_media_id uuid references media_assets(id),
  answer_key jsonb not null,           -- ["B"] | ["A","C"] | {"pairs":[…]} | ["teks"] | rubrik
  explanation text,
  usage usage_tag[] default '{latihan}',
  source question_source default 'manual',
  status content_status default 'draft',  -- draft | published(approved)
  text_hash text,                      -- deteksi duplikat
  import_job_id uuid,
  ai_job_id uuid,
  created_by uuid references profiles(id),
  created_at timestamptz default now(), updated_at timestamptz default now()
);
create index on questions (bab_id, bloom, status);
create index on questions using gin (usage);
create unique index on questions (bab_id, text_hash) where text_hash is not null;

create table question_options (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references questions(id) on delete cascade,
  key text not null,                   -- A..E
  text text not null,
  media_id uuid references media_assets(id),
  order_no int
);

-- Paket soal: ulangan harian / semester / TKA
create table packages (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  kind assessment_kind not null,
  mapel_id uuid references mapel(id),
  blueprint jsonb,                     -- kisi-kisi: [{"bab":"F4","C1":2,"C3":3,…}]
  shuffle_questions boolean default true,
  shuffle_options boolean default true,
  created_by uuid references profiles(id)
);
create table package_items (
  package_id uuid references packages(id) on delete cascade,
  question_id uuid references questions(id),
  order_no int, points numeric(5,2) default 1,
  primary key (package_id, question_id)
);

-- Penjadwalan ulangan
create table assessments (
  id uuid primary key default gen_random_uuid(),
  package_id uuid not null references packages(id),
  class_id uuid references classes(id),
  start_at timestamptz, end_at timestamptz,
  duration_min int not null,
  access_token text,
  max_attempts int default 1,
  show_result_after boolean default true,
  status content_status default 'draft',
  created_by uuid references profiles(id)
);

create table attempts (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid references assessments(id),
  student_id uuid not null references profiles(id),
  status attempt_status default 'in_progress',
  seed int,                            -- urutan acak
  started_at timestamptz default now(),
  submitted_at timestamptz,
  score numeric(5,2)
);
create table attempt_answers (
  attempt_id uuid references attempts(id) on delete cascade,
  question_id uuid references questions(id),
  answer jsonb,
  is_correct boolean, points numeric(5,2),
  needs_review boolean default false,
  teacher_feedback text,
  primary key (attempt_id, question_id)
);

-- Kuis formatif per BAB (memakai soal bank atau soal khusus)
create table quizzes (
  id uuid primary key default gen_random_uuid(),
  bab_id uuid not null references babs(id) on delete cascade,
  title text not null,
  question_ids uuid[] not null,
  max_attempts int, show_explanation boolean default true,
  status content_status default 'draft'
);
create table quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid references quizzes(id), student_id uuid references profiles(id),
  score numeric(5,2), answers jsonb, created_at timestamptz default now()
);
create table game_attempts (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references games(id), student_id uuid references profiles(id),
  score int, duration_sec int, created_at timestamptz default now()
);
```

## 7. Admin, Import, AI, Progres, Log

```sql
create table feature_flags (
  id uuid primary key default gen_random_uuid(),
  key text not null,                   -- 'game','kuis','bank_soal',…
  scope flag_scope not null default 'global',
  scope_ref text,                      -- kode fase / id bab / nama role (null untuk global)
  is_enabled boolean not null default true,
  label text, description text,
  updated_by uuid references profiles(id),
  updated_at timestamptz default now(),
  unique (key, scope, scope_ref)
);

create table import_jobs (
  id uuid primary key default gen_random_uuid(),
  kind text not null,                  -- 'questions_xlsx' | 'questions_docx' | 'users_xlsx'
  file_path text not null,
  status job_status default 'uploaded',
  total_rows int, valid_rows int, error_rows int,
  report jsonb,                        -- [{"row":5,"error":"kunci tidak valid"}]
  created_by uuid references profiles(id),
  created_at timestamptz default now()
);

create table ai_generation_jobs (
  id uuid primary key default gen_random_uuid(),
  purpose text not null,               -- 'questions'|'material'|'rpm'|'lkpd'|'tp_atp_kktp'|'game'
  bab_id uuid references babs(id),
  params jsonb, prompt text, result jsonb,
  model text, tokens_in int, tokens_out int,
  status text default 'pending',       -- pending|ok|failed
  error text,
  created_by uuid references profiles(id),
  created_at timestamptz default now()
);

create table progress (
  student_id uuid references profiles(id) on delete cascade,
  bab_id uuid references babs(id) on delete cascade,
  material_id uuid references materials(id),
  item_type text,                      -- 'material'|'video'|'quiz'|'game'|'lkpd'
  item_id uuid,
  percent numeric(5,2), completed_at timestamptz,
  primary key (student_id, bab_id, item_type, item_id)
);
create table kktp_mastery (
  student_id uuid references profiles(id), kktp_id uuid references kktp(id),
  level smallint, evidence jsonb, updated_at timestamptz default now(),
  primary key (student_id, kktp_id)
);

create table activity_logs (
  id bigserial primary key,
  user_id uuid references profiles(id),
  action text not null,                -- 'toggle_flag','grant_access','import_commit'
  entity text, entity_id text, meta jsonb,
  created_at timestamptz default now()
);
```

## 8. Seed Awal

```sql
insert into fases (code,name,grade_levels) values
 ('E','Fase E',  '{X}'),
 ('F','Fase F',  '{XI,XII}');

-- Mapel (CP yang sudah dianalisis)
-- DBP  : Dasar-dasar Broadcasting dan Perfilman (V.48)  → 4 elemen/BAB: E1–E4
-- PSPT : Produksi dan Siaran Program Televisi (VI.125)  → 8 elemen/BAB: F1–F8
-- (Produksi Film VI.126: tambahkan setelah CP lengkap tersedia)

insert into feature_flags (key,label) values
 ('materi','Materi'),('video','Video'),('galeri','Galeri Gambar'),('kuis','Kuis'),
 ('game','Game'),('lkpd','LKPD'),('rpm','RPM (guru)'),('bank_soal','Bank Soal'),
 ('ulangan','Ulangan'),('tka','Simulasi TKA'),('leaderboard','Leaderboard'),('progres','Progres');
```

## 9. Kebijakan RLS (pola)

```sql
alter table questions enable row level security;

-- helper
create function auth_role() returns user_role language sql stable as
$$ select role from profiles where id = auth.uid() $$;

-- Guru/Admin: kelola soal pada BAB yang diizinkan
create policy q_staff_all on questions for all
  using (auth_role() in ('super_admin','guru'))
  with check (auth_role() in ('super_admin','guru'));

-- Murid: TIDAK memiliki akses langsung ke tabel questions.
-- Soal diberikan lewat route server (service role) tanpa answer_key.

-- Konten: murid hanya melihat yang published & diberi akses
create policy babs_student_read on babs for select
  using (status='published' and exists (
    select 1 from access_grants g
    left join class_members cm on cm.class_id = g.class_id and cm.user_id = auth.uid()
    where (g.user_id = auth.uid() or cm.user_id is not null)
      and (g.bab_id = babs.id or g.mapel_id = babs.mapel_id or (g.bab_id is null and g.mapel_id is null))
      and (g.valid_until is null or g.valid_until > now())));

-- Profil: pengguna membaca dirinya; admin membaca semua
create policy prof_self on profiles for select using (id = auth.uid() or auth_role()='super_admin');
-- Feature flags: semua pengguna login boleh membaca; hanya super_admin menulis
create policy ff_read  on feature_flags for select using (auth.uid() is not null);
create policy ff_write on feature_flags for all using (auth_role()='super_admin');
```

Terapkan pola serupa untuk `attempts`/`attempt_answers` (murid hanya miliknya; guru pemilik assessment), `lkpd_submissions`, `progress`.

## 10. Template Import Pengguna (`template-pengguna.xlsx`)

| Kolom | Contoh |
|---|---|
| nama_lengkap | Siti Aminah |
| role | murid / guru |
| identifier | NIS / NIP |
| email | opsional |
| kelas | X BCF 1 (murid) / daftar kelas dipisah `;` (guru) |
| password_awal | opsional; jika kosong dibuat otomatis |
