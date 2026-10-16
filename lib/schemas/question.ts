import { z } from "zod";

export const questionTypeSchema = z.enum([
  "pg",
  "pg_kompleks",
  "benar_salah",
  "menjodohkan",
  "isian",
  "uraian",
]);

export const bloomLevelSchema = z.enum(["C1", "C2", "C3", "C4", "C5", "C6"]);
export const difficultySchema = z.enum(["mudah", "sedang", "sulit"]);

export const questionOptionSchema = z.object({
  key: z.string().min(1),
  text: z.string().min(1, "Teks pilihan jawaban tidak boleh kosong"),
  media_id: z.string().uuid().optional().nullable(),
});

export const questionSchema = z.object({
  bab_id: z.string().min(1, "Kode/ID Elemen wajib dipilih"),
  tp_id: z.string().uuid().optional().nullable(),
  kktp_id: z.string().uuid().optional().nullable(),
  type: questionTypeSchema.default("pg"),
  bloom: bloomLevelSchema.default("C3"),
  difficulty: difficultySchema.default("sedang"),
  stem: z.string().min(5, "Teks soal minimal 5 karakter"),
  options: z.array(questionOptionSchema).optional(),
  answer_key: z.any(),
  explanation: z.string().optional().nullable(),
  usage: z
    .array(z.enum(["ulangan_harian", "semester", "tka", "latihan"]))
    .default(["latihan"]),
});

export type QuestionInput = z.infer<typeof questionSchema>;

// Skema untuk memvalidasi satu baris import Excel
export const importQuestionRowSchema = z.object({
  kode_bab: z.string().min(1, "Kolom kode_bab wajib diisi (misal: E1, F4)"),
  tipe: questionTypeSchema.default("pg"),
  level_bloom: bloomLevelSchema.default("C3"),
  kesulitan: difficultySchema.optional().default("sedang"),
  soal: z.string().min(5, "Teks soal wajib diisi"),
  opsi_a: z.string().optional(),
  opsi_b: z.string().optional(),
  opsi_c: z.string().optional(),
  opsi_d: z.string().optional(),
  opsi_e: z.string().optional(),
  kunci: z.string().min(1, "Kunci jawaban wajib diisi"),
  pembahasan: z.string().optional(),
  tag_penggunaan: z.string().optional().default("latihan"),
  kode_tp: z.string().optional(),
});

export type ImportQuestionRow = z.infer<typeof importQuestionRowSchema>;

// Skema validasi output AI
export const aiGeneratedQuestionsSchema = z.object({
  questions: z.array(
    z.object({
      type: questionTypeSchema,
      bloom: bloomLevelSchema,
      difficulty: difficultySchema,
      stem: z.string().min(5),
      options: z.array(
        z.object({
          key: z.string(),
          text: z.string(),
        })
      ),
      answer: z.array(z.string()),
      explanation: z.string(),
      kktp_indicator: z.string().optional(),
      rubric: z.record(z.string(), z.string()).optional().nullable(),
    })
  ),
});
