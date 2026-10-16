-- ============================================================================
-- 01_initial_schema.sql
-- BroMan: Media Pembelajaran Interaktif Broadcasting & Perfilman (Fase E & F)
-- Skema PostgreSQL / Supabase
-- ============================================================================

-- Ekstensi yang dibutuhkan
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

-- Skema auth untuk kompatibilitas lingkungan database lokal / non-Supabase cloud
create schema if not exists auth;
create table if not exists auth.users (
  id uuid primary key default gen_random_uuid(),
  email text,
  created_at timestamptz default now()
);

-- Fallback fungsi auth.uid() jika belum tersedia
create or replace function auth.uid() returns uuid language sql stable as $$
  select null::uuid;
$$;

-- 1. ENUM TYPES
do $$ begin
  create type user_role as enum ('super_admin', 'guru', 'murid');
exception when duplicate_object then null; end $$;

do $$ begin
  create type content_status as enum ('draft', 'published', 'archived');
exception when duplicate_object then null; end $$;

do $$ begin
  create type question_type as enum ('pg', 'pg_kompleks', 'benar_salah', 'menjodohkan', 'isian', 'uraian');
exception when duplicate_object then null; end $$;

do $$ begin
  create type bloom_level as enum ('C1', 'C2', 'C3', 'C4', 'C5', 'C6');
exception when duplicate_object then null; end $$;

do $$ begin
  create type difficulty as enum ('mudah', 'sedang', 'sulit');
exception when duplicate_object then null; end $$;

do $$ begin
  create type question_source as enum ('manual', 'ai', 'import');
exception when duplicate_object then null; end $$;

do $$ begin
  create type usage_tag as enum ('ulangan_harian', 'semester', 'tka', 'latihan');
exception when duplicate_object then null; end $$;

do $$ begin
  create type assessment_kind as enum ('ulangan_harian', 'ulangan_semester', 'tka', 'latihan');
exception when duplicate_object then null; end $$;

do $$ begin
  create type attempt_status as enum ('in_progress', 'submitted', 'graded');
exception when duplicate_object then null; end $$;

do $$ begin
  create type flag_scope as enum ('global', 'fase', 'bab', 'role');
exception when duplicate_object then null; end $$;

do $$ begin
  create type media_kind as enum ('video', 'image', 'document', 'audio');
exception when duplicate_object then null; end $$;

do $$ begin
  create type game_type as enum ('matching', 'flashcard', 'sequencing', 'crossword', 'wordsearch', 'hotspot', 'speed_quiz', 'scenario');
exception when duplicate_object then null; end $$;

do $$ begin
  create type job_status as enum ('uploaded', 'parsed', 'committed', 'failed');
exception when duplicate_object then null; end $$;

