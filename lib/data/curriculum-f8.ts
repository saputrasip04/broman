import type { ElemenContentItem } from "./curriculum-types";

export const F8_CONTENTS: ElemenContentItem[] = [
  // =========================================================================
  // KONTEN 1: Prosedur menyusun konsep siaran online (20 Slide)
  // =========================================================================
  {
    id: "f8-k1",
    order: 1,
    title: "1. Prosedur menyusun konsep siaran online",
    shortTitle: "Konsep Siaran Online",
    summary: "Perancangan program siaran digital berbasis internet, analisis karakteristik platform (YouTube Live, Twitch, TikTok Live), pemetaan audiens, dan penyusunan proposal rundown live streaming.",
    kompetensi: ["1. Merancang", "2. Mengonsepkan"],
    tujuanPembelajaran: [
      "Peserta didik mampu merancang konsep program siaran daring (Live Streaming Broadcast) multi-platform.",
      "Peserta didik mampu menyusun alur interaktivitas pemirsa (Audience Engagement Flow) dan rundown siaran online.",
    ],
    hookQuestion: "Mengapa siaran langsung di televisi konvensional yang dipindahkan begitu saja ke live streaming YouTube tanpa perubahan format sering kali sepi penonton dan diabaikan warganet?",
    hookContext: "Karakteristik penonton siaran online sangat berbeda dengan pemirsa televisi tradisional. Penonton internet menuntut interaktivitas dua arah, kecepatan respons pesan chat, dan bahasa komunikasi yang lebih akrab dan personal.",
    pretestQuestions: [
      {
        id: 1801,
        bloom: "C2",
        stem: "Perbedaan paling mendasar antara siaran televisi linier terestrial konvensional dan siaran live streaming online berbasis internet adalah...",
        options: [
          { key: "A", text: "Siaran online memiliki interaktivitas komunikasi dua arah secara langsung (real-time chat, polling, donasi) dengan pemirsa" },
          { key: "B", text: "Siaran online tidak memerlukan kamera" },
          { key: "C", text: "Siaran online hanya boleh ditonton pada malam hari" },
          { key: "D", text: "Siaran online tidak membutuhkan koneksi internet" },
        ],
        correctKey: "A",
        explanation: "Interaktivitas instan dua arah antara kreator siaran dan pemirsa melalui kolom komentar adalah jiwa utama media penyiaran online baru.",
      },
      {
        id: 1802,
        bloom: "C2",
        stem: "Rasio aspek visual layar yang paling dominan digunakan untuk format siaran live streaming di platform smartphone vertikal seperti TikTok Live dan Instagram Live adalah...",
        options: [
          { key: "A", text: "9:16 Vertikal (Portrait)" },
          { key: "B", text: "16:9 Horizontal (Landscape)" },
          { key: "C", text: "4:3 TV Tabung Kuno" },
          { key: "D", text: "21:9 Layar Bioskop" },
        ],
        correctKey: "A",
        explanation: "Format 9:16 vertikal dirancang khusus untuk kenyamanan genggaman tangan pengguna smartphone tanpa perlu memutar orientasi layar.",
      },
    ],
    materialCards: [
      {
        title: "1. Revolusi Penyiaran Digital & Konvergensi Media",
        content: "Penyiaran online (Digital Webcasting) telah mendemokratisasi dunia pertelevisian. Kini sebuah stasiun TV mini dapat dioperasikan dari studio sekolah dengan jangkauan siar tanpa batas geografis melintasi seluruh benua melalui jaringan internet global.",
        didYouKnow: "Setiap menit, lebih dari 500 jam video diunggah dan ratusan ribu siaran live streaming mengudara secara simultan di seluruh dunia.",
      },
      {
        title: "2. Membedah Karakteristik Platform Siaran Online",
        content: "YouTube Live: ramah konten edukasi, konser musik, dan webinar formal lanskap 16:9. Twitch: dominasi komunitas gaming, esport, dan obrolan kasual. TikTok & Instagram Live: format vertikal 9:16 dengan interaksi cepat, gift stiker, dan rentang perhatian singkat.",
      },
      {
        title: "3. Format Tayangan Penyiaran Online: Webinar, E-Sport, Konser Virtual",
        content: "Klasifikasi program online: Live Talkshow Interaktif, Siaran Langsung E-Sport Tournament (lengkap dengan shoutcaster), Peliputan Acara Sekolah/Wisuda, Konser Musik Streaming Berbayar, dan Live Shopping E-Commerce.",
      },
      {
        title: "4. Merumuskan Unique Selling Proposition (USP) Siaran Online",
        content: "Apa alasan warganet berhenti menggulir layar (stop scrolling) dan menonton siaran Anda? Buat hook pemicu rasa penasaran dalam 5 detik pertama: eksperimen sains dramatis, hadiah kuis langsung, atau narasumber ahli yang menjawab pertanyaan penonton.",
      },
      {
        title: "5. Psikologi Interaksi Dua Arah (The Two-Way Communication)",
        content: "Berbeda dengan televisi di mana pemirsa bersifat pasif, penyiar online harus menyapa penonton dengan menyebutkan nama akun mereka di kolom komentar: 'Halo Rian di Surabaya, terima kasih pertanyaannya!'. Hal ini membangun loyalitas penonton.",
        caseStudy: "Siaran langsung sebuah sekolah sepi pemirsa karena host hanya membaca naskah kaku tanpa pernah menatap atau membaca satu pun komentar yang masuk di layar live chat.",
      },
      {
        title: "6. Anatomi Rundown Siaran Online Berdurasi 60 Menit",
        content: "00:00-05:00 (Waiting Screen / Pemanasan Musik), 05:00-10:00 (Opening Host & Menyapa Penonton Awal), 10:00-35:00 (Materi Inti & Demonstrasi), 35:00-50:00 (Sesi Tanya Jawab Live Chat & Polling), 50:00-60:00 (Kuis Giveaway & Penutup).",
      },
      {
        title: "7. Desain 'Pre-Stream Waiting Screen' (Layar Tunggu)",
        content: "Jangan langsung memulai materi saat tombol 'Go Live' ditekan. Berikan layar tunggu 3–5 menit dengan hitungan mundur (Countdown Clock), musik santai bebas royalti, dan teks ajakan: 'Siaran akan dimulai sebentar lagi, bagikan tautan ini ke temanmu!'.",
      },
      {
        title: "8. Strategi Penjadwalan & Waktu Tayang Siar Online (Prime Time Medsos)",
        content: "Analisis analitik audiens: jam santai media sosial biasanya berada pada pukul 12.00–13.00 (jam istirahat siang) dan pukul 19.00–21.00 (waktu istirahat malam). Hindari memulai siaran live di jam sibuk lalu lintas kerja.",
      },
      {
        title: "9. Penyusunan Tim Produksi Siaran Online (Live Stream Crew)",
        content: "Tim minimal 3 orang: (1) Host / Presenter di depan kamera, (2) Software Switcher & Audio Operator di komputer, (3) Chat Moderator / Community Manager yang menyaring pertanyaan berbobot dari ribuan komentar spam.",
      },
      {
        title: "10. Peran Krusial 'Chat Moderator' di Siaran Langsung",
        content: "Moderator bertugas menghapus komentar ujaran kebencian, memblokir bot spam link judi, menyorot pertanyaan terbaik ke layar studio presenter, dan menyematkan link donasi atau pendaftaran di kolom chat teratas (Pinned Comment).",
        didYouKnow: "Moderator yang tangkas mampu menyaring ratusan pesan komentar masuk per menit menggunakan fitur filter kata kunci otomatis (Automod Blocklist).",
      },
      {
        title: "11. Perancangan Elemen Gamifikasi: Polling, Kuis, dan Giveaway",
        content: "Tingkatkan retensi durasi tonton (Watch Time) dengan fitur gamifikasi: pasang polling interaktif di menit ke-20, adakan kuis tebak kata di menit ke-40 dengan hadiah pulsa, dan umumkan pemenang di akhir siaran.",
      },
      {
        title: "12. Integrasi Multi-Streaming (Simulcast Broadcast)",
        content: "Menggunakan layanan cloud restream (Restream.io / Castr / OBS plugin) untuk memancarkan satu sinyal siaran langsung ke 3 platform sekaligus secara simultan (YouTube, Facebook, dan Twitch) guna memaksimalkan jangkauan pemirsa.",
      },
      {
        title: "13. Desain Grafis Visual Overlay (Branding Siaran)",
        content: "Tampilan layar siaran online memadukan: bingkai kamera (Webcam Border), kotak pesan chat transparan di layar (Chat Overlay), logo sudut stasiun (Logo Bug), dan bar progres target donasi atau jumlah penonton (Goal Bar).",
      },
      {
        title: "14. Menghadapi 'Trolling' dan Komentar Negatif di Live Chat",
        content: "Presenter dilarang terpancing emosi oleh komentar negatif (hater/troll). Tetap tersenyum profesional, serahkan tindakan pemblokiran akun kepada tim moderator, dan teruskan pembahasan materi sesuai rundown.",
      },
      {
        title: "15. Perancangan Call to Action (CTA) yang Terukur",
        content: "Setiap siaran online harus memiliki tujuan akhir (CTA): mengajak penonton menekan tombol Subscribe, mengunduh e-book materi di kolom deskripsi, atau mengisi formulir pendaftaran siswa baru SMK.",
      },
      {
        title: "16. Persiapan Cadangan Jalur Internet Ganda (Redundant Internet)",
        content: "Siaran langsung dilarang mengandalkan 1 jalur Wi-Fi. Wajib menyiapkan jalur cadangan: Jalur Utama (Kabel LAN Fiber Optic) dan Jalur Cadangan (Modem Router 4G/5G) dengan fitur auto-failover jika kabel utama terputus.",
      },
      {
        title: "17. Studi Kasus: Sukses Siaran Wisuda Online Multi-Kamera",
        content: "SMK menyiarkan wisuda daring dengan 4 kamera: Kamera 1 (Kepala Sekolah), Kamera 2 (Siswa), Kamera 3 (Paduan Suara), dan Kamera 4 (Drone outdoor). Siaran ditonton oleh 5.000 wali murid di rumah tanpa buffering.",
      },
      {
        title: "18. Evaluasi Metrik Analitik Siaran (Post-Stream Analytics)",
        content: "Tinjau data pasca siar di dashboard YouTube Studio: Peak Concurrent Viewers (puncak penonton bersamaan), Average View Duration (rata-rata durasi tonton), dan grafik retensi menit di mana penonton mulai keluar.",
      },
      {
        title: "19. Monetisasi Siaran Online: Super Chat, Sponsor, dan Afiliasi",
        content: "Siaran online dapat menghasilkan pendapatan melalui fitur Super Chat / Sticker donasi penonton, kerja sama penempatan produk sponsor di panggung (Brand Sponsorship), dan pembagian kode promo link afiliasi.",
      },
      {
        title: "20. Rangkuman & Kesiapan Kreator Penyiaran Digital",
        content: "Menyusun konsep siaran online adalah perpaduan kepiawaian komunikasi digital, psikologi warganet, dan penguasaan teknologi internet. Rancanglah siaran yang interaktif, bernilai edukatif tinggi, dan menginspirasi komunitas digital Anda.",
      },
    ],
    video: {
      title: "Merancang Konsep dan Alur Siaran Live Streaming Multi-Kamera Profesional",
      embedUrl: "https://www.youtube.com/embed/g2q_y0M5N9o",
      guide: "Pelajari bagaimana menyusun rundown interaktif siaran online 60 menit, membagi peran tim moderator chat, dan merancang overlay grafis multi-platform.",
    },
    gamePairs: [
      { id: 1, left: "Simulcast", right: "Teknologi penyiaran satu sinyal video ke berbagai platform media sosial serempak" },
      { id: 2, left: "Chat Moderator", right: "Petugas pengendali kenyamanan dan penyaring komentar pemirsa di live stream" },
      { id: 3, left: "Waiting Screen", right: "Layar tunggu hitung mundur pembuka sebelum materi siaran utama dimulai" },
      { id: 4, left: "Concurrent Viewers", right: "Jumlah total penonton yang sedang menyaksikan siaran pada detik yang sama" },
      { id: 5, left: "Overlay", right: "Lapisan grafis transparan penampil chat, bingkai kamera, dan logo di layar siaran" },
    ],
    caseTitle: "Studi Kasus 1: Penonton Meninggalkan Siaran di Menit ke-10 (Drop-off Rate Tinggi)",
    caseScenario: "Sebuah program talkshow pendidikan daring via YouTube Live berhasil mengumpulkan 800 penonton di awal acara. Namun pada menit ke-10, jumlah penonton anjlok menjadi tinggal 120 orang karena host berbicara sendirian selama 10 menit tanpa pernah menyapa chat atau membuka visual presentasi pendukung.",
    caseInstruction: "Sebagai Produser Siaran Online, rumuskan 3 perbaikan format interaktif pada 10 menit pertama untuk mempertahankan penonton agar betah menonton hingga akhir!",
    sampleQuestions: [
      {
        id: 1803,
        bloom: "C4",
        stem: "Mengapa pembawa acara siaran live streaming online sangat disarankan menyapa nama penonton yang bertanya di kolom live chat secara lisan di depan kamera?",
        options: [
          { key: "A", text: "Untuk membangun ikatan personal emosional dan penghargaan yang meningkatkan retensi durasi tonton penonton" },
          { key: "B", text: "Agar kuota internet penonton menjadi gratis" },
          { key: "C", text: "Karena algoritma YouTube mewajibkan hal tersebut" },
          { key: "D", text: "Untuk mengisi kekosongan naskah karena tidak ada materi" },
        ],
        correctKey: "A",
        explanation: "Penyebutan nama penonton menciptakan perasaan dihargai dan mengubah penonton pasif menjadi anggota komunitas yang setia menyaksikan tayangan.",
      },
    ],
    lkpd: {
      title: "LKPD F8-K1: Perancangan Proposal Rundown & Alur Interaksi Siaran Online 30 Menit",
      objective: "Peserta didik mampu menyusun proposal konsep siaran daring lengkap dengan pembagian segmen menit-demi-menit dan jadwal interaksi polling penonton.",
      tools: ["Komputer / Laptop", "Aplikasi Dokumen (Docs / Word)", "Template Proposal Live Streaming"],
      steps: [
        "Pilih tema siaran daring: 'Talkshow Tips Sukses Lolos Praktik Kerja Lapangan (PKL) SMK'.",
        "Tentukan target platform (YouTube Live / TikTok Live) dan rasio aspek kamera (16:9 atau 9:16).",
        "Susun tabel rundown 30 menit memuat alokasi: Waiting Screen, Materi Inti, Q&A Live Chat, dan Kuis.",
        "Rancang teks pesan ajakan Call to Action (CTA) dan aturan tata tertib live chat bagi penonton.",
      ],
      outputFormat: "Dokumen Proposal Rundown Siaran Daring Format PDF 3-4 Halaman A4.",
    },
    journalQuestions: {
      q1: "Mengapa kehangatan interaksi personal sangat penting dalam siaran langsung berbasis internet?",
      q2: "Bagaimana cara Anda menyikapi komentar ujaran kebencian (cyberbullying) di kolom live chat secara bijak?",
      q3: "Tantangan apa yang paling Anda rasakan saat harus berbicara di depan kamera sambil membaca teks komentar yang terus bergerak cepat?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi perbedaan karakteristik audiens siaran televisi konvensional vs siaran digital online.",
      "Mampu merancang alur interaktivitas pemirsa (Audience Engagement Flow) pada penyiaran daring.",
      "Mampu menyusun proposal rundown siaran langsung multi-platform dengan alokasi waktu presisi.",
    ],
  },

  // =========================================================================
  // KONTEN 2: Produksi siaran online (OBS, vMix, hardware) (20 Slide)
  // =========================================================================
  {
    id: "f8-k2",
    order: 2,
    title: "2. Produksi siaran online (OBS, vMix, hardware)",
    shortTitle: "Produksi Siaran OBS & vMix",
    summary: "Konfigurasi software broadcast (OBS Studio & vMix), perangkat keras video capture card (Cam Link, DeckLink, ATEM Mini), encoding hardware (NVENC / QuickSync), bitrate, dan protokol streaming (RTMP / SRT).",
    kompetensi: ["1. Mengonfigurasi", "2. Mengoperasikan"],
    tujuanPembelajaran: [
      "Peserta didik mampu mengonfigurasi software switcher siaran daring (OBS Studio / vMix) dengan multi-kamera dan video capture card.",
      "Peserta didik mampu mengoptimalkan parameter encoding (Bitrate, Keyframe, Presets, dan Protokol RTMP/SRT) untuk siaran bebas buffering.",
    ],
    hookQuestion: "Jika kecepatan internet upload Anda mencapai 50 Mbps, mengapa mengatur bitrate streaming di OBS ke angka 40 Mbps justru membuat siaran langsung Anda macet parah dan putus-putus di layar penonton?",
    hookContext: "Kecepatan koneksi internet hanyalah satu sisi koin. Server penerima platform (seperti YouTube) memiliki batas rekomendasi bitrate (Ingest Limit). Mengirim bitrate melampaui batas server justru memicu kemacetan data (buffer bottleneck) dan penurunan kualitas penayangan.",
    pretestQuestions: [
      {
        id: 1804,
        bloom: "C2",
        stem: "Perangkat keras antarmuka (Hardware Interface) yang berfungsi mengubah sinyal video HDMI atau SDI dari kamera menjadi sinyal digital USB yang dapat dibaca oleh software komputer streaming disebut...",
        options: [
          { key: "A", text: "Video Capture Card / Cam Link" },
          { key: "B", text: "Sound Card Analog" },
          { key: "C", text: "Flashdisk Drive" },
          { key: "D", text: "VGA Dummy Plug" },
        ],
        correctKey: "A",
        explanation: "Video Capture Card bertugas menangkap sinyal output video kamera dan mengonversinya menjadi webcam feed digital berkecepatan tinggi bagi komputer.",
      },
      {
        id: 1805,
        bloom: "C2",
        stem: "Protokol transmisi data video streaming standar emas yang digunakan untuk menghubungkan software OBS Studio ke server platform YouTube Live melalui URL Server dan Stream Key adalah...",
        options: [
          { key: "A", text: "RTMP (Real-Time Messaging Protocol)" },
          { key: "B", text: "FTP (File Transfer Protocol)" },
          { key: "C", text: "HTTP Web" },
          { key: "D", text: "Bluetooth 5.0" },
        ],
        correctKey: "A",
        explanation: "RTMP adalah protokol standar paling luas yang digunakan oleh seluruh platform siaran streaming untuk menerima data video dari encoder.",
      },
    ],
    materialCards: [
      {
        title: "1. Ekosistem Software Siaran Online: OBS Studio vs vMix",
        content: "OBS Studio (Open Broadcaster Software): gratis, open-source, ringan, dan didukung ribuan plugin komunitas. vMix: software siaran komersial profesional berbayar yang mendukung multi-kamera instan, replay lambat (instant replay), panggilan video tamu terintegrasi (vMix Call), dan NDI IP broadcast.",
        didYouKnow: "vMix banyak digunakan oleh stasiun TV regional dan rumah produksi siaran esport profesional karena stabilitasnya yang luar biasa di sistem operasi Windows.",
      },
      {
        title: "2. Anatomi Perangkat Keras Video Capture (Capture Card)",
        content: "Untuk memasukkan kamera profesional ke PC: gunakan Capture Card portabel (Elgato Cam Link 4K HDMI ke USB) atau kartu PCIe internal multi-channel (Blackmagic DeckLink Quad HDMI / Magewell Pro Capture) yang mampu menerima 4 kamera sekaligus tanpa delay.",
      },
      {
        title: "3. Penggunaan Mini Hardware Switcher (Blackmagic ATEM Mini)",
        content: "ATEM Mini menghubungkan 4 kamera HDMI fisik dengan tombol pemotong gambar nyata. Outputnya berupa kabel USB Type-C yang dideteksi komputer sebagai webcam biasa, menghemat 80% beban prosesor komputer streaming.",
      },
      {
        title: "4. Pengenalan NDI (Network Device Interface) Video over IP",
        content: "Teknologi NDI mengirimkan sinyal video berkualitas siar berlatensi ultra-rendah melalui kabel LAN jaringan Ethernet biasa tanpa kabel HDMI/SDI. Memungkinkan komputer di ruang kelas lain mengirimkan layar presentasinya ke studio streaming.",
      },
      {
        title: "5. Memahami Konsep Video Bitrate (Kecepatan Aliran Data)",
        content: "Bitrate mengukur berapa kilobit data yang dikirim per detik (kbps). Resolusi 1080p 60fps membutuhkan bitrate 6.000–8.000 kbps. Resolusi 1080p 30fps membutuhkan 4.500 kbps. Resolusi 720p membutuhkan 2.500–3.500 kbps.",
      },
      {
        title: "6. Aturan Cadangan Bandwidth Internet (The 50% Rule)",
        content: "Kecepatan unggah internet (Upload Speed) wajib minimal DUA KALI LIPAT dari bitrate streaming yang dipilih. Jika Anda streaming pada 6.000 kbps (6 Mbps), maka koneksi upload internet studio Anda wajib stabil minimal 12 Mbps murni.",
        caseStudy: "Sebuah siaran sekolah mengalami patah-patah parah karena bitrate disetel 6 Mbps di jalur internet yang kecepatan upload-nya hanya 7 Mbps. Saat ada siswa lain mengunggah tugas, siaran langsung seketika terputus (dropped frames 40%).",
      },
      {
        title: "7. Hardware Encoding (NVIDIA NVENC & Intel QuickSync)",
        content: "Jangan gunakan Software Encoding x264 (CPU) jika tidak memiliki prosesor monster. Gunakan Hardware Encoder khusus di kartu grafis (NVIDIA NVENC pada kartu grafis GeForce RTX). Mengurangi beban CPU hingga di bawah 10% dan mencegah komputer macet panas.",
      },
      {
        title: "8. Pengaturan Keyframe Interval (GOP) Standar Streaming",
        content: "Seluruh platform penyiaran online (YouTube, Twitch, Facebook) mewajibkan nilai Keyframe Interval diatur ke angka tepat 2 DETIK (Keyframe = 2). Mengatur ke angka 0 (otomatis) dapat memicu pemutaran video bergetar di ponsel penonton.",
      },
      {
        title: "9. Pengaturan Rate Control: CBR vs VBR",
        content: "Untuk siaran langsung, SELALU pilih mode CBR (Constant Bitrate). CBR menjaga aliran data tetap konstan stabil. Jangan gunakan VBR (Variable Bitrate) karena lonjakan bitrate saat adegan bergerak cepat dapat melampaui buffer server dan memicu buffering.",
      },
      {
        title: "10. Pengaturan Parameter Audio Streaming (AAC 48 kHz)",
        content: "Codec audio wajib menggunakan AAC berkecepatan sampling 48 kHz (Broadcast Standard) dengan bitrate audio 160 kbps hingga 192 kbps stereo. Pengaturan ini menjamin suara musik dan dialog terdengar jernih tanpa artefak suara robot.",
      },
      {
        title: "11. Protokol RTMP vs Protokol Masa Depan SRT",
        content: "RTMP (berbasis TCP) adalah standar lama yang andal. SRT (Secure Reliable Transport berbasis UDP) adalah teknologi baru masa depan yang mampu memulihkan paket data yang hilang di jaringan internet buruk tanpa menambah latensi delay siaran.",
        didYouKnow: "Protokol SRT memiliki enkripsi AES-128/256 bawaan yang melindungi sinyal siaran live dari pembajakan sinyal di tengah jalan.",
      },
      {
        title: "12. Pengorganisasian Scenes dan Sources di OBS Studio",
        content: "Buat Scenes terstruktur: (1) Scene Waiting, (2) Scene Host Cam 1, (3) Scene Tamu Cam 2, (4) Scene Dua Kamera Side-by-Side, (5) Scene Presentasi PPT + Webcam Kecil di sudut (PiP), (6) Scene Video Bumper, (7) Scene Penutup Closing.",
      },
      {
        title: "13. Penggunaan Virtual Camera OBS ke Zoom / Google Meet",
        content: "Fitur 'Start Virtual Camera' di OBS mengubah hasil mixing multi-kamera studio menjadi input kamera virtual untuk aplikasi webinar seperti Zoom atau Teams, memberikan tampilan siaran profesional di ruang meeting online.",
      },
      {
        title: "14. Penyelarasan Sinkronisasi Audio-Video (Sync Offset Delay)",
        content: "Sinyal video dari capture card USB sering memiliki keterlambatan 100–200 milidetik lebih lambat dari suara mikrofon yang masuk lewat mixer audio USB. Atur 'Sync Offset' di Advanced Audio Properties OBS (misal: tunda audio 150 ms) agar gerak bibir dan suara pas (Lip-Sync).",
      },
      {
        title: "15. Perekaman Master Lokal Cadangan (Simultaneous Recording)",
        content: "Saat menekan 'Start Streaming', SELALU tekan juga tombol 'Start Recording' di OBS. Rekam master berkualitas tinggi (bitrate 20.000 kbps ProRes/CQC) ke harddisk lokal sebagai arsip jika rekaman YouTube terganggu kualitas internetnya.",
      },
      {
        title: "16. Menggunakan Stream Deck untuk Pengendalian Tombol Fisik",
        content: "Elgato Stream Deck menyediakan 15 tombol LCD fisik yang dapat diprogram. Operator cukup menekan satu tombol fisik untuk berpindah scene kamera, menyalakan lower third, memutar sound effect tepuk tangan, dan mematikan mic secara instan.",
      },
      {
        title: "17. Menguji Koneksi: Mode Siaran Privat / Unlisted Sebelum Publik",
        content: "Tiga puluh menit sebelum siaran publik, lakukan uji coba 'Stream Test' dengan menyetel visibilitas YouTube ke 'Unlisted'. Putar musik dan bicara 2 menit untuk memeriksa kestabilan grafik bit-rate hijau di OBS tanpa ditonton publik.",
      },
      {
        title: "18. Studi Kasus: Mengatasi 'Dropped Frames' Akibat Kemacetan Jaringan",
        content: "Di tengah siaran, indikator status OBS berubah menjadi MERAH dan muncul peringatan 'Dropped Frames 25%'. Operator sigap mengaktifkan fitur 'Dynamic Bitrate' di OBS, yang secara otomatis menurunkan bitrate dari 6.000 ke 3.500 kbps agar siaran tidak terputus total.",
      },
      {
        title: "19. Pengaturan Hardware Failover & PC Backup",
        content: "Siaran beranggaran tinggi menggunakan 2 unit PC: PC Utama (Encoder Master) dan PC Cadangan (Encoder Backup) yang menerima duplikasi sinyal SDI kamera melalui HDMI Splitter. Jika PC utama mati, transmisi dialihkan ke PC cadangan dalam 5 detik.",
      },
      {
        title: "20. Rangkuman & Kompetensi Operator Siaran Digital",
        content: "Menguasai produksi siaran online dengan OBS dan vMix adalah keterampilan teknis masa depan pertelevisian. Dengan pemahaman perangkat keras capture card, manajemen bitrate stabil, dan protokol internet modern, Anda siap memancarkan karya siaran langsung berkualitas prima ke seluruh penjuru dunia.",
      },
    ],
    video: {
      title: "Setup Lengkap Live Streaming Multi-Kamera Menggunakan Software vMix/OBS",
      embedUrl: "https://www.youtube.com/embed/Z0p_M1l4R7w",
      guide: "Pelajari cara menyambungkan capture card multi-kamera, mengatur encoder NVENC hardware, menyelaraskan lip-sync audio offset delay, dan menguji kestabilan bitrate RTMP.",
    },
    gamePairs: [
      { id: 1, left: "Capture Card", right: "Alat pengubah sinyal video kamera HDMI/SDI menjadi input digital komputer" },
      { id: 2, left: "NVENC", right: "Modul perangkat keras encoder video di kartu grafis untuk mengurangi beban CPU" },
      { id: 3, left: "CBR", right: "Constant Bitrate metode pengaliran data konstan stabil untuk mencegah buffering" },
      { id: 4, left: "Sync Offset", right: "Pengaturan tunda milidetik untuk menyelaraskan ketepatan gerak bibir dan suara" },
      { id: 5, left: "Dynamic Bitrate", right: "Fitur pintar OBS penurun bitrate otomatis saat jaringan internet melambat" },
    ],
    caseTitle: "Studi Kasus 2: Suara Presenter Mendahului Gerak Bibir di Siaran OBS (Audio Out of Sync)",
    caseScenario: "Pada siaran live streaming wisuda sekolah, penonton di kolom YouTube chat berkomentar bahwa suara sambutan kepala sekolah terdengar 150 milidetik lebih cepat sebelum bibir kepala sekolah bergerak di layar kamera (Audio Desync).",
    caseInstruction: "Jelaskan mengapa latensi sinyal video capture card USB lebih lambat daripada sinyal audio mixer, dan tunjukkan langkah demi langkah mengatur nilai 'Sync Offset' di menu Advanced Audio Properties OBS untuk memperbaikinya!",
    sampleQuestions: [
      {
        id: 1806,
        bloom: "C4",
        stem: "Mengapa pengaturan nilai 'Keyframe Interval' di menu Output OBS Studio untuk penyiaran YouTube Live wajib diatur ke angka 2 detik dan bukan 0 (otomatis)?",
        options: [
          { key: "A", text: "Karena server penyiaran YouTube Live membutuhkan frame referensi penuh (I-Frame) setiap 2 detik untuk memotong segmen data HLS dan mencegah video penonton macet berputar" },
          { key: "B", text: "Agar komputer tidak menghabiskan memori RAM" },
          { key: "C", text: "Karena angka 2 adalah angka keberuntungan penyiaran" },
          { key: "D", text: "Agar kamera otomatis mengubah fokus setiap 2 detik" },
        ],
        correctKey: "A",
        explanation: "Keyframe 2 detik adalah persyaratan mutlak server ingest YouTube dan Twitch agar sistem transmisi HLS/DASH dapat menyusun buffer penonton secara konsisten.",
      },
    ],
    lkpd: {
      title: "LKPD F8-K2: Konfigurasi OBS Studio Multi-Scene & Uji Penyiaran Private Stream",
      objective: "Peserta didik mampu mengonfigurasi OBS Studio dengan 3 Scene (Waiting, Main Cam, Picture-in-Picture) dan melakukan siaran uji coba privat (Unlisted) di YouTube.",
      tools: ["Komputer dengan OBS Studio", "Webcam / Kamera & Capture Card", "Koneksi Internet"],
      steps: [
        "Buka OBS Studio: konfigurasi Video Output 1080p 30fps dengan Encoder NVENC/QuickSync, CBR 4.500 kbps, Keyframe 2.",
        "Buat Scene 1 'Waiting Screen' memuat gambar teks hitung mundur dan musik latar.",
        "Buat Scene 2 'Presenter' memuat input video kamera utama dan mikrofon.",
        "Buat Scene 3 'PiP' memuat layar browser komputer dan kamera presenter di sudut kanan bawah.",
        "Dapatkan Stream Key dari YouTube Studio (setelan visibilitas: Unlisted).",
        "Jalankan siaran selama 5 menit dan periksa statistik 'Dropped Frames' di jendela status OBS.",
      ],
      outputFormat: "Link Rekaman Siaran Uji Coba Unlisted YouTube & Screenshot Pengaturan Output OBS.",
    },
    journalQuestions: {
      q1: "Mengapa pemahaman tentang bitrate dan kestabilan koneksi internet sangat menentukan kesuksesan siaran live?",
      q2: "Bagaimana cara Anda menenangkan diri jika tiba-tiba indikator koneksi di OBS berubah merah saat siaran sedang ditonton banyak orang?",
      q3: "Mengapa perekaman master lokal secara bersamaan (Simultaneous Recording) wajib dilakukan di setiap event siaran?",
    },
    kktpIndicators: [
      "Mampu mengonfigurasi pengaturan output encoding software OBS Studio (CBR, Bitrate, Keyframe 2s, NVENC).",
      "Mampu merancang susunan multi-scene dan menyelaraskan keterlambatan audio offset (Lip-Sync).",
      "Mampu mengoperasikan siaran langsung menggunakan protokol RTMP dengan indikator 0% Dropped Frames.",
    ],
  },

  // =========================================================================
  // KONTEN 3: Desain poster digital promosi program (20 Slide)
  // =========================================================================
  {
    id: "f8-k3",
    order: 3,
    title: "3. Desain poster digital promosi program",
    shortTitle: "Poster Promosi Siaran",
    summary: "Prinsip desain grafis promosi siaran online, hierarki visual (Visual Hierarchy), tipografi terbaca mobile, pemilihan palet warna kontras, layout poster 1:1 & 9:16, dan penulisan teks ajakan (Call to Action).",
    kompetensi: ["1. Menganalisis", "2. Mendesain"],
    tujuanPembelajaran: [
      "Peserta didik mampu merancang poster digital promosi program siaran daring yang memiliki daya pikat visual tinggi.",
      "Peserta didik mampu menerapkan prinsip tipografi terbaca mobile, kontras warna, dan hierarki informasi Call to Action.",
    ],
    hookQuestion: "Mengapa poster promosi acara yang memuat seluruh teks biodata 5 narasumber secara lengkap dari atas sampai bawah justru tidak dibaca dan dilewati begitu saja oleh pengguna media sosial dalam waktu kurang dari 1 detik?",
    hookContext: "Di media sosial, pengguna menggulir layar dengan kecepatan jempol rata-rata 1,7 detik per postingan. Poster promosi yang efektif harus mampu menyampaikan inti topik, wajah tokoh kunci, dan tanggal tayang dalam pandangan kilat 3 detik pertama.",
    pretestQuestions: [
      {
        id: 1807,
        bloom: "C2",
        stem: "Prinsip penataan ukuran, ketebalan, dan posisi elemen grafis pada poster sehingga mata pembaca secara otomatis tertuntun membaca informasi paling penting terlebih dahulu disebut...",
        options: [
          { key: "A", text: "Hierarki Visual (Visual Hierarchy)" },
          { key: "B", text: "Audio Staging" },
          { key: "C", text: "Keyframe Offset" },
          { key: "D", text: "Color Temperature" },
        ],
        correctKey: "A",
        explanation: "Hierarki visual mengatur urutan prioritas baca: Judul Utama yang besar dan kontras (Level 1), Narasumber dan Tanggal (Level 2), dan Detail Penyelenggara (Level 3).",
      },
      {
        id: 1808,
        bloom: "C2",
        stem: "Dua format ukuran rasio aspek kanvas desain poster digital yang paling banyak digunakan untuk promosi media sosial modern (Instagram Feed dan Instagram Story) adalah...",
        options: [
          { key: "A", text: "Rasio 1:1 / 4:5 (Feed Persegi) dan 9:16 (Story Vertikal)" },
          { key: "B", text: "Rasio 21:9 Bioskop" },
          { key: "C", text: "Ukuran Kertas Kuitansi Kasir" },
          { key: "D", text: "Rasio 4:3 TV Tabung" },
        ],
        correctKey: "A",
        explanation: "Format 1:1 atau 4:5 mendominasi feed postingan media sosial, sementara format 9:16 (1080x1920 piksel) mendominasi Instagram Story, WhatsApp Status, dan TikTok.",
      },
    ],
    materialCards: [
      {
        title: "1. Hakikat Poster Promosi di Era Kelebihan Informasi (Information Overload)",
        content: "Poster promosi digital bukan brosur cetak yang dipindahkan ke layar hp. Di tengah jutaan postingan media sosial, poster bertindak sebagai 'Visual Billboard' yang bertugas menghentikan jempol pemirsa (Thumb-Stopping Power) dalam 2 detik pertama.",
        didYouKnow: "Studi pelacakan mata (Eye-Tracking) membuktikan bahwa wajah manusia dengan kontak mata langsung ke kamera adalah elemen pertama yang ditatap oleh 85% pengguna media sosial pada sebuah poster.",
      },
      {
        title: "2. Hukum Tiga Tingkat Hierarki Visual (The 3-Level Visual Hierarchy)",
        content: "Level 1 (The Hook): Judul Program / Topik Akbar (font terbesar, kontras ekstrem). Level 2 (The Hook Details): Foto Tokoh Bintang Tamu, Tanggal & Jam Siar. Level 3 (The Action): Cara Menonton / Tautan Channel / Logo Sponsor (ukuran paling kecil di bawah).",
      },
      {
        title: "3. Standar Dimensi Kanvas Poster Media Sosial",
        content: "Square Feed: 1080 x 1080 piksel (Rasio 1:1). Portrait Feed Modern: 1080 x 1350 piksel (Rasio 4:5, memakan area layar HP 25% lebih luas). Vertical Story/Reels: 1080 x 1920 piksel (Rasio 9:16). Resolusi selalu 72 DPI sRGB.",
      },
      {
        title: "4. Aturan Tipografi Terbaca Mobile (Mobile-First Typography)",
        content: "Hindari font dekoratif yang meliuk-liuk rumit. Gunakan font Sans-serif tebal, bersih, dan modern (seperti Montserrat, Bebas Neue, Poppins, Outfit). Batasi penggunaan font maksimal DUA jenis keluarga font dalam satu poster.",
      },
      {
        title: "5. Psikologi Teori Warna Kontras Tinggi (Color Harmony)",
        content: "Gunakan kombinasi warna kontras tinggi yang mencolok di layar ponsel: Kuning di atas Hitam pekat, Putih di atas Biru Navy gelap, atau Jingga di atas Abu-abu arang. Hindari teks merah di atas latar belakang hijau yang menyiksa mata.",
        caseStudy: "Poster promosi menggunakan teks abu-abu tipis di atas foto latar belakang gedung yang ramai. Hasilnya: teks tidak terbaca saat dilihat di layar HP di bawah sinar matahari luar ruangan.",
      },
      {
        title: "6. Kekuatan 'Cutout' Foto Tokoh (Subject Isolation)",
        content: "Foto narasumber dipotong bersih dari latar belakangnya (Background Removal / Clipping Mask). Berikan pencahayaan tepi buatan (Rim Light / Outer Glow) tipis pada siluet tokoh agar terpisah tegas dari latar belakang poster.",
      },
      {
        title: "7. Pemanfaatan Ruang Negatif (Negative Space / White Space)",
        content: "Jangan penuhi setiap sudut kanvas dengan ornamen grafis. Ruang kosong di sekitar judul dan foto tokoh memberikan 'ruang bernapas' bagi mata pemirsa untuk fokus pada pesan utama tanpa merasa sesak dan pusing.",
      },
      {
        title: "8. Penulisan Judul yang Memikat (Compelling Headline Copywriting)",
        content: "Ubah judul kaku menjadi judul yang menggugah emosi. Jangan tulis: 'Seminar Pembahasan Kurikulum'. Ubah menjadi: 'Kupas Tuntas Rahasia Lolos Seleksi Kerja TV Nasional!' Lebih bertenaga, relevan, dan memikat warganet.",
      },
      {
        title: "9. Kejelasan Informasi Tanggal dan Zona Waktu (Broadcast Time Specs)",
        content: "Tuliskan waktu dengan presisi: 'SABTU, 24 OKTOBER 2026 | PUKUL 19.30 WIB'. Cantumkan zona waktu (WIB/WITA/WIT) karena siaran online dapat ditonton oleh pemirsa dari seluruh penjuru kepulauan Indonesia.",
      },
      {
        title: "10. Elemen 'Call to Action' (CTA) yang Menghasilkan Klik",
        content: "Sertakan tombol grafis palsu atau kalimat perintah jelas: 'LIVE ON YOUTUBE @BROMANTV', 'KLIK LINK DI BIO UNTUK PASANG PENGINGAT', atau pasang QR Code resolusi tinggi di sudut poster yang dapat dipindai instan.",
        didYouKnow: "Menambahkan badge merah bertuliskan '🔴 LIVE STREAMING' di pojok atas poster meningkatkan angka klik pendaftaran hingga 35%.",
      },
      {
        title: "11. Zonasi Aman pada Desain Story Vertikal (Story Safe Zone)",
        content: "Pada kanvas 1080x1920 (9:16), sisakan ruang kosong aman selebar 250 piksel di bagian paling atas (area nama akun profil Instagram) dan 250 piksel di bagian paling bawah (area kolom kirim pesan 'Send Message'). Teks penting wajib berada di area tengah.",
      },
      {
        title: "12. Penggunaan Bentuk Grafis Geometris dan Aksen Visual",
        content: "Gunakan garis pemisah tipis, kotak badge penanda tanggal, dan bentuk geometris modern untuk mengelompokkan informasi terkait (Chunking Principle) agar penonton mencerna data secara teratur.",
      },
      {
        title: "13. Pengolahan Tekstur Latar Belakang (Subtle Textures)",
        content: "Latar belakang satu warna polos terkadang terasa hampa. Tambahkan tekstur halus (gradasi warna gelap, partikel debu halus, atau pola grid arsitektur transparan 10%) untuk memberi kedalaman dimensi artistik.",
      },
      {
        title: "14. Konsistensi Identitas Visual Merek (Brand Identity Guidelines)",
        content: "Poster promosi harus konsisten mencantumkan logo resmi stasiun TV/sekolah di pojok kiri atas dan menggunakan warna identitas resmi merek (Brand Colors) agar penonton langsung mengenali stasiun pembuatnya.",
      },
      {
        title: "15. Software dan Alat Bantu Desain Grafis Digital",
        content: "Desainer profesional menggunakan Adobe Photoshop dan Illustrator untuk kebebasan masking layer dan efek warna tingkat lanjut. Untuk pembuatan cepat mobile, aplikasi seperti Canva Pro memberikan ribuan aset siap pakai berlisensi.",
      },
      {
        title: "16. Menguji Keterbacaan dengan 'The Squint Test' (Uji Mata Memicing)",
        content: "Picingkan mata Anda saat melihat draf poster dari kejauhan 1 meter. Jika Anda masih bisa membaca judul utama dan melihat foto tokoh dengan jelas saat pandangan kabur, maka hierarki visual poster Anda telah teruji sukses.",
      },
      {
        title: "17. Studi Kasus: Re-Desain Poster Acara Sekolah yang Sukses Viral",
        content: "Poster lama memuat 10 paragraf teks panjang sepi peminat. Desainer merombaknya: memangkas teks menjadi 1 judul besar 'FESTIVAL FILM SMK 2026', menonjolkan foto trofi emas megah, dan tanggal tayang. Pendaftar melonjak 300%.",
      },
      {
        title: "18. Format Ekspor File Grafis: PNG vs JPEG",
        content: "Untuk poster grafis dengan teks tajam dan warna pekat, SELALU ekspor dalam format PNG 24-bit. Hindari format JPEG ber-kompresi rendah yang menimbulkan bercak noda buram (artifact compression) di sekeliling huruf teks.",
      },
      {
        title: "19. Pembuatan Varian Ukuran Paket Promosi (Promotional Asset Kit)",
        content: "Dari satu konsep desain, desainer mengekspor 4 varian ukuran: (1) 1:1 Feed Instagram, (2) 9:16 Story/Reels, (3) 16:9 Banner Thumbnail YouTube, (4) Banner Header X/Twitter.",
      },
      {
        title: "20. Rangkuman & Keterampilan Desain Promosi Digital",
        content: "Poster digital promosi adalah duta pertama karya siaran Anda. Dengan penguasaan hierarki visual yang tajam, tipografi terbaca mobile, dan warna kontras yang memikat, Anda menjamin program siaran yang telah diproduksi dengan susah payah akan dipadati oleh jutaan penonton setia.",
      },
    ],
    video: {
      title: "Desain Poster Promosi Acara yang Memikat Menggunakan Aplikasi Grafis",
      embedUrl: "https://www.youtube.com/embed/k8j-L2u3T6E",
      guide: "Pelajari cara mengatur hierarki visual teks judul, teknik masking cutout foto narasumber, memilih kombinasi warna kontras, dan mengekspor PNG tajam untuk media sosial.",
    },
    gamePairs: [
      { id: 1, left: "Visual Hierarchy", right: "Prinsip penataan ukuran dan kontras elemen grafis pemandu urutan baca pemirsa" },
      { id: 2, left: "Safe Zone Story", right: "Area aman tengah kanvas 9:16 bebas dari tumpukan ikon profil dan kolom pesan medsos" },
      { id: 3, left: "Negative Space", right: "Ruang kosong di sekitar elemen desain untuk memberikan kenyamanan fokus mata" },
      { id: 4, left: "PNG 24-bit", right: "Format file ekspor gambar berkecepatan kompresi lossless tanpa artefak di sekeliling teks" },
      { id: 5, left: "Thumb-Stopping", right: "Daya pikat visual poster yang mampu menghentikan jempol warganet yang menggulir cepat" },
    ],
    caseTitle: "Studi Kasus 3: Poster Promosi Terpotong di Tampilan Feed Instagram",
    caseScenario: "Seorang desainer membuat poster promosi ukuran 9:16 vertikal (1080x1920). Saat diunggah ke feed akun Instagram sekolah yang berformat pratinjau persegi 1:1, bagian teks judul di atas dan informasi tanggal di bawah terpotong habis, hanya menyisakan bagian dada kemeja narasumber di layar kotak feed.",
    caseInstruction: "Jelaskan mengapa masalah cropping feed tersebut terjadi dan bagaimana cara mendesain kanvas dengan mematuhi 'Area Aman Persegi Tengah (Center Square Safe Zone)' agar poster vertikal tetap terbaca utuh di preview feed!",
    sampleQuestions: [
      {
        id: 1809,
        bloom: "C4",
        stem: "Mengapa teks judul utama pada poster promosi digital di media sosial disarankan tidak menggunakan font dekoratif kaligrafi yang meliuk-liuk tipis?",
        options: [
          { key: "A", text: "Karena garis tipis kaligrafi akan buram dan tidak terbaca saat poster tampil dalam ukuran thumbnail kecil di layar smartphone pengguna" },
          { key: "B", text: "Karena font kaligrafi dilarang oleh pemilik platform media sosial" },
          { key: "C", text: "Agar warna poster tidak berubah menjadi hitam putih" },
          { key: "D", text: "Karena ukuran file font kaligrafi terlalu besar untuk internet" },
        ],
        correctKey: "A",
        explanation: "Mayoritas pengguna media sosial mengakses konten melalui layar ponsel berukuran kecil; font tebal Sans-serif menjamin keterbacaan instan dalam sekali lirik.",
      },
    ],
    lkpd: {
      title: "LKPD F8-K3: Perancangan Poster Digital Promosi Program Siaran Live (Format 1:1 & 9:16)",
      objective: "Peserta didik mampu merancang poster digital promosi siaran live streaming berhierarki visual kuat menggunakan aplikasi Photoshop / Canva dalam format Feed dan Story.",
      tools: ["Komputer / Laptop", "Software Desain (Photoshop / Illustrator / Canva)", "Foto Portret Narasumber"],
      steps: [
        "Pilih topik siaran: 'Bedah Rahasia Karier Broadcasting SMK 2026'.",
        "Buat kanvas ukuran Feed (1080x1080 piksel) dan Story (1080x1920 piksel).",
        "Lakukan cutout foto narasumber dan terapkan efek outer glow tipis.",
        "Terapkan 3 tingkat hierarki visual: Judul Utama Tebal (Level 1), Foto & Tanggal Siar (Level 2), Logo Channel & CTA (Level 3).",
        "Gunakan kombinasi warna kontras tinggi (misal Hitam, Emas, dan Putih).",
        "Ekspor file ke format PNG resolusi tinggi dan lakukan 'The Squint Test' untuk memeriksa keterbacaan.",
      ],
      outputFormat: "File Gambar Poster Format PNG (Versi 1:1 Feed dan Versi 9:16 Story) & Laporan Konsep Desain.",
    },
    journalQuestions: {
      q1: "Bagaimana cara Anda menahan godaan untuk tidak memasukkan terlalu banyak teks ke dalam sebuah poster promosi?",
      q2: "Mengapa keselarasan warna antara poster promosi dan tampilan panggung siaran langsung sangat penting?",
      q3: "Pengalaman apa yang Anda peroleh saat menguji keterbacaan poster di layar smartphone teman Anda?",
    },
    kktpIndicators: [
      "Mampu mengaplikasikan prinsip hierarki visual (Visual Hierarchy) pada perancangan poster digital promosi program.",
      "Mampu mengonfigurasi dimensi kanvas poster media sosial (1:1 Feed dan 9:16 Story Safe Zone) dengan benar.",
      "Mampu memilih kombinasi tipografi dan palet warna kontras tinggi yang ramah keterbacaan layar smartphone.",
    ],
  },

  // =========================================================================
  // KONTEN 4: Promosi digital & interaksi audiens medsos (20 Slide)
  // =========================================================================
  {
    id: "f8-k4",
    order: 4,
    title: "4. Promosi digital & interaksi audiens medsos",
    shortTitle: "Promosi & Interaksi Medsos",
    summary: "Strategi kampanye pra-siaran media sosial, pembuatan video teaser pendek (Shorts/Reels/TikTok), teknik live chat moderation, manajemen polling real-time, dan retensi penonton.",
    kompetensi: ["1. Merancang Kampanye", "2. Mengelola Komunitas"],
    tujuanPembelajaran: [
      "Peserta didik mampu merancang strategi kampanye promosi digital terpadu (Teaser, Countdown Story, dan Live Clipping).",
      "Peserta didik mampu mengelola interaksi penonton siaran daring melalui teknik live chat moderation dan overlay interaktif.",
    ],
    hookQuestion: "Mengapa video cuplikan teaser pendek berdurasi 15 detik di TikTok sering kali berhasil mendatangkan ribuan penonton ke siaran live streaming YouTube daripada postingan teks panjang di Facebook?",
    hookContext: "Algoritma media sosial video pendek (Short-form Video) dirancang untuk memicu rasa penasaran instan (FOMO - Fear of Missing Out). Memotong momen paling mengejutkan dari rekaman latihan menjadi teaser vertikal adalah strategi paling ampuh membanjiri ruang siaran online Anda.",
    pretestQuestions: [
      {
        id: 1810,
        bloom: "C2",
        stem: "Video promosi pendek berdurasi 15 hingga 30 detik yang memuat potongan adegan paling menarik dan mengejutkan untuk memancing rasa penasaran pemirsa menjelang penayangan siaran disebut...",
        options: [
          { key: "A", text: "Video Teaser / Trailer Promo" },
          { key: "B", text: "Full Master Tape" },
          { key: "C", text: "Color Bars Pattern" },
          { key: "D", text: "Audio Patch Sheet" },
        ],
        correctKey: "A",
        explanation: "Video Teaser bertugas memberikan 'bocoran' kilat yang memikat emosi calon penonton agar menandai kalender dan menonton siaran langsung.",
      },
      {
        id: 1811,
        bloom: "C2",
        stem: "Tindakan memotong klip momen viral atau pernyataan paling menarik dari siaran live yang sedang berlangsung untuk segera diunggah ke TikTok/Instagram saat acara masih berjalan disebut...",
        options: [
          { key: "A", text: "Real-Time Live Clipping" },
          { key: "B", text: "Offline Ingest" },
          { key: "C", text: "Tape Archiving" },
          { key: "D", text: "De-Rigging" },
        ],
        correctKey: "A",
        explanation: "Live Clipping memanfaatkan momentum viral seketika untuk menarik pengguna media sosial lain segera melompat bergabung ke siaran langsung yang sedang tayang.",
      },
    ],
    materialCards: [
      {
        title: "1. Paradigma Pemasaran Siaran Era Media Sosial",
        content: "Siaran hebat tanpa promosi digital adalah seperti menyalakan kembang api di dalam gua gelap: megah namun tidak ada yang melihat. Promosi digital adalah lokomotif penarik massa pemirsa menuju ruang penyiaran daring Anda.",
        didYouKnow: "Rata-rata 60% pemirsa siaran langsung YouTube dan TikTok memutuskan menonton karena melihat video teaser di beranda medsos mereka dalam 24 jam terakhir.",
      },
      {
        title: "2. Fase Kampanye Promosi: H-7, H-3, H-1, dan Hari H",
        content: "H-7 (Pengumuman Teaser Poster & Topik), H-3 (Peluncuran Video Teaser Cuplikan Bintang Tamu), H-1 (Stiker Hitung Mundur Countdown di Instagram Story), Hari H (Pengingat 1 Jam Menjelang Siar & Live Clipping saat acara berlangsung).",
      },
      {
        title: "3. Membuat Video Teaser Vertikal Berdaya Pikat Tinggi (Reels/Shorts/TikTok)",
        content: "Durasi ideal 15–25 detik dalam format 9:16. Formula konten: 3 detik pertama (Pernyataan kontroversial / pertanyaan membakar rasa penasaran) -> 10 detik isi (Cuplikan emosional narasumber) -> 5 detik penutup (Jadwal tayang & ajakan klik link bio).",
      },
      {
        title: "4. Pemanfaatan Stiker Interaktif Instagram Story (Countdown & Reminder)",
        content: "Gunakan stiker 'Countdown Timer' di Instagram Story. Penonton yang mengetuk stiker tersebut akan otomatis menerima notifikasi pengingat di ponsel mereka tepat saat siaran dimulai di YouTube.",
      },
      {
        title: "5. Strategi Penulisan Teks Keterangan (Caption Copywriting) Medsos",
        content: "Caption memuat: (1) Headline pembuka berhuruf kapital, (2) Cerita ringkas latar belakang masalah, (3) 3 poin manfaat apa yang akan didapat penonton jika menonton siaran, (4) Call to Action link tautan, (5) Tagar terukur (3–5 hashtag relevan).",
        caseStudy: "Akun sekolah mengunggah poster tanpa caption penjelasan apa pun. Akibatnya warganet tidak paham apa inti acara tersebut dan tidak ada yang mendaftar.",
      },
      {
        title: "6. Optimalisasi Kata Kunci Judul dan Tag Video (SEO YouTube)",
        content: "Judul siaran YouTube harus memuat kata kunci yang sering diketik orang di Google: gunakan formula 'Topik Utama + Manfaat Nyata + Nama Tokoh'. Contoh: 'Cara Mengoperasikan Kamera Studio Televisi untuk Pemula bersama Pakar Broadcast'.",
      },
      {
        title: "7. Pembuatan Desain Thumbnail YouTube yang Menghasilkan CTR Tinggi",
        content: "Thumbnail adalah penentu 80% rasio klik-tayang (Click-Through Rate / CTR). Syarat wajib: Wajah ekspresif tokoh dengan tatapan mata kuat (Close-Up), teks judul maksimal 4 kata besar tebal, dan latar belakang ber-kontras warna tinggi.",
      },
      {
        title: "8. Alur Kerja Tim 'Live Clipping' Saat Siaran Berlangsung",
        content: "Seorang asisten editor bertugas merekam layar saat siaran live berlangsung. Begitu narasumber mengeluarkan pernyataan emas atau kejadian lucu, editor memotong klip 30 detik, memberi subtitle otomatis, dan mengunggahnya ke TikTok dalam 5 menit.",
      },
      {
        title: "9. Manajemen Komentar dan Penyematan Pesan (Pinned Comment)",
        content: "Sematkan pesan penting di kolom chat paling atas: memuat link modul materi gratis, nomor rekening donasi, atau pertanyaan pemantik diskusi agar penonton yang baru bergabung langsung memahami konteks.",
      },
      {
        title: "10. Penanganan Komentar Negatif dan Perusuh (Troll Management Protocol)",
        content: "Protokol moderator terhadap perusuh chat: (1) Peringatan pertama via chat pribadi, (2) Timeout 5 menit (penonton tidak bisa mengirim pesan), (3) Blokir permanen (Hide User from Channel) jika mengulangi kata-kata kasar/SARA.",
        didYouKnow: "YouTube memiliki fitur 'Block Words' otomatis yang memfilter ribuan kata makian dan langsung memasukkannya ke folder peninjauan sebelum terbaca publik.",
      },
      {
        title: "11. Menjalankan Polling Real-Time di Layar Siaran",
        content: "Pasang jajak pendapat langsung di YouTube: 'Menurut warganet, profesi apa yang paling menantang di studio TV? (A) Juru Kamera, (B) Sutradara'. Host membaca persentase grafik yang bergerak dinamis dan mendiskusikannya.",
      },
      {
        title: "12. Membaca Pertanyaan Terbaik Penonton dengan 'On-Screen Graphic'",
        content: "Gunakan software overlay (seperti StreamYard, vMix Social, atau OBS Chat Overlay) untuk menampilkan foto profil dan teks pertanyaan penonton dari kolom komentar langsung ke layar siaran televisi secara elegan.",
      },
      {
        title: "13. Kolaborasi Silang Antar Akun Kreator (Collab Post & Cross-Promotion)",
        content: "Gunakan fitur 'Invite Collaborator' di Instagram sehingga poster promosi tayang bersamaan di akun sekolah dan akun media sosial narasumber, melipatgandakan jangkauan penonton tanpa biaya iklan.",
      },
      {
        title: "14. Pemanfaatan Grup Komunitas (WhatsApp Channel & Telegram)",
        content: "Sebarkan tautan siaran langsung ke grup komunitas alumni, grup sekolah, dan forum penggemar perfilman 15 menit sebelum on-air dengan pesan pengantar yang sopan dan relevan.",
      },
      {
        title: "15. Evaluasi Retensi Penonton (Audience Retention Curve)",
        content: "Setelah siaran selesai, buka analitik retensi: pelajari kurva grafik penonton. Deteksi pada menit ke berapa penonton paling banyak keluar, dan evaluasi apakah segmen tersebut membosankan atau terjadi kendala audio.",
      },
      {
        title: "16. Mengubah Siaran Panjang Menjadi Konten Mikro Pasca-Siar (Content Repurposing)",
        content: "Satu siaran live berdurasi 60 menit tidak dibiarkan mengendap. Pecah menjadi 5 video pendek TikTok Reels, 1 artikel rangkuman blog naskah, dan 3 infografis kutipan kata bijak narasumber untuk promosi berkelanjutan.",
      },
      {
        title: "17. Studi Kasus: Meningkatkan Penonton dari 50 Menjadi 2.000 Melalui Live Clipping",
        content: "Sebuah debat siswa SMK hanya ditonton 50 orang di awal. Tim memotong momen adu argumen cerdas 20 detik dan mengunggahnya ke TikTok dengan caption 'Debat SMK Rasa DPR!'. Klip FYP dan 2.000 penonton baru berbondong-bondong masuk ke live YouTube.",
      },
      {
        title: "18. Etika Privasi Netizen & Izin Mengutip Komentar Warganet",
        content: "Jika menampilkan foto atau karya penonton di layar siaran, sebutkan nama kredit akun mereka secara terhormat dan hindari menyebarkan nomor telepon atau identitas pribadi penonton ke layar publik (Doxxing Protection).",
      },
      {
        title: "19. Pemanfaatan Iklan Berbayar Media Sosial (Meta Ads & TikTok Ads)",
        content: "Untuk event akbar beranggaran komersial, tim promosi mengalokasikan dana iklan bersponsor (Ads) dengan menargetkan audiens spesifik: usia 15-20 tahun, minat perfilman dan penyiaran, di wilayah provinsi target.",
      },
      {
        title: "20. Rangkuman & Keterampilan Manajer Promosi Siaran Daring",
        content: "Promosi digital dan interaksi warganet adalah sayap kembar yang menerbangkan karya siaran online menuju puncak kejayaan. Dengan strategi kampanye kreatif, keramahan komunikasi komunitas, dan pengelolaan interaksi yang cerdas, Anda membangun ekosistem penonton yang setia dan abadi.",
      },
    ],
    video: {
      title: "Membangun Interaksi Penonton dan Strategi Engagement saat Siaran Online",
      embedUrl: "https://www.youtube.com/embed/n4p_q0zM9W0",
      guide: "Pelajari cara menyusun video teaser vertikal berdaya pikat tinggi, mengoperasikan modul live chat overlay di layar siaran, dan teknik memandu polling penonton.",
    },
    gamePairs: [
      { id: 1, left: "Live Clipping", right: "Memotong momen emas siaran langsung dan segera mengunggahnya ke medsos saat acara tayang" },
      { id: 2, left: "CTR", right: "Click-Through Rate persentase rasio klik penonton terhadap tampilan gambar thumbnail" },
      { id: 3, left: "Pinned Comment", right: "Pesan komentar yang disematkan di baris paling atas live chat untuk informasi penting" },
      { id: 4, left: "Content Repurposing", right: "Mendaur ulang rekaman siaran panjang menjadi puluhan konten video pendek media sosial" },
      { id: 5, left: "Automod", right: "Sistem penyaring kata kunci otomatis untuk memblokir komentar makian dan bot spam" },
    ],
    caseTitle: "Studi Kasus 4: Serangan Bot Spam Komentar Kotor Saat Siaran Live Sekolah",
    caseScenario: "Di tengah siaran langsung pentas seni sekolah yang disaksikan para orang tua dan kepala dinas pendidikan, kolom live chat YouTube tiba-tiba dibanjiri ratusan pesan bot otomatis yang mempromosikan situs judi online dan kata-kata tidak senonoh.",
    caseInstruction: "Sebagai Chat Moderator dan Social Media Specialist, tindakan tanggap darurat apa yang Anda lakukan dalam waktu 30 detik di panel kontrol YouTube Studio untuk membersihkan kolom komentar dan menghentikan serangan spam tersebut!",
    sampleQuestions: [
      {
        id: 1812,
        bloom: "C4",
        stem: "Mengapa desain Thumbnail video siaran langsung di YouTube disarankan menampilkan foto close-up wajah manusia dengan ekspresi emosi yang kuat dibandingkan hanya menampilkan gambar logo teks saja?",
        options: [
          { key: "A", text: "Karena secara psikologis mata manusia terprogram secara alami untuk langsung terpaku pada kontak tatapan mata dan ekspresi wajah sesama manusia, menghasilkan angka klik yang jauh lebih tinggi" },
          { key: "B", text: "Karena YouTube melarang thumbnail yang tidak ada wajah manusianya" },
          { key: "C", text: "Agar resolusi gambar menjadi lebih kecil" },
          { key: "D", text: "Merupakan syarat mutlak monetisasi iklan Google" },
        ],
        correctKey: "A",
        explanation: "Studi neuro-marketing membuktikan bahwa wajah manusia ekspresif memicu koneksi empati instan yang mendorong jempol penonton untuk menekan tombol klik video.",
      },
    ],
    lkpd: {
      title: "LKPD F8-K4: Produksi Video Teaser Vertikal 20 Detik & Desain Thumbnail YouTube CTR Tinggi",
      objective: "Peserta didik mampu memproduksi video teaser promosi vertikal 9:16 durasi 20 detik untuk media sosial dan mendesain gambar Thumbnail YouTube 16:9 berdaya pikat tinggi.",
      tools: ["Smartphone / Kamera", "Software Editing Video Vertikal (CapCut / Premiere Pro)", "Software Desain (Canva / Photoshop)"],
      steps: [
        "Rancang video teaser promosi 20 detik berformat vertikal 9:16: Hook 3 detik awal, Cuplikan materi 12 detik, dan Call to Action 5 detik.",
        "Tambahkan efek musik bersemangat dan takarir teks otomatis (Auto-Captions).",
        "Rancang Thumbnail YouTube 16:9 (1280x720 piksel): pasang foto close-up wajah berekspresi, teks judul maksimal 4 kata besar tebal, dan logo channel.",
        "Uji tampilan thumbnail pada ukuran pratinjau kecil di layar smartphone.",
      ],
      outputFormat: "File Video Teaser MP4 20 Detik & File Gambar Thumbnail YouTube Format PNG.",
    },
    journalQuestions: {
      q1: "Mengapa promosi sebelum siaran dimulai sama pentingnya dengan pelaksanaan siaran itu sendiri?",
      q2: "Bagaimana cara Anda menjaga suasana kolom live chat tetap positif, edukatif, dan ramah bagi semua kalangan penonton?",
      q3: "Nilai kepemimpinan apa yang Anda pelajari saat bertindak sebagai garda terdepan moderator komunitas digital?",
    },
    kktpIndicators: [
      "Mampu merancang alur strategi kampanye promosi digital pra-siar (H-7 hingga Hari H) terpadu.",
      "Mampu memproduksi video teaser vertikal (9:16) dan gambar Thumbnail YouTube yang memiliki rasio klik tinggi (CTR).",
      "Mampu menerapkan prosedur moderasi komentar live chat dan penanganan serangan komentar spam secara tanggap.",
    ],
  },

  // =========================================================================
  // KONTEN 5: Regulasi medsos & hak cipta siaran online (20 Slide)
  // =========================================================================
  {
    id: "f8-k5",
    order: 5,
    title: "5. Regulasi medsos & hak cipta siaran online",
    shortTitle: "Regulasi & Hak Cipta Online",
    summary: "Hukum hak cipta digital, sistem Content ID YouTube, pembatasan klaim hak cipta musik background, lisensi Creative Commons / Fair Use, UU ITE di Indonesia, dan regulasi perlindungan privasi anak (COPPA).",
    kompetensi: ["1. Menganalisis", "2. Menerapkan Kepatuhan"],
    tujuanPembelajaran: [
      "Peserta didik mampu menganalisis mekanisme algoritma Content ID dan prosedur perizinan hak cipta musik penyiaran daring.",
      "Peserta didik mampu menerapkan kepatuhan hukum UU ITE, doktrin Fair Use, dan perlindungan privasi penonton anak (COPPA).",
    ],
    hookQuestion: "Jika siaran langsung konser amal sekolah Anda mendadak dibisukan suaranya (muted) atau dimatikan paksa oleh YouTube tepat di tengah lagu ke-3, mengapa hal itu terjadi secara otomatis tanpa ada campur tangan manusia?",
    hookContext: "Di platform streaming modern, algoritma cerdas Content ID bekerja 24 jam sehari memindai sidik jari audio digital (Acoustic Fingerprint). Memutar musik komersial berhak cipta tanpa lisensi resmi akan langsung memicu pemblokiran otomatis seketika saat siaran mengudara.",
    pretestQuestions: [
      {
        id: 1813,
        bloom: "C2",
        stem: "Sistem kecerdasan buatan otomatis milik YouTube yang memindai sidik jari audio dan video untuk mencocokkannya dengan database pemilik hak cipta resmi dunia disebut...",
        options: [
          { key: "A", text: "YouTube Content ID System" },
          { key: "B", text: "Google Maps Tracking" },
          { key: "C", text: "Audio Equalizer" },
          { key: "D", text: "DNS Server" },
        ],
        correctKey: "A",
        explanation: "Content ID membandingkan konten audio visual yang diunggah dengan database jutaan karya pemilik hak cipta terdaftar secara otomatis.",
      },
      {
        id: 1814,
        bloom: "C2",
        stem: "Konsekuensi hukum terberat di platform YouTube jika sebuah channel menerima 3 kali teguran pelanggaran hak cipta resmi (3 Copyright Strikes) dalam kurun waktu 90 hari adalah...",
        options: [
          { key: "A", text: "Penutupan permanen seluruh channel YouTube beserta penghapusan seluruh video yang ada di dalamnya" },
          { key: "B", text: "Penurunan resolusi video menjadi hitam putih" },
          { key: "C", text: "Kewajiban membayar denda pulsa ke kantor pos" },
          { key: "D", text: "Wajib menyanyikan lagu kebangsaan" },
        ],
        correctKey: "A",
        explanation: "Aturan 'Three Strikes Policy' YouTube berakibat fatal: penghentian akun channel secara permanen dan pemblokiran pembuatan channel baru bagi pemilik akun.",
      },
    ],
    materialCards: [
      {
        title: "1. Hak Cipta di Jagat Digital (Digital Copyright Law)",
        content: "Di era penyiaran online, setiap rekaman lagu, klip video, dan gambar foto memiliki pemilik hak cipta intelektual (Copyright Owner). Menyiarkan karya orang lain tanpa izin lisensi tertulis adalah pelanggaran hukum yang memiliki sanksi pidana dan perdata.",
        didYouKnow: "Di Indonesia, pelanggaran hak cipta penyiaran komersial diatur dalam Undang-Undang No. 28 Tahun 2014 tentang Hak Cipta dengan ancaman denda hingga miliaran rupiah.",
      },
      {
        title: "2. Cara Kerja Sistem YouTube Content ID",
        content: "Label rekaman musik mengunggah file master audio ke database Content ID. Sistem menciptakan 'Acoustic Fingerprint' (sidik jari audio unik). Saat Anda menyiarkan live streaming, algoritma YouTube mencocokkan audio setiap 2 detik. Jika cocok, sistem langsung mengambil tindakan otomatis.",
      },
      {
        title: "3. Tiga Jenis Tindakan Content ID: Monitize, Track, Block",
        content: "Pemilik hak cipta dapat memilih: (1) Track (hanya melihat data statistik penonton), (2) Monetize (menaruh iklan dan seluruh pendapatan uang siaran Anda diambil pemilik lagu), (3) Block (mematikan audio siaran atau memblokir penayangan di seluruh dunia).",
      },
      {
        title: "4. Perbedaan: Copyright Claim vs Copyright Strike",
        content: "Copyright Claim (Klaim Content ID): klaim otomatis yang tidak merusak reputasi channel (biasanya hanya pengalihan monetisasi). Copyright Strike (Teguran Hak Cipta): gugatan hukum resmi pemilik karya yang mencatatkan pelanggaran berat di channel Anda (3 strikes = penutupan akun).",
        caseStudy: "Sebuah channel stasiun TV lokal ditutup permanen oleh YouTube karena menerima 3 Copyright Strike berturut-turut setelah menayangkan siaran sepak bola tanpa membeli izin hak siar resmi.",
      },
      {
        title: "5. Mitos Seputar Hak Cipta di Media Sosial",
        content: "Mitos salah: 'Menulis 'No Copyright Infringement Intended' di deskripsi membuat video aman.' FAKTA: Kalimat tersebut tidak memiliki kekuatan hukum sama sekali. Membeli lagu di iTunes atau Spotify juga tidak memberi Anda hak menyiarkannya ke publik.",
      },
      {
        title: "6. Solusi Musik Legal: Perpustakaan Musik Bebas Royalti (Royalty-Free Music)",
        content: "Gunakan musik berlisensi legal: YouTube Audio Library (gratis disediakan Google), atau berlangganan platform musik penyiaran komersial resmi seperti Epidemic Sound, Artlist, atau AudioJungle yang memberikan sertifikat lisensi bebas klaim (License Clearance).",
      },
      {
        title: "7. Memahami Lisensi Creative Commons (CC BY, CC NC, CC SA)",
        content: "CC BY (Boleh digunakan asal mencantumkan nama pembuat karya). CC NC (Hanya untuk keperluan Non-Komersial, tidak boleh menghasilkan uang). CC ND (Tidak boleh dimodifikasi atau diedit). CC 0 (Domain Publik, bebas digunakan tanpa syarat).",
      },
      {
        title: "8. Doktrin Penggunaan Wajar (Fair Use Doctrine)",
        content: "Fair Use memperbolehkan penggunaan cuplikan singkat karya berhak cipta tanpa izin HANYA untuk 4 tujuan: (1) Kritik dan Ulasan, (2) Laporan Berita, (3) Pengajaran Akademis, (4) Riset Ilmiah. Mengambil seluruh lagu untuk musik latar pesta BUKAN Fair Use.",
      },
      {
        title: "9. Empat Faktor Penentu Kelayakan Fair Use di Pengadilan",
        content: "(1) Tujuan penggunaan (apakah edukatif atau komersial mencari uang), (2) Sifat karya asli, (3) Jumlah dan porsi materi yang diambil (apakah hanya 5 detik atau seluruh lagu), (4) Dampak ekonomi terhadap nilai pasar karya asli.",
      },
      {
        title: "10. Kepatuhan Undang-Undang ITE di Indonesia (UU No. 1 Tahun 2024)",
        content: "Penyiaran daring di Indonesia tunduk pada UU ITE: Pasal 27A (larangan pencemaran nama baik/penyerangan kehormatan), Pasal 28 (larangan penyebaran berita bohong/hoaks yang merugikan konsumen), dan larangan konten asusila serta SARA.",
        didYouKnow: "Host siaran langsung yang membacakan gosip fitnah di media sosial dapat dijerat pasal pencemaran nama baik UU ITE bersama-sama dengan pihak yang menyiarkannya.",
      },
      {
        title: "11. Perlindungan Privasi Anak di Dunia Maya: Regulasi COPPA",
        content: "COPPA (Children's Online Privacy Protection Act) mewajibkan kreator menyatakan: 'Apakah video ini dibuat untuk anak-anak? (Made for Kids)'. Jika konten ditujukan untuk anak, sistem otomatis mematikan kolom komentar dan iklan yang dipersonalisasi.",
      },
      {
        title: "12. Hak Privasi & Formulir Izin Narasumber (Talent Release Form)",
        content: "Setiap orang yang wajah atau suaranya tampil di siaran langsung Anda berhak atas privasi. Seluruh pengisi acara wajib menandatangani formulir Talent Release yang menyatakan persetujuan rekaman wajah mereka disiarkan dan dimonetisasi di internet.",
      },
      {
        title: "13. Hak Siar Wilayah Geografis (Geo-Blocking / Regional Restrictions)",
        content: "Program yang membeli lisensi siar hanya untuk wilayah Indonesia wajib mengaktifkan fitur 'Geo-Blocking' di encoder YouTube agar siaran tidak dapat diakses dari IP negara lain yang hak siarnya dipegang oleh stasiun televisi asing.",
      },
      {
        title: "14. Etika Penyiaran Konten Sensitif & Batasan Usia (Age-Gating)",
        content: "Jika siaran membahas topik medis pembedahan atau diskusi hukum dewasa, aktifkan fitur 'Age Restriction' (Batas Usia 18+) agar tayangan tidak dapat diakses oleh anak di bawah umur tanpa login akun terverifikasi.",
      },
      {
        title: "15. Menghadapi Klaim Hak Cipta Palsu (Dispute / Counter Notification)",
        content: "Jika Anda memiliki lisensi resmi namun tetap terkena klaim bot Content ID otomatis, gunakan prosedur resmi 'Dispute / Sengketa'. Unggah bukti invoice lisensi Anda; pihak pengklaim memiliki waktu 30 hari untuk merilis klaim atau mengajukan gugatan pengadilan.",
      },
      {
        title: "16. Etika Penempatan Tautan Afiliasi dan Sponsor (Sponsored Disclosure)",
        content: "Pedoman FTC dan regulasi penyiaran mewajibkan kreator mencentang opsi: 'Video ini memuat promosi berbayar (Includes Paid Promotion)'. Teks peringatan transparan wajib muncul di layar agar pemirsa tahu bahwa produk tersebut di-endorse.",
      },
      {
        title: "17. Studi Kasus: Siaran Live Dimatikan YouTube Saat Memutar Lagu Nasional",
        content: "Siaran upacara sekolah mendadak dimatikan YouTube saat menyanyikan lagu nasional. Penyebabnya: panitia memutar musik iringan MP3 karya rekaman orkestra label asing yang terdaftar di Content ID. Solusi: iringan musik wajib dimainkan live oleh siswa sendiri.",
      },
      {
        title: "18. Standar Keamanan Akun Penyiaran: Autentikasi 2 Langkah (2FA)",
        content: "Akun channel YouTube stasiun siaran bernilai aset tinggi. Seluruh tim yang memiliki hak akses email wajib mengaktifkan 2-Factor Authentication (2FA) berbasis kunci fisik (YubiKey) untuk mencegah pembajakan akun (Channel Hacking).",
      },
      {
        title: "19. Kebijakan Pedoman Komunitas Platform (Community Guidelines)",
        content: "Selain hak cipta, kreator wajib mematuhi Community Guidelines: larangan tayangan kekerasan grafis, konten berbahaya yang mendorong aksi bunuh diri/menantang maut, dan ujaran kebencian terhadap kelompok rentan.",
      },
      {
        title: "20. Rangkuman & Integritas Hukum Kreator Penyiaran Digital",
        content: "Mematuhi regulasi hak cipta dan kode etik digital bukan sekadar menghindari pemblokiran akun, melainkan menghargai jerih payah keringat sesama seniman dan kreator. Jadilah insan penyiaran yang cerdas, bertanggung jawab, dan berintegritas hukum tinggi.",
      },
    ],
    video: {
      title: "Menghindari Teguran Hak Cipta (Copyright Strike) saat Siaran Live Online",
      embedUrl: "https://www.youtube.com/embed/dHQnC4aC1YQ",
      guide: "Pelajari bagaimana sistem Content ID bekerja memindai audio live, cara mendapatkan musik bebas royalti legal, memahami doktrin Fair Use, dan mengajukan sanggahan sengketa (Dispute).",
    },
    gamePairs: [
      { id: 1, left: "Content ID", right: "Sistem algoritma pemindai sidik jari audio digital otomatis pendeteksi hak cipta" },
      { id: 2, left: "Copyright Strike", right: "Teguran hukum resmi pelanggaran hak cipta berakibat ancaman penutupan channel" },
      { id: 3, left: "Royalty-Free", right: "Karya musik yang memiliki izin lisensi legal untuk disiarkan bebas klaim" },
      { id: 4, left: "Fair Use", right: "Doktrin hukum penggunaan karya berhak cipta terbatas untuk kritik dan pendidikan" },
      { id: 5, left: "Talent Release", right: "Surat perjanjian persetujuan izin penyiaran wajah dan suara dari pengisi acara" },
    ],
    caseTitle: "Studi Kasus 5: Siaran Musik Amal Dibisukan Otomatis oleh Sistem Content ID",
    caseScenario: "Sebuah program siaran langsung amal siswa SMK mengumpulkan dana beasiswa. Di segmen 2, panitia memutar lagu populer berhak cipta dari penyanyi terkenal dunia sebagai musik pengiring penayangan foto siswa. Tiba-tiba di menit ke-15, sistem YouTube mematikan seluruh audio siaran secara otomatis (Stream Muted) di hadapan 1.000 penonton.",
    caseInstruction: "Sebagai Manajer Regulasi dan Hak Cipta Siaran, jelaskan mengapa sistem Content ID melakukan tindakan pembisuan otomatis tersebut dan bagaimana POS penyusunan bank musik legal (Royalty-Free Music Library) yang wajib dipatuhi panitia sebelum acara berlangsung!",
    sampleQuestions: [
      {
        id: 1815,
        bloom: "C5",
        stem: "Jika seorang jurnalis siaran daring ingin menggunakan potongan rekaman video berita 10 detik dari stasiun televisi lain untuk diulas dan dikritik faktanya dalam program investigasi, tindakan yang paling sah menurut doktrin Fair Use dan etika penyiaran adalah...",
        options: [
          { key: "A", text: "Menggunakan cuplikan secara singkat seperlunya, menyertakan kredit nama sumber media asal secara transparan di layar, dan memfokuskan siaran pada analisis kritik substantif" },
          { key: "B", text: "Mengunggah ulang seluruh rekaman berita tanpa izin dan mematikan kolom komentar" },
          { key: "C", text: "Menghapus logo stasiun TV asal dan mengakuinya sebagai karya buatan sendiri" },
          { key: "D", text: "Menjual rekaman tersebut ke stasiun televisi lain" },
        ],
        correctKey: "A",
        explanation: "Doktrin Fair Use memperbolehkan kutipan pendek karya berhak cipta untuk tujuan kritik dan ulasan berita, asalkan disertai atribusi sumber yang jelas dan proporsional.",
      },
    ],
    lkpd: {
      title: "LKPD F8-K5: Audit Kepatuhan Hak Cipta Audio & Pembuatan Surat Izin Talent Release",
      objective: "Peserta didik mampu melakukan audit lisensi hak cipta terhadap aset audio visual program siaran dan menyusun dokumen surat perjanjian izin penyiaran (Talent Release Form).",
      tools: ["Komputer / Laptop", "Template Talent Release Form", "Akses Perpustakaan YouTube Audio Library"],
      steps: [
        "Identifikasi 3 aset musik yang akan digunakan dalam produksi siaran daring sekolah.",
        "Unduh musik legal dari YouTube Audio Library dan simpan bukti lisensi atribusinya.",
        "Susun dokumen surat perjanjian 'Talent Release Form' memuat klausul izin penyiaran, identitas pengisi acara, dan tanda tangan bermaterai.",
        "Lakukan simulasi penanganan klaim Content ID: rumuskan surat sanggahan sengketa (Dispute Letter) resmi berbahasa formal.",
      ],
      outputFormat: "Dokumen Audit Lisensi Musik & Berkas Talent Release Form Siap Pakai Format PDF.",
    },
    journalQuestions: {
      q1: "Mengapa penghargaan terhadap hak cipta karya orang lain merupakan cerminan martabat seorang kreator profesional?",
      q2: "Bagaimana perasaan Anda jika video karya orisinal yang Anda buat dengan susah payah dijiplak orang lain tanpa izin?",
      q3: "Komitmen etika apa yang akan selalu Anda pegang teguh saat memproduksi konten di media sosial ke depan?",
    },
    kktpIndicators: [
      "Mampu menganalisis alur kerja sistem YouTube Content ID dan membedakan Copyright Claim vs Copyright Strike.",
      "Mampu menerapkan sumber daya audio bebas royalti (Royalty-Free) dan kepatuhan doktrin Fair Use secara legal.",
      "Mampu menyusun dokumen legalitas penyiaran (Talent Release Form) dan menerapkan etika regulasi UU ITE.",
    ],
  },
];
