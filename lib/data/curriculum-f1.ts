import type { ElemenContentItem } from "./curriculum-types";

export const F1_CONTENTS: ElemenContentItem[] = [
  // =========================================================================
  // KONTEN 1: Prosedur tahapan produksi program siaran TV (20 Slide)
  // =========================================================================
  {
    id: "f1-k1",
    order: 1,
    title: "1. Prosedur tahapan produksi program siaran TV",
    shortTitle: "Prosedur Produksi TV",
    summary: "Pemahaman komprehensif mengenai tata kelola produksi siaran televisi mulai dari pra-produksi, produksi studio/lapangan, hingga pasca-produksi sesuai POS industri broadcast.",
    kompetensi: ["1. Memahami", "2. Mengimplementasikan"],
    tujuanPembelajaran: [
      "Peserta didik mampu memahami hierarki dan alur kerja manajemen produksi program siaran televisi.",
      "Peserta didik mampu mengimplementasikan POS produksi televisi pada format studio multi-kamera dan siaran luar studio (OB Van).",
    ],
    hookQuestion: "Jika terjadi keterlambatan 30 detik saja pada program live stasiun TV nasional, apa dampak finansial dan regulasi terhadap slot iklan komersial?",
    hookContext: "Dalam industri televisi komersial, satu detik udara (air time) bernilai puluhan juta rupiah. Keterlambatan program dapat memicu penalti denda dari pengiklan serta pelanggaran izin siar terhadap KPI (Komisi Penyiaran Indonesia).",
    pretestQuestions: [
      {
        id: 1101,
        bloom: "C2",
        stem: "Tahap dalam manajemen produksi televisi di mana ide dikembangkan menjadi naskah, breakdown anggaran disusun, dan izin lokasi diajukan adalah...",
        options: [
          { key: "A", text: "Pra-produksi" },
          { key: "B", text: "Produksi on-air" },
          { key: "C", text: "Pasca-produksi" },
          { key: "D", text: "Master Control Logging" },
        ],
        correctKey: "A",
        explanation: "Pra-produksi adalah fase perencanaan komprehensif sebelum proses perekaman atau penayangan siaran langsung dimulai.",
      },
      {
        id: 1102,
        bloom: "C2",
        stem: "Penanggung jawab operasional yang mengawasi kepatuhan jadwal, alokasi dana harian, dan logistik di lapangan dalam produksi TV adalah...",
        options: [
          { key: "A", text: "Line Producer / Manajer Produksi" },
          { key: "B", text: "Audioman" },
          { key: "C", text: "Boom Operator" },
          { key: "D", text: "Graphic Designer" },
        ],
        correctKey: "A",
        explanation: "Line Producer bertindak sebagai manajer lini lapangan yang memastikan produksi berjalan tepat waktu, on-budget, dan mematuhi POS.",
      },
      {
        id: 1103,
        bloom: "C3",
        stem: "Mobil khusus yang dilengkapi ruang kontrol kendali siaran langsung lengkap dengan switcher, audio mixer, dan monitor multi-view untuk meliput acara di luar gedung studio disebut...",
        options: [
          { key: "A", text: "OB Van (Outside Broadcasting Van)" },
          { key: "B", text: "Grip Truck" },
          { key: "C", text: "Camera Dolly Rig" },
          { key: "D", text: "Generator Wagon" },
        ],
        correctKey: "A",
        explanation: "OB Van adalah stasiun televisi mini bergerak yang memfasilitasi siaran langsung multi-kamera di lokasi outdoor seperti stadion olahraga atau konser musik.",
      },
    ],
    materialCards: [
      {
        title: "1. Pengantar Manajemen Produksi Televisi & Regulasi Industri",
        content: "Manajemen produksi televisi adalah seni dan ilmu mengorganisasikan sumber daya manusia, teknologi peralatan, waktu, dan finansial untuk menghasilkan karya siaran yang berkualitas, bernilai edukatif atau hiburan, serta taat regulasi Pedoman Perilaku Penyiaran dan Standar Program Siaran (P3SPS).",
        didYouKnow: "Stasiun TV komersial membagi jam tayang menjadi Prime Time (18.00–22.00) dan Non-Prime Time, di mana biaya produksi dan tarif iklan saat Prime Time dapat 10 kali lipat lebih tinggi.",
      },
      {
        title: "2. Peta Alur Kerja Produksi Siaran (Pra, Produksi, Pasca)",
        content: "Alur kerja televisi terbagi tegas menjadi: Pra-Produksi (riset ide, format treatment, script conference, breakdown biaya, perizinan, dan gladi kotor), Produksi (gladi bersih/camera rehearsal, taping atau live on-air, koordinasi MCR), dan Pasca-Produksi (editing offline/online, audio mixing, evaluasi rating/share, dan arsip data siar).",
      },
      {
        title: "3. Struktur Organisasi & Hierarki Departemen Produksi TV",
        content: "Puncak kepemimpinan produksi dipegang oleh Executive Producer (EP) yang membawahi Produser Program. Produser dibantu oleh Associate Producer (AP), Line Producer/Production Manager, Floor Director (FD), Production Assistant (PA), serta berkolaborasi erat dengan Pengarah Acara (Program Director/Sutradara).",
        caseStudy: "Di program live harian, Produser berada di Control Room memantau alur waktu siaran, sementara Floor Director menjadi wakil produser di lantai studio yang memimpin artis dan penonton.",
      },
      {
        title: "4. Peran Kritis Executive Producer vs Producer",
        content: "Executive Producer berfokus pada kelayakan bisnis, persetujuan anggaran skala besar, strategi branding stasiun TV, dan koordinasi dengan divisi sales/marketing. Sebaliknya, Producer bertanggung jawab langsung terhadap eksekusi konten artistik harian, validitas naskah, dan integritas pesan tayangan.",
      },
      {
        title: "5. POS Pra-Produksi: Riset, Brainstorming & Treatment",
        content: "Setiap program televisi berawal dari riset mendalam terhadap minat pemirsa (audience interest) dan analisis kompetitor tayangan. Hasil brainstorming dituangkan ke dalam format 'Treatment', yaitu deskripsi naratif alur program per adegan sebelum naskah teknis disusun lengkap.",
      },
      {
        title: "6. POS Pra-Produksi: Script Conference & Bedah Naskah Teknis",
        content: "Script Conference adalah rapat resmi antara Produser, Sutradara, Penulis Naskah, Tim Teknis (Kamera, Audio, Artistik), dan Tim Keuangan. Agenda utamanya membedah setiap adegan untuk mendeteksi potensi kesulitan teknis dan pembengkakan anggaran sebelum masuk ke lantai syuting.",
        didYouKnow: "Perubahan naskah setelah Script Conference hanya boleh dilakukan oleh Produser dengan paraf resmi agar departemen teknis tidak mengalami miskomunikasi.",
      },
      {
        title: "7. POS Pra-Produksi: Production Breakdown & Jadwal Induk (Master Schedule)",
        content: "Production Breakdown mencakup penguraian kebutuhan alat, lokasi, pemeran/talent, kostum, properti, dan perizinan. Jadwal Induk (Master Schedule) menyusun batas waktu (milestones) ketat mulai dari tenggat naskah, hari syuting, editing, hingga penyerahan pita master ke divisi penyiaran (QC Delivery).",
      },
      {
        title: "8. POS Pra-Produksi: Perizinan, Lokasi & Legalitas Hak Siar",
        content: "Kegiatan produksi televisi wajib melengkapi surat izin peliputan resmi, surat persetujuan narasumber (Talent Release Form), hak cipta musik tema (Music Synchronization Rights), serta jaminan keselamatan kerja bagi kru dan pengisi acara.",
      },
      {
        title: "9. Karakteristik Produksi Studio Multi-Kamera",
        content: "Produksi studio menggunakan 3 hingga 5 kamera yang terhubung kabel SDI/optik ke switcher Control Room. Keunggulannya adalah efisiensi waktu karena proses penyuntingan gambar dilakukan langsung secara real-time oleh Sutradara dan Switcherman saat acara berlangsung.",
      },
      {
        title: "10. Karakteristik Produksi Luar Studio (OB Van & ENG)",
        content: "Produksi luar studio terbagi menjadi Electronic News Gathering (ENG) untuk peliputan berita cepat satu kamera, dan Electronic Field Production (EFP) yang menggunakan armada truk OB Van untuk event akbar seperti debat pemilu atau pertandingan sepak bola liga nasional.",
      },
      {
        title: "11. POS Produksi: Gladi Kotor (Dry Run) & Gladi Bersih (Camera Rehearsal)",
        content: "Sebelum merekam, kru studio menjalankan Dry Run (latihan blocking pemain tanpa kamera di studio) untuk mematangkan dialog. Dilanjutkan Camera Rehearsal (gladi bersih dengan kamera, lampu, grafik on-screen, dan kostum lengkap) guna memastikan kelancaran teknis tanpa cela.",
      },
      {
        title: "12. POS Produksi: Komunikasi Tally Light & Intercom System",
        content: "Sistem komunikasi produksi televisi bertumpu pada Intercom (headset matrix). Produser dan Sutradara berkomunikasi dengan Switcher, Juru Kamera, Soundman, dan Floor Director. Lampu Tally merah di kamera menyala otomatis ketika kamera tersebut sedang tayang on-air.",
        caseStudy: "Jika lampu Tally tidak menyala karena putus kabel kontrol, Juru Kamera dapat salah bergerak saat sedang on-air sehingga siaran menayangkan gambar berguncang (shaky).",
      },
      {
        title: "13. POS Produksi: Koordinasi Master Control Room (MCR) & Sinkronisasi Waktu",
        content: "MCR adalah gerbang terakhir penyiaran stasiun televisi. Departemen produksi wajib menyelaraskan jam dinding studio dengan Master Clock MCR berbasis SMPTE Timecode. Keterlambatan detik penyerahan sinyal langsung akan memotong materi program oleh sistem otomasi siaran.",
      },
      {
        title: "14. Standar K3, Kelistrikan & Budaya 5R di Studio TV",
        content: "Studio televisi memuat ribuan watt lampu dan ratusan meter kabel bervoltase tinggi. Standar K3 wajib: pemakaian sepatu safety bersol karet, taping kuning-hitam pada kabel yang melintasi jalur jalan, larangan membawa cairan ke Control Room, dan penerapan budaya 5R pada gudang alat.",
      },
      {
        title: "15. Manajemen Krisis On-Air: Mengatasi Kendala Teknis Saat Live",
        content: "Saat siaran langsung, jika mikrofon narasumber mati atau narasumber pingsan, Floor Director segera memberi kode 'Standby Break' kepada Host. Produser memerintahkan Switcher melempar tayangan ke Video Tape Recorder (VTR) atau Commercial Break cadangan dalam waktu di bawah 3 detik.",
        didYouKnow: "Setiap siaran langsung beresiko tinggi di televisi nasional selalu memiliki 'Filler' berdurasi 3 menit yang siap tayang otomatis jika sinyal studio terputus.",
      },
      {
        title: "16. POS Pasca-Produksi: Alur Ingest, Logging & Quality Control (QC)",
        content: "Setelah syuting selesai, seluruh materi rekaman di-ingest ke server bersama (SAN/NAS). Assistant Producer menyusun Log Sheet yang mencatat timecode adegan terbaik. Tim Quality Control memeriksa kesesuaian level warna (Rec.709) dan kenyaringan suara (standar EBU R128 -24 LUFS).",
      },
      {
        title: "17. POS Pasca-Produksi: Pasca-Evaluasi (Post-Mortem Meeting)",
        content: "Rapat Post-Mortem diselenggarakan maksimal 24 jam setelah penayangan. Seluruh kepala departemen berkumpul meninjau catatan kesalahan teknis, kepatuhan rundown waktu, rating menit-demi-menit, serta efisiensi penggunaan dana anggaran operasional.",
      },
      {
        title: "18. Studi Kasus Industri: Evaluasi Siaran Langsung Pilkada",
        content: "Pada siaran langsung Debat Pilkada, terjadi lonjakan penonton dan kendala mic narasumber berdenging (feedback). Analisis manajemen membuktikan kurangnya koordinasi soundcheck frekuensi nirkabel antara tim audio studio dengan wartawan luar gedung.",
      },
      {
        title: "19. Tren Masa Depan: Otomasi Studio, IP Broadcast & Cloud Production",
        content: "Manajemen siaran modern telah bertransformasi mengadopsi teknologi SMPTE ST 2110 (Video over IP), kamera robotik terkontrol joystick terpusat, dan ruang kontrol virtual berbasis komputasi awan (Cloud Switching) yang memungkinkan produser memimpin siaran dari lokasi berbeda.",
      },
      {
        title: "20. Rangkuman Kompetensi & Action Plan Produser Muda",
        content: "Manajemen produksi televisi menuntut ketelitian kepemimpinan, kepatuhan waktu mutlak, ketangkasan problem-solving dalam krisis, serta komunikasi tim yang solid. Kuasai pembuatan rundown, breakdown anggaran, dan POS studio untuk menjadi produser televisi profesional berdaya saing global.",
      },
    ],
    video: {
      title: "Alur Kerja Manajemen Produksi Stasiun Televisi Komersial",
      embedUrl: "https://www.youtube.com/embed/gI8J5n-Yj88",
      guide: "Simak bagaimana Produser memimpin technical meeting, membagi peran kru di Control Room, dan menyelaraskan timecode dengan Master Control Room (MCR).",
    },
    gamePairs: [
      { id: 1, left: "Executive Producer", right: "Penanggung jawab strategis anggaran dan kebijakan bisnis program TV" },
      { id: 2, left: "Line Producer", right: "Manajer lapangan yang mengontrol logistik harian dan kepatuhan POS kru" },
      { id: 3, left: "Floor Director (FD)", right: "Pemimpin teknis di lantai studio perantara Produser dan Pengisi Acara" },
      { id: 4, left: "OB Van", right: "Armada truk berpemberi fasilitas ruang kontrol siaran luar gedung (outdoor)" },
      { id: 5, left: "Post-Mortem Meeting", right: "Rapat evaluasi menyeluruh setelah program siaran televisi selesai ditayangkan" },
    ],
    caseTitle: "Studi Kasus 1: Keterlambatan Masuk Siaran Langsung (Late Air Time Incident)",
    caseScenario: "Pada program siaran langsung berita pukul 17.00 WIB, tim naskah terlambat mengunggah prompter karena server lokal macet. Akibatnya, pada detik ke-0 siaran, presenter belum siap membaca naskah dan layar siaran hening selama 8 detik sebelum akhirnya dialihkan ke video bumper sponsor.",
    caseInstruction: "Sebagai calon Associate Producer, rancang langkah mitigasi darurat: bagaimana prosedur backup naskah fisik di meja presenter dan SOP komunikasi antara Control Room dan FD agar jeda hening (dead air) tidak pernah terulang!",
    sampleQuestions: [
      {
        id: 1104,
        bloom: "C4",
        stem: "Mengapa gladi bersih (camera rehearsal) wajib dilakukan dengan menggunakan busana/kostum artis dan pencahayaan studio yang sesungguhnya?",
        options: [
          { key: "A", text: "Untuk menghabiskan waktu sewa studio" },
          { key: "B", text: "Memastikan tidak terjadi moiré pada motif pakaian dan kontras warna kamera sudah seimbang" },
          { key: "C", text: "Agar kru penonton studio tidak bosan menunggu siaran" },
          { key: "D", text: "Merupakan syarat formalitas administrasi serikat pekerja" },
        ],
        correctKey: "B",
        explanation: "Pola garis halus pada pakaian dapat menimbulkan efek moiré pada sensor kamera digital, sehingga harus diuji sebelum siaran on-air.",
      },
      {
        id: 1105,
        bloom: "C5",
        stem: "Jika dalam laporan post-mortem diketahui bahwa durasi program live melebihi alokasi waktu sebesar 45 detik (overrun), tindakan preventif manajemen yang paling tepat untuk episode berikutnya adalah...",
        options: [
          { key: "A", text: "Memotong waktu iklan sponsor tanpa konfirmasi divisi sales" },
          { key: "B", text: "Menempatkan Floor Director dengan countdown board digital yang terlihat jelas oleh presenter di segmen terakhir" },
          { key: "C", text: "Mematikan audio presenter secara mendadak saat waktu habis" },
          { key: "D", text: "Menghapus segmen pembuka di episode selanjutnya" },
        ],
        correctKey: "B",
        explanation: "Floor Director bertugas memberikan peringatan hitung mundur (countdown 3-2-1 menit) agar presenter dapat menutup acara tepat waktu.",
      },
    ],
    lkpd: {
      title: "LKPD F1-K1: Perancangan Standard Operating Procedure (POS) Produksi Siaran",
      objective: "Peserta didik mampu menyusun diagram alur kerja POS produksi program siaran televisi 30 menit dari pra hingga pasca.",
      tools: ["Komputer / Laptop", "Aplikasi Diagram (Draw.io / Canva / Visio)", "Template Dokumen POS Produksi TV"],
      steps: [
        "Identifikasi minimal 5 peran kunci kru dalam produksi program televisi komersial.",
        "Buat diagram alur kerja berurutan: Pra-Produksi, Produksi, dan Pasca-Produksi.",
        "Tentukan titik kritis kendali mutu (Quality Control Point) pada setiap tahapan.",
        "Rumuskan tindakan darurat jika terjadi kegagalan sinyal di lantai studio saat on-air.",
      ],
      outputFormat: "Dokumen SOP Alur Kerja Produksi TV format PDF (Maks. 3 Halaman A4).",
    },
    journalQuestions: {
      q1: "Sebutkan 3 hal paling esensial mengenai alur koordinasi antar departemen dalam manajemen televisi yang baru Anda pelajari!",
      q2: "Bagian POS produksi mana yang menurut Anda paling rentan menimbulkan kegagalan siaran jika terjadi miskomunikasi kru?",
      q3: "Bagaimana rencana Anda menerapkan disiplin waktu (timecode discipline) pada proyek praktik program televisi Anda ke depan?",
    },
    kktpIndicators: [
      "Mampu mendeskripsikan 3 tahapan alur kerja manajemen produksi siaran televisi berstandar POS industri.",
      "Mampu menguraikan tugas dan wewenang Executive Producer, Producer, Line Producer, dan Floor Director.",
      "Mampu merancang prosedur penanganan insiden darurat saat siaran langsung di lantai studio.",
    ],
  },

  // =========================================================================
  // KONTEN 2: Ide dan konsep program sesuai target penonton (20 Slide)
  // =========================================================================
  {
    id: "f1-k2",
    order: 2,
    title: "2. Ide dan konsep program sesuai target penonton",
    shortTitle: "Ide & Konsep Program",
    summary: "Metode perancangan format program televisi berbasis riset pasar, segmentasi audiens demografis-psikografis, dan penyusunan proposal treatment acara.",
    kompetensi: ["1. Menganalisis", "2. Merancang"],
    tujuanPembelajaran: [
      "Peserta didik mampu menganalisis kebutuhan dan karakteristik audiens penonton televisi berbasis riset data.",
      "Peserta didik mampu merancang proposal ide dan konsep program televisi yang memiliki Unique Selling Proposition (USP).",
    ],
    hookQuestion: "Mengapa program talkshow yang sukses di kota metropolitan sering kali gagal mendapatkan rating saat ditayangkan untuk penonton daerah?",
    hookContext: "Keberhasilan program televisi tidak hanya ditentukan oleh kecanggihan visual kamera, melainkan oleh ketepatan membidik kebutuhan psikologis dan budaya pemirsa sasaran.",
    pretestQuestions: [
      {
        id: 1106,
        bloom: "C2",
        stem: "Pengelompokan penonton televisi berdasarkan usia, jenis kelamin, tingkat pendidikan, dan tingkat pendapatan keluarga disebut segmentasi...",
        options: [
          { key: "A", text: "Demografis" },
          { key: "B", text: "Psikografis" },
          { key: "C", text: "Geografis" },
          { key: "D", text: "Biometrik" },
        ],
        correctKey: "A",
        explanation: "Segmentasi demografis mengelompokkan audiens berdasarkan data statistik kependudukan seperti usia, gender, dan status ekonomi (SES).",
      },
      {
        id: 1107,
        bloom: "C2",
        stem: "Ciri khas pembeda atau keunikan utama yang membuat program televisi Anda berbeda dan lebih menarik dibandingkan program kompetitor disebut...",
        options: [
          { key: "A", text: "Unique Selling Proposition (USP)" },
          { key: "B", text: "Master Log Sheet" },
          { key: "C", text: "Broadcasting License" },
          { key: "D", text: "Technical Rider" },
        ],
        correctKey: "A",
        explanation: "Unique Selling Proposition (USP) adalah proposisi nilai unik yang menjadi daya tarik utama penonton memilih menonton acara tersebut.",
      },
    ],
    materialCards: [
      {
        title: "1. Filosofi Pengembangan Ide Program Televisi",
        content: "Sebuah program televisi lahir dari perpaduan intuisi kreatif dan analisis data pasar. Ide yang baik harus memecahkan rasa penasaran penonton, memberikan katarsis emosi, atau menyajikan solusi informasi relevan yang belum dipenuhi oleh kanal media lainnya.",
        didYouKnow: "Di era digital, data penonton televisi diukur melalui panel meter elektronik Nielsen yang mencatat perpindahan saluran per detik di ribuan rumah sampel.",
      },
      {
        title: "2. Segmentasi Audiens: Demografis, Geografis & Psikografis",
        content: "Produser harus merinci target penonton: Demografis (usia anak/remaja/dewasa, gender, kelas sosial-ekonomi A/B/C), Geografis (urban kota besar vs rural pedesaan), dan Psikografis (gaya hidup, hobi, nilai moral, dan kecenderungan konsumsi media).",
      },
      {
        title: "3. Klasifikasi Format Program: News vs Non-News",
        content: "Format televisi terbagi menjadi News (Hard News, Breaking News, Current Affairs, Investigative Documentary) dan Non-News / Entertainment (Talkshow, Game Show, Reality Show, Musik/Variety Show, Sitkom, dan Talent Contest). Setiap format memiliki POS produksi yang sangat berbeda.",
      },
      {
        title: "4. Merumuskan Unique Selling Proposition (USP) Program",
        content: "Jika ada 5 stasiun televisi menayangkan talkshow memasak, apa yang membuat program Anda ditonton? USP dapat berupa host chef selebriti unik, konsep memasak bahan limbah makanan (zero waste), atau interaksi polling live pemirsa via smartphone.",
        caseStudy: "Program pencarian bakat menambahkan fitur 'Golden Buzzer' dan voting interaktif instan untuk membedakan diri dari format audisi konvensional masa lampau.",
      },
      {
        title: "5. Analisis Kompetitor & Pemetaan Jam Tayang (Dayparting)",
        content: "Dayparting adalah pembagian jam siar televisi: Morning Show (06.00-09.00 ramah keluarga/berita pagi), Daytime (09.00-15.00 ibu rumah tangga), Fringe Time (15.00-18.00 anak/remaja sepulang sekolah), Prime Time (18.00-22.00 keluarga santai), dan Late Night (22.00 ke atas audiens dewasa).",
      },
      {
        title: "6. Menyusun Premis, Sinopsis & Logline Program",
        content: "Logline adalah kalimat padat (1-2 kalimat) yang merangkum tokoh utama, tantangan/premis, dan keunikan tontonan. Contoh: 'Seorang koki tradisional berkeliling nusantara menantang restoran bintang lima menduplikasi resep sambal warisan leluhur dalam 30 menit.'",
      },
      {
        title: "7. Format Treatment: Cetak Biru Visual Program",
        content: "Treatment menjelaskan struktur program secara deskriptif: bagaimana pembukaan (opening bumper), gaya pembawaan host, tata pencahayaan (hangat vs dramatis), set panggung, tata musik latar, serta pembagian segmen demi segmen secara jelas.",
      },
      {
        title: "8. Karakteristik Format Program Talkshow Televisi",
        content: "Talkshow mengandalkan kekuatan dialog, riset narasumber berbobot, dan kepiawaian host menggali informasi tanpa mendominasi. Set panggung biasanya dirancang intim dengan sofa dan meja rendah untuk menciptakan kenyamanan psikologis narasumber.",
      },
      {
        title: "9. Karakteristik Format Program Magasin (Magazine Show)",
        content: "Magazine Show memuat berbagai topik ringan dalam satu tayangan (misal: rubrik kuliner, fesyen, wisata, dan teknologi dalam episode 30 menit). Dibutuhkan presenter yang dinamis dan penyuntingan visual yang cepat dengan grafis menarik.",
      },
      {
        title: "10. Karakteristik Format Program Dokumenter Televisi",
        content: "Dokumenter mengedepankan fakta riil tanpa rekayasa fiksi. Alur naskah dibangun melalui wawancara mendalam, footage observasional (b-roll), arsip sejarah, dan narasi Voice Over (VO) yang mengikat cerita secara tematik.",
      },
      {
        title: "11. Riset Konten & Fact Checking Program Siaran",
        content: "Sebelum konsep diproduksi, tim riset wajib memverifikasi keabsahan narasumber, keakuratan data statistik, dan memastikan materi tidak melanggar batasan SARA, pornografi, maupun etika perlindungan anak sesuai kode P3SPS.",
        didYouKnow: "Stasiun TV dapat dikenai teguran tertulis atau penghentian sementara tayangan oleh KPI jika menayangkan narasumber anak yang menjadi korban kekerasan tanpa menyamarkan identitasnya.",
      },
      {
        title: "12. Peran Elemen Audio Visual dalam Penguatan Konsep",
        content: "Konsep program harus selaras dengan elemen artistik: warna grafis logo (branding), musik intro (jingle sonic branding), wardrobe presenter, hingga gaya pergerakan kamera (handheld dinamis untuk program traveling vs dolly stabil untuk talkshow serius).",
      },
      {
        title: "13. Interaktivitas & Konvergensi Media Baru (Second Screen)",
        content: "Konsep program modern wajib mengintegrasikan fenomena layar kedua (second screen). Pemirsa menonton televisi sambil berinteraksi melalui polling Twitter/X, filter TikTok, atau streaming live chat di platform digital stasiun TV.",
      },
      {
        title: "14. Pitching Program ke Jajaran Direksi / Calon Sponsor",
        content: "Pitching adalah presentasi singkat (5–10 menit) kepada Programming Director atau calon sponsor. Format presentasi mencakup: Judul, Logline, Target Audiens, USP, Desain Visual Set, Contoh Run Down Segmen, dan Proyeksi Rating Potensial.",
      },
      {
        title: "15. Pembuatan Pilot Project (Episode Uji Coba)",
        content: "Episode Pilot diproduksi untuk melihat bagaimana konsep di atas kertas bekerja saat direkam di studio. Pilot ditonton oleh kelompok uji coba (Focus Group Discussion / FGD) untuk mendapatkan kritik perbaikan sebelum stasiun TV memesan satu musim penuh (13 atau 26 episode).",
      },
      {
        title: "16. Mengantisipasi Fatigue (Kejenuhan Format Tayangan)",
        content: "Setiap format program memiliki siklus hidup (life cycle). Produser harus menyiapkan variasi gimmick, bintang tamu spesial, atau perubahan tata set panggung pada episode ke-10 agar penonton tidak merasa jenuh dan beralih ke saluran lain.",
      },
      {
        title: "17. Studi Kasus: Transformasi Program Berita Menjadi Infotainment Cerdas",
        content: "Stasiun TV mengemas berita ekonomi yang rumit menjadi program kuliner dan belanja gaya hidup. Hasilnya, rating meningkat 40% karena konsep mampu menerjemahkan data teknis ke dalam bahasa keseharian masyarakat.",
      },
      {
        title: "18. Etika Penyiaran & Tanggung Jawab Sosial Program",
        content: "Program televisi tidak boleh semata-mata mengejar rating dengan sensasi murahan. Konsep yang bermartabat harus memberikan pencerahan, mencerdaskan kehidupan bangsa, dan menumbuhkan toleransi kebangsaan sesuai amanat UU Penyiaran No. 32 Tahun 2002.",
      },
      {
        title: "19. Monetisasi Program: Built-in Ads & Sponsorship Integration",
        content: "Konsep program yang matang sudah memikirkan bagaimana sponsor masuk tanpa merusak estetika: penempatan produk di meja presenter (product placement), segmen khusus kuis berhadiah, atau narasumber ahli yang terafiliasi secara transparan.",
      },
      {
        title: "20. Rangkuman & Lembar Portofolio Pitch Deck",
        content: "Sebuah ide hebat hanya bernilai jika dapat dieksekusi secara teknis dan finansial. Rancang Pitch Deck program televisi impian Anda dengan target audiens terdefinisi, USP yang memikat, dan kesiapan operasional studio multi-kamera.",
      },
    ],
    video: {
      title: "Merancang Format dan Konsep Program Televisi yang Disukai Penonton",
      embedUrl: "https://www.youtube.com/embed/5F_CffpG1iE",
      guide: "Perhatikan bagaimana produser merumuskan USP program, membedah target audiens demografis, dan menyusun pitch deck ke stasiun televisi.",
    },
    gamePairs: [
      { id: 1, left: "Demografis", right: "Kategori audiens berdasarkan usia, gender, pendapatan, dan pendidikan" },
      { id: 2, left: "Dayparting", right: "Strategi penjadwalan program berdasarkan kebiasaan penonton di jam tertentu" },
      { id: 3, left: "Pilot Episode", right: "Episode uji coba pertama untuk evaluasi format sebelum produksi satu musim" },
      { id: 4, left: "Logline", right: "Satu atau dua kalimat padat yang merangkum premis dan daya tarik program" },
      { id: 5, left: "P3SPS", right: "Pedoman Perilaku Penyiaran dan Standar Program Siaran dari KPI" },
    ],
    caseTitle: "Studi Kasus 2: Re-Branding Program Remaja yang Merosot Ratingnya",
    caseScenario: "Sebuah program majalah remaja berdurasi 30 menit mengalami penurunan penonton drastis selama 3 bulan berturut-turut. Hasil riset menunjukkan gaya bahasa presenter terlalu kaku dan topik yang diangkat sudah basi karena terlambat 2 minggu dari tren media sosial.",
    caseInstruction: "Sebagai Associate Producer baru, rumuskan 3 langkah konkret re-branding program mencakup perubahan USP, integrasi konten tren TikTok, dan pembaruan format set panggung!",
    sampleQuestions: [
      {
        id: 1108,
        bloom: "C4",
        stem: "Jika sebuah program talkshow ditujukan untuk kelompok usia 15–24 tahun (Generasi Z), penyesuaian gaya visual yang paling tepat adalah...",
        options: [
          { key: "A", text: "Menggunakan pembawa acara yang membaca prompter formal tanpa improvisasi" },
          { key: "B", text: "Pewarnaan visual set yang cerah, grafik on-screen pop-art, dan ritme pemotongan shot kamera yang lebih dinamis" },
          { key: "C", text: "Menghilangkan seluruh musik latar agar suasana studio senyap" },
          { key: "D", text: "Menayangkan program pada slot dini hari pukul 02.00 WIB" },
        ],
        correctKey: "B",
        explanation: "Audiens muda menyukai visual yang energetik, warna ekspresif, dan tempo perpindahan visual yang tidak monoton.",
      },
    ],
    lkpd: {
      title: "LKPD F1-K2: Penyusunan Proposal Konsep Program Televisi (Pitch Deck)",
      objective: "Peserta didik mampu merumuskan konsep program TV orisinal dalam format proposal pitch deck lengkap dengan target audiens dan USP.",
      tools: ["Komputer", "Aplikasi Presentasi (Google Slides / PowerPoint / Canva)", "Template Pitch Deck Program TV"],
      steps: [
        "Pilih salah satu format program: Talkshow, Magazine Show, atau Talent Contest.",
        "Rumuskan Judul, Logline (maks. 30 kata), dan Premis utama.",
        "Petakan target audiens secara demografis (usia, gender, SES) dan psikografis.",
        "Jelaskan 3 poin Unique Selling Proposition (USP) yang membedakan dari program sejenis.",
        "Rancang deskripsi visual pembagian 4 segmen dalam durasi 30 menit.",
      ],
      outputFormat: "Pitch Deck Proposal Format PDF 5-8 Slide.",
    },
    journalQuestions: {
      q1: "Mengapa riset audiens harus dilakukan sebelum tim kreatif mulai menulis naskah dialog?",
      q2: "Apa tantangan terbesar Anda saat berusaha menemukan ide program yang benar-benar orisinal dan belum pernah ada di televisi?",
      q3: "Bagaimana cara Anda menyeimbangkan idealisme seni dengan tuntutan komersial stasiun televisi?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi profil target audiens secara demografis dan psikografis dengan tepat.",
      "Mampu merumuskan Unique Selling Proposition (USP) yang kuat pada proposal program televisi.",
      "Mampu mempresentasikan proposal konsep program TV dalam format pitch deck profesional.",
    ],
  },

  // =========================================================================
  // KONTEN 3: Perencanaan produksi (jadwal, budget, rundown) (20 Slide)
  // =========================================================================
  {
    id: "f1-k3",
    order: 3,
    title: "3. Perencanaan produksi (jadwal, budget, rundown)",
    shortTitle: "Jadwal, Budget & Rundown",
    summary: "Teknik penyusunan Rencana Anggaran Biaya (RAB), Master Production Schedule, dan penyusunan naskah Rundown detik-demi-detik berstandar Master Control Room.",
    kompetensi: ["1. Menghitung", "2. Menyusun"],
    tujuanPembelajaran: [
      "Peserta didik mampu menyusun Rencana Anggaran Biaya (RAB) produksi televisi yang rasional dan efisien.",
      "Peserta didik mampu menyusun Master Schedule dan Rundown siaran langsung dengan timecode detik presisi.",
    ],
    hookQuestion: "Jika rundown acara live Anda berdurasi 30 menit namun saat di studio over 90 detik, segmen mana yang harus Anda korbankan tanpa melanggar kontrak sponsor?",
    hookContext: "Pada siaran langsung, waktu tidak dapat dihentikan. Kesalahan perhitungan durasi rundown 1 menit dapat menyebabkan materi inti terpotong sebelum penutupan atau memotong jatah iklan komersial bernilai puluhan juta rupiah.",
    pretestQuestions: [
      {
        id: 1109,
        bloom: "C3",
        stem: "Sebuah program televisi 30 menit memiliki alokasi waktu tayang bersih materi program (Net Air Time) rata-rata sebesar...",
        options: [
          { key: "A", text: "22 hingga 24 menit" },
          { key: "B", text: "30 menit murni tanpa jeda" },
          { key: "C", text: "15 menit" },
          { key: "D", text: "28 menit" },
        ],
        correctKey: "A",
        explanation: "Sisa 6 hingga 8 menit dialokasikan untuk jeda komersial (commercial break), stasiun promo bumper, dan identifikasi stasiun (station ID).",
      },
      {
        id: 1110,
        bloom: "C2",
        stem: "Tabel susunan urutan materi penayangan acara televisi yang memuat kolom segmen, durasi per detik, sumber video, audio cue, dan keterangan teknis grafis disebut...",
        options: [
          { key: "A", text: "Rundown Program" },
          { key: "B", text: "Call Sheet Talent" },
          { key: "C", text: "In-Voice Faktur" },
          { key: "D", text: "Kartu Stok Baterai" },
        ],
        correctKey: "A",
        explanation: "Rundown adalah dokumen pengendali utama waktu dan instruksi teknis bagi sutradara, switcher, audio, dan floor director selama siaran.",
      },
    ],
    materialCards: [
      {
        title: "1. Tiga Pilar Perencanaan Produksi Televisi",
        content: "Perencanaan produksi (Production Planning) bertumpu pada segitiga manajemen: Waktu (Time), Anggaran (Budget), dan Mutu Artistik (Scope/Quality). Perubahan pada salah satu pilar akan mempengaruhi pilar lainnya secara langsung.",
        didYouKnow: "Rundown siaran langsung ditulis dalam format timecode SMPTE Jam:Menit:Detik:Frame (00:00:00:00) agar selaras dengan otomasi pemutar kaset/server stasiun TV.",
      },
      {
        title: "2. Struktur Rencana Anggaran Biaya (RAB): Biaya Di Atas Garis (Above-The-Line)",
        content: "Biaya Above-The-Line (ATL) meliputi biaya hak cipta naskah, royalti ide cerita, honorarium Executive Producer, Sutradara, Host utama, dan Bintang Tamu (Artis). Biaya ini dinegosiasikan sebelum produksi fisik dimulai.",
      },
      {
        title: "3. Biaya Di Bawah Garis (Below-The-Line): Fasilitas & Operasional",
        content: "Biaya Below-The-Line (BTL) mencakup biaya teknis: sewa studio, sewa kamera/lensa, tata cahaya, kru teknis (cameraman, gaffer, audio, switcherman), make-up/kostum, konsumsi katering harian, transportasi, dan hard drive arsip.",
      },
      {
        title: "4. Manajemen Dana Cadangan (Contingency Cost)",
        content: "Setiap anggaran produksi televisi wajib mengalokasikan 10% hingga 15% dana tak terduga (Contingency Fund). Dana ini digunakan untuk mengantisipasi cuaca buruk syuting outdoor, kerusakan kabel mendadak, atau lembur studio (overtime fee).",
        caseStudy: "Akibat hujan deras, syuting tertunda 3 jam. Dana kontingensi menyelamatkan kas produksi untuk membayar biaya perpanjangan generator listrik studio portable.",
      },
      {
        title: "5. Master Production Schedule (Jadwal Induk Produksi)",
        content: "Master Schedule memetakan seluruh siklus proyek ke dalam Gantt Chart. Berisi fase: Pre-Production (Minggu 1-2), Rehearsal (Minggu 3), Production/Shooting (Minggu 3-4), Post-Production (Minggu 5), QC Approval (Minggu 6), dan Air Date Broadcast.",
      },
      {
        title: "6. Call Sheet & Alokasi Jam Kerja Kru Harian",
        content: "Call Sheet adalah lembar penugasan harian yang dikirimkan ke seluruh kru dan talent malam sebelum syuting. Memuat jam panggilan (call time), jadwal sarapan, waktu make-up, jadwal blocking kamera, nomor kontak darurat, dan alamat fasilitas medis terdekat.",
      },
      {
        title: "7. Anatomi Kolom Dokumen Rundown Siaran Televisi",
        content: "Sebuah rundown profesional memuat 8 kolom standar: (1) Nomor Urut, (2) Segmen/Acara, (3) Deskripsi Konten, (4) Durasi Bersih (Segment Duration), (5) Akumulasi Waktu (Cumulative Time), (6) Sumber Video (Cam 1/Cam 2/VT/Graphic), (7) Audio Cue (Mic Host/Music/Sound Effect), dan (8) Catatan Floor Director.",
      },
      {
        title: "8. Konsep Net Air Time vs Gross Air Time",
        content: "Gross Air Time adalah total slot yang dialokasikan stasiun TV di jadwal pemancar (misal: tepat 30 menit = 1.800 detik). Net Air Time adalah durasi tayangan murni program (misal: 23 menit 30 detik = 1.410 detik). Selisih 390 detik adalah Commercial Break dan Station ID.",
      },
      {
        title: "9. Strategi Pembagian Segmen dan Commercial Break",
        content: "Format 30 menit biasanya dibagi menjadi 4 Segmen (Seg 1: Opening & Topik Utama, Seg 2: Eksplorasi & Bintang Tamu, Seg 3: Interaksi/Praktik, Seg 4: Kesimpulan & Penutup). Di antara segmen 1-2, 2-3, dan 3-4 disisipkan Commercial Break (CB 1, CB 2, CB 3).",
      },
      {
        title: "10. Teknik Menjaga Penonton Melewati Jeda Iklan (Cliffhanger)",
        content: "Agar penonton tidak mengganti saluran saat jeda iklan, produser memasang 'Hook/Cliffhanger' di akhir segmen. Contoh narasi host: 'Tetap bersama kami, karena setelah jeda berikut, rahasia kemenangan akan diungkap oleh sang juara!'",
        didYouKnow: "Penurunan penonton paling tajam (audience drop-off) selalu terjadi pada 15 detik pertama jeda komersial jika teaser sebelum iklan tidak menarik.",
      },
      {
        title: "11. Akumulasi Timecode & Penghitungan Mundur (Back-Timing)",
        content: "Back-timing adalah teknik menghitung mundur dari detik berakhirnya siaran. Jika program harus selesai pada menit ke 29:50, dan sekarang menit 25:00, Produser tahu persis masih ada sisa waktu 4 menit 50 detik untuk segmen penutup.",
      },
      {
        title: "12. Peran Asisten Produser dalam Mengawasi Stop Watch Rundown",
        content: "Di Control Room, Asisten Produser (AP) bertugas sebagai Time Keeper. Menggunakan dual stop-watch digital: satu menghitung durasi segmen yang sedang berjalan, satu menghitung total durasi siaran akumulatif.",
      },
      {
        title: "13. Fasilitas Buffer Segmen (Segmen Elastis Penyelamat Waktu)",
        content: "Produser berpengalaman selalu menyiapkan segmen yang fleksibel (bisa dipotong atau diperpanjang 1 menit). Biasanya diletakkan di Segmen 4 (misal: sesi kuis penonton atau komentar media sosial) untuk menyesuaikan waktu jika segmen sebelumnya over/under time.",
      },
      {
        title: "14. Breakdown Kebutuhan Teknis Lintas Departemen",
        content: "Dari rundown, Produser menyusun lembar breakdown khusus: Lighting Plot Sheet (posisi lampu per segmen), Camera Shot Card (daftar shot juru kamera), Audio Input Patch Sheet (channel mic narasumber), dan Graphic CG Order (teks nama narasumber di layar).",
      },
      {
        title: "15. Menghitung Biaya Lembur (Overtime) & Efisiensi Studio",
        content: "Biaya sewa studio dihitung per blok waktu (biasanya per 8 jam / shift). Keterlambatan syuting 1 jam dapat memicu denda overtime sebesar 1,5 kali tarif normal untuk kru dan sarana gedung.",
      },
      {
        title: "16. Negosiasi Biaya Talent & Rider Artis",
        content: "Artis terkenal sering memiliki 'Hospitality Rider' (permintaan ruang tunggu khusus, menu makanan tertentu, akomodasi bintang 5). Line Producer harus cermat memasukkan klausul ini ke dalam RAB agar tidak melebihi anggaran.",
      },
      {
        title: "17. Digital Tools untuk Perencanaan Produksi Modern",
        content: "Produksi televisi kontemporer tidak lagi menggunakan kertas coret-coretan manual, melainkan software kolaboratif real-time seperti Rundown Creator, Google Sheets terintegrasi timecode formula, Yamdu, atau Movie Magic Budgeting.",
      },
      {
        title: "18. Studi Kasus: Mengatasi Underrun 2 Menit pada Siaran Langsung",
        content: "Pada program live, narasumber berbicara terlalu cepat sehingga segmen 3 selesai 2 menit lebih awal (underrun). Produser segera menginstruksikan Floor Director memberi kode 'Stretch' (ulur waktu) kepada host untuk membuka sesi pertanyaan ekstra dari audiens studio.",
      },
      {
        title: "19. Kepatuhan Regulasi Batas Waktu Siaran Iklan Niaga",
        content: "UU Penyiaran membatasi durasi siaran iklan niaga maksimal 20% dari total waktu siar harian bagi lembaga penyiaran swasta. Pelanggaran batas ini dapat mengakibatkan teguran keras dari instansi berwenang.",
      },
      {
        title: "20. Rangkuman & Keterampilan Wajib Rundown Planner",
        content: "Kemampuan menyusun rundown presisi detik dan menghitung anggaran realistis adalah kunci karier sukses seorang Produser Televisi. Ketepatan waktu adalah tanda kehormatan profesional tertinggi dalam dunia siaran langsung.",
      },
    ],
    video: {
      title: "Cara Menyusun Rundown dan Budget Sheet Produksi Siaran Live TV",
      embedUrl: "https://www.youtube.com/embed/L1ptzK-B86o",
      guide: "Pelajari format kolom rundown standar televisi, teknik penghitungan timecode akumulatif, dan alokasi commercial break yang presisi.",
    },
    gamePairs: [
      { id: 1, left: "Net Air Time", right: "Durasi waktu tayang murni materi isi program di luar jeda iklan" },
      { id: 2, left: "Gross Air Time", right: "Total jatah alokasi waktu pemancar stasiun TV (termasuk iklan)" },
      { id: 3, left: "Back-Timing", right: "Metode penghitungan mundur sisa waktu siaran untuk mencapai target penutupan" },
      { id: 4, left: "Contingency Fund", right: "Alokasi dana tak terduga 10-15% dalam RAB untuk mengantisipasi insiden darurat" },
      { id: 5, left: "Stretch Cue", right: "Kode isyarat tangan dari FD kepada host untuk memperlambat tempo dialog (mengulur waktu)" },
    ],
    caseTitle: "Studi Kasus 3: Menghitung Timecode Rundown Talkshow 30 Menit",
    caseScenario: "Sebuah program talkshow memiliki Gross Air Time 30:00 (1.800 detik). Tersedia 3 jeda Commercial Break masing-masing berdurasi 2:00 (120 detik). Opening Bumper berdurasi 0:30 detik dan Closing Bumper berdurasi 0:30 detik.",
    caseInstruction: "Hitung total Net Air Time murni untuk materi dialog talkshow! Bagi durasi bersih tersebut ke dalam 4 segmen secara logis dan buatkan simulasi timecode akumulatifnya!",
    sampleQuestions: [
      {
        id: 1111,
        bloom: "C4",
        stem: "Jika total durasi kotor (Gross Air Time) adalah 30:00 menit, total jeda iklan adalah 6:00 menit, dan bumper pembuka/penutup adalah 1:00 menit, maka durasi bersih (Net Air Time) materi talkshow adalah...",
        options: [
          { key: "A", text: "23 menit 00 detik" },
          { key: "B", text: "24 menit 00 detik" },
          { key: "C", text: "22 menit 30 detik" },
          { key: "D", text: "25 menit 00 detik" },
        ],
        correctKey: "A",
        explanation: "Net Air Time = 30:00 - 6:00 (iklan) - 1:00 (bumper) = 23:00 menit.",
      },
    ],
    lkpd: {
      title: "LKPD F1-K3: Penyusunan Dokumen Rundown Siaran Langsung 30 Menit",
      objective: "Peserta didik mampu menyusun tabel rundown siaran langsung multi-kamera berdurasi 30 menit dengan alokasi timecode detik presisi.",
      tools: ["Komputer / Laptop", "Aplikasi Spreadsheet (Excel / Google Sheets)", "Template Rundown Siaran TV"],
      steps: [
        "Buat tabel rundown dengan 8 kolom standar industri siaran televisi.",
        "Bagi slot 30 menit ke dalam 4 segmen dengan 3 jeda iklan (commercial break).",
        "Tuliskan durasi per segmen dan gunakan rumus formula akumulasi waktu otomatis.",
        "Cantumkan cue sumber video (Cam 1, Cam 2, VT) dan instruksi audio pada setiap segmen.",
      ],
      outputFormat: "File Spreadsheet / PDF Tabel Rundown Siaran Siap MCR.",
    },
    journalQuestions: {
      q1: "Mengapa kemampuan matematika timecode sangat penting bagi seorang Asisten Produser di Control Room?",
      q2: "Apa yang akan Anda lakukan jika host berbicara melampaui batas waktu di segmen 2 saat siaran berlangsung?",
      q3: "Bagaimana cara Anda mengendalikan pengeluaran agar biaya operasional produksi tidak melampaui RAB yang disetujui?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi komponen pembiayaan Above-The-Line dan Below-The-Line dalam RAB televisi.",
      "Mampu menghitung alokasi Net Air Time dan Commercial Break pada durasi tayangan siaran.",
      "Mampu menyusun rundown teknis siaran langsung multi-kamera dengan timecode detik presisi.",
    ],
  },

  // =========================================================================
  // KONTEN 4: Pelaksanaan produksi dan siaran program (20 Slide)
  // =========================================================================
  {
    id: "f1-k4",
    order: 4,
    title: "4. Pelaksanaan produksi dan siaran program",
    shortTitle: "Pelaksanaan Siaran Live",
    summary: "Manajemen eksekusi siaran televisi on-air di Master Control Room dan Studio Floor, komando interkom, peran Floor Director, dan mitigasi krisis.",
    kompetensi: ["1. Menerapkan", "2. Mengoordinasikan"],
    tujuanPembelajaran: [
      "Peserta didik mampu menerapkan tata kelola siaran langsung televisi di ruang kendali siaran (Production Control Room).",
      "Peserta didik mampu mengoordinasikan interaksi antara Floor Director, Switcherman, Audio Mixer, dan Juru Kamera saat on-air.",
    ],
    hookQuestion: "Ketika lampu kamera berwarna merah menyala (Tally On), apa komando verbal resmi pertama yang diteriakkan oleh Sutradara ke interkom kru?",
    hookContext: "Dalam hitungan detik sebelum siaran live, disiplin komando suara di ruang kendali menentukan sinkronisasi puluhan perangkat siaran canggih dan konsentrasi pengisi acara.",
    pretestQuestions: [
      {
        id: 1112,
        bloom: "C2",
        stem: "Ruangan pusat kendali teknis di stasiun televisi tempat Sutradara, Produser, Switcher, dan Audioman mengarahkan jalannya rekaman/siaran disebut...",
        options: [
          { key: "A", text: "Production Control Room (PCR)" },
          { key: "B", text: "Green Room" },
          { key: "C", text: "Wardrobe Dressing Room" },
          { key: "D", text: "Grip Equipment Storage" },
        ],
        correctKey: "A",
        explanation: "PCR (Production Control Room) adalah pusat kendali operasi studio tempat pengarah acara memotong gambar dan memimpin kru siaran.",
      },
      {
        id: 1113,
        bloom: "C2",
        stem: "Bahasa isyarat tangan non-verbal yang diberikan Floor Director kepada presenter dengan cara menggerakkan jari telunjuk memutar di depan dada berarti...",
        options: [
          { key: "A", text: "Speed Up / Percepat pembicaraan" },
          { key: "B", text: "Cut / Hentikan bicara segera" },
          { key: "C", text: "Standby 1 menit" },
          { key: "D", text: "Kamera pindah ke narasumber sebelah" },
        ],
        correctKey: "A",
        explanation: "Isyarat memutar telunjuk (wind up / speed up) memerintahkan presenter mempercepat pembicaraan karena waktu segmen hampir habis.",
      },
    ],
    materialCards: [
      {
        title: "1. Atmosfer & Zona Kerja Saat Siaran Langsung (Live On-Air)",
        content: "Saat tanda 'ON AIR' menyala di pintu studio, seluruh kegiatan santai dihentikan. Studio memasuki protokol hening (Silence Protocol). Hubungan komunikasi fisik digantikan oleh jaringan interkom terisolasi dan bahasa isyarat tangan Floor Director.",
        didYouKnow: "Pintu studio televisi dirancang dengan sistem 'Acoustic Soundlock' ganda berdinding tebal agar kebisingan luar tidak bocor ke mikrofon studio.",
      },
      {
        title: "2. Denah Kerja Production Control Room (PCR)",
        content: "Di PCR terdapat meja kendali utama: Sutradara (Program Director) duduk di tengah, didampingi Switcherman di sebelah kiri dan Produser di sebelah kanan. Di baris belakang duduk Asisten Sutradara/Timekeeper dan Operator Grafis (CG/Chyron).",
      },
      {
        title: "3. Dinding Monitor Multi-Viewer di PCR",
        content: "Sutradara memantau layar Multi-Viewer raksasa yang menampilkan: Layar Preview (persiapan shot berikutnya), Layar Program (gambar yang sedang on-air ditonton pemirsa), Layar Kamera 1 s/d 4, Layar Video Tape/Clip, dan Layar Grafis CG.",
      },
      {
        title: "4. Bahasa Komando Standar Sutradara (Calling The Shots)",
        content: "Sutradara menggunakan komando dua tahap: Peringatan (Warning) dan Eksekusi (Action). Contoh: 'Standby Cam 1... Take Cam 1!' atau 'Standby VT 2 with sound... Roll VT 2, Play!' untuk meminimalkan kesalahan potong gambar oleh Switcherman.",
        caseStudy: "Jika sutradara langsung berseru 'Take Cam 1' tanpa aba-aba 'Standby', switcherman bisa kaget dan menekan tombol kamera yang salah.",
      },
      {
        title: "5. Peran Krusial Floor Director (FD) di Lantai Studio",
        content: "FD adalah perpanjangan tangan sutradara dan produser di depan kamera. FD mengenakan headset nirkabel satu telinga agar dapat mendengar instruksi PCR sekaligus mendengar audio riil di studio. FD mengontrol gerak talent dan menjaga energi audiens.",
      },
      {
        title: "6. Bahasa Isyarat Tangan Standar Studio Televisi",
        content: "Isyarat wajib FD: Jari telunjuk tegak ke atas (Standby), Jari telunjuk menunjuk talent (Cue/Mulai bicara), Dua tangan digerakkan seperti menarik permen karet (Stretch/Ulur waktu), Telunjuk berputar melingkar (Speed up), dan Gerakan tangan menggorok leher (Cut/Selesai total).",
      },
      {
        title: "7. Koordinasi dengan Operator Teleprompter",
        content: "Operator Teleprompter duduk di pojok studio atau PCR, memutar roda kendali teks kaca tepat di depan lensa kamera. Kecepatan gulir teks prompter harus mengikuti tempo wicara presenter, bukan presenter yang mengejar gulir teks.",
      },
      {
        title: "8. Koordinasi Audio Mixing & Sound Balancing On-Air",
        content: "Di bilik audio, Audioman memantau level puncak suara dialog (standar -18 dBFS hingga -12 dBFS) menggunakan fader mixer. Audioman mematikan fader mic narasumber yang sedang tidak berbicara guna mencegah suara latar (ambient noise) masuk.",
      },
      {
        title: "9. Pengoperasian Karakter Generator (CG / Lower Third)",
        content: "Operator CG bertanggung jawab menampilkan nama jabatan narasumber (Lower Third), papan skor, atau informasi berjalan (running text) sesuai komando sutradara. Kesalahan ketik huruf pada nama tokoh di siaran live menjadi tanggung jawab operator CG.",
        didYouKnow: "Di stasiun berita, nama tokoh penting disimpan dalam bank data template CG yang sudah diperiksa ejaannya untuk menghindari salah tulis saat siaran live.",
      },
      {
        title: "10. Pengendalian Lighting Console / Dimmer Board Saat Siaran",
        content: "Lighting Operator mengontrol konsol DMX. Menyesuaikan intensitas lampu jika host bergerak ke zona set lain atau mengubah efek warna lampu latar (cyclorama) saat memasuki segmen musik spesial.",
      },
      {
        title: "11. Pergerakan Juru Kamera Studio & Kedisiplinan Kabel (Cable Pushing)",
        content: "Juru kamera studio mematuhi perintah framing dari sutradara via interkom. Di belakang juru kamera terdapat asisten (Cable Grip) yang bertugas menarik dan merapikan kabel kamera tebal agar roda pedestal tidak melindas kabel saat bergerak.",
      },
      {
        title: "12. Protokol Menghadapi 'Dead Air' (Hening Siaran)",
        content: "Dead air adalah mimpi buruk siaran televisi (layar hitam atau tanpa suara selama lebih dari 3 detik). Jika sinyal studio mati, MCR segera memotong siaran dan mengalihkan ke video klip promosi stasiun (Station Promo) dalam tempo 2 detik.",
      },
      {
        title: "13. Prosedur Masuk dan Keluar Jeda Komersial (Commercial Break)",
        content: "Menjelang iklan, sutradara memberi aba-aba: 'Standby Bumper Out... Fade to Black... Roll Commercial!' Di MCR, sistem otomasi server mengambil alih penayangan deretan iklan sponsor sesuai daftar antrean tayang (Traffic Log).",
      },
      {
        title: "14. Manajemen Penonton di Lantai Studio (Studio Audience)",
        content: "Koordinator penonton (Clapper/Cheerleader) memandu tepuk tangan penonton studio menggunakan papan tulisan 'APPLAUSE'. Tepuk tangan yang kompak menciptakan atmosfer tayangan yang hidup dan meriah bagi penonton di rumah.",
      },
      {
        title: "15. Keselamatan Kerja Listrik & Penanganan Panas Lampu Studio",
        content: "Lampu studio berkekuatan tinggi memancarkan panas ekstrem. Selama siaran berjam-jam, sistem sirkulasi pendingin udara (AC chiller) studio harus beroperasi optimal dengan tingkat kebisingan rendah (Low Noise HVAC).",
      },
      {
        title: "16. Mengatasi Penolakan / Gugup Narasumber di Depan Kamera (Stage Fright)",
        content: "Jika bintang tamu mendadak kaku karena grogi (stage fright), FD segera memberikan senyuman menenangkan, memandu tarikan napas dalam, dan meminta host membuka obrolan ringan di luar materi siaran saat jeda iklan.",
      },
      {
        title: "17. Alur Koordinasi dengan OB Van untuk Siaran Luar Gedung",
        content: "Pada siaran gabungan (studio dan reporter lapangan via OB Van/LiveU), sutradara studio memantau latensi tunda sinyal (delay 1-2 detik) melalui transmisi satelit atau jaringan seluler 5G berikatan (bonded cellular).",
      },
      {
        title: "18. Studi Kasus: Insiden Mikrofon Rusak di Tengah Dialog Siaran Langsung",
        content: "Saat host mewawancarai menteri, mic clip-on menteri berdenging mati. Tanpa panik, FD merayap di luar batas framing kamera (blind spot) dan menyodorkan wireless handheld mic cadangan kepada host dalam waktu 4 detik.",
      },
      {
        title: "19. Etika Bahasa dan Penampilan di Ruang Kontrol Siaran",
        content: "Sutradara dan produser harus menjaga nada bicara yang tegas namun tidak panik di interkom. Kepanikan di PCR akan menular ke lantai studio dan merusak konsentrasi juru kamera serta presenter.",
      },
      {
        title: "20. Rangkuman & Kesiapan Mental Tim Produksi Siaran",
        content: "Pelaksanaan siaran langsung adalah ujian puncak kerja tim penyiaran. Dengan komunikasi interkom yang presisi, kepatuhan POS, dan respons krisis yang tenang, setiap episode siaran televisi dapat diselesaikan dengan sempurna.",
      },
    ],
    video: {
      title: "Tugas Floor Director dan Produser saat Siaran Langsung di Studio",
      embedUrl: "https://www.youtube.com/embed/c3m3z6v9_2M",
      guide: "Amati bagaimana Floor Director menggunakan bahasa isyarat tangan, mengoordinasikan presenter, dan merespons komando sutradara di ruang PCR.",
    },
    gamePairs: [
      { id: 1, left: "PCR", right: "Production Control Room pusat kendali teknis pemotongan gambar siaran studio" },
      { id: 2, left: "Cue Hand Sign", right: "Isyarat jari telunjuk menunjuk talent untuk memberi tanda mulai berbicara" },
      { id: 3, left: "Cut Hand Sign", right: "Isyarat tangan menyilang leher untuk menghentikan pembicaraan secara mutlak" },
      { id: 4, left: "Tally Light", right: "Lampu merah di kamera penanda bahwa kamera tersebut sedang on-air" },
      { id: 5, left: "Dead Air", right: "Kondisi fatal layar siaran hening tanpa gambar atau suara selama beberapa detik" },
    ],
    caseTitle: "Studi Kasus 4: Insiden Interkom Mati Saat Siaran Debat Langsung",
    caseScenario: "Di tengah siaran debat langsung berdurasi 60 menit, kabel induk sistem interkom antara sutradara di PCR dan juru kamera 2 terinjak hingga putus. Kamera 2 tidak dapat mendengar komando framing dari sutradara.",
    caseInstruction: "Sebagai Floor Director di lantai studio, bagaimana Anda mendeteksi masalah ini dan tindakan cepat apa yang Anda ambil untuk menjembatani instruksi sutradara ke juru kamera 2 tanpa mengganggu jalannya debat?",
    sampleQuestions: [
      {
        id: 1114,
        bloom: "C4",
        stem: "Mengapa komando sutradara ke switcherman selalu diawali dengan kata 'Standby' sebelum menyebutkan tombol eksekusi 'Take'?",
        options: [
          { key: "A", text: "Untuk memberi waktu switcherman mengarahkan jarinya ke tombol yang benar di kontrol panel vision mixer" },
          { key: "B", text: "Hanya sekedar kebiasaan lama tanpa fungsi teknis" },
          { key: "C", text: "Agar suara sutradara terdengar lebih keras di mikrofon" },
          { key: "D", text: "Untuk menyalakan lampu studio otomatis" },
        ],
        correctKey: "A",
        explanation: "Komando peringatan 'Standby' memberi waktu reaksi sepersekian detik bagi operator untuk memastikan tombol kamera yang dipilih tepat.",
      },
    ],
    lkpd: {
      title: "LKPD F1-K4: Praktik Simulasi Peran Floor Director dan Komando PCR",
      objective: "Peserta didik mampu mempraktikkan komando panggilan sutradara dan bahasa isyarat tangan Floor Director pada simulasi siaran 1 segmen.",
      tools: ["Studio Mini / Ruang Kelas", "Headset Intercom / Handy Talky", "Kartu Hitung Mundur (Countdown Board)"],
      steps: [
        "Bagi peran kelompok: 1 Sutradara, 1 Switcherman, 1 Floor Director, 2 Juru Kamera, 1 Host.",
        "Sutradara memimpin gladi hitung mundur 10 detik menuju on-air via interkom.",
        "Floor Director mempraktikkan 5 isyarat tangan standar (Standby, Cue, Stretch, Speed Up, Cut).",
        "Simulasikan skenario darurat peralihan kamera saat satu kamera mengalami kendala fokus.",
      ],
      outputFormat: "Video Rekaman Praktik Simulasi & Lembar Penilaian Kinerja Kru.",
    },
    journalQuestions: {
      q1: "Bagaimana perasaan Anda saat pertama kali mendengar tempo komando interkom di ruang kendali siaran?",
      q2: "Mengapa bahasa isyarat tangan non-verbal Floor Director harus dilakukan dengan gerakan yang tegas dan jelas?",
      q3: "Karakter kepribadian apa yang menurut Anda paling dibutuhkan untuk menjadi sutradara siaran langsung yang handal?",
    },
    kktpIndicators: [
      "Mampu menggunakan istilah komando verbal standar penyiaran multi-kamera di Production Control Room.",
      "Mampu mempraktikkan 5 bahasa isyarat tangan standar Floor Director dengan benar dan percaya diri.",
      "Mampu mengoordinasikan penanganan insiden teknis di lantai studio tanpa memicu jeda siar (dead air).",
    ],
  },

  // =========================================================================
  // KONTEN 5: Evaluasi program siaran & laporan produksi (20 Slide)
  // =========================================================================
  {
    id: "f1-k5",
    order: 5,
    title: "5. Evaluasi program siaran & laporan produksi",
    shortTitle: "Evaluasi & Laporan Produksi",
    summary: "Prosedur evaluasi pasca-siaran (Post-Mortem), analisis data rating & share penonton, audit keuangan, dan penyusunan Laporan Pertanggungjawaban (LPJ).",
    kompetensi: ["1. Mengevaluasi", "2. Menyusun Laporan"],
    tujuanPembelajaran: [
      "Peserta didik mampu mengevaluasi keberhasilan program televisi berdasarkan metrik rating, share, dan efisiensi teknis.",
      "Peserta didik mampu menyusun dokumen Laporan Pertanggungjawaban (LPJ) produksi program televisi secara akuntabel.",
    ],
    hookQuestion: "Jika program siaran Anda dipuji penonton di media sosial tetapi rating dan share Nielsen-nya anjlok, apakah program tersebut dianggap sukses oleh stasiun TV komersial?",
    hookContext: "Dalam industri televisi komersial, stasiun TV hidup dari pendapatan iklan yang bergantung langsung pada data angka rating resmi, bukan semata-mata pujian komentar di media sosial.",
    pretestQuestions: [
      {
        id: 1115,
        bloom: "C2",
        stem: "Persentase jumlah televisi yang menyala dan sedang menyaksikan program tertentu dibandingkan dengan seluruh total televisi yang menyala pada jam tersebut disebut...",
        options: [
          { key: "A", text: "Audience Share" },
          { key: "B", text: "Audience Rating" },
          { key: "C", text: "Traffic Log" },
          { key: "D", text: "Cost Per Mille" },
        ],
        correctKey: "A",
        explanation: "Audience Share mengukur pangsa pasar penonton yang sedang menonton televisi pada jam tertentu yang memilih saluran Anda.",
      },
      {
        id: 1116,
        bloom: "C2",
        stem: "Rapat evaluasi resmi yang digelar tim produksi setelah program ditayangkan untuk membedah kelemahan teknis dan keuangan disebut...",
        options: [
          { key: "A", text: "Post-Mortem Meeting / Evaluasi Pasca Siar" },
          { key: "B", text: "Script Conference" },
          { key: "C", text: "Casting Audition" },
          { key: "D", text: "Dry Run Rehearsal" },
        ],
        correctKey: "A",
        explanation: "Post-Mortem Meeting bertujuan mengevaluasi seluruh proses produksi agar kekurangan tidak terulang pada episode berikutnya.",
      },
    ],
    materialCards: [
      {
        title: "1. Urgensi Evaluasi Pasca Produksi Siaran",
        content: "Proses produksi televisi tidak berakhir saat lampu kamera padam. Tahap evaluasi adalah jembatan penyempurnaan kualitas untuk episode berikutnya. Tanpa evaluasi objektif berbasis data, tim produksi akan mengulangi kesalahan teknis yang merugikan stasiun televisi.",
        didYouKnow: "Setiap pagi pukul 09.00 WIB, para pimpinan stasiun televisi berkumpul dalam 'Morning Rating Meeting' untuk membedah data rating siaran hari sebelumnya.",
      },
      {
        title: "2. Memahami Metrik Kunci: Rating vs Share",
        content: "Rating mengukur persentase penonton dari total populasi rumah tangga bertelvisi. Share mengukur persentase penonton dari total televisi yang AKTIF menyala pada jam tayang tersebut. Contoh: Rating 3.5% dengan Share 18.0%.",
      },
      {
        title: "3. Membaca Grafik Kurva Rating Menit-Demi-Menit (Minute-by-Minute)",
        content: "Laporan riset televisi menyajikan kurva fluktuasi penonton per menit. Produser dapat melihat detik tepat di mana penonton mulai bosan dan mengganti saluran (trough), atau segmen mana yang meraih puncak perhatian penonton (peak).",
        caseStudy: "Dari kurva rating terungkap bahwa penonton beralih channel tepat pada menit ke-12 karena bintang tamu kedua tidak dikenal oleh penonton remaja.",
      },
      {
        title: "4. Evaluasi Kepatuhan Rundown Waktu (Time Discrepancy Analysis)",
        content: "Asisten Produser menyusun laporan perbandingan: Waktu yang direncanakan di Rundown vs Waktu Aktual penayangan. Jika terjadi deviasi (overrun atau underrun) lebih dari 10 detik, penyebab teknisnya harus diidentifikasi dan dicatat.",
      },
      {
        title: "5. Evaluasi Kualitas Teknis Siaran (Technical Quality Audit)",
        content: "Divisi Quality Control (QC) memberikan catatan evaluasi teknis: apakah ada frame gambar yang drop, apakah ada noise denging audio pada channel 2, apakah level pencahayaan under-exposed, atau apakah grafis teks salah ketik.",
      },
      {
        title: "6. Mekanisme Rapat Evaluasi (Post-Mortem Meeting)",
        content: "Post-Mortem dipimpin oleh Produser atau Executive Producer. Format rapat harus profesional, terbuka, dan berfokus pada solusi sistemik (blameless post-mortem), bukan mencari kambing hitam individu kru.",
      },
      {
        title: "7. Evaluasi Performa Pengisi Acara (Talent & Host Review)",
        content: "Mengevaluasi kesiapan host: penguasaan materi naskah, kemampuan mencairkan suasana narasumber, kontak mata ke lensa kamera yang aktif (tally awareness), dan kepatuhan terhadap durasi wicara.",
      },
      {
        title: "8. Evaluasi Penataan Artistik & Kesesuaian Set Studio",
        content: "Penata Artistik mengevaluasi: apakah tata letak meja menghalangi sudut pandang kamera 3, apakah kombinasi warna set cyclorama terlihat menyatu dengan kostum presenter di layar televisi penerima.",
      },
      {
        title: "9. Analisis Sentimen Media Sosial & Keterlibatan Netizen",
        content: "Selain angka Nielsen, tim digital menyusun laporan respon audiens media sosial: jumlah cuitan dengan tagar program, sentimen komentar positif/negatif di YouTube live stream, dan viralitas cuplikan klip di TikTok.",
      },
      {
        title: "10. Evaluasi Kepatuhan Regulasi P3SPS & Rekomendasi KPI",
        content: "Produser memastikan tidak ada teguran dari Komisi Penyiaran Indonesia (KPI). Memeriksa apakah ada pelanggaran etika: tayangan kekerasan tidak pantas, kata-kata kasar, atau iklan tersembunyi yang dilarang undang-undang.",
      },
      {
        title: "11. Audit Keuangan & Rekonsiliasi Anggaran Produksi",
        content: "Line Producer bersama akuntan produksi mencocokkan RAB awal dengan kuitansi pengeluaran aktual (Real Cost vs Budgeted Cost). Menghitung selisih (variance), apakah produksi mengalami keuntungan atau pembengkakan biaya (overbudget).",
      },
      {
        title: "12. Penyusunan Log Sheet & Pengarsipan Pita Master (Archiving)",
        content: "Materi tayangan dan video mentah (raw footage) diarsipkan ke dalam server Digital Asset Management (DAM) dengan penamaan metadata standar: Judul Episode, Tanggal Tayang, Nama Host, dan Daftar Timecode Topik Wawancara.",
        didYouKnow: "Arsip berita televisi disimpan puluhan tahun dan dapat dimonetisasi kembali sebagai materi dokumenter sejarah bernilai tinggi.",
      },
      {
        title: "13. Struktur Dokumen Laporan Pertanggungjawaban (LPJ)",
        content: "Format LPJ standar mencakup: (1) Kata Pengantar, (2) Latar Belakang & Realisasi Konsep, (3) Data Tim Produksi, (4) Rundown Aktual vs Rencana, (5) Laporan Perolehan Rating/Share, (6) Laporan Realisasi Keuangan & Bukti Bayar, (7) Dokumentasi Foto/Video Set, dan (8) Catatan Rekomendasi.",
      },
      {
        title: "14. Mengukur Return on Investment (ROI) bagi Sponsor",
        content: "Untuk program bersponsor, tim menyusun 'Sponsorship Delivery Report': membuktikan bahwa logo sponsor tayang sesuai durasi kontrak (misal: 10 kali penayangan lower third selama 5 detik dan 2 kali penempatan produk aktif di meja).",
      },
      {
        title: "15. Perawatan Alat & Pengembalian Fasilitas Studio (De-Rigging)",
        content: "Setelah siaran, kru merapikan peralatan: mematikan lampu studio secara bertahap agar filamen dingin, membersihkan lensa kamera, menggulung kabel dengan teknik Over-Under, dan mengembalikan alat ke gudang penyimpanan.",
      },
      {
        title: "16. Evaluasi Keselamatan Kerja & Kejadian Nyaris Celaka (Near-Miss)",
        content: "Petugas K3 melaporkan insiden keselamatan: apakah ada kru tersandung kabel, apakah ada lampu yang terlalu panas mengeluarkan asap, dan langkah perbaikan instalasi pengaman listrik untuk masa depan.",
      },
      {
        title: "17. Penyusunan Rencana Tindak Lanjut (Action Plan) Episode Depan",
        content: "Hasil akhir evaluasi dirangkum menjadi 3 prioritas perbaikan wajib untuk episode berikutnya. Misal: (1) Menambah latihan prompter host, (2) Memperbaiki filter audio mic 2, (3) Mengubah urutan segmen 2 menjadi segmen pembuka.",
      },
      {
        title: "18. Studi Kasus: Menyelamatkan Program Unggulan dari Ancaman Drop Out",
        content: "Sebuah program komedi diancam distop karena rating menurun ke angka 1.2%. Melalui rapat evaluasi mendalam, tim mengganti format sketsa menjadi kuis interaktif bersama penonton. Dalam 4 episode, rating melonjak kembali ke angka 3.8%.",
      },
      {
        title: "19. Budaya Apresiasi & Peningkatan Moral Tim Produksi",
        content: "Evaluasi yang hebat tidak hanya mengkritik kesalahan, melainkan memberikan penghargaan (kredit pujian) kepada juru kamera, switcherman, atau FD yang melakukan manuver brilian penyelamatan siaran saat situasi krisis.",
      },
      {
        title: "20. Rangkuman & Visi Produser Televisi Profesional",
        content: "Produser sejati diukur bukan saat semuanya berjalan mulus, melainkan dari kedewasaan mengevaluasi kekurangan dan ketangguhan membangun kembali kualitas program siaran. Laporan produksi yang rapi adalah mahkota integritas profesionalisme Anda.",
      },
    ],
    video: {
      title: "Evaluasi Pasca Siaran dan Pembuatan Laporan Pertanggungjawaban Produksi",
      embedUrl: "https://www.youtube.com/embed/3vj6m-T9y10",
      guide: "Simak bagaimana tim manajemen stasiun TV menganalisis kurva rating Nielsen, membedah laporan discrepency rundown, dan menyusun laporan pertanggungjawaban program.",
    },
    gamePairs: [
      { id: 1, left: "Audience Rating", right: "Persentase penonton program dari seluruh populasi rumah tangga televisi" },
      { id: 2, left: "Audience Share", right: "Persentase penonton dari total televisi yang sedang aktif menyala saat itu" },
      { id: 3, left: "Time Discrepancy", right: "Selisih perbedaan antara durasi rencana rundown dan waktu riil siaran" },
      { id: 4, left: "DAM", right: "Digital Asset Management sistem pengarsipan metadata rekaman siaran stasiun TV" },
      { id: 5, left: "LPJ", right: "Laporan Pertanggungjawaban dokumen akuntabilitas hasil kerja dan keuangan produksi" },
    ],
    caseTitle: "Studi Kasus 5: Analisis Drop Rating pada Segmen Kedua",
    caseScenario: "Laporan riset stasiun TV menunjukkan grafik penonton: Segmen 1 (Rating 4.2%), Segmen 2 (Rating merosot ke 1.8%), Segmen 3 (Rating naik kembali ke 3.5%). Catatan rundown menunjukkan durasi jeda iklan antara segmen 1 dan 2 molor 45 detik karena kesalahan input server MCR.",
    caseInstruction: "Sebagai Produser, susunlah analisis penyebab masalah tersebut dan rumuskan 2 rekomendasi teknis kepada divisi MCR dan Programming agar insiden drop rating serupa tidak terulang!",
    sampleQuestions: [
      {
        id: 1117,
        bloom: "C5",
        stem: "Jika dalam laporan keuangan produksi ditemukan pembengkakan biaya (overbudget) sebesar 12% akibat sewa studio over-time, solusi manajerial paling tepat untuk produksi episode berikutnya adalah...",
        options: [
          { key: "A", text: "Memotong gaji kru teknis secara sepihak" },
          { key: "B", text: "Menjalankan gladi kotor (dry run) di luar studio sebelum hari syuting agar blocking matang dan waktu sewa studio efisien" },
          { key: "C", text: "Menghilangkan sesi latihan kamera (camera rehearsal)" },
          { key: "D", text: "Mengabaikan pembengkakan biaya karena stasiun TV memiliki banyak dana" },
        ],
        correctKey: "B",
        explanation: "Latihan pematangan blocking di ruang kelas/ruang latihan gratis sebelum masuk studio sewa dapat menghemat jam operasional studio secara drastis.",
      },
    ],
    lkpd: {
      title: "LKPD F1-K5: Penyusunan Laporan Pertanggungjawaban (LPJ) Produksi TV",
      objective: "Peserta didik mampu menyusun dokumen evaluasi pasca-produksi dan LPJ program siaran televisi lengkap dengan analisis waktu dan keuangan.",
      tools: ["Komputer / Laptop", "Aplikasi Dokumen (Word / Google Docs)", "Format Template LPJ Produksi TV"],
      steps: [
        "Unduh template dokumen Laporan Pertanggungjawaban Produksi Televisi.",
        "Isi data realisasi program: Judul, Format, Tim Kru, dan Tanggal Penayangan.",
        "Buat tabel analisis selisih waktu (Rundown Time vs Actual Time).",
        "Susun rekapitulasi penggunaan anggaran (RAB Rencana vs Pengeluaran Riil).",
        "Tuliskan minimal 3 poin rekomendasi perbaikan untuk episode produksi berikutnya.",
      ],
      outputFormat: "Dokumen LPJ Produksi Televisi Format PDF (5-10 Halaman).",
    },
    journalQuestions: {
      q1: "Mengapa keberhasilan program televisi komersial tidak dapat dinilai hanya dari opini pribadi pembuatnya?",
      q2: "Bagaimana cara Anda menyikapi kritik pedas terhadap program siaran yang telah Anda kerjakan dengan susah payah?",
      q3: "Nilai kejujuran dan integritas apa yang paling diuji saat Anda menyusun laporan pertanggungjawaban keuangan produksi?",
    },
    kktpIndicators: [
      "Mampu membedakan konsep metrik Audience Rating dan Audience Share secara komputasional.",
      "Mampu menganalisis faktor penyebab deviasi waktu dan penurunan minat penonton pada tayangan siaran.",
      "Mampu menyusun dokumen Laporan Pertanggungjawaban (LPJ) produksi televisi yang akuntabel dan sistematis.",
    ],
  },
];
