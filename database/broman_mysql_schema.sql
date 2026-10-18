-- ============================================================================
-- BroMan - Skema Database MySQL / MariaDB (XAMPP)
-- Database: broman_db
-- Dibuat untuk: Lingkungan Server Lokal SMK / XAMPP
-- ============================================================================

CREATE DATABASE IF NOT EXISTS `broman_db` 
  CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;

USE `broman_db`;

-- Nonaktifkan pengecekan foreign key sementara agar pembuatan tabel lancar
SET FOREIGN_KEY_CHECKS = 0;

-- 1. PROFILES (Pengguna Sistem: Super Admin, Guru, Murid)
DROP TABLE IF EXISTS `profiles`;
CREATE TABLE `profiles` (
  `id` VARCHAR(36) NOT NULL,
  `full_name` VARCHAR(150) NOT NULL,
  `role` ENUM('super_admin', 'guru', 'murid') NOT NULL DEFAULT 'murid',
  `identifier` VARCHAR(50) UNIQUE, -- NIS atau NIP
  `email` VARCHAR(120),
  `password_hash` VARCHAR(255),
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `last_login_at` DATETIME NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. ACADEMIC YEARS (Tahun Ajaran & Semester)
DROP TABLE IF EXISTS `academic_years`;
CREATE TABLE `academic_years` (
  `id` VARCHAR(36) NOT NULL,
  `name` VARCHAR(50) NOT NULL, -- Contoh: 2026/2027
  `semester` TINYINT CHECK (`semester` IN (1, 2)),
  `is_active` TINYINT(1) DEFAULT 0,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. FASES (Fase E & Fase F Kurikulum Merdeka)
DROP TABLE IF EXISTS `fases`;
CREATE TABLE `fases` (
  `id` VARCHAR(36) NOT NULL,
  `code` VARCHAR(10) NOT NULL UNIQUE, -- 'E', 'F'
  `name` VARCHAR(100) NOT NULL,       -- Fase E (Kelas X)
  `grade_levels` JSON,                -- ["X"] atau ["XI","XII"]
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. CLASSES (Rombongan Belajar)
DROP TABLE IF EXISTS `classes`;
CREATE TABLE `classes` (
  `id` VARCHAR(36) NOT NULL,
  `academic_year_id` VARCHAR(36),
  `name` VARCHAR(80) NOT NULL,        -- X BCF 1, XI BCF 2
  `fase_id` VARCHAR(36),
  `homeroom_teacher_id` VARCHAR(36),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`academic_year_id`) REFERENCES `academic_years`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`fase_id`) REFERENCES `fases`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`homeroom_teacher_id`) REFERENCES `profiles`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. CLASS MEMBERS (Anggota Kelas: Guru Pengampu & Murid)
DROP TABLE IF EXISTS `class_members`;
CREATE TABLE `class_members` (
  `class_id` VARCHAR(36) NOT NULL,
  `user_id` VARCHAR(36) NOT NULL,
  `member_role` ENUM('super_admin', 'guru', 'murid') NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`class_id`, `user_id`),
  FOREIGN KEY (`class_id`) REFERENCES `classes`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`user_id`) REFERENCES `profiles`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. MAPEL (Mata Pelajaran: DBP & PSPT)
DROP TABLE IF EXISTS `mapel`;
CREATE TABLE `mapel` (
  `id` VARCHAR(36) NOT NULL,
  `fase_id` VARCHAR(36) NOT NULL,
  `code` VARCHAR(50) NOT NULL UNIQUE, -- DBP, PSPT
  `name` VARCHAR(150) NOT NULL,
  `rationale` TEXT,
  `objectives` JSON,
  `cp_source_ref` VARCHAR(50),        -- 'V.48', 'VI.125'
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`fase_id`) REFERENCES `fases`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. ELEMEN (Elemen Capaian Pembelajaran)
DROP TABLE IF EXISTS `elemen`;
CREATE TABLE `elemen` (
  `id` VARCHAR(36) NOT NULL,
  `mapel_id` VARCHAR(36) NOT NULL,
  `order_no` INT NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `description` TEXT,
  `cp_text` TEXT NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`mapel_id`) REFERENCES `mapel`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. BABS (Elemen / Modul Pembelajaran E1-E4, F1-F8)
