import { ElemenContentItem, DEFAULT_ELEMEN_SUBMENUS } from "./curriculum-types";

export const P1_CONTENTS: ElemenContentItem[] = [
  // =========================================================================
  // KONTEN 1: p1-k1 - Prosedur Tahapan 3D & Antarmuka Blender
  // =========================================================================
  {
    id: "p1-k1",
    order: 1,
    title: "Prosedur tahapan produksi desain 3 dimensi dan pengenalan Blender",
    shortTitle: "Prosedur 3D & Blender",
    summary:
      "Pengenalan industri grafik 3 dimensi: alur produksi standar (Modeling, UV Unwrapping, Shading/Texturing, Rigging, Animating, Lighting, Rendering, Compositing), navigasi ruang 3D (X, Y, Z axis), manipulasi transformasi dasar (Grab, Rotate, Scale), dan manajemen workspace di Blender.",
    kompetensi: [
      "Memahami",
      "Mengoperasikan",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu memahami prosedur tahapan produksi desain 3 dimensi.",
      "Peserta didik mampu mengoperasikan antarmuka dan fitur dasar perangkat lunak Blender.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Jika dalam ruang 2 dimensi kita hanya memiliki sumbu X (lebar) dan sumbu Y (tinggi), bagaimana penambahan satu sumbu Z (kedalaman) di software 3D mampu menciptakan ilusi dunia virtual yang tak terbatas?",
    hookContext:
      "Grafik 3 dimensi merekonstruksi ruang matematis nyata di dalam komputer. Sumbu X (merah), sumbu Y (hijau), dan sumbu Z (biru) memungkinkan seniman meletakkan kamera virtual, sumber cahaya buatan, dan benda padat yang bisa dilihat dari 360 derajat.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Tiga tombol pintas (shortcut) fundamental pada Blender untuk melakukan translasi geser, rotasi putar, dan pengubahan ukuran objek berturut-turut adalah...",
        options: [
          { key: "A", text: "G (Grab), R (Rotate), S (Scale)" },
          { key: "B", text: "M (Move), T (Turn), Z (Zoom)" },
          { key: "C", text: "Ctrl+C, Ctrl+V, Ctrl+Z" },
          { key: "D", text: "Alt+A, Alt+S, Alt+D" },
        ],
        correctKey: "A",
        explanation: "G (Grab/Translate), R (Rotate), dan S (Scale) adalah trias tombol transformasi dasar yang paling sering digunakan dalam ekosistem Blender.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Fitur titik jangkar melingkar merah-putih di Blender yang berfungsi sebagai titik acuan penempatan objek baru dan pusat rotasi kursor disebut...",
        options: [
          { key: "A", text: "Origin Point" },
          { key: "B", text: "3D Cursor" },
          { key: "C", text: "Bounding Box" },
          { key: "D", text: "Vertex Buffer" },
        ],
        correctKey: "B",
        explanation: "3D Cursor adalah penanda lokasi unik di Blender yang menentukan di mana objek primitif baru akan diciptakan atau menjadi titik poros transformasi (Pivot Point).",
      },
    ],
    materialCards: [
      {
        title: "1. Selamat Datang di Dunia Grafis 3 Dimensi",
        content: "Grafis 3D adalah representasi digital matematis dari objek fisik tiga dimensi dalam ruang komputer. Industri 3D kini merambah ke segala lini: efek visual film Hollywood (VFX), animasi bioskop, video game, visualisasi arsitektur, simulasi medis, hingga virtual studio pertelevisian.",
        caseStudy: "Studio film modern menggabungkan aktor nyata di depan green screen dengan latar belakang set kota 3D photorealistic yang dibuat di Blender/Unreal Engine.",
        didYouKnow: "Blender adalah software 3D open-source kelas dunia yang 100% gratis, dikembangkan oleh Blender Foundation di Amsterdam dan digunakan oleh studio animasi pemenang Oscar."
      },
      {
        title: "2. The 3D Production Pipeline: Dari Konsep ke Render",
        content: "Tahapan produksi 3D standar terbagi menjadi 8 fase: (1) Modeling (membuat bentuk mesh), (2) UV Unwrapping (membentangkan permukaan 3D ke 2D), (3) Shading/Texturing (memberi warna dan material kulit/kayu/besi), (4) Rigging (memasang kerangka tulang), (5) Animating (menggerakkan), (6) Lighting (pencahayaan), (7) Rendering (komputasi gambar final), dan (8) Compositing.",
      },
      {
        title: "3. Sistem Koordinat Kartesius: Sumbu X, Y, dan Z",
        content: "Blender menggunakan sistem koordinat tangan kanan: Sumbu X (Garis Merah) menunjukkan arah Kiri-Kanan (Horizontal), Sumbu Y (Garis Hijau) menunjukkan arah Maju-Mundur (Kedalaman), dan Sumbu Z (Garis Biru) menunjukkan arah Atas-Bawah (Ketinggian vertikal).",
      },
      {
        title: "4. Navigasi 3D Viewport Menggunakan Mouse",
        content: "Kuasai kontrol mouse 3 tombol: Klik & Tahan Roda Tengah Mouse (MMB) = Orbit memutar sudut pandang ruang; Shift + MMB = Panning menggeser layar; Putar Scroll Roda Mouse = Zooming mendekat/menjauh.",
      },
      {
        title: "5. Navigasi Cepat Numpad (Keyboard Angka)",
        content: "Kamera pandang ortografis presisi: Numpad 1 = Front View (Tampak Depan), Numpad 3 = Right View (Tampak Kanan), Numpad 7 = Top View (Tampak Atas), Numpad 9 = Membalik pandangan 180°, Numpad 0 = Beralih ke sudut pandang Kamera Aktif, dan Numpad . (Titik) = Fokus ke objek terpilih.",
      },
      {
        title: "6. Transformasi Presisi: G, R, dan S dengan Kunci Sumbu",
        content: "Tekan G lalu X untuk menggeser objek hanya di sumbu horizontal merah. Tekan R lalu Z lalu ketik angka '90' pada keyboard untuk memutar objek tepat 90 derajat di poros vertikal. Tekan S lalu Shift+Z untuk memperbesar objek hanya pada bidang datar tanpa mengubah tingginya.",
      },
      {
        title: "7. Objek Primitif Mesh (Mesh Primitives)",
        content: "Semua model 3D kompleks bermula dari objek geometris dasar (Shift + A): Cube (Kubus), UV Sphere (Bola teratur), Ico Sphere (Bola segitiga), Cylinder (Silinder), Cone (Kerucut), Torus (Donat), Plane (Bidang datar), dan Suzanne si Monyet maskot resmi Blender.",
      },
      {
        title: "8. Anatomi Dasar Geometri: Vertices, Edges, Faces",
        content: "Model 3D terbentuk dari jaring poligon (Mesh): Vertex (titik sudut tunggal), Edge (garis penghubung antara dua vertex), dan Face (bidang permukaan datar yang ditutup minimal 3 atau 4 edge). Model yang ideal untuk animasi menggunakan Quad Polygons (bidang bersegi empat).",
      },
      {
        title: "9. Perbedaan Fundamental: Object Mode vs Edit Mode",
        content: "Object Mode (tombol Tab) memperlakukan objek sebagai satu kesatuan utuh untuk mengatur posisi dan tata letak dunia. Edit Mode (tombol Tab) memungkinkan seniman memanipulasi titik-titik vertex individual di dalam objek untuk memahat bentuk baru.",
      },
      {
        title: "10. Memahami Origin Point (Titik Pusat Massa Objek)",
        content: "Origin Point adalah titik oranye kecil di tengah objek yang menjadi pusat perhitungan matematis koordinat posisi, rotasi, dan skala objek. Jika origin point berada di luar objek, objek akan berputar mengitari titik tersebut seperti satelit.",
      },
      {
        title: "11. 3D Cursor: Tongkat Sihir Penempatan Objek",
        content: "Klik Shift + Klik Kanan untuk menempatkan 3D Cursor di mana saja di ruang 3D. Objek baru yang ditambahkan (Shift + A) akan otomatis lahir tepat di posisi 3D Cursor berada. Kembalikan 3D Cursor ke pusat koordinat dunia (0,0,0) dengan menekan Shift + C.",
      },
      {
        title: "12. Panel Outliner: Manajemen Hierarki & Koleksi",
        content: "Panel Outliner di pojok kanan atas menampilkan seluruh daftar objek di scene. Gunakan fitur 'Collection' (folder objek) untuk mengelompokkan: Koleksi Kamera, Koleksi Lampu, Koleksi Karakter, dan Koleksi Lingkungan agar proyek tetap terorganisir rapi.",
      },
      {
        title: "13. Panel Properties: Jantung Pengaturan Blender",
        content: "Berisi tab-tab ikon vertikal: Render Properties (Eevee/Cycles), Output Properties (resolusi 1080p, FPS), Scene & World (warna langit/latar belakang), Object Properties (posisi transform), Modifiers (alat pemroses otomatis), dan Material Properties (pewarnaan).",
      },
      {
        title: "14. Shading Workspace & 4 Mode Tampilan Viewport",
        content: "Pojok kanan atas viewport memiliki 4 bola mode tampilan (tekan tombol Z): (1) Wireframe (garis transparan), (2) Solid (model abu-abu polos untuk kenyamanan modeling), (3) Material Preview (melihat tekstur warna dengan lampu HDRI bawaan), dan (4) Rendered (simulasi pencahayaan dan bayangan nyata).",
      },
      {
        title: "15. Peran Krusial: Apply Transform (Ctrl + A)",
        content: "Setelah memperbesar objek di Object Mode, nilai Skala di panel Transform sering berubah dari 1.0 menjadi angka acak (misal 2.5). Wajib tekan Ctrl + A lalu pilih 'Apply All Transforms' agar nilai skala kembali menjadi 1.0, jika tidak, modifier Bevel atau simulasi fisika akan terdistorsi cacat.",
        caseStudy: "Pemula sering bingung mengapa modifier Bevel menghasilkan sudut miring tajam tidak beraturan, itu karena ia lupa menekan Ctrl + A untuk meng-apply scale objek.",
      },
      {
        title: "16. Workspace Khusus: Dari Modeling hingga Compositing",
        content: "Bilah atas Blender menyediakan tata letak kerja siap pakai yang disesuaikan untuk setiap fase produksi: Layout, Modeling, Sculpting, UV Editing, Texture Paint, Shading, Animation, Rendering, Compositing, dan Geometry Nodes.",
      },
      {
        title: "17. Fitur Duplikasi Objek: Duplicate Linked (Alt + D) vs (Shift + D)",
        content: "Shift + D membuat salinan objek baru yang independen. Alt + D membuat salinan terhubung (Linked Duplicate) yang berbagi data mesh yang sama; jika Anda mengubah bentuk satu pilar di Edit Mode, puluhan pilar hasil Alt + D lainnya akan berubah otomatis seketika dan menghemat memori RAM.",
      },
      {
        title: "18. Snapping Tools & Presisi Arsitektural",
        content: "Ikon Magnet (Shift + Tab) mengaktifkan fitur Snapping. Memungkinkan titik sudut menempel persis ke kisi Grid, ke Vertex objek lain, atau ke Face permukaan tanah, sangat vital untuk desain set studio berita yang presisi.",
      },
      {
        title: "19. Autosave & Sistem File Pemulihan (Recovery)",
        content: "Blender secara otomatis menyimpan file cadangan darurat setiap 2 menit. Jika komputer mati mendadak akibat pemadaman listrik, buka kembali Blender dan pilih menu File -> Recover -> Auto Save untuk memulihkan sesi kerja terakhir tanpa kehilangan data.",
      },
      {
        title: "20. Pro-Tips: Jangan Takut Mencoba & Gunakan Menu Pencarian (F3)",
        content: "Blender memiliki ribuan fitur tersembunyi. Jika Anda lupa letak menu sebuah alat, tekan tombol F3 di keyboard lalu ketikkan nama fungsi yang Anda cari (misal 'Bridge Edge Loops' atau 'Subdivide') untuk menjalankannya seketika.",
      },
    ],
    video: {
      title: "Tutorial Lengkap Blender 3D untuk Pemula: Dari Nol Hingga Mahir",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari navigasi ruang 3D, transformasi G-R-S dengan sumbu X-Y-Z, dan penggunaan tombol pintas Numpad.",
    },
    gamePairs: [
      { id: 1, left: "Shortcut G", right: "Grab / Translate untuk menggeser posisi objek di ruang 3D" },
      { id: 2, left: "Shortcut R", right: "Rotate untuk memutar objek pada sumbu tertentu" },
      { id: 3, left: "Shortcut S", right: "Scale untuk memperbesar atau memperkecil ukuran dimensi objek" },
      { id: 4, left: "3D Cursor", right: "Titik jangkar merah-putih tempat lahirnya objek primitif baru" },
      { id: 5, left: "Numpad 1", right: "Beralih sudut pandang ortografis ke Tampak Depan (Front View)" },
    ],
    caseTitle: "Properti Panggung Studio Terdistorsi Akibat Lupa Apply Scale",
    caseScenario:
      "Seorang siswa SMK memodelkan meja presenter talkshow di Blender. Di Object Mode, ia memanjangkan meja tersebut pada sumbu X hingga 3 kali lipat. Ketika ia menambahkan modifier Bevel untuk membuat sudut meja menjadi melengkung halus, lengkungan di sisi samping tampak gepeng pipih dan tidak simetris sama sekali. Siswa tersebut mengira software Blender mengalami bug rusak.",
    caseInstruction:
      "Jelaskan mengapa modifier Bevel bereaksi tidak proporsional terhadap objek yang belum di-Apply Scale. Tunjukkan langkah teknis penyelesaiannya menggunakan kombinasi tombol pintas keyboard di Blender.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Sumbu koordinat di Blender yang direpresentasikan dengan garis berwarna BIRU dan mengontrol orientasi pergerakan vertikal atas-bawah adalah...",
        options: [
          { key: "A", text: "Sumbu X" },
          { key: "B", text: "Sumbu Y" },
          { key: "C", text: "Sumbu Z" },
          { key: "D", text: "Sumbu W" },
        ],
        correctKey: "C",
        explanation: "Sumbu X = Merah (Kiri-Kanan), Sumbu Y = Hijau (Maju-Mundur), dan Sumbu Z = Biru (Atas-Bawah / Ketinggian vertikal).",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Untuk memutar sebuah objek 3D tepat 45 derajat pada sumbu vertikal Z secara presisi numerik, urutan perintah penekanan tombol yang benar adalah...",
        options: [
          { key: "A", text: "Tekan G -> lalu Z -> ketik 45" },
          { key: "B", text: "Tekan R -> lalu Z -> ketik 45 -> tekan Enter" },
          { key: "C", text: "Tekan S -> lalu X -> ketik 45" },
          { key: "D", text: "Klik dua kali tombol spasi" },
        ],
        correctKey: "B",
        explanation: "R mengaktifkan mode rotasi, Z mengunci putaran hanya pada sumbu Z, dan mengetik angka 45 memasukkan derajat rotasi presisi matematis.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Seorang siswa ingin mengedit bentuk titik-titik sudut kubus agar berubah menjadi piramida. Mode kerja di Blender yang wajib diaktifkan adalah...",
        options: [
          { key: "A", text: "Object Mode" },
          { key: "B", text: "Edit Mode (dengan menekan tombol Tab)" },
          { key: "C", text: "Sculpt Mode" },
          { key: "D", text: "Weight Paint Mode" },
        ],
        correctKey: "B",
        explanation: "Edit Mode memungkinkan pengguna memodifikasi langsung struktur geometri poligon (titik vertex, garis edge, dan bidang face).",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Bandingkan teknik duplikasi Shift + D dengan Alt + D pada Blender! Kapan seorang animator harus memilih Alt + D (Linked Duplicate) saat membuat deretan bangku studio penonton?",
        options: [
          { key: "A", text: "Saat ingin membuat warna kursi yang berbeda-beda secara acak" },
          { key: "B", text: "Saat membuat ratusan kursi identik, karena Alt+D membuat salinan yang berbagi data geometri yang sama sehingga sangat menghemat konsumsi memori RAM dan jika 1 kursi diedit, seluruh kursi otomatis ikut terupdate" },
          { key: "C", text: "Karena Shift+D menghapus kursi aslinya" },
          { key: "D", text: "Alt+D hanya bisa digunakan untuk lampu" },
        ],
        correctKey: "B",
        explanation: "Linked Duplicate (Alt + D) sangat efisien memori komputasi untuk objek berulang (instancing) dan mempermudah revisi massal secara simultan.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah alur konfigurasi ruang kerja (Workspace setup) di Blender bagi pemula untuk memulai proyek pembuatan properti kamera studio TV!",
        options: [
          { key: "A", text: "Langsung menekan tombol render tanpa memodelkan objek" },
          { key: "B", text: "Buka Blender -> pilih General Template -> bersihkan default scene jika perlu -> buat koleksi baru di Outliner bernama 'CAM_RIG' -> atur unit matriks meter -> posisikan 3D Cursor di (0,0,0) -> tambahkan mesh primitif awal (Cube) dengan Shift+A -> beralih ke Edit Mode untuk pemodelan" },
          { key: "C", text: "Menghapus seluruh panel antarmuka Blender hingga layar putih kosong" },
          { key: "D", text: "Mengubah resolusi render menjadi 8K pada laptop berspesifikasi rendah" },
        ],
        correctKey: "B",
        explanation: "Alur persiapan proyek yang disiplin menjamin keteraturan koleksi aset, skala unit ukuran riil yang tepat, dan fondasi geometri yang bersih.",
      },
    ],
    lkpd: {
      title: "LKPD P1-K1: Navigasi Viewport 3D & Transformasi Objek Geometris Blender",
      objective: "Peserta didik mampu menavigasi ruang 3D Viewport dengan lincah, memanipulasi transformasi G-R-S dengan kunci sumbu, dan menyusun objek primitif menjadi miniatur studio TV.",
      tools: ["Komputer / Laptop Lab", "Software Blender 4.x Terpasang", "Mouse 3 Tombol (Wajib Memiliki Scroll Wheel)"],
      steps: [
        "Buka software Blender dan buat file baru 'General'.",
        "Latih navigasi: Putar sudut pandang dengan MMB, geser dengan Shift+MMB, dan zoom dengan scroll.",
        "Gunakan Numpad 1 (Depan), Numpad 3 (Kanan), Numpad 7 (Atas), dan Numpad 0 (Kamera).",
        "Pilih kubus bawaan, tekan G -> Z -> 1 untuk mengangkat kubus tepat di atas lantai grid.",
        "Tekan Shift + A -> Mesh -> Cylinder. Geser silinder di samping kubus.",
        "Rakitlah komposisi miniatur panggung: buat lantai panggung menggunakan Plane (S lalu 5), buat meja presenter menggunakan perpaduan Cylinder dan Cube yang diubah skalanya.",
        "Tekan Ctrl + A -> Apply All Transforms pada setiap objek.",
        "Kelompokkan seluruh objek ke dalam Collection baru di Outliner bernama 'PANGGUNG_STUDIO'.",
        "Simpan file proyek dengan format nama: 'P1K1_NAMA_KELAS.blend'.",
      ],
      outputFormat: "File proyek Blender (.blend) dan screenshot tampilan 3D Viewport dari 3 sudut pandang berbeda.",
    },
    journalQuestions: {
      q1: "Mengapa penggunaan mouse 3 tombol dan keyboard dengan Numpad sangat krusial bagi kenyamanan kerja seorang 3D artist?",
      q2: "Bagaimana pemahaman tentang sumbu X, Y, Z di Blender membantu Anda memvisualisasikan penataan ruang studio siaran secara nyata?",
      q3: "Tantangan apa yang paling Anda rasakan saat pertama kali mencoba mengendalikan orientasi ruang 3D yang bebas berputar?",
    },
    kktpIndicators: [
      "Mampu mendemonstrasikan navigasi 3D Viewport menggunakan mouse dan tombol Numpad secara lancar.",
      "Mampu melakukan transformasi translasi, rotasi, dan skala objek dengan presisi kunci sumbu X, Y, Z.",
      "Mampu mengorganisasikan koleksi objek di panel Outliner dan menerapkan Apply Transforms sesuai SOP.",
    ],
  },

  // =========================================================================
  // KONTEN 2: p1-k2 - Teknik Pemodelan Objek Dasar (Modeling)
  // =========================================================================
  {
    id: "p1-k2",
    order: 2,
    title: "Pemodelan (modeling)",
    shortTitle: "Pemodelan (Modeling)",
    summary:
      "Penguasaan teknik pembentukan mesh poligon di Edit Mode: operasi Extrude (E), Inset Faces (I), Bevel (Ctrl+B), Loop Cut & Slide (Ctrl+R), serta pemanfaatan Modifiers prosedural otomatis (Subdivision Surface, Mirror, Solidify, Boolean) untuk membuat properti studio penyiaran.",
    kompetensi: [
      "Menjelaskan",
      "Membuat",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menjelaskan teknik pemodelan 3 dimensi.",
      "Peserta didik mampu membuat model objek 3 dimensi dengan teknik pemodelan dasar.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Bagaimana sebuah kubus sederhana 6 sisi yang kaku bisa disulap menjadi bodi kamera bioskop yang melengkung mulus dan memiliki lekukan detail hanya dengan bantuan empat alat pemodelan dasar?",
    hookContext:
      "Teknik Box Modeling adalah teknik tertua dan terampuh dalam sejarah grafik 3D. Dengan memotong bidang (Loop Cut), menarik permukaan keluar (Extrude), menekuk sudut (Bevel), dan melipatgandakan resolusi (Subdivision), kubus dapat ditransformasikan menjadi bentuk organik apa pun.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Operasi di Edit Mode Blender yang berfungsi menarik bidang permukaan (face) keluar atau ke dalam untuk menciptakan volume baru disebut...",
        options: [
          { key: "A", text: "Extrude (tombol E)" },
          { key: "B", text: "Inset (tombol I)" },
          { key: "C", text: "Bevel (Ctrl + B)" },
          { key: "D", text: "Knife (tombol K)" },
        ],
        correctKey: "A",
        explanation: "Extrude (E) menggandakan face terpilih dan menariknya sepanjang garis normal permukaan untuk membentuk geometri tiga dimensi baru.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Modifier prosedural yang berfungsi menduplikasi dan mencerminkan setengah bagian model secara simetris sepanjang sumbu tertentu disebut...",
        options: [
          { key: "A", text: "Solidify Modifier" },
          { key: "B", text: "Mirror Modifier" },
          { key: "C", text: "Array Modifier" },
          { key: "D", text: "Displace Modifier" },
        ],
        correctKey: "B",
        explanation: "Mirror modifier mencerminkan geometri secara real-time, memungkinkan seniman hanya mengerjakan separuh model (kiri) sementara sisi kanan terbentuk otomatis.",
      },
    ],
    materialCards: [
      {
        title: "1. Seni Memahat Digital: Box Modeling Workflow",
        content: "Box Modeling adalah metode pemodelan poligon di mana seniman memulai dari kubus primitif sederhana, lalu secara bertahap memotong, menarik, dan memperhalus bentuknya hingga menyerupai objek target. Menjadi metode utama untuk membuat perabot set, kendaraan, dan gadget elektronik.",
        caseStudy: "Model bodi kamera studio TV dirancang menggunakan box modeling dari kubus persegi panjang yang di-extrude lubang lensa dan dudukannya.",
      },
      {
        title: "2. Operasi Utama 1: Extrude Region (Tombol E)",
        content: "Extrude memperpanjang geometri: pilih sebuah Face pada kubus, tekan E lalu gerakkan mouse untuk menarik 'dinding' baru keluar. Extrude Along Normals memungkinkan penarikan banyak face melengkung ke arah luar secara merata bersamaan.",
        didYouKnow: "Kata 'extrude' berasal dari istilah manufaktur industri nyata untuk proses penekanan logam panas melalui cetakan profil pipa."
      },
      {
        title: "3. Operasi Utama 2: Inset Faces (Tombol I)",
        content: "Pilih sebuah Face, tekan I lalu geser mouse ke dalam. Inset menciptakan bingkai permukaan baru yang lebih kecil di dalam face terpilih dengan batas tepi yang rapi, sangat sempurna untuk membuat bezel layar monitor studio atau panel tombol konsol.",
      },
      {
        title: "4. Operasi Utama 3: Bevel Edges & Vertices (Ctrl + B)",
        content: "Di dunia nyata, tidak ada benda buatan manusia yang memiliki sudut tajam matematis 90 derajat yang mematikan. Bevel (Ctrl + B) memangkas sudut tajam menjadi bidang miring atau lengkungan halus bertingkat dengan memutar roda scroll mouse untuk menambah jumlah segmen.",
      },
      {
        title: "5. Operasi Utama 4: Loop Cut and Slide (Ctrl + R)",
        content: "Ctrl + R membelah mesh dengan menyisipkan cincin garis baru (Edge Loop) mengelilingi model. Putar scroll mouse untuk menambah jumlah potongan menjadi 2 atau lebih, lalu geser (slide) posisi potongan sebelum mengklik kiri untuk menguncinya.",
      },
      {
        title: "6. Pisau Bebas: Knife Tool (Tombol K)",
        content: "Jika Loop Cut memotong model secara melingkar penuh, Knife Tool (K) memungkinkan seniman memotong garis vertex secara bebas dari satu titik ke titik lain sesuai pola yang diinginkan. Tekan Spasi atau Enter setelah selesai memotong.",
      },
      {
        title: "7. Menggabungkan dan Menghubungkan: Bridge Edge Loops & Fill (F)",
        content: "Pilih dua garis yang berhadapan, tekan F (Fill) untuk membuat Face baru di antaranya. Untuk menyambungkan dua lubang pipa terbuka secara otomatis dengan deretan face silindris, gunakan menu Edge -> Bridge Edge Loops.",
      },
      {
        title: "8. Aturan Emas Topologi: Quads, Tris, dan N-Gons",
        content: "Dalam pemodelan 3D profesional: (1) Quads (bidang 4 sisi) adalah standar mutlak yang disukai karena menghasilkan subdivisi halus dan deformasi animasi sempurna, (2) Tris (bidang 3 sisi) ditoleransi pada model kaku (hard surface), (3) N-Gons (bidang >4 sisi) diharamkan karena memicu artefak shading hitam berbayang.",
        caseStudy: "N-gon pada permukaan melengkung mobil menyebabkan pantulan cahaya terlihat penyok dan pecah saat dirender.",
      },
      {
        title: "9. Pembersihan Geometri: Merge by Distance (M)",
        content: "Saat tidak sengaja menekan E lalu membatalkannya dengan klik kanan, vertex ganda tak kasat mata akan tertinggal bertumpuk di posisi yang sama. Tekan A (pilih semua) lalu tekan M -> Merge By Distance untuk menghapus titik-titik ganda tersebut secara otomatis.",
      },
      {
        title: "10. Memahami Modifier System di Blender",
        content: "Modifier adalah operasi otomatis prosedural non-destruktif. Modifier mengubah tampilan bentuk objek secara matematis tanpa mengubah struktur titik vertex aslinya sampai Anda menekan tombol 'Apply'. Anda dapat mematikan, menyembunyikan, atau mengatur ulang urutannya kapan saja.",
      },
      {
        title: "11. Modifier Bintang: Subdivision Surface (Ctrl + 1 / 2 / 3)",
        content: "Subdivision Surface (Subsurf) membagi setiap poligon menjadi 4 bagian lebih kecil dan melengkungkannya secara halus menggunakan algoritma Catmull-Clark. Mengubah model kotak kasar (low-poly) menjadi model sangat halus fotorealistik (high-poly).",
      },
      {
        title: "12. Garis Penahan Sudut: Supporting Edge Loops (Holding Edges)",
        content: "Saat modifier Subsurf dipasang, sudut kubus akan membulat menjadi bola. Untuk mempertahankan sudut tajam meja atau bodi kamera, tambahkan Loop Cut (Ctrl + R) dan geser sedekat mungkin ke tepi sudut. Semakin rapat supporting edge, semakin tegas ketajaman sudut saat di-subdivide.",
      },
      {
        title: "13. Modifier Efisiensi: Mirror Modifier & Clipping",
        content: "Pasang Mirror Modifier pada sumbu X untuk memodelkan headset interkom atau kamera. Centang opsi 'Clipping' agar titik-titik vertex yang berada di garis tengah tengah terkunci mati dan menyatu rapat, tidak tembus melewati batas tengah saat digeser.",
      },
      {
        title: "14. Modifier Ketebalan: Solidify Modifier",
        content: "Plane datar 2D tidak memiliki ketebalan fisik di dunia nyata. Solidify Modifier memberikan ketebalan dinding volumetrik secara otomatis (misal ketebalan plat bodi casing monitor sebesar 2 mm) tanpa perlu meng-extrude setiap sisi secara manual.",
      },
      {
        title: "15. Modifier Pengganda: Array Modifier",
        content: "Array Modifier menduplikasi objek berulang kali dengan jarak interval konstan di sepanjang sumbu. Sangat berguna untuk membuat deretan tombol fader audio mixer studio, kisi-kisi ventilasi kipas angin kamera, atau deretan anak tangga aula sekolah.",
      },
      {
        title: "16. Operasi Pemotongan Boolean (Boolean Modifier)",
        content: "Boolean memungkinkan penggabungan atau pemotongan objek menggunakan objek lain sebagai cetakan: (1) Difference (memotong lubang, misal membuat lubang ventilasi bundar), (2) Union (menggabungkan dua mesh padat), (3) Intersect (hanya menyisakan area perpotongan).",
      },
      {
        title: "17. Shading Permukaan: Shade Flat vs Shade Smooth vs Auto Smooth",
        content: "Klik kanan pada objek di Object Mode: Shade Flat menampilkan setiap bidang kotak poligon secara tegas. Shade Smooth menginterpolasi bayangan normal sehingga permukaan tampak melengkung mulus sempurna. Fitur 'Auto Smooth' mempertahankan sudut di atas 30 derajat tetap tajam.",
      },
      {
        title: "18. Proportional Editing (Tombol O): Membentuk Kurva Lembut",
        content: "Mengaktifkan ikon lingkaran Proportional Editing (O) membuat pergerakan satu titik vertex ikut menarik titik-titik di sekitarnya secara meluruh lembut menyerupai gravitasi magnet. Sangat ideal untuk membentuk bantalan busa headphone yang empuk.",
      },
      {
        title: "19. Arah Permukaan: Face Orientation & Recalculate Normals",
        content: "Setiap bidang poligon memiliki sisi luar dan sisi dalam (Normal). Aktifkan 'Face Orientation' di Viewport Overlays: permukaan berwarna Biru = menghadap luar dengan benar; berwarna Merah = terbalik ke dalam (Flipped Normals). Tekan Shift + N di Edit Mode untuk membetulkan normal yang terbalik.",
      },
      {
        title: "20. POS Pemodelan Hard-Surface yang Baik",
        content: "Urutan kerja modeling disiplin: (1) Kumpulkan foto referensi alat dari tampak depan/samping, (2) Buat bentuk blok kasar (Blockout), (3) Terapkan Mirror modifier, (4) Tambahkan detail menengah (Bevel & Inset), (5) Tambahkan detail lubang baut dan tombol, (6) Cek normal (Shift+N), (7) Apply scale (Ctrl+A).",
      },
    ],
    video: {
      title: "Masterclass 3D Modeling Blender: Extrude, Inset, Bevel, & Subsurf Modifier",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Simak demonstrasi cara membuat model monitor studio TV dari kubus menggunakan Inset, Extrude, dan Bevel modifier.",
    },
    gamePairs: [
      { id: 1, left: "Extrude (E)", right: "Menarik face keluar atau ke dalam untuk menciptakan volume bentuk baru" },
      { id: 2, left: "Inset Faces (I)", right: "Menciptakan bidang permukaan lebih kecil di dalam face dengan batas rapi" },
      { id: 3, left: "Loop Cut (Ctrl + R)", right: "Menyisipkan cincin garis baru melingkar untuk membagi topologi model" },
      { id: 4, left: "Subdivision Surface", right: "Modifier penghalus permukaan poligon kasar menjadi bentuk melengkung mulus" },
      { id: 5, left: "Recalculate Normals (Shift + N)", right: "Memperbaiki arah orientasi permukaan poligon agar tidak terbalik ke dalam" },
    ],
    caseTitle: "Bayangan Hitam Rusak pada Layar TV 3D Akibat Flipped Normals",
    caseScenario:
      "Seorang siswa membuat model 3D monitor siaran televisi di Blender. Saat mengaktifkan mode Shade Smooth, permukaan layar monitor tampak memiliki bayangan hitam pekat aneh (shading artifact) yang tidak hilang meskipun lampu sudah disorotkan langsung ke layar. Saat dicek menggunakan Viewport Overlay, bagian layar tersebut berwarna merah menyala, menandakan arah orientasi normal poligon terbalik ke dalam.",
    caseInstruction:
      "Jelaskan konsep Face Normals dalam pemodelan 3D dan dampaknya terhadap perhitungan kalkulasi bayangan lampu. Tuliskan langkah perbaikan untuk membalikkan kembali arah normal poligon ke arah luar yang benar.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Jumlah sisi sudut yang dimiliki oleh sebuah bidang poligon Quad yang menjadi standar ideal pemodelan 3D adalah...",
        options: [
          { key: "A", text: "3 sisi (segitiga)" },
          { key: "B", text: "4 sisi (segi empat)" },
          { key: "C", text: "5 sisi atau lebih (N-Gon)" },
          { key: "D", text: "Hanya 1 titik" },
        ],
        correctKey: "B",
        explanation: "Quad (segi empat) adalah standar emas topologi pemodelan 3D karena membagi aliran garis (edge flow) secara teratur dan menghasilkan subdivisi yang halus.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Untuk membuat bevel lengkungan halus pada sudut meja tajam di Blender menggunakan keyboard shortcut, kombinasi tombol yang wajib ditekan adalah...",
        options: [
          { key: "A", text: "Ctrl + B" },
          { key: "B", text: "Ctrl + Z" },
          { key: "C", text: "Ctrl + S" },
          { key: "D", text: "Ctrl + J" },
        ],
        correctKey: "A",
        explanation: "Ctrl + B mengaktifkan fungsi Bevel pada edge terpilih, dan memutar scroll mouse menambah jumlah segmen potongan untuk menghasilkan lengkungan halus.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Ketika sebuah kubus dipasangi modifier Subdivision Surface level 2, bentuk kubus tersebut berubah membulat menyerupai bola telur. Teknik pemodelan apa yang harus dilakukan agar sudut-sudut kubus tersebut tetap tampak tajam dan tegas?",
        options: [
          { key: "A", text: "Menghapus modifier Subdivision Surface" },
          { key: "B", text: "Menambahkan Loop Cut (Ctrl + R) sebagai supporting edge loops dan menggesernya sangat dekat ke tepi sudut kubus" },
          { key: "C", text: "Mengecat kubus dengan warna merah" },
          { key: "D", text: "Mengganti nama kubus menjadi bola" },
        ],
        correctKey: "B",
        explanation: "Supporting edge loops (garis penahan) yang dirapatkan ke batas sudut menahan tarikan algoritma Catmull-Clark, menjaga ketegasan sudut benda saat dihaluskan.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Evaluasi risiko pemodelan jika seorang 3D artist membiarkan bidang poligon memiliki lebih dari 4 sisi sudut (N-Gon) pada model karakter yang akan dianimasikan!",
        options: [
          { key: "A", text: "Komputer akan langsung meledak seketika" },
          { key: "B", text: "N-gon akan menghasilkan distorsi bayangan shading yang buruk, melipat secara tidak terduga saat ditekuk oleh tulang rigging, dan menghasilkan artefak tekstur yang pecah" },
          { key: "C", text: "Tidak ada risiko apapun karena N-gon adalah standar terbaik industri animasi" },
          { key: "D", text: "Warna model akan otomatis berubah menjadi transparan" },
        ],
        correctKey: "B",
        explanation: "N-gon tidak dapat diprediksi saat dikalkulasi oleh algoritma deformasi gerak rigging dan rendering, memicu bayangan hitam glitch dan peregangan tekstur yang rusak.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah langkah-langkah pemodelan 3D untuk membuat objek 'Monitor Studio Broadcast' dari kubus primitif di Blender dengan menerapkan Inset, Extrude, dan Bevel!",
        options: [
          { key: "A", text: "Ambil foto monitor dari Google lalu tempelkan di layar komputer" },
          { key: "B", text: "Mulai dari Cube -> skala menyerupai layar pipih (S -> Y -> 0.1) -> pilih face depan -> tekan I (Inset) untuk membuat bezel bingkai layar -> tekan E (Extrude) ke arah dalam untuk membentuk ceruk kaca layar -> pilih edge terluar bingkai -> tekan Ctrl+B untuk bevel halus sudut luar" },
          { key: "C", text: "Menggambar kotak di atas kertas gambar dengan spidol hitam" },
          { key: "D", text: "Menghapus kubus dan menggantinya dengan teks 3D" },
        ],
        correctKey: "B",
        explanation: "Langkah-langkah tersebut adalah alur Box Modeling standar: penyesuaian proporsi awal, pembuatan bingkai bezel via Inset, penarikan panel layar ke dalam via Extrude, dan penyempurnaan sudut pantulan cahaya via Bevel.",
      },
    ],
    lkpd: {
      title: "LKPD P1-K2: Pemodelan Objek Properti Studio TV: Monitor On-Air & Meja Presenter",
      objective: "Peserta didik mampu menggunakan operasi Edit Mode (Extrude, Inset, Bevel, Loop Cut) dan Modifier (Mirror, Subdivision Surface) untuk memodelkan aset properti studio siaran.",
      tools: ["Komputer Lab dengan Blender 4.x", "Mouse 3 Tombol", "Gambar Referensi Monitor Siaran TV"],
      steps: [
        "Buka Blender, buat file baru dan simpan dengan nama 'P1K2_MONITOR_NAMA.blend'.",
        "Tambahkan Cube primitif, atur proporsi ukuran menjadi monitor 16:9 berketebalan 5 cm.",
        "Masuk ke Edit Mode (Tab): pilih face depan, lakukan Inset (I) sebesar 0.05 untuk membuat bezel bingkai monitor.",
        "Lakukan Extrude (E) face bagian dalam ke arah belakang (sumbu Y) sejauh 0.02 untuk menciptakan ceruk layar kaca.",
        "Buat kaki penyangga meja: pilih face bawah bingkai, lakukan Inset dan Extrude ke bawah hingga menyentuh lantai grid.",
        "Tambahkan Loop Cut (Ctrl + R) pada bodi monitor untuk mempertegas garis sambungan casing.",
        "Pilih seluruh garis tepi terluar casing dan terapkan Bevel (Ctrl + B) 3 segmen.",
        "Keluar ke Object Mode, klik kanan -> pilih Shade Smooth, lalu aktifkan Auto Smooth pada panel Data Mesh.",
      ],
      outputFormat: "File proyek Blender (.blend) dan hasil screenshot viewport mode Solid dari tampak depan dan samping.",
    },
    journalQuestions: {
      q1: "Mengapa pemberian bevel halus pada sudut model 3D sangat menentukan apakah benda tersebut terlihat nyata (fotorealistik) atau tampak palsu seperti mainan plastik?",
      q2: "Bagaimana penggunaan Modifier Subdivision Surface dan supporting loops mengubah cara Anda merencanakan kepadatan poligon model?",
      q3: "Pelajaran apa yang Anda peroleh tentang pentingnya menjaga kerapian susunan poligon (Quad topology) sejak awal pemodelan?",
    },
    kktpIndicators: [
      "Mampu mengoperasikan teknik dasar modeling Extrude, Inset, Bevel, dan Loop Cut secara presisi.",
      "Mampu mengonfigurasi Modifier Subdivision Surface dan Mirror pada pemodelan hard-surface.",
      "Mampu menghasilkan model 3D properti studio dengan topologi bersih bebas N-Gons.",
    ],
  },

  // =========================================================================
  // KONTEN 3: p1-k3 - Konsep Material & Tekstur (Texturing)
  // =========================================================================
  {
    id: "p1-k3",
    order: 3,
    title: "Material dan tekstur (texturing)",
    shortTitle: "Material & Tekstur",
    summary:
      "Seni mendandani permukaan 3D: prinsip Physically Based Rendering (PBR), pembedahan shader universal Principled BSDF (Base Color, Metallic, Roughness, Normal, Transmission, Emission), teknik pemetaan koordinat UV Unwrapping (Mark Seam, Unwrap), serta penerapan tekstur peta resolusi tinggi (Texture Maps).",
    kompetensi: [
      "Menjelaskan",
      "Menerapkan",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menjelaskan konsep material dan tekstur.",
      "Peserta didik mampu menerapkan material dan tekstur pada objek 3 dimensi.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Jika Anda membuat model bola logam krom dan bola plastik merah, mengapa saat terkena sinar lampu, pantulan cahaya pada bola logam terlihat berwarna perak pekat sedangkan pantulan pada bola plastik selalu berwarna putih?",
    hookContext:
      "Hukum fisika optik PBR (Physically Based Rendering) membedakan material menjadi dua kelas mutlak: Logam (Metallic = 1.0) memantulkan warna dirinya sendiri, sedangkan Non-Logam (Dielectric / Metallic = 0.0) selalu memantulkan warna sumber cahaya spekular putih.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Parameter pada shader Principled BSDF yang mengontrol apakah permukaan benda memantulkan cahaya secara licin mengkilap seperti cermin kaca (nilai 0.0) atau buram kasar menyebarkan cahaya (nilai 1.0) adalah...",
        options: [
          { key: "A", text: "Roughness" },
          { key: "B", text: "Metallic" },
          { key: "C", text: "Subsurface" },
          { key: "D", text: "Anisotropic" },
        ],
        correctKey: "A",
        explanation: "Roughness (kekasaran mikroskopis permukaan) menentukan ketajaman pantulan: nilai 0.0 menghasilkan pantulan cermin sempurna, sedangkan 1.0 menghasilkan permukaan doff kasar.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Proses pemotongan garis keliman (seperti pola guntingan baju) pada model 3D agar permukaannya dapat dibentangkan menjadi bidang datar 2D untuk ditempeli gambar tekstur disebut...",
        options: [
          { key: "A", text: "UV Unwrapping (Mark Seam)" },
          { key: "B", text: "Bake Animation" },
          { key: "C", text: "Retopology" },
          { key: "D", text: "Extrude Along Normals" },
        ],
        correctKey: "A",
        explanation: "UV Unwrapping memproyeksikan koordinat 3D (X,Y,Z) ke koordinat gambar 2D (U,V) melalui penandaan garis potong (Mark Seam).",
      },
    ],
    materialCards: [
      {
        title: "1. Hakikat Material: Memberi Jiwa pada Geometri 3D",
        content: "Tanpa material dan tekstur, model 3D secanggih apa pun hanyalah tanah liat abu-abu yang mati. Material menentukan bagaimana gelombang cahaya bereaksi saat menabrak permukaan: apakah cahaya diserap, dipantulkan tajam, dibiaskan menembus ke dalam, atau dipancarkan sendiri.",
        caseStudy: "Model cangkir kopi yang sama persis dapat terlihat seperti porselen mahal, besi berkarat, kayu lapuk, atau kaca bening hanya dengan mengganti parameter materialnya.",
      },
      {
        title: "2. Standar Industri: Physically Based Rendering (PBR)",
        content: "PBR adalah pendekatan perenderan modern yang meniru hukum kekekalan energi dan optik dunia nyata. Menjamin material tampak konsisten dan realistis di bawah kondisi pencahayaan apa pun (di bawah terik matahari, di dalam studio temaram, atau di bawah lampu neon).",
      },
      {
        title: "3. Master Shader: Principled BSDF di Blender",
        content: "Principled BSDF (Bidirectional Scattering Distribution Function) menggabungkan lusinan model shader fisika kompleks ke dalam satu node antarmuka tunggal terpadu. Mampu membuat 95% material dunia nyata: dari logam, kayu, plastik, kain, hingga marmer.",
        didYouKnow: "Arsitektur Principled BSDF awalnya dirancang oleh para ilmuwan studio animasi Disney pada tahun 2012 untuk film animasi 'Wreck-It Ralph'."
      },
      {
        title: "4. Parameter 1: Base Color (Albedo)",
        content: "Menentukan warna dasar permukaan di bawah pencahayaan putih netral tanpa bayangan atau kilap. Untuk material non-logam, Base Color adalah warna pigmen cat/kayu. Untuk material logam murni, Base Color adalah warna pantulan cerminnya (emas berwarna kuning emas, tembaga berwarna jingga tembaga).",
      },
      {
        title: "5. Parameter 2: Metallic (0.0 vs 1.0)",
        content: "Dalam fisika PBR, suatu material adalah Non-Logam murni (Metallic = 0.0, contoh: plastik, batu, kayu, kulit, kain) atau Logam murni (Metallic = 1.0, contoh: besi, baja, emas, perak). Dilarang menyetel nilai Metallic di angka 0.5 kecuali untuk material transisi khusus seperti besi yang mulai berkarat.",
      },
      {
        title: "6. Parameter 3: Roughness (Kekasaran Permukaan)",
        content: "Mengatur kekasaran mikroskopis permukaan benda. Roughness 0.0 = permukaan luar biasa licin sempurna memantulkan gambar cermin tajam (kaca, air tenang, bodi mobil baru). Roughness 1.0 = permukaan sangat kasar menyebarkan cahaya ke segala arah tanpa pantulan (kapur tulis, batu bata, kain wol).",
      },
      {
        title: "7. Parameter 4: Transmission & IOR (Kaca & Air)",
        content: "Transmission (nilai 1.0) membuat material menjadi tembus pandang bening (transparan). Index of Refraction (IOR) menentukan derajat pembelokan berkas cahaya saat melintasi material: Udara = 1.0, Air = 1.333, Kaca = 1.450 hingga 1.520, dan Berlian = 2.417.",
      },
      {
        title: "8. Parameter 5: Emission (Pendar Cahaya Lampu)",
        content: "Emission mengubah permukaan objek menjadi sumber cahaya buatan yang memancarkan energi foton dan menerangi objek lain di sekitarnya. Atur Emission Color untuk warna lampu (misal hijau toska) dan Emission Strength (1.0 hingga 50.0) untuk intensitas terangnya.",
        caseStudy: "Layar monitor studio TV dan tombol lampu on-air merah dibuat menggunakan channel Emission berkekuatan tinggi.",
      },
      {
        title: "9. Anatomi Shader Editor: Menghubungkan Kabel Node",
        content: "Shader Editor menggunakan sistem visual node-based: Kotak Node memiliki port input (bulatan di kiri) dan port output (bulatan di kanan). Hubungkan kabel output 'BSDF' dari Principled BSDF ke port input 'Surface' pada node 'Material Output' agar material tampil di layar.",
      },
      {
        title: "10. Apa itu UV Unwrapping? (Analogi Menguliti Jeruk)",
        content: "Kamera tekstur komputer hanya mengenal gambar datar dua dimensi (sumbu U dan V). Agar gambar label stiker 2D dapat ditempelkan membungkus silinder kaleng 3D tanpa melintir, permukaan 3D tersebut harus dibelah dan dibentangkan datar menyerupai pola jaring kardus kemasan.",
      },
      {
        title: "11. Menandai Garis Potong: Mark Seam (Ctrl + E)",
        content: "Pilih garis-garis tepi (edges) di Edit Mode yang menjadi batas belahan paling tersembunyi dari pandangan kamera. Klik kanan -> pilih 'Mark Seam' (garis akan berubah menjadi warna merah menyala). Tekan A lalu tekan U -> pilih 'Unwrap'.",
      },
      {
        title: "12. Memeriksa Distorsi: UV Grid & Checker Texture",
        content: "Gunakan tekstur kotak-kotak catur (UV Grid Checker) saat menguji UV Unwrapping. Jika kotak catur di model 3D tampak kotak bujur sangkar sempurna dengan kerapatan seragam, berarti UV map bebas distorsi. Jika kotak catur tampak lonjong atau miring, keliman seam harus diperbaiki.",
      },
      {
        title: "13. Paket Tekstur PBR (PBR Texture Map Set)",
        content: "Tekstur realistis diunduh sebagai paket beberapa lembar gambar peta (maps): (1) Color/Albedo map (.jpg/.png), (2) Roughness map (gambar hitam putih penentu area licin vs kasar), (3) Metallic map (area mana yang besi vs cat), (4) Normal map (gambar ungu kebiruan pembentuk ilusi tonjolan mikro), (5) Displacement/Height map.",
      },
      {
        title: "14. Rahasia Normal Map: Ilusi Detail Tanpa Beban Poligon",
        content: "Normal Map menggunakan data warna RGB untuk membelokkan sudut pantulan cahaya seolah-olah permukaan memiliki jutaan lubang pori-pori kulit, guratan kayu, atau lekukan baut tanpa perlu menambah jumlah titik vertex poligon sama sekali (sangat menghemat kinerja render komputer).",
        didYouKnow: "Normal map tampak berwarna ungu kebiruan karena saluran Blue mewakili sumbu Z tegak lurus mengarah langsung ke mata pengamat."
      },
      {
        title: "15. Node Setup Normal Map yang Benar",
        content: "Aturan mutlak di Shader Editor: Masukkan Image Texture Normal Map, ubah Color Space dari 'sRGB' menjadi 'Non-Color'. Hubungkan port Color gambar ke port Color pada node perantara 'Normal Map', lalu hubungkan output port Normal node tersebut ke port Normal pada Principled BSDF.",
      },
      {
        title: "16. Add-on Penyelamat: Node Wrangler (Ctrl + Shift + T)",
        content: "Aktifkan add-on bawaan 'Node Wrangler' di Preferences. Pilih node Principled BSDF, tekan shortcut ajaib Ctrl + Shift + T, lalu pilih seluruh file gambar tekstur PBR Anda dalam satu folder. Blender akan menyusun dan menghubungkan seluruh kabel node secara otomatis dalam 1 detik!",
      },
      {
        title: "17. Menggabungkan Multiple Materials pada Satu Objek",
        content: "Satu model bodi kamera dapat memiliki banyak material berbeda: Material 1 Plastik Hitam Doff untuk bodi casing, Material 2 Kaca Bening untuk elemen optik lensa, dan Material 3 Karet Bergerigi untuk ring fokus. Buat slot material di panel Properties, pilih face target di Edit Mode, lalu klik tombol 'Assign'.",
      },
      {
        title: "18. Texture Coordinate & Mapping Node",
        content: "Node Texture Coordinate (pilih 'UV') dihubungkan ke node Mapping. Node Mapping memungkinkan seniman mengatur pengulangan pola tekstur (Tiling / Scale) misal mengetik skala X: 5 dan Y: 5 agar pola anyaman kain pada kursi studio terlihat lebih rapat dan kecil.",
      },
      {
        title: "19. Sumber Tekstur PBR Gratis & Legal",
        content: "Situs penyedia tekstur PBR berkualitas tinggi dengan lisensi Public Domain (CC0) gratis untuk komersial: Poly Haven (polyhaven.com), AmbientCG (ambientcg.com), dan ShareTextures. Menyediakan tekstur resolusi 1K, 2K, 4K lengkap dengan peta normal dan roughness.",
      },
      {
        title: "20. POS Evaluasi Shading Sebelum Render",
        content: "Checklist evaluasi material: (1) Pastikan Color Space tekstur Roughness dan Normal disetel ke 'Non-Color', (2) Pastikan skala tekstur proporsional terhadap ukuran model riil manusia, (3) Uji pantulan cahaya material di bawah lingkungan HDRI yang berbeda-beda di Material Preview mode.",
      },
    ],
    video: {
      title: "Masterclass Material PBR & UV Unwrapping di Blender 3D",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari cara memotong Seam pada UV Unwrapping dan setup tekstur PBR otomatis menggunakan Node Wrangler.",
    },
    gamePairs: [
      { id: 1, left: "Roughness 0.0", right: "Permukaan sangat licin sempurna memantulkan bayangan cermin tajam" },
      { id: 2, left: "Metallic 1.0", right: "Material konduktor logam murni yang memantulkan warna dirinya sendiri" },
      { id: 3, left: "Normal Map", right: "Gambar ungu kebiruan pembentuk ilusi tonjolan dan goresan mikro 3D" },
      { id: 4, left: "Mark Seam", right: "Menandai garis potong keliman merah untuk membentangkan UV mesh" },
      { id: 5, left: "Emission", right: "Parameter material untuk membuat lampu neon berpendar cahaya sendiri" },
    ],
    caseTitle: "Tekstur Logo Stasiun TV Melintir dan Pecah pada Mikrofon Reporter",
    caseScenario:
      "Seorang siswa ingin menempelkan stiker gambar logo stasiun televisi sekolah pada bagian kubus kotak mikrofon (Mic Flag). Tanpa melakukan UV Unwrapping, ia langsung memasukkan gambar logo ke port Base Color. Di layar 3D Viewport, gambar logo tampak melintir miring, terdistorsi memanjang tidak beraturan, dan terpotong di bagian sudut kubus.",
    caseInstruction:
      "Analisis mengapa penempelan tekstur 2D pada model 3D membutuhkan pemetaan koordinat UV yang benar. Tuliskan prosedur Mark Seam dan Unwrapping pada kubus Mic Flag agar logo tampil tegak dan presisi.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Nilai pengaturan parameter Metallic pada shader Principled BSDF untuk material kayu meja presenter studio yang dicat pernis adalah...",
        options: [
          { key: "A", text: "Metallic = 1.0" },
          { key: "B", text: "Metallic = 0.0" },
          { key: "C", text: "Metallic = 0.5" },
          { key: "D", text: "Metallic = 100.0" },
        ],
        correctKey: "B",
        explanation: "Kayu dan pernis cat adalah material non-logam (dielektrik), sehingga nilai Metallic wajib disetel di angka 0.0 murni.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Ketika memasukkan file gambar Normal Map ke dalam Shader Editor, pengaturan Color Space pada node Image Texture wajib diubah dari 'sRGB' menjadi...",
        options: [
          { key: "A", text: "Non-Color" },
          { key: "B", text: "Linear Rec.709" },
          { key: "C", text: "Filmic Log" },
          { key: "D", text: "Black and White" },
        ],
        correctKey: "A",
        explanation: "Normal Map menyimpan data vektor koordinat arah permukaan (bukan data warna visual mata), sehingga wajib disetel ke mode 'Non-Color' agar tidak terdistorsi kurva gamma.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Seorang siswa ingin membuat lampu tulisan 'ON AIR' di studio TV yang menyala merah terang di ruangan gelap. Dua parameter pada Principled BSDF yang wajib diatur adalah...",
        options: [
          { key: "A", text: "Subsurface Scattering dan IOR" },
          { key: "B", text: "Emission Color (diatur ke warna merah) dan Emission Strength (dinaikkan ke nilai 10-20)" },
          { key: "C", text: "Roughness 1.0 dan Metallic 1.0" },
          { key: "D", text: "Transmission 1.0 dan Anisotropic 1.0" },
        ],
        correctKey: "B",
        explanation: "Channel Emission Color dan Emission Strength mengubah permukaan bidang menjadi sumber cahaya mandiri yang memancarkan pendaran cahaya merah terang.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Bandingkan teknik UV Unwrapping 'Smart UV Project' otomatis dengan teknik 'Mark Seam' manual pada model bodi kamera yang kompleks! Mengapa teknik Mark Seam manual tetap lebih disukai oleh 3D Artist profesional?",
        options: [
          { key: "A", text: "Karena Smart UV Project selalu membuat Blender crash" },
          { key: "B", text: "Karena Smart UV Project memotong jaring menjadi ratusan pulau kecil acak yang menyulitkan penempatan stiker logo, sedangkan Mark Seam memungkinkan seniman mengontrol di mana garis sambungan disembunyikan" },
          { key: "C", text: "Karena Mark Seam tidak membutuhkan kartu grafis GPU" },
          { key: "D", text: "Tidak ada perbedaan kualitas di antara keduanya" },
        ],
        correctKey: "B",
        explanation: "Mark Seam manual memberikan kendali penuh penempatan sambungan (seam placement) di area tersembunyi, mencegah sambungan gambar terlihat di depan kamera utama.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah susunan node shading di Shader Editor untuk membuat material kaca jendela studio siaran yang realistis menggunakan Principled BSDF!",
        options: [
          { key: "A", text: "Base Color Merah, Metallic 1.0, Roughness 1.0" },
          { key: "B", text: "Base Color Putih Bersih, Roughness 0.02 (sangat licin), Transmission 1.0 (bening tembus pandang), IOR 1.45 (indeks bias kaca), dan Alpha 1.0" },
          { key: "C", text: "Hanya menghubungkan node Noise Texture langsung ke Material Output" },
          { key: "D", text: "Menghapus seluruh material pada kaca tersebut" },
        ],
        correctKey: "B",
        explanation: "Kaca fisik standar membutuhkan transmisi cahaya penuh (1.0), permukaan yang sangat halus licin (roughness mendekati 0), dan indeks pembiasan optik kaca standar IOR 1.45 hingga 1.52.",
      },
    ],
    lkpd: {
      title: "LKPD P1-K3: Penerapan Material PBR & UV Unwrapping Logo Studio di Blender",
      objective: "Peserta didik mampu melakukan UV Unwrapping pada objek model kubus Mic Flag dan menyusun node material PBR (Base Color, Roughness, Metallic, Emission) di Shader Editor.",
      tools: ["Komputer Lab dengan Blender 4.x", "File Gambar Logo Sekolah Format PNG Transparan", "Paket Tekstur PBR Logam/Plastik"],
      steps: [
        "Buka model Mic Flag mikrofon yang telah dibuat pada pertemuan sebelumnya.",
        "Buka workspace tab 'UV Editing'. Di Edit Mode, pilih garis-garis tepi belakang kotak dan klik kanan -> 'Mark Seam'.",
        "Tekan A (pilih semua) lalu tekan U -> 'Unwrap'. Amati layout UV yang terbuka di panel kiri.",
        "Buka workspace tab 'Shading'. Buat Material baru bernama 'MAT_KOTAK_MIC'.",
        "Atur Principled BSDF: Base Color abu-abu gelap, Metallic 0.0, Roughness 0.35 untuk menghasilkan plastik semi-gloss.",
        "Tambahkan node 'Image Texture' (Shift+A -> Texture -> Image Texture) dan muat file logo sekolah Anda.",
        "Hubungkan port Color gambar logo ke Base Color. Sesuaikan posisi UV island di UV editor agar logo tampil tepat di tengah muka kotak.",
        "Buat material kedua untuk tombol lampu on-air dengan Emission Color merah terang dan Strength 15.",
      ],
      outputFormat: "File proyek Blender (.blend) dan hasil tangkapan layar render Material Preview dari sudut depan.",
    },
    journalQuestions: {
      q1: "Mengapa pemahaman tentang perilaku optik dunia nyata (PBR) membuat karya 3D Anda terlihat lebih meyakinkan bagi mata manusia?",
      q2: "Bagaimana perasaan Anda ketika pertama kali berhasil membentangkan UV Unwrapping sebuah objek yang rumit tanpa ada bagian yang melintir?",
      q3: "Mengapa material lampu berpendar (Emission) sangat efektif digunakan untuk menciptakan atmosfer futuristik pada desain set studio siaran?",
    },
    kktpIndicators: [
      "Mampu mengonfigurasi parameter Principled BSDF (Color, Metallic, Roughness, Emission) sesuai jenis zat benda.",
      "Mampu melakukan UV Unwrapping model 3D menggunakan teknik Mark Seam tanpa distorsi parah.",
      "Mampu menyusun jaringan node shader di Shader Editor dan mengintegrasikan file tekstur eksternal.",
    ],
  },

  // =========================================================================
  // KONTEN 4: p1-k4 - Jenis, Fungsi & Teknik Pencahayaan 3D
  // =========================================================================
  {
    id: "p1-k4",
    order: 4,
    title: "Pencahayaan",
    shortTitle: "Pencahayaan",
    summary:
      "Arsitektur tata cahaya virtual di Blender: karakteristik 4 jenis lampu digital (Point, Sun, Spot, Area Light), pencahayaan berbasis citra lingkungan nyata (HDRI Environment Lighting), adaptasi formula 3-Point Lighting (Key, Fill, Rim) di ruang 3D, kontrol kelembutan bayangan melalui radius/size, serta efek volumetrik kabut cahaya (Volumetric Lighting).",
    kompetensi: [
      "Menjelaskan",
      "Menerapkan",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menjelaskan jenis dan fungsi pencahayaan pada desain 3 dimensi.",
      "Peserta didik mampu menerapkan pencahayaan sesuai suasana dan kebutuhan karya.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Mengapa model 3D yang sudah dipahat dengan tekstur sangat mahal akan tetap terlihat seperti grafik game jadul tahun 1995 jika Anda hanya menyinarinya dengan satu lampu bawaan Blender tanpa tata cahaya terencana?",
    hookContext:
      "Pencahayaan adalah nyawa dari persepsi visual. Tanpa kontras bayangan, gradasi kelembutan, dan pantulan lingkungan (environmental reflections), mata manusia gagal mengenali kedalaman ruang tiga dimensi.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Jenis lampu di Blender yang memancarkan berkas sinar sejajar berkekuatan konstan ke seluruh dunia virtual tanpa terpengaruh oleh posisi jarak koordinatnya (meniru matahari) adalah...",
        options: [
          { key: "A", text: "Point Light" },
          { key: "B", text: "Sun Light" },
          { key: "C", text: "Spot Light" },
          { key: "D", text: "Area Light" },
        ],
        correctKey: "B",
        explanation: "Sun Light mensimulasikan matahari yang berjarak tak terhingga: posisinya di mana pun tidak berpengaruh, hanya sudut arah rotasinya (R) yang menentukan jatuhnya bayangan.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Format file gambar 360 derajat berdaya dinamis tinggi yang memancarkan data cahaya lingkungan realistis dan pantulan refleksi ke seluruh objek di Blender disebut...",
        options: [
          { key: "A", text: "File HDRI / EXR" },
          { key: "B", text: "File MP4" },
          { key: "C", text: "File GIF animasi" },
          { key: "D", text: "File PDF" },
        ],
        correctKey: "A",
        explanation: "Peta HDRI (High Dynamic Range Image) menyimpan data intensitas radiasi cahaya nyata per piksel yang menerangi seluruh scene 3D secara 360 derajat.",
      },
    ],
    materialCards: [
      {
        title: "1. Seni Mengukir Cahaya dalam Ruang Virtual",
        content: "Tata cahaya 3D memadukan prinsip fotografi tradisional dengan kebebasan tanpa batas fisika digital. Seniman 3D dapat menciptakan lampu raksasa tanpa perlu membeli genset listrik, menembus dinding tanpa kabel, dan mematikan bayangan jika diinginkan.",
        caseStudy: "Pencahayaan dramatis pada film animasi Pixar memandu mata penonton agar langsung tertuju pada raut wajah karakter utama di tengah keramaian set pasar.",
      },
      {
        title: "2. Jenis Lampu 1: Point Light (Lampu Titik Omni)",
        content: "Point Light memancarkan cahaya ke segala arah (360 derajat) dari satu titik koordinat tunggal. Sangat mirip dengan bohlam lampu pijar gantung telanjang di langit-langit kamar atau nyala api lilin kecil di atas meja makan.",
      },
      {
        title: "3. Jenis Lampu 2: Sun Light (Sinar Matahari Terik)",
        content: "Sun Light memancarkan berkas cahaya sejajar berkekuatan tak terbatas ke seluruh dunia 3D. Posisi koordinat lokasi lampu sama sekali tidak berpengaruh (bisa diletakkan di dalam tanah); hanya sudut rotasi arah kemiringan lampu yang menentukan bayangan jatuh.",
        didYouKnow: "Kekuatan Sun Light diukur dalam satuan intensitas radiasi Lux, sedangkan lampu lainnya diukur dalam satuan Watt energi foton."
      },
      {
        title: "4. Jenis Lampu 3: Spot Light (Lampu Sorot Panggung)",
        content: "Spot Light memancarkan cahaya berbentuk kerucut (cone) dari satu titik ke arah target tertentu. Parameter penting: Spot Size (lebar bukaan sudut kerucut 1° hingga 180°) dan Blend (kelembutan degradasi tepi lingkaran sorot), sangat cocok untuk lampu panggung konser atau lampu senter.",
      },
      {
        title: "5. Jenis Lampu 4: Area Light (Softbox Studio Andalan)",
        content: "Lampu paling favorit bagi 3D artist profesional. Area Light memancarkan cahaya dari sebuah bidang geometris (persegi, persegi panjang, atau lingkaran piringan disk). Meniru perilaku softbox studio fotografi nyata yang menghasilkan bayangan sangat lembut dan menawan.",
      },
      {
        title: "6. Rahasia Kelembutan Bayangan: Radius & Size Lampu",
        content: "Di dunia 3D, semakin kecil ukuran 'Size / Radius' lampu, semakin keras dan tajam tepi bayangan yang dihasilkan (Hard Shadow). Semakin besar ukuran Size lampu (misal Area light berukuran 2 meter), semakin lembut dan bergradasi bayangan yang menyelimuti objek (Soft Shadow).",
      },
      {
        title: "7. Satuan Kekuatan Lampu: Wattage & Exposure",
        content: "Kekuatan lampu digital diukur dalam Watt. Pada render engine Cycles yang realistis, lampu kamar standar membutuhkan daya 50W hingga 150W, sedangkan lampu studio TV membutuhkan 300W hingga 1000W tergantung jarak lampu terhadap model.",
      },
      {
        title: "8. Temperatur Warna Lampu Digital: Skala Kelvin",
        content: "Aktifkan opsi 'Use Nodes' pada lampu untuk mengubah warna menggunakan node 'Blackbody'. Ketikkan angka suhu derajat Kelvin riil: 3200K untuk cahaya lampu tungsten hangat kekuningan, dan 5600K untuk cahaya putih daylight matahari siang.",
      },
      {
        title: "9. Formula Abadi: 3-Point Lighting di Ruang Virtual",
        content: "Konfigurasi standar memahat objek: (1) Key Light (Area light 45° kanan atas, kekuatan 100% pembentuk bentuk utama), (2) Fill Light (Area light 45° kiri atas, kekuatan 30-50% pelembut kontras), (3) Rim / Back Light (Area light di belakang objek menghadap kamera, kekuatan 120% pembuat garis siluet berkilau).",
      },
      {
        title: "10. Penataan Rim Light 3D: Memisahkan Objek dari Gelap",
        content: "Rim Light (Hair Light) di Blender sangat memuaskan karena Anda bisa meletakkannya tepat di belakang objek tanpa takut bodi lampu terlihat di frame kamera (cukup sembunyikan lampu di balik siluet objek atau matikan opsi 'Camera Visibility').",
      },
      {
        title: "11. HDRI Lighting: Realisme Lingkungan Nyata 360 Derajat",
        content: "HDRI (High Dynamic Range Imaging) adalah foto panorama 360° yang membungkus seluruh bola dunia virtual di Blender. Bukan sekadar gambar latar pemandangan (backdrop), piksel pada HDRI benar-benar memancarkan miliaran foton cahaya nyata yang menerangi model 3D lengkap dengan pantulan pantulannya.",
        caseStudy: "Mobil 3D yang diterangi dengan HDRI studio mobil profesional akan otomatis memiliki pantulan neon lightbar yang melengkung indah di sepanjang bodi mobil tanpa perlu memasang puluhan lampu manual.",
      },
      {
        title: "12. Cara Memasang HDRI di Panel World Properties",
        content: "SOP pemasangan HDRI: (1) Buka panel World Properties (ikon bola bumi merah), (2) Klik bulatan kuning pada Color -> pilih 'Environment Texture', (3) Klik 'Open' dan pilih file berformat .hdr atau .exr yang telah diunduh dari Poly Haven, (4) Atur Strength intensitas (default 1.0).",
      },
      {
        title: "13. Memutar Arah Datangnya Cahaya HDRI Menggunakan Node",
        content: "Buka Shader Editor -> ubah mode dari 'Object' ke 'World'. Tambahkan node Texture Coordinate (port Generated) dan hubungkan ke node Mapping. Ubah nilai Rotasi pada sumbu Z di node Mapping untuk memutar arah jatuhnya sinar matahari HDRI sesuai keinginan Anda.",
      },
      {
        title: "14. Light Bounces & Global Illumination (GI)",
        content: "Render engine Cycles menghitung Global Illumination: partikel sinar cahaya memantul dari lantai ke dinding, lalu memantul lagi mengenai sisi bawah meja (Indirect Lighting). Menghasilkan pencahayaan alami yang lembut di sudut-sudut ruangan yang tidak terkena lampu langsung.",
      },
      {
        title: "15. Lampu Tak Kasat Mata: Mesh Emitter (Light Planes)",
        content: "Selain 4 lampu bawaan, Anda dapat mengubah objek mesh apa pun (misal Plane tipis) menjadi lampu dengan memberikan material Principled BSDF berkekuatan Emission 10. Memberikan fleksibilitas bentuk lampu custom seperti neon bar melengkung atau lampu strip LED tersembunyi.",
      },
      {
        title: "16. Mengisolasi Cahaya: Light Linking (Fitur Baru Blender)",
        content: "Fitur canggih industri perfilman di Blender 4.0: Light Linking memungkinkan seniman menentukan bahwa sebuah lampu hanya menyinari karakter utama saja tanpa menerangi lantai atau dinding latar belakang sedikit pun.",
        didYouKnow: "Fitur Light Linking mematahkan hukum fisika nyata demi melayani kebutuhan artistik sutradara agar mata penonton tidak terdistraksi oleh latar yang terlalu terang."
      },
      {
        title: "17. Suasana Atmosfer: Volumetric Lighting & God Rays",
        content: "Untuk membuat berkas sinar cahaya matahari dramatis yang menembus jendela gereja tua atau debu panggung konser (God Rays): buat kubus raksasa melingkupi seluruh ruangan, beri material baru dengan menghapus Surface dan menghubungkan node 'Principled Volume' ke port Volume dengan Density sangat tipis (0.01 - 0.05).",
      },
      {
        title: "18. Menghilangkan Noise Bintik: Denoising Viewport",
        content: "Simulasi pencahayaan Cycles memunculkan butiran bintik noise saat kamera digerakkan. Aktifkan fitur 'Viewport Denoising' di panel Render Properties menggunakan teknologi AI OpenImageDenoise atau OptiX agar pratinjau pencahayaan tampak jernih instan.",
      },
      {
        title: "19. Background Transparan: Render Film Transparent",
        content: "Jika Anda ingin merender aset 3D (seperti mikrofon atau logo) untuk digabungkan ke video siaran di software editing tanpa latar belakang hitam: buka panel Render Properties -> buka menu 'Film' -> centang kotak 'Transparent'.",
      },
      {
        title: "20. POS Pencahayaan 3D yang Efektif",
        content: "Alur kerja gaffer virtual: (1) Matikan seluruh lampu dunia dan mulai dari kegelapan total (Blackout), (2) Pasang Key Light utama untuk membangun mood, (3) Pasang Rim Light untuk ketajaman siluet, (4) Tambahkan Fill Light perlahan untuk membuka shadow, (5) Tambahkan lampu aksen praktikal pada tombol konsol.",
      },
    ],
    video: {
      title: "Masterclass Pencahayaan 3D Blender: 3-Point Lighting, HDRI, & Volumetric",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari setup 3-Point Lighting menggunakan Area Light dan cara membuat berkas sinar matahari Volumetric God Rays.",
    },
    gamePairs: [
      { id: 1, left: "Sun Light", right: "Lampu berkas sejajar tak terhingga yang dikontrol melalui sudut rotasi arah" },
      { id: 2, left: "Area Light", right: "Lampu bidang geometris yang menghasilkan bayangan lembut ala softbox studio" },
      { id: 3, left: "HDRI Environment", right: "Peta foto 360° yang memancarkan cahaya dan refleksi fotorealistik ke scene" },
      { id: 4, left: "Principled Volume", right: "Shader atmosfer untuk menciptakan efek kabut dan berkas sinar cahaya (God Rays)" },
      { id: 5, left: "Film Transparent", right: "Merender objek 3D dengan latar belakang tembus pandang transparan (PNG)" },
    ],
    caseTitle: "Rendering Gelap Gulita dan Bayangan Tajam Kasar pada Produk 3D",
    caseScenario:
      "Seorang siswa merender model 3D botol parfum kaca di Blender menggunakan satu Point Light kecil berkekuatan 10 Watt. Hasil render tampak sangat gelap gulita, kaca tidak memantulkan pemandangan apa pun (hanya hitam pekat), dan bayangan botol di atas meja tampak seperti garis hitam mati yang terpotong kaku. Siswa tersebut tidak memasang HDRI dan tidak mengatur ukuran radius lampu.",
    caseInstruction:
      "Evaluasi kesalahan fatal pencahayaan dalam kasus tersebut. Jelaskan mengapa material kaca mutlak membutuhkan HDRI environment untuk memantulkan refleksi indah, dan bagaimana Area Light berukuran besar dapat menghasilkan bayangan meja yang lembut dan mewah.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Untuk membuat bayangan jatuh sebuah objek di Blender tampak sangat lembut dengan gradasi halus (soft shadows), tindakan pada pengaturan Area Light yang benar adalah...",
        options: [
          { key: "A", text: "Memperkecil ukuran Size lampu sekecil mungkin mendekati 0 meter" },
          { key: "B", text: "Memperbesar ukuran dimensi fisik lampu (Size / Radius) menjadi lebih lebar" },
          { key: "C", text: "Mengganti warna lampu menjadi hitam" },
          { key: "D", text: "Mematikan fitur rendering di komputer" },
        ],
        correctKey: "B",
        explanation: "Hukum optik simulasi menyatakan semakin besar luas bidang sumber cahaya relatif terhadap objek, semakin kabur (soft) batas tepi penumbra bayangan yang terbentuk.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Panel di Blender tempat memasukkan file gambar panorama HDRI (.hdr / .exr) untuk menerangi seluruh lingkungan dunia 3D secara 360 derajat adalah...",
        options: [
          { key: "A", text: "Modifier Properties" },
          { key: "B", text: "World Properties (ikon bola bumi berwarna merah)" },
          { key: "C", text: "Physics Properties" },
          { key: "D", text: "Particle Properties" },
        ],
        correctKey: "B",
        explanation: "World Properties mengatur lingkungan atmosfer eksternal (World Environment), tempat di mana tekstur HDRI dipasangkan sebagai sumber pencahayaan global.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Seorang 3D artist ingin membuat efek berkas cahaya dramatis (God Rays) yang tampak menembus debu ruangan studio dari jendela. Komponen yang wajib ditambahkan ke dalam ruang 3D adalah...",
        options: [
          { key: "A", text: "Memasang 100 buah lampu Point Light" },
          { key: "B", text: "Sebuah kotak pembungkus ruang bervolume atmosfer (Principled Volume) dengan nilai Density tipis dan lampu berkekuatan tinggi yang menyorot menembusnya" },
          { key: "C", text: "Menghapus seluruh jendela 3D" },
          { key: "D", text: "Menyalakan fitur motion blur kamera" },
        ],
        correctKey: "B",
        explanation: "Efek berkas sinar (volumetric god rays) terjadi ketika partikel foton cahaya menabrak media partikel mikro di udara yang disimulasikan oleh shader Principled Volume.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Bandingkan teknik pencahayaan menggunakan HDRI tunggal dengan teknik kombinasi Hybrid (HDRI + 3-Point Lighting manual)! Mengapa produksi animasi bioskop selalu menggunakan teknik Hybrid?",
        options: [
          { key: "A", text: "Karena HDRI tidak bisa memancarkan cahaya sama sekali" },
          { key: "B", text: "Karena HDRI memberikan dasar pantulan lingkungan yang fotorealistik merata, sementara 3-Point Lighting manual memberikan kendali artistik untuk memahat karakter utama secara dramatis sesuai alur emosi cerita" },
          { key: "C", text: "Hanya untuk memperlambat waktu komputer merender" },
          { key: "D", text: "Karena lampu manual selalu menghasilkan gambar hitam putih" },
        ],
        correctKey: "B",
        explanation: "Pendekatan hybrid memadukan realisme refleksi lingkungan nyata dari HDRI dengan ketepatan fokus pencahayaan dramatik studio manual pada aktor utama.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah setup tata cahaya 3D untuk memamerkan model mikrofon emas di atas meja studio agar tampak berkilau mewah dan memiliki kontras siluet tajam!",
        options: [
          { key: "A", text: "Hanya menyalakan satu Sun Light dari arah bawah tanah" },
          { key: "B", text: "Gunakan HDRI studio gelap (Dark Studio HDRI); pasang Key Light Area 200W di kanan 45°; pasang Fill Light lembut 50W di kiri 45°; dan pasang Back Rim Light Area tipis panjang berintensitas 300W di belakang atas untuk mengukir tepian emas mikrofon dari latar belakang hitam" },
          { key: "C", text: "Menyalakan lampu sorot warna-warni berkedip tanpa henti" },
          { key: "D", text: "Mematikan seluruh lampu dan merender di ruang gelap gulita" },
        ],
        correctKey: "B",
        explanation: "Setup ini adalah formula pencahayaan produk mewah (Commercial Product Lighting): latar gelap menonjolkan pantulan logam emas, sementara rim light berkekuatan tinggi memahat siluet tepian benda secara elegan.",
      },
    ],
    lkpd: {
      title: "LKPD P1-K4: Eksperimen Tata Cahaya 3-Point Lighting & HDRI Studio di Blender",
      objective: "Peserta didik mampu menata skema 3-Point Lighting virtual menggunakan Area Light serta memasang peta HDRI untuk menghasilkan pencahayaan fotorealistik.",
      tools: ["Komputer Lab dengan Blender 4.x", "File 3D Model Properti Studio TV (LKPD P1-K2)", "File Tekstur HDRI Studio Gratis dari Poly Haven"],
      steps: [
        "Buka file model 3D properti studio Anda di Blender.",
        "Ubah Render Engine ke Cycles (atau Eevee Next) dan aktifkan mode Viewport Shading 'Rendered'.",
        "Hapus lampu default bawaan agar ruangan menjadi gelap gulita.",
        "Pasang HDRI: Buka World Properties -> Color: Environment Texture -> muat file HDRI studio yang diunduh. Atur Strength = 0.5.",
        "Tambahkan Key Light (Shift+A -> Light -> Area): tempatkan di kanan depan 45 derajat, atur Size = 1m, Power = 200W.",
        "Tambahkan Fill Light (Area): tempatkan di kiri depan 45 derajat, atur Size = 1.5m, Power = 60W.",
        "Tambahkan Rim Light (Area): tempatkan di belakang atas model mengarah ke kamera, atur Size = 0.5m, Power = 300W.",
        "Amati kelembutan bayangan dan siluet cahaya tepian yang memisahkan model dari latar belakang.",
      ],
      outputFormat: "File proyek Blender (.blend) dan 1 lembar gambar render JPEG 1080p hasil pencahayaan.",
    },
    journalQuestions: {
      q1: "Bagaimana pengaturan ukuran fisik (Size) lampu digital di Blender mengubah atmosfer kelembutan bayangan model Anda?",
      q2: "Mengapa keberadaan Rim Light di belakang objek sangat krusial saat Anda merender model gelap di depan latar belakang yang juga gelap?",
      q3: "Pengalaman apa yang paling menarik saat Anda pertama kali melihat model 3D Anda bermandikan cahaya fotorealistik dari foto HDRI?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi karakteristik 4 tipe lampu digital (Point, Sun, Spot, Area) di Blender.",
      "Mampu mengintegrasikan peta citra lingkungan HDRI 360 derajat pada World Environment.",
      "Mampu merancang dan mengeksekusi skema 3-Point Lighting virtual yang berdimensi sinematik.",
    ],
  },

  // =========================================================================
  // KONTEN 5: p1-k5 - Prinsip Dasar Animasi Objek 3D
  // =========================================================================
  {
    id: "p1-k5",
    order: 5,
    title: "Animasi dasar",
    shortTitle: "Animasi Dasar",
    summary:
      "Menghidupkan benda mati di ruang virtual: konsep Timeline dan Frame Rate (24/25/30 fps), perekaman titik kunci (Keyframing: Location, Rotation, Scale), manajemen timing di Dope Sheet, manipulasi kurva akselerasi/deselerasi di Graph Editor (Bezier Interpolation), penerapan 12 Prinsip Animasi (Squash & Stretch, Anticipation, Slow In & Slow Out), serta animasi pergerakan kamera sinematik (Camera Turntable & Fly-through).",
    kompetensi: [
      "Menjelaskan",
      "Membuat",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menjelaskan prinsip dasar animasi.",
      "Peserta didik mampu membuat animasi dasar objek 3 dimensi.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Jika Anda membuat animasi mobil bergerak dari titik A ke titik B dengan kecepatan konstan tanpa percepatan di awal dan tanpa perlambatan di akhir, mengapa gerakan mobil tersebut terlihat aneh seperti balok es yang meluncur di atas kaca licin?",
    hookContext:
      "Di dunia nyata, tidak ada benda berbobot yang dapat mencapai kecepatan maksimal secara instan dalam 0 detik akibat hukum kelembaman inersia. Prinsip 'Slow In and Slow Out' mengajarkan bahwa setiap gerakan alami selalu membutuhkan fase akselerasi awal dan deselerasi akhir.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Tombol pintas (shortcut) pada keyboard untuk menanamkan titik kunci animasi (Keyframe) posisi, rotasi, atau skala pada frame waktu tertentu di Blender adalah...",
        options: [
          { key: "A", text: "Tombol I (Insert Keyframe)" },
          { key: "B", text: "Tombol K" },
          { key: "C", text: "Tombol Spasi" },
          { key: "D", text: "Tombol Delete" },
        ],
        correctKey: "A",
        explanation: "Tombol I (Insert Keyframe) membuka menu perekaman titik kunci untuk merekam nilai Location, Rotation, Scale, atau atribut lainnya pada frame aktif.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Panel editor di Blender yang menyajikan lintasan kurva matematis pergerakan animasi di mana animator dapat mengubah kelengkungan tangen akselerasi kecepatan gerak disebut...",
        options: [
          { key: "A", text: "Graph Editor" },
          { key: "B", text: "Dope Sheet" },
          { key: "C", text: "Timeline" },
          { key: "D", text: "Outliner" },
        ],
        correctKey: "A",
        explanation: "Graph Editor menampilkan kurva fungsi waktu vs nilai. Melalui gagang kurva Bezier di Graph Editor, animator dapat mengatur akselerasi ease-in dan ease-out secara presisi.",
      },
    ],
    materialCards: [
      {
        title: "1. Seni Memberi Jiwa: The Illusion of Life",
        content: "Kata 'Animasi' berakar dari bahasa Latin 'Animare' yang berarti 'memberikan nafas kehidupan'. Animasi 3D bukan sekadar memindahkan koordinat matematis objek dari X=0 ke X=10, melainkan mengkomunikasikan bobot berat benda, sifat material (kaku atau kenyal), dan emosi niat gerak karakter.",
        caseStudy: "Dua animator menggerakkan lampu meja yang sama: animator pemula membuatnya bergerak lurus kaku, sedangkan animator Pixar membuatnya melompat lincah penuh rasa ingin tahu (Luxo Jr.).",
      },
      {
        title: "2. Konsep Dasar Waktu: Timeline, FPS, & Playback",
        content: "Animasi digital diukur dalam satuan Frame per Detik (FPS). Standar siaran TV Indonesia dan perfilman Eropa menggunakan 25 FPS (atau 24 FPS bioskop). Jika animasi Anda berdurasi 4 detik pada 25 FPS, Anda membutuhkan total 100 frame di Timeline.",
      },
      {
        title: "3. Anatomi Keyframing: Menanam Titik Kunci (Tombol I)",
        content: "Komputer membutuhkan minimal dua titik kunci: Titik Awal di Frame 1 (posisi awal) dan Titik Akhir di Frame 50 (posisi baru). Komputer akan menghitung dan menciptakan seluruh frame pergerakan di antara kedua titik tersebut secara otomatis (disebut proses Tweening / Inbetweening).",
        didYouKnow: "Di era animasi gambar tangan kuno, seniman master hanya menggambar frame kunci (Key Animator), sedangkan asisten pemula bertugas menggambar ratusan lembar gambar perantara (Inbetweener)."
      },
      {
        title: "4. Menghapus dan Menggeser Keyframe di Timeline",
        content: "Titik keyframe ditampilkan sebagai wajik kuning kecil di baris Timeline. Klik kiri pada wajik untuk memilihnya, tekan G untuk menggeser waktunya (mempercepat atau memperlambat gerakan), dan tekan X atau Delete untuk menghapus titik kunci tersebut.",
      },
      {
        title: "5. Dope Sheet: Ruang Kendali Timing Multi-Objek",
        content: "Dope Sheet menyajikan ikhtisar seluruh keyframe dari puluhan objek berbeda secara visual horizontal. Sangat berguna untuk menyelaraskan waktu: memastikan pintu studio terbuka tepat pada frame ke-35 saat tangan presenter menyentuh gagang pintu.",
      },
      {
        title: "6. Graph Editor: Menguasai Kurva Interpolasi Bezier",
        content: "Secara default, Blender menggunakan interpolasi Bezier (Ease In and Ease Out) yang membuat gerakan mulai perlahan, cepat di tengah, dan melambat halus di akhir. Jika diubah ke interpolasi 'Linear', gerakan menjadi kaku konstan seperti mesin pabrik.",
      },
      {
        title: "7. Manipulasi Tangen Gagang Kurva di Graph Editor",
        content: "Pilih titik kurva di Graph Editor, tekan V untuk memilih tipe gagang: Aligned (simetris melengkung), Vector (sudut tajam patah, cocok saat bola membentur lantai keras), Free (bebas asimetris), atau Automatic.",
      },
      {
        title: "8. 12 Prinsip Animasi: Squash and Stretch (Mampat & Regang)",
        content: "Prinsip terpenting yang menunjukkan elastisitas benda: saat bola karet jatuh cepat ke tanah, bentuknya meregang memanjang (Stretch). Saat membentur lantai keras, bentuknya memipih gepeng melebar (Squash), namun volume total massa benda harus tetap konstan.",
      },
      {
        title: "9. 12 Prinsip Animasi: Anticipation (Gerakan Ancang-Ancang)",
        content: "Manusia tidak pernah melompat ke atas tanpa menekuk lututnya terlebih dahulu ke bawah. Anticipation adalah gerakan persiapan sebelum aksi utama terjadi, mempersiapkan mata penonton untuk memahami apa yang akan segera dilakukan oleh karakter.",
      },
      {
        title: "10. 12 Prinsip Animasi: Slow In and Slow Out (Ease In & Out)",
        content: "Gerakan alami membutuhkan waktu untuk berakselerasi dari diam hingga kecepatan penuh, dan membutuhkan waktu deselerasi sebelum berhenti total. Diatur dengan merapatkan jarak frame di awal dan akhir gerakan di Timeline.",
      },
      {
        title: "11. 12 Prinsip Animasi: Follow Through & Overlapping Action",
        content: "Ketika tubuh berhenti bergerak tiba-tiba, bagian tubuh yang bebas dan lentur (rambut panjang, jubah kain, antena mobil) akan terus meluncur maju sebelum berbalik mengayun kembali ke posisi istirahat (hukum inersia kelembaman Newton).",
      },
      {
        title: "12. 12 Prinsip Animasi: Arcs (Lintasan Gerak Melengkung)",
        content: "Hampir semua gerakan makhluk hidup dan mekanik persendian bergerak mengikuti lintasan busur melengkung (Arc), bukan garis lurus kaku. Ayunan tangan saat berjalan atau tolehan kepala selalu membentuk kurva busur melengkung.",
      },
      {
        title: "13. Latihan Klasik Paling Suci: The Bouncing Ball",
        content: "Latihan wajib setiap animator dunia: menganimasikan bola memantul berulang kali hingga diam di lantai. Mengajarkan perpaduan sempurna antara gravitasi, timing akselerasi jatuh, squash saat kontak lantai, dan reduksi ketinggian pantulan akibat hilangnya energi.",
        caseStudy: "Perekrut studio animasi menguji keahlian kandidat bukan dari seberapa rumit robot yang dibuatnya, melainkan dari seberapa meyakinkan fisika pantulan bola yang ia animasikan.",
      },
      {
        title: "14. Auto Keying (Ikon Tombol Rekam Merah)",
        content: "Mengaktifkan tombol lingkaran merah 'Auto Keying' di Timeline membuat Blender secara otomatis merekam keyframe baru setiap kali Anda menggeser, memutar, atau mengubah skala objek di viewport tanpa perlu menekan tombol I secara manual.",
      },
      {
        title: "15. Animasi Pergerakan Kamera Sinematik (Camera Moves)",
        content: "Kamera di Blender dapat dianimasikan persis seperti kamera fisik: Dolly In mendekati objek, Panning menyapu set studio, atau Pedestal naik ke atas. Animasi kamera yang lembut menuntun emosi penonton dan mengungkap elemen kejutan di dalam set 3D.",
      },
      {
        title: "16. Teknik Kamera Turntable 360° Menggunakan Empty",
        content: "Cara elegan memutar kamera 360 derajat mengitari produk: (1) Letakkan objek 'Empty Plain Axes' di tengah model, (2) Jadikan kamera sebagai anak (Parent: Ctrl+P) dari objek Empty tersebut, (3) Animasikan rotasi sumbu Z objek Empty dari 0° di frame 1 menjadi 360° di frame 100. Kamera akan berputar mengorbit sempurna!",
      },
      {
        title: "17. Mengikuti Lintasan Rel: Camera Follow Path Constraint",
        content: "Gambar garis kurva meliuk (Bezier Curve) di sekitar set studio. Tambahkan constraint 'Follow Path' pada kamera virtual. Kamera akan meluncur mulus mengikuti lintasan kurva tersebut layaknya kamera di atas rel dolly track atau flying drone kabel.",
      },
      {
        title: "18. Fitur Kamera Canggih: Track To Constraint",
        content: "Tambahkan constraint 'Track To' pada kamera dan targetkan ke objek presenter. Ke mana pun kamera digeser atau diterbangkan di studio virtual, moncong lensa kamera akan selalu mengunci dan menatap tepat ke wajah presenter secara otomatis.",
      },
      {
        title: "19. Motion Blur pada Animasi: Realisme Gerakan Cepat",
        content: "Benda yang bergerak cepat di kamera tampak kabur alami. Buka panel Render Properties -> centang kotak 'Motion Blur'. Atur nilai Shutter ke 0.5 (setara 180-degree shutter rule) untuk menghasilkan motion blur sinematik yang mulus saat baling-baling helikopter atau mobil melesat kencang.",
      },
      {
        title: "20. POS Pratinjau Cepat: Viewport Render Animation",
        content: "Sebelum merender animasi final selama berjam-jam: buka menu View 3D Viewport -> pilih 'Viewport Render Animation'. Blender akan merekam simulasi gerak mentah (Playblast) dalam waktu 30 detik untuk memeriksa apakah tempo dan timing animasi sudah sempurna sebelum proses render resolusi tinggi dimulai.",
      },
    ],
    video: {
      title: "Masterclass Prinsip Animasi 3D Blender: Graph Editor & Bouncing Ball",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari cara memanipulasi kurva Bezier di Graph Editor dan membuat simulasi animasi bola memantul elastis.",
    },
    gamePairs: [
      { id: 1, left: "Shortcut I", right: "Insert Keyframe untuk merekam titik kunci posisi, rotasi, atau skala" },
      { id: 2, left: "Graph Editor", right: "Memanipulasi kelengkungan kurva Bezier untuk akselerasi gerak alami" },
      { id: 3, left: "Squash & Stretch", right: "Prinsip animasi mampat dan regang untuk mengekspresikan elastisitas benda" },
      { id: 4, left: "Track To Constraint", right: "Mengunci arah tatapan lensa kamera agar selalu membidik objek target" },
      { id: 5, left: "Motion Blur", right: "Efek keburaman gerak alami pada objek yang melesat cepat di kamera" },
    ],
    caseTitle: "Gerakan Kamera Virtual Patah-Patah dan Memusingkan Penonton",
    caseScenario:
      "Seorang siswa menganimasikan pergerakan kamera terbang (fly-through) melintasi ruang studio berita 3D. Ia menanamkan keyframe kamera setiap 10 frame secara manual tanpa kurva halus. Hasilnya: gerakan kamera tersentak-sentak kasar, berhenti mendadak setiap detik, dan membuat guru yang menonton merasa pusing dan mual (motion sickness).",
    caseInstruction:
      "Identifikasi dua kesalahan fatal teknik animasi kamera dalam kasus tersebut. Jelaskan bagaimana penggunaan constraint Follow Path pada kurva Bezier dan penghalusan kurva di Graph Editor dapat menciptakan gerakan kamera melayang yang sinematik dan anggun.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Prinsip animasi yang menyatakan bahwa benda berbobot membutuhkan waktu untuk berakselerasi perlahan saat mulai bergerak dan melambat perlahan sebelum berhenti total disebut...",
        options: [
          { key: "A", text: "Slow In and Slow Out (Ease In / Ease Out)" },
          { key: "B", text: "Straight Ahead Action" },
          { key: "C", text: "Solid Drawing" },
          { key: "D", text: "Appeal" },
        ],
        correctKey: "A",
        explanation: "Slow in and Slow out (Ease In/Out) meniru hukum kelembaman inersia fisika di mana gerakan alami meluncur dengan akselerasi dan deselerasi halus.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Untuk membuat kamera virtual berputar mengorbit 360 derajat mengelilingi sebuah produk 3D secara stabil pada ketinggian tetap, teknik rigging kamera paling efektif adalah...",
        options: [
          { key: "A", text: "Memegang mouse dan memutar layar secara manual sambil direkam layar" },
          { key: "B", text: "Memasang objek Empty di tengah produk, mem-parent kamera ke Empty tersebut (Ctrl+P), lalu menganimasikan rotasi sumbu Z pada Empty dari 0° ke 360°" },
          { key: "C", text: "Menghapus kamera dan merender tanpa kamera" },
          { key: "D", text: "Memutar meja kerja komputer di dunia nyata" },
        ],
        correctKey: "B",
        explanation: "Metode Turntable Camera Rigging menggunakan objek Empty poros sebagai induk (parent) menjamin lintasan orbit lingkaran kamera 360 derajat yang sempurna dan presisi.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Ketika sebuah bola karet membentur lantai beton keras pada frame ke-20, perubahan bentuk fisik bola yang wajib dianimasikan sesuai prinsip Squash and Stretch adalah...",
        options: [
          { key: "A", text: "Bentuk bola tetap bulat sempurna tanpa perubahan" },
          { key: "B", text: "Bola memipih melebar secara horizontal pada sumbu X dan Z, dan memampat memendek pada sumbu Y (Squash) tepat di satu frame benturan" },
          { key: "C", text: "Bola meledak hancur berkeping-keping" },
          { key: "D", text: "Bola memanjang vertikal setinggi mungkin" },
        ],
        correctKey: "B",
        explanation: "Saat membentur bidang keras, energi benturan memampatkan tinggi bola ke bawah dan mendesak volumenya melebar ke samping (Squash) tanpa mengubah volume massa total.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Bandingkan kurva animasi berinterpolasi 'Linear' dengan kurva berinterpolasi 'Bezier' di Graph Editor Blender! Kapan interpolasi Linear justru lebih tepat digunakan daripada Bezier?",
        options: [
          { key: "A", text: "Saat menganimasikan gerakan manusia berlari santai" },
          { key: "B", text: "Saat menganimasikan perputaran konstan jarum jam mekanik, roda ban mobil yang melaju di jalan tol lurus dengan kecepatan stabil, atau putaran turbin mesin pabrik" },
          { key: "C", text: "Interpolasi Linear tidak pernah boleh digunakan sama sekali" },
          { key: "D", text: "Saat membuat animasi bola memantul elastis" },
        ],
        correctKey: "B",
        explanation: "Interpolasi Linear menghasilkan laju kecepatan konstan mutlak dari awal hingga akhir tanpa akselerasi, sangat ideal untuk putaran mekanik mesin roda, konveyor, atau jarum jam.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah alur kerja (workflow) pembuatan animasi bumper pembuka program berita TV berdurasi 5 detik (125 frame pada 25 fps) yang menampilkan teks 3D melayang masuk ke layar!",
        options: [
          { key: "A", text: "Mengetik teks di Microsoft Word lalu direkam dengan kamera HP" },
          { key: "B", text: "Frame 1: Teks berada di luar kamera dengan skala 0.1 (I -> LocRotScale); Frame 40: Teks meluncur kencang masuk ke tengah frame (Slow In); Frame 60: Teks memantul sedikit melewati titik tengah (Overshoot); Frame 75: Teks menetap stabil di tengah layar; Frame 100-125: Kamera melakukan gerakan pelan Dolly In; Buka Graph Editor untuk memoles kurva Bezier ease-out" },
          { key: "C", text: "Membuat teks berkedip-kedip hitam putih setiap frame secara acak" },
          { key: "D", text: "Merender animasi hanya di frame ke-1 saja" },
        ],
        correctKey: "B",
        explanation: "Alur perancangan memenuhi kaidah motion graphics profesional: entri dinamis berkecepatan tinggi, prinsip aksi tindak lanjut (overshoot bounce), pelambatan anggun di tengah, dan dorongan kamera sinematik penutup.",
      },
    ],
    lkpd: {
      title: "LKPD P1-K5: Simulasi Animasi Bouncing Ball & Animasi Kamera Turntable 360°",
      objective: "Peserta didik mampu menanamkan keyframe (I), memanipulasi kurva Bezier di Graph Editor, menerapkan prinsip Squash & Stretch, dan menganimasikan pergerakan kamera mengitari objek.",
      tools: ["Komputer Lab dengan Blender 4.x", "Mouse 3 Tombol", "Model Bola UV Sphere & Model Meja Studio"],
      steps: [
        "Buka Blender, atur durasi timeline dari Frame 1 hingga Frame 100 pada 25 FPS.",
        "Buat lantai menggunakan Plane datar (S -> 10).",
        "Tambahkan UV Sphere pada ketinggian Z = 5 meter.",
        "Animasikan pantulan bola: Frame 1 (Ketinggian 5m, kunci Loc), Frame 15 (Menyentuh lantai Z=1m, kunci Loc), Frame 30 (Memantul naik ke Z=3.5m), Frame 45 (Menyentuh lantai Z=1m), dst hingga berhenti di frame 90.",
        "Buka Graph Editor: Ubah titik kontak lantai (Frame 15, 45, 75) menjadi gagang kurva tipe 'Vector' (tekan V -> Vector) agar pantulan tajam berenergi.",
        "Terapkan Squash & Stretch: Pada frame 14 regangkan sumbu Z=1.2, X/Y=0.8; pada frame 15 mampatkan Z=0.6, X/Y=1.3.",
        "Buat animasi kamera kedua: Pasang Empty di tengah lantai, parent kamera ke Empty, dan animasikan rotasi Z dari 0° ke 360° selama 100 frame.",
        "Lakukan Viewport Render Animation untuk meninjau hasil gerak playblast.",
      ],
      outputFormat: "File proyek Blender (.blend) dan file video preview animasi format MP4 berdurasi 4 detik.",
    },
    journalQuestions: {
      q1: "Mengapa manipulasi kurva di Graph Editor adalah senjata pembeda antara animator pemula dengan animator profesional?",
      q2: "Bagaimana penerapan prinsip Squash and Stretch memberikan ilusi bobot berat dan elastisitas pada benda mati di komputer?",
      q3: "Tantangan apa yang paling Anda rasakan saat mencoba menyeimbangkan ritme waktu (timing) dan jarak ruang gerak (spacing) bola?",
    },
    kktpIndicators: [
      "Mampu menanamkan dan mengatur susunan Keyframe pada Timeline dan Dope Sheet secara runtut.",
      "Mampu memanipulasi kurva interpolasi Bezier di Graph Editor untuk menghasilkan gerak Slow In / Out.",
      "Mampu mendemonstrasikan animasi pantulan elastis (Bouncing Ball) dan animasi kamera turntable 360°.",
    ],
  },

  // =========================================================================
  // KONTEN 6: p1-k6 - Kamera Virtual, Rendering & Pengaturan Ekspor
  // =========================================================================
  {
    id: "p1-k6",
    order: 6,
    title: "Fitur pendukung: kamera virtual, rendering, dan pengaturan ekspor",
    shortTitle: "Kamera, Render & Ekspor",
    summary:
      "Tahap kulminasi produksi 3D: pengaturan optik kamera virtual (Focal Length, Depth of Field bokeh, Sensor Size), perbandingan dua mesin render utama Blender (Eevee Next realtime vs Cycles raytracing), teknik optimasi sampling dan AI Denoising, konfigurasi resolusi ekspor (Full HD/4K), serta alur rendering gambar sekuensial (PNG Sequence) vs video MP4.",
    kompetensi: [
      "Mengoperasikan",
      "Mengekspor",
      "Mempresentasikan",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu mengoperasikan kamera virtual dan pengaturan rendering.",
      "Peserta didik mampu mengekspor karya 3 dimensi sesuai kebutuhan media.",
      "Peserta didik mampu mempresentasikan karya 3 dimensi yang siap digunakan.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Jika Anda merender video animasi 3D selama 10 jam langsung ke format MP4, lalu listrik mati mendadak pada jam ke-9 menit ke-59 (99% selesai), mengapa seluruh file video Anda langsung rusak total dan tidak bisa diputar sama sekali?",
    hookContext:
      "Format kontainer video (MP4/MOV) membutuhkan penulisan blok 'moov atom' penutup di ujung file saat proses selesai 100%. Merender langsung ke MP4 sangat berisiko fatal. Industri profesional selalu merender ke format rangkaian gambar diam bersambung (PNG Image Sequence) per frame.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Mesin render bawaan Blender yang menggunakan teknologi simulasi pantulan partikel sinar cahaya fisika nyata (Raytracing / Path Tracing) untuk menghasilkan gambar fotorealistik sempurna adalah...",
        options: [
          { key: "A", text: "Cycles Render Engine" },
          { key: "B", text: "Eevee Render Engine" },
          { key: "C", text: "Workbench" },
          { key: "D", text: "DirectX 9" },
        ],
        correctKey: "A",
        explanation: "Cycles adalah mesin render berbasis fisika (Physically-Based Path Tracer) yang menghitung lintasan pantulan jutaan sinar foton nyata untuk menghasilkan bayangan dan pantulan akurat 100%.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Fitur pada kamera virtual Blender yang menirukan bukaan diafragma lensa nyata untuk memfokuskan ketajaman pada objek tertentu dan memburamkan latar belakang (bokeh) adalah...",
        options: [
          { key: "A", text: "Depth of Field (DoF)" },
          { key: "B", text: "Motion Blur" },
          { key: "C", text: "Focal Length" },
          { key: "D", text: "Sensor Fit" },
        ],
        correctKey: "A",
        explanation: "Fitur Depth of Field (DoF) pada kamera virtual mengatur jarak fokus (Focus Distance) dan bukaan diafragma f-stop untuk menciptakan efek kedalaman ruang bokeh.",
      },
    ],
    materialCards: [
      {
        title: "1. Garis Akhir Produksi 3D: The Final Render",
        content: "Rendering adalah proses komputasi matematis di mana komputer menghitung seluruh data geometri 3D, koordinat UV, material tekstur, sudut lampu, dan posisi kamera untuk diterjemahkan menjadi gambar piksel bitmap 2D datar final (seperti foto atau video).",
        caseStudy: "Satu frame film animasi bioskop 'Avatar' atau 'Toy Story' membutuhkan waktu render komputasi 10 hingga 30 jam per frame di server superkomputer render farm.",
      },
      {
        title: "2. Anatomi Kamera Virtual: Lensa & Sensor",
        content: "Kamera virtual Blender meniru optik dunia nyata: Focal Length mengontrol sudut pandang (24mm Lensa Lebar dramatis distorsi, 50mm Normal mata manusia, 85mm-135mm Telephoto potret kompresi latar). Sensor Size meniru ukuran film 35mm Full Frame (36mm x 24mm).",
        didYouKnow: "Kamera virtual di Blender tidak memiliki bobot fisik, sehingga dapat ditempatkan di dalam lubang kunci atau terbang melintasi dinding tanpa hambatan."
      },
      {
        title: "3. Mengunci Fokus: Depth of Field (DoF) & F-Stop",
        content: "Buka panel Camera Properties -> centang 'Depth of Field'. Gunakan pipet 'Focus on Object' dan klik model target Anda (misal mata karakter). Turunkan nilai 'F-Stop' ke f/1.4 atau f/2.0 untuk menghasilkan lingkaran keburaman latar belakang (bokeh) yang sangat indah dan sinematik.",
      },
      {
        title: "4. Batas Penglihatan Kamera: Clip Start & Clip End",
        content: "Kamera hanya melihat objek yang berada di antara Clip Start (default 0.1 meter) dan Clip End (default 100 meter). Jika model lanskap kota Anda tiba-tiba terpotong hilang saat dijauhkan, naikkan angka 'Clip End' menjadi 1000 meter atau 5000 meter.",
      },
      {
        title: "5. Panduan Komposisi Kamera (Composition Guides)",
        content: "Aktifkan garis bantu komposisi di menu Viewport Display Kamera: 'Rule of Thirds' (garis 1/3 layar), 'Center' (garis silang tengah), 'Golden Ratio' (spiral emas rasio harmoni), dan 'Safe Areas' agar framing shot tertata rapi sesuai kaidah sinematografi.",
      },
      {
        title: "6. Duel Mesin Render: Eevee Next vs Cycles",
        content: "Blender memiliki dua mesin render utama: Eevee Next (menggunakan teknik Rasterization berbasis GPU gaming, super cepat hitungan detik per frame, ideal untuk motion graphic dan pratinjau instan) vs Cycles (menggunakan teknik Raytracing fotorealistik akurat, membutuhkan waktu hitungan menit per frame).",
      },
      {
        title: "7. Kapan Menggunakan Eevee dan Kapan Cycles?",
        content: "Gunakan Eevee jika: Anda memiliki batas waktu deadline yang sangat mepet, membuat animasi bergaya kartun (NPR/Toon Shading), atau laptop Anda tidak memiliki kartu grafis bertenaga. Gunakan Cycles jika: Anda membutuhkan keakuratan pembiasan kaca bening, pantulan cermin kompleks, atau visualisasi arsitektur fotorealistik.",
      },
      {
        title: "8. Optimalisasi Hardware: GPU Compute vs CPU di Cycles",
        content: "Secara default Cycles menggunakan CPU prosesor. Wajib buka Preferences -> System -> aktifkan CUDA (kartu grafis Nvidia lawas), OptiX (Nvidia RTX modern ber-AI), atau HIP (kartu grafis AMD Radeon). Pada panel Render Properties, ubah Device dari 'CPU' menjadi 'GPU Compute' untuk mempercepat render 5 hingga 10 kali lipat!",
      },
      {
        title: "9. Manajemen Kualitas: Render Samples & Noise Threshold",
        content: "Sample adalah jumlah sinar cahaya yang dihitung per piksel. Pada Cycles modern: aktifkan 'Noise Threshold' di nilai 0.01 dan Max Samples di nilai 256 atau 512. Komputer akan secara cerdas berhenti menghitung area gambar yang sudah bersih dari noise, menghemat waktu render hingga 50%.",
      },
      {
        title: "10. Keajaiban AI: Denoising (OpenImageDenoise & OptiX)",
        content: "Denoising menggunakan kecerdasan buatan untuk membersihkan bintik butiran noise dari hasil render rendah sample secara instan. Menghasilkan gambar yang bersih kristal hanya dengan 128 samples, memangkas waktu tunggu render secara revolusioner.",
      },
      {
        title: "11. Optimalisasi Cahaya: Max Bounces di Light Paths",
        content: "Kurangi nilai 'Max Bounces' pada Light Paths: Total Bounces cukup 6 hingga 8, Diffuse 3, Glossy 4, Transmission 8. Membatasi pemantulan sinar cahaya yang tidak kasat mata oleh mata manusia akan melipatgandakan kecepatan rendering secara signifikan.",
      },
      {
        title: "12. Pengaturan Dimensi Output: Resolusi & Rasio Aspek",
        content: "Buka panel Output Properties: Atur Format Resolusi standar: 1920 x 1080 piksel (Full HD 1080p lanskap) untuk YouTube/TV, atau balik menjadi 1080 x 1920 piksel (9:16 vertikal) untuk konten TikTok/Reels. Atur Frame Rate konsisten di 25 fps.",
      },
      {
        title: "13. Standar Emas Industri: Rendering PNG Image Sequence",
        content: "Jangan pernah merender animasi langsung ke MP4! Selalu render ke folder baru sebagai format 'PNG' atau 'OpenEXR' berkedalaman warna 16-bit. Setiap frame animasi akan disimpan sebagai file gambar bernomor urut: 'frame_0001.png', 'frame_0002.png', dst.",
        caseStudy: "Jika komputer mati di frame ke-80 dari 100 frame saat merender PNG sequence, Anda tidak perlu mengulang dari frame 1; cukup ubah Start Frame ke frame 81 dan lanjutkan render sisanya dalam 5 menit.",
      },
      {
        title: "14. Mengkompilasi Rangkaian Gambar Menjadi Video Master",
        content: "Setelah seluruh rangkaian PNG selesai dirender: buka Blender baru, buka workspace 'Video Editing', klik Add -> Image/Sequence -> pilih seluruh file gambar PNG tadi. Atur Output Format ke 'FFmpeg Video', Video Codec 'H.264', Preset 'Perceptually Lossless', lalu klik menu Render -> Render Animation (hanya butuh waktu 5 detik!).",
      },
      {
        title: "15. Warna Manajemen Layar: Color Management (AgX vs Filmic)",
        content: "Blender modern menggunakan sistem manajemen warna 'AgX' (penerus Filmic). AgX menangani area highlight yang sangat terang secara anggun tanpa terjadi perubahan corak warna (hue shift) yang kusam, memberikan kontras dinamis yang menyerupai kamera seluloid film bioskop.",
      },
      {
        title: "16. Sentuhan Akhir: Blender Compositor Workspace",
        content: "Buka tab 'Compositing' dan centang 'Use Nodes'. Hubungkan node 'Render Layers' ke node 'Composite'. Anda dapat menambahkan node efek pascaproduksi seperti: Glare Node (menghasilkan kilauan bintang cahaya pada lampu), Color Balance, Lens Distortion (efek dispersi kromatik lensa optik), dan Vignette.",
      },
      {
        title: "17. Menggabungkan Latar Belakang Nyata: Shadow Catcher",
        content: "Jika Anda ingin meletakkan mobil 3D di atas foto jalanan nyata: buat bidang Plane di bawah mobil, buka Object Properties -> Visibility -> centang 'Shadow Catcher'. Bidang plane akan menjadi tembus pandang 100% dan hanya menangkap bayangan hitam mobil saja!",
      },
      {
        title: "18. Render Region (Ctrl + B di Viewport)",
        content: "Untuk menguji kualitas pencahayaan pada bagian tertentu (misal hanya pada mata karakter) tanpa merender seluruh layar: tekan Ctrl + B di kamera view lalu seret kotak seleksi. Tekan Ctrl + Alt + B untuk menghapus batas kotak tersebut.",
      },
      {
        title: "19. Quality Control (QC) Visual Hasil Render",
        content: "Checklist pengujian hasil akhir: (1) Periksa ada tidaknya noise bintik yang berkedip antar frame (temporal noise flickering), (2) Pastikan tidak ada geometri yang saling bertabrakan (clipping intersection), (3) Pastikan tekstur tidak tampak buram pecah piksel, (4) Periksa kelancaran playback gerakan.",
      },
      {
        title: "20. Pro-Tips: Menggunakan Layanan Cloud Render Farm",
        content: "Jika laptop sekolah tidak mampu merender animasi tugas akhir yang berat: manfaatkan layanan Cloud Render Farm gratis berbasis komunitas seperti 'SheepIt Render Farm' (sheepit-renderfarm.com). Ribuan komputer di seluruh dunia akan membantu merender proyek Blender Anda secara gratis dalam hitungan menit.",
      },
    ],
    video: {
      title: "Masterclass Rendering Blender: Cycles vs Eevee, Kamera DoF, & Ekspor PNG Sequence",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari cara menyetel Depth of Field bokeh kamera, optimasi sampling GPU Cycles, dan ekspor animasi PNG sequence.",
    },
    gamePairs: [
      { id: 1, left: "Cycles Engine", right: "Mesin render berbasis raytracing fotorealistik simulasi partikel foton akurat" },
      { id: 2, left: "Eevee Next", right: "Mesin render berbasis rasterization super cepat real-time untuk motion graphic" },
      { id: 3, left: "PNG Sequence", right: "Metode render per frame gambar terpisah untuk mencegah kerusakan file saat crash" },
      { id: 4, left: "Depth of Field (DoF)", right: "Efek optik kamera untuk menghasilkan latar belakang kabur bokeh dramatis" },
      { id: 5, left: "Shadow Catcher", right: "Fitur bidang transparan yang hanya menangkap jatuhnya bayangan objek 3D" },
    ],
    caseTitle: "File Video Animasi 10 Jam Korup Akibat Render Langsung ke MP4",
    caseScenario:
      "Dua orang siswa merender animasi bumper 3D selama 8 jam di komputer sekolah langsung dengan format output 'FFmpeg MP4'. Saat proses render mencapai frame ke-240 dari total 250 frame, petugas kebersihan sekolah tidak sengaja mencabut kabel stopkontak komputer. Ketika komputer dinyalakan kembali, file MP4 di harddisk berukuran 0 KB dan bertuliskan 'Corrupted File', memaksa siswa mengulang render dari detik pertama padahal waktu pameran karya tinggal 2 jam lagi.",
    caseInstruction:
      "Jelaskan kelemahan teknis merender animasi 3D langsung ke format video kontainer MP4. Rumuskan SOP perenderan menggunakan alur kerja PNG Image Sequence dan cara mengompilasikannya menjadi video master dalam hitungan detik.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Mengapa para profesional studio animasi 3D selalu merender proyek animasi panjang ke dalam format rangkaian gambar diam (Image Sequence PNG/EXR) dan bukan langsung ke format video MP4?",
        options: [
          { key: "A", text: "Karena software 3D tidak bisa memutar suara video" },
          { key: "B", text: "Untuk mencegah kegagalan fatal: jika komputer mati atau crash di tengah proses render, seluruh frame gambar yang sudah selesai tersimpan aman di harddisk dan proses render dapat dilanjutkan dari frame terakhir yang gagal tanpa mengulang dari awal" },
          { key: "C", text: "Karena gambar PNG selalu menghasilkan ukuran file yang lebih kecil daripada teks" },
          { key: "D", text: "Hanya karena tradisi kuno yang tidak ada alasannya" },
        ],
        correctKey: "B",
        explanation: "Sistem PNG Sequence memberikan keamanan redundansi: setiap frame tersimpan independen, melindungi hari kerja panjang animator dari risiko mati listrik atau software crash.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Pengaturan pada kamera virtual Blender yang wajib diaktifkan dan diturunkan nilai angkanya (misal ke f/1.8) agar objek fokus tampak sangat tajam sedangkan latar belakang studio menjadi blur lembut (bokeh) adalah...",
        options: [
          { key: "A", text: "Focal Length" },
          { key: "B", text: "Depth of Field -> F-Stop" },
          { key: "C", text: "Clip Start" },
          { key: "D", text: "Sensor Size" },
        ],
        correctKey: "B",
        explanation: "F-Stop pada menu Depth of Field kamera virtual mengontrol diameter bukaan aperture: semakin kecil angka f-stop, semakin dangkal kedalaman ruang (shallow DoF) dan semakin tebal bokeh latar belakang.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Ketika merender adegan interior ruangan menggunakan Cycles, hasil gambar dipenuhi oleh jutaan bintik-bintik butiran pasir warna-warni (fireflies and noise). Teknologi AI pada panel Render Properties yang paling efektif membersihkan bintik tersebut seketika adalah...",
        options: [
          { key: "A", text: "Denoising (menggunakan OpenImageDenoise / OptiX)" },
          { key: "B", text: "Menaikkan resolusi layar menjadi 16K" },
          { key: "C", text: "Mematikan seluruh lampu di dalam ruangan" },
          { key: "D", text: "Mengubah format gambar menjadi GIF" },
        ],
        correctKey: "A",
        explanation: "AI Denoiser (OpenImageDenoise) mengenali pola noise matematis dari sampel rendah dan menghaluskannya secara cerdas tanpa mengaburkan ketajaman tepi detail model.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Bandingkan mesin render Eevee Next dengan Cycles! Dalam situasi produksi manakah seorang animator penyiaran televisi harus memilih Eevee Next daripada Cycles?",
        options: [
          { key: "A", text: "Saat harus merender pembiasan batu permata berlian fotorealistik untuk pameran museum" },
          { key: "B", text: "Saat memproduksi animasi grafis bumper berita harian (Motion Graphics) yang harus tayang on-air dalam waktu 15 menit ke depan, di mana kecepatan render real-time GPU sangat diprioritaskan di atas ketepatan simulasi fisika cahaya" },
          { key: "C", text: "Saat komputer tidak memiliki monitor layar" },
          { key: "D", text: "Eevee tidak pernah boleh digunakan untuk siaran televisi" },
        ],
        correctKey: "B",
        explanation: "Eevee mengutamakan kecepatan luar biasa (real-time rasterization) hitungan detik per frame, sangat sempurna untuk tenggat waktu siaran berita cepat (fast-turnaround broadcast deadlines).",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah alur konfigurasi ekspor master animasi 3D resolusi Full HD 1080p 25fps berdurasi 4 detik di Blender mulai dari penyiapan output hingga pengomposisian video final!",
        options: [
          { key: "A", text: "Mengambil rekaman video layar laptop menggunakan kamera handphone" },
          { key: "B", text: "Panel Output: Resolution 1920x1080 (100%), FPS 25, Frame Range 1-100 -> File Format: PNG RGBA 16-bit -> Buat folder baru 'RENDER_FRAMES' -> Tekan Ctrl+F12 (Render Animation) -> Buka project Video Editing baru -> Add Image Sequence seluruh PNG -> Atur Output ke FFmpeg Video H.264 MP4 -> Render Animation kompilasi 5 detik" },
          { key: "C", text: "Menghapus seluruh keyframe animasi sebelum menekan tombol render" },
          { key: "D", text: "Hanya merender frame 1 saja sebanyak 100 kali secara manual" },
        ],
        correctKey: "B",
        explanation: "Alur kerja standar industri menjamin keamanan proses render frame-by-frame via PNG sequence tanpa risiko file korup, dilanjutkan dengan perakitan kompresi video master H.264 berkualitas tinggi.",
      },
    ],
    lkpd: {
      title: "LKPD P1-K6: Konfigurasi Kamera Depth of Field & Rendering Master Animasi 3D",
      objective: "Peserta didik mampu mengkonfigurasi Depth of Field kamera virtual (bokeh), mengoptimalkan setting render Cycles GPU dengan AI Denoising, dan mengekspor animasi ke format PNG Image Sequence.",
      tools: ["Komputer Lab dengan Blender 4.x & Kartu Grafis", "File Animasi 3D Studio (LKPD P1-K5)", "Folder Penyimpanan Khusus SSD"],
      steps: [
        "Buka file proyek animasi studio Anda di Blender.",
        "Pilih objek Kamera: Atur Focal Length = 85mm. Centang kotak 'Depth of Field', pilih objek utama sebagai titik fokus, dan atur F-Stop = 2.0.",
        "Buka Render Properties: Pilih Render Engine 'Cycles', Device 'GPU Compute'.",
        "Atur Sampling: Max Samples = 128, centang kotak 'Denoise' (OpenImageDenoise).",
        "Buka Output Properties: Resolusi 1920 x 1080 (100%), Frame Rate 25 fps, Frame Start 1, Frame End 75 (durasi 3 detik).",
        "Pilih Output Path: arahkan ke folder baru bernama 'D:/RENDER_PNG_BUMPER/'. Format: PNG, Color: RGBA.",
        "Mulai proses render dengan menekan Ctrl + F12. Amati proses penyimpanan frame per frame.",
        "Setelah selesai 75 frame, buka Blender Video Editing, masukkan image sequence tersebut, dan ekspor menjadi satu file master MP4 H.264.",
      ],
      outputFormat: "Folder berisi 75 file PNG sequence dan 1 file video master animasi MP4 1080p 25fps.",
    },
    journalQuestions: {
      q1: "Mengapa pemahaman mengenai alur kerja PNG Image Sequence dapat menyelamatkan Anda dari kepanikan saat terjadi mati listrik?",
      q2: "Bagaimana efek Depth of Field (bokeh) pada kamera virtual membantu mengarahkan perhatian penonton pada objek utama animasi Anda?",
      q3: "Perasaan apa yang Anda rasakan ketika melihat seluruh rangkaian model, tekstur, pencahayaan, dan gerakan animasi Anda terkomputasi menjadi video final yang memukau?",
    },
    kktpIndicators: [
      "Mampu mengkonfigurasi parameter kamera virtual (Focal Length, Depth of Field F-Stop) secara sinematik.",
      "Mampu mengoptimalkan pengaturan mesin render Cycles (Sampling, Denoising, GPU Compute) untuk efisiensi waktu.",
      "Mampu mengekspor animasi menggunakan metode PNG Image Sequence dan mengompilasikannya menjadi video master MP4.",
    ],
  },
];
