import type { ElemenContentItem } from "./curriculum-types";

export const F5_CONTENTS: ElemenContentItem[] = [
  // =========================================================================
  // KONTEN 1: Prosedur tahapan departemen tata suara (20 Slide)
  // =========================================================================
  {
    id: "f5-k1",
    order: 1,
    title: "1. Prosedur tahapan departemen tata suara",
    shortTitle: "Prosedur Tata Suara",
    summary: "Hierarki, SOP, dan alur kerja departemen audio televisi mulai dari Sound Designer, Audio Mixer Engineer, Boom Operator, hingga prosedur sound check studio siaran.",
    kompetensi: ["1. Memahami", "2. Mengoordinasikan"],
    tujuanPembelajaran: [
      "Peserta didik mampu memahami alur kerja dan pembagian tugas profesional departemen tata suara siaran televisi.",
      "Peserta didik mampu melaksanakan prosedur pemeriksaan audio (Sound Check) dan kalibrasi interkoneksi sinyal studio.",
    ],
    hookQuestion: "Mengapa pemirsa televisi lebih rela mentolerir gambar video yang agak buram daripada siaran yang suaranya mendengung, kresek-kresek, atau tidak terdengar sama sekali?",
    hookContext: "Di industri penyiaran, audio adalah 70% dari pengalaman emosional penonton. Jika audio rusak, penonton akan langsung memindahkan saluran dalam 2 detik pertama.",
    pretestQuestions: [
      {
        id: 1501,
        bloom: "C2",
        stem: "Kru teknis audio yang bertugas mengoperasikan tongkat boom mic di lantai studio atau lokasi syuting untuk menangkap dialog aktor tanpa bocor ke dalam gambar kamera adalah...",
        options: [
          { key: "A", text: "Boom Operator" },
          { key: "B", text: "Floor Director" },
          { key: "C", text: "Lighting Director" },
          { key: "D", text: "Vision Mixer" },
        ],
        correctKey: "A",
        explanation: "Boom Operator bertanggung jawab mengarahkan mikrofon shotgun sedekat mungkin ke sumber suara dengan tetap berada di luar batas framing kamera.",
      },
      {
        id: 1502,
        bloom: "C2",
        stem: "Prosedur pengetesan seluruh mikrofon, kabel, dan instrumen musik sebelum siaran langsung dimulai untuk menyetel level volume dan mendeteksi noise disebut...",
        options: [
          { key: "A", text: "Sound Check" },
          { key: "B", text: "White Balance" },
          { key: "C", text: "Tally Cue" },
          { key: "D", text: "Framing Chart" },
        ],
        correctKey: "A",
        explanation: "Sound Check wajib dilakukan sebelum siaran dimulai untuk memastikan setiap jalur channel audio berfungsi bersih dan terkalibrasi.",
      },
    ],
    materialCards: [
      {
        title: "1. Hakikat & Filosofi Tata Suara Siaran Televisi",
        content: "Tata suara (Broadcast Audio) bukan sekadar membuat suara terdengar keras, melainkan menciptakan kejelasan artikulasi dialog (intelligibility), keseimbangan dinamis musik, dan atmosfer ruang yang alami tanpa distorsi.",
        didYouKnow: "Penelitian penyiaran membuktikan bahwa audio yang jernih dapat membuat penonton mempersepsikan kualitas gambar video 30% lebih tajam daripada kenyataannya.",
      },
      {
        title: "2. Struktur Organisasi Departemen Tata Suara Televisi",
        content: "Kepala departemen dipimpin oleh Sound Director / Sound Designer. Di ruang kontrol (Audio Control Room) bertugas Audio Mixing Engineer (Audioman). Di lantai studio bertugas Sound Recordist, Wireless Mic Technician, dan Boom Operator.",
      },
      {
        title: "3. Peran Kritis Audio Mixing Engineer di Ruang Kontrol",
        content: "Audioman duduk di bilik kedap suara (Audio Booth) yang terpisah dari PCR. Memantau sinyal suara melalui monitor speaker referensi studio (Nearfield Studio Monitors) dan headphone closed-back.",
      },
      {
        title: "4. Peran dan Tanggung Jawab Boom Operator",
        content: "Boom Operator harus memahami ukuran framing shot kamera (Wide vs Close-Up) melalui monitor nirkabel kecil, menjaga mikrofon shotgun berada 30-50 cm di atas kepala aktor, dan mengantisipasi bayangan tongkat boom agar tidak jatuh ke set panggung.",
        caseStudy: "Bayangan boom mic bocor ke dahi presenter saat siaran live. Sutradara memerintahkan Boom Operator menaikkan sudut tongkat 15 derajat ke atas.",
      },
      {
        title: "5. Alur Kerja Pra-Produksi: Bedah Naskah Kebutuhan Audio",
        content: "Tim audio membedah naskah: berapa jumlah presenter (host), berapa bintang tamu (guests), apakah ada pertunjukan band live (membutuhkan 16 channel drum, gitar, bass, vokal), dan kebutuhan efek suara khusus (SFX).",
      },
      {
        title: "6. Penyusunan Audio Patch Sheet & Input List",
        content: "Input List mencatat pemetaan channel mixer: Ch 1 (Mic Host Pria), Ch 2 (Mic Host Wanita), Ch 3-4 (Mic Tamu Clip-On), Ch 5-6 (Playback VTR Video Klip), Ch 7-8 (Musik BGM), Ch 9-10 (Teleprompter Audio).",
      },
      {
        title: "7. POS Sound Check: Kalibrasi 'Check 1-2' yang Sebenarnya",
        content: "Sound check bukan sekadar meniup mic. Narasumber diminta berbicara dengan volume normal seperti saat siaran (bukan berbisik). Audioman menyetel kenop Gain (Pre-Amp) hingga level suara vokal berada di kisaran target aman.",
      },
      {
        title: "8. Interkoneksi Sinyal Studio: Dari Stage Box ke Audio Console",
        content: "Sinyal mikrofon di panggung dialirkan melalui kabel multicore (Snake Cable) atau jaringan kabel Ethernet digital (Dante / AES67 / Ravenna) langsung menuju Audio Console di ruang kontrol.",
      },
      {
        title: "9. Sistem Komunikasi IFB (Interruptible Foldback) untuk Presenter",
        content: "IFB adalah earpiece kecil transparan (earbud) di telinga presenter. Memungkinkan Produser membisikkan instruksi waktu atau pembaruan berita mendadak langsung ke telinga presenter tanpa bocor ke mikrofon siaran.",
        didYouKnow: "Presenter berita kawakan mampu mendengarkan produser berbicara di earpiece IFB sambil tetap lancar membacakan berita lain di depan kamera.",
      },
      {
        title: "10. Manajemen Baterai Mikrofon Nirkabel (Battery Protocol)",
        content: "Mikrofon nirkabel transmitter (TX) menguras baterai cepat. SOP wajib stasiun televisi: seluruh baterai wireless mic wajib diganti dengan baterai Alkaline / Lithium baru 30 menit sebelum siaran live dimulai.",
      },
      {
        title: "11. Standar Keselamatan Kelistrikan Audio & Ground Loop",
        content: "Ground Loop menimbulkan suara dengung rendah (hum 50/60 Hz). Tim audio wajib menggunakan sumber daya listrik yang ter-grounding sempurna dan menggunakan DI Box dengan sakelar Ground Lift untuk memutus loop dengung.",
      },
      {
        title: "12. POS On-Air: Mengawal Keseimbangan Dialog dan Musik",
        content: "Saat musik intro berbunyi, level audio musik dinaikkan ke -10 dBFS. Begitu host mulai berbicara, fader musik diturunkan secara halus (Ducking) ke -24 dBFS agar suara vokal host terdengar dominan dan renyah.",
      },
      {
        title: "13. Mitigasi Feedback (Suara Memekik / Denging Studio)",
        content: "Feedback terjadi ketika suara dari speaker studio masuk kembali ke mikrofon panggung dan diperkuat berulang kali. Solusi: matikan speaker panggung saat mic aktif di dekat speaker, atau gunakan directional cardioid mic.",
      },
      {
        title: "14. Koordinasi dengan Master Control Room (MCR) & Level Alignment",
        content: "Sebelum program mengudara, bilik audio mengirimkan nada uji 1 kHz Tone pada level -18 dBFS (atau -20 dBFS SMPTE) ke MCR untuk menyelaraskan meteran level suara antar gedung stasiun TV.",
      },
      {
        title: "15. POS Pasca-Produksi: Stem Audio Export (Dialog, M&E)",
        content: "Master audio diekspor menjadi 3 jalur terpisah (Stems): Track Dialog (vokal murni), Track Music, dan Track Effects. Jalur M&E (Music and Effects) tanpa dialog disimpan untuk kebutuhan dubbing bahasa asing.",
      },
      {
        title: "16. Pemeliharaan Mikrofon & Perlindungan Kapsul Optik Suara",
        content: "Kapsul mikrofon sensitif terhadap ludah dan kelembapan. Pasca siaran, windscreen busa dilepas dan dicuci alkohol, sementara mikrofon kondensor disimpan dalam lemari khusus pengatur kelembapan (Dry Cabinet / Silica Box).",
      },
      {
        title: "17. Teknik Menggulung Kabel Audio: Over-Under Coiling",
        content: "Kabel XLR audio dilarang digulung melingkar siku tangan. Wajib digulung dengan teknik Over-Under (memelintir maju-mundur bergantian) agar serat tembaga di dalam kabel tidak patah dan kabel dapat terurai lurus tanpa kusut.",
      },
      {
        title: "18. Studi Kasus: Menyelamatkan Siaran Saat Baterai Mic Host Mati",
        content: "Saat presenter sedang live membaca berita, baterai clip-on habis. Karena Audioman sigap mengaktifkan cadangan mic meja (desk boundary mic) di Ch 3, suara tetap mengudara tanpa ada jeda hening.",
      },
      {
        title: "19. Tren Audio Broadcast Modern: Immersive 3D Audio & Dolby Atmos",
        content: "Siaran olahraga modern mengadopsi audio 5.1 Surround dan Dolby Atmos Immersive Audio, menempatkan puluhan mikrofon di sekeliling lapangan sepak bola untuk menangkap gemuruh stadion dari segala arah.",
      },
      {
        title: "20. Rangkuman & Kualifikasi Ahli Tata Suara Televisi",
        content: "Teknisi audio televisi adalah garda terdepan penjaga kejelasan pesan. Dengan ketajaman telinga, pemahaman alur sinyal kabel, dan kepatuhan SOP peralatan nirkabel, Anda memastikan pesan siaran tersampaikan sempurna ke telinga bangsa.",
      },
    ],
    video: {
      title: "Tugas Departemen Audio dalam Produksi Program Siaran Televisi",
      embedUrl: "https://www.youtube.com/embed/Owhj1_x0E6Q",
      guide: "Pelajari bagaimana Audio Engineer mengatur input patch sheet, memimpin sound check presenter, dan menjaga batas level suara di bilik audio.",
    },
    gamePairs: [
      { id: 1, left: "Sound Check", right: "Prosedur pengetesan dan penyetelan level seluruh sumber suara sebelum on-air" },
      { id: 2, left: "IFB", right: "Sistem earpiece tersembunyi penerima instruksi suara produser ke telinga presenter" },
      { id: 3, left: "Audio Snake", right: "Kabel multicore tebal pengirim puluhan channel audio dari panggung ke bilik kontrol" },
      { id: 4, left: "Feedback", right: "Suara denging memekik akibat suara speaker masuk kembali ke mikrofon" },
      { id: 5, left: "Dry Cabinet", right: "Lemari pengatur kelembapan udara untuk penyimpanan mikrofon kondensor" },
    ],
    caseTitle: "Studi Kasus 1: Dengung Misterius (Hum 50Hz) Saat Siaran Talkshow Dimulai",
    caseScenario: "Sepuluh menit sebelum siaran talkshow live dimulai, terdengar suara dengung rendah (hum 50Hz) di seluruh saluran audio. Teknisi memeriksa dan menemukan bahwa laptop pemutar video disambungkan ke colokan listrik yang berbeda dengan mixer audio.",
    caseInstruction: "Jelaskan mengapa fenomena Ground Loop ini terjadi dan langkah teknis tercepat apa yang harus dilakukan Audioman sebelum waktu siaran tiba dalam 10 menit!",
    sampleQuestions: [
      {
        id: 1503,
        bloom: "C4",
        stem: "Mengapa teknik menggulung kabel audio XLR wajib menggunakan metode 'Over-Under' dan bukan digulung melingkari siku tangan?",
        options: [
          { key: "A", text: "Untuk mencegah terpelintirnya serat tembaga di dalam kabel yang menyebabkan kabel cepat putus dan kusut saat dilempar" },
          { key: "B", text: "Agar warna kabel tidak memudar" },
          { key: "C", text: "Hanya sekedar tradisi lama tanpa alasan ilmiah" },
          { key: "D", text: "Untuk mengurangi berat fisik kabel" },
        ],
        correctKey: "A",
        explanation: "Teknik Over-Under menyeimbangkan torsi puntir kabel sehingga kabel awet, tahan lama, dan dapat dilempar lurus di lantai studio tanpa melingkar-lingkar.",
      },
    ],
    lkpd: {
      title: "LKPD F5-K1: Perancangan Audio Input Patch Sheet & SOP Sound Check Studio",
      objective: "Peserta didik mampu menyusun tabel Audio Input Patch Sheet untuk 8 channel dan merumuskan checklist SOP Sound Check sebelum siaran langsung.",
      tools: ["Komputer / Laptop", "Aplikasi Spreadsheet", "Template Audio Patch Sheet"],
      steps: [
        "Rancang program musik akustik: 2 Presenter, 1 Penyanyi Vokal, 1 Gitar Akustik, 1 Keyboard, dan 2 Playback Klip.",
        "Petakan pembagian channel mixer 1 hingga 8: tipe mic, posisi panggung, dan kebutuhan phantom power (+48V).",
        "Susun 5 langkah checklist wajib prosedur Sound Check sebelum siaran live.",
        "Rumuskan tindakan darurat mitigasi baterai wireless mic drop saat on-air.",
      ],
      outputFormat: "Dokumen Audio Patch Sheet dan SOP Sound Check Format PDF.",
    },
    journalQuestions: {
      q1: "Mengapa profesi audio engineer menuntut konsentrasi pendengaran yang sangat tinggi?",
      q2: "Apa risiko terbesar jika prosedur sound check diabaikan sebelum siaran langsung dimulai?",
      q3: "Bagaimana cara Anda merawat kabel dan mikrofon di sekolah agar tidak cepat rusak?",
    },
    kktpIndicators: [
      "Mampu mendeskripsikan struktur hierarki dan alur kerja departemen tata suara siaran televisi.",
      "Mampu menyusun Audio Input Patch Sheet untuk program siaran langsung studio.",
      "Mampu menjelaskan prosedur pemecahan masalah (troubleshooting) dengung ground loop dan feedback audio.",
    ],
  },

  // =========================================================================
  // KONTEN 2: Pengoperasian peralatan tata suara (20 Slide)
  // =========================================================================
  {
    id: "f5-k2",
    order: 2,
    title: "2. Pengoperasian peralatan tata suara",
    shortTitle: "Pengoperasian Mixer Audio",
    summary: "Operasional mixer audio digital, gain staging, parametric equalizer, compressor/limiter, noise gate, pairing frekuensi wireless mic RF, dan audio monitoring.",
    kompetensi: ["1. Mengoperasikan", "2. Mengkalibrasi"],
    tujuanPembelajaran: [
      "Peserta didik mampu mengoperasikan audio mixer console digital dengan gain staging yang presisi.",
      "Peserta didik mampu mengonfigurasi Equalizer, Compressor, dan Noise Gate untuk menghasilkan kualitas vokal broadcast-grade.",
    ],
    hookQuestion: "Jika volume suara presenter terdengar terlalu kecil, mengapa menaikkan fader volume ke posisi paling atas adalah kesalahan fatal jika kenop Gain di awal belum disetel dengan benar?",
    hookContext: "Gain Staging adalah fondasi utama teknik audio. Menaikkan fader tanpa menyetel gain yang benar hanya akan melipatgandakan suara desis (noise) dan membuat audio pecah terdistorsi (clipping).",
    pretestQuestions: [
      {
        id: 1504,
        bloom: "C2",
        stem: "Kenop pengatur tingkat sensitivitas penguatan awal sinyal listrik mikrofon sebelum masuk ke rangkaian pemrosesan mixer disebut...",
        options: [
          { key: "A", text: "Gain / Trim" },
          { key: "B", text: "Pan Pot" },
          { key: "C", text: "Mute Button" },
          { key: "D", text: "Solo Button" },
        ],
        correctKey: "A",
        explanation: "Gain (Trim) mengatur level penguatan awal sinyal mic agar berada pada rentang tegangan operasi optimal mixer.",
      },
      {
        id: 1505,
        bloom: "C2",
        stem: "Prosesor dinamika audio yang bertugas menekan puncak volume suara yang terlalu keras secara otomatis agar sinyal tidak pecah (distorsi) disebut...",
        options: [
          { key: "A", text: "Compressor / Limiter" },
          { key: "B", text: "Reverb Hall" },
          { key: "C", text: "High Pass Filter" },
          { key: "D", text: "Pitch Shifter" },
        ],
        correctKey: "A",
        explanation: "Compressor mempersempit rentang dinamis audio dengan meredam sinyal keras yang melampaui ambang batas (Threshold).",
      },
    ],
    materialCards: [
      {
        title: "1. Anatomi Audio Console Digital Broadcast",
        content: "Audio mixer digital mengubah sinyal analog mikrofon menjadi data digital 24-bit / 48 kHz. Dilengkapi layar sentuh, motor fader otomatis, routing bus fleksibel, dan kemampuan menyimpan pengaturan (Scene Recall).",
        didYouKnow: "Mixer digital modern dapat menyimpan seluruh settingan soundcheck 32 channel ke dalam flashdisk USB, sehingga settingan dapat dipanggil kembali dalam 1 detik.",
      },
      {
        title: "2. Hukum Emas 'Gain Staging' (Penataan Penguatan Sinyal)",
        content: "Gain Staging adalah seni mengatur volume di setiap tahapan alur sinyal: (1) Sinyal masuk mic -> (2) Pre-Amp Gain -> (3) Insert Effect -> (4) Channel Fader -> (5) Master Fader. Setiap tahap harus berada di zona 'Sweet Spot' tanpa over (merah) atau under (desis).",
      },
      {
        title: "3. Standar Metering Digital: dBFS (Decibels Relative to Full Scale)",
        content: "Di era digital, 0 dBFS adalah batas mutlak sinyal digital sebelum pecah (clipping brutal). Standar siaran broadcast menetapkan level dialog vokal berada di kisaran -18 dBFS hingga -12 dBFS.",
      },
      {
        title: "4. Tombol PFL (Pre-Fade Listen) / Solo",
        content: "Tombol PFL memungkinkan Audioman mendengarkan suara dari channel tertentu secara terisolasi di headphone dan melihat level sinyal murni di meteran VU tanpa harus menaikkan fader channel ke siaran.",
        caseStudy: "Sebelum presenter berbicara on-air, Audioman menekan PFL untuk mengecek apakah presenter sedang batuk atau berbicara pribadi tanpa terdengar penonton.",
      },
      {
        title: "5. Mengoperasikan Parametric Equalizer (EQ) 4-Band",
        content: "EQ mengatur frekuensi nada: Low (bass tubuh suara 80-250 Hz), Low-Mid (ketebalan/ruang 250-500 Hz), High-Mid (kejelasan artikulasi kata 1-4 kHz), dan High (kecerahan udara/airiness 6-16 kHz).",
      },
      {
        title: "6. Penerapan High Pass Filter (HPF / Low Cut 80 Hz)",
        content: "Tombol HPF 80 Hz wajib dinyalakan pada seluruh channel mikrofon vokal. Berfungsi memotong frekuensi dengung lantai di bawah 80 Hz yang disebabkan oleh langkah kaki, getaran AC, atau senggolan meja presenter.",
      },
      {
        title: "7. Mengoperasikan Compressor: Threshold, Ratio, Attack, Release",
        content: "Threshold menentukan di level berapa kompresi mulai bekerja (misal: -16 dBFS). Ratio menentukan kekuatan peredaman (misal: rasio 3:1 untuk vokal). Attack mengatur kecepatan reaksi, dan Release mengatur kelembutan kembali ke level normal.",
      },
      {
        title: "8. Peran Limiter sebagai 'Dinding Pengaman Terakhir'",
        content: "Limiter menggunakan rasio ekstrem (infinity:1) dengan threshold di angka -2 dBFS. Berfungsi sebagai rem darurat mutlak yang mencegah teriakan spontan presenter merusak pemancar siaran stasiun TV.",
        didYouKnow: "Jika sinyal audio melampaui 0 dBFS pada pemancar digital, audio akan mengalami 'digital distortion' berbunyi letupan kasar yang sangat menyakitkan telinga.",
      },
      {
        title: "9. Mengoperasikan Noise Gate: Membungkam Kebocoran Suara",
        content: "Noise Gate menutup jalur audio saat narasumber berhenti berbicara. Suara desir AC studio atau napas narasumber otomatis diredam hingga narasumber mulai berbicara kembali melampaui batas gate threshold.",
      },
      {
        title: "10. Penyetelan Frekuensi Radio (RF) Mikrofon Nirkabel",
        content: "Wireless mic menggunakan gelombang UHF (470–694 MHz). Teknisi audio harus melakukan 'Frequency Scan' di receiver untuk mencari saluran frekuensi bersih yang bebas dari interferensi sinyal BTS operator seluler 4G/5G.",
      },
      {
        title: "11. Prosedur Pairing Transmitter (TX) dan Receiver (RX)",
        content: "Penyelarasan frekuensi dilakukan melalui sensor Infra-Red (IR Sync). Dekatkan sensor transmitter (bodypack) ke receiver, tekan tombol SYNC, dan frekuensi otomatis terkunci pada saluran yang sama.",
      },
      {
        title: "12. Memahami Sistem 'True Diversity' pada Receiver Nirkabel",
        content: "Receiver profesional memiliki 2 antena terpisah (True Diversity). Sirkuit internal otomatis berpindah ke antena yang menerima sinyal RF terkuat secara mikrodetik untuk mencegah suara putus-putus (RF drop-out).",
      },
      {
        title: "13. Penggunaan Pan Pot (Panning) pada Siaran Stereo",
        content: "Pan Pot mengatur posisi suara di stereo speaker (Kiri vs Kanan). Dalam siaran televisi, suara dialog presenter dan narasumber selalu ditempatkan tepat di TENGAH (Center Pan 50:50) untuk menjaga kejelasan di semua jenis pesawat TV.",
      },
      {
        title: "14. Routing Audio Subgroup dan Auxiliary Sends (AUX)",
        content: "AUX Send digunakan untuk mengirimkan campuran suara terpisah: AUX 1 untuk headphone presenter (IFB), AUX 2 untuk rekaman arsip, dan Subgroup untuk mengelompokkan seluruh mic drum ke dalam satu fader kendali.",
      },
      {
        title: "15. Efek Suara Ruang (Reverb & Delay) dalam Program Musik",
        content: "Dalam program musik studio, vokal penyanyi ditambahkan sedikit efek Plate Reverb atau Hall Reverb agar suara terasa megah dan menyatu dengan aransemen musik instrumen.",
      },
      {
        title: "16. Mengoperasikan Audio Playback & Jingle Player",
        content: "Audioman memicu pemutaran sound effect (SFX) tawa penonton, jingle kuis, atau musik bumper pembuka dari software soundboard komputer yang terhubung ke channel stereo mixer.",
      },
      {
        title: "17. Studi Kasus: Mengatasi Suara Vokal yang 'Boxy' (Mendem)",
        content: "Suara presenter pria terdengar mendem dan tidak jelas. Audioman melakukan sweeping EQ: memotong frekuensi keruh (muddy) di area 300 Hz sebesar -4 dB dan mendongkrak frekuensi artikulasi di 3 kHz sebesar +2 dB. Suara seketika renyah dan bertenaga.",
      },
      {
        title: "18. Kalibrasi Monitor Speaker Studio (Listening Level)",
        content: "Monitor audio di ruang kontrol dikalibrasi pada kenyaringan referensi 78 hingga 82 dB SPL (C-Weighted, Slow) menggunakan Sound Level Meter agar telinga audioman tidak mengalami kelelahan pendengaran (ear fatigue).",
      },
      {
        title: "19. Fitur Otomasi Digital: Auto-Mixing (Dugan Speech Automixer)",
        content: "Pada acara debat dengan 8 narasumber berbicara bersamaan, fitur Dan Dugan Automixer otomatis menurunkan level mic narasumber yang sedang diam, sehingga mencegah feedback dan suara bergema di studio.",
      },
      {
        title: "20. Rangkuman & Keterampilan Pengendali Meja Audio",
        content: "Mengoperasikan mixer audio adalah perpaduan sains elektro dan kepekaan musikal. Kuasai gain staging, EQ presisi, dan kontrol dinamika kompresi untuk menghasilkan suara siaran televisi yang jernih, tebal, dan berstandar internasional.",
      },
    ],
    video: {
      title: "Cara Mengoperasikan Mixer Audio Studio Siaran dan Setting Gain Staging",
      embedUrl: "https://www.youtube.com/embed/JcM_C0iQn14",
      guide: "Simak tutorial langkah demi langkah mengatur Gain Pre-Amp, mengaktifkan HPF 80Hz, menyetel Parametric EQ vokal, dan mengatur Compressor di mixer digital.",
    },
    gamePairs: [
      { id: 1, left: "Gain", right: "Kenop pengatur penguatan awal sinyal mic sebelum rangkaian pemrosesan mixer" },
      { id: 2, left: "dBFS", right: "Skala meteran audio digital dengan batas puncak tertinggi di angka 0 dB" },
      { id: 3, left: "HPF 80Hz", right: "Filter pemotong frekuensi rendah dengung AC dan getaran lantai studio" },
      { id: 4, left: "Compressor", right: "Prosesor dinamika peredam suara keras untuk mempersempit rentang volume" },
      { id: 5, left: "True Diversity", right: "Sistem 2 antena receiver nirkabel untuk mencegah sinyal audio putus (drop-out)" },
    ],
    caseTitle: "Studi Kasus 2: Sinyal Vokal Presenter Mengalami Distorsi Digital Kasar",
    caseScenario: "Saat presenter bersorak menyambut pemenang kuis, meteran suara di mixer melonjak ke angka +3 dB di atas 0 dBFS dan lampu klip merah menyala. Penonton di rumah mendengar suara pecah berdengung.",
    caseInstruction: "Sebagai Audioman, sebutkan 2 kesalahan penyetelan gain/kompresi yang memicu distorsi tersebut dan jelaskan parameter Compressor serta Limiter yang harus Anda pasang untuk mengamankan suara!",
    sampleQuestions: [
      {
        id: 1506,
        bloom: "C4",
        stem: "Berapakah rentang level meteran digital (dBFS) yang ideal untuk dialog pembawa acara pada produksi siaran televisi profesional?",
        options: [
          { key: "A", text: "-18 dBFS hingga -12 dBFS" },
          { key: "B", text: "Tepat di angka 0 dBFS sepanjang waktu" },
          { key: "C", text: "-50 dBFS hingga -40 dBFS" },
          { key: "D", text: "+10 dBFS" },
        ],
        correctKey: "A",
        explanation: "Rentang -18 dBFS s/d -12 dBFS menyediakan ruang aman (headroom) 12 dB untuk mengantisipasi hentakan suara keras tanpa risiko distorsi digital (clipping).",
      },
    ],
    lkpd: {
      title: "LKPD F5-K2: Praktik Kalibrasi Gain Staging & Penyetelan EQ Vokal pada Mixer",
      objective: "Peserta didik mampu mengkalibrasi Gain Staging mikrofon dan menyetel 4-band Parametric EQ untuk mengoptimalkan kejelasan vokal presenter.",
      tools: ["Mixer Audio Digital / Analog", "Mikrofon Vokal / Headphone Monitor", "Lembar Kerja Parameter Audio"],
      steps: [
        "Sambungkan mikrofon kondensor/dinamis ke Channel 1 mixer.",
        "Nyalakan PFL dan minta rekan berbicara; setel kenop Gain hingga meteran menyentuh -14 dBFS.",
        "Aktifkan tombol High Pass Filter (HPF 80 Hz).",
        "Lakukan EQ: potong frekuensi keruh 300 Hz (-3 dB) dan angkat frekuensi artikulasi 3 kHz (+2 dB).",
        "Bandingkan suara sebelum dan sesudah EQ menggunakan tombol EQ Bypass.",
      ],
      outputFormat: "Foto Settingan Mixer Audio & Rekaman Sampel Suara Sebelum/Sesudah Kalibrasi.",
    },
    journalQuestions: {
      q1: "Mengapa Anda tidak boleh mengandalkan volume fader untuk mengatasi sinyal mic yang terlalu kecil?",
      q2: "Bagaimana cara Anda membedakan suara vokal yang terkompresi dengan baik vs suara yang terkompresi berlebihan (over-compressed)?",
      q3: "Mengapa penyetelan frekuensi nirkabel (RF scan) wajib dilakukan setiap kali berpindah lokasi syuting baru?",
    },
    kktpIndicators: [
      "Mampu melakukan prosedur Gain Staging hingga level target aman (-18 dBFS s/d -12 dBFS).",
      "Mampu mengonfigurasi High Pass Filter dan Parametric EQ untuk kejelasan artikulasi dialog.",
      "Mampu mengoperasikan parameter Compressor dan Limiter sebagai pengaman dinamika audio siaran.",
    ],
  },

  // =========================================================================
  // KONTEN 3: Peralatan pendukung tata suara (20 Slide)
  // =========================================================================
  {
    id: "f5-k3",
    order: 3,
    title: "3. Peralatan pendukung tata suara",
    shortTitle: "Peralatan Pendukung Audio",
    summary: "Eksplorasi fisik, pemeliharaan, dan teknik pengoperasian Boom Pole, Shock Mount, Blimp Windshield (Deadcat), Direct Box (DI Box), kabel XLR Balanced, dan Headphone Monitoring.",
    kompetensi: ["1. Mengidentifikasi", "2. Mengoperasikan"],
    tujuanPembelajaran: [
      "Peserta didik mampu mengidentifikasi fungsi dan karakteristik peralatan pendukung tata suara lapangan dan studio.",
      "Peserta didik mampu mengoperasikan Boom Pole dengan teknik postur tubuh ergonomis dan meredam noise angin.",
    ],
    hookQuestion: "Mengapa tiupan angin sepoi-sepoi di luar ruangan dapat merusak rekaman suara dialog film menjadi gemuruh seperti suara badai jika mikrofon tidak memakai pelindung berbulu (deadcat)?",
    hookContext: "Kapsul diafragma mikrofon sangat tipis dan peka terhadap pergerakan udara. Tanpa perlengkapan mekanis pendukung seperti Blimp dan Shock Mount, getaran fisik sekecil apa pun akan bermutasi menjadi gelombang noise yang merusak rekaman audio.",
    pretestQuestions: [
      {
        id: 1507,
        bloom: "C2",
        stem: "Dudukan elastis berbahan karet atau tali suspensi yang memegang mikrofon pada tongkat boom untuk meredam suara gesekan tangan dan getaran mekanik disebut...",
        options: [
          { key: "A", text: "Shock Mount / Suspensi Elastis" },
          { key: "B", text: "Quick Release" },
          { key: "C", text: "Magic Arm" },
          { key: "D", text: "C-Stand" },
        ],
        correctKey: "A",
        explanation: "Shock Mount mengisolasi fisik mikrofon dari getaran langkah kaki dan gesekan tangan pada tongkat boom.",
      },
      {
        id: 1508,
        bloom: "C2",
        stem: "Pelindung angin mikrofon berbentuk tabung kapsul aerodinamis yang dilapisi bulu sintetis lebat untuk syuting di luar ruangan (outdoor) berangin kencang disebut...",
        options: [
          { key: "A", text: "Blimp / Deadcat Windshield" },
          { key: "B", text: "Pop Filter Studio" },
          { key: "C", text: "Gaffer Tape" },
          { key: "D", text: "Softbox Grid" },
        ],
        correctKey: "A",
        explanation: "Blimp dan Deadcat memecah turbulensi hembusan angin kencang sebelum menyentuh diafragma mikrofon tanpa meredam frekuensi dialog vokal.",
      },
    ],
    materialCards: [
      {
        title: "1. Urgensi Peralatan Pendukung Audio (Audio Accessories)",
        content: "Mikrofon terbaik di dunia tidak akan berfungsi baik tanpa ekosistem pendukungnya. Peralatan pendukung bertugas: memposisikan mikrofon di tempat ideal, mengisolasi getaran fisik, menyaring turbulensi angin, dan menyalurkan sinyal listrik tanpa gangguan.",
        didYouKnow: "Bulu halus pada 'Deadcat' windshield terinspirasi dari struktur bulu sayap burung hantu yang mampu meredam turbulensi udara saat terbang tanpa suara.",
      },
      {
        title: "2. Anatomi Tongkat Boom (Boom Pole)",
        content: "Boom pole terbuat dari serat karbon (Carbon Fiber) ringan atau aluminium berkekuatan tinggi. Memiliki 3 hingga 5 ruas teleskopik yang dapat dipanjangkan dari 1 meter hingga lebih dari 4 meter dengan kunci pengencang (Twist Lock).",
      },
      {
        title: "3. Teknik Postur Memegang Boom Pole: Gaya 'H' (H-Pose)",
        content: "Kedua tangan diangkat di atas kepala membentuk huruf H: satu tangan memegang pangkal boom sebagai kemudi putar (steering hand), tangan lainnya bertindak sebagai titik tumpu (fulcrum). Beban bertumpu pada otot punggung dan bahu, bukan pergelangan tangan.",
      },
      {
        title: "4. Teknik Postur 'Crucifix' dan 'Flagpole' untuk Syuting Berdurasi Panjang",
        content: "Jika syuting adegan memakan waktu lebih dari 15 menit, Boom Operator beralih ke posisi Flagpole (pangkal boom ditumpukan di pinggang menggunakan sabuk penyangga / boom holster) untuk mengistirahatkan otot bahu.",
        caseStudy: "Seorang boom operator pemula pingsan kram otot saat syuting adegan pidato karena menahan beban boom 4 meter hanya dengan kekuatan jari tangan.",
      },
      {
        title: "5. Mengendalikan Garis Batas Kamera (Cueing & Frame Line)",
        content: "Boom operator harus terus mengamati monitor framing: tempatkan mikrofon shotgun tepat 5 cm di atas batas garis atas kamera (Headroom Line). Begitu kamera menunduk (tilt down), boom dinaikkan secara sinkron tanpa jeda.",
      },
      {
        title: "6. Anatomi Shock Mount (Suspensi Isolasi Getaran)",
        content: "Shock mount menggunakan cincin elastomer termoplastik (seperti Rycote Lyre). Bahan ini tidak pernah kendur atau putus seperti karet gelang biasa, dan mampu meredam gemuruh suara langkah kaki (handling noise) hingga 20 dB.",
      },
      {
        title: "7. Tingkatan Pelindung Angin: Foam, Softie, dan Full Blimp",
        content: "Busa Biasa (Foam): angin sepoi-sepoi dalam ruangan (indoor). Softie (Bulu pendek): angin sedang luar ruangan (kecepatan < 15 km/jam). Full Blimp Zeppellin + Deadcat: angin kencang tepi pantai atau lapangan terbuka (> 30 km/jam).",
      },
      {
        title: "8. Prinsip Kerja Kabel XLR Balanced (Kabel Seimbang)",
        content: "Kabel XLR memiliki 3 pin: Pin 1 (Ground/Shield), Pin 2 (Hot / Sinyal Positif), dan Pin 3 (Cold / Sinyal Negatif terbalik 180 derajat). Kabel balanced kebal terhadap interferensi elektromagnetik lampu studio karena menggunakan teknologi Common-Mode Rejection.",
      },
      {
        title: "9. Mengapa Kabel Audio Unbalanced (RCA / Jack 3.5mm) Tidak Dipakai di Studio TV?",
        content: "Kabel unbalanced rentan menangkap sinyal radio liar dan dengung listrik jika panjangnya melebihi 3 meter. Di studio TV, kabel audio membentang hingga 50 meter, sehingga kabel XLR balanced adalah standar wajib tanpa kompromi.",
      },
      {
        title: "10. Peran Vital Direct Injection Box (DI Box)",
        content: "DI Box mengubah sinyal instrumen berimpedansi tinggi yang unbalanced (gitar akustik/keyboard dengan kabel jack 6.5mm) menjadi sinyal level mikrofon berimpedansi rendah yang balanced (XLR) siap masuk ke mixer audio.",
        didYouKnow: "DI Box Pasif menggunakan trafo medan magnetik murni tanpa baterai, sedangkan DI Box Aktif membutuhkan baterai 9V atau Phantom Power +48V untuk dorongan sinyal lebih bertenaga.",
      },
      {
        title: "11. Fitur Ground Lift pada DI Box",
        content: "Sakelar 'Ground Lift' pada DI Box memutuskan sambungan fisik pin 1 kabel ke bodi alat. Ini adalah senjata pamungkas teknisi audio untuk melenyapkan suara dengung 'hum' 50Hz seketika saat instrumen dicolokkan ke listrik panggung.",
      },
      {
        title: "12. Kriteria Headphone Monitoring Referensi Studio",
        content: "Audioman wajib menggunakan headphone tipe 'Closed-Back' (kedap isolasi luar) dengan respon frekuensi datar (Flat Response, seperti Sony MDR-7506 atau Audio-Technica ATH-M50x). Dilarang memakai headphone 'Bass Boosted' karena menipu pendengaran.",
      },
      {
        title: "13. Penggunaan Pop Filter di Studio Rekaman Voice Over",
        content: "Pop filter berupa saringan kain nilon atau jaring kawat tipis yang dipasang 10 cm di depan mikrofon kondensor. Berfungsi memecah hembusan angin tajam saat pembicara melafalkan huruf plosif 'P', 'B', dan 'T' (Plosive Protection).",
      },
      {
        title: "14. Pengoperasian Mikrofon Clip-On / Lavalier (Lav Mic)",
        content: "Lavalier mic berukuran mini dijepit di kerah baju presenter berjarak satu jengkal (15-20 cm) di bawah dagu. Kabel disembunyikan rapi di dalam pakaian menuju transmitter di pinggang (Concealed Wiring).",
      },
      {
        title: "15. Aksesoris Pemasangan Mic Tersembunyi: Moleskin & Rycote Overcovers",
        content: "Saat syuting drama di mana mikrofon dilarang terlihat kamera, lav mic ditempel di balik baju aktor menggunakan plester medis Moleskin atau bantalan bulu Overcovers untuk menghilangkan suara gesekan kain baju (Clothing Rustle Noise).",
      },
      {
        title: "16. Dudukan Mikrofon: Desktop Stand vs Floor Boom Stand",
        content: "Desktop Stand berbobot besi cor berat digunakan di meja talkshow atau siaran podcast. Dilengkapi busa peredam di alasnya agar suara ketukan jari presenter di meja tidak masuk ke mikrofon.",
      },
      {
        title: "17. Alat Uji Kabel Audio (Cable Tester)",
        content: "Setiap teknisi audio wajib membawa alat portabel Cable Tester. Memasukkan kedua ujung kabel XLR untuk memeriksa lampu indikator: apakah Pin 1, 2, dan 3 terhubung utuh, atau ada sambungan solder yang putus.",
      },
      {
        title: "18. Studi Kasus: Mengatasi Suara Gesekan Kain pada Mic Baju Pengantin",
        content: "Pada syuting busana kebaya sutra pengantin, mic lavalier bergesekan bising setiap kali pengantin bernapas. Solusi: membuat segitiga isolasi dengan isolasi gaffer (Vampire Clip technique) sehingga kapsul mic melayang bebas di udara.",
      },
      {
        title: "19. Tas Audio Lapangan (Audio Field Bag / Harness)",
        content: "Sound recordist luar studio mengenakan rompi harness khusus yang menopang tas audio di dada. Berisi mixer recorder portable multi-track, receiver nirkabel, baterai V-Mount, dan kabel jam sync timecode.",
      },
      {
        title: "20. Rangkuman & Kesiapan Perangkat Audio Siaran",
        content: "Peralatan pendukung audio adalah tameng perlindungan kualitas suara dari kekacauan dunia fisik. Kuasai teknik boom, pemasangan windshield yang benar, dan penanganan kabel balanced untuk menghasilkan rekaman audio yang bersih tanpa cacat.",
      },
    ],
    video: {
      title: "Teknik Memegang Boom Pole yang Benar dan Mengatasi Noise Angin di Lapangan",
      embedUrl: "https://www.youtube.com/embed/W2vXQZ4C2lA",
      guide: "Pelajari postur tubuh H-Pose memegang boom pole serat karbon, perakitan pelindung angin blimp deadcat, dan teknik menyembunyikan mic lavalier.",
    },
    gamePairs: [
      { id: 1, left: "Boom Pole", right: "Tongkat teleskopik serat karbon penyangga mikrofon shotgun di luar frame" },
      { id: 2, left: "Shock Mount", right: "Dudukan elastis peredam getaran mekanis dan handling noise" },
      { id: 3, left: "Deadcat", right: "Sarung bulu peredam turbulensi angin kencang pada mikrofon luar ruangan" },
      { id: 4, left: "DI Box", right: "Alat pengubah sinyal instrumen unbalanced menjadi sinyal balanced berimpedansi rendah" },
      { id: 5, left: "XLR Balanced", right: "Kabel 3-pin dengan teknologi peredam interferensi sinyal elektromagnetik" },
    ],
    caseTitle: "Studi Kasus 3: Syuting Liputan Pantai Berangin Kencang",
    caseScenario: "Tim liputan meliput tradisi nelayan di tepi pantai dengan hembusan angin laut 35 km/jam. Reporter menggunakan mikrofon shotgun yang hanya dilapisi busa tipis (foam). Hasil rekaman dipenuhi suara gemuruh hembusan angin sehingga suara reporter tidak terdengar.",
    caseInstruction: "Jelaskan konfigurasi perlengkapan pelindung angin (wind protection gear) apa yang harus dipasang pada mikrofon shotgun tersebut agar suara vokal reporter terdengar jernih di tengah angin kencang!",
    sampleQuestions: [
      {
        id: 1509,
        bloom: "C4",
        stem: "Mengapa kabel XLR balanced yang memiliki 3 pin kebal terhadap gangguan gelombang radio (RFI) dan elektromagnetik (EMI) meskipun dibentangkan sepanjang 50 meter?",
        options: [
          { key: "A", text: "Karena sinyal dikirim ganda dengan polaritas berlawanan (Hot dan Cold), dan di ujung penerima noise dibatalkan melalui Common-Mode Rejection" },
          { key: "B", text: "Karena kabel XLR dialiri arus listrik berkekuatan 220 Volt" },
          { key: "C", text: "Karena kabel dilapisi lapisan timbal anti radiasi" },
          { key: "D", text: "Karena sinyal suara diubah menjadi cahaya inframerah" },
        ],
        correctKey: "A",
        explanation: "Teknologi balanced menyalurkan sinyal fase positif dan negatif. Gangguan noise yang masuk ke kedua kabel akan dibalikkan dan saling meniadakan (phase cancellation) di input mixer.",
      },
    ],
    lkpd: {
      title: "LKPD F5-K3: Perakitan Rig Boom Pole, Shock Mount & Blimp Windshield",
      objective: "Peserta didik mampu merakit mikrofon shotgun ke dalam Blimp Shock Mount, memasangnya pada tongkat boom pole, dan mempraktikkan postur H-Pose selama 3 menit.",
      tools: ["Shotgun Microphone", "Shock Mount & Blimp Deadcat", "Boom Pole Teleskopik", "Kabel XLR Balanced"],
      steps: [
        "Pasang mikrofon shotgun ke dalam suspensi lyre shock mount dengan posisi seimbang.",
        "Kunci penutup tabung blimp dan pasangkan sarung bulu deadcat.",
        "Pasang blimp ke ujung ulir tongkat boom pole dan hubungkan kabel XLR melingkari tongkat.",
        "Panjangkan ruas boom hingga 2,5 meter dan kunci ruas teleskopik.",
        "Praktikkan postur H-Pose: tahan posisi boom di atas kepala selama 3 menit tanpa gemetar.",
      ],
      outputFormat: "Foto Dokumentasi Perakitan Rig Boom dan Video Praktik Postur H-Pose.",
    },
    journalQuestions: {
      q1: "Bagaimana cara Anda menjaga stamina tubuh agar tidak cepat lelah saat bertugas sebagai boom operator?",
      q2: "Mengapa penggunaan kabel balanced mutlak diperlukan dalam instalasi studio pertelevisian komersial?",
      q3: "Hal apa yang paling Anda perhatikan saat memasang mikrofon lavalier pada baju pengisi acara?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi komponen mekanis peredam getaran (Shock Mount) dan pelindung angin (Blimp Windshield).",
      "Mampu menjelaskan prinsip kerja kabel audio XLR Balanced dan fungsi Direct Injection Box (DI Box).",
      "Mampu mempraktikkan pengoperasian boom pole dengan postur tubuh ergonomis dan stabil.",
    ],
  },

  // =========================================================================
  // KONTEN 4: Penerapan tata suara & evaluasi audio (20 Slide)
  // =========================================================================
  {
    id: "f5-k4",
    order: 4,
    title: "4. Penerapan tata suara & evaluasi audio",
    shortTitle: "Penerapan & Evaluasi Audio",
    summary: "Penataan multi-mikrofon talkshow studio, teknik mengatasi audio bleeding, standar kenyaringan siaran (Loudness EBU R128 / ITU-R BS.1770 -24 LUFS), dan evaluasi mastering pasca-siar.",
    kompetensi: ["1. Menerapkan", "2. Mengevaluasi"],
    tujuanPembelajaran: [
      "Peserta didik mampu menerapkan teknik penataan multi-mikrofon pada format siaran studio talkshow bebas phase cancellation.",
      "Peserta didik mampu mengevaluasi kenyaringan siaran televisi berbasis standar internasional EBU R128 (-24 LUFS).",
    ],
    hookQuestion: "Mengapa saat Anda menonton televisi, suara film terdengar nyaman tetapi saat jeda iklan masuk, volume suara iklan tiba-tiba menggelegar mengagetkan seisi rumah?",
    hookContext: "Fenomena 'Loudness War' di masa lalu memicu protes jutaan pemirsa televisi dunia. Untuk itulah diciptakan regulasi standar kenyaringan internasional EBU R128 yang mewajibkan seluruh materi program dan iklan berada pada batas -24 LUFS yang seragam.",
    pretestQuestions: [
      {
        id: 1510,
        bloom: "C2",
        stem: "Standar regulasi internasional pengukuran kenyaringan suara terintegrasi untuk penyiaran televisi digital menurut rekomendasi EBU R128 dan ITU-R BS.1770 adalah...",
        options: [
          { key: "A", text: "-24 LUFS (atau LKFS) dengan toleransi ±1 LU" },
          { key: "B", text: "0 dBFS maksimal tanpa batas" },
          { key: "C", text: "-50 dBFS" },
          { key: "D", text: "+6 dB" },
        ],
        correctKey: "A",
        explanation: "Standar EBU R128 menetapkan Target Integrated Loudness program televisi pada angka -24 LUFS untuk menjamin kenyamanan pendengaran pemirsa.",
      },
      {
        id: 1511,
        bloom: "C2",
        stem: "Fenomena penurunan mutu suara di mana suara vokal narasumber terdengar tipis dan berongga (hollow) akibat dua mikrofon yang berdekatan menangkap suara yang sama dengan sedikit jeda waktu disebut...",
        options: [
          { key: "A", text: "Pembatalan Fase (Phase Cancellation / Comb Filtering)" },
          { key: "B", text: "Radio Frequency Boost" },
          { key: "C", text: "Optical Flares" },
          { key: "D", text: "Color Grading" },
        ],
        correctKey: "A",
        explanation: "Phase cancellation terjadi saat dua gelombang suara saling bertabrakan dengan fase berlawanan, menghilangkan frekuensi vokal tertentu sehingga suara terdengar aneh seperti di dalam kaleng.",
      },
    ],
    materialCards: [
      {
        title: "1. Tantangan Penataan Multi-Mikrofon di Studio Talkshow",
        content: "Pada program talkshow dengan 4 orang di satu meja, setiap orang memakai mic clip-on nirkabel. Tantangan terbesarnya: suara Host A tidak hanya masuk ke Mic A, tetapi juga bocor masuk ke Mic B, C, dan D (Acoustic Bleeding / Spill).",
        didYouKnow: "Aturan 3:1 dalam tata suara menyatakan jarak antar mikrofon yang aktif minimal harus 3 KALI LEBIH BESAR daripada jarak mikrofon ke mulut pembicaranya.",
      },
      {
        title: "2. Hukum Penataan Jarak Mikrofon: Aturan 3:1 (The 3:1 Rule)",
        content: "Jika jarak mic clip-on ke mulut Host adalah 20 cm, maka jarak antara Host A dan Tamu B di meja studio minimal harus 60 cm (3 x 20 cm). Aturan ini mencegah terjadinya fenomena Comb Filtering dan pembatalan fase.",
      },
      {
        title: "3. Memahami Fenomena Pembatalan Fase (Phase Cancellation)",
        content: "Gelombang suara memiliki bukit dan lembah. Jika suara yang sama tiba di Mic 1 dan Mic 2 dengan beda waktu setengah gelombang, bukit akan menabrak lembah (180 derajat out of phase). Akibatnya, frekuensi suara saling menghapus sehingga dialog terdengar tipis dan 'cempreng'.",
      },
      {
        title: "4. Tombol Phase Invert (Ø) pada Konsol Mixer",
        content: "Jika terjadi masalah pembatalan fase antara dua mikrofon yang berdekatan (misal mic atas dan bawah drum snare), Audioman menekan tombol Phase Invert (Ø) untuk membalikkan polaritas 180 derajat secara instan dan mengembalikan ketebalan bass suara.",
      },
      {
        title: "5. Mengatasi Kebocoran Suara Musik Studio ke Mic Presenter",
        content: "Posisikan speaker monitor panggung (foldback wedge) tepat di belakang mikrofon directional (zona null point cardioid). Sudut mati mikrofon cardioid (180 derajat belakang) akan menolak suara speaker sehingga suara musik tidak bocor masuk ke mic presenter.",
      },
      {
        title: "6. Sejarah 'Loudness War' dan Lahirnya Regulasi EBU R128",
        content: "Dahulu, produser iklan mengompres audio secara brutal hingga mentok 0 dBFS agar iklan mereka terdengar paling keras di televisi. Pemirsa mengeluh terkejut. EBU (European Broadcasting Union) akhirnya merilis standar R128 untuk mengukur kenyaringan manusia sesungguhnya.",
      },
      {
        title: "7. Konsep Satuan Pengukuran LUFS / LKFS",
        content: "LUFS (Loudness Units relative to Full Scale) mengukur kenyaringan audio yang dirasakan telinga manusia dengan pembobotan filter kurva K-Weighting, bukan sekadar puncak tegangan listrik (Peak Meter) semata.",
      },
      {
        title: "8. Tiga Parameter Pengukuran Loudness Meter",
        content: "Momentary Loudness (M): kenyaringan instan dalam jendela waktu 400 milidetik. Short-Term Loudness (S): kenyaringan rata-rata dalam jendela 3 detik. Integrated Loudness (I): nilai kenyaringan akumulatif dari awal hingga akhir acara (Target wajib: -24 LUFS).",
        caseStudy: "Divisi Quality Control menolak kaset siar sebuah drama TV karena Integrated Loudness-nya tercatat -19 LUFS (terlalu keras 5 LU di atas standar nasional).",
      },
      {
        title: "9. Maximum True Peak Level (dBTP)",
        content: "Standar EBU R128 menetapkan bahwa titik puncak gelombang suara murni (True Peak) tidak boleh melampaui -1 dBTP (atau -2 dBTP untuk format kompresi lossy MP4/AAC) untuk mencegah distorsi antar-sampel (inter-sample clipping) di decoder TV pemirsa.",
      },
      {
        title: "10. Loudness Range (LRA): Dinamika Kenyamanan Menonton",
        content: "LRA mengukur rentang antara bagian paling sunyi dan bagian paling keras dalam program. Untuk siaran berita dan talkshow, LRA ideal berkisar 4–8 LU (dinamika sempit agar dialog jelas). Untuk film bioskop, LRA bisa mencapai 14–20 LU.",
      },
      {
        title: "11. Alur Mastering Audio Standar Siaran Televisi",
        content: "Di timeline software NLE atau DAW: (1) Bersihkan noise desis dengan de-noise, (2) Samakan level vokal dialog antar pembicara, (3) Pasang EQ & Compressor di bus master, (4) Pasang Loudness Meter VST (Youlean / iZotope Insight), (5) Normalisasikan audio ke target -24 LUFS.",
      },
      {
        title: "12. Penyusunan Lembar Laporan Kualitas Audio (Audio QC Sheet)",
        content: "Tim QC mengisi checklist kelayakan siar: Integrated Loudness (-24 LUFS ± 1 LU), Max True Peak (< -1 dBTP), Max Momentary (< -18 LUFS), LRA (Loudness Range), dan tidak adanya cacat suara (glitch, dropout, out-of-phase).",
        didYouKnow: "Stasiun TV nasional memiliki prosesor hardware TC Electronic Loudness Controller otomatis di jalur transmisi pemancar untuk meratakan suara materi yang belum patuh R128.",
      },
      {
        title: "13. Evaluasi Keseimbangan Frekuensi Dialog di Berbagai Perangkat",
        content: "Audio siaran harus diuji di berbagai jenis speaker: (1) Monitor profesional bilik kontrol, (2) Speaker built-in TV LED tipis di ruang tamu, dan (3) Smartphone/Tablet. Dialog harus tetap terdengar artikulatif di semua jenis speaker.",
      },
      {
        title: "14. Penanganan Audio Dialek dan Pelafalan Bahasa Daerah",
        content: "Jika narasumber memiliki artikulasi wicara yang cepat atau beraksen kental, naskah siaran dapat menambahkan takarir teks (Closed Caption / Subtitle) di layar kaca tanpa harus mengubah volume audio secara berlebihan.",
      },
      {
        title: "15. Sinkronisasi Audio-Video: Masalah Lip-Sync Delay",
        content: "Pemrosesan video digital beresolusi tinggi (4K/HD) sering membutuhkan waktu beberapa milidetik lebih lama daripada audio. Akibatnya, gerak bibir presenter tertinggal dari suaranya. Audioman menyetel 'Audio Delay' di mixer (misal tunda 40 ms) agar sinkron sempurna.",
      },
      {
        title: "16. Evaluasi Akustik Ruangan Studio (RT60 & Dinding Peredam)",
        content: "Ruang studio yang buruk menimbulkan gema (reverb berlebih). Ruang studio siaran televisi yang ideal memiliki waktu dengung (RT60) di bawah 0,3 detik, dicapai melalui pemasangan panel akustik Rockwool dan Bass Trap di sudut ruangan.",
      },
      {
        title: "17. Studi Kasus: Penyelamatan Kualitas Audio Siaran Live Pemilu",
        content: "Di sebuah debat terbuka, audio presenter terdengar bergema karena mikrofon podium memantulkan suara dari dinding kaca aula. Tim audio memasang karpet tebal di lantai dan menyetel Noise Gate ketat di mixer, sehingga suara kembali kering dan jernih.",
      },
      {
        title: "18. Etika Penanganan Bahasa Kasar / Ujaran Kebencian Saat Live (Bleep Delay)",
        content: "Siaran langsung berisiko tinggi menggunakan sistem 'Profanity Delay' 7 detik. Jika pengisi acara mendadak mengucapkan kata makian kotor, Audioman memiliki waktu 7 detik untuk menekan tombol 'DUMP/BLEEP' sensor sebelum sinyal memancar ke satelit.",
      },
      {
        title: "19. Pengarsipan Master Audio Multitrack untuk Rilis Ulang",
        content: "Selain master stereo siap siar, tim audio mengarsipkan file proyek WAV 24-bit multitrack dari setiap mikrofon. Memungkinkan tim melakukan remixing audio jika program tersebut diedit ulang menjadi format dokumenter layar lebar.",
      },
      {
        title: "20. Rangkuman & Standar Keunggulan Audio Engineer",
        content: "Penerapan tata suara berstandar industri dan kepatuhan terhadap regulasi kenyaringan EBU R128 adalah bukti profesionalisme tertinggi seorang sound engineer penyiaran. Suara yang nyaman, seimbang, dan berwibawa adalah hak mutlak setiap pemirsa televisi.",
      },
    ],
    video: {
      title: "Standar Loudness Audio Penyiaran Televisi dan Teknik Mixing Suara Program",
      embedUrl: "https://www.youtube.com/embed/9wL2uB7r5yQ",
      guide: "Pelajari bagaimana mengukur kenyaringan terintegrasi -24 LUFS menggunakan software loudness meter, mencegah inter-sample clipping, dan menerapkan aturan 3:1.",
    },
    gamePairs: [
      { id: 1, left: "EBU R128", right: "Standar internasional regulasi kenyaringan audio siaran televisi (-24 LUFS)" },
      { id: 2, left: "LUFS", right: "Loudness Units relative to Full Scale satuan kenyaringan berbasis persepsi manusia" },
      { id: 3, left: "Aturan 3:1", right: "Prinsip penataan jarak antar mikrofon minimal 3x lipat jarak mic ke mulut" },
      { id: 4, left: "Phase Cancellation", right: "Penghapusan frekuensi suara akibat tabrakan gelombang beda fase" },
      { id: 5, left: "Profanity Delay", right: "Sistem tunda siaran 7 detik untuk menyensor kata-kata kasar pengisi acara live" },
    ],
    caseTitle: "Studi Kasus 4: Penolakan Master Siar Akibat Ketidaksesuaian Standar Loudness",
    caseScenario: "Sebuah rumah produksi menyerahkan file master program talkshow 30 menit ke stasiun televisi nasional. Divisi Quality Control (QC) menolak file tersebut dengan laporan: Integrated Loudness tercatat -18.5 LUFS dan Max True Peak melampaui +0.8 dBTP.",
    caseInstruction: "Sebagai Audio Mastering Engineer, jelaskan arti dari angka laporan QC tersebut dan langkah-langkah perbaikan apa yang harus Anda lakukan di timeline software DAW Anda agar file tersebut lolos uji standar EBU R128 (-24 LUFS ± 1 LU, True Peak < -1 dBTP)!",
    sampleQuestions: [
      {
        id: 1512,
        bloom: "C5",
        stem: "Jika dalam sesi rekaman talkshow dengan 3 narasumber suara vokal terdengar tipis dan berongga saat mereka berbicara bersamaan, tindakan teknis pertama yang paling tepat dilakukan di meja mixer adalah...",
        options: [
          { key: "A", text: "Memeriksa aturan jarak mikrofon 3:1 dan menguji tombol pembalik polaritas fase (Phase Invert Ø) pada salah satu channel mikrofon" },
          { key: "B", text: "Menaikkan volume bass EQ pada seluruh channel ke level maksimal" },
          { key: "C", text: "Menyuruh narasumber berbisik-bisik" },
          { key: "D", text: "Mematikan seluruh lampu studio" },
        ],
        correctKey: "A",
        explanation: "Suara tipis berongga adalah gejala klasik pembatalan fase. Membalik polaritas fase 180 derajat atau merenggangkan posisi mic sesuai aturan 3:1 akan langsung memulihkan ketebalan suara.",
      },
    ],
    lkpd: {
      title: "LKPD F5-K4: Pengukuran Loudness EBU R128 & Mastering Audio Program TV 60 Detik",
      objective: "Peserta didik mampu mengukur dan menormalkan file audio siaran televisi hingga mencapai target standar EBU R128 (-24 LUFS dan True Peak < -1 dBTP).",
      tools: ["Komputer / Laptop", "Software DAW / NLE (Premiere Pro / DaVinci Resolve / Audacity / Reaper)", "Plugin Loudness Meter (Youlean Loudness Meter Free)"],
      steps: [
        "Impor klip video program siaran pendek berdurasi 60 detik ke software DAW/NLE.",
        "Pasangkan plugin Loudness Meter pada Master Output track.",
        "Putar video dari awal hingga akhir; catat nilai Integrated Loudness (LUFS) dan Max True Peak (dBTP).",
        "Lakukan penyesuaian gain/kompresor master hingga Integrated Loudness berada tepat di angka -24 LUFS (toleransi ±1 LU).",
        "Pastikan nilai True Peak tidak melampaui -1 dBTP untuk mencegah distorsi clipping.",
        "Ekspor file audio master WAV dan cetak tangkapan layar (screenshot) grafik Youlean Loudness Meter.",
      ],
      outputFormat: "File Audio Master WAV Terkalibrasi & Screenshot Bukti Laporan Loudness Meter -24 LUFS.",
    },
    journalQuestions: {
      q1: "Mengapa regulasi kenyaringan suara (Loudness Standard) sangat penting bagi kenyamanan masyarakat penonton televisi?",
      q2: "Apa perbedaan paling mendasar antara meteran puncak suara biasa (Peak Meter dBFS) dengan meteran kenyaringan telinga (LUFS)?",
      q3: "Bagaimana komitmen Anda menerapkan standar etika profesional penyiaran pada karya-karya audio visual Anda ke depan?",
    },
    kktpIndicators: [
      "Mampu menerapkan kaidah aturan 3:1 dan teknik pencegahan pembatalan fase pada multi-mikrofon studio.",
      "Mampu menganalisis parameter Integrated Loudness (LUFS), True Peak (dBTP), dan Loudness Range (LRA).",
      "Mampu melakukan mastering audio program siaran televisi hingga memenuhi standar kepatuhan EBU R128.",
    ],
  },
];
