"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Home,
  User,
  LogOut,
  LayoutGrid,
  BookOpen,
  PlusCircle,
  FileSpreadsheet,
  FileText,
  Sparkles,
  Clock,
  Download,
  Edit3,
  Trash2,
  CheckCircle2,
  ExternalLink,
  Layers,
  Video,
  X,
  Search,
  Filter,
  Eye,
  RotateCcw,
  Sliders,
  ArrowUp,
  ArrowDown,
  HelpCircle,
  Gamepad2,
  Lightbulb,
  CheckSquare,
  Settings2,
  Plus,
  Target,
  Menu,
  Bell,
  ChevronDown,
  Calendar,
  ClipboardList,
  TrendingUp,
  BarChart3,
  Play,
  Wrench,
  Award,
  MessageSquare,
  PieChart,
  Monitor,
  Check,
  ShieldCheck,
  Film,
  AlertCircle,
  Upload,
  FileArchive,
  Info,
  Copy,
  Table,
  Image,
} from "lucide-react";
import {
  type MaterialCard,
  type QuizQuestion,
  type ElemenSubMenuItem,
  DEFAULT_ELEMEN_SUBMENUS,
} from "@/lib/data/curriculum-types";
import {
  useCurriculumStore,
  getStoredElemen,
  updateElemenBasic,
  addCardToElemen,
  updateCardInElemen,
  removeCardFromElemen,
  addQuestionToElemen,
  removeQuestionFromElemen,
  updateVideoInElemen,
  updateLKPDInElemen,
  getAllBankQuestions,
  resetCurriculumToDefault,
  toggleSubMenu,
  updateSubMenuDetail,
  moveSubMenu,
  applySubMenuPreset,
  resetElemenSubMenus,
  updateElemenHook,
  updateElemenCase,
  addCustomSubMenu,
  removeSubMenu,
} from "@/lib/data/curriculum-store";
import BankSoalCbtView from "./BankSoalCbtView";
import SlideDeckManagerView from "./SlideDeckManagerView";

type SidebarMenuKey =
  | "dashboard"
  | "profil"
  | "bank_soal"
  | "format_broman"
  | "slide_deck"
  | "jadwal_ujian"
  | "hasil_nilai"
  | "analisis_soal";

