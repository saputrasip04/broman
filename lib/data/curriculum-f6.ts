import type { ElemenContentItem } from "./curriculum-types";

export const F6_CONTENTS: ElemenContentItem[] = [
  // =========================================================================
  // KONTEN 1: Prosedur tahapan departemen tata artistik (20 Slide)
  // =========================================================================
  {
    id: "f6-k1",
    order: 1,
    title: "1. Prosedur tahapan departemen tata artistik",
    shortTitle: "Prosedur Tata Artistik",
    summary: "Hierarki, wewenang, dan alur kerja departemen art direction televisi: Art Director, Set Designer, Property Master, Costume/Make-up, dan kolaborasi dengan tata cahaya serta kamera.",
    kompetensi: ["1. Memahami", "2. Mengoordinasikan"],
    tujuanPembelajaran: [
      "Peserta didik mampu memahami alur kerja terstruktur departemen tata artistik dalam industri pertelevisian.",
      "Peserta didik mampu mengoordinasikan sinergi antara departemen artistik dengan departemen tata kamera dan tata cahaya.",
    ],
    hookQuestion: "Mengapa sofa berwarna merah terang menyala yang terlihat sangat mewah di toko furnitur sering kali dilarang keras oleh penata artistik untuk ditaruh di studio siaran televisi berita?",
    hookContext: "Di layar kamera studio televisi HD, warna merah murni (pure red) cenderung mengalami efek bleeding (luberan warna) dan menelan warna kulit wajah presenter jika tidak dikalibrasi dalam palet warna artistik yang tepat.",
    pretestQuestions: [
      {
        id: 1601,
        bloom: "C2",
        stem: "Kepala departemen yang bertanggung jawab penuh atas perancangan konsep visual ruang panggung, skema warna, properti, busana, dan atmosfer dekorasi studio televisi adalah...",
        options: [
          { key: "A", text: "Art Director / Production Designer" },
          { key: "B", text: "Sound Recordist" },
          { key: "C", text: "Teleprompter Operator" },
          { key: "D", text: "Master Switcherman" },
        ],
        correctKey: "A",
        explanation: "Art Director memimpin perancangan estetika visual set panggung, properti, kostum, dan riasan agar selaras dengan tema program siaran.",
      },
      {
        id: 1602,
        bloom: "C2",
        stem: "Kru departemen artistik yang bertugas mencatat, menyiapkan, merawat, dan memposisikan barang-barang yang dipegang atau digunakan oleh aktor di atas panggung disebut...",
        options: [
          { key: "A", text: "Property Master (Penata Properti)" },
          { key: "B", text: "Grip Technician" },
          { key: "C", text: "Boom Operator" },
          { key: "D", text: "Lighting Operator" },
        ],
        correctKey: "A",
        explanation: "Property Master bertanggung jawab atas seluruh hand props (barang genggam) dan set props (properti panggung).",
      },
    ],
    materialCards: [
      {
        title: "1. Hakikat & Filosofi Tata Artistik Televisi",
        content: "Tata artistik (Art Direction) adalah seni mengubah ruang studio yang kosong dan dingin menjadi panggung kehidupan yang memiliki atmosfer, identitas karakter, dan kredibilitas visual yang memikat pemirsa televisi.",
        didYouKnow: "Penonton televisi membentuk persepsi kredibilitas sebuah stasiun berita dalam 3 detik pertama hanya dari melihat desain set studio dan meja presenternya.",
      },
      {
        title: "2. Struktur Organisasi Departemen Tata Artistik",
        content: "Dipimpin oleh Production Designer / Art Director. Membawahi Set Designer (Perancang Set & Denah), Construction Coordinator (Tukang Kayu/Panggung), Property Master (Penata Properti), Set Decorator (Penata Ruang/Dressing), Wardrobe Stylist (Penata Busana), dan Make-Up Artist (Penata Rias).",
      },
      {
        title: "3. Alur Kerja Pra-Produksi: Bedah Visi Sutradara & Mood Board",
        content: "Art Director berdiskusi dengan Sutradara untuk menentukan 'Color Palette' (skema warna) dan 'Mood'. Art Director menyusun Mood Board: kolase foto referensi tekstur kayu, pencahayaan, sampel warna kain, dan gaya arsitektur panggung.",
      },
      {
        title: "4. Koordinasi Sinergis Artistik dengan Tata Kamera",
        content: "Penata artistik wajib memahami 'Focal Length' lensa kamera. Mengetahui apakah kamera menggunakan lensa wide (membutuhkan set yang lebar tanpa bocor ke dinding studio) atau lensa tele (membutuhkan latar belakang bertekstur yang menghasilkan bokeh indah).",
      },
      {
        title: "5. Koordinasi Sinergis Artistik dengan Tata Cahaya",
        content: "Bahan dekorasi set tidak boleh memantulkan cahaya menyilaukan (anti-glare / matte finish). Penata artistik berkoordinasi dengan Gaffer agar warna dinding panggung tidak bentrok dengan temperatur warna lampu (Kelvin).",
        caseStudy: "Dinding set yang dicat glossy memantulkan kilau lampu Fresnel tepat ke lensa kamera 1. Kru artistik harus menyemprotkan cairan peredam kilau (Dulling Spray) 15 menit sebelum on-air.",
      },
      {
        title: "6. Klasifikasi Properti: Hand Props vs Set Props",
        content: "Hand Props: benda yang dipegang, disentuh, atau dimanipulasi langsung oleh pemeran (cangkir kopi, pulpen, ponsel pintar). Set Props: perabot besar pengisi ruang (sofa talkshow, meja podium, lemari buku dekorasi).",
      },
      {
        title: "7. Prosedur Pemeliharaan & Katalogisasi Properti (Prop Log)",
        content: "Property Master menyusun katalog tabel inventaris: mencatat foto barang, kondisi fisik, tanggal sewa, harga ganti rugi, dan lokasi penyimpanan rak di gudang artistik (Prop House).",
      },
      {
        title: "8. Prinsip Keamanan & K3 Konstruksi Panggung Studio",
        content: "Konstruksi panel dinding dekorasi (Flats) harus berdiri kokoh menggunakan penopang segitiga kayu (Jacks) yang dibebani karung pasir (Sandbags). Dilarang memasang properti berat tanpa pengunci sekrup ganda di studio.",
      },
      {
        title: "9. Manajemen Jalur Bebas Hambatan (Clearance Runway)",
        content: "Lantai studio harus menyisakan ruang bebas selebar minimal 1,5 meter di sekeliling panggung dekorasi untuk jalur manuver roda tripod pedestal kamera dan kabel-kabel lampu tanpa tersangkut properti.",
      },
      {
        title: "10. Penataan Busana (Wardrobe) yang Ramah Kamera Televisi",
        content: "Penata busana melarang presenter memakai motif garis-garis renik atau kotak-kotak kecil rapat karena akan memicu efek distorsi visual bergelombang (Moiré Effect) pada sensor kamera televisi.",
        didYouKnow: "Busana berwarna hijau murni dilarang keras dipakai di studio yang menggunakan teknologi Green Screen Virtual Studio karena tubuh presenter akan terhapus menjadi transparan.",
      },
      {
        title: "11. Standar Make-Up Khusus Kamera HD / 4K",
        content: "Kamera definisi tinggi menangkap pori-pori kulit secara ekstrem. Make-Up Artist menggunakan bedak 'Anti-Shine Translucent Powder' dan foundation berbasis silicone HD yang meratakan kilau minyak wajah tanpa terlihat dempul tebal.",
      },
      {
        title: "12. Penerapan Studio Hijau Virtual (Chroma Key / Cyclorama)",
        content: "Dinding Cyclorama lengkung dicat warna Chroma Green khusus dengan cat matte non-reflektif. Sudut pertemuan dinding dan lantai dibuat melengkung halus tanpa sudut siku (infinity curve) agar tidak menimbulkan bayangan gelap.",
      },
      {
        title: "13. Standar Kebersihan & Perawatan Lantai Studio (Floor Maintenance)",
        content: "Lantai studio televisi dicat dengan cat epoksi khusus warna abu-abu netral atau hitam. Sebelum siaran, lantai dipel bersih dengan larutan anti-debu agar jejak sepatu dan roda pedestal tidak terlihat kotor di shot kamera lebar.",
      },
      {
        title: "14. Pengelolaan Tanaman & Elemen Hayati di Studio (Set Greenery)",
        content: "Penggunaan tanaman hias panggung memerlukan perawatan: daun dibersihkan dari debu studio dengan cairan pengkilap daun, dan pot tanaman diberi alas plastik kedap air agar air siraman tidak membasahi kabel listrik studio.",
      },
      {
        title: "15. Manajemen Anggaran Departemen Artistik (Art Budgeting)",
        content: "Art Director mengalokasikan anggaran: 40% konstruksi bahan kayu & cat, 25% sewa furnitur dan properti, 20% kostum dan make-up, 15% dana kontingensi perbaikan darurat.",
      },
      {
        title: "16. Budaya 5R di Bengkel Artistik & Gudang Properti",
        content: "Bengkel artistik memuat gergaji mesin, cat tiner mudah terbakar, dan paku. Wajib menerapkan budaya Ringkas, Rapi, Resik, Rawat, dan Rajin. Bahan kimia pelarut cat wajib disimpan di lemari besi anti-api.",
      },
      {
        title: "17. Evaluasi Tata Artistik di Monitor Kontrol Kalibrasi",
        content: "Art Director mengevaluasi tampilan panggung bukan dengan mata telanjang, melainkan menatap layar monitor kontrol studio yang terkalibrasi warna Rec.709 untuk memastikan harmoni visual panggung dan kulit pemain.",
      },
      {
        title: "18. Studi Kasus: Penyelamatan Set Panggung yang Retak 1 Jam Sebelum Siaran",
        content: "Panel dinding backdrop retak akibat terbentur boom kamera saat gladi bersih. Tim artistik dengan sigap menutupi retakan menggunakan dekorasi tanaman rambat sintetis dan plester spackle cepat kering yang dicat semprot warna senada dalam 10 menit.",
      },
      {
        title: "19. Inovasi Desain: LED Video Wall & Smart Dynamic Set",
        content: "Studio televisi modern menggantikan panel kayu statis dengan dinding layar raksasa LED Wall interaktif resolusi 1.5mm pitch yang dapat mengubah latar belakang visual kota metropolitan menjadi taman bunga dalam satu sentuhan tombol komputer.",
      },
      {
        title: "20. Rangkuman & Kompetensi Penata Artistik Televisi",
        content: "Penata artistik adalah pencipta dunia visual penyiaran. Dengan memadukan pemahaman arsitektur, psikologi warna, pengetahuan optik kamera, dan ketangkasan tangan, Anda membangun ruang panggung yang abadi dalam memori jutaan pemirsa.",
      },
    ],
    video: {
      title: "Peran Penting Penata Artistik dalam Membangun Atmosfer Program TV",
      embedUrl: "https://www.youtube.com/embed/n4p_q0zM9W0",
      guide: "Pelajari bagaimana Art Director merancang konsep set studio, memilih material anti-glare, dan menyelaraskan palet warna dengan departemen lighting dan kamera.",
    },
    gamePairs: [
      { id: 1, left: "Art Director", right: "Kepala departemen perancang konsep estetika visual panggung dan properti" },
      { id: 2, left: "Hand Props", right: "Benda-benda yang dipegang dan dimanipulasi langsung oleh tangan pemeran" },
      { id: 3, left: "Set Props", right: "Perabot besar pengisi tata ruang panggung seperti meja, sofa, dan lemari" },
      { id: 4, left: "Moiré Effect", right: "Gangguan garis visual bergelombang akibat motif pakaian presenter terlalu renik" },
      { id: 5, left: "Cyclorama", right: "Dinding studio melengkung tanpa sudut siku untuk ilusi ruang tanpa batas" },
    ],
    caseTitle: "Studi Kasus 1: Pakaian Presenter Memicu Efek Moiré di Kamera HD",
    caseScenario: "Seorang bintang tamu talkshow hadir mengenakan kemeja motif garis-garis hitam-putih rapat berjarak 1 milimeter. Saat tampil di layar kamera studio HD, motif kemeja bergetar memancarkan pola pelangi bergelombang yang memusingkan mata penonton.",
    caseInstruction: "Sebagai Wardrobe Stylist, jelaskan mengapa fenomena optik Moiré tersebut terjadi pada sensor kamera dan solusi darurat apa yang harus Anda lakukan 15 menit sebelum siaran dimulai!",
    sampleQuestions: [
      {
        id: 1603,
        bloom: "C4",
        stem: "Mengapa material permukaan dinding set studio televisi harus menggunakan cat dengan lapisan akhir 'Matte / Doff' dan bukan 'Glossy / Mengkilap'?",
        options: [
          { key: "A", text: "Untuk mencegah pantulan silau sinar lampu studio berdaya tinggi (glare) yang dapat masuk ke lensa kamera dan merusak kontras gambar" },
          { key: "B", text: "Karena cat matte lebih murah harganya di pasaran" },
          { key: "C", text: "Agar studio terlihat lebih gelap dan hemat listrik" },
          { key: "D", text: "Merupakan syarat dari dinas tata kota setempat" },
        ],
        correctKey: "A",
        explanation: "Permukaan glossy memantulkan titik cahaya lampu studio langsung ke arah lensa kamera, menimbulkan hot spot silau yang mengganggu estetika tayangan.",
      },
    ],
    lkpd: {
      title: "LKPD F6-K1: Perancangan Mood Board & Alur Kerja Departemen Artistik",
      objective: "Peserta didik mampu menyusun dokumen Mood Board digital dan alur koordinasi lintas departemen untuk program talkshow televisi remaja.",
      tools: ["Komputer / Laptop", "Aplikasi Desain (Canva / Photoshop / Pinterest)", "Template Mood Board Artistik"],
      steps: [
        "Tentukan konsep program: 'Talkshow Kreatif Remaja Era Digital'.",
        "Kumpulkan minimal 6 gambar referensi visual: desain set panggung, palet 4 warna utama, furnitur sofa, dan wardrobe.",
        "Buat tabel alur koordinasi: Kebutuhan Artistik vs Dampak ke Kamera vs Dampak ke Lighting.",
        "Cantumkan checklist bahan anti-moiré dan anti-glare yang wajib dipatuhi.",
      ],
      outputFormat: "Dokumen Mood Board Digital Format PDF 2-3 Halaman A4.",
    },
    journalQuestions: {
      q1: "Bagaimana cara penata artistik mengekspresikan karakter sebuah program melalui pilihan warna dan benda di panggung?",
      q2: "Mengapa koordinasi antara tim artistik dengan tim kamera dan pencahayaan harus dilakukan sejak tahap pra-produksi?",
      q3: "Nilai kebersihan dan kerapian apa yang paling penting diterapkan di bengkel panggung studio?",
    },
    kktpIndicators: [
      "Mampu mendeskripsikan struktur organisasi dan pembagian tugas departemen tata artistik televisi.",
      "Mampu menyusun Mood Board visual dengan pemilihan palet warna yang ramah kamera broadcast.",
      "Mampu menganalisis faktor pencegahan distorsi visual (Moiré) dan silau pantulan (Glare) di studio siaran.",
    ],
  },

  // =========================================================================
  // KONTEN 2: Analisis dan breakdown naskah artistik (20 Slide)
  // =========================================================================
  {
    id: "f6-k2",
    order: 2,
    title: "2. Analisis dan breakdown naskah artistik",
    shortTitle: "Breakdown Naskah Artistik",
    summary: "Metode bedah naskah untuk menguraikan daftar kebutuhan panggung dekorasi, hand props, perabot set, kostum per karakter, riasan wajah, dan penyusunan anggaran RAB artistik.",
    kompetensi: ["1. Menganalisis", "2. Menyusun Breakdown"],
    tujuanPembelajaran: [
      "Peserta didik mampu melakukan breakdown naskah televisi untuk mengidentifikasi seluruh kebutuhan artistik per adegan.",
      "Peserta didik mampu menyusun lembar Art Breakdown Sheet dan estimasi Rencana Anggaran Biaya (RAB) artistik.",
    ],
    hookQuestion: "Jika di dalam naskah tertulis: 'Andi melempar cangkir kopi antik warisan kakeknya ke lantai hingga berkeping-keping', berapa jumlah cangkir yang wajib disiapkan oleh Property Master untuk syuting 5 kali take?",
    hookContext: "Dalam produksi film dan televisi, setiap aksi perusakan properti di naskah (practical effects) membutuhkan barang cadangan identik dalam jumlah ganda untuk mengantisipasi pengulangan adegan (re-take).",
    pretestQuestions: [
      {
        id: 1604,
        bloom: "C2",
        stem: "Proses menguraikan teks naskah adegan per adegan untuk mencatat seluruh rincian kebutuhan set, properti, busana, dan efek khusus disebut...",
        options: [
          { key: "A", text: "Script Breakdown Artistik" },
          { key: "B", text: "Sound Check" },
          { key: "C", text: "Color Balancing" },
          { key: "D", text: "Line Ingest" },
        ],
        correctKey: "A",
        explanation: "Script Breakdown adalah proses analisis naskah untuk memilah setiap unsur fisik visual yang harus disediakan oleh tim produksi.",
      },
      {
        id: 1605,
        bloom: "C2",
        stem: "Kode warna stabilo standar industri yang biasa digunakan untuk menandai barang properti (props) saat membedah naskah adalah...",
        options: [
          { key: "A", text: "Warna Ungu (Purple)" },
          { key: "B", text: "Warna Hijau (Green)" },
          { key: "C", text: "Warna Merah (Red)" },
          { key: "D", text: "Warna Abu-abu" },
        ],
        correctKey: "A",
        explanation: "Dalam standar Movie Magic Breakdown, warna Ungu digunakan untuk Props, Kuning untuk Karakter Pemain, dan Oranye untuk Wardrobe.",
      },
    ],
    materialCards: [
      {
        title: "1. Hakikat Script Breakdown bagi Departemen Artistik",
        content: "Script Breakdown adalah jembatan yang mengubah kata-kata sastra naskah menjadi daftar belanja barang fisik. Penata artistik membaca naskah bukan seperti pembaca novel, melainkan seperti detektif yang mencari petunjuk kebutuhan set dan perabot.",
        didYouKnow: "Di era film Hollywood klasik, formulir breakdown dicetak di lembaran karton warna-warni yang disusun ke dalam papan binder kayu yang disebut 'Production Stripboard'.",
      },
      {
        title: "2. Sistem Penandaan Warna Naskah (Color-Coded Breakdown)",
        content: "Standar industri menandai naskah dengan stabilo warna berbeda: Ungu (Props), Biru Tua (Set Dressing), Oranye (Wardrobe / Kostum), Merah Muda (Make-Up & Rambut), Hijau Tua (Efek Khusus / Praktikal).",
      },
      {
        title: "3. Membedakan Properti Karakter vs Properti Latar Belakang",
        content: "Properti Karakter (Character Props): benda yang mendefinisikan jati diri tokoh (kacamata bulat khas dokter, tas ransel usang siswa). Properti Latar (Set Dressing): benda pengisi atmosfer ruang (tumpukan buku di rak, lukisan pemandangan di dinding).",
      },
      {
        title: "4. Analisis Latar Waktu & Zaman (Period Piece vs Contemporary)",
        content: "Jika naskah berlatar tahun 1990-an, seluruh properti wajib autentik: telepon putar kabel, televisi tabung CRT cembung, kaset pita, dan uang kertas edisi lama. Kehadiran smartphone modern di atas meja adalah anachronism fatal.",
        caseStudy: "Dalam sebuah drama sejarah, cangkir kopi modern kedai waralaba internasional tertinggal di atas meja raja kuno dan tertayang di layar kaca, memicu kecaman penonton dunia.",
      },
      {
        title: "5. Analisis Status Sosial-Ekonomi Tokoh dalam Naskah",
        content: "Naskah mendeskripsikan: 'Kamar kos seorang mahasiswa miskin'. Penata artistik menerjemahkannya: kasur busa tipis tanpa dipan, kipas angin plastik berdebu, tumpukan mi instan di sudut lantai, dan pakaian yang digantung di tali rafia.",
      },
      {
        title: "6. Properti Habis Pakai / Rusak (Consumable & Breakaway Props)",
        content: "Benda yang dimakan, diminum, dihancurkan, atau dibakar saat syuting (makanan pesta, surat dibakar, botol kaca dipecahkan). Properti kaca dipecahkan harus menggunakan 'Sugar Glass' (kaca berbahan gula sintetis) yang aman dan tidak melukai kulit aktor.",
      },
      {
        title: "7. Rumus Perhitungan Jumlah Properti Pengganti (Buffer Multiplier)",
        content: "Untuk setiap properti yang dihancurkan dalam satu adegan, siapkan minimal rumus 1 + 4 (1 untuk gladi + 4 untuk take cadangan). Jangan pernah syuting adegan memecahkan piring hanya dengan membawa 1 piring.",
      },
      {
        title: "8. Anatomi Lembar Art Breakdown Sheet",
        content: "Lembar breakdown memuat kolom: Nomor Adegan (Scene), Lokasi (INT/EXT), Deskripsi Set, Daftar Hand Props, Daftar Furnitur, Kostum Karakter, Kebutuhan Riasan Khusus, dan Catatan Efek Khusus.",
      },
      {
        title: "9. Strategi Pengadaan Properti: Beli, Sewa, atau Buat Sendiri (Fabrication)",
        content: "Keputusan efisiensi anggaran: Beli (untuk barang habis pakai atau berharga murah), Sewa di rental properti (untuk furnitur mahal bernilai puluhan juta), atau Buat Sendiri di bengkel panggung (untuk properti fiksi unik yang tidak dijual di toko).",
      },
      {
        title: "10. Penyusunan Rencana Anggaran Biaya (RAB) Artistik",
        content: "RAB mengelompokkan pos pengeluaran: (1) Biaya Material Konstruksi Kayu/Cat, (2) Biaya Sewa Furnitur & Transportasi Truk, (3) Biaya Hand Props, (4) Biaya Wardrobe & Make-Up, (5) Honorarium Kru Pertukangan Harian.",
        didYouKnow: "Biaya sewa furnitur di vendor rental properti biasanya dipatok 10% hingga 15% dari harga jual asli perabot untuk periode masa sewa 3 hari kerja.",
      },
      {
        title: "11. Perizinan Hak Cipta Merek pada Properti (Product Clearance)",
        content: "Label merek dagang komersial (seperti logo minuman soda atau merek laptop) tidak boleh terlihat jelas tanpa izin resmi sponsor. Tim artistik wajib melakukan 'Grip Taping' atau mengganti stiker dengan merek fiksi (Greeking).",
      },
      {
        title: "12. Penyusunan Lembar Kontinuitas Properti per Adegan",
        content: "Pencatat skrip dan asisten artistik memotret kondisi set dengan kamera polaroid/ponsel di akhir take. Memastikan rokok aktor memiliki panjang sisa pembakaran yang sama saat sudut kamera berganti.",
      },
      {
        title: "13. Analisis Kebutuhan Rias Karakter (Character Make-Up Breakdown)",
        content: "Membedah apakah karakter membutuhkan: Riasan Cantik Natural (Beauty Make-Up), Riasan Penuaan Karakter (Aging Effect dengan kerutan lateks), atau Riasan Luka / Darah Palsu (Special Effects SFX Make-Up).",
      },
      {
        title: "14. Analisis Kostum Karakter (Wardrobe Continuity Breakdown)",
        content: "Menghitung berapa set pakaian yang dipakai tokoh: jika karakter mengalami kecelakaan dan pakaiannya robek berdarah, siapkan 3 setel baju identik yang dirobek dan diwarnai darah buatan pada titik yang persis sama.",
      },
      {
        title: "15. Software Digital Breakdown Naskah Modern",
        content: "Departemen artistik masa kini menggunakan software industri seperti Yamdu, StudioBinder, atau Movie Magic Scheduling yang secara otomatis mengelompokkan kata benda dalam file naskah PDF ke dalam lembar breakdown digital.",
      },
      {
        title: "16. Mengantisipasi Cuaca & Syuting Luar Ruangan (Outdoor Art Logistics)",
        content: "Syuting di alam bebas membutuhkan tenda pelindung properti, terpal anti air hujan, kotak boks tahan debu, dan generator listrik portabel untuk mesin uap/kabut buatan (Hazer machine).",
      },
      {
        title: "17. Studi Kasus: Breakdown Program Masak Televisi (Cooking Show)",
        content: "Pada program masak 30 menit, juru masak tidak mungkin menunggu adonan kue mengembang 2 jam di oven studio. Tim artistik menyiapkan 4 loyang kue pada tahapan berbeda: bahan mentah, adonan setengah jadi, dan kue matang sempurna (Swapped Props).",
      },
      {
        title: "18. Negosiasi Biaya dan Kerjasama Sponsor (Product Placement)",
        content: "Art Director bekerja sama dengan divisi sales: menempatkan kulkas atau peralatan dapur merek sponsor di set studio sebagai barter pengurangan biaya belanja panggung.",
      },
      {
        title: "19. Pelaporan Pertanggungjawaban Nota dan Kuitansi Belanja",
        content: "Seluruh bukti nota pembelian paku, cat, dan bukti sewa barang disusun rapi dalam map akuntansi harian untuk diserahkan ke Line Producer pada akhir pekan produksi.",
      },
      {
        title: "20. Rangkuman & Ketelitian Eksekusi Breakdown Artistik",
        content: "Breakdown naskah artistik adalah seni menerjemahkan imajinasi menjadi benda nyata. Ketelitian Anda dalam mencatat setiap detil cangkir, warna taplak meja, dan robekan baju adalah kunci keberhasilan penciptaan ilusi audio visual yang sempurna.",
      },
    ],
    video: {
      title: "Cara Membuat Breakdown Artistik dan Rancangan Anggaran Kebutuhan Set",
      embedUrl: "https://www.youtube.com/embed/oP2k1eB-Z0Y",
      guide: "Pelajari bagaimana menganalisis naskah dengan sistem penandaan warna industri, membedakan props vs wardrobe, dan menyusun tabel estimasi biaya artistik.",
    },
    gamePairs: [
      { id: 1, left: "Script Breakdown", right: "Proses penguraian naskah adegan per adegan untuk mencatat kebutuhan fisik set" },
      { id: 2, left: "Sugar Glass", right: "Kaca sintetis rapuh berbahan gula yang aman digunakan untuk adegan perusakan" },
      { id: 3, left: "Greeking", right: "Menutup atau menyamarkan logo merek komersial pada properti agar tidak melanggar hak cipta" },
      { id: 4, left: "Set Dressing", right: "Barang-barang perabot dekoratif pengisi ruang latar belakang panggung" },
      { id: 5, left: "Consumable Props", right: "Benda-benda yang habis dikonsumsi atau dihancurkan saat adegan berlangsung" },
    ],
    caseTitle: "Studi Kasus 2: Kekurangan Properti Pengganti Saat Adegan Emosional",
    caseScenario: "Dalam naskah tertulis karakter melempar vas bunga keramik antik ke dinding. Sutradara meminta pengulangan take (re-take) hingga take ke-4 karena aktor salah mengucapkan dialog. Property Master ternyata hanya menyiapkan 2 buah vas bunga.",
    caseInstruction: "Jelaskan mengapa kesalahan fatal ini terjadi di departemen artistik dan langkah penanganan darurat apa yang harus disepakati bersama sutradara di lokasi agar syuting tetap selesai hari itu!",
    sampleQuestions: [
      {
        id: 1606,
        bloom: "C4",
        stem: "Pada naskah program masak televisi (cooking show), mengapa penata artistik wajib menyiapkan makanan dalam 3 tahapan (mentah, setengah matang, matang sempurna)?",
        options: [
          { key: "A", text: "Untuk menyiasati batasan waktu syuting televisi agar host tidak perlu menunggu proses memasak riil berjam-jam (Food Swapping)" },
          { key: "B", text: "Agar kru studio bisa memakan hidangan tersebut saat istirahat" },
          { key: "C", text: "Karena kamera televisi tidak dapat merekam makanan panas" },
          { key: "D", text: "Merupakan syarat izin dinas kesehatan pangan" },
        ],
        correctKey: "A",
        explanation: "Teknik Food Swapping memungkinkan program televisi menyajikan langkah memasak secara instan dan efisien di studio siaran tanpa jeda tunggu lama.",
      },
    ],
    lkpd: {
      title: "LKPD F6-K2: Penyusunan Dokumen Art Breakdown Sheet dari Naskah 1 Adegan",
      objective: "Peserta didik mampu melakukan breakdown naskah adegan drama pendek untuk menyusun daftar kebutuhan Set, Props, Wardrobe, Make-Up, dan Estimasi Anggaran.",
      tools: ["Naskah Drama Pendek (1 Scene)", "Stabilo Warna / Software PDF Highlighter", "Template Art Breakdown Sheet Excel"],
      steps: [
        "Baca naskah drama adegan ruang tamu keluarga berdurasi 2 menit.",
        "Gunakan sistem penandaan warna: stabilo ungu untuk Props, oranye untuk Wardrobe, hijau untuk Set Dressing.",
        "Pindahkan hasil penandaan ke dalam tabel lembar Art Breakdown Sheet.",
        "Hitung jumlah barang yang membutuhkan cadangan duplikat (buffer multiplier).",
        "Susun estimasi biaya belanja/sewa barang dalam format Rencana Anggaran Biaya (RAB) sederhana.",
      ],
      outputFormat: "File PDF Naskah Terstabilo & Lembar Tabel Art Breakdown Sheet Lengkap.",
    },
    journalQuestions: {
      q1: "Mengapa ketelitian membaca teks naskah sangat penting bagi seorang calon Property Master?",
      q2: "Bagaimana cara Anda menyiasati keterbatasan anggaran dana artistik namun tetap menghasilkan tampilan panggung yang terlihat mewah di kamera?",
      q3: "Mengapa penyamaran merek produk (Greeking) harus dilakukan secara etis dan profesional?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi kebutuhan artistik (Set, Props, Wardrobe, Make-Up) dari teks naskah siaran.",
      "Mampu menerapkan sistem penandaan warna standar industri (Color-Coded Script Breakdown).",
      "Mampu menyusun dokumen Art Breakdown Sheet dan kalkulasi estimasi Rencana Anggaran Biaya (RAB).",
    ],
  },

  // =========================================================================
  // KONTEN 3: Set dekor dan property (sketsa & pembuatan) (20 Slide)
  // =========================================================================
  {
    id: "f6-k3",
    order: 3,
    title: "3. Set dekor dan property (sketsa & pembuatan)",
    shortTitle: "Set Dekor & Properti Panggung",
    summary: "Perancangan denah panggung tampak atas (Floor Plan berskala), konstruksi dinding panggung modular (Flats & Jacks), teknik pengecatan tekstur panggung (Faux Finishes), dan pembuatan properti panggung.",
    kompetensi: ["1. Menggambar Sketsa", "2. Mengonstruksi"],
    tujuanPembelajaran: [
      "Peserta didik mampu menggambar sketsa denah panggung berskala (Floor Plan 1:50) dan tampak depan (Elevation Drawing).",
      "Peserta didik mampu mengonstruksi panel dinding dekorasi modular (Flats) dan menerapkan teknik pengecatan tekstur panggung.",
    ],
    hookQuestion: "Bagaimana dinding batu bata kastil kuno yang kokoh dan tebal di studio televisi sebenarnya hanya terbuat dari selembar kayu triplek tipis atau styrofoam yang dicat dengan teknik khusus?",
    hookContext: "Di industri pertelevisian, realitas visual panggung diciptakan melalui seni ilusi optik (Trompe-l'œil). Dengan menguasai teknik pengecatan tekstur tiruan (Faux Finishes), bahan murah dapat disulap menjadi dinding batu megah di depan lensa kamera.",
    pretestQuestions: [
      {
        id: 1607,
        bloom: "C2",
        stem: "Panel dinding kayu ringan modular berukuran standar (misal 1,2 x 2,4 meter) yang dapat dibongkar pasang sebagai dinding dekorasi studio televisi disebut...",
        options: [
          { key: "A", text: "Flat (Panel Dinding Panggung)" },
          { key: "B", text: "Tripod Spreader" },
          { key: "C", text: "Softbox Grid" },
          { key: "D", text: "Audio Baffle" },
        ],
        correctKey: "A",
        explanation: "Flat adalah panel dinding modular dasar dalam tata panggung teater dan televisi yang dapat disusun membentuk berbagai ruang interior.",
      },
      {
        id: 1608,
        bloom: "C2",
        stem: "Teknik pengecatan artistik untuk meniru tekstur material asli seperti batu marmer, kayu tua, karat besi, atau dinding semen mengelupas disebut...",
        options: [
          { key: "A", text: "Faux Finish / Scenic Painting" },
          { key: "B", text: "White Balance" },
          { key: "C", text: "Gain Staging" },
          { key: "D", text: "Color Temperature" },
        ],
        correctKey: "A",
        explanation: "Faux Finish adalah teknik melukis panggung untuk menciptakan ilusi tekstur material mahal menggunakan cat akrilik dan spons biasa.",
      },
    ],
    materialCards: [
      {
        title: "1. Hakikat Desain Set Panggung Televisi (Set Design)",
        content: "Desain set adalah seni mendefinisikan ruang fisik siaran. Set panggung yang sukses mampu mendukung pergerakan kamera, memandu alur mata penonton, dan mencerminkan tema acara (apakah talkshow formal, program musik megah, atau ruang podcast intim).",
        didYouKnow: "Skala gambar arsitektur standar panggung televisi adalah 1:50 (1 sentimeter di atas kertas mewakili 50 sentimeter ukuran riil di studio).",
      },
      {
        title: "2. Menggambar Denah Lantai Studio (Ground Plan / Floor Plan)",
        content: "Floor Plan digambar tampak atas (top-down view) pada kertas berpetak. Menunjukkan dimensi luas studio, batas dinding kedap suara, letak pintu keluar darurat, posisi panggung peninggi (Riser), dan posisi sofa obrolan.",
      },
      {
        title: "3. Menggambar Tampak Depan dan Samping (Front Elevation Drawing)",
        content: "Elevation Drawing menggambarkan dinding panggung tegak lurus dari depan. Menunjukkan detail ketinggian dinding (misal 3 meter), letak jendela tiruan, posisi pigura foto, dan tinggi meja presenter terhadap lantai.",
      },
      {
        title: "4. Anatomi Panel Dinding Modular: Hard Flat vs Soft Flat",
        content: "Soft Flat: rangka kayu ditutup kain kanvas tebal (ringan namun mudah bergetar jika tersenggol). Hard Flat (Hollywood Flat): rangka kayu ditutup lembaran triplek tebal 4–6 mm (kokoh, tidak tembus cahaya, dan dapat dipasangi rak gantung).",
      },
      {
        title: "5. Struktur Penopang Segitiga Dinding: French Jack",
        content: "French Jack adalah segitiga penyangga kayu kokoh yang dibaut di belakang panel Flat. Bagian alas Jack ditindih dengan kantong pasir (Sandbags) berbobot 15-20 kg agar dinding tidak roboh saat tersenggol kru.",
        caseStudy: "Akibat lupa menaruh karung pasir di penopang Jack, dinding studio ambruk menimpa sofa presenter saat pintu studio terbuka dan angin kencang masuk.",
      },
      {
        title: "6. Panggung Peninggi Panggung (Riser / Rostrum Platform)",
        content: "Riser adalah panggung kayu modular (biasanya berukuran 1x2 meter dengan tinggi 20-40 cm). Fungsinya meninggikan posisi duduk presenter agar sudut pandang lensa kamera sejajar dengan mata (Eye Level) tanpa juru kamera harus membungkuk.",
      },
      {
        title: "7. Teknik Pengecatan Tekstur: Faux Brick (Tiruan Batu Bata)",
        content: "Langkah mengecat bata: (1) Cat dasar warna semen abu-abu, (2) Tempelkan pola isolasi kertas membentuk garis semen, (3) Tempelkan cat merah bata menggunakan spons cuci piring bertekstur, (4) Lepaskan isolasi dan semprotkan bayangan hitam tipis.",
      },
      {
        title: "8. Teknik Pengecatan: Faux Marble (Tiruan Marmer Mewah)",
        content: "Dasar putih gading dilapisi cat abu-abu tipis (Glaze). Gunakan kuas bulu ayam atau bulu halus untuk menggambar urat marmer (Marble Veins) yang acak berliku, lalu gosok lembut dengan lap kain basah agar menyatu alami.",
      },
      {
        title: "9. Teknik Pengecatan: Aging & Weathering (Efek Usang & Karat)",
        content: "Menciptakan kesan barang bersejarah atau bengkel tua: gunakan teknik 'Dry Brushing' (kuas kering berujung cat cokelat karat) dan percikan bintik cat hitam (Splattering) pada sudut-sudut perabot kayu.",
      },
      {
        title: "10. Pemanfaatan Material Styrofoam / Busa Padat (High-Density Foam)",
        content: "Styrofoam padat diukir dengan pisau kawat panas (Hot Wire Foam Cutter) untuk membuat pilar tiang Yunani klasik, ukiran relief dinding, atau patung batu raksasa yang ringan dan mudah digeser di studio.",
        didYouKnow: "Batu besar yang dilempar dalam film laga sering kali terbuat dari busa sofa bekas yang diukir dan dicat menyerupai batu kali granit.",
      },
      {
        title: "11. Ilusi Kedalaman Ruang: Forced Perspective",
        content: "Untuk membuat panggung studio sempit tampak seperti lorong istana yang panjang berkilo-kilometer, dinding panggung dan garis lantai dibuat menyempit miring ke arah titik hilang tengah (Forced Perspective).",
      },
      {
        title: "12. Perancangan Meja Presenter (Anchor Desk Ergonomics)",
        content: "Meja presenter berita harus dirancang ergonomis: tinggi meja 75 cm, permukaan meja miring 5 derajat ke arah presenter, memiliki rongga tersembunyi untuk kabel laptop dan stoples air minum, serta bagian depan tertutup panel dekoratif.",
      },
      {
        title: "13. Integrasi Pencahayaan Tersembunyi pada Set (Practical Lighting & LED Strips)",
        content: "Penata artistik memasang lampu LED Strip RGB di bawah tepian panggung atau di balik panel dinding akrilik susu (Backlit Panels). Memberikan garis tepi cahaya futuristik yang memikat di kamera siaran.",
      },
      {
        title: "14. Penggunaan Bahan Akrilik, Kaca Aman (Safety Glass) & Cermin",
        content: "Cermin asli dilarang keras ditaruh menghadap kamera karena akan memantulkan kru studio dan lampu. Jika naskah menuntut cermin, gunakan kaca mika akrilik yang disemprot tipis dulling spray agar pantulannya kabur.",
      },
      {
        title: "15. Pembuatan Properti Makanan Buatan (Fake Food Display)",
        content: "Makanan panas yang mengepul di kamera sering dibuat dari lilin wax, resin akrilik, dan busa sintetis. Asap kepulan uap dibuat dengan menyembunyikan kapas yang ditetesi cairan uap gliserin (Vape Smoke Tube).",
      },
      {
        title: "16. Standardisasi Sambungan Modular Panggung (Coffin Locks / Casket Locks)",
        content: "Panggung modular disambungkan menggunakan klem pengunci besi putar rahasia (Coffin Locks) dengan kunci heksagonal T-Wrench. Memungkinkan dua modul panggung mengunci rapat dalam 5 detik tanpa suara bising palu.",
      },
      {
        title: "17. Studi Kasus: Transformasi Set Talkshow Siang Menjadi Panggung Musik Malam",
        content: "Studio yang sama digunakan untuk 2 acara: dalam jeda waktu 40 menit, kru artistik menukar meja talkshow dengan drum band, membalik panel dinding dua sisi (Reversible Flats: sisi A kayu, sisi B grafiti pop-art).",
      },
      {
        title: "18. Standar Keamanan Kebakaran (Flame Retardant Treatment)",
        content: "Kain tirai panggung (Drapes / Curtains) dan panel kayu studio wajib disemprot cairan kimia tahan api (Flame Retardant Spray). Jika terkena panas ekstrem lampu studio, bahan tidak akan menyala berkobar melainkan hanya membara padam.",
      },
      {
        title: "19. Daur Ulang & Keberlanjutan Bahan Artistik (Sustainable Set)",
        content: "Gerakan Green Production industri media mewajibkan 70% material kayu panel dekorasi panggung dibongkar rapi dan digunakan kembali untuk program televisi musim berikutnya, mengurangi limbah pembuangan ke tempat sampah.",
      },
      {
        title: "20. Rangkuman & Karya Masterpiece Penata Panggung",
        content: "Membangun set panggung dan properti adalah perpaduan ilmu teknik sipil mikro, seni lukis rupa, dan sihir ilusi kamera. Jadilah perancang panggung yang berani berinovasi, cermat dalam ukuran presisi, dan kokoh dalam standar keselamatan kerja.",
      },
    ],
    video: {
      title: "Merancang dan Membangun Set Panggung Studio Televisi Profesional",
      embedUrl: "https://www.youtube.com/embed/W9l1X2c0V7U",
      guide: "Pelajari bagaimana arsitek set studio menggambar floor plan skala 1:50, merakit panel dinding flats, dan menerapkan teknik pengecatan faux finishes.",
    },
    gamePairs: [
      { id: 1, left: "Hollywood Flat", right: "Panel dinding kayu triplek modular penutup ruang studio yang kokoh" },
      { id: 2, left: "French Jack", right: "Segitiga penopang kayu penyangga panel dinding agar berdiri stabil" },
      { id: 3, left: "Riser Platform", right: "Panggung peninggi lantai studio untuk menyejajarkan sudut lensa kamera" },
      { id: 4, left: "Coffin Lock", right: "Klem pengunci mekanik tersembunyi antar modul panggung menggunakan kunci T" },
      { id: 5, left: "Flame Retardant", right: "Cairan kimia pelapis kain dan kayu panggung agar tahan rambatan api" },
    ],
    caseTitle: "Studi Kasus 3: Panel Dinding Panggung Bergoyang Saat Kamera Melewati Riser",
    caseScenario: "Di sebuah studio siaran langsung, penonton melihat dinding perpustakaan bergoyang setiap kali kamera pedestal 2 bergerak di atas panggung kayu. Hal ini merusak ilusi bahwa adegan berlangsung di dalam gedung permanen.",
    caseInstruction: "Jelaskan penyebab teknis terjadinya getaran tersebut antara lantai panggung (Riser) dan dinding (Flat), serta solusi struktural apa yang harus dipasang oleh Construction Coordinator!",
    sampleQuestions: [
      {
        id: 1609,
        bloom: "C4",
        stem: "Mengapa lantai panggung peninggi kamera (Riser Kamera) dilarang bersentuhan fisik langsung dengan panggung tempat aktor berjalan kaki?",
        options: [
          { key: "A", text: "Untuk mencegah getaran langkah kaki aktor merambat ke tripod kamera yang menyebabkan gambar di layar bergetar (vibration transfer)" },
          { key: "B", text: "Agar kabel listrik tidak saling bertubrukan" },
          { key: "C", text: "Karena tinggi panggung kamera harus lebih rendah dari panggung aktor" },
          { key: "D", text: "Merupakan aturan adat istiadat panggung pertunjukan" },
        ],
        correctKey: "A",
        explanation: "Pemisahan struktur fisik panggung (de-coupling) mencegah getaran mekanik langkah kaki merambat ke sensor kamera yang sedang merekam.",
      },
    ],
    lkpd: {
      title: "LKPD F6-K3: Pembuatan Sketsa Floor Plan Berskala & Miniatur Mock-up Panggung",
      objective: "Peserta didik mampu menggambar denah lantai studio berskala 1:50 dan membuat miniatur maket set panggung 3 dimensi dari bahan karton/duplex.",
      tools: ["Kertas Milimeter Blok / Software CAD / Canva", "Karton Duplex / Foamboard", "Gunting / Cutter / Lem Kayu", "Cat Akrilik"],
      steps: [
        "Gambar Floor Plan studio skala 1:50: tentukan dimensi panggung 4x3 meter lengkap dengan sofa dan backdrop.",
        "Potong karton foamboard untuk membuat 3 lembar modul dinding Flat skala miniatur.",
        "Terapkan teknik pengecatan Faux Brick atau Faux Wood pada permukaan miniatur dinding karton.",
        "Rakit miniatur maket panggung lengkap dengan penopang segitiga French Jack di bagian belakang.",
        "Uji sudut pandang miniatur menggunakan kamera smartphone pada posisi lensa wide.",
      ],
      outputFormat: "Gambar Gambar Denah Skala 1:50 Format PDF & Foto Maket Miniatur 3D Panggung.",
    },
    journalQuestions: {
      q1: "Bagaimana perasaan Anda saat berhasil mengubah bahan kayu murah menjadi ilusi dinding batu yang tampak nyata?",
      q2: "Mengapa perhitungan skala matematis sangat penting sebelum kru mulai memotong bahan kayu di bengkel?",
      q3: "Tindakan keselamatan kerja apa yang paling Anda utamakan saat bekerja dengan alat pemotong gergaji dan lem kimia?",
    },
    kktpIndicators: [
      "Mampu menggambar Floor Plan denah lantai panggung berskala 1:50 dengan notasi simbol standar arsitektur.",
      "Mampu menjelaskan teknik konstruksi panel modular (Flats), penopang (Jacks), dan panggung (Riser).",
      "Mampu mempraktikkan teknik pengecatan tekstur tiruan (Faux Finish) pada permukaan dekorasi panggung.",
    ],
  },

  // =========================================================================
  // KONTEN 4: Costume / wardrobe dan make up karakter (20 Slide)
  // =========================================================================
  {
    id: "f6-k4",
    order: 4,
    title: "4. Costume / wardrobe dan make up karakter",
    shortTitle: "Kostum & Make-Up Karakter",
    summary: "Manajemen tata busana siaran (Wardrobe Stylist), psikologi warna kostum, riasan wajah kamera HD/4K (Corrective & Character Make-up), dan perancangan lembar kontinuitas.",
    kompetensi: ["1. Menganalisis", "2. Merias & Menata Busana"],
    tujuanPembelajaran: [
      "Peserta didik mampu memilih dan menata kostum presenter televisi yang harmonis dengan pencahayaan dan bebas distorsi optik.",
      "Peserta didik mampu mengaplikasikan teknik tata rias wajah korektif HD (Corrective HD Make-up) anti-kilap kamera.",
    ],
    hookQuestion: "Mengapa presenter berita pria di televisi nasional tetap wajib dirias bedak tebal di wajahnya meskipun ia tidak ingin terlihat seperti memakai kosmetik wanita?",
    hookContext: "Di bawah pencahayaan lampu studio berkekuatan ribuan watt, minyak alami di kulit wajah manusia akan memantulkan cahaya putih menyilaukan (hotspot) yang membuat hidung dan dahi tampak basah berminyak di layar televisi jika tidak dilapisi bedak peredam pantulan.",
    pretestQuestions: [
      {
        id: 1610,
        bloom: "C2",
        stem: "Tujuan utama pengaplikasian tata rias wajah korektif (Corrective Make-up) pada presenter televisi berita adalah...",
        options: [
          { key: "A", text: "Menyamarkan ketidaksempurnaan wajah, meredam pantulan kilau minyak lampu, dan menonjolkan fitur alami wajah di depan kamera HD" },
          { key: "B", text: "Mengubah wajah presenter agar mirip seperti tokoh kartun" },
          { key: "C", text: "Membuat wajah terlihat sangat pucat seperti orang sakit" },
          { key: "D", text: "Menutupi seluruh mata dan alis presenter" },
        ],
        correctKey: "A",
        explanation: "Tata rias korektif bertujuan mengoreksi kekurangan wajah dan menghilangkan minyak agar wajah tampil prima di bawah sorotan lampu studio.",
      },
      {
        id: 1611,
        bloom: "C2",
        stem: "Warna pakaian busana presenter yang paling dihindari saat siaran di studio berita televisi karena dapat membuat wajah presenter tampak gelap tenggelam atau silau memantulkan cahaya adalah...",
        options: [
          { key: "A", text: "Warna Putih Murni Bersih (Pure Stark White) dan Hitam Pekat Total" },
          { key: "B", text: "Warna Biru Navy Pastel" },
          { key: "C", text: "Warna Cokelat Moka" },
          { key: "D", text: "Warna Abu-abu Sedang" },
        ],
        correctKey: "A",
        explanation: "Putih murni memantulkan cahaya berlebih yang membuat sensor kamera menurunkan eksposur (wajah menjadi gelap), sedangkan hitam pekat kehilangan detail bayangan.",
      },
    ],
    materialCards: [
      {
        title: "1. Peran Sentral Wardrobe & Make-Up di Industri Televisi",
        content: "Busana dan riasan adalah kartu identitas pertama yang diserap pemirsa televisi sebelum presenter membuka suara. Busana yang tepat memancarkan kewibawaan berita, kehangatan program keluarga, atau kemewahan panggung hiburan.",
        didYouKnow: "Warna busana yang paling direkomendasikan di seluruh stasiun televisi dunia adalah Biru (Broadcast Blue / Navy) karena memberikan kontras sempurna terhadap semua warna kulit manusia.",
      },
      {
        title: "2. Psikologi Warna Busana Presenter",
        content: "Biru Tua (Otoritas, ketenangan, kepercayaan - standar berita). Merah Marun (Energi, kehangatan, ketegasan talkshow). Hijau Zaitun/Earth Tone (Kenyamanan program dokumenter/lingkungan). Kuning Kunyit (Keceriaan program pagi / anak-anak).",
      },
      {
        title: "3. Larangan Warna Putih Bersih (Pure White Exclusion)",
        content: "Kamera video memiliki batas rentang dinamis (Dynamic Range). Kemeja putih bersih akan 'Bleeding' dan 'Blown Out' (over-exposed). Standar studio menggantinya dengan warna 'Off-White', krem gading (Ivory), atau biru muda pastel.",
      },
      {
        title: "4. Larangan Pola Kain Moiré dan Garis Geometris Kecil",
        content: "Kain bermotif garis tenun halus, houndstooth, atau polkadot mikro akan memicu konflik frekuensi spasial dengan susunan piksel sensor kamera, menghasilkan pola pelangi bergelombang yang berkedip-kedip di layar TV penonton.",
      },
      {
        title: "5. Menguji Kain Busana dengan Kamera Uji (Camera Test)",
        content: "Sebelum disetujui, Wardrobe Stylist menguji pakaian di bawah kamera studio: memeriksa apakah kain menimbulkan bunyi kresek gesekan pada mic clip-on (Rustle Noise) dan memastikan kain tidak tembus pandang di bawah sorot lampu kuat.",
        caseStudy: "Seorang presenter memakai blazer sutra tipis. Saat lampu latar (backlight) dinyalakan, siluet pakaian dalamnya terlihat tembus pandang di layar kaca. Stylist segera mengganti blazer berbahan katun tebal berlapis furing.",
      },
      {
        title: "6. Aksesoris Busana: Menghindari Pantulan Silau Logam",
        content: "Kalung logam mengkilap, bros perak besar, atau jam tangan krom dilarang karena memantulkan titik sinar lampu langsung ke lensa kamera. Pilih perhiasan bermotif 'Matte Finish' yang tidak bersuara gemerincing saat bergerak.",
      },
      {
        title: "7. Tantangan Rias Wajah di Era Kamera Resolusi 4K / 8K",
        content: "Lensa kamera modern menangkap setiap garis kerutan halus dan gumpalan bedak yang retak (cakey). Riasan HD menuntut aplikasi kosmetik yang sangat halus, transparan, namun memiliki daya tutup noda yang kuat.",
      },
      {
        title: "8. Tiga Pilar Tata Rias Wajah Korektif (Corrective Make-Up)",
        content: "(1) Cleansing & Skin Prep (membersihkan minyak wajah dan memberi primer mattifying), (2) Concealing & Foundation Matching (menyamakan warna leher dan wajah), (3) Contouring & Highlighting (mempertegas tulang pipi dan garis rahang di bawah lampu).",
      },
      {
        title: "9. Menghilangkan Kilau Minyak (De-Shining Protocol)",
        content: "Minyak wajah di area T-Zone (dahi, hidung, dagu) dihilangkan menggunakan 'Oil Blotting Paper' (kertas minyak), dilanjutkan bedak tabur transparan 'HD Silica Powder' tanpa warna yang tidak mengubah tone warna kulit asli.",
      },
      {
        title: "10. Penataan Riasan untuk Presenter Pria (Men's Grooming)",
        content: "Pria tidak dirias feminin: alis hanya disikat rapi, bayangan kumis/jenggot biru dihaluskan dengan concealer warna oranye tipis (Color Correction), bibir diberi pelembap matte non-kilap (Lip Balm Matte), dan wajah dibedaki anti-kilap.",
        didYouKnow: "Riasan presenter pria di ruang berita televisi biasanya hanya memakan waktu 7 menit, berfokus 100% pada penghilangan kilau minyak dahi dan hidung.",
      },
      {
        title: "11. Teori Roda Warna dalam Color Correction Make-Up",
        content: "Gunakan warna komplementer yang berseberangan: Concealer Oranye / Peach (menutupi kantung mata gelap kebiruan), Concealer Hijau (menetralkan jerawat atau ruam kulit kemerahan), Concealer Ungu (mencerahkan kulit kusam kekuningan).",
      },
      {
        title: "12. Tata Rambut yang Tahan Sorotan Panas Lampu (Hair Styling)",
        content: "Panas lampu studio membuat rambut cepat lepek berkeringat. Hair Stylist menggunakan hairspray berkekuatan kuat (Strong Hold) dan menyematkan jepit rambut tak terlihat (Bobby Pins) agar rambut tidak jatuh menutupi mata presenter saat menunduk membaca teks.",
      },
      {
        title: "13. Riasan Karakter Khusus (Character & SFX Make-Up)",
        content: "Untuk program drama: membuat efek penuaan (Liquid Latex untuk kerutan kulit), luka sayat (Wax modeling & darah sintetis berbahan sirup jagung dan pewarna makanan), dan efek lebam memar menggunakan palet alkohol (Alcohol Activated Palette).",
      },
      {
        title: "14. Pengelolaan Lembar Kontinuitas Wardrobe & Make-Up",
        content: "Asisten Wardrobe memotret aktor dari 4 sisi (Depan, Belakang, Kiri, Kanan) setelah dirias pada Scene 1. Lembar foto ditempel di cermin rias untuk memastikan gaya rambut dan ikatan dasi pada Scene 2 tidak berubah.",
      },
      {
        title: "15. Manajemen Ruang Rias dan Lemari Kostum (Wardrobe Department)",
        content: "Ruang rias dilengkapi cermin berlampu keliling dengan temperatur warna 5600K (Daylight balanced). Kostum digantung rapi dalam kantong pakaian (Garment Bags) bertuliskan nama karakter dan nomor scene.",
      },
      {
        title: "16. Kesiapan Sentuhan Ulang Kilat Saat Jeda Iklan (Commercial Touch-Up)",
        content: "Begitu sutradara berseru 'Commercial Break 2 menit!', Make-Up Artist dan Stylist segera berlari ke lantai studio: menyeka keringat presenter dengan spons bersih, membetulkan posisi kerah kemeja, dan merapikan mic clip-on dalam 60 detik.",
      },
      {
        title: "17. Higienitas & K3 Alat Kosmetik Studio",
        content: "Kuas rias wajib dicuci dan disemprot alkohol 70% di antara penggunaan antar orang berbeda untuk mencegah penularan penyakit kulit atau iritasi mata. Dilarang mencelupkan aplikator lipstik langsung ke bibir talent (gunakan spatula palet).",
      },
      {
        title: "18. Studi Kasus: Penyelamatan Keringat Berlebih Presenter Debat Live",
        content: "Di panggung debat yang panas, seorang kandidat berkeringat deras di pelipisnya. Saat jeda iklan 90 detik, MUA menggunakan 'Antiperspirant Gel Face Primer' khusus dan menekan lembut dengan spons bedak padat tanpa merusak foundation awal.",
      },
      {
        title: "19. Etika Menghargai Kenyamanan dan Batas Personal Talent",
        content: "Penata busana dan perias wajib bersikap santun, meminta izin sebelum menyentuh wajah atau pakaian pengisi acara ('Permisi, saya rapikan dasinya ya'), dan menjaga suasana ruang rias tetap tenang dan menyenangkan.",
      },
      {
        title: "20. Rangkuman & Daya Pikat Visual Karakter",
        content: "Kostum dan tata rias adalah sentuhan akhir kemanusiaan pada karya audio visual. Melalui pemahaman kepekaan warna kamera HD dan ketelitian menjaga kontinuitas, Anda membuat pengisi acara tampil percaya diri dan mempesona di hadapan pemirsa.",
      },
    ],
    video: {
      title: "Teknik Make-Up Khusus Kamera Studio HD dan Pemilihan Kostum Siaran",
      embedUrl: "https://www.youtube.com/embed/5mK_J1p0N2s",
      guide: "Pelajari cara aplikasi foundation HD anti-kilap, color correction kantung mata, penataan rambut studio, dan pemilihan warna busana anti-moiré.",
    },
    gamePairs: [
      { id: 1, left: "Corrective Make-Up", right: "Riasan wajah untuk menyamarkan ketidaksempurnaan dan menghilangkan minyak kilap lampu" },
      { id: 2, left: "Moiré Pattern", right: "Distorsi visual pelangi bergelombang akibat motif pakaian presenter terlalu rapat" },
      { id: 3, left: "Off-White", right: "Warna putih gading pengganti putih murni untuk mencegah over-exposure di kamera" },
      { id: 4, left: "Color Correction Concealer", right: "Teknik menetralkan noda kulit menggunakan warna komplementer yang berseberangan" },
      { id: 5, left: "Touch-Up", right: "Prosedur perbaikan kilat bedak dan rambut presenter saat jeda iklan berlangsung" },
    ],
    caseTitle: "Studi Kasus 4: Dahi Presenter Berkilau Silau di Tengah Siaran Berita Malam",
    caseScenario: "Di tengah siaran langsung berita malam pukul 21.00 WIB, lampu sorot studio membuat dahi dan batang hidung presenter pria berkilau minyak putih menyilaukan di kamera 1, mengalihkan fokus perhatian pemirsa dari isi berita.",
    caseInstruction: "Sebagai Make-Up Artist yang standby di sisi studio, langkah cepat apa yang Anda persiapkan di tangan Anda dan bagaimana protokol eksekusinya tepat saat sutradara melempar siaran ke jeda komersial 2 menit?",
    sampleQuestions: [
      {
        id: 1612,
        bloom: "C4",
        stem: "Mengapa presenter berita televisi perempuan disarankan menghindari penggunaan lipstik berbahan glossy (mengkilap basah) atau perona mata (eyeshadow) berglitter tebal saat siaran?",
        options: [
          { key: "A", text: "Karena partikel glitter dan kilap minyak memantulkan cahaya lampu studio secara tidak terkontrol dan memberikan kesan tidak formal di program berita" },
          { key: "B", text: "Karena glitter dapat merusak lensa kamera" },
          { key: "C", text: "Karena lipstik glossy dilarang oleh serikat jurnalis internasional" },
          { key: "D", text: "Agar pembaca berita terlihat lebih tua dari usia aslinya" },
        ],
        correctKey: "A",
        explanation: "Pantulan glitter menciptakan bintik putih silau liar di layar kamera definisi tinggi dan mengurangi kesan kredibilitas formal ruang berita.",
      },
    ],
    lkpd: {
      title: "LKPD F6-K4: Perancangan Desain Wardrobe & Praktik Tata Rias Wajah Korektif HD",
      objective: "Peserta didik mampu memilih paduan busana siaran bebas moiré dan mempraktikkan tata rias wajah korektif anti-kilap pada rekan sekelas.",
      tools: ["Perlengkapan Make-Up (Bedak Tabur Transparan, Concealer, Spons, Kuas)", "Kamera Smartphone / Mirror", "Koleksi Busana Kemeja & Blazer"],
      steps: [
        "Pilih paduan busana untuk presenter berita pria atau wanita (hindari putih murni dan garis renik).",
        "Lakukan pembersihan wajah rekan model dengan micellar water.",
        "Aplikasikan color correction peach pada area bawah mata dan ratakan foundation tipis.",
        "Kunci seluruh permukaan T-Zone dengan bedak tabur transparan menggunakan kuas bedak.",
        "Uji hasil riasan di bawah pencahayaan lampu studio / senter dan ambil foto perbandingan Before vs After.",
      ],
      outputFormat: "Foto Dokumentasi Busana & Foto Before/After Hasil Riasan Wajah Korektif HD.",
    },
    journalQuestions: {
      q1: "Mengapa riasan wajah di depan kamera televisi memiliki teknik yang sangat berbeda dengan riasan pesta pernikahan?",
      q2: "Bagaimana cara Anda memberikan masukan dengan sopan kepada presenter yang memakai baju bermotif moiré tanpa membuatnya tersinggung?",
      q3: "Mengapa higienitas alat kuas make-up menjadi tanggung jawab moral dan keselamatan kerja perias?",
    },
    kktpIndicators: [
      "Mampu menganalisis pemilihan warna dan motif busana presenter televisi bebas distorsi optik Moiré.",
      "Mampu mengaplikasikan teknik tata rias korektif wajah HD peredam kilap minyak lampu kamera.",
      "Mampu menyusun lembar dokumentasi kontinuitas busana dan riasan per adegan secara akurat.",
    ],
  },

  // =========================================================================
  // KONTEN 5: Setting interior/eksterior studio & evaluasi (20 Slide)
  // =========================================================================
  {
    id: "f6-k5",
    order: 5,
    title: "5. Setting interior/eksterior studio & evaluasi",
    shortTitle: "Setting Panggung & Evaluasi",
    summary: "Prosedur instalasi set panggung di studio (Rigging & Dressing), penyesuaian sudut tembak kamera multi-angle, tata kelola studio luar ruangan, dan evaluasi artistik pasca-siar.",
    kompetensi: ["1. Menginstalasi", "2. Mengevaluasi"],
    tujuanPembelajaran: [
      "Peserta didik mampu melaksanakan prosedur instalasi panggung dekorasi studio (Set Rigging & Dressing) secara aman dan kokoh.",
      "Peserta didik mampu mengevaluasi keselarasan tata artistik panggung terhadap komposisi shot kamera dan estetika siaran.",
    ],
    hookQuestion: "Setelah seluruh dekorasi panggung studio yang megah selesai dibangun selama 3 hari, mengapa penata artistik justru merasa kecewa berat saat melihat gambar pertama dari Kamera 2 di layar monitor kontrol?",
    hookContext: "Keindahan dekorasi panggung di mata telanjang manusia sering kali menipu. Keberhasilan tata artistik hanya dinilai dari apa yang ditangkap oleh bingkai lensa kamera (Framing). Jika sudut kamera justru menangkap kabel lampu yang menggantung di belakang set, panggung megah tersebut dianggap gagal secara teknis.",
    pretestQuestions: [
      {
        id: 1613,
        bloom: "C2",
        stem: "Proses penataan akhir dekorasi panggung seperti meletakkan taplak meja, menata buku di rak, memasang bunga hiasan, dan memastikan kebersihan set sebelum syuting disebut...",
        options: [
          { key: "A", text: "Set Dressing" },
          { key: "B", text: "White Balance" },
          { key: "C", text: "Audio Patching" },
          { key: "D", text: "Video Switching" },
        ],
        correctKey: "A",
        explanation: "Set Dressing adalah sentuhan akhir penataan barang-barang dekoratif panggung agar set panggung terlihat hidup dan alami.",
      },
      {
        id: 1614,
        bloom: "C2",
        stem: "Istilah teknis penyiaran untuk kebocoran visual di mana kamera secara tidak sengaja merekam area di luar batas dekorasi panggung (seperti dinding gudang studio atau kabel gantung) disebut...",
        options: [
          { key: "A", text: "Shooting off the set / Bocor Visual" },
          { key: "B", text: "Depth of Field" },
          { key: "C", text: "Color Grading" },
          { key: "D", text: "Audio Bleeding" },
        ],
        correctKey: "A",
        explanation: "'Shooting off the set' terjadi jika ukuran set panggung terlalu kecil atau juru kamera mengambil sudut terlalu lebar hingga batas tepi panggung terlihat.",
      },
    ],
    materialCards: [
      {
        title: "1. Dari Desain Gambar Menuju Realitas Panggung Studio",
        content: "Tahap instalasi setting panggung (Load-In & Rigging) adalah proses memindahkan panel dinding, perabot, dan lampu ke lantai studio. Membutuhkan ketepatan jadwal, ketangkasan pertukangan, dan koordinasi dengan divisi kelistrikan gedung.",
        didYouKnow: "Di stasiun televisi nasional, tim dekorasi malam (Night Shift Crew) bekerja mulai pukul 23.00 hingga 05.00 pagi untuk membongkar dan memasang set baru sebelum program siaran pagi dimulai.",
      },
      {
        title: "2. Prosedur Load-In dan Penempatan Posisi Utama",
        content: "Langkah awal instalasi: (1) Bersihkan lantai studio, (2) Tandai posisi panggung di lantai dengan lakban gaffer tape sesuai Floor Plan, (3) Pasang panggung peninggi (Riser), (4) Dirikan panel dinding Flats dari sudut belakang ke depan.",
      },
      {
        title: "3. Penguncian Struktur & Pengamanan Kantong Pasir (Ballast)",
        content: "Setiap sambungan panel dinding diperiksa: klem pengunci diputar kencang, baut penyangga segitiga diperiksa kekuatannya, dan karung pasir dipasang di setiap kaki penopang. Dilarang meninggalkan dinding yang berdiri goyah.",
      },
      {
        title: "4. Seni 'Set Dressing': Menghidupkan Jiwa Ruang Panggung",
        content: "Set Dresser menata pernak-pernik: buku ditata tidak terlalu rapi (agar terlihat seperti sering dibaca), tanaman hijau ditaruh di sudut mati (dead corner) untuk melembutkan garis kaku dinding, dan bantal sofa diposisikan rapi.",
      },
      {
        title: "5. Menguji Batas Bidik Kamera (Checking The Frame Lines)",
        content: "Art Director duduk di ruang kontrol PCR bersama Sutradara. Menyalakan Kamera 1, 2, dan 3 pada sudut paling ekstrem (Paling Kiri, Paling Kanan, dan Paling Lebar). Memastikan tidak ada dinding studio kosong yang bocor di tepi frame (Shooting off the set).",
        caseStudy: "Saat Kamera 3 mengambil sudut over-the-shoulder tamu, ujung tiang lampu studio terlihat di pojok kanan atas. Solusi: menambah selembar panel Flat ekstensi selebar 60 cm di sisi samping set.",
      },
      {
        title: "6. Penyesuaian Kedalaman Visual (Depth of Field & Layering)",
        content: "Panggung tidak boleh datar seperti lukisan 2D. Bagi ruang menjadi 3 lapisan: (1) Latar Depan / Foreground (tepian meja/tanaman), (2) Latar Tengah / Midground (presenter duduk), (3) Latar Belakang / Background (rak buku bertekstur).",
      },
      {
        title: "7. Mengatasi Masalah Pantulan Cahaya (Dulling Protocol)",
        content: "Saat lampu dinyalakan, periksa seluruh permukaan set: jika ada pigura foto berkaca atau meja pernis memantulkan kilau lampu, semprotkan Dulling Spray matte atau miringkan sudut pigura foto 5 derajat ke bawah.",
      },
      {
        title: "8. Pemasangan Panggung Luar Studio (Outdoor Event Staging)",
        content: "Instalasi panggung outdoor menghadapi tantangan cuaca: lantai panggung wajib memiliki kemiringan mikro 1 derajat agar air hujan mengalir, atap panggung (Rigging Truss) dirancang tahan hembusan angin 60 km/jam, dan kabel daya dibungkus karet pelindung kabel (Cable Ramps).",
      },
      {
        title: "9. Manajemen Kabel Tersembunyi (Cable Concealment)",
        content: "Di lantai studio siaran, tidak boleh ada kabel mikrofon atau kabel lampu yang terlihat kamera. Seluruh kabel dialirkan di bawah karpet panggung atau disembunyikan di balik list plin panel dinding panggung.",
      },
      {
        title: "10. Pengaturan Suhu & Bau Bahan Cat Panggung",
        content: "Studio ber-AC kedap udara dapat memerangkap bau cat tiner yang menyengat dan membuat presenter pusing. Syarat mutlak: pengecatan panggung wajib menggunakan cat emulsi berbahan dasar air (Water-Based Acrylic) yang bebas bau (Low VOC).",
        didYouKnow: "Pengecatan ulang panel dinding panggung di dalam studio tertutup wajib selesai minimal 4 jam sebelum talent masuk studio agar sirkulasi udara bersih kembali.",
      },
      {
        title: "11. Peran Standby Props Master Selama Siaran Berlangsung",
        content: "Saat siaran live, seorang asisten artistik (Standby Prop) berjaga di sayap panggung studio dengan sarung tangan bersih, kain mikrofiber, dan lem perekat cepat (Hot Glue Gun / Gaffer Tape) untuk perbaikan darurat.",
      },
      {
        title: "12. Evaluasi Harmoni Warna Panggung terhadap Warna Kulit (Skin Tone Check)",
        content: "Nyalakan vectorscope dan monitor warna di PCR: pastikan warna kulit wajah presenter tidak terkontaminasi bias pantulan warna dinding panggung (misal dinding panggung hijau neon yang memantulkan rona kehijauan ke pipi presenter).",
      },
      {
        title: "13. Evaluasi Keselarasan Grafis On-Screen dengan Set Fisik",
        content: "Bentuk arsitektur panggung harus selaras dengan paket grafis komputer (Lower Third dan Opening Bumper). Jika panggung berdesain lengkung futuristik, grafis layar juga menggunakan garis lengkung modern.",
      },
      {
        title: "14. Pembongkaran Cepat Pasca Siaran (Strike / De-Rigging)",
        content: "Begitu pengarah acara menyatakan 'Wrap!', tim pembongkar (Strike Crew) segera bekerja: perabot sewa dibungkus plastik pelindung (Bubble Wrap), panel Flat dilepas dari klem pengunci, dan paku-paku dicabut dari kayu agar tidak melukai orang.",
      },
      {
        title: "15. Pemilahan Sampah & Manajemen Daur Ulang Panggung",
        content: "Sisa kayu balok yang masih utuh disimpan di rak penyimpanan, styrofoam utuh dikumpulkan kembali, dan sisa kaleng cat ditutup rapat untuk didaur ulang sesuai POS keselamatan lingkungan.",
      },
      {
        title: "16. Penyusunan Lembar Laporan Evaluasi Artistik (Art Post-Mortem Report)",
        content: "Art Director menyusun laporan: mencatat perabot yang mengalami kerusakan selama syuting, mengevaluasi efisiensi waktu instalasi, dan mencatat perbaikan desain untuk produksi episode berikutnya.",
      },
      {
        title: "17. Audit Biaya Kerusakan dan Pengembalian Uang Jaminan Sewa",
        content: "Tim artistik mengembalikan perabot ke vendor rental properti: memeriksa bersama kondisi fisik barang untuk memastikan uang deposit jaminan sewa (Security Deposit) dapat dicairkan kembali 100%.",
      },
      {
        title: "18. Studi Kasus: Mengatasi Meja Presenter Goyang Saat Siaran Live Dimulai",
        content: "Tiga menit sebelum on-air, presenter duduk di meja dan meja terasa bergoyang karena lantai studio tidak rata. Standby Prop segera menyisipkan ganjal karet tipis (Rubber Wedge) di bawah kaki meja dan mengunci posisinya dalam 30 detik.",
      },
      {
        title: "19. Tren Virtual Set Hybrid: Memadukan Meja Fisik & Latar LED Virtual",
        content: "Panggung berita masa kini memadukan meja fisik nyata (Real Desk) tempat presenter duduk dengan latar belakang layar LED lengkung raksasa yang menampilkan visual ruang redaksi virtual beresolusi tinggi yang bergerak sinkron dengan sensor kamera (Camera Tracking).",
      },
      {
        title: "20. Rangkuman & Tanggung Jawab Profesional Tata Artistik",
        content: "Menginstalasi dan mengevaluasi panggung dekorasi adalah ujian kepemimpinan fisik, kedisiplinan keselamatan kerja, dan ketajaman mata estetika visual. Ruang panggung yang kokoh dan indah adalah mahakarya persembahan Anda bagi kemegahan industri penyiaran.",
      },
    ],
    video: {
      title: "Pemasangan Set Studio dan Penyesuaian Sudut Pandang Kamera Televisi",
      embedUrl: "https://www.youtube.com/embed/k8j-L2u3T6E",
      guide: "Pelajari prosedur instalasi panggung studio, teknik set dressing, pengamanan struktur dengan kantong pasir, dan evaluasi frame line kamera di monitor kontrol.",
    },
    gamePairs: [
      { id: 1, left: "Load-In", right: "Proses memasukkan dan memindahkan material panggung ke dalam lantai studio" },
      { id: 2, left: "Shooting Off The Set", right: "Kesalahan sudut bidik kamera yang merekam area luar batas dekorasi panggung" },
      { id: 3, left: "Cable Concealment", right: "Teknik menyembunyikan jalur kabel di bawah karpet atau plin dinding panggung" },
      { id: 4, left: "Dulling Spray", right: "Cairan semprot peredam kilau pantulan lampu pada permukaan properti kaca/logam" },
      { id: 5, left: "Strike", right: "Proses pembongkaran dekorasi panggung secara sistematis setelah syuting selesai" },
    ],
    caseTitle: "Studi Kasus 5: Panggung Talkshow Bocor Visual di Sudut Kamera Lebar (Wide Shot)",
    caseScenario: "Di gladi resik pertama, saat Kamera 2 mengambil Master Wide Shot panggung talkshow, dinding studio gudang berwarna kusam dan tangga darurat terlihat bocor di tepi kiri layar kaca penonton sepanjang 1 meter.",
    caseInstruction: "Sebagai Art Director yang bertanggung jawab di studio, sebutkan 2 solusi fisik artistik cepat (tanpa harus membongkar seluruh panggung) untuk menutup kebocoran visual tersebut dalam waktu 30 menit!",
    sampleQuestions: [
      {
        id: 1615,
        bloom: "C5",
        stem: "Jika dalam evaluasi gambar di monitor kontrol ditemukan bahwa warna dinding panggung memantulkan rona warna (color cast) yang membuat kulit wajah presenter tampak pucat kehijauan, tindakan paling tepat dari penata artistik adalah...",
        options: [
          { key: "A", text: "Menyetel ulang temperatur lampu pengisi (Fill Light) dengan filter koreksi warna atau melapisi dinding panggung dengan kain pembatas warna netral" },
          { key: "B", text: "Menyuruh presenter memakai kacamata hitam" },
          { key: "C", text: "Mematikan seluruh monitor kontrol di ruang PCR" },
          { key: "D", text: "Mengganti presenter dengan presenter lain" },
        ],
        correctKey: "A",
        explanation: "Color cast terjadi karena pantulan cahaya dinding yang tidak netral. Menggunakan filter koreksi warna pada lampu atau menaruh pemisah visual netral akan menetralkan warna kulit kembali.",
      },
    ],
    lkpd: {
      title: "LKPD F6-K5: Prosedur Instalasi Set Dressing & Checklist Evaluasi Frame Line Kamera",
      objective: "Peserta didik mampu melaksanakan simulasi instalasi Set Dressing meja studio dan melakukan audit evaluasi frame line kamera 3 sudut pandang.",
      tools: ["Studio Mini / Ruang Kelas", "Meja & Kursi Talkshow", "Kamera Video / Smartphone", "Formulir Checklist Evaluasi Artistik"],
      steps: [
        "Tata meja dan dua kursi di depan backdrop ruang kelas dengan jarak 1,5 meter dari dinding.",
        "Lakukan Set Dressing: letakkan taplak meja netral, mug keramik anti-pantulan, dan tanaman hias di samping kursi.",
        "Uji sudut pandang 3 kamera: Kamera 1 (Tengah), Kamera 2 (Kiri), Kamera 3 (Kanan).",
        "Periksa apakah ada kabel atau objek mengganggu yang bocor masuk ke batas sudut tembak kamera.",
        "Isi tabel checklist evaluasi artistik dan rumuskan rekomendasi perbaikan estetika panggung.",
      ],
      outputFormat: "Dokumen Checklist Evaluasi Frame Line Format PDF & Foto Dokumentasi Set Siap Siar.",
    },
    journalQuestions: {
      q1: "Mengapa keindahan panggung di mata penonton studio belum tentu terlihat indah di layar televisi penonton rumah?",
      q2: "Apa tantangan terbesar saat Anda harus memasang dan membongkar dekorasi panggung dalam batas waktu yang sangat sempit?",
      q3: "Bagaimana cara Anda menumbuhkan budaya kerja sama tim dan keselamatan kerja saat memindahkan perabot panggung yang berat?",
    },
    kktpIndicators: [
      "Mampu menerapkan prosedur instalasi panggung dekorasi studio (Load-In, Rigging, dan Dressing) secara teratur.",
      "Mampu mengevaluasi batas bidang bidik kamera (Frame Lines) dan mencegah insiden kebocoran visual panggung.",
      "Mampu menyusun laporan evaluasi pasca-produksi tata artistik (Art Post-Mortem Report) secara akuntabel.",
    ],
  },
];
