export * from "./curriculum-types";
import { ElemenData } from "./curriculum-types";


import { E1_CONTENTS } from "./curriculum-e1";
import { E2_CONTENTS } from "./curriculum-e2";
import { E3_CONTENTS } from "./curriculum-e3";
import { E4_CONTENTS } from "./curriculum-e4";
import { F1_CONTENTS } from "./curriculum-f1";
import { F2_CONTENTS } from "./curriculum-f2";
import { F3_CONTENTS } from "./curriculum-f3";
import { F4_CONTENTS } from "./curriculum-f4";
import { F5_CONTENTS } from "./curriculum-f5";
import { F6_CONTENTS } from "./curriculum-f6";
import { F7_CONTENTS } from "./curriculum-f7";
import { F8_CONTENTS } from "./curriculum-f8";
import { P1_CONTENTS } from "./curriculum-p1";
import { P2_CONTENTS } from "./curriculum-p2";

export const ALL_ELEMEN: Record<string, ElemenData> = {
  E1: {
    code: "E1",
    fase: "E",
    title: "Dunia Kerja, Profesi, dan Bisnis di Bidang Broadcasting & Perfilman",
    hours: 18,
    summary:
      "Pemahaman ekosistem industri, profesi pertelevisian dan film, etika kerja, budaya 5S, K3LH, dan peluang technopreneur digital.",
    color: "from-sky-500 to-blue-600",
    cpText:
      "Pada akhir fase E, murid mampu memahami perkembangan proses produksi industri penyiaran dan perfilman, profesi, job profile, technopreneur, peluang usaha dan pasar kerja, K3LH, dan budaya kerja 5S.",
    deskripsi:
      "Elemen ini membekali peserta didik dengan pemahaman komprehensif mengenai peta industri penyiaran nasional dan global, hierarki jabatan kru, serta standar keselamatan kerja di set produksi.",
    tp: [
      {
        code: "E1.1",
        statement:
          "Murid mampu mengidentifikasi dan memetakan struktur profesi serta alur kerja dalam stasiun televisi dan rumah produksi film.",
        profileDimensions: ["Bernalar Kritis", "Kemandirian"],
        kktp: [
          {
            indicator: "Mengidentifikasi tugas Produser, Sutradara, Kameramen, dan Editor.",
            rubric: {
              perluBimbingan: "Menyebutkan kurang dari 2 peran tanpa deskripsi tugas.",
              cukup: "Menjelaskan 2-3 peran secara umum.",
              baik: "Menjelaskan tugas dan tanggung jawab masing-masing kru secara akurat.",
              sangatBaik: "Mampu memetakan matriks koordinasi antar-kru secara komprehensif.",
            },
          },
        ],
      },
      {
        code: "E1.2",
        statement:
          "Murid mampu menerapkan prosedur K3LH dan budaya kerja 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke) di studio dan lokasi syuting.",
        profileDimensions: ["Gotong Royong", "Kemandirian"],
        kktp: [
          {
            indicator: "Menerapkan penataan kabel (cable management) dan penyimpanan peralatan sesuai 5S.",
            rubric: {
              perluBimbingan: "Belum memahami bahaya kabel melintang di set.",
              cukup: "Merampingkan kabel dengan gaffer tape namun belum rapi.",
              baik: "Memasang gaffer tape dan pembatas keselamatan sesuai SOP studio.",
              sangatBaik: "Menginisiasi safety briefing dan audit kelayakan set produksi secara mandiri.",
            },
          },
        ],
      },
    ],
    atp: [
      {
        sequenceNo: 1,
        tpCode: "E1.1",
        learningActivity: "Eksplorasi virtual studio penyiaran dan wawancara praktisi media.",
        hours: 8,
        prerequisite: "-",
      },
      {
        sequenceNo: 2,
        tpCode: "E1.2",
        learningActivity: "Simulasi penerapan K3LH dan simulasi penataan ruang alat (master gear room).",
        hours: 10,
        prerequisite: "E1.1",
      },
    ],
    materialCards: [
      {
        title: "Peta Ekosistem Industri Penyiaran & Film",
        content:
          "Industri media terbagi menjadi stasiun TV terestrial (FTA), jaringan OTT streaming, Production House (PH), dan agensi konten digital. Setiap lini memerlukan sinergi divisi manajerial, teknis, dan artistik.",
        caseStudy:
          "Dalam liputan siaran langsung bencana, tim newsroom berkejaran dengan waktu sambil mematuhi Pedoman Perilaku Penyiaran (P3SPS).",
        didYouKnow: "Stasiun TV nasional mempekerjakan lebih dari 30 profesi spesifik per shift siaran.",
      },
      {
        title: "Budaya Kerja 5S & K3LH di Set Produksi",
        content:
          "Kabel lighting bervoltase tinggi dan lampu studio panas menuntut kewaspadaan tinggi. Budaya 5S menjamin peralatan kamera dan lensa tersimpan dalam dry box dengan kelembapan 40-50% RH.",
        caseStudy:
          "Kelalaian memasang sandbag pada c-stand lampu dapat menyebabkan lampu roboh dan mencelakai talent.",
      },
    ],
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Tanggung jawab utama seorang Floor Director (FD) saat siaran langsung di studio adalah...",
        options: [
          { key: "A", text: "Mengedit video berita di ruang pascaproduksi" },
          { key: "B", text: "Menjadi perpanjangan tangan sutradara di lantai studio untuk mengarahkan talent dan kru" },
          { key: "C", text: "Mengatur level audio mixer dan pemancar gelombang TV" },
          { key: "D", text: "Menulis naskah dialog presenter program" },
        ],
        correctKey: "B",
        explanation: "Floor Director (FD) bertugas di lantai studio menyampaikan aba-aba sutradara (melalui headset interkom) kepada talent dan kru panggung.",
      },
      {
        id: 2,
        bloom: "C4",
        stem: "Ketika memasang lampu fresnel 2000 Watt di atas stand pada lokasi luar ruangan, langkah keselamatan (K3) paling krusial adalah...",
        options: [
          { key: "A", text: "Menyalakan lampu tanpa sarung tangan khusus" },
          { key: "B", text: "Memasang sandbag pemberat pada kaki stand dan menggunakan sarung tangan heat-resistant" },
          { key: "C", text: "Menghubungkan langsung ke stopkontak rumah tanpa stabilizer" },
          { key: "D", text: "Mengarahkan lampu langsung ke mata kameramen" },
        ],
        correctKey: "B",
        explanation: "Lampu berkekuatan tinggi menghasilkan panas ekstrem dan berisiko jatuh tertiup angin; sandbag dan sarung tangan anti-panas adalah SOP keselamatan mutlak.",
      },
    ],
    gamePairs: [
      { id: 1, left: "Floor Director", right: "Memberi isyarat waktu dan aba-aba kepada presenter di studio" },
      { id: 2, left: "Gaffer", right: "Kepala teknisi tata cahaya yang mengatur instalasi kelistrikan lampu" },
      { id: 3, left: "Dry Box / Cabinet", right: "Tempat penyimpanan lensa dan bodi kamera dengan kontrol kelembapan" },
      { id: 4, left: "Sandbag", right: "Pemberat kaki c-stand lampu agar tidak tumbang" },
    ],
    lkpd: {
      title: "LKPD 1: Audit Keselamatan Kerja & Pemetaan Kru Studio",
      objective: "Siswa mampu mengidentifikasi potensi bahaya kerja di studio dan menyusun jobdesc kru.",
      tools: ["Checklist K3", "Denah Studio", "Kamera Dokumentasi"],
      steps: [
        "Lakukan inspeksi keliling studio TV sekolah.",
        "Catat minimal 3 jalur kabel atau potensi bahaya tersandung.",
        "Buat usulan tata letak penyimpanan alat sesuai prinsip 5S.",
      ],
      outputFormat: "Laporan PDF singkat berisi foto temuan dan usulan solusi K3.",
    },
    video: {
      title: "Mengenal Divisi Kerja Studio Televisi Modern",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Perhatikan bagaimana sutradara di ruang Master Control Room (MCR) berkomunikasi dengan Floor Director.",
    },
    contents: E1_CONTENTS,
  },

  E2: {
    code: "E2",
    fase: "E",
    title: "Perkembangan Media, Teknologi, Industri serta Regulasi",
    hours: 18,
    summary:
      "Evolusi penyiaran analog ke digital DVB-T2, konvergensi OTT, podcast, media baru, etika siber UU ITE, dan peran AI dalam penyiaran.",
    color: "from-cyan-500 to-teal-600",
    cpText:
      "Pada akhir fase E, murid mampu menganalisis sejarah perkembangan teknologi penyiaran analog ke digital, konvergensi media FTA ke OTT/VOD, etika siber, UU ITE, dan peran AI.",
    deskripsi:
      "Elemen ini mengkaji transformasi ekosistem penyiaran Indonesia dari analog switch off (ASO) menuju era multi-platform streaming dan kecerdasan buatan.",
    tp: [
      {
        code: "E2.1",
        statement: "Murid mampu membandingkan karakteristik siaran Free-to-Air (FTA) digital dengan platform Over-the-Top (OTT).",
        profileDimensions: ["Bernalar Kritis"],
        kktp: [
          {
            indicator: "Menjelaskan perbedaan transmisi RF terestrial dengan transmisi packet IP berbasis internet.",
            rubric: {
              perluBimbingan: "Belum memahami arti istilah FTA dan OTT.",
              cukup: "Menyebutkan contoh aplikasi OTT tanpa paham teknologinya.",
              baik: "Membandingkan bandwidth, jangkauan, dan model monetisasi secara tepat.",
              sangatBaik: "Menganalisis tren pergeseran konsumsi audiens generasi Z secara mendalam.",
            },
          },
        ],
      },
    ],
    atp: [
      {
        sequenceNo: 1,
        tpCode: "E2.1",
        learningActivity: "Studi komparasi siaran TV Digital DVB-T2 vs Live Streaming YouTube/TikTok.",
        hours: 18,
        prerequisite: "E1.1",
      },
    ],
    materialCards: [
      {
        title: "Analog Switch Off (ASO) & Standar DVB-T2",
        content:
          "Siaran digital memberikan kualitas gambar High Definition (HD) tanpa bayangan atau bintik semut (noise), serta efisiensi frekuensi yang menghasilkan digital dividend.",
      },
    ],
    sampleQuestions: [
      {
        id: 1,
        bloom: "C3",
        stem: "Keuntungan utama pemancar digital DVB-T2 dibandingkan siaran analog konvensional adalah...",
        options: [
          { key: "A", text: "Membutuhkan antena khusus yang sangat mahal" },
          { key: "B", text: "Kualitas gambar bebas bintik noise dan efisiensi kanal spektrum frekuensi" },
          { key: "C", text: "Hanya bisa ditonton menggunakan koneksi internet berbayar" },
          { key: "D", text: "Tidak dapat menyiarkan suara stereo" },
        ],
        correctKey: "B",
        explanation: "DVB-T2 menyajikan gambar jernih tanpa 'bintik/semut' dan 1 kanal frekuensi analog kini bisa memuat hingga 8-12 channel siaran digital.",
      },
    ],
    gamePairs: [
      { id: 1, left: "DVB-T2", right: "Standar terestrial TV digital nasional Indonesia" },
      { id: 2, left: "OTT (Over-The-Top)", right: "Layanan streaming langsung lewat jaringan internet (Vidio, Netflix)" },
      { id: 3, left: "P3SPS", right: "Pedoman Perilaku Penyiaran dan Standar Program Siaran dari KPI" },
    ],
    lkpd: {
      title: "LKPD 2: Analisis Etika Konten dan Regulasi Siaran",
      objective: "Menganalisis kesesuaian tayangan program dengan pedoman KPI dan UU ITE.",
      tools: ["Teks P3SPS KPI", "Cuplikan Tayangan Media"],
      steps: ["Amati 1 segmen acara televisi.", "Identifikasi indikasi pelanggaran sensor/etika.", "Tuliskan hasil telaah."],
      outputFormat: "Dokumen telaah kritis 1 halaman.",
    },
    video: {
      title: "Bagaimana Siaran TV Digital Bekerja",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Simak perbedaan mendasar sinyal kontinu gelombang analog dengan bit data digital.",
    },
    contents: E2_CONTENTS,
  },

  E3: {
    code: "E3",
    fase: "E",
    title: "Teknik Dasar Pengoperasian Peralatan Audio Visual",
    hours: 24,
    summary:
      "Dasar fotografi & videografi, exposure triangle, pengoperasian kamera studio, 3-point lighting, mikrofon boom & clip-on, serta support rig.",
    color: "from-blue-600 to-indigo-600",
    cpText:
      "Pada akhir fase E, murid mampu mengoperasikan kamera, tata cahaya dasar (3-point lighting), tata suara mikrofon boom & clip-on, serta perakitan kabel dan support equipment.",
    deskripsi:
      "Elemen kunci praktik kejuruan yang melatih penguasaan fisik alat perekam visual dan audio standar broadcasting.",
    tp: [
      {
        code: "E3.1",
        statement: "Murid mampu mengoperasikan kamera video profesional dengan pengaturan exposure dan white balance yang akurat.",
        profileDimensions: ["Penalaran Kritis", "Kreativitas"],
        kktp: [
          {
            indicator: "Menyetel Shutter Speed 1/50 pada frame rate 25fps dan mengatur aperture f/4 untuk kedalaman ruang.",
            rubric: {
              perluBimbingan: "Belum mampu menyetel menu exposure kamera.",
              cukup: "Mengatur eksposur namun terjadi flicker atau overexposed.",
              baik: "Eksposur seimbang dan white balance dikalibrasi kartu abu-abu (grey card).",
              sangatBaik: "Mengoptimalkan profil warna (log profile) dan zebra pattern secara presisi.",
            },
          },
        ],
      },
    ],
    atp: [
      {
        sequenceNo: 1,
        tpCode: "E3.1",
        learningActivity: "Praktikum dasar kamera dan segitiga eksposur di studio.",
        hours: 12,
        prerequisite: "E1.2",
      },
      {
        sequenceNo: 2,
        tpCode: "E3.2",
        learningActivity: "Praktik setup 3-Point Lighting dan rekaman audio shotgun mic.",
        hours: 12,
        prerequisite: "E3.1",
      },
    ],
    materialCards: [
      {
        title: "Segitiga Eksposur (Exposure Triangle)",
        content:
          "Keseimbangan antara Aperture (diafragma lensa), Shutter Speed (kecepatan rana), dan ISO/Gain. Pada video standar 25fps, aturan 180-degree shutter rule menetapkan shutter di 1/50 detik.",
        caseStudy: "Menggunakan shutter terlalu cepat saat merekam lampu LED studio akan menghasilkan garis flicker hitam berjalan.",
      },
      {
        title: "Konsep Dasar 3-Point Lighting",
        content:
          "Key Light (cahaya utama 45 derajat), Fill Light (pengisi bayangan rasio 2:1 atau 3:1), dan Back Light / Hair Light (pemisah subjek dari latar belakang).",
      },
    ],
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Dalam penataan cahaya 3-Point Lighting, peran utama Back Light (Hair Light) adalah...",
        options: [
          { key: "A", text: "Menerangi seluruh set latar belakang studio" },
          { key: "B", text: "Memisahkan subjek dari latar belakang dengan menciptakan garis tepian cahaya (rim light)" },
          { key: "C", text: "Menghapus bayangan di bawah mata talent" },
          { key: "D", text: "Menentukan warna kulit presenter" },
        ],
        correctKey: "B",
        explanation: "Back Light diletakkan di belakang subjek mengarah ke rambut/bahu untuk menciptakan dimensi kedalaman (rim light) agar tidak menyatu dengan background.",
      },
      {
        id: 2,
        bloom: "C4",
        stem: "Jika merekam video di dalam ruangan berlampu pijar tungsten (3200K) namun pengaturan White Balance diatur ke Daylight (5600K), hasil warna video akan tampak...",
        options: [
          { key: "A", text: "Sangat kebiruan (cool tint)" },
          { key: "B", text: "Sangat oranye/kekuningan (warm tint)" },
          { key: "C", text: "Hitam putih total" },
          { key: "D", text: "Hijau pekat" },
        ],
        correctKey: "B",
        explanation: "Kamera mengasumsikan cahaya lingkungan adalah daylight yang dingin (5600K) sehingga tidak mengoreksi cahaya tungsten (3200K) yang hangat, menyebabkan video menjadi terlalu oranye.",
      },
    ],
    gamePairs: [
      { id: 1, left: "Key Light", right: "Cahaya utama pembentuk karakter dan eksposur wajah" },
      { id: 2, left: "Fill Light", right: "Cahaya pelembut bayangan kontras dari Key Light" },
      { id: 3, left: "Mic Shotgun", right: "Mikrofon directional super-cardioid untuk jangkauan fokus" },
      { id: 4, left: "Lavalier Clip-On", right: "Mikrofon mungil yang dijepit di kerah baju talent" },
    ],
    lkpd: {
      title: "LKPD 3: Setup 3-Point Lighting & Pengambilan Gambar Wawancara",
      objective: "Mengatur pencahayaan 3 titik dan framing Medium Close-Up (MCU) pada wawancara studio.",
      tools: ["Kamera Camcorder/Mirrorless", "Tripod", "3 Unit Lampu LED/Fresnel", "C-Stand", "Mic Boom"],
      steps: [
        "Tempatkan talent duduk di kursi wawancara.",
        "Pasang Key Light pada sudut 45 derajat dari sumbu kamera.",
        "Tambahkan Fill Light di sisi berlawanan dengan intensitas 50%.",
        "Pasang Back Light dari belakang atas talent.",
        "Ambil rekaman video 30 detik dan periksa histogram eksposur.",
      ],
      outputFormat: "File video MP4 (1080p) dan foto dokumentasi penataan lampu.",
    },
    video: {
      title: "Mastering 3-Point Lighting for Television",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Perhatikan rasio pencahayaan antara Key Light dan Fill Light saat subjek bergerak.",
    },
    contents: E3_CONTENTS,
  },

  E4: {
    code: "E4",
    fase: "E",
    title: "Teknik Dasar Proses Produksi dan Media Baru",
    hours: 24,
    summary:
      "Alur POS pra-produksi (naskah & storyboard), produksi (shooting call sheet), dan pascaproduksi (editing & publikasi media baru).",
    color: "from-indigo-600 to-purple-600",
    cpText:
      "Pada akhir fase E, murid mampu menyimulasikan tahapan pra-produksi, produksi, dan pascaproduksi program video pendek sesuai POS kerja.",
    deskripsi:
      "Puncak fase dasar di mana peserta didik menyatukan kompetensi naskah, kamera, tata cahaya, dan suara dalam sebuah karya video pendek kelompok.",
    tp: [
      {
        code: "E4.1",
        statement: "Murid mampu menyusun dokumen pra-produksi (storyboard, floor plan, dan call sheet) untuk video edukasi 2 menit.",
        profileDimensions: ["Kreativitas", "Kolaborasi"],
        kktp: [
          {
            indicator: "Membuat storyboard 8 frame dengan deskripsi shot type, camera angle, dan audio cue.",
            rubric: {
              perluBimbingan: "Storyboard belum memuat petunjuk teknis kamera.",
              cukup: "Storyboard memuat sketsa dan tipe shot dasar.",
              baik: "Storyboard lengkap dengan rincian durasi dan dialog.",
              sangatBaik: "Storyboard profesional dilengkapi floorplan penempatan kru dan talent.",
            },
          },
        ],
      },
    ],
    atp: [
      {
        sequenceNo: 1,
        tpCode: "E4.1",
        learningActivity: "Penyusunan paket berkas pra-produksi video pendek.",
        hours: 10,
        prerequisite: "E3.2",
      },
      {
        sequenceNo: 2,
        tpCode: "E4.2",
        learningActivity: "Produksi dan pascaproduksi hingga ekspor video master.",
        hours: 14,
        prerequisite: "E4.1",
      },
    ],
    materialCards: [
      {
        title: "Tiga Pilar Alur Produksi Audio Visual",
        content:
          "1. Pra-Produksi: Riset, naskah, budgeting, casting, storyboard, izin lokasi.\n2. Produksi: Eksekusi syuting sesuai call sheet.\n3. Pascaproduksi: Offline edit, online edit, sound mixing, color grading, mastering.",
      },
    ],
    sampleQuestions: [
      {
        id: 1,
        bloom: "C3",
        stem: "Dokumen yang memuat daftar jadwal kedatangan kru, talent, waktu syuting adegan per adegan, dan lokasi disebut...",
        options: [
          { key: "A", text: "Invoice pembayaran" },
          { key: "B", text: "Call Sheet" },
          { key: "C", text: "Curriculum Vitae" },
          { key: "D", text: "Kartu Garansi Kamera" },
        ],
        correctKey: "B",
        explanation: "Call Sheet adalah lembar kerja harian produksi yang menjadi rujukan seluruh kru mengenai jadwal, lokasi, kontak, dan target adegan yang diambil.",
      },
    ],
    gamePairs: [
      { id: 1, left: "Call Sheet", right: "Jadwal harian waktu syuting dan panggilan kru" },
      { id: 2, left: "Clapperboard", right: "Papan penanda adegan dan sinkronisasi audio visual" },
      { id: 3, left: "Rough Cut", right: "Susunan awal potongan video sebelum editing halus" },
    ],
    lkpd: {
      title: "LKPD 4: Pembuatan Proyek Video Pendek Profil Sekolah",
      objective: "Menyelesaikan proyek video pendek 90 detik dari pra hingga pascaproduksi.",
      tools: ["Kamera", "Tripod", "Komputer Editing NLE", "Naskah Cerita"],
      steps: ["Finalisasi naskah.", "Syuting 4 jam.", "Editing dan grading 3 jam.", "Presentasi kelas."],
      outputFormat: "Video MP4 Full HD 1080p siap siar.",
    },
    video: {
      title: "Standard Operating Procedure Alur Syuting TV",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Perhatikan fungsi clapper board saat sutradara menyerukan 'Action!'.",
    },
    contents: E4_CONTENTS,
  },

  // F1 - F8 (Fase F)
  F1: {
    code: "F1",
    fase: "F",
    title: "Manajemen Produksi dan Siaran Program Televisi",
    hours: 36,
    summary:
      "Perencanaan program acara TV, Master Control Room (MCR), rundown, budget breakdown, pola penyiaran, dan SOP regulasi penyiaran.",
    color: "from-purple-600 to-pink-600",
    cpText: "Pada akhir fase F, murid mampu merencanakan program acara TV (news/non-news), menyusun master schedule, budget rundown, SOP studio, dan pola siaran.",
    deskripsi: "Kompetensi manajerial produser televisi dalam menyusun proposal program dan mengawasi jalannya produksi berstandar siaran komersial.",
    tp: [
      {
        code: "F1.1",
        statement: "Murid mampu menyusun Rundown Program Televisi berdurasi 30 menit dengan alokasi commercial break yang tepat.",
        profileDimensions: ["Bernalar Kritis", "Kemandirian"],
        kktp: [
          {
            indicator: "Menyusun segmen 1 s/d 4 dengan durasi per detik (timecode) yang presisi.",
            rubric: {
              perluBimbingan: "Belum memahami penghitungan timecode.",
              cukup: "Rundown selesai namun total durasi lebih/kurang dari 30 menit.",
              baik: "Rundown presisi 30:00 dengan slot commercial break teratur.",
              sangatBaik: "Rundown dilengkapi cue musik, grafik CG, dan penanda teknis MCR.",
            },
          },
        ],
      },
    ],
    atp: [
      { sequenceNo: 1, tpCode: "F1.1", learningActivity: "Simulasi bedah pola siaran TV komersial.", hours: 36, prerequisite: "E4.2" },
    ],
    materialCards: [
      {
        title: "Struktur Rundown Program Televisi",
        content: "Program 30 menit televisi aktualnya berdurasi 22-24 menit (net air time), sedangkan 6-8 menit sisanya dialokasikan untuk iklan komersial (commercial break).",
      },
    ],
    sampleQuestions: [
      {
        id: 1,
        bloom: "C4",
        stem: "Jika sebuah program talkshow 30 menit memiliki 4 segmen dan 3 jeda iklan masing-masing 2 menit, maka total durasi tayangan murni materi talkshow adalah...",
        options: [
          { key: "A", text: "30 menit" },
          { key: "B", text: "24 menit" },
          { key: "C", text: "20 menit" },
          { key: "D", text: "26 menit" },
        ],
        correctKey: "B",
        explanation: "Total waktu iklan = 3 x 2 menit = 6 menit. Waktu siaran murni = 30 menit - 6 menit = 24 menit.",
      },
    ],
    gamePairs: [
      { id: 1, left: "Rundown", right: "Tabel susunan urutan materi dan waktu penayangan acara TV" },
      { id: 2, left: "Commercial Break", right: "Jeda slot penayangan iklan komersial stasiun TV" },
      { id: 3, left: "Executive Producer", right: "Penanggung jawab tertinggi anggaran dan konsep keseluruhan program" },
    ],
    lkpd: {
      title: "LKPD F1: Penyusunan Rundown Siaran Talkshow Remaja",
      objective: "Merancang rundown 4 segmen dengan pembagian timecode detik akurat.",
      tools: ["Template Rundown Excel", "Kalkulator Timecode"],
      steps: ["Tentukan tema talkshow.", "Bagi materi ke 4 segmen.", "Hitung akumulasi durasi."],
      outputFormat: "File PDF Rundown Acara Siap MCR.",
    },
    video: {
      title: "Di Balik Ruang Master Control Room TV",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Perhatikan layar timecode master dan aba-aba Produser.",
    },
    contents: F1_CONTENTS,
  },

  F2: {
    code: "F2",
    fase: "F",
    title: "Penulisan Naskah Televisi",
    hours: 36,
    summary:
      "Penulisan naskah berita dua kolom (Audio/Video), VO/SOT/PKG, feature dokumenter, talkshow, dan sitkom televisi.",
    color: "from-rose-500 to-red-600",
    cpText: "Pada akhir fase F, murid mampu menulis naskah drama, naskah berita (rundown/VO/SOT/PKG), talkshow, variety show dengan format dua kolom/standar industri.",
    deskripsi: "Penguasaan kaidah penulisan bahasa tutur televisi: 'Writing for the Ear and the Eye' (ELF - Easy, Logical, Fluid).",
    tp: [
      {
        code: "F2.1",
        statement: "Murid mampu menulis naskah berita TV format VO-SOT (Voice Over - Sound on Tape) dengan kaidah bahasa tutur.",
        profileDimensions: ["Komunikasi", "Penalaran Kritis"],
        kktp: [
          {
            indicator: "Menyusun kolom Video (visual cue) dan kolom Audio (lead in dan naskah VO).",
            rubric: {
              perluBimbingan: "Format naskah masih berbentuk karangan paragraf biasa.",
              cukup: "Format dua kolom namun bahasa kaku seperti artikel koran.",
              baik: "Format dua kolom baku dengan bahasa tutur lugas dan padat.",
              sangatBaik: "Naskah dilengkapi penanda pelafalan (pronunciation cue) dan timecode sinkron.",
            },
          },
        ],
      },
    ],
    atp: [{ sequenceNo: 1, tpCode: "F2.1", learningActivity: "Workshop naskah berita TV dan naskah drama dua kolom.", hours: 36, prerequisite: "E4.1" }],
    materialCards: [
      {
        title: "Kaidah Naskah Berita: VO, SOT, dan PKG",
        content: "VO (Voice Over): presenter membaca narasi di atas video berita.\nSOT (Sound on Tape): pernyataan narasumber wawancara.\nPKG (Package): paket berita lengkap karya reporter lapangan.",
      },
    ],
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Istilah dalam penulisan naskah TV untuk suara pernyataan langsung narasumber yang dikutip dalam berita disebut...",
        options: [
          { key: "A", text: "VO (Voice Over)" },
          { key: "B", text: "SOT (Sound on Tape)" },
          { key: "C", text: "Bumper Out" },
          { key: "D", text: "Super / Lower Third" },
        ],
        correctKey: "B",
        explanation: "SOT (Sound on Tape) adalah rekaman klip ucapan narasumber yang dimasukkan ke dalam paket berita.",
      },
    ],
    gamePairs: [
      { id: 1, left: "VO (Voice Over)", right: "Narasi dibacakan oleh pembaca berita di atas gambar video" },
      { id: 2, left: "SOT (Sound on Tape)", right: "Klip rekaman wawancara pernyataan narasumber" },
      { id: 3, left: "Package (PKG)", right: "Paket berita komprehensif karya reporter di lapangan" },
    ],
    lkpd: {
      title: "LKPD F2: Menulis Naskah Berita Dua Kolom VO-SOT",
      objective: "Menulis naskah berita 60 detik dari fakta press release.",
      tools: ["Software Pengolah Kata", "Format Naskah 2 Kolom"],
      steps: ["Baca fakta berita.", "Tentukan angel berita.", "Tulis naskah kolom Audio dan Video."],
      outputFormat: "Dokumen naskah 2 kolom.",
    },
    video: {
      title: "Bedah Naskah Berita Televisi Standar Nasional",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Perhatikan bagaimana reporter mencocokkan kata dengan pergerakan gambar visual.",
    },
    contents: F2_CONTENTS,
  },

  F3: {
    code: "F3",
    fase: "F",
    title: "Penyutradaraan Televisi",
    hours: 40,
    summary:
      "Directing program studio multicamera & drama single camera, shot breakdown, aba-aba sutradara di control room, dan pemanduan presenter.",
    color: "from-amber-500 to-orange-600",
    cpText: "Pada akhir fase F, murid mampu mengarahkan produksi single camera dan multi-camera, membuat storyboard & floor plan, memandu presenter dan kru dengan instruksi standar.",
    deskripsi: "Peran pemimpin kreatif dan operasional di ruang switchboard pengendali produksi penyiaran.",
    tp: [
      {
        code: "F3.1",
        statement: "Murid mampu memberikan aba-aba sutradara (director cues) standar broadcast di ruang kontrol multicamera.",
        profileDimensions: ["Komunikasi", "Kepemimpinan"],
        kktp: [
          {
            indicator: "Menyerukan instruksi 'Standby Cam 1', 'Cue Presenter', 'Take Cam 1' secara runtut dan tenang.",
            rubric: {
              perluBimbingan: "Instruksi terlambat atau membuat kru bingung.",
              cukup: "Memberi instruksi dasar namun intonasi ragu-ragu.",
              baik: "Aba-aba presisi, jelas, dan sinkron dengan pergerakan switcher.",
              sangatBaik: "Mengendalikan situasi darurat (live error) dengan tenang dan adaptif.",
            },
          },
        ],
      },
    ],
    atp: [{ sequenceNo: 1, tpCode: "F3.1", learningActivity: "Simulasi live directing di studio mini TV.", hours: 40, prerequisite: "F1.1" }],
    materialCards: [
      {
        title: "Aba-aba Sutradara Televisi (Director Cues)",
        content: "Sutradara selalu memberi peringatan ('Standby Cam 2') sebelum eksekusi pemindahan gambar ('Take Cam 2'). Ini memberi waktu operator kamera mengunci framing.",
      },
    ],
    sampleQuestions: [
      {
        id: 1,
        bloom: "C3",
        stem: "Urutan aba-aba sutradara yang benar kepada switcher dan kameramen sebelum memindahkan gambar ke Kamera 2 adalah...",
        options: [
          { key: "A", text: "'Take Cam 2', lalu 'Standby Cam 2'" },
          { key: "B", text: "'Standby Cam 2', lalu 'Take Cam 2'" },
          { key: "C", text: "'Matikan Kamera 1', lalu 'Nyalakan Kamera 2'" },
          { key: "D", text: "'Putar musik', lalu 'Close Kamera 2'" },
        ],
        correctKey: "B",
        explanation: "SOP penyiaran selalu mendahulukan 'Ready/Standby Cam X' agar kameramen mengunci framing, kemudian disusul 'Take Cam X' untuk memindahkan gambar ke siaran (program on air).",
      },
    ],
    gamePairs: [
      { id: 1, left: "Ready / Standby Cam", right: "Peringatan kepada kru agar bersiap mengambil gambar" },
      { id: 2, left: "Take / Cut", right: "Perintah langsung mengeksekusi perpindahan visual on air" },
      { id: 3, left: "Dissolve", right: "Perpindahan visual secara transisi lebur halus" },
    ],
    lkpd: {
      title: "LKPD F3: Praktik Simulasi Directing Multicamera",
      objective: "Mengarahkan 3 kamera studio dalam simulasi siaran berita langsung 5 menit.",
      tools: ["Video Switcher", "3 Kamera Studio", "Intercom Headset"],
      steps: ["Bagi tugas kru.", "Latihan rehearsal.", "Eksekusi siaran 5 menit."],
      outputFormat: "Rekaman master siaran langsung tanpa jeda (live cut).",
    },
    video: {
      title: "Komunikasi Sutradara di Ruang Control Room Live TV",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Dengarkan tempo bicara sutradara menjelang perpindahan segmen.",
    },
    contents: F3_CONTENTS,
  },

  F4: {
    code: "F4",
    fase: "F",
    title: "Tata Kamera dan Tata Cahaya Televisi",
    hours: 40,
    summary:
      "Pengoperasian kamera televisi, prosedur tahapan produksi departemen kamera dan tata cahaya, peralatan tata cahaya dan teknik pencahayaan, serta pengoperasian peralatan pendukung kamera (camera support).",
    color: "from-emerald-500 to-green-600",
    cpText: "Menerapkan prosedur tahapan produksi dalam departemen kamera dan tata cahaya, pengoperasian peralatan tata cahaya dan teknik pencahayaan, dan pengoperasian kamera serta peralatan pendukung kamera (camera support).",
    deskripsi: "Penguasaan komprehensif 4 pilar utama: Prosedur Tahapan Produksi, Peralatan & Teknik Tata Cahaya, Pengoperasian Kamera Broadcast, dan Pengoperasian Camera Support.",
    tp: [
      {
        code: "F4.1",
        statement: "Peserta didik mampu memahami prosedur tahapan produksi departemen kamera dan tata cahaya serta menjelaskan tugas dan tanggung jawab kru.",
        profileDimensions: ["Penalaran Kritis", "Gotong Royong"],
        kktp: [
          {
            indicator: "Menjelaskan alur kerja pra-produksi, produksi siaran langsung, dan pasca-produksi kru kamera & tata cahaya.",
            rubric: {
              perluBimbingan: "Belum memahami perbedaan alur kerja antar tahapan produksi.",
              cukup: "Mampu menyebutkan tahapan namun belum rinci dalam pembagian tugas.",
              baik: "Mampu menjelaskan alur kerja dan pembagian tanggung jawab setiap kru.",
              sangatBaik: "Mampu memimpin koordinasi floor plan dan mitigasi kendala teknis produksi siaran.",
            },
          },
        ],
      },
      {
        code: "F4.2",
        statement: "Peserta didik mampu mengidentifikasi jenis dan fungsi peralatan tata cahaya serta menerapkan teknik pencahayaan sesuai kebutuhan adegan.",
        profileDimensions: ["Kreativitas", "Penalaran Kritis"],
        kktp: [
          {
            indicator: "Menerapkan teknik Three-Point Lighting (Key, Fill, Back) dengan rasio kontras dan suhu warna tepat.",
            rubric: {
              perluBimbingan: "Penataan lampu menghasilkan bayangan kasar dan overexposure.",
              cukup: "Three-point lighting terpasang namun rasio kontras belum seimbang.",
              baik: "Rasio pencahayaan dan pemisahan subjek dari latar belakang tepat dan proporsional.",
              sangatBaik: "Mampu merancang mood visual artistik dan mengoperasikan dimmer pack DMX profesional.",
            },
          },
        ],
      },
      {
        code: "F4.3",
        statement: "Peserta didik mampu mengoperasikan kamera televisi sesuai prosedur serta menerapkan komposisi, ukuran shot, dan gerakan kamera sesuai naskah.",
        profileDimensions: ["Kreativitas", "Kemandirian"],
        kktp: [
          {
            indicator: "Melakukan kalibrasi kamera (White Balance, Iris, Focus) dan eksekusi framing gambar dinamis.",
            rubric: {
              perluBimbingan: "Warna tidak seimbang (color cast) dan komposisi headroom terpotong.",
              cukup: "White balance tepat, namun gerakan pan/tilt masih tersendat.",
              baik: "Framing shot presisi sesuai kaidah Rule of Thirds dan pergerakan kamera halus.",
              sangatBaik: "Mampu mengoperasikan kamera siaran live multicamera dengan respon instruksi sutradara seketika.",
            },
          },
        ],
      },
      {
        code: "F4.4",
        statement: "Peserta didik mampu mengidentifikasi jenis camera support dan mengoperasikannya secara aman dan tepat.",
        profileDimensions: ["Kemandirian", "Penalaran Kritis"],
        kktp: [
          {
            indicator: "Melakukan leveling bubble, balancing counterbalance fluid head, dan pengoperasian pedestal/jib arm aman (K3LH).",
            rubric: {
              perluBimbingan: "Kamera miring dan tidak mengunci safety lock quick release.",
              cukup: "Leveling tercapai namun belum mampu menyetel counterbalance beban kamera.",
              baik: "Pengoperasian camera support seimbang sempurna dan mematuhi SOP K3LH.",
              sangatBaik: "Mampu mengoperasikan pedestal dan crane secara presisi untuk pergerakan kamera kompleks.",
            },
          },
        ],
      },
    ],
    atp: [
      { sequenceNo: 1, tpCode: "F4.1", learningActivity: "Simulasi alur koordinasi produksi, bedah floor plan studio, dan SOP K3LH.", hours: 10, prerequisite: "E3.1" },
      { sequenceNo: 2, tpCode: "F4.2", learningActivity: "Eksplorasi lampu studio, dimmer DMX, dan praktik Three-Point Lighting.", hours: 10, prerequisite: "F4.1" },
      { sequenceNo: 3, tpCode: "F4.3", learningActivity: "Kalibrasi sensor kamera broadcast, komposisi shot, dan pergerakan kamera naskah.", hours: 10, prerequisite: "F4.2" },
      { sequenceNo: 4, tpCode: "F4.4", learningActivity: "Pengoperasian tripod fluid head, studio pedestal pneumatik, dan jib arm.", hours: 10, prerequisite: "F4.3" },
    ],
    materialCards: [
      {
        title: "Peta Pembelajaran 4 Konten Utama Tata Kamera & Cahaya",
        content: "Elemen ini mencakup 4 pilar kompetensi: Prosedur Tahapan Produksi Departemen Kamera & Tata Cahaya, Peralatan & Teknik Tata Cahaya, Pengoperasian Kamera Televisi, serta Peralatan Pendukung Kamera (Camera Support).",
        didYouKnow: "Di studio broadcast profesional, seluruh 4 pilar ini diintegrasikan secara realtime saat siaran langsung multi-kamera.",
      },
    ],
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Lampu indikator berwarna merah di atas kamera studio yang menyala saat gambar kamera tersebut sedang tayang disebut...",
        options: [
          { key: "A", text: "Flash Light" },
          { key: "B", text: "Tally Light" },
          { key: "C", text: "Strobe Light" },
          { key: "D", text: "Night Light" },
        ],
        correctKey: "B",
        explanation: "Tally Light merah memberitahu presenter dan juru kamera bahwa feed kamera tersebut sedang disiarkan langsung on-air.",
      },
    ],
    gamePairs: [
      { id: 1, left: "Tally Light", right: "Lampu indikator on-air merah di depan kamera studio" },
      { id: 2, left: "CCU (Camera Control Unit)", right: "Perangkat kontrol eksposur dan warna jarak jauh" },
      { id: 3, left: "Pedestal", right: "Penyangga kamera studio hidrolik beroda dengan pergerakan halus" },
    ],
    lkpd: {
      title: "LKPD F4: Produksi Siaran Multi-Kamera Studio Televisi",
      objective: "Menerapkan integrasi kamera, tata cahaya, dan camera support dalam simulasi siaran langsung.",
      tools: ["Kamera Studio & CCU", "Lighting Rig Studio", "Pedestal & Tripod", "Floor Plan"],
      steps: ["Penyusunan lighting plot & floor plan", "Penyetelan Three-Point Lighting", "Kalibrasi kamera & camera support", "Eksekusi siaran langsung sesuai rundown"],
      outputFormat: "Video rekaman master siaran dan laporan portofolio produksi.",
    },
    video: {
      title: "Pengoperasian Studio Televisi Multi-Kamera Terpadu",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari sinergi antara kru kamera, lighting, dan pengarah siaran.",
    },
    contents: F4_CONTENTS,
  },

  F5: {
    code: "F5",
    fase: "F",
    title: "Tata Suara Televisi",
    hours: 32,
    summary:
      "Audio mixer console digital, mikrofon wireless diversity, manajemen frekuensi RF, balancing audio siaran, dan mastering loudness LUFS.",
    color: "from-blue-500 to-indigo-700",
    cpText: "Pada akhir fase F, murid mampu mengoperasikan audio mixer console, multitrack recording, microphone placement, balancing level broadcast, dan direct line feed.",
    deskripsi: "Pondasi audio broadcast agar suara presenter jernih, musik latar tidak menutupi vokal, dan bebas distorsi clipping.",
    tp: [
      {
        code: "F5.1",
        statement: "Murid mampu menata level suara siaran TV sesuai standar loudness EBU R128 (-23 LUFS / -14 LUFS online).",
        profileDimensions: ["Penalaran Kritis"],
        kktp: [
          {
            indicator: "Mengatur gain staging, kompresor, dan audio limiter.",
            rubric: {
              perluBimbingan: "Audio sering pecah (clipping 0 dBFS).",
              cukup: "Audio tidak pecah namun level terlalu kecil.",
              baik: "Level seimbang antara vokal presenter dan musik latar.",
              sangatBaik: "Mematuhi standar loudness LUFS secara presisi dengan dynamic range terjaga.",
            },
          },
        ],
      },
    ],
    atp: [{ sequenceNo: 1, tpCode: "F5.1", learningActivity: "Operasional audio mixing console dan mikrofon nirkabel.", hours: 32, prerequisite: "E3.3" }],
    materialCards: [
      {
        title: "Standar Loudness Broadcast & Proteksi Clipping",
        content: "Di dunia digital, level audio tidak boleh melebihi 0 dBFS untuk mencegah distorsi kasar. Penggunaan audio compressor dan limiter wajib diterapkan pada master out.",
      },
    ],
    sampleQuestions: [
      {
        id: 1,
        bloom: "C3",
        stem: "Jika level vokal presenter melonjak melewati 0 dBFS pada meteran digital, gangguan audio yang terjadi adalah...",
        options: [
          { key: "A", text: "Suara menjadi gema halus" },
          { key: "B", text: "Clipping dan distorsi digital kasar yang merusak pendengaran" },
          { key: "C", text: "Frekuensi suara otomatis menjadi stereo" },
          { key: "D", text: "Volume suara tiba-tiba hening" },
        ],
        correctKey: "B",
        explanation: "Digital clipping terjadi saat sinyal audio melebihi batas 0 dBFS, memotong puncak gelombang dan menimbulkan suara 'krek/pecah' yang sangat mengganggu.",
      },
    ],
    gamePairs: [
      { id: 1, left: "Gain Staging", right: "Pengaturan level penguatan awal sinyal mic sebelum fader" },
      { id: 2, left: "Audio Limiter", right: "Pencegah lonjakan sinyal melewati batas aman 0 dBFS" },
      { id: 3, left: "Equalizer (EQ)", right: "Penyetel frekuensi bass, midrange, dan treble suara" },
    ],
    lkpd: {
      title: "LKPD F5: Mixing Audio Multitrack Talkshow",
      objective: "Mengatur keseimbangan 2 mic presenter dan 1 audio playback bumper.",
      tools: ["Audio Mixer Console", "Headphone Monitor", "2 Mic Wireless"],
      steps: ["Atur gain mic.", "Terapkan low cut filter pada vokal.", "Lakukan balancing suara."],
      outputFormat: "Rekaman audio master wav 24-bit 48kHz.",
    },
    video: {
      title: "Teknik Sound Mixing Studio TV",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Amati bagaimana sound engineer menjaga jarum VU meter di rentang ideal.",
    },
    contents: F5_CONTENTS,
  },

  F6: {
    code: "F6",
    fase: "F",
    title: "Tata Artistik Televisi",
    hours: 32,
    summary:
      "Perancangan set design studio, pemilihan properti, wardrobe, tata rias kamera (makeup broadcast), dan grafis on-screen (lower third/bumper).",
    color: "from-amber-600 to-yellow-600",
    cpText: "Pada akhir fase F, murid mampu merancang set design, backdrop, properti, wardrobe, tata rias karakter, dan penataan grafis on-screen (lower third/bumper).",
    deskripsi: "Penyusunan visual estetik studio televisi yang mendukung citra program dan kenyamanan audiens.",
    tp: [
      {
        code: "F6.1",
        statement: "Murid mampu membuat floor plan tata artistik studio berita lengkap dengan zona presenter, meja jangkar, dan backdrop.",
        profileDimensions: ["Kreativitas"],
        kktp: [
          {
            indicator: "Menyusun sketsa skala ruang 2D dan penempatan properti.",
            rubric: {
              perluBimbingan: "Sketsa tanpa skala ukuran dan menghalangi kamera.",
              cukup: "Sketsa memuat properti namun warna bertabrakan dengan kamera.",
              baik: "Floor plan proporsional dan selaras dengan pola pencahayaan studio.",
              sangatBaik: "Rancangan profesional memadukan physical set dengan elemen augmented reality / green screen.",
            },
          },
        ],
      },
    ],
    atp: [{ sequenceNo: 1, tpCode: "F6.1", learningActivity: "Perancangan set studio dan pemilihan wardrobe berita.", hours: 32, prerequisite: "E1.1" }],
    materialCards: [
      {
        title: "Aturan Wardrobe di Depan Kamera (Anti-Moiré)",
        content: "Presenter dilarang mengenakan pakaian bermotif garis rapat kecil-kecil karena akan memicu distorsi visual bergelombang yang disebut efek Moiré pada sensor kamera.",
      },
    ],
    sampleQuestions: [
      {
        id: 1,
        bloom: "C4",
        stem: "Mengapa presenter berita dilarang mengenakan kemeja bermotif garis-garis tipis berjarak sangat rapat?",
        options: [
          { key: "A", text: "Menyebabkan mic clip-on tidak bisa dijepit" },
          { key: "B", text: "Memicu ilusi optik Moiré pattern yang tampak bergetar dan mengganggu pandangan mata" },
          { key: "C", text: "Membuat lampu studio menjadi terlalu panas" },
          { key: "D", text: "Melanggar kode etik jurnalistik" },
        ],
        correctKey: "B",
        explanation: "Pola garis rapat bertabrakan dengan grid susunan piksel sensor kamera digital sehingga menciptakan pola Moiré aneh yang bergetar di layar TV.",
      },
    ],
    gamePairs: [
      { id: 1, left: "Moiré Effect", right: "Gangguan pola getar visual akibat baju bergaris terlalu rapat" },
      { id: 2, left: "Lower Third", right: "Grafis nama dan jabatan narasumber di bagian bawah layar" },
      { id: 3, left: "Chroma Key", right: "Teknologi isolasi warna latar (biasanya hijau) untuk diganti latar digital" },
    ],
    lkpd: {
      title: "LKPD F6: Desain Floor Plan dan Set Studio Talkshow",
      objective: "Merancang denah set studio ramah kamera 3 sudut.",
      tools: ["Kertas Milimeter / Software Desain", "Sampel Warna Set"],
      steps: ["Tentukan dimensi studio.", "Posisikan meja dan kursi narasumber.", "Beri tanda area pergerakan kamera."],
      outputFormat: "Gambar denah skala 1:50 format PDF.",
    },
    video: {
      title: "Seni Merancang Panggung Set Studio TV",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Perhatikan bagaimana tim artistik memilih bahan dinding yang tidak memantulkan lampu studio.",
    },
    contents: F6_CONTENTS,
  },

  F7: {
    code: "F7",
    fase: "F",
    title: "Editing Audio dan Video",
    hours: 36,
    summary:
      "Alur pascaproduksi NLE, ingest, proxy workflow, color grading, title card, efek transisi, sound effects, audio ducking, dan master export siaran.",
    color: "from-teal-600 to-emerald-700",
    cpText: "Pada akhir fase F, murid mampu melakukan ingest materi, online & offline editing NLE, transisi, color grading, sound design, audio mixing, dan rendering broadcast quality.",
    deskripsi: "Penyempurnaan rangkaian visual dan audio menjadi sajian utuh berirama sesuai naskah dan standar penyiaran.",
    tp: [
      {
        code: "F7.1",
        statement: "Murid mampu menyusun video paket berita (Package) dengan teknik cut-to-beat, audio ducking, dan insert B-roll.",
        profileDimensions: ["Kreativitas", "Penalaran Kritis"],
        kktp: [
          {
            indicator: "Mengotomasi audio ducking (musik mengecil saat ada suara vokal narasi).",
            rubric: {
              perluBimbingan: "Musik latar menenggelamkan suara narator.",
              cukup: "Volume musik dikecilkan manual namun perpindahan mendadak.",
              baik: "Audio ducking halus dengan kurva transisi volume natural.",
              sangatBaik: "Editing ritmis presisi didukung color grading seimbang dan teks grafis rapi.",
            },
          },
        ],
      },
    ],
    atp: [{ sequenceNo: 1, tpCode: "F7.1", learningActivity: "Praktik NLE editing paket video feature.", hours: 36, prerequisite: "E4.3" }],
    materialCards: [
      {
        title: "Konsep Audio Ducking & L-Cut / J-Cut",
        content: "L-Cut dan J-Cut adalah teknik split edit di mana audio mendahului gambar (J-Cut) atau gambar berganti lebih dulu sementara audio adegan sebelumnya masih berlanjut (L-Cut).",
      },
    ],
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Teknik editing di mana suara dari adegan berikutnya sudah terdengar sebelum visual adegan tersebut muncul di layar disebut...",
        options: [
          { key: "A", text: "J-Cut" },
          { key: "B", text: "L-Cut" },
          { key: "C", text: "Jump Cut" },
          { key: "D", text: "Match Cut" },
        ],
        correctKey: "A",
        explanation: "J-Cut (dinamai dari bentuk timeline menyerupai huruf J) adalah saat audio adegan kedua mendahului pemotongan gambar visual.",
      },
    ],
    gamePairs: [
      { id: 1, left: "J-Cut", right: "Audio adegan berikutnya terdengar sebelum gambarnya muncul" },
      { id: 2, left: "L-Cut", right: "Audio adegan sebelumnya berlanjut ke gambar adegan berikutnya" },
      { id: 3, left: "Audio Ducking", right: "Otomasi menurunkan volume musik saat ada narasi vokal" },
    ],
    lkpd: {
      title: "LKPD F7: Penyuntingan Paket Berita Video (PKG) 90 Detik",
      objective: "Mengedit materi mentah A-roll dan B-roll menjadi paket berita utuh.",
      tools: ["Software NLE (Premiere / DaVinci Resolve)", "Footage Mentah"],
      steps: ["Import footage dan susun A-roll.", "Sisipkan B-roll menutupi jump cut.", "Atur audio ducking dan render."],
      outputFormat: "Video master MP4 codec H.264 / ProRes 422.",
    },
    video: {
      title: "Teknik Editing Video Siaran Berita Cepat & Presisi",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Perhatikan efisiensi penggunaan shortcut keyboard saat memotong timeline.",
    },
    contents: F7_CONTENTS,
  },

  F8: {
    code: "F8",
    fase: "F",
    title: "Penyiaran Online",
    hours: 28,
    summary:
      "Transmisi live streaming video (RTMP/SRT), software encoder (vMix/OBS), integrasi multi-kamera, chat interaktif, dan regulasi hak cipta digital.",
    color: "from-red-600 to-rose-700",
    cpText: "Pada akhir fase F, murid mampu merencanakan dan menayangkan karya secara online, mengoperasikan live streaming encoder, RTMP/SRT, multi-cam, dan kepatuhan hak cipta siaran daring.",
    deskripsi: "Puncak distribusi media modern memadukan standar penyiaran TV dengan fleksibilitas teknologi siaran langsung internet.",
    tp: [
      {
        code: "F8.1",
        statement: "Murid mampu mengkonfigurasi encoder vMix/OBS untuk siaran langsung multi-platform dengan protokol RTMP stabil.",
        profileDimensions: ["Kemandirian", "Penalaran Kritis"],
        kktp: [
          {
            indicator: "Menghitung bitrate video (misal: 4500 kbps untuk 1080p 30fps) sesuai bandwidth upload.",
            rubric: {
              perluBimbingan: "Siaran putus-putus (dropped frame parah) akibat bitrate salah.",
              cukup: "Siaran jalan namun kualitas visual buram.",
              baik: "Siaran stabil 0% dropped frame dengan resolusi Full HD konsisten.",
              sangatBaik: "Menerapkan streaming dual-redundant dan integrasi live chat interaktif di layar.",
            },
          },
        ],
      },
    ],
    atp: [{ sequenceNo: 1, tpCode: "F8.1", learningActivity: "Simulasi produksi dan live streaming acara sekolah.", hours: 28, prerequisite: "F3.1" }],
    materialCards: [
      {
        title: "Protokol RTMP vs SRT & Kalkulasi Bitrate",
        content: "Bitrate video siaran tidak boleh melebihi 70% dari kapasitas upload internet stabil. SRT (Secure Reliable Transport) memberikan proteksi packet loss lebih baik dibanding RTMP lawas.",
      },
    ],
    sampleQuestions: [
      {
        id: 1,
        bloom: "C4",
        stem: "Jika koneksi internet studio memiliki kecepatan upload stabil 10 Mbps, pengaturan video bitrate yang aman untuk siaran langsung Full HD 1080p tanpa risiko buffer adalah...",
        options: [
          { key: "A", text: "15.000 kbps (15 Mbps)" },
          { key: "B", text: "4.500 - 6.000 kbps (4,5 - 6 Mbps)" },
          { key: "C", text: "500 kbps (0,5 Mbps)" },
          { key: "D", text: "20.000 kbps (20 Mbps)" },
        ],
        correctKey: "B",
        explanation: "Aturan standar menyisakan toleransi headroom minimal 30-40% dari total bandwidth upload. Pada koneksi 10 Mbps, bitrate 4.500 - 6.000 kbps adalah batas optimal.",
      },
    ],
    gamePairs: [
      { id: 1, left: "RTMP", right: "Protokol transmisi video streaming standar ke YouTube dan Facebook" },
      { id: 2, left: "SRT Protocol", right: "Protokol streaming modern berlatensi rendah dengan error correction" },
      { id: 3, left: "Dropped Frames", right: "Frame video yang hilang terbuang akibat koneksi upload tersendat" },
    ],
    lkpd: {
      title: "LKPD F8: Eksekusi Live Streaming Multi-Kamera Acara Sekolah",
      objective: "Melakukan siaran langsung YouTube 30 menit dengan 2 kamera dan grafis nama.",
      tools: ["Komputer Encoder vMix/OBS", "Capture Card USB/PCIe", "2 Kamera"],
      steps: ["Setup input kamera.", "Konfigurasi Stream Key YouTube.", "Lakukan live broadcast 30 menit."],
      outputFormat: "Link siaran terekam di YouTube dan log performa streaming.",
    },
    video: {
      title: "Setup Live Streaming Multi-Kamera Tanpa Lag",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Perhatikan parameter encoder CPU vs GPU (NVENC/QuickSync).",
    },
    contents: F8_CONTENTS,
  },

  P1: {
    code: "P1",
    fase: "P",
    title: "Peminatan Kelas XI (Desain 2 Dimensi dan 3 Dimensi) 3D",
    hours: 72,
    summary:
      "Penguasaan pipeline 3D standar industri dengan Blender: prosedur tahapan produksi 3D, pengoperasian Blender, pemodelan (modeling), material dan tekstur, pencahayaan, animasi dasar, kamera virtual, rendering, dan ekspor karya.",
    color: "from-amber-500 to-orange-600",
    cpText:
      "Menerapkan prosedur tahapan produksi desain 3 dimensi, pengoperasian perangkat lunak Blender, pemodelan (modeling), material dan tekstur (texturing), pencahayaan, animasi dasar, serta pengoperasian fitur pendukung (kamera virtual, rendering, dan pengaturan ekspor) untuk menghasilkan karya desain 3 dimensi yang komunikatif dan siap digunakan.",
    deskripsi:
      "Mata pelajaran kejuruan pilihan yang membekali peserta didik dengan keahlian teknis pembuatan aset 3D, animasi 3D, bumper opening acara TV, virtual set broadcast, dan pemodelan objek 3 dimensi menggunakan Blender.",
    tp: [
      {
        code: "P1.1",
        statement:
          "Murid mampu memodelkan objek 3D hard-surface dan organic dengan topologi quad yang rapi menggunakan teknik Extrude, Inset, Bevel, dan Subdivision Surface.",
        profileDimensions: ["Kreativitas", "Bernalar Kritis"],
        kktp: [
          {
            indicator: "Menghasilkan model 3D berkisi quad tanpa n-gon dengan skala dan titik origin yang presisi.",
            rubric: {
              perluBimbingan: "Model memiliki banyak non-manifold geometry dan n-gon berantakan.",
              cukup: "Bentuk dasar objek terbentuk namun topologi sambungan masih kasar.",
              baik: "Model rapi berbasis quads dengan modifier Subdivision Surface yang bersih.",
              sangatBaik: "Topologi sempurna siap di-rigging atau di-unwrapped dengan edge-flow efisien.",
            },
          },
        ],
      },
    ],
    atp: [
      {
        sequenceNo: 1,
        tpCode: "P1.1",
        learningActivity: "Praktik pemodelan 3D hard-surface prop studio dan aset siaran TV.",
        hours: 36,
        prerequisite: "E3.1",
      },
    ],
    materialCards: P1_CONTENTS[0].materialCards,
    sampleQuestions: P1_CONTENTS[0].sampleQuestions,
    gamePairs: P1_CONTENTS[0].gamePairs,
    lkpd: P1_CONTENTS[0].lkpd,
    video: P1_CONTENTS[0].video,
    contents: P1_CONTENTS,
  },

  P2: {
    code: "P2",
    fase: "P",
    title: "Peminatan Kelas XII (Desain 2 Dimensi dan 3 Dimensi) 2D",
    hours: 72,
    summary:
      "Penguasaan desain grafis 2D dengan CorelDraw dan Canva: prosedur tahapan produksi 2D, teknik pengolahan objek, warna, teks, tata letak (layout), pemanfaatan aset grafis dan template, serta pengaturan ekspor/cetak karya siap pakai.",
    color: "from-emerald-500 to-teal-600",
    cpText:
      "Menerapkan prosedur tahapan produksi desain grafis 2 dimensi, pengoperasian perangkat lunak desain (CorelDraw/Canva) beserta teknik pengolahan objek, warna, teks, dan tata letak (layout), serta pengoperasian fitur pendukung desain (aset grafis, template, dan pengaturan ekspor/cetak) untuk menghasilkan karya desain yang siap digunakan sesuai kebutuhan media.",
    deskripsi:
      "Mata pelajaran kejuruan pilihan yang memfokuskan peserta didik pada keahlian visual communication design menggunakan CorelDraw dan Canva untuk kebutuhan media penyiaran, promosi digital, dan publikasi cetak.",
    tp: [
      {
        code: "P2.1",
        statement:
          "Murid mampu merancang paket template grafis on-air (Lower Third, Name Tag, Corner Bug) dengan rasio kontras warna tinggi dan tipografi terbaca jelas di layar televisi.",
        profileDimensions: ["Kreativitas", "Kemandirian"],
        kktp: [
          {
            indicator: "Membuat template lower third vektor dengan title-safe area 90% dan hirarki tipografi tegas.",
            rubric: {
              perluBimbingan: "Teks terpotong di tepi layar dan kontras warna tidak terbaca.",
              cukup: "Layout rapi namun hirarki nama narasumber dan jabatan belum seimbang.",
              baik: "Desain profesional mematuhi Title Safe Area dengan visual style konsisten.",
              sangatBaik: "Desain inovatif dengan alpha channel siap di-render untuk siaran real-time.",
            },
          },
        ],
      },
    ],
    atp: [
      {
        sequenceNo: 1,
        tpCode: "P2.1",
        learningActivity: "Perancangan paket aset visual identity dan grafis berita on-air TV.",
        hours: 36,
        prerequisite: "E3.1",
      },
    ],
    materialCards: P2_CONTENTS[0].materialCards,
    sampleQuestions: P2_CONTENTS[0].sampleQuestions,
    gamePairs: P2_CONTENTS[0].gamePairs,
    lkpd: P2_CONTENTS[0].lkpd,
    video: P2_CONTENTS[0].video,
    contents: P2_CONTENTS,
  },
};
