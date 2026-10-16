export interface MenuVisibilityFlags {
  // Navigasi Utama (Navbar)
  menu_belajar: boolean;
  menu_fase_e: boolean;
  menu_fase_f: boolean;
  menu_assesment: boolean;
  menu_us: boolean;
  menu_tka: boolean;
  menu_guru: boolean;

  // Modul Pembelajaran & Fitur
  materi: boolean;
  video: boolean;
  galeri: boolean;
  kuis: boolean;
  game: boolean;
  lkpd: boolean;
  rpm: boolean;
  bank_soal: boolean;
  leaderboard: boolean;
  progres: boolean;
}

export const DEFAULT_MENU_FLAGS: MenuVisibilityFlags = {
  // Navigasi Utama (Belajar, Fase E, Fase F dinonaktifkan dari navbar)
  menu_belajar: false,
  menu_fase_e: false,
  menu_fase_f: false,
  menu_assesment: true,
  menu_us: true,
  menu_tka: true,
  menu_guru: false,

  // Modul Fitur
  materi: true,
  video: true,
  galeri: true,
  kuis: true,
  game: true,
  lkpd: true,
  rpm: true,
  bank_soal: true,
  leaderboard: true,
  progres: true,
};

export const MENU_STORAGE_KEY = "broman_menu_visibility_flags_v5";
export const MENU_UPDATE_EVENT = "broman_menu_visibility_updated";
