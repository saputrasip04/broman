import { useSyncExternalStore } from "react";
import type { QuizQuestion } from "./curriculum-types";
import { SIMULASI_TKA_PACKAGE } from "./simulasi-tka-questions";

export interface BankSoalQuestion extends QuizQuestion {
  jenis?: "PG" | "Esai";
  nomorUrut?: number;
  gambar?: string;
  bobotNilai?: number;
}

export interface BankSoalPackage {
  id: string;
  kodeBank: string;
  namaMapel: string;
  elemenCode: string;
  tingkat: "X" | "XI" | "XII";
  fase: "Fase E" | "Fase F";
  jurusan: string;
  guruPengampu: string;
  kkm: number;
  durasiMenit: number;
  jmlPg: number;
  bobotPg: number;
  opsiCount: 4 | 5;
  jmlEsai: number;
  bobotEsai: number;
  acakSoal: boolean;
  acakOpsi: boolean;
  status: "aktif" | "nonaktif";
  tahunAjaran: string;
  jenisUjian: string;
  createdAt: string;
  updatedAt: string;
  questions: BankSoalQuestion[];
  mediaFiles: Array<{ id: string; name: string; size: string; uploadDate: string }>;
}

export const BANK_SOAL_STORAGE_KEY = "broman_cbt_bank_soal_packages";
export const BANK_SOAL_UPDATE_EVENT = "broman_bank_soal_updated";

