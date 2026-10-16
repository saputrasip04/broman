import type { ElemenContentItem } from "./curriculum-types";

export const F2_CONTENTS: ElemenContentItem[] = [
  // =========================================================================
  // KONTEN 1: Prosedur dan teknik penulisan naskah TV (20 Slide)
  // =========================================================================
  {
    id: "f2-k1",
    order: 1,
    title: "1. Prosedur dan teknik penulisan naskah TV",
    shortTitle: "Teknik Naskah TV",
    summary: "Konsep dasar, prosedur riset, dan format penulisan naskah televisi dua kolom (Split Page / Audio-Video) dengan terminologi teknis siaran baku.",
    kompetensi: ["1. Memahami", "2. Menulis"],
    tujuanPembelajaran: [
      "Peserta didik mampu memahami kaidah bahasa audio visual dan prinsip penulisan naskah televisi (Write for the Ear and Eye).",
      "Peserta didik mampu menyusun naskah format 2 kolom (Video & Audio) dengan terminologi baku industri penyiaran.",
    ],
    hookQuestion: "Mengapa kalimat yang terdengar indah saat dibaca di dalam buku novel sering kali terdengar kaku, membosankan, dan tidak masuk akal saat dibacakan oleh pembaca berita di layar televisi?",
    hookContext: "Naskah televisi ditulis bukan untuk dibaca dalam hati, melainkan untuk diucapkan (write for the ear) dan diilustrasikan dengan gambar bergerak (write for the eye). Bahasa televisi adalah bahasa lisan yang lugas, ringkas, dan langsung ke inti pesan.",
    pretestQuestions: [
      {
        id: 1201,
        bloom: "C2",
        stem: "Format standar penulisan naskah program televisi non-drama yang memisahkan instruksi visual di sisi kiri dan instruksi suara di sisi kanan disebut...",
        options: [
          { key: "A", text: "Format Dua Kolom (Split Page / Two-Column Script)" },
          { key: "B", text: "Format Satu Kolom Skenario Film Hollywood" },
          { key: "C", text: "Format Tabel Akuntansi Biaya" },
          { key: "D", text: "Format Sinopsis Cerpen" },
        ],
        correctKey: "A",
        explanation: "Format Dua Kolom adalah standar emas pertelevisian dunia yang memetakan korelasi detik-demi-detik antara apa yang dilihat penonton (Video) dan apa yang didengar penonton (Audio).",
      },
      {
        id: 1202,
        bloom: "C2",
        stem: "Istilah dalam naskah televisi yang menunjukkan suara narator membacakan narasi sementara gambar di layar menampilkan video rekaman peristiwa adalah...",
        options: [
          { key: "A", text: "VO (Voice Over)" },
          { key: "B", text: "SOT (Sound on Tape)" },
          { key: "C", text: "NatSound (Natural Sound)" },
          { key: "D", text: "Fade Out" },
        ],
        correctKey: "A",
        explanation: "VO (Voice Over) berarti suara orang yang berbicara terdengar melintasi gambar tanpa memperlihatkan orang tersebut berbicara secara langsung di layar.",
      },
    ],
    materialCards: [
      {
        title: "1. Hakikat & Filosofi Naskah Televisi: Menulis untuk Telinga & Mata",
        content: "Naskah televisi adalah cetak biru audio visual. Prinsip utamanya adalah 'Write for the Ear' (menggunakan kata-kata percakapan yang mudah dicerna dalam sekali dengar) dan 'Write to the Video' (kata-kata melengkapi gambar, bukan mengulang apa yang sudah terlihat jelas di layar).",
        didYouKnow: "Rata-rata kecepatan wicara normal penyiar berita televisi Indonesia adalah 120 hingga 140 kata per menit (WPM). Setiap 3 kata setara dengan durasi 1 detik siar.",
      },
      {
        title: "2. Anatomi Format Naskah Dua Kolom (Split Page Script)",
        content: "Kolom kiri berlabel 'VIDEO' memuat instruksi visual bagi Sutradara dan Juru Kamera (shot size, camera movement, grafis, cue video). Kolom kanan berlabel 'AUDIO' memuat teks dialog presenter, narasi Voice Over, efek suara (SFX), dan musik latar (BGM).",
      },
      {
        title: "3. Glosarium Terminologi Audio Televisi (VO, SOT, NatSound)",
        content: "VO (Voice Over): narasi pembaca berita di atas gambar. SOT (Sound on Tape): pernyataan suara narasumber hasil rekaman lapangan. NatSound (Natural Sound): suara asli lingkungan (desir ombak, deru mesin, riuh pasar) yang dipertahankan untuk membangun atmosfer riil.",
        caseStudy: "Mengabaikan NatSound membuat paket berita terasa steril dan buatan seperti di ruang hampa. Memasukkan NatSound 2 detik sebelum narasi VO masuk menciptakan dampak dramatik tinggi.",
      },
      {
        title: "4. Glosarium Terminologi Video Televisi (B-Roll, Talking Head, CG)",
        content: "B-Roll: cuplikan gambar pendukung untuk mengilustrasikan topik. Talking Head: shot narasumber sedang berbicara di depan kamera. CG (Character Generator) / Super (Superimpose): teks grafis nama tokoh, lokasi, atau tanggal yang muncul di sepertiga bawah layar.",
      },
      {
        title: "5. Tahapan Riset Naskah: Sumber Primer vs Sekunder",
        content: "Penulis naskah wajib melakukan verifikasi: Sumber Primer (wawancara langsung pelaku peristiwa, dokumen resmi kementerian/instansi) dan Sumber Sekunder (laporan media tepercaya, jurnal akademik). Hindari mengutip desas-desus media sosial tanpa konfirmasi faktual.",
      },
      {
        title: "6. Aturan Emas Kalimat Televisi: Subjek-Predikat-Objek (S-P-O)",
        content: "Gunakan kalimat aktif pendek (maksimal 15-20 kata per kalimat). Hindari anak kalimat bertingkat yang membingungkan. Contoh salah: 'Karena hujan lebat melanda, jembatan yang dibangun lima tahun lalu roboh.' Contoh benar: 'Jembatan ambruk dihantam banjir bandang siang tadi.'",
      },
      {
        title: "7. Penulisan Angka, Simbol & Akronim untuk Pembaca Naskah",
        content: "Tuliskan angka sebagaimana harus diucapkan. Tulis 'dua puluh lima miliar rupiah' bukan 'Rp 25.000.000.000,-'. Tulis singkatan asing disertai panduan fonetik pelafalan: UNESCO (baca: yu-nes-ko), WHO (baca: we-ha-o atau da-blyu-eich-o).",
        didYouKnow: "Penyiar berita dapat terselip lidah jika angka rumit seperti '1.472.930' tidak diubah oleh scriptwriter menjadi 'hampir satu koma lima juta'.",
      },
      {
        title: "8. Siklus Emosi & Struktur Dramatik Segmen Naskah",
        content: "Setiap segmen program membutuhkan busur emosi (Emotional Arc): Pembuka yang memancing rasa ingin tahu (Hook), Eskalasi konflik/pembahasan mendalam, Titik puncak kejutan/informasi kunci, dan Penutup yang menyisakan rasa puas atau pertanyaan reflektif.",
      },
      {
        title: "9. Sinkronisasi Teks Narasi dengan Durasi Video (Pacing)",
        content: "Penulis naskah menghitung durasi: jika klip video b-roll hanya berdurasi 6 detik, maka narasi pendukung maksimal terdiri dari 18 kata. Jangan menulis 40 kata untuk video 6 detik karena gambar akan habis sementara narator masih berbicara.",
      },
      {
        title: "10. Teknik Transisi Visual & Audio dalam Naskah",
        content: "Naskah memberi instruksi transisi: Cut (perpindahan tajam antar adegan sejalan), Dissolve (peleburan visual penanda perpindahan waktu atau tempat), Wipe (sapuan grafis transisi segmen), Fade to Black (penutup total tayangan menjelang jeda iklan).",
      },
      {
        title: "11. Menulis Pertanyaan Pemantik untuk Presenter",
        content: "Dalam naskah talkshow, penulis tidak menulis jawaban narasumber secara kaku, melainkan merumuskan 'Open-Ended Questions' (pertanyaan terbuka berawalan Bagaimana atau Mengapa) yang memicu narasumber bercerita secara emosional dan jujur.",
      },
      {
        title: "12. Penyusunan Cue Card (Kartu Pemandu Host)",
        content: "Cue Card adalah kartu kertas tebal seukuran telapak tangan yang dipegang pembawa acara. Memuat poin-poin kunci nama narasumber, gelar resmi, ringkasan pertanyaan per segmen, dan catatan sponsor yang wajib diucapkan secara lisan (ad-lib).",
      },
      {
        title: "13. Integrasi Instruksi Musik Latar (BGM) & Sound Effect (SFX)",
        content: "Di kolom audio dicantumkan: 'MUSIC: UP AND UNDER' (musik menghentak keras di awal lalu meredup di bawah suara narator), 'MUSIC: SWELL' (musik mengeras memperkuat emosi), 'SFX: CAMERA SHUTTER' (efek suara klik foto).",
      },
      {
        title: "14. Menghindari Klise dan Redundansi Visual",
        content: "Jangan mengatakan apa yang sudah terlihat jelas. Jika gambar menampilkan seorang wanita sedang menangis tersedu-sedu, jangan tulis narasi: 'Terlihat wanita ini menangis sedih.' Tuliskan fakta di balik tangisannya: 'Ibu tiga anak ini baru saja kehilangan tempat tinggalnya.'",
      },
      {
        title: "15. Software Penulisan Naskah Siaran Televisi Modern",
        content: "Stasiun televisi modern menggunakan software ruang berita terpadu (Newsroom Computer System / NRCS) seperti Avid iNEWS, Dalet Galaxy, Octopus, atau Celtx yang langsung menghubungkan naskah penulis ke teleprompter presenter di studio.",
      },
      {
        title: "16. Standardisasi Layout Tipografi Naskah TV",
        content: "Naskah dicetak dengan huruf Courier New atau Arial ukuran 12-14 pt, spasi ganda (double space) agar mudah dibaca oleh presenter di bawah pencahayaan lampu studio yang terang. Instruksi teknis ditulis dengan HURUF KAPITAL TEBAL.",
      },
      {
        title: "17. Studi Kasus: Mengoreksi Naskah Berita yang Bertele-tele",
        content: "Naskah awal berbunyi: 'Dalam rangka menindaklanjuti instruksi gubernur terkait penertiban parkir liar di bahu jalan raya protokol...'. Ditulis ulang menjadi: 'Dinas Perhubungan menderek puluhan mobil yang parkir liar di Jalan Sudirman pagi ini.' Efisien, tegas, dan langsung visual.",
      },
      {
        title: "18. Etika Penulisan: Objektivitas, Keadilan & Bahasa Netral",
        content: "Penulis naskah televisi dilarang menyisipkan opini pribadi yang menghakimi. Hindari kata sifat tendensius seperti 'tersangka yang kejam' atau 'kebijakan yang bodoh'. Sajikan data fakta dan biarkan pemirsa menyimpulkan sendiri.",
      },
      {
        title: "19. Hak Cipta Naskah & Kepemilikan Intelektual (IP)",
        content: "Naskah program yang dibuat di bawah kontrak kerja stasiun televisi umumnya menjadi hak milik perusahaan (Work for Hire). Namun, penulis berhak atas kredit nama (Scriptwriter Credit) di baris credit title penutup tayangan.",
      },
      {
        title: "20. Rangkuman & Portofolio Naskah Audio Visual",
        content: "Keterampilan menulis naskah televisi dua kolom adalah fondasi terpenting komunikasi visual. Naskah yang ringkas, berirama dinamis, dan bersinergi kuat dengan video adalah kunci utama terciptanya tayangan televisi yang memukau jutaan pemirsa.",
      },
    ],
    video: {
      title: "Format Standar Penulisan Naskah Televisi Dua Kolom (Video & Audio)",
      embedUrl: "https://www.youtube.com/embed/k-pTfC5M0Yg",
      guide: "Perhatikan bagaimana penulis naskah membagi instruksi visual di kolom kiri dan teks narasi di kolom kanan, serta menghitung kecepatan kata per detik.",
    },
    gamePairs: [
      { id: 1, left: "Two-Column Script", right: "Format naskah pemisah kolom visual (video) dan kolom suara (audio)" },
      { id: 2, left: "Voice Over (VO)", right: "Suara narator yang terdengar di atas rekaman gambar tanpa memperlihatkan orangnya" },
      { id: 3, left: "Sound on Tape (SOT)", right: "Klip rekaman suara pernyataan langsung narasumber yang tampil di layar" },
      { id: 4, left: "Natural Sound (NatSound)", right: "Suara latar alami lingkungan riil peristiwa yang memperkuat keaslian atmosfer" },
      { id: 5, left: "Lower Third", right: "Grafis teks informasi nama dan jabatan narasumber di bagian bawah layar" },
    ],
    caseTitle: "Studi Kasus 1: Menyederhanakan Naskah Siaran Rumit Menjadi Kalimat Lisan",
    caseScenario: "Seorang reporter pemula menyerahkan naskah berbunyi: 'Berdasarkan data kompilasi dari Badan Pusat Statistik, disimpulkan bahwa indikator indeks inflasi kumulatif bulan ini mengalami akselerasi sebesar 0,42 persen dikarenakan volatilitas harga komoditas cabai rawit.'",
    caseInstruction: "Sebagai Script Editor, tulis ulang naskah tersebut ke dalam maksimal 2 kalimat lisan pendek yang ramah di telinga pemirsa dan berikan instruksi video b-roll pendukung di kolom kiri!",
    sampleQuestions: [
      {
        id: 1203,
        bloom: "C4",
        stem: "Mengapa teks naskah berita televisi sebaiknya menghindari kalimat pasif panjang seperti 'Rancangan undang-undang tersebut akhirnya telah disahkan oleh dewan perwakilan'? Seharusnya diubah menjadi...",
        options: [
          { key: "A", text: "'Dewan perwakilan akhirnya mengesahkan rancangan undang-undang tersebut.'" },
          { key: "B", text: "'Telah disahkan suatu undang-undang yang dirancang.'" },
          { key: "C", text: "'Pengesahan rancangan undang-undang dilakukan oleh dewan.'" },
          { key: "D", text: "'Dewan itu mengesahkan apa yang telah dirancang.'" },
        ],
        correctKey: "A",
        explanation: "Kalimat aktif (S-P-O) membuat subjek pelaku jelas, lebih bertenaga, dan lebih mudah diproses oleh telinga pemirsa siaran.",
      },
    ],
    lkpd: {
      title: "LKPD F2-K1: Penulisan Naskah Dua Kolom Feature Televisi 60 Detik",
      objective: "Peserta didik mampu menulis naskah televisi format dua kolom berdurasi 60 detik (sekitar 120-140 kata) dengan instruksi visual dan audio lengkap.",
      tools: ["Komputer / Laptop", "Aplikasi Pengolah Kata (Word / Docs)", "Template Naskah Dua Kolom TV"],
      steps: [
        "Pilih topik: Profil Tokoh UMKM Unik atau Inovasi Daur Ulang Sampah.",
        "Buat tabel dua kolom: Kolom Kiri (VIDEO) dan Kolom Kanan (AUDIO).",
        "Cantumkan minimal 4 shot visual berbeda (WS, MCU, CU, B-Roll) di kolom video.",
        "Tulis narasi VO dan 1 kutipan SOT narasumber (durasi 10 detik) di kolom audio.",
        "Hitung total kata narasi agar durasi pembacaan tepat 60 detik.",
      ],
      outputFormat: "Dokumen Naskah Format PDF (Maks. 2 Halaman A4).",
    },
    journalQuestions: {
      q1: "Apa perbedaan paling mendasar antara menulis artikel majalah cetak dengan menulis naskah berita televisi?",
      q2: "Mengapa penulis naskah harus bersuara lantang (membaca keras-keras) saat sedang mengetik naskah di komputer?",
      q3: "Bagaimana cara Anda memastikan narasi yang Anda tulis tidak berulang dengan apa yang sudah terlihat di gambar video?",
    },
    kktpIndicators: [
      "Mampu menjelaskan fungsi dan terminologi format naskah dua kolom (Split Page Script).",
      "Mampu menerapkan kaidah bahasa lisan (Write for the Ear) dengan struktur kalimat aktif pendek.",
      "Mampu menyusun naskah audio visual 60 detik dengan sinkronisasi instruksi gambar dan suara yang harmonis.",
    ],
  },

  // =========================================================================
  // KONTEN 2: Naskah siaran jurnalistik (20 Slide)
  // =========================================================================
  {
    id: "f2-k2",
    order: 2,
    title: "2. Naskah siaran jurnalistik",
    shortTitle: "Naskah Berita Jurnalistik",
    summary: "Kaidah jurnalistik televisi, struktur piramida terbalik, lead berita TV, penyusunan paket berita (Package/PKGS), dan kepatuhan Kode Etik Jurnalistik (KEJ).",
    kompetensi: ["1. Menganalisis", "2. Menyusun"],
    tujuanPembelajaran: [
      "Peserta didik mampu menganalisis struktur berita televisi (Lead, Body, SOT, Stand-up reporter, dan Climax).",
      "Peserta didik mampu menyusun naskah paket berita televisi (News Package) yang faktual, berimbang, dan taat kode etik.",
    ],
    hookQuestion: "Jika terjadi peristiwa kebakaran besar, mengapa jurnalis televisi tidak boleh membuka naskah berita dengan kalimat klise: 'Si jago merah kembali mengamuk'?",
    hookContext: "Bahasa jurnalistik televisi modern menolak eufemisme klise dan dramatisasi murahan. Pemirsa membutuhkan fakta konkret, angka presisi, dan lokasi kejadian dalam 5 detik pertama tayangan.",
    pretestQuestions: [
      {
        id: 1204,
        bloom: "C2",
        stem: "Kalimat pembuka naskah berita televisi yang bertugas menarik perhatian penonton sekaligus merangkum inti terpenting peristiwa disebut...",
        options: [
          { key: "A", text: "Lead Berita (Intro Anchor)" },
          { key: "B", text: "Outro Credits" },
          { key: "C", text: "Bumper In" },
          { key: "D", text: "News Ticker" },
        ],
        correctKey: "A",
        explanation: "Lead adalah kalimat pembuka krusial yang dibacakan presenter berita di studio sebelum melempar ke laporan reporter atau paket video.",
      },
      {
        id: 1205,
        bloom: "C2",
        stem: "Format laporan berita televisi lengkap yang terdiri dari narasi VO, cuplikan suara narasumber (SOT), gambar pendukung (B-roll), dan laporan langsung reporter di lokasi (Stand-up) disebut...",
        options: [
          { key: "A", text: "Paket Berita (News Package / PKGS)" },
          { key: "B", text: "Reader Only" },
          { key: "C", text: "Graphic Still" },
          { key: "D", text: "Ad-Lib Promo" },
        ],
        correctKey: "A",
        explanation: "News Package adalah format berita paling komprehensif di ruang berita televisi dengan durasi rata-rata 1 menit 30 detik hingga 2 menit.",
      },
    ],
    materialCards: [
      {
        title: "1. Landasan Jurnalistik Televisi: Fakta, Kecepatan & Visual",
        content: "Jurnalistik televisi menyajikan kebenaran fakta melalui perpaduan audio dan visual. Berbeda dengan media cetak, berita televisi mengandalkan kekuatan visual langsung yang membuktikan bahwa peristiwa tersebut benar-benar terjadi di lapangan.",
        didYouKnow: "Prinsip dasar jurnalisme televisi dunia dirangkum dalam formula ABC: Accuracy (Akurat), Brevity (Ringkas), dan Clarity (Jelas).",
      },
      {
        title: "2. Struktur Piramida Terbalik dalam Berita Televisi",
        content: "Struktur berita mendahulukan fakta paling krusial di puncak (Lead / Kepala Berita), diikuti rincian penjelasan pendukung (Body / Tubuh Berita), dan latar belakang konteks di bagian bawah. Jika durasi siaran mendadak dipotong MCR, informasi inti tetap tersampaikan.",
      },
      {
        title: "3. Format Tayangan Berita: Reader, VO, VO-SOT, dan PKGS",
        content: "Reader: Presenter membaca berita murni di depan kamera tanpa video (15-20 detik). VO: Presenter membaca narasi di atas gambar video (20-30 detik). VO-SOT: Narasi video presenter disambung cuplikan narasumber (40-60 detik). PKGS (Package): Laporan lengkap reporter bersuara penuh (90-120 detik).",
      },
      {
        title: "4. Anatomi Lead Berita TV (Intro Anchor)",
        content: "Lead berita TV harus segar dan berorientasi masa kini (present tense). Hindari menyebutkan waktu 'kemarin' di awal kalimat. Contoh baik: 'Polisi memeriksa lima saksi terkait ambruknya jembatan penyeberangan di Jakarta Barat.'",
      },
      {
        title: "5. Mengintegrasikan Elemen 5W + 1H Tanpa Menumpuk Kalimat",
        content: "Jangan memaksakan Who, What, Where, When, Why, dan How ke dalam satu kalimat pembuka yang panjang. Pecah menjadi dua atau tiga kalimat berurutan agar pemirsa dapat mencerna informasi dengan nyaman.",
      },
      {
        title: "6. Karakteristik Sound Bite (SOT) yang Berkualitas",
        content: "SOT yang baik bukan sekadar membacakan data statistik, melainkan mengungkapkan opini pribadi, emosi, atau keputusan resmi tokoh. Durasi ideal SOT berita televisi berkisar antara 8 hingga 15 detik.",
        caseStudy: "Pernyataan pejabat: 'Kami mengalokasikan anggaran 5 triliun' lebih baik dijadikan narasi VO oleh presenter. SOT pejabat dipilih yang berbunyi: 'Saya pastikan tidak ada warga yang kelaparan malam ini.'",
      },
      {
        title: "7. Teknik Melakukan Stand-Up Reporter di Lokasi Kejadian",
        content: "Stand-Up adalah momen reporter berbicara langsung menghadap kamera di tempat kejadian. Fungsinya: (1) Membuktikan reporter hadir di lokasi, (2) Menjembatani transisi topik yang rumit, atau (3) Menjelaskan peristiwa yang tidak memiliki rekaman video visualnya.",
      },
      {
        title: "8. Penulisan Naskah Breaking News & Live Report",
        content: "Saat Breaking News, naskah disusun dalam format pointer fakta (bullet points). Jurnalis di studio dan reporter di lapangan melakukan improvisasi terarah berbasis data verifikasi terbaru tanpa terjebak menyebarkan spekulasi liar.",
      },
      {
        title: "9. Kaidah Menulis News Ticker (Teks Berita Berjalan)",
        content: "News Ticker di bagian bawah layar televisi harus ringkas (maksimal 10–12 kata per baris), menggunakan tanda pemisah jelas, dan hanya memuat berita penting yang sudah terverifikasi validitasnya.",
      },
      {
        title: "10. Kode Etik Jurnalistik (KEJ) & Perlindungan Korban/Anak",
        content: "Wartawan televisi wajib mengaburkan (blur) wajah korban kekerasan seksual, anak yang berhadapan dengan hukum, dan jenazah korban kecelakaan maut. Dilarang mengungkap identitas sekolah atau alamat rumah anak.",
        didYouKnow: "KPI dapat menjatuhkan sanksi penghentian sementara mata acara berita jika stasiun TV menayangkan darah atau luka terbuka korban kekerasan secara vulgar.",
      },
      {
        title: "11. Asas Praduga Tak Bersalah & Uji Keseimbangan (Cover Both Sides)",
        content: "Naskah berita konflik atau hukum wajib menyebut status subjek hukum sebagai 'tersangka' atau 'diduga', bukan menghakimi sebagai pelaku bersalah. Wajib memberi ruang klarifikasi yang seimbang bagi kedua pihak yang bersengketa.",
      },
      {
        title: "12. Penulisan Naskah Investigasi Televisi",
        content: "Laporan investigasi mengurai kejahatan tersembunyi. Naskah dibangun dengan logika pembuktian ketat, perbandingan data dokumen, wawancara saksi anonim (suara disamarkan/pitch down), dan penelusuran lapangan mendalam.",
      },
      {
        title: "13. Naskah Berita Human Interest: Menyentuh Emosi Pemirsa",
        content: "Berita human interest mengangkat kisah perjuangan hidup rakyat kecil. Naskah menggunakan pilihan kata yang membangkitkan empati tanpa mengeksploitasi kemiskinan (poverty porn) narasumber.",
      },
      {
        title: "14. Menghindari Clickbait & Sensasionalisme dalam Judul Berita TV",
        content: "Judul berita televisi pada grafis lower third harus mencerminkan substansi fakta, bukan memancing kepanikan palsu. Hindari kata-kata berlebihan seperti 'Mencekam!', 'Geger!', atau 'Bikin Merinding!'.",
      },
      {
        title: "15. Alur Kerja Ruang Berita (Newsroom Workflow)",
        content: "Dari Produser Berita memimpin rapat proyeksi pagi (Morning Pitch), Reporter meliput ke lapangan, Cameraperson mengambil gambar, Editor memotong visual, Script Editor menyunting naskah, hingga dibacakan News Anchor di siaran live petang.",
      },
      {
        title: "16. Menghadapi Tekanan Waktu (Deadline Pressure) di Ruang Berita",
        content: "Program berita live memiliki deadline mutlak per jam. Penulis naskah dituntut mampu menyusun naskah 30 detik lengkap dengan footage video hanya dalam waktu 5 menit sebelum penayangan.",
      },
      {
        title: "17. Studi Kasus: Penanganan Berita Bencana Alam",
        content: "Pada liputan gempa bumi, naskah berita harus mengutamakan nomor kontak posko darurat, jalur evakuasi resmi, dan fakta korban yang diverifikasi BNPB, bukan menyebarkan rekaman kepanikan histeris penonton.",
      },
      {
        title: "18. Verifikasi Konten Media Sosial (User-Generated Content / UGC)",
        content: "Jika ruang berita menggunakan video amatir warga dari TikTok atau Instagram, naskah wajib mencantumkan sumber kredit: 'Video Warga / Media Sosial' dan melalui proses verifikasi geolokasi serta waktu peristiwa.",
      },
      {
        title: "19. Independensi Ruang Berita dari Tekanan Politik & Pemilik Modal",
        content: "Jurnalis televisi harus menjunjung tinggi independensi ruang redaksi (newsroom wall). Naskah berita tidak boleh dipesan untuk menguntungkan partai politik tertentu atau kepentingan bisnis pemilik stasiun TV.",
      },
      {
        title: "20. Rangkuman Kompetensi Jurnalis Televisi Masa Depan",
        content: "Menulis naskah berita televisi adalah amanah publik. Dengan menyajikan berita yang cepat, akurat, bernurani, dan taat kode etik, Anda turut menjaga pilar demokrasi dan hak masyarakat atas informasi yang benar.",
      },
    ],
    video: {
      title: "Teknik Menulis Naskah Berita Televisi yang Lugas, Akurat, dan Dinamis",
      embedUrl: "https://www.youtube.com/embed/dHQnC4aC1YQ",
      guide: "Pelajari bagaimana Produser Berita merumuskan lead berita TV, memilih kutipan SOT terbaik, dan merangkai alur cerita paket berita 90 detik.",
    },
    gamePairs: [
      { id: 1, left: "Lead Berita", right: "Kalimat pembuka intro anchor yang merangkum inti terpenting peristiwa" },
      { id: 2, left: "News Package (PKGS)", right: "Format paket berita komprehensif memuat VO, SOT, dan Stand-up reporter" },
      { id: 3, left: "Stand-Up Reporter", right: "Laporan tatap kamera reporter langsung di lokasi kejadian peristiwa" },
      { id: 4, left: "Sound Bite", right: "Kutipan suara singkat 8-15 detik pernyataan narasumber berbobot" },
      { id: 5, left: "Cover Both Sides", right: "Prinsip jurnalisme berimbang memberikan ruang hak jawab kedua belah pihak" },
    ],
    caseTitle: "Studi Kasus 2: Menulis Naskah Berita Dugaan Korupsi Pengadaan Barang",
    caseScenario: "Sebuah LSM melaporkan seorang pejabat daerah ke kantor kejaksaan atas dugaan penggelembungan dana proyek pengadaan komputer sekolah. Pihak pejabat belum memberikan konfirmasi resmi saat dihubungi melalui telepon.",
    caseInstruction: "Sebagai jurnalis televisi, tuliskan naskah format VO-SOT 40 detik yang mematuhi asas praduga tak bersalah dan jelaskan bagaimana Anda mencantumkan upaya konfirmasi yang telah dilakukan!",
    sampleQuestions: [
      {
        id: 1206,
        bloom: "C5",
        stem: "Jika reporter di lapangan memperoleh rekaman video eksklusif perkelahian pelajar, tindakan editorial penulisan naskah yang paling sesuai dengan Kode Etik Jurnalistik dan P3SPS adalah...",
        options: [
          { key: "A", text: "Menayangkan aksi kekerasan tersebut secara utuh tanpa sensor agar viral" },
          { key: "B", text: "Mengaburkan (blur) wajah pelaku di bawah umur, menyensor adegan hantaman fisik brutal, dan memfokuskan naskah pada upaya pencegahan tawuran" },
          { key: "C", text: "Menyebutkan nama lengkap dan nama sekolah para siswa yang berkelahi" },
          { key: "D", text: "Menjual rekaman tersebut ke akun gosip media sosial" },
        ],
        correctKey: "B",
        explanation: "Hukum perlindungan anak dan kode etik jurnalistik melarang publikasi identitas anak pelaku kejahatan dan melarang eksploitasi visual kekerasan brutal di televisi.",
      },
    ],
    lkpd: {
      title: "LKPD F2-K2: Penyusunan Paket Berita Televisi (News Package) 90 Detik",
      objective: "Peserta didik mampu menyusun naskah lengkap paket berita televisi (Lead Anchor, Narasi VO, Transkrip SOT, dan Stand-up Reporter).",
      tools: ["Komputer / Laptop", "Format Template News Package", "Akses Riset Informasi Isu Aktual"],
      steps: [
        "Pilih salah satu isu aktual lokal: Kebersihan Lingkungan, Prestasi Siswa SMK, atau Kemacetan Lalu Lintas.",
        "Tulis Lead Anchor untuk presenter studio (maksimal 25 kata).",
        "Susun Bagian 1: Narasi VO pengantar masalah (durasi 20 detik).",
        "Tuliskan Transkrip SOT narasumber warga/ahli (durasi 12 detik).",
        "Susun Stand-Up Reporter di lokasi (durasi 15 detik).",
        "Tulis Bagian 2: Narasi VO penutup dan rencana solusi ke depan (durasi 20 detik).",
      ],
      outputFormat: "Dokumen Naskah News Package Format PDF Lengkap dengan Timecode.",
    },
    journalQuestions: {
      q1: "Mengapa kecepatan menyiarkan berita tidak boleh mengorbankan ketepatan verifikasi fakta?",
      q2: "Bagaimana cara Anda mengendalikan emosi atau bias pribadi saat harus meliput peristiwa yang tidak Anda sukai?",
      q3: "Mengapa perlindungan identitas anak korban dan anak pelaku wajib dijaga ketat dalam jurnalisme televisi?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi format berita televisi (Reader, VO, VO-SOT, PKGS).",
      "Mampu menulis lead berita televisi yang padat, menarik, dan berorientasi waktu kini.",
      "Mampu menerapkan Kode Etik Jurnalistik (KEJ) dan P3SPS dalam naskah siaran berita.",
    ],
  },

  // =========================================================================
  // KONTEN 3: Naskah siaran artistik (non-drama, talkshow) (20 Slide)
  // =========================================================================
  {
    id: "f2-k3",
    order: 3,
    title: "3. Naskah siaran artistik (non-drama, talkshow)",
    shortTitle: "Naskah Artistik & Talkshow",
    summary: "Perancangan naskah program hiburan televisi: talkshow inspiratif, game show, variety show musik, penyusunan rundown artistik, dan pemandu dialog presenter.",
    kompetensi: ["1. Merancang", "2. Mengembangkan"],
    tujuanPembelajaran: [
      "Peserta didik mampu merancang struktur naskah program televisi artistik non-drama berdurasi 30 menit.",
      "Peserta didik mampu mengembangkan lembar dialog pembuka (Monologue), pertanyaan pemantik (Trigger Questions), dan bridge transisi presenter.",
    ],
    hookQuestion: "Bagaimana pembawa acara talkshow terkenal mampu membuat bintang tamu menangis menceritakan rahasia masa lalunya tanpa terlihat memaksa di depan kamera?",
    hookContext: "Di balik kehebatan seorang host televisi, terdapat naskah talkshow yang dirancang dengan psikologi alur percakapan mendalam, pertanyaan pemantik terstruktur, dan riset latar belakang narasumber yang luar biasa detail.",
    pretestQuestions: [
      {
        id: 1207,
        bloom: "C2",
        stem: "Kalimat pengantar monolog atau lelucon pembuka yang dibawakan oleh pembawa acara di awal program talkshow sebelum memanggil bintang tamu disebut...",
        options: [
          { key: "A", text: "Opening Monologue / Host Intro" },
          { key: "B", text: "Credit Roll" },
          { key: "C", text: "Commercial Bumper" },
          { key: "D", text: "News Lead" },
        ],
        correctKey: "A",
        explanation: "Opening Monologue adalah kesempatan host membangun ikatan emosional pertama dengan penonton dan menetapkan nada suasana program.",
      },
      {
        id: 1208,
        bloom: "C2",
        stem: "Kalimat peralihan yang diucapkan presenter untuk menghubungkan satu topik perbincangan ke topik perbincangan lainnya secara mulus disebut...",
        options: [
          { key: "A", text: "Bridge / Transisi Dialog" },
          { key: "B", text: "Hard Cut" },
          { key: "C", text: "Station Promo" },
          { key: "D", text: "Commercial Break" },
        ],
        correctKey: "A",
        explanation: "Bridge berfungsi sebagai jembatan pembicaraan agar perpindahan tema tidak terasa mendadak atau janggal bagi pemirsa.",
      },
    ],
    materialCards: [
      {
        title: "1. Karakteristik Program Televisi Artistik Non-Drama",
        content: "Program artistik non-drama menitikberatkan pada hiburan edukatif, daya tarik personalitas pengisi acara, keindahan set panggung, tata cahaya dramatik, dan keterlibatan emosi penonton. Format ini mencakup Talkshow, Game Show, Variety Show Musik, dan Reality Show.",
        didYouKnow: "Naskah program non-drama tidak menghafal kata-demi-kata seperti naskah drama sandiwara, melainkan menyediakan 'Semi-Scripted Structure' (panduan alur bebas terkendali).",
      },
      {
        title: "2. Struktur Naskah Semi-Scripted (Struktur Terbuka)",
        content: "Semi-Scripted memuat dialog tertulis pasti untuk pembuka (intro), penutup (closing), transisi sponsor, dan aturan kuis. Namun untuk sesi obrolan dengan bintang tamu, naskah hanya memuat 'Daftar Pertanyaan Kunci' dan 'Poin Fakta Riset'.",
      },
      {
        title: "3. Anatomi 4 Segmen Naskah Talkshow 30 Menit",
        content: "Segmen 1: Opening Monologue Host & Pengenalan Masalah Utama. Segmen 2: Masuk Bintang Tamu 1 (Kisah Inspiratif / Sukses). Segmen 3: Masuk Bintang Tamu 2 / Praktik Demonstrasi / Konflik Emosional. Segmen 4: Pesan Moral (Takeaway Value) & Penutup Program.",
      },
      {
        title: "4. Menulis Monolog Pembuka Host (Opening Monologue)",
        content: "Monolog pembuka berdurasi 1 hingga 2 menit. Harus memuat: sapaan ramah khas (signature greeting), komentar jenaka atau reflektif terhadap peristiwa viral minggu ini, dan pengantar nama topik episode.",
      },
      {
        title: "5. Riset Narasumber (Pre-Interview Sheet)",
        content: "Sebelum menulis naskah talkshow, penulis naskah melakukan Pre-Interview melalui telepon dengan narasumber. Menggali momen paling membahagiakan, momen terpuruk, titik balik kehidupan, dan hal-hal sensitif yang dilarang dibahas di layar kaca.",
        caseStudy: "Riset mendalam menemukan hobi rahasia seorang atlet bulu tangkis yang suka mengoleksi perangko kuno. Pertanyaan ini menjadi pemecah kebekuan wawancara yang memikat jutaan penonton.",
      },
      {
        title: "6. Teknik Menyusun Pertanyaan Pemantik (Trigger Questions)",
        content: "Urutan pertanyaan dirancang dari yang ringan ke mendalam: (1) Warm-up question (kabar dan kegiatan terkini), (2) Core story question (proses mencapai prestasi), (3) Emotional deep question (pengorbanan dan air mata di balik layar), dan (4) Future vision question.",
      },
      {
        title: "7. Seni Menulis Jembatan Transisi (Bridging)",
        content: "Jembatan menghubungkan dua hal kontras. Contoh transisi: 'Bicara soal rekor lari maraton tadi sangat melelahkan, nah sekarang kita beralih ke rekor lain yang tidak kalah menguras keringat: memasak nasi tumpeng raksasa setinggi 5 meter!'",
      },
      {
        title: "8. Naskah Game Show: Kejelasan Regulasi & Gimmick Kuis",
        content: "Game Show membutuhkan naskah instruksi aturan permainan yang mutlak jelas agar tidak memicu sengketa hadiah. Penulis naskah merancang kalimat pembuka babak, efek suara kuis (benar vs salah), dan kejutan hadiah di detik-detik akhir.",
      },
      {
        title: "9. Naskah Variety Show Musik: Sinkronisasi Intro Musik & Host",
        content: "Di variety show musik, naskah mencatat durasi intro lagu detik-per-detik. Host harus selesai mengucapkan kalimat pengantar tepat saat vokal penyanyi dimulai (Talking up to the vocal / hitting the post).",
        didYouKnow: "Host musik profesional terlatih berbicara tepat 14 detik di atas intro lagu tanpa menabrak lirik pertama sang vokalis.",
      },
      {
        title: "10. Penulisan Naskah Reality Show: Panduan Skenario Nyata",
        content: "Reality show bukan fiksi, namun membutuhkan skenario perancangan situasi (constructed reality). Naskah menentukan titik kejutan (prank/surprise), penempatan kamera tersembunyi, dan pemicu respons emosi subjek secara wajar.",
      },
      {
        title: "11. Merancang Interaksi Penonton Studio (Audience Engagement)",
        content: "Naskah mencantumkan instruksi kapan penonton bertepuk tangan (Applause cue), kapan tertawa (Laughter cue), dan skrip interaksi host turun dari panggung menyapa penonton baris depan secara spontan.",
      },
      {
        title: "12. Penulisan Ad-Lib Sponsor & Product Placement",
        content: "Ad-lib adalah kalimat promosi yang dibacakan presenter secara santai seolah-olah mengalir dari percakapan pribadi. Penulis naskah harus menyamarkan bahasa iklan agar terdengar tulus dan tidak kaku.",
      },
      {
        title: "13. Pembuatan Cue Card Fisik untuk Presenter",
        content: "Cue Card dicetak tebal ukuran A5 dengan tipografi besar dan kontras tinggi. Setiap kartu mewakili 1 segmen dan diberi penomoran urut. Jika teleprompter macet, host tetap dapat memimpin acara dengan tenang berkat Cue Card.",
      },
      {
        title: "14. Mengantisipasi Jawaban 'Ya' atau 'Tidak' dari Bintang Tamu",
        content: "Jika bintang tamu pendiam dan hanya menjawab singkat, naskah cadangan harus siap di tangan host dengan pertanyaan pendalaman (follow-up probe): 'Mengapa Anda mengambil keputusan tersebut?' atau 'Bagaimana perasaan keluarga saat itu?'.",
      },
      {
        title: "15. Tata Bahasa Santun tapi Akrab (Conversational Tone)",
        content: "Gunakan kata sapaan yang hangat seperti 'Anda di rumah', 'Sahabat penonton', atau sapaan khas komunitas program. Hindari istilah birokrasi kaku yang membuat program hiburan terasa seperti rapat dinas.",
      },
      {
        title: "16. Kepatuhan P3SPS pada Acara Hiburan: Larangan Body Shaming",
        content: "Regulasi KPI melarang lelucon yang menghina fisik seseorang (body shaming), merendahkan kaum disabilitas, atau menyebarkan aib rumah tangga pribadi demi sensasi tontonan murahan.",
      },
      {
        title: "17. Studi Kasus: Sukses Program Talkshow Berkat Riset Mendalam",
        content: "Program talkshow inspiratif berhasil membuat seorang tokoh politik menangis karena host menunjukkan foto kenangan bersama guru sekolah dasarnya yang telah diriset rahasia oleh tim penulis naskah selama 1 bulan.",
      },
      {
        title: "18. Integrasi Unsur Gimmick Interaktif & Media Sosial",
        content: "Naskah memasukkan segmen membaca cuitan lucu penonton, menampilkan video kiriman pemirsa di layar LED studio raksasa, atau tantangan live gaming bersama netizen via video call.",
      },
      {
        title: "19. Format Naskah Running Order Artistik",
        content: "Running Order memuat alur artistik per menit: Warna lampu studio di segmen ini (Biru tenang), posisi berdiri presenter (Stage Kanan), jenis mikrofon (Wireless Handheld), dan musik penutup (Up tempo).",
      },
      {
        title: "20. Rangkuman & Kunci Daya Pikat Naskah Non-Drama",
        content: "Menulis naskah program artistik adalah perpaduan kehangatan empati, kecerdasan riset, dan rasa humor yang elegan. Naskah yang kokoh memberi panggung bagi pembawa acara dan bintang tamu untuk bersinar cemerlang di hati penonton.",
      },
    ],
    video: {
      title: "Penulisan Naskah Talkshow Televisi: Membuat Cue Card dan Alur Wawancara",
      embedUrl: "https://www.youtube.com/embed/WJ6B8rRkQYc",
      guide: "Simak bagaimana penulis naskah merancang alur dialog semi-scripted, menyusun trigger questions, dan mencetak cue card presenter.",
    },
    gamePairs: [
      { id: 1, left: "Semi-Scripted", right: "Format naskah terbuka memuat poin pertanyaan dan alur dialog terarah" },
      { id: 2, left: "Trigger Questions", right: "Daftar pertanyaan pemantik yang dirancang memicu jawaban mendalam narasumber" },
      { id: 3, left: "Bridge", right: "Kalimat jembatan peralihan topik antar perbincangan agar mengalir mulus" },
      { id: 4, left: "Cue Card", right: "Kartu panduan pegangan host memuat rangkuman naskah dan data penting" },
      { id: 5, left: "Hit The Post", right: "Keahlian host menyelesaikan dialog tepat saat intro musik vokal dimulai" },
    ],
    caseTitle: "Studi Kasus 3: Bintang Tamu Artis yang Pendiam dan Gugup",
    caseScenario: "Seorang ilmuwan muda penemu teknologi ramah lingkungan diundang ke talkshow remaja. Saat gladi bersih, sang ilmuwan sangat gugup dan hanya menjawab pertanyaan host dengan kalimat pendek 'Ya' atau 'Tidak'.",
    caseInstruction: "Sebagai Penulis Naskah Talkshow, ubah 3 butir pertanyaan teoritis teknis menjadi 3 butir pertanyaan penceritaan personal (storytelling) yang membongkar pengalaman emosional masa kecilnya saat pertama kali menciptakan alat tersebut!",
    sampleQuestions: [
      {
        id: 1209,
        bloom: "C4",
        stem: "Mengapa pertanyaan wawancara tertutup berawalan 'Apakah Anda senang memenangkan penghargaan ini?' sangat dihindari dalam naskah talkshow televisi?",
        options: [
          { key: "A", text: "Karena narasumber hanya akan menjawab 'Ya' sehingga percakapan langsung mati" },
          { key: "B", text: "Karena kata 'senang' dilarang dalam regulasi penyiaran" },
          { key: "C", text: "Karena host tidak boleh menanyakan perasaan orang lain" },
          { key: "D", text: "Karena pertanyaan tersebut terlalu panjang untuk dibacakan" },
        ],
        correctKey: "A",
        explanation: "Pertanyaan tertutup membatasi jawaban narasumber. Pertanyaan harus diubah menjadi pertanyaan terbuka: 'Bagaimana momen saat nama Anda diumumkan di atas panggung?'.",
      },
    ],
    lkpd: {
      title: "LKPD F2-K3: Perancangan Naskah Talkshow Remaja Inspiratif 1 Segmen",
      objective: "Peserta didik mampu menyusun naskah semi-scripted talkshow televisi durasi 7 menit lengkap dengan Monolog Pembuka, Trigger Questions, dan Desain Cue Card.",
      tools: ["Komputer / Laptop", "Format Template Semi-Scripted", "Kertas Tebal Manila / Karton untuk Cue Card"],
      steps: [
        "Tentukan tema talkshow dan profil karakter bintang tamu (misal: Siswa Kreator Konten Edukasi).",
        "Tulis Opening Monologue host berdurasi 90 detik (sekitar 180 kata).",
        "Susun 5 daftar Trigger Questions dari topik pengenalan hingga titik balik emosional.",
        "Buat 1 kalimat ad-lib sponsor produk minuman remaja.",
        "Pindahkan poin-poin kunci ke dalam format kartu Cue Card fisik ukuran 15x10 cm.",
      ],
      outputFormat: "File Naskah Format PDF & Foto Produk Fisik Cue Card Presenter.",
    },
    journalQuestions: {
      q1: "Mengapa riset pra-wawancara (pre-interview) menjadi kunci keberhasilan naskah talkshow?",
      q2: "Bagaimana cara Anda merancang pertanyaan yang tajam dan berbobot tanpa membuat narasumber merasa tersinggung?",
      q3: "Apa manfaat pembuatan kartu Cue Card fisik meskipun di studio sudah ada layar teleprompter canggih?",
    },
    kktpIndicators: [
      "Mampu menyusun naskah program televisi format semi-scripted dengan struktur yang harmonis.",
      "Mampu merumuskan pertanyaan wawancara mendalam berbasis teknik open-ended question.",
      "Mampu membuat kartu pemandu dialog (Cue Card) presenter yang ergonomis dan mudah dibaca.",
    ],
  },

  // =========================================================================
  // KONTEN 4: Naskah produksi & siaran (revisi & final) (20 Slide)
  // =========================================================================
  {
    id: "f2-k4",
    order: 4,
    title: "4. Naskah produksi & siaran (revisi & final)",
    shortTitle: "Naskah Final & Teleprompter",
    summary: "Prosedur script reading, revisi naskah menit-menit terakhir (last-minute changes), pengoperasian teleprompter, dan sinkronisasi naskah dengan Master Control.",
    kompetensi: ["1. Merevisi", "2. Mengoperasikan"],
    tujuanPembelajaran: [
      "Peserta didik mampu melakukan revisi naskah menit-menit terakhir secara cepat, akurat, dan terkoordinasi lintas departemen.",
      "Peserta didik mampu mengintegrasikan naskah siaran final ke dalam sistem software teleprompter studio penyiaran.",
    ],
    hookQuestion: "Jika 2 menit sebelum siaran langsung tiba-tiba ada instruksi dari pemimpin redaksi bahwa nama menteri dalam naskah salah, bagaimana cara tercepat memperbaruinya di prompter presenter tanpa mengacaukan siaran?",
    hookContext: "Di industri penyiaran berita berkecepatan tinggi, perubahan naskah dapat terjadi saat siaran sudah on-air. Penulis naskah yang tanggap adalah garda terdepan penjaga akurasi stasiun televisi.",
    pretestQuestions: [
      {
        id: 1210,
        bloom: "C2",
        stem: "Rapat pembacaan naskah bersama antara Penulis Naskah, Sutradara, Host/Presenter, dan Tim Teknis untuk menyelaraskan persepsi sebelum masuk studio disebut...",
        options: [
          { key: "A", text: "Script Reading / Script Conference" },
          { key: "B", text: "Audience Polling" },
          { key: "C", text: "Master Log Sheet" },
          { key: "D", text: "Technical Survey" },
        ],
        correctKey: "A",
        explanation: "Script Reading adalah tahapan krusial untuk melatih intonasi wicara, menguji durasi lisan, dan mendeteksi kelemahan teks naskah bersama-sama.",
      },
      {
        id: 1211,
        bloom: "C2",
        stem: "Perangkat elektronik berupa layar monitor yang dipantulkan ke kaca transparan di depan lensa kamera sehingga presenter dapat membaca teks sambil menatap langsung ke penonton disebut...",
        options: [
          { key: "A", text: "Teleprompter / Autocue" },
          { key: "B", text: "Audio Monitor" },
          { key: "C", text: "Waveform Monitor" },
          { key: "D", text: "Tally Light Box" },
        ],
        correctKey: "A",
        explanation: "Teleprompter membantu presenter membaca naskah panjang tanpa menunduk membaca kertas, sehingga kontak mata dengan penonton tetap terjaga alami.",
      },
    ],
    materialCards: [
      {
        title: "1. Dari Draf Kasar Menuju Naskah Siaran Final (Shooting Script)",
        content: "Naskah mengalami evolusi: Draft 1 (gagasan cerita), Draft 2 (perbaikan bahasa dan timing), hingga Shooting Script (naskah final yang disahkan produser dengan penomoran scene, instruksi kamera, dan timecode presisi).",
        didYouKnow: "Setiap versi revisi naskah dicetak dengan warna kertas berbeda (putih, biru, kuning, pink) agar kru tahu instan siapa yang memegang naskah edisi terbaru.",
      },
      {
        title: "2. Prosedur Rapat Pembacaan Naskah (Script Reading)",
        content: "Script Reading dihadiri oleh Sutradara, Penulis, Produser, dan Presenter. Agenda wajib: membacakan dialog dengan suara lantang sambil menyalakan stopwatch untuk mencocokkan apakah durasi aktual pembacaan sesuai dengan rundown.",
      },
      {
        title: "3. Penyesuaian Naskah dengan Karakter Personalitas Host",
        content: "Setiap presenter memiliki gaya bertutur unik. Penulis naskah harus fleksibel menyesuaikan pilihan kata (wording) naskah agar terdengar alami di mulut presenter tanpa mengubah esensi dan fakta pesan yang harus disampaikan.",
      },
      {
        title: "4. Protokol Revisi Menit Terakhir (Last-Minute Script Changes)",
        content: "Jika berita berkembang saat mendekati jam siar (breaking update), perubahan naskah hanya boleh dilakukan melalui otorisasi Produser. Naskah langsung diperbarui di server NRCS terpusat sehingga otomatis tersinkron ke prompter presenter.",
        caseStudy: "Penyusupan naskah palsu pernah terjadi di sebuah stasiun TV lokal karena kru tidak membatasi hak akses password ke komputer kontrol teleprompter.",
      },
      {
        title: "5. Anatomi Fisik dan Prinsip Kerja Teleprompter",
        content: "Teleprompter menggunakan monitor LCD horizontal di bawah kamera yang memproyeksikan teks terbalik ke cermin satu arah (Beam Splitter Glass 70/30) dengan sudut kemiringan 45 derajat tepat di depan lensa kamera.",
      },
      {
        title: "6. Mengapa Lensa Kamera Tidak Merekam Teks Teleprompter?",
        content: "Kaca beam splitter memantulkan cahaya monitor prompter ke mata presenter, namun kaca tersebut tembus pandang 70% dari sisi belakang sehingga lensa kamera merekam wajah presenter tanpa merekam pantulan huruf teks sedikit pun.",
      },
      {
        title: "7. Format Tipografi Khusus Teleprompter",
        content: "Teks prompter ditulis dengan huruf Sans-serif tebal (Arial/Impact/Helvetica), ukuran besar (48-60 pt), warna teks kuning atau putih di atas latar belakang hitam pekat untuk memaksimalkan kontras baca jarak 3-4 meter.",
      },
      {
        title: "8. Kode Tanda Baca & Intonasi Khusus Teleprompter",
        content: "Garis miring tunggal ( / ) menandakan jeda singkat (koma). Garis miring ganda ( // ) menandakan jeda henti napas (titik). Kata yang ditulis HURUF BESAR BERGARIS BAWAH menandakan kata yang harus dibaca dengan penekanan intonasi kuat (stressing).",
      },
      {
        title: "9. Pengoperasian Pedal Kaki & Roda Tangan Teleprompter",
        content: "Operator prompter mengontrol kecepatan gulir teks menggunakan mouse wheel, shuttle controller, atau foot pedal. Aturan mutlak: operator harus menjaga posisi baris teks yang sedang dibaca selalu berada di sepertiga atas layar kaca.",
      },
      {
        title: "10. Teknik Menatap Kamera Alami Saat Membaca Prompter",
        content: "Presenter terlatih membaca kelompok kata (word clusters), bukan membaca huruf demi huruf secara mengeja. Gerakan bola mata ke kiri dan kanan harus sangat halus agar penonton di rumah merasa sedang diajak berbicara langsung.",
        didYouKnow: "Jarak presenter dengan kamera studio idealnya minimal 2,5 hingga 3 meter untuk menyamarkan gerakan lirik bola mata saat membaca prompter.",
      },
      {
        title: "11. Sinkronisasi Naskah dengan Karakter Generator (CG Chyron)",
        content: "Di naskah final tercantum kode tag grafis: '[CG: Bpk. Budi Santoso / Pakar Transportasi]'. Operator CG membaca cue naskah ini dan memasukkan grafis ke layar tepat 1 detik setelah presenter menyebutkan nama tokoh tersebut.",
      },
      {
        title: "12. Sinkronisasi Naskah dengan Pemutar Video (VTR / Video Server)",
        content: "Naskah menandai 'CUE OUT' (tiga kata terakhir sebelum video diputar). Contoh: '... simak laporannya berikut ini.' Begitu tiga kata tersebut terucap, sutradara langsung berseru: 'Roll VT!' dan switcherman memotong gambar ke video.",
      },
      {
        title: "13. Prosedur Backup Darurat: Naskah Kertas Meja Presenter",
        content: "Teknologi digital bisa macet. Presenter berita televisi wajib memiliki lembaran cetak naskah fisik di meja siaran. Jika monitor prompter mendadak mati (black screen), presenter dengan tenang menunduk membaca naskah kertas tanpa panik.",
      },
      {
        title: "14. Pembagian Naskah pada Format Presenter Ganda (Co-Anchor)",
        content: "Pada format dua presenter (pria dan wanita), naskah membagi dialog secara bergantian dan adil. Ditandai jelas dengan label: [ANCHOR 1] dan [ANCHOR 2], serta kalimat duet bersama pada segmen penutup salam.",
      },
      {
        title: "15. Integrasi Sistem NRCS (Newsroom Computer System) Modern",
        content: "Sistem software NRCS seperti Inews atau Dalet mengunci status naskah: 'Draft' (merah), 'Approved by Producer' (kuning), dan 'Locked for Air' (hijau). Begitu terkunci, naskah tidak dapat diubah tanpa persetujuan khusus.",
      },
      {
        title: "16. Evaluasi Pasca Siar Keterbacaan Naskah (Readability Review)",
        content: "Setelah siaran, tim meninjau: apakah ada kalimat yang membuat presenter tersandung (tongue twister), apakah ada istilah asing yang salah diucapkan, dan mencatat perbaikannya untuk pedoman gaya redaksi.",
      },
      {
        title: "17. Pengarsipan Naskah Digital & Metadata Search",
        content: "Naskah final disimpan dalam format PDF dan teks terindeks di server pusat stasiun TV. Memudahkan jurnalis generasi berikutnya mencari kembali data arsip berita bertahun-tahun lampau dengan kata kunci pencarian.",
      },
      {
        title: "18. Studi Kasus: Mengatasi Teleprompter Macet Saat Siaran Berita Siang",
        content: "Komputer prompter mengalami crash di tengah pembacaan berita ekonomi. Berkat kesiapan latihan script reading dan naskah cadangan di meja, anchor tersenyum santai dan melanjutkan pembacaan lancar tanpa jeda canggung.",
      },
      {
        title: "19. Etika Kerahasiaan Dokumen Naskah Siaran Eksklusif",
        content: "Naskah pidato kenegaraan atau wawancara eksklusif investigasi bersifat rahasia (confidential) hingga detik penayangan resmi. Membocorkan naskah ke pihak luar merupakan pelanggaran berat integritas penyiaran.",
      },
      {
        title: "20. Rangkuman & Kesiapan Menjadi Script Editor Televisi",
        content: "Naskah final adalah mahakarya koordinasi antara akurasi jurnalisme dan kelancaran teknologi studio. Kuasai teknik penulisan prompter, disiplin gladi bersih, dan kesiapan mitigasi krisis untuk menjadi profesional penyiaran unggul.",
      },
    ],
    video: {
      title: "Proses Script Conference dan Penyesuaian Naskah pada Teleprompter Siaran",
      embedUrl: "https://www.youtube.com/embed/F4lqX3sE9_I",
      guide: "Pelajari bagaimana naskah diselaraskan di rapat script conference, dikonversi ke format teleprompter, dan dikendalikan operator pedal di studio.",
    },
    gamePairs: [
      { id: 1, left: "Teleprompter", right: "Perangkat pemantul teks kaca transparan di depan lensa kamera" },
      { id: 2, left: "Beam Splitter Glass", right: "Kaca semi-transparan cermin 70/30 penampil teks tanpa terekam lensa" },
      { id: 3, left: "Script Conference", right: "Rapat bedah naskah antara produser, sutradara, penulis, dan pembawa acara" },
      { id: 4, left: "Cue Out", right: "Tiga kata terakhir naskah penanda bagi sutradara untuk memutar klip video" },
      { id: 5, left: "Shooting Script", right: "Naskah final siap produksi yang memuat penomoran teknis dan timecode" },
    ],
    caseTitle: "Studi Kasus 4: Teleprompter Mati Total 10 Detik Menjelang On-Air",
    caseScenario: "Di studio siaran langsung berita pukul 12.00 WIB, monitor teleprompter di kamera 1 mendadak mati total karena korsleting kabel adaptor 10 detik sebelum hitungan mundur siaran on-air dimulai.",
    caseInstruction: "Sebagai Floor Director dan Script Assistant, jelaskan tindakan tanggap darurat yang Anda lakukan untuk memastikan presenter di meja berita tetap dapat membacakan berita pembuka dengan tenang dan percaya diri!",
    sampleQuestions: [
      {
        id: 1212,
        bloom: "C4",
        stem: "Mengapa presenter berita televisi disarankan menjaga jarak minimal 2,5 hingga 3 meter dari kamera studio saat membaca teleprompter?",
        options: [
          { key: "A", text: "Untuk menyamarkan gerakan lirik bola mata ke kiri dan ke kanan agar terlihat menatap penonton secara wajar" },
          { key: "B", text: "Agar suara presenter tidak terlalu keras masuk ke mikrofon" },
          { key: "C", text: "Karena radiasi kaca prompter berbahaya untuk mata" },
          { key: "D", text: "Merupakan aturan tata ruang pemadam kebakaran" },
        ],
        correctKey: "A",
        explanation: "Jika presenter berdiri terlalu dekat dengan prompter, penonton di layar televisi akan melihat mata presenter bergerak-gerak membaca teks dari sisi ke sisi.",
      },
    ],
    lkpd: {
      title: "LKPD F2-K4: Konversi Naskah Berita ke Format Teleprompter & Simulasi Siaran",
      objective: "Peserta didik mampu mengonversi naskah berita ke dalam format tipografi teleprompter dan mempraktikkan pembacaan berita dengan kontak mata alami.",
      tools: ["Komputer / Tablet", "Software Teleprompter (Teleprompter Online / Prompter App)", "Kamera / Smartphone"],
      steps: [
        "Pilih salah satu naskah berita dari hasil LKPD sebelumnya.",
        "Format teks naskah dengan kaidah prompter: huruf kapital penekanan, garis miring jeda ( / dan // ).",
        "Masukkan teks ke dalam aplikasi teleprompter dengan warna teks kuning/putih berlatar hitam.",
        "Praktikkan peran operator: atur kecepatan gulir teks mengikuti wicara presenter.",
        "Rekam penampilan presenter membaca prompter berjarak 3 meter dan evaluasi kontak mata.",
      ],
      outputFormat: "Video Rekaman Simulasi Baca Prompter & File Naskah Format Prompter.",
    },
    journalQuestions: {
      q1: "Apa tantangan terbesar saat Anda mencoba membaca teks teleprompter tanpa terlihat seperti orang sedang membaca?",
      q2: "Mengapa operator teleprompter tidak boleh memutar teks lebih cepat dari kecepatan wicara presenter?",
      q3: "Mengapa keberadaan naskah kertas fisik di meja presenter tetap mutlak diperlukan di era serba digital ini?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi prosedur script conference dan revisi naskah siaran televisi.",
      "Mampu mengonfigurasi naskah ke dalam format tipografi dan tanda intonasi teleprompter.",
      "Mampu mempraktikkan pembacaan berita berbantuan teleprompter dengan kontak mata alami.",
    ],
  },
];
