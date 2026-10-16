import { ElemenContentItem, DEFAULT_ELEMEN_SUBMENUS } from "./curriculum-types";

export const E4_CONTENTS: ElemenContentItem[] = [
  // =========================================================================
  // KONTEN 1: e4-k1 - Alur Tahapan Produksi Audio Visual Sesuai POS
  // =========================================================================
  {
    id: "e4-k1",
    order: 1,
    title: "Alur Tahapan Produksi Audio Visual Sesuai Prosedur Operasional Standar (POS)",
    shortTitle: "Alur Tahapan Produksi POS",
    summary:
      "Arsitektur mata rantai produksi media penyiaran dan perfilman: pembagian komprehensif fase Pra-Produksi (development & pre-pro), Produksi (principal photography & production shoot), dan Pascaproduksi (post-production & distribution), fungsi deliverables di setiap gerbang kendali (gatekeeping), serta akuntabilitas manajerial produser.",
    kompetensi: [
      "Memahami esensi dan sekat pemisah tahapan Pra-Produksi, Produksi, dan Pascaproduksi dalam industri audio visual.",
      "Mengidentifikasi dokumen deliverables kritis pada setiap gerbang fase produksi (milestone gate).",
      "Menganalisis dampak pembengkakan biaya dan keterlambatan jadwal jika tahapan pra-produksi dilewati.",
      "Menerapkan prosedur serah terima materi (handover protocol) antar departemen secara tertib administrasi.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu memetakan diagram alur kerja produksi video dari embrio ide hingga penayangan master.",
      "Peserta didik mampu menyusun jadwal rencana kerja induk (Master Production Schedule) berbasis POS.",
      "Peserta didik mampu menjelaskan peran gatekeeping produser dalam mengunci setiap tahapan produksi.",
      "Peserta didik mampu mengevaluasi risiko kegagalan teknis di set akibat ketidaksiapan berkas pra-produksi.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Jika Anda memutuskan untuk langsung menyalakan kamera dan syuting tanpa membuat naskah dan jadwal breakdown terlebih dahulu, mengapa 90% proyek film berakhir gagal, kehabisan uang, atau bubar di tengah jalan?",
    hookContext:
      "Dalam industri film dunia, pepatah emas menyatakan: 'Film dibuat tiga kali — pertama di atas kertas naskah saat pra-produksi, kedua di lokasi syuting saat produksi, dan ketiga di ruang editing saat pascaproduksi.' Mengabaikan fase pertama menjamin kekacauan total di fase berikutnya.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Tahapan produksi di mana seluruh naskah dibedah (script breakdown), lokasi disurvei (recce), dan jadwal syuting (shooting schedule) disusun secara matang disebut...",
        options: [
          { key: "A", text: "Tahap Pascaproduksi" },
          { key: "B", text: "Tahap Pra-Produksi" },
          { key: "C", text: "Tahap Distribusi" },
          { key: "D", text: "Tahap Pascapenyiaran" },
        ],
        correctKey: "B",
        explanation: "Pra-produksi adalah fase perencanaan arsitektural di mana seluruh kebutuhan teknis, logistik, hukum, dan anggaran dipersiapkan sebelum kamera berputar.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Kondisi di mana sutradara dan produser secara resmi menyepakati bahwa susunan adegan di timeline editing sudah final dan tidak boleh diubah durasinya lagi disebut...",
        options: [
          { key: "A", text: "Picture Lock" },
          { key: "B", text: "Call Sheet" },
          { key: "C", text: "Wrap Day" },
          { key: "D", text: "Greenlight" },
        ],
        correctKey: "A",
        explanation: "Picture Lock adalah gerbang pascaproduksi di mana durasi potongan gambar dikunci agar departemen musik (scoring), tata suara (sound mixing), dan efek visual (VFX) dapat bekerja serentak.",
      },
    ],
    materialCards: [
      {
        title: "1. Filosofi Tiga Babak Produksi Audio Visual",
        content: "Produksi film dan televisi adalah perpaduan seni kreatif dan rekayasa industri manufaktur yang presisi. Prosesnya dibagi menjadi 3 babak baku: Pra-Produksi (perencanaan & perancangan cetak biru), Produksi (eksekusi pengambilan gambar & suara), dan Pascaproduksi (perakitan, penyempurnaan, & mastering).",
        caseStudy: "Setiap $1 yang diinvestasikan secara cermat di fase pra-produksi dapat menghemat $10 pemborosan di lokasi syuting dan $100 biaya perbaikan di pascaproduksi.",
        didYouKnow: "Studio animasi Pixar menghabiskan waktu 2 hingga 3 tahun pada fase pra-produksi naskah dan storyboard sebelum mulai menganimasikan frame pertama."
      },
      {
        title: "2. Fase 1A: Development (Pengembangan Gagasan & Hak)",
        content: "Tahap embrio di mana ide dasar dicetuskan. Mencakup: penulisan premis, logline, sinopsis, perolehan hak cipta adaptasi (jika dari novel/kisah nyata), penyusunan proposal bisnis awal (pitch deck), dan pencarian pendanaan investor.",
      },
      {
        title: "3. Fase 1B: Greenlight & Pra-Produksi Resmi",
        content: "Proyek memasuki fase pra-produksi resmi setelah memperoleh 'Greenlight' (persetujuan pendanaan penuh dari eksekutif produser). Tim inti dibentuk: Sutradara, Produser Lini (Line Producer), DoP, Production Designer, dan Casting Director.",
      },
      {
        title: "4. Breakdown Naskah & Lembar Analisis Departemen",
        content: "Asisten Sutradara membedah naskah (Script Breakdown) adegan demi adegan menggunakan lembar berkode warna (Breakdown Sheet). Mengidentifikasi kebutuhan spesifik: aktor, figuran, kostum, properti khusus, efek khusus fisik (SFX makeup/ledakan), kendaraan, hingga hewan ternak.",
      },
      {
        title: "5. Casting & Pembacaan Naskah (Table Read)",
        content: "Proses seleksi aktor yang sesuai dengan visi karakter cerita. Dilanjutkan dengan Table Read (pembacaan naskah bersama seluruh pemeran dan kepala departemen) untuk membedah intonasi dialog, subteks emosi, dan menyelaraskan pemahaman cerita sebelum hari pertama syuting.",
      },
      {
        title: "6. Lokasi Syuting: Recce (Reconnaissance) & Technical Scouting",
        content: "Pencarian lokasi (Location Scouting) yang dilanjutkan dengan survei teknis gabungan (Recce). Melibatkan Sutradara, DoP, Gaffer, Sound Recordist, dan Manajer Lokasi untuk menguji: arah datangnya sinar matahari, kebisingan akustik lingkungan, daya kapasitas listrik kWh, dan izin keamanan warga setempat.",
        caseStudy: "Kegagalan survei akustik menyebabkan sebuah lokasi kafe yang tampak indah ternyata berada di bawah jalur terbang pesawat setiap 15 menit, menghancurkan seluruh rekaman suara dialog.",
      },
      {
        title: "7. Desain Visual: Storyboard, Moodboard, & Floor Plan",
        content: "Sutradara dan DoP menerjemahkan naskah teks menjadi bahasa visual konkret melalui Storyboard frame-per-frame dan Floor Plan (denah studio 2D penempatan kamera, lampu, dan pergerakan blocking aktor). Production Designer menyusun Moodboard palet warna dan konsep set dekorasi.",
      },
      {
        title: "8. Jadwal Induk Syuting (Shooting Schedule) & Call Sheet",
        content: "Asisten Sutradara menyusun jadwal syuting berbasis stripboard (mengelompokkan adegan berdasarkan efisiensi lokasi dan ketersediaan aktor, bukan urutan kronologis naskah). Setiap malam sebelum syuting, Call Sheet harian dirilis memuat jam panggilan kru, lokasi GPS, dan target scene harian.",
      },
      {
        title: "9. Fase 2: Produksi (Principal Photography)",
        content: "Fase di mana seluruh kru berkumpul di lokasi untuk merekam audio visual. Dipimpin oleh Sutradara (visi artistik) dan Asisten Sutradara 1 (manajemen waktu set). Setiap menit di set produksi bernilai rupiah tinggi karena melibatkan sewa alat dan honor puluhan tenaga kerja harian.",
      },
      {
        title: "10. Hierarki Komando di Lantai Set (Floor Chain of Command)",
        content: "Set produksi menganut disiplin kuasi-militer untuk mencegah kecelakaan: Sutradara mengarahkan talent dan DoP; 1st AD mengontrol aba-aba waktu set; Gaffer memimpin departemen cahaya; Key Grip memimpin keselamatan rigging; Sound Recordist memantau kemurnian audio; Floor Director menjaga ketertiban panggung studio.",
      },
      {
        title: "11. POS Harian Produksi: Slating & Sound Sync Protokol",
        content: "Setiap take diawali dengan perekaman Clapperboard (Slate) yang memuat info Scene, Take, Roll, dan sutradara/DoP. Bunyi clapper memberikan visual kontak dan spike audio gelombang instan untuk penyelarasan di software editing.",
      },
      {
        title: "12. POS Penanganan Data Digital di Set: Peran DIT",
        content: "Digital Imaging Technician (DIT) atau Data Wrangler bertanggung jawab mengambil kartu memori dari kamera, menyalin data ke penyimpanan redundan RAID menggunakan software verifikasi checksum MD5, membuat file backup harian (Dailies), dan menerapkan viewing LUT warna awal.",
        didYouKnow: "Dilarang memformat ulang kartu memori kamera di lokasi sebelum data terverifikasi 100% aman tersalin ke 2 harddisk terpisah."
      },
      {
        title: "13. Wrap Time & Laporan Produksi Harian (Daily Production Report)",
        content: "Saat hari syuting selesai, 1st AD mengumumkan 'WRAP!'. Unit Manajer dan Script Supervisor menerbitkan DPR (Daily Production Report) yang merangkum: jumlah scene yang berhasil diselesaikan, total durasi footage yang terekam, sisa lembar naskah, serta catatan keterlambatan atau insiden K3.",
      },
      {
        title: "14. Fase 3A: Pascaproduksi Offline Editing",
        content: "Editor merangkai bahan mentah menjadi Assembly Cut, Rough Cut, dan Fine Cut. Berfokus pada penceritaan, emosi, ritme, dan kesinambungan shot (continuity). Tahap ini diakhiri dengan 'Picture Lock' di mana durasi video terkunci mati dan tidak boleh dipotong lagi.",
      },
      {
        title: "15. Fase 3B: Pascaproduksi Online Editing & VFX",
        content: "Setelah Picture Lock, proyek dialihkan ke tahap Online Editing resolusi penuh RAW/ProRes. Departemen Visual Effects (VFX) membersihkan kabel penahan aksi (wire removal), mengganti layar hijau (green screen compositing), dan menyisipkan animasi 3D CGI.",
      },
      {
        title: "16. Pascaproduksi Audio: Sound Design, Foley, & ADR",
        content: "Departemen tata suara pasca melakukan: Foley (merekam ulang efek bunyi langkah kaki dan kain baju di studio khusus), Sound Effects (SFX ledakan, mobil, laser), ADR (Automated Dialogue Replacement / dubbing vokal yang rusak di set), dan Ambient Atmosfer latar belakang.",
      },
      {
        title: "17. Musik Ilustrasi (Score) & Final Sound Mixing",
        content: "Komposer menggubah musik orkestra atau elektronik orisinal (Score) yang diselaraskan dengan tempo emosi adegan. Re-recording Mixer menggabungkan dialog, foley, SFX, dan musik menjadi satu kesatuan seimbang sesuai standar penyiaran loudness EBU R128 (-23 LUFS / -24 LKFS).",
      },
      {
        title: "18. Color Grading & Finishing Visual (DI - Digital Intermediate)",
        content: "Colorist menyelaraskan seluruh kamera di ruang terkalibrasi warna DaVinci Resolve. Menyeimbangkan skin tone, menambahkan kontras sinematik, serta menciptakan estetika palet warna khas cerita (Color Grading) dari profil Log/RAW menuju ruang warna Rec.709 atau HDR DCI-P3.",
      },
      {
        title: "19. Mastering & Deliverables Standar Industri",
        content: "Pembuatan paket file akhir sesuai format tayang: Digital Cinema Package (DCP) untuk proyektor bioskop 2K/4K, Apple ProRes 422 HQ untuk arsip stasiun televisi terestrial, serta MP4 H.264/H.265 bitrate teroptimasi untuk platform OTT (Netflix, YouTube) lengkap dengan subtitle terintegrasi (.SRT).",
      },
      {
        title: "20. Fase Pascaproduksi Akhir: Distribusi, Promosi, & Pengarsipan (Archiving)",
        content: "Film/program siap diluncurkan ke pasar melalui strategi promosi trailer, poster promosi, pemutaran perdana (premiere/screening), penayangan broadcast, dan pendaftaran festival film. Seluruh file mentah, berkas naskah, dan master diekspor ke pita magnetik LTO (Linear Tape-Open) untuk pengarsipan jangka panjang 30 tahun.",
      },
    ],
    video: {
      title: "Tahapan Lengkap Produksi Film & Televisi Sesuai Standar Industri",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari gerbang transisi dari pra-produksi ke produksi, dan mengapa Picture Lock menjadi tonggak mutlak pascaproduksi.",
    },
    gamePairs: [
      { id: 1, left: "Pra-Produksi", right: "Fase pembuatan naskah, casting, survei lokasi (recce), dan jadwal syuting" },
      { id: 2, left: "Principal Photography", right: "Fase utama pelaksanaan perekaman gambar dan suara di lokasi set" },
      { id: 3, left: "Picture Lock", right: "Titik temu di mana susunan potongan visual terkunci final tanpa perubahan durasi" },
      { id: 4, left: "Foley Artist", right: "Merekam efek suara fisik realistis (langkah kaki, pintu) di studio pascaproduksi" },
      { id: 5, left: "DCP (Digital Cinema Package)", right: "Format paket file terenkripsi standar penayangan proyektor bioskop komersial" },
    ],
    caseTitle: "Kekacauan di Lokasi Syuting: Tidak Ada Call Sheet dan Naskah Berubah",
    caseScenario:
      "Sebuah kru film pendek SMK tiba di lokasi syuting vila pegunungan pukul 07.00 pagi. Namun, aktor utama baru datang pukul 12.00 siang karena tidak menerima lembar panggilan (Call Sheet). Di saat yang sama, sutradara tiba-tiba mengubah naskah adegan dan meminta properti mobil antik yang tidak pernah disiapkan oleh tim artistik. Hari syuting berakhir malam dengan hanya menyelesaikan 1 scene dari target 8 scene, sementara uang sewa vila dan konsumsi kru habis sia-sia.",
    caseInstruction:
      "Identifikasi 3 kegagalan tata kelola alur kerja pra-produksi dalam skenario tersebut. Jelaskan peran dokumen Call Sheet, Script Breakdown, dan koordinasi 1st AD dalam menjamin efisiensi hari produksi.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Tujuan utama diadakannya survei lokasi teknis (Technical Recce) bersama seluruh kepala departemen sebelum syuting adalah...",
        options: [
          { key: "A", text: "Untuk berlibur bersama dan bersenang-senang sebelum bekerja keras" },
          { key: "B", text: "Memastikan kelayakan teknis lokasi terkait jalur kabel listrik, arah jatuhnya matahari, kebisingan akustik lingkungan, dan posisi parkir logistik kru" },
          { key: "C", text: "Untuk langsung memulai pengambilan gambar tanpa membawa naskah" },
          { key: "D", text: "Menentukan harga tiket masuk bioskop" },
        ],
        correctKey: "B",
        explanation: "Technical Recce bertujuan mengantisipasi seluruh kendala teknis (daya listrik, arah cahaya matahari, noise suara sekitar, dan perizinan) agar waktu syuting tidak terbuang.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Dokumen operasional harian yang diterbitkan Asisten Sutradara 1 setiap malam menjelang hari syuting yang memuat daftar adegan, jam panggilan kru (call time), nomor kontak darurat, dan koordinat lokasi syuting disebut...",
        options: [
          { key: "A", text: "Call Sheet" },
          { key: "B", text: "Storyline" },
          { key: "C", text: "Logline" },
          { key: "D", text: "Release Form" },
        ],
        correctKey: "A",
        explanation: "Call sheet adalah dokumen harian terpenting yang memandu jam kedatangan kru/aktor, daftar adegan, kondisi cuaca, dan instruksi logistik medis darurat.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Jika seorang sutradara nekat mengubah urutan potongan gambar dan durasi adegan setelah status proyek dinyatakan 'Picture Lock', konsekuensi paling merusak yang dialami departemen pascaproduksi lainnya adalah...",
        options: [
          { key: "A", text: "Warna video otomatis menjadi hitam putih" },
          { key: "B", text: "Seluruh komposisi musik scoring, efek suara foley, dan visual effect (VFX) yang sedang dikerjakan menjadi bergeser tidak sinkron (desinkronisasi timeline) dan harus diulang dari awal" },
          { key: "C", text: "Kamera bioskop akan terkunci secara otomatis" },
          { key: "D", text: "Tidak ada konsekuensi apapun karena software komputer dapat menyesuaikan otomatis" },
        ],
        correctKey: "B",
        explanation: "Picture lock adalah perjanjian durasi frame absolut. Mengubah 1 frame saja setelah Picture Lock akan merusak keselarasan sinkronisasi musik komposer dan animasi CGI yang membutuhkan hitungan frame presisi.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Mengapa jadwal syuting film (Shooting Schedule) hampir tidak pernah disusun secara berurutan sesuai kronologi jalan cerita dari adegan 1 hingga adegan terakhir naskah?",
        options: [
          { key: "A", text: "Karena sutradara sengaja ingin membuat para aktor bingung" },
          { key: "B", text: "Demi efisiensi biaya dan logistik: seluruh adegan yang berlokasi di tempat yang sama diselesaikan sekaligus dalam satu hari tanpa harus membongkar-pasang peralatan berkali-kali" },
          { key: "C", text: "Karena naskah film bagian akhir selalu ditulis belakangan saat syuting" },
          { key: "D", text: "Agar kru bisa pulang lebih cepat setiap hari" },
        ],
        correctKey: "B",
        explanation: "Jadwal stripboard disusun berbasis efisiensi lokasi (location-based scheduling) dan ketersediaan aktor, menyelesaikan seluruh adegan di lokasi A sebelum berpindah ke lokasi B guna menghemat waktu rigging alat dan sewa tempat.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah Master Production Timeline (jadwal induk kerja) untuk proyek video dokumenter sekolah berdurasi 10 menit dengan alokasi waktu total 6 minggu!",
        options: [
          { key: "A", text: "Minggu 1 s/d 5 tidur santai; Minggu ke-6 syuting dan editing dalam waktu 1 malam" },
          { key: "B", text: "Minggu 1-2: Pra-Produksi (Riset, naskah, recce, izin); Minggu 3-4: Produksi (Syuting wawancara & B-roll); Minggu 5: Pascaproduksi Offline (Rough cut & Picture lock); Minggu 6: Online, Audio Mixing, Color Grading, & Screening" },
          { key: "C", text: "Minggu 1 s/d 6 hanya digunakan untuk syuting tanpa editing" },
          { key: "D", text: "Melakukan penayangan film di minggu pertama sebelum video dibuat" },
        ],
        correctKey: "B",
        explanation: "Alokasi proporsional mencerminkan siklus POS sehat: 30% waktu untuk pra-produksi terencana, 30% eksekusi syuting lapangan, dan 40% pemolesan pascaproduksi hingga screening.",
      },
    ],
    lkpd: {
      title: "LKPD E4-K1: Perancangan Master Schedule & Lembar Analisis Alur POS Produksi",
      objective: "Peserta didik mampu menyusun diagram alur kerja produksi audio visual dan merancang jadwal induk produksi (Master Schedule) untuk film pendek fiksi 5 menit.",
      tools: ["Komputer / Laptop", "Template Master Production Schedule Spreadsheet", "Contoh Naskah Film Pendek 5 Halaman"],
      steps: [
        "Pelajari contoh naskah film pendek dan identifikasi jumlah lokasi syuting serta jumlah pemeran.",
        "Buat diagram alur kerja 3 babak produksi (Pra-Produksi, Produksi, Pascaproduksi) lengkap dengan deliverables dokumen pada setiap tahap.",
        "Tentukan tanggal target penayangan karya (Screening Date).",
        "Hitung mundur (back-scheduling) untuk mengalokasikan minggu kerja: Riset, Script breakdown, Recce, Rehearsal, Shooting Days, Offline edit, Picture Lock, Sound & Color, hingga Final QC.",
        "Tetapkan nama penanggung jawab (PIC) kepala departemen pada setiap tonggak capaian (milestone).",
      ],
      outputFormat: "Bagan Alur POS Format PDF dan Lembar Kerja Master Schedule Spreadsheet.",
    },
    journalQuestions: {
      q1: "Mengapa disiplin menepati jadwal kerja (timeline) adalah syarat mutlak keberhasilan sebuah produksi film?",
      q2: "Menurut Anda, apa yang akan terjadi jika seorang produser tidak berani menetapkan Picture Lock di ruang editing?",
      q3: "Bagaimana Anda menyelaraskan ego kreatif sutradara dengan keterbatasan anggaran dan waktu yang dikelola oleh produser?",
    },
    kktpIndicators: [
      "Mampu menguraikan tahapan alur produksi audio visual dari development hingga mastering sesuai POS.",
      "Mampu mengidentifikasi dokumen gatekeeping kritis (Naskah, Call Sheet, Picture Lock, QC).",
      "Mampu menyusun rencana jadwal kerja produksi (Master Schedule) yang realistis dan terstruktur.",
    ],
  },

  // =========================================================================
  // KONTEN 2: e4-k2 - Pra-Produksi Sederhana
  // =========================================================================
  {
    id: "e4-k2",
    order: 2,
    title: "Pra-Produksi Sederhana: Pengembangan Ide, Storyboard, Naskah, & Berkas Logistik",
    shortTitle: "Pra-Produksi Sederhana",
    summary:
      "Teknik perancangan dokumen cetak biru visual: formula premis & logline, penulisan sinopsis & treatment, format naskah standar industri 2-kolom (TV/iklan) dan format Master Scene Screenplay (film fiksi), pembuatan Storyboard sketsa kamera, floor plan, casting form, location agreement, dan call sheet terintegrasi.",
    kompetensi: [
      "Menyusun premis cerita dan logline satu kalimat yang memikat dan memiliki konflik dramatik jelas.",
      "Menulis naskah video format 2-kolom audio visual untuk video berita, iklan layanan masyarakat, dan profil sekolah.",
      "Menggambar Storyboard dengan indikasi Camera Angle, Shot Size, Camera Movement, dan petunjuk suara.",
      "Membuat denah lantai (Floor Plan / Blocking Map) pergerakan kamera dan aktor di ruang set.",
      "Menyusun berkas hukum dan perizinan: Talent Release Form, Location Permit, dan Call Sheet harian.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menulis naskah audio visual format profesional dengan kaidah ejaan yang baku.",
      "Peserta didik mampu mengkonversi teks naskah menjadi rangkaian storyboard 8-12 frame terukur.",
      "Peserta didik mampu menyusun dokumen Call Sheet harian lengkap dengan jadwal kedatangan kru dan talent.",
      "Peserta didik mampu mengurus surat izin penggunaan lokasi dan pelepasan hak cipta penampilan (Talent Release).",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Mengapa seorang animator atau ilustrator storyboard sering disebut sebagai sutradara pertama dari sebuah film sebelum kamera dinyalakan?",
    hookContext:
      "Storyboard adalah film dalam bentuk komik bisu. Lewat storyboard, sutradara memecahkan masalah sudut kamera, ritme pemotongan, dan komposisi visual sebelum jutaan rupiah dibelanjakan di lokasi syuting sesungguhnya.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Format naskah yang membagi halaman menjadi dua bagian vertikal sejajar — sisi kiri untuk petunjuk visual kamera dan sisi kanan untuk teks narasi/dialog suara — disebut...",
        options: [
          { key: "A", text: "Format Master Scene Screenplay" },
          { key: "B", text: "Format Naskah Dua Kolom (Audio-Visual Split Script)" },
          { key: "C", text: "Format Treatment Prosa" },
          { key: "D", text: "Format Cerpen Naratif" },
        ],
        correctKey: "B",
        explanation: "Format 2-kolom adalah standar penulisan naskah program televisi non-drama, dokumenter, dan video iklan komersial karena memudahkan sinkronisasi visual dan audio.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Dokumen hukum wajib yang ditandatangani oleh aktor atau narasumber yang menyatakan kesediaan wajah dan suaranya direkam serta ditayangkan secara publik tanpa tuntutan hukum di kemudian hari adalah...",
        options: [
          { key: "A", text: "Talent Release Form" },
          { key: "B", text: "Call Sheet" },
          { key: "C", text: "Daily Production Report" },
          { key: "D", text: "Clapperboard" },
        ],
        correctKey: "A",
        explanation: "Talent Release Form mengamankan hak cipta penayangan materi video secara legal, mencegah tuntutan pelanggaran privasi dari narasumber atau pemeran.",
      },
    ],
    materialCards: [
      {
        title: "1. Dari Pikiran ke Kertas: Proses Pra-Produksi Kreatif",
        content: "Pra-produksi kreatif bertujuan memadatkan ide abstrak menjadi dokumen kerja konkret yang dapat dipahami seragam oleh puluhan orang kru berbeda keahlian. Komunikasi visual harus terdefinisi tanpa ada multitafsir.",
        caseStudy: "Instruksi sutradara 'Tolong buat adegan ini terlihat keren' tidak bisa dieksekusi kru, tetapi 'Gunakan lensa 85mm f/1.8 Low Angle slow-motion 50fps saat tokoh melangkah' dapat langsung dikerjakan dalam 2 menit.",
      },
      {
        title: "2. Formula Emas Premis & Logline",
        content: "Logline adalah ringkasan cerita dalam satu kalimat padat (25-35 kata) yang memuat 4 unsur: (1) Protagonis (siapa tokoh utama), (2) Insiting Incident (peristiwa pemicu), (3) Sasaran/Goal (tujuan yang ingin dicapai), dan (4) Antagonis/Rintangan (hambatan berisiko tinggi).",
        didYouKnow: "Produser Hollywood sering memutuskan apakah akan mendanai proyek film hanya dalam 30 detik setelah mendengar logline yang memikat di dalam lift (Elevator Pitch)."
      },
      {
        title: "3. Anatomi Sinopsis & Treatment Film",
        content: "Sinopsis (1 halaman) menceritakan alur kisah dari awal (beginning), tengah (middle), hingga akhir (ending) termasuk resolusi konflik. Treatment (5-15 halaman) merinci adegan demi adegan dalam bahasa prosa visual deskriptif tanpa dialog lengkap, menggambarkan suasana, aksi, dan nuansa ruang.",
      },
      {
        title: "4. Format Naskah 2 Kolom (Televisi, Berita, & Komersial)",
        content: "Kolom Kiri (VIDEO) memuat instruksi teknis visual: ukuran shot (MCU, CU), pergerakan kamera (Pan, Tilt), pencahayaan, grafis lower-third, dan aksi subjek. Kolom Kanan (AUDIO) memuat nama karakter, dialog suara, musik latar (BGM), dan efek suara (SFX) yang selaras waktu dengan kolom kiri.",
      },
      {
        title: "5. Format Naskah Master Scene Screenplay (Film Fiksi)",
        content: "Standar industri internasional film layar lebar menggunakan font Courier 12pt (1 halaman naskah ≈ 1 menit durasi tayang). Struktur elemen wajib: Scene Heading (Slugline: INT/EXT. LOKASI - WAKTU), Action Line (deskripsi visual objektif), Character Name, Parenthetical (petunjuk emosi aktor), dan Dialogue.",
      },
      {
        title: "6. Fungsi Vital Storyboard dalam Produksi",
        content: "Storyboard adalah komikalisasi visual naskah adegan per adegan. Berfungsi menguji komposisi visual, menentukan kontinuitas arah gerak, mengkomunikasikan sudut kamera DoP kepada sutradara, serta menghemat waktu uji coba kamera di lokasi syuting.",
      },
      {
        title: "7. Anatomi Kartu Panel Storyboard Profesional",
        content: "Setiap frame panel storyboard memuat: Gambar sketsa visual adegan, Nomor Scene & Shot, Ukuran Gambar (Shot Size: misal MCU), Sudut Kamera (Angle: misal Low Angle), Pergerakan Kamera (Movement: misal Pan Right dengan panah arah), serta potongan dialog atau efek suara pendukung.",
      },
      {
        title: "8. Floor Plan (Denah Pemblokiran Studio & Lokasi)",
        content: "Floor Plan adalah diagram skematis 2D tampak atas dari lokasi set syuting. Menunjukkan penempatan dinding dekorasi, perabot meja/kursi, posisi berdiri talent, garis lintasan pergerakan aktor (blocking), posisi tripod/rel kamera (A-Cam dan B-Cam), serta letak lampu dan stand grip.",
        caseStudy: "Floor plan yang matang mencegah juru kamera merekam kru pencahayaan atau mikrofon boom yang berdiri di sudut ruangan.",
      },
      {
        title: "9. Script Breakdown & Kode Warna Standar",
        content: "Proses menandai naskah menggunakan spidol stabilo warna standar industri film: Kuning (Cast/Pemeran berbicara), Oranye (Stunt/Aksi berbahaya), Biru (Special Effects), Hijau (Properti tangan), Ungu (Kostum khusus), Coklat (Tata Rias/Luka), dan Merah Muda (Kendaraan/Hewan).",
      },
      {
        title: "10. Lembar Rincian Biaya Produksi (RAB / Budgeting)",
        content: "Anggaran biaya dibagi menjadi: Above the Line (honor Sutradara, Penulis, Produser, Aktor Utama) dan Below the Line (honor Kru Teknis, sewa Kamera, sewa Lampu, Konsumsi/Katering, Transportasi/BBM, Sewa Lokasi, Asuransi K3, dan Biaya Pascaproduksi). Dilengkapi dana tak terduga (contingency 10%).",
      },
      {
        title: "11. Location Scouting & Lembar Izin Lokasi (Location Agreement)",
        content: "Manajer lokasi mencari tempat syuting potensial, mendokumentasikan foto 360 derajat, dan menguji kebisingan suara. Pemilik lokasi wajib menandatangani Location Agreement yang memuat izin penggunaan tempat, biaya sewa, tanggal/jam syuting, dan jaminan ganti rugi jika ada kerusakan fasilitas.",
      },
      {
        title: "12. Perizinan Hak Cipta Wajah: Talent Release Form",
        content: "Formulir pelepasan hak cipta yang ditandatangani oleh setiap orang yang wajahnya terekam jelas di kamera. Berisi klausul legal pemberian izin penggunaan citra wajah, suara, dan nama untuk keperluan komersial maupun non-komersial tanpa batas waktu dan wilayah geografis.",
        didYouKnow: "Di ruang publik, jika seseorang tidak menandatangani release form dan wajahnya disiarkan untuk tayangan komersial, stasiun TV wajib memburamkan (blur) wajah orang tersebut untuk menghindari somasi pelanggaran privasi."
      },
      {
        title: "13. Call Sheet: Surat Perintah Harian Operasional Set",
        content: "Diterbitkan setiap malam oleh Asisten Sutradara 1 (1st AD). Memuat: Tanggal produksi harian, waktu matahari terbit dan terbenam, perkiraan cuaca cuaca, alamat rumah sakit terdekat, jam panggilan kru per departemen (call time), daftar adegan yang akan disyuting, serta catatan busana/kostum.",
      },
      {
        title: "14. Pembacaan Naskah Meja (Table Read & Rehearsal)",
        content: "Latihan intensif di ruang kelas/kantor sebelum syuting. Aktor membaca naskah bersama-sama, menguji tempo dialog, mendalami motivasi psikologis karakter, dan berdiskusi dengan sutradara sehingga saat tiba di lokasi syuting, para aktor sudah hafal dialog dan blocking luar kepala.",
      },
      {
        title: "15. Shot List (Daftar Rencana Pengambilan Gambar)",
        content: "Daftar urutan seluruh bidikan kamera yang dirancang DoP dan Sutradara untuk setiap scene naskah. Memuat nomor shot, tipe shot, lensa yang digunakan (24mm, 50mm, 85mm), deskripsi aksi kamera, dan perkiraan durasi take, menjadi pedoman clapperboard di set.",
      },
      {
        title: "16. Properti & Wardrobe Continuity Sheet",
        content: "Pencatat kesinambungan (Script Supervisor) mendokumentasikan foto detail pakaian, posisi jam tangan, gaya tatanan rambut, dan properti yang dipegang karakter di setiap take. Mencegah kesalahan kontinuitas fatal (misal jam tangan berpindah dari tangan kiri ke tangan kanan di shot berikutnya).",
      },
      {
        title: "17. Manajemen Konsumsi & Kesejahteraan Kru",
        content: "Pasukan berjalan dengan perutnya. Produser wajib menjamin jadwal makan kru tepat waktu: Sarapan sebelum call time, Makan Siang tepat 6 jam setelah call time, dan Makan Malam jika syuting berlanjut lembur. Ketersediaan air mineral galon dan cemilan (craft service) di set wajib selalu terisi.",
      },
      {
        title: "18. Kotak P3K & Prosedur Medis Darurat",
        content: "Unit Manajer wajib menyiapkan tas P3K lengkap di lokasi: obat luka bakar, perban peredam pendarahan, obat tetes mata (untuk kru terkena debu), oksigen portabel, dan nomor darurat ambulans terdekat yang tercetak besar di lembar call sheet.",
      },
      {
        title: "19. Perangkat Lunak Pra-Produksi Modern",
        content: "Industri profesional kini beralih ke ekosistem digital: Celtx, WriterDuet, atau Final Draft untuk penulisan naskah; StudioBinder untuk script breakdown dan call sheet otomatis; Milanote / Canva untuk moodboard; serta Shot Designer untuk denah blocking animasi 3D.",
      },
      {
        title: "20. POS Finalisasi Paket Berkas Pra-Produksi (Production Bible)",
        content: "Seluruh dokumen pra-produksi dijilid rapi menjadi satu buku kerja induk (Production Bible): Naskah final bertanggal, Storyboard, Floor Plan, Shot List, Schedule, Budgeting, Location Permit, Talent Release, dan Call Sheet. Buku ini menjadi kitab suci operasional bagi seluruh kru di set syuting.",
      },
    ],
    video: {
      title: "Bedah Pra-Produksi Film: Naskah 2 Kolom, Storyboard, & Call Sheet",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari cara menyusun Script Breakdown dan mengubah naskah menjadi storyboard 8 panel beserta floor plan penempatan kamera.",
    },
    gamePairs: [
      { id: 1, left: "Naskah 2 Kolom", right: "Format naskah sejajar kiri Video dan kanan Audio untuk TV dan iklan" },
      { id: 2, left: "Talent Release Form", right: "Surat perjanjian pelepasan hak cipta wajah dan suara aktor/narasumber" },
      { id: 3, left: "Floor Plan", right: "Denah tampak atas penempatan kamera, lampu, dan pergerakan blocking aktor" },
      { id: 4, left: "Logline", right: "Ringkasan satu kalimat padat berisi protagonis, pemicu konflik, dan tujuan" },
      { id: 5, left: "Production Bible", right: "Buku bundel induk seluruh dokumen perencanaan teknis dan artistik pra-produksi" },
    ],
    caseTitle: "Tuntutan Hukum Penayangan Wajah Warga Tanpa Izin Talent Release",
    caseScenario:
      "Sebuah tim liputan profil video sekolah merekam suasana kantin sekolah dan mewawancarai seorang pedagang serta menampilkan wajah siswa-siswa yang sedang makan. Video tersebut diunggah ke YouTube resmi sekolah dan ditonton 50.000 kali. Seminggu kemudian, orang tua dari salah satu siswa melayangkan somasi keberatan dan menuntut sekolah karena anaknya terekam tanpa persetujuan izin tertulis (Talent Release Form), mengancam akan membawa kasus ini ke ranah hukum UU Perlindungan Data Pribadi.",
    caseInstruction:
      "Analisis kekeliruan prosedur hukum tim produksi sekolah. Jelaskan bagaimana penerapan SOP Talent Release Form dan Crowd Notice Signboard di lokasi syuting dapat memproteksi karya dari risiko hukum perdata.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Fungsi utama dari dokumen Floor Plan (Denah Pemblokiran) dalam tahap pra-produksi adalah...",
        options: [
          { key: "A", text: "Menentukan harga sewa kamera bioskop" },
          { key: "B", text: "Memberikan panduan visual tata letak 2D tampak atas penempatan kamera, posisi lampu, dan arah pergerakan blocking pemain di area set" },
          { key: "C", text: "Mencatat daftar makanan catering untuk kru" },
          { key: "D", text: "Menghitung total keuntungan penjualan tiket film" },
        ],
        correctKey: "B",
        explanation: "Floor plan memetakan ruang set secara arsitektural tampak atas, membantu DoP dan Gaffer mengetahui posisi penempatan kamera dan sudut lampu agar tidak saling tabrakan di set.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Dalam penulisan naskah format film fiksi (Master Scene Screenplay), baris judul adegan pembuka yang tertulis 'INT. RUANG KELAS SMK - SIANG' disebut...",
        options: [
          { key: "A", text: "Dialogue Line" },
          { key: "B", text: "Scene Heading / Slugline" },
          { key: "C", text: "Parenthetical" },
          { key: "D", text: "Action Line" },
        ],
        correctKey: "B",
        explanation: "Slugline / Scene Heading mengawali setiap adegan naskah untuk memberitahu kru: interior/eksterior (INT/EXT), nama lokasi set, dan waktu pencahayaan (PAGI/SIANG/MALAM).",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Sebuah storyboard menggambarkan frame pertama dengan ikon panah melengkung ke kanan disertai tulisan 'Pan Right 45°', kemudian frame kedua memperlihatkan wajah aktor dengan tulisan 'MCU Eye Level'. Informasi teknis apa yang dikomunikasikan storyboard tersebut kepada juru kamera?",
        options: [
          { key: "A", text: "Kameramen harus mematikan kamera dan mengganti baterai" },
          { key: "B", text: "Kamera harus berputar horizontal ke kanan dari posisi awal hingga berhenti tepat membidik wajah aktor dalam ukuran Medium Close Up sejajar garis mata" },
          { key: "C", text: "Kameramen harus berlari mendekati aktor sambil melompat" },
          { key: "D", text: "Aktor harus berteriak sekencang-kencangnya" },
        ],
        correctKey: "B",
        explanation: "Storyboard memberikan instruksi terukur: panah melengkung menandakan pergerakan mekanis panning tripod ke kanan, dan ukuran framing akhir adalah Medium Close Up pada eye level.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Bandingkan format naskah 2 Kolom dengan format naskah Master Scene Screenplay! Mengapa format naskah 2 Kolom jauh lebih cocok digunakan untuk pembuatan video iklan layanan masyarakat (ILM) sekolah berdurasi 30 detik?",
        options: [
          { key: "A", text: "Karena format 2 kolom menggunakan kertas yang lebih tebal" },
          { key: "B", text: "Karena naskah iklan mengandalkan keselarasan durasi ketat antara visual grafis teks/animasi di sisi kiri dengan narasi voice over di sisi kanan secara simultan detik per detik" },
          { key: "C", text: "Karena format Master Scene dilarang oleh pemerintah untuk video iklan" },
          { key: "D", text: "Karena format 2 kolom tidak membutuhkan ide cerita" },
        ],
        correctKey: "B",
        explanation: "Iklan komersial menuntut sinkronisasi visual dan audio yang sangat presisi dalam hitungan detik; format 2-kolom memperlihatkan korelasi langsung adegan visual sejajar dengan narasi audio.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah sebuah paket berkas naskah 2 Kolom lengkap dengan Storyboard 4 panel untuk video promosi pendaftaran siswa baru (PPDB) SMK Broadcasting berdurasi 30 detik!",
        options: [
          { key: "A", text: "Menulis satu paragraf status WhatsApp tanpa rincian visual dan suara" },
          { key: "B", text: "Naskah 2 Kolom memuat: Panel 1 (ELS drone lab studio / Musik opening bersemangat), Panel 2 (MCU siswa mengoperasikan kamera / Voice Over ajakan bergabung), Panel 3 (CU siswa mengedit video di PC / SFX keyboard), Panel 4 (Logo sekolah & teks hotline pendaftaran / Jingle sekolah)" },
          { key: "C", text: "Hanya merekam brosur kertas yang diletakkan di atas meja selama 30 detik" },
          { key: "D", text: "Menyalin ulang naskah film Hollywood tanpa penyesuaian" },
        ],
        correctKey: "B",
        explanation: "Paket naskah profesional membagi visual dinamis (drone, operasional kamera, editing, logo info) selaras dengan trek audio (musik, voice over, sfx, jingle) yang mengalir runtut dan persuasif.",
      },
    ],
    lkpd: {
      title: "LKPD E4-K2: Pembuatan Paket Dokumen Pra-Produksi: Naskah 2 Kolom, Storyboard, & Call Sheet",
      objective: "Peserta didik mampu menulis naskah video 2 kolom berdurasi 60 detik, menggambar storyboard 6 frame, dan menyusun lembar operasional Call Sheet siap syuting.",
      tools: ["Kertas Template Naskah 2 Kolom & Storyboard", "Pensil Gambar & Spidol", "Template Digital Call Sheet", "Komputer / Laptop"],
      steps: [
        "Tentukan tema video edukasi pendek (misal: 'Bijak Bermedia Sosial' atau 'Tertib Budaya 5S di Lab').",
        "Tulis Logline cerita dalam satu kalimat padat yang memuat tokoh dan konflik.",
        "Tulis naskah format 2 kolom (sisi kiri Video, sisi kanan Audio) dengan durasi 60 detik (sekitar 3 adegan).",
        "Gambarkan Storyboard 6 panel yang memuat petunjuk ukuran shot (LS, MS, CU) dan pergerakan kamera.",
        "Rancang Floor Plan sederhana denah ruang syuting dan arah hadap lampu.",
        "Susun dokumen Call Sheet harian untuk jadwal syuting hari berikutnya lengkap dengan jam panggilan kru, nomor kontak darurat, dan daftar perlengkapan alat.",
      ],
      outputFormat: "Bundel dokumen pra-produksi (Naskah, Storyboard, Floor Plan, Call Sheet) dijilid rapi format PDF.",
    },
    journalQuestions: {
      q1: "Mengapa kemampuan menggambar sketsa storyboard tetap sangat penting bagi seorang sutradara meskipun ia bukan seorang pelukis profesional?",
      q2: "Bagaimana naskah 2 kolom membantu Anda mengontrol agar durasi video tidak melar melebihi batas waktu yang ditentukan?",
      q3: "Tanggung jawab moral apa yang Anda rasakan ketika meminta narasumber menandatangani Talent Release Form?",
    },
    kktpIndicators: [
      "Mampu menulis naskah audio visual format 2 kolom standar industri penyiaran.",
      "Mampu menggambar rangkaian Storyboard dengan notasi teknis kamera yang akurat.",
      "Mampu menyusun dokumen operasional Call Sheet dan berkas perizinan pra-produksi.",
    ],
  },

  // =========================================================================
  // KONTEN 3: e4-k3 - Eksekusi Produksi Lapangan & Manajemen Set
  // =========================================================================
  {
    id: "e4-k3",
    order: 3,
    title: "Eksekusi Produksi Lapangan: Manajemen Set, Aba-Aba Sutradara, & Tata Tertib Syuting",
    shortTitle: "Eksekusi Produksi Lapangan",
    summary:
      "Tata kelola operasional set syuting profesional: protokol aba-aba panggilan sutradara (slating protocol), pengisian formulir laporan kamera dan suara (Camera & Sound Log Sheet), manajemen floor director di studio televisi, penataan kabel K3, serta etika kedisiplinan kru di set produksi nyata.",
    kompetensi: [
      "Menguasai protokol tata urutan aba-aba pemanggilan rekaman sutradara di lokasi syuting (Roll Sound, Roll Camera, Slating, Action, Cut).",
      "Mengoperasikan Clapperboard / Slate secara benar untuk sinkronisasi audio visual dan pencatatan nomor take.",
      "Mengisi lembar laporan teknis kamera (Camera Log Sheet) dan laporan suara (Sound Log Sheet) secara real-time.",
      "Menerapkan tata tertib keamanan K3 lantai set: kerapian kabel, kedisiplinan silent on set, dan koordinasi Floor Director.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu memimpin simulasi operasional set syuting dengan aba-aba komando yang tegas dan tertib.",
      "Peserta didik mampu membunyikan dan menuliskan informasi clapperboard dengan teknik pengetukan yang benar.",
      "Peserta didik mampu mencatat nomor take terbaik (good take) pada camera report untuk panduan editor.",
      "Peserta didik mampu menjaga keselamatan kerja kru dari potensi bahaya tersandung dan kebakaran kelistrikan.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Ketika sutradara berteriak 'CUT!', mengapa seluruh kru tidak boleh langsung mengobrol atau mematikan lampu sebelum Asisten Sutradara atau Sutradara memberikan arahan selanjutnya?",
    hookContext:
      "Aba-aba 'CUT' hanya menghentikan putaran motor kamera dan suara. Aktor dan kru tetap dalam posisi bersiaga (standby) untuk mendengar evaluasi sutradara: apakah adegan tersebut sudah sempurna (Good Take) atau harus diulang kembali (Retake).",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Aba-aba yang diucapkan oleh juru suara (Sound Recordist) untuk mengonfirmasi bahwa perekam audio sudah berjalan stabil sebelum kamera merekam adalah...",
        options: [
          { key: "A", text: "Camera Rolling!" },
          { key: "B", text: "Sound Speeds! (atau Speed!)" },
          { key: "C", text: "Action!" },
          { key: "D", text: "Wrap Day!" },
        ],
        correctKey: "B",
        explanation: "'Sound Speeds' adalah istilah baku internasional yang mengonfirmasi bahwa pita/kartu perekam suara telah mencapai kecepatan rekaman konstan dan siap merekam.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Pada papan clapperboard, penandaan take yang dianggap terbaik oleh sutradara dan direkomendasikan untuk langsung dimasukkan ke timeline editing ditandai dengan istilah...",
        options: [
          { key: "A", text: "Print Take / Good Take (diberi lingkaran O)" },
          { key: "B", text: "Trash Take" },
          { key: "C", text: "Hold Take" },
          { key: "D", text: "Wild Track" },
        ],
        correctKey: "A",
        explanation: "Good Take (atau Print Take) dilingkari pada lembar Camera Log Sheet agar editor langsung memilih file tersebut tanpa perlu meninjau puluhan take yang gagal.",
      },
    ],
    materialCards: [
      {
        title: "1. Suasana Sakral Set Produksi: Time is Money",
        content: "Set produksi audio visual adalah ekosistem kerja bertekanan tinggi di mana puluhan orang dengan berbagai keahlian bekerja secara sinkron layaknya orkestra simfoni. Kedisiplinan waktu, konsentrasi hening, dan ketaatan komando adalah kunci keselamatan dan efisiensi.",
        caseStudy: "Keterlambatan 30 menit di set syuting luar ruangan dapat menghilangkan momen pencahayaan matahari emas (Golden Hour) yang tidak akan terulang kembali pada hari itu.",
      },
      {
        title: "2. Urutan Protokol Komando Panggilan Set (Calling the Roll)",
        content: "Prosedur baku 1st AD dan Sutradara: (1) 1st AD: 'Quiet on set, standby to roll!', (2) Sutradara: 'Roll Sound!', (3) Sound Recordist: 'Sound Speeds!', (4) Sutradara: 'Roll Camera!', (5) Kameramen: 'Camera Rolling!', (6) Clapper Loader: 'Scene 2, Take 1... CLAP!', (7) Sutradara: '... ACTION!'.",
        didYouKnow: "Urutan 'Roll Sound' selalu mendahului 'Roll Camera' karena perekam audio menyerap daya listrik dan memori jauh lebih sedikit daripada kamera sensor bioskop."
      },
      {
        title: "3. Cara Mengetuk Clapperboard yang Benar",
        content: "Pegang clapperboard di depan lensa kamera pada jarak fokus yang tajam. Bacakan angka adegan dan take dengan suara lantang jelas: 'Scene Tiga, Ambil Satu!'. Ketukkan bilah kayu dengan satu ketukan tegas dan tajam (tanpa double-bounce pantulan), lalu segera tarik clapperboard keluar dari frame kamera.",
      },
      {
        title: "4. Teknik Tail Slate (Clapper Terbalik di Akhir Shot)",
        content: "Jika adegan dimulai dengan kondisi dramatis yang sangat sunyi (misal aktor sedang menangis tersedu) atau syuting hewan liar yang mudah terkejut oleh bunyi ketukan, gunakan 'Tail Slate'. Clapperboard dibalik terbalik (upside-down) dan diketukkan tepat setelah sutradara berteriak 'CUT' sebelum kamera dimatikan.",
      },
      {
        title: "5. Istilah Khusus di Clapperboard: MOS",
        content: "Jika adegan direkam tanpa suara (hanya rekaman visual saja), tulis huruf 'MOS' pada clapperboard dan selipkan jari di antara bilah kayu agar tidak menimbulkan bunyi ketukan. (MOS berasal dari istilah sineas Jerman: 'Mit Ohne Sound' atau 'Motor Only Shot').",
      },
      {
        title: "6. Lembar Laporan Kamera (Camera Log Sheet)",
        content: "Asisten Kamera 2 (2nd AC / Clapper Loader) mencatat data teknis setiap take pada formulir Camera Log: Nomor Roll Memori, Scene, Take, Focal Length Lensa (misal 50mm), Nilai T-Stop (T2.8), Filter ND, Jarak Fokus, serta keterangan sutradara: 'Good Take', 'Bad Focus', atau 'False Start'.",
      },
      {
        title: "7. Lembar Laporan Suara (Sound Log Sheet)",
        content: "Sound Recordist mencatat data teknis audio: Nama file audio WAV, Scene, Take, jenis mikrofon yang digunakan pada Track 1 (Boom) dan Track 2 (Lav Aktor Utama), level gain, dan catatan kebisingan (misal 'ada suara motor samar di detik ke-15').",
      },
      {
        title: "8. Peran Krusial Script Supervisor (Pencatat Kesinambungan)",
        content: "Duduk di sebelah sutradara memegang naskah dan stopwatch. Mencatat kata-kata dialog yang terlewat oleh aktor, mengukur durasi adegan riil, serta memotret kontinuitas posisi fisik: tangan kiri aktor memegang cangkir, arah rambut tertiup angin, dan sisa rokok aktor agar sama persis di take berikutnya.",
        caseStudy: "Gelas kopi Starbucks yang tidak sengaja tertinggal di atas meja dalam adegan serial Game of Thrones adalah contoh kegagalan pengawasan kontinuitas di set syuting bernilai triliunan rupiah.",
      },
      {
        title: "9. Manajemen Lantai Studio: Floor Director (FD)",
        content: "Di studio siaran televisi, suara sutradara di ruang MCR tidak boleh terdengar ke presenter melalui pengeras suara. Floor Director (FD) menjadi perpanjangan tangan sutradara di lantai studio menggunakan aba-aba isyarat tangan non-verbal: isyarat 5 menit, 1 menit, wrap up (memutar telunjuk), atau cut potong leher.",
      },
      {
        title: "10. Kode Isyarat Tangan Floor Director Televisi",
        content: "Isyarat standar FD: (1) Menunjuk presenter dengan jari telunjuk = 'You are on air, speak now!', (2) Menggerakkan kedua telapak tangan membuka-tutup = 'Percepat tempo bicara!', (3) Menarik kedua tangan meregang = 'Ulur waktu bicara (stretch), segmen masih lama!', (4) Tangan memotong leher = 'Segera hentikan bicara, jeda iklan!'.",
      },
      {
        title: "11. Manajemen Kabel di Set: SOP Gaffer Tape & Cable Ramp",
        content: "Kabel listrik lampu dan kabel video SDI yang berserakan di lantai adalah ancaman keselamatan nomor satu. Semua kabel wajib diikat rapi dan ditempel ke lantai menggunakan Gaffer Tape hitam anti-lengket (bukan lakban plastik licin) atau dilindungi jembatan penutup kabel (Cable Ramp / Yellow Jacket) pada jalur lalu lalang kru.",
      },
      {
        title: "12. Disiplin 'Silent on Set' & Aturan Ponsel",
        content: "Sebelum sutradara memerintahkan roll, 1st AD akan berteriak 'SILENT ON SET!'. Seluruh kru wajib mematikan nada dering ponsel (Airplane Mode / Silent). Bunyi dering ponsel atau suara obrolan bisik-bisik kru di latar belakang saat aktor menangis adalah pelanggaran etika profesional berat.",
      },
      {
        title: "13. Istilah Produksi: Wild Track & Room Tone",
        content: "Wild Track adalah rekaman audio tanpa video yang diambil di set untuk menangkap bunyi suara tertentu (misal suara pintu tua berderit atau klakson mobil khusus). Room tone diambil 60 detik saat seluruh set hening total untuk kebutuhan penyambungan audio editor.",
      },
      {
        title: "14. Istilah Produksi: Martini Shot & Abby Singer Shot",
        content: "Dalam tradisi perfilman dunia: 'Abby Singer Shot' adalah sebutan untuk adegan kedua terakhir sebelum syuting selesai hari itu (memberi sinyal kru untuk mulai mengemas alat tertentu). 'Martini Shot' adalah shot terakhir mutlak sebelum seluruh kru mengakhiri hari syuting (wrap).",
        didYouKnow: "Dinamakan 'Martini Shot' karena setelah shot terakhir ini selesai, kru film dapat bersantai menikmati minuman bersama merayakan keberhasilan hari syuting."
      },
      {
        title: "15. Manajemen Dailies & Backup Data di Akhir Shift",
        content: "DIT (Digital Imaging Technician) memastikan seluruh kartu kamera di-dump ke harddisk master A dan harddisk master B. DIT membuat file Dailies (video pratinjau resolusi rendah dengan watermark tanggal dan scene) untuk dikirimkan kepada produser dan sutradara malam itu juga untuk dievaluasi.",
      },
      {
        title: "16. Etika Perlindungan Aktor dan Anak di Bawah Umur",
        content: "Aktor anak-anak memiliki batas maksimal jam kerja syuting (maksimal 4-6 jam per hari sesuai hukum ketenagakerjaan internasional). Sutradara dan kru wajib menjaga kenyamanan psikologis aktor saat adegan emosional berat dan menyediakan ruang istirahat yang layak.",
      },
      {
        title: "17. Tanggung Jawab Kebersihan Lokasi: 'Leave No Trace'",
        content: "Kru film tidak boleh meninggalkan sampah botol plastik, puntung rokok, atau potongan lakban di lokasi syuting. Departemen Unit bertanggung jawab menyapu bersih set dan mengembalikan seluruh perabot ruangan ke posisi semula persis seperti sebelum syuting dimulai.",
      },
      {
        title: "18. Briefing Keselamatan Kerja Pagi (Morning Safety Briefing)",
        content: "Setiap pagi sebelum syuting dimulai, 1st AD dan Safety Officer mengumpulkan seluruh kru selama 5 menit untuk Safety Briefing: mengumumkan titik kumpul darurat gempa/kebakaran, lokasi kotak P3K, potensi bahaya cuaca licin, dan SOP saat adegan aksi kendaraan.",
      },
      {
        title: "19. Laporan Produksi Harian (Daily Production Report - DPR)",
        content: "Dokumen resmi yang ditandatangani Produser Lini dan 1st AD di akhir hari. Mencatat: Total scene yang direncanakan vs scene yang selesai direkam, total footage menit terekam, jam call time kru riil vs jam wrap, biaya katering harian, dan kendala alat rusak.",
      },
      {
        title: "20. POS Evaluasi Singkat Pasca-Syuting (Daily Wrap Debrief)",
        content: "Setelah peralatan aman terkunci di dalam mobil boks alat (grip truck), kepala departemen (Sutradara, DoP, Gaffer, Sound, Unit) melakukan evaluasi kilat 10 menit: membahas apa yang berjalan lancar hari ini dan mengantisipasi kebutuhan khusus untuk jadwal syuting esok hari.",
      },
    ],
    video: {
      title: "Simulasi Manajemen Set Film & Tata Urutan Panggilan Sutradara",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari cara membunyikan clapperboard, teknik tail slate terbalik, dan isyarat tangan Floor Director studio TV.",
    },
    gamePairs: [
      { id: 1, left: "Sound Speeds!", right: "Konfirmasi juru suara bahwa audio recorder sudah stabil merekam" },
      { id: 2, left: "Tail Slate", right: "Membunyikan clapperboard posisi terbalik di akhir shot untuk adegan sunyi" },
      { id: 3, left: "Martini Shot", right: "Istilah untuk pengambilan shot terakhir sebelum syuting hari itu selesai (wrap)" },
      { id: 4, left: "Cable Ramp", right: "Jembatan pengaman pelindung kabel di lantai agar kru tidak tersandung" },
      { id: 5, left: "Script Supervisor", right: "Mencatat kontinuitas properti, posisi busana, dan dialog aktor antar take" },
    ],
    caseTitle: "Kekacauan Liputan Debat: Kabel Audio Terinjak dan Sinyal Putus",
    caseScenario:
      "Dalam siaran langsung perayaan Dies Natalis sekolah, Floor Director tidak memasang lakban (gaffer tape) pada kabel audio mikrofon yang menghubungkan panggung ke audio mixer. Saat kepala sekolah sedang berpidato, seorang siswa yang terburu-buru tersandung kabel tersebut hingga tertarik kencang, mencabut soket audio, dan menimbulkan suara dentuman 'DUM!' sangat keras di speaker aula yang membuat seluruh hadirin terkejut.",
    caseInstruction:
      "Evaluasi kelalaian tata kelola lantai (floor management) dalam insiden tersebut. Rumuskan SOP pengamanan kabel dan pemisahan jalur lalu lintas penonton dari area operasional kru siaran.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Ketika syuting adegan drama di mana seorang bayi sedang tertidur lelap dan tidak boleh dikejutkan oleh suara keras clapperboard di awal take, teknik pengetukan clapper yang harus diterapkan adalah...",
        options: [
          { key: "A", text: "Mengetukkan clapperboard sekeras-kerasnya di dekat telinga bayi" },
          { key: "B", text: "Menggunakan teknik Tail Slate: clapperboard dibalik terbalik dan diketukkan perlahan tepat di akhir adegan setelah kata 'Cut'" },
          { key: "C", text: "Tidak menggunakan clapperboard sama sekali dan membiarkan editor menebak sendiri" },
          { key: "D", text: "Mengganti bayi asli dengan boneka kayu" },
        ],
        correctKey: "B",
        explanation: "Tail Slate (clapper terbalik di akhir shot) adalah SOP resmi untuk merekam adegan sensitif kebisingan tanpa mengganggu konsentrasi emosional atau membangunkan subjek.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Isyarat tangan Floor Director di studio televisi yang dilakukan dengan cara memutar jari telunjuk membentuk lingkaran di udara menandakan instruksi...",
        options: [
          { key: "A", text: "Waktu siaran presenter sudah habis, segera akhiri bicara (Wrap Up / Wind Up)!" },
          { key: "B", text: "Presenter diminta untuk terus berbicara sepanjang mungkin" },
          { key: "C", text: "Lampu studio harus dimatikan" },
          { key: "D", text: "Kamera harus berputar 360 derajat" },
        ],
        correctKey: "A",
        explanation: "Gerakan memutar jari telunjuk (winding up) adalah isyarat internasional FD yang berarti 'bungkus kalimat Anda sekarang, segmen siaran segera berakhir'.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Mengapa Asisten Kamera 2 (2nd AC) wajib mencatat kode 'Print / Good Take' pada lembar Camera Log Sheet tepat setelah sutradara merasa puas dengan sebuah adegan?",
        options: [
          { key: "A", text: "Agar kru kamera mendapatkan bonus gaji tambahan" },
          { key: "B", text: "Agar editor di ruang pascaproduksi dapat langsung mengidentifikasi file take terbaik tanpa harus membuang waktu menonton kembali puluhan take yang salah" },
          { key: "C", text: "Untuk menghapus seluruh take lainnya dari kartu memori secara otomatis" },
          { key: "D", text: "Sebagai syarat administrasi kepolisian" },
        ],
        correctKey: "B",
        explanation: "Log sheet adalah jembatan komunikasi antara set produksi dan editor. Catatan Good Take menghemat puluhan jam kerja editor dalam memilih materi berkualitas tinggi.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Evaluasi konsekuensi hukum dan finansial jika tim produksi film meninggalkan lokasi syuting cagar budaya dalam keadaan dinding retak dan sampah plastik berserakan!",
        options: [
          { key: "A", text: "Tidak ada konsekuensi apapun karena kru film dilindungi kebebasan berekspresi" },
          { key: "B", text: "Uang jaminan sewa (security deposit) akan disita, rumah produksi dapat dituntut ganti rugi perdata, dan lokasi tersebut akan diblacklist permanen untuk seluruh produksi film di masa depan" },
          { key: "C", text: "Film tersebut otomatis memenangkan penghargaan festival" },
          { key: "D", text: "Pemerintah akan memberikan subsidi tambahan" },
        ],
        correctKey: "B",
        explanation: "Etika 'Leave No Trace' dan kepatuhan Location Agreement mengikat secara hukum; perusakan properti publik merusak reputasi industri dan berkonsekuensi sanksi hukum ganti rugi berat.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Simulasikan tata urutan komando suara lengkap dari 1st AD, Sutradara, Juru Suara, Juru Kamera, dan Clapper Loader saat memulai pengambilan Scene 4 Take 2!",
        options: [
          { key: "A", text: "Semua kru langsung berteriak bersamaan: 'Ayo mulai syuting!'" },
          { key: "B", text: "1st AD: 'Quiet on set, standby!'; Sutradara: 'Roll Sound!'; Sound: 'Sound Speeds!'; Sutradara: 'Roll Camera!'; Cam: 'Camera Rolling!'; Clapper: 'Scene 4 Take 2, CLAP!'; Sutradara: '... ACTION!'" },
          { key: "C", text: "Sutradara langsung berteriak 'Action' tanpa menyalakan kamera dan suara" },
          { key: "D", text: "Kameramen menekan tombol rekam diam-diam tanpa memberitahu siapapun" },
        ],
        correctKey: "B",
        explanation: "Protokol standar memastikan seluruh subsistem perekaman (suara, visual, clapperboard) telah aktif dan stabil secara terkoordinasi sebelum aktor memulai adegannya.",
      },
    ],
    lkpd: {
      title: "LKPD E4-K3: Simulasi Protokol Set Syuting: Aba-Aba Sutradara, Slating, & Log Sheet",
      objective: "Peserta didik mampu mempraktikkan tata urutan panggilan rekaman di set syuting (Calling the Roll), mengoperasikan clapperboard dengan pengetukan tajam, dan mengisi lembar Camera Log Sheet.",
      tools: ["Kamera Video & Tripod", "Audio Recorder & Boom Mic", "Papan Clapperboard Akrilik & Spidol", "Format Cetak Camera Log Sheet & Sound Log Sheet", "Gaffer Tape"],
      steps: [
        "Bagi kelompok menjadi peran: Sutradara, 1st AD, Kameramen, Sound Recordist, Clapper Loader, dan 2 Aktor.",
        "Amankan jalur kabel kamera dan lampu ke lantai menggunakan gaffer tape.",
        "Lakukan gladi bersih urutan komando aba-aba set hingga lancar tanpa keraguan intonasi.",
        "Lakukan perekaman Take 1: Clapper Loader berdiri di depan kamera, membacakan informasi papan, dan mengetuk bilah dengan tegas.",
        "Sutradara sengaja meminta 'CUT! False start!' pada Take 1, dan meminta diulang ke Take 2.",
        "Lakukan perekaman Take 2 hingga tuntas dan Sutradara mengumumkan 'Good Take!'.",
        "2nd AC dan Sound Recordist mengisi data teknis (Scene, Take, Lensa, Good Take O) pada lembar log sheet masing-masing.",
      ],
      outputFormat: "Video rekaman pelaksanaan simulasi set 45 detik dan lembar fisik Camera Log Sheet yang terisi lengkap.",
    },
    journalQuestions: {
      q1: "Mengapa ketegasan dan kejelasan suara seorang 1st AD sangat menentukan atmosfer kedisiplinan kru di lokasi syuting?",
      q2: "Bagaimana perasaan Anda saat pertama kali membunyikan clapperboard di depan lensa kamera?",
      q3: "Mengapa kepatuhan memasang gaffer tape pada kabel lantai bukan sekadar urusan kerapian, melainkan menyangkut nyawa rekan kerja?",
    },
    kktpIndicators: [
      "Mampu mendemonstrasikan protokol aba-aba panggilan set (Calling the Roll) secara runtut dan percaya diri.",
      "Mampu mengoperasikan clapperboard standar dan teknik tail slate secara presisi.",
      "Mampu mencatat data teknis produksi pada Camera Log Sheet dan Sound Log Sheet secara akurat.",
    ],
  },

  // =========================================================================
  // KONTEN 4: e4-k4 - Pascaproduksi Sederhana (Offline-Online Editing)
  // =========================================================================
  {
    id: "e4-k4",
    order: 4,
    title: "Pascaproduksi Sederhana: Offline-Online Editing, Penataan Warna, & Audio Mastering",
    shortTitle: "Pascaproduksi & Mastering",
    summary:
      "Alur penyelesaian karya visual: pemisahan fase Offline Editing (assembly, rough cut, fine cut, picture lock) dan Online Editing (conforming, color balancing, audio sweetening/mastering EBU R128), penambahan grafis title & subtitle, serta standar ekspor rendering master.",
    kompetensi: [
      "Membedakan fungsi dan tujuan tahapan Offline Editing vs Online Editing dalam pascaproduksi.",
      "Mengeksekusi Picture Lock sebagai batas kesepakatan durasi visual sebelum penataan suara dan warna.",
      "Menerapkan teknik Color Correction dasar: black point, white point, exposure balance, dan skin tone match.",
      "Melakukan audio balancing, noise reduction, equalisasi (EQ), kompresi dinamika, dan loudness normalization (-23 LUFS / -14 LUFS).",
      "Mengekspor file master video dengan format kontainer dan codec yang sesuai dengan spesifikasi platform penayangan.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menyelesaikan alur editing video dari rough cut hingga fine cut yang berirama harmonis.",
      "Peserta didik mampu menyeimbangkan warna dan eksposur dari dua kamera berbeda pada satu adegan.",
      "Peserta didik mampu mengolah audio dialog agar jernih, bebas desis, dan memenuhi standar kenyaringan penyiaran.",
      "Peserta didik mampu mengekspor master file video berkualitas tinggi bebas cacat kompresi.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Jika Anda sudah mengedit video selama seminggu penuh, mengapa hasil video Anda di layar HP teman tampak terlalu gelap dan suaranya membuat telinga sakit saat diputar di speaker mobil?",
    hookContext:
      "Tanpa kalibrasi warna (Color Correction) dan standarisasi kenyaringan audio (Loudness Mastering), video Anda hanya terdengar dan terlihat bagus di komputer tempat Anda mengeditnya, namun akan rusak di perangkat publik lainnya.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Standar pengukuran kenyaringan audio penyiaran terpadu (Integrated Loudness) yang digunakan oleh YouTube untuk mencegah audio video berteriak memekakkan telinga adalah...",
        options: [
          { key: "A", text: "-14 LUFS (Loudness Units Full Scale)" },
          { key: "B", text: "0 LUFS" },
          { key: "C", text: "+10 dB" },
          { key: "D", text: "-60 dB" },
        ],
        correctKey: "A",
        explanation: "YouTube menetapkan standar kenyaringan audio di -14 LUFS. Jika audio Anda lebih keras dari ini, sistem YouTube akan menurunkan volumenya secara otomatis.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Proses menghubungkan kembali susunan potongan timeline offline editing (beresolusi proxy rendah) dengan file mentah kamera berkualitas tinggi (resolusi 4K RAW/ProRes) disebut...",
        options: [
          { key: "A", text: "Conforming / Relinking High-Res Media" },
          { key: "B", text: "Script Breakdown" },
          { key: "C", text: "Format Disk" },
          { key: "D", text: "Motion Blur" },
        ],
        correctKey: "A",
        explanation: "Conforming adalah jembatan transisi dari offline editing (file proxy ringan) menuju online editing resolusi asli kamera untuk proses color grading dan finishing visual.",
      },
    ],
    materialCards: [
      {
        title: "1. Paradigma Pascaproduksi: Offline vs Online Editing",
        content: "Untuk menghemat kinerja komputer saat menyunting video berukuran raksasa (4K/6K RAW), industri membagi proses editing menjadi dua: Offline Editing (menggunakan file tiruan berukuran ringan/Proxy untuk memotong struktur cerita) dan Online Editing (kembali ke file asli resolusi penuh untuk pewarnaan dan finishing).",
        caseStudy: "Mengedit file 4K RAW langsung di laptop biasa menyebabkan playback patah-patah (lag), memperlambat kreativitas editor.",
      },
      {
        title: "2. Alur Proxy Workflow: Mengedit Tanpa Lag Komputer",
        content: "File rekaman asli kamera dikonversi menjadi file Proxy beresolusi 1080p dengan codec Apple ProRes Proxy atau DNxHR LB. Editor memotong adegan dengan sangat lancar. Setelah potongan cerita selesai, software NLE melakukan 'Toggle Proxy' untuk beralih kembali ke file resolusi 4K asli dalam satu klik.",
      },
      {
        title: "3. Tiga Tonggak Potongan Cerita: Assembly, Rough, Fine Cut",
        content: "Assembly Cut menjejerkan semua scene secara berurutan sesuai naskah tanpa filter durasi. Rough Cut membuang take gagal dan merapikan irama dialog (biasanya berdurasi 20% lebih panjang dari durasi target). Fine Cut memoles setiap frame potongan hingga memiliki ritme emosional yang memikat.",
      },
      {
        title: "4. Tonggak Keramat: Picture Lock",
        content: "Picture Lock adalah kesepakatan resmi produser dan sutradara bahwa susunan visual video sudah 100% final. Tidak boleh ada lagi pemotongan frame, penambahan shot, atau pergeseran durasi, sehingga tim audio, musik, dan visual effect dapat bekerja simultan.",
        didYouKnow: "Jika durasi visual bergeser 1 detik saja setelah Picture Lock, puluhan jam kerja komposer musik scoring akan rusak dan harus disesuaikan ulang dari awal."
      },
      {
        title: "5. Online Editing: Tahap Conforming & Relinking",
        content: "Setelah Picture Lock, timeline dikirim ke software finishing (DaVinci Resolve) menggunakan file metadata XML, EDL, atau AAF. Software menghubungkan kembali (conforming) potongan timeline ke file footage RAW/ProRes kualitas tertinggi untuk dimulainya color grading.",
      },
      {
        title: "6. Color Correction: Fondasi Normalisasi Gambar",
        content: "Color correction adalah proses teknis objektif untuk membuat gambar tampak natural dan benar secara ilmiah: (1) Menyetel Black Point (shadow menyentuh 0 IRE), (2) Menyetel White Point (highlight menyentuh 100 IRE), (3) Mengoreksi temperatur warna dan tint, (4) Menyamakan warna antar shot berbeda.",
      },
      {
        title: "7. Menggunakan Alat Ukur Warna: Vectorscope",
        content: "Vectorscope adalah instrumen lingkaran yang mengukur saturasi dan corak warna (hue). Garis diagonal khusus pada Vectorscope disebut 'Skin Tone Line'. Terlepas dari ras manusia mana pun (asia, afrika, kaukasia), pigmen darah kulit manusia yang sehat selalu jatuh tepat di sepanjang garis Skin Tone Line.",
        caseStudy: "Colorist selalu memeriksa garis Skin Tone Line untuk memastikan wajah talent tidak tampak terlalu merah menyala seperti udang rebus atau terlalu kuning sakit.",
      },
      {
        title: "8. Color Grading: Membangun Atmosfer dan Jiwa Cerita",
        content: "Color grading adalah pilihan artistik subjektif untuk menuntun emosi penonton: (1) Teal & Orange (kontras komplementer modern untuk film aksi Hollywood), (2) Warm Golden (nuansa nostalgia, kehangatan cinta, atau masa kecil), (3) Desaturated Cold Green (nuansa dystopian, horor, atau depresi batin).",
      },
      {
        title: "9. Penggunaan Look-Up Table (LUT): Utility vs Creative LUT",
        content: "Utility / Conversion LUT (Technical LUT) berfungsi mengonversi kurva Log kamera (S-Log3, C-Log) ke ruang warna standar monitor Rec.709 secara akurat. Creative LUT menambahkan palet gaya warna artistik tertentu di atas gambar yang sudah dinormalkan.",
      },
      {
        title: "10. Penataan Audio Pascaproduksi: Pembersihan Dialog (Denoising)",
        content: "Membersihkan gangguan rekaman lapangan menggunakan software restorasi audio (iZotope RX / Adobe Audition / DaVinci Fairlight): Voice De-noise (membuang desis AC), De-reverb (mengurangi gaung gema ruangan), dan De-click (membuang bunyi decakan air liur lidah di mikrofon).",
      },
      {
        title: "11. Equalization (EQ): Membentuk Karakter Frekuensi Suara",
        content: "Equalizer (EQ) mengatur keseimbangan frekuensi: (1) High-Pass Filter (potong frekuensi <80 Hz untuk buang dengung), (2) Potong frekuensi sengau 400-800 Hz (boxy frequency), (3) Tingkatkan sedikit frekuensi 3-5 kHz untuk memperjelas artikulasi vokal (clarity/presence), (4) Air band di atas 12 kHz untuk desah jernih.",
      },
      {
        title: "12. Kompresi Dinamika Audio (Dynamic Range Compression)",
        content: "Kompresor merapatkan selisih volume antara bisikan terpelan dan teriakan terkeras aktor. Kompresor secara halus menurunkan suara teriakan dan menaikkan suara bisikan yang terlalu lirih, sehingga penonton tidak perlu membesarkan-mengecilkan volume remote TV terus menerus.",
      },
      {
        title: "13. Standarisasi Kenyaringan: Loudness Units (LUFS / LKFS)",
        content: "Meteran puncak (peak dBFS) tidak mengukur kenyaringan yang dirasakan telinga manusia. Standar modern mengukur Integrated Loudness: Standar Televisi Indonesia & Eropa: -23 LUFS (EBU R128). Standar YouTube & Spotify: -14 LUFS. Standar Netflix: -27 LUFS.",
        caseStudy: "Video promosi sekolah yang di-render pada -8 LUFS (terlalu keras) akan mengalami kompresi penalti otomatis oleh algoritma YouTube sehingga suaranya menjadi redup dan kehilangan dinamika.",
      },
      {
        title: "14. Limiter & True Peak: Menjaga Batas Aman Puncak",
        content: "Di ujung rantai master audio, pasang Brickwall True Peak Limiter pada nilai -1.0 dBTP (Decibels True Peak) atau -2.0 dBTP. Ini mencegah terjadinya lonjakan inter-sample clipping saat file audio dikompresi menjadi format MP3 atau AAC.",
      },
      {
        title: "15. Desain Grafis Gerak: Title & Lower Thirds",
        content: "Menambahkan identitas visual program: bumper pembuka, logo stasiun di pojok kanan atas, kartu nama narasumber (lower third), dan credit title penutup. Desain wajib mematuhi panduan identitas merek (Brand Guidelines) terkait jenis font dan kode warna sekolah.",
      },
      {
        title: "16. Kepatuhan Aksesibilitas: Subtitle & Closed Caption (CC)",
        content: "Penyediaan teks terjemahan atau takarir tertutup (Closed Captions) format .SRT. Mengakomodasi penonton tunarungu dan pengguna smartphone modern yang menonton video di media sosial tanpa menyalakan speaker suara (mute autoplay).",
      },
      {
        title: "17. Ekspor Master: Codec, Container, & Bitrate",
        content: "Format Container (wadah seperti .MP4, .MOV) membungkus aliran video dan audio. Codec (kompresor-dekompresor) memproses data: H.264 (kompatibilitas luas universal), H.265 / HEVC (efisiensi ukuran file 50% lebih kecil untuk video 4K), Apple ProRes 422 HQ (arsip master tanpa penurunan kualitas).",
      },
      {
        title: "18. Parameter Ekspor Web: Target Bitrate & VBR 2-Pass",
        content: "Untuk resolusi Full HD 1080p 25fps pada platform YouTube: Ekspor dengan profil VBR 2-Pass (Variable Bitrate: Target 15-20 Mbps, Maximum 25 Mbps), Audio Codec AAC Stereo, Sample Rate 48 kHz, Bitrate 320 kbps. Menghasilkan visual tajam tanpa artefak pixel kotak-kotak saat adegan bergerak cepat.",
      },
      {
        title: "19. POS Quality Control (QC) Master Video",
        content: "Daftar periksa uji mutu sebelum rilis: (1) Uji Lip-Sync gerak bibir dan audio tidak boleh geser 1 frame pun, (2) Uji dengar audio menggunakan headphone dan speaker HP, (3) Uji bebas frame hitam (black gap) di antara sambungan shot, (4) Periksa ejaan nama narasumber dan gelar di lower third.",
      },
      {
        title: "20. Prosedur Serah Terima Master & Pengarsipan Proyek (Project Archiving)",
        content: "Gunakan fitur 'Project Manager' di Premiere Pro atau 'Project Archive' di DaVinci Resolve untuk mengumpulkan seluruh media yang terpakai di timeline ke dalam satu folder terisolasi (Consolidate Media). Simpan file master ProRes, file MP4, naskah final, dan file proyek ke dalam harddisk arsip bersampul label tanggal.",
      },
    ],
    video: {
      title: "Masterclass Pascaproduksi: Color Grading & Audio Mastering Standar EBU R128",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari cara membaca Vectorscope Skin Tone Line dan mengkalibrasi loudness audio di DaVinci Fairlight / Premiere Pro.",
    },
    gamePairs: [
      { id: 1, left: "Picture Lock", right: "Kesepakatan durasi susunan visual terkunci sebelum penataan warna dan audio" },
      { id: 2, left: "Skin Tone Line", right: "Garis acuan standar pigmentasi kulit manusia pada monitor Vectorscope" },
      { id: 3, left: "-14 LUFS", right: "Standar kenyaringan audio terpadu resmi untuk platform YouTube" },
      { id: 4, left: "ProRes 422 HQ", right: "Codec master arsip video broadcast berkualitas tinggi tanpa kompresi rusak" },
      { id: 5, left: "True Peak Limiter", right: "Mencegah lonjakan sinyal audio melampaui batas aman -1.0 dBTP" },
    ],
    caseTitle: "Audio Terdistorsi dan Warna Wajah Terbakar di Penayangan TV Sekolah",
    caseScenario:
      "Video dokumenter siswa SMK ditayangkan pada layar LED raksasa aula saat pameran pendidikan. Penonton mengeluh karena volume suara narasumber berfluktuasi ekstrem — saat narasumber berbicara suaranya hampir tidak terdengar, namun saat musik latar masuk, suaranya menggelegar memekakkan telinga hingga speaker pecah. Di sisi visual, wajah kepala sekolah tampak merah keunguan terbakar karena editor mengedit di layar laptop murah tanpa mengkalibrasi instrumen Vectorscope dan Waveform.",
    caseInstruction:
      "Analisis dua kegagalan pascaproduksi (penataan warna dan pengolahan audio) dalam kasus tersebut. Jelaskan langkah-langkah audio ducking, kompresi, dan koreksi warna skin tone yang wajib diterapkan untuk memperbaikinya.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Garis referensi pada alat ukur Vectorscope yang wajib dijadikan pedoman oleh seorang Colorist saat menyeimbangkan warna kulit manusia (skin tone) adalah...",
        options: [
          { key: "A", text: "Garis horizontal 50 IRE" },
          { key: "B", text: "Skin Tone Line (garis diagonal sudut 10:30 pada piringan vectorscope)" },
          { key: "C", text: "Garis batas saturasi merah 100%" },
          { key: "D", text: "Garis tengah hitam putih" },
        ],
        correctKey: "B",
        explanation: "Skin Tone Line pada Vectorscope adalah acuan universal warna darah hemoglobin di bawah jaringan kulit manusia dari semua ras dan suku di dunia.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Efek audio yang berfungsi merapatkan rentang dinamis suara — menahan teriakan keras dan mengangkat bisikan lirih agar volume dialog terdengar stabil dan rata — disebut...",
        options: [
          { key: "A", text: "Dynamic Compressor" },
          { key: "B", text: "Pitch Shifter" },
          { key: "C", text: "Reverb Hall" },
          { key: "D", text: "Flanger" },
        ],
        correctKey: "A",
        explanation: "Kompresor dinamika audio (Compressor) mengendalikan rentang dinamika suara agar terdengar konsisten, jelas, dan bertenaga di berbagai perangkat putar.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Seorang editor mengekspor video promosi dengan format MP4 bitrate 500 kbps untuk menghemat kuota internet. Ketika video diputar di laptop, tampilan gambar tampak pecah menjadi kotak-kotak piksel besar (pixelated banding) saat adegan kamera bergerak cepat. Masalah teknis ini disebabkan oleh...",
        options: [
          { key: "A", text: "Sensor kamera mengalami korsleting saat syuting" },
          { key: "B", text: "Bitrate video yang dialokasikan terlalu rendah sehingga codec kompresi membuang terlalu banyak data informasi gambar" },
          { key: "C", text: "Monitor laptop tidak mendukung warna RGB" },
          { key: "D", text: "Pengaturan audio loudness terlalu tinggi" },
        ],
        correctKey: "B",
        explanation: "Bitrate adalah kuantitas data per detik. Bitrate 500 kbps terlalu kecil untuk video Full HD beresolusi tinggi, mengakibatkan kompresi artefak makroblok saat ada pergerakan dinamis.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Mengapa editor profesional selalu melakukan proses Color Correction terlebih dahulu sebelum menerapkan Color Grading artistik pada sebuah film?",
        options: [
          { key: "A", text: "Karena Color Grading tidak membutuhkan software komputer" },
          { key: "B", text: "Karena Color Correction menetralisir dan menyeimbangkan fondasi eksposur serta white balance seluruh kamera agar seragam; menerapkan grading di atas gambar yang belum netral akan menghasilkan warna yang belang-belang dan kacau" },
          { key: "C", text: "Hanya untuk menambah jam kerja agar bayaran honor lebih mahal" },
          { key: "D", text: "Karena Color Correction mengubah video menjadi hitam putih" },
        ],
        correctKey: "B",
        explanation: "Color Correction menciptakan 'kanvas netral' yang seimbang. Jika gambar belum seimbang, palet warna grading yang diterapkan di atasnya akan bereaksi berbeda-beda pada setiap shot kamera.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah alur kerja (workflow) pascaproduksi audio visual yang komprehensif mulai dari pemotongan gambar kasar (Rough Cut) hingga file master siap didistribusikan ke stasiun TV!",
        options: [
          { key: "A", text: "Rough Cut -> Langsung ekspor MP4 -> Unggah ke internet" },
          { key: "B", text: "Rough Cut -> Fine Cut -> Picture Lock -> Conforming Media Asli -> Color Correction & Grading -> Audio Cleaning & Loudness Mastering (-23 LUFS) -> Penambahan Grafis Lower Third -> Quality Control 100% -> Ekspor Master ProRes 422 HQ & MP4" },
          { key: "C", text: "Mengganti seluruh suara dengan musik TikTok tanpa dialog narasumber" },
          { key: "D", text: "Memotong video secara acak tanpa memperhatikan naskah" },
        ],
        correctKey: "B",
        explanation: "Alur kerja standar industri menjamin integrasi berkesinambungan antara penguncian durasi visual (Picture Lock), penyempurnaan warna teknis dan estetis, standarisasi audio broadcast, serta verifikasi mutu QC akhir.",
      },
    ],
    lkpd: {
      title: "LKPD E4-K4: Penataan Warna Dasar & Pengolahan Audio Mastering Video",
      objective: "Peserta didik mampu melakukan color correction dasar (keseimbangan white point, black point, skin tone) dan mastering audio dialog sesuai standar kenyaringan -14 LUFS.",
      tools: ["Komputer Editing NLE (Premiere Pro / DaVinci Resolve)", "Klip Mentah Video Berwarna Log / Pucat dengan Audio Lapangan", "Monitor Terkalibrasi & Headphone Studio"],
      steps: [
        "Impor klip video wawancara ke dalam timeline software NLE.",
        "Buka panel Lumetri Color (Premiere) atau Color Page (DaVinci Resolve).",
        "Atur Black Point dan White Point menggunakan Waveform monitor agar kontras berada pada rentang 0-100 IRE.",
        "Periksa garis Skin Tone Line pada Vectorscope dan sesuaikan sumbu Temperature/Tint hingga warna kulit tepat berada di garis diagonal referensi.",
        "Buka panel audio mixer: terapkan efek Noise Reduction ringan untuk menghilangkan desis latar.",
        "Tambahkan efek Compressor dan atur Threshold -18 dB, Ratio 3:1.",
        "Pasang Loudness Meter dan atur Gain master agar nilai Integrated Loudness terbaca stabil pada -14 LUFS (toleransi ±1 LUFS).",
        "Ekspor hasil video dengan format MP4 H.264 VBR 15 Mbps Full HD.",
      ],
      outputFormat: "File video MP4 hasil color grading dan audio mastering berdurasi 30-60 detik beserta screenshot panel Vectorscope dan Loudness Meter.",
    },
    journalQuestions: {
      q1: "Mengapa pemahaman mengenai Vectorscope dan Waveform monitor jauh lebih dapat dipercaya daripada mata telanjang saat mengedit di ruangan gelap?",
      q2: "Bagaimana proses kompresi audio membantu pendengar memahami dialog tanpa harus bersusah payah menaikkan volume speaker?",
      q3: "Kepuasan apa yang Anda rasakan ketika melihat perbandingan gambar video sebelum (flat/log) dan sesudah dilakukan color grading?",
    },
    kktpIndicators: [
      "Mampu mendemonstrasikan proses Color Correction berbasis instrumen ukur Waveform dan Vectorscope.",
      "Mampu mengolah audio dialog menggunakan noise reduction, kompresor, dan standarisasi LUFS.",
      "Mampu mengekspor video master beresolusi Full HD dengan spesifikasi teknis penyiaran yang tepat.",
    ],
  },

  // =========================================================================
  // KONTEN 5: e4-k5 - Produksi Konten Media Baru (Format Vertikal)
  // =========================================================================
  {
    id: "e4-k5",
    order: 5,
    title: "Produksi Konten Media Baru: Format Vertikal (9:16), Micro-Documentary, & Live Streaming",
    shortTitle: "Produksi Media Baru Vertikal",
    summary:
      "Adaptasi broadcasting di era konvergensi internet: karakteristik video vertikal 9:16 (TikTok, Instagram Reels, YouTube Shorts), teknik framing visual vertikal, formula hook pembuka 3 detik pertama, micro-documentary bercerita cepat, integrasi automated auto-captioning, serta setup siaran langsung interaktif multi-platform.",
    kompetensi: [
      "Memahami perbedaan komposisi estetika dan framing ruang antara format lanskap 16:9 tradisional vs format vertikal 9:16.",
      "Merancang hook audio-visual dramatis pada 3 detik pertama untuk menahan tingkat retensi penonton digital (watch time retention).",
      "Memproduksi format micro-documentary (durasi 60-90 detik) yang memadatkan narasi cerita tanpa kehilangan esensi informasi.",
      "Mengintegrasikan tipografi dinamis dan auto-captioning vertikal yang ramah aksesibilitas di smartphone.",
      "Mengkonfigurasi setup peralatan siaran langsung (live streaming) vertikal interaktif menggunakan OBS Studio.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu merancang konsep dan naskah konten vertikal edukatif berdurasi 60 detik.",
      "Peserta didik mampu membidik gambar kamera dengan komposisi vertikal yang mematuhi batas antarmuka tombol aplikasi (UI Safe Zones).",
      "Peserta didik mampu mengedit video berirama dinamis dengan tipografi teks pop-up yang memikat generasi digital.",
      "Peserta didik mampu mengeksekusi live streaming interaktif edukasi menggunakan encoder streaming modern.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Mengapa sebagian besar pengguna smartphone langsung menggulir layar (swipe away) video vertikal Anda dalam waktu kurang dari 2 detik jika Anda memulai video dengan salam pembuka formal yang panjang dan bertele-tele?",
    hookContext:
      "Dalam ekosistem media baru vertikal, rentang perhatian (attention span) manusia berada di bawah 3 detik. Konten harus langsung memicu rasa penasaran (Curiosity Gap) atau kejutan emosional di detik pertama sebelum pengguna menggeser jarinya ke video lain.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Rasio aspek bingkai video standar yang dirancang khusus untuk kenyamanan layar genggam smartphone tanpa perlu memutar ponsel adalah...",
        options: [
          { key: "A", text: "Format Lanskap 16:9" },
          { key: "B", text: "Format Vertikal 9:16 (1080 x 1920 piksel)" },
          { key: "C", text: "Format Klasik 4:3" },
          { key: "D", text: "Format Sinemascope 2.39:1" },
        ],
        correctKey: "B",
        explanation: "Format vertikal 9:16 (1080x1920) mengisi 100% layar smartphone secara ergonomis pada platform TikTok, Instagram Reels, dan YouTube Shorts.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Area aman pada komposisi video vertikal di mana teks dan elemen visual penting tidak boleh diletakkan karena akan tertutup oleh ikon love, komentar, judul akun, dan navigasi aplikasi disebut...",
        options: [
          { key: "A", text: "UI (User Interface) Safe Zone" },
          { key: "B", text: "Rule of Thirds" },
          { key: "C", text: "Title Safe Area TV Tabung" },
          { key: "D", text: "Color Gamut Zone" },
        ],
        correctKey: "A",
        explanation: "UI Safe Zone melindungi teks dan wajah dari tutupan elemen tombol antarmuka aplikasi TikTok/Instagram di sisi kanan (ikon likes/share) dan sisi bawah (caption/audio bar).",
      },
    ],
    materialCards: [
      {
        title: "1. Gelombang Revolusi Format Vertikal (9:16)",
        content: "Lebih dari 80% konsumsi video global saat ini dinikmati melalui layar smartphone yang dipegang secara vertikal (tegak). Platform seperti TikTok, IG Reels, dan Shorts telah mengubah tata bahasa sinematografi: dari dominasi garis horizontal menjadi fokus figuratif vertikal tubuh manusia.",
        caseStudy: "Stasiun TV berita nasional kini membentuk tim khusus 'Digital Newsroom' untuk memproduksi ringkasan berita harian format 9:16 guna menjangkau generasi Z yang tidak lagi menonton televisi konvensional.",
      },
      {
        title: "2. Estetika Framing Vertikal: Manusia di Tengah Bingkai",
        content: "Format 9:16 sangat ideal untuk membidik potret manusia (Close Up, Medium Close Up) dan detail menjulang ke atas (gedung pencakar langit, pohon raksasa). Namun, format ini membatasi pemandangan lingkungan samping, menuntut penataan ruang latar depan dan belakang yang lebih padat.",
      },
      {
        title: "3. Memahami UI Safe Zones Aplikasi Media Sosial",
        content: "Jangan letakkan teks penting di tepi frame! Zona Bahaya: 15% area atas (tertutup search bar & tab following), 20% area kanan (tertutup ikon profil, likes, komentar, share), dan 25% area bawah (tertutup nama akun, deskripsi naskah, dan judul lagu). Letakkan teks penting tepat di 50% zona tengah frame.",
        didYouKnow: "Banyak kreator pemula gagal karena teks tutorial mereka terpotong dan tidak terbaca akibat tertutup oleh kolom komentar aplikasi TikTok."
      },
      {
        title: "4. Anatomi '3-Second Hook' yang Mematikan",
        content: "Detik 1-3 menentukan nasib video. Strategi hook yang terbukti: (1) Visual Hook (aksi fisik tak terduga atau teks kontroversial mencolok), (2) Question Hook ('Pernahkah Anda menyadari bahwa...?'), (3) Negative Hook ('Jangan lakukan kesalahan ini saat syuting!'), (4) Story Hook ('Ini alasan mengapa kamera bioskop bisa meledak...').",
      },
      {
        title: "5. Struktur Alur Cerita Micro-Documentary 60 Detik",
        content: "Formula 60 detik berdaya pikat: Detik 0-3: Hook pemicu rasa penasaran; Detik 4-15: Pengenalan masalah/karakter yang memancing empati; Detik 16-40: Eksplorasi proses perjuangan & konflik rintangan; Detik 41-55: Resolusi keberhasilan atau pesan moral mendalam; Detik 56-60: Call to Action (ajakan follow/komentar).",
      },
      {
        title: "6. Ritme Editing Cepat (Pacing & Retention Rate)",
        content: "Video vertikal tidak mentolerir jeda hening yang membosankan. Terapkan pemotongan Jump Cut dinamis untuk membuang desah nafas narasumber, ganti sudut visual (b-roll, zoom punch-in 10-15%) setiap 2 hingga 3 detik sekali untuk mereset fokus perhatian retina mata penonton.",
      },
      {
        title: "7. Kekuatan Tipografi Teks Dinamis & Auto-Caption",
        content: "Sekitar 70% pengguna ponsel menonton video di tempat umum dengan audio dimatikan (mute). Teks subtitle kinetik dengan highlight kata berwarna kuning/hijau neon (efek Alex Hormozi style) wajib disematkan menggunakan AI Auto-Captioning untuk mempertahankan pemahaman penonton.",
      },
      {
        title: "8. Pemanfaatan Musik Tren & Sound Design Mikro",
        content: "Gunakan musik latar instrumental ber-ritme cepat yang sedang tren di algoritma platform. Sisipkan efek suara mikro (SFX whoosh saat transisi, pop saat teks muncul, camera shutter saat foto tampil, mouse click) untuk memberikan sensasi kepuasan sensorik audio yang reaktif.",
      },
      {
        title: "9. Pengambilan Gambar Multi-Format: Open Gate 3:2 / 4:3",
        content: "Kamera modern (Lumix S5II, FX3) memiliki mode sensor penuh 'Open Gate'. Merekam dalam aspek 3:2 memungkinkan editor mengekspor satu footage yang sama menjadi dua hasil sekaligus: format lanskap 16:9 untuk YouTube dan format vertikal 9:16 untuk Reels tanpa kehilangan resolusi sensor.",
        caseStudy: "Tim produksi sekolah merekam pentas seni satu kali dengan mode Open Gate 6K, lalu membaginya menjadi video YouTube panjang dan 5 klip vertikal Shorts untuk Instagram.",
      },
      {
        title: "10. Rigging Khusus Kamera Vertikal: L-Bracket & Gimbal Vertical Mode",
        content: "Untuk syuting vertikal profesional dengan lensa berat, pasang 'L-Bracket' aluminium pada bodi kamera agar kamera dapat didudukkan tegak lurus di atas tripod fluid head. Gimbal bermotor modern (DJI RS3/RS4) memiliki fitur 'Native Vertical Mount' tanpa perlu aksesori tambahan.",
      },
      {
        title: "11. Tata Cahaya untuk Konten Smartphone: Ring Light vs Diffused Softbox",
        content: "Lampu Ring Light menghasilkan lingkaran cahaya catchlight di pupil mata, namun cenderung menghasilkan bayangan datar yang kurang artistik. Setup profesional untuk kreator vertikal: 1 unit lampu COB LED 100W dengan Softbox bulat (Lantern/Octabox) di samping atas dan 1 lampu aksen RGB di latar belakang.",
      },
      {
        title: "12. Mikrofon Nirkabel Miniatur untuk Kreator Ponsel",
        content: "Sistem mikrofon nirkabel 2.4 GHz ultra-kompak (Rode Wireless PRO, DJI Mic 2, Hollyland Lark Max) memiliki transmitter kecil bermagnet yang menempel di baju, receiver langsung menancap ke port USB-C/Lightning smartphone, dan perekaman backup 32-bit float internal.",
      },
      {
        title: "13. Ekosistem Live Streaming Vertikal Interaktif",
        content: "Siaran langsung interaktif (TikTok Live, Shopee Live, YouTube Live) menuntut interaksi dua arah real-time antara host dan penonton. Host menyapa nama penonton yang baru bergabung, membaca komentar chat yang mengalir, dan merespons pertanyaan secara spontan.",
      },
      {
        title: "14. Konfigurasi Software Encoder Streaming: OBS Studio Vertikal",
        content: "Gunakan plugin Aitum Vertical di OBS Studio untuk membuat kanvas ganda: kanvas utama 1920x1080 (YouTube) dan kanvas vertikal 1080x1920 (TikTok). Hubungkan kamera via capture card HDMI-to-USB, atur audio bitrate AAC 160 kbps, dan video bitrate 3500-4500 kbps stabil.",
      },
      {
        title: "15. Integrasi Grafis Live Stream: Alert Box & Chat Overlay",
        content: "Tampilkan notifikasi animasi visual di layar saat ada penonton yang memberikan hadiah virtual (gift/superchat), mem-follow akun, atau mengajukan pertanyaan terbaik. Animasi interaktif memicu psikologis penonton lain untuk ikut berpartisipasi aktif dalam siaran.",
      },
      {
        title: "16. Etika & Kepatuhan Regulasi Konten Media Baru",
        content: "Kreator media baru wajib mematuhi pedoman komunitas (Community Guidelines) platform: larangan ujaran kebencian, perundungan siber (cyberbullying), konten bahaya fisik tanpa pengaman, dan penyebaran disinformasi hoaks. Pelanggaran berujung pemblokiran akun permanen (shadowban / account ban).",
      },
      {
        title: "17. Algoritma Distribusi Konten: Retensi & Watch Time",
        content: "Algoritma platform media sosial tidak peduli seberapa mahal kamera Anda; algoritma hanya peduli pada dua metrik: Average Percentage Viewed (APV > 80% berarti video sangat menarik) dan Completion Rate (persentase penonton yang menonton hingga detik terakhir).",
        didYouKnow: "Video berdurasi 30 detik yang ditonton orang hingga selesai dan diulang (looping) memiliki peluang viral 10 kali lebih besar daripada video 5 menit yang di-swipe di detik ke-10."
      },
      {
        title: "18. Thumbnail & Judul Penutup (Cover Frame)",
        content: "Pilih satu frame visual paling menarik dengan ekspresi wajah dramatis sebagai sampul (cover). Tambahkan teks judul besar 3-4 kata dengan warna kontras tinggi agar profil feed akun media sosial terlihat rapi dan memancing klik pengguna baru.",
      },
      {
        title: "19. Strategi Call to Action (CTA) yang Organik",
        content: "Jangan meminta 'Like, comment, dan subscribe' secara kaku di awal video. Letakkan CTA di detik-detik akhir dengan memancing diskusi terbuka: 'Menurut Anda, apakah kamera mirrorless sudah bisa menggantikan kamera bioskop seutuhnya? Tulis pendapat Anda di kolom komentar!'.",
      },
      {
        title: "20. POS Evaluasi Analitik Pasca-Posting (Analytics Review)",
        content: "Dua puluh empat jam setelah video diposting, buka menu Creator Analytics: pelajari grafik retensi penonton (Audience Retention Drop-Off). Analisis di detik ke berapa penonton paling banyak keluar, dan gunakan data tersebut untuk memperbaiki hook naskah pada video berikutnya.",
      },
    ],
    video: {
      title: "Strategi Produksi Konten Video Vertikal (9:16) & Setup Live Streaming OBS",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari cara merancang hook 3 detik, mematuhi UI Safe Zones, dan menyetel plugin OBS Vertical untuk siaran langsung.",
    },
    gamePairs: [
      { id: 1, left: "Rasio 9:16", right: "Format vertikal standar smartphone untuk TikTok, Reels, dan Shorts" },
      { id: 2, left: "3-Second Hook", right: "Strategi visual dan narasi detik pertama untuk mencegah penonton swipe away" },
      { id: 3, left: "UI Safe Zone", right: "Area aman tengah agar teks tidak tertutup tombol likes dan komentar aplikasi" },
      { id: 4, left: "Audience Retention", right: "Persentase penonton yang bertahan menonton video hingga akhir" },
      { id: 5, left: "Auto-Caption Kinetik", right: "Teks animasi subtitle dinamis untuk penonton yang mematikan audio suara" },
    ],
    caseTitle: "Konten Profil Sekolah Gagal Total: Nol Views dan Teks Terpotong",
    caseScenario:
      "Tim media sosial OSIS membuat video promosi ekstrakurikuler format vertikal. Video diawali dengan logo sekolah berputar lambat selama 7 detik tanpa suara. Teks informasi pendaftaran diletakkan di pojok kanan bawah layar. Hasilnya: 90% penonton langsung swipe away di detik ke-3, teks kontak tertutup oleh tombol share dan komentar TikTok, dan video hanya ditonton 40 kali dalam satu minggu.",
    caseInstruction:
      "Evaluasi kesalahan fatal strategi video vertikal tersebut. Rancang perbaikan konsep hook 3 detik pembuka, relokasi teks ke dalam UI Safe Zone, dan penataan pacing ritme editing agar video berpeluang viral (FYP).",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Mengapa menempatkan teks informasi penting di pojok kanan bawah pada video TikTok atau Instagram Reels dianggap sebagai kesalahan fatal?",
        options: [
          { key: "A", text: "Karena layar handphone di bagian pojok kanan bawah tidak bisa mengeluarkan warna" },
          { key: "B", text: "Karena area tersebut berada di luar UI Safe Zone dan akan tertutup oleh ikon profil akun, tombol like, tombol komentar, dan ikon share aplikasi" },
          { key: "C", text: "Karena algoritma TikTok akan langsung menghapus video tersebut" },
          { key: "D", text: "Hanya karena dilarang oleh pembuat aplikasi" },
        ],
        correctKey: "B",
        explanation: "Antarmuka (UI) aplikasi media sosial menempatkan elemen interaksi tombol di sisi kanan dan bawah, sehingga teks yang berada di zona tersebut tidak akan terbaca penonton.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Sebuah video vertikal berdurasi 45 detik ingin mempertahankan retensi penonton yang tinggi. Teknik editing visual apa yang paling efektif diterapkan setiap 2-3 detik sekali?",
        options: [
          { key: "A", text: "Mengubah video menjadi hitam pekat selama 2 detik" },
          { key: "B", text: "Melakukan variasi visual dinamis seperti jump cut dialog, pemotongan B-roll insert, punch-in digital zoom 10%, atau efek teks pop-up kinetik" },
          { key: "C", text: "Memperlambat video menjadi sangat lambat (slow motion)" },
          { key: "D", text: "Mengulang video yang sama sebanyak 10 kali" },
        ],
        correctKey: "B",
        explanation: "Mereset rangsangan visual mata setiap 2-3 detik melalui punch-in zoom, sisipan b-roll, dan teks kinetik efektif mencegah kebosanan otak dan menjaga retensi tontonan.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Ketika menganalisis grafik analitik performa video (Audience Retention Graph) di TikTok, terlihat garis grafik anjlok tajam (drop-off) dari 100% menjadi 20% tepat di detik ke-2. Hal ini membuktikan bahwa...",
        options: [
          { key: "A", text: "Kualitas audio video terlalu jernih" },
          { key: "B", text: "Hook pembuka 3 detik pertama gagal memikat rasa penasaran penonton sehingga mereka langsung menggulir layar (swipe away)" },
          { key: "C", text: "Video tersebut sedang dipromosikan oleh pihak aplikasi" },
          { key: "D", text: "Koneksi internet seluruh penonton putus bersamaan" },
        ],
        correctKey: "B",
        explanation: "Penurunan tajam di awal grafik retensi menandakan pembuka video tidak memiliki daya pikat (hook gagal), menyebabkan mayoritas audiens meninggalkan video dalam sekejap.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Bandingkan format siaran langsung televisi tradisional di studio dengan siaran langsung TikTok Live seorang kreator konten! Aspek interaksi apakah yang membuat siaran langsung media baru jauh lebih digemari penonton muda?",
        options: [
          { key: "A", text: "Siaran televisi selalu menggunakan kamera hitam putih" },
          { key: "B", text: "TikTok Live menawarkan interaktivitas dua arah real-time di mana penonton dapat menyapa, berkomentar, memberi hadiah virtual, dan langsung direspons secara spontan oleh host" },
          { key: "C", text: "Siaran langsung media baru tidak membutuhkan koneksi internet" },
          { key: "D", text: "Televisi tidak pernah menayangkan berita penting" },
        ],
        correctKey: "B",
        explanation: "Keunggulan utama media baru adalah interaktivitas dua arah (two-way engagement) yang menciptakan kedekatan personal intim antara audiens dan kreator secara langsung.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah konsep naskah video vertikal 9:16 berdurasi 60 detik berjudul '3 Kesalahan Fatal Pemula Saat Memegang Kamera' lengkap dengan struktur hook 3 detik, alur isi, dan teks kinetik!",
        options: [
          { key: "A", text: "Membacakan buku panduan manual kamera tebal selama 60 detik tanpa gambar contoh" },
          { key: "B", text: "Detik 0-3: [Hook visual kamera hampir jatuh ke lantai] Teks: 'Stop! Jangan pegang kamera seperti ini!'; Detik 4-20: [Kesalahan 1: Tali strap tidak dikalungkan ke leher]; Detik 21-40: [Kesalahan 2: Memutar zoom dengan jari menutupi sensor]; Detik 41-55: [Kesalahan 3: Shutter speed asal-asalan menghasilkan flicker]; Detik 56-60: [CTA: 'Simpan video ini sebelum syuting besok!']" },
          { key: "C", text: "Menampilkan foto selfie bersama teman sekelas dengan musik dangdut keras" },
          { key: "D", text: "Menatap layar kamera dalam keheningan total selama satu menit" },
        ],
        correctKey: "B",
        explanation: "Struktur memenuhi kaidah video vertikal modern berdaya retensi tinggi: hook visual dramatis, tiga poin edukasi padat disertai demonstrasi kesalahan konkret, dan CTA relevan di akhir video.",
      },
    ],
    lkpd: {
      title: "LKPD E4-K5: Produksi Micro-Documentary Vertikal 9:16 & Integrasi Subtitle Kinetik",
      objective: "Peserta didik mampu merancang, merekam, dan menyunting video micro-documentary vertikal (9:16) berdurasi 60 detik lengkap dengan hook 3 detik dan teks UI safe zone.",
      tools: ["Smartphone Kamera Berkualitas / Mirrorless Rig Vertikal", "Mic Wireless Clip-On", "Aplikasi Editing (CapCut Pro / Premiere Pro Sequence 1080x1920)", "Ring Light / LED Softbox"],
      steps: [
        "Pilih subjek profil mikro (misal: 'Kisah Penjaga Perpustakaan Sekolah' atau 'Kreativitas Siswa Tata Boga').",
        "Tulis naskah alur 60 detik dengan formula Hook 3 detik pembuka yang kuat.",
        "Rekam narasumber dengan framing vertikal Medium Close Up, perhatikan ruang kepala dan pastikan subjek berada di tengah bingkai.",
        "Rekam B-Roll pendukung (aktivitas tangan, ekspresi wajah, lingkungan) minimal 10 klip bervariasi.",
        "Impor klip ke software editing dengan sequence ukuran 1080 x 1920 piksel.",
        "Potong jeda nafas (jump cut rapi) dan masukkan b-roll setiap 2-3 detik.",
        "Tambahkan Auto-Caption teks animasi kinetik di zona tengah aman (UI Safe Zone).",
        "Tambahkan musik latar ber-ritme dinamis dengan audio ducking di bawah vokal dialog.",
        "Ekspor video MP4 1080x1920 Full HD.",
      ],
      outputFormat: "File video MP4 vertikal 9:16 berdurasi 60 detik siap tayang di media sosial.",
    },
    journalQuestions: {
      q1: "Mengapa memproduksi konten video vertikal menuntut keahlian bercerita yang jauh lebih padat dan ringkas daripada film panjang?",
      q2: "Bagaimana Anda menyeimbangkan antara mengejar tren algoritma media sosial dengan mempertahankan nilai edukasi karya?",
      q3: "Tantangan apa yang Anda hadapi saat harus memastikan teks subtitle tidak tertutup oleh tombol antarmuka aplikasi?",
    },
    kktpIndicators: [
      "Mampu merancang konsep dan komposisi video format vertikal 9:16 mematuhi kaidah UI Safe Zones.",
      "Mampu menerapkan formula hook pembuka 3 detik dan pacing editing cepat pada video pendek.",
      "Mampu mengintegrasikan tipografi dinamis, efek suara mikro, dan audio ducking secara harmonis.",
    ],
  },

  // =========================================================================
  // KONTEN 6: e4-k6 - Evaluasi, Eksibisi Karya, & Presentasi Pitching
  // =========================================================================
  {
    id: "e4-k6",
    order: 6,
    title: "Evaluasi, Eksibisi Karya, & Presentasi Pitching Portofolio Audio Visual",
    shortTitle: "Eksibisi & Pitching Portofolio",
    summary:
      "Tahapan puncak perayaan karya audio visual: manajemen pemutaran screening / festival film sekolah, sesi tanya jawab (Q&A) apresiasi karya, teknik evaluasi rubrik KKTP dan kritik film objektif, penyusunan materi presentasi Pitch Deck ide kreatif, serta pembangunan portofolio digital profesional (Showreel) untuk memasuki bursa kerja industri.",
    kompetensi: [
      "Mengorganisasikan acara pemutaran karya (Film Screening / Festival Karya Sekolah) secara profesional.",
      "Melakukan evaluasi kritis terhadap karya audio visual menggunakan rubrik penilaian objektif dan kaidah estetika film.",
      "Menyusun Pitch Deck presentasi ide proyek film/program TV untuk meyakinkan produser dan calon investor.",
      "Mempresentasikan ide proyek secara lisan (Pitching) dengan teknik komunikasi persuasif yang percaya diri.",
      "Merancang portofolio digital (Showreel / Demo Reel) video kompilasi karya terbaik berdurasi 90 detik.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu mengelola tata kelola acara screening pemutaran karya kelas/sekolah.",
      "Peserta didik mampu memberikan kritik konstruktif terhadap karya rekan sejawat tanpa menyerang personal.",
      "Peserta didik mampu membuat slide Pitch Deck komprehensif berisi logline, target audiens, dan anggaran biaya.",
      "Peserta didik mampu menyusun video Demo Reel portofolio pribadi sebagai portofolio kelulusan SMK.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Jika Anda memiliki kemampuan teknis kamera dan editing yang sangat hebat, tetapi tidak memiliki video kompilasi portofolio (Showreel) 60 detik untuk diperlihatkan ke Production House, mengapa Anda akan kalah bersaing mendapatkan pekerjaan industri dibanding orang yang memiliki portofolio rapi?",
    hookContext:
      "Dalam industri media kreatif dunia, 'Portfolio is your real resume.' Klien dan rumah produksi tidak menilai seberapa tebal ijazah Anda, melainkan seberapa berkualitas karya nyata yang bisa Anda buktikan dalam 60 detik pertama penayangan Demo Reel.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Video kompilasi klip-klip karya terbaik seorang videografer, editor, atau animator berdurasi 60 hingga 90 detik yang diiringi musik dinamis untuk melamar pekerjaan disebut...",
        options: [
          { key: "A", text: "Showreel / Demo Reel" },
          { key: "B", text: "Behind the Scene" },
          { key: "C", text: "Trailer Film" },
          { key: "D", text: "Call Sheet" },
        ],
        correctKey: "A",
        explanation: "Showreel / Demo Reel adalah kartu nama visual seorang profesional kreatif yang merangkum bidikan atau suntingan karya terbaiknya dalam waktu singkat.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Presentasi ringkas dan persuasif di hadapan produser, investor, atau dewan juri untuk meyakinkan mereka mendanai sebuah gagasan film atau program televisi disebut...",
        options: [
          { key: "A", text: "Screening" },
          { key: "B", text: "Pitching (Project Pitch)" },
          { key: "C", text: "Dubbing" },
          { key: "D", text: "Shooting" },
        ],
        correctKey: "B",
        explanation: "Pitching adalah seni presentasi lisan yang didukung slide presentasi (Pitch Deck) untuk 'menjual' konsep kreatif cerita dan kelayakan bisnis proyek.",
      },
    ],
    materialCards: [
      {
        title: "1. Eksibisi: Puncak Selebrasi dan Ujian Publik Karya",
        content: "Sebuah karya audio visual belum selesai seutuhnya sebelum ditonton dan diuji oleh mata penonton. Eksibisi (Screening / Pameran Karya) adalah panggung evaluasi di mana pembuat film melihat secara langsung reaksi spontan audiens: tawa, air mata, ketegangan, atau kebosanan penonton.",
        caseStudy: "Banyak sutradara besar duduk di barisan belakang bioskop saat pemutaran perdana untuk mengamati detik ke berapa penonton melihat jam tangan atau mulai gelisah.",
      },
      {
        title: "2. Manajemen Teknis Pemutaran (Screening Checklist)",
        content: "Sebelum pintu aula dibuka: (1) Kalibrasi proyektor: fokus lensa tajam dan aspek rasio tepat (tidak gepeng), (2) Uji tata suara bioskop: dialog terdengar lantang tanpa dengung, (3) Uji playback master video utuh dari awal sampai akhir tanpa jeda buffering, (4) Atur pencahayaan lampu aula agar meredup perlahan saat film dimulai.",
      },
      {
        title: "3. Sesi Apresiasi & Tanya Jawab (Q&A Session)",
        content: "Setelah pemutaran film selesai, sutradara, produser, dan perwakilan kru naik ke panggung untuk sesi Q&A bersama penonton dan dewan juri. Diskusi membahas: proses kreatif di balik cerita, tantangan teknis syuting, makna simbolik adegan, dan pesan sosial yang diusung.",
        didYouKnow: "Di festival film bergengsi dunia seperti Cannes atau Sundance, sesi Q&A sering dihadiri oleh distributor film yang siap membeli hak tayang karya pembuat film muda."
      },
      {
        title: "4. Seni Menerima dan Menyampaikan Kritik Konstruktif",
        content: "Kritik bukan serangan pribadi terhadap pencipta karya, melainkan evaluasi objektif terhadap produk film. Gunakan metode umpan balik 'Sandwich Feedback': Awali dengan apresiasi tulus atas kelebihan karya, sampaikan catatan kritis perbaikan secara spesifik (misal kontinuitas audio atau pencahayaan), lalu akhiri dengan motivasi dorongan positif.",
      },
      {
        title: "5. Rubrik Penilaian Karya Audio Visual Berstandar KKTP",
        content: "Dimensi penilaian terukur: (1) Narasi & Cerita (kejelasan premis, pesan moral, kekuatan dialog), (2) Visual & Kamera (komposisi, eksposur, ketajaman fokus, stabilitas gerak), (3) Tata Cahaya (dimensi 3D, rasio kontras, mood), (4) Tata Suara (kejernihan vokal, sound design, keselarasan musik), (5) Editing & Grafis (ritme penceritaan, color grading, title).",
      },
      {
        title: "6. Hakikat Pitching: Menjual Visi dan Kepercayaan",
        content: "Dalam industri profesional, ide brilian tidak bernilai jika Anda tidak mampu mengomunikasikannya kepada orang lain. Pitching adalah proses meyakinkan pihak pemodal/klien bahwa proyek Anda unik, memiliki target pasar yang jelas, dan tim Anda mampu mengeksekusinya tepat waktu sesuai anggaran.",
      },
      {
        title: "7. Anatomi Slide Presentasi Pitch Deck Film Profesional",
        content: "Pitch Deck standar (10-12 slide) memuat: (1) Judul & Logline, (2) Sinopsis Singkat, (3) Karakter Utama & Motivasi, (4) Visual Mood & Tone, (5) Target Audiens & Nilai Unik Pasar, (6) Rencana Lokasi & Style Kamera, (7) Estimasi Anggaran Biaya & Jadwal Produksi, (8) Profil Sutradara & Tim Inti.",
      },
      {
        title: "8. Teknik 'Elevator Pitch': Memikat dalam 60 Detik",
        content: "Kondisi di mana Anda hanya memiliki waktu 60 detik (seperti saat bertemu produser di lift gedung). Formula: Siapa tokoh utama Anda, apa masalah besar yang menimpanya, apa yang harus ia lakukan untuk mengatasinya, dan apa risiko fatal jika ia gagal. Akhiri dengan perbandingan genre: 'Bayangkan film Laskar Pelangi dipadukan dengan misteri Sherlock Holmes'.",
      },
      {
        title: "9. Bahasa Tubuh & Retorika Komunikasi Saat Pitching",
        content: "Tips presentasi memikat: Tatap mata seluruh dewan juri, jangan membaca teks slide presentasi secara kaku, gunakan bahasa tubuh terbuka dan intonasi vokal yang bervariasi, tunjukkan gairah (passion) otentik terhadap cerita Anda, dan siapkan jawaban lugas untuk pertanyaan teknis anggaran biaya.",
      },
      {
        title: "10. Membangun Portofolio Digital: Showreel / Demo Reel",
        content: "Showreel adalah video kompilasi portofolio terbaik berdurasi 60-90 detik. Aturan emas Showreel: (1) Taruh bidikan paling menakjubkan (best shot) di 5 detik pertama, (2) Sinkronkan potongan gambar dengan ketukan irama musik pengiring yang bertenaga, (3) Sertakan teks peran Anda di pojok bawah (DoP, Editor, Gaffer), (4) Cantumkan kontak email/nomor HP jelas di awal dan akhir video.",
      },
      {
        title: "11. Kesalahan Fatal yang Wajib Dihindari dalam Showreel",
        content: "Dilarang memasukkan shot yang out-of-focus, gambar berguncang tidak stabil, atau karya berkualitas rendah hanya demi memperpanjang durasi. Showreel berdurasi 45 detik yang padat berisi karya masterpiece jauh lebih berharga daripada showreel 3 menit yang bertele-tele dan membosankan.",
        caseStudy: "Perekrut rumah produksi hanya menonton 15 detik pertama showreel; jika tidak ada visual yang memukau, video akan langsung ditutup.",
      },
      {
        title: "12. Platform Portofolio Online Kreatif",
        content: "Publikasikan portofolio Anda di etalase digital global: Vimeo (standar portofolio video sinematik industri), YouTube Channel khusus profesional, Behance (untuk desain grafis dan storyboard), ArtStation (untuk 3D dan animasi), serta LinkedIn untuk membangun jejaring kerja dengan agensi dan stasiun televisi.",
      },
      {
        title: "13. Strategi Pengiriman Karya ke Festival Film Pelajar",
        content: "Daftarkan film karya sekolah ke festival film nasional dan internasional melalui platform FilmFreeway. Pelajari persyaratan teknis: durasi maksimal, format subtitling bahasa Inggris, sinopsis pendek, foto poster beresolusi tinggi, dan lembar pernyataan orisinalitas hak cipta musik.",
      },
      {
        title: "14. Hak Kekayaan Intelektual (HAKI) Karya Siswa",
        content: "Setiap karya video orisinal secara otomatis dilindungi oleh UU Hak Cipta No. 28 Tahun 2014 sejak karya tersebut diwujudkan dalam bentuk nyata. Daftarkan surat pencatatan ciptaan ke Direktorat Jenderal Kekayaan Intelektual (DJKI) Kemenkumham untuk perlindungan legal komersial.",
      },
      {
        title: "15. Menghadapi Pertanyaan Sulit Dewan Juri dalam Q&A",
        content: "Jika juri menemukan kekurangan teknis (misal: 'Mengapa audio di adegan pasar terdengar berdesis?'): Jangan membela diri secara defensif atau menyalahkan teman sekelompok. Akui kendala tersebut secara profesional: 'Terima kasih atas masukannya. Pada saat itu kami menghadapi kendala akustik di lokasi dan ini menjadi pembelajaran berharga bagi kami untuk menggunakan mikrofon shotgun yang lebih directional di masa mendatang.'",
      },
      {
        title: "16. Etika Profesional Kru Menghadapi Kemenangan & Kekalahan",
        content: "Dalam kompetisi dan festival karya, menang atau kalah adalah hal biasa. Kemenangan dirayakan dengan rendah hati tanpa merendahkan tim lain; kekalahan dijadikan cambuk evaluasi diri untuk mengasah keterampilan teknis dan kepekaan rasa pada proyek berikutnya.",
      },
      {
        title: "17. Jalur Karir & Peta Jalan (Roadmap) Lulusan Broadcasting SMK",
        content: "Pilihan karir lulusan BCF: Juru Kamera (Camera Operator / DoP), Editor Video NLE, Colorist, Sound Recordist, Motion Graphic Designer, Sutradara Video Musik/Iklan, Produser Konten Digital, atau Technopreneur mendirikan Production House / Agensi Live Streaming mandiri.",
      },
      {
        title: "18. Standar Sertifikasi Kompetensi Profesi (LSP / BNSP)",
        content: "Sebelum lulus dari SMK, peserta didik disiapkan untuk mengikuti uji sertifikasi profesi di Lembaga Sertifikasi Profesi (LSP) berlisensi BNSP skema: Juru Kamera Televisi, Editor Video, atau Produser Televisi. Sertifikat BNSP menjadi bukti kompetensi berstandar nasional yang diakui dunia industri.",
      },
      {
        title: "19. POS Pelaksanaan Festival Screening Karya di Sekolah",
        content: "Prosedur operasional panitia pemutaran: (1) Bentuk tim kurasi seleksi karya, (2) Susun buku katalog program pemutaran (Program Booklet), (3) Distribusikan tiket undangan kepada guru, orang tua, dan praktisi industri mitra sekolah, (4) Gelar karpet merah (Red Carpet) untuk apresiasi pembuat karya, (5) Siapkan sertifikat penghargaan bagi karya terbaik.",
      },
      {
        title: "20. Refleksi Akhir: Menjadi Insan Perfilman & Penyiaran Berkarakter",
        content: "Keahlian teknologi kamera, lampu, dan software akan terus berkembang pesat, namun kejujuran moral, integritas etika, kepedulian terhadap isu kemanusiaan, dan kecintaan pada tanah air adalah jiwa sejati dari setiap insan broadcasting dan perfilman Indonesia.",
      },
    ],
    video: {
      title: "Masterclass Pembuatan Showreel Portofolio & Teknik Pitching Ide Film",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Simak contoh Showreel sinematik berdurasi 60 detik dan cara menyusun Pitch Deck untuk meyakinkan investor.",
    },
    gamePairs: [
      { id: 1, left: "Demo Reel / Showreel", right: "Kompilasi klip video karya terbaik berdurasi 60-90 detik untuk melamar kerja" },
      { id: 2, left: "Pitch Deck", right: "Slide presentasi ringkas berisi ide cerita, visual tone, dan anggaran biaya proyek" },
      { id: 3, left: "Q&A Session", right: "Sesi diskusi dan tanya jawab apresiasi karya bersama penonton dan juri" },
      { id: 4, left: "Sandwich Feedback", right: "Metode kritik konstruktif: apresiasi awal, masukan kritis, dan dorongan positif" },
      { id: 5, left: "Sertifikasi BNSP", right: "Pengakuan kompetensi profesi resmi berstandar nasional untuk lulusan vokasi" },
    ],
    caseTitle: "Pitching Ide Film Gagal Total di Hadapan Produser Televisi",
    caseScenario:
      "Dua orang siswa SMK mempresentasikan ide serial drama di hadapan praktisi industri televisi. Mereka berbicara tanpa slide presentasi, tidak memiliki naskah sinopsis, dan ketika ditanya oleh produser: 'Berapa perkiraan total anggaran biaya dan siapa target penonton utama serial ini?', kedua siswa tersebut hanya saling pandang kebingungan dan tidak dapat menjawab angka konkret sedikit pun. Produser menghentikan pitching di menit ke-3 dan menolak proyek tersebut.",
    caseInstruction:
      "Evaluasi kelemahan persiapan pitching tim siswa tersebut. Rancang struktur slide Pitch Deck (10 slide) dan rencana anggaran biaya garis besar yang seharusnya disiapkan agar presentasi meyakinkan pihak industri.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Urutan penempatan klip video yang paling strategis saat menyusun sebuah Showreel / Demo Reel portofolio pribadi adalah...",
        options: [
          { key: "A", text: "Menaruh karya yang paling jelek di awal dan karya terbaik di akhir" },
          { key: "B", text: "Menaruh karya visual paling memukau dan paling kuat di 5-10 detik pertama untuk langsung mencuri perhatian penonton" },
          { key: "C", text: "Menjejerkan seluruh karya berdasarkan urutan abjad judul file" },
          { key: "D", text: "Hanya menampilkan foto-foto piagam sertifikat seminar" },
        ],
        correctKey: "B",
        explanation: "Perekrut industri hanya meluangkan waktu belasan detik pertama; menempatkan karya masterpiece di detik awal menjamin penonton terpikat untuk menonton showreel hingga tuntas.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Metode penyampaian kritik terhadap karya rekan sejawat yang diawali dengan pujian atas kelebihan karya, dilanjutkan dengan masukan kritis spesifik yang membangun, dan diakhiri kembali dengan motivasi positif disebut...",
        options: [
          { key: "A", text: "Metode Sandwich Feedback" },
          { key: "B", text: "Metode Debat Kusir" },
          { key: "C", text: "Metode Somasi Hukum" },
          { key: "D", text: "Metode Silent Treatment" },
        ],
        correctKey: "A",
        explanation: "Sandwich feedback adalah teknik komunikasi interpersonal profesional yang mengemas koreksi kritis di antara dua lapis apresiasi tulus, menjaga semangat belajar rekan tim.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Seorang siswa ingin mengirimkan film pendek tugas akhirnya ke festival film pelajar internasional melalui FilmFreeway. Elemen non-video apakah yang wajib disiapkan selain file master video ber-subtitle bahasa Inggris?",
        options: [
          { key: "A", text: "Buku rekening tabungan pribadi seluruh kru" },
          { key: "B", text: "Poster resmi resolusi tinggi, sinopsis pendek (short synopsis), biografi & foto sutradara, serta lembar pernyataan orisinalitas hak cipta musik" },
          { key: "C", text: "Surat keterangan izin dari kepolisian daerah" },
          { key: "D", text: "Kuitansi pembelian kamera di toko elektronik" },
        ],
        correctKey: "B",
        explanation: "Festival film memerlukan paket berkas promosi (Press Kit) yang mencakup poster berkualitas tinggi, sinopsis, profil pembuat film, dan kepastian bebas sengketa hak cipta musik.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Mengapa sertifikasi kompetensi dari Badan Nasional Sertifikasi Profesi (BNSP) memiliki nilai strategis yang sangat tinggi bagi seorang lulusan SMK Broadcasting saat melamar pekerjaan di stasiun televisi nasional?",
        options: [
          { key: "A", text: "Karena sertifikat BNSP dapat digunakan sebagai pengganti paspor penerbangan" },
          { key: "B", text: "Karena sertifikat BNSP merupakan bukti legalitas formal bahwa pemegangnya telah diuji secara obyektif dan dinyatakan kompeten sesuai Standar Kompetensi Kerja Nasional Indonesia (SKKNI) yang diakui resmi oleh asosiasi industri pertelevisian" },
          { key: "C", text: "Karena dengan sertifikat BNSP seseorang tidak perlu bekerja lagi seumur hidup" },
          { key: "D", text: "Karena sertifikat BNSP dibagikan secara gratis kepada semua orang tanpa ujian" },
        ],
        correctKey: "B",
        explanation: "Sertifikasi BNSP berbasis SKKNI menjembatani gap antara dunia pendidikan dan dunia industri (DUDI), memberikan kepastian kepada HRD bahwa kandidat memiliki kompetensi kerja terstandar.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah konsep penyelenggaraan 'Festival Film Pelajar Sekolah' (School Screening Day) yang memadukan pameran karya, sesi apresiasi Q&A, dan keterlibatan juri dari praktisi televisi profesional!",
        options: [
          { key: "A", text: "Memutar video di dalam ruang kelas kosong tanpa penonton dan tanpa diskusi" },
          { key: "B", text: "Menyusun kepanitiaan terpadu (Kurasi, Logistik, Acara, Publikasi); mengadakan pemutaran di aula dengan proyektor terkalibrasi dan sound surround; menyelenggarakan sesi Q&A interaktif pembuat film bersama dewan juri praktisi; serta memberikan piala penghargaan kategori film terbaik dan teknis terbaik" },
          { key: "C", text: "Hanya menyiarkan video lewat grup WhatsApp kelas" },
          { key: "D", text: "Menjual seluruh peralatan lab sekolah untuk biaya konsumsi panggung" },
        ],
        correctKey: "B",
        explanation: "Rancangan festival sekolah yang komprehensif mencakup tata kelola pemutaran audio visual berstandar, apresiasi dialogis kritis bersama praktisi industri, dan pemberian apresiasi prestasi yang membanggakan.",
      },
    ],
    lkpd: {
      title: "LKPD E4-K6: Perancangan Pitch Deck Ide Proyek Film & Penyusunan Showreel Portofolio",
      objective: "Peserta didik mampu menyusun 10 slide Pitch Deck gagasan proyek film pendek dan merakit video Demo Reel kompilasi karya terbaik berdurasi 60 detik.",
      tools: ["Software Presentasi (Canva / PowerPoint / Google Slides)", "Software NLE (Premiere Pro / DaVinci Resolve)", "Kumpulan Footage Karya Mandiri yang Pernah Dibuat", "Musik Bebas Royalti Ber-tempo Dinamis"],
      steps: [
        "Bagian 1 (Pitch Deck): Buat dokumen presentasi 10 slide: Slide 1 Judul & Logline, Slide 2 Sinopsis, Slide 3 Karakter, Slide 4 Moodboard Visual, Slide 5 Rencana Kamera & Lokasi, Slide 6 Jadwal & Rincian Anggaran Biaya.",
        "Bagian 2 (Showreel): Buka software NLE dan buat sequence 1080p 25fps berdurasi 60 detik.",
        "Pilih musik latar bertempo dinamis dan tandai ketukan birama (beat markers).",
        "Pilih 10-15 bidikan visual terbaik dari tugas-tugas sebelumnya (letakkan 3 bidikan paling menakjubkan di 5 detik pertama).",
        "Potong dan selaraskan pergantian gambar tepat pada ketukan irama musik.",
        "Cantumkan identitas nama, peran keahlian (misal 'Director of Photography / Editor'), dan nomor kontak email/WhatsApp di kartu judul penutup.",
      ],
      outputFormat: "File PDF Pitch Deck 10 Slide dan File Video Showreel MP4 1080p 60 detik.",
    },
    journalQuestions: {
      q1: "Bagaimana proses belajar selama di Fase E ini mengubah cara Anda memandang sebuah karya film atau siaran televisi?",
      q2: "Pelajaran paling berharga apa yang Anda peroleh tentang pentingnya kerja sama tim (kolaborasi) dalam sebuah produksi audio visual?",
      q3: "Kompetensi spesifik apa (Kamera, Tata Cahaya, Tata Suara, Naskah, atau Editing) yang paling ingin Anda perdalam saat melangkah ke Fase F?",
    },
    kktpIndicators: [
      "Mampu merancang dokumen presentasi Pitch Deck proyek audio visual yang persuasif dan terukur.",
      "Mampu menyusun video Showreel portofolio pribadi berdurasi 60 detik sesuai standar industri.",
      "Mampu menyampaikan dan menerima kritik apresiasi karya secara objektif dan beretika.",
    ],
  },
];
