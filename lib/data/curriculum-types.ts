export interface TPItem {
  code: string;
  statement: string;
  profileDimensions: string[];
  kktp: {
    indicator: string;
    rubric: {
      perluBimbingan: string;
      cukup: string;
      baik: string;
      sangatBaik: string;
    };
  }[];
}

export interface ATPItem {
  sequenceNo: number;
  tpCode: string;
  learningActivity: string;
  hours: number;
  prerequisite: string;
}

export interface MaterialCard {
  title: string;
  content: string;
  caseStudy?: string;
  didYouKnow?: string;
}

export interface QuizQuestion {
  id: number;
  bloom: "C1" | "C2" | "C3" | "C4" | "C5" | "C6";
  stem: string;
  options: { key: string; text: string }[];
  correctKey: string;
  explanation: string;
}

export interface GamePair {
  id: number;
  left: string;
  right: string;
}

export interface LKPDData {
  title: string;
  objective: string;
  tools: string[];
  steps: string[];
  outputFormat: string;
}

export interface ElemenSubMenuItem {
  id: string; // "hook" | "pretest" | "materi" | "video" | "game" | "case" | "kuis" | "lkpd" | "journal"
  title: string;
  subtitle: string;
  enabled: boolean;
  order: number;
  badge?: string;
  iconName?: string;
}

export const DEFAULT_ELEMEN_SUBMENUS: ElemenSubMenuItem[] = [
  { id: "hook", title: "1. Pemantik & Stimulus", subtitle: "Pertanyaan reflektif pengantar", enabled: true, order: 1 },
  { id: "pretest", title: "2. Pra-tes Diagnostik", subtitle: "Asesmen awal pemahaman", enabled: true, order: 2 },
  { id: "materi", title: "3. Materi: Slide Interaktif", subtitle: "Slide presentasi & topik materi", enabled: true, order: 3 },
  { id: "video", title: "4. Video & Panduan Teknis", subtitle: "Simak demonstrasi profesional", enabled: true, order: 4 },
  { id: "game", title: "5. Simulasi & Praktik Interaktif", subtitle: "Matching istilah & konsep alat", enabled: true, order: 5 },
  { id: "case", title: "6. Studi Kasus Industri", subtitle: "Problem solving siaran riil", enabled: true, order: 6 },
  { id: "kuis", title: "7. Kuis Formatif (Bloom C1–C6)", subtitle: "Butir soal terstandar BSKAP", enabled: true, order: 7 },
  { id: "lkpd", title: "8. LKPD Praktikum & Portofolio", subtitle: "Lembar kerja & submit tugas", enabled: true, order: 8 },
  { id: "journal", title: "9. Jurnal Refleksi & Capaian", subtitle: "Refleksi 3-2-1 dan KKTP", enabled: true, order: 9 },
];

export interface ElemenContentItem {
  id: string; // e.g. "f4-k1"
  order: number; // 1, 2, 3, 4
  title: string;
  shortTitle: string;
  summary: string;
  kompetensi: string[];
  tujuanPembelajaran: string[];
  subMenus?: ElemenSubMenuItem[];
  hookQuestion?: string;
  hookContext?: string;
  pretestQuestions?: QuizQuestion[];
  materialCards: MaterialCard[];
  video: {
    title: string;
    embedUrl: string;
    guide: string;
  };
  gamePairs: GamePair[];
  caseTitle?: string;
  caseScenario?: string;
  caseInstruction?: string;
  sampleQuestions: QuizQuestion[];
  lkpd: LKPDData;
  journalQuestions?: {
    q1?: string;
    q2?: string;
    q3?: string;
  };
  kktpIndicators?: string[];
}

export interface ElemenData {
  code: string; // E1 - E4, F1 - F8, atau P1 - P2
  fase: "E" | "F" | "P";
  title: string;
  hours: number;
  summary: string;
  color: string;
  status?: "published" | "draft";
  cpText: string;
  deskripsi: string;
  tp: TPItem[];
  atp: ATPItem[];
  materialCards: MaterialCard[];
  sampleQuestions: QuizQuestion[];
  gamePairs: GamePair[];
  lkpd: LKPDData;
  video: {
    title: string;
    embedUrl: string;
    guide: string;
  };
  subMenus?: ElemenSubMenuItem[];
  hookQuestion?: string;
  hookContext?: string;
  caseTitle?: string;
  caseScenario?: string;
  caseInstruction?: string;
  contents?: ElemenContentItem[];
}