DROP TABLE IF EXISTS `babs`;
CREATE TABLE `babs` (
  `id` VARCHAR(36) NOT NULL,
  `elemen_id` VARCHAR(36) NOT NULL,
  `mapel_id` VARCHAR(36) NOT NULL,
  `code` VARCHAR(20) NOT NULL UNIQUE, -- E1..E4, F1..F8
  `order_no` INT NOT NULL,
  `title` VARCHAR(200) NOT NULL,
  `summary` TEXT,
  `cover_image_url` VARCHAR(255),
  `hours_allocation` INT DEFAULT 18,  -- Jam Pelajaran (JP)
  `status` ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  `version` INT DEFAULT 1,
  `created_by` VARCHAR(36),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`elemen_id`) REFERENCES `elemen`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`mapel_id`) REFERENCES `mapel`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`created_by`) REFERENCES `profiles`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 9. ACCESS GRANTS (Hak Akses Elemen/BAB per Kelas atau Pengguna)
DROP TABLE IF EXISTS `access_grants`;
CREATE TABLE `access_grants` (
  `id` VARCHAR(36) NOT NULL,
  `user_id` VARCHAR(36),
  `class_id` VARCHAR(36),
  `fase_id` VARCHAR(36),
  `mapel_id` VARCHAR(36),
  `bab_id` VARCHAR(36),
  `can_edit` TINYINT(1) DEFAULT 0,
  `valid_from` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `valid_until` DATETIME NULL,
  `granted_by` VARCHAR(36),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `profiles`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`class_id`) REFERENCES `classes`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`bab_id`) REFERENCES `babs`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 10. TUJUAN PEMBELAJARAN (TP)
DROP TABLE IF EXISTS `tujuan_pembelajaran`;
CREATE TABLE `tujuan_pembelajaran` (
  `id` VARCHAR(36) NOT NULL,
  `bab_id` VARCHAR(36) NOT NULL,
  `code` VARCHAR(20) NOT NULL, -- E1.1
  `order_no` INT NOT NULL,
  `statement` TEXT NOT NULL,
  `profile_dimensions` JSON,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_tp_bab_code` (`bab_id`, `code`),
  FOREIGN KEY (`bab_id`) REFERENCES `babs`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 11. ATP ITEMS (Alur Tujuan Pembelajaran)
DROP TABLE IF EXISTS `atp_items`;
CREATE TABLE `atp_items` (
  `id` VARCHAR(36) NOT NULL,
  `bab_id` VARCHAR(36) NOT NULL,
  `tp_id` VARCHAR(36),
  `sequence_no` INT NOT NULL,
  `learning_activity` TEXT,
  `hours` INT DEFAULT 4,
  `semester` TINYINT DEFAULT 1,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`bab_id`) REFERENCES `babs`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`tp_id`) REFERENCES `tujuan_pembelajaran`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 12. KKTP (Kriteria Ketercapaian Tujuan Pembelajaran)
DROP TABLE IF EXISTS `kktp`;
CREATE TABLE `kktp` (
  `id` VARCHAR(36) NOT NULL,
  `tp_id` VARCHAR(36) NOT NULL,
  `indicator` TEXT NOT NULL,
  `rubric` JSON, -- Rubrik 4 level penilaian
  `passing_score` INT DEFAULT 75,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`tp_id`) REFERENCES `tujuan_pembelajaran`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 13. MEDIA ASSETS
DROP TABLE IF EXISTS `media_assets`;
CREATE TABLE `media_assets` (
  `id` VARCHAR(36) NOT NULL,
  `kind` ENUM('video', 'image', 'document', 'audio') NOT NULL,
  `title` VARCHAR(200),
  `url` TEXT NOT NULL,
  `provider` VARCHAR(50) DEFAULT 'storage',
  `alt_text` TEXT,
  `caption` TEXT,
  `credit` VARCHAR(150),
  `license` VARCHAR(100),
  `duration_sec` INT,
  `chapters` JSON,
  `uploaded_by` VARCHAR(36),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`uploaded_by`) REFERENCES `profiles`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 14. MATERIALS (Materi Interaktif & Slide Pembelajaran)
DROP TABLE IF EXISTS `materials`;
CREATE TABLE `materials` (
  `id` VARCHAR(36) NOT NULL,
  `bab_id` VARCHAR(36) NOT NULL,
  `tp_id` VARCHAR(36),
  `order_no` INT NOT NULL,
  `title` VARCHAR(200) NOT NULL,
  `body` JSON NOT NULL, -- Format kartu / TipTap
  `media_ids` JSON,
  `est_minutes` INT DEFAULT 15,
  `status` ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  `ai_generated` TINYINT(1) DEFAULT 0,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`bab_id`) REFERENCES `babs`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`tp_id`) REFERENCES `tujuan_pembelajaran`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 15. GAMES (Mini Game Edukatif)
DROP TABLE IF EXISTS `games`;
CREATE TABLE `games` (
  `id` VARCHAR(36) NOT NULL,
  `bab_id` VARCHAR(36) NOT NULL,
  `type` VARCHAR(50) NOT NULL, -- matching, flashcard, dll
  `title` VARCHAR(200) NOT NULL,
  `config` JSON NOT NULL,
  `status` ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`bab_id`) REFERENCES `babs`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 16. LKPD (Lembar Kerja Peserta Didik)
DROP TABLE IF EXISTS `lkpd`;
CREATE TABLE `lkpd` (
  `id` VARCHAR(36) NOT NULL,
  `bab_id` VARCHAR(36) NOT NULL,
  `tp_id` VARCHAR(36),
  `title` VARCHAR(200) NOT NULL,
  `content` JSON NOT NULL,
  `allow_online_submission` TINYINT(1) DEFAULT 1,
  `status` ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`bab_id`) REFERENCES `babs`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 17. LKPD SUBMISSIONS
DROP TABLE IF EXISTS `lkpd_submissions`;
CREATE TABLE `lkpd_submissions` (
  `id` VARCHAR(36) NOT NULL,
  `lkpd_id` VARCHAR(36) NOT NULL,
  `student_id` VARCHAR(36) NOT NULL,
  `answers` JSON,
  `file_urls` JSON,
  `score` DECIMAL(5,2),
  `feedback` TEXT,
  `submitted_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `graded_by` VARCHAR(36),
  PRIMARY KEY (`id`),
  FOREIGN KEY (`lkpd_id`) REFERENCES `lkpd`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`student_id`) REFERENCES `profiles`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`graded_by`) REFERENCES `profiles`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 18. RPM (Rencana Pembelajaran Mendalam / Modul Ajar Guru)