function TeacherPortalContent() {
  const searchParams = useSearchParams();
  const initialPg = searchParams.get("pg");
  const initialMenuParam = searchParams.get("menu");
  const initialMenu: SidebarMenuKey =
    initialPg === "banksoal" || initialMenuParam === "bank_soal"
      ? "bank_soal"
      : initialPg === "formatsoal" || initialMenuParam === "format_broman"
      ? "format_broman"
      : initialPg === "jadwal" || initialMenuParam === "jadwal_ujian"
      ? "jadwal_ujian"
      : initialPg === "nilai" || initialMenuParam === "hasil_nilai"
      ? "hasil_nilai"
      : initialPg === "analisis" || initialMenuParam === "analisis_soal"
      ? "analisis_soal"
      : "dashboard";

  // Navigation & Layout State (Mirip persis CBT BroMan)
  const [activeSidebarMenu, setActiveSidebarMenu] = useState<SidebarMenuKey>(initialMenu);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDateFormatted, setCurrentDateFormatted] = useState("");
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [coordinationModalOpen, setCoordinationModalOpen] = useState(false);

  // Sub-tabs di dalam modul format BroMan (Format CBT pg=formatsoal & Kurikulum)
  const [activeFormatTab, setActiveFormatTab] = useState<"format_cbt" | "menu_elemen" | "konten" | "rpm_lkpd">("format_cbt");
  const [selectedElemenCode, setSelectedElemenCode] = useState<string>("E3");

  // State untuk Simulator Validasi Format Soal CBT
  const [validationResult, setValidationResult] = useState<{
    fileName: string;
    totalRows: number;
    pgCount: number;
    esaiCount: number;
    validCount: number;
    issues: string[];
    previewRows: Array<{
      no: number;
      jenis: string;
      soal: string;
      opsiCount: number;
      kunci: string;
      status: "valid" | "warning" | "error";
      note?: string;
    }>;
  } | null>(null);
  const [isValidatingFile, setIsValidatingFile] = useState(false);
  const curriculumData = useCurriculumStore();
  const [notice, setNotice] = useState<string | null>(null);

  // Live Clock & Date in Indonesian
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
      const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember",
      ];
      const dayName = days[now.getDay()];
      const dateNum = now.getDate();
      const monthName = months[now.getMonth()];
      const year = now.getFullYear();
      setCurrentDateFormatted(`${dayName}, ${dateNum} ${monthName} ${year}`);

      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Deteksi sesi role pengguna (Guru vs Super Admin)
  const [userRole, setUserRole] = useState<string>("guru");
  useEffect(() => {
    fetch("/broman/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data?.user?.role) setUserRole(data.user.role);
      })
      .catch(() => {});
  }, []);

  // Sync URL query params (e.g. ?pg=formatsoal atau ?pg=banksoal)
  useEffect(() => {
    const pg = searchParams.get("pg");
    const menu = searchParams.get("menu");
    if (pg === "formatsoal" || menu === "format_broman") {
      setActiveSidebarMenu("format_broman");
      setActiveFormatTab("format_cbt");
    } else if (pg === "slidedeck" || menu === "slide_deck" || pg === "materi") {
      setActiveSidebarMenu("slide_deck");
    } else if (pg === "banksoal" || menu === "bank_soal") {
      setActiveSidebarMenu("bank_soal");
    } else if (pg === "jadwal" || menu === "jadwal_ujian") {
      setActiveSidebarMenu("jadwal_ujian");
    } else if (pg === "nilai" || menu === "hasil_nilai") {
      setActiveSidebarMenu("hasil_nilai");
    } else if (pg === "analisis" || menu === "analisis_soal") {
      setActiveSidebarMenu("analisis_soal");
    }
  }, [searchParams]);

  // Modal States
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [editingCardIndex, setEditingCardIndex] = useState<number | null>(null);
  const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<QuizQuestion | null>(null);
  const [showEditVideoModal, setShowEditVideoModal] = useState(false);
  const [showEditLKPDModal, setShowEditLKPDModal] = useState(false);

  // Modal States: Menu & Sub-menu Elemen
  const [showEditSubMenuModal, setShowEditSubMenuModal] = useState(false);
  const [editingSubMenuId, setEditingSubMenuId] = useState<string | null>(null);
  const [subMenuTitleInput, setSubMenuTitleInput] = useState("");
  const [subMenuSubtitleInput, setSubMenuSubtitleInput] = useState("");
  const [subMenuBadgeInput, setSubMenuBadgeInput] = useState("");
  const [subMenuEnabledInput, setSubMenuEnabledInput] = useState(true);

  const [showAddSubMenuModal, setShowAddSubMenuModal] = useState(false);
  const [newSubMenuTitle, setNewSubMenuTitle] = useState("");
  const [newSubMenuSubtitle, setNewSubMenuSubtitle] = useState("");
  const [newSubMenuBadge, setNewSubMenuBadge] = useState("");

  const [showEditHookModal, setShowEditHookModal] = useState(false);
  const [hookQuestionInput, setHookQuestionInput] = useState("");
  const [hookContextInput, setHookContextInput] = useState("");

  const [showEditCaseModal, setShowEditCaseModal] = useState(false);
  const [caseTitleInput, setCaseTitleInput] = useState("");
  const [caseScenarioInput, setCaseScenarioInput] = useState("");
  const [caseInstructionInput, setCaseInstructionInput] = useState("");

  // Form State: Kartu Materi
  const [cardTitle, setCardTitle] = useState("");
  const [cardContent, setCardContent] = useState("");
  const [cardCaseStudy, setCardCaseStudy] = useState("");
  const [cardDidYouKnow, setCardDidYouKnow] = useState("");

  // Form State: Butir Soal
  const [qTargetElemen, setQTargetElemen] = useState("E3");
  const [qBloom, setQBloom] = useState<"C1" | "C2" | "C3" | "C4" | "C5" | "C6">("C3");
  const [qStem, setQStem] = useState("");
  const [qOptA, setQOptA] = useState("");
  const [qOptB, setQOptB] = useState("");
  const [qOptC, setQOptC] = useState("");
  const [qOptD, setQOptD] = useState("");
  const [qCorrect, setQCorrect] = useState("A");
  const [qExplanation, setQExplanation] = useState("");

  // Form State: Video
  const [videoTitle, setVideoTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoGuide, setVideoGuide] = useState("");

  // Form State: LKPD
  const [lkpdTitle, setLkpdTitle] = useState("");
  const [lkpdObjective, setLkpdObjective] = useState("");
  const [lkpdTools, setLkpdTools] = useState("");
  const [lkpdSteps, setLkpdSteps] = useState("");

  // Filter Bank Soal
  const [bankSearch, setBankSearch] = useState("");
  const [bankElemenFilter, setBankElemenFilter] = useState("all");
  const [bankBloomFilter, setBankBloomFilter] = useState("all");

  const showNotification = (msg: string) => {
    setNotice(msg);
    setTimeout(() => setNotice(null), 3500);
  };

  const activeElemen = curriculumData[selectedElemenCode] || getStoredElemen(selectedElemenCode);

  // Sub-menu Icon Resolver
  const subMenuIconMap: Record<string, React.ElementType> = {
    hook: Sparkles,
    pretest: HelpCircle,
    materi: Layers,
    video: Video,
    game: Gamepad2,
    case: Lightbulb,
    kuis: CheckSquare,
    lkpd: FileText,
    journal: Target,
  };

  // Handlers untuk Menu & Sub-menu Elemen
  const handleToggleSubMenu = (id: string, currentEnabled: boolean) => {
    toggleSubMenu(selectedElemenCode, id, !currentEnabled);
    showNotification(`Sub-menu "${id}" berhasil ${!currentEnabled ? "diaktifkan" : "dinonaktifkan"}.`);
  };

  const handleMoveSubMenu = (index: number, direction: "up" | "down") => {
    moveSubMenu(selectedElemenCode, index, direction);
    showNotification(`Urutan alur pembelajaran berhasil dipindahkan ke ${direction === "up" ? "atas" : "bawah"}.`);
  };

  const handleApplyPreset = (preset: "all" | "theory" | "practical" | "assessment") => {
    applySubMenuPreset(selectedElemenCode, preset);
    const presetNames = {
      all: "Semua Aktif (9 Langkah Lengkap)",
      theory: "Fokus Teori & Konsep",
      practical: "Fokus Praktikum Studio",
      assessment: "Fokus Asesmen / Evaluasi",
    };
    showNotification(`Preset alur belajar "${presetNames[preset]}" berhasil diterapkan pada ELEMEN ${selectedElemenCode}.`);
  };

  const handleResetSubMenus = () => {
    resetElemenSubMenus(selectedElemenCode);
    showNotification(`Alur menu pembelajaran ELEMEN ${selectedElemenCode} berhasil direset ke standar baku BSKAP.`);
  };

  const handleOpenEditSubMenu = (sub: ElemenSubMenuItem) => {
    setEditingSubMenuId(sub.id);
    setSubMenuTitleInput(sub.title);
    setSubMenuSubtitleInput(sub.subtitle);
    setSubMenuBadgeInput(sub.badge || "");
    setSubMenuEnabledInput(sub.enabled);
    setShowEditSubMenuModal(true);
  };

  const handleSaveSubMenuDetail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSubMenuId || !subMenuTitleInput.trim()) return;
    updateSubMenuDetail(selectedElemenCode, editingSubMenuId, {
      title: subMenuTitleInput.trim(),
      subtitle: subMenuSubtitleInput.trim(),
      badge: subMenuBadgeInput.trim() || undefined,
      enabled: subMenuEnabledInput,
    });
    setShowEditSubMenuModal(false);
    showNotification(`Detail sub-menu "${subMenuTitleInput}" berhasil disimpan.`);
  };

  const handleOpenAddSubMenu = () => {
    setNewSubMenuTitle("");
    setNewSubMenuSubtitle("");
    setNewSubMenuBadge("Ekstra");
    setShowAddSubMenuModal(true);
  };

  const handleSaveCustomSubMenu = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubMenuTitle.trim()) return;
    const customId = `custom_${Date.now()}`;
    addCustomSubMenu(selectedElemenCode, {
      id: customId,
      title: newSubMenuTitle.trim(),
      subtitle: newSubMenuSubtitle.trim() || "Aktivitas pembelajaran tambahan",
      iconName: "Sparkles",
      badge: newSubMenuBadge.trim() || undefined,
      enabled: true,
    });
    setShowAddSubMenuModal(false);
    showNotification(`Sub-menu baru "${newSubMenuTitle}" berhasil ditambahkan.`);
  };

  const handleDeleteSubMenu = (id: string) => {
    removeSubMenu(selectedElemenCode, id);
    showNotification(`Sub-menu berhasil dihapus dari alur ELEMEN ${selectedElemenCode}.`);
  };

  // Handlers untuk Pemantik (Hook)
  const handleOpenEditHook = () => {
    setHookQuestionInput(activeElemen?.hookQuestion || "Bagaimana kru produksi TV & Film memastikan setiap adegan siaran langsung berjalan tanpa cela?");
    setHookContextInput(activeElemen?.hookContext || "Dalam dunia broadcasting, siaran langsung (live broadcast) membutuhkan koordinasi interkom tanpa cela.");
    setShowEditHookModal(true);
  };

  const handleSaveHook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hookQuestionInput.trim()) return;
    updateElemenHook(selectedElemenCode, hookQuestionInput.trim(), hookContextInput.trim());
    setShowEditHookModal(false);
    showNotification(`Pertanyaan pemantik ELEMEN ${selectedElemenCode} berhasil diperbarui.`);
  };

  // Handlers untuk Kasus Industri (Case Study)
  const handleOpenEditCase = () => {
    setCaseTitleInput(activeElemen?.caseTitle || "Transmisi Darurat Siaran Langsung (Live OB Van)");
    setCaseScenarioInput(activeElemen?.caseScenario || "Saat siaran langsung, terjadi pemadaman listrik lokal di studio transmisi outdoor (OB Van).");
    setCaseInstructionInput(activeElemen?.caseInstruction || "Analisis langkah koordinasi darurat antara Technical Director dan Switcher Operator.");
    setShowEditCaseModal(true);
  };

  const handleSaveCase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!caseTitleInput.trim()) return;
    updateElemenCase(selectedElemenCode, caseTitleInput.trim(), caseScenarioInput.trim(), caseInstructionInput.trim());
    setShowEditCaseModal(false);
    showNotification(`Studi kasus industri ELEMEN ${selectedElemenCode} berhasil diperbarui.`);
  };

  // Handlers untuk Format Soal CBT BroMan (pg=formatsoal)
  const sampleReferenceRows = [
    {
      no: 1,
      jenis: "1 (Pilihan Ganda)",
      soal: "Sudut pengambilan gambar yang diposisikan tepat sejajar dengan ketinggian mata objek untuk memberikan kesan wajar dan netral disebut...",
      opsiA: "Eye Level",
      opsiB: "Bird Eye View",
      opsiC: "Frog Eye View",
      opsiD: "High Angle",
      opsiE: "Low Angle",
      kunci: "A",
      kesukaran: "1 (Mudah)",
      gambar: "-",
    },
    {
      no: 2,
      jenis: "1 (Pilihan Ganda)",
      soal: "Perhatikan diagram Three-Point Lighting studio berikut. Lampu yang berfungsi memberikan intensitas cahaya utama paling dominan pada subjek adalah...",
      opsiA: "Key Light",
      opsiB: "Fill Light",
      opsiC: "Back Light",
      opsiD: "Hair Light",
      opsiE: "Practical Light",
      kunci: "A",
      kesukaran: "2 (Sedang)",
      gambar: "three_point_lighting.jpg",
    },
    {
      no: 3,
      jenis: "1 (Pilihan Ganda)",
      soal: "Komponen lensa kamera video yang berfungsi mengatur diameter bukaan cahaya (diafragma) yang masuk ke sensor kamera adalah...",
      opsiA: "Iris / Aperture",
      opsiB: "Shutter Speed Ring",
      opsiC: "Focus Ring",
      opsiD: "Zoom Servo",
      opsiE: "Neutral Density Filter",
      kunci: "A",
      kesukaran: "2 (Sedang)",
      gambar: "-",
    },
    {
      no: 4,
      jenis: "1 (Pilihan Ganda)",
      soal: "Jenis mikrofon dengan pola penangkapan directional sempit yang sering dipasang pada boom pole untuk syuting outdoor adalah...",
      opsiA: "Shotgun Microphone",
      opsiB: "Omnidirectional",
      opsiC: "Bidirectional Figure-8",
      opsiD: "Lavalier Clip-on",
      opsiE: "Boundary PZM",
      kunci: "A",
      kesukaran: "2 (Sedang)",
      gambar: "-",
    },
    {
      no: 5,
      jenis: "1 (Pilihan Ganda)",
      soal: "Kabel audio standar broadcast 3-pin dengan transmisi sinyal seimbang (balanced audio) untuk mencegah interferensi elektromagnetik adalah...",
      opsiA: "XLR / Cannon",
      opsiB: "RCA Stereo",
      opsiC: "Jack TS 3.5mm",
      opsiD: "Speakon",
      opsiE: "BNC Coaxial",
      kunci: "A",
      kesukaran: "3 (Sukar)",
      gambar: "konektor_audio_xlr.jpg",
    },
    {
      no: 6,
      jenis: "2 (Soal Esai)",
      soal: "Jelaskan 3 fungsi utama dari Producer dalam tahapan Praproduksi pembuatan program video talkshow studio!",
      opsiA: "-",
      opsiB: "-",
      opsiC: "-",
      opsiD: "-",
      opsiE: "-",
      kunci: "Mengkoordinasikan anggaran, memimpin rundown riset, dan mengurus perizinan studio",
      kesukaran: "2 (Sedang)",
      gambar: "-",
    },
  ];

  const handleDownloadTemplateExcel = () => {
    const csvContent =
      "\uFEFF" +
      "No,Jenis,Soal,Opsi A,Opsi B,Opsi C,Opsi D,Opsi E,Kunci,Tingkat,Gambar\n" +
      '1,1,"Sudut pengambilan gambar yang diposisikan tepat sejajar dengan ketinggian mata objek untuk memberikan kesan wajar dan netral disebut...","Eye Level","Bird Eye View","Frog Eye View","High Angle","Low Angle","A",1,""\n' +
      '2,1,"Lampu utama yang memberikan pencahayaan paling dominan pada subjek dalam skema Three-Point Lighting studio televisi adalah...","Key Light","Fill Light","Back Light","Hair Light","Practical Light","A",2,"three_point_lighting.jpg"\n' +
      '3,1,"Komponen lensa kamera video yang berfungsi untuk mengatur diameter bukaan cahaya (diafragma) yang masuk ke sensor kamera adalah...","Iris / Aperture","Shutter Speed Ring","Focus Ring","Zoom Servo","Neutral Density Filter","A",2,""\n' +
      '4,1,"Jenis mikrofon dengan pola penangkapan suara directional sempit yang sering dipasang pada boom pole untuk produksi film/lapangan adalah...","Shotgun Microphone","Omnidirectional","Bidirectional Figure-8","Lavalier Clip-on","Boundary PZM","A",2,""\n' +
      '5,1,"Kabel audio standar penyiaran profesional dengan 3 pin yang mengirimkan sinyal seimbang (balanced audio) untuk menghindari interferensi noise adalah...","XLR / Cannon","RCA Stereo","Jack TS 3.5mm","Speakon","BNC Coaxial","A",3,"konektor_audio_xlr.jpg"\n' +
      '6,2,"Jelaskan 3 fungsi utama dari Producer dalam tahapan Praproduksi pembuatan program video talkshow studio!","","","","","","Mengkoordinasikan anggaran, memimpin riset & rundown, mengurus perizinan studio","2",""\n';

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Template_CBT_BroMan_PG_Esai.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showNotification("Template Excel PG CBT BroMan (.csv) berhasil diunduh.");
  };

  const handleDownloadTemplateEsai = () => {
    const csvContent =
      "\uFEFF" +
      "No,Jenis,Soal,Opsi A,Opsi B,Opsi C,Opsi D,Opsi E,Kunci,Tingkat,Gambar\n" +
      '1,2,"Jelaskan langkah-langkah kalibrasi manual White Balance pada kamera video broadcast sebelum syuting dimulai!","","","","","","Arahkan kamera ke kertas putih/grey card, zoom in hingga penuh di viewfinder, tekan tombol manual WB A/B hingga display viewfinder OK.","2",""\n' +
      '2,2,"Sebutkan dan jelaskan fungsi 3 divisi utama dalam tahapan Pascaproduksi (Post-Production) pembuatan film pendek!","","","","","","Divisi Offline/Online Editing, Divisi Sound Design/Audio Mixing, dan Divisi Color Grading/Mastering.","2",""\n' +
      '3,2,"Bagaimanakah Standard Operating Procedure (SOP) keselamatan kerja saat mengoperasikan tata cahaya berdaya tinggi (1000W+) di studio televisi?","","","","","","Gunakan sarung tangan tahan panas (heat-resistant gloves), pasang safety bond kabel baja pada c-stand/rigging, dan pastikan sirkulasi udara baik.","3",""\n';

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Template_CBT_BroMan_Esai.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showNotification("Template Excel Soal Esai CBT BroMan (.csv) berhasil diunduh.");
  };

  const handleDownloadTemplateWord = () => {
    const docContent = `FORMAT PENULISAN SOAL CBT BroMan
APLIKASI UJIAN BERBASIS KOMPUTER (CBT)
Mata Pelajaran : Dasar-Dasar Broadcasting dan Perfilman
Jenjang         : SMK (5 Opsi Jawaban A, B, C, D, E)
================================================================================

PETUNJUK FORMAT PENULISAN SOAL WORD (Q & ANS):
1. Setiap soal diawali dengan huruf "Q:" diikuti spasi dan teks pertanyaan.
2. Pilihan jawaban diawali dengan "A. ", "B. ", "C. ", "D. ", "E. ".
3. Kunci jawaban diawali dengan "ANS:" diikuti spasi dan huruf kapital opsi yang benar.
4. Kosongkan satu baris antar butir soal.

--------------------------------------------------------------------------------

Q: Sudut pengambilan gambar yang diposisikan tepat sejajar dengan ketinggian mata objek untuk memberikan kesan wajar dan netral disebut...
A. Eye Level
B. Bird Eye View
C. Frog Eye View
D. High Angle
E. Low Angle
ANS: A

Q: Lampu utama yang memberikan pencahayaan paling dominan pada subjek dalam skema Three-Point Lighting studio televisi adalah...
A. Key Light
B. Fill Light
C. Back Light
D. Hair Light
E. Practical Light
ANS: A

Q: Komponen lensa kamera video yang berfungsi untuk mengatur diameter bukaan cahaya (diafragma) yang masuk ke sensor kamera adalah...
A. Iris / Aperture
B. Shutter Speed Ring
C. Focus Ring
D. Zoom Servo
E. Neutral Density Filter
ANS: A

Q: Jenis mikrofon dengan pola penangkapan suara directional sempit yang sering dipasang pada boom pole untuk produksi film/lapangan adalah...
A. Shotgun Microphone
B. Omnidirectional
C. Bidirectional Figure-8
D. Lavalier Clip-on
E. Boundary PZM
ANS: A

Q: Kabel audio standar penyiaran profesional dengan 3 pin yang mengirimkan sinyal seimbang (balanced audio) untuk menghindari interferensi noise adalah...
A. XLR / Cannon
B. RCA Stereo
C. Jack TS 3.5mm
D. Speakon
E. BNC Coaxial
ANS: A

Q: Jelaskan 3 fungsi utama dari Producer dalam tahapan Praproduksi pembuatan program video talkshow studio!
A. [SOAL URAIAN / ESAI]
ANS: Mengkoordinasikan anggaran produksi, memimpin riset & penyusunan jadwal syuting (shooting schedule), dan mengurus perizinan lokasi studio.
`;

    const blob = new Blob([docContent], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Template_CBT_BroMan_Word.doc");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showNotification("Template Dokumen Word CBT BroMan (.doc) berhasil diunduh.");
  };

  const handleDownloadMediaGuide = () => {
    const textContent = `PANDUAN PAKET ARSIP MEDIA (GAMBAR & AUDIO) CBT BroMan
================================================================================

1. KETENTUAN GAMBAR:
   - Format file yang didukung: JPG, JPEG, PNG.
   - Ukuran resolusi maksimal lebar: 800 pixel (disarankan 600 - 800 px) dengan kualitas kompresi 80%.
   - Rasio gambar yang disarankan: 16:9 atau 4:3.
   - Penamaan file gambar DILARANG menggunakan SPASI atau KARAKTER KHUSUS (@#$%^&*).
     Contoh yang benar:
       - kamera_sony_fx3.jpg
       - skema_three_point_lighting.png
       - diagram_mixer_audio.jpg
     Contoh yang SALAH:
       - kamera sony fx3.jpg (ada spasi)
       - soal#1.jpg (ada tanda pagar)

2. KETENTUAN AUDIO (JIKA ADA SOAL LISTENING):
   - Format file: MP3 stereo/mono, bitrate 128 kbps.
   - Penamaan file: audio_soal_01.mp3

3. CARA PENGEMASAN FILE ZIP:
   - Kumpulkan semua file gambar dan audio pendukung dalam satu folder.
   - Pilih semua file di dalam folder tersebut, lalu klik kanan -> Send to -> Compressed (zipped) folder (atau gunakan WinRAR/7-Zip).
   - Beri nama arsip: media_soal_cbt.zip
   - Unggah berkas ZIP tersebut pada menu Bank Soal -> Import Berkas Media/Gambar.

4. MENGHUBUNGKAN DENGAN EXCEL:
   - Di kolom "Gambar" pada template Excel, cukup tuliskan nama filenya saja (misal: "kamera_sony_fx3.jpg").
   - Jangan menambahkan path folder seperti "C:/gambar/kamera.jpg", cukup tuliskan nama filenya saja.
`;

    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Panduan_Paket_Media_CBT_BroMan.txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showNotification("Panduan Paket Media Gambar/Audio CBT berhasil diunduh.");
  };

  const handleCopySampleRows = () => {
    const sampleText =
      "No\tJenis\tSoal\tOpsi A\tOpsi B\tOpsi C\tOpsi D\tOpsi E\tKunci\tTingkat\tGambar\n" +
      "1\t1\tSudut pengambilan gambar yang diposisikan tepat sejajar mata objek disebut...\tEye Level\tBird Eye View\tFrog Eye View\tHigh Angle\tLow Angle\tA\t1\t\n" +
      "2\t1\tLampu utama yang paling dominan dalam Three-Point Lighting adalah...\tKey Light\tFill Light\tBack Light\tHair Light\tPractical Light\tA\t2\tthree_point_lighting.jpg\n" +
      "3\t1\tKomponen lensa yang mengatur bukaan cahaya masuk adalah...\tIris / Aperture\tShutter Speed Ring\tFocus Ring\tZoom Servo\tNeutral Density Filter\tA\t2\t\n" +
      "4\t1\tMikrofon directional sempit pada boom pole adalah...\tShotgun Microphone\tOmnidirectional\tBidirectional Figure-8\tLavalier Clip-on\tBoundary PZM\tA\t2\t\n" +
      "5\t2\tJelaskan tahapan kalibrasi manual White Balance kamera broadcast!\t\t\t\t\t\tGrey card, zoom in penuh, tekan WB A/B hingga OK\t2\t";

    navigator.clipboard.writeText(sampleText);
    showNotification("Contoh baris format Excel berhasil disalin ke clipboard!");
  };

  const handleValidateCsvFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsValidatingFile(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = (event.target?.result as string) || "";
        const lines = text.split(/\r?\n/).filter((line) => line.trim().length > 0);
        if (lines.length <= 1) {
          setValidationResult({
            fileName: file.name,
            totalRows: 0,
            pgCount: 0,
            esaiCount: 0,
            validCount: 0,
            issues: ["Berkas kosong atau hanya berisi baris header."],
            previewRows: [],
          });
          setIsValidatingFile(false);
          return;
        }

        const rows = lines.slice(1);
        let pgCount = 0;
        let esaiCount = 0;
        let validCount = 0;
        const issues: string[] = [];
        const previewRows: Array<{
          no: number;
          jenis: string;
          soal: string;
          opsiCount: number;
          kunci: string;
          status: "valid" | "warning" | "error";
          note?: string;
        }> = [];

        rows.forEach((row, idx) => {
          const parts: string[] = [];
          let current = "";
          let inQuotes = false;
          for (let i = 0; i < row.length; i++) {
            const char = row[i];
            if (char === '"') {
              inQuotes = !inQuotes;
            } else if (char === "," && !inQuotes) {
              parts.push(current.trim());
              current = "";
            } else {
              current += char;
            }
          }
          parts.push(current.trim());

          const no = parseInt(parts[0]) || idx + 1;
          const jenis = parts[1] === "2" ? "Esai" : "Pilihan Ganda";
          const soal = parts[2]?.replace(/^"|"$/g, "") || `Butir Soal #${no}`;
          const opsiA = parts[3]?.replace(/^"|"$/g, "") || "";
          const opsiB = parts[4]?.replace(/^"|"$/g, "") || "";
          const opsiC = parts[5]?.replace(/^"|"$/g, "") || "";
          const opsiD = parts[6]?.replace(/^"|"$/g, "") || "";
          const opsiE = parts[7]?.replace(/^"|"$/g, "") || "";
          const kunci = (parts[8]?.replace(/^"|"$/g, "") || "").toUpperCase();

          const opsiCount = [opsiA, opsiB, opsiC, opsiD, opsiE].filter(Boolean).length;
          let rowStatus: "valid" | "warning" | "error" = "valid";
          let note = "";

          if (parts[1] === "2") {
            esaiCount++;
            validCount++;
            note = "Soal esai / uraian valid.";
          } else {
            pgCount++;
            if (opsiCount < 5) {
              rowStatus = "warning";
              note = `Hanya ${opsiCount} opsi terisi. Untuk BroMan wajib 5 opsi (A-E).`;
              issues.push(`Soal #${no}: Opsi jawaban kurang dari 5 (ditemukan ${opsiCount} opsi).`);
            } else if (!["A", "B", "C", "D", "E"].includes(kunci)) {
              rowStatus = "error";
              note = `Kunci jawaban "${kunci}" tidak valid. Harus salah satu dari A, B, C, D, atau E.`;
              issues.push(`Soal #${no}: Kunci jawaban tidak valid ("${kunci}").`);
            } else {
              validCount++;
              note = "5 opsi A-E lengkap & kunci valid.";
            }
          }

          previewRows.push({
            no,
            jenis,
            soal: soal.length > 60 ? soal.substring(0, 60) + "..." : soal,
            opsiCount,
            kunci: kunci || "-",
            status: rowStatus,
            note,
          });
        });

        setValidationResult({
          fileName: file.name,
          totalRows: rows.length,
          pgCount,
          esaiCount,
          validCount,
          issues,
          previewRows,
        });
        showNotification(`Pemeriksaan file "${file.name}" selesai: ${validCount} dari ${rows.length} butir soal valid.`);
      } catch {
        showNotification("Gagal membaca file CSV. Pastikan format file teks/CSV valid.");
      } finally {
        setIsValidatingFile(false);
      }
    };
    reader.readAsText(file);
  };

  // Handlers untuk Kartu Materi
  const handleOpenAddCard = () => {
    setEditingCardIndex(null);
    setCardTitle("");
    setCardContent("");
    setCardCaseStudy("");
    setCardDidYouKnow("");
    setShowAddCardModal(true);
  };

  const handleOpenEditCard = (index: number) => {
    if (!activeElemen?.materialCards[index]) return;
    const card = activeElemen.materialCards[index];
    setEditingCardIndex(index);
    setCardTitle(card.title);
    setCardContent(card.content);
    setCardCaseStudy(card.caseStudy || "");
    setCardDidYouKnow(card.didYouKnow || "");
    setShowAddCardModal(true);
  };

  const handleSaveCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardTitle.trim() || !cardContent.trim()) return;

    const newCard: MaterialCard = {
      title: cardTitle.trim(),
      content: cardContent.trim(),
      caseStudy: cardCaseStudy.trim() || undefined,
      didYouKnow: cardDidYouKnow.trim() || undefined,
    };

    if (editingCardIndex !== null) {
      updateCardInElemen(selectedElemenCode, editingCardIndex, newCard);
      showNotification(`Kartu materi #${editingCardIndex + 1} berhasil diperbarui.`);
    } else {
      addCardToElemen(selectedElemenCode, newCard);
      showNotification(`Kartu materi baru berhasil ditambahkan ke ELEMEN ${selectedElemenCode}.`);
    }
    setShowAddCardModal(false);
  };

  const handleDeleteCard = (index: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus kartu materi ini?")) {
      removeCardFromElemen(selectedElemenCode, index);
      showNotification(`Kartu materi berhasil dihapus.`);
    }
  };

  // Handlers untuk Butir Soal
  const handleOpenAddQuestion = () => {
    setEditingQuestion(null);
    setQTargetElemen(selectedElemenCode);
    setQBloom("C3");
    setQStem("");
    setQOptA("");
    setQOptB("");
    setQOptC("");
    setQOptD("");
    setQCorrect("A");
    setQExplanation("");
    setShowAddQuestionModal(true);
  };

  const handleSaveQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!qStem.trim() || !qOptA.trim() || !qOptB.trim()) return;

    const newQuestion: QuizQuestion = {
      id: editingQuestion ? editingQuestion.id : Date.now(),
      bloom: qBloom,
      stem: qStem.trim(),
      options: [
        { key: "A", text: qOptA.trim() },
        { key: "B", text: qOptB.trim() },
        { key: "C", text: qOptC.trim() || "-" },
        { key: "D", text: qOptD.trim() || "-" },
      ],
      correctKey: qCorrect,
      explanation: qExplanation.trim() || "Pembahasan standar pengampu materi.",
    };

    if (editingQuestion) {
      removeQuestionFromElemen(qTargetElemen, editingQuestion.id);
      addQuestionToElemen(qTargetElemen, newQuestion);
      showNotification(`Butir soal ${newQuestion.id} berhasil diperbarui.`);
    } else {
      addQuestionToElemen(qTargetElemen, newQuestion);
      showNotification(`Butir soal baru (${qBloom}) berhasil ditambahkan ke ELEMEN ${qTargetElemen}.`);
    }
    setShowAddQuestionModal(false);
  };

  const handleDeleteQuestion = (elemenCode: string, questionId: number) => {
    if (confirm("Hapus butir soal ini dari bank soal?")) {
      removeQuestionFromElemen(elemenCode, questionId);
      showNotification(`Butir soal berhasil dihapus dari ELEMEN ${elemenCode}.`);
    }
  };

  // Handlers Video & LKPD
  const handleOpenEditVideo = () => {
    if (!activeElemen) return;
    setVideoTitle(activeElemen.video.title);
    setVideoUrl(activeElemen.video.embedUrl);
    setVideoGuide(activeElemen.video.guide);
    setShowEditVideoModal(true);
  };

  const handleSaveVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl.trim()) return;
    updateVideoInElemen(selectedElemenCode, {
      title: videoTitle.trim() || "Video Pembelajaran",
      embedUrl: videoUrl.trim(),
      guide: videoGuide.trim(),
    });
    setShowEditVideoModal(false);
    showNotification(`Video pembelajaran ELEMEN ${selectedElemenCode} berhasil disimpan.`);
  };

  const handleOpenEditLKPD = () => {
    if (!activeElemen) return;
    setLkpdTitle(activeElemen.lkpd.title);
    setLkpdObjective(activeElemen.lkpd.objective);
    setLkpdTools(activeElemen.lkpd.tools.join(", "));
    setLkpdSteps(activeElemen.lkpd.steps.join("\n"));
    setShowEditLKPDModal(true);
  };

  const handleSaveLKPD = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lkpdTitle.trim()) return;
    updateLKPDInElemen(selectedElemenCode, {
      title: lkpdTitle.trim(),
      objective: lkpdObjective.trim(),
      tools: lkpdTools.split(",").map((s) => s.trim()).filter(Boolean),
      steps: lkpdSteps.split("\n").map((s) => s.trim()).filter(Boolean),
      outputFormat: activeElemen.lkpd.outputFormat,
    });
    setShowEditLKPDModal(false);
    showNotification(`Dokumen LKPD ELEMEN ${selectedElemenCode} berhasil diperbarui.`);
  };

  // Bank Soal Filtered
  const allBankQuestions = getAllBankQuestions();
  const filteredQuestions = allBankQuestions.filter((item) => {
    const matchesSearch =
      item.question.stem.toLowerCase().includes(bankSearch.toLowerCase()) ||
      item.elemenTitle.toLowerCase().includes(bankSearch.toLowerCase());
    const matchesElemen = bankElemenFilter === "all" || item.elemenCode === bankElemenFilter;
    const matchesBloom = bankBloomFilter === "all" || item.question.bloom === bankBloomFilter;
    return matchesSearch && matchesElemen && matchesBloom;
  });

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 flex flex-col font-sans antialiased selection:bg-[#0284c7] selection:text-white">
      {/* ============================================================== */}
      {/* 1. TOP NAVBAR (Sleek Oceanic Depth ala CBT BroMan / BroMan)  */}
      {/* ============================================================== */}
      <header className="h-14 bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0284c7] border-b border-sky-400/20 px-4 flex items-center justify-between shadow-md sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-xl text-white hover:bg-white/15 active:scale-90 transition-all focus:outline-none"
            title="Sembunyikan/Tampilkan Menu Samping"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          {/* Tombol Hijau Dashboard BroMan */}
          <button
            type="button"
            onClick={() => setActiveSidebarMenu("dashboard")}
            className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-sm shadow-emerald-950/20 active:scale-95 transition-all"
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            <span>Dashboard BroMan</span>
          </button>

          {/* Lonceng Notifikasi */}
          <div className="relative">
            <button
              type="button"
              onClick={() => showNotification("1 Notifikasi Ujian: Sesi CBT BroMan BCF Aktif")}
              className="p-2 text-white hover:bg-white/15 rounded-xl relative transition-all active:scale-90 focus:outline-none"
              title="Notifikasi"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white shadow ring-2 ring-sky-700">
                1
              </span>
            </button>
          </div>

          {/* User Profile Avatar & Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center gap-2.5 pl-2.5 py-1 pr-2 rounded-full hover:bg-white/10 border-l border-white/20 text-white transition-all focus:outline-none"
            >
              <div className="h-7 w-7 rounded-full bg-slate-900 border border-white/40 flex items-center justify-center text-white font-bold text-xs shadow-sm overflow-hidden">
                <User className="h-4 w-4 text-amber-300" />
              </div>
              <span className="hidden md:inline-block text-xs font-semibold tracking-tight">
                Saputra Indra Purnama, S.Pd.
              </span>
              <ChevronDown className="h-3.5 w-3.5 text-white/80" />
            </button>

            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-slate-200 shadow-2xl p-2 z-50 text-slate-800 text-xs animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-2 border-b border-slate-100">
                  <div className="font-bold text-slate-900">Saputra Indra Purnama, S.Pd.</div>
                  <div className="text-[11px] text-slate-500 font-mono">199110042022211007</div>
                  <div className="text-[10px] text-sky-600 font-semibold mt-0.5">Guru Mata Pelajaran BCF</div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveSidebarMenu("profil");
                    setProfileDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 font-medium flex items-center gap-2 text-slate-700 transition-colors"
                >
                  <User className="h-3.5 w-3.5 text-slate-400" />
                  <span>Profil Saya</span>
                </button>
                <Link
                  href="/assesment/tka/guru"
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 font-medium flex items-center gap-2 text-slate-700 transition-colors"
                >
                  <Sliders className="h-3.5 w-3.5 text-amber-500" />
                  <span>Setting CBT & Asesmen</span>
                </Link>
                {userRole === "super_admin" && (
                  <Link
                    href="/admin"
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 font-medium flex items-center gap-2 text-slate-700 transition-colors"
                  >
                    <ShieldCheck className="h-3.5 w-3.5 text-amber-500" />
                    <span>Dashboard Admin</span>
                  </Link>
                )}
                <Link
                  href="/"
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-rose-50 text-rose-600 font-medium flex items-center gap-2 border-t border-slate-100 mt-1 transition-colors"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span>Keluar</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ============================================================== */}
      {/* 2. BODY LAYOUT (Sidebar Kiri + Konten Kanan)                     */}
      {/* ============================================================== */}
      <div className="flex-1 flex overflow-hidden">
        {/* SIDEBAR KIRI */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-0 -translate-x-full"
          } transition-all duration-300 ease-in-out bg-white border-r border-slate-200/90 shadow-[4px_0_24px_rgba(0,0,0,0.02)] flex flex-col shrink-0 z-30 overflow-y-auto`}
        >
          {/* Header Brand Sidebar */}
          <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-white">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-amber-500 text-white shadow-md shadow-sky-600/25 ring-2 ring-sky-100">
              <Film className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-[#0284c7]">
                CBTBroMan
              </div>
              <div className="text-[8.5px] font-bold text-slate-400 tracking-wider">
                APLIKASI UJIAN BERBASIS KOMPUTER
              </div>
            </div>
          </div>

          {/* 3 Tombol Kotak Atas: Dashboard, Profil, Keluar */}
          <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50/80 border-b border-slate-200/80">
            <button
              type="button"
              onClick={() => setActiveSidebarMenu("dashboard")}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-white font-bold text-[11px] shadow-sm transition-all duration-200 active:scale-95 ${
                activeSidebarMenu === "dashboard"
                  ? "bg-gradient-to-b from-[#0369a1] to-[#0c4a6e] ring-2 ring-sky-400 shadow-inner"
                  : "bg-gradient-to-b from-[#0284c7] to-[#0369a1] hover:from-[#0369a1] hover:to-[#0c4a6e]"
              }`}
            >
              <Home className="h-4 w-4 mb-0.5" />
              <span>Dashboard</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveSidebarMenu("profil")}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-white font-bold text-[11px] shadow-sm transition-all duration-200 active:scale-95 ${
                activeSidebarMenu === "profil"
                  ? "bg-gradient-to-b from-[#0369a1] to-[#0c4a6e] ring-2 ring-sky-400 shadow-inner"
                  : "bg-gradient-to-b from-[#0284c7] to-[#0369a1] hover:from-[#0369a1] hover:to-[#0c4a6e]"
              }`}
            >
              <User className="h-4 w-4 mb-0.5" />
              <span>Profil</span>
            </button>
            <Link
              href="/"
              className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-b from-[#0284c7] to-[#0369a1] hover:from-rose-600 hover:to-rose-700 text-white font-bold text-[11px] shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              <LogOut className="h-4 w-4 mb-0.5" />
              <span>Keluar</span>
            </Link>
          </div>

          {/* Kelompok Menu: MENU UTAMA (Pink / Magenta Text) */}
          <div className="p-3 flex-1 space-y-1.5">
            <div className="text-[10.5px] font-black text-[#c026d3] uppercase tracking-wider px-2 mb-2 pt-1 flex items-center gap-1.5">
              <span>MENU UTAMA</span>
            </div>

            {/* Dashboard BroMan (Active Green Pill) */}
            <button
              type="button"
              onClick={() => setActiveSidebarMenu("dashboard")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 ${
                activeSidebarMenu === "dashboard"
                  ? "bg-gradient-to-r from-[#059669] to-[#047857] text-white shadow-md shadow-emerald-600/20"
                  : "text-slate-600 hover:bg-sky-50 hover:text-sky-900"
              }`}
            >
              <LayoutGrid className="h-4 w-4 shrink-0" />
              <span>Dashboard BroMan</span>
            </button>

            {/* Profil Saya */}
            <button
              type="button"
              onClick={() => setActiveSidebarMenu("profil")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 group ${
                activeSidebarMenu === "profil"
                  ? "bg-gradient-to-r from-[#059669] to-[#047857] text-white shadow-md shadow-emerald-600/20"
                  : "text-slate-600 hover:bg-sky-50 hover:text-sky-900"
              }`}
            >
              <User className={`h-4 w-4 shrink-0 transition-transform group-hover:scale-110 ${activeSidebarMenu === "profil" ? "text-white" : "text-sky-500"}`} />
              <span>Profil Saya</span>
            </button>

            {/* Bank Soal */}
            <button
              type="button"
              onClick={() => setActiveSidebarMenu("bank_soal")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 group ${
                activeSidebarMenu === "bank_soal"
                  ? "bg-gradient-to-r from-[#059669] to-[#047857] text-white shadow-md shadow-emerald-600/20"
                  : "text-slate-600 hover:bg-sky-50 hover:text-sky-900"
              }`}
            >
              <FileSpreadsheet className={`h-4 w-4 shrink-0 transition-transform group-hover:scale-110 ${activeSidebarMenu === "bank_soal" ? "text-white" : "text-indigo-500"}`} />
              <span>Bank Soal</span>
            </button>

            {/* Format BroMan */}
            <button
              type="button"
              onClick={() => setActiveSidebarMenu("format_broman")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 group ${
                activeSidebarMenu === "format_broman"
                  ? "bg-gradient-to-r from-[#059669] to-[#047857] text-white shadow-md shadow-emerald-600/20"
                  : "text-slate-600 hover:bg-sky-50 hover:text-sky-900"
              }`}
            >
              <FileText className={`h-4 w-4 shrink-0 transition-transform group-hover:scale-110 ${activeSidebarMenu === "format_broman" ? "text-white" : "text-emerald-500"}`} />
              <span>Format BroMan</span>
            </button>

            {/* Kelola Slide & Materi Pembelajaran (New) */}
            <button
              type="button"
              onClick={() => setActiveSidebarMenu("slide_deck")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 group ${
                activeSidebarMenu === "slide_deck"
                  ? "bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white shadow-md shadow-sky-600/20"
                  : "text-slate-600 hover:bg-sky-50 hover:text-sky-900"
              }`}
            >
              <Layers className={`h-4 w-4 shrink-0 transition-transform group-hover:scale-110 ${activeSidebarMenu === "slide_deck" ? "text-white" : "text-sky-500"}`} />
              <span>Kelola Slide Materi</span>
            </button>

            {/* Jadwal Ujian */}
            <button
              type="button"
              onClick={() => setActiveSidebarMenu("jadwal_ujian")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 group ${
                activeSidebarMenu === "jadwal_ujian"
                  ? "bg-gradient-to-r from-[#059669] to-[#047857] text-white shadow-md shadow-emerald-600/20"
                  : "text-slate-600 hover:bg-sky-50 hover:text-sky-900"
              }`}
            >
              <Calendar className={`h-4 w-4 shrink-0 transition-transform group-hover:scale-110 ${activeSidebarMenu === "jadwal_ujian" ? "text-white" : "text-amber-500"}`} />
              <span>Jadwal Ujian</span>
            </button>

            {/* Hasil Nilai */}
            <button
              type="button"
              onClick={() => setActiveSidebarMenu("hasil_nilai")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 group ${
                activeSidebarMenu === "hasil_nilai"
                  ? "bg-gradient-to-r from-[#059669] to-[#047857] text-white shadow-md shadow-emerald-600/20"
                  : "text-slate-600 hover:bg-sky-50 hover:text-sky-900"
              }`}
            >
              <ClipboardList className={`h-4 w-4 shrink-0 transition-transform group-hover:scale-110 ${activeSidebarMenu === "hasil_nilai" ? "text-white" : "text-rose-500"}`} />
              <span>Hasil Nilai</span>
            </button>

            {/* Analisis Butir Soal */}
            <button
              type="button"
              onClick={() => setActiveSidebarMenu("analisis_soal")}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 group ${
                activeSidebarMenu === "analisis_soal"
                  ? "bg-gradient-to-r from-[#059669] to-[#047857] text-white shadow-md shadow-emerald-600/20"
                  : "text-slate-600 hover:bg-sky-50 hover:text-sky-900"
              }`}
            >
              <TrendingUp className={`h-4 w-4 shrink-0 transition-transform group-hover:scale-110 ${activeSidebarMenu === "analisis_soal" ? "text-white" : "text-teal-500"}`} />
              <span>Analisis Butir Soal</span>
            </button>
          </div>
        </aside>

        {/* KONTEN UTAMA */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#f8fafc]">
          {/* Notifikasi Toast */}
          {notice && (
            <div className="mb-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 text-xs font-semibold shadow-xl shadow-emerald-900/10 flex items-center justify-between animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-200" />
                <span>{notice}</span>
              </div>
              <button
                type="button"
                onClick={() => setNotice(null)}
                className="hover:opacity-80 p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          {/* ========================================================== */}
          {/* TAMPILAN A: DASHBOARD UTAMA BROMAN (Persis Foto Screenshot)*/}
          {/* ========================================================== */}
          {activeSidebarMenu === "dashboard" && (
            <div className="space-y-6 max-w-7xl mx-auto">
              {/* Header Title & Date/Time Pills */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                  <span>CBTBroMan</span>
                </h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-purple-800 to-purple-900 border border-purple-700/60 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-sm">
                    <Calendar className="h-3.5 w-3.5 text-purple-300" />
                    <span>{currentDateFormatted || "Selasa, 13 Oktober 2026"}</span>
                  </div>
                  <div className="bg-gradient-to-r from-rose-600 to-red-600 border border-red-500/60 text-white text-xs font-mono font-black tracking-wider px-3.5 py-1.5 rounded-lg shadow-sm">
                    {currentTime || "17:35:44"}
                  </div>
                </div>
              </div>

              {/* Teacher Welcome Hero Card (Elevated Dark Banner) */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0b1329] via-[#0f172a] to-[#1e1b4b] border border-indigo-500/20 text-white p-6 sm:p-7 shadow-xl shadow-slate-900/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
                <div className="relative flex items-center gap-4.5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30 ring-4 ring-blue-500/20">
                    <Monitor className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      Saputra Indra Purnama, S.Pd.
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs">
                      <span className="font-mono bg-slate-800/90 border border-slate-700/80 px-2.5 py-0.5 rounded-lg text-slate-300">
                        🪪 199110042022211007
                      </span>
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-lg shadow-sm">
                        <User className="h-3 w-3" />
                        <span>Guru Mata Pelajaran</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveSidebarMenu("bank_soal")}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold px-4 py-2.5 shadow-md shadow-blue-600/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Buat Bank Soal</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveSidebarMenu("jadwal_ujian")}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white text-xs font-bold px-4 py-2.5 shadow-md shadow-sky-600/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Jadwal Ujian</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveSidebarMenu("analisis_soal")}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold px-4 py-2.5 shadow-md shadow-emerald-600/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all"
                  >
                    <TrendingUp className="h-4 w-4" />
                    <span>Analisis Butir Soal</span>
                  </button>
                </div>
              </div>

              {/* 4 Stat Metric Cards (Row of 4) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Card 1 */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-sky-300/80 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-4">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 text-sky-600 border border-sky-200/60 shadow-sm">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {allBankQuestions.length} ({allBankQuestions.length} Butir)
                    </div>
                    <div className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                      BANK SOAL DIAMPU
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-emerald-300/80 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-4">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-600 border border-emerald-200/60 shadow-sm">
                    <Play className="h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">0</div>
                    <div className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                      JADWAL UJIAN AKTIF
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-amber-300/80 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-4">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 text-amber-600 border border-amber-200/60 shadow-sm">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">0</div>
                    <div className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                      ANTREAN KOREKSI ESAI
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-purple-300/80 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-4">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 text-purple-600 border border-purple-200/60 shadow-sm">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">0%</div>
                    <div className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                      KETUNTASAN KKM MAPEL
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Widgets (Row 2 & 3) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Card Jadwal Ujian Aktif Hari Ini */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-6">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                      <Clock className="h-4 w-4 text-emerald-600" />
                      <span>Jadwal Ujian Aktif Hari Ini</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveSidebarMenu("jadwal_ujian")}
                      className="inline-flex items-center gap-1.5 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span>Semua Jadwal</span>
                    </button>
                  </div>

                  <div className="py-10 text-center">
                    <div className="h-16 w-16 rounded-2xl bg-slate-50 border border-slate-100 text-slate-300 flex items-center justify-center mx-auto mb-3">
                      <Calendar className="h-8 w-8" />
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      Tidak ada jadwal ujian aktif untuk mata pelajaran Anda saat ini.
                    </p>
                  </div>
                </div>

                {/* Card Mutu Butir Soal AKM (Psikometri) */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-3.5 mb-6 text-sm font-bold text-slate-800">
                    <PieChart className="h-4 w-4 text-sky-600" />
                    <span>Mutu Butir Soal AKM (Psikometri)</span>
                  </div>

                  <div className="py-8 text-center max-w-sm mx-auto">
                    <div className="h-16 w-16 rounded-2xl bg-slate-50 border border-slate-100 text-slate-300 flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="h-8 w-8" />
                    </div>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                      Belum ada hasil ujian yang mencukupi untuk kalkulasi psikometri.
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Data analisis akan otomatis dihitung saat siswa menyelesaikan ujian.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Antrean Koreksi Jawaban Esai Siswa */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-6">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                    <Edit3 className="h-4 w-4 text-amber-600" />
                    <span>Antrean Koreksi Jawaban Esai Siswa</span>
                  </div>
                  <span className="rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 px-3 py-0.5 text-xs font-bold">
                    0 Menunggu
                  </span>
                </div>

                <div className="py-8 text-center">
                  <div className="h-14 w-14 rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-500 flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-bold">
                    Semua jawaban esai siswa telah tuntas dinilai. Luar biasa!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* TAMPILAN B: BANK SOAL (CANDY CBT BroMan)      */}
          {/* ========================================================== */}
          {activeSidebarMenu === "bank_soal" && (
            <BankSoalCbtView
              onNavigateToFormatSoal={() => {
                setActiveSidebarMenu("format_broman");
                setActiveFormatTab("format_cbt");
              }}
              showToast={(msg) => showNotification(msg)}
            />
          )}

          {/* ========================================================== */}
          {/* TAMPILAN C: FORMAT BROMAN (KURIKULUM & RPM)   */}
          {/* ========================================================== */}
          {activeSidebarMenu === "format_broman" && (
            <div className="space-y-6">
              {/* Header Box Format CBT BroMan */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <ShieldCheck className="h-3 w-3 text-emerald-600" />
                      CBT BroMan
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      pg=formatsoal
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <FileSpreadsheet className="h-5 w-5 text-emerald-600" />
                    Format Penulisan & Template Soal CBT BroMan
                  </h2>
                  <p className="text-xs text-slate-500">
                    Standar resmi penulisan butir soal Asesmen Sumatif & TKA jenjang SMK (5 Opsi Jawaban A–E). Unduh template Excel/Word serta uji format file sebelum diimpor ke Bank Soal.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handleDownloadTemplateExcel}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold shadow-sm transition-all"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download Excel PG</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveSidebarMenu("bank_soal")}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all border border-slate-300"
                  >
                    <BookOpen className="h-3.5 w-3.5 text-sky-600" />
                    <span>Ke Bank Soal</span>
                  </button>
                </div>
              </div>

              {/* Format Penulisan & Template Soal CBT BroMan */}
              <div className="space-y-6 animate-in fade-in duration-200">
                  {/* Kotak Informasi & Peringatan Baku CBT BroMan */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/90 rounded-2xl p-5 shadow-sm space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-amber-500 text-white shrink-0 shadow-sm mt-0.5">
                        <AlertCircle className="h-5 w-5" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-sm font-bold text-amber-950 flex items-center gap-2">
                            <span>Petunjuk Penting Penulisan Soal CBT BroMan</span>
                            <span className="font-mono text-[10px] bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded-md font-semibold">
                              Candy CBT 2.9 - pg=formatsoal
                            </span>
                          </h3>
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                            Wajib 5 Opsi (A - E) untuk Jenjang SMK
                          </span>
                        </div>
                        <p className="text-xs text-amber-900/90 leading-relaxed">
                          Guna mencegah kegagalan pembacaan parser import pada aplikasi CBT BroMan, seluruh Bapak/Ibu Guru pengampu mata pelajaran <strong>Dasar-Dasar Broadcasting dan Perfilman</strong> dimohon memedomani format baku berikut:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-amber-950 pt-1">
                          <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-amber-200/60">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-slate-900">Standar 5 Opsi Jenjang SMK:</strong>
                              <p className="text-slate-600 text-[11px]">Soal Pilihan Ganda (Jenis 1) <strong>wajib mengisi kelima opsi A, B, C, D, dan E</strong>. Jangan biarkan opsi E kosong.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-amber-200/60">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-slate-900">Kunci Jawaban Satu Huruf Kapital:</strong>
                              <p className="text-slate-600 text-[11px]">Kunci jawaban pada kolom Kunci diisi <strong>A, B, C, D, atau E</strong> huruf kapital tanpa tanda baca atau spasi.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-amber-200/60">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-slate-900">Pertahankan Baris Header Excel:</strong>
                              <p className="text-slate-600 text-[11px]">Dilarang mengubah atau menghapus teks pada baris pertama tabel Excel (No, Jenis, Soal, Opsi A-E, dst).</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-amber-200/60">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-slate-900">Arsip Media Gambar & Audio (.zip):</strong>
                              <p className="text-slate-600 text-[11px]">Gambar proporsional maks lebar 800px. Nama file <strong>tanpa spasi</strong> (misal: <code>kamera1.jpg</code>), diunggah via menu Bank Soal.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4 Kartu Unduh Template Resmi CBT */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                          <Download className="h-4 w-4 text-emerald-600" />
                          Unduh Berkas Template Soal Resmi BroMan
                        </h3>
                        <p className="text-xs text-slate-500">Pilih format template yang sesuai kebutuhan penyusunan butir soal asesmen Anda.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Kartu 1: Template Excel PG */}
                      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border-t-4 border-t-emerald-600">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                              <FileSpreadsheet className="h-5 w-5" />
                            </div>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                              Format Utama
                            </span>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                              Template Excel Pilihan Ganda (PG)
                            </h4>
                            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                              Format 11 kolom baku untuk jenjang SMK dengan 5 opsi jawaban (A, B, C, D, E) & kunci jawaban otomatis.
                            </p>
                          </div>
                          <div className="pt-1 text-[10px] text-slate-400 font-mono">
                            Ekstensi: .csv / .xlsx UTF-8
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleDownloadTemplateExcel}
                          className="mt-4 w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold shadow-sm transition-all"
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span>Unduh Template Excel PG</span>
                        </button>
                      </div>

                      {/* Kartu 2: Template Excel Esai */}
                      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border-t-4 border-t-sky-600">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="h-10 w-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
                              <FileSpreadsheet className="h-5 w-5" />
                            </div>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                              Khusus Esai
                            </span>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                              Template Excel Soal Uraian / Esai
                            </h4>
                            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                              Format khusus butir soal uraian (Jenis 2) dengan rubrik pedoman penskoran & kata kunci jawaban guru.
                            </p>
                          </div>
                          <div className="pt-1 text-[10px] text-slate-400 font-mono">
                            Ekstensi: .csv / .xlsx
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleDownloadTemplateEsai}
                          className="mt-4 w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-sm transition-all"
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span>Unduh Template Esai</span>
                        </button>
                      </div>

                      {/* Kartu 3: Template Word */}
                      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border-t-4 border-t-indigo-600">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                              <FileText className="h-5 w-5" />
                            </div>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                              Format Alternatif
                            </span>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                              Template Microsoft Word (.doc)
                            </h4>
                            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                              Format penulisan soal berbasis teks Word / Notepad dengan format tag penanda Q:, A:, B:, C:, D:, E:, ANS:.
                            </p>
                          </div>
                          <div className="pt-1 text-[10px] text-slate-400 font-mono">
                            Ekstensi: .doc / .docx
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleDownloadTemplateWord}
                          className="mt-4 w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-sm transition-all"
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span>Unduh Template Word</span>
                        </button>
                      </div>

                      {/* Kartu 4: Arsip Media */}
                      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border-t-4 border-t-amber-600">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                              <FileArchive className="h-5 w-5" />
                            </div>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                              Media Pendukung
                            </span>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                              Paket Media Gambar & Audio (.zip)
                            </h4>
                            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                              Pedoman penamaan berkas foto/skema studio tanpa spasi, resolusi max 800px, serta pengemasan zip.
                            </p>
                          </div>
                          <div className="pt-1 text-[10px] text-slate-400 font-mono">
                            Ekstensi: .zip / .txt panduan
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleDownloadMediaGuide}
                          className="mt-4 w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold shadow-sm transition-all"
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span>Unduh Panduan Media</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Petunjuk Teknis & Juknis 3 Pilar */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900 border-b border-slate-100 pb-2">
                        <Table className="h-4 w-4 text-[#0284c7]" />
                        <span>1. Aturan Kolom Excel Template Soal</span>
                      </div>
                      <div className="space-y-2 text-[11px] text-slate-600">
                        <div className="flex gap-2">
                          <span className="font-mono font-bold text-slate-800 shrink-0">Kolom 1 (No):</span>
                          <span>Nomor urut soal berurutan (1, 2, 3...) tanpa ada baris kosong di antaranya.</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="font-mono font-bold text-slate-800 shrink-0">Kolom 2 (Jenis):</span>
                          <span>Isi angka <strong>1</strong> untuk Pilihan Ganda (PG) dan angka <strong>2</strong> untuk Soal Uraian / Esai.</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="font-mono font-bold text-slate-800 shrink-0">Kolom 3 (Soal):</span>
                          <span>Teks narasi stimulus atau pertanyaan soal yang diujikan kepada peserta didik.</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="font-mono font-bold text-slate-800 shrink-0">Kolom 4–8 (Opsi A–E):</span>
                          <span>Untuk jenjang SMK, kelima kolom pilihan jawaban (A, B, C, D, dan E) <strong>wajib diisi</strong>.</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="font-mono font-bold text-slate-800 shrink-0">Kolom 9 (Kunci):</span>
                          <span>Kunci jawaban huruf kapital satu karakter: <strong>A, B, C, D, atau E</strong>.</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="font-mono font-bold text-slate-800 shrink-0">Kolom 10 (Tingkat):</span>
                          <span>Tingkat kesukaran soal: <strong>1</strong> (Mudah), <strong>2</strong> (Sedang), atau <strong>3</strong> (Sukar).</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="font-mono font-bold text-slate-800 shrink-0">Kolom 11 (Gambar):</span>
                          <span>Tuliskan nama file gambar (contoh: <code>kamera1.jpg</code>) jika soal memiliki gambar pendukung.</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900 border-b border-slate-100 pb-2">
                        <CheckSquare className="h-4 w-4 text-emerald-600" />
                        <span>2. Standar 5 Opsi & Penilaian Siswa</span>
                      </div>
                      <div className="space-y-2 text-[11px] text-slate-600">
                        <p>
                          <strong>Kewajiban 5 Pilihan (SMK):</strong> BroMan menyelenggarakan ujian berbasis CBT dengan standar Asesmen Nasional & TKA. Oleh karena itu, seluruh butir soal objektif wajib menyediakan pilihan jawaban hingga <strong>Opsi E</strong>.
                        </p>
                        <p>
                          <strong>Koreksi Otomatis Pilihan Ganda:</strong> Sistem CBT langsung mencocokkan jawaban peserta didik dengan kunci jawaban kolom Excel secara otomatis, sehingga hasil nilai langsung tersaji di menu <strong>Hasil Nilai</strong>.
                        </p>
                        <p>
                          <strong>Koreksi Manual Soal Esai:</strong> Jawaban esai peserta didik akan masuk ke antrean koreksi pada menu <strong>Antrean Koreksi Esai</strong> guru pengampu untuk diberi skor 0–100 sesuai rubrik penilaian.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900 border-b border-slate-100 pb-2">
                        <Image className="h-4 w-4 text-amber-600" />
                        <span>3. Aturan Gambar, Rumus & Berkas ZIP</span>
                      </div>
                      <div className="space-y-2 text-[11px] text-slate-600">
                        <p>
                          <strong>Format Gambar:</strong> Format berkas yang didukung adalah <strong>JPG, JPEG, dan PNG</strong>. Disarankan menggunakan rasio 16:9 atau 4:3 dengan lebar maksimal 800 piksel agar loading ujian siswa cepat.
                        </p>
                        <p>
                          <strong>Penamaan File:</strong> Nama berkas gambar <strong>DILARANG mengandung spasi</strong>. Gunakan garis bawah (underscore). Contoh benar: <code>three_point_lighting.jpg</code>. Contoh salah: <code>three point lighting.jpg</code>.
                        </p>
                        <p>
                          <strong>Cara Upload Media:</strong> Kompres seluruh gambar pendukung ke dalam satu arsip <code>.zip</code>. Masuk ke menu <strong>Bank Soal</strong> lalu pilih <strong>Import Gambar Soal</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tabel Interaktif Live Reference Struktur Kolom Excel */}
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-0">
                    <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 flex items-center gap-2">
                          <Table className="h-4 w-4 text-emerald-600" />
                          <span>Contoh Format Kolom Excel Siap Impor (Live Reference)</span>
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          Berikut adalah representasi susunan kolom berkas template Excel yang valid untuk mata pelajaran Dasar-Dasar Broadcasting dan Perfilman:
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleCopySampleRows}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-sm transition-all"
                        >
                          <Copy className="h-3.5 w-3.5 text-slate-500" />
                          <span>Salin Format</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleDownloadTemplateExcel}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold shadow-sm transition-all"
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span>Unduh Contoh (.csv)</span>
                        </button>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px] text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-900 text-white font-bold divide-x divide-slate-800">
                            <th className="py-2.5 px-3 text-center w-12">No</th>
                            <th className="py-2.5 px-3 text-center w-16">Jenis</th>
                            <th className="py-2.5 px-3 min-w-[240px]">Pertanyaan Soal</th>
                            <th className="py-2.5 px-3 min-w-[110px]">Opsi A</th>
                            <th className="py-2.5 px-3 min-w-[110px]">Opsi B</th>
                            <th className="py-2.5 px-3 min-w-[110px]">Opsi C</th>
                            <th className="py-2.5 px-3 min-w-[110px]">Opsi D</th>
                            <th className="py-2.5 px-3 min-w-[110px]">Opsi E</th>
                            <th className="py-2.5 px-2 text-center w-14">Kunci</th>
                            <th className="py-2.5 px-2 text-center w-16">Tingkat</th>
                            <th className="py-2.5 px-3 min-w-[120px]">File Gambar</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                          {sampleReferenceRows.map((row, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? "bg-white hover:bg-slate-50/80" : "bg-slate-50/50 hover:bg-slate-50"}>
                              <td className="py-2.5 px-3 text-center font-mono font-bold text-slate-600">{row.no}</td>
                              <td className="py-2.5 px-3 text-center">
                                <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-bold ${row.jenis.startsWith("1") ? "bg-emerald-100 text-emerald-800" : "bg-sky-100 text-sky-800"}`}>
                                  {row.jenis.startsWith("1") ? "1 (PG)" : "2 (Esai)"}
                                </span>
                              </td>
                              <td className="py-2.5 px-3 font-medium text-slate-900">{row.soal}</td>
                              <td className="py-2.5 px-3 text-slate-600">{row.opsiA}</td>
                              <td className="py-2.5 px-3 text-slate-600">{row.opsiB}</td>
                              <td className="py-2.5 px-3 text-slate-600">{row.opsiC}</td>
                              <td className="py-2.5 px-3 text-slate-600">{row.opsiD}</td>
                              <td className="py-2.5 px-3 text-slate-600 font-semibold">{row.opsiE}</td>
                              <td className="py-2.5 px-2 text-center">
                                {row.kunci.length === 1 ? (
                                  <span className="inline-block h-6 w-6 rounded-full bg-emerald-600 text-white font-bold leading-6 text-center text-xs shadow-sm">
                                    {row.kunci}
                                  </span>
                                ) : (
                                  <span className="text-[10px] text-slate-500 italic max-w-[100px] truncate block" title={row.kunci}>
                                    Rubrik Guru
                                  </span>
                                )}
                              </td>
                              <td className="py-2.5 px-2 text-center">
                                <span className="text-[10px] font-semibold text-slate-600">{row.kesukaran}</span>
                              </td>
                              <td className="py-2.5 px-3 font-mono text-[10px] text-slate-500">
                                {row.gambar !== "-" ? (
                                  <span className="inline-flex items-center gap-1 text-sky-600 font-semibold">
                                    <Image className="h-3 w-3" />
                                    {row.gambar}
                                  </span>
                                ) : (
                                  <span className="text-slate-400">-</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Simulator & Validasi Format Soal CBT */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          <span>Simulator Validasi Berkas Template Soal CBT</span>
                        </h4>
                        <p className="text-xs text-slate-500">
                          Uji kelayakan berkas template Excel / CSV Anda sebelum diimpor ke sistem CBT untuk memastikan 5 opsi A–E dan kunci jawaban tidak bermasalah.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm">
                          <Upload className="h-3.5 w-3.5" />
                          <span>Pilih Berkas CSV / Excel</span>
                          <input
                            type="file"
                            accept=".csv,.txt"
                            onChange={handleValidateCsvFile}
                            className="hidden"
                          />
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            // Simulasi pengujian dengan contoh bawaan
                            const sampleText =
                              'No,Jenis,Soal,Opsi A,Opsi B,Opsi C,Opsi D,Opsi E,Kunci,Tingkat,Gambar\n' +
                              '1,1,"Sudut pengambilan gambar eye level","Eye Level","Bird Eye","Frog Eye","High Angle","Low Angle","A",1,""\n' +
                              '2,1,"Lampu utama three point lighting","Key Light","Fill Light","Back Light","Hair Light","Practical Light","A",2,"three_point.jpg"\n' +
                              '3,1,"Mikrofon shotgun directional","Shotgun","Omni","Bi","Lavalier","Boundary","A",2,""\n' +
                              '4,2,"Jelaskan tugas produser praproduksi","","","","","","","2",""';
                            
                            const simulatedEvent = {
                              target: {
                                files: [
                                  new File([sampleText], "Template_Contoh_Broadcasting.csv", { type: "text/csv" })
                                ]
                              }
                            } as unknown as React.ChangeEvent<HTMLInputElement>;
                            handleValidateCsvFile(simulatedEvent);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all"
                        >
                          <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                          <span>Uji Contoh Bawaan</span>
                        </button>
                      </div>
                    </div>

                    {/* Hasil Validasi Berkas */}
                    {validationResult ? (
                      <div className="space-y-4">
                        <div className={`p-4 rounded-xl border ${
                          validationResult.issues.length === 0
                            ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                            : "bg-amber-50 border-amber-200 text-amber-950"
                        }`}>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-xl text-white ${
                                validationResult.issues.length === 0 ? "bg-emerald-600" : "bg-amber-500"
                              }`}>
                                {validationResult.issues.length === 0 ? (
                                  <Check className="h-5 w-5" />
                                ) : (
                                  <AlertCircle className="h-5 w-5" />
                                )}
                              </div>
                              <div>
                                <h5 className="text-xs font-bold">
                                  {validationResult.issues.length === 0
                                    ? `Berkas "${validationResult.fileName}" Valid 100% Sesuai Standar CBT BroMan!`
                                    : `Pemeriksaan Berkas "${validationResult.fileName}": Ditemukan ${validationResult.issues.length} Catatan.`}
                                </h5>
                                <p className="text-[11px] opacity-90 mt-0.5">
                                  Total Terdeteksi: <strong>{validationResult.totalRows} butir soal</strong> ({validationResult.pgCount} PG, {validationResult.esaiCount} Esai) — {validationResult.validCount} butir siap diimpor.
                                </p>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => {
                                setActiveSidebarMenu("bank_soal");
                                showNotification("Membuka Bank Soal untuk impor berkas.");
                              }}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm transition-all shrink-0"
                            >
                              <BookOpen className="h-3.5 w-3.5" />
                              <span>Lanjutkan Impor ke Bank Soal</span>
                            </button>
                          </div>

                          {validationResult.issues.length > 0 && (
                            <div className="mt-3 pt-3 border-t border-amber-200/80 space-y-1 text-[11px] text-amber-900">
                              <div className="font-bold">Catatan Verifikasi:</div>
                              <ul className="list-disc list-inside space-y-0.5">
                                {validationResult.issues.map((iss, i) => (
                                  <li key={i}>{iss}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Ringkasan Tabel Butir Soal Terdeteksi */}
                        <div className="border border-slate-200 rounded-xl overflow-hidden">
                          <table className="w-full text-xs text-left">
                            <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                              <tr>
                                <th className="py-2 px-3 text-center w-12">No</th>
                                <th className="py-2 px-3 w-28">Jenis</th>
                                <th className="py-2 px-3">Cuplikan Soal</th>
                                <th className="py-2 px-3 text-center w-20">Opsi Terisi</th>
                                <th className="py-2 px-3 text-center w-16">Kunci</th>
                                <th className="py-2 px-3 w-40">Status Validasi</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-[11px]">
                              {validationResult.previewRows.map((r, idx) => (
                                <tr key={idx} className="hover:bg-slate-50">
                                  <td className="py-2 px-3 text-center font-mono font-bold">{r.no}</td>
                                  <td className="py-2 px-3 font-semibold text-slate-700">{r.jenis}</td>
                                  <td className="py-2 px-3 text-slate-800">{r.soal}</td>
                                  <td className="py-2 px-3 text-center font-mono">
                                    <span className={r.opsiCount === 5 ? "text-emerald-700 font-bold" : "text-amber-700 font-bold"}>
                                      {r.opsiCount} / 5
                                    </span>
                                  </td>
                                  <td className="py-2 px-3 text-center">
                                    <span className="font-mono font-bold bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">
                                      {r.kunci}
                                    </span>
                                  </td>
                                  <td className="py-2 px-3">
                                    {r.status === "valid" ? (
                                      <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                                        <Check className="h-3 w-3" />
                                        Valid
                                      </span>
                                    ) : r.status === "warning" ? (
                                      <span className="inline-flex items-center gap-1 text-amber-700 font-semibold" title={r.note}>
                                        <AlertCircle className="h-3 w-3" />
                                        Kurang Opsi
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center gap-1 text-rose-600 font-bold" title={r.note}>
                                        <X className="h-3 w-3" />
                                        Kunci Salah
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center space-y-2 bg-slate-50/50">
                        <Upload className="h-8 w-8 text-slate-400 mx-auto" />
                        <div className="text-xs font-bold text-slate-700">
                          Belum ada berkas yang diuji
                        </div>
                        <p className="text-[11px] text-slate-500 max-w-md mx-auto">
                          Silakan klik tombol <strong>"Pilih Berkas CSV / Excel"</strong> di atas atau tombol <strong>"Uji Contoh Bawaan"</strong> untuk melihat simulator pengecekan format soal CBT.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* TAMPILAN KHUSUS: KELOLA SLIDE MATERI & VIDEO YOUTUBE        */}
          {/* ========================================================== */}
          {activeSidebarMenu === "slide_deck" && (
            <SlideDeckManagerView onShowNotification={(msg) => showNotification(msg)} />
          )}

          {/* ========================================================== */}
          {/* TAMPILAN D: JADWAL UJIAN CBT                               */}
          {/* ========================================================== */}
          {activeSidebarMenu === "jadwal_ujian" && (
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-amber-500" />
                    Jadwal Ujian Aktif & Sesi Asesmen CBT
                  </h2>
                  <p className="text-xs text-slate-500">
                    Sesi Ujian Semester (US) dan Tes Kompetensi Akademik (TKA) BroMan.
                  </p>
                </div>
                <Link
                  href="/assesment/tka/guru"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#059669] text-white px-4 py-2 text-xs font-bold shadow"
                >
                  <Monitor className="h-4 w-4" />
                  <span>Buka Ruang Pengawas Live</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-sky-100 text-sky-700 font-bold px-2.5 py-0.5 text-xs">
                      Evaluasi Semester
                    </span>
                    <span className="text-xs text-emerald-600 font-bold">● Aktif</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Ujian Semester (US) Fase E & F</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Ujian akhir semester komprehensif 12 Elemen Capaian Pembelajaran Broadcasting & Perfilman.
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span>Durasi: 60 Menit</span>
                    <Link href="/assesment/us" className="text-sky-600 font-bold hover:underline">
                      Lihat Ruang Ujian →
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-amber-100 text-amber-700 font-bold px-2.5 py-0.5 text-xs">
                      Standar Vokasi
                    </span>
                    <span className="text-xs text-emerald-600 font-bold">● Aktif</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Tes Kompetensi Akademik (TKA) BCF</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Simulasi uji kemahiran vokasi: Regulasi Penyiaran, Logika Teknis AV, dan Manajemen Studio TV.
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span>Token: TKAPRO</span>
                    <Link href="/assesment/tka/guru" className="text-amber-600 font-bold hover:underline">
                      Pantau Live Pengawas →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* TAMPILAN E: HASIL NILAI & ANALISIS BUTIR SOAL              */}
          {/* ========================================================== */}
          {activeSidebarMenu === "hasil_nilai" && (
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <ClipboardList className="h-5 w-5 text-rose-500" />
                    Hasil Rekapitulasi Nilai Siswa
                  </h2>
                  <p className="text-xs text-slate-500">
                    Daftar perolehan skor evaluasi formatif dan sumatif kelas X & XI BCF.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => showNotification("Fitur ekspor Excel rekap nilai berhasil diunduh.")}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-4 py-2 text-xs font-bold shadow"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Excel (.CSV)</span>
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-400 text-xs">
                Data hasil nilai otomatis terekam dan disinkronkan saat sesi CBT diselesaikan oleh siswa.
              </div>
            </div>
          )}

          {activeSidebarMenu === "analisis_soal" && (
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-teal-600" />
                  Mutu Butir Soal AKM & Analisis Psikometri
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Kalkulasi tingkat kesukaran, daya beda butir soal, dan reliabilitas instrumen asesmen.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto">
                <BarChart3 className="h-16 w-16 text-slate-300 mx-auto mb-3" />
                <h4 className="text-sm font-bold text-slate-700">Analisis Psikometri Otomatis</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Data psikometri butir soal akan otomatis dikalkulasi setelah minimal 15 siswa menyelesaikan paket soal ujian.
                </p>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* TAMPILAN F: PROFIL SAYA                                    */}
          {/* ========================================================== */}
          {activeSidebarMenu === "profil" && (
            <div className="space-y-6 max-w-2xl">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <div className="h-16 w-16 rounded-2xl bg-[#2563eb] text-white flex items-center justify-center font-black text-xl shadow-md">
                    SIP
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Saputra Indra Purnama, S.Pd.</h2>
                    <div className="text-xs text-slate-500 font-mono">NIP. 199110042022211007</div>
                    <span className="inline-block rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 mt-1">
                      Guru Aktif BroMan
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-400">Instansi Sekolah:</span>
                    <span className="font-semibold text-slate-800">CBT BROMAN</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-400">Program Keahlian:</span>
                    <span className="font-semibold text-slate-800">Broadcasting dan Perfilman (BCF)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-400">Mata Pelajaran:</span>
                    <span className="font-semibold text-slate-800">Dasar BCF & Produksi Siaran Televisi</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-400">Hak Akses:</span>
                    <span className="font-semibold text-sky-700">Guru Pengampu & Pengawas CBT</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ============================================================== */}
      {/* 3. FLOATING WIDGET KOORDINASI (Bottom-Right ala Screenshot)      */}
      {/* ============================================================== */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          type="button"
          onClick={() => setCoordinationModalOpen(true)}
          className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:to-slate-700 text-white px-4 py-2.5 text-xs font-bold shadow-2xl shadow-slate-950/40 border border-slate-700/80 hover:border-emerald-500/50 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
        >
          <MessageSquare className="h-4 w-4 text-emerald-400" />
          <span>Koordinasi</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-slate-300 text-[11px] font-medium">1 Online</span>
        </button>
      </div>

      {/* Modal Koordinasi Live */}
      {coordinationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <MessageSquare className="h-4 w-4 text-emerald-600" />
                <span>Saluran Koordinasi Proktor & Pengawas CBT</span>
              </div>
              <button
                type="button"
                onClick={() => setCoordinationModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-bold text-slate-900">Proktor Utama Server (Online)</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Server CBT BroMan beroperasi normal tanpa kendala throughput. Token aktif sesi saat ini: <code className="font-bold text-amber-600">TKAPRO</code>.
              </p>
            </div>
            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setCoordinationModalOpen(false)}
                className="rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white px-4 py-2 text-xs font-bold"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 4. MODALS (Add/Edit Question, Sub-menu, dsb)                    */}
      {/* ============================================================== */}
      {showAddQuestionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <PlusCircle className="h-4 w-4 text-[#2563eb]" />
                {editingQuestion ? "Edit Butir Soal" : "Buat Butir Soal Baru"}
              </h3>
              <button
                type="button"
                onClick={() => setShowAddQuestionModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSaveQuestion} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Target Elemen</label>
                  <select
                    value={qTargetElemen}
                    onChange={(e) => setQTargetElemen(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-2 text-slate-800"
                  >
                    <option value="E1">E1 - Dunia Kerja BCF</option>
                    <option value="E2">E2 - Perkembangan Media</option>
                    <option value="E3">E3 - Peralatan Audio Visual</option>
                    <option value="E4">E4 - Produksi & New Media</option>
                    <option value="F1">F1 - Manajemen TV</option>
                    <option value="F2">F2 - Penulisan Naskah</option>
                    <option value="F3">F3 - Penyutradaraan</option>
                    <option value="F4">F4 - Tata Kamera & Cahaya</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Level Taksonomi Bloom</label>
                  <select
                    value={qBloom}
                    onChange={(e) => setQBloom(e.target.value as any)}
                    className="w-full rounded-xl border border-slate-300 p-2 text-slate-800"
                  >
                    <option value="C1">C1 - Mengingat (Recall)</option>
                    <option value="C2">C2 - Memahami (Understand)</option>
                    <option value="C3">C3 - Menerapkan (Apply)</option>
                    <option value="C4">C4 - Menganalisis (Analyze)</option>
                    <option value="C5">C5 - Mengevaluasi (Evaluate)</option>
                    <option value="C6">C6 - Mencipta (Create)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Pertanyaan / Stimulus Kasus</label>
                <textarea
                  rows={3}
                  value={qStem}
                  onChange={(e) => setQStem(e.target.value)}
                  placeholder="Tuliskan stimulus kasus atau pertanyaan..."
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-800"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block font-bold text-slate-700">Pilihan Jawaban</label>
                <div className="flex items-center gap-2">
                  <span className="font-bold w-4">A.</span>
                  <input
                    type="text"
                    value={qOptA}
                    onChange={(e) => setQOptA(e.target.value)}
                    placeholder="Pilihan A"
                    className="w-full rounded-xl border border-slate-300 p-2 text-slate-800"
                    required
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold w-4">B.</span>
                  <input
                    type="text"
                    value={qOptB}
                    onChange={(e) => setQOptB(e.target.value)}
                    placeholder="Pilihan B"
                    className="w-full rounded-xl border border-slate-300 p-2 text-slate-800"
                    required
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold w-4">C.</span>
                  <input
                    type="text"
                    value={qOptC}
                    onChange={(e) => setQOptC(e.target.value)}
                    placeholder="Pilihan C"
                    className="w-full rounded-xl border border-slate-300 p-2 text-slate-800"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold w-4">D.</span>
                  <input
                    type="text"
                    value={qOptD}
                    onChange={(e) => setQOptD(e.target.value)}
                    placeholder="Pilihan D"
                    className="w-full rounded-xl border border-slate-300 p-2 text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Kunci Jawaban Tepat</label>
                  <select
                    value={qCorrect}
                    onChange={(e) => setQCorrect(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-2 text-slate-800 font-bold"
                  >
                    <option value="A">Opsi A</option>
                    <option value="B">Opsi B</option>
                    <option value="C">Opsi C</option>
                    <option value="D">Opsi D</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Penjelasan Singkat</label>
                  <input
                    type="text"
                    value={qExplanation}
                    onChange={(e) => setQExplanation(e.target.value)}
                    placeholder="Dasar teori / kunci..."
                    className="w-full rounded-xl border border-slate-300 p-2 text-slate-800"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddQuestionModal(false)}
                  className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-5 py-2 font-bold shadow"
                >
                  Simpan ke Bank Soal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Tambah/Edit Kartu Materi */}
      {showAddCardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">
                {editingCardIndex !== null ? "Edit Kartu Materi" : "Tambah Kartu Materi Baru"}
              </h3>
              <button
                type="button"
                onClick={() => setShowAddCardModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <form onSubmit={handleSaveCard} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Judul Kartu</label>
                <input
                  type="text"
                  value={cardTitle}
                  onChange={(e) => setCardTitle(e.target.value)}
                  placeholder="Misal: Standar Pencahayaan Tiga Titik (Three-Point Lighting)"
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-800"
                  required
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Uraian Konsep Materi</label>
                <textarea
                  rows={4}
                  value={cardContent}
                  onChange={(e) => setCardContent(e.target.value)}
                  placeholder="Isi pembahasan materi..."
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-800"
                  required
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddCardModal(false)}
                  className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-600"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white px-5 py-2 font-bold"
                >
                  Simpan Kartu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Edit LKPD */}
      {showEditLKPDModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">Edit Lembar Kerja Peserta Didik (LKPD)</h3>
              <button
                type="button"
                onClick={() => setShowEditLKPDModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <form onSubmit={handleSaveLKPD} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Judul Praktikum LKPD</label>
                <input
                  type="text"
                  value={lkpdTitle}
                  onChange={(e) => setLkpdTitle(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-800"
                  required
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Tujuan Pembelajaran</label>
                <input
                  type="text"
                  value={lkpdObjective}
                  onChange={(e) => setLkpdObjective(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-800"
                  required
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Alat & Bahan (Pisahkan Koma)</label>
                <input
                  type="text"
                  value={lkpdTools}
                  onChange={(e) => setLkpdTools(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-800"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowEditLKPDModal(false)}
                  className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-600"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 font-bold"
                >
                  Simpan LKPD
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Edit Detail Sub-menu */}
      {showEditSubMenuModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">Ubah Konfigurasi Langkah Pembelajaran</h3>
              <button
                type="button"
                onClick={() => setShowEditSubMenuModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <form onSubmit={handleSaveSubMenuDetail} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Nama Langkah / Sub-menu</label>
                <input
                  type="text"
                  value={subMenuTitleInput}
                  onChange={(e) => setSubMenuTitleInput(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-800"
                  required
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Deskripsi Singkat</label>
                <input
                  type="text"
                  value={subMenuSubtitleInput}
                  onChange={(e) => setSubMenuSubtitleInput(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-slate-800"
                />
              </div>
              <div className="flex items-center justify-between py-2 border-t border-slate-100">
                <span className="font-bold text-slate-700">Tampilkan di Siswa:</span>
                <button
                  type="button"
                  onClick={() => setSubMenuEnabledInput(!subMenuEnabledInput)}
                  className={`px-3 py-1 rounded-full font-bold ${
                    subMenuEnabledInput ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {subMenuEnabledInput ? "Aktif" : "Nonaktif"}
                </button>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowEditSubMenuModal(false)}
                  className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-600"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white px-5 py-2 font-bold"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TeacherPortalPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center text-xs font-semibold text-slate-500">
          Memuat Portal CBT Guru CBT BroMan...
        </div>
      }
    >
      <TeacherPortalContent />
    </Suspense>
  );
}
