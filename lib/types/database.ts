export type UserRole = "super_admin" | "guru" | "murid";
export type ContentStatus = "draft" | "published" | "archived";
export type QuestionType =
  | "pg"
  | "pg_kompleks"
  | "benar_salah"
  | "menjodohkan"
  | "isian"
  | "uraian";
export type BloomLevel = "C1" | "C2" | "C3" | "C4" | "C5" | "C6";
export type Difficulty = "mudah" | "sedang" | "sulit";
export type QuestionSource = "manual" | "ai" | "import";
export type UsageTag = "ulangan_harian" | "semester" | "tka" | "latihan";
export type AssessmentKind = "ulangan_harian" | "ulangan_semester" | "tka" | "latihan";
export type AttemptStatus = "in_progress" | "submitted" | "graded";
export type FlagScope = "global" | "fase" | "bab" | "role";
export type MediaKind = "video" | "image" | "document" | "audio";
export type GameType =
  | "matching"
  | "flashcard"
  | "sequencing"
  | "crossword"
  | "wordsearch"
  | "hotspot"
  | "speed_quiz"
  | "scenario";
export type JobStatus = "uploaded" | "parsed" | "committed" | "failed";

export interface Profile {
  id: string;
  full_name: string;
  role: UserRole;
  identifier?: string | null;
  email?: string | null;
  is_active: boolean;
  last_login_at?: string | null;
  created_at: string;
  updated_at: string;
}

export interface Fase {
  id: string;
  code: string;
  name: string;
  grade_levels: string[];
}

export interface Mapel {
  id: string;
  fase_id: string;
  code: string;
  name: string;
  rationale?: string | null;
  objectives?: Record<string, unknown> | null;
  cp_source_ref?: string | null;
}

export interface Elemen {
  id: string;
  mapel_id: string;
  order_no: number;
  name: string;
  description?: string | null;
  cp_text: string;
}

export interface Bab {
  id: string;
  elemen_id: string;
  mapel_id: string;
  code: string;
  order_no: number;
  title: string;
  summary?: string | null;
  cover_image_url?: string | null;
  hours_allocation?: number | null;
  status: ContentStatus;
  version: number;
  created_by?: string | null;
  created_at: string;
  updated_at: string;
}

export interface TujuanPembelajaran {
  id: string;
  bab_id: string;
  code: string;
  order_no: number;
  statement: string;
  profile_dimensions?: string[] | null;
}

export interface KKTP {
  id: string;
  tp_id: string;
  indicator: string;
  rubric?: Record<string, string> | null;
  passing_score: number;
}

export interface Material {
  id: string;
  bab_id: string;
  tp_id?: string | null;
  order_no: number;
  title: string;
  body: Record<string, unknown>;
  media_ids: string[];
  est_minutes?: number | null;
  status: ContentStatus;
  ai_generated: boolean;
  updated_at: string;
}

export interface GameItem {
  id: string;
  bab_id: string;
  type: GameType;
  title: string;
  config: Record<string, unknown>;
  status: ContentStatus;
}

export interface FeatureFlag {
  id: string;
  key: string;
  scope: FlagScope;
  scope_ref?: string | null;
  is_enabled: boolean;
  label?: string | null;
  description?: string | null;
  updated_by?: string | null;
  updated_at: string;
}

export interface Question {
  id: string;
  bab_id: string;
  tp_id?: string | null;
  kktp_id?: string | null;
  type: QuestionType;
  bloom: BloomLevel;
  difficulty: Difficulty;
  stem: string;
  stem_media_id?: string | null;
  answer_key: unknown;
  explanation?: string | null;
  usage: UsageTag[];
  source: QuestionSource;
  status: ContentStatus;
  text_hash?: string | null;
  created_by?: string | null;
  created_at: string;
}

export interface QuestionOption {
  id: string;
  question_id: string;
  key: string;
  text: string;
  media_id?: string | null;
  order_no?: number | null;
}