DROP TABLE IF EXISTS `rpm`;
CREATE TABLE `rpm` (
  `id` VARCHAR(36) NOT NULL,
  `bab_id` VARCHAR(36) NOT NULL,
  `title` VARCHAR(200) NOT NULL,
  `content` JSON NOT NULL,
  `owner_id` VARCHAR(36),
  `status` ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`bab_id`) REFERENCES `babs`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`owner_id`) REFERENCES `profiles`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 19. QUESTIONS (Bank Soal C1 - C6)
DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions` (
  `id` VARCHAR(36) NOT NULL,
  `bab_id` VARCHAR(36) NOT NULL,
  `tp_id` VARCHAR(36),
  `kktp_id` VARCHAR(36),
  `type` ENUM('pg', 'pg_kompleks', 'benar_salah', 'menjodohkan', 'isian', 'uraian') NOT NULL DEFAULT 'pg',
  `bloom` ENUM('C1', 'C2', 'C3', 'C4', 'C5', 'C6') NOT NULL DEFAULT 'C3',
  `difficulty` ENUM('mudah', 'sedang', 'sulit') DEFAULT 'sedang',
  `stem` TEXT NOT NULL,
  `stem_media_id` VARCHAR(36),
  `answer_key` JSON NOT NULL,
  `explanation` TEXT,
  `usage_tags` JSON,
  `source` ENUM('manual', 'ai', 'import') DEFAULT 'manual',
  `status` ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  `text_hash` VARCHAR(64),
  `created_by` VARCHAR(36),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`bab_id`) REFERENCES `babs`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`tp_id`) REFERENCES `tujuan_pembelajaran`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`created_by`) REFERENCES `profiles`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 20. QUESTION OPTIONS (Pilihan Jawaban A, B, C, D, E)
DROP TABLE IF EXISTS `question_options`;
CREATE TABLE `question_options` (
  `id` VARCHAR(36) NOT NULL,
  `question_id` VARCHAR(36) NOT NULL,
  `opt_key` VARCHAR(10) NOT NULL, -- A..E
  `text` TEXT NOT NULL,
  `media_id` VARCHAR(36),
  `order_no` INT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 21. PACKAGES (Paket Ujian / Ulangan)
DROP TABLE IF EXISTS `packages`;
CREATE TABLE `packages` (
  `id` VARCHAR(36) NOT NULL,
  `title` VARCHAR(200) NOT NULL,
  `kind` ENUM('ulangan_harian', 'ulangan_semester', 'tka', 'latihan') NOT NULL,
  `mapel_id` VARCHAR(36),
  `blueprint` JSON,
  `shuffle_questions` TINYINT(1) DEFAULT 1,
  `shuffle_options` TINYINT(1) DEFAULT 1,
  `created_by` VARCHAR(36),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`created_by`) REFERENCES `profiles`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 22. PACKAGE ITEMS
DROP TABLE IF EXISTS `package_items`;
CREATE TABLE `package_items` (
  `package_id` VARCHAR(36) NOT NULL,
  `question_id` VARCHAR(36) NOT NULL,
  `order_no` INT,
  `points` DECIMAL(5,2) DEFAULT 1.00,
  PRIMARY KEY (`package_id`, `question_id`),
  FOREIGN KEY (`package_id`) REFERENCES `packages`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 23. ASSESSMENTS (Jadwal Ujian & CBT)
DROP TABLE IF EXISTS `assessments`;
CREATE TABLE `assessments` (
  `id` VARCHAR(36) NOT NULL,
  `package_id` VARCHAR(36) NOT NULL,
  `class_id` VARCHAR(36),
  `start_at` DATETIME,
  `end_at` DATETIME,
  `duration_min` INT NOT NULL DEFAULT 90,
  `access_token` VARCHAR(50),
  `max_attempts` INT DEFAULT 1,
  `show_result_after` TINYINT(1) DEFAULT 1,
  `status` ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  `created_by` VARCHAR(36),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`package_id`) REFERENCES `packages`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`class_id`) REFERENCES `classes`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 24. ATTEMPTS (Pengerjaan Ujian Siswa)
DROP TABLE IF EXISTS `attempts`;
CREATE TABLE `attempts` (
  `id` VARCHAR(36) NOT NULL,
  `assessment_id` VARCHAR(36),
  `student_id` VARCHAR(36) NOT NULL,
  `status` ENUM('in_progress', 'submitted', 'graded') DEFAULT 'in_progress',
  `seed` INT,
  `started_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `submitted_at` DATETIME NULL,
  `score` DECIMAL(5,2),
  PRIMARY KEY (`id`),
  FOREIGN KEY (`assessment_id`) REFERENCES `assessments`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`student_id`) REFERENCES `profiles`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 25. ATTEMPT ANSWERS
