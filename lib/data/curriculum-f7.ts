import type { ElemenContentItem } from "./curriculum-types";

export const F7_CONTENTS: ElemenContentItem[] = [
  // =========================================================================
  // KONTEN 1: Kebutuhan teknis hardware & software NLE (20 Slide)
  // =========================================================================
  {
    id: "f7-k1",
    order: 1,
    title: "1. Kebutuhan teknis hardware & software NLE",
    shortTitle: "Hardware & Software NLE",
    summary: "Spesifikasi workstation editing video profesional, arsitektur CPU/GPU/RAM, media penyimpanan berkecepatan tinggi (NVMe Scratch Disk), kalibrasi monitor warna Rec.709, dan ekosistem software NLE broadcast.",
    kompetensi: ["1. Menganalisis", "2. Mengonfigurasi"],
    tujuanPembelajaran: [
      "Peserta didik mampu menganalisis kebutuhan spesifikasi hardware workstation editing audio visual berstandar industri siaran.",
      "Peserta didik mampu mengonfigurasi perangkat lunak Non-Linear Editing (NLE) dan lingkungan kerja monitor ganda terkalibrasi warna.",
    ],
    hookQuestion: "Mengapa sebuah komputer dengan spesifikasi gaming termahal di dunia sering kali mengalami lag macet (stuttering) saat memutar timeline video 4K 10-bit ProRes di software editing profesional?",
    hookContext: "Komputer editing video profesional menuntut arsitektur perangkat keras yang berbeda dengan komputer gaming. Kebutuhan decoding video berbasis hardware, throughput kecepatan baca SSD NVMe, dan akurasi ruang warna monitor adalah faktor penentu kelancaran editing di industri televisi.",
    pretestQuestions: [
      {
        id: 1701,
        bloom: "C2",
        stem: "Sistem penyuntingan audio dan video modern di mana editor dapat memotong, memindahkan, dan mengakses bingkai gambar mana pun secara instan di timeline tanpa merusak file rekaman asli disebut...",
        options: [
          { key: "A", text: "NLE (Non-Linear Editing)" },
          { key: "B", text: "Linear Tape-to-Tape Editing" },
          { key: "C", text: "Analog Splicing" },
          { key: "D", text: "Direct Broadcast Ingest" },
        ],
        correctKey: "A",
        explanation: "Non-Linear Editing (NLE) memungkinkan akses acak digital non-destruktif ke klip mana pun di timeline software penyuntingan.",
      },
      {
        id: 1702,
        bloom: "C2",
        stem: "Standar ruang warna (Color Space) dan kurva gamma internasional yang wajib digunakan pada monitor editing untuk produksi siaran televisi High Definition (HD) menurut rekomendasi ITU adalah...",
        options: [
          { key: "A", text: "Rec.709 (BT.709)" },
          { key: "B", text: "sRGB Web Standard" },
          { key: "C", text: "DCI-P3 Bioskop" },
          { key: "D", text: "CMYK Cetak Offset" },
        ],
        correctKey: "A",
        explanation: "Rec.709 adalah standar ruang warna resmi penyiaran televisi definisi tinggi (HDTV) di seluruh dunia.",
      },
    ],
    materialCards: [
      {
        title: "1. Evolusi Penyuntingan Video: Dari Linear Pita ke Era NLE",
        content: "Era Linear Editing memotong kaset tape-ke-tape secara berurutan; jika adegan awal diubah, seluruh kaset harus direkam ulang. Era Non-Linear Editing (NLE) menyimpan video dalam file digital di hard disk, memungkinkan modifikasi urutan kapan saja secara non-destruktif.",
        didYouKnow: "Software NLE pertama di dunia yang sukses secara komersial adalah Avid/1 Media Composer yang dirilis pada tahun 1989 di komputer Apple Macintosh.",
      },
      {
        title: "2. Arsitektur Komputer Workstation Video Editing",
        content: "Workstation editing memerlukan 4 pilar seimbang: Prosesor berkepala banyak (Multi-Core CPU), Kartu Grafis berkemampuan komputasi tinggi (Dedicated GPU), Kapasitas Memori Utama besar (RAM minimal 32-64 GB), dan Jalur Data Penyimpanan berkecepatan tinggi (PCIe NVMe SSD).",
      },
      {
        title: "3. Peran CPU vs GPU dalam Alur Kerja Editing",
        content: "CPU menangani penguraian kode video (Video Decoding/Encoding), manajemen timecode, dan kalkulasi alur kerja naskah. GPU menangani akselerasi efek grafis real-time, koreksi warna grading, scaling resolusi, dan pemrosesan algoritma AI (Neural Engine).",
      },
      {
        title: "4. Manajemen Memori RAM dan VRAM Kartu Grafis",
        content: "RAM 16 GB hanya cukup untuk proyek video Full HD sederhana. Untuk proyek siaran multi-kamera 4K HDR dengan puluhan layer grafis, RAM 32 GB hingga 64 GB mutlak diperlukan dengan VRAM GPU minimal 8 GB GDDR6.",
      },
      {
        title: "5. Media Penyimpanan: HDD vs SATA SSD vs NVMe M.2",
        content: "HDD Konvensional (kecepatan 150 MB/s) hanya cocok untuk arsip data dingin (Cold Storage). Timeline multi-kamera 4K menuntut SSD NVMe PCIe Gen 4 (kecepatan 5.000–7.000 MB/s) untuk mencegah drop frame saat memutar 4 sudut kamera serentak.",
      },
      {
        title: "6. Konsep 'Scratch Disk' dan Folder Cache Media",
        content: "Scratch Disk adalah partisi drive SSD berkecepatan tinggi khusus yang didedikasikan untuk menyimpan file render sementara (Render Cache), database peak waveform audio, dan file proxy. Memisahkan cache dari sistem operasi memperpanjang usia SSD.",
        caseStudy: "Komputer editor mendadak lambat saat render. Pemeriksaan membuktikan drive C: (sistem) penuh 99% karena editor lupa memindahkan lokasi folder Media Cache NLE ke drive sekunder.",
      },
      {
        title: "7. Jaringan Penyimpanan Bersama Ruang Redaksi (SAN / NAS Broadcast)",
        content: "Di stasiun televisi, puluhan editor terhubung ke penyimpanan terpusat (Network Attached Storage / Storage Area Network) melalui kabel jaringan serat optik 10GbE / 25GbE, memungkinkan 10 editor menyunting video yang sama secara bersamaan.",
      },
      {
        title: "8. Ekosistem Software NLE Industri: Premiere Pro, DaVinci Resolve, Avid",
        content: "Avid Media Composer (standar emas stasiun TV besar dan film Hollywood). Adobe Premiere Pro (fleksibilitas ekosistem After Effects & Photoshop). DaVinci Resolve (raja industri pewarnaan Color Grading profesional & audio Fairlight). Final Cut Pro (efisiensi alur kerja di ekosistem Mac).",
      },
      {
        title: "9. Standar Monitor Warna: Monitor Referensi vs Monitor GUI",
        content: "Editor profesional bekerja dengan 2 monitor: Monitor 1 (GUI timeline & workspace software) dan Monitor 2 (Monitor Referensi Akurasi Warna). Sinyal video ke monitor referensi dikirim melalui kartu I/O khusus (seperti Blackmagic DeckLink) tanpa distorsi warna kartu grafis komputer.",
      },
      {
        title: "10. Memahami Ruang Warna Rec.709 dan Kurva Gamma 2.4",
        content: "Standar televisi HD adalah Rec.709 dengan titik putih D65 (6500 Kelvin) dan Gamma 2.4 untuk ruang studio yang temaram. Mengedit dengan profil warna sRGB monitor komputer biasa akan membuat video terlihat terlalu terang dan kontrasnya pudar saat tayang di televisi pemirsa.",
        didYouKnow: "Setiap bulan, monitor editing stasiun TV wajib dikalibrasi menggunakan alat sensor fotometer (Colorimeter / Spectrophotometer) untuk mencegah pergeseran warna lampu LED monitor.",
      },
      {
        title: "11. Panel Kendali Fisik Editing (Editing Console & Color Wheels)",
        content: "Editor menggunakan keyboard khusus berpemberat dengan pintasan warna (Shortcut Keyboard) dan Jog/Shuttle Wheel mekanik. Colorist menggunakan panel 3 roda bola (Trackballs) DaVinci Resolve untuk mengatur Lift, Gamma, dan Gain secara simultan dengan kedua tangan.",
      },
      {
        title: "12. Sistem Tata Suara Monitoring Ruang Editing (Nearfield Audio)",
        content: "Ruang editing dilengkapi sepasang speaker studio aktif (Active Studio Monitors) berkarakter frekuensi datar yang diposisikan membentuk segitiga sama sisi terhadap telinga editor, dipadukan dengan headphone closed-back berdaya impedansi tinggi.",
      },
      {
        title: "13. Pengolahan Akustik Ruang Penyuntingan (Editing Suite Acoustics)",
        content: "Dinding ruang editing dilapisi panel busa akustik peredam pantulan (Acoustic Foam) dan bass trap di sudut ruangan. Dilarang mengedit audio di ruangan berdinding keramik atau kaca yang memicu gema palsu.",
      },
      {
        title: "14. Ergonomi & Kesehatan Kerja Editor Video (Ergonomic Setup)",
        content: "Editor bekerja duduk selama 8–12 jam di depan monitor. Wajib menggunakan kursi ergonomis berpenopang lumbal, meja yang dapat diatur ketinggiannya (Sit-Stand Desk), jarak monitor minimal 60 cm, dan pencahayaan latar ruang yang lembut (Bias Lighting 6500K).",
      },
      {
        title: "15. Manajemen Daya Listrik: Uninterruptible Power Supply (UPS)",
        content: "Setiap unit workstation editing wajib terhubung ke UPS bertenaga baterai (minimal 1500 VA bertipe Pure Sine Wave). Jika listrik padam mendadak, UPS memberi cadangan daya selama 15 menit agar editor dapat menyimpan proyek tanpa risiko file proyek korup.",
      },
      {
        title: "16. Arsitektur File Format: Container vs Codec",
        content: "Container (wadah file: .MOV, .MP4, .MXF). Codec (algoritma kompresi data: ProRes, H.264, DNxHD). File MOV dapat berisi codec ProRes kualitas tinggi, atau codec H.264 kualitas rendah; editor harus memahami codec di dalam wadah file tersebut.",
      },
      {
        title: "17. Studi Kasus: Mengatasi 'Dropped Frames' pada Proyek Siaran 4K",
        content: "Saat timeline diputar, video tersendat-sendat (dropped frames). Analisis membuktikan file mentah kamera ber-bitrate 400 Mbps disimpan di harddisk eksternal USB 2.0 yang hanya berkecepatan 30 MB/s. Solusi: memindahkan proyek ke internal NVMe SSD.",
      },
      {
        title: "18. Standar Keamanan Data: Protokol Backup 3-2-1",
        content: "Hukum wajib perlindungan data media: 3 salinan data, disimpan dalam 2 jenis media berbeda (misal SSD dan Pita LTO / Harddisk), dengan 1 salinan disimpan di lokasi geografis berbeda (Off-Site Backup / Cloud).",
      },
      {
        title: "19. Pemanfaatan AI dalam Hardware & Software NLE Terkini",
        content: "Chip prosesor modern dilengkapi NPU (Neural Processing Unit) yang mempercepat fitur pintar: auto text-based editing (mengedit video lewat teks transkrip), magic mask tracking otomatis, dan AI audio voice isolation dalam sekejap mata.",
      },
      {
        title: "20. Rangkuman & Spesifikasi Studio Editing Berstandar Broadcast",
        content: "Memahami hardware dan software NLE adalah fondasi teknis kebebasan berkreasi. Dengan workstation yang bertenaga, media penyimpanan yang cepat, dan monitor warna yang terkalibrasi akurat, Anda siap menghasilkan karya visual penyiaran kelas dunia.",
      },
    ],
    video: {
      title: "Spesifikasi PC Editing Video Profesional dan Setup Monitor Warna Akurat",
      embedUrl: "https://www.youtube.com/embed/O8V3E5qR1P0",
      guide: "Pelajari konfigurasi hardware workstation video editing, kalibrasi monitor warna Rec.709, pemisahan scratch disk cache, dan manajemen UPS anti-mati listrik.",
    },
    gamePairs: [
      { id: 1, left: "NLE", right: "Non-Linear Editing sistem penyuntingan digital non-destruktif berbasis timeline" },
      { id: 2, left: "Rec.709", right: "Standar ruang warna resmi internasional untuk siaran televisi definisi tinggi (HD)" },
      { id: 3, left: "NVMe SSD", right: "Media penyimpanan berkecepatan ribuan MB/s untuk kelancaran timeline multi-kamera" },
      { id: 4, left: "Scratch Disk", right: "Partisi drive khusus penyimpan file render sementara dan cache media NLE" },
      { id: 5, left: "Aturan 3-2-1", right: "Protokol keamanan cadangan data: 3 salinan, 2 jenis media, 1 di lokasi berbeda" },
    ],
    caseTitle: "Studi Kasus 1: Warna Tayangan Televisi Berbeda Jauh dari Monitor Laptop Editor",
    caseScenario: "Seorang editor menyunting program dokumenter di laptop gaming dengan monitor berprofil sRGB dan mode layar 'Vivid/Contrast Boost'. Saat program ditayangkan di stasiun televisi nasional, penonton melihat warna kulit presenter pucat kekuningan dan bagian bayangan terlihat terlalu gelap pekat.",
    caseInstruction: "Jelaskan mengapa ketidakcocokan visual tersebut terjadi antara monitor laptop komersial dan pemancar siaran televisi, serta langkah kalibrasi apa yang wajib dipatuhi editor di ruang editing profesional!",
    sampleQuestions: [
      {
        id: 1703,
        bloom: "C4",
        stem: "Mengapa editor video profesional dilarang mengandalkan harddisk mekanis eksternal (HDD USB 2.0/3.0) sebagai drive utama untuk memutar timeline video 4K multi-kamera?",
        options: [
          { key: "A", text: "Karena kecepatan baca (read speed) harddisk mekanis terlalu lambat sehingga memicu drop frame dan playback tersendat-sendat" },
          { key: "B", text: "Karena harddisk eksternal memancarkan gelombang radiasi ke layar monitor" },
          { key: "C", text: "Karena harddisk eksternal tidak dapat membaca format file MP4" },
          { key: "D", text: "Merupakan larangan resmi dari kementerian komunikasi" },
        ],
        correctKey: "A",
        explanation: "Kecepatan transfer data HDD mekanis (sekitar 120-140 MB/s) tidak mencukupi untuk membaca aliran data video 4K bit-rate tinggi secara simultan, sehingga membutuhkan kecepatan SSD NVMe.",
      },
    ],
    lkpd: {
      title: "LKPD F7-K1: Perancangan Spesifikasi Workstation NLE & Uji Benchmark Penyimpanan",
      objective: "Peserta didik mampu merancang spesifikasi teknis komputer editing video profesional dan mengukur kecepatan baca/tulis media penyimpanan SSD menggunakan software benchmark.",
      tools: ["Komputer / Laptop", "Software Benchmark (CrystalDiskMark / Blackmagic Disk Speed Test)", "Lembar Kerja Spesifikasi Komputer"],
      steps: [
        "Jalankan software CrystalDiskMark atau Blackmagic Disk Speed Test pada drive komputer.",
        "Catat kecepatan baca (Read) dan kecepatan tulis (Write) dalam satuan MB/s.",
        "Analisis apakah drive tersebut mampu memutar video format 4K ProRes 422 HQ (tuntutan minimal 220 MB/s per stream).",
        "Susun daftar rekomendasi spesifikasi PC editing ideal: pilihan CPU, GPU, kapasitas RAM, dan konfigurasi 3 drive (System, Project, Cache).",
      ],
      outputFormat: "Dokumen Laporan Benchmark Penyimpanan & Rancangan Spesifikasi PC Editing Format PDF.",
    },
    journalQuestions: {
      q1: "Mengapa pemahaman hardware sangat penting bagi seorang editor video profesional di era digital modern?",
      q2: "Bagaimana cara Anda menyiasati keterbatasan spesifikasi komputer sekolah saat harus mengedit video beresolusi tinggi?",
      q3: "Mengapa penerapan protokol pencadangan data 3-2-1 merupakan tanda integritas moral seorang editor?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi arsitektur hardware workstation editing (CPU, GPU, RAM, NVMe SSD).",
      "Mampu membedakan karakteristik ruang warna Rec.709 standar penyiaran televisi terhadap profil layar sRGB.",
      "Mampu melakukan pengujian kecepatan media penyimpanan data untuk kelancaran alur kerja video multi-kamera.",
    ],
  },

  // =========================================================================
  // KONTEN 2: Dokumen kerja editing (EDL, script, log sheet) (20 Slide)
  // =========================================================================
  {
    id: "f7-k2",
    order: 2,
    title: "2. Dokumen kerja editing (EDL, script, log sheet)",
    shortTitle: "Dokumen Kerja Editing",
    summary: "Manajemen data ingest, pembacaan log sheet syuting, pemanfaatan Edit Decision List (EDL / XML / AAF), timecode SMPTE, penataan bin terstruktur, dan alur kerja Offline-Online Editing (Proxy Workflow).",
    kompetensi: ["1. Mengelola Data", "2. Membaca Dokumen"],
    tujuanPembelajaran: [
      "Peserta didik mampu mengelola manajemen data media ingest dan struktur folder bin editing terstandar industri.",
      "Peserta didik mampu membaca Camera Log Sheet dan mengaplikasikan alur kerja Proxy Editing (Offline-Online Workflow).",
    ],
    hookQuestion: "Jika seorang juru kamera pulang membawa 5 buah kartu memori berisi 400 file video acak tanpa nama, berapa jam waktu editor yang akan terbuang sia-sia hanya untuk mencari adegan yang diinginkan sutradara jika tidak ada Log Sheet?",
    hookContext: "Di industri penyiaran televisi berkecepatan tinggi, waktu adalah uang. Tanpa manajemen folder data terstandar dan catatan Log Sheet yang rapi, proses penyuntingan akan berubah menjadi mimpi buruk kekacauan file yang memperlambat jam tayang.",
    pretestQuestions: [
      {
        id: 1704,
        bloom: "C2",
        stem: "Dokumen catatan tertulis yang dibuat oleh pencatat skrip di lokasi syuting yang mencatat nomor scene, nomor take, ukuran shot, timecode in/out, dan tanda take terbaik (Circle Take) disebut...",
        options: [
          { key: "A", text: "Camera Log Sheet / Shooting Log" },
          { key: "B", text: "Kuitansi Pembelian Makanan" },
          { key: "C", text: "Faktur Pajak Rekening" },
          { key: "D", text: "Kartu Izin Mengemudi" },
        ],
        correctKey: "A",
        explanation: "Log Sheet adalah peta navigasi utama editor untuk menemukan klip video take terbaik yang dipilih oleh sutradara tanpa harus menonton seluruh ratusan rekaman gagal.",
      },
      {
        id: 1705,
        bloom: "C2",
        stem: "Salinan file video beresolusi rendah dan berukuran ringan yang dibuat sementara untuk proses penyuntingan di komputer biasa agar tidak lag, sebelum ditautkan kembali ke file asli beresolusi tinggi saat ekspor disebut...",
        options: [
          { key: "A", text: "Proxy Media (Alur Kerja Offline Editing)" },
          { key: "B", text: "Master Broadcast File" },
          { key: "C", text: "Digital Cinema Package" },
          { key: "D", text: "Raw Sensor Data" },
        ],
        correctKey: "A",
        explanation: "Proxy Media memungkinkan editing lancar pada file ringan (offline cut), kemudian dihubungkan kembali (re-link) ke master kamera 4K (online conform) saat finalisasi.",
      },
    ],
    materialCards: [
      {
        title: "1. Hakikat Manajemen Data Pasca-Produksi (Post-Production Data Management)",
        content: "Penyuntingan video profesional dimulai sebelum potongan pertama dibuat di timeline. Manajemen data yang disiplin menjamin seluruh aset rekaman aman, terorganisasi rapi, dan mudah diakses oleh editor, sound designer, dan colorist.",
        didYouKnow: "Di rumah produksi internasional, posisi Digital Imaging Technician (DIT) bertanggung jawab penuh atas transfer data, verifikasi checksum data kartu memori, dan pembuatan file proxy di lokasi syuting.",
      },
      {
        title: "2. Verifikasi Data Transfer: Checksum MD5 / SHA-256",
        content: "Dilarang memindahkan file video dari kartu memori ke harddisk dengan metode 'Copy-Paste' Windows biasa. Wajib menggunakan software transfer terverifikasi (Silverstack / ShotPut Pro) yang memeriksa nilai Checksum untuk menjamin tidak ada satu bit pun data yang korup.",
      },
      {
        title: "3. Standardisasi Penamaan Folder Proyek (Folder Directory Structure)",
        content: "Struktur folder baku: 01_PROJECT_FILES (file .prproj/.drp), 02_FOOTAGE (A_CAM, B_CAM), 03_AUDIO (Production Audio, SFX, BGM), 04_GRAPHICS (Logo, Lower Third, Still Images), 05_EXPORTS (Review, Master), 06_DOCS (Script, Rundown, Log Sheet).",
      },
      {
        title: "4. Standardisasi Penamaan File Klip Media (Naming Conventions)",
        content: "Ubah penamaan file default kamera (seperti C0001.mp4) menjadi nama terstruktur: [NamaProgram]_[Tanggal]_[Kamera]_[NomorRoll]_[NomorKlip]. Contoh: 'BROMAN_20261015_CAM_A_R01_001.MOV'.",
        caseStudy: "Dua juru kamera menggunakan kartu memori baru dengan nama default sama: 'CLIP001.MOV'. Saat diimpor ke software NLE, software mengalami konflik penimpaan file (overwriting error).",
      },
      {
        title: "5. Membaca Camera Log Sheet di Meja Editing",
        content: "Log Sheet memuat kolom: Scene, Take, Focal Length, Keterangan Aksi, Timecode Start/End, dan Tanda Lingkaran 'Circle Take' (take terbaik pilihan sutradara). Editor memprioritaskan mengimpor klip yang diberi tanda Circle Take.",
      },
      {
        title: "6. Memahami Timecode Standar SMPTE (Jam:Menit:Detik:Frame)",
        content: "Timecode adalah kode penanda waktu unik pada setiap frame gambar: format 01:23:45:18 (Jam 01, Menit 23, Detik 45, Frame ke-18). Timecode memungkinkan sinkronisasi otomatis antara kamera dan alat perekam suara terpisah.",
      },
      {
        title: "7. Drop-Frame vs Non-Drop-Frame Timecode (29.97 fps)",
        content: "Dalam sistem siaran NTSC (29.97 fps), Drop-Frame Timecode (DF, ditandai tanda titik dua dan titik koma 01:00:00;00) secara berkala menjatuhkan nomor penamaan frame tertentu agar waktu timecode selaras tepat dengan jam dinding waktu siaran riil.",
      },
      {
        title: "8. Alur Kerja Offline vs Online Editing",
        content: "Offline Editing: proses menyusun alur cerita (storytelling) menggunakan file video resolusi rendah (Proxy) agar komputer bekerja cepat dan ringan. Online Editing: proses menautkan kembali timeline yang sudah disetujui (Picture Lock) ke file mentah kamera resolusi 4K untuk pewarnaan dan penambahan efek visual.",
      },
      {
        title: "9. Pembuatan Proxy Media: Codec ProRes Proxy vs DNxHR LB",
        content: "Proxy dibuat menggunakan resolusi 1080p atau 720p dengan codec pengeditan intra-frame yang sangat ringan (Apple ProRes 422 Proxy atau Avid DNxHR Low Bandwidth). Menjaga durasi waktu dan jumlah channel audio persis sama dengan file asli.",
      },
      {
        title: "10. Fitur 'Toggle Proxies' pada Software NLE Modern",
        content: "Editor cukup menekan satu tombol ikon 'Toggle Proxies' di jendela program monitor NLE untuk berpindah instan: melihat video proxy yang lancar saat memotong gambar, atau beralih ke video asli beresolusi tinggi untuk memeriksa ketajaman fokus.",
        didYouKnow: "Editing dengan sistem Proxy menghemat beban kerja prosesor hingga 70% dan menjaga suhu komponen komputer tetap dingin.",
      },
      {
        title: "11. Format Pertukaran Data: EDL, XML, dan AAF",
        content: "Ketika naskah visual selesai, timeline diekspor bukan sebagai video melainkan sebagai file teks pertukaran data: EDL (Edit Decision List teks sederhana), XML (untuk transfer antara Premiere ke DaVinci Resolve), dan AAF (Advanced Authoring Format untuk transfer track audio ke Pro Tools).",
      },
      {
        title: "12. Anatomi Baris Kode File EDL (Edit Decision List)",
        content: "Baris EDL mencatat: Nomor Peristiwa (Event 001), Nama Klip Sumber (AX), Tipe Transisi (C untuk Cut), In-Point Sumber, Out-Point Sumber, In-Point Timeline, dan Out-Point Timeline.",
      },
      {
        title: "13. Penataan Bin dan Label Warna di Software NLE",
        content: "Di jendela Project NLE, klip dikelompokkan ke dalam Bin (Folder): Bin Wawancara, Bin B-Roll, Bin Grafis, Bin Audio. Beri label warna berbeda pada klip (misal: Hijau untuk B-Roll, Biru untuk Dialog Utama, Merah Muda untuk Musik) agar timeline mudah dipindai mata.",
      },
      {
        title: "14. Sinkronisasi Otomatis Audio Eksternal (Waveform Audio Sync)",
        content: "Jika syuting menggunakan perekam audio terpisah tanpa kabel timecode, editor memilih video dan file audio WAV, lalu menjalankan fitur 'Synchronize by Audio Waveform'. Software NLE otomatis mencocokkan bentuk gelombang suara dan menyatukannya dalam 2 detik.",
      },
      {
        title: "15. Pembuatan Transkrip Naskah Otomatis (Speech-to-Text Ingest)",
        content: "Software NLE modern memiliki modul transkripsi otomatis berbasis AI. Begitu video diimpor, software menghasilkan naskah teks lengkap dengan penanda waktu. Editor dapat mencari kutipan kata narasumber di kotak pencarian dan langsung menemukan frame adegannya.",
      },
      {
        title: "16. Penguncian Gambar Final: Tahap 'Picture Lock'",
        content: "Picture Lock adalah tonggak sejarah dalam proses pasca-produksi: sutradara dan produser menyetujui susunan potongan gambar dan durasi waktu secara mutlak. Setelah Picture Lock diresmikan, tidak boleh ada lagi perubahan panjang klip agar tim audio dan tim colorist dapat bekerja paralel.",
      },
      {
        title: "17. Studi Kasus: Menyelamatkan Proyek yang Mengalami 'Media Offline'",
        content: "Editor membuka proyek dan seluruh layar menjadi merah bertuliskan 'Media Offline' karena nama folder diubah oleh asisten. Berkat struktur penamaan file yang unik dan rapi, editor melakukan fitur 'Relink Media' ke direktori baru dan seluruh klip tersambung kembali dalam 1 menit.",
      },
      {
        title: "18. Manajemen Metadata Kamera (Camera Metadata Ingest)",
        content: "Metadata kamera merekam: ISO, White Balance, Aperture Lensa, Shutter Angle, dan Profil Warna Log (S-Log3, C-Log, V-Log). Metadata ini dibaca oleh software color grading untuk mengembalikan kurva kontras asli secara presisi.",
      },
      {
        title: "19. Penyiapan Master Delivery Checklist",
        content: "Sebelum menyerahkan hasil edit, Asisten Editor memeriksa Checklist: apakah ada frame kosong (Gaps/Black Frames), apakah ada track audio yang tidak sengaja termute, dan memastikan frame rate timeline sesuai standar stasiun TV (25.00 fps PAL / 50i).",
      },
      {
        title: "20. Rangkuman & Disiplin Manajemen Data Pasca-Produksi",
        content: "Kerapian manajemen file dan pemahaman dokumen kerja editing membedakan editor amatir dari profesional industri siaran. Dengan organisasi folder yang disiplin, pemanfaatan log sheet, dan alur kerja proxy yang efisien, proses penyuntingan video Anda akan melesat cepat dan terbebas dari kepanikan teknis.",
      },
    ],
    video: {
      title: "Manajemen Data Ingest, Struktur Folder, dan Alur Kerja Offline-Online Editing",
      embedUrl: "https://www.youtube.com/embed/xL2M0_w4Q7A",
      guide: "Pelajari cara menyusun struktur folder proyek standar stasiun TV, membuat proxy ProRes ringan, membaca log sheet, dan mengekspor XML ke DaVinci Resolve.",
    },
    gamePairs: [
      { id: 1, left: "Log Sheet", right: "Catatan nomor adegan, take, timecode, dan tanda klip terbaik dari lokasi syuting" },
      { id: 2, left: "Proxy Media", right: "Klip video resolusi rendah untuk mempercepat proses editing di komputer ringan" },
      { id: 3, left: "XML / AAF", right: "File pertukaran data timeline antar software editing, audio, dan color grading" },
      { id: 4, left: "Picture Lock", right: "Tahap kesepakatan final bahwa urutan pemotongan gambar tidak boleh diubah lagi" },
      { id: 5, left: "Media Offline", right: "Kondisi peringatan software NLE saat file sumber video terputus atau dipindahkan" },
    ],
    caseTitle: "Studi Kasus 2: Kekacauan File Media Offline Akibat Pemindahan Folder",
    caseScenario: "Seorang asisten editor merapikan file di harddisk eksternal dan memindahkan 100 klip video dari folder awal ke folder baru bernama 'B-Roll Baru'. Saat editor utama membuka software NLE, seluruh timeline berubah menjadi warna merah 'Media Offline' 2 jam sebelum batas tayang.",
    caseInstruction: "Jelaskan prosedur teknis penautan ulang (Relink Media) yang benar di software NLE dan aturan tata kelola folder apa yang wajib disepakati kru agar insiden Media Offline tidak pernah terulang!",
    sampleQuestions: [
      {
        id: 1706,
        bloom: "C4",
        stem: "Mengapa tahap 'Picture Lock' wajib diresmikan oleh sutradara dan produser sebelum timeline diserahkan kepada Sound Designer dan Colorist?",
        options: [
          { key: "A", text: "Karena jika durasi atau susunan gambar di timeline diubah setelah proses pewarnaan dan tata suara dimulai, seluruh sinkronisasi efek suara dan grading warna akan berantakan dan harus dikerjakan ulang dari awal" },
          { key: "B", text: "Agar software komputer tidak terkunci oleh password" },
          { key: "C", text: "Karena komputer harus dimatikan selama 24 jam" },
          { key: "D", text: "Merupakan aturan perpajakan industri perfilman" },
        ],
        correctKey: "A",
        explanation: "Picture Lock memastikan fondasi waktu (timing) sudah baku dan final, sehingga divisi audio dan colorist dapat bekerja sinkron tanpa risiko pergeseran detik (out-of-sync).",
      },
    ],
    lkpd: {
      title: "LKPD F7-K2: Penataan Struktur Folder Ingest Proyek & Pembuatan Proxy Media",
      objective: "Peserta didik mampu membangun struktur direktori folder proyek standar penyiaran dan melakukan batch encoding file Proxy Media menggunakan Adobe Media Encoder / Handbrake.",
      tools: ["Komputer / Laptop", "Software NLE / Media Encoder", "Sampel Klip Video 4K (3 Klip)"],
      steps: [
        "Buat struktur 6 folder proyek baku di drive komputer: 01_PROJECTS, 02_FOOTAGE, 03_AUDIO, 04_GRAPHICS, 05_EXPORTS, 06_DOCS.",
        "Impor 3 klip video resolusi tinggi ke dalam folder 02_FOOTAGE.",
        "Lakukan konversi batch membuat Proxy format 720p codec ProRes Proxy atau DNxHR LB.",
        "Buka software NLE, tautkan file proxy ke file asli, dan uji tombol 'Toggle Proxies'.",
        "Ambil tangkapan layar (screenshot) perbandingan pemakaian beban CPU sebelum dan sesudah proxy diaktifkan.",
      ],
      outputFormat: "Dokumen Panduan Struktur Folder Format PDF & Screenshot Uji Toggle Proxy.",
    },
    journalQuestions: {
      q1: "Mengapa disiplin penamaan file dan folder mencerminkan kematangan profesional seorang editor video?",
      q2: "Bagaimana alur kerja proxy media membantu Anda saat mengedit video di komputer berspesifikasi terbatas?",
      q3: "Mengapa kesepakatan Picture Lock mutlak harus ditaati oleh sutradara dan produser?",
    },
    kktpIndicators: [
      "Mampu mengonfigurasi struktur direktori folder proyek dan tata penamaan file media standar industri siaran.",
      "Mampu membaca dokumen Camera Log Sheet dan mengidentifikasi klip pilihan terbaik (Circle Takes).",
      "Mampu mengimplementasikan alur kerja Proxy Editing (Offline-Online Workflow) secara efisien.",
    ],
  },

  // =========================================================================
  // KONTEN 3: Tahapan editing audio & video (20 Slide)
  // =========================================================================
  {
    id: "f7-k3",
    order: 3,
    title: "3. Tahapan editing audio & video",
    shortTitle: "Tahapan Editing Lengkap",
    summary: "Alur kerja penyuntingan terstruktur dari Assembly Cut, Rough Cut, Fine Cut, teknik pemotongan lanjutan (L-Cut, J-Cut, Ripple/Rolling Edit), audio mixing, dan color grading dasar.",
    kompetensi: ["1. Menyunting", "2. Mengoreksi Warna"],
    tujuanPembelajaran: [
      "Peserta didik mampu menyusun rangkaian video dari Assembly Cut hingga Fine Cut dengan tempo dramatik yang dinamis.",
      "Peserta didik mampu mengaplikasikan teknik pemotongan lanjutan (J-Cut & L-Cut) dan koreksi warna dasar (Primary Color Correction).",
    ],
    hookQuestion: "Mengapa pemotongan video di mana penonton mendengar suara narasumber 2 detik sebelum wajahnya terlihat di layar (J-Cut) terasa jauh lebih alami daripada memotong gambar dan suara secara bersamaan?",
    hookContext: "Dalam kehidupan nyata, pendengaran manusia sering mendahului pandangan matanya. Teknik pemotongan terpisah (Split Edit: J-Cut dan L-Cut) meniru cara kerja persepsi alami otak manusia, menciptakan transisi adegan yang mengalir mulus tanpa terasa seperti sambungan kaku.",
    pretestQuestions: [
      {
        id: 1707,
        bloom: "C2",
        stem: "Teknik pemotongan transisi audio visual di mana suara dari adegan berikutnya sudah mulai terdengar sebelum gambar video adegan tersebut muncul di layar disebut...",
        options: [
          { key: "A", text: "J-Cut (Audio Lead Edit)" },
          { key: "B", text: "L-Cut (Audio Lag Edit)" },
          { key: "C", text: "Jump Cut" },
          { key: "D", text: "Wipe Transition" },
        ],
        correctKey: "A",
        explanation: "J-Cut dinamai dari bentuk huruf J pada timeline di mana balok audio menjorok ke kiri mendahului balok videonya.",
      },
      {
        id: 1708,
        bloom: "C2",
        stem: "Tahap awal penyuntingan video di mana seluruh shot disusun berurutan mengikuti alur naskah kasar tanpa memotong detail dan tanpa musik disebut...",
        options: [
          { key: "A", text: "Assembly Cut" },
          { key: "B", text: "Final Master" },
          { key: "C", text: "Color Grading" },
          { key: "D", text: "Audio Mastering" },
        ],
        correctKey: "A",
        explanation: "Assembly Cut adalah susunan potongan kasar pertama yang memetakan seluruh cerita sebelum dipadatkan di tahap Rough Cut.",
      },
    ],
    materialCards: [
      {
        title: "1. Seni Bercerita di Ruang Editing (The Art of Invisible Editing)",
        content: "Penyuntingan video sering disebut sebagai 'The Invisible Art' (Seni yang Tak Terlihat). Jika penyuntingan dilakukan dengan sempurna, penonton tidak akan menyadari bahwa ada ratusan potongan sambungan gambar, melainkan larut sepenuhnya ke dalam emosi cerita.",
        didYouKnow: "Teori Efek Kuleshov membuktikan bahwa penonton mengaitkan makna emosional baru saat dua gambar yang tidak berhubungan disambungkan berdampingan.",
      },
      {
        title: "2. Tahapan Penyuntingan Baku: Assembly Cut",
        content: "Assembly Cut adalah susunan pertama di timeline: editor meletakkan take terbaik dari setiap scene secara kronologis sesuai urutan naskah. Durasinya biasanya 1,5 hingga 2 kali lebih panjang dari target durasi tayang yang ditentukan.",
      },
      {
        title: "3. Tahapan Penyuntingan: Rough Cut (Potongan Kasar)",
        content: "Di tahap Rough Cut, editor mulai memangkas adegan yang bertele-tele, mempercepat ritme adegan, dan menguji apakah alur cerita memiliki kelogisan dramatik. Sutradara mulai masuk ke ruang edit untuk memberikan catatan perbaikan.",
      },
      {
        title: "4. Tahapan Penyuntingan: Fine Cut (Potongan Halus)",
        content: "Fine Cut berfokus pada penyempurnaan detail frame-demi-frame. Memotong tepat pada kedipan mata aktor, menyelaraskan ketukan musik latar (cutting on the beat), dan memastikan tidak ada jeda canggung antar dialog.",
      },
      {
        title: "5. Teknik Pemotongan Terpisah: J-Cut (Audio Leads Video)",
        content: "Suara adegan baru terdengar 1–3 detik mendahului videonya. Sangat efektif untuk menarik perhatian penonton ke narasumber baru atau menciptakan suasana antisipasi ketegangan sebelum visual diperlihatkan.",
      },
      {
        title: "6. Teknik Pemotongan Terpisah: L-Cut (Video Leads Audio)",
        content: "Gambar video sudah berganti ke narasumber kedua (re-action shot), namun suara narasumber pertama masih terdengar berbicara melintasi potongan gambar. Menciptakan percakapan yang mengalir alami seperti obrolan nyata.",
        caseStudy: "Memotong dialog dengan hard cut bersamaan (video dan audio dipotong serentak) membuat talkshow terasa seperti debat robot kaku. Mengubahnya menjadi L-Cut dan J-Cut seketika membuat dialog mengalir hangat.",
      },
      {
        title: "7. Cutting on Action (Memotong pada Gerakan Fisik)",
        content: "Memotong tepat di tengah-tengah gerakan tubuh subjek (misal: saat aktor mulai berdiri dari kursi di Wide Shot, potong tepat saat tubuhnya terangkat ke Close-Up). Gerakan dinamis menipu mata penonton sehingga sambungan gambar terasa mulus.",
      },
      {
        title: "8. Alat Pemotong NLE: Ripple Edit vs Rolling Edit",
        content: "Ripple Edit: memotong durasi sebuah klip dan secara otomatis menggeser seluruh klip di sebelah kanannya (mengubah total durasi timeline). Rolling Edit: menggeser titik potong antara dua klip yang berdampingan tanpa mengubah total durasi timeline.",
      },
      {
        title: "9. Alat Pemotong NLE: Slip Edit vs Slide Edit",
        content: "Slip Edit: mengubah in/out point isi klip tanpa mengubah durasi dan posisinya di timeline. Slide Edit: memindahkan posisi sebuah klip ke kiri/kanan di timeline dengan memanjangkan/memendekkan dua klip tetangganya.",
      },
      {
        title: "10. Penataan B-Roll dan Klip Sisipan (Cutaway B-Roll)",
        content: "B-Roll ditaruh di track Video 2 (V2) di atas narasi vokal presenter di Video 1 (V1). Menutupi titik-titik sambungan potongan bicara presenter (Jump Cut Masking) dan mengilustrasikan hal-hal konkret yang sedang dibicarakan.",
        didYouKnow: "Setiap kali presenter berita berkata 'seperti yang terlihat pada grafik berikut', B-Roll infografis harus muncul tepat di suku kata kata tersebut diucapkan.",
      },
      {
        title: "11. Alur Kerja Penataan Audio Timeline (Audio Mixing Workflow)",
        content: "Organisasi track audio vertikal: A1-A2 (Dialog Host), A3-A4 (Dialog Tamu), A5-A6 (Suara Asli Lingkungan / NatSound), A7-A8 (Sound Effects / SFX), A9-A10 (Musik Latar / BGM). Dilarang mencampur musik dan dialog di track yang sama.",
      },
      {
        title: "12. Penerapan Audio Crossfade (Constant Power Transition)",
        content: "Setiap sambungan klip audio wajib dipasangi transisi Crossfade pendek (durasi 2 hingga 4 frame). Berfungsi menghilangkan suara letupan klik digital (audio pop/click) yang terjadi akibat pemotongan gelombang suara di luar titik nol (Zero Crossing).",
      },
      {
        title: "13. Teknik Audio Ducking (Otomasi Volume Musik)",
        content: "Ducking secara otomatis menurunkan level fader musik sebesar -12 dB hingga -15 dB saat ada sinyal suara dialog vokal di track lain, dan menaikkan kembali volume musik saat presenter berhenti berbicara.",
      },
      {
        title: "14. Dasar Koreksi Warna: Primary Color Correction",
        content: "Primary Correction menyeimbangkan seluruh gambar secara global: (1) Menyetel titik hitam gelap (Lift/Shadows), (2) Menyetel titik putih terang (Gain/Highlights), (3) Menyetel kecerahan tengah (Gamma/Midtones), (4) Menyeimbangkan White Balance agar dinding putih benar-benar putih.",
      },
      {
        title: "15. Membaca Instrumen Ukur Warna: Waveform & Vectorscope",
        content: "Editor tidak boleh percaya pada mata sendiri. Waveform Monitor mengukur level terang-gelap (Luminance) dari 0 IRE (hitam pekat) hingga 100 IRE (putih maksimal). Vectorscope mengukur saturasi warna dan garis warna kulit manusia (Skin Tone Line).",
      },
      {
        title: "16. Garis Warna Kulit (The Skin Tone Line Indicator)",
        content: "Pada Vectorscope, terdapat garis diagonal antara warna merah dan kuning (Skin Tone Line). Darah di bawah kulit membuat seluruh ras manusia (kulit terang hingga gelap) memiliki sudut rona warna yang persis sama di garis ini.",
      },
      {
        title: "17. Koreksi Warna Sekunder: Secondary Color Grading & Masking",
        content: "Secondary Grading mengisolasi objek tertentu: menggunakan Qualifier atau Power Window lingkaran untuk mencerahkan wajah narasumber, atau mengubah warna baju karakter tertentu tanpa mempengaruhi warna latar belakang.",
      },
      {
        title: "18. Penggunaan LUTs (Look-Up Tables): Koreksi vs Kreatif",
        content: "Technical LUT mengubah profil warna mentah kamera (Log / Flat) menjadi standar siaran Rec.709. Creative LUT memberikan gaya visual estetika tertentu (misal nuansa hangat senja atau nuansa dingin misterius).",
      },
      {
        title: "19. Studi Kasus: Menyelamatkan Wawancara dengan Jumper Potongan Naskah",
        content: "Narasumber berbicara berbelit-belit selama 5 menit. Editor memotong dan mengambil kalimat awal dan akhir saja. Agar tidak terjadi lompatan gambar wajah (Jump Cut), editor menyisipkan shot B-roll tangan narasumber yang sedang mencatat tepat di titik potong.",
      },
      {
        title: "20. Rangkuman & Daya Magis Editor Audio Visual",
        content: "Penyuntingan adalah proses penulisan ulang naskah yang ketiga (setelah penulisan naskah dan syuting). Di timeline inilah ritme waktu, keindahan visual, dan emosi suara berpadu menjadi sebuah karya siaran televisi yang menggetarkan jiwa pemirsa.",
      },
    ],
    video: {
      title: "Teknik Editing Video Profesional: Dari Rough Cut hingga Color Grading",
      embedUrl: "https://www.youtube.com/embed/z4p_Y1n3G5E",
      guide: "Pelajari cara menyusun alur cerita di timeline, memotong dengan teknik J-Cut dan L-Cut, membaca instrumen Waveform monitor, dan menyelaraskan warna kulit pada vectorscope.",
    },
    gamePairs: [
      { id: 1, left: "J-Cut", right: "Transisi di mana suara adegan berikutnya terdengar mendahului pergantian videonya" },
      { id: 2, left: "L-Cut", right: "Transisi di mana gambar video sudah berganti namun suara adegan lama masih berlanjut" },
      { id: 3, left: "Ripple Edit", right: "Alat potong yang memangkas klip dan otomatis menggeser seluruh sisa timeline" },
      { id: 4, left: "Waveform", right: "Instrumen pengukur level terang-gelap pencahayaan (luminance) dari 0 hingga 100 IRE" },
      { id: 5, left: "Skin Tone Line", right: "Garis acuan pada vectorscope untuk memastikan akurasi warna alami kulit manusia" },
    ],
    caseTitle: "Studi Kasus 3: Suara Pop/Click Mengganggu di Setiap Sambungan Klip Dialog",
    caseScenario: "Setelah menyelesaikan fine cut program berita, editor memutar ulang timeline dan mendengar suara letupan kecil (pop/click) yang sangat mengganggu setiap kali terjadi perpindahan antar potongan suara wawancara narasumber.",
    caseInstruction: "Jelaskan penyebab fisik terjadinya letupan audio pop/click tersebut pada gelombang suara digital dan tindakan cepat apa yang harus dipasang editor pada setiap sambungan klip audio di timeline!",
    sampleQuestions: [
      {
        id: 1709,
        bloom: "C4",
        stem: "Pada instrumen Vectorscope di software color grading, jika titik sebaran warna wajah narasumber melenceng jauh ke arah warna hijau (di luar garis Skin Tone Line), tindakan koreksi warna yang harus dilakukan adalah...",
        options: [
          { key: "A", text: "Menggeser rona warna (Tint) ke arah Magenta untuk menetralkan warna hijau hingga titik warna kembali tepat berada di garis Skin Tone Line" },
          { key: "B", text: "Menaikkan saturasi warna hijau ke level maksimal" },
          { key: "C", text: "Mengubah seluruh video menjadi hitam putih" },
          { key: "D", text: "Menghapus klip video tersebut dari timeline" },
        ],
        correctKey: "A",
        explanation: "Warna Magenta adalah warna komplementer (kebalikan) dari hijau. Menggeser tint ke arah magenta akan menetralkan bias hijau pada kulit wajah narasumber.",
      },
    ],
    lkpd: {
      title: "LKPD F7-K3: Praktik Penerapan J-Cut, L-Cut & Koreksi Warna Rec.709",
      objective: "Peserta didik mampu menyunting adegan percakapan dua orang dengan menerapkan teknik J-Cut, L-Cut, dan menyeimbangkan warna kulit pada Vectorscope.",
      tools: ["Komputer Workstation NLE", "Software Editing (Premiere Pro / DaVinci Resolve)", "Bahan Mentah Klip Video Percakapan"],
      steps: [
        "Impor klip dialog Tokoh A dan Tokoh B ke timeline NLE.",
        "Potong dialog pembuka menggunakan teknik J-Cut (suara Tokoh B terdengar 2 detik sebelum gambarnya muncul).",
        "Terapkan teknik L-Cut pada adegan reaksi mendengarkan Tokoh A.",
        "Buka panel Color Workspace: tampilkan jendela Waveform dan Vectorscope.",
        "Setel level hitam (0 IRE) dan putih (100 IRE), lalu sesuaikan rona kulit wajah hingga tepat berada di garis Skin Tone Line.",
        "Ekspor video hasil praktik format MP4 berdurasi 60 detik.",
      ],
      outputFormat: "File Video Hasil Edit 60 Detik & Screenshot Tampilan Timeline J-Cut/L-Cut Serta Vectorscope.",
    },
    journalQuestions: {
      q1: "Mengapa pemotongan J-Cut dan L-Cut mampu membuat dialog video terasa jauh lebih hidup dan mengalir alami?",
      q2: "Bagaimana instrumen Waveform dan Vectorscope membantu Anda membuat keputusan warna secara objektif?",
      q3: "Tantangan apa yang Anda hadapi saat berusaha menyelaraskan tempo pemotongan gambar dengan ketukan irama musik latar?",
    },
    kktpIndicators: [
      "Mampu mendemonstrasikan tahapan penyuntingan video terstruktur (Assembly Cut, Rough Cut, dan Fine Cut).",
      "Mampu mengaplikasikan teknik pemotongan lanjutan (J-Cut, L-Cut, dan Cutting on Action) secara tepat.",
      "Mampu melakukan Primary Color Correction menggunakan instrumen Waveform dan Vectorscope sesuai standar Rec.709.",
    ],
  },

  // =========================================================================
  // KONTEN 4: Finalisasi dan ekspor karya standar siaran (20 Slide)
  // =========================================================================
  {
    id: "f7-k4",
    order: 4,
    title: "4. Finalisasi dan ekspor karya standar siaran",
    shortTitle: "Ekspor Standar Siaran TV",
    summary: "Format dan codec penyiaran komersial (Apple ProRes 422 HQ, Avid DNxHD, XDCAM HD422 MXF), pembatasan Broadcast Safe Luma/Chroma, penanaman Closed Caption / Subtitle, dan pembuatan Master Delivery Package.",
    kompetensi: ["1. Mengkalibrasi", "2. Mengekspor"],
    tujuanPembelajaran: [
      "Peserta didik mampu mengonfigurasi parameter ekspor master file video standar penyiaran komersial (Broadcast Delivery Specs).",
      "Peserta didik mampu mengaplikasikan filter Broadcast Safe Limiter dan menanamkan takarir teks (Closed Caption).",
    ],
    hookQuestion: "Mengapa sebuah stasiun televisi nasional langsung menolak file video karya rumah produksi ternama hanya karena nilai warna putih di video tersebut menyentuh angka 105 IRE?",
    hookContext: "Dalam dunia penyiaran sinyal televisi terestrial maupun satelit digital, sinyal video yang melebihi batas legalitas siar (Broadcast Safe Limits) akan memicu gangguan sinyal interferensi pada frekuensi pemancar dan mengakibatkan denda regulasi.",
    pretestQuestions: [
      {
        id: 1710,
        bloom: "C2",
        stem: "Format wadah (container) dan codec standar industri pertelevisian dunia untuk pengiriman file master siaran berita dan program komersial adalah...",
        options: [
          { key: "A", text: "MXF OP1a dengan codec XDCAM HD422 / ProRes 422" },
          { key: "B", text: "File 3GP resolusi rendah" },
          { key: "C", text: "File animasi GIF" },
          { key: "D", text: "File dokumen PDF" },
        ],
        correctKey: "A",
        explanation: "MXF OP1a (Material Exchange Format) adalah standar transmisi siaran broadcast profesional yang memuat video, audio multitrack terpisah, dan timecode SMPTE dalam satu paket aman.",
      },
      {
        id: 1711,
        bloom: "C2",
        stem: "Filter efek video di software NLE yang secara otomatis memotong sinyal kecerahan luma yang melebihi 100 IRE dan saturasi kroma liar agar legal sesuai regulasi siar disebut...",
        options: [
          { key: "A", text: "Broadcast Safe Limiter / Video Limiter" },
          { key: "B", text: "Motion Blur" },
          { key: "C", text: "Lens Flare" },
          { key: "D", text: "Fish Eye Distortion" },
        ],
        correctKey: "A",
        explanation: "Broadcast Safe Limiter memastikan seluruh piksel warna berada di rentang legal standar sinyal video penyiaran komersial.",
      },
    ],
    materialCards: [
      {
        title: "1. Hakikat Tahap Finalisasi Karya (Mastering & Delivery)",
        content: "Finalisasi adalah gerbang terakhir sebelum karya audio visual diserahkan ke stasiun televisi atau platform OTT. Di tahap ini, file video diperiksa kelayakan teknisnya (Quality Control) agar mematuhi spesifikasi pengiriman resmi (Broadcast Delivery Specs).",
        didYouKnow: "Setiap stasiun televisi memiliki dokumen 'Technical Delivery Specifications' setebal puluhan halaman yang memuat aturan ketat ukuran frame, codec, audio channel, hingga durasi bumper pembuka.",
      },
      {
        title: "2. Memahami Sinyal Video Legal: Broadcast Safe Luma & Chroma",
        content: "Standar EBU R103 menetapkan batas legalitas sinyal video: Luminance (Kecerahan) harus berada di rentang 0% hingga 100% (0 IRE hingga 100 IRE / RGB 16–235). Sinyal di bawah 0 IRE atau di atas 100 IRE dianggap ilegal dan akan memicu penolakan QC.",
      },
      {
        title: "3. Penerapan Filter Video Limiter pada Timeline Master",
        content: "Sebelum merender, pasang filter 'Video Limiter' di Adjustment Layer teratas timeline. Aktifkan setting: Clip Level: 100 IRE, Black Level: 0 IRE, Chroma Limiting: 100% Saturation agar seluruh piksel liar dipotong halus secara otomatis.",
      },
      {
        title: "4. Anatomi Codec Siaran Broadcast: Apple ProRes 422 HQ",
        content: "Apple ProRes adalah codec kompresi Intra-Frame berkualitas tinggi dengan kedalaman warna 10-bit dan subsampling 4:2:2. Menjaga ketajaman visual tanpa artefak kompresi, menjadi format master favorit studio film dan TV.",
      },
      {
        title: "5. Anatomi Codec Penyiaran: Avid DNxHD & DNxHR",
        content: "Avid DNxHD (Digital Nonlinear Extensible High Definition) adalah standar kompresi pertelevisian global yang setara dengan ProRes. Format DNxHD 120 atau 185x (10-bit) banyak digunakan di stasiun berita internasional.",
      },
      {
        title: "6. Format Kontainer MXF OP1a (Material Exchange Format)",
        content: "MXF OP1a adalah wadah resmi stasiun televisi komersial. Berisi satu file tunggal yang memuat rekaman video, 8 channel audio uncompressed PCM terpisah (Dialog di Ch 1-2, M&E di Ch 3-4), dan SMPTE Timecode yang tertanam permanen.",
      },
      {
        title: "7. Format Siaran Berita: Sony XDCAM HD422 (50 Mbps)",
        content: "Hampir seluruh stasiun televisi di Indonesia dan Asia menggunakan standar XDCAM HD422 MPEG-2 Long GOP 50 Mbps 1080i/50 untuk siaran harian karena keseimbangan sempurna antara kualitas gambar dan ukuran file yang efisien.",
        caseStudy: "Sebuah program berita gagal on-air karena editor mengekspor file MP4 H.264 dengan audio terkompresi stereo campuran, yang tidak dapat dibaca oleh otomasi server pemutar kaset MCR stasiun TV.",
      },
      {
        title: "8. Interlaced vs Progressive (1080i vs 1080p)",
        content: "Banyak stasiun TV terestrial masih mengudara pada format Interlaced (1080i50 / 25 frame utuh yang diurai menjadi 50 bidang ganjil-genap). Editor harus memastikan field order diatur ke 'Upper Field First' agar gambar tidak bergetar bergaris (comb artifact).",
      },
      {
        title: "9. Standar Frame Rate Televisi Indonesia (25.00 fps PAL)",
        content: "Standar sistem televisi Indonesia adalah sistem PAL dengan kecepatan 25.00 frame per detik (bukan 23.976 fps film atau 29.97 fps NTSC). Mengekspor frame rate yang salah akan membuat gerakan presenter tersendat saat dikonversi pemancar.",
      },
      {
        title: "10. Penataan Track Audio Multi-Channel untuk Pengiriman Master",
        content: "Pengaturan ekspor 4 Channel Audio terpisah (Discrete Audio Tracks): Track 1: Full Mix Stereo Kiri (L), Track 2: Full Mix Stereo Kanan (R), Track 3: Music & Effects Kiri (M&E L), Track 4: Music & Effects Kanan (M&E R).",
        didYouKnow: "Pemisahan track M&E di channel 3 dan 4 memungkinkan stasiun TV menjual program tersebut ke luar negeri untuk diisi suara (dubbing) bahasa lain tanpa menghilangkan musik latarnya.",
      },
      {
        title: "11. Format Takarir Teks: Open Caption vs Closed Caption",
        content: "Open Caption (Burn-in Subtitle): teks menempel mati di gambar video dan tidak dapat dimatikan penonton. Closed Caption (CC / SRT / CEA-708): data teks tertanam terpisah yang dapat dinyalakan/dimatikan melalui tombol remote TV penonton.",
      },
      {
        title: "12. Ekspor File Subtitle Standar Penyiaran (.SRT dan SMPTE-TT)",
        content: "File takarir teks diekspor dalam format SRT atau XML timed-text. Menjaga teks maksimal 2 baris di layar (maksimal 37 karakter per baris) dengan durasi baca minimal 1,5 detik per kalimat agar terbaca nyaman.",
      },
      {
        title: "13. Struktur Awal Pita Siar: Bars, Tone, dan Slate (Countdown Leader)",
        content: "File master diawali dengan urutan standar: 00:00:00:00 (Bars and Tone SMPTE 1 kHz selama 30 detik), 00:00:30:00 (Slate teks informasi program selama 10 detik), 00:00:40:00 (Countdown Clock 8 detik), 00:00:58:00 (Layar Hitam 2 detik), 00:01:00:00 (Program Dimulai).",
      },
      {
        title: "14. Anatomi Slate Identifikasi Program (Production Slate)",
        content: "Slate adalah kartu teks penanda yang memuat: Nama Stasiun TV, Judul Program, Nomor Episode, Tanggal Tayang, Aspek Rasio (16:9), Format Audio (Stereo/5.1), dan Durasi Bersih Program (Total Running Time / TRT).",
      },
      {
        title: "15. Pembuatan Salinan Kompresi Web & Review (H.264 / H.265 MP4)",
        content: "Selain master broadcast MXF, editor merender versi MP4 H.264 bitrate 10-15 Mbps dengan penanda watermark 'FOR REVIEW ONLY' dan waktu timecode di layar (Burn-In Timecode) untuk ditinjau oleh produser dan klien.",
      },
      {
        title: "16. Automated Quality Control (AQC) Software",
        content: "Stasiun TV menggunakan software pemeriksa otomatis (Baton / Telestream Vidchecker) yang memindai master video dalam hitungan detik: mendeteksi drop frame, flash frames, freeze frames, audio clipping, dan pelanggaran batas safe luma.",
      },
      {
        title: "17. Penyusunan Dokumen Quality Control (QC Certificate)",
        content: "Editor mengisi lembar sertifikat kelayakan mutu siar (QC Pass Certificate): membubuhkan tanda tangan verifikasi bahwa materi telah lolos uji visual, uji kenyaringan EBU R128 (-24 LUFS), dan uji integritas metadata.",
      },
      {
        title: "18. Studi Kasus: Penolakan Master Video Akibat Kesalahan Field Order Interlaced",
        content: "Sebuah iklan TV ditolak karena field order diekspor 'Lower Field First'. Saat tayang, seluruh gerakan horizontal tampak bergetar bergerigi. Editor mengubah pengaturan ekspor menjadi 'Upper Field First' dan file diterima sempurna.",
      },
      {
        title: "19. Pengiriman Berkas Digital Berkecepatan Tinggi (Aspera / Signiant)",
        content: "File master siaran berukuran puluhan gigabyte dikirimkan ke server stasiun TV menggunakan protokol transfer data terakselerasi berenkripsi militer seperti IBM Aspera atau Signiant yang kebal terhadap putusnya koneksi internet.",
      },
      {
        title: "20. Rangkuman & Mahakarya Profesional Editor Televisi",
        content: "Tahap finalisasi dan ekspor adalah penentu akhir apakah karya seni Anda layak tayang di mata jutaan pemirsa. Dengan kepatuhan terhadap legalitas sinyal siar, format codec baku, dan ketelitian Quality Control, Anda melahirkan karya penyiaran yang abadi dan membanggakan.",
      },
    ],
    video: {
      title: "Pengaturan Ekspor Master File Standar Siaran Televisi Komersial",
      embedUrl: "https://www.youtube.com/embed/b5V_q2R8T1M",
      guide: "Pelajari cara memasang efek Video Limiter Broadcast Safe, mengonfigurasi ekspor kontainer MXF OP1a codec XDCAM HD422, dan merakit Countdown Slate di awal timeline.",
    },
    gamePairs: [
      { id: 1, left: "MXF OP1a", right: "Wadah file standar penyiaran televisi yang memuat video dan audio multi-track" },
      { id: 2, left: "Broadcast Safe", right: "Batas legalitas sinyal video pencahayaan (0-100 IRE) agar patuh regulasi siar" },
      { id: 3, left: "Upper Field First", right: "Urutan sapuan garis pemindaian standar untuk format video interlaced 1080i" },
      { id: 4, left: "Production Slate", right: "Kartu teks pengenal data judul program dan timecode di awal pita siar" },
      { id: 5, left: "Closed Caption (CC)", right: "Data takarir teks tertanam yang dapat diaktifkan melalui remote TV penonton" },
    ],
    caseTitle: "Studi Kasus 4: Penolakan File Siaran Akibat Luma Melampaui 100 IRE",
    caseScenario: "Sebuah video program wisata alam ditolak oleh divisi Quality Control (QC) stasiun televisi nasional dengan catatan kegagalan: 'Pencahayaan awan putih di langit menyentuh angka 108 IRE (Out of Broadcast Legal Limit) pada menit 04:12'.",
    caseInstruction: "Sebagai Finishing Editor, jelaskan mengapa sinyal 108 IRE tersebut dilarang dalam regulasi penyiaran televisi dan bagaimana cara mengaktifkan filter Broadcast Safe Video Limiter di software NLE untuk memperbaiki masalah tersebut dalam waktu 5 menit!",
    sampleQuestions: [
      {
        id: 1712,
        bloom: "C5",
        stem: "Jika stasiun televisi komersial meminta file pengiriman master program dengan spesifikasi '1080i50 XDCAM HD422 50Mbps MXF OP1a', pengaturan frame rate dan field scan yang wajib Anda pilih di jendela ekspor NLE adalah...",
        options: [
          { key: "A", text: "Frame rate 25.00 fps dengan Field Order: Upper Field First" },
          { key: "B", text: "Frame rate 60.00 fps dengan Field Order: Progressive" },
          { key: "C", text: "Frame rate 24.00 fps dengan Field Order: Lower Field First" },
          { key: "D", text: "Frame rate 30.00 fps tanpa audio" },
        ],
        correctKey: "A",
        explanation: "1080i50 berarti 50 field per detik yang dihasilkan dari frame rate 25.00 fps dengan pemindaian interlaced bersistem Upper Field First (standar broadcast PAL HDTV).",
      },
    ],
    lkpd: {
      title: "LKPD F7-K4: Konfigurasi Ekspor Master Broadcast MXF OP1a & Perakitan Slate Bumper",
      objective: "Peserta didik mampu merakit Countdown Slate di awal timeline dan mengekspor master file video standar penyiaran MXF OP1a lengkap dengan filter Broadcast Safe.",
      tools: ["Komputer Workstation NLE", "File Proyek Video Selesai Edit", "Template Countdown Clock & Color Bars 1kHz"],
      steps: [
        "Buka timeline video program berdurasi 60 detik yang sudah disetujui.",
        "Pasang Color Bars & 1 kHz Tone (-18 dBFS) selama 10 detik di awal timeline.",
        "Pasang Slate informasi program (Judul, Episode, Durasi TRT) selama 5 detik.",
        "Pasang Countdown Clock 5 detik dan 2 detik layar hitam sebelum video program mulai tepat di timecode 00:01:00:00.",
        "Pasang filter Video Limiter Broadcast Safe (Clip Luma 100 IRE).",
        "Ekspor video ke format MXF OP1a codec XDCAM HD422 atau Apple ProRes 422.",
      ],
      outputFormat: "File Video Master Broadcast MXF & Tangkapan Layar Pengaturan Jendela Ekspor NLE.",
    },
    journalQuestions: {
      q1: "Mengapa pemahaman standar teknis pengiriman (Delivery Specs) menjadi kunci penentu diterimanya karya video di stasiun televisi?",
      q2: "Apa bahaya yang dapat ditimbulkan jika sinyal video yang melebihi batas legal (100 IRE) tetap disiarkan ke pemancar televisi?",
      q3: "Mengapa perakitan Slate informasi dan Bars and Tone di awal pita siar sangat dihargai oleh teknisi Master Control Room?",
    },
    kktpIndicators: [
      "Mampu mengonfigurasi parameter ekspor master video standar broadcast (MXF OP1a, ProRes 422, XDCAM HD422).",
      "Mampu mengaplikasikan filter Broadcast Safe Limiter untuk kepatuhan rentang legalitas sinyal video (0-100 IRE).",
      "Mampu merakit urutan pembuka pita siar profesional (Bars & Tone, Production Slate, Countdown Leader).",
    ],
  },
];
