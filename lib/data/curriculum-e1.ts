import type { ElemenContentItem } from "./curriculum-types";

export const E1_CONTENTS: ElemenContentItem[] = [
  // =========================================================================
  // KONTEN 1: Dunia Kerja dan Profesi di Bidang Broadcasting & Perfilman
  // =========================================================================
  {
    id: "e1-k1",
    order: 1,
    title: "Dunia Kerja dan Profesi di Bidang Broadcasting & Perfilman",
    shortTitle: "Profesi & Ekosistem BCF",
    summary:
      "Pemahaman ekosistem industri penyiaran (FTA, Pay TV, OTT), rumah produksi film (PH), agensi konten, serta pemetaan peran divisi manajerial, kreatif, dan teknis.",
    kompetensi: [
      "Mengidentifikasi struktur ekosistem industri penyiaran dan perfilman.",
      "Membedakan fungsi stasiun TV komersial, publik, komunitas, dan platform OTT.",
      "Memetakan peran dan wewenang divisi manajerial, teknis, dan kreatif.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menjelaskan struktur organisasi stasiun televisi dan rumah produksi secara komprehensif.",
      "Peserta didik mampu menguraikan deskripsi tugas minimal 10 profesi kunci di industri audio visual.",
      "Peserta didik mampu menganalisis keterkaitan antar-departemen dalam keberhasilan suatu siaran langsung.",
    ],
    hookQuestion:
      "Pernahkah Anda membayangkan berapa ratus orang yang bekerja di balik layar siaran langsung pembukaan acara besar seperti Asian Games atau konser musik di televisi?",
    hookContext:
      "Dalam sebuah siaran langsung televisi skala nasional, kesalahan koordinasi satu orang saja di departemen teknis dapat membuat siaran hening atau layar hitam (blackout) di depan jutaan pemirsa.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C1",
        stem: "Stasiun penyiaran yang didirikan oleh pemerintah, bersifat independen, netral, dan bertugas melayani kepentingan publik di Indonesia adalah...",
        options: [
          { key: "A", text: "Lembaga Penyiaran Swasta (LPS)" },
          { key: "B", text: "Lembaga Penyiaran Publik (LPP TVRI/RRI)" },
          { key: "C", text: "Lembaga Penyiaran Berlangganan (LPB)" },
          { key: "D", text: "Lembaga Penyiaran Komunitas (LPK)" },
        ],
        correctKey: "B",
        explanation: "LPP (TVRI dan RRI) adalah lembaga penyiaran publik yang didanai negara dan iuran penyiaran untuk melayani kepentingan informasi masyarakat secara adil dan merata.",
      },
      {
        id: 2,
        bloom: "C2",
        stem: "Di bawah ini yang merupakan peran utama dari seorang Produser Eksekutif (Executive Producer) adalah...",
        options: [
          { key: "A", text: "Mengoperasikan switcher kamera di control room" },
          { key: "B", text: "Bertanggung jawab atas pendanaan, legalitas, dan kelayakan bisnis seluruh proyek program" },
          { key: "C", text: "Menata lampu fresnel dan mengarahkan fokus cahaya ke presenter" },
          { key: "D", text: "Menyunting video mentah menjadi master siaran di software NLE" },
        ],
        correctKey: "B",
        explanation: "Produser Eksekutif memegang kendali finansial, legalitas, perizinan, dan keselarasan visi program dengan kepentingan stasiun TV/investor.",
      },
    ],
    materialCards: [
      {
        title: "Slide 1: Pengantar Ekosistem Industri Broadcasting & Film",
        content:
          "Industri Broadcasting dan Perfilman (BCF) merupakan sektor kreatif padat modal dan teknologi yang mengolah gagasan audio visual menjadi konten informasi, hiburan, dan edukasi bagi audiens massal.\n\nRuang lingkup BCF terbagi atas:\n1. Penyiaran Terestrial (Free-to-Air / FTA)\n2. Penyiaran Berlangganan (Pay TV & Kabel)\n3. Layanan Over-The-Top (OTT) & Video on Demand (VOD)\n4. Rumah Produksi Film Independen (Production House / PH)\n5. Agensi Periklanan & Digital Content Creation Hub.",
        didYouKnow: "Indonesia resmi menyelesaikan migrasi siaran TV Analog ke Digital (Analog Switch-Off / ASO) yang membuka peluang ratusan kanal siaran baru berkualitas HD.",
      },
      {
        title: "Slide 2: Peta Konsep Pembagian Departemen Produksi",
        content:
          "Dalam industri profesional, pembagian kerja disusun sangat terspesialisasi dalam tiga pilar utama:\n\n• Pilar Manajerial: Produser Eksekutif, Produser, Line Producer, Unit Production Manager (UPM).\n• Pilar Kreatif: Sutradara, Penulis Naskah (Scriptwriter), Penata Artistik (Art Director), Sound Designer, Director of Photography (DoP).\n• Pilar Teknis: Technical Director (TD), Camera Operator, Lighting Technician (Gaffer), Audio Engineer, Master Control Operator (MCO).",
      },
      {
        title: "Slide 3: Regulasi & Tipe Lembaga Penyiaran di Indonesia",
        content:
          "Berdasarkan UU No. 32 Tahun 2002 tentang Penyiaran, lembaga penyiaran di Indonesia diklasifikasikan menjadi empat kelompok:\n\n1. LPP (Lembaga Penyiaran Publik): TVRI dan RRI (bersifat non-profit, independen).\n2. LPS (Lembaga Penyiaran Swasta): Stasiun TV komersial berorientasi bisnis iklan (RCTI, Trans TV, Metro TV, dll).\n3. LPK (Lembaga Penyiaran Komunitas): Dikelola komunitas tertentu dengan jangkauan wilayah terbatas (radius < 2,5 km).\n4. LPB (Lembaga Penyiaran Berlangganan): Siaran berbayar via satelit, kabel, atau internet terenkripsi.",
      },
      {
        title: "Slide 4: Evolusi Industri dari Analog ke Era Digital & OTT",
        content:
          "Transformasi industri media mengalami pergeseran radikal:\n\n• Era Analog: Distribusi terbatas pita magnetik (U-matic, Betacam), transmisi frekuensi UHF/VHF, penonton pasif menunggu jam tayang (linear programming).\n• Era Digital Broadcast: Kompresi data MPEG-4/H.264, gambar jernih 1080i/1080p, audio multichannel 5.1 Dolby.\n• Era Cloud & OTT: Streaming non-linear (Netflix, Vidio, Disney+), multi-screen viewing (smartphone, tablet, smart TV), dan algoritma rekomendasi personal.",
      },
      {
        title: "Slide 5: Klasifikasi Profesi: Departemen Produksi & Manajerial",
        content:
          "Peran manajerial memimpin aspek bisnis, hukum, dan logistik:\n\n• Executive Producer: Pengambil keputusan finansial dan penanggung jawab legal program.\n• Producer: Pemimpin harian yang mengintegrasikan ide kreatif naskah dengan ketersediaan dana dan fasilitas.\n• Line Producer / UPM: Manajer operasional lapangan yang mengendalikan cash flow harian, perizinan, katering, dan logistik kru.\n• Production Assistant (PA): Asisten serbaguna yang membantu koordinasi naskah, call sheet, dan administrasi set.",
      },
      {
        title: "Slide 6: Klasifikasi Profesi: Departemen Penyutradaraan & Naskah",
        content:
          "Departemen kreatif mengendalikan bahasa visual dan dramaturgi:\n\n• Showrunner / Head Writer: Pemimpin penulisan cerita dan pemegang arah narasi serial televisi.\n• Scriptwriter: Penulis naskah format dua kolom (TV) atau format master scene (film).\n• Director (Sutradara): Pemimpin visi artistik yang menerjemahkan naskah ke dalam bahasa visual (shot, blocking, akting, suara).\n• Assistant Director (Astrada / 1st AD): Penjaga jadwal waktu syuting dan pengatur jalannya set agar tidak over-budget.",
      },
      {
        title: "Slide 7: Klasifikasi Profesi: Departemen Kamera & Tata Cahaya",
        content:
          "Departemen visual menangkap estetika optik:\n\n• Director of Photography (DoP) / Penata Kamera Utama: Merancang tone visual, memilih lensa, framing, dan skema warna pencahayaan.\n• Camera Operator (Kameramen): Mengoperasikan kamera studio atau kamera portable EFP sesuai shot list sutradara.\n• Focus Puller (1st AC): Mengatur ketajaman fokus lensa secara manual menggunakan follow focus.\n• Gaffer: Kepala departemen tata cahaya yang mengeksekusi pemasangan rig lampu studio sesuai arahan DoP.",
      },
      {
        title: "Slide 8: Klasifikasi Profesi: Departemen Tata Suara & Artistik",
        content:
          "Departemen pendukung atmosfer audio dan ruang:\n\n• Production Sound Mixer: Mengendalikan audio mixer di lapangan dan memantau kualitas suara langsung.\n• Boom Operator: Memegang mic boom tepat di atas talent tanpa masuk ke dalam framing kamera.\n• Art Director (Penata Artistik): Merancang set dekorasi studio, properti meja, dan backdrop visual.\n• Wardrobe & Makeup Stylist: Menata busana dan rias wajah khusus broadcast (tahan kilap lampu kamera).",
      },
      {
        title: "Slide 9: Klasifikasi Profesi: Departemen Pascaproduksi & Transmisi",
        content:
          "Departemen penyelesaian dan distribusi sinyal:\n\n• Editor NLE: Memotong dan merangkai gambar sesuai naskah dan irama tayangan.\n• Colorist: Mengoreksi warna (color correction) dan memberikan mood warna artistik (color grading).\n• Sound Designer / Foley Artist: Menambahkan efek suara lingkungan dan memoles kejernihan vokal.\n• Master Control Room (MCR) Operator: Menjaga stabilitas transmisi sinyal siaran on-air 24 jam nonstop.",
      },
      {
        title: "Slide 10: POS Alur Koordinasi Stasiun Televisi",
        content:
          "Prosedur kerja di stasiun TV berjalan secara sekuensial:\n\n1. Pemrograman (Programming): Riset pasar dan penentuan jam tayang (slot time).\n2. Pra-Produksi: Penyusunan naskah, breakdown anggaran, dan rehearsal studio.\n3. Produksi (Studio/OB Van): Eksekusi siaran multi-kamera dipimpin sutradara dan TD.\n4. Pascaproduksi: Editing paket insert dan bumper grafis.\n5. Kontrol Kualitas (QC): Pengecekan standar siaran sebelum diserahkan ke MCR untuk tayang.",
      },
      {
        title: "Slide 11: POS Komunikasi Ruang Kontrol (Control Room vs Floor)",
        content:
          "Dalam siaran live televisi, sutradara berada di ruang kontrol (PCR) dan tidak bisa berbicara langsung dengan presenter di panggung.\n\nSOP Komunikasi Broadcast:\n• Jalur Interkom: Menghubungkan Sutradara, Switcher, Audio, dan Floor Director (FD).\n• Floor Director (FD): Menerima perintah sutradara via headset, lalu menyampaikannya ke presenter menggunakan isyarat tangan standar (cue, speed up, cut, 1 minute left).",
      },
      {
        title: "Slide 12: Budaya Kerja 5S / 5R di Lingkungan Studio Televisi",
        content:
          "Budaya 5R (Ringkas, Rapi, Resik, Rawat, Rajin) wajib diterapkan di area broadcast:\n\n• Ringkas: Pisahkan alat kamera yang rusak ke ruang servis, jangan biarkan di rak operasional.\n• Rapi: Susun kabel XLR dan SDI dengan teknik 'over-under' agar tidak kusut dan cepat digelar.\n• Resik: Bersihkan lensa kamera dari debu menggunakan lens paper dan blower khusus.\n• Rawat: Kalibrasi berkala monitor broadcast dan periksa kesehatan baterai V-Mount.\n• Rajin: Lakukan checklist inventaris setiap serah-terima shift kerja.",
      },
      {
        title: "Slide 13: Keselamatan Kerja (K3) Dasar di Lingkungan BCF",
        content:
          "Potensi bahaya di set produksi studio dan outdoor:\n\n1. Bahaya Listrik: Daya lampu studio mencapai puluhan ribu Watt; dilarang menyambung kabel tanpa ground yang benar.\n2. Bahaya Beban Gantung: Seluruh lampu yang digantung di lighting grid wajib dilengkapi kabel pengaman baja (safety wire/safety cable).\n3. Bahaya Tersandung: Kabel yang melintasi jalur pejalan kaki wajib ditutup cable bridge atau dilakban gaffer tape rapat.",
      },
      {
        title: "Slide 14: Karakteristik Kerja Industri: Disiplin Waktu Siaran (Punctuality)",
        content:
          "Di dunia pertelevisian berlaku pepatah 'Waktu adalah Siaran'. Keterlambatan 5 detik pada siaran langsung dapat berakibat:\n\n• Sanksi teguran dari KPI (Komisi Penyiaran Indonesia) jika terjadi jeda hening (dead air).\n• Kerugian finansial jutaan rupiah per detik dari pemutus kontrak sponsor iklan komersial.\n• Kerugian reputasi stasiun televisi di mata jutaan pemirsa.",
        didYouKnow: "Istilah 'Dead Air' merujuk pada kondisi hening total tanpa audio dan video selama lebih dari 3 detik di pemancar televisi.",
      },
      {
        title: "Slide 15: Studi Komparasi: Stasiun TV vs Rumah Produksi Film vs Kreator Digital",
        content:
          "Perbedaan kultur dan tuntutan produksi:\n\n• Stasiun TV: Berorientasi kecepatan tayang harian, alur multi-kamera terotomasi, jam kerja shift ketat.\n• Rumah Produksi (PH Film): Berorientasi kualitas estetika sinematik maksimal, single-camera, alur pascaproduksi berbulan-bulan.\n• Digital Content Creator: Fleksibel, multi-role (satu orang merangkap kamera, naskah, dan edit), responsif terhadap algoritma tren media sosial.",
      },
      {
        title: "Slide 16: Troubleshooting: Mengatasi Dead Air saat Siaran Langsung",
        content:
          "Jika sumber video utama mendadak hilang (blackout) saat siaran live, SOP mitigasi cepat kru MCR:\n\n1. Detik 1: Switcher langsung beralih ke bumper darurat stasiun ('Mohon Maaf Siaran Sedang Mengalami Gangguan Teknis').\n2. Detik 3: MCR menayangkan filler cadangan (video pariwisata atau promosi internal stasiun).\n3. Detik 10: Sutradara dan tim teknis studio mencari penyebab putusnya sinyal kamera.\n4. Detik 30: Siaran dikembalikan ke studio setelah konfirmasi line check stabil.",
      },
      {
        title: "Slide 17: Studi Kasus Riil: Kericuhan Interkom di Ruang Kontrol Siaran",
        content:
          "Pada sebuah siaran langsung debat politik nasional, audio interkom sutradara mengalami dengung hebat (ground loop noise) sehingga instruksi ke kameramen tidak terdengar.\n\nAnalisis Masalah:\nKabel interkom diletakkan bersebelahan dengan kabel power lighting 380V berarus tinggi tanpa pelindung shielding memadai. Induksi medan elektromagnetik mengacaukan sinyal audio interkom.",
      },
      {
        title: "Slide 18: Solusi Rekayasa & Standar Prosedur Pengamanan Sinyal",
        content:
          "Pelajaran dari kasus interkom:\n\n1. Pemisahan Jalur: Kabel data/sinyal audio tidak boleh diletakkan sejajar dalam satu jalur tray yang sama dengan kabel listrik berdaya besar.\n2. Jika terpaksa bersilangan, kabel audio dan kabel power harus diposisikan tegak lurus (90 derajat) untuk meminimalkan induksi elektromagnetik.\n3. Menggunakan sistem interkom nirkabel digital (DECT wireless intercom) dengan enkripsi frekuensi bebas interferensi.",
      },
      {
        title: "Slide 19: Inovasi & Masa Depan: Remote Production & AI Media Hub",
        content:
          "Tren masa kini di industri pertelevisian global:\n\n• Remote Production (REMI): Kamera berada di stadion pertandingan luar kota, namun sutradara dan switcher mengendalikannya dari ruang kontrol di Jakarta via fiber optic internet berlatensi rendah.\n• Virtual Studio (LED Wall): Mengganti green screen tradisional dengan layar LED raksasa yang dirender secara realtime menggunakan Unreal Engine.\n• Otomasi AI: Transkrip audio otomatis menjadi teks closed-caption dalam hitungan milidetik.",
      },
      {
        title: "Slide 20: Rangkuman & Action Plan Siswa Kelas X",
        content:
          "Poin Kunci Pembelajaran:\n1. Ekosistem BCF memerlukan kolaborasi harmonis tiga divisi: Manajerial, Kreatif, dan Teknis.\n2. Disiplin waktu dan kepatuhan K3/5R adalah harga mati bagi setiap calon profesional audio visual.\n3. Kuasai deskripsi tugas profesi impian Anda sejak awal untuk mempersiapkan portofolio kejuruan yang tepat.\n\nAction Plan:\nKerjakan LKPD E1-K1 untuk menyusun diagram struktur organisasi stasiun televisi dan analisis pembagian peran kru.",
      },
    ],
    video: {
      title: "Behind the Scenes Stasiun TV Nasional & Profil Profesi Pertelevisian",
      embedUrl: "https://www.youtube.com/embed/mG9jZJqK4x4",
      guide:
        "Amati koordinasi antara Floor Director di lantai studio dengan Sutradara di ruang kontrol (PCR). Catat alat komunikasi yang mereka gunakan serta bagaimana aba-aba waktu (countdown) disampaikan ke presenter berita.",
    },
    gamePairs: [
      { id: 1, left: "Executive Producer", right: "Penanggung jawab anggaran, legalitas, dan bisnis program" },
      { id: 2, left: "Floor Director (FD)", right: "Perpanjangan tangan sutradara di lantai studio" },
      { id: 3, left: "Gaffer", right: "Kepala teknisi tata cahaya studio dan set" },
      { id: 4, left: "Master Control Room (MCR)", right: "Ruang pengendali transmisi siaran 24 jam ke pemancar" },
      { id: 5, left: "Focus Puller", right: "Asisten kamera penata ketajaman fokus lensa" },
    ],
    caseTitle: "Studi Kasus: Kegagalan Sinkronisasi Rundown Siaran Musik Langsung",
    caseScenario:
      "Dalam siaran langsung konser musik amal berdurasi 60 menit, band kedua tampil molor 3 menit dari alokasi rundown. Jika dibiarkan, slot siaran berita malam jam 21.00 akan terpotong secara paksa oleh sistem otomasi satelit MCR.",
    caseInstruction:
      "Sebagai seorang Associate Producer (AP) yang bertugas mendampingi Line Producer, susunlah langkah darurat: segmen mana yang harus dipangkas dan bagaimana cara Floor Director memberi sinyal 'Cut / Bungkus' ke pembawa acara dengan sopan tanpa merusak atmosfer penonton!",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Di ruang Master Control Room (MCR), istilah untuk ketiadaan sinyal gambar dan suara di layar televisi pemirsa selama beberapa detik disebut...",
        options: [
          { key: "A", text: "Dead Air" },
          { key: "B", text: "Slow Motion" },
          { key: "C", text: "Ghost Frame" },
          { key: "D", text: "Over Modulated" },
        ],
        correctKey: "A",
        explanation: "Dead Air adalah kondisi darurat penyiaran di mana tidak ada suara maupun gambar yang terpancar ke televisi audiens.",
      },
      {
        id: 2,
        bloom: "C4",
        stem: "Ketika memasang lampu studio berkekuatan besar di lighting grid plafon, kewajiban keselamatan K3 yang tidak boleh diabaikan adalah...",
        options: [
          { key: "A", text: "Memasang kabel pengaman baja (safety wire) melingkari pipa grid" },
          { key: "B", text: "Mengecat lampu dengan warna cerah" },
          { key: "C", text: "Menyalakan pendingin ruangan ke suhu maksimal" },
          { key: "D", text: "Menghubungkan lampu tanpa peredup dimmer" },
        ],
        correctKey: "A",
        explanation: "Safety wire berfungsi mencegah lampu jatuh dan mencelakai orang di bawahnya apabila klem gantung utama mengalami patah atau lepas.",
      },
    ],
    lkpd: {
      title: "LKPD E1-K1: Pemetaan Struktur Organisasi & Analisis Profesi BCF",
      objective: "Menganalisis bagan struktur organisasi rumah produksi dan merinci deskripsi kerja 8 profesi penyiaran.",
      tools: ["Kertas A3 / Software Mind Mapping", "Buku Standar Kompetensi Kerja Nasional Indonesia (SKKNI) Bidang Penyiaran"],
      steps: [
        "Gambar struktur organisasi stasiun televisi dari Direksi hingga staf teknis lapangan.",
        "Pilih 8 profesi spesifik (misal: Sutradara, Switcher, Gaffer, FD, Audio Mixer, Editor, DoP, Produser).",
        "Rincikan tanggung jawab utama, alat kerja wajib, dan mitra koordinasi terdekat masing-masing profesi.",
        "Presentasikan hasil pemetaan di depan kelompok kerja kelas.",
      ],
      outputFormat: "Dokumen bagan struktur infografis format PDF atau mind map digital.",
    },
    journalQuestions: {
      q1: "Profesi penyiaran apa yang paling menarik minat Anda dan keahlian apa yang perlu Anda latih sejak sekarang?",
      q2: "Mengapa kepatuhan pada budaya kerja 5R dan K3 sangat menentukan keberlangsungan produksi di studio TV?",
      q3: "Tantangan apa yang Anda bayangkan terjadi saat bekerja di bawah tekanan hitungan detik siaran langsung?",
    },
    kktpIndicators: [
      "Mampu menguraikan pembagian departemen manajerial, kreatif, dan teknis secara tepat.",
      "Mampu mendeskripsikan peran serta tanggung jawab minimal 8 profesi industri BCF.",
      "Mampu mempresentasikan prosedur K3 dan penanganan risiko darurat di studio penyiaran.",
    ],
  },

  // =========================================================================
  // KONTEN 2: Level Pekerjaan dan Jenjang Karier di Industri BCF
  // =========================================================================
  {
    id: "e1-k2",
    order: 2,
    title: "Level Pekerjaan dan Jenjang Karier",
    shortTitle: "Jenjang Karier BCF",
    summary:
      "Struktur kualifikasi KKNI level 2 hingga level 7 di bidang penyiaran, tahapan karier entry-level (runner/PA) hingga Head of Department (HOD), serta pengembangan portofolio.",
    kompetensi: [
      "Memahami Kerangka Kualifikasi Nasional Indonesia (KKNI) bidang Broadcasting.",
      "Menyusun peta jalan karier profesional mandiri dari jenjang SMK hingga tingkat supervisor.",
      "Merancang strategi portofolio karya audio visual untuk melamar kerja industri.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu mengklasifikasikan level pekerjaan industri media berdasarkan KKNI dan SKKNI.",
      "Peserta didik mampu memetakan tahapan promosi jabatan dari teknisi pemula hingga manajer produksi.",
      "Peserta didik mampu menyusun rencana portofolio karya audio visual sebagai bekal kelulusan SMK.",
    ],
    hookQuestion:
      "Apakah lulusan SMK langsung bisa menjadi Sutradara film layar lebar atau Produser Eksekutif TV? Bagaimana jalur karier nyata di industri sesungguhnya?",
    hookContext:
      "Banyak sineas peraih piala Citra dan produser senior mengawali kariernya sebagai runner kabel atau asisten produksi lapangan. Karier industri kreatif adalah kombinasi jam terbang, etos kerja, dan jaringan profesional.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C1",
        stem: "Lulusan Sekolah Menengah Kejuruan (SMK) pada Kerangka Kualifikasi Nasional Indonesia (KKNI) berada pada kualifikasi jenjang...",
        options: [
          { key: "A", text: "Jenjang 1" },
          { key: "B", text: "Jenjang 2" },
          { key: "C", text: "Jenjang 4" },
          { key: "D", text: "Jenjang 6" },
        ],
        correctKey: "B",
        explanation: "Lulusan SMK dipersiapkan sebagai operator terampil yang berada pada kualifikasi KKNI Level 2.",
      },
      {
        id: 2,
        bloom: "C2",
        stem: "Posisi awal (entry-level) di departemen kamera film yang bertugas membawa baterai, mencatat data lensa, dan membantu asisten kamera disebut...",
        options: [
          { key: "A", text: "Camera Trainee / Camera Loader / 2nd AC" },
          { key: "B", text: "Director of Photography" },
          { key: "C", text: "Technical Director" },
          { key: "D", text: "Line Producer" },
        ],
        correctKey: "A",
        explanation: "Camera Trainee / 2nd AC adalah posisi entry-level penting tempat juru kamera pemula mempelajari tata kelola alat dan etika set produksi.",
      },
    ],
    materialCards: [
      {
        title: "Slide 1: Pengantar Jenjang Karier Industri Kreatif",
        content:
          "Industri media dan perfilman menghargai dua hal: portofolio karya nyata dan reputasi profesional (track record).\n\nJalur karier di industri tidak bersifat linear seperti birokrasi kantoran, melainkan berbasis hierarki meritokrasi: semakin tinggi keandalan teknis dan kepemimpinan Anda di set, semakin cepat Anda dipercaya memegang tanggung jawab yang lebih besar.",
        didYouKnow: "Banyak Director of Photography (DoP) pemenang penghargaan festival film internasional memulai kariernya sebagai pemegang boom mic atau pembawa tripod.",
      },
      {
        title: "Slide 2: Peta Kualifikasi KKNI Bidang Penyiaran & Film",
        content:
          "Penyelarasan kompetensi nasional berdasarkan Perpres No. 8 Tahun 2012:\n\n• Level 2 (SMK): Operator Dasar / Junior Technician (mengoperasikan kamera tripod standar, setting mic dasar, pemotongan timeline NLE).\n• Level 3 & 4 (D3/D4): Teknisi Terampil / Senior Operator (mengoperasikan switcher live, kalibrasi CCU kamera, audio mixing multitrack).\n• Level 5 & 6 (Sarjana/S1 Terapan): Manajerial & Konseptual (Sutradara, Produser, Scriptwriter, Art Director).\n• Level 7-9: Konsultan Ahli, Peneliti Media, dan Eksekutif Stasiun TV.",
      },
      {
        title: "Slide 3: Hierarki Departemen Kamera (Karier dari Dasar)",
        content:
          "Jenjang karier departemen visual dari bawah ke atas:\n\n1. Camera Trainee / Runner: Menyiapkan baterai, membersihkan body kamera, menjaga tas lensa.\n2. 2nd Assistant Camera (Clapper Loader): Mengisi data clapper board, mencatat log sheet rekaman, mengatur posisi mark lantai untuk aktor.\n3. 1st Assistant Camera (Focus Puller): Mengendalikan fokus lensa, mengukur jarak kamera ke subjek, merakit rig kamera.\n4. Camera Operator: Mengoperasikan framing pergerakan kamera sesuai shot list.\n5. Director of Photography (DoP): Merancang konsep visual bersama sutradara dan memimpin seluruh departemen kamera & cahaya.",
      },
      {
        title: "Slide 4: Hierarki Departemen Produksi & Manajerial",
        content:
          "Jenjang kepemimpinan produksi:\n\n1. Production Assistant (PA): Mengurus kebutuhan operasional harian, fotokopi naskah, call sheet, dan konsumsi kru.\n2. Assistant Producer (AP): Membantu riset narasumber, koordinasi jadwal syuting studio, dan pendampingan editing naskah.\n3. Producer: Bertanggung jawab penuh atas kelancaran produksi satu judul program secara utuh.\n4. Executive Producer (EP): Membawahi beberapa judul program sekaligus dan bertanggung jawab atas rating serta monetisasi iklan ke pimpinan stasiun.",
      },
      {
        title: "Slide 5: Hierarki Departemen Tata Suara (Audio)",
        content:
          "Jalur karier departemen audio broadcast:\n\n1. Audio Assistant / Cable Utility: Memasang kabel XLR, menyiapkan baterai wireless, memasang pop filter.\n2. Boom Operator: Mengoperasikan boom pole dengan akurat mengikuti dialog talent tanpa masuk framing.\n3. Production Sound Recordist: Merekam dan memantau kualitas suara di lokasi luar studio.\n4. Broadcast Audio Engineer: Mengoperasikan mixer console digital puluhan channel saat siaran langsung di studio.\n5. Sound Designer / Re-recording Mixer: Memimpin tata suara kreatif film di tahap pascaproduksi.",
      },
      {
        title: "Slide 6: Hierarki Departemen Pascaproduksi (Editing)",
        content:
          "Jenjang karier divisi pascaproduksi:\n\n1. Assistant Editor / Ingest Operator: Mentransfer data footage dari kartu memori ke storage server, membuat proxy file, dan sinkronisasi audio clapper.\n2. Junior Editor: Memotong kasar (assembly cut) dan menyusun adegan sesuai naskah.\n3. Offline / Online Editor: Menyempurnakan ritme pemotongan (fine cut) dan memasukkan elemen visual efek/bumper.\n4. Colorist: Menyelaraskan tone warna rekaman dengan software profesional (DaVinci Resolve).\n5. Post-Production Supervisor: Mengawasi tenggat waktu seluruh divisi editing, audio foley, grafis, dan mastering broadcast.",
      },
      {
        title: "Slide 7: Perbedaan Status Kerja: Kru Tetap Stasiun TV vs Freelance",
        content:
          "Dua model ekosistem ketenagakerjaan BCF:\n\n• Pegawai Tetap (In-House Staff TV): Menerima gaji bulanan tetap, jaminan kesehatan, bekerja dengan sistem shift berkala, menggarap program rutin stasiun.\n• Tenaga Lepas (Freelance / Daily Worker): Dibayar per proyek (project-based / per day rate), fleksibilitas waktu tinggi, pendapatan variatif tergantung reputasi, menggarap film layar lebar, web series, atau iklan TVC komersial.",
      },
      {
        title: "Slide 8: Keterampilan Tambahan (Soft Skills) Penentu Sukses Karier",
        content:
          "Keahlian teknis hanya 40% dari kesuksesan karier; 60% lainnya ditentukan oleh:\n\n1. Komunikasi Asertif: Mampu menyampaikan kendala teknis secara tenang tanpa menyulut emosi saat waktu mepet.\n2. Ketahanan Mental (Under Pressure): Tetap fokus meski syuting berlangsung 14 jam berturut-turut.\n3. Integritas & Disiplin: Datang 30 menit sebelum call time dan menjaga rahasia materi produksi (NDA).\n4. Problem Solving Kolaboratif: Cepat mencari alternatif solusi ketika alat utama mengalami kendala.",
      },
      {
        title: "Slide 9: Portofolio Audio Visual: 'Curriculum Vitae' Sejati Orang BCF",
        content:
          "Di industri penyiaran dan film, lembar ijazah sering kali dilihat belakangan. Hal pertama yang diminta produser adalah: 'Mana Showreel atau Portofolio Anda?'\n\nKomponen Portofolio Berkualitas:\n• Showreel Video: Kompilasi karya terbaik berdurasi 60-90 detik diiringi musik dinamis.\n• Credit Title Jelas: Sebutkan peran spesifik Anda (misal: 'DoP', bukan sekadar 'Kru').\n• Link Online yang Mudah Diakses: YouTube unlisted, Vimeo, atau website portofolio pribadi.",
      },
      {
        title: "Slide 10: POS Penyusunan Portofolio Showreel Standar Industri",
        content:
          "Aturan baku menyusun showreel profesional:\n\n1. Letakkan 3 shot paling spektakuler di 10 detik pertama untuk memikat perhatian perekrut.\n2. Hindari memasukkan karya yang tidak Anda banggakan atau kualitas gambarnya kabur.\n3. Tuliskan teks keterangan singkat di pojok bawah: judul karya, peran Anda, dan tipe kamera/software yang digunakan.\n4. Cantumkan kontak email profesional dan nomor WhatsApp di awal dan akhir video.",
      },
      {
        title: "Slide 11: Pentingnya Sertifikasi Profesi BNSP (LSP BCF)",
        content:
          "Untuk memperkuat daya tawar lulusan SMK di bursa kerja, pemerintah menyediakan uji sertifikasi melalui Lembaga Sertifikasi Profesi (LSP):\n\n• Skema Okupasi BNSP: Asisten Kameramen, Operator Lighting, Junior Editor, Operator Audio Siaran.\n• Nilai Tambah: Sertifikat kompetensi berlambang Garuda Emas diakui di kawasan ASEAN (MRA) sehingga membuka peluang kerja internasional.",
      },
      {
        title: "Slide 12: Membangun Jejaring Profesional (Networking) Sejak Bangku Sekolah",
        content:
          "Industri BCF sangat bergantung pada sistem rekomendasi antarteman (word of mouth):\n\n• Ikuti festival film pendek pelajar tingkat kota dan nasional.\n• Magang industri (PKL) bukan sekadar syarat sekolah, melainkan audisi kerja sesungguhnya.\n• Jaga sikap sopan santun dan etika pertemanan kepada seluruh kru dan mentor industri.\n• Praktisi yang terkesan dengan kerja keras Anda saat PKL akan langsung memanggil Anda saat mereka butuh asisten.",
      },
      {
        title: "Slide 13: Manajemen Finansial Tenaga Kerja Lepas (Freelancer BCF)",
        content:
          "Tantangan utama pekerja lepas film dan TV adalah ketidakpastian siklus proyek:\n\n• Musim Ramai (Peak Season): Proyek beruntun di bulan tertentu (iklan hari raya, festival akhir tahun).\n• Musim Sepi (Dry Season): Bisa berbulan-bulan tanpa panggilan syuting.\n• Literasi Keuangan: Wajib menyisihkan minimal 30% honor proyek sebagai dana darurat dan investasi alat kerja mandiri.",
      },
      {
        title: "Slide 14: Pro-Tips Praktisi: Menghadapi Wawancara Kerja & Showreel Review",
        content:
          "Saat mempresentasikan karya di depan produser:\n\n• Jangan mengarang atau mengklaim karya orang lain sebagai karya sendiri. Industri ini sempit, kebohongan akan segera terbongkar.\n• Jelaskan proses berpikir Anda: 'Mengapa Anda memilih sudut kamera itu?' atau 'Bagaimana Anda mengatasi pencahayaan minim di lokasi tersebut?'\n• Tunjukkan sikap rendah hati yang mau belajar (teachable attitude).",
      },
      {
        title: "Slide 15: Studi Komparasi: Jenjang Karier di Indonesia vs Industri Global",
        content:
          "Perbedaan dinamika asosiasi profesi:\n\n• Industri Hollywood/Eropa: Sangat diatur oleh serikat pekerja (Union seperti DGA, IATSE, ASC) yang menetapkan standar upah minimum dan batasan jam kerja ketat.\n• Industri Indonesia: Bergerak menuju standardisasi melalui asosiasi profesi (FSI, IFI, APFI, INAFED) dan sertifikasi SKKNI, di mana reputasi individu dan portofolio memegang peranan terbesar.",
      },
      {
        title: "Slide 16: Troubleshooting Karier: Menembus Batas 'Stagnasi Karier'",
        content:
          "Banyak lulusan yang merasa 'terjebak' menjadi runner atau asisten bertahun-tahun tanpa naik jabatan. Solusi strategis:\n\n1. Buat karya mandiri (passion project): Jangan hanya menunggu disuruh sutradara lain; buat film pendek independen bersama rekan sebaya.\n2. Ikuti masterclass dan workshop teknologi baru (misal: Unreal Engine virtual production atau HDR color grading).\n3. Pelajari kepemimpinan: Asisten yang proaktif memecahkan masalah tanpa disuruh akan paling cepat dipromosikan.",
      },
      {
        title: "Slide 17: Studi Kasus Riil: Kenaikan Karier Cepat Seorang Alumnus SMK",
        content:
          "Kisah nyata seorang lulusan SMK BCF yang memulai magang sebagai pencatat log data (clapper loader) di PH film serial:\n\nKarena ketelitiannya merapikan file backup tanpa pernah ada footage yang korup dan inisiatifnya membantu gaffer saat kru kekurangan orang, ia dipromosikan menjadi 1st AC dalam waktu hanya 18 bulan dan kini menjadi salah satu DoP web series terlaris di platform OTT.",
      },
      {
        title: "Slide 18: Analisis Kunci Keberhasilan Karier di Set Syuting",
        content:
          "Faktor pembeda utama:\n\n1. Kredibilitas Keandalan (Reliability): Rekan kerja tahu tugas yang diberikan kepadanya pasti selesai sempurna.\n2. Attitude Zero Drama: Tidak mengeluh di lokasi syuting dan selalu membawa energi positif.\n3. Penguasaan Alat: Mengetahui setiap tombol kamera dan seluk-beluk kabel lebih cepat daripada siapa pun.",
      },
      {
        title: "Slide 19: Tren Masa Depan: Karier Baru di Era AI & Virtual Production",
        content:
          "Profesi masa depan yang bermunculan di industri BCF:\n\n• Virtual Production Technician: Mengoperasikan render engine untuk background dinding LED saat syuting berlangsung.\n• AI Prompt Engineer for Storyboarding: Menggunakan Gen-AI untuk membuat konsep visual kasar sebelum naskah diproduksi.\n• Digital Asset Manager: Mengelola ribuan terabyte file footage siaran berbasis cloud storage stasiun TV.",
      },
      {
        title: "Slide 20: Rangkuman & Rencana Karier 5 Tahun Siswa",
        content:
          "Kesimpulan Utama:\n1. Setiap tangga karier di industri BCF harus dilewati dengan dedikasi dan pembelajaran lapangan.\n2. Mulailah membangun portofolio karya sejak semester pertama di SMK.\n3. Uji kompetensi LSP/BNSP adalah modal legalitas pengakuan keahlian Anda di dunia kerja nasional.\n\nAction Plan:\nSusun 'Career Roadmap 5 Tahun' Anda di lembar LKPD E1-K2 mulai dari jenjang SMK, PKL industri, hingga target profesi impian!",
      },
    ],
    video: {
      title: "Karier di Industri Film & Televisi: Dari Pemula hingga Sutradara/Produser",
      embedUrl: "https://www.youtube.com/embed/5F_fN91l8jY",
      guide:
        "Perhatikan penjelasan praktisi mengenai jenjang karier dari asisten produksi hingga menjadi kepala departemen. Catat bagaimana mereka membangun portofolio awal dan pentingnya sikap mental di lokasi syuting.",
    },
    gamePairs: [
      { id: 1, left: "Level 2 KKNI", right: "Kualifikasi operator dasar lulusan SMK bidang BCF" },
      { id: 2, left: "Camera Trainee", right: "Posisi awal pembantu divisi kamera di lokasi syuting" },
      { id: 3, left: "Showreel", right: "Kompilasi video karya terbaik 60-90 detik untuk melamar kerja" },
      { id: 4, left: "LSP BNSP", right: "Lembaga penerbit sertifikat kompetensi resmi profesi penyiaran" },
      { id: 5, left: "Freelancer", right: "Tenaga kerja lepas yang dibayar berbasis kontrak proyek" },
    ],
    caseTitle: "Studi Kasus: Menyusun Portofolio Karya untuk Melamar Magang di Stasiun TV",
    caseScenario:
      "Seorang siswa SMK memiliki rekaman 5 tugas praktik sekolah (liputan berita sekolah, video klip musik, iklan layanan masyarakat, talkshow kelas, dan dokumenter budaya). Ia hanya memiliki waktu 1 minggu untuk mengirimkan showreel maksimal 90 detik ke stasiun TV nasional.",
    caseInstruction:
      "Bantu siswa tersebut memilih potongan adegan terbaik: bagaimana urutan penyusunan klip, musik latar yang legal, dan identitas informasi apa saja yang wajib dicantumkan di awal dan akhir video showreel!",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Mengapa durasi video showreel portofolio bagi pemula industri audio visual disarankan tidak lebih dari 90 detik?",
        options: [
          { key: "A", text: "Produser dan sutradara memiliki waktu sangat terbatas untuk menilai kualitas visual dan ritme editing" },
          { key: "B", text: "Kapasitas penyimpanan hard disk stasiun TV sangat kecil" },
          { key: "C", text: "Software video editing tidak mampu mengekspor durasi lebih panjang" },
          { key: "D", text: "Peraturan menteri melarang video portofolio panjang" },
        ],
        correctKey: "A",
        explanation: "Perekrut industri hanya meluangkan waktu kurang dari 1-2 menit untuk menyeleksi ratusan calon pelamar, sehingga kompilasi karya terbaik wajib disajikan ringkas dan memikat.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Sikap profesional yang paling tepat ketika Anda bertugas sebagai Camera Trainee dan melihat gaffer kesulitan memindahkan lampu berat adalah...",
        options: [
          { key: "A", text: "Diam saja karena bukan tugas divisi kamera" },
          { key: "B", text: "Meminta izin kepada 1st AC terlebih dahulu, lalu dengan sigap membantu tanpa meninggalkan tanggung jawab kamera" },
          { key: "C", text: "Memotret gaffer tersebut untuk diunggah ke media sosial" },
          { key: "D", text: "Menyuruh sutradara membantu memindahkan lampu" },
        ],
        correctKey: "B",
        explanation: "Di lokasi syuting, kerja sama antar-divisi sangat dihargai, namun asisten harus selalu memastikan tanggung jawab utama divisinya tetap aman dengan izin atasan langsung.",
      },
    ],
    lkpd: {
      title: "LKPD E1-K2: Penyusunan Peta Karier 5 Tahun & Desain Showreel Pribadi",
      objective: "Merancang roadmap pengembangan karier 5 tahun dan storyboard konsep showreel video pribadi.",
      tools: ["Kertas Rencana Karier", "Komputer Pengolah Grafis / NLE"],
      steps: [
        "Tentukan target profesi puncak Anda dalam 5 tahun mendatang.",
        "Petakan langkah tahun ke-1 (Sekolah), tahun ke-2 (PKL & Uji Sertifikasi), tahun ke-3 (Entry Level), tahun ke-4 (Spesialisasi), dan tahun ke-5 (Target Utama).",
        "Buat storyboard berisikan 6 scene rencana video showreel karya yang ingin Anda produksi selama di SMK.",
        "Tuliskan identitas kontak profesional dan deskripsi keahlian teknis Anda.",
      ],
      outputFormat: "Dokumen Rencana Peta Karier dan Storyboard Showreel format PDF.",
    },
    journalQuestions: {
      q1: "Pada posisi mana Anda melihat diri Anda bekerja dalam kurun waktu 3 tahun setelah lulus SMK?",
      q2: "Kompetensi apa yang menurut Anda paling menantang untuk dipelajari di bidang penyiaran?",
      q3: "Mengapa sertifikasi profesi BNSP bernilai penting dalam menghadapi persaingan dunia kerja?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi jenjang karier industri BCF dari level operator hingga supervisor.",
      "Mampu menyusun rencana pengembangan portofolio karya showreel audio visual yang terstruktur.",
      "Mampu merancang peta jalan karier profesional mandiri 5 tahun ke depan.",
    ],
  },

  // =========================================================================
  // KONTEN 3: Prosedur Operasional Standar (POS) Divisi Kerja
  // =========================================================================
  {
    id: "e1-k3",
    order: 3,
    title: "Prosedur Operasional Standar (POS) Divisi Kerja",
    shortTitle: "POS Divisi Kerja",
    summary:
      "Alur POS pra, produksi, dan pascaproduksi pada divisi kamera, tata cahaya, tata suara, tata artistik, dan master control room (MCR) serta koordinasi multi-divisi.",
    kompetensi: [
      "Memahami esensi dan fungsi Prosedur Operasional Standar (POS) di stasiun TV dan rumah produksi.",
      "Menerapkan POS pra-syuting (gear check, rehearsal) hingga pasca-syuting (data wrap).",
      "Menyusun lembar checklist kesiapan teknis sebelum siaran dimulai.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu mengidentifikasi tahapan POS pada 5 divisi kerja broadcast secara runtut.",
      "Peserta didik mampu mempraktikkan alur pemeriksaan kelayakan alat (gear check) pra-produksi.",
      "Peserta didik mampu menyusun dokumen Standar Operasional Prosedur untuk proyek produksi sekolah.",
    ],
    hookQuestion:
      "Tahukah Anda mengapa sebelum pesawat terbang lepas landas, pilot wajib membaca checklist puluhan tombol meskipun ia sudah terbang ribuan jam? Mengapa kru siaran televisi juga melakukan hal yang sama persis?",
    hookContext:
      "Peralatan siaran televisi melibatkan ratusan kabel, frekuensi nirkabel, dan komputer yang sangat kompleks. Kelupaan menekan satu saklar baterai cadangan dapat memutus siaran langsung jutaan pemirsa.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C1",
        stem: "Tujuan utama diterapkannya Prosedur Operasional Standar (POS/SOP) dalam industri pertelevisian adalah...",
        options: [
          { key: "A", text: "Membuat alur kerja menjadi lebih lambat dan rumit" },
          { key: "B", text: "Menjamin konsistensi kualitas siaran, keselamatan kerja, dan efisiensi waktu kru" },
          { key: "C", text: "Menghindari komunikasi antarkru saat syuting" },
          { key: "D", text: "Menggantikan peran sutradara di lokasi" },
        ],
        correctKey: "B",
        explanation: "POS dibuat untuk menjaga standardisasi kualitas, meminimalkan human error, dan memastikan seluruh kru bekerja dalam ritme yang terprediksi.",
      },
      {
        id: 2,
        bloom: "C2",
        stem: "Aktivitas memeriksa seluruh fungsi tombol kamera, kebersihan lensa, dan ketersediaan memori sebelum berangkat ke lokasi syuting disebut...",
        options: [
          { key: "A", text: "Gear Check / Camera Check" },
          { key: "B", text: "Offline Editing" },
          { key: "C", text: "Post-Mortem Meeting" },
          { key: "D", text: "Sound Mixing" },
        ],
        correctKey: "A",
        explanation: "Gear check adalah prosedur wajib pra-produksi untuk memastikan seluruh alat berfungsi 100% sebelum syuting dimulai.",
      },
    ],
    materialCards: [
      {
        title: "Slide 1: Pengertian & Urgensi POS di Industri BCF",
        content:
          "Prosedur Operasional Standar (POS / SOP) adalah pedoman tertulis yang memuat instruksi langkah-demi-langkah bagi kru untuk melaksanakan tugas operasional secara konsisten, aman, dan berkualitas tinggi.\n\nDalam siaran TV, POS menjadi benteng pertahanan utama melawan kegagalan teknis (human error) yang dapat merugikan stasiun televisi hingga ratusan juta rupiah per detik.",
        didYouKnow: "Stasiun TV internasional memiliki buku POS teknis setebal lebih dari 500 halaman yang mencakup mitigasi bencana gempa saat siaran langsung.",
      },
      {
        title: "Slide 2: Tiga Fase Utama POS Produksi Audio Visual",
        content:
          "Seluruh POS divisi kerja dibagi ke dalam 3 fase waktu:\n\n1. POS Pra-Produksi: Persiapan berkas, pemeriksaan alat, blocking awal, dan koordinasi antardivisi.\n2. POS Produksi: Eksekusi siaran langsung/rekaman, komunikasi interkom, dan penanganan insiden darurat.\n3. POS Pascaproduksi: Pengarsipan data (data backup), pembersihan alat, serah terima berkas, dan evaluasi.",
      },
      {
        title: "Slide 3: POS Departemen Kamera: Tahap Pra-Syuting",
        content:
          "Checklist wajib juru kamera sebelum syuting:\n\n• Kalibrasi White Balance dengan kartu abu-abu 18% (Grey Card).\n• Format media penyimpanan (SD Card / CFast) langsung di dalam bodi kamera.\n• Pemeriksaan level baterai (indikator voltase minimum 14.4V untuk baterai broadcast V-Mount).\n• Pengecekan sensor dari debu (sensor check) dengan bukaan f/22 ke arah bidang putih.\n• Pengecekan leveling waterpass fluid head tripod.",
      },
      {
        title: "Slide 4: POS Departemen Kamera: Tahap On-Air / Syuting",
        content:
          "Prosedur operasional saat kamera bekerja:\n\n• Selalu kenakan headset interkom untuk mendengarkan aba-aba sutradara.\n• Amankan kabel video SDI dari tarikan orang yang melintas.\n• Kunci framing gambar saat sutradara menyerukan 'Standby Cam X'.\n• Jangan mengubah zoom atau fokus saat lampu Tally merah menyala, kecuali diperintahkan sutradara untuk reframing halus.",
      },
      {
        title: "Slide 5: POS Departemen Kamera: Tahap Pasca-Syuting (Wrap Up)",
        content:
          "Prosedur pengemasan alat kamera:\n\n• Matikan tombol power kamera sebelum mencabut baterai V-Mount.\n• Pasang tutup lensa depan (lens cap) dan tutup bodi kamera.\n• Kendurkan seluruh pengunci tilt dan pan pada fluid head tripod agar pegas mekanik tidak lelah.\n• Simpan lensa di dalam tas berbusa (hardcase/pelican case) dengan posisi vertikal.",
      },
      {
        title: "Slide 6: POS Departemen Tata Cahaya: Tahap Pra-Syuting",
        content:
          "Prosedur penataan lampu studio:\n\n• Periksa kapasitas beban daya listrik (hitung total Watt lampu tidak melebihi kapasitas MCB stopkontak).\n• Pasang safety wire baja pada setiap lampu yang digantung di lighting grid plafon.\n• Pasang sandbag (kantong pasir pemberat) minimal 5 kg pada setiap kaki stand lampu lantai.\n• Arahkan barndoors lampu dan pasang diffuser gel tahan panas.",
      },
      {
        title: "Slide 7: POS Departemen Tata Cahaya: Tahap Operasional & Panas",
        content:
          "SOP keselamatan lampu studio:\n\n• Wajib menggunakan sarung tangan kulit tahan panas (heat-resistant gloves) saat menyentuh housing lampu tungsten atau HMI.\n• Dilarang menyemprotkan air atau cairan pembersih ke kaca lampu yang sedang menyala panas karena akan meledak.\n• Berikan jeda pendinginan kipas angin (cooling fan) selama 10-15 menit sebelum mematikan saklar utama listrik lampu.",
      },
      {
        title: "Slide 8: POS Departemen Tata Suara: Tahap Pra-Syuting",
        content:
          "Checklist teknis sound engineer:\n\n• Scan frekuensi radio (RF frequency scan) untuk menghindari interferensi sinyal pemancar lokal pada mikrofon wireless.\n• Pasang baterai baru (bukan baterai isi ulang sisa syuting kemarin) pada mic transmitter talent.\n• Lakukan 'Mic Check' dan setting Gain Staging agar vokal talent berada di rentang rata-rata -18 dBFS hingga -12 dBFS pada audio mixer.",
      },
      {
        title: "Slide 9: POS Departemen Tata Suara: Tahap On-Air & Monitoring",
        content:
          "Prosedur saat audio direkam/disiarkan:\n\n• Operator audio wajib mengenakan headphone closed-back monitor untuk mendengarkan gangguan noise sekecil apa pun.\n• Aktifkan High-Pass Filter (Low Cut 80Hz) pada vokal untuk memotong dengung AC studio dan getaran lantai.\n• Selalu rekam cadangan audio (dual-recording backup) pada perekam internal kamera atau audio recorder terpisah.",
      },
      {
        title: "Slide 10: POS Departemen Tata Artistik: Tahap Pra-Produksi",
        content:
          "Prosedur penata panggung dan properti:\n\n• Buat denah lantai (floor plan) skala 1:50 yang disetujui sutradara dan penata kamera.\n• Pastikan warna latar backdrop tidak menggunakan warna hijau cerah jika akan menggunakan teknik green screen (Chroma Key).\n• Hindari material properti yang terlalu mengkilap (glossy) karena akan memantulkan pantulan lampu studio yang menyilaukan kamera.",
      },
      {
        title: "Slide 11: POS Departemen Artistik: Pengelolaan Wardrobe & Rias",
        content:
          "Prosedur penataan presenter:\n\n• Periksa pakaian presenter agar tidak menggunakan motif garis-garis tipis berjarak rapat untuk mencegah distorsi efek Moiré.\n• Aplikasikan bedak matte transparan anti-shine untuk menyerap minyak pada dahi dan hidung presenter.\n• Siapkan cadangan pakaian (backup wardrobe) di ruang ganti jika terjadi noda kopi atau makanan sebelum siaran dimulai.",
      },
      {
        title: "Slide 12: POS Master Control Room (MCR): Penjaga Gerbang Siaran",
        content:
          "Prosedur operasional MCR stasiun TV:\n\n• Periksa playlist siaran harian (Daily Broadcast Log) 2 jam sebelum jam tayang.\n• Lakukan Quality Control (QC) otomatis terhadap file video siaran: cek audio loudness EBU R128 (-23 LUFS), resolusi 1080i, dan timecode sinkron.\n• Siapkan server video cadangan (redundant backup server) yang berputar bersamaan (mirroring) untuk mengantisipasi server utama hang.",
      },
      {
        title: "Slide 13: POS Koordinasi 'Dry Run' & 'Camera Rehearsal'",
        content:
          "Sebelum siaran langsung dimulai, wajib dilaksanakan dua jenis gladi bersih:\n\n1. Dry Run: Latihan alur gerak presenter dan kru panggung tanpa menyalakan kamera (membaca naskah dan blocking).\n2. Camera Rehearsal (Gladi Kamera): Latihan penuh dengan kamera menyala, tata cahaya aktif, switcher memotong gambar, dan penghitungan waktu detik demi detik.",
      },
      {
        title: "Slide 14: POS Komunikasi Darurat: Kode Isyarat Tangan Floor Director",
        content:
          "Ketika audio interkom presenter mati, FD berkomunikasi menggunakan kode isyarat tangan internasional:\n\n• Telunjuk menunjuk lurus: 'Cue / Mulai Bicara'.\n• Dua tangan membuat gerakan memotong di leher: 'Cut / Segera Berhenti'.\n• Gerakan kedua tangan memutar: 'Speed Up / Percepat Pembicaraan'.\n• Dua tangan menarik jemari menjauh: 'Stretch / Perpanjang Waktu Bicara'.\n• Jari telunjuk diangkat: '1 Menit Menuju Jeda Iklan'.",
      },
      {
        title: "Slide 15: Studi Komparasi: POS Siaran Berita vs POS Acara Hiburan Live",
        content:
          "Karakteristik perbedaan POS:\n\n• Program Berita (News): Ritme sangat cepat, perubahan naskah terjadi detik terakhir (breaking news), mengutamakan akurasi fakta dan kepatuhan kode etik jurnalistik.\n• Program Hiburan (Variety Show): Melibatkan ratusan penonton studio, efek pencahayaan dinamis lampu moving head, sinkronisasi audio musik playback band, dan tata panggung kompleks.",
      },
      {
        title: "Slide 16: Troubleshooting Lapangan: Kegagalan Audio Transmitter",
        content:
          "Jika mic presenter mendadak mati (RF dropout) saat sedang siaran langsung:\n\n1. Detik 1: FD segera menyerahkan mic genggam darurat (backup handheld wireless mic) yang sudah menyala standby di tepi panggung.\n2. Detik 3: Operator audio membuka fader channel mic cadangan dan mematikan channel mic clip-on yang mati.\n3. Suara kembali jernih dalam tempo kurang dari 4 detik tanpa penonton menyadari ada insiden besar.",
      },
      {
        title: "Slide 17: Studi Kasus Riil: Kecerobohan Format Kartu Memori Tanpa Backup",
        content:
          "Sebuah kru syuting iklan TVC memformat kartu memori kamera di lokasi karena mengira footage adegan sebelumnya sudah disalin ke laptop editor.\n\nFakta Insiden:\nAsisten kamera hanya menyalin folder secara sekilas tanpa melakukan verifikasi checksum data. Hasil syuting selama 6 jam bernilai puluhan juta rupiah musnah dan syuting terpaksa diulang total dengan kerugian sewa lokasi dan honor talent.",
      },
      {
        title: "Slide 18: Solusi POS Manajemen Data: Aturan Baku 3-2-1 Backup",
        content:
          "Untuk mencegah terulangnya tragedi kehilangan data, industri film menetapkan POS Data Management:\n\n• 3 Salinan: Simpan minimal 3 kopi dari setiap file rekaman.\n• 2 Media Berbeda: Simpan pada minimal dua jenis media penyimpanan fisik berbeda (misal: SSD NVMe dan Hard Disk eksternal RAID).\n• 1 Salinan di Lokasi Terpisah (Off-site): Satu salinan disimpan di kantor/cloud, bukan dibawa bersama di tas kamera yang sama.\n• Verifikasi Checksum (MD5/SHA-256) menggunakan software pengaman seperti Silverstack atau ShotPut Pro.",
      },
      {
        title: "Slide 19: Digitalisasi POS: Aplikasi Manajemen Produksi Modern",
        content:
          "Kini POS manual berbasis kertas mulai digantikan platform digital terintegrasi:\n\n• StudioBinder / Yamdu: Pembuatan call sheet otomatis yang terkirim ke smartphone kru dengan peta GPS lokasi.\n• Frame.io / DaVinci Cloud: Review dan approval potongan adegan oleh sutradara dan produser secara realtime dari tempat terpisah.\n• Notion / Trello Broadcast Boards: Melacak kesiapan properti dan izin lokasi secara transparan.",
      },
      {
        title: "Slide 20: Rangkuman & Action Plan Penerapan POS Sekolah",
        content:
          "Poin Kunci Pembelajaran:\n1. POS bukan sekadar formalitas, melainkan jaminan mutu dan keselamatan seluruh produksi penyiaran.\n2. Disiplin checklist pra-syuting mencegah 90% kegagalan teknis di lapangan.\n3. Manajemen data digital 3-2-1 wajib diterapkan pada setiap tugas praktik audio visual.\n\nAction Plan:\nKerjakan LKPD E1-K3 untuk menyusun lembar checklist POS Gear Check dan simulasi koordinasi gladi bersih!",
      },
    ],
    video: {
      title: "Alur Kerja dan POS Terintegrasi Kru Produksi Multi-Kamera Studio Siaran",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      guide:
        "Perhatikan bagaimana asisten produksi dan teknisi memeriksa setiap kabel dan mikrofon sebelum siaran dimulai. Amati urutan komando sutradara saat melakukan gladi resik (camera rehearsal).",
    },
    gamePairs: [
      { id: 1, left: "Gear Check", right: "Pemeriksaan fungsi dan fisik alat sebelum berangkat syuting" },
      { id: 2, left: "Safety Wire", right: "Kabel baja pengaman gantungan lampu di lighting grid studio" },
      { id: 3, left: "Rule 3-2-1 Backup", right: "Standar penyimpanan 3 copy, 2 media, 1 lokasi terpisah" },
      { id: 4, left: "Isyarat Cut", right: "Gerakan tangan memotong leher dari Floor Director" },
      { id: 5, left: "Camera Rehearsal", right: "Gladi bersih penuh dengan seluruh kamera dan alat aktif" },
    ],
    caseTitle: "Studi Kasus: Kerusakan Kartu Memori Akibat Dicabut Saat Kamera Sedang Menyimpan",
    caseScenario:
      "Dalam sebuah syuting wawancara eksklusif menteri, seorang kameramen magang langsung mencabut kartu SD begitu sutradara menyerukan 'Cut!'. Akibatnya file video 30 menit tersebut korup dan tidak bisa dibuka oleh software editing NLE.",
    caseInstruction:
      "Analisis pelanggaran POS apa yang dilakukan oleh kameramen tersebut! Jelaskan prosedur yang benar saat mematikan perekaman dan langkah teknis apa yang dapat diupayakan untuk merecovery file video yang rusak!",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C3",
        stem: "Ketika Floor Director di lantai studio mengangkat tangan dan merapatkan kedua telapak tangan lalu menariknya menjauh perlahan, instruksi tersebut artinya...",
        options: [
          { key: "A", text: "Presenter harus segera mengakhiri acara" },
          { key: "B", text: "Presenter diminta memperpanjang (stretch) pembicaraan karena waktu masih tersisa banyak" },
          { key: "C", text: "Lampu studio harus dipadamkan" },
          { key: "D", text: "Kamera harus di-zoom out maksimal" },
        ],
        correctKey: "B",
        explanation: "Isyarat 'stretch' (meregangkan tangan) menginstruksikan presenter untuk memperlambat tempo atau memperbanyak bahasan materi sebelum jeda commercial break.",
      },
      {
        id: 2,
        bloom: "C4",
        stem: "Penerapan aturan backup data '3-2-1' di departemen pascaproduksi bertujuan utama untuk...",
        options: [
          { key: "A", text: "Mempercepat proses rendering video menjadi 3 kali lebih kencang" },
          { key: "B", text: "Menjamin file master rekaman tidak hilang secara permanen jika salah satu media penyimpanan rusak atau hilang" },
          { key: "C", text: "Menghemat biaya listrik komputer editing" },
          { key: "D", text: "Mengurangi resolusi video agar mudah diunggah ke internet" },
        ],
        correctKey: "B",
        explanation: "Aturan 3-2-1 adalah standar industri global untuk mitigasi risiko kehilangan data master akibat kerusakan mekanis hard disk, virus, atau musibah kebakaran.",
      },
    ],
    lkpd: {
      title: "LKPD E1-K3: Penyusunan Lembar Checklist POS 'Gear Check' Pra-Syuting",
      objective: "Merancang formulir checklist kelayakan peralatan kamera, tata suara, dan lighting sebelum produksi.",
      tools: ["Software Spreadsheet / Lembar Form Cetak", "Kit Kamera dan Audio Sekolah"],
      steps: [
        "Buat daftar periksa (checklist) yang mencakup: Status Baterai, Kapasitas Memori, Kebersihan Optik, Fungsi Audio, dan Safety Hardware.",
        "Lakukan inspeksi fisik terhadap 1 unit kamera studio dan 1 set mic wireless di lab sekolah.",
        "Tandai status kelayakan (OK / Perlu Servis / Ditolak) pada lembar form.",
        "Tuliskan rekomendasi tindakan perbaikan jika ditemukan komponen yang tidak memenuhi standar POS.",
      ],
      outputFormat: "Formulir Checklist POS Pengoperasian Alat format PDF.",
    },
    journalQuestions: {
      q1: "Mengapa disiplin membaca checklist POS lebih penting daripada mengandalkan ingatan pribadi di set syuting?",
      q2: "Bagaimana cara Anda menanggapi rekan satu tim yang mengabaikan prosedur keselamatan kerja demi mengejar waktu cepat?",
      q3: "Manfaat apa yang Anda rasakan setelah mempraktikkan pemeriksaan alat secara sistematis sebelum syuting?",
    },
    kktpIndicators: [
      "Mampu menguraikan tahapan POS pada divisi kamera, cahaya, suara, dan artistik.",
      "Mampu menyusun formulir checklist pemeriksaan alat (gear check) pra-produksi secara komprehensif.",
      "Mampu menjelaskan penerapan aturan manajemen data 3-2-1 pada alur kerja pascaproduksi.",
    ],
  },

  // =========================================================================
  // KONTEN 4: Keselamatan dan Kesehatan Kerja (K3) & Budaya 5R di Bidang BCF
  // =========================================================================
  {
    id: "e1-k4",
    order: 4,
    title: "Keselamatan dan Kesehatan Kerja (K3) & Budaya 5R",
    shortTitle: "K3 & Budaya 5R",
    summary:
      "Regulasi K3 kelistrikan broadcast, proteksi bahaya beban gantung, evakuasi darurat, ergonomi kerja juru kamera, serta penerapan budaya 5R di set produksi.",
    kompetensi: [
      "Mengidentifikasi potensi bahaya kelistrikan, fisik, dan mekanis di studio dan lokasi outdoor.",
      "Menerapkan SOP K3LH saat memasang rig pencahayaan dan manajemen kabel.",
      "Membiasakan budaya kerja 5R (Ringkas, Rapi, Resik, Rawat, Rajin) pada workshop BCF.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menganalisis sumber bahaya kelistrikan dan beban gantung di studio televisi.",
      "Peserta didik mampu menerapkan prosedur pemasangan cable bridge dan gaffer taping secara aman.",
      "Peserta didik mampu mempraktikkan budaya kerja 5R pada ruang penyimpanan alat (gear room).",
    ],
    hookQuestion:
      "Tahukah Anda bahwa sebuah lampu studio seberat 8 kg yang digantung di ketinggian 6 meter dapat menimbulkan gaya bentur setara ratusan kilogram jika jatuh mengenai orang di bawahnya?",
    hookContext:
      "Industri hiburan dunia pernah mencatat insiden fatal akibat kelalaian K3, mulai dari kebakaran set karena korsleting listrik hingga kru tertimpa crane kamera. Keselamatan kerja adalah prioritas nomor satu di atas estetika visual apa pun.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C1",
        stem: "Alat pelindung diri (APD) wajib yang harus dikenakan oleh teknisi tata cahaya (lighting crew) saat mengatur sudut lampu studio yang sedang menyala adalah...",
        options: [
          { key: "A", text: "Sarung tangan karet tipis medis" },
          { key: "B", text: "Sarung tangan kulit tahan panas (heat-resistant leather gloves)" },
          { key: "C", text: "Kacamata renang" },
          { key: "D", text: "Jas hujan plastik" },
        ],
        correctKey: "B",
        explanation: "Lampu studio berkekuatan ratusan hingga ribuan Watt dapat mencapai suhu lebih dari 200°C; sarung tangan kulit tahan panas wajib digunakan untuk mencegah luka bakar parah.",
      },
      {
        id: 2,
        bloom: "C2",
        stem: "Penerapan prinsip 'Rapi' (Seiton) dari budaya kerja 5R dalam penataan kabel di lantai studio diwujudkan dengan...",
        options: [
          { key: "A", text: "Membiarkan kabel melintang acak di pintu masuk" },
          { key: "B", text: "Menggulung kabel dengan rapi, mengikatnya dengan velcro tie, dan menempelkan gaffer tape pada jalur kabel lantai" },
          { key: "C", text: "Menimbun seluruh kabel di bawah karpet panggung tanpa pelindung" },
          { key: "D", text: "Memotong kabel yang kepanjangan" },
        ],
        correctKey: "B",
        explanation: "Prinsip Seiton (Rapi) menuntut penempatan barang yang tertata dan siap pakai, termasuk manajemen jalur kabel yang rapi dan aman dari risiko tersandung.",
      },
    ],
    materialCards: [
      {
        title: "Slide 1: Pengantar K3 di Industri Broadcasting & Perfilman",
        content:
          "Keselamatan dan Kesehatan Kerja (K3) adalah serangkaian upaya untuk menciptakan tempat kerja yang aman, sehat, dan bebas dari kecelakaan kerja serta penyakit akibat kerja.\n\nDi industri penyiaran, K3 diatur secara ketat karena lingkungan kerja memadukan arus listrik tegangan tinggi, suhu panas ekstrem, alat berat yang digantung, dan aktivitas fisik intensif di bawah tekanan tenggat waktu siaran.",
        didYouKnow: "Setiap produksi film layar lebar profesional memiliki jabatan resmi 'Safety Coordinator' yang berhak menghentikan syuting jika ada potensi bahaya.",
      },
      {
        title: "Slide 2: Matriks Identifikasi Bahaya di Set Produksi",
        content:
          "Tiga kategori bahaya utama di lingkungan BCF:\n\n1. Bahaya Elektrikal (Listrik): Sengatan arus listrik, kelebihan beban daya (overload), korsleting pemicu kebakaran.\n2. Bahaya Mekanikal & Gravitasi: Lampu gantung jatuh, tripod roboh tertiup angin, jib arm/crane menghantam orang.\n3. Bahaya Ergonomis: Cedera tulang belakang akibat memanggul kamera berat tanpa harness atau mengangkat hardcase alat dengan posisi tubuh yang salah.",
      },
      {
        title: "Slide 3: K3 Kelistrikan Studio & Lokasi Syuting",
        content:
          "SOP keselamatan listrik penyiaran:\n\n• Gunakan sistem grounding (pentanahan) sempurna dengan nilai tahanan tanah < 5 Ohm pada genset dan panel distribusi.\n• Hitung total arus (Ampere) beban peralatan: Rumus Daya (Watt) = Tegangan (Volt) x Arus (Ampere). Stopkontak 10A 220V maksimal menanggung 2.200 Watt beban kontinu.\n• Jauhkan sambungan listrik dan stopkontak dari genangan air atau tetesan AC studio.",
      },
      {
        title: "Slide 4: Standar Pengamanan Lampu Gantung (Rigging Safety)",
        content:
          "Aturan mutlak menggantung peralatan di lighting grid:\n\n• Klem Utama (C-Clamp / Pipe Clamp): Dikencangkan erat menggunakan kunci pas (spanner) pada pipa grid baja.\n• Safety Cable (Kabel Pengaman Baja): Wajib dilingkarkan mengunci housing lampu ke struktur plafon bangunan (bukan hanya ke pipa gantungan yang sama).\n• Batas Beban Aman (Working Load Limit / WLL): Jangan pernah menggantung beban melebihi spesifikasi tonase klem atau truss.",
      },
      {
        title: "Slide 5: Manajemen Kabel Lantai (Cable Taping & Cable Bridge)",
        content:
          "Kabel yang berserakan di lantai adalah penyebab nomor satu kru tersandung dan kamera terjatuh:\n\n• Cable Bridge / Rubber Duct: Wajib dipasang pada setiap jalur kabel yang melintasi pintu masuk dan area lalu lintas talent/kru.\n• Gaffer Tape Khusus: Rekatkan kabel ke lantai menggunakan lakban kain gaffer tape (bukan lakban plastik hitam yang meninggalkan lem lengket licin).\n• Taping Crosswise: Pasang lakban melintang setiap 50 cm, lalu tutup seluruh panjang kabel dengan lakban memanjang.",
      },
      {
        title: "Slide 6: Penggunaan Sandbag (Pemberat) pada Light Stand",
        content:
          "Setiap stand lampu atau C-stand yang didirikan di lantai wajib diberi pemberat sandbag:\n\n• Posisi Sandbag: Letakkan sandbag tepat di atas kaki stand yang paling panjang (kaki yang mengarah ke arah beban lampu miring).\n• Berat Ideal: Minimal 5 kg untuk stand lampu kecil, dan 10-15 kg untuk boom stand atau stand lampu HMI besar.\n• Di lokasi luar ruangan berangin kencang, gandakan jumlah sandbag dan pasang tali penopang (guy wire) ke patok tanah.",
      },
      {
        title: "Slide 7: APD Wajib Kru Produksi Audio Visual",
        content:
          "Alat Pelindung Diri (APD) standar di lokasi kerja:\n\n• Sepatu Keselamatan (Safety Shoes / Toe Cap): Melindungi jari kaki dari kejatuhan hardcase atau kaki tripod seberat belasan kilogram.\n• Sarung Tangan Kulit Panas: Untuk gaffer dan lighting crew memegang lampu.\n• Helm Proyek (Hard Hat): Wajib dikenakan saat bekerja di bawah kru yang sedang merakit rigging lampu di ketinggian.\n• Rompi Reflektif (Hi-Vis Vest): Wajib dipakai kru saat syuting liputan di jalan raya atau area konstruksi.",
      },
      {
        title: "Slide 8: Ergonomi Kerja: Mengangkat Beban Berat",
        content:
          "Prinsip 'Lifting Ergonomics' saat memindahkan hardcase peralatan studio:\n\n• Jangan membungkuk dengan punggung melengkung saat mengangkat beban dari lantai.\n• Tekuk lutut dan gunakan kekuatan otot paha dan kaki untuk mengangkat, jaga punggung tetap tegak lurus.\n• Dekatkan beban ke tubuh (center of gravity).\n• Beban di atas 25 kg wajib diangkat berpasangan (two-person lift) atau menggunakan troli beroda.",
      },
      {
        title: "Slide 9: Ergonomi Kerja: Juru Kamera (Camera Ergonomics)",
        content:
          "Mengoperasikan kamera pundak (shoulder rig) berjam-jam dapat memicu cedera saraf leher dan bahu kronis:\n\n• Pasang counterbalance beban di belakang bahu kamera untuk menyeimbangkan berat lensa di depan.\n• Gunakan EasyRig atau vest penopang tubuh untuk memindahkan beban kamera ke pinggang dan pinggul.\n• Lakukan peregangan leher, bahu, dan pergelangan tangan setiap jeda syuting 30 menit.",
      },
      {
        title: "Slide 10: Pencegahan & Penanggulangan Kebakaran di Studio",
        content:
          "Setiap studio televisi wajib dilengkapi sistem proteksi kebakaran aktif:\n\n• APAR Tipe CO2 (Karbon Dioksida) atau Gas Clean Agent: Sangat dianjurkan untuk area kontrol elektronik dan studio karena tidak meninggalkan residu bubuk yang merusak lensa dan sirkuit kamera.\n• Dilarang menggunakan APAR air atau busa (foam) pada peralatan listrik yang masih bertegangan karena berisiko sengatan mematikan.\n• Jalur pintu darurat (Fire Exit) tidak boleh terhalang oleh properti atau tumpukan kardus dekorasi.",
      },
      {
        title: "Slide 11: Budaya Kerja 5S / 5R: Konsep Dasar dari Industri Jepang",
        content:
          "Budaya 5R (adaptasi dari filosofi 5S Jepang) diadopsi stasiun TV global untuk menjamin efisiensi dan kebersihan alat:\n\n1. Ringkas (Seiri): Memilah barang penting vs barang tak berguna.\n2. Rapi (Seiton): Menata barang pada tempatnya dengan label jelas.\n3. Resik (Seiso): Membersihkan alat dan area kerja secara teratur.\n4. Rawat (Seiketsu): Memelihara standar kebersihan dan keteraturan.\n5. Rajin (Shitsuke): Membiasakan diri mematuhi peraturan tanpa harus diawasi.",
      },
      {
        title: "Slide 12: Penerapan 5R: 'Ringkas' (Seiri) di Gear Room",
        content:
          "Langkah konkret Seiri:\n\n• Berikan label 'Red Tag' (Tag Merah) pada kabel yang putus di dalam, mikrofon yang kresek-kresek, atau tripod yang patah kuncinya.\n• Singkirkan barang ber-tag merah dari rak operasional harian ke ruang perbaikan khusus (repair bench).\n• Jangan biarkan alat rusak bercampur dengan alat siap pakai agar kru tidak salah bawa ke lokasi syuting.",
      },
      {
        title: "Slide 13: Penerapan 5R: 'Rapi' (Seiton) di Master Storage",
        content:
          "Langkah konkret Seiton:\n\n• Gunakan metode 'Shadow Board' atau pembagian rak berlabel: setiap kamera memiliki tempat spesifik bernomor.\n• Susun lensa kamera di rak dengan indikator focal length (16-35mm, 24-70mm, 70-200mm) menghadap ke depan.\n• Gulung kabel XLR, SDI, dan kabel listrik menggunakan teknik 'Over-Under' dan ikat dengan velcro warna pembeda panjang (merah 5m, biru 10m, kuning 20m).",
      },
      {
        title: "Slide 14: Penerapan 5R: 'Resik' (Seiso) Perawatan Optik & Sensor",
        content:
          "Langkah konkret Seiso:\n\n• Bersihkan debu kaca lensa hanya menggunakan blower udara manual dan cairan lens cleaner khusus dengan microfiber bersih.\n• Dilarang meniup lensa langsung dari mulut karena uap air liur mengandung zat asam yang merusak lapisan coating kaca optik.\n• Bersihkan kisi-kisi kipas angin pendingin kamera dan switchboard dengan vacuum cleaner antistatis.",
      },
      {
        title: "Slide 15: Penerapan 5R: 'Rawat' (Seiketsu) & Standar Kelembapan Dry Box",
        content:
          "Langkah konkret Seiketsu:\n\n• Simpan seluruh kamera dan lensa di dalam lemari kontrol kelembapan (Electronic Dry Cabinet) dengan kelembapan udara terjaga pada 40% – 50% RH.\n• Kelembapan di atas 60% memicu pertumbuhan jamur kaca (fungus) yang merusak lensa secara permanen.\n• Kelembapan di bawah 30% dapat membuat pelumas mekanik zoom dan karet ring menjadi kering dan getas.",
      },
      {
        title: "Slide 16: Penerapan 5R: 'Rajin' (Shitsuke) & Checklist Serah Terima",
        content:
          "Langkah konkret Shitsuke:\n\n• Setiap kali selesai syuting, kru wajib mengembalikan alat ke rak masing-masing dan menandatangani lembar serah-terima inventaris (Check-in Sheet).\n• Disiplin mengisi baterai kamera segera setelah dipakai, bukan membiarkan baterai habis di dalam tas hingga hari syuting berikutnya.\n• Melaporkan setiap insiden benturan atau kerusakan kecil secara jujur kepada penanggung jawab lab alat.",
      },
      {
        title: "Slide 17: Studi Kasus Riil: Kebakaran Akibat Lampu Halogen Menempel Backdrop",
        content:
          "Pada sebuah syuting pentas seni sekolah, sebuah lampu halogen 1000 Watt diletakkan terlalu dekat (jarak 15 cm) dengan kain tirai backdrop beludru panggung.\n\nFakta Insiden:\nPanas radiasi lampu memicu kebakaran kain dalam waktu 7 menit. Api menjalar cepat ke dekorasi styrofoam di dekatnya. Beruntung kru sigap mematikan saklar utama dan menyemprotkan APAR CO2 sehingga api tidak membakar seluruh auditorium.",
      },
      {
        title: "Slide 18: Analisis Penyebab & Jarak Aman Lampu Panas",
        content:
          "Pelajaran dari insiden kebakaran:\n\n1. Aturan Jarak Aman: Lampu tungsten/halogen berdaya > 500 Watt wajib berjarak minimal 1 meter dari benda yang mudah terbakar (kain, kayu, styrofoam).\n2. Tidak Boleh Ditinggal: Lampu yang menyala tidak boleh ditinggalkan tanpa pengawasan kru di set.\n3. Transisi ke Lampu LED: Mengganti lampu halogen tua dengan lampu LED COB modern yang menghasilkan panas radiasi jauh lebih rendah dengan konsumsi listrik 80% lebih hemat.",
      },
      {
        title: "Slide 19: K3 di Era Baru: Green Shooting & Keberlanjutan Lingkungan",
        content:
          "Evolusi K3 modern mencakup kesehatan lingkungan set (K3LH):\n\n• Kurangi Botol Plastik Sekali Pakai: Kru wajib membawa botol minum tumbler sendiri ke lokasi syuting.\n• Daur Ulang Properti Set: Papan kayu dan panel triplek dekorasi studio dirancang modular agar dapat dicat ulang dan dipakai kembali untuk program berikutnya.\n• Pengelolaan Limbah Baterai Litium: Mengumpulkan baterai rusak di wadah khusus B3 (Bahan Berbahaya dan Beracun) untuk didaur ulang aman.",
      },
      {
        title: "Slide 20: Rangkuman & Action Plan Budaya K3/5R",
        content:
          "Poin Kunci Pembelajaran:\n1. Tidak ada hasil gambar atau siaran yang sepadan dengan nyawa atau cedera fisik manusia.\n2. K3 kelistrikan, safety wire beban gantung, dan manajemen kabel adalah pilar utama keselamatan di set.\n3. Budaya 5R menjaga peralatan studio tetap awet, siap pakai, dan bernilai jual tinggi.\n\nAction Plan:\nLakukan audit K3 dan penataan 5R di lab praktek studio sekolah menggunakan lembar LKPD E1-K4!",
      },
    ],
    video: {
      title: "Standar K3 di Lokasi Syuting dan Studio Televisi Profesional",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      guide:
        "Perhatikan demonstrasi pemasangan sandbag pada kaki c-stand, teknik melakban kabel di lantai (cable taping), dan cara kru menangani lampu studio yang panas dengan APD sarung tangan kulit.",
    },
    gamePairs: [
      { id: 1, left: "Dry Cabinet (40-50% RH)", right: "Lemari pengatur kelembapan penyimpan kamera dan lensa" },
      { id: 2, left: "APAR CO2", right: "Pemadam api bebas residu aman untuk sirkuit elektronik TV" },
      { id: 3, left: "Sandbag (Pemberat)", right: "Penjaga stabilitas kaki light stand agar tidak roboh" },
      { id: 4, left: "Over-Under Technique", right: "Metode menggulung kabel broadcast agar tidak terpelintir" },
      { id: 5, left: "Safety Wire Baja", right: "Pengaman cadangan gantungan lampu di lighting grid plafon" },
    ],
    caseTitle: "Studi Kasus: Tersandung Kabel Kamera di Area Pintu Masuk Studio",
    caseScenario:
      "Seorang narasumber VIP tersandung kabel kamera SDI tebal yang melintang di depan pintu masuk studio utama hingga terkilir, dan kamera studio seharga puluhan juta rupiah ikut tertarik hingga miring nyaris terjungkal ke lantai.",
    caseInstruction:
      "Tentukan kesalahan fatal yang dilakukan tim teknis lantai! Rancang prosedur manajemen kabel yang seharusnya diterapkan di area pintu masuk tersebut lengkap dengan peralatan pengaman yang wajib dipasang!",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C3",
        stem: "Ketika sebuah kabel video SDI harus melintasi jalur pintu keluar-masuk utama studio televisi, tindakan K3 yang paling tepat adalah...",
        options: [
          { key: "A", text: "Membiarkan kabel tergeletak karena hanya siaran sementara" },
          { key: "B", text: "Memasang pelindung kabel karet (cable bridge / rubber duct) dan merekatkannya erat ke lantai dengan gaffer tape" },
          { key: "C", text: "Menggantung kabel longgar setinggi leher orang" },
          { key: "D", text: "Menutupi kabel dengan selembar kertas koran bekas" },
        ],
        correctKey: "B",
        explanation: "Cable bridge karet kokoh melindungi kabel dari injakan sekaligus memberikan tanjakan landai yang mencegah risiko orang tersandung.",
      },
      {
        id: 2,
        bloom: "C4",
        stem: "Mengapa lemari penyimpan lensa kamera (dry cabinet) harus disetel pada kelembapan 40% – 50% RH?",
        options: [
          { key: "A", text: "Agar baterai kamera otomatis terisi penuh" },
          { key: "B", text: "Mencegah pertumbuhan jamur optik di atas 60% RH dan mencegah karet/pelumas getas di bawah 30% RH" },
          { key: "C", text: "Membuat kaca lensa berubah warna menjadi kebiruan" },
          { key: "D", text: "Mengurangi berat fisik lensa saat dibawa syuting" },
        ],
        correctKey: "B",
        explanation: "Kelembapan optimal 40-50% RH adalah rentang ideal: cukup kering untuk mematikan spora jamur, namun tidak terlalu kering sehingga minyak pelumas dan karet cincin lensa tidak rusak.",
      },
    ],
    lkpd: {
      title: "LKPD E1-K4: Audit K3 Studio & Praktik Budaya 5R di Ruang Alat",
      objective: "Melakukan inspeksi potensi bahaya K3 di studio sekolah dan menerapkan 5R pada ruang penyimpanan alat.",
      tools: ["Checklist K3", "Gaffer Tape", "Sarung Tangan", "Alat Kebersihan Optik"],
      steps: [
        "Lakukan inspeksi visual di studio sekolah untuk mencari 3 potensi bahaya (kabel melintang, stand goyah, stopkontak aus).",
        "Dokumentasikan foto kondisi awal (Before).",
        "Lakukan perbaikan: pasang gaffer tape pada kabel, letakkan sandbag, dan bersihkan debu lemari alat sesuai 5R.",
        "Dokumentasikan foto kondisi akhir (After) dan buat laporan evaluasi keselamatan kerja.",
      ],
      outputFormat: "Laporan Audit K3 dan Bukti Foto 5R format PDF.",
    },
    journalQuestions: {
      q1: "Bahaya keselamatan apa yang paling sering Anda abaikan saat syuting dan bagaimana Anda akan memperbaikinya?",
      q2: "Mengapa kebiasaan 5R mencerminkan integritas dan profesionalitas seorang kru audio visual?",
      q3: "Bagaimana cara Anda menolak perintah sutradara jika perintah tersebut membahayakan keselamatan nyawa kru?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi potensi bahaya kelistrikan, mekanikal, dan ergonomis di set produksi.",
      "Mampu menerapkan prosedur rigging lampu aman dengan safety wire dan sandbag.",
      "Mampu mempraktikkan budaya kerja 5R dalam perawatan dan penyimpanan inventaris alat penyiaran.",
    ],
  },

  // =========================================================================
  // KONTEN 5: Kecakapan Kerja Dasar (Basic Job Skills) & Komunikasi On-Set
  // =========================================================================
  {
    id: "e1-k5",
    order: 5,
    title: "Kecakapan Kerja Dasar (Basic Job Skills) & Komunikasi On-Set",
    shortTitle: "Kecakapan Kerja Dasar",
    summary:
      "Etika on-set, komunikasi radio dua arah (walkie-talkie HT) dengan kode baku industri, manajemen waktu, kolaborasi antarkru, dan ketahanan fisik/mental di lingkungan produksi.",
    kompetensi: [
      "Menerapkan tata krama dan etika profesional saat berada di lokasi syuting dan studio.",
      "Menguasai terminologi dan protokol komunikasi radio HT standar produksi film/TV.",
      "Mengelola stres, emosi, dan kerja sama tim dalam situasi kerja bertekanan tinggi.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu mempraktikkan protokol komunikasi radio walkie-talkie dengan istilah standar broadcast.",
      "Peserta didik mampu menerapkan etika kerja on-set (kerahasiaan produksi, disiplin waktu, rasa hormat).",
      "Peserta didik mampu menunjukkan kemampuan adaptasi dan pemecahan masalah kolaboratif dalam tim produksi.",
    ],
    hookQuestion:
      "Mengapa kru film profesional tidak pernah mengatakan 'Apa?' atau 'Bisa diulang?' saat berbicara di radio HT, melainkan menggunakan kata 'Say Again' atau 'Copy That'?",
    hookContext:
      "Di lokasi syuting dengan ratusan kru dan deru genset, pesan suara yang tidak terstruktur dapat memicu salah paham fatal. Protokol radio dua arah diciptakan untuk memastikan komunikasi secepat kilat dan bebas distorsi arti.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C1",
        stem: "Istilah radio HT standar industri internasional yang digunakan untuk mengonfirmasi bahwa instruksi telah didengar dan dipahami sepenuhnya adalah...",
        options: [
          { key: "A", text: "'Copy That' atau 'Copy'" },
          { key: "B", text: "'Okay Bro'" },
          { key: "C", text: "'Siap Laksanakan Bos'" },
          { key: "D", text: "'Wait a minute'" },
        ],
        correctKey: "A",
        explanation: "'Copy That' atau 'Copy' adalah frasa standar radio komunikasi internasional yang berarti pesan telah diterima dengan jelas dan akan segera dilaksanakan.",
      },
      {
        id: 2,
        bloom: "C2",
        stem: "Ketika Anda berada di lokasi syuting film yang sedang merekam adegan dialog emosional aktor, tindakan etika on-set yang paling tepat adalah...",
        options: [
          { key: "A", text: "Berbicara pelan dengan rekan kru di samping kamera" },
          { key: "B", text: "Mematikan nada dering ponsel (silent total) dan menjaga keheningan mutlak (lock up)" },
          { key: "C", text: "Menyalakan lampu flash HP untuk mengambil foto selfie" },
          { key: "D", text: "Berjalan melintas di belakang aktor" },
        ],
        correctKey: "B",
        explanation: "Keheningan total (Lock Up / Quiet on Set) adalah etika tertinggi di set syuting untuk menghormati konsentrasi aktor dan kejernihan rekaman suara boom mic.",
      },
    ],
    materialCards: [
      {
        title: "Slide 1: Pengantar Kecakapan Kerja Dasar di Dunia Audio Visual",
        content:
          "Industri penyiaran dan film adalah bisnis yang digerakkan oleh manusia. Peralatan secanggih apa pun tidak akan menghasilkan karya gemilang tanpa kru yang memiliki etika kerja tinggi, kecakapan komunikasi, dan ketahanan mental prima.\n\nKecakapan kerja dasar (Basic Job Skills) membedakan antara operator amatir dengan profesional sejati yang selalu dicari oleh para produser.",
        didYouKnow: "Di industri perfilman internasional, seorang kru yang terlambat datang 15 menit tanpa kabar dapat langsung diganti dan masuk daftar hitam (blacklist) rumah produksi.",
      },
      {
        title: "Slide 2: Pilar Utama Karakter Kerja Insan BCF",
        content:
          "Empat pilar karakter kru profesional:\n\n1. Disiplin & Akuntabilitas: Hadir sebelum waktu panggilan (Call Time) dan bertanggung jawab atas alat yang dipegang.\n2. Komunikasi Presisi: Berbicara singkat, padat, dan jelas tanpa bertele-tele.\n3. Respek Hierarki & Kolaborasi: Menghormati arahan sutradara dan kepala departemen (HOD).\n4. Ketahanan Emosi: Tetap tenang dan solutif saat jadwal molor atau terjadi kendala cuaca buruk.",
      },
      {
        title: "Slide 3: Protokol Komunikasi Radio Walkie-Talkie (HT)",
        content:
          "Radio HT adalah urat nadi koordinasi set syuting. Aturan dasar penggunaan:\n\n• Selalu gunakan headset earpiece (surveillance headset) agar suara speaker HT tidak bocor masuk ke rekaman audio syuting.\n• Tekan tombol PTT (Push-To-Talk), tunggu 1 detik, baru mulai berbicara agar kata pertama tidak terpotong.\n• Identifikasi diri dan lawan bicara: '[Nama Anda] to [Nama Tujuan]' (contoh: 'Budi to Sarah').\n• Jawab dengan: 'Go for Sarah' (Sarah mendengarkan).",
      },
      {
        title: "Slide 4: Glosarium Kode Radio Standar Industri Perfilman",
        content:
          "Istilah radio baku yang wajib dikuasai siswa:\n\n• 'Copy / Copy That': Pesan dipahami.\n• 'Say Again': Minta pesan diulang karena sinyal kresek atau kurang jelas.\n• 'Standby': Tunggu sebentar, sedang sibuk, jangan bicara dulu.\n• 'What's your 20?': Di mana lokasi posisi Anda sekarang?\n• 'Flying in': Barang atau alat yang diminta sedang dibawa menuju ke lokasi Anda.\n• '10-1 / 10-100': Kode sopan izin ke toilet sebentar.",
      },
      {
        title: "Slide 5: Manajemen Saluran (Channel) Radio Komunikasi",
        content:
          "Di set produksi besar, saluran radio dibagi per departemen agar tidak tumpang tindih:\n\n• Channel 1: Saluran Terbuka Utama (General Production / 1st AD / Floor Director).\n• Channel 2: Saluran Khusus Departemen Kamera (DoP, AC, DIT).\n• Channel 3: Saluran Khusus Departemen Tata Cahaya & Grip (Gaffer, Best Boy, Grip).\n• Channel 4: Saluran Khusus Tata Suara (Sound Mixer, Boom Op).\n• Channel 5: Saluran Khusus Seni & Artistik (Art Director, Props, Wardrobe).\n• 'Switch to 8': Perintah mengajak berbicara secara pribadi di saluran kosong.",
      },
      {
        title: "Slide 6: Etika On-Set: Disiplin Keheningan (Lock Up / Quiet on Set)",
        content:
          "Ketika 1st AD atau Floor Director meneriakkan 'Quiet on Set!' atau 'Lock Up!':\n\n• Seluruh percakapan kru wajib berhenti seketika.\n• Dilarang menggeser kursi, membuka bungkus plastik makanan, atau batuk.\n• Ponsel wajib dalam mode Silent (bukan vibrate/getar, karena getaran HP di atas meja kayu dapat terekam mic shotgun peka).\n• Berdiri diam di tempat, jangan berjalan melintasi garis pandang aktor.",
      },
      {
        title: "Slide 7: Etika On-Set: Menjaga 'Eyeline' Aktor",
        content:
          "Aturan sakral di dekat kamera:\n\n• Eyeline adalah garis pandang mata aktor menuju lawan mainnya.\n• Kru dilarang berdiri persis di belakang lensa kamera atau di samping matte box saat kamera sedang merekam karena gerakan kru akan mengalihkan fokus emosi aktor.\n• Jika Anda harus berada di dekat kamera, jongkoklah di bawah level lensa dan tundukkan pandangan mata ke lantai.",
      },
      {
        title: "Slide 8: Etika On-Set: Kerahasiaan Materi Produksi (NDA & Anti-Spoiler)",
        content:
          "Non-Disclosure Agreement (NDA) adalah kontrak hukum yang mengikat seluruh kru:\n\n• Dilarang memotret atau merekam video suasana syuting lalu mengunggahnya ke media sosial (Instagram Story/TikTok) sebelum film/program resmi tayang.\n• Membocorkan kostum aktor, alur cerita naskah, atau wajah bintang tamu dapat membuat Anda dituntut ganti rugi miliaran rupiah dan dipecat seketika.",
      },
      {
        title: "Slide 9: Manajemen Waktu: Pemahaman 'Call Time' dan Rundown",
        content:
          "Dalam istilah broadcast:\n\n• 'Call Time' adalah waktu di mana Anda sudah harus tiba, sudah sarapan, dan sudah siap dengan alat di tangan (bukan jam baru tiba di parkiran gerbang studio).\n• 'On Time is Late, 15 Minutes Early is On Time'.\n• Jika Call Time tertulis pukul 06.00 WIB, kru teladan sudah hadir pukul 05.45 WIB untuk memeriksa ulang baterai dan briefing pagi.",
      },
      {
        title: "Slide 10: Ketahanan Fisik & Mental: Pola Hidup Kru Produksi",
        content:
          "Syuting film dan siaran maraton menuntut stamina prima:\n\n• Jam kerja set bisa mencapai 12-14 jam sehari.\n• Jaga hidrasi tubuh dengan minum air putih yang cukup, hindari konsumsi minuman berenergi atau kafein berlebihan yang memicu dehidrasi.\n• Gunakan sepatu yang empuk dan memiliki bantalan sol yang baik (cushioned insole) untuk berdiri berjam-jam.\n• Manfaatkan waktu jeda istirahat makan (Meal Break) untuk benar-benar rileks dan mengistirahatkan mata.",
      },
      {
        title: "Slide 11: Manajemen Konflik & Komunikasi Antarpribadi di Set",
        content:
          "Tensi tinggi dan kelelahan sering kali memicu gesekan emosi antar-divisi:\n\n• Jangan pernah menyerang pribadi rekan kerja; fokuslah pada penyelesaian masalah teknis (Focus on the Problem, Not the Person).\n• Gunakan kalimat konstruktif: 'Kabel ini menghalangi pergerakan kamera, bisakah kita geser 50 cm ke kiri?' daripada 'Siapa yang pasang kabel sembarangan ini?!'.\n• Jika terjadi perselisihan sengit, serahkan mediasi kepada Produser atau 1st AD.",
      },
      {
        title: "Slide 12: Inisiatif & Sikap Tanggap Proaktif (Proactive Mindset)",
        content:
          "Ciri kru yang cepat dipromosikan kariernya:\n\n• Tidak pernah terlihat bermain HP saat jam kerja aktif di set.\n• Selalu mengamati kebutuhan kru senior: ketika melihat kameramen bersiap mengganti lensa, asisten sudah siap memegang tas lensa di dekatnya tanpa perlu disuruh.\n• Menyapu dan membersihkan area set tanpa menunggu ditegur Floor Director.",
      },
      {
        title: "Slide 13: Etika Menghormati Properti & Lokasi Syuting",
        content:
          "Meninggalkan lokasi syuting dalam kondisi lebih baik daripada saat datang:\n\n• Dilarang meletakkan gelas kopi atau botol minum di atas meja set dekorasi atau di atas boks peralatan kamera.\n• Gunakan alas kain (furniture blanket) di bawah kaki tripod agar tidak menggores lantai marmer atau kayu rumah lokasi sewa.\n• Buang puntung rokok dan sampah makanan pada tempat sampah pilah yang disediakan tim logistik.",
      },
      {
        title: "Slide 14: Kesiapan Menghadapi Kejadian Tak Terduga (Contingency Handling)",
        content:
          "Di lapangan, hukum Murphy sering terjadi: 'Jika sesuatu bisa salah, maka ia akan salah'.\n\n• Sikap mental profesional tidak mencari kambing hitam, melainkan langsung berpikir: 'Rencana B apa yang bisa kita eksekusi sekarang?'.\n• Hujan deras mendadak? Segera amankan kamera dengan rain cover dan pindah syuting ke adegan interior sesuai kesepakatan sutradara.",
      },
      {
        title: "Slide 15: Studi Komparasi: Budaya On-Set Film Layar Lebar vs Studio Televisi",
        content:
          "Perbedaan atmosfer kerja:\n\n• Film Layar Lebar: Ritme syuting per-shot, jeda antar-take cukup panjang untuk lighting adjustment, komunikasi didominasi radio HT dan arahan 1st AD.\n• Studio Live TV: Ritme hitungan detik nonstop, dipandu Floor Director dengan isyarat tangan dan interkom kabel PCR, tidak ada kata 'Cut' atau take ulang jika ada kesalahan.",
      },
      {
        title: "Slide 16: Troubleshooting Komunikasi: Mengatasi Radio HT yang Ramai / Semrawut",
        content:
          "Jika satu saluran radio penuh dengan orang yang saling menimpa pembicaraan:\n\n1. 1st AD mengambil alih komando dengan menyerukan: 'Clear the channel! Urgent traffic only!'.\n2. Seluruh kru wajib menahan tombol PTT dan hening seketika.\n3. Berikan ruang bagi informasi darurat (misal: ambulans, baterai kamera habis, atau sutradara memanggil aktor utama).\n4. Pisahkan pembicaraan logistik ke channel sekunder.",
      },
      {
        title: "Slide 17: Studi Kasus Riil: Nada Dering Ponsel Masuk ke Rekaman Master Dialog",
        content:
          "Pada sebuah syuting film drama pemenang festival, suara getar ponsel di atas meja kayu terdengar jelas saat aktor sedang menangis membacakan surat wasiat.\n\nFakta Insiden:\nSeorang kru magang lupa mematikan getar ponselnya. Adegan magis tersebut terpaksa di-retake, namun sang aktor sudah kehilangan emosi puncaknya dan adegan harus ditunda keesokan harinya dengan tambahan biaya sewa lokasi dan lampu senilai Rp 15 juta.",
      },
      {
        title: "Slide 18: Analisis Kepatuhan & Disiplin Kru di Set",
        content:
          "Refleksi dari insiden ponsel:\n\n1. 'Airplane Mode' atau Matikan Daya Total: Di set produksi profesional, seluruh kru wajib mematikan daya ponsel atau menyerahkannya ke kotak penitipan sebelum memasuki studio.\n2. Kesadaran Kolektif: Menyadari bahwa satu kecerobohan kecil dapat merusak kerja keras puluhan rekan kru lainnya.",
      },
      {
        title: "Slide 19: Adaptasi Budaya Kerja Digital & Kolaborasi Jarak Jauh",
        content:
          "Etika kerja di era hybrid production:\n\n• Komunikasi via WhatsApp Group Produksi: Gunakan bahasa sopan, hindari mengirim pesan larut malam kecuali darurat siaran, dan selalu konfirmasi receipt pesan dengan kata 'Noted / Siap'.\n• Etika Meeting Online (Zoom/Meet): Nyalakan kamera, mute mic saat orang lain presentasi, dan siapkan catatan naskah.",
      },
      {
        title: "Slide 20: Rangkuman & Action Plan Sikap Kerja Siswa BCF",
        content:
          "Poin Kunci Pembelajaran:\n1. Keahlian teknis membawa Anda ke pintu gerbang industri; sikap dan etika kerja yang membuat Anda bertahan di dalamnya.\n2. Komunikasi radio HT yang ringkas dan kepatuhan 'Quiet on Set' adalah identitas kru profesional.\n3. Jadilah rekan kerja yang andal, proaktif, dan membawa energi positif bagi tim.\n\nAction Plan:\nPraktikkan simulasi komunikasi radio HT dan etika on-set bersama kelompok kelas pada lembar LKPD E1-K5!",
      },
    ],
    video: {
      title: "Etika Kerja dan Komunikasi Radio (Walkie-Talkie) Kru Film Profesional",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      guide:
        "Perhatikan istilah-istilah sandi radio yang diucapkan kru, seperti 'Copy', 'What is your 20', dan 'Flying In'. Amati bagaimana kru menjaga keheningan total saat tanda lampu merah tanda recording dinyalakan.",
    },
    gamePairs: [
      { id: 1, left: "Copy That", right: "Pesan telah diterima dengan jelas dan dipahami" },
      { id: 2, left: "What's your 20?", right: "Menanyakan lokasi posisi Anda sekarang" },
      { id: 3, left: "Flying In", right: "Barang atau alat yang diminta sedang dibawa menuju lokasi Anda" },
      { id: 4, left: "Quiet on Set!", right: "Perintah keheningan mutlak sebelum perekaman dimulai" },
      { id: 5, left: "NDA", right: "Perjanjian hukum menjaga kerahasiaan materi produksi dari publik" },
    ],
    caseTitle: "Studi Kasus: Perselisihan Antara Penata Kamera dan Penata Suara di Lokasi",
    caseScenario:
      "Penata kamera mengeluhkan mic boom sound recordist sering masuk sedikit ke bagian atas frame gambar, sementara boom operator beralasan aktor berbicara sangat pelan sehingga mic harus sedekat mungkin dengan bibir aktor. Situasi memanas dan syuting terhenti 20 menit.",
    caseInstruction:
      "Sebagai 1st Assistant Director (Astrada) yang memimpin operasional set, langkah mediasi komunikasi apa yang Anda ambil untuk mendamaikan kedua belah pihak dan solusi teknis kompromi apa yang bisa diterapkan?",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Ketika seseorang di radio HT mengatakan 'Sarah, what is your 20?', arti dari pertanyaan tersebut adalah...",
        options: [
          { key: "A", text: "Menanyakan berapa usia Sarah" },
          { key: "B", text: "Menanyakan di mana posisi lokasi Sarah berada saat ini" },
          { key: "C", text: "Menanyakan apakah Sarah punya uang Rp 20.000" },
          { key: "D", text: "Menanyakan nomor urut kamera Sarah" },
        ],
        correctKey: "B",
        explanation: "'10-20' atau disingkat 'Your 20' adalah sandi baku radio komunikasi dua arah yang menanyakan posisi koordinat lokasi seseorang.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Mengapa seluruh kru produksi film dilarang keras mengunggah foto selfie bersama aktor berkostum ke status media sosial sebelum film rilis?",
        options: [
          { key: "A", text: "Kamera HP kru tidak memiliki sensor yang bagus" },
          { key: "B", text: "Melanggar perjanjian kerahasiaan (NDA) dan dapat merusak strategi promosi serta membocorkan alur cerita (spoiler)" },
          { key: "C", text: "Foto di HP menghabiskan baterai lampu studio" },
          { key: "D", text: "Membuat aktor menjadi malu" },
        ],
        correctKey: "B",
        explanation: "NDA mengikat seluruh kru secara hukum untuk tidak membocorkan desain karakter, properti, atau alur cerita sebelum waktu rilis resmi promosi produser.",
      },
    ],
    lkpd: {
      title: "LKPD E1-K5: Simulasi Protokol Komunikasi Radio Walkie-Talkie On-Set",
      objective: "Mempraktikkan komunikasi radio dua arah (HT) menggunakan sandi dan etika standar industri perfilman.",
      tools: ["2 Unit Radio HT / Walkie-Talkie Smartphone App", "Skenario Kasus Lapangan"],
      steps: [
        "Bagi kelompok menjadi: Sutradara, 1st AD, DoP, Gaffer, dan Sound Mixer di ruangan terpisah.",
        "Simulasikan 5 instruksi darurat: meminta baterai cadangan ('flying in'), menanyakan posisi kru ('your 20'), meminta saluran pribadi ('switch to ch 8'), dan perintah keheningan ('lock up').",
        "Catat ketepatan waktu transmisi dan kejelasan pelafalan tanpa ada kata yang terpotong.",
        "Evaluasi efektivitas komunikasi dan buat rangkuman etika berbicara di radio.",
      ],
      outputFormat: "Rekaman log komunikasi radio dan Lembar Refleksi Kerja Tim format PDF.",
    },
    journalQuestions: {
      q1: "Mengapa kemampuan mendengarkan sama pentingnya dengan kemampuan berbicara saat berkomunikasi di lokasi syuting?",
      q2: "Bagaimana Anda mengendalikan rasa panik atau frustrasi saat terjadi kesalahan teknis di hadapan banyak orang?",
      q3: "Komitmen apa yang akan Anda pegang teguh terkait etika kerahasiaan (NDA) pada proyek karya sekolah?",
    },
    kktpIndicators: [
      "Mampu menggunakan terminologi komunikasi radio HT standar industri audio visual secara tepat.",
      "Mampu menerapkan etika disiplin on-set, manajemen waktu, dan kepatuhan NDA.",
      "Mampu mempraktikkan keterampilan resolusi konflik dan kerja sama tim di lingkungan produksi.",
    ],
  },

  // =========================================================================
  // KONTEN 6: Technopreneur dan Peluang Usaha di Bidang BCF
  // =========================================================================
  {
    id: "e1-k6",
    order: 6,
    title: "Technopreneur dan Peluang Usaha di Bidang BCF",
    shortTitle: "Peluang Usaha BCF",
    summary:
      "Model bisnis production house, jasa live streaming multi-kamera, rental peralatan, content creator hub, podcast production studio, dan strategi monetisasi platform digital.",
    kompetensi: [
      "Menganalisis peluang usaha berbasis teknologi (technopreneurship) di bidang broadcasting dan multimedia.",
      "Merancang model bisnis jasa produksi video dan penyiaran online yang layak pasar.",
      "Menghitung kalkulasi biaya sewa alat, honor kru, dan struktur penentuan harga jasa (pricing strategy).",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu mengidentifikasi minimal 5 model bisnis technopreneur audio visual di era digital.",
      "Peserta didik mampu menyusun Business Model Canvas (BMC) untuk rintisan usaha jasa multimedia.",
      "Peserta didik mampu menghitung Break Even Point (BEP) dan Return on Investment (ROI) investasi peralatan kamera.",
    ],
    hookQuestion:
      "Tahukah Anda bahwa jasa live streaming wisuda sekolah atau pernikahan adat modern dengan sistem 3 kamera bisa menghasilkan pendapatan Rp 5 juta hingga Rp 15 juta hanya dalam waktu 4 jam kerja?",
    hookContext:
      "Lulusan SMK BCF tidak hanya dididik untuk menjadi buruh atau pencari kerja, melainkan memiliki keterampilan teknis bernilai tinggi untuk menjadi wirausahawan mandiri (technopreneur) yang membuka lapangan kerja bagi sesamanya.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C1",
        stem: "Wirausahawan yang memanfaatkan inovasi teknologi digital sebagai basis utama pengembangan produk atau layanannya disebut...",
        options: [
          { key: "A", text: "Technopreneur" },
          { key: "B", text: "Reseller manual" },
          { key: "C", text: "Staf administrasi" },
          { key: "D", text: "Operator pabrik" },
        ],
        correctKey: "A",
        explanation: "Technopreneur adalah wirausahawan yang mengombinasikan keahlian teknologi dengan kecakapan bisnis untuk menciptakan nilai tambah ekonomi.",
      },
      {
        id: 2,
        bloom: "C2",
        stem: "Dalam bisnis jasa rental peralatan kamera, dokumen hukum penting yang wajib ditandatangani penyewa untuk melindungi alat dari pencurian atau kerusakan adalah...",
        options: [
          { key: "A", text: "Surat Izin Mengemudi (SIM)" },
          { key: "B", text: "Surat Perjanjian Sewa Menyewa (MOU / Rental Agreement) disertai jaminan identitas asli" },
          { key: "C", text: "Kartu Keluarga fotokopi buram" },
          { key: "D", text: "Kuitansi kosong bertanda tangan" },
        ],
        correctKey: "B",
        explanation: "Rental Agreement resmi yang memuat klausul ganti rugi, jangka waktu sewa, dan penahanan identitas asli legal adalah perlindungan utama aset usaha rental kamera.",
      },
    ],
    materialCards: [
      {
        title: "Slide 1: Pengantar Technopreneurship di Industri Kreatif",
        content:
          "Technopreneurship di bidang BCF adalah integrasi antara penguasaan seni audio visual, teknologi penyiaran digital, dan kecakapan membaca kebutuhan pasar.\n\nPerkembangan internet pita lebar dan media sosial telah mendemokratisasi produksi media: kini kelompok kecil lulusan SMK dapat memiliki studio siaran dengan kualitas gambar setara stasiun TV kabel berkat kemajuan software encoder dan kamera digital terjangkau.",
        didYouKnow: "Banyak rumah produksi dan agensi periklanan digital papan atas Indonesia berawal dari garasi rumah dengan modal 1 kamera DSLR dan 1 laptop editing.",
      },
      {
        title: "Slide 2: Lanskap Peluang Usaha Sektor BCF di Era Sekarang",
        content:
          "Enam model bisnis yang paling diminati dan berprofit tinggi:\n\n1. Jasa Multi-Camera Live Streaming (Wisuda, Konser, Olahraga, Webinar, Pernikahan).\n2. Production House Komersial (Video Profil Perusahaan / Company Profile, Iklan TVC / Digital Ads).\n3. Jasa Rental Peralatan Kamera, Lighting, dan Audio.\n4. Studio Podcast Video & Content Creator Hub.\n5. Agensi Manajemen Media Sosial & Pembuatan Konten Pendek (Reels/TikTok/Shorts).\n6. Jasa Pascaproduksi Khusus (Color Grading, Sound Design, 3D Animation).",
      },
      {
        title: "Slide 3: Analisis Usaha 1: Jasa Live Streaming Multi-Kamera",
        content:
          "Kebutuhan pasar yang sangat masif di era pascapandemi:\n\n• Target Pasar: Sekolah, universitas, instansi pemerintah, korporasi, wedding organizer.\n• Modal Alat Kunci: Laptop spek gaming/GPU dedicated, software vMix/OBS, 2-3 kamera HDMI/SDI, capture card multi-input, kabel SDI roll, dan modem internet bonding.\n• Struktur Harga: Paket 2 Kamera (Rp 3-5 juta), Paket 3 Kamera + Jimmy Jib (Rp 8-15 juta per acara).",
      },
      {
        title: "Slide 4: Analisis Usaha 2: Video Company Profile & Komersial",
        content:
          "Layanan bernilai tambah tinggi bagi pelaku bisnis:\n\n• Sasaran Klien: Perusahaan manufaktur, hotel, rumah sakit, UMKM yang ingin ekspor.\n• Nilai Jual: Bukan sekadar merekam gambar pabrik, melainkan merancang narasi storytelling yang meningkatkan citra dan penjualan klien.\n• Margin Keuntungan: Berkisar antara 40% – 60% dari total nilai kontrak proyek.",
      },
      {
        title: "Slide 5: Analisis Usaha 3: Rental Peralatan Kamera & Studio",
        content:
          "Bisnis passive income padat modal:\n\n• Strategi Investasi: Membeli alat yang perputarannya cepat (Sony FX3/A7IV, lensa zoom 24-70mm f/2.8, lampu Nanlite/Aputure 300W, mic wireless DJI/Rode).\n• Sistem Kontrol Risiko: Wajib verifikasi KTP/KK asli, surat domisili, dan menyertakan kru pendamping (equipment assistant / runner rental) untuk syuting outdoor berisiko tinggi.",
      },
      {
        title: "Slide 6: Analisis Usaha 4: Studio Podcast Audio Visual Terintegrasi",
        content:
          "Tren konten obrolan edukatif dan hiburan:\n\n• Konsep Studio: Ruangan kedap suara (soundproof) akustik estetik, 3 mic Shure SM7B, 3 kamera sudut tetap (switching otomatis), lampu mood neon/RGB.\n• Model Tarif: Sewa per jam (Rp 250.000 – Rp 600.000 / jam) include operator teknis dan serah terima file footage mentah atau video teredit.",
      },
      {
        title: "Slide 7: Analisis Usaha 5: Short-Form Video Agency (TikTok/Reels)",
        content:
          "Peluang bisnis paling cepat berkembang saat ini:\n\n• Masalah Klien: Banyak pemilik toko, klinik kecantikan, dan restoran tidak punya waktu membuat konten video vertikal harian.\n• Layanan Agensi: Paket langganan bulanan (Retainer Model), misal: Rp 5 juta/bulan untuk 15 video pendek siap tayang lengkap dengan ide naskah dan riset audio tren.",
      },
      {
        title: "Slide 8: Merancang Business Model Canvas (BMC) Jasa BCF",
        content:
          "Sembilan blok bangunan bisnis untuk memetakan ide usaha:\n\n1. Customer Segments (Siapa pembeli Anda?)\n2. Value Propositions (Apa keunikan solusi Anda dibanding kompetitor?)\n3. Channels (Bagaimana klien menemukan Anda? Instagram, Web, Relasi)\n4. Customer Relationships (Bagaimana menjaga kepuasan klien? Garansi revisi, tepat waktu)\n5. Revenue Streams (Dari mana uang masuk? Jasa liputan, sewa alat)\n6. Key Resources, Key Activities, Key Partnerships, Cost Structure.",
      },
      {
        title: "Slide 9: Strategi Penentuan Harga Jasa (Pricing Strategy)",
        content:
          "Cara menghitung tarif jasa produksi agar tidak boncos (rugi):\n\n• Rumus Biaya Total = Biaya Langsung (Honor Kru + Sewa Alat + Transportasi + Konsumsi) + Biaya Tidak Langsung (Penyusutan Alat / Depresiasi + Listrik + Kuota Internet) + Margin Keuntungan (Profit 30-50%).\n• Hindari perang harga murah (race to the bottom); bersainglah pada kualitas estetika, keandalan teknis, dan ketepatan janji waktu delivery.",
      },
      {
        title: "Slide 10: Kalkulasi Finansial: Menghitung BEP dan Depresiasi Alat",
        content:
          "Rumus Kelayakan Investasi Peralatan:\n\n• Pembelian Kamera + Lensa = Rp 30.000.000.\n• Masa Pakai Ekonomis: 3 tahun (36 bulan).\n• Tarif Sewa Rata-rata: Rp 350.000 / hari.\n• Break Even Point (BEP): Rp 30.000.000 / Rp 350.000 = 86 hari sewa.\n• Jika dalam sebulan kamera disewa 8 hari, investasi impas dalam waktu kurang dari 11 bulan. Sisa 25 bulan berikutnya adalah keuntungan murni.",
      },
      {
        title: "Slide 11: Aspek Legalitas & Administrasi Usaha",
        content:
          "Membangun bisnis resmi yang dipercaya korporasi dan pemerintah:\n\n• Pembuatan Nomor Induk Berusaha (NIB) berbasis risiko via sistem OSS (Online Single Submission) pemerintah.\n• Pendirian PT Perorangan (khusus untuk usaha mikro dan kecil) dengan modal terjangkau.\n• Pembukaan Rekening Bank atas nama perusahaan resmi untuk mempermudah transaksi penagihan (Invoice) dan faktur pajak.",
      },
      {
        title: "Slide 12: Manajemen Kontrak Kerja & Surat Perjanjian (SPK)",
        content:
          "Jangan pernah memulai produksi tanpa perjanjian tertulis:\n\n• Surat Perintah Kerja (SPK) / Kontrak Produksi wajib merinci:\n  - Lingkup Kerja (Scope of Work): Jumlah video, durasi, format resolusi.\n  - Batasan Revisi: Maksimal 2 kali revisi minor naskah/editing.\n  - Termin Pembayaran: DP 50% di awal (sebelum pra-produksi), 30% setelah syuting (rough cut), 20% pelunasan saat penyerahan master video akhir.",
      },
      {
        title: "Slide 13: Pemasaran Digital & Branding Portofolio Bisnis",
        content:
          "Mendapatkan klien tanpa harus mengetuk pintu kantor satu per satu:\n\n• Buat akun Instagram dan TikTok khusus agensi/PH dengan konten 'Behind The Scenes' (BTS) syuting yang menunjukkan peralatan profesional Anda.\n• Unggah video before-after color grading atau cuplikan testimonial klien puas.\n• Daftarkan lokasi studio Anda di Google Maps (Google Business Profile) agar mudah dicari klien lokal.",
      },
      {
        title: "Slide 14: Pengelolaan Arus Kas (Cash Flow) & Dana Darurat Usaha",
        content:
          "Alasan utama bangkrutnya rumah produksi pemula adalah kesalahan arus kas:\n\n• Klien korporasi sering kali mencairkan pembayaran termin 30 hingga 60 hari setelah video diserahkan (Term of Payment / TOP).\n• Pengusaha harus memiliki modal kerja cadangan (working capital) untuk membayar honor kru lepas dan konsumsi harian di muka tanpa menunggu pencairan invoice klien.",
      },
      {
        title: "Slide 15: Studi Komparasi: Technopreneur Solo (Solopreneur) vs Tim Kemitraan",
        content:
          "Pilihan model rintisan:\n\n• Solopreneur (Video Freelancer Mandiri): Beban biaya operasional minim, keputusan cepat di tangan sendiri, namun kapasitas proyek terbatas dan mudah kewalahan jika jatuh sakit.\n• Tim Kemitraan (Co-Founders 3-4 Orang): Menggabungkan keahlian (1 orang produser/sales, 1 orang DoP, 1 orang editor/animator), kapasitas garap proyek besar, namun membutuhkan keselarasan visi dan pembagian profit yang adil transparan.",
      },
      {
        title: "Slide 16: Troubleshooting Bisnis: Menghadapi Klien 'Scope Creep' (Revisi Tanpa Batas)",
        content:
          "Kendala umum: Klien meminta perubahan konsep naskah total saat video sudah selesai diedit tanpa mau menambah biaya.\n\nSolusi Kontraktual:\n1. Tunjukkan dokumen persetujuan naskah (Script Approval Sign-off) tahap pra-produksi yang sudah ditandatangani klien.\n2. Sampaikan dengan santun: 'Perubahan di luar naskah yang disetujui akan kami layani dengan penambahan biaya adendum produksi senilai Rp X.'",
      },
      {
        title: "Slide 17: Studi Kasus Riil: Sukses Rintisan Jasa Streaming Kelulusan Sekolah",
        content:
          "Kisah sukses 3 alumnus SMK jurusan BCF yang patungan modal membeli 1 PC encoder dan 2 video capture card:\n\nMereka menawarkan paket siaran langsung wisuda ke 12 sekolah SMP dan SMA di kotanya saat pandemi. Dalam satu musim kelulusan (2 bulan), mereka berhasil membukukan omzet Rp 60 juta, melunasi seluruh modal alat, dan kini memiliki studio rental sendiri.",
      },
      {
        title: "Slide 18: Analisis Kunci Keberhasilan Bisnis Jasa Streaming",
        content:
          "Faktor keunggulan mereka:\n\n1. Solusi Tepat Sasaran: Menyelesaikan masalah orang tua murid yang tidak bisa hadir langsung ke aula sekolah.\n2. Keandalan Teknis: Menggunakan koneksi internet ganda (multi-SIM bonding) sehingga siaran di YouTube tidak pernah buffering.\n3. Grafis Siaran Menarik: Menampilkan nama wisudawan dan foto profil di layar secara otomatis.",
      },
      {
        title: "Slide 19: Inovasi Model Bisnis: Monetisasi IP (Intellectual Property)",
        content:
          "Masa depan bisnis audio visual tidak hanya menjual jasa (service), tetapi menciptakan Kekayaan Intelektual (IP):\n\n• Memproduksi serial web drama sendiri yang dimonetisasi via revenue-share OTT.\n• Menjual footage video stok ke platform internasional (Shutterstock, Pond5, Adobe Stock) dalam mata uang Dollar.\n• Membuka kursus workshop pelatihan video editing berbayar untuk masyarakat umum.",
      },
      {
        title: "Slide 20: Rangkuman & Action Plan Rintisan Usaha Siswa",
        content:
          "Poin Kunci Pembelajaran:\n1. Keahlian BCF memiliki potensi ekonomi yang sangat luas di berbagai sektor industri.\n2. Business Model Canvas dan manajemen kontrak kerja adalah perlindungan utama wirausahawan muda.\n3. Mulailah dari proyek skala kecil di lingkungan terdekat (sekolah, keluarga, UMKM sekitar).\n\nAction Plan:\nSusun Business Model Canvas (BMC) untuk rintisan usaha jasa multimedia kelompok Anda pada LKPD E1-K6!",
      },
    ],
    video: {
      title: "Membangun Bisnis Rumah Produksi Independen dari Nol hingga Menghasilkan",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      guide:
        "Perhatikan penjelasan pendiri rumah produksi mengenai cara mencari klien pertama, perhitungan harga jasa agar tidak merugi, dan strategi menyewa alat daripada langsung membeli di awal rintisan usaha.",
    },
    gamePairs: [
      { id: 1, left: "Technopreneur", right: "Wirausahawan berbasis inovasi teknologi digital" },
      { id: 2, left: "Business Model Canvas", right: "Bagan 9 elemen rencana strategi bisnis visual" },
      { id: 3, left: "Scope Creep", right: "Permintaan penambahan kerjaan di luar perjanjian awal kontrak" },
      { id: 4, left: "Break Even Point (BEP)", right: "Titik impas saat total pendapatan menyamai modal investasi" },
      { id: 5, left: "Termin Pembayaran", right: "Jadwal pencairan uang kontrak bertahap (DP, Mid, Final)" },
    ],
    caseTitle: "Studi Kasus: Menyusun Penawaran Proposal Jasa Live Streaming Wisuda",
    caseScenario:
      "Sebuah sekolah swasta membuka lelang pengadaan jasa siaran langsung wisuda akbar dengan durasi 4 jam untuk 300 siswa. Panitia meminta penawaran paket 3 kamera, grafis nama wisudawan di layar, dan link YouTube privat.",
    caseInstruction:
      "Susunlah rincian anggaran biaya (RAB) penawaran jasa tersebut: berapa perkiraan biaya operasional (kru, konsumsi, internet), biaya sewa/penyusutan alat, dan tentukan harga jual akhir paket yang kompetitif namun menguntungkan!",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Mengapa seorang pengusaha jasa produksi video disarankan menerapkan sistem pembayaran uang muka (Down Payment / DP) minimal 30% - 50% sebelum memulai syuting?",
        options: [
          { key: "A", text: "Untuk membeli mobil baru bagi pemilik usaha" },
          { key: "B", text: "Mengamankan komitmen klien dan mendanai biaya operasional awal (sewa alat, transportasi, konsumsi kru) tanpa berutang" },
          { key: "C", text: "Karena bank mewajibkan pembayaran DP" },
          { key: "D", text: "Agar kru tidak perlu bekerja giat lagi" },
        ],
        correctKey: "B",
        explanation: "Uang muka (DP) menjamin komitmen klien agar tidak membatalkan proyek secara sepihak sekaligus menjadi modal likuiditas untuk membiayai operasional pra-produksi.",
      },
      {
        id: 2,
        bloom: "C4",
        stem: "Jika sebuah tim siswa membeli satu set audio wireless seharga Rp 6.000.000 dan berniat menyewakannya seharga Rp 150.000 per hari, berapa hari sewa yang dibutuhkan hingga mencapai titik impas (Break Even Point)?",
        options: [
          { key: "A", text: "20 hari" },
          { key: "B", text: "40 hari" },
          { key: "C", text: "60 hari" },
          { key: "D", text: "100 hari" },
        ],
        correctKey: "B",
        explanation: "BEP = Total Biaya Investasi / Pendapatan per Satuan Sewa = Rp 6.000.000 / Rp 150.000 = 40 hari sewa.",
      },
    ],
    lkpd: {
      title: "LKPD E1-K6: Perancangan Business Model Canvas (BMC) Jasa Multimedia",
      objective: "Merancang peta model bisnis 9 elemen untuk unit usaha rintisan di bidang broadcasting/perfilman.",
      tools: ["Template Business Model Canvas", "Sticky Notes / Aplikasi Digital Whiteboard"],
      steps: [
        "Tentukan nama rintisan usaha dan jenis layanan utama (misal: 'Jasa Live Streaming Event' atau 'Studio Podcast Keliling').",
        "Isi 9 blok BMC: Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partners, Cost Structure.",
        "Hitung simulasi estimasi modal awal dan harga jual paket jasa.",
        "Presentasikan rencana bisnis di depan guru dan teman sekelas yang berperan sebagai calon investor.",
      ],
      outputFormat: "Poster Business Model Canvas dan Lembar Analisis Finansial format PDF.",
    },
    journalQuestions: {
      q1: "Layanan jasa audio visual apa yang menurut Anda paling berpeluang besar untuk Anda kembangkan di daerah tempat tinggal Anda?",
      q2: "Karakter kepribadian wirausahawan apa yang paling perlu Anda asah agar dipercaya oleh calon klien?",
      q3: "Bagaimana strategi Anda menjaga hubungan baik dengan klien agar mereka terus menggunakan jasa Anda (repeat order)?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi peluang usaha berbasis teknologi (technopreneurship) di sektor audio visual.",
      "Mampu menyusun rancangan Business Model Canvas (BMC) untuk unit usaha multimedia secara runtut.",
      "Mampu menghitung estimasi biaya operasional, harga jual jasa, dan titik impas investasi (BEP).",
    ],
  },

  // =========================================================================
  // KONTEN 7: Potensi Budaya & Kearifan Lokal sebagai Ide Produksi Audio Visual
  // =========================================================================
  {
    id: "e1-k7",
    order: 7,
    title: "Potensi Budaya & Kearifan Lokal sebagai Ide Produksi Audio Visual",
    shortTitle: "Budaya & Kearifan Lokal",
    summary:
      "Metodologi riset etnografi, etika peliputan ritual adat, dokumenter warisan budaya nusantara, transformasi folklor ke drama, dan hak kekayaan intelektual masyarakat adat.",
    kompetensi: [
      "Mengidentifikasi kekayaan tradisi, kesenian, dan kearifan lokal sebagai sumber ide kreatif film/program TV.",
      "Menerapkan etika perizinan dan penghormatan adat istiadat saat syuting di wilayah komunitas lokal.",
      "Merancang konsep dokumenter atau drama berbasis kearifan lokal bernilai universal.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu memetakan potensi budaya daerah setempat yang layak diangkat menjadi karya audio visual.",
      "Peserta didik mampu menyusun panduan etika peliputan adat dan perizinan tokoh masyarakat (Informed Consent).",
      "Peserta didik mampu merancang proposal ide film dokumenter kearifan lokal berstandar festival.",
    ],
    hookQuestion:
      "Mengapa film-film peraih penghargaan Oscar dan festival internasional dari Asia sering kali mengangkat tradisi lokal yang sangat spesifik dan kental dengan nilai kedaerahan?",
    hookContext:
      "Dalam dunia sinema berlaku kaidah: 'The most personal and local is the most universal'. Semakin jujur dan mendalam kita mengangkat kearifan lokal tempat kita berpijak, semakin kuat daya pikatnya bagi penonton di seluruh penjuru dunia.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C1",
        stem: "Persetujuan sukarela tertulis atau terekam dari narasumber adat setelah mereka memahami tujuan pembuatan film dokumenter disebut...",
        options: [
          { key: "A", text: "Informed Consent" },
          { key: "B", text: "Hak Veto" },
          { key: "C", text: "Faktur Pajak" },
          { key: "D", text: "Kartu Kuning" },
        ],
        correctKey: "A",
        explanation: "Informed Consent adalah persetujuan etis berbasis informasi lengkap yang diberikan narasumber sebelum mereka diwawancarai atau direkam dalam film dokumenter.",
      },
      {
        id: 2,
        bloom: "C2",
        stem: "Sikap etis yang wajib dilakukan juru kamera saat meliput upacara pemakaman atau ritual suci masyarakat adat adalah...",
        options: [
          { key: "A", text: "Menyalakan lampu sorot terang di depan wajah pemangku adat tanpa izin" },
          { key: "B", text: "Menaati aturan adat setempat (misal: pakaian adat pantangan, area terlarang kamera) dan menjaga kesakralan prosesi" },
          { key: "C", text: "Menyuruh pemangku adat mengulang doa ritual agar angle kamera lebih dramatis" },
          { key: "D", text: "Memanjat altar suci untuk mendapatkan bird-eye view" },
        ],
        correctKey: "B",
        explanation: "Kru dokumenter wajib menghormati norma sakral komunitas adat dan tidak boleh mengintervensi atau mengubah jalannya ritual demi kepentingan visual.",
      },
    ],
    materialCards: [
      {
        title: "Slide 1: Kekayaan Budaya Nusantara sebagai Tambang Emas Ide",
        content:
          "Indonesia memiliki lebih dari 1.300 suku bangsa, ribuan ragam bahasa daerah, upacara adat, mitologi rakyat, dan filosofi hidup luhur.\n\nKearifan lokal bukan sekadar peninggalan masa lalu, melainkan 'tambang emas' ide cerita yang tak pernah habis bagi insan broadcasting dan perfilman untuk menghasilkan karya orisinal yang memiliki identitas kebangsaan kuat di kancah global.",
        didYouKnow: "Dokumenter tentang tradisi megalitikum di Nias dan upacara Rambu Solo di Toraja menjadi salah satu tontonan paling dicari di kanal National Geographic dan festival film dunia.",
      },
      {
        title: "Slide 2: Definisi & Dimensi Kearifan Lokal (Local Wisdom)",
        content:
          "Kearifan lokal adalah pandangan hidup dan pengetahuan lokal yang tercipta dari adaptasi masyarakat terhadap lingkungannya secara turun-temurun.\n\nDimensi Kearifan Lokal dalam Produksi Media:\n• Nilai Ekologis: Cara masyarakat adat menjaga hutan (misal: Hutan Larangan, sistem Subak Bali).\n• Nilai Sosial: Tradisi gotong royong, musyawarah mufakat, upacara daur hidup manusia.\n• Seni Tradisi: Musik instrumen bambu, tarian sakral, arsitektur rumah adat tahan gempa.",
      },
      {
        title: "Slide 3: Tiga Format Tayangan Berbasis Budaya",
        content:
          "Bagaimana mentransformasikan kearifan lokal ke layar kaca:\n\n1. Film Dokumenter Observasional: Merekam kehidupan nyata tetua adat tanpa skenario rekayasa.\n2. Serial Drama Televisi / FTV: Mengadaptasi legenda rakyat (folklor) dengan setting masa kini yang relevan dengan remaja.\n3. Program Magazine / Feature TV: Liputan kuliner tradisional, kerajinan tangan langka, dan destinasi wisata budaya.",
      },
      {
        title: "Slide 4: Metode Riset Lapangan (Etnografi Audio Visual)",
        content:
          "Tahapan riset sebelum membawa kamera ke lokasi adat:\n\n• Studi Pustaka: Membaca buku antropologi, artikel ilmiah, dan arsip sejarah daerah terkait.\n• Riset Partisipatoris: Tinggal sementara bersama warga (live-in) untuk memahami ritme keseharian tanpa membawa kamera terlebih dahulu.\n• Wawancara Mendalam (In-Depth Interview): Berdialog santai dengan tetua adat, tokoh pemuda, dan perempuan pengrajin.",
      },
      {
        title: "Slide 5: Etika Peliputan Adat: Prinsip 'Sowan' & Restu Tetua",
        content:
          "Langkah wajib etika peliputan kearifan lokal:\n\n• Sowan: Mengunjungi kepala adat (pemangku adat / kepala suku) untuk memperkenalkan diri dan memohon izin secara resmi sesuai tata krama lokal.\n• Membawa Buah Tangan / Seserahan: Menghargai adat setempat (misal: sirih pinang atau cinderamata daerah asal kru).\n• Menjelaskan Maksud & Tujuan: Menegaskan bahwa film dibuat untuk edukasi pelestarian budaya, bukan untuk komersialisasi murahan yang mengeksploitasi kemiskinan.",
      },
      {
        title: "Slide 6: Lembar Persetujuan Informasi (Informed Consent)",
        content:
          "Legalitas etis narasumber budaya:\n\n• Setiap orang yang wajah dan suaranya terekam dalam dokumenter wajib menandatangani lembar Informed Consent (atau persetujuan lisan terekam video jika narasumber buta huruf).\n• Menjelaskan hak narasumber: mereka berhak menolak menjawab pertanyaan tabu atau meminta wajahnya disamarkan jika menyangkut rahasia ritual tertentu.",
      },
      {
        title: "Slide 7: Menghindari Eksploitasi & Eksotisme Murahan (Poverty Porn)",
        content:
          "Bahaya bias pembuat film luar daerah:\n\n• Jangan menggambarkan masyarakat desa sebagai komunitas terbelakang, miskin, atau aneh hanya demi memicu rasa iba penonton kota (Poverty Porn).\n• Angkatlah martabat (dignity), kecerdasan ekologis, dan ketahanan hidup mereka dengan penuh rasa hormat dan kesetaraan.",
      },
      {
        title: "Slide 8: Pemilihan Alat Syuting Ramah Komunitas (Low Profile Gear)",
        content:
          "Mengapa kru dokumenter tidak boleh membawa rig kamera raksasa yang mengintimidasi warga:\n\n• Gunakan kamera berukuran kecil (mirrorless) dengan lensa prime ringkas agar narasumber tidak merasa seperti 'diadili' oleh lensa raksasa.\n• Hindari menyalakan lampu sorot yang menyilaukan; manfaatkan cahaya alami jendela (available natural light).\n• Gunakan audio recorder saku dengan mic lavalier nirkabel tersembunyi yang nyaman dipakai warga.",
      },
      {
        title: "Slide 9: Menjaga Kesakralan Ritual: Batasan 'Ruang Larangan' Kamera",
        content:
          "Hormati aturan tabu pemangku adat:\n\n• Pada beberapa ritual pemanggilan leluhur atau pembersihan pusaka suci, ada zona terlarang di mana kamera sama sekali tidak boleh masuk.\n• Sebagai pembuat film beretika, patuhi larangan tersebut dengan sukarela. Dokumentasikanlah reaksi wajah keluarga dari luar ruangan atau suasana hening alam sekitarnya.",
      },
      {
        title: "Slide 10: Transformasi Cerita Rakyat ke Naskah Drama Modern",
        content:
          "Mengadaptasi cerita mitologi nusantara agar diminati Generasi Z:\n\n• Temukan Inti Emosi Universal (Universal Core Emotion): Cerita Malin Kundang bukan sekadar anak durhaka, melainkan konflik ego perantau muda yang malu mengakui asal-usulnya di era media sosial.\n• Setting Modern: Tokoh dapat diubah menjadi influencer sukses di kota besar yang mengabaikan ibunya penjual jamu di kampung.",
      },
      {
        title: "Slide 11: Tata Suara Etnomusikologi: Merekam Audio Otentik",
        content:
          "Nilai orisinalitas audio dokumenter budaya:\n\n• Rekam suara instrumen musik tradisional langsung di tempat asalnya (ambient nat sound) menggunakan mic stereo (X-Y atau binaural pair).\n• Rekam suara alam pendukung: gemercik air sungai pegunungan, gesekan dedaunan bambu, dan desau angin pantai.\n• Musik latar tradisional yang otentik memberikan kedalaman emosional yang tak tergantikan oleh musik synthesizer komputer.",
      },
      {
        title: "Slide 12: Menghormati Hak Cipta Tradisional & Pengetahuan Komunal",
        content:
          "Regulasi Kekayaan Intelektual Komunal (KIK):\n\n• Motif batik sakral, ukiran kayu adat, dan lagu daerah adalah hak milik bersama masyarakat adat.\n• Wajib mencantumkan sumber asal suku dan pencipta tradisi pada lembar credit title penutup film.\n• Jika film menghasilkan keuntungan komersial, pertimbangkan memberikan royalti sosial atau donasi bagi pelestarian komunitas adat tersebut.",
      },
      {
        title: "Slide 13: Screening Komunitas: Pemutaran Perdana Bersama Warga Setempat",
        content:
          "Etika tertinggi pembuat film dokumenter:\n\n• Sebelum film diikutsertakan ke festival internasional atau tayang di TV, adakan pemutaran layar tancap (Community Screening) di balai desa bersama warga yang menjadi subjek film.\n• Dengarkan masukan dan persetujuan mereka. Membahagiakan narasumber adalah kemenangan moral sejati seorang pembuat film.",
      },
      {
        title: "Slide 14: Strategi Distribusi Film Budaya: Dari Lokal ke Festival Global",
        content:
          "Jalur distribusi karya berwawasan budaya:\n\n• Festival Film Dokumenter (FFD Yogyakarta, Festival Film Indonesia / FFI).\n• Festival Film Pelajar (FLS2N, Festival Film Purbalingga).\n• Platform Streaming Budaya (Indonesiana TV Kemendikbudristek).\n• Pemutaran Komunitas Kampus dan Bioskop Alternatif.",
      },
      {
        title: "Slide 15: Studi Komparasi: Dokumenter Jurnalisme Cepat vs Dokumenter Budaya Lambat (Slow Cinema)",
        content:
          "Perbedaan gaya penyampaian:\n\n• Dokumenter TV News: Durasi 5 menit, penuh narasi voice-over cepat, wawancara fakta informatif, potongan gambar pendek.\n• Dokumenter Budaya Puitis (Slow Cinema): Durasi 30-60 menit, minim kata-kata, membiarkan gambar pemandangan dan aktivitas warga bernapas panjang (long take), mengajak penonton merenungi makna filosofis kehidupan.",
      },
      {
        title: "Slide 16: Troubleshooting: Menghadapi Narasumber yang Kaku di Depan Kamera",
        content:
          "Kendala umum: Warga desa menjadi kaku, canggung, atau terdiam saat kamera diarahkan ke wajahnya.\n\nSolusi Empatik:\n1. Matikan tanda lampu tally kamera, jangan langsung merekam wawancara formal.\n2. Ajak narasumber mengobrol sambil melakukan aktivitas hariannya (misal: menyeduh kopi, menganyam bambu, atau merawat ternak).\n3. Lakukan wawancara dua arah yang hangat; biarkan narasumber lupa bahwa kamera sedang merekam.",
      },
      {
        title: "Slide 17: Studi Kasus Riil: Kekecewaan Warga Akibat Janji Palsu Kru Film",
        content:
          "Sebuah kru film komersial mendatangi desa adat terpencil untuk syuting adegan upacara panen padi:\n\nFakta Insiden:\nKru menjanjikan akan membagikan hasil video dan memberikan bantuan renovasi balai desa. Namun setelah syuting selesai, kru langsung pergi dan tidak pernah memberi kabar atau menunjukkan hasil karyanya. Akibatnya, desa tersebut menutup pintu dan melarang seluruh kru film lain masuk selama bertahun-tahun.",
      },
      {
        title: "Slide 18: Analisis Integritas & Tanggung Jawab Moral Pembuat Film",
        content:
          "Pelajaran dari kasus desa adat:\n\n1. Jangan Pernah Berjanji Berlebihan: Sampaikan apa adanya kemampuan Anda sebagai pelajar atau kru independen.\n2. Jaga Silaturahmi Berkelanjutan: Kirimkan salinan file video atau foto cetak kepada kepala desa sebagai bentuk terima kasih tulus.\n3. Bangun Reputasi Baik agar generasi pembuat film berikutnya tetap diterima dengan tangan terbuka.",
      },
      {
        title: "Slide 19: Digitalisasi Tradisi: Arsip Audio Visual Warisan Bangsa",
        content:
          "Peran mulia generasi muda BCF di era digital:\n\n• Banyak kesenian tradisional Indonesia terancam punah karena maestro seniman tua meninggal dunia tanpa ada generasi penerus.\n• Lulusan SMK BCF dapat menjadi pahlawan pelestari budaya dengan mendokumentasikan teknik menari, melantunkan tembang kuno, atau menempa keris dalam format video 4K berkualitas tinggi sebagai arsip digital abadi.",
      },
      {
        title: "Slide 20: Rangkuman & Action Plan Proyek Budaya Siswa",
        content:
          "Poin Kunci Pembelajaran:\n1. Kearifan lokal nusantara adalah sumber inspirasi kreatif yang tak ternilai harganya.\n2. Rasa hormat, etika perizinan (Informed Consent), dan kerendahan hati adalah kunci sukses syuting di tengah masyarakat adat.\n3. Angkatlah martabat budaya lokal Anda hingga memikat penonton dunia.\n\nAction Plan:\nLakukan riset potensi budaya atau kesenian tradisional di sekitar lingkungan sekolah Anda dan susun ide konsepnya pada LKPD E1-K7!",
      },
    ],
    video: {
      title: "Proses Riset dan Eksplorasi Kearifan Lokal untuk Produksi Dokumenter",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      guide:
        "Perhatikan cara pembuat film mendekati tokoh adat, mendengarkan cerita lisan, dan menangkap detail visual kehidupan sehari-hari tanpa mengganggu ritme kehidupan warga desa.",
    },
    gamePairs: [
      { id: 1, left: "Informed Consent", right: "Persetujuan tertulis narasumber sebelum diliput dalam dokumenter" },
      { id: 2, left: "Poverty Porn", right: "Eksploitasi penderitaan masyarakat miskin demi sensasi visual" },
      { id: 3, left: "Sowan", right: "Tradisi silaturahmi memohon izin kepada pemangku adat setempat" },
      { id: 4, left: "Community Screening", right: "Pemutaran film perdana bersama masyarakat yang menjadi subjek film" },
      { id: 5, left: "Etnomusikologi", right: "Perekaman suara alat musik tradisional langsung di habitat aslinya" },
    ],
    caseTitle: "Studi Kasus: Dilema Menayangkan Ritual Rahasia yang Tidak Sengaja Terekam",
    caseScenario:
      "Dalam proses syuting dokumenter di pedalaman, kamera Anda secara tidak sengaja merekam ritual doa tertutup yang sangat sakral dan menurut kepercayaan warga tidak boleh dilihat oleh orang luar. Hasil rekaman tersebut memiliki kualitas visual yang luar biasa dramatis.",
    caseInstruction:
      "Sebagai sutradara dokumenter yang memegang teguh etika profesi, keputusan apa yang akan Anda ambil: apakah tetap memasukkannya ke dalam film demi memenangkan festival, atau menghapus/menyensor adegan tersebut? Berikan landasan etika moral Anda!",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C3",
        stem: "Langkah pertama yang paling tepat dilakukan seorang pembuat film dokumenter ketika baru tiba di sebuah desa adat adalah...",
        options: [
          { key: "A", text: "Langsung mengeluarkan drone dan menerbangkannya di atas rumah warga" },
          { key: "B", text: "Menemui kepala desa atau tetua adat untuk 'sowan' menyampaikan tujuan kedatangan dan memohon izin" },
          { key: "C", text: "Membagi-bagikan uang kepada anak-anak agar mau berakting" },
          { key: "D", text: "Menyiapkan tripod di tengah jalan desa" },
        ],
        correctKey: "B",
        explanation: "Tradisi sowan dan memohon izin resmi kepada tetua adat adalah etika fundamental untuk membangun kepercayaan dan restu warga lokal.",
      },
      {
        id: 2,
        bloom: "C4",
        stem: "Istilah 'Poverty Porn' dalam etika produksi media merujuk pada praktik buruk...",
        options: [
          { key: "A", text: "Membeli kamera bekas yang murah" },
          { key: "B", text: "Mengeksploitasi kondisi kemiskinan dan penderitaan subjek film semata-mata untuk memancing simpati murahan atau keuntungan pembuat film" },
          { key: "C", text: "Mengambil gambar tanpa menggunakan tripod" },
          { key: "D", text: "Syuting di bawah terik matahari tanpa payung" },
        ],
        correctKey: "B",
        explanation: "Poverty porn adalah eksploitasi visual yang merendahkan martabat narasumber demi sensasi emosional atau keuntungan pribadi sineas.",
      },
    ],
    lkpd: {
      title: "LKPD E1-K7: Riset Potensi Kearifan Lokal & Penyusunan Lembar Informed Consent",
      objective: "Melakukan riset tradisi/kesenian lokal sekitar sekolah dan merancang draf lembar persetujuan narasumber.",
      tools: ["Buku Catatan Riset", "Template Lembar Informed Consent"],
      steps: [
        "Pilih 1 kesenian tradisional, kuliner warisan, atau kerajinan khas di daerah sekitar Anda.",
        "Lakukan wawancara awal dengan pelaku budaya untuk mencari nilai filosofis di balik tradisi tersebut.",
        "Tuliskan sinopsis ide cerita dokumenter pendek berdurasi 5 menit.",
        "Susun draf surat persetujuan narasumber (Informed Consent) lengkap dengan klausul hak narasumber dan penandatanganan.",
      ],
      outputFormat: "Dokumen Riset Budaya dan Draf Informed Consent format PDF.",
    },
    journalQuestions: {
      q1: "Kearifan lokal apa di daerah Anda yang paling ingin Anda abadikan ke dalam karya audio visual sebelum punah?",
      q2: "Mengapa persetujuan sukarela narasumber (Informed Consent) wajib dijunjung tinggi oleh setiap pembuat film?",
      q3: "Bagaimana karya audio visual Anda dapat memberi manfaat nyata bagi pelestarian budaya masyarakat setempat?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi potensi budaya dan kearifan lokal sebagai ide karya audio visual orisinal.",
      "Mampu menerapkan etika peliputan adat dan menyusun dokumen Informed Consent narasumber.",
      "Mampu merancang konsep karya dokumenter budaya yang menjunjung tinggi martabat kearifan lokal.",
    ],
  },

  // =========================================================================
  // KONTEN 8: Proposal Ide Produksi dan Rencana Usaha di Bidang BCF
  // =========================================================================
  {
    id: "e1-k8",
    order: 8,
    title: "Proposal Ide Produksi dan Rencana Usaha",
    shortTitle: "Proposal Ide & Usaha",
    summary:
      "Sistematika proposal produksi film dan TV, Rencana Anggaran Biaya (RAB), pitch deck visual, treatment naskah, logline memikat, dan strategi pitching ke klien/investor.",
    kompetensi: [
      "Menyusun proposal ide produksi program televisi dan film yang sistematis dan profesional.",
      "Menyusun Rencana Anggaran Biaya (RAB) produksi secara realistis dan terperinci.",
      "Mempresentasikan pitch deck ide karya di hadapan dewan juri, sponsor, atau calon investor.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu merumuskan Logline, Sinopsis, dan Treatment ide program siaran TV.",
      "Peserta didik mampu menghitung kalkulasi Rencana Anggaran Biaya (RAB) pra hingga pascaproduksi.",
      "Peserta didik mampu merancang slide presentasi (Pitch Deck) visual dan mempraktikkan teknik pitching persuasif.",
    ],
    hookQuestion:
      "Jika Anda hanya diberi waktu 60 detik di dalam lift bersama seorang Produser Eksekutif stasiun TV, bagaimana cara Anda meyakinkannya untuk mendanai ide film Anda senilai ratusan juta rupiah?",
    hookContext:
      "Di industri hiburan, konsep ini dikenal sebagai 'Elevator Pitch'. Ide brilian tidak ada gunanya jika Anda tidak mampu merangkumnya dalam satu kalimat memikat (logline) dan dokumen proposal anggaran yang meyakinkan para pemilik dana.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C1",
        stem: "Satu kalimat ringkas (25-35 kata) yang merangkum tokoh utama, konflik sentral, dan premis cerita sebuah film disebut...",
        options: [
          { key: "A", text: "Logline" },
          { key: "B", text: "Credit Title" },
          { key: "C", text: "Daily Call Sheet" },
          { key: "D", text: "Storyboarding" },
        ],
        correctKey: "A",
        explanation: "Logline adalah satu kalimat premis pemikat yang menjelaskan siapa protagonisnya, apa tujuannya, dan apa rintangan terbesar yang dihadapinya.",
      },
      {
        id: 2,
        bloom: "C2",
        stem: "Komponen dalam Rencana Anggaran Biaya (RAB) yang dialokasikan sebesar 5% - 10% untuk mengantisipasi kejadian darurat tak terduga saat syuting disebut...",
        options: [
          { key: "A", text: "Dana Hibah" },
          { key: "B", text: "Biaya Kontinjensi (Contingency Budget)" },
          { key: "C", text: "Honor Produser" },
          { key: "D", text: "Pajak Pertambahan Nilai" },
        ],
        correctKey: "B",
        explanation: "Biaya kontinjensi adalah dana cadangan wajib dalam RAB produksi film/TV untuk mengatasi insiden mendadak seperti cuaca buruk, alat rusak, atau talent sakit.",
      },
    ],
    materialCards: [
      {
        title: "Slide 1: Pengantar Proposal Produksi: Jembatan Ide dan Dana",
        content:
          "Sebuah film atau program TV tidak dimulai di lokasi syuting dengan kamera menyala, melainkan berawal dari meja kerja produser dalam bentuk seberkas dokumen: Proposal Produksi.\n\nProposal adalah cetak biru (blueprint) bisnis dan artistik yang menjelaskan kepada investor, stasiun TV, atau sponsor mengapa ide Anda layak didanai dan bagaimana ide tersebut akan diwujudkan secara nyata tepat waktu dan tepat anggaran.",
        didYouKnow: "Setiap tahunnya, festival film bergengsi dunia seperti Cannes dan Busan menggelar 'Project Market' tempat para sineas memperebutkan dana miliaran rupiah bermodalkan proposal dan pitching 5 menit.",
      },
      {
        title: "Slide 2: Anatomi Dokumen Proposal Produksi Standar Industri",
        content:
          "Struktur baku proposal produksi audio visual:\n\n1. Cover & Judul Program (Eye-catching title & visual key art)\n2. Logline & Premis Cerita (Ringkasan 1 kalimat)\n3. Sinopsis Pendek & Treatment Adegan\n4. Profil Target Penonton (Demografis & Psikografis)\n5. Konsep Visual & Moodboard (Referensi warna, lighting, camera movement)\n6. Susunan Tim Inti (Key Creative & HOD)\n7. Jadwal Kerja (Production Timeline)\n8. Rencana Anggaran Biaya (RAB) & Paket Sponsorship.",
      },
      {
        title: "Slide 3: Menulis Logline yang Menjual (The Winning Logline)",
        content:
          "Rumus menulis logline memikat dalam 1-2 kalimat:\n\nFormula: [Karakter Utama dengan Kelemahan Unik] + [Kejadian Pemicu / Inciting Incident] + [Tujuan Nyata / Goal] + [Antagonis / Rintangan Terbesar dengan Taruhan Tinggi / High Stakes].\n\nContoh Buruk: 'Cerita tentang seorang anak SMK yang suka kamera.'\nContoh Hebat: 'Seorang siswi pemalu penjaga lab kamera SMK harus memimpin siaran langsung bencana banjir bandang di desanya sebelum pemancar sekolah tenggelam terbawa arus.'",
      },
      {
        title: "Slide 4: Sinopsis, Treatment, dan Skenario (Perbedaannya)",
        content:
          "Evolusi dokumen cerita dari gagasan ke naskah final:\n\n• Sinopsis: Rangkuman alur cerita awal, tengah, dan akhir dalam 1 halaman.\n• Treatment: Penjelasan adegan demi adegan secara naratif (scene-by-scene narrative) tanpa dialog lengkap, mendeskripsikan aksi visual dan atmosfer emosional.\n• Skenario (Script): Naskah utuh lengkap dengan format adegan (Scene Heading/Slugline), deskripsi aksi, nama karakter, dan dialog terstruktur.",
      },
      {
        title: "Slide 5: Analisis Target Audiens & Pemilihan Jam Tayang (Slot)",
        content:
          "Investor ingin tahu: 'Siapa yang akan menonton program ini?':\n\n• Demografis: Usia penonton (misal: Remaja 15-24 tahun), jenis kelamin, status sosial ekonomi (SES A, B, C).\n• Psikografis: Hobi, gaya hidup, kegelisahan batin, dan kebiasaan mengonsumsi media.\n• Slot Jam Tayang: Menentukan apakah program cocok untuk slot pagi (anak-anak), sore (keluarga), atau malam hari (prime time dewasa).",
      },
      {
        title: "Slide 6: Visual Moodboard & Catatan Direktur (Director's Statement)",
        content:
          "Menjelaskan cita rasa visual sebelum syuting dimulai:\n\n• Director's Statement: Pernyataan sutradara tentang alasan personal mengapa cerita ini penting diceritakan sekarang.\n• Moodboard: Kolase foto referensi pencahayaan (lighting palette), grading warna (color tones), gaya lensa, dan desain kostum yang diambil dari karya film ternama.",
      },
      {
        title: "Slide 7: Struktur Rencana Anggaran Biaya (RAB) / Production Budget",
        content:
          "Pembagian pos anggaran produksi standar:\n\n1. Biaya Di Atas Garis (Above the Line): Hak cipta naskah, honor produser, sutradara, dan aktor utama.\n2. Biaya Di Bawah Garis (Below the Line): Honor kru teknis (DoP, gaffer, sound, editor), sewa kamera/lampu, perizinan lokasi, transportasi, akomodasi, katering konsumsi, properti seni.\n3. Biaya Pascaproduksi: Sewa studio editing, sound mixing, color grading, mastering, poster promosi.\n4. Biaya Kontinjensi (Cadangan): 5% – 10% dari total anggaran.",
      },
      {
        title: "Slide 8: Rincian POS Pengeluaran Lapangan (Daily Burn Rate)",
        content:
          "Menghitung biaya harian syuting agar tidak overbudget:\n\n• Satuan Anggaran: Rinci per satuan (hari sewa, paket makan, liter bensin, honor per shift).\n• Contoh: Katering 20 kru x 3 kali makan x Rp 25.000 = Rp 1.500.000 per hari syuting.\n• Line Producer bertugas memantau agar pengeluaran aktual harian tidak melebihi angka di lembar RAB.",
      },
      {
        title: "Slide 9: Merancang Pitch Deck Visual yang Memikat (Pitch Deck Slides)",
        content:
          "Pitch Deck adalah slide presentasi ringkas (10-12 slide) untuk sesi pitching tatap muka:\n\n• Gunakan format layar lebar 16:9 dengan tipografi modern dan minim teks panjang.\n• Dominasi dengan gambar visual beresolusi tinggi yang menggugah emosi.\n• Slide wajib: Judul/Cover, Logline, Masalah/Peluang, Sinopsis Karakter, Visual World, Rencana Anggaran, Profil Tim, dan Kontak.",
      },
      {
        title: "Slide 10: Seni Melakukan 'Pitching' di Depan Investor",
        content:
          "Kaidah berbicara memikat dalam sesi pitching 5-10 menit:\n\n• Hook di 30 Detik Pertama: Buka dengan pertanyaan menggugah atau fakta mengejutkan.\n• Antusiasme & Energi: Investor menanamkan modal pada energi pembuat filmnya, bukan hanya pada kertas proposalnya.\n• Kuasai Angka: Jangan gugup saat ditanya: 'Berapa total biaya produksi dan bagaimana sponsor mendapatkan keuntungan?'.",
      },
      {
        title: "Slide 11: Paket Penawaran Sponsorship (Sponsorship Packages)",
        content:
          "Memberikan nilai timbal balik yang adil bagi penyandang dana produk:\n\n• Paket Platinum: Penempatan logo besar di poster, bumper in/out program, produk digunakan aktor utama (Product Placement), promosi media sosial.\n• Paket Gold: Penempatan logo ukuran sedang di backdrop press conference dan running text siaran.\n• Paket Barter (In-Kind Sponsorship): Sponsor tidak memberi uang tunai melainkan fasilitas gratis (misal: hotel akomodasi kru atau katering gratis).",
      },
      {
        title: "Slide 12: Production Timeline & Gantt Chart",
        content:
          "Jadwal kerja realistis yang disajikan dalam bagan Gantt Chart:\n\n• Tahap Pra-Produksi: 4 minggu (Final naskah, casting, hunting lokasi, izin, reading).\n• Tahap Produksi: 1 minggu (Syuting 5 hari kerja).\n• Tahap Pascaproduksi: 3 minggu (Offline edit, review sutradara, sound design, color grading, ekspor master).\n• Deliverables Date: Tanggal pasti penyerahan master video ke klien.",
      },
      {
        title: "Slide 13: Profil Kru Inti (Creative Key Team)",
        content:
          "Meyakinkan investor bahwa tim Anda mampu mengeksekusi proyek:\n\n• Tampilkan foto profesional dan biografi ringkas 3 kalimat dari: Produser, Sutradara, dan Penata Kamera (DoP).\n• Cantumkan daftar karya terbaik sebelumnya dan penghargaan festival yang pernah diraih tim.",
      },
      {
        title: "Slide 14: Pro-Tips Praktisi: Mengantisipasi Pertanyaan Tersulit Investor",
        content:
          "Pertanyaan yang paling sering menggugurkan proposal:\n\n• 'Apa pembeda film ini dibanding puluhan film sejenis di bioskop/TV?'\n• 'Bagaimana jika saat syuting hujan badai selama 3 hari berturut-turut?'\n• Selalu siapkan 'Slide Cadangan' (Appendix Slides) di akhir presentasi yang memuat rencana mitigasi risiko dan breakdown detail anggaran.",
      },
      {
        title: "Slide 15: Studi Komparasi: Proposal Komersial Klien vs Proposal Hibah Seni (Grant)",
        content:
          "Menyesuaikan gaya bahasa proposal:\n\n• Proposal Komersial Perusahaan: Berorientasi bisnis, menonjolkan Return on Investment (ROI), peningkatan penjualan produk klien, dan metrik penonton.\n• Proposal Hibah Kebudayaan (Kemendikbud/Festival): Berorientasi nilai artistik, inovasi bahasa sinema, pelestarian budaya lokal, dan dampak edukasi bagi masyarakat.",
      },
      {
        title: "Slide 16: Troubleshooting Pitching: Menghadapi Sikap Dingin Dewan Juri",
        content:
          "Jika juri terlihat bosan atau menatap sinis saat Anda berbicara:\n\n1. Jangan panik atau mempercepat bicara; jeda 2 detik dan turunkan intonasi suara agar terdengar lebih tenang dan berwibawa.\n2. Alihkan tatapan mata ke slide video referensi dan ceritakan sisi personal aktor.\n3. Libatkan juri dengan pertanyaan: 'Pernahkah bapak/ibu merasakan dilema ketika...'.",
      },
      {
        title: "Slide 17: Studi Kasus Riil: Kemenangan Proposal Film Pendek Siswa SMK",
        content:
          "Sebuah kelompok siswa SMK berhasil memenangkan dana produksi film pendek Rp 25 juta dari kementerian kebudayaan:\n\nFakta Kemenangan:\nProposal mereka memiliki logline yang sangat segar tentang perjuangan anak pembuat wayang kulit di era gawai, RAB yang sangat detail dan transparan per item tanpa markup harga, serta pitch deck visual yang rapi dan memikat hati kurator juri.",
      },
      {
        title: "Slide 18: Analisis Kunci Kemenangan Proposal Kompetisi",
        content:
          "Faktor penentu lolos seleksi:\n\n1. Kejujuran Anggaran: Menghitung harga sewa alat dan honor sesuai standar upah wajar daerah.\n2. Orisinalitas Cerita: Tidak meniru film populer luar negeri, melainkan menggali keunikan lingkungan sekitar.\n3. Eksekusi Visual Jelas: Sutradara mampu menjelaskan rencana pergerakan kamera dan mood pencahayaan dengan sangat fasih.",
      },
      {
        title: "Slide 19: Memanfaatkan AI untuk Mempercepat Penyusunan Pitch Deck",
        content:
          "Pemanfaatan alat modern secara etis dan produktif:\n\n• AI Text Generator: Membantu memoles tata bahasa sinopsis dan mencari variasi kata untuk logline.\n• AI Image Generator (Midjourney/DALL-E): Membuat sketsa konsep visual moodboard latar fantasi yang belum ada di dunia nyata.\n• AI Spreadsheet: Menghitung otomatis formula pajak PPh 21 kru dan total anggaran RAB.",
      },
      {
        title: "Slide 20: Rangkuman & Action Plan Kompetisi Pitching Kelas",
        content:
          "Poin Kunci Pembelajaran:\n1. Proposal produksi yang rapi dan RAB yang akurat adalah separuh dari keberhasilan karya film/TV.\n2. Kuasai teknik merangkum cerita ke dalam logline 1 kalimat yang memukau.\n3. Pitching adalah keterampilan menjual keyakinan dan gairah seni kepada para pendukung dana.\n\nAction Plan:\nSusun dokumen proposal lengkap dan slide pitch deck untuk ide karya tugas akhir Anda menggunakan lembar panduan LKPD E1-K8!",
      },
    ],
    video: {
      title: "Cara Membuat Proposal Film/TV dan Pitch Deck ke Investor & Klien",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      guide:
        "Perhatikan struktur slide pitch deck yang dipaparkan dan bagaimana produser menjelaskan anggaran biaya secara transparan. Amati teknik intonasi suara presenter saat melakukan elevator pitch 60 detik.",
    },
    gamePairs: [
      { id: 1, left: "Logline", right: "Satu kalimat pemikat yang merangkum premis utama cerita" },
      { id: 2, left: "Above the Line", right: "Kelompok anggaran honor produser, sutradara, naskah, dan aktor" },
      { id: 3, left: "Biaya Kontinjensi", right: "Alokasi dana cadangan darurat 5-10% dari total anggaran" },
      { id: 4, left: "Pitch Deck", right: "Slide presentasi visual ringkas untuk meyakinkan investor" },
      { id: 5, left: "Treatment", right: "Penjelasan alur cerita adegan demi adegan secara naratif" },
    ],
    caseTitle: "Studi Kasus: Menyusun Pitching Kilat (Elevator Pitch) 60 Detik",
    caseScenario:
      "Dalam sebuah festival film nasional, Anda berpapasan di ruang tunggu dengan seorang Program Director stasiun TV swasta terkemuka. Anda memiliki waktu tepat 60 detik sebelum beliau dipanggil naik ke atas panggung.",
    caseInstruction:
      "Susunlah teks narasi 'Elevator Pitch' berdurasi 60 detik (sekitar 120 kata): perkenalkan diri Anda, lontarkan logline cerita program TV yang Anda gagas, sebutkan keunikan target pasarnya, dan buat janji tindak lanjut untuk mengirimkan proposal lengkap!",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Komponen yang membedakan kelompok anggaran 'Above the Line' dengan 'Below the Line' pada RAB film adalah...",
        options: [
          { key: "A", text: "Above the Line untuk kru kreatif/manajerial utama, sedangkan Below the Line untuk teknisi, alat, dan operasional fisik lapangan" },
          { key: "B", text: "Above the Line dibayar dalam mata uang dollar, Below the Line dalam rupiah" },
          { key: "C", text: "Above the Line untuk makanan, Below the Line untuk transportasi" },
          { key: "D", text: "Above the Line tidak perlu dipertanggungjawabkan" },
        ],
        correctKey: "A",
        explanation: "Above the Line mencakup kepemimpinan kreatif (penulis, sutradara, produser, pemeran utama), sementara Below the Line mencakup seluruh biaya eksekusi teknis, kru produksi, dan logistik lapangan.",
      },
      {
        id: 2,
        bloom: "C4",
        stem: "Mengapa pada slide Pitch Deck disarankan tidak memuat teks paragraf panjang lebar?",
        options: [
          { key: "A", text: "Investor tidak bisa membaca tulisan kecil" },
          { key: "B", text: "Agar audiens fokus mendengarkan pemaparan presenter dan menangkap impresi visual moodboard secara emosional" },
          { key: "C", text: "Software presentasi akan mengalami lag jika banyak teks" },
          { key: "D", text: "Peraturan hak cipta melarang teks di slide" },
        ],
        correctKey: "B",
        explanation: "Slide presentasi pitch deck berfungsi sebagai penunjang visual; membaca teks panjang akan memecah fokus audiens dari pesan persuasif yang disampaikan presenter.",
      },
    ],
    lkpd: {
      title: "LKPD E1-K8: Penyusunan Dokumen Proposal Produksi & Simulasi Pitching",
      objective: "Merancang proposal ide produksi program TV/film lengkap dengan RAB dan slide presentasi Pitch Deck.",
      tools: ["Software Pengolah Kata & Presentasi", "Template Proposal Standar BCF"],
      steps: [
        "Tentukan judul program, logline 1 kalimat, dan sinopsis pendek 1 halaman.",
        "Susun Rencana Anggaran Biaya (RAB) terperinci dengan pos Above the Line, Below the Line, dan Kontinjensi 10%.",
        "Buat 10 slide Pitch Deck visual menggunakan referensi gambar moodboard yang relevan.",
        "Praktikkan simulasi pitching 5 menit di depan kelas dengan sesi tanya jawab kritis dari guru/teman.",
      ],
      outputFormat: "Dokumen Proposal Produksi PDF dan File Slide Presentasi Pitch Deck.",
    },
    journalQuestions: {
      q1: "Apa hal terpenting yang Anda pelajari dalam merancang Rencana Anggaran Biaya (RAB) yang realistis?",
      q2: "Bagaimana perasaan Anda saat pertama kali mempresentasikan ide karya Anda di hadapan orang lain?",
      q3: "Langkah konkret apa yang akan Anda lakukan untuk menyempurnakan proposal ide produksi Anda berikutnya?",
    },
    kktpIndicators: [
      "Mampu merumuskan logline, premis, dan sinopsis program audio visual yang menarik dan terukur.",
      "Mampu menyusun Rencana Anggaran Biaya (RAB) produksi secara sistematis, realistis, dan akuntabel.",
      "Mampu mendesain slide pitch deck visual dan mendemonstrasikan teknik pitching secara persuasif.",
    ],
  },
];