DROP TABLE IF EXISTS `attempt_answers`;
CREATE TABLE `attempt_answers` (
  `attempt_id` VARCHAR(36) NOT NULL,
  `question_id` VARCHAR(36) NOT NULL,
  `answer` JSON,
  `is_correct` TINYINT(1),
  `points` DECIMAL(5,2),
  `needs_review` TINYINT(1) DEFAULT 0,
  `teacher_feedback` TEXT,
  PRIMARY KEY (`attempt_id`, `question_id`),
  FOREIGN KEY (`attempt_id`) REFERENCES `attempts`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 26. QUIZZES & ATTEMPTS
DROP TABLE IF EXISTS `quizzes`;
CREATE TABLE `quizzes` (
  `id` VARCHAR(36) NOT NULL,
  `bab_id` VARCHAR(36) NOT NULL,
  `title` VARCHAR(200) NOT NULL,
  `question_ids` JSON NOT NULL,
  `max_attempts` INT DEFAULT 3,
  `show_explanation` TINYINT(1) DEFAULT 1,
  `status` ENUM('draft', 'published', 'archived') DEFAULT 'published',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`bab_id`) REFERENCES `babs`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `quiz_attempts`;
CREATE TABLE `quiz_attempts` (
  `id` VARCHAR(36) NOT NULL,
  `quiz_id` VARCHAR(36),
  `student_id` VARCHAR(36),
  `score` DECIMAL(5,2),
  `answers` JSON,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`quiz_id`) REFERENCES `quizzes`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`student_id`) REFERENCES `profiles`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `game_attempts`;
CREATE TABLE `game_attempts` (
  `id` VARCHAR(36) NOT NULL,
  `game_id` VARCHAR(36),
  `student_id` VARCHAR(36),
  `score` INT,
  `duration_sec` INT,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`game_id`) REFERENCES `games`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`student_id`) REFERENCES `profiles`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 27. FEATURE FLAGS (Pengaturan Toggle Menu & Fitur)