-- 2. PENGGUNA, KELAS, AKSES
create table if not exists profiles (
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

create table if not exists academic_years (
  id uuid primary key default gen_random_uuid(),
  name text not null,                  -- Contoh: 2026/2027
  semester smallint check (semester in (1, 2)),
  is_active boolean default false
);

create table if not exists fases (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,           -- 'E', 'F'
  name text not null,                  -- Fase E (Kelas X)
  grade_levels text[]                  -- {'X'} / {'XI','XII'}
);

create table if not exists classes (
  id uuid primary key default gen_random_uuid(),
  academic_year_id uuid references academic_years(id),
  name text not null,                  -- X BCF 1, XI BCF 2
  fase_id uuid references fases(id),
  homeroom_teacher_id uuid references profiles(id)
);

create table if not exists class_members (
  class_id uuid references classes(id) on delete cascade,
  user_id uuid references profiles(id) on delete cascade,
  member_role user_role not null,      -- guru pengampu atau murid
  primary key (class_id, user_id)
);

create table if not exists access_grants (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  class_id uuid references classes(id) on delete cascade,
  fase_id uuid references fases(id),
  mapel_id uuid,
  bab_id uuid,
  can_edit boolean default false,      -- true untuk guru pengelola konten
  valid_from timestamptz default now(),
  valid_until timestamptz,
  granted_by uuid references profiles(id),
  check (user_id is not null or class_id is not null)
);
create index if not exists idx_access_grants_user on access_grants (user_id);
create index if not exists idx_access_grants_class on access_grants (class_id);

-- 3. KURIKULUM (CP -> TP -> ATP -> KKTP)
create table if not exists mapel (
  id uuid primary key default gen_random_uuid(),
  fase_id uuid not null references fases(id),
  code text unique not null,           -- DBP (Dasar BCF), PSPT
  name text not null,                  -- Dasar-dasar Broadcasting dan Perfilman
  rationale text,
  objectives jsonb,
  cp_source_ref text                   -- 'V.48', 'VI.125'
);

create table if not exists elemen (
  id uuid primary key default gen_random_uuid(),
  mapel_id uuid not null references mapel(id) on delete cascade,
  order_no int not null,
  name text not null,
  description text,
  cp_text text not null
);

create table if not exists babs (
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
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists tujuan_pembelajaran (
  id uuid primary key default gen_random_uuid(),
  bab_id uuid not null references babs(id) on delete cascade,
  code text not null,                  -- E1.1
  order_no int not null,
  statement text not null,
  profile_dimensions text[],           -- 8 dimensi profil lulusan
  unique (bab_id, code)
);

create table if not exists atp_items (
  id uuid primary key default gen_random_uuid(),
  bab_id uuid not null references babs(id) on delete cascade,
  tp_id uuid references tujuan_pembelajaran(id) on delete cascade,
  sequence_no int not null,
  learning_activity text,
  hours int,
  semester smallint
);

create table if not exists kktp (
  id uuid primary key default gen_random_uuid(),
  tp_id uuid not null references tujuan_pembelajaran(id) on delete cascade,
  indicator text not null,
  rubric jsonb,                        -- {"4":"…","3":"…","2":"…","1":"…"}
  passing_score int default 75
);

-- 4. MEDIA & MATERI
create table if not exists media_assets (
  id uuid primary key default gen_random_uuid(),
  kind media_kind not null,
  title text,
  url text not null,                   -- storage path atau youtube url
  provider text,                       -- 'storage' | 'youtube'
  alt_text text,
  caption text,
  credit text,
  license text,
  duration_sec int,
  chapters jsonb,                      -- [{"t":30,"label":"Intro"}]
  uploaded_by uuid references profiles(id),
  created_at timestamptz default now()
);

create table if not exists materials (
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
create index if not exists idx_materials_bab on materials (bab_id, order_no);

create table if not exists games (
  id uuid primary key default gen_random_uuid(),
  bab_id uuid not null references babs(id) on delete cascade,
  type game_type not null,
  title text not null,
  config jsonb not null,               -- skema game
  status content_status default 'draft'
);

create table if not exists lkpd (
  id uuid primary key default gen_random_uuid(),
  bab_id uuid not null references babs(id) on delete cascade,
  tp_id uuid references tujuan_pembelajaran(id),
  title text not null,
  content jsonb not null,              -- tujuan, petunjuk, langkah, tabel isian, rubrik
  allow_online_submission boolean default true,
  status content_status default 'draft'
);

create table if not exists lkpd_submissions (
  id uuid primary key default gen_random_uuid(),
  lkpd_id uuid references lkpd(id) on delete cascade,
  student_id uuid references profiles(id),
  answers jsonb,
  file_urls text[],
  score numeric(5,2),
  feedback text,
  submitted_at timestamptz default now(),
  graded_by uuid references profiles(id)
);

create table if not exists rpm (
  id uuid primary key default gen_random_uuid(),
  bab_id uuid not null references babs(id) on delete cascade,
  title text not null,
  content jsonb not null,              -- identitas, kompetensi awal, refleksi, dll.
  owner_id uuid references profiles(id),
  status content_status default 'draft',
  updated_at timestamptz default now()
);

-- 5. BANK SOAL & ASESMEN
create table if not exists questions (
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
  status content_status default 'draft',  -- draft | published
  text_hash text,                      -- deteksi duplikat
  import_job_id uuid,
  ai_job_id uuid,
  created_by uuid references profiles(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index if not exists idx_questions_lookup on questions (bab_id, bloom, status);
create index if not exists idx_questions_usage on questions using gin (usage);
create unique index if not exists idx_questions_hash on questions (bab_id, text_hash) where text_hash is not null;

create table if not exists question_options (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references questions(id) on delete cascade,
  key text not null,                   -- A..E
  text text not null,
  media_id uuid references media_assets(id),
  order_no int
);

create table if not exists packages (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  kind assessment_kind not null,
  mapel_id uuid references mapel(id),
  blueprint jsonb,                     -- kisi-kisi: [{"bab":"F4","C1":2,"C3":3}]
  shuffle_questions boolean default true,
  shuffle_options boolean default true,
  created_by uuid references profiles(id)
);

create table if not exists package_items (
  package_id uuid references packages(id) on delete cascade,
  question_id uuid references questions(id),
  order_no int,
  points numeric(5,2) default 1,
  primary key (package_id, question_id)
);

create table if not exists assessments (
  id uuid primary key default gen_random_uuid(),
  package_id uuid not null references packages(id),
  class_id uuid references classes(id),
  start_at timestamptz,
  end_at timestamptz,
  duration_min int not null,
  access_token text,
  max_attempts int default 1,
  show_result_after boolean default true,
  status content_status default 'draft',
  created_by uuid references profiles(id)
);

create table if not exists attempts (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid references assessments(id),
  student_id uuid not null references profiles(id),
  status attempt_status default 'in_progress',
  seed int,                            -- urutan acak
  started_at timestamptz default now(),
  submitted_at timestamptz,
  score numeric(5,2)
);

create table if not exists attempt_answers (
  attempt_id uuid references attempts(id) on delete cascade,
  question_id uuid references questions(id),
  answer jsonb,
  is_correct boolean,
  points numeric(5,2),
  needs_review boolean default false,
  teacher_feedback text,
  primary key (attempt_id, question_id)
);

create table if not exists quizzes (
  id uuid primary key default gen_random_uuid(),
  bab_id uuid not null references babs(id) on delete cascade,
  title text not null,
  question_ids uuid[] not null,
  max_attempts int,
  show_explanation boolean default true,
  status content_status default 'draft'
);

create table if not exists quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid references quizzes(id),
  student_id uuid references profiles(id),
  score numeric(5,2),
  answers jsonb,
  created_at timestamptz default now()
);

create table if not exists game_attempts (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references games(id),
  student_id uuid references profiles(id),
  score int,
  duration_sec int,
  created_at timestamptz default now()
);

-- 6. FITUR FLAGS, JOBS, PROGRESS & LOGS
create table if not exists feature_flags (
  id uuid primary key default gen_random_uuid(),
  key text not null,                   -- 'game','kuis','bank_soal',…
  scope flag_scope not null default 'global',
  scope_ref text,                      -- kode fase / id bab / nama role (null untuk global)
  is_enabled boolean not null default true,
  label text,
  description text,
  updated_by uuid references profiles(id),
  updated_at timestamptz default now(),
  unique (key, scope, scope_ref)
);

create table if not exists import_jobs (
  id uuid primary key default gen_random_uuid(),
  kind text not null,                  -- 'questions_xlsx' | 'questions_docx' | 'users_xlsx'
  file_path text not null,
  status job_status default 'uploaded',
  total_rows int,
  valid_rows int,
  error_rows int,
  report jsonb,
  created_by uuid references profiles(id),
  created_at timestamptz default now()
);

create table if not exists ai_generation_jobs (
  id uuid primary key default gen_random_uuid(),
  purpose text not null,               -- 'questions'|'material'|'rpm'|'lkpd'|'tp_atp_kktp'|'game'
  bab_id uuid references babs(id),
  params jsonb,
  prompt text,
  result jsonb,
  model text,
  tokens_in int,
  tokens_out int,
  status text default 'pending',       -- pending|ok|failed
  error text,
  created_by uuid references profiles(id),
  created_at timestamptz default now()
);

create table if not exists progress (
  student_id uuid references profiles(id) on delete cascade,
  bab_id uuid references babs(id) on delete cascade,
  material_id uuid references materials(id),
  item_type text,                      -- 'material'|'video'|'quiz'|'game'|'lkpd'
  item_id uuid,
  percent numeric(5,2),
  completed_at timestamptz,
  primary key (student_id, bab_id, item_type, item_id)
);

create table if not exists kktp_mastery (
  student_id uuid references profiles(id),
  kktp_id uuid references kktp(id),
  level smallint,
  evidence jsonb,
  updated_at timestamptz default now(),
  primary key (student_id, kktp_id)
);

create table if not exists activity_logs (
  id bigserial primary key,
  user_id uuid references profiles(id),
  action text not null,                -- 'toggle_flag','grant_access','import_commit'
  entity text,
  entity_id text,
  meta jsonb,
  created_at timestamptz default now()
);

-- ============================================================================
-- 7. ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- Helper function: membaca role pengguna saat ini
create or replace function auth_role() returns user_role language sql stable as $$
  select coalesce((select role from profiles where id = auth.uid()), 'murid'::user_role);
$$;

-- Aktifkan RLS di semua tabel
alter table profiles enable row level security;
alter table academic_years enable row level security;
alter table fases enable row level security;
alter table classes enable row level security;
alter table class_members enable row level security;
alter table access_grants enable row level security;
alter table mapel enable row level security;
alter table elemen enable row level security;
alter table babs enable row level security;
alter table tujuan_pembelajaran enable row level security;
alter table atp_items enable row level security;
alter table kktp enable row level security;
alter table media_assets enable row level security;
alter table materials enable row level security;
alter table games enable row level security;
alter table lkpd enable row level security;
alter table lkpd_submissions enable row level security;
alter table rpm enable row level security;
alter table questions enable row level security;
alter table question_options enable row level security;
alter table packages enable row level security;
alter table package_items enable row level security;
alter table assessments enable row level security;
alter table attempts enable row level security;
alter table attempt_answers enable row level security;
alter table quizzes enable row level security;
alter table quiz_attempts enable row level security;
alter table game_attempts enable row level security;
alter table feature_flags enable row level security;
alter table import_jobs enable row level security;
alter table ai_generation_jobs enable row level security;
alter table progress enable row level security;
alter table kktp_mastery enable row level security;
alter table activity_logs enable row level security;

-- Policies: PROFILES
drop policy if exists prof_self on profiles;
create policy prof_self on profiles for select
  using (id = auth.uid() or auth_role() = 'super_admin');

drop policy if exists prof_admin_write on profiles;
create policy prof_admin_write on profiles for all
  using (auth_role() = 'super_admin')
  with check (auth_role() = 'super_admin');

-- Policies: FEATURE FLAGS
drop policy if exists ff_read on feature_flags;
create policy ff_read on feature_flags for select
  using (auth.uid() is not null);

drop policy if exists ff_write on feature_flags;
create policy ff_write on feature_flags for all
  using (auth_role() = 'super_admin')
  with check (auth_role() = 'super_admin');

-- Policies: KURIKULUM & BABS
drop policy if exists babs_student_read on babs;
create policy babs_student_read on babs for select
  using (
    auth_role() in ('super_admin', 'guru') or
    (
      status = 'published' and exists (
        select 1 from access_grants g
        left join class_members cm on cm.class_id = g.class_id and cm.user_id = auth.uid()
        where (g.user_id = auth.uid() or cm.user_id is not null)
          and (g.bab_id = babs.id or g.mapel_id = babs.mapel_id or (g.bab_id is null and g.mapel_id is null))
          and (g.valid_until is null or g.valid_until > now())
      )
    )
  );

drop policy if exists babs_staff_write on babs;
create policy babs_staff_write on babs for all
  using (auth_role() in ('super_admin', 'guru'))
  with check (auth_role() in ('super_admin', 'guru'));

-- Policies: QUESTIONS
-- Murid TIDAK memiliki akses select langsung ke questions. Pertanyaan dikirim via server API tanpa answer_key!
drop policy if exists q_staff_all on questions;
create policy q_staff_all on questions for all
  using (auth_role() in ('super_admin', 'guru'))
  with check (auth_role() in ('super_admin', 'guru'));

-- Policies: ATTEMPTS & PROGRESS
drop policy if exists attempts_student on attempts;
create policy attempts_student on attempts for select
  using (student_id = auth.uid() or auth_role() in ('super_admin', 'guru'));

drop policy if exists progress_student on progress;
create policy progress_student on progress for all
  using (student_id = auth.uid() or auth_role() in ('super_admin', 'guru'))
  with check (student_id = auth.uid() or auth_role() in ('super_admin', 'guru'));
