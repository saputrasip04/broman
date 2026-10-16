import type { ElemenContentItem } from "./curriculum-types";

export const E2_CONTENTS: ElemenContentItem[] = [
  // =========================================================================
  // KONTEN 1: Perkembangan Produksi dari Analog ke Digital
  // =========================================================================
  {
    id: "e2-k1",
    order: 1,
    title: "Perkembangan Produksi dari Analog ke Digital",
    shortTitle: "Analog ke Digital",
    summary:
      "Sejarah evolusi teknologi pertelevisian dari pita magnetik (U-matic, Betacam) ke file digital nirkabel, transisi Analog Switch-Off (ASO) ke DVB-T2 di Indonesia, dan efisiensi spektrum frekuensi.",
    kompetensi: [
      "Menjelaskan transformasi teknologi perekaman dan transmisi penyiaran dari analog ke digital.",
      "Menganalisis dampak Analog Switch-Off (ASO) terhadap industri pertelevisian nasional.",
      "Memahami standar penyiaran terestrial digital DVB-T2 dan modulasi sinyal broadcast.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menguraikan lini masa perkembangan media rekam video dari format pita magnetik hingga kartu solid state.",
      "Peserta didik mampu membandingkan kualitas gambar sinyal analog (PAL 576i) dengan sinyal digital terestrial (Full HD / 4K).",
      "Peserta didik mampu menjelaskan manfaat dividen digital (digital dividend) pasca-ASO bagi konektivitas internet nasional.",
    ],
    hookQuestion:
      "Pernahkah Anda melihat siaran TV yang gambarnya dipenuhi bintik-bintik putih 'semut' dan suaranya mendesis kresek-kresek? Mengapa di TV digital zaman sekarang gangguan semacam itu sudah hilang sama sekali?",
    hookContext:
      "Siaran digital beroperasi dengan prinsip biner: 1 atau 0 (diterima jernih sempurna atau tidak sama sekali). Era bintik semut telah berakhir, digantikan revolusi gambar tajam dan audio tanpa desis.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C1",
        stem: "Standar penyiaran televisi digital terestrial generasi kedua yang resmi diadopsi oleh pemerintah Republik Indonesia adalah...",
        options: [
          { key: "A", text: "DVB-T2 (Digital Video Broadcasting - Terrestrial 2)" },
          { key: "B", text: "ATSC (Advanced Television Systems Committee)" },
          { key: "C", text: "ISDB-T (Integrated Services Digital Broadcasting)" },
          { key: "D", text: "PAL B/G" },
        ],
        correctKey: "A",
        explanation: "Indonesia secara resmi menetapkan standar penyiaran televisi terestrial digital DVB-T2 yang menawarkan efisiensi spektrum frekuensi dan ketahanan terhadap interferensi.",
      },
      {
        id: 2,
        bloom: "C2",
        stem: "Program penghentian total siaran televisi analog untuk dialihkan seluruhnya ke siaran digital terestrial di Indonesia dikenal dengan singkatan...",
        options: [
          { key: "A", text: "ASO (Analog Switch-Off)" },
          { key: "B", text: "VOD (Video on Demand)" },
          { key: "C", text: "OTT (Over The Top)" },
          { key: "D", text: "ENG (Electronic News Gathering)" },
        ],
        correctKey: "A",
        explanation: "Analog Switch-Off (ASO) adalah kebijakan penghentian siaran TV analog yang dimandatkan dalam UU Cipta Kerja untuk beralih ke TV digital.",
      },
    ],
    materialCards: [
      {
        title: "Slide 1: Pengantar Revolusi Digital di Industri Penyiaran",
        content:
          "Dalam kurun waktu tiga dekade terakhir, industri penyiaran mengalami lompatan teknologi terbesar dalam sejarah: transisi dari sinyal gelombang analog kontinu ke pemrosesan data digital terkompresi (bits & bytes).\n\nPerubahan ini bukan sekadar mengganti pesawat televisi di ruang keluarga, melainkan merombak total alur produksi (workflow) dari kamera di lapangan, pengeditan naskah, hingga pemancar pemancar satelit.",
        didYouKnow: "Sebelum era digital, editor TV harus memotong pita kaset secara fisik dengan silet atau melakukan linear editing kaset-ke-kaset berjam-jam tanpa tombol 'Undo'.",
      },
      {
        title: "Slide 2: Garis Waktu Evolusi Media Rekam Video Broadcast",
        content:
          "Kronologi perkembangan media penyimpanan video:\n\n• 1956: Ampex 2-inch Quadruplex (Pita gulung raksasa berputar).\n• 1970-an: U-matic 3/4 inch (Kaset pertama untuk liputan berita Electronic News Gathering / ENG).\n• 1982: Sony Betacam (Standar industri penyiaran dunia selama lebih dari 20 tahun).\n• 1995: MiniDV & DVCAM (Awal era digital pita magnetik beresolusi 576 baris).\n• 2005: P2 Card (Panasonic) & XDCAM (Sony) (Memori solid state & optical disc tanpa pita).\n• 2015-Kini: CFexpress, SDXC UHS-II, dan SSD NVMe (Mampu merekam video RAW 4K/8K hingga kecepatan gigabit per detik).",
      },
      {
        title: "Slide 3: Karakteristik Sinyal Analog vs Sinyal Digital",
        content:
          "Perbedaan mendasar sifat transmisi:\n\n• Sinyal Analog: Gelombang kontinyu yang sangat rentan terhadap derau (noise), pantulan gedung (ghosting/bayangan kembar), dan redaman jarak sehingga gambar menjadi berbintik semut.\n• Sinyal Digital: Rangkaian angka biner (1 dan 0) yang dipadatkan dengan algoritma kompresi. Jika sinyal tertangkap antena di atas batas ambang penerima (threshold), gambar akan tampil jernih kristal tanpa gangguan bintik.",
      },
      {
        title: "Slide 4: Standar Warna Televisi Dunia: PAL, NTSC, dan SECAM",
        content:
          "Warisan sistem penyiaran analog sebelum era digital:\n\n• PAL (Phase Alternating Line): 625 baris, 25 frame per detik (fps), 50Hz (digunakan di Indonesia, Eropa, Australia).\n• NTSC (National Television System Committee): 525 baris, 29.97 fps, 60Hz (digunakan di AS, Jepang, Korea Selatan).\n• SECAM: Digunakan di Prancis dan sebagian Eropa Timur.\n• Di era digital saat ini, perbedaan frekuensi listrik tersebut diselaraskan melalui format global 1080p dan 2160p (4K UHD) dengan pilihan frame rate fleksibel.",
      },
      {
        title: "Slide 5: Fenomena Analog Switch-Off (ASO) di Indonesia",
        content:
          "Latar belakang kebijakan ASO nasional:\n\n• Diamandatkan dalam UU No. 11 Tahun 2020 tentang Cipta Kerja sektor Pos, Telekomunikasi, dan Penyiaran.\n• Penghentian siaran analog dilakukan bertahap hingga resmi tuntas secara nasional pada 2022-2023.\n• Masyarakat yang masih menggunakan TV tabung analog cukup menambahkan perangkat dekoder Set-Top-Box (STB) berstandar DVB-T2.",
      },
      {
        title: "Slide 6: Mengapa DVB-T2 Dipilih Indonesia?",
        content:
          "Keunggulan teknologi DVB-T2 (Digital Video Broadcasting - Terrestrial 2nd Generation):\n\n1. Efisiensi Kompresi Sinyal: Menerapkan modulasi OFDM dengan proteksi error correction LDPC yang sangat tahan guncangan pantulan cuaca tropis.\n2. Kapasitas Kanal Berlipat: Satu kanal frekuensi analog (lebar pita 8 MHz) yang dulunya hanya memuat 1 saluran TV, kini dengan DVB-T2 dapat memuat hingga 8-12 program siaran TV Full HD sekaligus (Multiplexing / MUX).\n3. Kualitas Suara: Mendukung audio Dolby Digital surround sound.",
      },
      {
        title: "Slide 7: Konsep Multiplexing (MUX) & Efisiensi Infrastruktur",
        content:
          "Perubahan lanskap kepemilikan pemancar TV:\n\n• Di era analog, setiap stasiun TV harus membangun menara pemancar dan pemancar listrik ratusan kilowatt sendiri-sendiri di setiap kota (boros biaya).\n• Di era digital MUX, stasiun TV swasta dapat menyewa slot siaran kepada Penyelenggara MUX (misal: TVRI MUX, Media Group MUX, MNC MUX, Trans MUX).\n• Menurunkan biaya investasi modal (CapEx) hingga 70% bagi stasiun TV baru.",
      },
      {
        title: "Slide 8: Dividen Digital (Digital Dividend) & Internet 5G",
        content:
          "Dampak ekonomi terbesar dari ASO:\n\n• Siaran TV analog dulu menghabiskan pita frekuensi emas (golden spectrum) 700 MHz sebesar 328 MHz.\n• Dengan siaran digital hemat frekuensi, pemerintah menghemat lebar pita sebesar 112 MHz yang disebut 'Dividen Digital'.\n• Frekuensi 700 MHz yang bebas ini dialihkan untuk mempercepat perluasan jaringan internet broadband 4G dan 5G hingga ke pelosok desa terpencil di seluruh Indonesia.",
      },
      {
        title: "Slide 9: Perubahan Format Rasio Aspek Layar: 4:3 ke 16:9",
        content:
          "Evolusi geometri gambar di layar:\n\n• Rasio 4:3 (Kotak Konvensional): Format standar layar TV tabung CRT selama 50 tahun.\n• Rasio 16:9 (Layar Lebar / Widescreen): Standar siaran digital modern yang menyerupai sudut pandang mata manusia (lapang pandang alami).\n• Istilah Konversi: 'Letterbox' (garis hitam di atas-bawah), 'Pillarbox' (garis hitam di kiri-kanan), dan 'Anamorphic Stretch'.",
      },
      {
        title: "Slide 10: Standar Resolusi: SD, HD, Full HD, hingga 4K UHD",
        content:
          "Kepadatan piksel visual dalam siaran:\n\n• Standard Definition (SD): 720 x 576 piksel (sekitar 400 ribu piksel).\n• High Definition (HD Ready): 1280 x 720 piksel (sekitar 920 ribu piksel).\n• Full HD (FHD): 1920 x 1080 piksel (sekitar 2 juta piksel) — standar baku siaran DVB-T2 Indonesia saat ini.\n• Ultra HD (4K UHD): 3840 x 2160 piksel (sekitar 8,3 juta piksel) — standar siaran festival olahraga dunia (Piala Dunia / Olimpiade) via transmisi satelit dan OTT.",
      },
      {
        title: "Slide 11: Transformasi Alur Kerja Studio: Kabel Coaxial ke SDI & NDI (IP)",
        content:
          "Evolusi transmisi sinyal video di ruang kendali siaran:\n\n• Analog Composite (RCA Kuning): Memadukan sinyal luma dan kroma dalam 1 kabel tembaga (mudah timbul gangguan warna).\n• SDI (Serial Digital Interface): Kabel coaxial digital profesional BNC pembawa sinyal 3G-SDI (1080p) dan 12G-SDI (4K) tanpa latensi.\n• NDI (Network Device Interface) & SMPTE ST 2110: Mengirim puluhan sinyal video tanpa kompresi hanya melalui satu kabel LAN Ethernet (Video over IP).",
      },
      {
        title: "Slide 12: Dampak pada Departemen Naskah & Prompter",
        content:
          "Di era analog, presenter membaca naskah kertas gulung yang diputar manual di depan kamera.\n\nDi era digital:\n• Teleprompter tersinkronisasi otomatis dengan software newsroom (misal: Octopus, Avid iNEWS, ENPS).\n• Ketika reporter mengetik perubahan berita di komputer ruang redaksi, teks di prompter presenter di lantai studio berubah seketika secara realtime.",
      },
      {
        title: "Slide 13: Manfaat bagi Konsumen: Fitur Interaktif EPG & Parental Guide",
        content:
          "Fitur canggih pada siaran TV digital DVB-T2:\n\n• EPG (Electronic Program Guide): Jadwal acara elektronik 7 hari ke depan lengkap dengan sinopsis dan nama pembawa acara langsung di layar TV.\n• Multi-Audio & Subtitle: Penonton dapat memilih dubbing suara bahasa Indonesia atau bahasa asli (misal: film asing atau siaran langsung olahraga).\n• Parental Rating: Orang tua dapat mengunci saluran siaran berkategori Dewasa (D) menggunakan PIN proteksi.",
      },
      {
        title: "Slide 14: K3 & Perawatan Perangkat Digital: Sensitivitas Tegangan Listrik",
        content:
          "Perangkat broadcast digital sangat sensitif terhadap fluktuasi voltase listrik:\n\n• IC prosessor digital mudah hang atau rusak terbakar jika terjadi lonjakan tegangan (voltage spike).\n• Wajib menggunakan Online UPS (Uninterruptible Power Supply) dengan sistem True Double Conversion di ruang kontrol studio dan MCR.\n• Suhu ruang server server video wajib dijaga stabil pada 18°C – 22°C dengan sirkulasi udara dingin nonstop.",
      },
      {
        title: "Slide 15: Studi Komparasi: Pemancar Analog 50 kW vs Pemancar Digital 10 kW",
        content:
          "Perbandingan efisiensi operasional stasiun televisi:\n\n• Pemancar Analog: Membutuhkan daya listrik raksasa 50.000 Watt untuk menjangkau radius 50 km, tagihan listrik PLN mencapai ratusan juta rupiah per bulan.\n• Pemancar Digital DVB-T2: Cukup menggunakan daya 10.000 Watt untuk menjangkau wilayah yang sama luasnya dengan kualitas gambar jauh lebih jernih.\n• Mengurangi emisi karbon dan menghemat biaya operasional stasiun hingga 60%.",
      },
      {
        title: "Slide 16: Troubleshooting: Mengatasi Masalah 'No Signal' pada Receiver DVB-T2",
        content:
          "Kendala teknis di lapangan saat mencari saluran TV digital:\n\n1. Periksa Arah Antena UHF: Gunakan aplikasi 'SinyalTVDigital' dari Kominfo untuk memutar arah antena tepat menghadap ke koordinat menara pemancar terdekat.\n2. Kualitas Kabel Coaxial: Ganti kabel antena RG-6 berkepang tembaga rapat (braiding 90%) untuk mencegah kebocoran sinyal (signal loss).\n3. Hindari Booster Berlebihan: Penguat sinyal booster murah yang terlalu dekat dengan antena justru memicu distorsi saturasi sinyal (over-amplification).",
      },
      {
        title: "Slide 17: Studi Kasus Riil: Kesiapan Industri Lokal Menghadapi 'Analog Switch-Off'",
        content:
          "Pada pelaksanaan ASO di wilayah Jabodetabek tahun 2022, jutaan pesawat TV analog padam serentak pada pukul 24.00 WIB:\n\nFakta Transformasi:\nStasiun TV yang sudah mempersiapkan pemancar digital dan sistem automasi MCR mengalami lonjakan rating pemirsa digital. Sebaliknya, stasiun TV lokal yang terlambat bermitra dengan penyelenggara MUX kehilangan seluruh pemirsanya selama berminggu-minggu.",
      },
      {
        title: "Slide 18: Analisis Kunci Kesiapan Lembaga Penyiaran",
        content:
          "Pelajaran dari era transisi ASO:\n\n1. Kecepatan Adaptasi: Industri media tidak dapat melawan arus evolusi teknologi; mereka yang menolak beradaptasi akan punah.\n2. Peningkatan Kompetensi SDM: Operator kamera dan teknisi studio yang terbiasa dengan alat analog wajib meningkatkan keahlian (upskilling) ke sistem berbasis jaringan komputer (IP Broadcast).",
      },
      {
        title: "Slide 19: Tren Masa Depan: Next-Gen TV (ATSC 3.0 & DVB-I)",
        content:
          "Masa depan penyiaran terestrial dunia:\n\n• DVB-I (Internet Integrated): Menyatukan saluran siaran terestrial antena dengan siaran streaming internet dalam satu daftar channel TV yang mulus tanpa jeda.\n• Resolusi 8K & HDR10+: Menampilkan rentang dinamis kontras yang menyerupai kemampuan mata manusia melihat matahari terbit.\n• Peringatan Dini Bencana (Early Warning System / EWS): TV digital otomatis menyala dan membunyikan sirine darurat ketika terdeteksi gempa bumi atau tsunami.",
      },
      {
        title: "Slide 20: Rangkuman & Action Plan Siswa Terkait ASO",
        content:
          "Poin Kunci Pembelajaran:\n1. Transisi ke digital adalah tonggak bersejarah yang mengubah total cara konten BCF diproduksi dan disiarkan.\n2. Standar DVB-T2 menghadirkan kualitas gambar Full HD tanpa semut dan membuka dividen digital untuk 5G.\n3. Calon profesional BCF harus menguasai integrasi video digital berbasis IP dan kompresi data modern.\n\nAction Plan:\nLakukan survei penerimaan sinyal siaran digital DVB-T2 di wilayah tempat tinggal Anda menggunakan lembar kerja LKPD E2-K1!",
      },
    ],
    video: {
      title: "Evolusi Teknologi Pertelevisian dari Pita Magnetik ke Siaran Digital Terestrial",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      guide:
        "Perhatikan penjelasan teknis mengenai proses Analog Switch-Off (ASO) di Indonesia, perbedaan modulasi frekuensi analog dengan DVB-T2, dan fitur Early Warning System (EWS) pada televisi digital.",
    },
    gamePairs: [
      { id: 1, left: "DVB-T2", right: "Standar resmi siaran televisi terestrial digital di Indonesia" },
      { id: 2, left: "ASO", right: "Kebijakan penghentian total siaran TV analog ke siaran digital" },
      { id: 3, left: "Dividen Digital", right: "Penghematan pita frekuensi 700 MHz yang dialihkan untuk 4G/5G" },
      { id: 4, left: "Betacam SP", right: "Format kaset pita magnetik broadcast legendaris era analog" },
      { id: 5, left: "Multiplexing (MUX)", right: "Penggabungan beberapa saluran siaran TV dalam satu frekuensi" },
    ],
    caseTitle: "Studi Kasus: Gangguan Sinyal TV Digital 'Patah-Patah' (Pikselasi) di Rumah Warga",
    caseScenario:
      "Seorang warga mengeluh siaran TV digitalnya sering patah-patah (macroblocking/pixelated) atau menampilkan layar 'Tidak Ada Sinyal' setiap kali ada sepeda motor melintas di depan rumahnya, padahal ia menggunakan Set-Top-Box DVB-T2 baru.",
    caseInstruction:
      "Analisis penyebab teknis gangguan sinyal tersebut! Rekomendasikan 3 solusi perbaikan pada sistem antena dan kabel yang dapat mengatasi masalah interferensi elektromagnetik tersebut secara permanen!",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Fitur pada televisi digital yang memungkinkan penonton membaca sinopsis dan jadwal siaran acara TV selama seminggu penuh di layar disebut...",
        options: [
          { key: "A", text: "EPG (Electronic Program Guide)" },
          { key: "B", text: "VCD (Video Compact Disc)" },
          { key: "C", text: "CCTV (Closed Circuit Television)" },
          { key: "D", text: "NLE (Non-Linear Editor)" },
        ],
        correctKey: "A",
        explanation: "EPG (Electronic Program Guide) adalah sistem panduan jadwal acara digital yang disematkan langsung dalam metadata sinyal siaran DVB-T2.",
      },
      {
        id: 2,
        bloom: "C4",
        stem: "Manfaat terbesar pengalihan siaran TV analog ke digital bagi percepatan pemerataan akses internet nasional adalah...",
        options: [
          { key: "A", text: "Pita frekuensi 700 MHz (dividen digital) dapat dialokasikan untuk ekspansi jaringan seluler 4G dan 5G di daerah pelosok" },
          { key: "B", text: "Masyarakat tidak perlu lagi membeli kuota internet" },
          { key: "C", text: "Semua stasiun televisi otomatis tutup" },
          { key: "D", text: "Harga pesawat televisi tabung bekas menjadi sangat mahal" },
        ],
        correctKey: "A",
        explanation: "Pita frekuensi emas 700 MHz yang dihemat dari ASO dialihkan pemerintah untuk menggelar jaringan broadband nirkabel kecepatan tinggi di seluruh pelosok nusantara.",
      },
    ],
    lkpd: {
      title: "LKPD E2-K1: Analisis Kualitas Penerimaan Sinyal TV Digital DVB-T2",
      objective: "Melakukan survei pemetaan sinyal siaran DVB-T2 dan membandingkan fitur siaran digital dengan sistem analog lama.",
      tools: ["Smartphone dengan Aplikasi SinyalTVDigital", "Pesawat TV Digital / STB DVB-T2", "Antena UHF"],
      steps: [
        "Buka aplikasi SinyalTVDigital dan catat koordinat lokasi pemancar terdekat serta kekuatan sinyal (dB) di daerah Anda.",
        "Lakukan auto-scan channel pada Set-Top-Box dan catat jumlah total stasiun TV yang berhasil ditangkap.",
        "Uji fitur EPG, pemilihan bahasa audio (dual audio), dan indikator kualitas sinyal (Signal Strength & Signal Quality).",
        "Buat laporan perbandingan kelebihan siaran TV digital dibanding TV analog format tabel.",
      ],
      outputFormat: "Laporan Hasil Pengujian Sinyal TV Digital format PDF.",
    },
    journalQuestions: {
      q1: "Bagaimana tanggapan keluarga Anda di rumah saat pertama kali beralih dari siaran TV analog ke siaran digital?",
      q2: "Mengapa pemahaman tentang efisiensi frekuensi dan MUX sangat penting bagi teknisi broadcast masa kini?",
      q3: "Tantangan apa yang paling nyata dihadapi stasiun TV lokal dalam mempertahankan penonton di era digital?",
    },
    kktpIndicators: [
      "Mampu menjelaskan tahapan sejarah perkembangan media rekam dan transmisi penyiaran secara kronologis.",
      "Mampu menguraikan regulasi dan urgensi kebijakan Analog Switch-Off (ASO) di Indonesia.",
      "Mampu menganalisis prinsip kerja multiplexing (MUX) dan fitur canggih pada standar DVB-T2.",
    ],
  },

  // =========================================================================
  // KONTEN 2: Jenis Media Digital (FTA, OTT, Streaming, VOD, Pay TV)
  // =========================================================================
  {
    id: "e2-k2",
    order: 2,
    title: "Jenis Media Digital (FTA, OTT, Streaming, VOD)",
    shortTitle: "Jenis Media Digital",
    summary:
      "Membedah ekosistem media baru: Free-to-Air (FTA), Over-the-Top (OTT), Video on Demand (VOD: SVOD, AVOD, TVOD, FAST), podcast video, serta pergeseran pola konsumsi audiens.",
    kompetensi: [
      "Mengklasifikasikan berbagai model distribusi konten audio visual digital modern.",
      "Menganalisis perbedaan model bisnis SVOD, AVOD, TVOD, dan FAST channel.",
      "Merancang strategi distribusi multi-platform untuk konten program video.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu membedakan karakteristik penyiaran Free-to-Air (FTA) dengan platform Over-The-Top (OTT).",
      "Peserta didik mampu menjelaskan model monetisasi langganan (SVOD) vs berbasis iklan (AVOD) vs kanal gratis (FAST).",
      "Peserta didik mampu menganalisis pergeseran perilaku menonton masyarakat dari linear TV ke sistem Video on Demand.",
    ],
    hookQuestion:
      "Kapan terakhir kali Anda duduk di depan televisi dan menunggu jam 7 malam untuk menonton serial kesukaan Anda? Atau Anda lebih sering menonton maraton 5 episode sekaligus di smartphone kapan pun Anda mau?",
    hookContext:
      "Konsep 'Binge-Watching' di platform OTT telah mengubah lanskap penyiaran selamanya. Pola penyiaran linier berjadwal ketat kini berdampingan dengan kebebasan tanpa batas layanan Video on Demand.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C1",
        stem: "Layanan pengiriman konten audio visual langsung ke penonton melalui jaringan internet terbuka tanpa melalui operator kabel atau transmisi satelit tradisional disebut...",
        options: [
          { key: "A", text: "OTT (Over-The-Top)" },
          { key: "B", text: "AM Radio" },
          { key: "C", text: "Telex" },
          { key: "D", text: "Dial-up Connection" },
        ],
        correctKey: "A",
        explanation: "OTT (Over-The-Top) merujuk pada distribusi konten media (video, audio) langsung melalui jaringan internet (seperti Netflix, YouTube, Vidio, Disney+).",
      },
      {
        id: 2,
        bloom: "C2",
        stem: "Model bisnis layanan streaming di mana pengguna dapat menonton seluruh konten secara gratis namun diselingi jeda iklan komersial disebut...",
        options: [
          { key: "A", text: "SVOD (Subscription Video on Demand)" },
          { key: "B", text: "AVOD (Advertising-based Video on Demand)" },
          { key: "C", text: "TVOD (Transactional Video on Demand)" },
          { key: "D", text: "PVOD (Premium Video on Demand)" },
        ],
        correctKey: "B",
        explanation: "AVOD (seperti YouTube gratis atau Vidio free tier) mengandalkan pendapatan dari penayangan iklan agar pengguna dapat menikmati konten secara cuma-cuma.",
      },
    ],
    materialCards: [
      {
        title: "Slide 1: Pengantar Ekosistem Media Baru (New Media)",
        content:
          "Lanskap konsumsi media saat ini berada dalam era konvergensi digital di mana batas antara televisi tradisional, bioskop, dan internet telah melebur menjadi satu layar sentuh di genggaman tangan.\n\nMemahami perbedaan arsitektur distribusi media sangat krusial bagi siswa BCF agar mampu merancang format konten, resolusi video, dan strategi monetisasi yang tepat sasaran.",
        didYouKnow: "Lebih dari 70% generasi muda Indonesia menghabiskan waktu menonton video harian mereka di platform OTT dan media sosial daripada di televisi terestrial konvensional.",
      },
      {
        title: "Slide 2: Taksonomi Distribusi Media Audio Visual",
        content:
          "Klasifikasi utama saluran transmisi konten:\n\n1. Linear Broadcasting: Jadwal tayang tetap (fixed schedule), penonton pasif (Free-to-Air TV dan Radio).\n2. Non-Linear / On-Demand: Penonton memilih kapan dan apa yang ingin ditonton (OTT, VOD, Podcast).\n3. Live Interactive Streaming: Siaran langsung internet dengan partisipasi penonton dua arah via live chat (Twitch, YouTube Live, TikTok Live).\n4. Hybrid Channels: FAST (Free Ad-Supported Streaming TV).",
      },
      {
        title: "Slide 3: Free-to-Air (FTA): Raksasa Penjangkauan Massal",
        content:
          "Karakteristik siaran FTA (Televisi Terestrial Bebas Pulsa):\n\n• Akses Universal: Cukup bermodalkan antena UHF dan TV digital (tanpa perlu langganan internet).\n• Skala Penonton: Masih menjadi media paling efektif menjangkau puluhan juta penonton serentak di pelosok nusantara.\n• Model Bisnis: 100% didanai oleh belanja iklan komersial korporasi besar (Rating & Share Nielsen).",
      },
      {
        title: "Slide 4: Over-The-Top (OTT): Raja Fleksibilitas Digital",
        content:
          "Prinsip kerja OTT:\n\n• Konten 'melompati' (over the top) infrastruktur tertutup operator telekomunikasi dengan memanfaatkan jaringan internet umum.\n• Multi-Screen Viewing: Dapat dinikmati di Smart TV, laptop, tablet, hingga smartphone.\n• Adaptive Bitrate Streaming (HLS / MPEG-DASH): Kualitas video otomatis menyesuaikan kecepatan internet penonton (dari 360p saat koneksi lambat hingga 4K saat koneksi kencang).",
      },
      {
        title: "Slide 5: Anatomi Model Bisnis VOD: SVOD (Subscription)",
        content:
          "Subscription Video on Demand (SVOD):\n\n• Pengguna membayar biaya langganan bulanan atau tahunan tetap (flat fee).\n• Bebas Iklan (Ad-free) dan akses tanpa batas ke seluruh pustaka film/serial eksklusif.\n• Contoh Platform: Netflix, Disney+ Hotstar, Amazon Prime Video, Vidio Platinum.\n• Tantangan Bisnis: 'Churn Rate' (penonton berhenti berlangganan setelah menamatkan serial yang diminatinya).",
      },
      {
        title: "Slide 6: Anatomi Model Bisnis VOD: AVOD (Advertising-based)",
        content:
          "Advertising-based Video on Demand (AVOD):\n\n• Konten dapat diakses gratis oleh masyarakat umum.\n• Monetisasi berasal dari penayangan iklan programmatic (Pre-roll, Mid-roll, Banner Ads).\n• Contoh Platform: YouTube, DailyMotion, Vidio Free Tier.\n• Kunci Sukses: Volume penayangan (views) dan retensi durasi tontonan (watch time) yang masif.",
      },
      {
        title: "Slide 7: Anatomi Model Bisnis VOD: TVOD & PVOD (Transactional)",
        content:
          "Transactional Video on Demand (TVOD / Pay-Per-View):\n\n• Pengguna membayar sewa atau beli per judul konten tertentu (tanpa perlu langganan bulanan).\n• TVOD (Rent/Buy): Menyewa film bioskop baru di Apple TV / Google Play Movies selama 48 jam.\n• PVOD (Premium VOD): Menonton film bioskop baru pada hari pertama rilis langsung di rumah dengan tarif premium (setara harga tiket bioskop sekeluarga).",
      },
      {
        title: "Slide 8: Tren Baru Penyiaran: FAST Channels",
        content:
          "Free Ad-Supported Streaming TV (FAST Channels):\n\n• Perpaduan antara kenyamanan menonton TV linier jadul dengan teknologi streaming internet.\n• Saluran streaming gratis 24 jam dengan jadwal acara tematik terkurasi (misal: Channel Khusus Memasak, Channel Khusus Kartun, Channel Berita 24 Jam).\n• Contoh Platform: Pluto TV, Samsung TV Plus, Tubi, Vidio Free Linear Channels.\n• Pertumbuhan tercepat di kalangan penonton yang lelah memilih judul di katalog VOD (Decision Fatigue).",
      },
      {
        title: "Slide 9: Televisi Berlangganan (Pay TV): Satelit & Kabel",
        content:
          "Karakteristik Pay TV (K-Vision, MNC Vision, IndiHome TV):\n\n• Transmisi via Satelit Direct-to-Home (DTH) menggunakan parabola kecil ku-band atau kabel serat optik tertutup (IPTV).\n• Keunggulan: Menghadirkan siaran langsung olahraga premium berlisensi eksklusif (Liga Champions, Liga Inggris, Formula 1) dengan kualitas gambar tanpa kompresi berlebih.",
      },
      {
        title: "Slide 10: Video Podcast (Vodcast): Format Baru Radio Modern",
        content:
          "Evolusi audio siaran ke format visual:\n\n• Bukan sekadar merekam orang mengobrol, melainkan produksi multi-kamera studio mini dengan tata cahaya moody dan kualitas vokal studio broadcast.\n• Platform Distribusi: Spotify Video dan YouTube Podcast.\n• Kedekatan Intim (Intimacy): Menghadirkan dialog mendalam tanpa batasan sensor ketat jam tayang televisi.",
      },
      {
        title: "Slide 11: Pergeseran Perilaku Menonton: Dari 'Appointment' ke 'Binge'",
        content:
          "Dampak psikologis audiens modern:\n\n• Appointment Viewing (Dulu): Penonton menyesuaikan jadwal hidupnya dengan jam tayang TV.\n• Binge-Watching (Sekarang): Penonton menonton seluruh musim serial (8-10 episode) sekaligus dalam satu malam.\n• Multi-Tasking / Second Screening: Lebih dari 65% penonton menonton video sambil bermain media sosial di smartphone kedua.",
      },
      {
        title: "Slide 12: Pengaruh Algoritma Rekomendasi & Personalisasi Konten",
        content:
          "Di era OTT, penonton tidak lagi mencari konten; kontenlah yang menemukan penonton:\n\n• Machine Learning menganalisis riwayat tontonan, genre kesukaan, durasi jeda, dan rating untuk menyajikan beranda personal unik bagi setiap pengguna.\n• Bahkan poster film di Netflix berubah otomatis menyesuaikan preferensi aktor favorit Anda.",
      },
      {
        title: "Slide 13: Format Konten Vertikal (9:16) vs Horizontal (16:9)",
        content:
          "Tuntutan produksi multi-aspek rasio:\n\n• Horizontal 16:9: Standar bioskop, TV, dan laptop (menampilkan panorama megah dan interaksi antar-karakter lapang).\n• Vertikal 9:16 (TikTok, Reels, Shorts): Didesain untuk genggaman satu tangan pada smartphone; menuntut framing fokus di tengah dan hook visual di 3 detik pertama.",
      },
      {
        title: "Slide 14: Kebutuhan Teknis Produksi untuk Platform OTT",
        content:
          "Standar pengiriman master file (Delivery Requirements) ke platform seperti Netflix/Disney:\n\n• Kamera Wajib Tersertifikasi (Netflix Approved Camera): Minimal sensor 4K sejati, perekaman Log/RAW 10-bit atau 12-bit (Sony FX6, Canon C300, RED, ARRI).\n• Color Space: Wide Color Gamut (Rec.2020 / DCI-P3) dan mastering HDR (Dolby Vision).\n• Audio: Wajib menyertakan mix suara surround 5.1 dan Dolby Atmos.",
      },
      {
        title: "Slide 15: Studi Komparasi: Rating Televisi (Nielsen) vs Metrik OTT Digital",
        content:
          "Pengukuran keberhasilan karya audio visual:\n\n• Televisi Linier: Menggunakan sample kotak PeopleMeter (TV Rating & Share) per menit tayang.\n• Platform Digital: Mengukur data akurat real-time: Impressions, Click-Through Rate (CTR), Watch Time, Retention Graph, Shares, dan Engagement Rate.",
      },
      {
        title: "Slide 16: Troubleshooting Transmisi: Mengatasi Buffering pada Live Streaming",
        content:
          "Penyebab dan solusi buffering siaran daring:\n\n1. Packet Loss Internet: Koneksi upload tidak stabil. Solusi: Gunakan teknologi Internet Bonding (menggabungkan 3 jaringan modem 4G/5G menjadi satu jalur kuat via LiveU / Peplink).\n2. Bitrate Terlalu Tinggi: Encoder memaksakan bitrate di atas batas upload. Solusi: Turunkan video bitrate maksimal 70% dari kapasitas upload rata-rata.",
      },
      {
        title: "Slide 17: Studi Kasus Riil: Kematian Stasiun TV Kabel Tradisional di AS (Cord-Cutting)",
        content:
          "Fenomena 'Cord-Cutting' (pemutusan kabel TV berlangganan) di Amerika Serikat:\n\nFakta Transformasi:\nPuluhan juta keluarga berhenti berlangganan TV kabel konvensional dan beralih total ke kombinasi Netflix dan FAST Channel gratis. Stasiun TV raksasa seperti HBO dan Disney terpaksa meluncurkan aplikasi streaming sendiri demi mempertahankan kelangsungan bisnisnya.",
      },
      {
        title: "Slide 18: Analisis Kesiapan Stasiun TV Indonesia di Ranah Digital",
        content:
          "Strategi konvergensi media nasional:\n\n1. Sinergi FTA & OTT: Grup media besar mengintegrasikan saluran TV terestrial mereka ke aplikasi streaming lokal (misal: Emtek dengan Vidio, MNC dengan RCTI+).\n2. Konten Eksklusif: Memproduksi serial original (Original Series) dengan tema yang lebih berani dan sinematik khusus untuk pelanggan OTT berbayar.",
      },
      {
        title: "Slide 19: Inovasi Mendatang: Interactive Storytelling & Metaverse Broadcast",
        content:
          "Masa depan media baru:\n\n• Interactive Video: Penonton menentukan jalan cerita dengan menekan opsi di layar (seperti film Black Mirror: Bandersnatch di Netflix).\n• VR/Spatial Video: Menonton konser musik 360 derajat di ruang virtual menggunakan kacamata Apple Vision Pro / Meta Quest.",
      },
      {
        title: "Slide 20: Rangkuman & Action Plan Analisis Media Siswa",
        content:
          "Poin Kunci Pembelajaran:\n1. Ekosistem digital menghadirkan beragam model distribusi: FTA, SVOD, AVOD, TVOD, dan FAST.\n2. Pembuat konten harus cerdas merancang format karya (16:9 vs 9:16) sesuai platform target.\n3. Kuasai metrik analitik digital untuk memahami preferensi audiens modern.\n\nAction Plan:\nLakukan audit konsumsi media digital harian Anda dan petakan model bisnis platform favorit Anda pada lembar kerja LKPD E2-K2!",
      },
    ],
    video: {
      title: "Membedah Ekosistem Media Baru: FTA vs OTT vs Layanan Streaming",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      guide:
        "Perhatikan perbedaan mendasar antara model bisnis Free-to-Air dengan platform Video on Demand (SVOD & AVOD). Amati bagaimana algoritma rekomendasi streaming bekerja menyajikan konten personal ke pengguna.",
    },
    gamePairs: [
      { id: 1, left: "Free-to-Air (FTA)", right: "Siaran televisi terestrial gratis diakses menggunakan antena" },
      { id: 2, left: "SVOD", right: "Layanan streaming berbasis langganan bulanan tanpa iklan" },
      { id: 3, left: "FAST Channels", right: "Saluran streaming linier gratis 24 jam dengan jeda iklan" },
      { id: 4, left: "Binge-Watching", right: "Kebiasaan menonton maraton beberapa episode serial sekaligus" },
      { id: 5, left: "Adaptive Bitrate", right: "Kualitas video yang otomatis menyesuaikan kecepatan internet" },
    ],
    caseTitle: "Studi Kasus: Menentukan Jalur Distribusi Karya Serial Film Pendek Sekolah",
    caseScenario:
      "Kelompok siswa SMK selesai memproduksi serial film pendek komedi sekolah 5 episode. Tim bingung memilih strategi rilis: apakah mengunggah seluruh episode sekaligus di YouTube (AVOD), merilisnya per minggu dengan sistem berbayar di platform karya lokal, atau membuat versi potongan vertikal di TikTok.",
    caseInstruction:
      "Rancang strategi distribusi multi-platform terpadu: bagaimana mengombinasikan cuplikan vertikal TikTok untuk memancing rasa penasaran (hook) menuju video lengkap di YouTube serta analisis kelebihan model monetisasi yang Anda pilih!",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Platform media seperti YouTube gratis dan Vidio Free Tier yang membiayai operasionalnya melalui jeda tayang iklan komersial termasuk dalam kategori...",
        options: [
          { key: "A", text: "AVOD (Advertising-based Video on Demand)" },
          { key: "B", text: "SVOD (Subscription Video on Demand)" },
          { key: "C", text: "TVOD (Transactional Video on Demand)" },
          { key: "D", text: "NFT Video" },
        ],
        correctKey: "A",
        explanation: "AVOD (Advertising-based Video on Demand) adalah model bisnis di mana audiens dapat menonton secara cuma-cuma dengan kompensasi menyaksikan jeda iklan.",
      },
      {
        id: 2,
        bloom: "C4",
        stem: "Keunggulan utama teknologi Adaptive Bitrate Streaming (HLS) pada platform OTT modern adalah...",
        options: [
          { key: "A", text: "Menjamin video tetap berputar mulus tanpa henti (buffering) dengan menurunkan resolusi saat koneksi internet melambat" },
          { key: "B", text: "Mengubah video hitam putih menjadi berwarna secara otomatis" },
          { key: "C", text: "Mempercepat durasi film menjadi separuh waktu" },
          { key: "D", text: "Menghapus iklan secara otomatis" },
        ],
        correctKey: "A",
        explanation: "Adaptive Bitrate membagi video menjadi segmen kecil berbagai resolusi sehingga player dapat berganti resolusi secara mulus sesuai kestabilan bandwidth penonton tanpa buffering.",
      },
    ],
    lkpd: {
      title: "LKPD E2-K2: Analisis Model Bisnis Platform OTT & Audit Konsumsi Media",
      objective: "Menganalisis 3 platform media digital berbeda dan merancang rencana distribusi multi-platform karya video.",
      tools: ["Smartphone / Komputer Internet", "Lembar Analisis Model Bisnis"],
      steps: [
        "Pilih 3 platform berbeda: 1 stasiun TV FTA, 1 platform OTT (Netflix/Vidio), dan 1 platform video pendek (TikTok/Reels).",
        "Bandingkan model bisnis, format rasio aspek video, jenis konten unggulan, dan target demografis penontonnya dalam tabel komparatif.",
        "Rancang simulasi strategi peluncuran sebuah film pendek fiksi: jadwal teaser vertikal, trailer horizontal, dan rilis penuh.",
        "Presentasikan analisis kelayakan bisnis distribusi di depan kelas.",
      ],
      outputFormat: "Laporan Riset Komparasi Platform Media Digital format PDF.",
    },
    journalQuestions: {
      q1: "Dari seluruh model media digital yang dipelajari, platform mana yang paling sering Anda gunakan dan apa alasannya?",
      q2: "Bagaimana pergeseran pola menonton 'Binge-Watching' memengaruhi cara sutradara menyusun alur cerita (cliffhanger)?",
      q3: "Apakah menurut Anda stasiun televisi konvensional akan punah di masa depan, atau akan tetap bertahan berdampingan dengan OTT?",
    },
    kktpIndicators: [
      "Mampu mengklasifikasikan perbedaan model distribusi Free-to-Air, OTT, Pay TV, dan FAST Channel.",
      "Mampu menguraikan karakteristik model bisnis SVOD, AVOD, dan TVOD secara akurat.",
      "Mampu merancang strategi distribusi multi-platform yang terintegrasi untuk karya audio visual.",
    ],
  },

  // =========================================================================
  // KONTEN 3: Undang-Undang ITE, Regulasi Penyiaran & Etika Media
  // =========================================================================
  {
    id: "e2-k3",
    order: 3,
    title: "Undang-Undang ITE, Regulasi Penyiaran & Etika Media",
    shortTitle: "Regulasi & Etika Media",
    summary:
      "Kajian hukum Undang-Undang Informasi dan Transaksi Elektronik (UU ITE), Pedoman Perilaku Penyiaran dan Standar Program Siaran (P3SPS KPI), perlindungan hak cipta (copyright vs fair use), dan etika privasi liputan.",
    kompetensi: [
      "Memahami batasan hukum UU ITE dan regulasi penyiaran P3SPS KPI di Indonesia.",
      "Menerapkan prinsip perlindungan hak cipta, lisensi musik berbayar, dan doktrin Fair Use.",
      "Menghindari pelanggaran pencemaran nama baik, penyebaran hoaks, dan eksploitasi visual anak.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menguraikan pasal-pasal krusial UU ITE terkait konten audio visual.",
      "Peserta didik mampu membedakan penggunaan materi berhak cipta yang legal (Lisensi Creative Commons) vs pembajakan.",
      "Peserta didik mampu menerapkan aturan P3SPS dalam proses penyuntingan adegan siaran ramah anak.",
    ],
    hookQuestion:
      "Tahukah Anda bahwa menggunakan lagu populer musisi terkenal sebagai musik latar video tugas sekolah yang Anda unggah ke YouTube bisa membuat video Anda dibisukan (mute), dihapus paksa, atau bahkan dituntut ganti rugi?",
    hookContext:
      "Sistem robotik algoritma Content ID di internet bekerja 24 jam nonstop mencocokkan gelombang suara. Ketaatan terhadap hukum hak cipta dan etika penyiaran adalah tanda kedewasaan seorang kreator audio visual profesional.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C1",
        stem: "Lembaga negara independen di Indonesia yang bertugas mengawasi isi siaran televisi dan radio berdasarkan P3SPS adalah...",
        options: [
          { key: "A", text: "Komisi Penyiaran Indonesia (KPI)" },
          { key: "B", text: "Lembaga Sensor Film (LSF)" },
          { key: "C", text: "Dewan Pers" },
          { key: "D", text: "Badan Siber dan Sandi Negara (BSSN)" },
        ],
        correctKey: "A",
        explanation: "Komisi Penyiaran Indonesia (KPI) mengawasi isi siaran (P3SPS), sedangkan LSF bertugas menyensor kelayakan tayang film bioskop, dan Dewan Pers menaungi karya jurnalistik.",
      },
      {
        id: 2,
        bloom: "C2",
        stem: "Doktrin hukum internasional yang memperbolehkan penggunaan sebagian kecil materi berhak cipta tanpa izin khusus untuk keperluan kritik, ulasan ilmiah, atau pendidikan disebut...",
        options: [
          { key: "A", text: "Fair Use / Penggunaan Wajar" },
          { key: "B", text: "Public Domain" },
          { key: "C", text: "Open Source" },
          { key: "D", text: "Trademark" },
        ],
        correctKey: "A",
        explanation: "Fair Use (Penggunaan Wajar) mengizinkan kutipan singkat karya orang lain secara legal untuk tujuan edukasi, analisis, atau kritik jurnalistik tanpa melanggar hak cipta.",
      },
    ],
    materialCards: [
      {
        title: "Slide 1: Pengantar Hukum & Etika di Era Digital Audio Visual",
        content:
          "Kebebasan berekspresi di era media digital bukanlah kebebasan tanpa batas (anarki). Setiap karya video dan siaran yang disebarluaskan ke ruang publik terikat oleh aturan hukum positif negara dan etika moral kemanusiaan.\n\nSiswa SMK BCF wajib memahami benteng hukum ini sejak dini agar tidak tersandung kasus pidana cyber, tuntutan denda pelanggaran hak cipta, atau sanksi pencekalan siaran.",
        didYouKnow: "Pelanggaran hak cipta musik komersial pada siaran langsung dapat memicu penghentian live stream seketika oleh algoritma platform dalam waktu kurang dari 30 detik.",
      },
      {
        title: "Slide 2: Peta Regulasi Media di Indonesia",
        content:
          "Tiga pilar hukum utama yang mengatur industri audio visual di Indonesia:\n\n1. UU No. 32 Tahun 2002 tentang Penyiaran (menaungi stasiun TV dan radio terestrial via KPI).\n2. UU No. 19 Tahun 2016 jo UU No. 1 Tahun 2024 (UU ITE) (menaungi konten di ruang siber dan media sosial).\n3. UU No. 28 Tahun 2014 tentang Hak Cipta (menaungi hak moral dan hak ekonomi karya cipta seni).",
      },
      {
        title: "Slide 3: Membedah Pasal Krusial UU ITE Terkait Konten Video",
        content:
          "Pasal-pasal yang paling sering menjerat kreator video:\n\n• Pasal 27 ayat (1): Larangan mendistribusikan konten bermuatan melanggar kesusilaan (pornografi).\n• Pasal 27 ayat (3) jo Pasal 27A: Larangan penyerangan kehormatan atau pencemaran nama baik (defamasi).\n• Pasal 28 ayat (1) & (2): Larangan menyebarkan berita bohong (hoaks) yang menyesatkan atau menimbulkan permusuhan bermuatan SARA.\n• Ancaman Pidana: Penjara hingga 4-6 tahun dan/atau denda miliaran rupiah.",
      },
      {
        title: "Slide 4: P3SPS KPI: Pedoman Perilaku Penyiaran dan Standar Program Siaran",
        content:
          "Buku suci regulasi isi siaran televisi Indonesia:\n\n• Perlindungan Anak & Remaja: Larangan menayangkan adegan kekerasan sadis, ciuman bibir eksplisit, dan konsumsi rokok/alkohol pada jam tayang anak (05.00 – 22.00 WIB).\n• Penghormatan Privasi: Dilarang menyiarkan identitas anak di bawah umur yang menjadi korban atau pelaku tindak pidana (wajib disamarkan wajah dan namanya).\n• Penggolongan Usia Siaran: SU (Semua Umur), P (Pra-sekolah), A (Anak), R (Remaja 13+), D (Dewasa 18+).",
      },
      {
        title: "Slide 5: Hak Cipta (Copyright): Hak Moral vs Hak Ekonomi",
        content:
          "Dua hak fundamental pencipta karya audio visual:\n\n• Hak Moral: Hak abadi yang melekat pada pencipta untuk dicantumkan namanya pada karya cipta (Credit Title) dan melarang karyanya diubah secara merusak kehormatannya.\n• Hak Ekonomi: Hak eksklusif untuk mendapatkan keuntungan finansial dari perbanyakan, penyiaran, lisensi, atau pengadaptasian karya.",
      },
      {
        title: "Slide 6: Musik Berhak Cipta & Mekanisme Lisensi",
        content:
          "Kesalahan paling fatal siswa BCF: Memasukkan lagu pop favorit ke video tugas sekolah:\n\n• Setiap lagu komersial memiliki dua hak cipta: Hak Komposisi (pencipta lagu) dan Hak Rekaman Master (label rekaman).\n• Menggunakan lagu tanpa izin tertulis (Sync License) adalah tindakan ilegal.\n• Solusi Legal: Menggunakan pustaka musik bebas royalti (Royalty-Free Music) seperti YouTube Audio Library, Epidemic Sound, Artlist, atau lisensi Creative Commons.",
      },
      {
        title: "Slide 7: Memahami Lisensi Creative Commons (CC)",
        content:
          "Tingkatan lisensi fleksibel Creative Commons di internet:\n\n• CC-BY (Attribution): Boleh dipakai dan dimodifikasi, wajib mencantumkan nama pencipta.\n• CC-BY-SA (ShareAlike): Boleh dipakai, namun karya turunan harus berlisensi sama.\n• CC-BY-NC (Non-Commercial): Hanya boleh dipakai untuk karya non-komersial (bukan untuk jualan/iklan).\n• CC-BY-ND (NoDerivatives): Boleh dipakai utuh, dilarang dipotong atau dimodifikasi.\n• Public Domain (CC0): Bebas dipakai tanpa syarat apa pun.",
      },
      {
        title: "Slide 8: Doktrin 'Fair Use' (Penggunaan Wajar) dalam Kritik Film",
        content:
          "Empat faktor penentu apakah cuplikan video termasuk Fair Use:\n\n1. Tujuan Penggunaan: Apakah bersifat transformatif (memberikan kritik, ulasan, parodi) atau hanya mencuri tayangan?\n2. Sifat Karya Cipta: Mengutip karya faktual (berita) lebih ditoleransi daripada karya fiksi kreatif.\n3. Jumlah Cuplikan: Hanya mengambil bagian kecil yang relevan (misal: 5-10 detik adegan yang sedang dikritik).\n4. Dampak Ekonomi: Apakah ulasan Anda merugikan penjualan film aslinya?",
      },
      {
        title: "Slide 9: Sistem Deteksi Algoritma Content ID di YouTube & Media Sosial",
        content:
          "Bagaimana platform digital mendeteksi pelanggaran secara otomatis:\n\n• Pemilik hak cipta mendaftarkan sidik jari audio visual (fingerprint) karyanya ke database platform.\n• Saat Anda mengunggah video, sistem mencocokkan audio dan gambar frame per frame.\n• Tindakan Otomatis Content ID:\n  1. Monetize: Iklan dipasang di video Anda dan keuntungannya diserahkan ke pemilik lagu.\n  2. Mute / Block: Suara video dibisukan atau video diblokir di negara tertentu.\n  3. Copyright Strike: Teguran resmi; jika menerima 3 strike, akun YouTube Anda dihapus permanen.",
      },
      {
        title: "Slide 10: Hak Privasi & 'Model Release Form' di Ruang Publik",
        content:
          "Etika merekam wajah orang lain:\n\n• Merekam di Tempat Umum: Wajar untuk liputan berita jalanan (Street Photography/News).\n• Produksi Komersial / Iklan: Setiap orang yang wajahnya terlihat jelas wajib menandatangani lembar Model Release (persetujuan penggunaan wajah untuk tujuan komersial).\n• Larangan Merekam Area Privat: Dilarang merekam bagian dalam rumah tinggal, kamar ganti, atau area dengan ekspektasi privasi tinggi tanpa izin.",
      },
      {
        title: "Slide 11: Perlindungan Anak dalam Liputan Berita Kriminal",
        content:
          "Aturan ketat Kode Etik Jurnalistik (KEJ) dan UU Perlindungan Anak:\n\n• Wajah anak di bawah usia 18 tahun yang menjadi korban tindak asusila atau pelaku kejahatan wajib disamarkan (blur tebal / pixelate).\n• Suara anak wajib dimodifikasi dengan pitch shifter agar tidak dikenali.\n• Dilarang menyebutkan nama asli, nama orang tua, alamat rumah, atau nama sekolah yang dapat memicu identifikasi anak di lingkungan sosialnya.",
      },
      {
        title: "Slide 12: Menghindari Hoaks, Deepfake, dan Disinformasi Visual",
        content:
          "Integritas jurnalisme audio visual:\n\n• Larangan 'Editing Manipulatif': Memotong kalimat narasumber di tengah kata sehingga maknanya berputar 180 derajat (Selective Editing).\n• Verifikasi Fakta: Selalu periksa keaslian video amatir dari media sosial sebelum dimasukkan ke dalam paket berita siaran.\n• Penanda AI: Jika menggunakan visual hasil rekayasa AI atau simulasi 3D, wajib mencantumkan tulisan 'Simulasi / Ilustrasi Rekayasa Digital' di layar.",
      },
      {
        title: "Slide 13: Lembaga Sensor Film (LSF) & Surat Tanda Kelulusan Sensor (STLS)",
        content:
          "Regulasi penayangan film layar lebar dan tayangan komersial:\n\n• Setiap film bioskop, sinetron, dan iklan televisi komersial di Indonesia wajib lulus sensor dan mengantongi Surat Tanda Lulus Sensor (STLS) dari LSF.\n• Budaya 'Sensor Mandiri': Gerakan mengedukasi masyarakat agar bijak memilih klasifikasi tontonan sesuai batas usia perkembangan mental penonton.",
      },
      {
        title: "Slide 14: Kepatuhan Pedoman Penyiaran Iklan (EPI): Etika Periklanan Indonesia",
        content:
          "Batasan hukum penulisan naskah iklan TV:\n\n• Dilarang menggunakan kata 'Paling', 'Nomor Satu', atau 'Terbaik' tanpa mencantumkan bukti riset lembaga riset independen yang terverifikasi.\n• Iklan rokok hanya boleh tayang pukul 21.30 – 05.00 WIB dan dilarang menampilkan wujud rokok, asap rokok, atau orang yang sedang merokok.\n• Iklan produk obat wajib mencantumkan izin edar BPOM dan peringatan efek samping.",
      },
      {
        title: "Slide 15: Studi Komparasi: Regulasi Penyiaran TV (KPI) vs Ruang Bebas OTT/Medsos",
        content:
          "Dilema regulasi masa kini:\n\n• Stasiun TV Terestrial: Diikat sangat ketat oleh P3SPS KPI; kesalahan kecil dapat berujung sanksi penghentian sementara program siaran.\n• Media Sosial & OTT Asing: Belum sepenuhnya berada di bawah yurisdiksi KPI, melainkan diatur oleh UU ITE dan filter kebijakan komunitas platform masing-masing.\n• Tuntutan Persaingan Adil: Asosiasi televisi swasta mendorong adanya regulasi konvergensi yang adil bagi seluruh penyedia konten video.",
      },
      {
        title: "Slide 16: Troubleshooting Hukum: Menghadapi 'Copyright Strike' di YouTube",
        content:
          "Langkah tepat saat video tugas sekolah terkena teguran hak cipta:\n\n1. Jangan Panik: Periksa apakah itu 'Content ID Claim' (klaim bagi hasil) atau 'Copyright Strike' (takedown resmi).\n2. Ganti Musik (Erase / Swap Song): Gunakan fitur YouTube Studio untuk mengganti audio yang bermasalah dengan trek gratis tanpa perlu menghapus video.\n3. Ajukan 'Counter Notification' (Sengketa): Hanya jika Anda yakin memiliki lisensi resmi atau materi tersebut termasuk dalam doktrin Fair Use yang sah.",
      },
      {
        title: "Slide 17: Studi Kasus Riil: Gugatan Milyaran Rupiah Akibat Penggunaan Lagu Pop di Iklan Web",
        content:
          "Sebuah agensi konten lokal menggunakan potongan lagu musisi terkenal selama 15 detik pada video promosi kafe di Instagram tanpa membeli lisensi sinkronisasi:\n\nFakta Hukum:\nManajemen label rekaman musisi tersebut melayangkan somasi hukum ganti rugi pelanggaran hak cipta senilai Rp 500 juta. Karena tidak memiliki surat lisensi resmi, agensi tersebut terpaksa berdamai di luar pengadilan dengan membayar denda puluhan juta rupiah dan menghapus seluruh video promosi.",
      },
      {
        title: "Slide 18: Analisis Pembelajaran bagi Calon Sineas Muda",
        content:
          "Refleksi kasus lisensi musik:\n\n1. Asumsi 'Hanya 15 Detik' adalah Mitos: Tidak ada aturan hukum yang menyatakan bahwa memakai lagu orang lain di bawah 30 detik itu otomatis gratis dan legal.\n2. Anggarkan Lisensi: Selalu masukkan pos 'Biaya Lisensi Musik & Aset Stok' dalam proposal RAB produksi Anda.\n3. Kolaborasi Musisi Lokal: Ajak teman sebaya jurusan musik untuk menciptakan lagu tema (soundtrack) orisinal bagi film Anda.",
      },
      {
        title: "Slide 19: Etika Penggunaan AI Generatif & Hak Cipta Gambar",
        content:
          "Tantangan hukum terbaru di era Gen-AI:\n\n• Hak Cipta Karya AI: Hukum di banyak negara menyatakan bahwa gambar atau naskah yang 100% dibuat oleh mesin AI tanpa campur tangan intelektual manusia tidak memiliki hak cipta.\n• Etika Sumber Data: Hindari meniru gaya khas (art style) seniman tertentu secara terang-terangan tanpa atribusi.\n• Transparansi: Jujur menyatakan kepada audiens jika suatu karya menggunakan bantuan generator kecerdasan buatan.",
      },
      {
        title: "Slide 20: Rangkuman & Action Plan Kepatuhan Hukum Siswa BCF",
        content:
          "Poin Kunci Pembelajaran:\n1. Kreativitas tanpa etika dan ketaatan hukum adalah bom waktu yang menghancurkan karier profesional Anda.\n2. Hormati hak cipta orang lain sebagaimana Anda ingin karya cipta Anda dihormati dan dilindungi.\n3. Patuhi regulasi P3SPS dan UU ITE untuk menciptakan ruang media penyiaran yang sehat dan mendidik.\n\nAction Plan:\nLakukan audit hak cipta aset musik dan gambar pada tugas video kelas Anda menggunakan checklist LKPD E2-K3!",
      },
    ],
    video: {
      title: "Hukum Hak Cipta dan Kepatuhan UU ITE bagi Konten Kreator & Penyiaran",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      guide:
        "Perhatikan penjelasan pakar hukum mengenai perbedaan antara Content ID Claim dengan Copyright Strike. Catat bagaimana lisensi Creative Commons bekerja dan syarat-syarat doktrin Fair Use.",
    },
    gamePairs: [
      { id: 1, left: "Hak Moral", right: "Hak abadi pencipta untuk dicantumkan namanya pada karya cipta" },
      { id: 2, left: "P3SPS KPI", right: "Standar isi siaran televisi dan radio terestrial di Indonesia" },
      { id: 3, left: "Sync License", right: "Izin resmi menyelaraskan musik dengan gambar visual video" },
      { id: 4, left: "Fair Use", right: "Kutipan materi berhak cipta untuk keperluan kritik dan edukasi" },
      { id: 5, left: "Copyright Strike", right: "Teguran resmi pelanggaran hak cipta yang mengancam penutupan akun" },
    ],
    caseTitle: "Studi Kasus: Menyunting Berita Kasus Perundungan Anak Tanpa Melanggar Hukum",
    caseScenario:
      "Tim redaksi berita sekolah Anda menerima kiriman video amatir aksi perundungan (bullying) antarsiswa di halte luar sekolah. Wajah korban dan pelaku yang masih di bawah umur terlihat sangat jelas dan menangis ketakutan. Video ini sangat viral di media sosial.",
    caseInstruction:
      "Sebagai Editor Berita yang mematuhi Pedoman Perilaku Penyiaran (P3SPS) dan UU Perlindungan Anak, langkah sensor visual dan audio apa yang wajib Anda lakukan sebelum video tersebut boleh ditayangkan sebagai paket berita investigasi sekolah?",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Menurut aturan P3SPS Komisi Penyiaran Indonesia (KPI), tindakan yang wajib dilakukan terhadap wajah anak di bawah umur yang terlibat kasus hukum adalah...",
        options: [
          { key: "A", text: "Memperbesar (zoom-in) wajah anak agar terlihat ekspresinya" },
          { key: "B", text: "Menyamarkan wajahnya (blur tebal / pixelate) dan memodifikasi suaranya agar identitasnya terlindungi" },
          { key: "C", text: "Menuliskan nama lengkap dan alamat rumahnya di layar" },
          { key: "D", text: "Mengunggah foto rapor sekolahnya" },
        ],
        correctKey: "B",
        explanation: "P3SPS dan UU Perlindungan Anak melarang penayangan identitas anak (wajah, suara, nama, keluarga, sekolah) untuk melindungi masa depan psikologis anak tersebut.",
      },
      {
        id: 2,
        bloom: "C4",
        stem: "Seorang kreator video menggunakan lagu pop komersial berdurasi 3 menit penuh sebagai musik latar video pariwisata yang ia monetisasi di YouTube tanpa izin. Alasan mengapa tindakan ini TIDAK DAPAT diklaim sebagai 'Fair Use' adalah...",
        options: [
          { key: "A", text: "Karena durasi lagunya terlalu pendek" },
          { key: "B", text: "Karena ia menggunakan seluruh lagu secara utuh untuk tujuan mencari keuntungan finansial (komersial) tanpa memberikan nilai kritik atau transformasi edukatif" },
          { key: "C", text: "Karena video tersebut tidak ditonton oleh musisi aslinya" },
          { key: "D", text: "Karena resolusi videonya hanya 720p" },
        ],
        correctKey: "B",
        explanation: "Fair Use mensyaratkan penggunaan sebagian kecil karya untuk tujuan kritik/ulasan non-komersial yang transformatif, bukan menggunakan lagu utuh sebagai latar belakang video komersial.",
      },
    ],
    lkpd: {
      title: "LKPD E2-K3: Audit Hak Cipta Aset Video & Simulasi Kepatuhan P3SPS",
      objective: "Melakukan audit legalitas lisensi musik/footage pada video proyek dan menerapkan sensor ramah anak.",
      tools: ["Software NLE (Premiere/Resolve/CapCut)", "Video Sampel Liputan Berita", "Checklist Hak Cipta"],
      steps: [
        "Periksa seluruh aset musik dan klip video pada proyek tugas terakhir Anda: kelompokkan mana yang berlisensi Royalty-Free, Creative Commons, atau Tanpa Izin.",
        "Ganti seluruh aset tanpa izin dengan musik legal dari perpustakaan audio bebas royalti.",
        "Praktikkan teknik sensor video pada footage sampel: pasang filter blur pelacak gerak (motion tracking blur) pada wajah anak dan aplikasikan audio pitch shifter.",
        "Tuliskan surat pernyataan kepatuhan hak cipta dan etika media format baku.",
      ],
      outputFormat: "Video Master Ter-sensor dan Lembar Deklarasi Hak Cipta format PDF.",
    },
    journalQuestions: {
      q1: "Mengapa pembuat film sering kali tergoda melanggar hak cipta musik dan bagaimana cara Anda menghindari godaan tersebut?",
      q2: "Bagaimana Anda membedakan antara konten yang mengkritik fakta dengan konten yang mencemarkan nama baik menurut UU ITE?",
      q3: "Tanggung jawab etis apa yang paling berat Anda emban saat meliput peristiwa sensitif di lingkungan masyarakat?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi pasal-pasal kunci UU ITE dan regulasi penyiaran P3SPS KPI.",
      "Mampu membedakan penggunaan materi berhak cipta secara sah (lisensi/fair use) dari tindakan pembajakan.",
      "Mampu menerapkan prosedur perlindungan privasi anak dan etika visual pada karya audio visual.",
    ],
  },

  // =========================================================================
  // KONTEN 4: Kecerdasan Buatan (AI) di Industri Broadcasting & Perfilman
  // =========================================================================
  {
    id: "e2-k4",
    order: 4,
    title: "Kecerdasan Buatan (AI) di Industri Broadcasting & Perfilman",
    shortTitle: "AI di Industri BCF",
    summary:
      "Pemanfaatan Generative AI dalam penulisan naskah, storyboarding otomatis, voice cloning, AI video editing & color grading, deteksi deepfake, dan batasan etika profesi.",
    kompetensi: [
      "Mengidentifikasi aplikasi dan alat AI dalam alur kerja pra, produksi, dan pascaproduksi.",
      "Menerapkan prompt engineering untuk riset cerita dan pembuatan visual moodboard.",
      "Menganalisis dampak etika, ancaman disinformasi deepfake, dan masa depan tenaga kerja manusia di bidang media.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu memanfaatkan alat Generative AI untuk menyusun kerangka naskah dan moodboard secara produktif.",
      "Peserta didik mampu mengoperasikan fitur AI otomasi NLE (Auto-Transcribe, Text-Based Editing, Voice Enhance).",
      "Peserta didik mampu mengidentifikasi manipulasi video deepfake dan mematuhi etika transparansi karya AI.",
    ],
    hookQuestion:
      "Apakah suatu hari nanti sutradara, kameramen, dan aktor manusia akan digantikan sepenuhnya oleh kecerdasan buatan (AI) yang mampu membuat film bioskop utuh hanya dari sebuah ketikan teks?",
    hookContext:
      "Mogok kerja ribuan penulis dan aktor Hollywood (WGA & SAG-AFTRA) membuktikan bahwa AI bukan lagi fiksi ilmiah, melainkan kekuatan disrupsi nyata yang sedang mendefinisikan ulang batas kreativitas dan hak cipta industri media global.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C1",
        stem: "Teknologi rekayasa sintetis berbasis AI yang mampu meniru wajah dan suara seseorang secara meyakinkan pada rekaman video disebut...",
        options: [
          { key: "A", text: "Deepfake" },
          { key: "B", text: "Chroma Key" },
          { key: "C", text: "Slow Shutter" },
          { key: "D", text: "White Balance" },
        ],
        correctKey: "A",
        explanation: "Deepfake memanfaatkan jaringan saraf tiruan (Deep Learning) untuk menumpangkan wajah atau merekayasa suara seseorang dengan tingkat kemiripan sangat tinggi.",
      },
      {
        id: 2,
        bloom: "C2",
        stem: "Fitur kecerdasan buatan (AI) pada software video editing modern yang memungkinkan editor memotong video hanya dengan cara menghapus teks dialog pada transkrip otomatis disebut...",
        options: [
          { key: "A", text: "Text-Based Editing" },
          { key: "B", text: "Motion Blur" },
          { key: "C", text: "Batch Render" },
          { key: "D", text: "Proxy Ingest" },
        ],
        correctKey: "A",
        explanation: "Text-Based Editing (seperti di Adobe Premiere Pro dan DaVinci Resolve) secara otomatis mentranskripsi audio dialog menjadi teks, di mana menghapus kalimat teks akan otomatis memotong klip video di timeline.",
      },
    ],
    materialCards: [
      {
        title: "Slide 1: Gelombang Revolusi AI di Sektor Audio Visual",
        content:
          "Kecerdasan Buatan (Artificial Intelligence / AI) telah bertransformasi dari sekadar alat analisis data menjadi entitas kreatif generatif (Generative AI) yang mampu memproduksi teks naskah, musik orkestra, gambar fotorealistik, hingga klip video sinematik.\n\nBagi insan broadcasting dan perfilman, AI bukanlah ancaman pemusnah, melainkan 'asisten super' (co-pilot) yang membebaskan kreator dari pekerjaan teknis monoton agar fokus pada kedalaman rasa dan pesan kemanusiaan.",
        didYouKnow: "Software video editing modern kini dapat menghapus kebisingan suara latar lalu lintas (noise reduction) dan mengisolasi vokal jernih hanya dalam waktu 3 detik berkat model AI vokal.",
      },
      {
        title: "Slide 2: Peta Penerapan AI di Tiga Fase Produksi BCF",
        content:
          "Integrasi AI dalam seluruh rantai nilai produksi:\n\n1. Pra-Produksi: Brainstorming premis naskah, riset fakta, pembuatan sketsa storyboard visual (Midjourney/DALL-E), dan breakdown anggaran otomatis.\n2. Produksi: Framing kamera otomatis (AI tracking pan-tilt PTZ), penyesuaian pencahayaan pintar, dan monitoring audio noise cancelation.\n3. Pascaproduksi: Text-Based Editing, auto-subtitle, deteksi wajah untuk color grading, rotoscoping otomatis, dan audio voice enhancement.",
      },
      {
        title: "Slide 3: Generative AI untuk Penulisan Ide & Naskah",
        content:
          "Bagaimana scriptwriter berkolaborasi dengan Large Language Models (LLMs):\n\n• Prompt Engineering Naskah: Memberi instruksi spesifik: 'Buatkan premis drama 3 babak tentang juru kamera pemalu yang mengungkap kasus korupsi di desanya dengan nuansa misteri gelap.'\n• Pengayaan Dialog: Mencari alternatif idiom atau dialek lokal tertentu.\n• Batasan: AI tidak memiliki empati jiwa manusia; naskah mentah AI sering kali klise, datar, dan membutuhkan sentuhan emosional penulis manusia.",
      },
      {
        title: "Slide 4: Storyboarding & Konsep Seni Visual Instan",
        content:
          "Menghemat waktu pra-produksi berminggu-minggu:\n\n• Dulu sutradara harus menyewa ilustrator profesional berhari-hari untuk menggambar sketsa papan cerita (storyboard).\n• Kini sutradara dapat mengetikkan deskripsi shot (misal: 'Low angle shot, cinematic lighting, rain reflections, 35mm lens anamorphic') ke generator gambar AI untuk memvisualisasikan angle kamera dalam hitungan detik bagi kru DoP.",
      },
      {
        title: "Slide 5: Fitur AI di Software Editing NLE Modern",
        content:
          "Peningkatan efisiensi editing hingga 500%:\n\n• Text-Based Editing: Menghapus kata 'ehm', jeda hening, atau kalimat salah pada transkrip teks langsung memotong footage di timeline.\n• Auto-Reframe: Secara cerdas mengenali subjek utama dalam video horizontal 16:9 dan otomatis memotongnya ke format vertikal 9:16 untuk TikTok tanpa subjek terpotong.\n• Scene Edit Detection: Memotong file video panjang menjadi klip-klip terpisah secara otomatis berdasarkan perpindahan shot kamera.",
      },
      {
        title: "Slide 6: AI Audio Enhancement & Voice Cloning",
        content:
          "Penyempurnaan tata suara berbasis jaringan saraf tiruan:\n\n• Speech Enhancement: Menghilangkan gema ruangan (reverb) dan desis angin kencang sehingga rekaman mic smartphone terdengar seperti mic studio kondensor jutaan rupiah.\n• AI Voice Over (Text-to-Speech): Menghasilkan suara narator profesional multibahasa dengan intonasi natural.\n• Voice Cloning Etis: Mengkloning suara narator asli untuk merekam revisi satu kata yang terlewat tanpa perlu memanggil artis kembali ke studio.",
      },
      {
        title: "Slide 7: Color Grading Otomatis & AI Rotoscoping",
        content:
          "Otomasi pekerjaan tersulit di pascaproduksi:\n\n• Color Match AI: Menyelaraskan warna rekaman dari 3 kamera berbeda merk (Sony, Canon, Blackmagic) hanya dengan 1 klik tombol referensi.\n• Magic Mask / AI Roto: Menyeleksi tubuh aktor atau benda bergerak tanpa perlu memotong manual frame-demi-frame (rotoscoping) untuk memisahkan latar belakang.",
      },
      {
        title: "Slide 8: Generative Video: Text-to-Video & Image-to-Video",
        content:
          "Lompatan teknologi generasi terbaru (Sora, Runway Gen-2, Pika Labs):\n\n• Mampu menciptakan klip video fotorealistik 5-10 detik hanya dari prompt teks atau foto statis.\n• Sangat berguna untuk membuat shot pemandangan drone (aerial B-roll), visual efek fantasi, atau simulasi latar panggung virtual sebelum syuting sungguhan.",
      },
      {
        title: "Slide 9: Bahaya Disinformasi & Ancaman Deepfake",
        content:
          "Sisi gelap manipulasi AI di dunia penyiaran:\n\n• Video Deepfake Tokoh Publik: Merekayasa video presiden atau tokoh masyarakat menyatakan perang atau penipuan finansial dengan sinkronisasi bibir sempurna.\n• Ancaman Jurnalisme: Mengikis kepercayaan masyarakat terhadap bukti rekaman video: 'Apakah video ini asli atau rekayasa AI?'.",
      },
      {
        title: "Slide 10: Teknik Verifikasi & Deteksi Video Deepfake",
        content:
          "Bagaimana jurnalis TV mendeteksi kepalsuan video AI:\n\n• Amati Kedipan Mata & Batas Wajah: Video deepfake sering kali menghasilkan kedipan mata yang tidak wajar atau bayangan blur di sekitar garis rahang dan telinga.\n• Ketidaksinkronan Gigi & Lidah: Artikulasi pengucapan huruf konsonan sering kali tampak seperti karet leleh.\n• Software Forensik Media: Memeriksa metadata file dan artefak frekuensi piksel digital.",
      },
      {
        title: "Slide 11: Mogok Kerja Hollywood & Isu Hak Cipta Gambar Aktor",
        content:
          "Pelajaran dari sengketa serikat pekerja film AS (SAG-AFTRA 2023):\n\n• Produser sempat berencana memindai (3D scan) tubuh aktor figuran selama 1 hari, lalu menggunakan kembaran digital AI mereka selamanya di film lain tanpa membayar honor tambahan.\n• Kesepakatan Akhir: Studio dilarang menggunakan replika digital AI aktor tanpa persetujuan eksplisit tertulis dan kompensasi royalti yang adil.",
      },
      {
        title: "Slide 12: Etika Transparansi Konten AI dalam Jurnalisme",
        content:
          "Pedoman kantor berita internasional (AP, Reuters, BBC):\n\n• Dilarang keras menggunakan foto/video buatan AI untuk menggambarkan peristiwa berita nyata di lapangan.\n• Jika AI digunakan untuk membuat grafis ilustrasi konsep, wajib diberi label penjelas permanen di layar: 'Visual Rekayasa Kecerdasan Buatan'.\n• Integritas fakta adalah mahkota profesi jurnalis penyiaran.",
      },
      {
        title: "Slide 13: Keterampilan Baru yang Wajib Dikuasai: Prompt Engineering",
        content:
          "Keahlian menyusun instruksi teks yang presisi bagi model AI:\n\n• Berikan Konteks: Siapa Anda, siapa target audiens, dan apa tujuan karyanya.\n• Spesifikasikan Parameter: Format rasio (16:9), jenis kamera (Arri Alexa 65), focal length (50mm), lighting style (Chiaroscuro), tone warna.\n• Iterasi Berkala: Jangan puas dengan hasil pertama; ubah variabel prompt untuk mendapatkan hasil terbaik.",
      },
      {
        title: "Slide 14: Nilai Hakiki Manusia yang Tak Bisa Digantikan AI",
        content:
          "Apa yang membuat sineas dan juru kamera manusia tetap tak tergantikan:\n\n1. Empati & Pengalaman Hidup: AI tidak pernah merasakan jatuh cinta, patah hati, lapar, atau berduka cita.\n2. Intuisi Spontan di Lokasi: Menangkap momen tak terduga (misal: air mata tulus narasumber atau tawa spontan anak kecil).\n3. Kepemimpinan & Rasa Saling Percaya di Set Syuting.",
      },
      {
        title: "Slide 15: Studi Komparasi: Alur Kerja Tradisional vs Alur Kerja Berbantuan AI",
        content:
          "Perbandingan efisiensi waktu produksi video dokumenter 10 menit:\n\n• Alur Tradisional: Transkrip audio manual (8 jam), pencarian footage B-roll (12 jam), peredaman noise audio (4 jam) = Total 24 jam kerja kasar.\n• Alur AI-Assisted: Auto-transcribe AI (10 menit), noise removal AI (2 menit), B-roll visual generation (30 menit) = Menghemat waktu hingga 80% untuk fokus pada penyempurnaan cerita.",
      },
      {
        title: "Slide 16: Troubleshooting AI: Mengatasi 'Halusinasi' Fakta pada Naskah",
        content:
          "Kendala: AI mengarang data sejarah, nama narasumber, atau pasal hukum yang sebenarnya tidak ada (AI Hallucination).\n\nSOP Verifikasi Wajib:\n1. Jangan pernah menelan mentah-mentah data statistik atau nama tokoh dari ChatGPT/Claude.\n2. Selalu lakukan 'Cross-Check' (cek silang) dengan sumber buku resmi, jurnal ilmiah, atau wawancara langsung narasumber ahli di dunia nyata.",
      },
      {
        title: "Slide 17: Studi Kasus Riil: Skandal Gambar Hoaks Ledakan Pentagon oleh Akun Centang Biru",
        content:
          "Sebuah gambar palsu buatan AI yang memperlihatkan asap hitam di gedung Pentagon beredar luas di media sosial dan sempat memicu penurunan indeks bursa saham Wall Street:\n\nFakta Jurnalisme:\nStasiun TV terkemuka tidak langsung menyiarkannya karena tim redaksi memverifikasi ketiadaan laporan kepolisian lokal dan menemukan keganjilan pada pagar gedung yang tampak meleleh khas artefak generator AI.",
      },
      {
        title: "Slide 18: Analisis Pembelajaran bagi Calon Produser Berita",
        content:
          "Refleksi dari fenomena hoaks AI:\n\n1. Verifikasi Sebelum Siar (Check and Re-check): Kecepatan tayang tidak boleh mengorbankan akurasi kebenaran fakta.\n2. Literasi Digital Media: Pelajar BCF harus menjadi garda terdepan masyarakat dalam membedakan karya dokumentasi nyata dari manipulasi digital.",
      },
      {
        title: "Slide 19: Masa Depan: Personalized AI Interactive Movies",
        content:
          "Visi industri film 10 tahun ke depan:\n\n• Film yang jalan cerita dan dialog karakternya berubah secara realtime menyesuaikan detak jantung dan emosi penonton yang terdeteksi via smartwatch sensor.\n• Lokasi syuting dapat diganti secara instan (dari kota Paris ke pegunungan salju Himalaya) menggunakan Neural Radiance Fields (NeRF).",
      },
      {
        title: "Slide 20: Rangkuman & Sikap Bijak Menghadapi AI",
        content:
          "Poin Kunci Pembelajaran:\n1. AI adalah alat percepatan produktivitas yang sangat hebat jika berada di tangan kreator beretika.\n2. Manfaatkan AI untuk efisiensi naskah, storyboarding, dan editing, namun pertahankan keaslian emosi manusia.\n3. Jaga kejujuran karya dan waspadai bahaya disinformasi deepfake di ruang publik.\n\nAction Plan:\nPraktikkan penggunaan Text-Based Editing dan pembuatan visual moodboard AI pada lembar kerja LKPD E2-K4!",
      },
    ],
    video: {
      title: "Implementasi AI dalam Alur Kerja Produksi Film dan Siaran Televisi Modern",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      guide:
        "Perhatikan demonstrasi penggunaan Generative AI untuk menyusun storyboard visual dan teknik Text-Based Editing pada software NLE. Catat diskusi mengenai batasan etika penggunaan replika digital suara dan wajah manusia.",
    },
    gamePairs: [
      { id: 1, left: "Deepfake", right: "Rekayasa sintetis wajah dan suara berbasis kecerdasan buatan" },
      { id: 2, left: "Text-Based Editing", right: "Fitur memotong klip video melalui penyuntingan teks transkrip" },
      { id: 3, left: "Prompt Engineering", right: "Keahlian merumuskan instruksi teks terstruktur untuk model AI" },
      { id: 4, left: "AI Hallucination", right: "Kecenderungan AI mengarang fakta palsu yang tampak meyakinkan" },
      { id: 5, left: "Magic Mask", right: "Teknologi isolasi subjek bergerak otomatis tanpa rotoscoping manual" },
    ],
    caseTitle: "Studi Kasus: Membedakan Berita Video Asli dengan Rekayasa Deepfake",
    caseScenario:
      "Menjelang pemilihan ketua OSIS sekolah, beredar video berdurasi 15 detik di WhatsApp yang memperlihatkan salah satu kandidat tampak mengucapkan kata-kata kasar dan melecehkan panitia. Video tersebut membuat gaduh sekolah, namun sang kandidat bersumpah ia tidak pernah mengucapkannya.",
    caseInstruction:
      "Sebagai tim multimedia jurnalisme sekolah, lakukan investigasi forensik digital: indikator visual dan audio apa yang Anda periksa untuk membuktikan apakah video tersebut rekaman asli atau hasil rekayasa deepfake AI?",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Fitur pada software NLE yang secara otomatis mentranskripsi dialog video menjadi teks dan memungkinkan editor memotong video dengan cara menghapus teksnya disebut...",
        options: [
          { key: "A", text: "Text-Based Editing" },
          { key: "B", text: "Motion Blur" },
          { key: "C", text: "Batch Render" },
          { key: "D", text: "Linear Editing" },
        ],
        correctKey: "A",
        explanation: "Text-Based Editing menghubungkan transkripsi teks dengan timeline video, memudahkan rough cut dialog hanya dengan menyunting dokumen teks.",
      },
      {
        id: 2,
        bloom: "C4",
        stem: "Tindakan etis yang paling benar ketika seorang kreator menggunakan visual pemandangan hasil buatan AI generatif dalam sebuah video dokumenter adalah...",
        options: [
          { key: "A", text: "Mengklaim bahwa ia sendiri yang terbang naik helikopter untuk merekamnya" },
          { key: "B", text: "Mencantumkan keterangan teks penjelas 'Visual Ilustrasi Rekayasa AI' pada layar agar tidak menyesatkan penonton" },
          { key: "C", text: "Menghapus nama software pembuatnya" },
          { key: "D", text: "Menjual video tersebut ke stasiun TV sebagai rekaman langsung" },
        ],
        correctKey: "B",
        explanation: "Transparansi adalah etika utama; penonton berhak mengetahui apakah suatu gambar merupakan dokumentasi nyata lapangan atau hasil rekayasa kecerdasan buatan.",
      },
    ],
    lkpd: {
      title: "LKPD E2-K4: Eksplorasi Text-Based Editing & Pembuatan Moodboard AI",
      objective: "Mempraktikkan Text-Based Editing pada software NLE dan merancang visual moodboard menggunakan generator AI.",
      tools: ["Software NLE dengan Fitur Auto-Transcribe", "AI Image Generator", "Footage Wawancara"],
      steps: [
        "Import footage wawancara dialog ke dalam software NLE dan jalankan fitur Auto-Transcription.",
        "Lakukan editing rough cut hanya dengan menyeleksi dan menghapus kalimat filler/salah pada teks transkrip.",
        "Buka generator gambar AI dan buat 4 frame visual moodboard menggunakan prompt teknis kamera (angle, lens, lighting).",
        "Buat laporan perbandingan efisiensi waktu kerja dan refleksi etika penggunaan AI dalam karya.",
      ],
      outputFormat: "Video Rough Cut Ter-edit dan Lembar Moodboard AI format PDF.",
    },
    journalQuestions: {
      q1: "Fitur AI apa yang paling membantu mempercepat proses belajar Anda di bidang audio visual?",
      q2: "Bagaimana perasaan Anda jika suatu hari suara atau wajah Anda ditiru oleh deepfake tanpa izin?",
      q3: "Nilai kepribadian apa yang membedakan sutradara manusia sejati dari kecerdasan buatan?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi pemanfaatan Generative AI dalam pra, produksi, dan pascaproduksi video.",
      "Mampu mengoperasikan Text-Based Editing dan alat bantu visual AI secara produktif.",
      "Mampu mendeteksi potensi disinformasi deepfake dan menerapkan etika transparansi karya digital.",
    ],
  },

  // =========================================================================
  // KONTEN 5: Isu Pemanasan Global & Keberlanjutan di Industri Media
  // =========================================================================
  {
    id: "e2-k5",
    order: 5,
    title: "Isu Pemanasan Global & Keberlanjutan di Industri Media",
    shortTitle: "Pemanasan Global & Media",
    summary:
      "Gerakan produksi film hijau (Green Shooting / Sustainable Production), kalkulasi jejak karbon syuting, efisiensi energi lampu LED vs tungsten, dan penerapan set ramah lingkungan.",
    kompetensi: [
      "Menganalisis dampak lingkungan dan jejak karbon dari aktivitas produksi film dan pertelevisian.",
      "Menerapkan prinsip Green Shooting (Zero Waste Set, Paperless, Efisiensi Energi).",
      "Merancang SOP produksi ramah lingkungan untuk kegiatan praktik sekolah.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menguraikan faktor penyumbang emisi karbon terbesar dalam produksi film/TV.",
      "Peserta didik mampu menghitung perbandingan konsumsi daya listrik lampu studio LED vs tungsten tradisional.",
      "Peserta didik mampu menyusun rencana aksi 'Green Production Plan' untuk syuting karya audio visual.",
    ],
    hookQuestion:
      "Tahukah Anda bahwa sebuah produksi film layar lebar blockbuster rata-rata menghasilkan lebih dari 2.800 ton emisi karbon dioksida—setara dengan konsumsi listrik ratusan rumah tangga selama setahun penuh?",
    hookContext:
      "Industri hiburan menyumbang polusi yang tidak sedikit: dari ribuan botol plastik sekali pakai di lokasi syuting, genset diesel berasap pekat, hingga pembongkaran panggung dekorasi kayu yang berakhir di tempat pembuangan sampah.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C1",
        stem: "Inisiatif global untuk mengurangi dampak lingkungan dan emisi karbon dalam seluruh tahapan pembuatan film dan siaran televisi dikenal dengan istilah...",
        options: [
          { key: "A", text: "Green Shooting / Sustainable Filmmaking" },
          { key: "B", text: "Blue Screen Production" },
          { key: "C", text: "Golden Hour Shoot" },
          { key: "D", text: "Black and White Cinema" },
        ],
        correctKey: "A",
        explanation: "Green Shooting atau Sustainable Filmmaking adalah gerakan industri perfilman untuk meminimalkan jejak karbon, limbah plastik, dan pemborosan energi saat produksi.",
      },
      {
        id: 2,
        bloom: "C2",
        stem: "Keunggulan lampu studio LED Chip-on-Board (COB) modern dibandingkan lampu tungsten halogen tradisional dalam perspektif lingkungan hidup adalah...",
        options: [
          { key: "A", text: "Lampu LED mengonsumsi listrik hingga 80% lebih hemat dan tidak menghasilkan radiasi panas berlebih" },
          { key: "B", text: "Lampu LED harus dibuang setiap kali selesai syuting" },
          { key: "C", text: "Lampu LED membutuhkan pendingin es batu" },
          { key: "D", text: "Lampu LED tidak membutuhkan daya listrik sama sekali" },
        ],
        correctKey: "A",
        explanation: "Lampu LED mengubah mayoritas energi listrik menjadi cahaya (bukan panas), sehingga menghemat konsumsi daya genset secara signifikan dan mengurangi beban AC studio pendingin.",
      },
    ],
    materialCards: [
      {
        title: "Slide 1: Pengantar Gerakan 'Green Filmmaking' Global",
        content:
          "Krisis iklim global (Global Warming) menuntut tanggung jawab etis dari seluruh sektor industri, termasuk dunia hiburan dan penyiaran.\n\nProduksi audio visual masa kini tidak lagi hanya dinilai dari keindahan visual di layar, tetapi juga dari bagaimana karya tersebut dibuat: apakah proses syutingnya merusak alam atau justru menerapkan keberlanjutan lingkungan (Environmental Sustainability).",
        didYouKnow: "Festival film internasional seperti BAFTA di Inggris kini mewajibkan setiap produksi film menghitung jejak karbon menggunakan kalkulator 'Albert' sebagai syarat nominasi penghargaan.",
      },
      {
        title: "Slide 2: Anatomi Jejak Karbon (Carbon Footprint) Produksi Film",
        content:
          "Penyumbang emisi gas rumah kaca terbesar dalam produksi:\n\n1. Transportasi & Bahan Bakar (50%): Penerbangan kru luar kota, konvoi truk logistik, dan bahan bakar solar genset outdoor.\n2. Konsumsi Energi Studio (30%): Pencahayaan lampu berkekuatan puluhan ribu Watt dan pendingin udara (AC) studio raksasa nonstop.\n3. Limbah Material & Katering (20%): Ribuan botol air mineral plastik, sisa makanan terbuang, dan kayu dekorasi set.",
      },
      {
        title: "Slide 3: Efisiensi Energi: Revolusi Lampu LED vs Tungsten",
        content:
          "Perbandingan efisiensi teknologi pencahayaan studio:\n\n• Lampu Tungsten Halogen 2000 Watt: Menghasilkan panas ekstrem, membakar 2 kWh energi per jam, membutuhkan pendingin ruangan ekstra dingin.\n• Lampu LED COB 300 Watt: Menghasilkan tingkat terang (Lux) setara tungsten 2000W, konsumsi listrik 85% lebih rendah, dapat ditenagai baterai V-Mount portabel tanpa genset diesel berasap.",
      },
      {
        title: "Slide 4: Transisi ke Energi Terbarukan: Solar Generator & Baterai Bank",
        content:
          "Inovasi pasokan daya listrik di lokasi syuting alam terbuka:\n\n• Genset Diesel Konvensional: Bising, mencemari rekaman audio boom mic, dan menghasilkan asap karbon monoksida beracun.\n• Portable Power Station (Baterai Lithium LiFePO4): Hening 0 dB, bebas emisi gas buang, dan dapat diisi ulang menggunakan panel surya (solar panel) lipat.",
      },
      {
        title: "Slide 5: Gerakan 'Zero Single-Use Plastic' di Lokasi Syuting",
        content:
          "Menghentikan gunungan sampah botol plastik di set syuting:\n\n• Kebiasaan Buruk: Dalam sehari syuting dengan 50 kru, rata-rata terbuang lebih dari 150 botol plastik air mineral setengah minum yang terlupakan pemiliknya.\n• Solusi Green Set: Setiap kru dan talent wajib membawa botol minum pribadi (tumbler) bertuliskan nama masing-masing; tim katering menyediakan galon air isi ulang mandiri.",
      },
      {
        title: "Slide 6: 'Paperless Production': Naskah & Call Sheet Digital",
        content:
          "Menyelamatkan pohon dari pemborosan kertas revisi naskah:\n\n• Tradisi Lama: Mencetak ratusan lembar naskah dan call sheet setiap ada revisi kecil naskah (Draft 1 s/d Final Draft).\n• Standar Baru: Seluruh naskah, breakdown, dan call sheet dibagikan dalam format PDF terenkripsi via tablet digital (iPad/Android) menggunakan software seperti ScriptE atau GoodNotes.",
      },
      {
        title: "Slide 7: Desain Set Dekorasi Modular & Ramah Lingkungan",
        content:
          "Konsep konstruksi artistik studio berkelanjutan:\n\n• Dilarang menggunakan styrofoam sekali pakai yang tidak dapat terurai ratusan tahun.\n• Gunakan dinding panel kayu modular sistem pasak/baut (bukan dipaku mati) sehingga dapat dibongkar-pasang dan dicat ulang untuk program TV berikutnya.\n• Properti sewa (rental props) lebih diutamakan daripada membeli barang baru yang akan dibuang pasca-syuting.",
      },
      {
        title: "Slide 8: Katering Berkelanjutan & Manajemen Sampah Makanan",
        content:
          "Praktik ramah lingkungan departemen konsumsi:\n\n• Gunakan kotak makan dan sendok-garpu cuci pakai (bukan kardus styrofoam dan sendok plastik sekali buang).\n• Perhitungan porsi presisi sesuai jumlah kru hadir agar tidak ada sisa nasi terbuang.\n• Bekerja sama dengan bank sampah organik lokal untuk mengolah sisa makanan menjadi kompos pupuk.",
      },
      {
        title: "Slide 9: Virtual Production (LED Wall) sebagai Solusi Hemat Emisi",
        content:
          "Bagaimana teknologi layar LED mengurangi jejak karbon transportasi:\n\n• Dulu kru harus menerbangkan puluhan orang ke gurun pasir atau luar negeri untuk adegan 2 menit (menghasilkan puluhan ton avtur emisi pesawat).\n• Kini syuting dapat dilakukan di dalam studio berlatar dinding LED virtual dengan visual gurun fotorealistik tanpa ada satu pun kru yang harus bepergian jauh.",
      },
      {
        title: "Slide 10: Jabatan Baru di Industri: 'Eco-Supervisor' / Green Runner",
        content:
          "Peluang profesi baru ramah lingkungan di industri perfilman:\n\n• Bertanggung jawab mengaudit tempat sampah pilah di set syuting.\n• Mematikan lampu studio dan AC yang menyala di ruangan kosong saat jeda makan.\n• Menghitung total jejak emisi karbon proyek untuk sertifikasi kelayakan tayang festival.",
      },
      {
        title: "Slide 11: Transportasi Efisien: Carpooling & Shuttle Kru",
        content:
          "Mengurangi kepadatan kendaraan menuju lokasi syuting:\n\n• Melarang kru berangkat sendiri-sendiri membawa mobil pribadi ke lokasi yang sama.\n• Mengatur titik kumpul (basecamp) dan menyediakan minibus van bersama (carpooling) untuk menghemat bahan bakar dan mengurangi kemacetan jalanan.",
      },
      {
        title: "Slide 12: Dampak Pemanasan Global terhadap Jadwal Syuting Lapangan",
        content:
          "Perubahan iklim nyata dirasakan oleh juru kamera di lapangan:\n\n• Cuaca ekstrem tak terprediksi (hujan badai mendadak di musim kemarau) membuat jadwal syuting sering tertunda.\n• Gelombang panas ekstrem (heatwave) membuat sensor kamera mengalami overheat dan kru rentan dehidrasi stroke panas (heatstroke).",
      },
      {
        title: "Slide 13: Kampanye Pesan Lingkungan Melalui Konten Kreatif",
        content:
          "Kekuatan media audio visual sebagai sarana edukasi publik:\n\n• Memasukkan pesan pelestarian alam secara halus ke dalam dialog drama (bukan menggurui), misalnya karakter protagonis membiasakan diri memilah sampah atau mematikan lampu kamar.\n• Memproduksi film dokumenter yang mengangkat perjuangan komunitas peduli sungai dan hutan adat.",
      },
      {
        title: "Slide 14: K3 Lingkungan: Pengelolaan Asap Efek Khusus (Fog & Haze)",
        content:
          "Keselamatan pernapasan di studio bertata cahaya sinematik:\n\n• Mesin asap (Fog Machine) sering digunakan untuk memunculkan sorot berkas lampu (volumetric light beam).\n• Gunakan cairan asap berbasis air murni (Water-based Haze) yang aman bagi paru-paru kru dan aktor.\n• Dilarang menggunakan cairan asap berbasis minyak (Oil-based) di ruang tertutup karena meninggalkan residu licin dan memicu gangguan pernapasan.",
      },
      {
        title: "Slide 15: Studi Komparasi: Syuting Tradisional Boros vs Produksi Hijau (Green Production)",
        content:
          "Perbandingan efisiensi biaya dan sampah dalam 7 hari syuting:\n\n• Produksi Tradisional: Menghasilkan 1.200 botol plastik, 500 lembar kertas naskah, genset solar Rp 15 juta, 3 truk sampah puing dekorasi.\n• Produksi Hijau: 0 botol plastik (tumbler), 0 kertas (tablet), baterai bank solar Rp 4 juta, dekorasi modular sewa = Menghemat anggaran produksi hingga 25% sekaligus melestarikan alam.",
      },
      {
        title: "Slide 16: Troubleshooting Lapangan: Mengatasi Kamera 'Overheat' Akibat Panas Ekstrem",
        content:
          "Jika kamera mati mendadak dengan peringatan suhu panas di lokasi outdoor:\n\n1. Segera teduhkan kamera di bawah payung hitam reflektif (bukan terpapar langsung terik matahari).\n2. Buka layar putar LCD menjauh dari bodi kamera agar udara sirkulasi lancar.\n3. Tempelkan cooling fan eksternal di belakang sensor kamera.\n4. Jangan memasukkan kamera ke lemari es/freezer karena uap embun dingin akan mengembun merusak optik lensa di dalam.",
      },
      {
        title: "Slide 17: Studi Kasus Riil: Penerapan 'Green Shooting' di Film Layar Lebar Indonesia",
        content:
          "Sebuah film layar lebar nasional beranggaran besar menerapkan protokol hijau penuh selama 30 hari syuting di Yogyakarta:\n\nFakta Keberhasilan:\nMereka membagikan tumbler khusus kepada 120 kru, menyewa panel surya untuk basecamp, dan mendonasikan kayu sisa dekorasi ke bengkel pengrajin mebel lokal. Film ini berhasil meraih sertifikasi 'Green Production' pertama dan memenangkan penghargaan tata artistik ramah lingkungan.",
      },
      {
        title: "Slide 18: Analisis Faktor Kunci Kesuksesan Produksi Hijau",
        content:
          "Kunci keberhasilan terletak pada kepemimpinan Produser:\n\n1. Komitmen dari Puncak: Produser dan Sutradara menjadi teladan disiplin membawa tumbler dan tidak menggunakan kertas naskah.\n2. Edukasi Kru Baru: Memberikan safety & eco-briefing 5 menit setiap pagi sebelum kamera bergulir.",
      },
      {
        title: "Slide 19: Tren Masa Depan: Sertifikasi 'Carbon Neutral' untuk Karya TV/Film",
        content:
          "Arah regulasi perfilman masa depan:\n\n• Skema 'Carbon Offset': Stasiun TV dan rumah produksi menanam ribuan bibit pohon mangrove untuk menebus emisi karbon yang tidak dapat dihindari saat proses syuting berlangsung.\n• Investor dan lembaga dana internasional memprioritaskan pendanaan pada proyek film yang memiliki sertifikasi jejak karbon rendah.",
      },
      {
        title: "Slide 20: Rangkuman & Action Plan 'Green Protocol' Sekolah",
        content:
          "Poin Kunci Pembelajaran:\n1. Setiap rekaman video memiliki jejak ekologis yang berdampak pada pemanasan global.\n2. Prinsip Green Shooting menghemat anggaran produksi dan melindungi kelestarian bumi.\n3. Jadilah generasi sineas muda yang peduli lingkungan dan bangga menerapkan budaya nol sampah.\n\nAction Plan:\nSusun 'Green Shooting Checklist' untuk proyek syuting video kelompok kelas Anda pada lembar panduan LKPD E2-K5!",
      },
    ],
    video: {
      title: "Gerakan Green Production: Mengurangi Emisi dan Sampah di Lokasi Syuting",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      guide:
        "Perhatikan bagaimana tim produksi film mengeliminasi botol plastik sekali pakai, menggunakan lampu hemat energi LED, dan mengelola sisa material panggung dekorasi agar tidak mencemari lingkungan.",
    },
    gamePairs: [
      { id: 1, left: "Green Shooting", right: "Praktik pembuatan film ramah lingkungan dan minim emisi karbon" },
      { id: 2, left: "Lampu LED COB", right: "Lampu hemat energi 85% lebih dingin dibanding tungsten" },
      { id: 3, left: "Paperless Call Sheet", right: "Distribusi naskah dan jadwal harian dalam format digital tablet" },
      { id: 4, left: "Carbon Offset", right: "Penanaman pohon untuk menebus emisi karbon hasil produksi film" },
      { id: 5, left: "Water-based Haze", right: "Efek asap atmosfer aman lingkungan bebas minyak berbahaya" },
    ],
    caseTitle: "Studi Kasus: Menyusun Rencana 'Zero Waste' Syuting Video Pendek 3 Hari",
    caseScenario:
      "Kelompok produksi Anda yang beranggotakan 15 kru akan melakukan syuting video pendek selama 3 hari di area hutan pinus wisata. Pengelola hutan menetapkan aturan ketat: 'Dilarang meninggalkan sampah plastik sekecil apa pun dan dilarang menyalakan genset bising'.",
    caseInstruction:
      "Rancanglah SOP 'Green Shooting' untuk kelompok Anda: bagaimana strategi penyediaan konsumsi tanpa sampah plastik, pasokan daya lampu kamera tanpa genset diesel, dan prosedur pembersihan set sebelum meninggalkan hutan!",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Alasan utama mengapa teknologi lampu LED COB modern jauh lebih ramah lingkungan dibandingkan lampu tungsten halogen di studio televisi adalah...",
        options: [
          { key: "A", text: "Lampu LED dapat berubah warna menjadi pelangi" },
          { key: "B", text: "Lampu LED mengonversi energi listrik menjadi cahaya secara efisien dengan panas minimal sehingga memangkas konsumsi daya listrik hingga lebih dari 80%" },
          { key: "C", text: "Lampu tungsten menghasilkan oksigen murni" },
          { key: "D", text: "Lampu LED tidak menggunakan kabel" },
        ],
        correctKey: "B",
        explanation: "Efisiensi konversi daya lampu LED menghasilkan penghematan listrik yang masif dan mengurangi kebutuhan pendingin AC studio, menekan jejak karbon operasional.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Langkah konkret yang paling mudah dan berdampak besar dalam menerapkan prinsip 'Green Shooting' di kalangan siswa SMK saat syuting adalah...",
        options: [
          { key: "A", text: "Membeli kamera baru setiap bulan" },
          { key: "B", text: "Mewajibkan seluruh kru membawa botol minum tumbler pribadi dan mengganti naskah kertas cetak dengan berkas digital di smartphone/tablet" },
          { key: "C", text: "Tidak memberi makan kru selama syuting" },
          { key: "D", text: "Syuting dalam kegelapan total tanpa lampu" },
        ],
        correctKey: "B",
        explanation: "Mengeliminasi botol plastik sekali pakai dan menerapkan naskah paperless adalah langkah nyata paling efektif memangkas limbah harian di set syuting sekolah.",
      },
    ],
    lkpd: {
      title: "LKPD E2-K5: Perancangan Protokol 'Green Production Plan' Syuting Sekolah",
      objective: "Menyusun pedoman kerja ramah lingkungan untuk kegiatan praktik produksi audio visual kelompok.",
      tools: ["Checklist Green Shooting", "Kalkulator Emisi Karbon Sederhana"],
      steps: [
        "Identifikasi 4 pos potensi limbah pada rencana syuting kelompok Anda (Konsumsi, Naskah Kertas, Listrik Lampu, Transportasi).",
        "Rancang alternatif ramah lingkungan untuk masing-masing pos (misal: sistem tumbler, naskah digital, carpooling).",
        "Buat poster infografis 'Aturan Set Bebas Sampah' yang akan ditempel di basecamp syuting.",
        "Hitung estimasi penghematan biaya yang didapat dari penerapan produksi hijau tersebut.",
      ],
      outputFormat: "Dokumen Protokol Green Production dan Poster Infografis format PDF.",
    },
    journalQuestions: {
      q1: "Perubahan kebiasaan kecil apa yang paling menantang bagi Anda untuk menerapkan syuting ramah lingkungan?",
      q2: "Mengapa kepedulian pada isu pemanasan global harus menjadi bagian dari karakter profesional insan perfilman?",
      q3: "Bagaimana cara Anda mengedukasi masyarakat mengenai pelestarian alam melalui karya audio visual yang Anda buat?",
    },
    kktpIndicators: [
      "Mampu menganalisis dampak lingkungan dan jejak karbon dari aktivitas produksi penyiaran.",
      "Mampu mengidentifikasi keunggulan efisiensi energi lampu LED dan pasokan daya baterai ramah lingkungan.",
      "Mampu merancang dokumen SOP Green Shooting dan pengelolaan limbah pada produksi audio visual.",
    ],
  },

  // =========================================================================
  // KONTEN 6: Ketenagakerjaan & Life Cycle Produk (Reuse & Recycle) di BCF
  // =========================================================================
  {
    id: "e2-k6",
    order: 6,
    title: "Ketenagakerjaan & Life Cycle Produk (Reuse & Recycle)",
    shortTitle: "Life Cycle & Ketenagakerjaan",
    summary:
      "Dinamika ketenagakerjaan industri kreatif, pengelolaan siklus hidup perangkat elektronik penyiaran (e-waste), daur ulang baterai litium, pemeliharaan jangka panjang, dan donasi aset.",
    kompetensi: [
      "Memahami siklus hidup produk (product life cycle) peralatan elektronik dan properti dekorasi.",
      "Menerapkan prosedur pengelolaan limbah berbahaya (B3) seperti baterai litium bekas kamera.",
      "Menganalisis regulasi ketenagakerjaan, hak pekerja lepas (freelance), dan budaya pemeliharaan alat.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menguraikan tahapan siklus hidup peralatan kamera dari pengadaan hingga pembuangan aman.",
      "Peserta didik mampu menerapkan SOP penanganan dan daur ulang limbah elektronik (e-waste) studio.",
      "Peserta didik mampu memahami hak-hak dasar ketenagakerjaan industri media (standar upah, jam kerja, jaminan keselamatan).",
    ],
    hookQuestion:
      "Ke mana perginya ribuan kamera video tua, pita kaset usang, dan baterai kamera yang sudah rusak setelah stasiun televisi menggantinya dengan perangkat baru?",
    hookContext:
      "Limbah elektronik (E-Waste) mengandung logam berat beracun seperti merkuri dan timbal yang dapat mencemari air tanah selama berabad-abad jika dibuang sembarangan ke tempat sampah biasa.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C1",
        stem: "Limbah peralatan elektronik seperti baterai kamera litium kembung, papan sirkuit IC, dan tabung CRT termasuk dalam kategori limbah...",
        options: [
          { key: "A", text: "B3 (Bahan Berbahaya dan Beracun)" },
          { key: "B", text: "Kompos Organik" },
          { key: "C", text: "Limbah Pertanian" },
          { key: "D", text: "Daur Ulang Alami" },
        ],
        correctKey: "A",
        explanation: "Limbah elektronik (E-waste) mengandung senyawa kimia berbahaya sehingga diklasifikasikan sebagai limbah B3 yang memerlukan penanganan daur ulang khusus.",
      },
      {
        id: 2,
        bloom: "C2",
        stem: "Tindakan yang paling tepat terhadap baterai kamera jenis Lithium-Ion yang fisiknya sudah menggembung (swollen battery) adalah...",
        options: [
          { key: "A", text: "Menusuknya dengan jarum agar kempis kembali" },
          { key: "B", text: "Segera berhenti menggunakannya, isolasi kutub terminalnya, dan serahkan ke tempat pengumpulan limbah elektronik resmi" },
          { key: "C", text: "Mengisinya dengan charger bertegangan tinggi" },
          { key: "D", text: "Merendamnya di dalam air es" },
        ],
        correctKey: "B",
        explanation: "Baterai litium kembung sangat berbahaya dan berisiko meledak atau terbakar hebat jika tertusuk atau diisi daya kembali; harus diamankan dan didaur ulang secara profesional.",
      },
    ],
    materialCards: [
      {
        title: "Slide 1: Pengantar Siklus Hidup Produk (Product Life Cycle) di BCF",
        content:
          "Setiap kamera, lampu, mikrofon, dan panel dekorasi studio memiliki rentang siklus hidup (Life Cycle):\n\n1. Pengadaan (Procurement & Investment)\n2. Penggunaan & Pemeliharaan Aktif (Operation & Preventive Maintenance)\n3. Penurunan Performa & Rekondisi (Depreciation & Repair)\n4. Purnatugas & Daur Ulang Aman (Decommissioning, Reuse, or Recycle).\n\nPengelolaan siklus hidup yang cerdas menghemat ratusan juta anggaran dan mencegah pencemaran lingkungan.",
        didYouKnow: "Sebuah lensa bioskop manual berkualitas tinggi dapat bertahan hingga 30 tahun dan nilainya justru naik, berbeda dengan bodi kamera digital yang usang dalam 4-5 tahun.",
      },
      {
        title: "Slide 2: Bahaya Limbah Elektronik (E-Waste) Penyiaran",
        content:
          "Komponen berbahaya di dalam perangkat broadcast bekas:\n\n• Timbal (Lead): Terdapat pada solderan papan sirkuit lama; merusak sistem saraf otak.\n• Merkuri & Kadmium: Pada lampu fluorescent studio dan baterai isi ulang ni-cad usang; memicu gagal ginjal.\n• Gas Rumah Kaca: Senyawa pendingin fluorin pada sistem chiller pendingin pemancar stasiun TV.\n• Dilarang keras membuang peralatan elektronik ke tempat sampah domestik umum.",
      },
      {
        title: "Slide 3: Prosedur Aman Penanganan Baterai Litium (Li-Ion / V-Mount)",
        content:
          "SOP perlakuan terhadap baterai kamera broadcast:\n\n• Cegah Kerusakan: Jangan pernah membiarkan baterai dalam kondisi kosong total (0%) berbulan-bulan; simpan dalam kapasitas 50% jika tidak dipakai lama.\n• Tanda Bahaya: Bodi baterai menggelembung, casing retak, atau suhu panas mendadak saat di-charge.\n• Terminal Isolation: Rekatkan selotip kertas pada pin konektor kuningan baterai sebelum disimpan di tong limbah B3 agar tidak memicu korsleting percikan api.",
      },
      {
        title: "Slide 4: Strategi 'Reuse' (Guna Ulang) Peralatan Kamera Lama",
        content:
          "Memberikan nafas kedua bagi peralatan lawas:\n\n• Kamera DSLR/Mirrorless Generasi Lama: Tidak lagi dipakai untuk syuting utama 4K, namun sangat handal dialihfungsikan menjadi kamera webcam podcast studio, kamera pengawas angle tetap (overhead rig), atau alat praktikum dasar siswa kelas X.\n• Tripod Tua: Diganti mounting head-nya dan dipakai sebagai dudukan monitor kontrol atau penopang lampu.",
      },
      {
        title: "Slide 5: Pemeliharaan Preventif (Preventive Maintenance) Penunjang Usia Alat",
        content:
          "Merawat lebih murah daripada membeli baru:\n\n• Pembersihan Sensor Kamera Berkala: Menggunakan swab sensor khusus di lingkungan bebas debu.\n• Pelumasan Mekanik Fluid Head: Melumasi engsel tripod dan zoom servo lensa dengan minyak silikon khusus secara berkala.\n• Dry Cabinet Control: Menjaga stabilitas kelembapan 45% RH setiap hari untuk mencegah investasi lensa bernilai puluhan juta rupiah hancur karena jamur kaca.",
      },
      {
        title: "Slide 6: Daur Ulang Material Panggung Dekorasi & Set Artistik",
        content:
          "Menutup siklus limbah divisi seni (Art Department):\n\n• Kayu Kaso & Rangka Panggung: Dipilah, dicabut pakunya, dan disimpan untuk konstruksi set adegan berikutnya.\n• Kain Backdrop Beludru: Dicuci dan diwarnai ulang (dyeing) untuk kebutuhan gorden adegan rumah antik.\n• Logam Rangka Truss: Didaur ulang melalui peleburan besi baja lokal.",
      },
      {
        title: "Slide 7: Donasi Alat & Tanggung Jawab Sosial Perusahaan (CSR)",
        content:
          "Siklus purnatugas alat stasiun televisi komersial:\n\n• Ketika stasiun TV nasional memperbarui studio ke sistem 4K IP, peralatan HD lama yang masih sangat layak fungsi didonasikan ke SMK Broadcasting atau universitas daerah.\n• Memberikan kesempatan bagi siswa kejuruan untuk berlatih menggunakan alat berstandar industri pertelevisian sesungguhnya.",
      },
      {
        title: "Slide 8: Ketenagakerjaan di Industri BCF: Dinamika Jam Kerja",
        content:
          "Tantangan regulasi jam kerja kru produksi film dan siaran:\n\n• UU Ketenagakerjaan menetapkan standar kerja 7-8 jam per hari atau 40 jam seminggu.\n• Realita Lapangan: Syuting film sering kali berlangsung 14-16 jam sehari ('Overtime').\n• Hak Lembur: Kru berhak mendapatkan upah lembur resmi dan waktu istirahat jeda antar-panggilan (Turnaround Time) minimal 10-12 jam sebelum syuting hari berikutnya dimulai.",
      },
      {
        title: "Slide 9: Keselamatan Ketenagakerjaan: BPJS Ketenagakerjaan Kru Film",
        content:
          "Jaminan perlindungan sosial bagi pekerja seni audio visual:\n\n• Seluruh kru (baik pegawai tetap maupun pekerja lepas / freelance) wajib diikutsertakan dalam program jaminan kecelakaan kerja (JKK) dan jaminan kematian (JKM).\n• Jika juru kamera terjatuh dari crane saat syuting, seluruh biaya rumah sakit dan pemulihan ditanggung sepenuhnya oleh asuransi ketenagakerjaan, bukan menjadi beban keluarga kru.",
      },
      {
        title: "Slide 10: Standar Upah & Asosiasi Profesi Penyiaran/Perfilman",
        content:
          "Standardisasi honor dan perlindungan hak pekerja:\n\n• Asosiasi Profesi (misal: Sinematografer / FSI, Editor / INAFED, Sutradara / IFDC, Asosiasi Televisi): Menyusun pedoman upah minimum harian (Day Rate Standard) berdasarkan level kompetensi.\n• Mencegah eksploitasi kru muda dengan honor yang tidak manusiawi.",
      },
      {
        title: "Slide 11: Kontrak Kerja Transparan: Menolak 'Kerja Rodi' atas Nama Pengalaman",
        content:
          "Hak dan martabat siswa magang (PKL) dan pemula:\n\n• Jangan mau dipekerjakan 18 jam sehari tanpa uang saku dan konsumsi layak dengan dalih 'mencari pengalaman portofolio'.\n• Perjanjian kerja magang wajib memuat jam kerja yang manusiawi, pembagian tugas edukatif, dan perlindungan asuransi keselamatan kerja.",
      },
      {
        title: "Slide 12: Kesehatan Mental & Work-Life Balance Insan Kreatif",
        content:
          "Isu 'Burnout' (kelelahan mental kronis) di industri BCF:\n\n• Tekanan deadline siaran harian dan persaingan rating sering memicu stres berat, kecemasan, dan insomnia.\n• Budaya kerja sehat: Menghargai waktu istirahat, rekreasi, dan saling mendukung antarrekan tim tanpa perundungan (anti-bullying set).",
      },
      {
        title: "Slide 13: Kesetaraan Gender & Set Bebas Pelecehan Seksual",
        content:
          "Menciptakan ruang kerja yang aman dan inklusif bagi semua kru:\n\n• Penolakan mutlak terhadap pelecehan seksual, candaan seksis, atau diskriminasi gender di ruang ganti, ruang editing, maupun lokasi syuting.\n• Rumah produksi modern wajib memiliki SOP Pengaduan Pelecehan dengan sanksi pemecatan langsung bagi pelaku.",
      },
      {
        title: "Slide 14: K3 Khusus Kru Lapangan: Asuransi Aset Alat & Personal Injury",
        content:
          "Perlindungan ganda di lokasi syuting ekstrem:\n\n• Asuransi Peralatan (Equipment Insurance): Mengganti kerugian jika kamera tercebur ke sungai atau tertimpa longsor saat liputan alam.\n• Asuransi Jiwa Kru: Menjamin kompensasi bagi keluarga jika terjadi musibah kecelakaan transportasi saat perjalanan liputan berita.",
      },
      {
        title: "Slide 15: Studi Komparasi: Pengelolaan E-Waste di Indonesia vs Standar Uni Eropa (WEEE)",
        content:
          "Regulasi limbah elektronik internasional:\n\n• Uni Eropa (WEEE Directive): Produsen kamera (Sony, Canon, dll) diwajibkan secara hukum menerima kembali kamera bekas untuk didaur ulang secara gratis (Extended Producer Responsibility / EPR).\n• Indonesia: Sedang memperkuat regulasi pengelolaan sampah elektronik melalui bank sampah khusus B3 di kota-kota besar.",
      },
      {
        title: "Slide 16: Troubleshooting Perawatan: Memulihkan Lensa yang Mulai Berjamur Tipis",
        content:
          "Langkah penyelamatan lensa sebelum jamur merusak coating kaca optik:\n\n1. Jangan diusap paksa dari luar; jamur biasanya tumbuh di elemen kaca bagian dalam.\n2. Bawa segera ke teknisi servis optik profesional untuk dibongkar di ruang steril (Clean Bench).\n3. Kaca optik dibersihkan dengan larutan hidrogen peroksida dan alkohol murni, lalu disinari sinar ultraviolet (UV-C) untuk mematikan spora jamur.",
      },
      {
        title: "Slide 17: Studi Kasus Riil: Kematian Tragis Kameramen Akibat Jam Kerja Melampaui Batas",
        content:
          "Kisah nyata seorang asisten kamera yang meninggal dunia dalam kecelakaan mobil tunggal saat pulang syuting dini hari setelah bekerja 20 jam berturut-turut:\n\nFakta Ketenagakerjaan:\nInsiden ini memicu gelombang protes keras komunitas perfilman nasional yang menuntut pembatasan jam kerja maksimal 14 jam per hari dan kewajiban produser menyediakan pengemudi antar-jemput bagi kru yang lelah.",
      },
      {
        title: "Slide 18: Analisis Hak Keselamatan Kru di Atas Jadwal Produksi",
        content:
          "Pelajaran berharga bagi seluruh insan industri:\n\n1. Hak untuk Menolak (Right to Refuse): Kru berhak menolak mengemudi sendiri jika mengalami kelelahan ekstrem (microsleep).\n2. Istirahat 12 Jam (Turnaround Time): Bukan sekadar saran santai, melainkan batas keselamatan biologis tubuh manusia.",
      },
      {
        title: "Slide 19: Tren Masa Depan: 'Circular Economy' dalam Ekosistem Media",
        content:
          "Ekonomi Sirkular di sektor BCF:\n\n• Konsep 'Hardware-as-a-Service': Stasiun TV tidak lagi membeli kamera, melainkan menyewa sistem jangka panjang dari produsen yang bertanggung jawab atas servis, rekondisi, dan daur ulang total komponen bodi kamera.\n• Menghapus konsep 'buang setelah pakai' menjadi siklus perbaikan tanpa henti.",
      },
      {
        title: "Slide 20: Rangkuman & Action Plan Ketenagakerjaan & E-Waste Siswa",
        content:
          "Poin Kunci Pembelajaran:\n1. Kelola siklus hidup alat dengan pemeliharaan preventif yang tekun untuk memaksimalkan usia pakai.\n2. Tangani baterai litium dan limbah elektronik (e-waste) dengan prosedur aman limbah B3.\n3. Pahami hak-hak dasar ketenagakerjaan Anda sebagai calon profesional yang bermartabat.\n\nAction Plan:\nLakukan inventarisasi dan pemilahan limbah elektronik (kabel putus, baterai drop) di lab sekolah menggunakan panduan LKPD E2-K6!",
      },
    ],
    video: {
      title: "Pengelolaan Limbah Elektronik dan Daur Ulang Properti di Industri Media",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      guide:
        "Perhatikan prosedur pembuangan aman baterai litium kamera yang rusak, teknik merawat lensa agar terhindar dari jamur kaca, dan diskusi mengenai pentingnya perlindungan asuransi keselamatan kerja bagi kru lepas.",
    },
    gamePairs: [
      { id: 1, left: "E-Waste (Limbah B3)", right: "Limbah peralatan elektronik yang mengandung zat kimia berbahaya" },
      { id: 2, left: "Swollen Battery", right: "Baterai litium menggembung yang wajib segera dipensiunkan" },
      { id: 3, left: "Turnaround Time", right: "Jeda waktu istirahat minimal 10-12 jam antarsesi syuting harian" },
      { id: 4, left: "Preventive Maintenance", right: "Perawatan berkala terjadwal untuk mencegah kerusakan alat" },
      { id: 5, left: "Circular Economy", right: "Model ekonomi siklus perbaikan dan guna ulang tanpa limbah" },
    ],
    caseTitle: "Studi Kasus: Menyusun Audit Limbah Elektronik & SOP Keselamatan Kerja Lab SMK",
    caseScenario:
      "Di ruang lab broadcasting sekolah Anda, terdapat kardus berisi 10 baterai kamera litium kembung, 15 kabel XLR putus di dalam, dan 2 monitor tabung CRT berdebu tebal yang sudah mati total. Pada saat yang sama, siswa kelas XI mengeluhkan jadwal syuting tugas sekolah yang sering dipaksa hingga larut malam melampaui jam 23.00.",
    caseInstruction:
      "Susunlah rencana aksi ganda: (1) SOP pemilahan dan penyaluran aman limbah elektronik B3 tersebut ke tempat pembuangan khusus, dan (2) Draf aturan perlindungan jam kerja maksimal siswa saat praktikum syuting sekolah!",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Mengapa baterai kamera litium-ion yang sudah kembung dilarang keras dibuang ke tempat sampah umum bersama sampah plastik dan kertas?",
        options: [
          { key: "A", text: "Karena baterai kembung masih bisa dijual dengan harga mahal" },
          { key: "B", text: "Baterai kembung rentan mengalami reaksi termal kimia (thermal runaway) yang memicu ledakan atau kebakaran beracun jika tertindih atau terkena panas" },
          { key: "C", text: "Baterai kembung akan berubah menjadi batu baterai kering biasa" },
          { key: "D", text: "Karena baterai kembung baunya sangat harum" },
        ],
        correctKey: "B",
        explanation: "Baterai litium yang rusak menyimpan gas mudah terbakar dan dapat meledak atau memicu kebakaran hebat di truk sampah atau tempat penampungan akhir (TPA).",
      },
      {
        id: 2,
        bloom: "C4",
        stem: "Istilah 'Turnaround Time' dalam etika ketenagakerjaan produksi film merujuk pada hak pekerja untuk...",
        options: [
          { key: "A", text: "Mendapatkan jatah makan 5 kali sehari" },
          { key: "B", text: "Memperoleh waktu istirahat jeda minimal 10 hingga 12 jam sejak syuting hari ini selesai hingga panggilan syuting (call time) hari berikutnya dimulai" },
          { key: "C", text: "Memutar kamera 360 derajat di lokasi" },
          { key: "D", text: "Mengganti lensa kamera secepat mungkin" },
        ],
        correctKey: "B",
        explanation: "Turnaround time menjamin waktu tidur dan pemulihan fisik yang cukup bagi kru sebelum kembali ke set produksi demi mencegah kecelakaan kerja akibat kelelahan.",
      },
    ],
    lkpd: {
      title: "LKPD E2-K6: Audit E-Waste Lab Broadcasting & Perancangan Aturan Jam Kerja Kru",
      objective: "Melakukan inventarisasi limbah elektronik di lab sekolah dan merumuskan piagam hak keselamatan kerja kru siswa.",
      tools: ["Formulir Audit E-Waste", "Kotak Khusus Limbah B3", "Lakban Kertas"],
      steps: [
        "Lakukan inspeksi di lab sekolah untuk mendata peralatan elektronik yang sudah rusak permanen (baterai, kabel, adaptor).",
        "Tempelkan label peringatan 'Rusak / Bahaya B3' pada baterai kembung dan isolasi pin konektornya.",
        "Rancang panduan jam kerja aman syuting pelajar: batas maksimal jam kerja harian, jeda istirahat makan, dan larangan mengemudi larut malam.",
        "Presentasikan Piagam Keselamatan Kerja Kru Pelajar di depan forum kelas.",
      ],
      outputFormat: "Laporan Inventarisasi E-Waste dan Naskah Piagam Keselamatan Kerja Kru format PDF.",
    },
    journalQuestions: {
      q1: "Bagaimana cara Anda merawat peralatan kamera pribadi atau sekolah agar masa pakainya bertahan selama mungkin?",
      q2: "Mengapa pemahaman tentang hak-hak ketenagakerjaan penting dipelajari sejak duduk di bangku SMK?",
      q3: "Komitmen apa yang akan Anda terapkan saat memimpin proyek syuting agar tidak ada rekan kru yang dieksploitasi tenaganya?",
    },
    kktpIndicators: [
      "Mampu menguraikan tahapan siklus hidup produk (product life cycle) peralatan audio visual.",
      "Mampu menerapkan prosedur pemilahan dan penanganan aman limbah elektronik (e-waste) B3.",
      "Mampu menganalisis regulasi ketenagakerjaan, hak jam istirahat turnaround time, dan keselamatan kerja kru.",
    ],
  },
];
