import { ElemenContentItem, DEFAULT_ELEMEN_SUBMENUS } from "./curriculum-types";

export const E3_CONTENTS: ElemenContentItem[] = [
  // =========================================================================
  // KONTEN 1: e3-k1 - Jenis, Klasifikasi, & Fungsi Peralatan Audio Visual
  // =========================================================================
  {
    id: "e3-k1",
    order: 1,
    title: "Jenis, Klasifikasi, & Anatomi Peralatan Audio Visual di Industri Media",
    shortTitle: "Klasifikasi Peralatan AV",
    summary:
      "Pengenalan komprehensif ekosistem perangkat keras produksi: kamera studio vs cinema, lensa prime vs zoom, sistem penyangga (tripod, dolly, gimbal), lighting fixture, perlengkapan audio lapangan, dan sistem monitoring nirkabel.",
    kompetensi: [
      "Mengidentifikasi klasifikasi kamera studio broadcast, ENG, cinema camera, dan mirrorless hybrid.",
      "Memahami fungsi lensa anamorphic, spherical prime, dan cine-zoom parfocal.",
      "Mengenal fungsi rig pendukung kamera: baseplate, follow focus, matte box, dan monitor wireless.",
      "Menganalisis arsitektur sinyal kabel: SDI vs HDMI, XLR vs TRS, serta power distribution V-Mount.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu mengklasifikasikan minimal 5 kategori perangkat keras produksi penyiaran dan perfilman.",
      "Peserta didik mampu merinci anatomi komponen utama kamera video profesional beserta fungsi antarmukanya.",
      "Peserta didik mampu menentukan konfigurasi rigging kamera yang ergonomis dan aman sesuai kebutuhan shot.",
      "Peserta didik mampu menerapkan SOP pembersihan optik, penanganan konektor, dan penyimpanan di storage ber-AC.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Mengapa sebuah kamera bioskop (Cinema Camera) senilai ratusan juta rupiah tidak bisa langsung digunakan untuk syuting tanpa dipasangi aksesori rigging tambahan?",
    hookContext:
      "Bodi kamera sinema profesional dirancang modular (body only). Untuk dapat dioperasikan, kamera memerlukan lensa cine, monitor eksternal, battery pack V-mount, matte box penahan flare, dan wireless video transmitter.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Kabel konektor standar penyiaran televisi yang memiliki mekanisme kunci putar (bayonet lock) dan tahan tarikan di lantai studio adalah...",
        options: [
          { key: "A", text: "Kabel HDMI standar konsumen" },
          { key: "B", text: "Kabel SDI (Serial Digital Interface) berbasis BNC" },
          { key: "C", text: "Kabel USB Type-C 2.0" },
          { key: "D", text: "Kabel RCA audio analog" },
        ],
        correctKey: "B",
        explanation: "Konektor BNC pada kabel SDI mengunci secara mekanis sehingga tidak sengaja terlepas saat kamera bergerak aktif di set siaran.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Aksesori kotak di depan lensa yang memiliki bilah penutup (flags) untuk memblokir flare cahaya liar disebut...",
        options: [
          { key: "A", text: "Follow Focus" },
          { key: "B", text: "Matte Box" },
          { key: "C", text: "Shoulder Rig" },
          { key: "D", text: "Quick Release Plate" },
        ],
        correctKey: "B",
        explanation: "Matte box dipasang di depan lensa untuk menyaring filter kaca (ND/Pola) dan memotong pantulan cahaya langsung (flare) menggunakan French flag dan side wings.",
      },
    ],
    materialCards: [
      {
        title: "1. Ekosistem Peralatan Produksi Audio Visual",
        content: "Produksi audio visual memerlukan integrasi 5 pilar perangkat keras: Camera & Optics (perekam visual), Audio Gear (perekam suara), Lighting & Grip (pencahayaan & rigging), Monitoring & Transmission (display & transmisi), serta Power & Storage (catu daya dan media simpan).",
        caseStudy: "Kegagalan satu subsistem, seperti kabel HDMI terlepas atau baterai drop, dapat menghentikan seluruh proses syuting yang melibatkan puluhan kru.",
        didYouKnow: "Di set film profesional, departemen kamera dan departemen grip bekerja berdampingan di bawah koordinasi DoP (Director of Photography)."
      },
      {
        title: "2. Klasifikasi Kamera: Studio Broadcast vs Cinema",
        content: "Kamera Studio Broadcast (Sony HDC series, Grass Valley) dioptimalkan untuk transmisi sinyal serat optik (SMPTE hybrid fiber) secara live ke switcher MCR dengan kontrol CCU. Sebaliknya, Cinema Camera (ARRI Alexa, RED, Blackmagic URSA) mengutamakan dynamic range tinggi (14-17 stops) dan perekaman RAW internal.",
        caseStudy: "Program berita live wajib menggunakan kamera broadcast berkabel fiber CCU agar sutradara dan video engineer bisa mengatur exposure dan shading secara realtime.",
      },
      {
        title: "3. Klasifikasi Kamera: ENG / EFP vs Mirrorless Hybrid",
        content: "Kamera ENG (Electronic News Gathering) memiliki lensa zoom terpasang dengan motorized servo rocker untuk liputan berita cepat tahan banting. Kamera Mirrorless Hybrid (Sony FX3/A7S III, Panasonic Lumix S5II) menawarkan bodi ringkas, sensor full-frame, dan autofokus AI untuk dokumenter mandiri atau run-and-gun.",
        didYouKnow: "Rocker zoom pada kamera ENG memungkinkan zoom lambat konstan selama 3 menit tanpa getaran tangan manusia."
      },
      {
        title: "4. Anatomi Bodi Kamera Video Profesional",
        content: "Bodi kamera profesional memiliki elemen kritis: sensor CMOS/CCD, lens mount (PL-mount, E-mount, EF-mount), filter motorized internal ND (Clear, 1/4, 1/16, 1/64), slot ganda media rekam (CFexpress/SD V90), port timecode input BNC, dan audio XLR profesional terisolasi.",
        caseStudy: "Fitur internal Electronic Variable ND filter pada Sony FX6 memungkinkan penyesuaian eksposur mulus dari 1/4 ke 1/128 stop tanpa mengubah aperture atau shutter angle.",
      },
      {
        title: "5. Lensa: Prime Lens vs Zoom Lens",
        content: "Prime lens (lensa fix) memiliki focal length tunggal (24mm, 50mm, 85mm), menghasilkan ketajaman optik superior, distorsi minimal, dan bukaan aperture sangat besar (f/1.2 - T1.5). Zoom lens memungkinkan perubahan focal length (24-70mm) fleksibel, namun umumnya berbobot lebih berat dan bukaan aperture maksimal lebih sempit (f/2.8 - T2.9).",
      },
      {
        title: "6. Karakteristik Lensa Cinema (Cine Lens)",
        content: "Lensa bioskop sejati memiliki 4 keunggulan teknis: Parfocal (fokus tidak bergeser saat di-zoom), Tanpa Focus Breathing (sudut pandang tidak membesar/mengecil saat fokus diputar), Focus Throw panjang (270-300 derajat) dengan gerigi mod 0.8, serta tanda aperture T-Stop (akurat transmisi cahaya riil) bukan f-stop teoritis.",
        didYouKnow: "T-Stop mengukur cahaya nyata yang berhasil menembus elemen kaca lensa hingga ke sensor setelah dikurangi penyerapan optik."
      },
      {
        title: "7. Sistem Penyangga: Tripod Video Head",
        content: "Tripod video profesional menggunakan Fluid Head (bukan ball head fotografi) yang memiliki cairan redaman viscous dan counterbalance spring. Fitur ini memungkinkan gerakan pan (horizontal) dan tilt (vertikal) yang sangat halus dengan resistensi yang dapat disetel dan pengunci terpisah.",
        caseStudy: "Fluid head yang tidak seimbang (counterbalance salah) akan terpelanting jatuh ke depan saat kru melepaskan tangan dari pan handle, berisiko merusak lensa mahal.",
      },
      {
        title: "8. Grip & Stabilisasi Dinamis: Gimbal 3-Axis & Steadicam",
        content: "Gimbal 3-axis bermotor (DJI Ronin RS3/RS4) menggunakan sensor gyro dan motor brushless untuk meredam goyangan yaw, pitch, dan roll. Steadicam mekanis menggunakan sistem vest, arm pegas suspensi, dan sled berbobot imbang (gimbal mekanis) untuk gerakan sinematik organik tanpa batas beban elektronik.",
      },
      {
        title: "9. Slider, Dolly Track, dan Jib Arm / Crane",
        content: "Slider memberikan gerakan kamera linier halus di atas meja/lantai. Dolly Track menggunakan roda berpelindung karet di atas rel baja untuk lintasan panjang berkecepatan konstan. Jib Arm / Crane memberikan pergerakan vertikal dramatis dari permukaan tanah hingga ketinggian 3-6 meter di atas kerumunan.",
      },
      {
        title: "10. Rigging Modular: Baseplate, Rods, & Cage",
        content: "Camera cage melindungi bodi kamera dan menyediakan ulir sekrup 1/4\"-20 dan 3/8\"-16 ARRI locating pins. Baseplate dengan sistem 15mm LWS (Light Weight Support) rods menjadi tulang punggung untuk memasang follow focus motor, lens support bracket, dan battery plate di bagian belakang.",
      },
      {
        title: "11. Sistem Fokus: Manual Follow Focus & Wireless FIZ",
        content: "Follow focus mekanis menggunakan gear ring mod 0.8 yang terhubung ke handwheel dengan marking disc putih untuk menandai titik fokus. Sistem FIZ nirkabel (Focus, Iris, Zoom) seperti Tilta Nucleus atau DJI Focus memungkinkan 1st AC (Focus Puller) mengontrol ketajaman gambar dari jarak 100 meter via monitor nirkabel.",
      },
      {
        title: "12. Matte Box dan Sistem Filter Kaca Cinema",
        content: "Matte box menahan filter kaca ukuran 4x5.65 inci di depan lensa. Filter standar mencakup: Optical ND (menurunkan exposure tanpa ubah warna), Circular Polarizer (menghapus pantulan kaca dan air), Black Pro-Mist / Diffusion (melembutkan highlight dan kerutan kulit), serta Streak / Anamorphic filter.",
      },
      {
        title: "13. Sistem Monitoring: On-Camera Monitor & Production Monitor",
        content: "Monitor di atas kamera (5-7 inci, 1000-2000 nits high-brightness daylight viewable) menyajikan tool eksposur: False Color, Waveform, Vectorscope, Peaking Focus, dan Zebra. Production Monitor sutradara (17-24 inci) terkalibrasi warna 10-bit Rec.709 / DCI-P3 dengan akurasi delta-E < 1.",
        caseStudy: "Kameramen yang hanya mengandalkan layar LCD bawaan kamera sering kali menghasilkan rekaman yang overexposed atau out-of-focus karena keterbatasan kecerahan layar di bawah terik matahari.",
      },
      {
        title: "14. Transmisi Video Nirkabel (Wireless Video Transmission)",
        content: "Perangkat pemancar nirkabel (Teradek Bolt, Hollyland Mars, Accsoon CineEye) mengirimkan sinyal video HD uncompressed dengan latensi nol (<1 milidetik) melalui frekuensi radio 5 GHz atau 6 GHz dari kamera ke video village sutradara dan focus puller.",
      },
      {
        title: "15. Antarmuka Kabel: SDI vs HDMI",
        content: "Kabel SDI (BNC) merupakan standar mutlak studio profesional: mampu mentransmisikan sinyal 3G/6G/12G-SDI hingga jarak 100 meter tanpa amplifier, memiliki pengunci bayonet, dan tahan interferensi elektromagnetik. Kabel HDMI standar konsumen rentan putus sinyal jika panjang melebihi 5 meter dan port-nya mudah longgar jika tersenggol.",
      },
      {
        title: "16. Sistem Manajemen Catu Daya: V-Mount & Gold-Mount",
        content: "Baterai sinema berdaya besar menggunakan sistem dudukan V-Mount atau Gold-Mount (Anton Bauer) dengan output nominal 14.8V hingga 26V. Dilengkapi port D-Tap dan USB-C PD untuk menyuplai daya sekaligus ke bodi kamera, monitor eksternal, transmitter wireless, dan motor follow focus dari satu sumber baterai terpusat.",
        didYouKnow: "Baterai litium berkapasitas di atas 100Wh dan 160Wh memiliki aturan ketat saat dibawa dalam penerbangan pesawat komersial (IATA regulation)."
      },
      {
        title: "17. Media Penyimpanan: CFexpress, SDXC V90, & External SSD",
        content: "Kamera bioskop ber-bitrate tinggi merekam ratusan megabyte per detik (MB/s). Kartu CFexpress Type B mampu membaca/menulis hingga 1700 MB/s. Kartu SDXC UHS-II dengan sertifikasi V90 menjamin kecepatan tulis minimum konstan 90 MB/s untuk video 4K All-Intra. Perekaman langsung ke external NVMe SSD via USB-C menjadi solusi ekonomis untuk Apple ProRes dan BRAW.",
      },
      {
        title: "18. Standar Keamanan: Safety Cable, Sandbag, & C-Stand",
        content: "Semua peralatan berat yang dipasang di atas rig (lampu, monitor, kamera overhead) wajib dikaitkan dengan kawat pengaman baja (safety cable). Setiap C-Stand penyangga lampu atau boom pole wajib dibebani pasir pemberat (sandbag) pada kaki terpanjang menghadap ke arah beban beban gravitasi.",
      },
      {
        title: "19. SOP Pembersihan Optik & Sensor Kamera",
        content: "Dilarang membersihkan lensa kaca dengan ujung baju atau tisu kasar. Prosedur standar pembersihan optik: semprot debu dengan air blower karet, gunakan kuas lensa antistatik berbulu halus, lalu usap melingkar dari tengah ke luar menggunakan lens paper khusus dengan setetes lens cleaner optic fluid. Sensor kamera dibersihkan hanya dengan sensor swab berdimensi pas di ruang bebas debu.",
      },
      {
        title: "20. POS Penyimpanan: Master Gear Room & Pelicase",
        content: "Peralatan elektronik dan optik disimpan dalam dry box / electronic cabinet dengan kelembapan udara konstan 40% - 50% RH untuk mencegah pertumbuhan jamur lensa (fungus). Untuk transportasi syuting eksterior, peralatan ditata rapi dalam hardcase kedap air dan benturan (Pelican / Nanuk case) dengan busa custom (pluck foam).",
      },
    ],
    video: {
      title: "Anatomi Lengkap Rig Kamera Bioskop & Peralatan Audio Visual",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari cara memasang baseplate, 15mm rods, follow focus motor, dan manajemen kabel D-Tap agar tidak tersangkut gear mekanik.",
    },
    gamePairs: [
      { id: 1, left: "Matte Box", right: "Mencegah flare cahaya dan menampung filter kaca 4x5.65 inci" },
      { id: 2, left: "V-Mount Battery", right: "Baterai berdaya besar untuk kamera, monitor, dan motor FIZ" },
      { id: 3, left: "BNC / SDI Cable", right: "Konektor video broadcast berdaya tahan tinggi dengan sistem kunci putar" },
      { id: 4, left: "Follow Focus", right: "Roda pemutar mekanis/nirkabel untuk memindahkan titik fokus lensa" },
      { id: 5, left: "Dry Cabinet", right: "Lemari penyimpan lensa dengan kelembapan terkontrol 40-50% RH" },
    ],
    caseTitle: "Tragedi Kamera Blackout di Tengah Siaran Langsung Talkshow TV",
    caseScenario:
      "Dalam siaran langsung talkshow perayaan ulang tahun sekolah, Kamera 2 tiba-tiba kehilangan sinyal video (black screen) ke Master Control Room saat juru kamera melakukan gerakan tilt ke atas. Setelah diperiksa kru, kamera masih menyala tetapi kabel HDMI murah sepanjang 10 meter yang dihubungkan ke video switcher terjepit roda tripod dan terlepas dari soketnya yang patah.",
    caseInstruction:
      "Analisis mengapa kabel HDMI konsumen gagal memenuhi standar produksi broadcast. Rancang konfigurasi kabel pengganti (tipe kabel, konektor, clamp pengaman, dan kabel run path) yang harus diterapkan untuk mencegah kejadian serupa terulang.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Keuntungan utama menggunakan lensa Cine (Cinema Lens) dibandingkan lensa fotografi standar pada produksi video sinematik adalah...",
        options: [
          { key: "A", text: "Ukurannya selalu lebih kecil dan berbobot ringan" },
          { key: "B", text: "Memiliki ring fokus bergigi, rotasi fokus halus 270-300 derajat tanpa focus breathing, dan aperture T-stop yang akurat" },
          { key: "C", text: "Memiliki sistem autofocus yang bergerak sangat cepat tanpa suara" },
          { key: "D", text: "Harganya jauh lebih murah daripada lensa kit mirrorless" },
        ],
        correctKey: "B",
        explanation: "Lensa bioskop dirancang khusus untuk operasional manual focus puller profesional dengan throw panjang, tanpa jeda nafas optik (breathing), dan kalibrasi transmisi cahaya T-Stop presisi.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Alat yang paling tepat digunakan untuk menyangga dan menggerakkan kamera secara meluncur lurus dengan getaran minimal di atas rel lantai studio adalah...",
        options: [
          { key: "A", text: "Monopod" },
          { key: "B", text: "Camera Dolly Track" },
          { key: "C", text: "C-Stand" },
          { key: "D", text: "Grip Head" },
        ],
        correctKey: "B",
        explanation: "Camera dolly yang diletakkan di atas track rel memberikan pergerakan meluncur konstan dan halus untuk syuting adegan tracking shot panjang.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Seorang kameramen menyadari layar LCD kamera miliknya tidak mampu menampilkan gambar dengan jelas saat syuting di pantai terik matahari siang hari. Solusi teknis dan aksesori paling efektif adalah...",
        options: [
          { key: "A", text: "Menaikkan ISO kamera setinggi-tingginya" },
          { key: "B", text: "Memasang High-Brightness On-Camera Monitor (minimal 1500-2000 nits) yang dilengkapi sunhood pelindung silau" },
          { key: "C", text: "Membuka aperture lensa selebar mungkin" },
          { key: "D", text: "Mengganti format rekaman dari ProRes menjadi MP4" },
        ],
        correctKey: "B",
        explanation: "Monitor eksternal dengan tingkat kecerahan tinggi (daylight viewable 1500-2000 nits) dan penutup sinar (sunhood) mutlak diperlukan untuk memonitor framing dan eksposur di bawah sinar matahari.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Ketika menyusun paket peralatan (gear checklist) untuk liputan dokumenter ekspedisi alam liar selama 5 hari tanpa listrik PLN, manakah konfigurasi pasokan daya yang paling andal dan aman?",
        options: [
          { key: "A", text: "Hanya membawa kabel colokan listrik panjang 100 meter" },
          { key: "B", text: "Membawa beberapa baterai V-Mount dengan port D-Tap/USB-C PD, power bank kapasitas tinggi, dan panel surya portabel lipat ber-inverter DC" },
          { key: "C", text: "Menggunakan aki motor basah bekas tanpa sekring pengaman" },
          { key: "D", text: "Hanya membawa 1 buah baterai internal cadangan" },
        ],
        correctKey: "B",
        explanation: "Baterai V-Mount tangguh dapat mengisi ulang beragam alat via D-Tap dan di-recharge kembali menggunakan generator solar panel lipat saat syuting outdoor terpencil.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah SOP perawatan pencegahan (preventive maintenance) peralatan optik kamera di laboratorium sekolah agar terhindar dari kerusakan jamur kaca (fungus) dan korosi elektrikal!",
        options: [
          { key: "A", text: "Menyimpan seluruh lensa di dalam lemari kayu tertutup rapat tanpa ventilasi" },
          { key: "B", text: "Menempatkan kamera dan lensa di Dry Cabinet elektronik dengan kelembapan stabil 40-50% RH, melepas baterai saat disimpan, dan membersihkan debu fisik dengan blower serta lens paper sebelum disimpan" },
          { key: "C", text: "Mencuci permukaan optik lensa dengan sabun detergen dan air hangat setiap selesai syuting" },
          { key: "D", text: "Menyemprotkan minyak pelumas mesin ke dalam lubang sensor dan mounting kamera" },
        ],
        correctKey: "B",
        explanation: "Kelembapan 40-50% RH adalah zona ideal: jamur tidak dapat hidup (<60% RH) dan pelumas mekanik lensa tidak mengering (>30% RH), disertai pembersihan optik standar dan pelepasan baterai untuk mencegah kebocoran kimia.",
      },
    ],
    lkpd: {
      title: "LKPD E3-K1: Identifikasi Anatomi & Simulasi Perakitan Rigging Kamera Cinema",
      objective: "Peserta didik mampu mengidentifikasi komponen mekanik kamera bioskop/mirrorless dan merakit konfigurasi rig siap syuting lengkap dengan monitor dan catu daya.",
      tools: ["Bodi Kamera (Mirrorless/Cinema)", "Lensa Prime/Zoom", "Cage & Baseplate 15mm Rods", "Follow Focus", "On-Camera Monitor", "Baterai V-Mount", "Kabel D-Tap & HDMI/SDI"],
      steps: [
        "Lakukan inspeksi visual kebersihan optik lensa dan sensor kamera sebelum dirakit.",
        "Pasang bodi kamera ke dalam cage dan kunci baseplate dengan sekrup pengaman ganda.",
        "Pasang batang 15mm rods dan pasang mekanisme follow focus agar gear menempel sempurna pada ring fokus lensa.",
        "Pasang battery plate V-mount di bagian belakang batang rods untuk menciptakan penyeimbang beban (counterweight).",
        "Koneksikan kabel daya D-Tap ke monitor dan bodi kamera, serta kabel video SDI/HDMI dengan klem pengaman kabel (cable clamp).",
        "Uji kelancaran perputaran fokus dan pastikan tidak ada kabel yang menghalangi pergerakan tangan operator.",
      ],
      outputFormat: "Foto dokumentasi tahapan perakitan rig dan video demonstrasi operasional fokus 30 detik format MP4.",
    },
    journalQuestions: {
      q1: "Mengapa penting bagi seorang calon juru kamera untuk memahami seluk-beluk rigging dan manajemen daya kamera?",
      q2: "Peralatan audio visual manakah yang menurut Anda paling rentan mengalami kerusakan fisik jika kru tidak berhati-hati di lokasi syuting?",
      q3: "Bagaimana Anda membiasakan diri menerapkan budaya 5S saat mengambil dan mengembalikan peralatan di ruang gudang alat sekolah?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi minimal 5 klasifikasi peralatan kamera, optik, audio, dan lighting broadcast.",
      "Mampu merinci fungsi anatomi bodi kamera dan aksesori rigging modular profesional.",
      "Mampu merakit konfigurasi kamera rig yang seimbang, ergonomis, dan aman sesuai SOP.",
    ],
  },

  // =========================================================================
  // KONTEN 2: e3-k2 - Fotografi Dasar & Segitiga Eksposur
  // =========================================================================
  {
    id: "e3-k2",
    order: 2,
    title: "Fotografi Dasar & Segitiga Eksposur Video (Aperture, Shutter Speed, ISO)",
    shortTitle: "Segitiga Eksposur",
    summary:
      "Penguasaan pilar eksposur gambar: relasi f-stop aperture terhadap Depth of Field (DoF), 180-degree shutter rule terhadap motion blur alami, sensitivitas ISO/Gain terhadap noise digital, serta kalibrasi temperatur warna White Balance.",
    kompetensi: [
      "Menguasai hubungan timbal balik Aperture, Shutter Speed, dan ISO dalam menentukan intensitas cahaya rekaman.",
      "Menerapkan aturan 180-degree shutter rule untuk menghasilkan motion blur sinematik yang natural pada video.",
      "Mengontrol kedalaman ruang (shallow vs deep DoF) menggunakan kombinasi focal length, aperture, dan jarak fokus.",
      "Melakukan kalibrasi White Balance (Kelvin) menggunakan Grey Card 18% untuk akurasi rendering warna kulit (skin tone).",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menghitung dan mengatur nilai Shutter Speed yang tepat berdasarkan frame rate (FPS) proyek video.",
      "Peserta didik mampu menghasilkan gambar berlatar belakang buram (bokeh) yang artistik dan terkontrol kedalamannya.",
      "Peserta didik mampu mengoptimalkan pengaturan Native ISO kamera untuk meminimalkan timbulnya noise digital berbutir.",
      "Peserta didik mampu mengkalibrasi White Balance manual menggunakan kartu abu-abu standar di berbagai kondisi pencahayaan.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Jika Anda syuting video pada 24 frame per detik (fps) tetapi menyetel Shutter Speed di 1/1000 detik, mengapa gerakan orang berjalan tampak patah-patah seperti robot?",
    hookContext:
      "Mata manusia melihat gerakan cepat dengan sedikit keburaman gerak alami (motion blur). Shutter speed yang terlalu tinggi membekukan setiap frame secara ekstrem, menghilangkan motion blur, dan menciptakan efek strobing atau jittery yang tidak nyaman ditonton.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Menurut aturan 180-degree shutter rule dalam video standar 25 fps, nilai Shutter Speed yang wajib dipasang agar motion blur terlihat alami adalah...",
        options: [
          { key: "A", text: "1/25 detik" },
          { key: "B", text: "1/50 detik" },
          { key: "C", text: "1/200 detik" },
          { key: "D", text: "1/500 detik" },
        ],
        correctKey: "B",
        explanation: "180-degree shutter angle mengartikan kecepatan rana adalah 1 / (2 x frame rate). Pada 25 fps, rumusnya adalah 1 / (2 x 25) = 1/50 detik.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Pengaturan angka f-stop yang menghasilkan bukaan diafragma lensa paling lebar dan kedalaman ruang paling dangkal (bokeh kuat) adalah...",
        options: [
          { key: "A", text: "f/1.4" },
          { key: "B", text: "f/5.6" },
          { key: "C", text: "f/11" },
          { key: "D", text: "f/22" },
        ],
        correctKey: "A",
        explanation: "Nilai f-stop berbanding terbalik: semakin kecil angka f (f/1.4), semakin lebar bukaan bilah diafragma, semakin banyak cahaya masuk, dan semakin tipis kedalaman ruang (shallow DoF).",
      },
    ],
    materialCards: [
      {
        title: "1. Konsep Dasar Eksposur: Segitiga Eksposur Video",
        content: "Eksposur adalah kuantitas cahaya yang mengenai sensor kamera saat merekam. Segitiga eksposur memadukan tiga variabel: Aperture (besaran lubang cahaya lensa), Shutter Speed (durasi sensor terekspos cahaya per frame), dan ISO (tingkat penguatan sinyal elektronik sensor).",
        caseStudy: "Mengubah salah satu variabel memerlukan kompensasi pada variabel lain agar gambar tidak terlalu gelap (underexposed) atau terlalu terang (overexposed).",
      },
      {
        title: "2. Aperture / Diafragma (f-stop & T-stop)",
        content: "Aperture dibentuk oleh serangkaian bilah iris di dalam lensa. Urutan skala f-stop standar: f/1.4, f/2, f/2.8, f/4, f/5.6, f/8, f/11, f/16, f/22. Setiap langkah (1 full stop) menggandakan atau membagi dua volume cahaya yang masuk ke sensor.",
        didYouKnow: "Kata 'aperture' berasal dari bahasa Latin 'apertura' yang berarti bukaan atau celah terbuka."
      },
      {
        title: "3. Mengendalikan Kedalaman Ruang (Depth of Field - DoF)",
        content: "Depth of Field (DoF) adalah rentang ketajaman gambar di depan dan di belakang titik fokus utama. Shallow DoF (kedalaman sempit) mengisolasi subjek dengan latar belakang blur halus (bokeh). Deep DoF (kedalaman luas) menjaga subjek hingga pemandangan latar belakang tetap tajam bersamaan.",
      },
      {
        title: "4. Empat Faktor Penentu Shallow Depth of Field",
        content: "Untuk mendapatkan latar belakang bokeh dramatis: (1) Gunakan bukaan aperture lebar (f/1.4 - f/2.8), (2) Gunakan focal length lensa panjang/telephoto (85mm - 135mm), (3) Dekatkan posisi kamera sedekat mungkin ke subjek, dan (4) Jauhkan jarak subjek dari dinding latar belakang.",
        caseStudy: "Dalam wawancara TV, kameramen menempatkan talent 3 meter di depan latar studio agar ornamen studio menjadi blur lembut dan penonton fokus ke ekspresi wajah talent.",
      },
      {
        title: "5. Shutter Speed & Shutter Angle dalam Sinematografi",
        content: "Dalam sinematografi digital, waktu rana dapat dinyatakan dalam detik (1/50s) atau sudut rana (Shutter Angle 180°). Shutter angle diadaptasi dari kamera seluloid putar kuno di mana cakram setengah lingkaran (180 derajat) berputar mengekspos film selama setengah putaran frame.",
      },
      {
        title: "6. Aturan Emas 180-Degree Shutter Rule",
        content: "Rumus baku gerak sinematik alami: Shutter Speed = 1 / (2 x Frame Rate). Pada 24 fps = 1/48s (atau 1/50s). Pada 50 fps slow motion = 1/100s. Pada 100 fps super slow motion = 1/200s. Menyimpang dari aturan ini menghasilkan efek khusus yang disengaja.",
        didYouKnow: "Film laga 'Saving Private Ryan' menggunakan shutter sempit 45 derajat (1/200s pada 24fps) untuk adegan pendaratan pantai agar percikan pasir dan ledakan tampak tajam mencekam."
      },
      {
        title: "7. Masalah Flicker & Penyesuaian Shutter Speed Frekuensi Listrik",
        content: "Lampu listrik AC di Indonesia berosilasi pada frekuensi 50 Hz. Jika merekam video dengan shutter speed yang tidak sinkron (misal 1/60s atau 1/80s), akan timbul garis-garis kedipan hitam berjalan (flicker). Untuk menghilangkannya, pasang shutter speed pada kelipatan 50 Hz: 1/50s atau 1/100s (Clear Scan mode).",
      },
      {
        title: "8. ISO / Gain: Sensitivitas Sensor Digital",
        content: "ISO mengontrol amplifikasi sinyal elektronik yang diterima photosite sensor. Menaikkan ISO dari 100 ke 6400 melipatgandakan kecerahan gambar di kegelapan, namun menghasilkan noise digital (chroma dan luma noise) serta menurunkan dynamic range gambar secara signifikan.",
      },
      {
        title: "9. Dual Native ISO pada Sensor Kamera Sinema Modern",
        content: "Kamera bioskop modern (Sony FX3/FX6, Blackmagic Pocket 6K) memiliki dua sirkuit penguat analog independen (Dual Native ISO), misalnya ISO 800 dan ISO 12.800 (pada S-Log3). Merekam pada ISO 12.800 menghasilkan gambar yang jauh lebih bersih dari noise dibanding merekam pada ISO 6400.",
        caseStudy: "Kru film yang syuting malam hari memilih langsung melompat ke base ISO kedua (ISO 12.800) untuk mendapatkan gambar malam yang sangat jernih tanpa perlu lampu berdaya raksasa.",
      },
      {
        title: "10. Penggunaan Neutral Density (ND) Filter",
        content: "Saat syuting di luar ruangan terik matahari dengan shutter terkunci di 1/50s dan ingin aperture f/1.8 (bokeh), gambar akan mengalami overexposed parah. Filter ND (kacamata hitam untuk lensa) menurunkan intensitas cahaya tanpa mengubah warna, memungkinkan bukaan f/1.8 tetap digunakan di siang terik.",
      },
      {
        title: "11. Alat Bantu Evaluasi Eksposur: Zebra Pattern",
        content: "Zebra pattern menampilkan garis-garis belang hitam-putih diagonal pada area gambar yang mencapai ambang batas kecerahan tertentu. Standar IRE zebra: 70% IRE untuk highlight warna kulit kaukasia/asia (skin tone), dan 100% IRE untuk mendeteksi area clipping putih yang terbakar (blown-out highlight).",
      },
      {
        title: "12. Alat Bantu Evaluasi Eksposur: Histogram",
        content: "Histogram adalah grafik distribusi tonal pixel dari shadow gelap gulita (sisi kiri 0) hingga highlight putih murni (sisi kanan 255). Grafik yang menumpuk di sisi kiri menandakan underexposure (crushed blacks), sedangkan grafik yang menabrak dinding kanan menandakan overexposure (blown highlights).",
      },
      {
        title: "13. Alat Bantu Evaluasi Eksposur: Waveform Monitor",
        content: "Waveform monitor menampilkan pemetaan kecerahan luminansi (IRE skala 0 hingga 100) yang berkorelasi langsung dengan posisi spasial horizontal frame video. Ini adalah alat ukur paling akurat bagi videografer untuk memastikan wajah subjek berada pada skala 60-70 IRE dan background langit tidak melebihi 100 IRE.",
      },
      {
        title: "14. Alat Bantu Evaluasi Eksposur: False Color",
        content: "False color mengubah visual kamera menjadi peta warna termal artifisial berdasarkan nilai IRE: Ungu/Biru = Shadow sangat gelap (0-10 IRE), Hijau/Pink = Skin tone ideal (50-65 IRE), Abu-abu = 18% Grey Card (40-45 IRE), dan Merah pekat = Clipping overexposure (99-100 IRE).",
        didYouKnow: "Director of Photography film Hollywood hampir selalu mengandalkan False Color di monitor monitor kecil mereka daripada mata telanjang."
      },
      {
        title: "15. Konsep White Balance & Temperatur Warna (Skala Kelvin)",
        content: "Cahaya memiliki suhu warna yang diukur dalam derajat Kelvin (K). Spektrum umum: Api lilin (1800K), Lampu bohlam pijar Tungsten (3200K), Lampu fluoresens neon (4000K), Sinar matahari siang Daylight (5600K), dan Langit teduh berawan Shade (6500K - 8000K).",
      },
      {
        title: "16. Mengapa Auto White Balance (AWB) Diharamkan dalam Syuting Profesional?",
        content: "AWB secara otomatis mengubah suhu warna di tengah perekaman video ketika talent bergerak atau latar belakang berubah warna. Hal ini menyebabkan transisi warna kulit yang tidak konsisten dan membuat proses color grading di pascaproduksi menjadi sangat sulit dan memakan waktu.",
        caseStudy: "Saat talent berbaju merah masuk ke dalam frame ber-AWB, kamera mengira ruangan terlalu hangat sehingga otomatis menambahkan warna biru, membuat wajah talent tampak pucat membiru.",
      },
      {
        title: "17. Prosedur Kalibrasi Manual White Balance dengan Grey Card 18%",
        content: "SOP kalibrasi WB profesional: (1) Letakkan Grey Card 18% tepat di posisi wajah talent menghadap sumber cahaya utama, (2) Penuhi frame kamera dengan kartu abu-abu tersebut tanpa bayangan kru, (3) Tekan tombol 'Custom / One-Push White Balance' pada kamera hingga angka Kelvin dan pergeseran Tint (Green/Magenta) terkunci presisi.",
      },
      {
        title: "18. Koreksi Tint: Green vs Magenta Offset",
        content: "Selain temperatur warna oranye-biru (Kelvin), spektrum cahaya memiliki sumbu kedua yaitu Tint hijau-magenta. Lampu LED murah atau lampu neon kantor sering memancarkan spike spektrum hijau (green cast) yang membuat kulit manusia terlihat kusam sakit. Tint perlu digeser ke arah magenta (+Tint) untuk menetralkannya.",
      },
      {
        title: "19. Log Profile vs Standard Rec.709",
        content: "Profil warna standar Rec.709 memiliki kontras tinggi dan siap tonton, tetapi membatasi dynamic range hanya 8 stop. Logarithmic profile (S-Log3, Canon Log, V-Log) meratakan kontras dan desaturasi warna untuk menyimpan detail maksimal pada highlight terang dan shadow gelap hingga 14-15 stops, memerlukan LUT (Look-Up Table) saat monitoring dan color grading.",
      },
      {
        title: "20. POS Penguncian Eksposur Sebelum Tombol Rekam Ditekan",
        content: "Urutan kerja baku juru kamera: (1) Kunci Frame Rate & Shutter Speed pada 180° rule, (2) Tetapkan Native ISO kamera, (3) Kunci White Balance manual sesuai sumber lampu, (4) Atur Aperture f-stop untuk mencapai DoF artistik yang diinginkan, (5) Gunakan ND filter atau redupkan lampu jika gambar terlalu terang.",
      },
    ],
    video: {
      title: "Mastering Segitiga Eksposur & 180-Degree Shutter Rule untuk Video",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Simak demonstrasi perbandingan motion blur pada shutter 1/50s vs 1/1000s dan cara membaca False Color secara realtime.",
    },
    gamePairs: [
      { id: 1, left: "Aperture f/1.4", right: "Bukaan diafragma sangat besar, cahaya melimpah, dan latar bokeh tebal" },
      { id: 2, left: "180° Shutter Rule", right: "Kecepatan rana 1 / (2 x FPS) untuk motion blur sinematik alami" },
      { id: 3, left: "Grey Card 18%", right: "Alat kalibrasi pantulan cahaya standar untuk mengunci Custom White Balance" },
      { id: 4, left: "Waveform 70 IRE", right: "Tingkat luminansi standar highlight kulit manusia (skin tone)" },
      { id: 5, left: "Filter ND", right: "Menurunkan intensitas cahaya terik matahari tanpa merusak warna gambar" },
    ],
    caseTitle: "Masalah Overexposure & Flicker pada Syuting FTV di Aula Sekolah",
    caseScenario:
      "Sebuah kelompok siswa SMK syuting adegan drama di aula sekolah yang diterangi lampu LED murah berfrekuensi 50 Hz. Karena ingin wajah pemeran utama memiliki latar belakang blur dramatis, kameramen menyetel lensa pada f/1.8 dan menaikkan shutter speed ke 1/500 detik untuk menurunkan cahaya siang yang masuk dari jendela. Ketika hasil rekaman diputar di komputer editor, video berkedip-kedip garis hitam berjalan (flicker) parah dan gerakan talent tampak kaku patah-patah.",
    caseInstruction:
      "Identifikasi dua kesalahan fatal juru kamera dalam segitiga eksposur. Jelaskan bagaimana penerapan 180-degree shutter rule dan penggunaan filter ND variabel dapat menyelesaikan masalah tersebut secara profesional.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Fungsi utama dari filter Neutral Density (ND) pada perekaman video luar ruangan yang sangat terang adalah...",
        options: [
          { key: "A", text: "Menambah saturasi warna daun pohon menjadi lebih hijau pekat" },
          { key: "B", text: "Mengurangi intensitas cahaya yang masuk ke lensa agar juru kamera dapat mempertahankan aperture lebar dan shutter speed 1/50 detik" },
          { key: "C", text: "Mencegah debu pasir menempel pada bodi kamera" },
          { key: "D", text: "Mengubah suhu warna lampu tungsten menjadi daylight" },
        ],
        correctKey: "B",
        explanation: "ND filter meredam cahaya seperti kacamata hitam, sehingga eksposur tetap seimbang tanpa harus menaikkan shutter speed atau menutup aperture yang merusak efek blur.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Jika Anda memproduksi video pada kecepatan 50 frame per detik (50 fps) untuk adegan gerakan lambat (slow motion) yang mulus, pengaturan Shutter Speed yang wajib dipasang adalah...",
        options: [
          { key: "A", text: "1/25 detik" },
          { key: "B", text: "1/50 detik" },
          { key: "C", text: "1/100 detik" },
          { key: "D", text: "1/500 detik" },
        ],
        correctKey: "C",
        explanation: "Sesuai rumus 180 derajat: Shutter Speed = 1 / (2 x 50 fps) = 1/100 detik.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Ketika membaca monitor False Color, bagian dahi dan pipi presenter berita tampak berwarna merah muda (pink) dan hijau terang. Hal ini mengindikasikan bahwa...",
        options: [
          { key: "A", text: "Sensor kamera mengalami kerusakan sensor warna" },
          { key: "B", text: "Eksposur pada warna kulit wajah presenter berada pada rentang ideal (sekitar 60-70 IRE)" },
          { key: "C", text: "Wajah presenter mengalami overexposure clipping terbakar parah" },
          { key: "D", text: "Kamera salah mengenali white balance" },
        ],
        correctKey: "B",
        explanation: "Pada pemetaan standar False Color, warna pink dan hijau merepresentasikan rentang luminansi 55-70 IRE yang merupakan level pencahayaan sempurna untuk warna kulit manusia.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Bandingkan rekaman video menggunakan profil warna standar Rec.709 dengan profil S-Log3 pada pemandangan matahari terbenam (sunset)! Mengapa videografer profesional lebih memilih merekam dalam S-Log3?",
        options: [
          { key: "A", text: "Karena profil Rec.709 langsung membuat video terhapus dari memori" },
          { key: "B", text: "Karena S-Log3 mempertahankan rentang dinamis luas (dynamic range), mencegah langit clipping putih dan mempertahankan detail bayangan tanah yang gelap untuk digrading nanti" },
          { key: "C", text: "Karena S-Log3 tidak membutuhkan kartu memori berkecepatan tinggi" },
          { key: "D", text: "Karena Rec.709 menghasilkan warna hitam putih kuno" },
        ],
        correctKey: "B",
        explanation: "Format kurva logaritmik (Log) mengompresi rentang dinamis ekstrem hingga 14-15 stops, sehingga gradasi awan senja dan detail bayangan di bumi terekam utuh tanpa pecah.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Susunlah alur kerja (workflow) penguncian eksposur yang sistematis bagi juru kamera video saat berpindah dari dalam studio berlampu tungsten ke halaman sekolah di bawah sinar terik matahari!",
        options: [
          { key: "A", text: "Langsung menekan tombol rekam dan membiarkan kamera menyesuaikan eksposur secara otomatis" },
          { key: "B", text: "Matikan kamera, ganti lensa zoom dengan lensa macro, dan pasang mikrofon shotgun" },
          { key: "C", text: "Ubah White Balance ke 5600K / kalibrasi grey card, pasang filter ND optik, kunci shutter pada 1/50s (25fps), pasang Base ISO 800, lalu sesuaikan aperture f-stop dibantu monitor Waveform/Zebra" },
          { key: "D", text: "Naikkan ISO ke 12.800 dan setel shutter speed ke 1/4000 detik tanpa filter" },
        ],
        correctKey: "C",
        explanation: "Langkah terstruktur meliputi kalibrasi temperatur warna matahari (5600K), pemasangan ND filter untuk meredam cahaya terik, penguncian shutter 180°, penetapan Base ISO, dan penyesuaian aperture berbasis instrumen ukur akurat.",
      },
    ],
    lkpd: {
      title: "LKPD E3-K2: Uji Eksperimental Segitiga Eksposur & Motion Blur Shutter Speed",
      objective: "Peserta didik mampu membuktikan secara empiris pengaruh variasi Aperture terhadap kedalaman ruang dan variasi Shutter Speed terhadap keburaman gerak (motion blur).",
      tools: ["Kamera Video Manual", "Lensa Zoom f/2.8 atau Prime f/1.8", "Tripod", "Grey Card 18%", "Filter ND", "Kipas Angin Berputar / Teman Berlari"],
      steps: [
        "Tempatkan subjek berdiri 2 meter di depan kamera, dengan latar belakang dedaunan pohon berjarak 5 meter.",
        "Eksperimen 1: Kunci shutter di 1/50s dan ISO 100. Rekam subjek pada f/1.8, f/4, dan f/16 (gunakan ND filter bila perlu). Catat perubahan blur latar belakang.",
        "Eksperimen 2: Rekam teman yang berlari melintasi frame dengan shutter speed berturut-turut: 1/25s, 1/50s, 1/250s, dan 1/1000s pada frame rate 25 fps.",
        "Amati hasil rekaman pada layar monitor komputer dan screenshot frame per frame saat kaki melayang.",
        "Buat laporan komparasi visual perbedaan ketajaman gerak dan bokeh.",
      ],
      outputFormat: "Kompilasi klip video MP4 1080p berdurasi 60 detik disertai grafik komparasi parameter teknis.",
    },
    journalQuestions: {
      q1: "Mengapa Anda tidak boleh mengandalkan insting mata semata saat menentukan apakah gambar sudah cukup terang di layar LCD kecil kamera?",
      q2: "Kapan Anda diperbolehkan secara kreatif melanggar 180-degree shutter rule dalam sebuah produksi film?",
      q3: "Tantangan apa yang paling Anda rasakan saat mencoba menyeimbangkan eksposur di bawah sinar matahari yang berubah-ubah karena tertutup awan?",
    },
    kktpIndicators: [
      "Mampu menerapkan rumus 180-degree shutter rule secara tepat pada berbagai frame rate video.",
      "Mampu mengendalikan variabel Depth of Field untuk menciptakan fokus isolasi dramatis (bokeh).",
      "Mampu menggunakan alat ukur eksposur Waveform, Zebra, dan False Color untuk mencegah clipping.",
    ],
  },

  // =========================================================================
  // KONTEN 3: e3-k3 - Pengoperasian Kamera Video & Pergerakan Kamera
  // =========================================================================
  {
    id: "e3-k3",
    order: 3,
    title: "Pengoperasian Kamera Video, Komposisi Visual, & Pergerakan Kamera Dinamis",
    shortTitle: "Tata Kamera & Komposisi",
    summary:
      "Standarisasi bahasa visual pertelevisian: jenis ukuran gambar (ELS hingga ECU), sudut pandang kamera (Bird Eye hingga Frog Eye), prinsip Rule of Thirds, headroom/noseroom, 180-degree line axis, serta teknik pergerakan kamera terencana (Pan, Tilt, Dolly, Truck, Crane, Pedestal).",
    kompetensi: [
      "Menguasai ragam ukuran gambar (Shot Sizes) dan implikasi psikologisnya terhadap emosi penonton.",
      "Menerapkan sudut kamera (Camera Angles) untuk merefleksikan relasi kuasa dan status karakter.",
      "Menerapkan aturan komposisi Rule of Thirds, Golden Ratio, Leading Lines, dan Headroom/Noseroom yang proporsional.",
      "Mengeksekusi pergerakan kamera (Camera Movements) menggunakan tripod fluid head, dolly, dan gimbal dengan mulus tanpa jeda sentakan.",
      "Mematuhi aturan 180-degree rule of action (crossing the line) untuk menjaga kontinuitas orientasi spasial penonton.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menyusun urutan shot (shot sequence) yang padu dan berkesinambungan secara visual.",
      "Peserta didik mampu mengkomposisikan subjek manusia dengan headroom, looking space, dan walking space yang tepat.",
      "Peserta didik mampu melakukan pergerakan kamera Pan, Tilt, dan Tracking shot dengan akselerasi dan deselerasi lembut.",
      "Peserta didik mampu mendeteksi dan mencegah terjadinya kesalahan fatal jumping the line 180 derajat dalam adegan dialog dua orang.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Dalam adegan percakapan dua orang, jika posisi kamera tiba-tiba melompat melintasi garis imajiner 180 derajat, mengapa penonton di bioskop merasa kedua tokoh tersebut saling membelakangi padahal mereka sedang berhadapan?",
    hookContext:
      "Garis imajiner (180-Degree Line of Action) menjaga orientasi spasial mata penonton. Menyeberang garis tersebut membalikkan arah tatap (eyeline) karakter di layar, membingungkan persepsi otak manusia terhadap lokasi subjek.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Sudut pengambilan gambar dari bawah subjek mengarah ke atas yang memberikan kesan subjek tampak berkuasa, agung, atau menakutkan disebut...",
        options: [
          { key: "A", text: "High Angle" },
          { key: "B", text: "Low Angle" },
          { key: "C", text: "Eye Level" },
          { key: "D", text: "Dutch Angle / Canted Angle" },
        ],
        correctKey: "B",
        explanation: "Low angle menempatkan kamera lebih rendah dari garis mata subjek, secara psikologis memperbesar figur subjek sehingga terlihat dominan dan perkasa.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Ruang kosong di depan hidung/mata subjek yang sedang menatap ke samping agar komposisi tidak terasa terbentur dinding frame disebut...",
        options: [
          { key: "A", text: "Headroom" },
          { key: "B", text: "Looking Space / Noseroom" },
          { key: "C", text: "Walking Space" },
          { key: "D", text: "Footroom" },
        ],
        correctKey: "B",
        explanation: "Looking space (noseroom) memberikan ruang bernafas ke arah pandang tatapan mata subjek sesuai prinsip psikologi persepsi visual.",
      },
    ],
    materialCards: [
      {
        title: "1. Bahasa Visual & Tata Bahasa Sinematik (Film Grammar)",
        content: "Kamera bukan sekadar alat rekam pasif, melainkan pena visual sutradara. Setiap keputusan ukuran shot, sudut kamera, dan pergerakan memiliki makna psikologis yang menuntun emosi, empati, dan fokus perhatian penonton.",
        caseStudy: "Perubahan shot dari Extreme Wide Shot pemandangan gurun ke Extreme Close-Up mata aktor yang berkeringat langsung mengubah mood dari keterasingan menjadi ketegangan personal.",
      },
      {
        title: "2. Spektrum Ukuran Gambar: Extreme Long Shot (ELS) & Very Long Shot (VLS)",
        content: "ELS / Extreme Wide Shot menampilkan lanskap megah di mana sosok manusia terlihat sangat kecil, berfungsi sebagai Establishing Shot untuk memperkenalkan lokasi, skala geografis, dan atmosfer cerita. VLS memperlihatkan subjek utuh dalam lingkungan sekitarnya.",
      },
      {
        title: "3. Spektrum Ukuran Gambar: Long Shot (LS) & Full Shot (FS)",
        content: "Long Shot (FS) menampilkan subjek dari ujung kepala hingga ujung kaki menyentuh batas bawah frame. Shot ini memfokuskan aksi fisik, kostum, dan postur gerak tubuh karakter dalam setting lingkungan tempat ia berpijak.",
      },
      {
        title: "4. Spektrum Ukuran Gambar: Medium Shot (MS) & Medium Long Shot (MLS / Knee Shot)",
        content: "MLS (Knee Shot / American Shot) memotong tubuh subjek dari atas lutut ke kepala (dipopulerkan film western untuk memperlihatkan sarung pistol di pinggang). Medium Shot (MS) memotong dari pinggang ke atas, merupakan ukuran standar untuk pembawa acara berita TV dan interaksi sosial normal.",
        didYouKnow: "American Shot diciptakan oleh sutradara film koboi klasik Hollywood agar senjata pistol revolver di pinggang aktor tetap masuk dalam bingkai gambar."
      },
      {
        title: "5. Spektrum Ukuran Gambar: Medium Close-Up (MCU) & Close-Up (CU)",
        content: "MCU memotong dari dada ke atas, sangat ideal untuk dialog intim dan wawancara mendalam karena mimik wajah terlihat jelas tanpa kehilangan konteks bahu. Close-Up (CU) memotong dari bahu ke atas, memfokuskan ekspresi emosional, tetesan air mata, atau tatapan mata karakter.",
      },
      {
        title: "6. Spektrum Ukuran Gambar: Big Close-Up (BCU) & Extreme Close-Up (ECU)",
        content: "Big Close-Up memotong dari dahi hingga dagu, memenuhi layar dengan wajah. Extreme Close-Up (ECU) mengisolasi bagian tubuh yang sangat spesifik (hanya pupil mata, bibir bergetar, jari menekan pelatuk, atau layar handphone) untuk dramatisasi tingkat tinggi.",
      },
      {
        title: "7. Sudut Pandang Kamera (Camera Angles): Eye Level & Neutral",
        content: "Eye Level menempatkan lensa sejajar tepat dengan ketinggian garis mata subjek (150-165 cm dari lantai). Memberikan sudut pandang obyektif, netral, realistis, dan setara tanpa manipulasi status emosional.",
      },
      {
        title: "8. Sudut Pandang Kamera: Low Angle vs High Angle",
        content: "Low Angle (kamera menatap ke atas) memproyeksikan kekuatan, dominasi, wibawa, atau ancaman. High Angle (kamera menatap ke bawah) memproyeksikan kerentanan, ketidakberdayaan, kesepian, dan inferioritas karakter di hadapan takdir.",
        caseStudy: "Dalam film superhero, tokoh pahlawan selalu direkam dengan Low Angle saat mendarat, sedangkan tokoh penjahat yang kalah direkam dengan High Angle dari atas.",
      },
      {
        title: "9. Sudut Pandang Ekstrem: Bird's Eye View & Frog Eye Level",
        content: "Bird's Eye View (Top-Down Shot) merekam tegak lurus 90 derajat dari langit menyerupai peta arsitektural. Frog Eye meletakkan kamera menempel di atas tanah menyerupai mata katak, menghasilkan perspektif distorsi dramatis terhadap langkah kaki manusia.",
      },
      {
        title: "10. Dutch Angle / Canted Angle: Ketidakstabilan Jiwa",
        content: "Dutch Angle memiringkan horizon kamera sebesar 15 hingga 45 derajat. Digunakan dalam adegan horor, thriller psikologis, atau kekacauan perang untuk mengomunikasikan kegilaan, disorientasi batin, atau bahaya yang sedang mengintai.",
        didYouKnow: "Istilah 'Dutch Angle' sebenarnya berasal dari kata 'Deutsch Angle' karena pertama kali dipopulerkan oleh sineas ekspresionisme Jerman pada era 1920-an."
      },
      {
        title: "11. Komposisi Visual: Rule of Thirds & Titik Pusat Perhatian",
        content: "Layar dibagi menjadi 9 kotak sama besar oleh dua garis horizontal dan dua garis vertikal imajiner. Menempatkan mata subjek atau elemen penting pada titik potong garis (power points) menghasilkan komposisi yang jauh lebih dinamis dan menyenangkan daripada menempatkannya di tengah mati (dead center).",
      },
      {
        title: "12. Komposisi Ruang: Headroom yang Seimbang",
        content: "Headroom adalah jarak antara puncak kepala subjek dengan batas atas bingkai (frame top). Terlalu banyak headroom membuat subjek tampak tenggelam di bawah layar, sedangkan terlalu sedikit headroom memenggal kepala secara tidak wajar (kecuali pada Extreme Close-Up yang disengaja).",
      },
      {
        title: "13. Komposisi Arah: Noseroom (Looking Space) & Walking Space",
        content: "Ketika subjek menatap ke arah kanan frame, subjek harus ditempatkan di sisi kiri frame agar ada 2/3 ruang kosong di depan arah pandangnya (noseroom). Saat subjek berjalan ke depan, sediakan walking space di depannya agar subjek tidak terlihat menabrak tepi bingkai kamera.",
      },
      {
        title: "14. Garis Penuntun Mata (Leading Lines) & Kedalaman Ruang (Framing in Frame)",
        content: "Leading lines memanfaatkan elemen arsitektur seperti koridor jalan, rel kereta, deretan pilar, atau pagar untuk memandu mata penonton menuju subjek utama. Framing in Frame memanfaatkan jendela, pintu, atau ranting pohon sebagai bingkai alami di dalam bingkai video.",
      },
      {
        title: "15. Pergerakan Kamera Statis: Pan (Panorama) & Tilt",
        content: "Panning adalah gerakan kepala kamera berputar horizontal ke kiri (Pan Left) atau ke kanan (Pan Right) pada poros tripod statis. Tilting adalah gerakan kepala kamera mengangguk vertikal ke atas (Tilt Up) atau ke bawah (Tilt Down). Kuncinya adalah akselerasi lembut di awal dan deselerasi di akhir tanpa sentakan.",
      },
      {
        title: "16. Pergerakan Kamera Dinamis: Dolly & Tracking (Truck)",
        content: "Dolly In adalah gerakan seluruh unit kamera mendekati subjek secara fisik di atas roda/rel (bukan zoom optik lensa). Dolly Out menjauhi subjek. Truck / Tracking Shot menggerakkan kamera sejajar menyamping mengikuti subjek yang sedang berjalan ke kiri atau kanan.",
        caseStudy: "Dolly in secara fisik memberikan perubahan paralaks ruang latar belakang, sedangkan Zoom lensa hanya memperbesar piksel tanpa mengubah hubungan spasial antara subjek dan background.",
      },
      {
        title: "17. Pergerakan Kamera Vertikal: Pedestal vs Jib / Boom Shot",
        content: "Pedestal Up/Down menggerakkan seluruh bodi kamera naik atau turun secara vertikal tegak lurus pada kolom hidrolik studio. Jib / Crane mengayunkan kamera membentuk busur melengkung dari ketinggian lantai hingga melewati kepala kru.",
      },
      {
        title: "18. Efek Vertigo: Dolly Zoom (Zolly / Hitchcock Shot)",
        content: "Diciptakan oleh Alfred Hitchcock dalam film 'Vertigo' (1958). Dilakukan dengan menggerakkan kamera Dolly In mendekat sambil secara bersamaan memutar lensa Zoom Out (atau sebaliknya). Hasilnya: ukuran subjek tetap sama persis di layar, tetapi latar belakang tampak mengembang memanjang atau tertekan secara mengejutkan.",
      },
      {
        title: "19. Aturan 180 Derajat (The 180-Degree Rule / Axis of Action)",
        content: "Tarik garis imajiner antara dua karakter yang sedang berbicara. Semua kamera harus berada di satu sisi garis yang sama (setengah lingkaran 180 derajat). Jika kamera menyeberangi garis tersebut (Crossing the Line), arah pandang mata (eyeline) karakter akan terbalik, membuat mereka tampak menatap ke arah yang sama bukan saling tatap.",
      },
      {
        title: "20. Pro-Tips: Sikap Tubuh & Ergonomi Operasional Juru Kamera",
        content: "Juru kamera profesional tidak mengunci lutut secara kaku. Tekuk sedikit kedua lutut, gunakan pinggang sebagai sumbu putar (bukan lengan), pertahankan pernapasan diafragma yang tenang, dan selalu gunakan kedua tangan memegang pan handle dengan resistensi drag cairan tripod yang telah dikalibrasi.",
      },
    ],
    video: {
      title: "Mastering Pergerakan Kamera Sinematik & Aturan Garis 180 Derajat",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari visualisasi animasi garis aksi 180 derajat dan cara transisi shot menyeberangi garis menggunakan neutral cutaway.",
    },
    gamePairs: [
      { id: 1, left: "Extreme Close-Up", right: "Mengisolasi detail sangat spesifik seperti mata atau jari pelatuk" },
      { id: 2, left: "Low Angle", right: "Sudut bawah ke atas yang memberikan kesan agung, berkuasa, atau mengancam" },
      { id: 3, left: "Dolly In", right: "Menggerakkan seluruh bodi kamera secara fisik mendekati subjek di atas rel" },
      { id: 4, left: "Dutch Angle", right: "Memiringkan sudut horizon frame untuk efek disorientasi psikologis" },
      { id: 5, left: "180° Axis Rule", right: "Menjaga eyeline konsisten agar dua tokoh tidak terlihat saling membelakangi" },
    ],
    caseTitle: "Kesalahan Fatal Eyeline & Garis Aksi pada Adegan Debat OSIS",
    caseScenario:
      "Dalam liputan video multi-kamera acara Debat Ketua OSIS, Kamera 1 ditempatkan di sisi kanan panggung merekam Calon A, sedangkan Kamera 2 dipasang di sisi kiri panggung merekam Calon B (menyeberangi garis tengah panggung). Saat tayangan ditayangkan di proyektor aula, penonton bingung karena kedua calon yang sedang berdebat tampak sama-sama menatap ke arah kanan layar, seolah-olah tidak sedang berhadapan satu sama lain.",
    caseInstruction:
      "Gambarkan sketsa sumbu aksi (Axis of Action) yang benar di studio/panggung tersebut. Tentukan posisi penempatan Kamera 1 dan Kamera 2 yang mematuhi aturan 180 derajat tanpa merusak kesinambungan arah tatapan mata (eyeline match).",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Perbedaan mendasar antara pergerakan kamera Zoom In dengan Dolly In adalah...",
        options: [
          { key: "A", text: "Zoom In mengubah focal length lensa secara optik dari posisi diam, sedangkan Dolly In menggerakkan seluruh bodi kamera secara fisik mendekati subjek sehingga terjadi pergeseran paralaks ruang" },
          { key: "B", text: "Zoom In hanya bisa dilakukan pada malam hari, sedangkan Dolly In pada siang hari" },
          { key: "C", text: "Zoom In membutuhkan rel roda, sedangkan Dolly In tidak membutuhkan alat apapun" },
          { key: "D", text: "Keduanya sama sekali tidak memiliki perbedaan visual" },
        ],
        correctKey: "A",
        explanation: "Zoom hanya memperbesar elemen gambar tanpa mengubah kedalaman perspektif ruang (flat), sementara Dolly In mengubah perspektif fisik relatif antara objek depan dan latar belakang (paralaks).",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Untuk menyampaikan pesan emosional bahwa seorang anak kecil merasa terintimidasi dan sangat ketakutan saat dimarahi oleh raksasa jahat, sudut kamera yang paling tepat untuk merekam anak kecil tersebut adalah...",
        options: [
          { key: "A", text: "Low Angle ekstrem dari lantai tanah" },
          { key: "B", text: "High Angle tajam dari atas menatap ke bawah ke arah anak tersebut" },
          { key: "C", text: "Dutch Angle sejajar lutut" },
          { key: "D", text: "Eye level horizontal biasa" },
        ],
        correctKey: "B",
        explanation: "High angle menempatkan kamera di atas subjek menatap ke bawah, secara psikologis mengecilkan sosok anak sehingga tampak tidak berdaya, tertekan, dan rentan.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Seorang kameramen menyusun frame Medium Shot presenter berita di luar ruangan, tetapi meletakkan dahi presenter tepat menempel di garis atas bingkai layar (tanpa sisa ruang). Kesalahan teknis ini disebut...",
        options: [
          { key: "A", text: "Terlalu banyak noseroom" },
          { key: "B", text: "Headroom negatif / pemenggalan kepala yang tidak proporsional" },
          { key: "C", text: "Walking space berlebih" },
          { key: "D", text: "Kesalahan garis aksi 180 derajat" },
        ],
        correctKey: "B",
        explanation: "Headroom wajib menyisakan ruang proporsional antara ujung rambut dan tepi atas layar (sekitar 10-15% tinggi frame) agar presenter tidak terlihat sesak atau terpotong kepalanya.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Kapan seorang sutradara secara sengaja diperbolehkan menyeberangi garis aksi 180 derajat (crossing the line) dalam sebuah film tanpa memicu kebingungan penonton?",
        options: [
          { key: "A", text: "Kapan pun juru kamera merasa lelah berdiri di satu sisi" },
          { key: "B", text: "Ketika kamera bergerak kontinu secara dinamis memutari kedua subjek melintasi garis dalam satu kesatuan take shot (continuous shot) atau disisipi cutaway netral di tengah sumbu" },
          { key: "C", text: "Hanya saat syuting di bawah air" },
          { key: "D", text: "Sama sekali tidak pernah diperbolehkan dalam kondisi apapun" },
        ],
        correctKey: "B",
        explanation: "Jika kamera diperlihatkan secara fisik bergerak melintasi garis (misal tracking orbit 360°), atau diselingi shot netral tepat di garis sumbu (misal POV atau frontal close up), penonton memahami perpindahan orientasi ruang secara logis.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah sebuah urutan shot (shot list) berisikan 5 shot pembuka untuk video profil sekolah yang memadukan variasi ukuran shot dan pergerakan kamera dinamis!",
        options: [
          { key: "A", text: "Shot 1 s/d 5 semuanya Close Up wajah kepala sekolah diam selama 5 menit" },
          { key: "B", text: "Shot 1: ELS Drone menukik gedung sekolah; Shot 2: LS Pedestal Up gerbang utama; Shot 3: MS Pan Right siswa berjalan di selasar; Shot 4: MCU Eye Level siswa tersenyum di lab komputer; Shot 5: ECU jari mengetik di keyboard" },
          { key: "C", text: "Shot 1 s/d 5 kamera digoyang-goyangkan cepat tanpa tripod" },
          { key: "D", text: "Hanya merekam papan nama sekolah dengan foto statis" },
        ],
        correctKey: "B",
        explanation: "Pola shot sequence standar bergerak progresif dari orientasi umum (Establishing ELS/LS) menuju interaksi dinamis (MS) hingga koneksi emosional personal dan detail (MCU dan ECU) dengan pergerakan kamera variatif yang tertata rapi.",
      },
    ],
    lkpd: {
      title: "LKPD E3-K3: Praktik Eksekusi 7 Shot Sizes & Pergerakan Kamera Tripod Fluid Head",
      objective: "Peserta didik mampu membidik 7 tingkatan ukuran gambar standar (ELS hingga ECU) serta mengeksekusi gerakan Pan dan Tilt yang halus tanpa getaran.",
      tools: ["Kamera Video / Mirrorless", "Tripod Fluid Head Profesional", "Talent Aktor Siswa", "Clapperboard"],
      steps: [
        "Pasang kamera pada tripod fluid head dan pastikan waterpass bubble level berada tepat di tengah lingkaran hijau.",
        "Atur drag friction pan dan tilt pada tingkat resistensi sedang.",
        "Ambil rekaman berturut-turut pada subjek yang sama: (1) ELS lingkungan sekolah, (2) FS seluruh tubuh, (3) MS pinggang ke atas, (4) MCU dada ke atas dengan noseroom yang benar, (5) CU bahu ke atas, (6) ECU mata talent.",
        "Lakukan gerakan Pan Left 90 derajat dengan kecepatan konstan selama 5 detik, berhenti di subjek tepat pada garis Rule of Thirds.",
        "Lakukan gerakan Tilt Down dari pucuk pohon ke wajah talent dengan awalan dan akhiran yang mulus (smooth ease-in and ease-out).",
      ],
      outputFormat: "Video kompilasi 7 shot ukuran gambar dan 2 pergerakan kamera berdurasi 45 detik format MP4 Full HD.",
    },
    journalQuestions: {
      q1: "Mengapa gerakan kamera yang tanpa tujuan cerita justru membuat penonton pusing dan lelah?",
      q2: "Bagaimana cara Anda melatih kestabilan tangan dan pernapasan saat harus melakukan panning halus mengikuti objek bergerak?",
      q3: "Pelajaran apa yang Anda dapatkan mengenai pentingnya menjaga garis imajiner 180 derajat saat syuting adegan interaksi antar manusia?",
    },
    kktpIndicators: [
      "Mampu mendemonstrasikan 7 tingkatan ukuran shot standar pertelevisian secara presisi.",
      "Mampu mengomposisikan objek visual mematuhi kaidah Rule of Thirds, Headroom, dan Noseroom.",
      "Mampu mengoperasikan tripod fluid head untuk gerakan Pan dan Tilt tanpa sentakan mekanik.",
    ],
  },

  // =========================================================================
  // KONTEN 4: e3-k4 - Dasar Tata Cahaya (3-Point Lighting & Color Temperature)
  // =========================================================================
  {
    id: "e3-k4",
    order: 4,
    title: "Dasar Tata Cahaya Televisi: 3-Point Lighting, Rasio Kontras, & Karakter Cahaya",
    shortTitle: "Dasar Tata Cahaya",
    summary:
      "Fondasi pencahayaan studio dan sinema: fungsi Key Light, Fill Light, dan Back Light (Hair/Rim Light), konsep Hard Light vs Soft Light, hukum Inverse Square Law, modifikator cahaya (softbox, diffuser, grid, reflector), serta keselamatan kelistrikan K3 di set studio.",
    kompetensi: [
      "Menguasai fungsi dan konfigurasi sudut 3-Point Lighting pada wawancara studio dan dramatisasi film.",
      "Membedakan karakteristik Hard Light (bayangan tajam) vs Soft Light (gradasi lembut) serta penggunaannya.",
      "Menerapkan modifikator cahaya: softbox, grid eggcrate, scrim, c-47, barn doors, dan bounce board.",
      "Menghitung rasio pencahayaan (Lighting Ratio 2:1, 4:1, 8:1) untuk menentukan kontras suasana adegan.",
      "Menerapkan SOP keselamatan K3 tata cahaya: sarung tangan tahan panas, safety chain, sandbag, dan load balance daya watt listrik.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu merancang tata letak (lighting plot) 3-Point Lighting pada wawancara studio televisi.",
      "Peserta didik mampu mengubah karakter cahaya keras menjadi cahaya lembut menggunakan difusi berukuran besar.",
      "Peserta didik mampu menyetel perbandingan intensitas Key terhadap Fill menggunakan lightmeter atau monitor False Color.",
      "Peserta didik mampu menerapkan protokol K3 pemasangan lampu gantung dan kabel bervoltase tinggi di studio.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Jika Anda menyalakan lampu studio berkekuatan 1000 Watt langsung ke wajah presenter tanpa kain peredam (softbox), mengapa presenter tampak tua dengan kantung mata hitam tebal dan dahi berminyak silau?",
    hookContext:
      "Lampu telanjang (bare bulb) memancarkan Hard Light dengan sumber titik kecil. Cahaya keras menekankan tekstur pori-pori kulit, kerutan, dan menciptakan bayangan gelap pekat di bawah hidung dan kantung mata.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Lampu dalam skema 3-Point Lighting yang ditempatkan di belakang talent menghadap ke arah kamera untuk menciptakan garis pemisah berkilau pada rambut dan bahu disebut...",
        options: [
          { key: "A", text: "Key Light" },
          { key: "B", text: "Fill Light" },
          { key: "C", text: "Back Light / Hair Light / Rim Light" },
          { key: "D", text: "Practicals Light" },
        ],
        correctKey: "C",
        explanation: "Back Light / Hair Light memisahkan subjek dari latar belakang yang gelap dengan menciptakan garis tepi cahaya (rim highlight) pada bahu dan mahkota rambut.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Aksesori penutup lampu berbentuk 4 bilah logam hitam yang dapat dibuka-tutup untuk membatasi arah tumpahan cahaya disebut...",
        options: [
          { key: "A", text: "Barn Doors" },
          { key: "B", text: "Softbox" },
          { key: "C", text: "Snoot" },
          { key: "D", text: "Gobo" },
        ],
        correctKey: "A",
        explanation: "Barn doors dipasang di depan lampu fresnel atau LED panel untuk mengontrol dan memotong tumpahan cahaya agar tidak menyinari area yang tidak diinginkan.",
      },
    ],
    materialCards: [
      {
        title: "1. Hakikat Pencahayaan: Menyinari vs Membentuk Dimensi",
        content: "Tata cahaya bukan sekadar membuat objek terlihat terang di kamera, melainkan memahat dimensi tiga dimensi (3D) pada layar datar dua dimensi (2D). Cahaya menciptakan ilusi kedalaman, memisahkan lapisan latar depan dan belakang, serta membangun atmosfer emosional penonton.",
        caseStudy: "Pencahayaan datar dari depan (flat lighting) membuat wajah aktor tampak lebar seperti kartun tanpa struktur tulang pipi yang tegas.",
      },
      {
        title: "2. Tiga Pilar Klasik: Konsep 3-Point Lighting",
        content: "Formula universal pencahayaan subjek manusia yang terdiri dari: (1) Key Light (cahaya utama pembentuk karakter wajah), (2) Fill Light (cahaya pengisi pelembut bayangan kontras), dan (3) Back Light / Hair Light (cahaya pemisah subjek dari latar belakang).",
      },
      {
        title: "3. Anatomi Key Light: Sudut dan Penempatan",
        content: "Key Light umumnya ditempatkan pada sudut 30 hingga 45 derajat di samping sumbu kamera dan ditinggikan 30-45 derajat di atas garis mata subjek. Penempatan ini meniru arah datangnya sinar matahari alami dan membentuk bayangan segitiga kecil di bawah mata (Rembrandt Lighting).",
        didYouKnow: "Rembrandt Lighting dinamai dari pelukis legendaris Belanda abad ke-17 yang memelopori lukisan potret bercahaya segitiga dramatis di pipi subjek."
      },
      {
        title: "4. Anatomi Fill Light: Mengontrol Kontras Bayangan",
        content: "Fill Light diletakkan di sisi berlawanan dari Key Light pada sudut sekitar 30-45 derajat dekat dengan kamera. Fungsinya bukan untuk menciptakan bayangan baru, melainkan menerangi dan membuka detail gelap bayangan yang diciptakan oleh Key Light sesuai rasio yang diinginkan.",
      },
      {
        title: "5. Anatomi Back Light (Hair Light / Rim Light)",
        content: "Back Light ditempatkan tinggi di belakang subjek mengarah ke rambut dan pundak. Menghasilkan garis tepi tipis (rim light) yang memotong siluet tubuh dari latar belakang gelap, memberikan ilusi kedalaman ruang 3D yang sangat memukau di layar kaca.",
      },
      {
        title: "6. Lampu Keempat: Background Light (Set Light)",
        content: "Dalam studio televisi profesional, sering ditambahkan lampu ke-4 yaitu Background Light. Lampu ini menerangi dinding dekorasi set studio, poster, atau menambahkan pola grafis tekstur menggunakan kepingan pola bayangan (Gobo) agar latar tidak terlihat hampa hitam.",
      },
      {
        title: "7. Kualitas Cahaya: Hard Light (Cahaya Keras)",
        content: "Hard Light dihasilkan oleh sumber cahaya berukuran kecil relatif terhadap subjek (misal: bohlam telanjang, matahari siang bolong tanpa awan, lampu fresnel spot). Menghasilkan bayangan bertepi sangat tajam, kontras tinggi, dan menegaskan tekstur permukaan kasar.",
        caseStudy: "Hard light sangat cocok untuk adegan film noir detektif interogasi di ruang gelap yang penuh ketegangan batin.",
      },
      {
        title: "8. Kualitas Cahaya: Soft Light (Cahaya Lembut)",
        content: "Soft Light dihasilkan oleh sumber cahaya berukuran fisik sangat besar relatif terhadap subjek (misal: softbox 120cm, payung fotografi raksasa, sinar matahari yang terbiaskan langit berawan tebal). Menghasilkan transisi gradasi bayangan yang sangat halus dan melembutkan kulit wajah.",
      },
      {
        title: "9. Hukum Fisika Cahaya: Hubungan Ukuran Sumber dan Jarak",
        content: "Kunci kelembutan cahaya terletak pada ukuran sumber cahaya relatif dari perspektif subjek. Semakin besar ukuran sumber cahaya dan semakin dekat lampu diletakkan ke wajah subjek, semakin lembut (softer) cahaya yang menyelimuti subjek tersebut.",
        didYouKnow: "Matahari berdiameter 1,4 juta kilometer, tetapi karena berjarak 150 juta km dari bumi, matahari menjadi sumber titik kecil yang menghasilkan cahaya sangat keras (Hard Light)."
      },
      {
        title: "10. Hukum Kuadrat Terbalik (Inverse Square Law)",
        content: "Intensitas cahaya berbanding terbalik dengan kuadrat jaraknya dari sumber (I = 1 / d²). Jika Anda menggandakan jarak lampu dari 1 meter menjadi 2 meter, intensitas cahaya yang diterima subjek bukan berkurang separuh (50%), melainkan anjlok menjadi seperempatnya (25% / turun 2 stop).",
      },
      {
        title: "11. Rasio Pencahayaan (Lighting Ratio) & Suasana Drama",
        content: "Lighting Ratio adalah perbandingan intensitas Key + Fill terhadap Fill saja. Rasio 2:1 (High Key) menghasilkan bayangan sangat tipis, cocok untuk program berita, sitkom, dan iklan kecantikan. Rasio 8:1 atau 16:1 (Low Key) menghasilkan bayangan gelap pekat dramatis untuk film horor dan thriller misteri.",
      },
      {
        title: "12. Modifikator Cahaya: Softbox, Octabox, & Lantern",
        content: "Softbox mengarahkan cahaya maju melalui lembaran kain diffuser putih ganda. Octabox (bentuk heksagonal/bulat) menghasilkan pantulan lingkaran cahaya alami di pupil mata (catchlight). Lantern / China Ball memancarkan cahaya lembut omni-directional 360 derajat menerangi seluruh ruangan.",
      },
      {
        title: "13. Modifikator Pengarah: Eggcrate Grid & Barn Doors",
        content: "Eggcrate Grid (jaring sarang lebah kain) dipasang di depan softbox untuk mempersempit sudut pancaran cahaya (beam angle) dari 120° menjadi 40°. Mencegah cahaya lembut bocor (spill) mengenai dinding latar belakang studio yang gelap.",
      },
      {
        title: "14. Modifikator Pemantul: 5-in-1 Reflector & Foamcore (Bounce Board)",
        content: "Reflector adalah solusi pasif tanpa kabel listrik: Sisi Putih memberikan pantulan lembut netral; Sisi Perak (Silver) memantulkan cahaya kuat kontras tinggi; Sisi Emas (Gold) menghangatkan warna kulit; Sisi Hitam (Negative Fill) menyerap cahaya untuk memperdalam bayangan; Sisi Tembus Pandang (Translucent) berfungsi sebagai kain diffuser peneduh.",
      },
      {
        title: "15. Lampu Praktis (Practical Lights)",
        content: "Practical Light adalah sumber cahaya nyata yang terlihat di dalam set adegan cerita (misal: lampu meja belajar, lampu gantung cafe, lilin, atau lampu jalan). Lampu praktikal menambah realisme ruang dan menjadi alasan logis (motivated lighting) bagi arah datangnya lampu studio kru.",
      },
      {
        title: "16. Evaluasi Kualitas Lampu LED: Indeks CRI & TLCI",
        content: "Lampu LED murah untuk rumahan memiliki spektrum warna terputus yang merusak warna kulit manusia di kamera. Lampu studio profesional wajib memiliki nilai Color Rendering Index (CRI) > 95 dan Television Lighting Consistency Index (TLCI) > 96 agar warna kulit dan pakaian di layar TV tampak akurat 100%.",
      },
      {
        title: "17. Menggabungkan Temperatur Warna: Daylight (5600K) vs Tungsten (3200K)",
        content: "Mencampur dua suhu warna tanpa rencana matang menghasilkan warna kulit kusam kebiruan atau terlalu oranye. Lampu LED Bi-Color modern memungkinkan penyesuaian suhu warna instan dari 2700K hingga 6500K untuk menyamakan warna lampu ruangan yang ada.",
      },
      {
        title: "18. Standar Rigging Studio: C-Stand, Grip Arm, & Gobo Head",
        content: "Century Stand (C-Stand) dari baja kokoh dengan kaki turtle base dan pegangan gobo head adalah alat bantu wajib penata cahaya. Digunakan untuk menggantung boom mic, menahan bendera hitam (flag), atau menyangga lampu berat di atas subjek dengan aman.",
      },
      {
        title: "19. Protokol Keselamatan K3 Tata Cahaya di Studio",
        content: "Aturan mutlak kelistrikan studio: (1) Pasang Sandbag pemberat pada kaki terpanjang C-stand di bawah beban, (2) Pasang Rantai Baja Pengaman (Safety Cable) pada setiap lampu gantung di ceiling grid, (3) Selalu gunakan sarung tangan tahan panas (leather rigger gloves) saat menyentuh lampu panas, (4) Lakban kabel lantai (cable ramp/gaffer tape) agar kru tidak tersandung.",
      },
      {
        title: "20. POS Manajemen Beban Daya Listrik (Wattage Load Balancing)",
        content: "Sebelum menyalakan lampu studio berdaya besar (misal HMI atau Tungsten 2000W), gaffer wajib menghitung kapasitas sekring MCB listrik studio: Ampere = Watt / Voltase (220V). Beban total tidak boleh melebihi 80% dari kapasitas maksimal sirkuit listrik gedung untuk mencegah korsleting dan trip listrik padam mendadak.",
      },
    ],
    video: {
      title: "Masterclass 3-Point Lighting & Modifikator Cahaya Studio TV",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Perhatikan cara mengatur rasio pencahayaan Key dan Fill menggunakan grid softbox dan reflektor negatif.",
    },
    gamePairs: [
      { id: 1, left: "Key Light", right: "Cahaya utama pembentuk karakter dan bayangan primer pada wajah" },
      { id: 2, left: "Eggcrate Grid", right: "Mencegah tumpahan cahaya lembut menyebar ke dinding latar" },
      { id: 3, left: "Negative Fill", right: "Kain/papan hitam penyerap pantulan cahaya untuk memperdalam bayangan" },
      { id: 4, left: "Safety Chain", right: "Rantai pengaman baja penahan lampu gantung agar tidak jatuh menimpa kru" },
      { id: 5, left: "CRI > 95", right: "Standar rendering spektrum warna lampu LED berkualitas tinggi" },
    ],
    caseTitle: "Lampu Studio Roboh Menimpa Meja Presenter Berita",
    caseScenario:
      "Saat rekaman siaran warta berita sekolah berlangsung, seorang kameramen tersandung kabel listrik lampu Key Light yang melintang di lantai tanpa dilakban. Lampu LED seberat 8 kg yang dipasang di atas stand setinggi 2,5 meter berguncang dan tumbang menimpa meja presenter. Beruntung presenter sempat menghindar, namun lampu pecah total. Investigasi menunjukkan stand lampu tidak diberi sandbag pemberat dan kabel tidak diamankan menggunakan gaffer tape.",
    caseInstruction:
      "Evaluasi pelanggaran SOP K3 tata cahaya dalam insiden tersebut. Susun daftar periksa (safety checklist) wajib yang harus ditandatangani Gaffer dan Floor Director sebelum studio dinyalakan.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Tujuan utama memasang kain diffuser putih di depan lampu studio yang keras (hard light) adalah...",
        options: [
          { key: "A", text: "Mengubah warna cahaya dari putih menjadi kuning" },
          { key: "B", text: "Memperbesar ukuran efektif sumber cahaya sehingga bayangan di wajah menjadi lebih lembut dan halus" },
          { key: "C", text: "Menghemat konsumsi daya listrik lampu" },
          { key: "D", text: "Menaikkan suhu panas di sekitar presenter" },
        ],
        correctKey: "B",
        explanation: "Diffuser memperluas permukaan bidang pancar cahaya, mengubah sinar titik yang keras menjadi sinar bidang yang lembut dengan gradasi bayangan halus (Soft Light).",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Jika jarak antara lampu studio ke talent dijauhkan dari semula 1 meter menjadi 3 meter, menurut Hukum Kuadrat Terbalik (Inverse Square Law), intensitas cahaya yang mengenai talent akan berkurang menjadi...",
        options: [
          { key: "A", text: "1/3 kali semula" },
          { key: "B", text: "1/6 kali semula" },
          { key: "C", text: "1/9 kali semula" },
          { key: "D", text: "Sama persis seperti semula" },
        ],
        correctKey: "C",
        explanation: "Rumus Inverse Square Law: I = 1 / (d²). Pada jarak 3 meter, intensitas cahaya menjadi 1 / (3²) = 1/9 kali dari intensitas pada jarak 1 meter.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Untuk menciptakan suasana visual ceria, segar, dan optimis pada tayangan program talkshow pagi televisi, konsep tata cahaya yang paling tepat adalah...",
        options: [
          { key: "A", text: "Low Key Lighting dengan rasio kontras 16:1 berlatar gelap pekat" },
          { key: "B", text: "High Key Lighting dengan rasio kontras 2:1, bayangan lembut minim, dan latar studio terang merata" },
          { key: "C", text: "Hanya menggunakan satu lilin kecil di atas meja" },
          { key: "D", text: "Mematikan seluruh lampu dan menggunakan senter sorot" },
        ],
        correctKey: "B",
        explanation: "High key lighting memiliki rasio kontras rendah (2:1 atau 3:1), bayangan sangat transparan dan terang merata, identik dengan keceriaan, berita pagi, dan talkshow positif.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Ketika syuting wawancara di dalam ruangan kantor berdinding putih bersih, penata cahaya menyadari sisi gelap wajah talent terlalu terang akibat pantulan dinding putih. Alat dan teknik apa yang harus diterapkan?",
        options: [
          { key: "A", text: "Memasang reflektor perak memantulkan cahaya tambahan" },
          { key: "B", text: "Menerapkan teknik Negative Fill dengan menempatkan papan/kain hitam di sisi bayangan talent untuk menyerap pantulan cahaya liar dari dinding" },
          { key: "C", text: "Mengecat seluruh kantor menjadi warna merah" },
          { key: "D", text: "Mematikan lampu Key Light utama" },
        ],
        correctKey: "B",
        explanation: "Negative Fill menggunakan permukaan hitam pekat non-reflektif untuk menyerap pantulan cahaya yang tidak diinginkan dari dinding putih, sehingga bayangan pipi kembali kontras dan tajam berdimensi.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah denah tata letak pencahayaan (Lighting Plot) 3-Point Lighting beserta Background Light untuk setting studio presenter berita tunggal lengkap dengan sudut derajat dan modifikatornya!",
        options: [
          { key: "A", text: "Semua 4 lampu ditaruh bertumpuk persis di atas lensa kamera" },
          { key: "B", text: "Key Light LED 300W + Softbox 90cm sudut 45° kanan; Fill Light LED 150W + Diffuser sudut 45° kiri; Back Light Spot Fresnel 100W sudut 60° belakang atas; Background Light + Gobo mengarah ke backdrop set berita" },
          { key: "C", text: "Hanya menyalakan lampu plafon ruangan kantor" },
          { key: "D", text: "Lampu diarahkan langsung ke mata juru kamera" },
        ],
        correctKey: "B",
        explanation: "Konfigurasi terukur ini memenuhi standar industri TV: Key ber-softbox memahat wajah, Fill melembutkan kontras, Back Light memisahkan rambut dari background, dan Set Light menerangi dekorasi studio dengan artistik.",
      },
    ],
    lkpd: {
      title: "LKPD E3-K4: Eksperimen Setup 3-Point Lighting Studio & Pengukuran Rasio Kontras",
      objective: "Peserta didik mampu menata 3 unit lampu studio (Key, Fill, Back) dengan sudut pencahayaan yang presisi serta mengukur perbedaan rasio kontras 2:1 dan 4:1.",
      tools: ["3 Unit Lampu LED Studio", "Softbox 90cm dengan Grid", "Barndoors", "C-Stand & Sandbags", "Kamera & Monitor False Color", "Reflektor 5-in-1"],
      steps: [
        "Tempatkan subjek duduk di kursi tengah studio dengan jarak 2 meter dari dinding belakang.",
        "Pasang Key Light pada sudut 45 derajat di sisi kanan subjek dan naikkan stand 45 derajat di atas mata.",
        "Pasang Back Light di belakang kiri subjek mengarah ke bahu dan rambut talent. Nyalakan dan amati garis rim light yang terbentuk.",
        "Pasang Fill Light di sisi kiri kamera dengan intensitas 50% dari Key Light (Rasio 2:1).",
        "Ambil rekaman video 15 detik dan periksa tampilan False Color pada wajah talent.",
        "Matikan Fill Light dan ganti dengan kain hitam Negative Fill (Rasio Low Key). Catat perbedaan dramatisasi ekspresi wajah pada kedua rekaman.",
      ],
      outputFormat: "Foto denah lighting plot dari atas dan perbandingan video rekaman High Key vs Low Key format MP4.",
    },
    journalQuestions: {
      q1: "Mengapa profesi penata cahaya (Gaffer) sering disebut sebagai pemahat emosi visual dalam sebuah film?",
      q2: "Bagaimana Anda memastikan keselamatan rekan kru saat harus menangani kabel bervoltase tinggi dan lampu studio yang panas?",
      q3: "Mengapa pemahaman tentang temperatur warna (Kelvin) sangat penting ketika Anda memadukan lampu studio buatan dengan cahaya jendela luar?",
    },
    kktpIndicators: [
      "Mampu merancang dan mengeksekusi skema 3-Point Lighting secara presisi di studio.",
      "Mampu membedakan karakteristik Hard Light dan Soft Light serta cara memodifikasinya.",
      "Mampu menerapkan standar K3 kelistrikan, sandbag pengaman, dan safety chain lampu.",
    ],
  },

  // =========================================================================
  // KONTEN 5: e3-k5 - Dasar Tata Suara (Karakteristik Mic & Gain Staging)
  // =========================================================================
  {
    id: "e3-k5",
    order: 5,
    title: "Dasar Tata Suara Lapangan: Karakteristik Mikrofon, Polar Pattern, & Gain Staging",
    shortTitle: "Dasar Tata Suara",
    summary:
      "Penguasaan audio profesional: mic dinamis vs kondensor, polar pattern (omnidirectional, cardioid, super/hypercardioid), pengoperasian Boom Pole shotgun mic, lavalier wireless, gain staging presisi (-12 dB hingga -18 dBFS), serta penanganan noise angin dan kabel balanced XLR.",
    kompetensi: [
      "Mengidentifikasi perbedaan prinsip kerja transduser mikrofon Dinamis vs Kondensor (phantom power +48V).",
      "Memahami pola penangkapan suara (Polar Pattern) dan penggunaannya sesuai lingkungan akustik.",
      "Mengoperasikan mikrofon shotgun di atas Boom Pole dengan teknik cueing dan shockmount yang stabil.",
      "Memasang mikrofon lavalier clip-on tersembunyi tanpa noise gesekan baju (clothing rustle).",
      "Mengatur level rekaman audio (Gain Staging) standar broadcast pada kisaran -12 dBFS hingga -6 dBFS tanpa distorsi clipping.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu memilih mikrofon yang tepat untuk wawancara luar ruangan berisik vs ruang studio hening.",
      "Peserta didik mampu mengoperasikan boom pole tepat di atas kepala talent tanpa bocor masuk ke dalam frame kamera.",
      "Peserta didik mampu menyetel gain pada audio recorder eksternal untuk menghindari suara pecah atau berdesis (hiss).",
      "Peserta didik mampu menggunakan pelindung angin (foam windscreen, deadcat fur, blimp zeppelin) di lokasi outdoor.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Mengapa penonton film bioskop masih bisa memaklumi kualitas gambar video yang agak buram, tetapi akan langsung mematikan video jika suara audionya kresek-kresek, berdengung, atau tidak terdengar jelas?",
    hookContext:
      "Penelitian persepsi multimedia membuktikan bahwa kualitas audio menyumbang 50% hingga 70% dari pengalaman menonton. Otak manusia sangat sensitif terhadap distorsi suara dialog; audio yang buruk merusak fokus kognitif secara instan.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Tegangan listrik searah +48 Volt yang dialirkan melalui kabel XLR untuk menghidupkan sirkuit mikrofon kondensor studio disebut...",
        options: [
          { key: "A", text: "AC Power" },
          { key: "B", text: "Phantom Power (+48V)" },
          { key: "C", text: "Auxiliary Power" },
          { key: "D", text: "Inverter Power" },
        ],
        correctKey: "B",
        explanation: "Mikrofon kondensor membutuhkan daya listrik eksternal (+48V Phantom Power) untuk memuati pelat kapasitor kapsul dan memperkuat sinyal awal.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Rentang level puncak (peak level) audio dialog manusia yang ideal dan aman pada indikator meteran digital (dBFS) saat perekaman adalah...",
        options: [
          { key: "A", text: "0 dBFS hingga +6 dBFS" },
          { key: "B", text: "-12 dBFS hingga -6 dBFS (dengan rata-rata di -18 dBFS)" },
          { key: "C", text: "-40 dBFS hingga -30 dBFS" },
          { key: "D", text: "+10 dBFS konstan" },
        ],
        correctKey: "B",
        explanation: "Level rata-rata dialog dijaga di -18 dBFS hingga -12 dBFS dan puncak tidak boleh menyentuh 0 dBFS (merah) agar memiliki headroom aman dari distorsi digital clipping.",
      },
    ],
    materialCards: [
      {
        title: "1. Audio: Separuh Jiwa Sinema dan Penyiaran",
        content: "Suara membawa informasi dialog, emosi musik latar, dan realisme sound effect lingkungan (ambience). Dalam produksi televisi dan film, departemen tata suara bertugas menangkap dialog sebersih mungkin di lokasi syuting (production sound) bebas dari gaung dan kebisingan.",
        caseStudy: "Mengganti rekaman dialog yang rusak di studio pascaproduksi (ADR / Dubbing) membutuhkan biaya mahal dan sering kehilangan emosi spontan aktor di set.",
      },
      {
        title: "2. Klasifikasi Transduser: Mic Dinamis (Dynamic Microphone)",
        content: "Mikrofon dinamis menggunakan kumparan kawat bergerak (moving coil) yang menempel pada diafragma di dalam medan magnet permanen. Sangat tangguh terhadap benturan fisik, mampu menahan tekanan suara sangat keras (high SPL) tanpa distorsi, dan tidak membutuhkan daya listrik tambahan.",
        didYouKnow: "Shure SM58 adalah mikrofon dinamis paling legendaris di dunia yang tahan dijatuhkan dari panggung tanpa rusak sedikit pun."
      },
      {
        title: "3. Klasifikasi Transduser: Mic Kondensor (Condenser Microphone)",
        content: "Mikrofon kondensor menggunakan kapsul kapasitor berpelat ganda yang sangat sensitif dan berbobot ringan. Menghasilkan respon frekuensi lebar, detail frekuensi tinggi yang jernih, dan tanggapan transien instan. Memerlukan daya listrik Phantom Power +48V melalui kabel XLR.",
      },
      {
        title: "4. Pola Penangkapan Suara (Polar Patterns): Omnidirectional",
        content: "Pola Omnidirectional menangkap suara dari segala arah (360 derajat) secara merata. Sangat baik untuk merekam suara suasana lingkungan (ambience), namun mudah menangkap gaung ruangan jika digunakan di ruang bergema.",
      },
      {
        title: "5. Pola Penangkapan Suara: Cardioid & Supercardioid",
        content: "Pola Cardioid menangkap suara paling peka dari arah depan, meredam sisi samping, dan menolak total suara dari arah belakang (bentuk pola menyerupai jantung hati). Supercardioid dan Hypercardioid memiliki sudut penerimaan depan yang lebih sempit dengan sedikit sensitivitas di belakang.",
      },
      {
        title: "6. Pola Penangkapan Suara: Shotgun (Lobar / Interference Tube)",
        content: "Mikrofon Shotgun menggunakan tabung interferensi panjang berlubang di sekeliling kapsul. Gelombang suara dari samping saling meniadakan di dalam tabung, menghasilkan penangkapan directional yang sangat tajam dan fokus dari arah depan lurus.",
        caseStudy: "Shotgun mic sangat ideal untuk menjangkau suara dialog aktor dari jarak 1-2 meter di atas kepala tanpa mikrofon terlihat masuk ke dalam frame kamera.",
      },
      {
        title: "7. Mikrofon Kerah: Lavalier Clip-On (Wired vs Wireless)",
        content: "Lavalier (lav mic) adalah mikrofon kondensor miniatur yang dijepitkan pada pakaian talent (kerah kemeja atau dasi) sekitar 15-20 cm di bawah dagu. Sistem nirkabel (wireless transmitter bodypack & receiver) memberikan kebebasan gerak total bagi pembawa acara talkshow atau reporter lapangan.",
      },
      {
        title: "8. Teknik Pemasangan Lavalier Tersembunyi (Hidden Mic)",
        content: "Dalam film fiksi, mikrofon tidak boleh terlihat di layar. Boom operator menyembunyikan kapsul lavalier di balik kerah baju menggunakan moleskin tape, concealer cover karet, atau triangle tape agar tidak bergesekan dengan serat kain pakaian (clothing rustle noise).",
      },
      {
        title: "9. Pengoperasian Boom Pole: Sikap Tubuh & Ergonomi",
        content: "Boom pole serat karbon ringan dapat dipanjangkan hingga 3-5 meter. Posisi dasar Boom Operator: posisi H (kedua tangan di atas kepala membentuk huruf H) untuk jangkauan stabil. Boom pole digerakkan mengikuti mulut aktor yang sedang berbicara (cueing and panning).",
        didYouKnow: "Menjadi Boom Operator membutuhkan ketahanan fisik luar biasa karena harus mengangkat beban boom pole selama adegan syuting berlangsung 5-10 menit tanpa henti."
      },
      {
        title: "10. Posisi Penempatan Mic Shotgun: Overhead vs Underneath",
        content: "Penempatan terbaik adalah dari atas kepala (overhead) mengarah diagonal ke bawah menuju mulut aktor. Mengarahkan mic ke bawah memanfaatkan lantai sebagai penyerap suara dan meminimalkan kebisingan lalu lintas jalan raya yang berada di horizon horizontal.",
      },
      {
        title: "11. Pelindung Angin: Foam Windscreen vs Deadcat Fur & Blimp Zeppelin",
        content: "Busa spons (foam) hanya mampu menahan hembusan angin sepoi-sepoi dalam ruangan. Di luar ruangan berangin kencang, mikrofon shotgun wajib dimasukkan ke dalam keranjang Blimp Zeppelin berbahan plastik jaring dan diselimuti bulu lebat buatan (Deadcat / Wombat fur) untuk memecah turbulensi udara.",
      },
      {
        title: "12. Arsitektur Kabel Audio: Balanced XLR vs Unbalanced TRS 3.5mm",
        content: "Kabel balanced XLR memiliki 3 pin: Pin 1 Ground, Pin 2 Hot (+ sinyal), Pin 3 Cold (- sinyal terbalik). Sistem diferensial ini membatalkan interferensi radio (RFI) dan dengung listrik (hum) secara otomatis, memungkinkan penarikan kabel hingga 100 meter tanpa penurunan kualitas suara.",
      },
      {
        title: "13. Konsep Dasar Gain Staging & Headroom",
        content: "Gain Staging adalah proses penyesuaian level volume di setiap mata rantai audio (dari mikrofon, preamp, mixer, hingga ADC perekam) agar rasio sinyal terhadap desis (Signal-to-Noise Ratio - SNR) maksimal tanpa pernah melampaui batas distorsi (clipping).",
      },
      {
        title: "14. Perbedaan Desibel: dB Analog (VU) vs dBFS Digital",
        content: "Pada meteran VU analog lama, 0 VU adalah titik optimal dan memiliki toleransi headroom hingga +3 dB. Pada sistem digital (dBFS - Decibels Relative to Full Scale), 0 dBFS adalah batas absolut maksimum matematis. Melebihi 0 dBFS walau 0,001 detik akan memotong puncak gelombang (clipping cacat permanen).",
      },
      {
        title: "15. Menentukan Level Standar: Dialog, Ambience, & Headroom",
        content: "Standar industri pertelevisian: Level dialog rata-rata berada pada kisaran -18 dBFS hingga -12 dBFS. Teriakan atau tepuk tangan keras mencapai puncak maksimal di -6 dBFS. Ruang kosong 6 dB antara puncak dan 0 dBFS disebut Safety Headroom untuk mengantisipasi lonjakan suara tak terduga.",
      },
      {
        title: "16. Fitur Penyelamat: Safety Track & 32-Bit Float Recording",
        content: "Fitur Dual Recording merekam jalur kedua dengan level -6 dB lebih rendah sebagai cadangan jika jalur utama clipping. Teknologi modern 32-bit float recording merekam dengan rentang dinamis 1528 dB yang secara matematis mustahil mengalami clipping atau noise dasar, audio yang teriak over bisa dinormalkan utuh di software NLE.",
        caseStudy: "Perekam Zoom F3 atau DJI Mic 2 dengan 32-bit float menyelamatkan syuting adegan ledakan bom yang tidak dapat diulang.",
      },
      {
        title: "17. Fitur Filter: Low Cut / High Pass Filter (HPF)",
        content: "Filter Low Cut pada mixer memotong frekuensi rendah yang tidak dibutuhkan manusia (di bawah 80 Hz atau 100 Hz). Sangat ampuh menghilangkan dengung AC ruangan, suara gemuruh knalpot truk di jalan, dan getaran langkah kaki kru yang merambat melalui lantai ke stand mic.",
      },
      {
        title: "18. Rekaman Room Tone: Kewajiban Wajib Setiap Pindah Lokasi",
        content: "Sebelum meninggalkan set syuting, Sound Recordist wajib meminta seluruh kru hening total selama 60 detik untuk merekam 'Room Tone' (karakter kesunyian akustik ruangan). File room tone ini menjadi lem perekat yang disisipkan editor di antara potongan dialog agar tidak ada jeda hening digital yang janggal.",
      },
      {
        title: "19. Monitoring Audio Kritis: Headphone Studio Tertutup (Closed-Back)",
        content: "Sound Recordist dilarang keras menggunakan earphone TWS nirkabel (ada latensi jeda suara) atau headphone open-back. Wajib menggunakan headphone monitor studio tertutup (Closed-Back) seperti Sony MDR-7506 atau Audio-Technica ATH-M50x untuk mendengar desis, distorsi, dan suara bocor sekecil apa pun di lokasi syuting.",
      },
      {
        title: "20. POS Komunikasi Kru Suara di Set: Sound Speeds!",
        content: "Protokol panggilan baku sutradara: (1) Sutradara: 'Roll Sound!', (2) Sound Recordist menekan rekam dan memastikan timecode jalan: 'Sound Speeds!', (3) Asisten Sutradara: 'Roll Camera!', (4) Kameramen: 'Camera Rolling!', (5) Clapperboard dibunyikan: 'Scene 1 Take 1, CLAP!', (6) Sutradara: 'ACTION!'.",
      },
    ],
    video: {
      title: "Mastering Perekaman Audio Lapangan: Boom Mic, Lav, & Gain Staging",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari cara memegang boom pole tanpa kelelahan otot dan cara memasang lavalier mic tersembunyi dengan moleskin.",
    },
    gamePairs: [
      { id: 1, left: "Mic Shotgun", right: "Pola penangkapan suara directional sempit untuk boom overhead" },
      { id: 2, left: "Phantom Power (+48V)", right: "Daya listrik searah untuk mengaktifkan kapsul mikrofon kondensor" },
      { id: 3, left: "Deadcat / Wombat Fur", right: "Bulu peredam turbulensi angin kencang saat syuting luar ruangan" },
      { id: 4, left: "Room Tone", right: "Rekaman kesunyian ruangan 60 detik untuk kontinuitas editing audio" },
      { id: 5, left: "-12 dBFS s/d -6 dBFS", right: "Rentang level puncak aman sinyal audio dialog digital" },
    ],
    caseTitle: "Audio Kliping Hancur pada Liputan Konser Musik Akustik Sekolah",
    caseScenario:
      "Tim liputan broadcasting sekolah merekam pertunjukan musik festival band. Juru suara menghubungkan kabel mikrofon langsung ke bodi kamera mirrorless dan memutar kenop volume rekaman hingga level meteran terus-menerus mentok di 0 dBFS berwarna merah menyala. Ketika video diputar ulang, suara petikan gitar dan vokal penyanyi terdengar sangat renyek, pecah berderak (digital clipping), dan vokal tidak dapat dipulihkan sama sekali meskipun telah dicoba dibersihkan di software editing.",
    caseInstruction:
      "Jelaskan mengapa fenomena digital clipping pada 0 dBFS bersifat merusak data audio secara permanen. Rancang perbaikan teknik Gain Staging, penggunaan limiter, dan penempatan mikrofon yang seharusnya diterapkan.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Mengapa seorang Boom Operator selalu mengarahkan mikrofon shotgun dari atas kepala aktor mengarah ke bawah (overhead) dan bukan dari bawah mengarah ke atas?",
        options: [
          { key: "A", text: "Agar mikrofon tidak terlihat oleh penonton dan meminimalkan penangkapan kebisingan latar belakang jalan raya" },
          { key: "B", text: "Karena mikrofon shotgun tidak bisa menangkap suara jika dihadapkan ke atas" },
          { key: "C", text: "Agar rambut aktor tidak berantakan tertiup angin mikrofon" },
          { key: "D", text: "Hanya karena kebiasaan kru film luar negeri" },
        ],
        correctKey: "A",
        explanation: "Mengarahkan mic ke bawah memanfaatkan tanah/lantai sebagai penyerap akustik alami dan mengarahkan bagian belakang tabung mic yang menolak suara ke arah langit yang hening, bukan ke jalan raya bising.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Kabel audio profesional standar broadcast yang menggunakan tiga pin pengunci dan dirancang khusus untuk membatalkan sinyal interferensi gelombang elektromagnetik dan dengung adalah...",
        options: [
          { key: "A", text: "Kabel RCA jack merah-putih" },
          { key: "B", text: "Kabel Balanced XLR" },
          { key: "C", text: "Kabel Aux 3.5mm stereo tanpa ground" },
          { key: "D", text: "Kabel HDMI pasif" },
        ],
        correctKey: "B",
        explanation: "Kabel XLR seimbang (balanced) mengirimkan dua sinyal audio identik dengan fase terbalik (polaritas positif dan negatif). Saat sampai di preamp, interferensi noise dibatalkan secara otomatis (Common Mode Rejection).",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Ketika Sound Recordist memantau rekaman wawancara di dalam ruang kelas ber-AC, terdengar suara dengungan frekuensi rendah (low rumble) konstan dari kompresor AC. Tombol kontrol audio apa pada mixer yang paling efektif memotong dengung tersebut seketika?",
        options: [
          { key: "A", text: "High Cut Filter (Low Pass Filter)" },
          { key: "B", text: "Low Cut / High Pass Filter (HPF) pada frekuensi 80 Hz" },
          { key: "C", text: "Menaikkan fader Gain sebesar +20 dB" },
          { key: "D", text: "Mematikan headphone monitor" },
        ],
        correctKey: "B",
        explanation: "Low Cut Filter (High Pass Filter) memotong frekuensi dasar di bawah 80-100 Hz yang merupakan rentang frekuensi dengung AC, getaran motor listrik, dan hembusan nafas tanpa merusak vokal manusia.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Evaluasi risiko teknis jika juru suara merekam audio lapangan dengan level rata-rata terlalu rendah (misalnya hanya menyentuh -45 dBFS pada meter digital)!",
        options: [
          { key: "A", text: "Tidak ada risiko sama sekali karena digital selalu jernih" },
          { key: "B", text: "Saat audio dinaikkan (boost) di tahap pascaproduksi, desis elektronik (noise floor) dan preamp hiss akan ikut terangkat drastis sehingga suara menjadi sangat berisik dan kotor" },
          { key: "C", text: "Memori kartu rekaman akan menjadi cepat penuh" },
          { key: "D", text: "Speaker monitor komputer akan langsung meledak" },
        ],
        correctKey: "B",
        explanation: "Rekaman underexposed pada audio menyebabkan rasio sinyal terhadap noise buruk (low SNR). Menaikkan volume audio yang terekam terlalu pelan akan mengangkat desis kebisingan elektronik (noise floor) preamp.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah Standard Operating Procedure (SOP) rekaman audio dialog untuk syuting film fiksi eksterior di taman kota yang berangin cukup kencang!",
        options: [
          { key: "A", text: "Gunakan mikrofon bawaan internal kamera tanpa aksesoris pelindung apa pun" },
          { key: "B", text: "Gunakan mic shotgun di dalam Blimp Zeppelin berselimut deadcat fur, pasang mic lavalier dengan moleskin tersembunyi di balik baju aktor sebagai backup, aktifkan Low Cut 80Hz, lakukan sound check gain di -12 dBFS, dan rekam 60 detik room tone" },
          { key: "C", text: "Minta semua angin berhenti bertiup sebelum kamera merekam" },
          { key: "D", text: "Jangan merekam audio di lokasi, lakukan rekaman suara di rumah setelah syuting selesai" },
        ],
        correctKey: "B",
        explanation: "SOP profesional lengkap mencakup perlindungan fisik ganda terhadap terpaan angin (Zeppelin + fur), sistem backup mikrofon nirkabel, filtering frekuensi rendah, kalibrasi gain staging aman, dan perekaman kontinuitas room tone.",
      },
    ],
    lkpd: {
      title: "LKPD E3-K5: Perekaman Audio Lapangan & Kalibrasi Gain Staging Wawancara",
      objective: "Peserta didik mampu memasang mikrofon lavalier nirkabel, mengoperasikan boom pole shotgun mic, dan mengkalibrasi gain staging pada audio recorder terpisah.",
      tools: ["Audio Field Recorder (Zoom/Tascam)", "Mikrofon Shotgun & Boom Pole", "Shockmount & Blimp/Deadcat", "Wireless Lavalier Mic", "Headphone Closed-Back", "Kabel XLR"],
      steps: [
        "Koneksikan mikrofon shotgun ke Input 1 audio recorder menggunakan kabel XLR dan aktifkan Phantom Power +48V.",
        "Koneksikan receiver lavalier ke Input 2 recorder.",
        "Pasang lavalier pada dada talent sekitar 15 cm di bawah mulut menggunakan klip jepit.",
        "Posisikan boom operator memegang boom pole overhead 45 derajat berjarak 45 cm di atas kepala talent.",
        "Lakukan kalibrasi suara: minta talent berbicara lantang dan atur kenop gain input agar jarum peak meter memantul stabil di antara -18 dBFS hingga -12 dBFS.",
        "Ambil rekaman dialog selama 60 detik sambil mendengarkan detail audio melalui headphone tertutup.",
        "Lakukan perekaman 60 detik Room Tone suasana tanpa suara manusia.",
      ],
      outputFormat: "File audio WAV Broadcast (24-bit / 48 kHz) dua channel terpisah dan laporan log lembar audio.",
    },
    journalQuestions: {
      q1: "Mengapa headphone studio tertutup (closed-back) adalah instrumen keselamatan paling utama bagi seorang penata suara lapangan?",
      q2: "Tantangan apa yang paling sulit Anda atasi saat harus menyembunyikan mikrofon lavalier agar tidak menimbulkan suara gesekan baju?",
      q3: "Bagaimana Anda menjelaskan kepada sutradara bahwa sebuah adegan syuting harus diulang karena ada suara pesawat terbang melintas?",
    },
    kktpIndicators: [
      "Mampu mengoperasikan mikrofon shotgun dengan boom pole overhead secara stabil tanpa masuk frame.",
      "Mampu mengkalibrasi level gain staging audio pada standar -18 dBFS hingga -12 dBFS tanpa clipping.",
      "Mampu menerapkan SOP penanganan gangguan angin dan perekaman room tone di lokasi produksi.",
    ],
  },

  // =========================================================================
  // KONTEN 6: e3-k6 - Dasar Editing NLE & Manajemen File Proyek
  // =========================================================================
  {
    id: "e3-k6",
    order: 6,
    title: "Dasar Editing Video Non-Linear (NLE) & Manajemen Aset Proyek",
    shortTitle: "Dasar Editing NLE",
    summary:
      "Alur pascaproduksi digital: struktur folder master dan aturan penamaan aset (naming convention), konsep Non-Linear Editing (NLE), workspace timeline, teknik rough cut (J-Cut, L-Cut, Cut on Action), transisi match cut, sinkronisasi audio clapperboard, serta standar ekspor rendering master H.264/H.265 Rec.709.",
    kompetensi: [
      "Menerapkan manajemen file dan struktur folder terorganisir untuk proyek pascaproduksi berskala tim.",
      "Menguasai anatomi antarmuka software NLE (Premiere Pro / DaVinci Resolve): Source Monitor, Timeline, Program Monitor, Inspector.",
      "Menerapkan teknik pemotongan gambar dinamis: Cut on Action, J-Cut, L-Cut, Match Cut, dan Jump Cut disengaja.",
      "Melakukan sinkronisasi otomatis dan manual antara rekaman video kamera dengan rekaman audio berkualitas tinggi (Dual-System Sound).",
      "Mengkonfigurasi parameter rendering ekspor master: Codec H.264/ProRes, resolusi 1080p/4K, frame rate, dan audio AAC 320 kbps.",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menyusun struktur direktori folder proyek pengeditan yang rapi, aman, dan mudah dilacak.",
      "Peserta didik mampu melakukan pemotongan gambar kasar (Rough Cut) dari rangkaian naskah adegan secara logis.",
      "Peserta didik mampu menerapkan transisi audio split (J-Cut dan L-Cut) untuk menghasilkan dialog yang mengalir alami.",
      "Peserta didik mampu mengekspor video akhir dengan spesifikasi teknis penyiaran YouTube dan stasiun TV.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Jika Anda menghapus file video asli di kartu memori kamera setelah mengimpornya ke dalam software editing, mengapa seluruh video di timeline tiba-tiba berubah menjadi warna merah bertuliskan 'Media Offline'?",
    hookContext:
      "Software NLE modern bekerja secara Non-Destructive. Software tidak menyimpan video di dalam file project, melainkan hanya membuat tautan link referensi (pointer) ke file asli di hard drive komputer.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Teknik pemotongan sambungan di mana suara adegan berikutnya sudah terdengar terlebih dahulu sebelum visual gambarnya berganti di layar disebut...",
        options: [
          { key: "A", text: "L-Cut" },
          { key: "B", text: "J-Cut" },
          { key: "C", text: "Jump Cut" },
          { key: "D", text: "Cross Dissolve" },
        ],
        correctKey: "B",
        explanation: "J-Cut (audio mendahului video) membentuk huruf J pada timeline: suara adegan berikutnya memotong masuk lebih awal untuk mempersiapkan penonton secara psikologis.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Pemotongan adegan di tengah gerakan fisik aktor (misal saat membuka pintu) yang disambung dengan shot berikutnya dari sudut berbeda tepat di kelanjutan gerak disebut...",
        options: [
          { key: "A", text: "Cut on Action" },
          { key: "B", text: "Freeze Frame" },
          { key: "C", text: "Smash Cut" },
          { key: "D", text: "Fade to Black" },
        ],
        correctKey: "A",
        explanation: "Cut on action menyamarkan perpindahan sambungan shot di tengah momentum pergerakan dinamis objek, sehingga sambungan terasa tak kasat mata (invisible cut).",
      },
    ],
    materialCards: [
      {
        title: "1. Revolusi Non-Linear Editing (NLE)",
        content: "Editing analog seluloid era lama memotong pita film fisik secara linier berurutan. Era digital NLE (Non-Linear Editing) memungkinkan editor mengakses frame mana pun secara instan di timeline tanpa merusak file master asli (Non-Destructive Editing).",
        caseStudy: "Editor dapat mencoba 10 variasi sambungan adegan berbeda dalam hitungan detik tanpa takut merusak bahan rekaman asli dari juru kamera.",
      },
      {
        title: "2. Golden Rule: Struktur Folder Master Pascaproduksi",
        content: "Sebelum membuka software editing, susun struktur direktori baku: 01_PROJECT_FILES (Premiere/DaVinci), 02_FOOTAGE (A_CAM, B_CAM, DRONE), 03_AUDIO (BOOM, LAV, SFX, MUSIC), 04_GRAPHICS (LOGO, LOWER_THIRD, VFX), 05_EXPORTS (ROUGH_CUT, FINAL_MASTER), dan 06_DOCS (Naskah, Call Sheet).",
        didYouKnow: "Kerugian akibat hilangnya file footage syuting yang lupa di-backup di industri film global ditaksir mencapai jutaan dollar setiap tahunnya."
      },
      {
        title: "3. Naming Convention File & SOP Ingest Footage",
        content: "Dilarang membiarkan nama file bawaan kamera seperti 'C0001.MP4' bercampur. Beri nama terstruktur: [TANGGAL]_[PROYEK]_[SCENE-TAKE]_[CAM_ID], contoh: '20261015_PROFIL_SC01_TK01_CAM_A.MOV'. Selalu terapkan checksum verification (MD5 / ShotPut Pro) saat menyalin dari kartu memori ke storage kerja.",
      },
      {
        title: "4. Sistem Penyimpanan Redundan: Aturan Cadangan 3-2-1",
        content: "Prinsip perlindungan data mutlak: Simpan minimal 3 salinan data rekaman, pada 2 jenis media simpan yang berbeda (misal: 1 di internal NVMe SSD dan 1 di harddisk eksternal RAID), serta simpan 1 salinan di lokasi fisik berbeda (Off-site / Cloud Storage).",
      },
      {
        title: "5. Empat Panel Utama Antarmuka Software NLE",
        content: "Workspace NLE profesional terbagi menjadi 4 kuadran utama: (1) Project / Media Pool Panel (wadah aset & bin folder), (2) Source Monitor (layar seleksi klip in/out), (3) Timeline Sequence (jalur multi-track video & audio), dan (4) Program Monitor (layar hasil suntingan akhir sequence).",
      },
      {
        title: "6. Shortcut Keyboard: Senjata Kecepatan Editor Profesional",
        content: "Editor handal jarang menyentuh mouse untuk memotong. Kuasai shortcut universal: J (Play mundur / shuttle), K (Stop / jeda), L (Play maju cepat), I (Mark In / titik awal), O (Mark Out / titik akhir), C (Razor tool / potong), V (Selection tool), dan Spacebar (Play/Pause).",
      },
      {
        title: "7. Sinkronisasi Gambar dan Suara (Dual-System Sync)",
        content: "Ketika gambar direkam di kamera dan audio direkam di sound recorder terpisah: (1) Gunakan fitur 'Auto Sync by Audio Waveform' di NLE untuk mencocokkan bentuk gelombang suara, atau (2) Cari frame tepat saat bilah clapperboard kayu membentur bodi clapper, lalu sejajarkan tepat dengan puncak spike gelombang suara 'CLAP' di track audio.",
      },
      {
        title: "8. Alur Tahapan Editing: Assembly Cut, Rough Cut, & Fine Cut",
        content: "Assembly Cut menjejerkan seluruh adegan kasar sesuai urutan naskah cerita. Rough Cut membuang kesalahan take, merapikan dialog, dan mengatur ritme awal. Fine Cut memoles setiap frame potongan hingga presisi, menyelaraskan emosi tanpa ada lagi perubahan durasi struktur adegan (Picture Lock).",
      },
      {
        title: "9. Teknik Sambungan Tak Kasat Mata: Cut on Action",
        content: "Menyambungkan dua shot berbeda sudut di tengah-tengah momentum aksi fisik yang sedang berlangsung (misal: Shot 1 Wide saat tangan meraih gagang cangkir kopi, dipotong tepat saat cangkir terangkat ke Shot 2 Close-Up bibir meminum kopi). Mata penonton terhipnotis oleh gerakan sehingga tidak menyadari perpindahan potongan kamera.",
      },
      {
        title: "10. Split Edit Audio: J-Cut & L-Cut",
        content: "Dalam kehidupan nyata, kita sering mendengar suara lawan bicara sebelum menolehkan kepala. J-Cut (suara adegan B masuk mendahului visual B) dan L-Cut (visual berganti ke adegan B tetapi suara adegan A masih terdengar menggantung) menciptakan jalinan dialog yang luwes dan sinematik.",
      },
      {
        title: "11. Transisi Konseptual: Match Cut",
        content: "Menyambungkan dua adegan yang sama sekali berbeda waktu atau tempat menggunakan kesamaan bentuk grafis visual atau kesamaan suara (audio match cut). Contoh legendaris film '2001: A Space Odyssey': tulang yang dilempar manusia purba ke langit berganti (match cut) menjadi stasiun satelit luar angkasa berbentuk serupa.",
        didYouKnow: "Match cut adalah salah satu teknik transisi paling anggun dan puitis dalam sejarah perfilman dunia."
      },
      {
        title: "12. Jump Cut: Kesalahan Kontinuitas vs Pilihan Artistik",
        content: "Jump Cut terjadi ketika dua shot berurutan memiliki sudut dan ukuran gambar yang hampir sama (berubah kurang dari 30 derajat), membuat subjek tampak meloncat janggal di layar. Namun, Jean-Luc Godard dan kreator YouTube modern menggunakannya secara sengaja untuk mempercepat waktu (timelapse dialog) dan membuang jeda nafas.",
      },
      {
        title: "13. Cross Dissolve & Fade to Black / White",
        content: "Cross Dissolve memadukan dua gambar secara perlahan tumpang tindih, mengindikasikan berlalunya waktu panjang atau kenangan memori masa lalu. Fade to Black (gambar meredup ke gelap total) menandakan akhir sebuah babak dramatis atau pergantian hari dalam cerita.",
      },
      {
        title: "14. Pengorganisasian Timeline Multi-Track",
        content: "Standardisasi penataan track timeline: Track V1 untuk video utama (A-roll wawancara/dialog), V2-V4 untuk gambar sisipan (B-roll penjelas) dan grafis teks lower-third. Track A1-A2 khusus dialog vokal talent, A3-A4 untuk efek suara (SFX dan foley), dan A5-A6 untuk musik latar (BGM).",
      },
      {
        title: "15. Pemanfaatan B-Roll (Insert Footage) untuk Menutupi Sambungan",
        content: "Ketika presenter berita salah bicara atau jeda bicaranya dipotong, sambungan muka akan tampak melompat janggal. Editor menutupi potongan tersebut dengan menyelipkan rekaman visual pendukung (B-Roll) pada track V2 di atas audio dialog presenter yang sudah dirapikan.",
      },
      {
        title: "16. Dasar Color Correction vs Color Grading",
        content: "Color Correction adalah tahapan teknis menormalkan gambar: menyeimbangkan eksposur (white and black points), mengoreksi white balance, dan mencocokkan konsistensi warna antar kamera yang berbeda. Color Grading adalah tahapan artistik menerapkan palet warna kreatif (mood teal & orange, vintage, dystopian) untuk membangun nuansa psikologis film.",
      },
      {
        title: "17. Pengaturan Audio Balancing & Audio Ducking",
        content: "Dialog vokal harus terdengar jelas di atas instrumen musik latar. Audio Ducking secara otomatis menurunkan volume musik pengiring sebesar -12 dB hingga -18 dB saat talent mulai berbicara, dan menaikkan volume musik kembali secara lembut saat talent berhenti bicara.",
      },
      {
        title: "18. Title, Lower Thirds, & Safe Area (Action & Title Safe)",
        content: "Lower Third adalah grafis pita teks di sepertiga bawah layar yang memuat nama dan gelar narasumber. Teks wajib diletakkan di dalam zona aman (Title Safe Margin 80%) agar tidak terpotong oleh bezel layar televisi tabung atau antarmuka aplikasi smartphone modern.",
      },
      {
        title: "19. Ekspor Video: Codec H.264 / H.265 vs ProRes Master",
        content: "Untuk penayangan web dan YouTube, gunakan format container MP4 dengan kompresi codec H.264 atau HEVC (H.265) profil VBR 2-Pass (bitrate 15-20 Mbps untuk 1080p). Untuk master arsip broadcast TV berkualitas tinggi tanpa penurunan kompresi (lossless), gunakan codec Apple ProRes 422 HQ atau Avid DNxHR.",
      },
      {
        title: "20. POS Final: Quality Control (QC) Sebelum Rilis",
        content: "Sebelum menyerahkan hasil ekspor ke klien/guru: (1) Tonton utuh dari awal sampai akhir tanpa mempercepat (no skipping), (2) Periksa ada tidaknya frame hitam bocor (flash frame), (3) Pastikan tidak ada kesalahan ketik ejaan (typo) pada nama narasumber, dan (4) Pastikan level puncak audio tidak menyentuh 0 dBFS pada headphone monitor.",
      },
    ],
    video: {
      title: "Masterclass Editing NLE: Alur Kerja Profesional, J-Cut, & Cut on Action",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Simak tutorial cara menyinkronkan audio clapperboard dan memotong adegan dialog berirama menggunakan Premiere Pro / DaVinci Resolve.",
    },
    gamePairs: [
      { id: 1, left: "Cut on Action", right: "Menyambung potongan shot tepat di momentum gerakan fisik objek" },
      { id: 2, left: "J-Cut", right: "Audio adegan berikutnya terdengar lebih awal sebelum gambarnya muncul" },
      { id: 3, left: "Audio Ducking", right: "Menurunkan otomatis volume musik latar saat narator berbicara" },
      { id: 4, left: "Aturan 3-2-1", right: "Standar backup data: 3 salinan, 2 jenis media simpan, 1 di lokasi berbeda" },
      { id: 5, left: "Title Safe Area", right: "Batas margin aman agar teks lower third tidak terpotong bingkai layar" },
    ],
    caseTitle: "Bencana Media Offline Menjelang Deadline Penilaian Karya",
    caseScenario:
      "Tiga puluh menit sebelum waktu pengumpulan tugas video profil sekolah, seorang siswa membuka proyek Adobe Premiere Pro di komputer laboratorium. Seluruh timeline video berubah menjadi layar merah menyala bertuliskan 'Media Offline' dan audio menghilang. Ternyata rekannya mengedit video langsung dari flashdisk milik pribadi, dan flashdisk tersebut tertinggal di rumahnya tanpa sempat disalin ke harddisk komputer sekolah.",
    caseInstruction:
      "Analisis pelanggaran SOP manajemen aset proyek dalam peristiwa tersebut. Rumuskan alur kerja persiapan proyek (project initialization workflow) yang menjamin seluruh aset tersimpan aman di drive lokal dan dapat dipindahkan antar komputer tanpa insiden media offline.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Mengapa software editing video modern disebut bekerja secara Non-Destructive Editing?",
        options: [
          { key: "A", text: "Karena software tersebut tidak membutuhkan daya listrik" },
          { key: "B", text: "Karena setiap pemotongan, pemangkasan, atau penambahan efek di timeline tidak pernah mengubah atau merusak file video master asli yang tersimpan di harddisk" },
          { key: "C", text: "Karena software tersebut secara otomatis menghapus video yang jelek" },
          { key: "D", text: "Karena software hanya bisa dijalankan satu kali seumur hidup" },
        ],
        correctKey: "B",
        explanation: "Non-destructive editing berarti file asli di media simpan tetap utuh tak tersentuh. NLE hanya mencatat instruksi titik potong in/out dalam file proyek yang berukuran sangat kecil.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Teknik penyambungan klip dialog antara dua orang di mana visual presenter A dipotong beralih ke wajah presenter B, namun suara presenter A masih terdengar menyelesaikan kalimatnya disebut...",
        options: [
          { key: "A", text: "L-Cut" },
          { key: "B", text: "J-Cut" },
          { key: "C", text: "Smash Cut" },
          { key: "D", text: "Cross Dissolve" },
        ],
        correctKey: "A",
        explanation: "L-Cut (audio menggantung setelah video berganti) membentuk huruf L pada timeline: kita melihat reaksi wajah lawan bicara (reaction shot) selagi pembicara pertama menuntaskan kalimatnya.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Seorang editor ingin menutupi kesalahan intonasi pembicara yang dipotong di tengah wawancara agar tidak terjadi lonjakan visual (jump cut). Langkah visual paling profesional yang harus diletakkan pada track video di atasnya adalah...",
        options: [
          { key: "A", text: "Memasang transisi efek bintang berputar 3D warna-warni" },
          { key: "B", text: "Menyelipkan rekaman B-Roll pendukung (insert shot) yang relevan dengan topik yang sedang dibicarakan narasumber" },
          { key: "C", text: "Membuat layar menjadi hitam pekat selama 5 detik" },
          { key: "D", text: "Mempercepat kecepatan video menjadi 400%" },
        ],
        correctKey: "B",
        explanation: "B-Roll (Cutaway / Insert Footage) adalah solusi standar penyiaran untuk menyamarkan potongan audio dialog di bawahnya, menjaga aliran narasi tetap mulus tanpa jump cut.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Bandingkan format kompresi video H.264 dengan Apple ProRes 422 HQ! Mengapa seorang editor lebih memilih menggunakan format ProRes saat proses editing berjalan di timeline daripada file H.264 yang terkompresi tinggi?",
        options: [
          { key: "A", text: "Karena ukuran file ProRes selalu lebih kecil daripada MP4" },
          { key: "B", text: "Karena ProRes menggunakan kompresi Intra-frame (setiap frame didekode mandiri) sehingga kinerja playback timeline sangat ringan dan responsif tanpa membebani prosesor CPU komputer" },
          { key: "C", text: "Karena ProRes dapat langsung diputar di handphone jadul" },
          { key: "D", text: "Karena H.264 tidak memiliki warna sama sekali" },
        ],
        correctKey: "B",
        explanation: "H.264 menggunakan kompresi Inter-frame (Long-GOP) yang menguras CPU komputer untuk merekonstruksi frame. ProRes mengompresi per frame mandiri (Intra-frame), menjadikannya sangat ringan saat di-scrubbing di timeline.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Susunlah alur Quality Control (QC) mandiri yang wajib dieksekusi seorang editor sebelum menyerahkan master video hasil render kepada stasiun televisi atau klien penyiaran!",
        options: [
          { key: "A", text: "Langsung mengirim file via WhatsApp tanpa menontonnya sama sekali" },
          { key: "B", text: "Uji playback utuh 100%: verifikasi sinkronisasi bibir dan suara (lip sync), pastikan audio tidak melebihi -6 dBFS, cek ejaan teks lower-third di dalam title safe margin, dan periksa tidak adanya frame hitam (flash frames)" },
          { key: "C", text: "Mengganti judul video menjadi 'FINAL_BISMILLAH_REV9.mp4'" },
          { key: "D", text: "Menghapus seluruh file master proyek di komputer" },
        ],
        correctKey: "B",
        explanation: "SOP Quality Control (QC) mencakup verifikasi menyeluruh terhadap sinkronisasi audio-visual, kesesuaian standar level kenyaringan siaran, kepatuhan batas aman teks grafis, serta ketiadaan cacat visual rendering.",
      },
    ],
    lkpd: {
      title: "LKPD E3-K6: Praktik Non-Linear Editing: Sinkronisasi Audio & Pemotongan Dinamis J-Cut/L-Cut",
      objective: "Peserta didik mampu menyusun struktur direktori proyek, menyinkronkan rekaman kamera dengan audio clapperboard, dan merangkai adegan dialog menggunakan teknik J-Cut dan Cut on Action.",
      tools: ["Komputer Editing / Laptop", "Software NLE (Adobe Premiere Pro / DaVinci Resolve / CapCut Pro)", "Footage Mentah Wawancara 2 Kamera + Audio Eksternal", "Headphone Monitor"],
      steps: [
        "Buat struktur folder master proyek di drive D:/ atau SSD dengan format baku: 01_PROJECT, 02_FOOTAGE, 03_AUDIO, 04_EXPORTS.",
        "Buka software NLE dan buat project baru berstandar sequence: 1080p, 25 fps, Audio 48 kHz stereo.",
        "Sinkronkan rekaman video Kamera A dan Kamera B dengan audio eksternal menggunakan penanda clapperboard.",
        "Potong jeda kesalahan dialog dan susun A-Roll narasi utama.",
        "Terapkan minimal dua titik sambungan Cut on Action pada pergerakan tangan narasumber.",
        "Terapkan minimal satu titik transisi J-Cut dan satu titik L-Cut pada pergantian pembicara.",
        "Selipkan B-Roll pada track V2 dengan durasi 3 detik untuk menutupi sambungan jump cut.",
        "Lakukan ekspor video dengan preset: Format H.264, Match Source - High Bitrate (VBR 15 Mbps), Audio AAC 320 kbps.",
      ],
      outputFormat: "File master video MP4 1080p berdurasi 60-90 detik dan screenshot struktur folder proyek yang rapi.",
    },
    journalQuestions: {
      q1: "Mengapa kedisiplinan manajemen file dan struktur folder merupakan cermin profesionalisme seorang editor video?",
      q2: "Bagaimana penerapan J-Cut dan L-Cut membantu Anda menciptakan adegan dialog yang terasa lebih alami bagi penonton?",
      q3: "Pengalaman apa yang paling menantang saat Anda harus memilih bagian footage mana yang harus dibuang demi menjaga ritme cerita?",
    },
    kktpIndicators: [
      "Mampu mengorganisasikan manajemen file dan struktur folder proyek pascaproduksi sesuai SOP.",
      "Mampu melakukan sinkronisasi audio dual-system menggunakan penanda clapperboard/waveform.",
      "Mampu menerapkan teknik pemotongan gambar Cut on Action, J-Cut, dan L-Cut secara harmonis.",
    ],
  },
];
