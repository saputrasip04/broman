import type { ElemenContentItem } from "./curriculum-types";

export const F3_CONTENTS: ElemenContentItem[] = [
  // =========================================================================
  // KONTEN 1: Prosedur tahapan departemen penyutradaraan (20 Slide)
  // =========================================================================
  {
    id: "f3-k1",
    order: 1,
    title: "1. Prosedur tahapan departemen penyutradaraan",
    shortTitle: "Prosedur Sutradara TV",
    summary: "Peran, wewenang, dan alur kerja Program Director (Sutradara Televisi) mulai dari bedah naskah, breakdown visual, kolaborasi lintas departemen, hingga ruang kontrol siaran.",
    kompetensi: ["1. Memahami", "2. Mengoordinasikan"],
    tujuanPembelajaran: [
      "Peserta didik mampu memahami peran strategis dan kepemimpinan Program Director (PD) dalam produksi siaran televisi.",
      "Peserta didik mampu menyusun dokumen breakdown penyutradaraan (Director's Treatment dan Blocking Plan).",
    ],
    hookQuestion: "Jika produser memegang kendali anggaran dan waktu, mengapa di ruang kontrol siaran televisi (PCR) komando eksekusi mutlak ada di tangan Sutradara?",
    hookContext: "Di ruang kendali siaran langsung, demokrasi dihentikan. Sutradara adalah nahkoda tunggal yang memutuskan gambar kamera mana yang tampil di jutaan layar televisi penonton dalam tempo sepersekian detik.",
    pretestQuestions: [
      {
        id: 1301,
        bloom: "C2",
        stem: "Pemimpin kreatif dan teknis yang bertanggung jawab menerjemahkan naskah menjadi rangkaian bahasa visual audio di layar televisi adalah...",
        options: [
          { key: "A", text: "Program Director / Sutradara Televisi" },
          { key: "B", text: "Grip Technician" },
          { key: "C", text: "Catering Manager" },
          { key: "D", text: "Driver OB Van" },
        ],
        correctKey: "A",
        explanation: "Sutradara (Program Director) adalah arsitek visual yang memimpin kru kamera, audio, lighting, dan pengisi acara agar menghasilkan karya siar yang harmonis.",
      },
      {
        id: 1302,
        bloom: "C2",
        stem: "Rencana tertulis yang menggambarkan visi artistik sutradara, gaya visual, tone warna, pergerakan kamera, dan suasana dramatik program disebut...",
        options: [
          { key: "A", text: "Director's Treatment" },
          { key: "B", text: "Surat Penagihan Pajak" },
          { key: "C", text: "Kuitansi Bensin" },
          { key: "D", text: "Brosur Penjualan Alat" },
        ],
        correctKey: "A",
        explanation: "Director's Treatment adalah panduan visi estetika sutradara yang menjadi acuan bagi penata kamera, penata cahaya, dan penata artistik.",
      },
    ],
    materialCards: [
      {
        title: "1. Hakikat Kepemimpinan Sutradara Televisi (Program Director)",
        content: "Sutradara televisi adalah seorang visioner artistik sekaligus komandan lapangan. Bertugas mengubah teks naskah hitam-di-atas-putih menjadi bahasa visual bergerak yang bernyawa, menyentuh emosi pemirsa, dan menyampaikan pesan secara jernih.",
        didYouKnow: "Di televisi komersial Amerika dan Eropa, Sutradara Program Siaran Langsung sering dijuluki 'Air Traffic Controller' karena mengendalikan puluhan monitor dan komando suara secara simultan.",
      },
      {
        title: "2. Perbedaan Sutradara Film vs Sutradara Televisi",
        content: "Sutradara film bekerja dengan satu kamera secara berurutan, memiliki waktu lama untuk mengulang take (re-take), dan menyusun film di ruang editing pasca-produksi. Sutradara televisi studio bekerja dengan multi-kamera dan melakukan editing secara live langsung saat acara tayang.",
      },
      {
        title: "3. Struktur Departemen Penyutradaraan Televisi",
        content: "Sutradara (Program Director) dibantu oleh Asisten Sutradara 1 (Assistant Director / AD) yang mengurus jadwal dan administrasi, Floor Director (FD) yang menjadi perpanjangan tangan di lantai studio, Script Supervisor (Pencatat Skrip), dan Switcherman.",
      },
      {
        title: "4. Tahap Pra-Produksi: Bedah Naskah & Visi Visual",
        content: "Sutradara membaca naskah berulang kali untuk menangkap pesan inti dan nada emosi (mood). Sutradara merumuskan konsep visual: apakah tayangan bergaya energik, elegan tenang, misterius, atau santai ceria.",
      },
      {
        title: "5. Penyusunan Director's Treatment",
        content: "Treatment Sutradara menjabarkan rincian teknis: rasio aspek gambar, pergerakan kamera dominan (statis, handheld, atau jib arm), skema warna pencahayaan (high-key vs low-key), dan jenis transisi antar segmen.",
        caseStudy: "Sutradara program musik akustik memilih warna cahaya warm amber dan gerakan kamera slow dolly untuk memperkuat keintiman lagu.",
      },
      {
        title: "6. Pembuatan Floor Plan & Blocking Diagram",
        content: "Floor Plan adalah denah studio tampak atas berskala. Sutradara menggambarkan posisi panggung dekorasi, penempatan sofa bintang tamu, zona berdiri presenter, serta posisi dan radius gerak Kamera 1, 2, dan 3.",
      },
      {
        title: "7. Koordinasi dengan Penata Kamera (Director of Photography)",
        content: "Sutradara dan DoP mendiskusikan lensa yang dipakai, framing estetika, titik fokus, dan pembagian tugas kamera: Cam 1 (Master Wide Shot), Cam 2 (Close-Up Host), Cam 3 (Close-Up Narasumber).",
      },
      {
        title: "8. Koordinasi dengan Penata Cahaya (Gaffer / Lighting Director)",
        content: "Sutradara menjelaskan kebutuhan atmosfer cahaya per segmen kepada Gaffer. Memastikan tidak ada bayangan hidung atau mikrofon yang jatuh di wajah presenter saat bergerak di atas panggung.",
      },
      {
        title: "9. Koordinasi dengan Penata Artistik (Art Director)",
        content: "Sutradara memastikan tata panggung (set decor) memiliki kedalaman ruang (depth of field) dan tidak menyulitkan jalur kabel kamera. Warna dinding set harus kontras dengan warna kulit dan busana presenter.",
      },
      {
        title: "10. Penyusunan Shot List dan Storyboard",
        content: "Shot List adalah daftar urutan shot yang direncanakan. Storyboard adalah gambar sketsa visual per shot yang membantu seluruh kru membayangkan komposisi gambar sebelum kamera dinyalakan.",
        didYouKnow: "Storyboard pertama kali dipelopori oleh Walt Disney Studio pada era 1930-an dan kini menjadi standar wajib produksi video profesional dunia.",
      },
      {
        title: "11. Casting & Directing Pengisi Acara (Talent)",
        content: "Sutradara memandu pembawa acara dan aktor: mengatur intonasi wicara, kecepatan dialog, ekspresi mata, dan 'Eye Line' (arah tatapan mata ke lensa kamera yang sedang menyala Tally merahnya).",
      },
      {
        title: "12. Tahap Rehearsal: Gladi Kotor (Dry Run) & Gladi Bersih",
        content: "Dry Run dilakukan tanpa kamera di ruang latihan untuk mematangkan pergerakan langkah kaki pemain. Gladi Bersih (Camera Rehearsal) dilakukan di studio dengan kamera, lampu, switcher, dan musik penuh menyerupai siaran aktual.",
      },
      {
        title: "13. Penguasaan Bahasa Komando Ruang Kontrol (PCR Command Language)",
        content: "Sutradara wajib memiliki artikulasi suara yang tegas dan tenang. Menggunakan rumus: 'Ready/Standby [Sumber Gambar]... Take [Sumber Gambar]!'. Menghindari keraguan karena switcherman bergantung pada ketegasan kata sutradara.",
      },
      {
        title: "14. Menjaga Ritme Visual dan Tempo Pemotongan Gambar (Pacing)",
        content: "Tempo pemotongan gambar harus selaras dengan suasana acara. Pada program talkshow serius, pergantian shot lambat (setiap 6-10 detik). Pada konser musik rock atau kuis cepat, pemotongan shot berlangsung cepat (setiap 2-3 detik).",
      },
      {
        title: "15. Manajemen Perhatian Penonton (Visual Hierarchy)",
        content: "Sutradara mengatur ke mana mata penonton harus memandang. Menggunakan komposisi Rule of Thirds, kontras pencahayaan, dan fokus selektif agar penonton langsung tertuju pada tokoh utama.",
      },
      {
        title: "16. Mitigasi Krisis & Kecepatan Mengambil Keputusan (Split-Second Decisions)",
        content: "Jika juru kamera 2 mendadak kehilangan fokus (out of focus) saat sedang disorot, sutradara dalam waktu 0,5 detik langsung berseru: 'Take Cam 1!' untuk menyelamatkan gambar di layar penonton.",
      },
      {
        title: "17. Etika Komunikasi Sutradara di Jaringan Interkom",
        content: "Sutradara dilarang memaki atau berteriak emosional di interkom saat siaran langsung. Kepanikan sutradara akan meruntuhkan moral seluruh kru teknis dan memicu rentetan kesalahan baru.",
      },
      {
        title: "18. Evaluasi Pasca Siaran Bersama Kepala Departemen",
        content: "Setelah siaran, sutradara meninjau rekaman program (Line Cut Recording). Memeriksa shot mana yang goyang, transisi yang terlambat, atau sudut kamera yang melanggar aturan tata gambar.",
      },
      {
        title: "19. Tren Teknologi: Virtual Production & Robotik Kamera",
        content: "Sutradara modern memimpin siaran studio berbasis LED Wall Unreal Engine dan mengendalikan kamera robotik PTZ (Pan-Tilt-Zoom) melalui konsol layar sentuh tanpa juru kamera fisik di lantai studio.",
      },
      {
        title: "20. Rangkuman & Kualifikasi Menjadi Sutradara Televisi Handal",
        content: "Sutradara yang hebat memadukan mata seorang seniman, ketelitian seorang insinyur, dan ketegasan seorang jenderal. Teruslah berlatih membaca naskah, membedah komposisi visual, dan memimpin tim dengan penuh integritas.",
      },
    ],
    video: {
      title: "Peran Sutradara Televisi: Dari Konsep Naskah hingga Ruang Kontrol Siaran",
      embedUrl: "https://www.youtube.com/embed/zL5fX0_M-4E",
      guide: "Amati bagaimana sutradara memimpin technical meeting, memetakan blocking kamera pada floor plan studio, dan memberi komando potong gambar di PCR.",
    },
    gamePairs: [
      { id: 1, left: "Program Director (PD)", right: "Sutradara penanggung jawab artistik dan komando pemotongan gambar siaran" },
      { id: 2, left: "Director's Treatment", right: "Dokumen visi artistik sutradara memuat konsep visual dan suasana tayangan" },
      { id: 3, left: "Floor Plan", right: "Denah studio tampak atas berskala memuat tata letak set dan posisi kamera" },
      { id: 4, left: "Assistant Director (AD)", right: "Asisten sutradara yang mengawasi waktu rundown dan urutan scene" },
      { id: 5, left: "Line Cut", right: "Hasil rekaman murni pemotongan gambar langsung dari meja switcher di PCR" },
    ],
    caseTitle: "Studi Kasus 1: Kamera 1 Kehilangan Fokus Saat Siaran Langsung Berjalan",
    caseScenario: "Pada segmen monolog pembuka, presenter sedang berbicara di Kamera 1 (Medium Close Up). Tiba-tiba lensa kamera 1 kehilangan fokus akibat kabel servo macet. Gambar di layar penonton buram.",
    caseInstruction: "Sebagai Sutradara di meja PCR, komando verbal apa yang Anda ucapkan seketika dalam tempo 1 detik kepada Switcherman dan juru kamera lainnya untuk menyelamatkan siaran tanpa membuat presenter panik?",
    sampleQuestions: [
      {
        id: 1303,
        bloom: "C4",
        stem: "Mengapa seorang sutradara televisi wajib membuat Floor Plan studio tampak atas sebelum merancang pergerakan blocking kamera?",
        options: [
          { key: "A", text: "Untuk memastikan sudut pandang kamera tidak saling bertubrukan dan jalur roda pedestal bebas rintangan kabel" },
          { key: "B", text: "Hanya sebagai syarat formalitas administrasi gedung studio" },
          { key: "C", text: "Agar kru dekorasi bisa mengecat lantai studio dengan warna yang sama" },
          { key: "D", text: "Untuk menghitung luas jendela ventilasi studio" },
        ],
        correctKey: "A",
        explanation: "Floor plan memastikan kamera memiliki sudut tembak yang bersih, bebas hambatan fisik, dan tidak saling masuk ke dalam bidang bidik kamera lain (shooting the other camera).",
      },
    ],
    lkpd: {
      title: "LKPD F3-K1: Perancangan Floor Plan Studio & Director's Treatment Program TV",
      objective: "Peserta didik mampu merancang denah studio berskala (Floor Plan 3 Kamera) dan menyusun Director's Treatment untuk program talkshow 30 menit.",
      tools: ["Kertas Milimeter Blok / Software Desain (Canva / Draw.io)", "Penggaris", "Template Director's Treatment"],
      steps: [
        "Tentukan tema program talkshow: 'Inspirasi Muda Berprestasi'.",
        "Gambarkan denah studio tampak atas: area panggung, sofa host, sofa narasumber, dan backdrop.",
        "Tempatkan posisi 3 kamera studio: Kamera 1 (Master Wide), Kamera 2 (Host), Kamera 3 (Narasumber).",
        "Tarik garis sudut pandang (field of view) masing-masing kamera untuk memastikan tidak saling bocor.",
        "Susun dokumen Director's Treatment mencakup konsep warna lampu dan gaya pergerakan kamera.",
      ],
      outputFormat: "Dokumen Floor Plan dan Director's Treatment Format PDF (Maks. 3 Halaman).",
    },
    journalQuestions: {
      q1: "Karakter kepemimpinan apa yang paling Anda kagumi dari seorang sutradara televisi profesional?",
      q2: "Mengapa komando sutradara di ruang PCR harus singkat, padat, dan tidak boleh berbelit-belit?",
      q3: "Bagaimana cara Anda menyelaraskan perbedaan pendapat artistik antara Anda sebagai sutradara dengan produser?",
    },
    kktpIndicators: [
      "Mampu mendeskripsikan peran, wewenang, dan etika komunikasi Program Director televisi.",
      "Mampu merancang denah studio (Floor Plan) dengan penempatan 3 kamera yang ergonomis dan bebas tabrakan.",
      "Mampu menyusun Director's Treatment yang jelas sebagai pedoman lintas departemen teknis.",
    ],
  },

  // =========================================================================
  // KONTEN 2: Penyutradaraan single camera system (20 Slide)
  // =========================================================================
  {
    id: "f3-k2",
    order: 2,
    title: "2. Penyutradaraan single camera system",
    shortTitle: "Sutradara Single Cam",
    summary: "Teknik menyutradarai dengan sistem satu kamera (Single Cam System): penyusunan shot list, storyboard, blocking adegan, aturan garis imajiner 180 derajat, dan kontinuitas on-set.",
    kompetensi: ["1. Merancang", "2. Mengarahkan"],
    tujuanPembelajaran: [
      "Peserta didik mampu menerapkan teknik penyutradaraan sistem satu kamera (Single Camera Production).",
      "Peserta didik mampu menerapkan hukum 180 derajat (Axis of Action) dan menjaga kontinuitas visual antar shot.",
    ],
    hookQuestion: "Jika dua aktor sedang berdialog saling menatap, mengapa memindahkan posisi kamera melintasi garis tengah di antara mereka akan membuat penonton merasa kedua aktor menatap ke arah yang sama di layar kaca?",
    hookContext: "Hukum 180 derajat adalah aturan tata visual paling sakral dalam sinematografi dan televisi. Pelanggaran garis imajiner ini merusak orientasi ruang penonton dan membuat adegan terlihat janggal secara fatal.",
    pretestQuestions: [
      {
        id: 1304,
        bloom: "C2",
        stem: "Garis imajiner yang ditarik lurus menghubungkan dua karakter yang sedang berinteraksi, di mana kamera harus selalu berada di satu sisi garis yang sama disebut...",
        options: [
          { key: "A", text: "Aturan Garis 180 Derajat (Axis of Action)" },
          { key: "B", text: "Garis Batas Khatulistiwa" },
          { key: "C", text: "Garis Horizon Lensa" },
          { key: "D", text: "Rule of Thirds Grid" },
        ],
        correctKey: "A",
        explanation: "Aturan 180 derajat menjaga konsistensi arah tatapan mata (eyeline match) dan posisi kiri-kanan karakter di mata pemirsa.",
      },
      {
        id: 1305,
        bloom: "C2",
        stem: "Pengambilan shot gambar pendukung secara berulang dari berbagai sudut dan ukuran shot untuk adegan yang sama dalam sistem single camera disebut...",
        options: [
          { key: "A", text: "Coverage Shot / Master Shot & Coverage" },
          { key: "B", text: "Live Switching" },
          { key: "C", text: "Audio Staging" },
          { key: "D", text: "Timecode Sync" },
        ],
        correctKey: "A",
        explanation: "Coverage mencakup Master Shot (adegan utuh luas) ditambah Over-The-Shoulder dan Close-Up untuk memberikan materi lengkap bagi editor di pasca-produksi.",
      },
    ],
    materialCards: [
      {
        title: "1. Karakteristik & Filosofi Single Camera System",
        content: "Sistem satu kamera adalah pendekatan produksi di mana seluruh adegan direkam menggunakan satu kamera saja. Keunggulannya: fleksibilitas penataan pencahayaan artistik maksimal, kedalaman sinematik tinggi, dan efisiensi mobilitas di lokasi riil.",
        didYouKnow: "Sebagian besar serial drama bergengsi dunia (seperti Game of Thrones) dan film bioskop menggunakan sistem single camera untuk mencapai kualitas sinematik prima.",
      },
      {
        title: "2. Alur Kerja Single Camera: Master Shot & Coverage",
        content: "Sutradara merekam adegan utuh dari awal hingga akhir menggunakan sudut lebar (Master Shot). Setelah itu, adegan yang sama diulang kembali untuk merekam Over-the-Shoulder Tokoh A, Close-Up Tokoh A, lalu berpindah merekam Tokoh B (Coverage Shots).",
      },
      {
        title: "3. Memahami Hukum Garis Imajiner 180 Derajat (Axis of Action)",
        content: "Tarik garis lurus antara Aktor A (kiri) dan Aktor B (kanan). Seluruh posisi kamera harus berada di sisi setengah lingkaran (180 derajat) yang sama. Jika kamera melintasi garis (crossing the line), posisi aktor akan terbalik di layar sehingga membingungkan penonton.",
      },
      {
        title: "4. Dampak Pelanggaran Garis 180 Derajat (Eyeline Mismatch)",
        content: "Ketika garis 180 derajat dilanggar, Aktor A yang tadinya menatap ke kanan mendadak tampak menatap ke kiri. Penonton di layar melihat kedua aktor tidak saling memandang, melainkan menatap ke arah yang sama seolah-olah berbicara pada dinding kosong.",
        caseStudy: "Di adegan kejar-kejaran mobil, jika mobil penjahat melaju ke kanan, maka mobil polisi pengejar juga wajib melaju ke kanan. Jika kamera berpindah sisi sehingga mobil polisi melaju ke kiri, mereka tampak akan bertabrakan frontal.",
      },
      {
        title: "5. Trik Legal Menyeberangi Garis 180 Derajat",
        content: "Sutradara dapat menyeberangi garis dengan 3 cara sah: (1) Gerakkan kamera berputar melintasi garis secara terus menerus (Continuous Tracking Shot), (2) Masukkan shot netral tepat di sumbu garis (Head-on Shot), atau (3) Biarkan aktor bergerak melintasi garis di dalam frame.",
      },
      {
        title: "6. Aturan 30 Derajat (The 30-Degree Rule) & Pencegahan Jump Cut",
        content: "Saat mengubah ukuran shot dari aktor yang sama (misal dari Medium Shot ke Close-Up), ubah sudut kamera minimal 30 derajat dari posisi semula. Jika kurang dari 30 derajat, perpindahan gambar di ruang editing akan menghasilkan lompatan visual yang janggal (Jump Cut).",
      },
      {
        title: "7. Anatomi Shot Liputan Standar: Establishing, Medium, Close-Up",
        content: "Piramida visual sutradara: Extreme Long Shot / Establishing Shot (menunjukkan lokasi tempat), Medium Shot (interaksi tubuh dan lingkungan), Close-Up (menangkap ekspresi emosi mata dan bibir), dan Extreme Close-Up (detail dramatis objek).",
      },
      {
        title: "8. Teknik Over-The-Shoulder (OTS) Shot",
        content: "OTS merekam karakter utama dengan menyertakan pundak dan bagian belakang kepala lawan bicaranya di tepi depan frame. Menghubungkan relasi ruang percakapan secara intim antara kedua karakter.",
      },
      {
        title: "9. Penyusunan Shot List Berdasarkan Efisiensi Lokasi",
        content: "Syuting film tidak dilakukan berurutan sesuai alur cerita naskah (non-linear shooting). Sutradara merekam seluruh adegan di Arah Hadap Aktor A terlebih dahulu hingga tuntas, baru membalikkan arah lampu dan kamera untuk merekam Aktor B.",
        didYouKnow: "Menyusun shot list berbasis efisiensi arah lampu dapat menghemat waktu produksi hingga 40% dibandingkan syuting bolak-balik mengikuti alur naskah.",
      },
      {
        title: "10. Directing Aktor: Membimbing Emosi dan Blocking Tubuh",
        content: "Sutradara tidak mendikte kata demi kata, melainkan memberikan motivasi internal karakter (Character Objective): 'Dalam adegan ini, kamu merasa dikhianati tapi berusaha keras menahan air mata agar tidak terlihat lemah.'",
      },
      {
        title: "11. Kontinuitas Gerak & Properti (Continuity on Set)",
        content: "Script Supervisor mencatat kontinuitas: jika di shot lebar aktor memegang cangkir dengan tangan kanan, maka di shot close-up cangkir wajib dipegang dengan tangan kanan pada level air yang sama.",
      },
      {
        title: "12. Kontinuitas Pencahayaan (Lighting Continuity)",
        content: "Syuting satu adegan pendek bisa memakan waktu 4 jam di bawah sinar matahari yang terus bergerak. Sutradara dan Gaffer menggunakan kain diffuser dan lampu penyeimbang (HMI/LED) agar tingkat terang shot tetap konsisten saat disambung di editing.",
      },
      {
        title: "13. Penggunaan Clapperboard (Slate) & Sinkronisasi Suara",
        content: "Di sistem single cam dengan perekaman suara terpisah (Dual-System Audio), Clapperboard wajib dibunyikan di awal setiap take: 'Scene 12, Take 1... CLAP!'. Hentakan fisik papan memberikan penanda visual dan audio untuk sinkronisasi di editing.",
      },
      {
        title: "14. Cutting on Action (Memotong Gambar pada Gerakan)",
        content: "Sutradara menginstruksikan aktor mengulang gerakan yang sama di setiap ukuran shot. Editor akan memotong tepat di tengah-tengah gerakan (misal saat tangan mulai membuka pintu), sehingga sambungan gambar terasa mulus tanpa disadari penonton.",
      },
      {
        title: "15. Pergerakan Kamera Dinamis: Pan, Tilt, Dolly, Tracking",
        content: "Pergerakan kamera harus memiliki motivasi naratif. Pan (menoleh horizontal mengikuti pandangan karakter), Tilt (mengamati tinggi gedung vertikal), Dolly In (bergerak maju mempertegas ketegangan emosi karakter).",
      },
      {
        title: "16. Komposisi Ruang: Headroom, Looking Room, dan Lead Room",
        content: "Headroom: ruang sisa di atas kepala agar tidak menabrak batas atas frame. Looking Room: ruang kosong di arah tatapan mata karakter. Lead Room: ruang kosong di depan objek yang sedang berjalan ke samping.",
      },
      {
        title: "17. Studi Kasus: Menyelamatkan Adegan Dialog yang Rusak Garis 180-nya",
        content: "Dalam proses editing, ditemukan bahwa shot close-up tokoh antagonis melanggar garis 180 derajat. Editor dan sutradara menyelamatkannya dengan menyisipkan cutaway shot jam dinding berdetak di antara kedua dialog tersebut.",
      },
      {
        title: "18. Mengarahkan Pengambilan B-Roll & Cutaway Penyelamat",
        content: "Sutradara yang cerdas selalu mengambil Cutaway Shot (gambar sisipan: tangan meremas kertas, tetesan embun di kaca, lirik mata ke ponsel) sebagai pengaman di ruang editing jika terjadi lompatan gambar antar dialog utama.",
      },
      {
        title: "19. Komunikasi On-Set: Komando 'Rolling', 'Speed', 'Action', 'Cut'",
        content: "Protokol suara sutradara single cam: 'Sound?' -> Soundman jawab: 'Speed!' -> 'Camera?' -> Cameraman jawab: 'Rolling!' -> Clapper membunyikan slate -> Sutradara berseru: 'Action!' -> Di akhir adegan sutradara berseru: 'Cut!'.",
      },
      {
        title: "20. Rangkuman & Disiplin Sutradara Single Camera",
        content: "Penyutradaraan single camera menuntut ketajaman analisis ruang, kedisiplinan aturan 180 derajat, kepekaan terhadap kontinuitas aktor, dan imajinasi kuat merangkai potongan gambar di kepala sebelum masuk ke ruang penyuntingan.",
      },
    ],
    video: {
      title: "Teknik Menyutradarai Film Pendek dengan Sistem Satu Kamera (Single Cam)",
      embedUrl: "https://www.youtube.com/embed/9BqM2q7_dKs",
      guide: "Simak bagaimana sutradara merencanakan master shot, menerapkan aturan garis 180 derajat, dan memandu blocking aktor di lokasi syuting.",
    },
    gamePairs: [
      { id: 1, left: "Single Cam", right: "Sistem produksi perekaman adegan bertahap menggunakan satu kamera" },
      { id: 2, left: "Axis of Action", right: "Garis imajiner 180 derajat penentu konsistensi arah pandang di layar" },
      { id: 3, left: "Coverage", right: "Rangkaian shot detail (OTS, CU) pengiring shot utama (master shot)" },
      { id: 4, left: "Jump Cut", right: "Lompatan visual janggal akibat pergantian shot dari sudut kurang dari 30 derajat" },
      { id: 5, left: "Clapperboard", right: "Papan ketuk penanda scene dan timecode sinkronisasi gambar-suara" },
    ],
    caseTitle: "Studi Kasus 2: Pelanggaran Garis 180 Derajat pada Syuting Wawancara Outdoor",
    caseScenario: "Seorang sutradara pemula syuting wawancara dua orang di taman. Untuk menghemat waktu, juru kamera berpindah ke sisi belakang narasumber tanpa memindahkan arah hadap narasumber. Di hasil rekaman, kedua orang tersebut tampak saling membelakangi.",
    caseInstruction: "Jelaskan mengapa kesalahan tersebut terjadi dan gambarkan sketsa posisi kamera yang benar sesuai aturan 180 derajat untuk adegan wawancara tersebut!",
    sampleQuestions: [
      {
        id: 1306,
        bloom: "C4",
        stem: "Jika dalam adegan percakapan dua orang, kamera berpindah posisi melintasi garis imajiner 180 derajat (crossing the axis), akibat visual yang dialami penonton adalah...",
        options: [
          { key: "A", text: "Kedua karakter tampak menatap ke arah yang sama dan kehilangan kontak tatapan mata logis di layar" },
          { key: "B", text: "Warna pakaian aktor otomatis berubah menjadi hitam putih" },
          { key: "C", text: "Suara mikrofon mendadak hening" },
          { key: "D", text: "Resolusi video kamera menurun menjadi standar definisi" },
        ],
        correctKey: "A",
        explanation: "Pelanggaran garis 180 derajat membalik orientasi spasial kiri-kanan, sehingga kedua tokoh terlihat menatap ke arah yang sama bukan saling berhadapan.",
      },
    ],
    lkpd: {
      title: "LKPD F3-K2: Penyusunan Shot List & Storyboard Adegan Percakapan Single Camera",
      objective: "Peserta didik mampu menyusun Shot List efisien dan menggambar Storyboard 6 frame adegan dialog dua orang dengan kepatuhan garis 180 derajat.",
      tools: ["Kertas Gambar Storyboard / Software Canva", "Pensil / Penggaris", "Template Shot List Single Cam"],
      steps: [
        "Rancang adegan dialog singkat (30 detik) antara Tokoh A dan Tokoh B di meja kafe.",
        "Tentukan garis imajiner 180 derajat di antara kedua tokoh.",
        "Buat daftar 5 shot liputan: (1) Master Shot, (2) OTS Tokoh A, (3) OTS Tokoh B, (4) Close-Up Tokoh A, (5) Close-Up Tokoh B.",
        "Gambarkan sketsa Storyboard 6 panel lengkap dengan arah panah gerak kamera.",
        "Tuliskan nomor scene, ukuran shot, dan deskripsi kontinuitas properti pada setiap panel.",
      ],
      outputFormat: "Dokumen Storyboard dan Shot List Format PDF.",
    },
    journalQuestions: {
      q1: "Mengapa pemahaman aturan 180 derajat membedakan seorang pembuat video amatir dengan sinematografer profesional?",
      q2: "Apa kesulitan terbesar yang Anda rasakan saat mencoba membayangkan posisi kamera tampak atas vs tampak depan layar?",
      q3: "Mengapa kontinuitas properti dan gerakan tubuh aktor sangat krusial dalam syuting sistem satu kamera?",
    },
    kktpIndicators: [
      "Mampu menjelaskan prinsip kerja produksi video sistem satu kamera (Single Camera System).",
      "Mampu menerapkan aturan garis 180 derajat (Axis of Action) dalam perancangan denah kamera.",
      "Mampu membuat storyboard adegan percakapan dengan ukuran shot dan kontinuitas visual yang benar.",
    ],
  },

  // =========================================================================
  // KONTEN 3: Penyutradaraan multi camera system (20 Slide)
  // =========================================================================
  {
    id: "f3-k3",
    order: 3,
    title: "3. Penyutradaraan multi camera system",
    shortTitle: "Sutradara Multi Cam Studio",
    summary: "Operasional ruang kontrol kendali studio multi-kamera (PCR), teknik live switching, pemotongan gambar real-time, koordinasi intercom, dan camera tally.",
    kompetensi: ["1. Mengendalikan", "2. Mengarahkan"],
    tujuanPembelajaran: [
      "Peserta didik mampu mengarahkan siaran multi-kamera studio televisi secara real-time dari meja kendali PCR.",
      "Peserta didik mampu menguasai teknik live switching dan komunikasi interkom dengan aba-aba calling the shots yang presisi.",
    ],
    hookQuestion: "Saat siaran langsung konser musik berlangsung di stasiun TV, bagaimana sutradara mampu memotong gambar kamera tepat pada ketukan nada drum pertama sang musisi?",
    hookContext: "Penyutradaraan multi-kamera adalah seni menyunting gambar secara langsung di depan mata jutaan pemirsa. Sutradara harus mendengar ketukan irama musik, memantau 8 layar kamera sekaligus, dan memberi komando potong gambar tanpa jeda ragu satu detik pun.",
    pretestQuestions: [
      {
        id: 1307,
        bloom: "C2",
        stem: "Perangkat elektronik di Production Control Room yang digunakan oleh Switcherman untuk memilih, memotong, dan menggabungkan sinyal dari berbagai kamera studio disebut...",
        options: [
          { key: "A", text: "Vision Mixer / Video Switcher" },
          { key: "B", text: "Audio Equalizer" },
          { key: "C", text: "Dimmer Pack" },
          { key: "D", text: "Teleprompter Motor" },
        ],
        correctKey: "A",
        explanation: "Vision Mixer (Video Switcher) adalah jantung kendali visual studio tempat pemotongan gambar langsung (Cut, Dissolve, Wipe) dieksekusi.",
      },
      {
        id: 1308,
        bloom: "C2",
        stem: "Layar monitor di ruang PCR yang menampilkan gambar kamera yang sedang dipersiapkan dan akan tayang berikutnya setelah tombol transisi ditekan disebut...",
        options: [
          { key: "A", text: "Layar Preview (P/V)" },
          { key: "B", text: "Layar Program (PGM)" },
          { key: "C", text: "Layar VTR Ingest" },
          { key: "D", text: "Layar Prompter" },
        ],
        correctKey: "A",
        explanation: "Layar Preview menampilkan kandidat shot berikutnya untuk diperiksa ketajaman fokus dan framingnya sebelum dinaikkan ke Layar Program (on-air).",
      },
    ],
    materialCards: [
      {
        title: "1. Esensi Sistem Multi-Kamera Televisi (Multi-Camera Setup)",
        content: "Multi-Camera Setup menggunakan 3 hingga puluhan kamera yang beroperasi serempak dan terhubung kabel ke ruang Production Control Room (PCR). Keunggulan utamanya adalah efisiensi waktu karena proses editing gambar selesai secara instan saat acara berakhir.",
        didYouKnow: "Siaran langsung pertandingan Piala Dunia FIFA menggunakan hingga 42 kamera multi-kamera di stadion, dipimpin oleh seorang Director of World Feed.",
      },
      {
        title: "2. Konfigurasi Standar 3 Kamera Studio Talkshow",
        content: "Kamera 1 (Kiri): Medium Close-Up narasumber di sebelah kanan. Kamera 2 (Tengah): Master Wide Shot panggung keseluruhan. Kamera 3 (Kanan): Medium Close-Up host di sebelah kiri. Konfigurasi silang (Cross Shooting) ini menghasilkan sudut pandang intim tanpa menghalangi panggung.",
      },
      {
        title: "3. Peran & Meja Kerja Sutradara di Production Control Room",
        content: "Sutradara duduk di tengah PCR di depan konsol utama. Di sisi kiri duduk Switcherman (Vision Mixer Operator) yang mengeksekusi tombol cut, dan di sisi kanan duduk Produser yang mengawasi kepatuhan naskah dan rundown waktu.",
      },
      {
        title: "4. Anatomi Monitor Multi-Viewer di Dinding PCR",
        content: "Multi-Viewer membagi layar besar menjadi puluhan kotak: Kotak PGM (Program / Siaran On-Air aktif berbingkai merah), Kotak PVW (Preview / Persiapan berbingkai hijau), Kotak Cam 1 s/d Cam 4, Kotak VTR/Playback Klip, dan Kotak Grafis CG.",
      },
      {
        title: "5. Tombol Transisi Dasar Video Switcher (Cut, Dissolve, Wipe)",
        content: "Cut: perpindahan instan tanpa jeda waktu (paling sering digunakan, 90% siaran berita/talkshow). Dissolve/Mix: peleburan bertahap antar dua gambar (untuk transisi lembut atau perenungan). Wipe: sapuan pola bentuk grafis (garis, lingkaran) untuk transisi dinamis.",
      },
      {
        title: "6. Fungsi T-Bar Fader pada Vision Mixer",
        content: "T-Bar adalah tuas mekanis manual di panel switcher. Memungkinkan operator mengontrol kecepatan transisi Dissolve secara manual dengan kehalusan tinggi mengikuti dinamika tempo lagu atau emosi adegan.",
      },
      {
        title: "7. Rumus Komando Verbal Sutradara: Ready and Take",
        content: "Sutradara menggunakan panggilan resmi dua tahap: (1) 'Ready Cam 1' (switcherman mengarahkan jari ke tombol 1, juru kamera 1 mengunci framing), dilanjutkan (2) 'Take Cam 1' (switcherman menekan tombol dan kamera 1 langsung on-air).",
        caseStudy: "Jika sutradara hanya berkata 'Kamera satu!', switcherman tidak tahu apakah itu instruksi persiapan atau eksekusi tayang, sehingga memicu delay potong gambar 1 detik.",
      },
      {
        title: "8. Komando Pemotongan untuk Klip Video (VT / Playback)",
        content: "Komando standar: 'Ready VT 1 with audio... Roll VT 1... Take VT 1!' Operator VTR memutar video, Audioman menaikkan fader audio video, dan Switcherman memotong tampilan ke layar program secara serentak.",
      },
      {
        title: "9. Komando Penayangan Grafis (Super / Lower Third)",
        content: "Komando grafis: 'Standby Super Cam 1... Super In!' (teks nama muncul di bawah layar), lalu setelah 5 detik: 'Super Out!' (teks menghilang halus dari layar).",
      },
      {
        title: "10. Pengendalian Lampu Tally (Tally Light Management)",
        content: "Sistem switcher secara otomatis mengirimkan sinyal listrik ke kamera yang sedang aktif di Program (PGM). Lampu merah di atas kamera dan di viewfinder menyala, menandakan bahwa juru kamera tidak boleh mengubah fokus atau melakukan gerakan kasar.",
        didYouKnow: "Lampu Tally hijau di studio modern menandakan kamera tersebut sedang dipilih di layar Preview dan akan segera on-air dalam beberapa detik ke depan.",
      },
      {
        title: "11. Hukum 'Jangan Memotong ke Kamera yang Sedang Bergerak Kasar'",
        content: "Sutradara dilarang memotong gambar ke kamera yang juru kameranya masih mencari fokus (hunting focus) atau masih melakukan penataan framing (panning cepat). Pastikan shot di Preview sudah 'matang' (stabil dan tajam) sebelum di-Take.",
      },
      {
        title: "12. Pengaturan Ritme Pemotongan Sesuai Ritme Pembicara",
        content: "Potong gambar saat narasumber menyelesaikan satu kalimat pemikiran, bukan di tengah-tengah suku kata. Jangan memotong shot terlalu cepat jika pembicaraan sedang santai, karena akan membuat pemirsa merasa terburu-buru dan lelah.",
      },
      {
        title: "13. Re-Action Shot (Menangkap Respons Lawan Bicara)",
        content: "Sutradara multi-kamera yang hebat tidak hanya menyorot orang yang sedang berbicara, melainkan jeli memotong ke kamera lawan bicara (Re-Action Shot) untuk menangkap ekspresi terkejut, senyuman, atau anggukan kepala yang bermakna.",
      },
      {
        title: "14. Menghindari 'Jump Cut Multi-Kamera'",
        content: "Jangan memotong antara dua kamera yang memiliki ukuran shot dan sudut pandang hampir mirip (misal: Cam 1 Medium Shot dan Cam 2 Medium Shot dari sisi bersebelahan). Selalu potong antara shot yang memiliki kontras ukuran (Wide ke Close-Up).",
      },
      {
        title: "15. Penerapan Picture-in-Picture (PiP) dan Split Screen",
        content: "Switcher modern memiliki fitur M/E (Mix/Effects) dan DVE (Digital Video Effects) untuk membagi layar menjadi dua (Split Screen 50:50) untuk menampilkan presenter di studio bersama reporter luar kota di layar yang sama.",
      },
      {
        title: "16. Komunikasi Dua Arah Intercom: Floor Director & Cameraman",
        content: "Sutradara memiliki jalur interkom terpisah: 'Engineering Channel' untuk teknisi, 'Production Channel' untuk juru kamera dan FD. Sutradara berbisik santai memberi instruksi framing kepada kamera yang sedang OFF-AIR: 'Cam 3, tolong zoom in lebih dekat ke narasumber.'",
      },
      {
        title: "17. Mengatasi Kendala Kamera Rusak Saat Siaran Berlangsung",
        content: "Jika Kamera 2 mati mendadak saat live, sutradara segera mengumumkan di interkom: 'Perhatian kru, Cam 2 down! Cam 1 ambil wide shot panggung, Cam 3 ambil medium shot.' Alur siaran tetap berjalan mulus dengan 2 kamera tersisa.",
      },
      {
        title: "18. Studi Kasus: Live Directing Acara Debat Multi-Kamera",
        content: "Pada siaran debat pemilihan, sutradara menggunakan 5 kamera. Sutradara harus sigap: saat calon A menyerang, kamera beralih ke calon B yang sedang mencatat, lalu beralih ke timekeeper yang mengangkat kartu 10 detik.",
      },
      {
        title: "19. Integrasi Kamera Bergerak: Jib Arm, Dolly & Spidercam",
        content: "Sutradara memanfaatkan kamera jib arm yang melayang di atas penonton untuk memberikan establishing shot dramatik di awal pembukaan acara atau transisi saat jeda komersial.",
      },
      {
        title: "20. Rangkuman Kompetensi Sutradara Multi-Kamera Modern",
        content: "Penyutradaraan multi-kamera adalah perpaduan refleks mental kilat, ketenangan di bawah tekanan siaran langsung, dan pemahaman orkestrasi teknologi visual. Di tangan sutradara handal, ruang kontrol PCR adalah panggung penciptaan keajaiban pertelevisian.",
      },
    ],
    video: {
      title: "Sutradara Multi-Kamera di Control Room: Memberi Komando Switcher & Kru",
      embedUrl: "https://www.youtube.com/embed/C0DPdy98e4c",
      guide: "Saksikan bagaimana Program Director di ruang PCR memantau multiviewer, memberi komando 'Ready Cam... Take Cam', dan memotong gambar secara live.",
    },
    gamePairs: [
      { id: 1, left: "Vision Mixer", right: "Panel alat pemotong dan pengolah efek sinyal multi-kamera di PCR" },
      { id: 2, left: "Program Monitor (PGM)", right: "Layar monitor penampil gambar aktif yang sedang ditonton pemirsa" },
      { id: 3, left: "Preview Monitor (PVW)", right: "Layar monitor kandidat shot berikutnya sebelum diaktifkan on-air" },
      { id: 4, left: "T-Bar Fader", right: "Tuas manual pengendali kehalusan transisi dissolve pada video switcher" },
      { id: 5, left: "Cross Shooting", right: "Teknik penempatan kamera menyilang untuk merekam dialog dua orang secara intim" },
    ],
    caseTitle: "Studi Kasus 3: Switcherman Salah Menekan Tombol Kamera Saat Live",
    caseScenario: "Sutradara memberi aba-aba: 'Ready Cam 2... Take Cam 2!'. Namun switcherman yang panik tidak sengaja menekan tombol Kamera 3 yang saat itu sedang bergerak kasar (whip pan). Akibatnya, gambar berguncang tayang di layar televisi penonton selama 1 detik.",
    caseInstruction: "Sebagai Sutradara di samping switcherman, bagaimana reaksi pertama Anda di mikrofon interkom untuk menyelamatkan tayangan dan evaluasi apa yang Anda sampaikan pada saat rapat evaluasi pasca siar?",
    sampleQuestions: [
      {
        id: 1309,
        bloom: "C4",
        stem: "Mengapa seorang sutradara studio multi-kamera dilarang memotong gambar (Take) ke sebuah kamera yang lampu viewfindernya menunjukkan sang juru kamera masih bergerak cepat mengubah framing?",
        options: [
          { key: "A", text: "Karena akan menayangkan gambar goyang (shaky/unstable) yang merusak kenyamanan visual penonton televisi" },
          { key: "B", text: "Karena dapat merusak sirkuit elektronik switcher" },
          { key: "C", text: "Karena kabel kamera bisa terbakar panas" },
          { key: "D", text: "Karena melanggar hak cipta stasiun televisi lain" },
        ],
        correctKey: "A",
        explanation: "Prinsip dasar live directing adalah hanya memotong ke kamera yang sudah dalam kondisi 'steady' (stabil, terkunci, dan fokus tajam).",
      },
    ],
    lkpd: {
      title: "LKPD F3-K3: Praktik Simulasi Komando Sutradara Multi-Kamera di Ruang PCR",
      objective: "Peserta didik mampu mempraktikkan komando verbal resmi calling the shots (Ready & Take) pada simulasi siaran 3 kamera durasi 5 menit.",
      tools: ["Software Video Switcher / OBS Studio / vMix / Hardware Switcher", "Headset Intercom", "3 Kamera / Smartphone"],
      steps: [
        "Bagi peran dalam kelompok: 1 Sutradara (PD), 1 Switcherman, 3 Juru Kamera, 1 Host, 1 Bintang Tamu.",
        "Atur penempatan 3 kamera menyilang: Cam 1 (Tamu), Cam 2 (Wide), Cam 3 (Host).",
        "Sutradara memimpin siaran dialog 5 menit menggunakan rumus panggilan resmi: 'Ready Cam... Take Cam'.",
        "Praktekkan minimal 1 transisi Dissolve menggunakan T-Bar fader dan 1 penayangan grafis Lower Third.",
        "Rekam hasil Line-Cut Program dan analisis ketepatan tempo pemotongan gambar.",
      ],
      outputFormat: "Video Rekaman Line-Cut Hasil Switching & Lembar Catatan Log Pemotongan Sutradara.",
    },
    journalQuestions: {
      q1: "Bagaimana rasanya memantau banyak monitor sekaligus sambil berbicara memberi komando cepat?",
      q2: "Mengapa kekompakan dan rasa saling percaya antara Sutradara dan Switcherman sangat menentukan keberhasilan siaran?",
      q3: "Bagaimana cara Anda melatih ketenangan diri agar tidak panik saat terjadi insiden teknis di siaran langsung?",
    },
    kktpIndicators: [
      "Mampu mendemonstrasikan rumus komando verbal resmi calling the shots (Ready and Take) dengan tegas dan jelas.",
      "Mampu mengoperasikan fungsi Cut, Dissolve, dan Keyer Lower Third pada video switcher.",
      "Mampu mengarahkan konfigurasi 3 kamera studio secara harmonis tanpa memicu kesalahan potong gambar.",
    ],
  },

  // =========================================================================
  // KONTEN 4: Produksi dengan penyutradaraan & evaluasi (20 Slide)
  // =========================================================================
  {
    id: "f3-k4",
    order: 4,
    title: "4. Produksi dengan penyutradaraan & evaluasi",
    shortTitle: "Penyutradaraan & Evaluasi",
    summary: "Simulasi gladi bersih (dry run & camera rehearsal), kepemimpinan siaran on-air, manajemen krisis teknis studio, dan evaluasi artistik pasca-produksi.",
    kompetensi: ["1. Memimpin", "2. Mengevaluasi"],
    tujuanPembelajaran: [
      "Peserta didik mampu memimpin gladi resik studio televisi secara profesional sesuai tata tertib penyiaran.",
      "Peserta didik mampu mengevaluasi karya siaran televisi dari aspek dramatik, tata gambar, kesinambungan visual, dan kepatuhan waktu.",
    ],
    hookQuestion: "Setelah siaran langsung selesai dan presenter mengucapkan salam penutup, kapan waktu tepat bagi sutradara untuk mengumumkan 'It's a Wrap!' kepada seluruh studio?",
    hookContext: "Meskipun acara di layar kaca sudah selesai, proses penyiaran belum berakhir hingga Master Control mengonfirmasi bahwa sinyal studio telah terputus aman dan seluruh materi master rekaman tersimpan tanpa cacat.",
    pretestQuestions: [
      {
        id: 1310,
        bloom: "C2",
        stem: "Istilah resmi penyiaran yang diucapkan sutradara untuk menandai bahwa seluruh rangkaian rekaman dan siaran hari itu telah selesai secara resmi adalah...",
        options: [
          { key: "A", text: "Wrap / It's a Wrap!" },
          { key: "B", text: "Rolling" },
          { key: "C", text: "Standby" },
          { key: "D", text: "Speed Up" },
        ],
        correctKey: "A",
        explanation: "'It's a wrap' adalah pengumuman resmi bahwa proses syuting/siaran telah tuntas dan kru diizinkan membongkar alat (de-rigging).",
      },
      {
        id: 1311,
        bloom: "C2",
        stem: "Evaluasi rekaman visual pemotongan gambar langsung (Line Cut) yang dilakukan sutradara untuk memeriksa konsistensi sudut kamera dan kualitas framing disebut...",
        options: [
          { key: "A", text: "Director's Visual Review" },
          { key: "B", text: "Pajak Kendaraan Bermotor" },
          { key: "C", text: "Casting Audition" },
          { key: "D", text: "In-Voice Faktur" },
        ],
        correctKey: "A",
        explanation: "Visual Review mengevaluasi ketepatan angle kamera, komposisi visual, ketajaman fokus, dan tempo peralihan shot yang telah ditayangkan.",
      },
    ],
    materialCards: [
      {
        title: "1. Puncak Kepemimpinan Sutradara: Hari Penayangan (Show Day)",
        content: "Hari produksi adalah pembuktian seluruh perencanaan berbulan-bulan. Sutradara harus hadir dalam kondisi fisik dan mental prima, memancarkan optimisme kepada seluruh kru, dan siap menghadapi segala dinamika tak terduga di lantai studio.",
        didYouKnow: "Banyak sutradara siaran langsung papan atas berpuasa makan berat 2 jam sebelum on-air agar otak tetap waspada dan tidak mengantuk saat memimpin PCR.",
      },
      {
        title: "2. Fase Gladi Kotor Studio (Dry Run Walkthrough)",
        content: "Sutradara turun ke lantai studio memimpin Dry Run bersama Floor Director dan para pengisi acara. Menjelaskan rute berjalan (blocking), titik berhenti (marks di lantai bertanda gaffer tape), dan kamera mana yang harus dilihat pada setiap segmen.",
      },
      {
        title: "3. Fase Gladi Teknis Kamera (Camera Blocking Rehearsal)",
        content: "Seluruh juru kamera berada di posisinya. Sutradara memeriksa shot satu per satu melalui interkom: 'Cam 1 beri saya Medium Shot host... Cam 2 siapkan Close-Up tangan tamu... Cam 3 siap di jib arm.' Memastikan setiap kru memahami tugasnya.",
      },
      {
        title: "4. Fase Gladi Bersih Waktu Nyata (Full Dress Rehearsal)",
        content: "Gladi bersih dijalankan secara 'Real-Time' dengan stopwatch tanpa berhenti (no-stop rehearsal). Menggunakan busana asli, pencahayaan penuh, video klip pengantar, musik, dan grafis untuk menguji ketepatan durasi rundown secara presisi.",
      },
      {
        title: "5. Hitungan Mundur Menuju On-Air (The Final Countdown)",
        content: "Protokol hitung mundur 1 menit menuju siaran live: 'Studio silence please, 1 minute to air!' -> '30 seconds!' -> '10, 9, 8, 7, 6...' (hitungan 5 detik terakhir diucapkan dalam hati/hanya isyarat tangan agar tidak masuk mikrofon studio).",
      },
      {
        title: "6. Mengendalikan Ritme Adrenalin di Menit-Menit Pertama On-Air",
        content: "Menit pertama siaran live adalah momen paling menegangkan. Sutradara mengawal pembacaan opening naskah dengan tenang, memastikan grafis logo bumper tampil tepat waktu, dan memberi isyarat 'Good job' via interkom kepada presenter.",
      },
      {
        title: "7. Mengatasi Dinamika Narasumber Improvisasi Berlebih",
        content: "Jika narasumber berbicara di luar naskah dan bertele-tele, sutradara memerintahkan FD melalui interkom: 'FD, beri kode Wrap Up ke host, kita harus potong ke video VT dalam 20 detik.'",
      },
      {
        title: "8. Mengatasi Presenter Blank / Lupa Dialog di Layar",
        content: "Jika presenter terpaku diam karena lupa dialog, sutradara segera memerintahkan switcherman: 'Take Cam 2 (Wide Shot panggung)!' atau langsung memutar video filler agar presenter memiliki waktu 10 detik bernapas dan membaca naskah meja.",
      },
      {
        title: "9. Manajemen Waktu di Segmen Penutup (Hitting the Out-Time)",
        content: "Sutradara menghitung mundur detik terakhir menuju pergantian program di Master Control: 'Host wrap in 15 seconds... 10 seconds... Standby Bumper Out... Fade to Black... and Clear Studio!' Sinyal dilepas tepat pada detik 00:00.",
      },
      {
        title: "10. Pengumuman 'Wrap' dan Apresiasi Kru",
        content: "Begitu MCR mengonfirmasi sinyal aman, sutradara mengumumkan melalui pengeras suara studio: 'Thank you everyone, that's a wrap! Good show!'. Memberikan tepuk tangan apresiasi kepada seluruh pengisi acara dan kru teknis.",
      },
      {
        title: "11. Rapat Debriefing Singkat (Immediate Debrief)",
        content: "Sebelum kru membongkar alat, sutradara mengumpulkan kepala departemen selama 5 menit: mengucapkan terima kasih, mencatat hal-hal darurat yang tadi terjadi, dan memastikan tidak ada kru yang mengalami cedera kerja.",
      },
      {
        title: "12. Audit Line-Cut: Evaluasi Estetika Tata Gambar",
        content: "Sutradara menonton ulang rekaman video Line-Cut: memeriksa apakah ada shot yang 'Headroom'-nya terlalu luas, apakah ada mikrofon boom yang bocor masuk ke atas frame, dan mengevaluasi kehalusan pergerakan kamera.",
      },
      {
        title: "13. Evaluasi Kesinambungan Dramatik dan Alur Emosi",
        content: "Menilai apakah struktur cerita program berhasil menyentuh emosi penonton: apakah klimaks segmen 3 terasa menggigit, apakah musik latar mendukung atau justru menenggelamkan suara dialog narasumber.",
      },
      {
        title: "14. Evaluasi Kepatuhan Rundown Waktu Aktual",
        content: "Membandingkan durasi rencana per segmen dengan durasi aktual: apakah Segmen 1 molor 30 detik, apakah jeda iklan masuk tepat waktu, dan menganalisis dampaknya terhadap penonton.",
      },
      {
        title: "15. Evaluasi Kerjasama dan Komunikasi Interkom",
        content: "Menilai kedisiplinan kru di jalur suara interkom: apakah ada suara bising obrolan santai yang mengganggu saat siaran, dan apakah instruksi sutradara dapat didengar dengan jelas oleh juru kamera.",
      },
      {
        title: "16. Dokumentasi Laporan Evaluasi Sutradara (Director's Log)",
        content: "Sutradara menyusun lembar catatan evaluasi resmi (Director's Log): memuat daftar shot terbaik yang patut dijadikan klip promo, daftar kendala teknis kamera/audio, dan rekomendasi perbaikan untuk episode berikutnya.",
      },
      {
        title: "17. Mengelola Kritik dari Produser Eksekutif dan Penonton",
        content: "Sutradara profesional berjiwa besar menerima masukan dari Executive Producer dan kritik membangun dari penonton di media sosial. Mengubah kritik menjadi motivasi perbaikan mutu artistik.",
      },
      {
        title: "18. Studi Kasus: Sukses Penyelamatan Siaran Musik Akustik",
        content: "Pada siaran live musik, senar gitar sang musisi putus di awal lagu. Sutradara dengan tangkas memotong ke Kamera Host yang langsung mengambil alih panggung dengan obrolan ringan sementara musisi mengganti gitar dalam 40 detik.",
      },
      {
        title: "19. Menjaga Integritas Karya dan Kebersamaan Tim",
        content: "Keberhasilan siaran adalah keberhasilan bersama seluruh kru studio, sedangkan kegagalan siaran adalah tanggung jawab kepemimpinan sutradara. Budaya saling mendukung menciptakan tim produksi yang solid dan tahan banting.",
      },
      {
        title: "20. Rangkuman & Visi Sutradara Televisi Unggul",
        content: "Penyutradaraan televisi adalah perpaduan keindahan rasa seni, disiplin komando waktu, dan kerendahan hati untuk terus belajar. Jadilah sutradara yang menginspirasi tim dan mempersembahkan karya visual terbaik bagi peradaban bangsa.",
      },
    ],
    video: {
      title: "Simulasi Gladi Bersih (Dry Run) dan Siaran Langsung Studio Televisi",
      embedUrl: "https://www.youtube.com/embed/a6R_L3kX4tU",
      guide: "Pelajari bagaimana sutradara memimpin gladi kotor dry run, mengomandokan hitung mundur 1 menit ke on-air, dan mengevaluasi rekaman line-cut.",
    },
    gamePairs: [
      { id: 1, left: "Dry Run", right: "Gladi kotor pematangan blocking pemain di studio tanpa rekaman kamera" },
      { id: 2, left: "Dress Rehearsal", right: "Gladi bersih menyerupai siaran riil dengan kostum, tata cahaya, dan musik penuh" },
      { id: 3, left: "It's a Wrap!", right: "Pengumuman resmi sutradara bahwa proses syuting/siaran telah tuntas" },
      { id: 4, left: "Director's Log", right: "Lembar catatan resmi evaluasi kinerja teknis dan catatan adegan sutradara" },
      { id: 5, left: "Immediate Debrief", right: "Rapat kilat 5 menit evaluasi keselamatan dan kendala tepat setelah siaran usai" },
    ],
    caseTitle: "Studi Kasus 4: Bintang Tamu Terpeleset Kabel Saat Bergerak di Studio",
    caseScenario: "Di segmen penutup, seorang bintang tamu berjalan menuju panggung musik dan tersandung kabel kamera yang tidak tertata rapi (taping terlepas). Sang bintang tamu terjatuh di lantai studio di depan kamera 2.",
    caseInstruction: "Sebagai Sutradara di PCR, tindakan pemotongan kamera darurat apa yang Anda lakukan dalam waktu 1 detik? Dan instruksi apa yang Anda berikan kepada Floor Director di lantai studio?",
    sampleQuestions: [
      {
        id: 1312,
        bloom: "C5",
        stem: "Jika dalam tayangan siaran langsung terjadi insiden pengisi acara terjatuh di lantai studio, etika penyutradaraan dan standar penyiaran yang paling tepat adalah...",
        options: [
          { key: "A", text: "Segera memotong gambar (Take) ke sudut kamera lain yang menyorot presenter atau penonton, sementara Floor Director membantu korban tanpa terekam kamera" },
          { key: "B", text: "Melakukan zoom in close-up pada wajah korban yang kesakitan agar rating siaran melonjak" },
          { key: "C", text: "Mematikan seluruh lampu studio sehingga studio gelap gulita" },
          { key: "D", text: "Menertawakan pengisi acara melalui pengeras suara studio" },
        ],
        correctKey: "A",
        explanation: "Etika penyiaran dan standar P3SPS menjunjung tinggi martabat manusia dan melarang mengeksploitasi penderitaan atau insiden memalukan narasumber di televisi.",
      },
    ],
    lkpd: {
      title: "LKPD F3-K4: Pelaksanaan Simulasi Siaran Live 10 Menit & Evaluasi Line-Cut",
      objective: "Peserta didik mampu memimpin simulasi siaran langsung multi-kamera berdurasi 10 menit dari meja PCR dan menyusun laporan evaluasi Director's Log.",
      tools: ["Studio Mini / Ruang Kelas", "Perangkat Multi-Kamera & Video Switcher", "Format Template Director's Log"],
      steps: [
        "Jalankan gladi kotor (Dry Run) 5 menit untuk blocking presenter dan talent.",
        "Laksanakan gladi bersih hitung mundur 1 menit menuju siaran live on-air.",
        "Pimpin siaran live multi-kamera 10 menit lengkap dengan penayangan video bumper dan teks CG.",
        "Setelah kata 'Wrap!', lakukan rapat debriefing singkat bersama kru.",
        "Putar ulang rekaman video Line-Cut dan susun dokumen evaluasi Director's Log mencakup kelebihan dan catatan perbaikan.",
      ],
      outputFormat: "Video Rekaman Siaran Line-Cut & Dokumen Laporan Director's Log Format PDF.",
    },
    journalQuestions: {
      q1: "Pengalaman paling berharga apa yang Anda peroleh saat memimpin tim kru di ruang kontrol siaran?",
      q2: "Mengapa seorang sutradara harus memiliki empati dan rasa peduli yang tinggi terhadap keselamatan krunya?",
      q3: "Bagaimana rencana Anda terus mengasah kepekaan rasa seni visual (visual sense) dalam kehidupan sehari-hari?",
    },
    kktpIndicators: [
      "Mampu memimpin tahapan gladi kotor (Dry Run) dan gladi bersih (Dress Rehearsal) secara sistematis.",
      "Mampu mengarahkan siaran langsung multi-kamera dengan manajemen waktu dan respons krisis yang tenang.",
      "Mampu mengevaluasi kualitas visual karya siaran dan menyusun dokumen Director's Log yang komprehensif.",
    ],
  },
];
