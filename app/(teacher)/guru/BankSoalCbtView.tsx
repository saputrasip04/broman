"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileSpreadsheet,
  Plus,
  Download,
  Edit3,
  Trash2,
  CheckCircle2,
  X,
  Search,
  Filter,
  Eye,
  RefreshCw,
  Printer,
  Upload,
  FileArchive,
  Check,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  BookOpen,
  Layers,
  Award,
  Sparkles,
  Sliders,
  List,
  ExternalLink,
  Image as ImageIcon,
  ChevronRight,
  Hash,
  Clock,
  Shuffle,
  ShieldCheck,
  FolderPlus,
  FileText,
  AlertTriangle,
  Copy,
  User,
  Calendar,
} from "lucide-react";
import {
  useBankSoalStore,
  BankSoalPackage,
  BankSoalQuestion,
  addBankSoal,
  updateBankSoal,
  deleteBankSoal,
  toggleBankSoalStatus,
  addQuestionToBank,
  updateQuestionInBank,
  deleteQuestionFromBank,
  addMediaFileToBank,
  resetBankSoalToDefault,
  getStoredBankSoal,
} from "@/lib/data/bank-soal-store";

interface BankSoalCbtViewProps {
  onNavigateToFormatSoal?: () => void;
  showToast?: (message: string) => void;
  currentTeacherName?: string;
}