DROP TABLE IF EXISTS `feature_flags`;
CREATE TABLE `feature_flags` (
  `id` VARCHAR(36) NOT NULL,
  `key` VARCHAR(50) NOT NULL,
  `scope` ENUM('global', 'fase', 'bab', 'role') NOT NULL DEFAULT 'global',
  `scope_ref` VARCHAR(100) NULL,
  `is_enabled` TINYINT(1) NOT NULL DEFAULT 1,
  `label` VARCHAR(100),
  `description` TEXT,
  `updated_by` VARCHAR(36),
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_feature_flag` (`key`, `scope`, `scope_ref`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 28. ACTIVITY LOGS (Jejak Aktivitas & Audit)
DROP TABLE IF EXISTS `activity_logs`;
CREATE TABLE `activity_logs` (
  `id` BIGINT AUTO_INCREMENT NOT NULL,
  `user_id` VARCHAR(36),
  `action` VARCHAR(100) NOT NULL,
  `entity` VARCHAR(100),
  `entity_id` VARCHAR(100),
  `meta` JSON,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `profiles`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 29. PROGRESS (Pelacakan Progres Belajar Siswa)
DROP TABLE IF EXISTS `progress`;
CREATE TABLE `progress` (
  `student_id` VARCHAR(36) NOT NULL,
  `bab_id` VARCHAR(36) NOT NULL,
  `item_type` VARCHAR(50) NOT NULL,
  `item_id` VARCHAR(36) NOT NULL,
  `percent` DECIMAL(5,2) DEFAULT 0.00,
  `completed_at` DATETIME NULL,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`student_id`, `bab_id`, `item_type`, `item_id`),
  FOREIGN KEY (`student_id`) REFERENCES `profiles`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`bab_id`) REFERENCES `babs`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Aktifkan kembali pengecekan foreign key
SET FOREIGN_KEY_CHECKS = 1;

-- ============================================================================
-- SEED DATA AWAL BRO-MAN (XAMPP MYSQL)
-- ============================================================================

-- A. Profiles Pengguna Baku (Admin, Guru, Siswa)
INSERT INTO `profiles` (`id`, `full_name`, `role`, `identifier`, `email`, `is_active`) VALUES
('usr-admin-01', 'Administrator BroMan', 'super_admin', 'admin@smk.sch.id', 'admin@smk.sch.id', 1),
('usr-guru-198703072022212011', 'Latifah Ardiana, S.Kom.', 'guru', '198703072022212011', 'latifahardiana73@guru.smk.belajar.id', 1),
('usr-guru-199002042022211009', 'Very Kurniawan, S.Pd., Gr.', 'guru', '199002042022211009', 'verykurniawan42@guru.smk.belajar.id', 1),
('usr-guru-199110042022211007', 'Saputra Indra Purnama, S.Pd., Gr.', 'guru', '199110042022211007', 'saputrapurnama40@guru.belajar.id', 1),
('usr-guru-199404252020121012', 'Muhammad Apri Sastriyono, S.Tr.KM., Gr.', 'guru', '199404252020121012', 'muhammadsastriyono54@guru.smk.belajar.id', 1),
('usr-guru-199612072025211070', 'Nanda Irvan Sodikin, S.Kom., Gr.', 'guru', '199612072025211070', 'nanda.irvan45@guru.smk.belajar.id', 1),
('usr-murid-123456', 'Abi Muslihin', 'murid', '123456', 'abimuslihin@gmail.com', 1)
ON DUPLICATE KEY UPDATE `full_name` = VALUES(`full_name`), `email` = VALUES(`email`);

-- B. Tahun Ajaran & Rombel Kelas
INSERT INTO `academic_years` (`id`, `name`, `semester`, `is_active`) VALUES
('ay-2026-ganjil', '2026/2027 Ganjil', 1, 1)
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

-- C. Fases (E dan F)
INSERT INTO `fases` (`id`, `code`, `name`, `grade_levels`) VALUES
('fas-e-01', 'E', 'Fase E (Kelas X)', '["X"]'),
('fas-f-01', 'F', 'Fase F (Kelas XI & XII)', '["XI", "XII"]')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

-- D. Kelas
INSERT INTO `classes` (`id`, `academic_year_id`, `name`, `fase_id`, `homeroom_teacher_id`) VALUES
('cls-x-bcf-1', 'ay-2026-ganjil', 'X BCF 1', 'fas-e-01', 'usr-guru-19911004'),
('cls-x-bcf-2', 'ay-2026-ganjil', 'X BCF 2', 'fas-e-01', 'usr-guru-bambang'),
('cls-xi-bcf', 'ay-2026-ganjil', 'XI BCF', 'fas-f-01', 'usr-guru-ratna'),
('cls-xii-bcf', 'ay-2026-ganjil', 'XII BCF', 'fas-f-01', 'usr-guru-19911004')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

-- E. Mata Pelajaran (DBP & PSPT)
INSERT INTO `mapel` (`id`, `fase_id`, `code`, `name`, `cp_source_ref`) VALUES
('mpl-dbp-01', 'fas-e-01', 'DBP', 'Dasar-dasar Broadcasting dan Perfilman', 'BSKAP 032/H/KR/2024 V.48'),
('mpl-pspt-01', 'fas-f-01', 'PSPT', 'Produksi dan Siaran Program Televisi', 'BSKAP 032/H/KR/2024 VI.125')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

-- F. 12 Elemen Resmi Kurikulum Merdeka BSKAP (Fase E: E1-E4, Fase F: F1-F8)
-- E1
INSERT INTO `elemen` (`id`, `mapel_id`, `order_no`, `name`, `description`, `cp_text`) VALUES
('elm-e1', 'mpl-dbp-01', 1, 'Dunia Kerja, Profesi, dan Bisnis di Bidang Broadcasting dan Perfilman', 
 'Profesi & level pekerjaan, basic job skills, K3, budaya kerja, technopreneur, peluang usaha, POS, kearifan lokal.',
 'Pada akhir fase E peserta didik mampu memahami perkembangan proses produksi industri penyiaran dan perfilman, standar K3LH, budaya kerja industri, dan peluang usaha kejuruan.')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

INSERT INTO `babs` (`id`, `elemen_id`, `mapel_id`, `code`, `order_no`, `title`, `summary`, `hours_allocation`, `status`) VALUES
('bab-e1', 'elm-e1', 'mpl-dbp-01', 'E1', 1, 'Dunia Kerja, Profesi, dan Bisnis di Bidang Broadcasting dan Perfilman',
 'Profesi & level pekerjaan, basic job skills, K3, budaya kerja, technopreneur, peluang usaha, POS, kearifan lokal sebagai ide produksi.', 18, 'published')
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);

-- E2
INSERT INTO `elemen` (`id`, `mapel_id`, `order_no`, `name`, `description`, `cp_text`) VALUES
('elm-e2', 'mpl-dbp-01', 2, 'Perkembangan Media, Teknologi, Industri & Regulasi',
 'Analog ke digital, FTA & OTT, podcast, live streaming, streaming TV, web series, VOD, UU ITE, AI, dan regulasi media.',
 'Pada akhir fase E peserta didik mampu memahami perkembangan teknologi penyiaran digital, platform new media, UU ITE, hak cipta karya, dan etika penyiaran.')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

INSERT INTO `babs` (`id`, `elemen_id`, `mapel_id`, `code`, `order_no`, `title`, `summary`, `hours_allocation`, `status`) VALUES
('bab-e2', 'elm-e2', 'mpl-dbp-01', 'E2', 2, 'Perkembangan Media, Teknologi, Industri & Regulasi',
 'Analog ke digital, FTA & OTT, podcast, live streaming, streaming TV, web series, VOD, UU ITE, AI, dan regulasi media.', 18, 'published')
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);

-- E3
INSERT INTO `elemen` (`id`, `mapel_id`, `order_no`, `name`, `description`, `cp_text`) VALUES
('elm-e3', 'mpl-dbp-01', 3, 'Teknik Dasar Pengoperasian Peralatan Audio Visual',
 'Fotografi dasar, tata kamera, tata artistik, tata suara, dasar editing, dan prosedur perawatan alat.',
 'Pada akhir fase E peserta didik mampu mengoperasikan peralatan dasar audio visual meliputi kamera, tata cahaya, tata suara, dan perangkat lunak editing.')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

INSERT INTO `babs` (`id`, `elemen_id`, `mapel_id`, `code`, `order_no`, `title`, `summary`, `hours_allocation`, `status`) VALUES
('bab-e3', 'elm-e3', 'mpl-dbp-01', 'E3', 3, 'Teknik Dasar Pengoperasian Peralatan Audio Visual',
 'Fotografi dasar, tata kamera, tata artistik, tata suara, dasar editing, dan prosedur perawatan alat.', 24, 'published')
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);

-- E4
INSERT INTO `elemen` (`id`, `mapel_id`, `order_no`, `name`, `description`, `cp_text`) VALUES
('elm-e4', 'mpl-dbp-01', 4, 'Teknik Dasar Proses Produksi & New Media',
 'Simulasi tahapan produksi sesuai POS lewat proyek audio visual sederhana dan publikasi platform digital.',
 'Pada akhir fase E peserta didik mampu menyimulasikan seluruh tahapan produksi audio visual dan new media sederhana sesuai POS industri.')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

INSERT INTO `babs` (`id`, `elemen_id`, `mapel_id`, `code`, `order_no`, `title`, `summary`, `hours_allocation`, `status`) VALUES
('bab-e4', 'elm-e4', 'mpl-dbp-01', 'E4', 4, 'Teknik Dasar Proses Produksi & New Media',
 'Simulasi tahapan produksi sesuai POS lewat proyek audio visual sederhana dan publikasi platform digital.', 24, 'published')
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);

-- F1
INSERT INTO `elemen` (`id`, `mapel_id`, `order_no`, `name`, `description`, `cp_text`) VALUES
('elm-f1', 'mpl-pspt-01', 1, 'Manajemen Produksi dan Siaran',
 'POS tahapan produksi, organisasi penyiaran, sumber daya, format & pola acara, target penonton, dan tren industri.',
 'Pada akhir fase F peserta didik mampu merencanakan, mengorganisasikan, dan mengelola tahapan produksi dan penyiaran program televisi.')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

INSERT INTO `babs` (`id`, `elemen_id`, `mapel_id`, `code`, `order_no`, `title`, `summary`, `hours_allocation`, `status`) VALUES
('bab-f1', 'elm-f1', 'mpl-pspt-01', 'F1', 1, 'Manajemen Produksi dan Siaran',
 'POS tahapan produksi, organisasi penyiaran, sumber daya, format & pola acara, target penonton, dan tren industri.', 36, 'published')
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);

-- F2
INSERT INTO `elemen` (`id`, `mapel_id`, `order_no`, `name`, `description`, `cp_text`) VALUES
('elm-f2', 'mpl-pspt-01', 2, 'Penulisan Naskah Televisi',
 'Naskah jurnalistik & artistik, format standar, jenis program, dan struktur naskah penyiaran.',
 'Pada akhir fase F peserta didik mampu menulis naskah program televisi non-drama dan drama secara profesional sesuai kaidah penulisan skenario.')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

INSERT INTO `babs` (`id`, `elemen_id`, `mapel_id`, `code`, `order_no`, `title`, `summary`, `hours_allocation`, `status`) VALUES
('bab-f2', 'elm-f2', 'mpl-pspt-01', 'F2', 2, 'Penulisan Naskah Televisi',
 'Naskah jurnalistik & artistik, format standar, jenis program, dan struktur naskah penyiaran.', 36, 'published')
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);

-- F3
INSERT INTO `elemen` (`id`, `mapel_id`, `order_no`, `name`, `description`, `cp_text`) VALUES
('elm-f3', 'mpl-pspt-01', 3, 'Penyutradaraan Televisi',
 'Single & multicamera, analisis naskah, mise en scene, sinematografi, dan komando sutradara.',
 'Pada akhir fase F peserta didik mampu menyutradarai produksi televisi single-camera dan multi-camera studio secara efektif.')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

INSERT INTO `babs` (`id`, `elemen_id`, `mapel_id`, `code`, `order_no`, `title`, `summary`, `hours_allocation`, `status`) VALUES
('bab-f3', 'elm-f3', 'mpl-pspt-01', 'F3', 3, 'Penyutradaraan Televisi',
 'Single & multicamera, analisis naskah, mise en scene, sinematografi, dan komando sutradara.', 40, 'published')
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);

-- F4
INSERT INTO `elemen` (`id`, `mapel_id`, `order_no`, `name`, `description`, `cp_text`) VALUES
('elm-f4', 'mpl-pspt-01', 4, 'Tata Kamera dan Tata Cahaya',
 'K3LH, komposisi, pergerakan kamera, camera support, peralatan & teknik pencahayaan 3-titik.',
 'Pada akhir fase F peserta didik mampu mengoperasikan kamera dan menata pencahayaan studio/luar ruang sesuai standar K3LH industri penyiaran.')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

INSERT INTO `babs` (`id`, `elemen_id`, `mapel_id`, `code`, `order_no`, `title`, `summary`, `hours_allocation`, `status`) VALUES
('bab-f4', 'elm-f4', 'mpl-pspt-01', 'F4', 4, 'Tata Kamera dan Tata Cahaya',
 'K3LH, komposisi, pergerakan kamera, camera support, peralatan & teknik pencahayaan 3-titik.', 40, 'published')
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);

-- F5
INSERT INTO `elemen` (`id`, `mapel_id`, `order_no`, `name`, `description`, `cp_text`) VALUES
('elm-f5', 'mpl-pspt-01', 5, 'Tata Suara Televisi',
 'K3LH, jenis mikrofon, audio mixer, sound recorder, blocking mic, dan perekaman audio lapangan.',
 'Pada akhir fase F peserta didik mampu merekam, menata, dan mengoperasikan sistem audio penyiaran televisi multi-channel.')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

INSERT INTO `babs` (`id`, `elemen_id`, `mapel_id`, `code`, `order_no`, `title`, `summary`, `hours_allocation`, `status`) VALUES
('bab-f5', 'elm-f5', 'mpl-pspt-01', 'F5', 5, 'Tata Suara Televisi',
 'K3LH, jenis mikrofon, audio mixer, sound recorder, blocking mic, dan perekaman audio lapangan.', 32, 'published')
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);

-- F6
INSERT INTO `elemen` (`id`, `mapel_id`, `order_no`, `name`, `description`, `cp_text`) VALUES
('elm-f6', 'mpl-pspt-01', 6, 'Tata Artistik Televisi',
 'Breakdown naskah, floorplan studio, sketsa set, properti, kostum, tata rias, dan dekorasi.',
 'Pada akhir fase F peserta didik mampu merancang dan mewujudkan tata artistik panggung & studio siaran televisi.')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

INSERT INTO `babs` (`id`, `elemen_id`, `mapel_id`, `code`, `order_no`, `title`, `summary`, `hours_allocation`, `status`) VALUES
('bab-f6', 'elm-f6', 'mpl-pspt-01', 'F6', 6, 'Tata Artistik Televisi',
 'Breakdown naskah, floorplan studio, sketsa set, properti, kostum, tata rias, dan dekorasi.', 32, 'published')
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);

-- F7
INSERT INTO `elemen` (`id`, `mapel_id`, `order_no`, `name`, `description`, `cp_text`) VALUES
('elm-f7', 'mpl-pspt-01', 7, 'Editing Audio dan Video',
 'Manajemen file aset, software NLE, dokumen editing, offline & online editing, titling, dan rendering.',
 'Pada akhir fase F peserta didik mampu menyunting audio dan video siaran televisi secara profesional menggunakan software NLE standar industri.')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

INSERT INTO `babs` (`id`, `elemen_id`, `mapel_id`, `code`, `order_no`, `title`, `summary`, `hours_allocation`, `status`) VALUES
('bab-f7', 'elm-f7', 'mpl-pspt-01', 'F7', 7, 'Editing Audio dan Video',
 'Manajemen file aset, software NLE, dokumen editing, offline & online editing, titling, dan rendering.', 36, 'published')
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);

-- F8
INSERT INTO `elemen` (`id`, `mapel_id`, `order_no`, `name`, `description`, `cp_text`) VALUES
('elm-f8', 'mpl-pspt-01', 8, 'Penyiaran Online',
 'Rencana siaran online streaming, poster promosi digital, platform OTT, dan regulasi konten siber.',
 'Pada akhir fase F peserta didik mampu menyelenggarakan dan mempromosikan siaran online streaming secara komprehensif.')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

INSERT INTO `babs` (`id`, `elemen_id`, `mapel_id`, `code`, `order_no`, `title`, `summary`, `hours_allocation`, `status`) VALUES
('bab-f8', 'elm-f8', 'mpl-pspt-01', 'F8', 8, 'Penyiaran Online',
 'Rencana siaran online streaming, poster promosi digital, platform OTT, dan regulasi konten siber.', 28, 'published')
ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);

-- G. Feature Flags Baku
INSERT INTO `feature_flags` (`id`, `key`, `label`, `description`, `scope`, `is_enabled`) VALUES
('ff-materi', 'materi', 'Materi Belajar', 'Modul materi interaktif bertahap dan kartu pembelajaran', 'global', 1),
('ff-video', 'video', 'Video Pembelajaran', 'Video pembelajaran interaktif bersumber YouTube / storage', 'global', 1),
('ff-galeri', 'galeri', 'Galeri Gambar', 'Galeri foto peralatan, studio, dan contoh visual', 'global', 1),
('ff-kuis', 'kuis', 'Kuis Formatif', 'Kuis formatif otomatis dengan feedback instan', 'global', 1),
('ff-game', 'game', 'Game Edukatif', 'Permainan mencocokkan alat, flashcard, dan studio simulation', 'global', 1),
('ff-lkpd', 'lkpd', 'Lembar Kerja Peserta Didik', 'LKPD daring dan dapat diekspor ke PDF', 'global', 1),
('ff-rpm', 'rpm', 'Rencana Pembelajaran Mendalam', 'RPM Kurikulum Merdeka untuk guru pengampu', 'global', 1),
('ff-bank_soal', 'bank_soal', 'Bank Soal', 'Pusat bank soal C1-C6 dan perakit paket ujian', 'global', 1),
('ff-ulangan', 'ulangan', 'Ulangan & Asesmen Daring', 'Sistem ujian online terjadwal dengan timer server', 'global', 1),
('ff-tka', 'tka', 'Simulasi TKA', 'Simulasi tes kompetensi keahlian broadcasting', 'global', 1),
('ff-leaderboard', 'leaderboard', 'Papan Peringkat', 'Leaderboard kuis dan game penyemangat belajar', 'global', 1),
('ff-progres', 'progres', 'Pelacakan Progres', 'Pelacakan capaian belajar dan penguasaan KKTP', 'global', 1)
ON DUPLICATE KEY UPDATE `label` = VALUES(`label`), `description` = VALUES(`description`), `is_enabled` = VALUES(`is_enabled`);