export const DEFAULT_BANK_SOAL_PACKAGES: BankSoalPackage[] = [
  SIMULASI_TKA_PACKAGE,
  {
    id: "bnk-bcf-e3-01",
    kodeBank: "BCF-E3-AUDIOVISUAL",
    namaMapel: "Dasar Broadcasting - Peralatan Audio Visual",
    elemenCode: "E3",
    tingkat: "X",
    fase: "Fase E",
    jurusan: "Broadcasting & Perfilman",
    guruPengampu: "Saputra Indra Purnama, S.Pd.",
    kkm: 75,
    durasiMenit: 90,
    jmlPg: 40,
    bobotPg: 70,
    opsiCount: 5,
    jmlEsai: 5,
    bobotEsai: 30,
    acakSoal: true,
    acakOpsi: true,
    status: "aktif",
    tahunAjaran: "2026/2027 Ganjil",
    jenisUjian: "Asesmen Sumatif Tengah Semester (ASTS)",
    createdAt: "2026-10-01",
    updatedAt: "2026-10-13",
    mediaFiles: [
      { id: "m1", name: "kamera_dslr_cross.jpg", size: "245 KB", uploadDate: "2026-10-05" },
      { id: "m2", name: "diagram_three_point_lighting.png", size: "380 KB", uploadDate: "2026-10-07" },
      { id: "m3", name: "audio_mixer_yamaha_mg16.jpg", size: "512 KB", uploadDate: "2026-10-09" },
    ],
    questions: [
      {
        id: 1,
        nomorUrut: 1,
        jenis: "PG",
        bloom: "C3",
        stem: "Seorang kameramen bertugas merekam adegan wawancara di bawah sinar matahari terik luar ruangan. Gambar pada monitor terlihat terlalu terang (overexposure) meskipun ISO sudah pada angka terendah (ISO 100) dan shutter speed 1/50 detik sesuai frame rate 25fps. Tindakan paling tepat sesuai SOP penyiaran tanpa mengubah kedalaman ruang (depth of field) adalah...",
        options: [
          { key: "A", text: "Memasang filter Neutral Density (ND Filter) pada lensa kamera" },
          { key: "B", text: "Menaikkan shutter speed setinggi mungkin hingga 1/2000 detik" },
          { key: "C", text: "Menutup bukaan diafragma aperture hingga f/22" },
          { key: "D", text: "Menurunkan white balance menjadi 3200 Kelvin" },
          { key: "E", text: "Mematikan fungsi autofokus dan beralih ke manual fokus" },
        ],
        correctKey: "A",
        explanation: "ND Filter berfungsi seperti kacamata hitam bagi lensa untuk memotong intensitas cahaya masuk tanpa mengubah shutter speed (menjaga motion blur alami) dan tanpa menutup aperture (menjaga kedalaman ruang/bokeh).",
      },
      {
        id: 2,
        nomorUrut: 2,
        jenis: "PG",
        bloom: "C4",
        stem: "Pada teknik tata cahaya studio televisi Three-Point Lighting, fungsi utama lampu Back Light (Hair Light / Rim Light) yang diposisikan di belakang subjek adalah...",
        options: [
          { key: "A", text: "Menerangi latar belakang studio agar dekorasi terlihat tajam" },
          { key: "B", text: "Memisahkan figur subjek dari latar belakang sehingga memberikan dimensi kedalaman visual" },
          { key: "C", text: "Menghilangkan seluruh bayangan gelap yang dihasilkan oleh Key Light" },
          { key: "D", text: "Menyamakan temperatur warna antara sumber lampu tungsten dan daylight" },
          { key: "E", text: "Sebagai sumber penerangan utama yang paling terang pada wajah subjek" },
        ],
        correctKey: "B",
        explanation: "Back Light memberikan highlight pada tepi rambut dan pundak subjek untuk memisahkan kontur tubuh subjek dari background agar gambar tidak tampak datar.",
      },
      {
        id: 3,
        nomorUrut: 3,
        jenis: "PG",
        bloom: "C2",
        stem: "Mikrofon yang memiliki karakteristik pola penerimaan suara searah (polar pattern directional/hypercardioid) dan paling ideal digunakan untuk merekam dialog pemain film dari jarak jauh tanpa masuk dalam frame kamera adalah...",
        options: [
          { key: "A", text: "Omnidirectional Lavalier Mic" },
          { key: "B", text: "Shotgun Microphone yang dipasang pada Boom Pole" },
          { key: "C", text: "Boundary PZM Microphone" },
          { key: "D", text: "Ribbon Dynamic Studio Mic" },
          { key: "E", text: "Handheld Vocal Cardioid Mic" },
        ],
        correctKey: "B",
        explanation: "Shotgun mic memiliki interference tube yang sangat directional (menolak suara bising samping/belakang) sehingga sangat ideal dipasang pada boom pole untuk boom operator film.",
      },
      {
        id: 4,
        nomorUrut: 4,
        jenis: "PG",
        bloom: "C4",
        stem: "Jika Anda memindahkan lokasi syuting wawancara dari ruang studio yang diterangi lampu halogen (3200K) ke taman terbuka di siang hari yang cerah (5600K), langkah kalibrasi kamera video yang wajib dilakukan agar warna kulit presenter tampak alami adalah...",
        options: [
          { key: "A", text: "Mengganti lensa zoom dengan lensa prime fixed focal length" },
          { key: "B", text: "Melakukan White Balance manual menggunakan kartu abu-abu/putih netral di bawah cahaya matahari" },
          { key: "C", text: "Menaikkan gain audio sebesar +6 dB pada audio mixer" },
          { key: "D", text: "Menonaktifkan zebra pattern pada electronic viewfinder" },
          { key: "E", text: "Mengubah frame rate rekaman dari 25 fps menjadi 60 fps" },
        ],
        correctKey: "B",
        explanation: "White balance mengkalibrasi sensor terhadap temperatur warna sumber cahaya di lapangan (3200K vs 5600K) agar warna putih tampil murni tanpa corak kemerahan atau kebiruan.",
      },
      {
        id: 5,
        nomorUrut: 5,
        jenis: "PG",
        bloom: "C3",
        stem: "Kabel audio profesional dengan 3 pin yang digunakan untuk menghantarkan sinyal audio seimbang (balanced audio) bebas interferensi elektromagnetik dari mikrofon ke mixer audio adalah kabel bertipe...",
        options: [
          { key: "A", text: "Kabel RCA Stereo" },
          { key: "B", text: "Kabel Jack 3.5mm TRS" },
          { key: "C", text: "Kabel XLR (Canon 3 Pin)" },
          { key: "D", text: "Kabel Coaxial BNC 75 Ohm" },
          { key: "E", text: "Kabel HDMI Type A High Speed" },
        ],
        correctKey: "C",
        explanation: "Kabel XLR membawa sinyal audio seimbang (Pin 1: Ground, Pin 2: Hot/Positive, Pin 3: Cold/Negative) yang mampu meredam noise pada tarikan kabel panjang di industri broadcasting.",
      },
      {
        id: 6,
        nomorUrut: 6,
        jenis: "Esai",
        bloom: "C5",
        stem: "Jelaskan konsep 'Exposure Triangle' (Segitiga Pencahayaan) yang terdiri dari Aperture, Shutter Speed, dan ISO dalam fotografi dan sinematografi. Uraikan bagaimana pengaruh masing-masing parameter tersebut terhadap estetika visual gambar!",
        options: [],
        correctKey: "Esai",
        explanation: "Kriteria penilaian: 1. Penjelasan Aperture (F-Stop) terhadap Depth of Field (bokeh vs tajam merata); 2. Penjelasan Shutter Speed terhadap Motion Blur (180 degree shutter rule); 3. Penjelasan ISO terhadap sensitivitas sensor dan digital noise/grain.",
        bobotNilai: 15,
      },
      {
        id: 7,
        nomorUrut: 7,
        jenis: "Esai",
        bloom: "C6",
        stem: "Rancanglah sebuah bagan alur (diagram koneksi) peralatan siaran langsung sederhana (Live Streaming Multi-Kamera) menggunakan 2 kamera video HDMI, 1 audio mixer, video switcher, dan laptop streaming. Sebutkan port dan jenis kabel yang menghubungkan setiap perangkat!",
        options: [],
        correctKey: "Esai",
        explanation: "Kriteria penilaian: Alur input kamera (HDMI/SDI) ke Switcher Video, Mic ke Mixer Audio lalu Line Out ke Switcher / Audio Interface, Output Switcher (USB Webcam Out / Capture Card) ke Laptop dengan OBS/vMix, serta koneksi LAN/Internet.",
        bobotNilai: 15,
      },
    ],
  },
  {
    id: "bnk-bcf-f1-02",
    kodeBank: "BCF-F1-MANAJEMEN-TV",
    namaMapel: "Konsentrasi Keahlian - Manajemen Siaran TV & Radio",
    elemenCode: "F1",
    tingkat: "XI",
    fase: "Fase F",
    jurusan: "Broadcasting & Perfilman",
    guruPengampu: "Saputra Indra Purnama, S.Pd.",
    kkm: 75,
    durasiMenit: 90,
    jmlPg: 35,
    bobotPg: 70,
    opsiCount: 5,
    jmlEsai: 5,
    bobotEsai: 30,
    acakSoal: true,
    acakOpsi: true,
    status: "aktif",
    tahunAjaran: "2026/2027 Ganjil",
    jenisUjian: "Asesmen Sumatif Akhir Semester (ASAS)",
    createdAt: "2026-10-02",
    updatedAt: "2026-10-12",
    mediaFiles: [
      { id: "m4", name: "rundown_siaran_live_berita.xlsx", size: "115 KB", uploadDate: "2026-10-06" },
      { id: "m5", name: "mcr_console_master.jpg", size: "430 KB", uploadDate: "2026-10-08" },
    ],
    questions: [
      {
        id: 1,
        nomorUrut: 1,
        jenis: "PG",
        bloom: "C3",
        stem: "Dokumen kunci produksi televisi yang mengatur urutan segmen siaran, alokasi durasi detik per detik (Time Code), sumber video (VTR/Live Studio), presenter, serta jeda pariwara (iklan) disebut...",
        options: [
          { key: "A", text: "Treatment Naskah" },
          { key: "B", text: "Shooting Script" },
          { key: "C", text: "Rundown Siaran (Broadcast Rundown)" },
          { key: "D", text: "Call Sheet Produksi" },
          { key: "E", text: "Storyboard Animatic" },
        ],
        correctKey: "C",
        explanation: "Rundown siaran adalah panduan teknis operasional penyiaran live yang memuat alokasi durasi detik demi detik, nama segmen, presenter, sumber video (kamera/clip), dan jeda komersial.",
      },
      {
        id: 2,
        nomorUrut: 2,
        jenis: "PG",
        bloom: "C4",
        stem: "Di ruang Master Control Room (MCR), petugas yang bertanggung jawab memastikan kelancaran siaran sesuai jadwal penayangan (log siaran), menyisipkan materi iklan on-air, dan mengatasi insiden blank screen adalah...",
        options: [
          { key: "A", text: "Program Director (PD)" },
          { key: "B", text: "MCR Operator / Transmission Engineer" },
          { key: "C", text: "Floor Director (FD)" },
          { key: "D", text: "Lighting Designer" },
          { key: "E", text: "Audioman Studio" },
        ],
        correctKey: "B",
        explanation: "MCR Operator bertugas memantau stasiun pemancar siaran 24 jam, memastikan playlist siaran otomatis berjalan mulus dan menyisipkan iklan komersial.",
      },
    ],
  },
  {
    id: "bnk-bcf-f4-03",
    kodeBank: "BCF-F4-TATA-KAMERA",
    namaMapel: "Konsentrasi Keahlian - Tata Kamera & Tata Cahaya Film",
    elemenCode: "F4",
    tingkat: "XII",
    fase: "Fase F",
    jurusan: "Broadcasting & Perfilman",
    guruPengampu: "Saputra Indra Purnama, S.Pd.",
    kkm: 78,
    durasiMenit: 120,
    jmlPg: 40,
    bobotPg: 60,
    opsiCount: 5,
    jmlEsai: 5,
    bobotEsai: 40,
    acakSoal: true,
    acakOpsi: true,
    status: "aktif",
    tahunAjaran: "2026/2027 Ganjil",
    jenisUjian: "Uji Kompetensi Keahlian (UKK) Teori Kejuruan",
    createdAt: "2026-10-03",
    updatedAt: "2026-10-13",
    mediaFiles: [
      { id: "m6", name: "framing_size_shot.png", size: "290 KB", uploadDate: "2026-10-10" },
    ],
    questions: [
      {
        id: 1,
        nomorUrut: 1,
        jenis: "PG",
        bloom: "C4",
        stem: "Ukuran bidang pandang gambar (shot size) yang membingkai aktor dari dada ke atas, sangat efektif untuk menonjolkan ekspresi wajah sekaligus gestur tangan santai dalam percakapan dramatik adalah...",
        options: [
          { key: "A", text: "Extreme Long Shot (ELS)" },
          { key: "B", text: "Full Shot (FS)" },
          { key: "C", text: "Medium Close Up (MCU)" },
          { key: "D", text: "Big Close Up (BCU)" },
          { key: "E", text: "Extreme Close Up (ECU)" },
        ],
        correctKey: "C",
        explanation: "Medium Close Up (MCU) membingkai area dada atas sampai ubun-ubun kepala, menjadikannya standar baku shot percakapan drama sinematik.",
      },
      {
        id: 2,
        nomorUrut: 2,
        jenis: "PG",
        bloom: "C5",
        stem: "Kaidah sinematografi 'Garis Imajiner 180 Derajat' (The 180-Degree Rule) wajib dipertahankan dalam pengambilan gambar dua karakter yang saling berhadapan karena jika kamera melanggar garis tersebut, akibat visual yang dialami penonton adalah...",
        options: [
          { key: "A", text: "Warna gambar berubah dari hangat menjadi dingin (Kelvin shift)" },
          { key: "B", text: "Arah tatapan mata karakter (eyeline match) menjadi kacau dan tampak tidak lagi saling berhadapan" },
          { key: "C", text: "Kualitas audio dialog otomatis mengalami phase cancellation" },
          { key: "D", text: "Kedalaman ruang depth of field menjadi kabur dan buram" },
          { key: "E", text: "Frame rate kamera turun secara drastis" },
        ],
        correctKey: "B",
        explanation: "Kaidah 180 derajat menjaga orientasi spasial mata penonton. Jika garis dilanggar (crossing the line), karakter yang tadinya memandang ke kanan akan mendadak terlihat memandang ke kiri.",
      },
    ],
  },
  {
    id: "bnk-tka-bcf-04",
    kodeBank: "TKA-BCF-2026",
    namaMapel: "Tes Kemampuan Akademik (TKA) Kejuruan BCF",
    elemenCode: "TKA",
    tingkat: "XII",
    fase: "Fase F",
    jurusan: "Broadcasting & Perfilman",
    guruPengampu: "Saputra Indra Purnama, S.Pd.",
    kkm: 80,
    durasiMenit: 90,
    jmlPg: 50,
    bobotPg: 100,
    opsiCount: 5,
    jmlEsai: 0,
    bobotEsai: 0,
    acakSoal: true,
    acakOpsi: true,
    status: "aktif",
    tahunAjaran: "2026/2027 Ganjil",
    jenisUjian: "Try Out TKA Kejuruan Standar Nasional BSKAP",
    createdAt: "2026-10-04",
    updatedAt: "2026-10-13",
    mediaFiles: [],
    questions: [
      {
        id: 1,
        nomorUrut: 1,
        jenis: "PG",
        bloom: "C4",
        stem: "Pada alur produksi film pascaproduksi (Post-Production), urutan tahapan penyuntingan video yang benar dari materi mentah hingga siap tayang adalah...",
        options: [
          { key: "A", text: "Color Grading -> Final Mix Audio -> Offline Editing (Rough Cut) -> Mastering" },
          { key: "B", text: "Offline Editing (Rough Cut) -> Picture Lock -> Sound Design/Scoring -> Color Grading -> Mastering" },
          { key: "C", text: "Mastering -> Online Editing -> Sound Mix -> Offline Editing" },
          { key: "D", text: "Picture Lock -> Offline Editing -> Rough Cut -> Audio Dubbing" },
          { key: "E", text: "Color Grading -> Rough Cut -> Picture Lock -> Script Breakdown" },
        ],
        correctKey: "B",
        explanation: "Alur standar industri: Rough Cut (Offline editing) -> Picture Lock (urutan gambar dikunci) -> baru kemudian Sound Design & Color Grading dijalankan bersamaan -> Final Mastering.",
      },
    ],
  },
  {
    id: "bnk-bcf-e2-05",
    kodeBank: "BCF-E2-MEDIA-DIGITAL",
    namaMapel: "Dasar Broadcasting - Perkembangan Media Digital & OTT",
    elemenCode: "E2",
    tingkat: "X",
    fase: "Fase E",
    jurusan: "Broadcasting & Perfilman",
    guruPengampu: "Saputra Indra Purnama, S.Pd.",
    kkm: 75,
    durasiMenit: 60,
    jmlPg: 30,
    bobotPg: 80,
    opsiCount: 5,
    jmlEsai: 5,
    bobotEsai: 20,
    acakSoal: true,
    acakOpsi: true,
    status: "nonaktif",
    tahunAjaran: "2026/2027 Ganjil",
    jenisUjian: "Kuis Harian / Penilaian Formatif",
    createdAt: "2026-10-05",
    updatedAt: "2026-10-11",
    mediaFiles: [],
    questions: [
      {
        id: 1,
        nomorUrut: 1,
        jenis: "PG",
        bloom: "C2",
        stem: "Layanan penyedia konten video dan siaran melalui jaringan internet publik tanpa melalui infrastruktur operator kabel/satelit konvensional disebut layanan...",
        options: [
          { key: "A", text: "Terrestrial Free-to-Air (FTA)" },
          { key: "B", text: "Over The Top (OTT)" },
          { key: "C", text: "Direct Broadcast Satellite (DBS)" },
          { key: "D", text: "Amplitude Modulation (AM)" },
          { key: "E", text: "Closed Circuit Television (CCTV)" },
        ],
        correctKey: "B",
        explanation: "OTT (Over-The-Top) seperti YouTube, Netflix, Vidio mendistribusikan konten media langsung melalui jaringan internet umum.",
      },
    ],
  },
];