export default function BankSoalCbtView({
  onNavigateToFormatSoal,
  showToast,
  currentTeacherName = "Very Kurniawan, S.Pd., Gr.",
}: BankSoalCbtViewProps) {
  const bankPackages = useBankSoalStore();

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTingkat, setFilterTingkat] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterElemen, setFilterElemen] = useState<string>("all");

  // Modal: Tambah & Edit Paket Bank Soal
  const [packageModalOpen, setPackageModalOpen] = useState(false);
  const [editingPackageId, setEditingPackageId] = useState<string | null>(null);
  const [pkgKodeBank, setPkgKodeBank] = useState("");
  const [pkgNamaMapel, setPkgNamaMapel] = useState("");
  const [pkgElemenCode, setPkgElemenCode] = useState("E3");
  const [pkgTingkat, setPkgTingkat] = useState<"X" | "XI" | "XII">("X");
  const [pkgFase, setPkgFase] = useState<"Fase E" | "Fase F">("Fase E");
  const [pkgJurusan, setPkgJurusan] = useState("Broadcasting & Perfilman");
  const [pkgGuru, setPkgGuru] = useState(currentTeacherName);

  useEffect(() => {
    if (currentTeacherName) {
      setPkgGuru(currentTeacherName);
    }
  }, [currentTeacherName]);
  const [pkgKkm, setPkgKkm] = useState(75);
  const [pkgDurasi, setPkgDurasi] = useState(90);
  const [pkgJmlPg, setPkgJmlPg] = useState(40);
  const [pkgBobotPg, setPkgBobotPg] = useState(70);
  const [pkgJmlEsai, setPkgJmlEsai] = useState(5);
  const [pkgBobotEsai, setPkgBobotEsai] = useState(30);
  const [pkgAcakSoal, setPkgAcakSoal] = useState(true);
  const [pkgAcakOpsi, setPkgAcakOpsi] = useState(true);
  const [pkgStatus, setPkgStatus] = useState<"aktif" | "nonaktif">("aktif");
  const [pkgJenisUjian, setPkgJenisUjian] = useState("Asesmen Sumatif Tengah Semester (ASTS)");

  // Modal: Kelola Butir Soal (Viewer & Editor)
  const [questionsModalOpen, setQuestionsModalOpen] = useState(false);
  const [selectedPackageForQuestions, setSelectedPackageForQuestions] = useState<BankSoalPackage | null>(null);
  const [questionTabFilter, setQuestionTabFilter] = useState<"all" | "PG" | "Esai">("all");
  const [searchQuestionText, setSearchQuestionText] = useState("");

  // Modal: Tambah / Edit Butir Soal
  const [editQuestionModalOpen, setEditQuestionModalOpen] = useState(false);
  const [editingQuestionItem, setEditingQuestionItem] = useState<BankSoalQuestion | null>(null);
  const [qJenis, setQJenis] = useState<"PG" | "Esai">("PG");
  const [qBloom, setQBloom] = useState<"C1" | "C2" | "C3" | "C4" | "C5" | "C6">("C3");
  const [qStem, setQStem] = useState("");
  const [qOptA, setQOptA] = useState("");
  const [qOptB, setQOptB] = useState("");
  const [qOptC, setQOptC] = useState("");
  const [qOptD, setQOptD] = useState("");
  const [qOptE, setQOptE] = useState("");
  const [qCorrectKey, setQCorrectKey] = useState("A");
  const [qExplanation, setQExplanation] = useState("");
  const [qBobotNilai, setQBobotNilai] = useState(2);

  // Modal: Import Soal Excel
  const [importExcelModalOpen, setImportExcelModalOpen] = useState(false);
  const [importTargetPackage, setImportTargetPackage] = useState<BankSoalPackage | null>(null);
  const [importFileName, setImportFileName] = useState("");
  const [isSimulatingImport, setIsSimulatingImport] = useState(false);
  const [importSuccessResult, setImportSuccessResult] = useState<{ count: number; pg: number; esai: number } | null>(null);

  // Modal: Import Media ZIP
  const [mediaZipModalOpen, setMediaZipModalOpen] = useState(false);
  const [mediaTargetPackage, setMediaTargetPackage] = useState<BankSoalPackage | null>(null);
  const [newMediaName, setNewMediaName] = useState("");
  const [newMediaSize, setNewMediaSize] = useState("320 KB");

  // Modal: Cetak / Kartu Soal
  const [printModalOpen, setPrintModalOpen] = useState(false);
  const [printTargetPackage, setPrintTargetPackage] = useState<BankSoalPackage | null>(null);

  // Helper notification
  const notify = (msg: string) => {
    if (showToast) showToast(msg);
    else alert(msg);
  };

  // Filtered packages
  const filteredPackages = bankPackages.filter((pkg) => {
    const matchSearch =
      pkg.kodeBank.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.namaMapel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.guruPengampu.toLowerCase().includes(searchQuery.toLowerCase());

    const matchTingkat = filterTingkat === "all" || pkg.tingkat === filterTingkat;
    const matchStatus = filterStatus === "all" || pkg.status === filterStatus;
    const matchElemen = filterElemen === "all" || pkg.elemenCode === filterElemen;

    return matchSearch && matchTingkat && matchStatus && matchElemen;
  });

  // Aggregate stats
  const totalPaket = bankPackages.length;
  const paketAktif = bankPackages.filter((p) => p.status === "aktif").length;
  const totalQuestionsAll = bankPackages.reduce((acc, curr) => acc + (curr.questions?.length || 0), 0);

  // Handlers: Paket Bank Soal
  const handleOpenAddPackage = () => {
    setEditingPackageId(null);
    setPkgKodeBank(`BCF-E3-${Date.now().toString().slice(-4)}`);
    setPkgNamaMapel("Dasar Broadcasting & Perfilman - Elemen 3");
    setPkgElemenCode("E3");
    setPkgTingkat("X");
    setPkgFase("Fase E");
    setPkgJurusan("Broadcasting & Perfilman");
    setPkgGuru(currentTeacherName || "Very Kurniawan, S.Pd., Gr.");
    setPkgKkm(75);
    setPkgDurasi(90);
    setPkgJmlPg(40);
    setPkgBobotPg(70);
    setPkgJmlEsai(5);
    setPkgBobotEsai(30);
    setPkgAcakSoal(true);
    setPkgAcakOpsi(true);
    setPkgStatus("aktif");
    setPkgJenisUjian("Asesmen Sumatif Tengah Semester (ASTS)");
    setPackageModalOpen(true);
  };

  const handleOpenEditPackage = (pkg: BankSoalPackage) => {
    setEditingPackageId(pkg.id);
    setPkgKodeBank(pkg.kodeBank);
    setPkgNamaMapel(pkg.namaMapel);
    setPkgElemenCode(pkg.elemenCode);
    setPkgTingkat(pkg.tingkat);
    setPkgFase(pkg.fase);
    setPkgJurusan(pkg.jurusan);
    setPkgGuru(
      !pkg.guruPengampu || pkg.guruPengampu === "Saputra Indra Purnama, S.Pd."
        ? (currentTeacherName || "Very Kurniawan, S.Pd., Gr.")
        : pkg.guruPengampu
    );
    setPkgKkm(pkg.kkm);
    setPkgDurasi(pkg.durasiMenit);
    setPkgJmlPg(pkg.jmlPg);
    setPkgBobotPg(pkg.bobotPg);
    setPkgJmlEsai(pkg.jmlEsai);
    setPkgBobotEsai(pkg.bobotEsai);
    setPkgAcakSoal(pkg.acakSoal);
    setPkgAcakOpsi(pkg.acakOpsi);
    setPkgStatus(pkg.status);
    setPkgJenisUjian(pkg.jenisUjian);
    setPackageModalOpen(true);
  };

  const handleSavePackage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pkgKodeBank.trim() || !pkgNamaMapel.trim()) {
      notify("Kode Bank dan Nama Mata Pelajaran wajib diisi.");
      return;
    }

    if (editingPackageId) {
      updateBankSoal(editingPackageId, {
        kodeBank: pkgKodeBank.trim().toUpperCase(),
        namaMapel: pkgNamaMapel.trim(),
        elemenCode: pkgElemenCode,
        tingkat: pkgTingkat,
        fase: pkgFase,
        jurusan: pkgJurusan,
        guruPengampu: pkgGuru,
        kkm: Number(pkgKkm),
        durasiMenit: Number(pkgDurasi),
        jmlPg: Number(pkgJmlPg),
        bobotPg: Number(pkgBobotPg),
        jmlEsai: Number(pkgJmlEsai),
        bobotEsai: Number(pkgBobotEsai),
        acakSoal: pkgAcakSoal,
        acakOpsi: pkgAcakOpsi,
        status: pkgStatus,
        jenisUjian: pkgJenisUjian,
      });
      notify(`Paket Bank Soal "${pkgKodeBank}" berhasil diperbarui.`);
    } else {
      addBankSoal({
        kodeBank: pkgKodeBank.trim().toUpperCase(),
        namaMapel: pkgNamaMapel.trim(),
        elemenCode: pkgElemenCode,
        tingkat: pkgTingkat,
        fase: pkgFase,
        jurusan: pkgJurusan,
        guruPengampu: pkgGuru,
        kkm: Number(pkgKkm),
        durasiMenit: Number(pkgDurasi),
        jmlPg: Number(pkgJmlPg),
        bobotPg: Number(pkgBobotPg),
        opsiCount: 5,
        jmlEsai: Number(pkgJmlEsai),
        bobotEsai: Number(pkgBobotEsai),
        acakSoal: pkgAcakSoal,
        acakOpsi: pkgAcakOpsi,
        status: pkgStatus,
        tahunAjaran: "2026/2027 Ganjil",
        jenisUjian: pkgJenisUjian,
        questions: [],
        mediaFiles: [],
      });
      notify(`Paket Bank Soal "${pkgKodeBank}" berhasil ditambahkan.`);
    }
    setPackageModalOpen(false);
  };

  const handleDeletePackage = (pkg: BankSoalPackage) => {
    if (confirm(`Yakin ingin menghapus paket Bank Soal "${pkg.kodeBank}" (${pkg.namaMapel})? Seluruh butir soal di dalamnya akan terhapus.`)) {
      deleteBankSoal(pkg.id);
      notify(`Bank Soal "${pkg.kodeBank}" telah dihapus.`);
    }
  };

  const handleToggleStatus = (pkg: BankSoalPackage) => {
    toggleBankSoalStatus(pkg.id);
    const newStatus = pkg.status === "aktif" ? "Nonaktif" : "Aktif";
    notify(`Status Bank Soal "${pkg.kodeBank}" diubah menjadi ${newStatus}.`);
  };

  // Handlers: Butir Soal di Paket
  const handleOpenQuestionsModal = (pkg: BankSoalPackage) => {
    // Get latest data from store snapshot
    const freshPkg = getStoredBankSoal().find((p) => p.id === pkg.id) || pkg;
    setSelectedPackageForQuestions(freshPkg);
    setQuestionTabFilter("all");
    setSearchQuestionText("");
    setQuestionsModalOpen(true);
  };

  // Keep modal in sync with store
  useEffect(() => {
    if (selectedPackageForQuestions) {
      const refreshed = bankPackages.find((p) => p.id === selectedPackageForQuestions.id);
      if (refreshed) {
        setSelectedPackageForQuestions(refreshed);
      }
    }
  }, [bankPackages]);

  const handleOpenAddQuestion = () => {
    setEditingQuestionItem(null);
    setQJenis("PG");
    setQBloom("C3");
    setQStem("");
    setQOptA("");
    setQOptB("");
    setQOptC("");
    setQOptD("");
    setQOptE("");
    setQCorrectKey("A");
    setQExplanation("");
    setQBobotNilai(2);
    setEditQuestionModalOpen(true);
  };

  const handleOpenEditQuestion = (q: BankSoalQuestion) => {
    setEditingQuestionItem(q);
    setQJenis(q.jenis || "PG");
    setQBloom(q.bloom);
    setQStem(q.stem);
    setQOptA(q.options.find((o) => o.key === "A")?.text || "");
    setQOptB(q.options.find((o) => o.key === "B")?.text || "");
    setQOptC(q.options.find((o) => o.key === "C")?.text || "");
    setQOptD(q.options.find((o) => o.key === "D")?.text || "");
    setQOptE(q.options.find((o) => o.key === "E")?.text || "");
    setQCorrectKey(q.correctKey || "A");
    setQExplanation(q.explanation || "");
    setQBobotNilai(q.bobotNilai || (q.jenis === "Esai" ? 10 : 2));
    setEditQuestionModalOpen(true);
  };

  // Quick-change answer key directly from question card
  const handleQuickSetCorrectKey = (qId: number, newKey: string) => {
    if (!selectedPackageForQuestions) return;
    updateQuestionInBank(selectedPackageForQuestions.id, qId, {
      correctKey: newKey,
    });
    const refreshed = getStoredBankSoal().find((p) => p.id === selectedPackageForQuestions.id);
    if (refreshed) setSelectedPackageForQuestions(refreshed);
    notify(`Kunci jawaban soal berhasil diubah ke Opsi ${newKey}.`);
  };

  const handleSaveQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPackageForQuestions) return;
    if (!qStem.trim()) {
      notify("Stimulus / Teks Pertanyaan tidak boleh kosong.");
      return;
    }

    if (qJenis === "PG") {
      if (!qOptA.trim() || !qOptB.trim() || !qOptC.trim() || !qOptD.trim() || !qOptE.trim()) {
        notify("Seluruh 5 opsi jawaban (A, B, C, D, E) wajib diisi untuk standar jenjang SMK.");
        return;
      }
    }

    const optionsData =
      qJenis === "PG"
        ? [
            { key: "A", text: qOptA.trim() },
            { key: "B", text: qOptB.trim() },
            { key: "C", text: qOptC.trim() },
            { key: "D", text: qOptD.trim() },
            { key: "E", text: qOptE.trim() },
          ]
        : [];

    if (editingQuestionItem) {
      updateQuestionInBank(selectedPackageForQuestions.id, editingQuestionItem.id, {
        jenis: qJenis,
        bloom: qBloom,
        stem: qStem.trim(),
        options: optionsData,
        correctKey: qJenis === "PG" ? qCorrectKey : "Esai",
        explanation: qExplanation.trim(),
        bobotNilai: Number(qBobotNilai),
      });
      notify("Butir soal & kunci jawaban berhasil diperbarui.");
    } else {
      addQuestionToBank(selectedPackageForQuestions.id, {
        jenis: qJenis,
        bloom: qBloom,
        stem: qStem.trim(),
        options: optionsData,
        correctKey: qJenis === "PG" ? qCorrectKey : "Esai",
        explanation: qExplanation.trim(),
        bobotNilai: Number(qBobotNilai),
      });
      notify("Butir soal baru berhasil ditambahkan ke Bank Soal.");
    }

    // Refresh selected package reference immediately from persistent store
    const refreshed = getStoredBankSoal().find((p) => p.id === selectedPackageForQuestions.id);
    if (refreshed) setSelectedPackageForQuestions(refreshed);
    setEditQuestionModalOpen(false);
  };

  const handleDeleteQuestion = (qId: number) => {
    if (!selectedPackageForQuestions) return;
    if (confirm("Hapus butir soal ini dari Bank Soal?")) {
      deleteQuestionFromBank(selectedPackageForQuestions.id, qId);
      const refreshed = getStoredBankSoal().find((p) => p.id === selectedPackageForQuestions.id);
      if (refreshed) setSelectedPackageForQuestions(refreshed);
      notify("Butir soal telah dihapus.");
    }
  };

  // Handlers: Import Soal Excel
  const handleOpenImportExcel = (pkg: BankSoalPackage) => {
    setImportTargetPackage(pkg);
    setImportFileName("");
    setImportSuccessResult(null);
    setImportExcelModalOpen(true);
  };

  const handleSimulateImportExcel = () => {
    if (!importTargetPackage) return;
    setIsSimulatingImport(true);

    setTimeout(() => {
      // Mock generated import from BroMan format
      const importedSampleQuestions: BankSoalQuestion[] = [
        {
          id: Date.now() + 1,
          nomorUrut: (importTargetPackage.questions?.length || 0) + 1,
          jenis: "PG",
          bloom: "C4",
          stem: "[Imported] Perhatikan pernyataan berikut: (1) Frame Rate 24fps; (2) Shutter Speed 1/48s; (3) Dynamic Range 14 Stop; (4) Aspect Ratio 16:9. Karakteristik yang paling membedakan rekaman sinematik standar layar lebar (film look) dari video liputan ENG TV berturut-turut adalah...",
          options: [
            { key: "A", text: "(1) dan (2)" },
            { key: "B", text: "(2) dan (3)" },
            { key: "C", text: "(1) dan (4)" },
            { key: "D", text: "(3) dan (4)" },
            { key: "E", text: "Semua Benar" },
          ],
          correctKey: "A",
          explanation: "Standar film look berakar pada frame rate 24 fps dan aturan 180-degree shutter rule (1/48 detik).",
          bobotNilai: 2,
        },
        {
          id: Date.now() + 2,
          nomorUrut: (importTargetPackage.questions?.length || 0) + 2,
          jenis: "Esai",
          bloom: "C5",
          stem: "[Imported] Jelaskan prosedur perawatan rutin sensor kamera video (sensor cleaning) di studio penyiaran agar terhindar dari jamur (fungus) dan debu statis!",
          options: [],
          correctKey: "Esai",
          explanation: "Menyimpan di dry box dengan kelembaban 40-50% RH, menggunakan blower manual tanpa menyentuh sensor secara langsung.",
          bobotNilai: 10,
        },
      ];

      importedSampleQuestions.forEach((q) => {
        addQuestionToBank(importTargetPackage.id, q);
      });

      setIsSimulatingImport(false);
      setImportSuccessResult({
        count: 2,
        pg: 1,
        esai: 1,
      });
      notify(`Berhasil mengimpor 2 butir soal ke Bank Soal ${importTargetPackage.kodeBank}!`);
    }, 1200);
  };

  // Handlers: Media ZIP
  const handleOpenMediaZip = (pkg: BankSoalPackage) => {
    setMediaTargetPackage(pkg);
    setNewMediaName("");
    setMediaZipModalOpen(true);
  };

  const handleUploadMediaMock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mediaTargetPackage) return;
    if (!newMediaName.trim()) {
      notify("Ketik nama file media atau pilih berkas ZIP.");
      return;
    }
    addMediaFileToBank(mediaTargetPackage.id, {
      name: newMediaName.endsWith(".zip") || newMediaName.endsWith(".jpg") || newMediaName.endsWith(".png")
        ? newMediaName
        : `${newMediaName}.jpg`,
      size: newMediaSize,
    });
    setNewMediaName("");
    notify("Media gambar soal berhasil ditambahkan ke bank.");
  };

  // Handlers: Cetak
  const handleOpenPrint = (pkg: BankSoalPackage) => {
    setPrintTargetPackage(pkg);
    setPrintModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* 1. Header Box & Breadcrumb (Sesuai Gaya Asli Candy CBT BroMan) */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 mb-1">
              <span>Dashboard</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-emerald-700 font-bold">Bank Soal</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-slate-600">CBT BroMan</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-500/20">
                <FileSpreadsheet className="h-5 w-5" />
              </span>
              DATA BANK SOAL
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Manajemen paket soal ujian berbasis komputer (CBT). Setiap paket memuat butir soal Pilihan Ganda (5 Opsi A–E) dan Esai, bobot nilai, serta kontrol pengacakan soal.
            </p>
            <div className="mt-2.5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 shadow-sm">
                <User className="h-3.5 w-3.5 text-emerald-600" />
                <span>Akun Guru CBT: <strong>{currentTeacherName || "Very Kurniawan, S.Pd., Gr."}</strong></span>
              </span>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleOpenAddPackage}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 py-2.5 text-xs font-bold shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Plus className="h-4 w-4" />
              <span>Tambah Bank Soal</span>
            </button>

            {onNavigateToFormatSoal && (
              <button
                type="button"
                onClick={onNavigateToFormatSoal}
                className="inline-flex items-center gap-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 px-3.5 py-2.5 text-xs font-semibold transition-all"
                title="Buka panduan & validator template Excel/Word BroMan"
              >
                <FileText className="h-4 w-4 text-sky-600" />
                <span>Format BroMan</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                if (confirm("Muat ulang seluruh paket Bank Soal ke standar awal resmi CBT BroMan?")) {
                  resetBankSoalToDefault();
                  notify("Data Bank Soal berhasil disetel ulang ke default kurikulum.");
                }
              }}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2.5 text-xs font-semibold transition-all"
              title="Reset data default"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Reset Default</span>
            </button>
          </div>
        </div>

        {/* Petunjuk Alert Banner */}
        <div className="mt-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 p-3.5 flex items-start gap-3 text-xs text-emerald-950">
          <ShieldCheck className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-emerald-900">
              Petunjuk Pengelolaan Bank Soal Guru CBT:
            </p>
            <p className="text-emerald-800 text-[11px] leading-relaxed">
              1. Klik tombol <strong>Tambah Bank Soal</strong> untuk membuat kode mata pelajaran baru. | 2. Gunakan tombol <strong>Butir Soal</strong> untuk menginput atau meninjau butir soal secara rinci. | 3. Gunakan tombol <strong>Import Excel</strong> untuk mengunggah naskah soal massal sesuai format resmi BroMan (5 pilihan A–E). | 4. Pastikan status paket dalam keadaan <strong>Aktif</strong> agar dapat dijadwalkan pada menu <em>Jadwal Ujian</em>.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Top Metric Widgets (4 Kotak Indikator) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Bank Soal</p>
            <p className="text-2xl font-black text-slate-900 mt-0.5">{totalPaket} <span className="text-xs font-medium text-slate-500">Paket</span></p>
            <p className="text-[11px] text-emerald-600 font-medium mt-1">Fase E & Fase F</p>
          </div>
          <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <BookOpen className="h-5 w-5" />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Bank Soal Aktif</p>
            <p className="text-2xl font-black text-emerald-600 mt-0.5">{paketAktif} <span className="text-xs font-medium text-slate-500">Siap Ujian</span></p>
            <p className="text-[11px] text-slate-500 font-medium mt-1">Bisa Dijadwalkan</p>
          </div>
          <div className="h-11 w-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="h-5 w-5" />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Butir Soal</p>
            <p className="text-2xl font-black text-indigo-600 mt-0.5">{totalQuestionsAll} <span className="text-xs font-medium text-slate-500">Butir</span></p>
            <p className="text-[11px] text-slate-500 font-medium mt-1">Pilihan Ganda & Esai</p>
          </div>
          <div className="h-11 w-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Layers className="h-5 w-5" />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Format Jawaban</p>
            <p className="text-2xl font-black text-teal-600 mt-0.5">5 Opsi <span className="text-xs font-medium text-slate-500">A – E</span></p>
            <p className="text-[11px] text-slate-500 font-medium mt-1">Standar Resmi SMK</p>
          </div>
          <div className="h-11 w-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <Award className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* 3. Filter Bar & Pencarian */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Search box */}
          <div className="relative">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Cari Bank Soal</label>
            <div className="relative">
              <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Kode bank, mapel, guru..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50/70 focus:bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>
          </div>

          {/* Filter Tingkat */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Tingkat / Kelas</label>
            <select
              value={filterTingkat}
              onChange={(e) => setFilterTingkat(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50/70 text-slate-800 focus:outline-none focus:border-emerald-500"
            >
              <option value="all">Semua Tingkat (Kelas X, XI, XII)</option>
              <option value="X">Kelas X (Fase E)</option>
              <option value="XI">Kelas XI (Fase F)</option>
              <option value="XII">Kelas XII (Fase F)</option>
            </select>
          </div>

          {/* Filter Elemen */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Elemen Kejuruan</label>
            <select
              value={filterElemen}
              onChange={(e) => setFilterElemen(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50/70 text-slate-800 focus:outline-none focus:border-emerald-500"
            >
              <option value="all">Semua Elemen Kurikulum</option>
              <option value="E1">E1 - Dunia Kerja BCF</option>
              <option value="E2">E2 - Perkembangan Media</option>
              <option value="E3">E3 - Peralatan Audio Visual</option>
              <option value="E4">E4 - Produksi & New Media</option>
              <option value="F1">F1 - Manajemen Siaran TV</option>
              <option value="F2">F2 - Penulisan Naskah</option>
              <option value="F3">F3 - Penyutradaraan</option>
              <option value="F4">F4 - Tata Kamera & Cahaya</option>
              <option value="TKA">TKA - Tes Kemampuan Akademik</option>
            </select>
          </div>

          {/* Filter Status */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Status Publikasi</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50/70 text-slate-800 focus:outline-none focus:border-emerald-500"
            >
              <option value="all">Semua Status</option>
              <option value="aktif">Aktif (Siap Ujian)</option>
              <option value="nonaktif">Nonaktif (Draft / Non-Aktif)</option>
            </select>
          </div>
        </div>
      </div>

      {/* 4. Tabel Utama Bank Soal (Mirip Persis Candy CBT BroMan) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-800">
              Daftar Paket Bank Soal ({filteredPackages.length} paket)
            </span>
          </div>
          <span className="text-[11px] text-slate-400">
            Tahun Ajaran 2026/2027 Ganjil
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50/80 text-slate-600 font-bold border-b border-slate-200 uppercase tracking-wider text-[10px]">
                <th className="py-3.5 px-3 text-center w-12">No</th>
                <th className="py-3.5 px-4 min-w-[170px]">Kode Bank Soal</th>
                <th className="py-3.5 px-4 min-w-[260px]">Mata Pelajaran & Info</th>
                <th className="py-3.5 px-4 min-w-[170px]">Komposisi Soal</th>
                <th className="py-3.5 px-4 min-w-[130px]">Pengacakan & KKM</th>
                <th className="py-3.5 px-4 text-center min-w-[100px]">Status</th>
                <th className="py-3.5 px-4 text-center min-w-[260px]">Aksi Lengkap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredPackages.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-12 text-slate-400">
                    <AlertCircle className="h-8 w-8 mx-auto text-slate-300 mb-2" />
                    <p className="text-sm font-semibold text-slate-600">Tidak ada paket bank soal ditemukan</p>
                    <p className="text-xs text-slate-400 mt-0.5">Coba ubah kata kunci pencarian atau buat paket bank soal baru.</p>
                  </td>
                </tr>
              ) : (
                filteredPackages.map((pkg, idx) => {
                  const pgCount = pkg.questions ? pkg.questions.filter((q) => q.jenis !== "Esai").length : 0;
                  const esaiCount = pkg.questions ? pkg.questions.filter((q) => q.jenis === "Esai").length : 0;

                  return (
                    <tr
                      key={pkg.id}
                      className="hover:bg-slate-50/70 transition-colors group"
                    >
                      {/* No */}
                      <td className="py-4 px-3 text-center font-bold text-slate-400">
                        {idx + 1}
                      </td>

                      {/* Kode Bank Soal */}
                      <td className="py-4 px-4 font-mono">
                        <div className="font-extrabold text-slate-900 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg inline-block text-[11px] tracking-wide">
                          {pkg.kodeBank}
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Update: {pkg.updatedAt}
                        </p>
                      </td>

                      {/* Mata Pelajaran & Tingkat */}
                      <td className="py-4 px-4">
                        <button
                          type="button"
                          onClick={() => handleOpenQuestionsModal(pkg)}
                          className="text-left font-bold text-slate-900 group-hover:text-indigo-600 transition-colors block cursor-pointer"
                          title="Klik untuk membuka editor butir soal dan kunci jawaban"
                        >
                          {pkg.namaMapel}
                        </button>
                        <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                          <span className="rounded-md bg-sky-100 text-sky-800 font-semibold px-2 py-0.5 text-[10px]">
                            {pkg.tingkat === "X" ? "Kelas X (Fase E)" : `Kelas ${pkg.tingkat} (${pkg.fase})`}
                          </span>
                          <span className="rounded-md bg-purple-100 text-purple-800 font-semibold px-2 py-0.5 text-[10px]">
                            {pkg.jurusan}
                          </span>
                          <span className="text-[10px] text-slate-500">
                            • {!pkg.guruPengampu || pkg.guruPengampu === "Saputra Indra Purnama, S.Pd." ? (currentTeacherName || "Very Kurniawan, S.Pd., Gr.") : pkg.guruPengampu}
                          </span>
                        </div>
                      </td>

                      {/* Komposisi Soal */}
                      <td className="py-4 px-4">
                        <div
                          onClick={() => handleOpenQuestionsModal(pkg)}
                          className="p-2.5 rounded-xl border border-slate-200/90 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all cursor-pointer group/comp bg-slate-50/50"
                          title="Klik untuk membuka editor & mengedit seluruh butir soal dan kunci jawaban"
                        >
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-slate-500 font-medium">Pilihan Ganda:</span>
                            <span className="font-bold text-slate-800">{pgCount} / {pkg.jmlPg} ({pkg.bobotPg}%)</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] mt-0.5">
                            <span className="text-slate-500 font-medium">Esai:</span>
                            <span className="font-bold text-slate-800">{esaiCount} / {pkg.jmlEsai} ({pkg.bobotEsai}%)</span>
                          </div>
                          <div className="pt-1.5 mt-1.5 border-t border-slate-200/70 flex items-center justify-between text-[10px]">
                            <span className="text-slate-400">Format: <strong>5 Opsi (A-E)</strong></span>
                            <span className="flex items-center gap-1 font-bold text-indigo-700 bg-indigo-100/80 px-2 py-0.5 rounded-md">
                              <Edit3 className="h-2.5 w-2.5" />
                              {pgCount + esaiCount} Butir
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Pengacakan & KKM */}
                      <td className="py-4 px-4">
                        <div className="space-y-1 text-[11px]">
                          <div className="flex items-center gap-1.5">
                            <span className="text-slate-500">Acak Soal:</span>
                            <span className={`font-bold ${pkg.acakSoal ? "text-emerald-600" : "text-slate-400"}`}>
                              {pkg.acakSoal ? "Ya" : "Tidak"}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-slate-500">Acak Opsi:</span>
                            <span className={`font-bold ${pkg.acakOpsi ? "text-emerald-600" : "text-slate-400"}`}>
                              {pkg.acakOpsi ? "Ya" : "Tidak"}
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-500">
                            KKM: <strong className="text-slate-800">{pkg.kkm}</strong> | Waktu: <strong className="text-slate-800">{pkg.durasiMenit}m</strong>
                          </div>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-4 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(pkg)}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all shadow-sm ${
                            pkg.status === "aktif"
                              ? "bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border border-emerald-300"
                              : "bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-300"
                          }`}
                          title="Klik untuk mengubah status aktif/nonaktif"
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${pkg.status === "aktif" ? "bg-emerald-600" : "bg-slate-400"}`}></span>
                          <span>{pkg.status === "aktif" ? "Aktif" : "Nonaktif"}</span>
                        </button>
                      </td>

                      {/* Aksi Lengkap (Toolbar Khas Candy CBT dengan Tombol Jelas Edit Soal & Jawaban) */}
                      <td className="py-4 px-4 text-center">
                        <div className="flex flex-col items-center gap-2 max-w-[250px] mx-auto">
                          {/* Tombol Utama: Edit Soal & Jawaban */}
                          <button
                            type="button"
                            onClick={() => handleOpenQuestionsModal(pkg)}
                            className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 text-white font-bold text-xs shadow-sm shadow-indigo-600/25 transition-all hover:scale-[1.01] active:scale-[0.98] border border-indigo-500/30"
                            title="Buka panel untuk melihat, mengedit butir soal, opsi A-E, dan kunci jawaban"
                          >
                            <Edit3 className="h-3.5 w-3.5" />
                            <span>Edit Soal & Jawaban ({pgCount + esaiCount})</span>
                          </button>

                          {/* Toolbar Aksi Pendukung */}
                          <div className="flex items-center justify-center gap-1.5">
                            {/* 1. Tambah Soal Langsung */}
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedPackageForQuestions(pkg);
                                handleOpenAddQuestion();
                              }}
                              className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-all"
                              title="Tambah Butir Soal Baru Langsung (+)"
                            >
                              <Plus className="h-4 w-4" />
                            </button>

                            {/* 2. Import Excel */}
                            <button
                              type="button"
                              onClick={() => handleOpenImportExcel(pkg)}
                              className="p-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-700 border border-teal-200 transition-all"
                              title="Import Soal dari Excel (Format BroMan)"
                            >
                              <Upload className="h-4 w-4" />
                            </button>

                            {/* 3. Media Gambar ZIP */}
                            <button
                              type="button"
                              onClick={() => handleOpenMediaZip(pkg)}
                              className="p-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 transition-all"
                              title="Import / Kelola Berkas Media Gambar (ZIP)"
                            >
                              <ImageIcon className="h-4 w-4" />
                            </button>

                            {/* 4. Edit Pengaturan Bank (Kode, KKM, Durasi, Bobot) */}
                            <button
                              type="button"
                              onClick={() => handleOpenEditPackage(pkg)}
                              className="p-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 transition-all"
                              title="Edit Pengaturan Paket (Kode Bank, KKM, Durasi, Bobot)"
                            >
                              <Sliders className="h-4 w-4" />
                            </button>

                            {/* 5. Cetak */}
                            <button
                              type="button"
                              onClick={() => handleOpenPrint(pkg)}
                              className="p-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 transition-all"
                              title="Cetak Kisi-kisi & Naskah Soal"
                            >
                              <Printer className="h-4 w-4" />
                            </button>

                            {/* 6. Hapus */}
                            <button
                              type="button"
                              onClick={() => handleDeletePackage(pkg)}
                              className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition-all"
                              title="Hapus Bank Soal"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODAL 1: TAMBAH / EDIT PAKET BANK SOAL                                    */}
      {/* ========================================================================= */}
      {packageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between rounded-t-3xl z-10">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
                  <FileSpreadsheet className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {editingPackageId ? "Edit Pengaturan Bank Soal" : "Tambah Bank Soal Baru"}
                  </h3>
                  <p className="text-xs text-slate-500">Standar Sistem CBT CBT BroMan</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setPackageModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSavePackage} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Kode Bank */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Kode Bank Soal *
                  </label>
                  <input
                    type="text"
                    required
                    value={pkgKodeBank}
                    onChange={(e) => setPkgKodeBank(e.target.value.toUpperCase())}
                    placeholder="Contoh: BCF-E3-2026"
                    className="w-full px-3 py-2 text-xs font-mono font-bold rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-500"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">Harus unik, huruf kapital & angka tanpa spasi</p>
                </div>

                {/* Jenis Ujian */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Jenis Asesmen / Ujian
                  </label>
                  <select
                    value={pkgJenisUjian}
                    onChange={(e) => setPkgJenisUjian(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Asesmen Sumatif Tengah Semester (ASTS)">Asesmen Sumatif Tengah Semester (ASTS)</option>
                    <option value="Asesmen Sumatif Akhir Semester (ASAS)">Asesmen Sumatif Akhir Semester (ASAS)</option>
                    <option value="Tes Kemampuan Akademik (TKA) Kejuruan">Tes Kemampuan Akademik (TKA) Kejuruan</option>
                    <option value="Ujian Sekolah (US)">Ujian Sekolah (US)</option>
                    <option value="Kuis Formatif Harian">Kuis Formatif Harian</option>
                  </select>
                </div>
              </div>

              {/* Nama Mapel */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Nama Mata Pelajaran / Elemen Kejuruan *
                </label>
                <input
                  type="text"
                  required
                  value={pkgNamaMapel}
                  onChange={(e) => setPkgNamaMapel(e.target.value)}
                  placeholder="Contoh: Dasar Broadcasting - Elemen 3: Peralatan Audio Visual"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Elemen */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Elemen Kurikulum</label>
                  <select
                    value={pkgElemenCode}
                    onChange={(e) => setPkgElemenCode(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="E1">E1 - Dunia Kerja BCF</option>
                    <option value="E2">E2 - Perkembangan Media</option>
                    <option value="E3">E3 - Peralatan Audio Visual</option>
                    <option value="E4">E4 - Produksi & New Media</option>
                    <option value="F1">F1 - Manajemen Siaran TV</option>
                    <option value="F2">F2 - Penulisan Naskah</option>
                    <option value="F3">F3 - Penyutradaraan</option>
                    <option value="F4">F4 - Tata Kamera & Cahaya</option>
                    <option value="TKA">TKA - Asesmen Kejuruan</option>
                  </select>
                </div>

                {/* Tingkat */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Tingkat Kelas</label>
                  <select
                    value={pkgTingkat}
                    onChange={(e) => {
                      const val = e.target.value as "X" | "XI" | "XII";
                      setPkgTingkat(val);
                      setPkgFase(val === "X" ? "Fase E" : "Fase F");
                    }}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="X">Kelas X (Fase E)</option>
                    <option value="XI">Kelas XI (Fase F)</option>
                    <option value="XII">Kelas XII (Fase F)</option>
                  </select>
                </div>

                {/* Guru Pengampu */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Guru Pengampu</label>
                  <input
                    type="text"
                    value={pkgGuru}
                    onChange={(e) => setPkgGuru(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Komposisi Soal & Bobot Nilai */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Sliders className="h-4 w-4 text-emerald-600" />
                  Konfigurasi Soal & Bobot Ujian (5 Opsi Jawaban A–E)
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Jml Soal PG</label>
                    <input
                      type="number"
                      min={0}
                      value={pkgJmlPg}
                      onChange={(e) => setPkgJmlPg(Number(e.target.value))}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Bobot PG (%)</label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={pkgBobotPg}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setPkgBobotPg(val);
                        setPkgBobotEsai(100 - val);
                      }}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Jml Soal Esai</label>
                    <input
                      type="number"
                      min={0}
                      value={pkgJmlEsai}
                      onChange={(e) => setPkgJmlEsai(Number(e.target.value))}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Bobot Esai (%)</label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={pkgBobotEsai}
                      onChange={(e) => setPkgBobotEsai(Number(e.target.value))}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Nilai KKM</label>
                    <input
                      type="number"
                      value={pkgKkm}
                      onChange={(e) => setPkgKkm(Number(e.target.value))}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Durasi Ujian (Menit)</label>
                    <input
                      type="number"
                      value={pkgDurasi}
                      onChange={(e) => setPkgDurasi(Number(e.target.value))}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white font-bold"
                    />
                  </div>
                </div>
              </div>

              {/* Toggles Acak Soal, Acak Opsi & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                <label className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pkgAcakSoal}
                    onChange={(e) => setPkgAcakSoal(e.target.checked)}
                    className="rounded text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                  />
                  <div>
                    <p className="font-bold text-slate-800">Acak Butir Soal</p>
                    <p className="text-[10px] text-slate-400">Urutan beda per siswa</p>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pkgAcakOpsi}
                    onChange={(e) => setPkgAcakOpsi(e.target.checked)}
                    className="rounded text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                  />
                  <div>
                    <p className="font-bold text-slate-800">Acak Opsi Pilihan</p>
                    <p className="text-[10px] text-slate-400">Pilihan A–E diacak</p>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pkgStatus === "aktif"}
                    onChange={(e) => setPkgStatus(e.target.checked ? "aktif" : "nonaktif")}
                    className="rounded text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                  />
                  <div>
                    <p className="font-bold text-slate-800">Status Aktif</p>
                    <p className="text-[10px] text-slate-400">Dapat dijadwalkan</p>
                  </div>
                </label>
              </div>

              {/* Footer Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setPackageModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md shadow-emerald-600/20"
                >
                  {editingPackageId ? "Simpan Perubahan" : "Buat Paket Bank Soal"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: KELOLA BUTIR SOAL (VIEWER & EDITOR)                              */}
      {/* ========================================================================= */}
      {questionsModalOpen && selectedPackageForQuestions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <Edit3 className="h-5 w-5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold bg-slate-800 text-emerald-400 px-2 py-0.5 rounded border border-slate-700">
                      {selectedPackageForQuestions.kodeBank}
                    </span>
                    <span className="text-xs text-slate-400">
                      • {selectedPackageForQuestions.tingkat === "X" ? "Kelas X (Fase E)" : `Kelas ${selectedPackageForQuestions.tingkat}`}
                    </span>
                    <span className="text-xs text-indigo-300 font-medium">
                      • Editor Soal & Kunci Jawaban
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                    Kelola & Edit Butir Soal: {selectedPackageForQuestions.namaMapel}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setQuestionsModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Sub-toolbar: Filter tabs, search, and Add button */}
            <div className="bg-slate-50 border-b border-slate-200 p-4 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setQuestionTabFilter("all")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    questionTabFilter === "all"
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  Semua ({selectedPackageForQuestions.questions?.length || 0})
                </button>
                <button
                  type="button"
                  onClick={() => setQuestionTabFilter("PG")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    questionTabFilter === "PG"
                      ? "bg-emerald-600 text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  Pilihan Ganda ({selectedPackageForQuestions.questions?.filter((q) => q.jenis !== "Esai").length || 0})
                </button>
                <button
                  type="button"
                  onClick={() => setQuestionTabFilter("Esai")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    questionTabFilter === "Esai"
                      ? "bg-purple-600 text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  Esai ({selectedPackageForQuestions.questions?.filter((q) => q.jenis === "Esai").length || 0})
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="h-3.5 w-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuestionText}
                    onChange={(e) => setSearchQuestionText(e.target.value)}
                    placeholder="Cari kata di stimulus/soal..."
                    className="pl-8 pr-2.5 py-1.5 text-xs rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-emerald-500 w-48"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleOpenAddQuestion}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 text-xs font-bold shadow-sm transition-all"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Tambah Butir Soal</span>
                </button>
              </div>
            </div>

            {/* Questions List Body */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              {(() => {
                const list = (selectedPackageForQuestions.questions || []).filter((q) => {
                  const matchTab =
                    questionTabFilter === "all" ||
                    (questionTabFilter === "PG" && q.jenis !== "Esai") ||
                    (questionTabFilter === "Esai" && q.jenis === "Esai");

                  const matchSearch =
                    q.stem.toLowerCase().includes(searchQuestionText.toLowerCase()) ||
                    (q.explanation && q.explanation.toLowerCase().includes(searchQuestionText.toLowerCase()));

                  return matchTab && matchSearch;
                });

                if (list.length === 0) {
                  return (
                    <div className="text-center py-12 text-slate-400">
                      <FileSpreadsheet className="h-10 w-10 mx-auto text-slate-300 mb-2" />
                      <p className="text-sm font-semibold text-slate-600">Belum ada butir soal dalam kategori ini</p>
                      <p className="text-xs text-slate-400 mt-1">
                        Klik tombol <strong>Tambah Butir Soal</strong> di kanan atas atau gunakan <strong>Import Excel</strong>.
                      </p>
                    </div>
                  );
                }

                return list.map((q, qIndex) => (
                  <div
                    key={q.id}
                    className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm space-y-3 hover:border-slate-300 transition-all"
                  >
                    {/* Item Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 bg-slate-100 text-xs px-2.5 py-0.5 rounded-md">
                          Soal #{q.nomorUrut || qIndex + 1}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          q.jenis === "Esai" ? "bg-purple-100 text-purple-700" : "bg-emerald-100 text-emerald-700"
                        }`}>
                          {q.jenis === "Esai" ? "Uraian / Esai" : "Pilihan Ganda (5 Opsi)"}
                        </span>
                        <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                          Tingkat {q.bloom}
                        </span>
                        {q.bobotNilai && (
                          <span className="text-[10px] text-slate-400">
                            Bobot: {q.bobotNilai} poin
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleOpenEditQuestion(q)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
                          title="Buka form editor untuk mengubah stimulus soal, 5 opsi A-E, kunci jawaban, dan pembahasan"
                        >
                          <Edit3 className="h-3.5 w-3.5" />
                          <span>Edit Soal & Jawaban</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteQuestion(q.id)}
                          className="p-1.5 rounded-xl text-rose-500 hover:text-rose-700 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 transition-all"
                          title="Hapus butir soal ini"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Stimulus / Stem */}
                    <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                      {q.stem}
                    </div>

                    {/* Options (If PG) */}
                    {q.jenis !== "Esai" && q.options && q.options.length > 0 && (
                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                          <span>5 Pilihan Jawaban (A – E):</span>
                          <span className="text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            <Check className="h-3 w-3 text-emerald-600" />
                            Kunci Jawaban Aktif: Opsi {q.correctKey}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {q.options.map((opt) => {
                            const isCorrect = opt.key === q.correctKey;
                            return (
                              <div
                                key={opt.key}
                                onClick={() => handleQuickSetCorrectKey(q.id, opt.key)}
                                className={`p-2.5 rounded-xl border flex items-start gap-2 cursor-pointer transition-all ${
                                  isCorrect
                                    ? "bg-emerald-50/90 border-emerald-400 text-emerald-950 font-semibold shadow-xs ring-1 ring-emerald-300"
                                    : "bg-slate-50/60 border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/30"
                                }`}
                                title={
                                  isCorrect
                                    ? "Kunci Jawaban Benar saat ini"
                                    : `Klik untuk jadikan Opsi ${opt.key} sebagai KUNCI JAWABAN BENAR`
                                }
                              >
                                <span
                                  className={`h-5 w-5 rounded-full flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5 transition-colors ${
                                    isCorrect
                                      ? "bg-emerald-600 text-white"
                                      : "bg-slate-200 text-slate-600"
                                  }`}
                                >
                                  {opt.key}
                                </span>
                                <span className="flex-1 leading-snug">{opt.text}</span>
                                {isCorrect ? (
                                  <span className="inline-flex items-center gap-0.5 text-[10px] font-extrabold text-emerald-700 bg-emerald-100/90 px-1.5 py-0.5 rounded shrink-0">
                                    <Check className="h-3 w-3 text-emerald-700" />
                                    KUNCI
                                  </span>
                                ) : (
                                  <span className="text-[10px] text-slate-400 hover:text-emerald-600 shrink-0 font-medium">
                                    Set Kunci
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Explanation */}
                    {q.explanation && (
                      <div className="rounded-xl bg-slate-50 border border-slate-200/70 p-2.5 text-[11px] text-slate-600">
                        <strong className="text-slate-800">Pembahasan / Pedoman Penskoran:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                ));
              })()}
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-100 border-t border-slate-200 px-6 py-3.5 flex items-center justify-between shrink-0 text-xs">
              <span className="text-slate-500">
                Total butir soal aktif: <strong>{selectedPackageForQuestions.questions?.length || 0}</strong> butir
              </span>
              <button
                type="button"
                onClick={() => setQuestionsModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: FORM TAMBAH / EDIT BUTIR SOAL                                   */}
      {/* ========================================================================= */}
      {editQuestionModalOpen && selectedPackageForQuestions && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between rounded-t-3xl z-10">
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  {editingQuestionItem
                    ? `Edit Butir Soal & Kunci Jawaban (Nomor #${editingQuestionItem.nomorUrut || ""})`
                    : "Tambah Butir Soal Baru (5 Opsi A–E)"}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Paket: <span className="font-semibold text-slate-700">{selectedPackageForQuestions.namaMapel}</span> ({selectedPackageForQuestions.kodeBank})
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEditQuestionModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveQuestion} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Jenis Soal */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Tipe Soal</label>
                  <select
                    value={qJenis}
                    onChange={(e) => setQJenis(e.target.value as "PG" | "Esai")}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:border-emerald-500 font-bold"
                  >
                    <option value="PG">Pilihan Ganda (5 Opsi A-E)</option>
                    <option value="Esai">Uraian / Esai</option>
                  </select>
                </div>

                {/* Tingkat Bloom */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Tingkat Kognitif</label>
                  <select
                    value={qBloom}
                    onChange={(e) => setQBloom(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="C1">C1 - Mengingat</option>
                    <option value="C2">C2 - Memahami</option>
                    <option value="C3">C3 - Menerapkan</option>
                    <option value="C4">C4 - Menganalisis</option>
                    <option value="C5">C5 - Mengevaluasi</option>
                    <option value="C6">C6 - Mencipta</option>
                  </select>
                </div>

                {/* Bobot Nilai */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Bobot Poin</label>
                  <input
                    type="number"
                    min={1}
                    value={qBobotNilai}
                    onChange={(e) => setQBobotNilai(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:border-emerald-500 font-bold"
                  />
                </div>
              </div>

              {/* Teks Soal / Stimulus */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Stimulus / Teks Soal Pertanyaan *
                </label>
                <textarea
                  required
                  rows={4}
                  value={qStem}
                  onChange={(e) => setQStem(e.target.value)}
                  placeholder="Ketik teks pertanyaan atau studi kasus soal secara lengkap di sini..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-500 leading-relaxed"
                />
              </div>

              {/* Opsi A - E (Khusus PG) */}
              {qJenis === "PG" && (
                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-slate-700 uppercase">
                      5 Pilihan Jawaban & Kunci Jawaban Benar (A–E) *
                    </label>
                    <span className="text-[11px] text-emerald-800 font-bold bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1">
                      <Check className="h-3 w-3 text-emerald-700" />
                      Kunci Terpilih: Opsi {qCorrectKey}
                    </span>
                  </div>

                  {[
                    { key: "A", val: qOptA, set: setQOptA },
                    { key: "B", val: qOptB, set: setQOptB },
                    { key: "C", val: qOptC, set: setQOptC },
                    { key: "D", val: qOptD, set: setQOptD },
                    { key: "E", val: qOptE, set: setQOptE },
                  ].map((item) => {
                    const isKey = qCorrectKey === item.key;
                    return (
                      <div
                        key={item.key}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border transition-all ${
                          isKey
                            ? "bg-emerald-50/90 border-emerald-400 shadow-xs ring-1 ring-emerald-300"
                            : "bg-white border-slate-200"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setQCorrectKey(item.key)}
                          className={`h-8 w-8 rounded-lg font-bold text-xs flex items-center justify-center transition-all ${
                            isKey
                              ? "bg-emerald-600 text-white shadow-xs"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-emerald-700"
                          }`}
                          title={`Klik untuk menetapkan Opsi ${item.key} sebagai KUNCI JAWABAN BENAR`}
                        >
                          {item.key}
                        </button>
                        <input
                          type="text"
                          required
                          value={item.val}
                          onChange={(e) => item.set(e.target.value)}
                          placeholder={`Tulis teks pilihan jawaban ${item.key}...`}
                          className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-emerald-500 font-medium"
                        />
                        <button
                          type="button"
                          onClick={() => setQCorrectKey(item.key)}
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-lg transition-all ${
                            isKey
                              ? "bg-emerald-600 text-white shadow-xs"
                              : "bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200"
                          }`}
                        >
                          {isKey ? "✓ KUNCI BENAR" : "Jadikan Kunci"}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Pembahasan / Pedoman Penskoran */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Pembahasan / Pedoman Penilaian
                </label>
                <textarea
                  rows={2}
                  value={qExplanation}
                  onChange={(e) => setQExplanation(e.target.value)}
                  placeholder="Penjelasan jawaban atau rubrik kriteria penskoran..."
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setEditQuestionModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/20"
                >
                  Simpan Butir Soal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 4: IMPORT SOAL EXCEL (FORMAT BROMAN)                   */}
      {/* ========================================================================= */}
      {importExcelModalOpen && importTargetPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-lg p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
                  <Upload className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Import Soal Excel</h3>
                  <p className="text-xs text-slate-500">Ke Bank Soal: {importTargetPackage.kodeBank}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setImportExcelModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="rounded-xl bg-sky-50 border border-sky-200 p-3.5 text-xs text-sky-950 space-y-1">
              <p className="font-bold flex items-center gap-1.5 text-sky-900">
                <FileSpreadsheet className="h-4 w-4 text-sky-600" />
                Ketentuan Berkas Format BroMan:
              </p>
              <p className="text-[11px] leading-relaxed text-sky-800">
                Gunakan file Excel (<code>.xlsx</code> / <code>.xls</code>) dengan kolom baku: <strong>NO, JENIS, SOAL, OPSI_A, OPSI_B, OPSI_C, OPSI_D, OPSI_E, KUNCI</strong>. Pastikan tidak mengubah nama header kolom.
              </p>
            </div>

            {/* Upload Area / Dropzone */}
            <div className="border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-2xl p-6 text-center bg-slate-50/50 hover:bg-emerald-50/20 transition-all cursor-pointer">
              <FileSpreadsheet className="h-10 w-10 text-emerald-600 mx-auto mb-2" />
              <p className="text-xs font-bold text-slate-800">Pilih Berkas Excel Bank Soal</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Drag & drop atau klik untuk menelusuri komputer</p>
              <input
                type="file"
                accept=".xlsx, .xls, .csv"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setImportFileName(e.target.files[0].name);
                  }
                }}
                className="mt-3 block w-full text-xs text-slate-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
              />
            </div>

            {importSuccessResult && (
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-bold">Proses Impor Berhasil!</p>
                  <p className="text-[11px]">
                    {importSuccessResult.count} butir soal ({importSuccessResult.pg} PG, {importSuccessResult.esai} Esai) telah dimasukkan ke paket {importTargetPackage.kodeBank}.
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              {onNavigateToFormatSoal ? (
                <button
                  type="button"
                  onClick={() => {
                    setImportExcelModalOpen(false);
                    onNavigateToFormatSoal();
                  }}
                  className="text-xs text-sky-700 hover:underline font-semibold flex items-center gap-1"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Unduh Template Resmi</span>
                </button>
              ) : (
                <span />
              )}

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setImportExcelModalOpen(false)}
                  className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
                >
                  Tutup
                </button>
                <button
                  type="button"
                  disabled={isSimulatingImport}
                  onClick={handleSimulateImportExcel}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md shadow-emerald-600/20 disabled:opacity-50 flex items-center gap-1.5"
                >
                  {isSimulatingImport ? (
                    <>
                      <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                      <span>Memproses...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="h-3.5 w-3.5" />
                      <span>Mulai Import Soal</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 5: IMPORT BERKAS MEDIA / GAMBAR (ZIP)                               */}
      {/* ========================================================================= */}
      {mediaZipModalOpen && mediaTargetPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-lg p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-amber-100 text-amber-800">
                  <FileArchive className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Media Gambar Soal (ZIP)</h3>
                  <p className="text-xs text-slate-500">Bank: {mediaTargetPackage.kodeBank}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMediaZipModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-900 space-y-1">
              <p className="font-bold">Panduan Unggah Media Gambar:</p>
              <p className="text-[11px] text-amber-800 leading-relaxed">
                Kompres seluruh gambar pendukung (JPG/PNG) ke dalam satu file <code>.zip</code> tanpa sub-folder. Nama file gambar di dalam Excel harus persis sama (misal: <code>kamera1.jpg</code>).
              </p>
            </div>

            {/* Current Media List */}
            <div>
              <p className="text-xs font-bold text-slate-700 mb-2">
                Berkas Media Terdaftar ({mediaTargetPackage.mediaFiles?.length || 0}):
              </p>
              <div className="max-h-40 overflow-y-auto space-y-1.5 border border-slate-200 rounded-xl p-2 bg-slate-50/50">
                {(mediaTargetPackage.mediaFiles || []).length === 0 ? (
                  <p className="text-center py-4 text-xs text-slate-400">Belum ada media gambar terunggah</p>
                ) : (
                  mediaTargetPackage.mediaFiles.map((m) => (
                    <div
                      key={m.id}
                      className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <ImageIcon className="h-3.5 w-3.5 text-amber-600" />
                        <span className="font-mono text-slate-800 font-semibold">{m.name}</span>
                        <span className="text-[10px] text-slate-400">({m.size})</span>
                      </div>
                      <span className="text-[10px] text-slate-400">{m.uploadDate}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Quick Upload Form */}
            <form onSubmit={handleUploadMediaMock} className="space-y-3 pt-2">
              <label className="block text-xs font-bold text-slate-700 uppercase">
                Unggah File Media Tambahan
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMediaName}
                  onChange={(e) => setNewMediaName(e.target.value)}
                  placeholder="Nama file, contoh: diagram_lighting.png"
                  className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:bg-white"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-bold rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-sm"
                >
                  Tambah
                </button>
              </div>
            </form>

            <div className="pt-2 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setMediaZipModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                Selesai
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 6: CETAK KISI-KISI & NASKAH SOAL                                    */}
      {/* ========================================================================= */}
      {printModalOpen && printTargetPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
            <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <Printer className="h-5 w-5 text-purple-400" />
                <h3 className="font-bold text-base">Pratinjau Lembar Cetak Bank Soal</h3>
              </div>
              <button
                type="button"
                onClick={() => setPrintModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Printable Paper Area */}
            <div className="p-8 overflow-y-auto bg-slate-50/50 flex-1 space-y-6 font-serif">
              {/* KOP Surat */}
              <div className="text-center border-b-2 border-slate-900 pb-4">
                <h2 className="text-base font-bold uppercase tracking-wider text-slate-900">
                  PEMERINTAH PROVINSI JAWA TIMUR • DINAS PENDIDIKAN
                </h2>
                <h1 className="text-xl font-black uppercase text-slate-900 tracking-wide mt-0.5">
                  CBT BROMAN BROADCASTING & PERFILMAN
                </h1>
                <p className="text-xs text-slate-600 mt-1 italic font-sans">
                  Sistem Ujian Berbasis Komputer CBT BroMan — Tahun Ajaran 2026/2027
                </p>
              </div>

              {/* Metadata Ujian */}
              <div className="grid grid-cols-2 gap-4 text-xs font-sans border border-slate-300 p-4 rounded-xl bg-white">
                <div>
                  <p><strong>Mata Pelajaran:</strong> {printTargetPackage.namaMapel}</p>
                  <p><strong>Kode Bank:</strong> {printTargetPackage.kodeBank}</p>
                  <p><strong>Tingkat / Fase:</strong> {printTargetPackage.tingkat} ({printTargetPackage.fase})</p>
                </div>
                <div>
                  <p><strong>Guru Pengampu:</strong> {!printTargetPackage.guruPengampu || printTargetPackage.guruPengampu === "Saputra Indra Purnama, S.Pd." ? (currentTeacherName || "Very Kurniawan, S.Pd., Gr.") : printTargetPackage.guruPengampu}</p>
                  <p><strong>Alokasi Waktu:</strong> {printTargetPackage.durasiMenit} Menit</p>
                  <p><strong>Jumlah Soal:</strong> {printTargetPackage.questions?.length || 0} Butir (5 Opsi A-E)</p>
                </div>
              </div>

              {/* Questions Printout Preview */}
              <div className="space-y-4 font-sans text-xs">
                {(printTargetPackage.questions || []).map((q, qIdx) => (
                  <div key={q.id} className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
                    <p className="font-bold text-slate-900">
                      {qIdx + 1}. {q.stem}
                    </p>
                    {q.options && q.options.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-4 text-slate-700">
                        {q.options.map((opt) => (
                          <div key={opt.key} className={opt.key === q.correctKey ? "font-bold text-emerald-800" : ""}>
                            {opt.key}. {opt.text} {opt.key === q.correctKey && "✓ (Kunci)"}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-t border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
              <span className="text-xs text-slate-500 font-sans">
                Format siap cetak PDF / Printer lokal
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPrintModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-sans"
                >
                  Tutup
                </button>
                <button
                  type="button"
                  onClick={() => {
                    window.print();
                  }}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-600/20 font-sans flex items-center gap-1.5"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>Cetak Dokumen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