let cachedSnapshot: BankSoalPackage[] | null = null;

function subscribeBankSoal(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = () => {
    cachedSnapshot = null;
    callback();
  };
  window.addEventListener(BANK_SOAL_UPDATE_EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(BANK_SOAL_UPDATE_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

function getBankSoalSnapshot(): BankSoalPackage[] {
  if (typeof window === "undefined") return DEFAULT_BANK_SOAL_PACKAGES;
  if (!cachedSnapshot) {
    cachedSnapshot = getStoredBankSoal();
  }
  return cachedSnapshot;
}

function getBankSoalServerSnapshot(): BankSoalPackage[] {
  return DEFAULT_BANK_SOAL_PACKAGES;
}

export function useBankSoalStore(): BankSoalPackage[] {
  return useSyncExternalStore(subscribeBankSoal, getBankSoalSnapshot, getBankSoalServerSnapshot);
}

export function getStoredBankSoal(): BankSoalPackage[] {
  if (typeof window === "undefined") {
    return DEFAULT_BANK_SOAL_PACKAGES;
  }
  try {
    const raw = localStorage.getItem(BANK_SOAL_STORAGE_KEY);
    if (!raw) return DEFAULT_BANK_SOAL_PACKAGES;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      // Pastikan paket simulasi TKA 30 butir resmi selalu terintegrasi di Bank Soal
      const hasSimulasi = parsed.some(
        (p: BankSoalPackage) => p.id === SIMULASI_TKA_PACKAGE.id || p.kodeBank === SIMULASI_TKA_PACKAGE.kodeBank
      );
      if (!hasSimulasi) {
        const merged = [SIMULASI_TKA_PACKAGE, ...parsed];
        try {
          localStorage.setItem(BANK_SOAL_STORAGE_KEY, JSON.stringify(merged));
        } catch {}
        return merged;
      }
      return parsed;
    }
    return DEFAULT_BANK_SOAL_PACKAGES;
  } catch {
    return DEFAULT_BANK_SOAL_PACKAGES;
  }
}

export function saveStoredBankSoal(packages: BankSoalPackage[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(BANK_SOAL_STORAGE_KEY, JSON.stringify(packages));
    cachedSnapshot = packages;
    window.dispatchEvent(new CustomEvent(BANK_SOAL_UPDATE_EVENT, { detail: packages }));
  } catch (err) {
    console.error("Gagal menyimpan data Bank Soal:", err);
  }
}

export function addBankSoal(pkg: Omit<BankSoalPackage, "id" | "createdAt" | "updatedAt">): BankSoalPackage {
  const all = getStoredBankSoal();
  const now = new Date().toISOString().split("T")[0];
  const newPkg: BankSoalPackage = {
    ...pkg,
    id: "bnk-" + Date.now().toString(36),
    createdAt: now,
    updatedAt: now,
    questions: pkg.questions || [],
    mediaFiles: pkg.mediaFiles || [],
  };
  const updated = [newPkg, ...all];
  saveStoredBankSoal(updated);
  return newPkg;
}

export function updateBankSoal(id: string, updates: Partial<BankSoalPackage>): BankSoalPackage | null {
  const all = getStoredBankSoal();
  const index = all.findIndex((p) => p.id === id);
  if (index === -1) return null;
  const now = new Date().toISOString().split("T")[0];
  const updatedPkg: BankSoalPackage = {
    ...all[index],
    ...updates,
    updatedAt: now,
  };
  const updated = [...all];
  updated[index] = updatedPkg;
  saveStoredBankSoal(updated);
  return updatedPkg;
}

export function deleteBankSoal(id: string): boolean {
  const all = getStoredBankSoal();
  const filtered = all.filter((p) => p.id !== id);
  if (filtered.length === all.length) return false;
  saveStoredBankSoal(filtered);
  return true;
}

export function toggleBankSoalStatus(id: string): BankSoalPackage | null {
  const all = getStoredBankSoal();
  const target = all.find((p) => p.id === id);
  if (!target) return null;
  const newStatus = target.status === "aktif" ? "nonaktif" : "aktif";
  return updateBankSoal(id, { status: newStatus });
}

export function addQuestionToBank(bankId: string, question: Omit<BankSoalQuestion, "id">): BankSoalQuestion | null {
  const all = getStoredBankSoal();
  const pkg = all.find((p) => p.id === bankId);
  if (!pkg) return null;

  const nextId = pkg.questions.length > 0 ? Math.max(...pkg.questions.map((q) => q.id)) + 1 : 1;
  const nextNo = pkg.questions.length + 1;
  const newQuestion: BankSoalQuestion = {
    ...question,
    id: nextId,
    nomorUrut: question.nomorUrut || nextNo,
  };

  const updatedQuestions = [...pkg.questions, newQuestion];
  updateBankSoal(bankId, {
    questions: updatedQuestions,
    jmlPg: updatedQuestions.filter((q) => q.jenis !== "Esai").length,
    jmlEsai: updatedQuestions.filter((q) => q.jenis === "Esai").length,
  });
  return newQuestion;
}

export function updateQuestionInBank(
  bankId: string,
  questionId: number,
  updates: Partial<BankSoalQuestion>
): BankSoalQuestion | null {
  const all = getStoredBankSoal();
  const pkg = all.find((p) => p.id === bankId);
  if (!pkg) return null;

  const qIndex = pkg.questions.findIndex((q) => q.id === questionId);
  if (qIndex === -1) return null;

  const updatedQ: BankSoalQuestion = {
    ...pkg.questions[qIndex],
    ...updates,
  };

  const updatedQuestions = [...pkg.questions];
  updatedQuestions[qIndex] = updatedQ;
  updateBankSoal(bankId, { questions: updatedQuestions });
  return updatedQ;
}

export function deleteQuestionFromBank(bankId: string, questionId: number): boolean {
  const all = getStoredBankSoal();
  const pkg = all.find((p) => p.id === bankId);
  if (!pkg) return false;

  const filtered = pkg.questions.filter((q) => q.id !== questionId);
  updateBankSoal(bankId, {
    questions: filtered,
    jmlPg: filtered.filter((q) => q.jenis !== "Esai").length,
    jmlEsai: filtered.filter((q) => q.jenis === "Esai").length,
  });
  return true;
}

export function addMediaFileToBank(
  bankId: string,
  media: { name: string; size: string }
): boolean {
  const all = getStoredBankSoal();
  const pkg = all.find((p) => p.id === bankId);
  if (!pkg) return false;

  const newMedia = {
    id: "m-" + Date.now().toString(36),
    name: media.name,
    size: media.size,
    uploadDate: new Date().toISOString().split("T")[0],
  };

  updateBankSoal(bankId, {
    mediaFiles: [...(pkg.mediaFiles || []), newMedia],
  });
  return true;
}

export function resetBankSoalToDefault(): void {
  saveStoredBankSoal(DEFAULT_BANK_SOAL_PACKAGES);
}
