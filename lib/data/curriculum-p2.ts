import { ElemenContentItem, DEFAULT_ELEMEN_SUBMENUS } from "./curriculum-types";

export const P2_CONTENTS: ElemenContentItem[] = [
  // =========================================================================
  // KONTEN 1: p2-k1 - Prosedur Tahapan Desain 2D & Tools Dasar
  // =========================================================================
  {
    id: "p2-k1",
    order: 1,
    title: "Prosedur tahapan produksi desain grafis 2 dimensi",
    shortTitle: "Prosedur Desain 2D & CorelDraw/Canva",
    summary:
      "Fondasi desain komunikasi visual: tahapan produksi desain grafis 2 dimensi (pra-produksi, produksi, pasca-produksi), antarmuka dan fitur dasar CorelDraw serta Canva, perbedaan grafik Vektor vs Raster/Bitmap, ruang warna RGB vs CMYK, dan sistem kerja kanvas digital untuk kebutuhan media.",
    kompetensi: [
      "Memahami",
      "Mengoperasikan",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu memahami prosedur tahapan produksi desain grafis 2 dimensi.",
      "Peserta didik mampu mengoperasikan antarmuka dan fitur dasar CorelDraw/Canva.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Jika Anda memperbesar gambar logo berformat JPG hingga 1000%, gambar tersebut langsung pecah buram menjadi kotak-kotak piksel raksasa, tetapi mengapa logo yang dibuat dengan format Vektor (SVG/EPS) tetap tajam setajam silet meskipun diperbesar seukuran baliho raksasa?",
    hookContext:
      "Format Vektor tidak menyimpan data titik warna kotak (piksel), melainkan menyimpan rumus formula matematika koordinat garis kurva Bezier. Berapa pun perbesarannya, komputer menghitung ulang garis tersebut secara instan tanpa penurunan kualitas.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Ruang warna aditif berbasis tiga berkas cahaya (Red, Green, Blue) yang wajib digunakan untuk seluruh materi desain grafis yang akan ditayangkan di layar televisi dan media sosial adalah...",
        options: [
          { key: "A", text: "Ruang Warna RGB" },
          { key: "B", text: "Ruang Warna CMYK" },
          { key: "C", text: "Ruang Warna Grayscale" },
          { key: "D", text: "Ruang Warna Duotone" },
        ],
        correctKey: "A",
        explanation: "RGB (Red, Green, Blue) adalah model warna aditif untuk layar elektronik pemancar cahaya (monitor, smartphone, TV). CMYK adalah model subtraktif khusus untuk tinta mesin percetakan kertas.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Alat menggambar paling presisi dalam software desain grafis vektor yang menggunakan titik jangkar (anchor points) dan gagang pengontrol arah (direction handles) disebut...",
        options: [
          { key: "A", text: "Pen Tool (Bezier Tool)" },
          { key: "B", text: "Eraser Tool" },
          { key: "C", text: "Paint Bucket Tool" },
          { key: "D", text: "Lasso Tool" },
        ],
        correctKey: "A",
        explanation: "Pen Tool memanfaatkan kalkulasi matematis kurva Bezier untuk memahat garis lurus dan lengkungan dinamis yang sangat akurat.",
      },
    ],
    materialCards: [
      {
        title: "1. Desain Grafis: Bahasa Komunikasi Visual",
        content: "Desain grafis adalah seni merancang pesan visual melalui kombinasi tipografi, fotografi, ilustrasi, dan tata letak warna. Dalam industri broadcasting, desainer grafis memproduksi seluruh identitas on-screen: logo stasiun, lower-third pembawa berita, infografis cuaca, dan poster promosi acara.",
        caseStudy: "Program berita dengan grafis yang berantakan dan sulit dibaca akan membuat penonton kehilangan kepercayaan terhadap keakuratan informasi berita tersebut.",
      },
      {
        title: "2. Paradigma Format: Vektor vs Raster (Bitmap)",
        content: "Grafik Raster (JPEG, PNG, GIF, PSD) tersusun dari kisi-kisi jutaan titik warna piksel berukuran tetap. Jika diperbesar melewati resolusi aslinya, gambar akan pecah bergerigi (pixelated). Grafik Vektor (AI, SVG, EPS, PDF) tersusun dari titik koordinat matematis dan garis vektor yang dapat diskalakan tak terbatas (resolution independent).",
        didYouKnow: "Logo perusahaan dunia seperti Apple, Nike, dan stasiun TV nasional selalu dibuat dalam format vektor agar bisa dicetak di pulpen kecil hingga dicetak di badan pesawat terbang."
      },
      {
        title: "3. Duel Ruang Warna: RGB vs CMYK",
        content: "RGB (Red, Green, Blue) adalah sistem warna aditif cahaya: percampuran ketiganya dengan intensitas 100% menghasilkan cahaya putih murni, memiliki gamut warna sangat cerah, wajib untuk layar digital. CMYK (Cyan, Magenta, Yellow, Key/Black) adalah sistem subtraktif tinta: menyerap pantulan cahaya pada kertas, wajib untuk cetak fisik brosur/baliho.",
      },
      {
        title: "4. Bahaya Mengirim File RGB ke Percetakan Fisik",
        content: "Jika poster promosi berformat RGB dikirim langsung ke percetakan offset, warna hijau neon dan biru terang yang memukau di layar komputer akan otomatis terpotong (clipped) menjadi hijau lumut dan biru kusam pada kertas cetak karena ruang warna CMYK memiliki gamut yang jauh lebih sempit.",
      },
      {
        title: "5. Resolusi Gambar: Piksel, PPI, dan DPI",
        content: "PPI (Pixels Per Inch) mengukur kepadatan piksel pada layar digital: Standar layar website/TV adalah 72 PPI atau 96 PPI, layar Retina smartphone modern 300-450 PPI. DPI (Dots Per Inch) mengukur kepadatan semprotan titik tinta mesin cetak fisik di atas kertas: Standar cetak offset profesional adalah 300 DPI.",
      },
      {
        title: "6. Anatomi Software Desain: Illustrator vs Photoshop",
        content: "Adobe Illustrator (vektor) fokus pada pembuatan logo, ikon, tipografi, dan ilustrasi flat. Adobe Photoshop (raster) fokus pada manipulasi foto, retouching kulit wajah, penggabungan gambar (compositing), dan efek lukisan digital. Keduanya saling melengkapi dalam alur kerja industri.",
      },
      {
        title: "7. Penguasaan Pen Tool & Kurva Bezier",
        content: "Pen Tool bekerja dengan menanam Anchor Points. Klik untuk membuat sudut tajam lancip. Klik dan tahan sambil menyeret mouse untuk mengeluarkan Direction Handles yang melengkungkan garis kurva. Menahan tombol Alt memungkinkan seniman mematahkan sudut gagang handle secara mandiri.",
      },
      {
        title: "8. Anatomi Sistem Layer (Lapisan Gambar)",
        content: "Layer bekerja menyerupai lembaran plastik transparan yang ditumpuk bertingkat. Objek pada layer paling atas akan menutupi objek pada layer di bawahnya. Standar profesional: selalu beri nama jelas pada setiap layer (misal 'TEKS_JUDUL', 'FOTO_HOST', 'BACKGROUND_GRADIENT') dan kelompokkan ke dalam folder grup.",
      },
      {
        title: "9. Non-Destructive Editing: Layer Masking",
        content: "Dilarang menggunakan Eraser Tool untuk menghapus latar belakang foto karena piksel terhapus secara permanen. Gunakan Layer Mask: Warna Putih pada mask menampilkan gambar, warna Hitam menyembunyikan gambar, dan warna Abu-abu membuat transparan lembut. Anda dapat memulihkan foto kapan saja dengan mengecat warna putih.",
        caseStudy: "Klien meminta kembali bagian rambut presenter yang terpotong; editor yang menggunakan Layer Mask dapat memulihkannya dalam 5 detik, sedangkan yang menggunakan Eraser harus mengulang dari awal.",
      },
      {
        title: "10. Fleksibilitas Smart Objects di Photoshop",
        content: "Mengonversi layer menjadi 'Smart Object' melindungi data gambar asli. Foto dapat diperkecil menjadi 5% lalu diperbesar kembali menjadi 100% tanpa kehilangan ketajaman satu piksel pun, serta memungkinkan penerapan Smart Filters yang dapat disetel ulang parameternya.",
      },
      {
        title: "11. Alat Seleksi Modern Berbasis AI: Object Selection Tool",
        content: "Software modern dilengkapi AI Sensei yang mampu mendeteksi subjek manusia atau benda dalam satu klik (Select Subject). Digabungkan dengan fitur 'Select and Mask' untuk merapikan helai rambut yang rumit secara otomatis.",
      },
      {
        title: "12. Pengaturan Kanvas Standar Grafis Televisi (Broadcast Canvas)",
        content: "Ukuran standar dokumen untuk grafis on-screen TV Full HD: Dimensi 1920 x 1080 piksel, Orientation Landscape, Resolution 72 atau 150 PPI, Color Mode RGB 8-bit, Color Profile sRGB IEC61966-2.1 atau Rec.709.",
      },
      {
        title: "13. Action Safe & Title Safe Margins di Desain Grafis",
        content: "Saat mendesain lower-third nama narasumber, selalu aktifkan garis pemandu Title Safe Margin (area 80% dari tengah layar). Menempatkan teks terlalu mepet ke tepi kanvas berisiko terpotong pada televisi model lama atau layar proyektor aula.",
      },
      {
        title: "14. Roda Warna & Harmoni Warna Dasar",
        content: "Teori warna Sir Isaac Newton: Warna Primer (Merah, Kuning, Biru); Warna Sekunder (Campuran primer: Hijau, Oranye, Ungu); Warna Tersier. Harmoni Komplementer (warna berseberangan di roda warna, misal Biru dan Oranye) menghasilkan kontras dinamis berenergi tinggi.",
      },
      {
        title: "15. Anatomi Huruf Tipografi: Serif vs Sans-Serif",
        content: "Huruf Serif (seperti Times New Roman) memiliki kait dekoratif kecil di ujung garis huruf, memberikan kesan formal, klasik, dan terpercaya. Huruf Sans-Serif (seperti Helvetica, Roboto, Inter) tidak memiliki kait, memberikan kesan modern, bersih, dan sangat mudah dibaca pada resolusi layar TV yang bergerak cepat.",
      },
      {
        title: "16. Mengatur Tipografi: Kerning, Tracking, & Leading",
        content: "Leading adalah jarak spasi vertikal antar baris teks (line spacing). Tracking mengatur kerenggangan jarak horizontal seluruh karakter dalam satu paragraf. Kerning adalah penyesuaian jarak mikro antara dua huruf tertentu yang berdampingan (misal huruf 'A' dan 'V') agar terlihat seimbang harmonis.",
      },
      {
        title: "17. Format Transparansi: PNG-24 dengan Alpha Channel",
        content: "Grafis stasiun televisi (logo watermark di pojok layar atau lower third) wajib disimpan dalam format PNG-24 dengan Alpha Channel transparan. Format JPEG tidak mendukung transparansi dan akan selalu menghasilkan latar belakang putih kotak mati yang merusak tayangan video.",
      },
      {
        title: "18. Standar Penyimpanan Master Grafis Desain",
        content: "Selalu simpan file master ber-layer lengkap (.AI atau .PSD) untuk arsip pengeditan di masa depan. Ekspor salinan siap pakai (.PNG transparan) untuk diimpor oleh tim video editor ke timeline software NLE.",
      },
      {
        title: "19. Etika Lisensi Font & Aset Grafis",
        content: "Dilarang menggunakan font hasil download bajakan untuk siaran televisi komersial. Verifikasi lisensi font: pastikan bertuliskan 'Free for Commercial Use' (SIL Open Font License) dari Google Fonts atau beli lisensi resmi (Desktop/Broadcast License) dari pembuatnya.",
      },
      {
        title: "20. POS Quality Control (QC) Desain Grafis Siaran",
        content: "Checklist pengujian sebelum menyerahkan aset grafis ke MCR: (1) Periksa kebenaran ejaan teks (Zero Typo), (2) Pastikan rasio kontras warna teks terhadap latar belakang minimal 4.5:1 (terbaca jelas), (3) Pastikan tidak ada pixel transparan yang tertinggal di tepi gambar (clean cut out), (4) Simpan dengan format PNG-24 transparan.",
      },
    ],
    video: {
      title: "Masterclass Desain Grafis Komunikasi Visual: Vektor vs Raster & Pen Tool",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari cara menguasai Pen Tool kurva Bezier dan konfigurasi kanvas siaran televisi 1920x1080 RGB transparan.",
    },
    gamePairs: [
      { id: 1, left: "Grafik Vektor", right: "Gambar berbasis rumus matematika yang dapat diperbesar tak terbatas tanpa pecah" },
      { id: 2, left: "Ruang Warna RGB", right: "Sistem warna aditif cahaya layar digital untuk televisi dan media sosial" },
      { id: 3, left: "Layer Masking", right: "Teknik menyembunyikan bagian foto non-destruktif tanpa menghapus piksel asli" },
      { id: 4, left: "PNG-24 Transparan", right: "Format gambar dengan saluran Alpha channel untuk grafis lower third siaran" },
      { id: 5, left: "Sans-Serif Font", right: "Gaya huruf bersih tanpa kait kaki yang sangat mudah dibaca di layar video" },
    ],
    caseTitle: "Grafis Berita TV Salah Warna dan Pecah saat Tayang On-Air",
    caseScenario:
      "Tim grafis sebuah stasiun televisi sekolah mendesain infografis bagan pemilihan ketua OSIS berukuran 400x300 piksel dengan ruang warna CMYK dan menyimpannya dalam format JPEG berpiringan putih. Ketika video editor memasukkannya ke timeline siaran Full HD (1920x1080), gambar grafik tampak pecah buram tidak terbaca, warnanya redup kecokelatan, dan latar belakang putih menutupi separuh wajah presenter berita.",
    caseInstruction:
      "Evaluasi 3 kesalahan fatal teknis desain grafis dalam kasus tersebut. Rumuskan parameter kanvas standar (resolusi, dimensi piksel, color space, dan format file ekspor) yang wajib diterapkan untuk seluruh aset grafis pertelevisian.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Format file gambar yang wajib digunakan saat mengekspor aset grafis logo bug atau lower third agar latar belakangnya tembus pandang (transparan) saat ditumpuk di atas video siaran adalah...",
        options: [
          { key: "A", text: "JPEG (.jpg)" },
          { key: "B", text: "PNG-24 (.png) dengan Alpha Channel aktif" },
          { key: "C", text: "BMP (.bmp)" },
          { key: "D", text: "RAW (.cr2)" },
        ],
        correctKey: "B",
        explanation: "Format PNG-24 mendukung saluran transparansi (Alpha Channel) 8-bit yang memungkinkan grafis bertumpuk di atas video tanpa latar belakang putih yang menghalangi.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Kombinasi tombol keyboard pada software desain grafis saat menggunakan Pen Tool untuk mematahkan salah satu arah gagang kurva (direction handle) secara mandiri adalah...",
        options: [
          { key: "A", text: "Tahan tombol Alt sambil menyeret ujung handle" },
          { key: "B", text: "Tahan tombol Tab" },
          { key: "C", text: "Tahan tombol Esc" },
          { key: "D", text: "Tekan tombol Backspace" },
        ],
        correctKey: "A",
        explanation: "Menahan tombol Alt mengaktifkan Convert Anchor Point Tool, mematahkan simetri gagang handle agar seniman dapat membuat sudut tajam pada kurva.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Seorang desainer grafis diminta merancang poster spanduk acara sekolah berukuran panjang 5 meter untuk dicetak di percetakan digital banner. Resolusi kanvas (DPI) yang paling efisien agar komputer tidak kehabisan memori RAM saat mengolah file raksasa tersebut adalah...",
        options: [
          { key: "A", text: "1200 DPI" },
          { key: "B", text: "100 hingga 150 DPI (pada skala riil) atau 300 DPI (pada skala 1:10)" },
          { key: "C", text: "1 DPI" },
          { key: "D", text: "10.000 DPI" },
        ],
        correctKey: "B",
        explanation: "Untuk media cetak berukuran sangat besar (spanduk 5 meter) yang dilihat dari jarak jauh, resolusi 100-150 DPI riil sudah lebih dari cukup dan menjaga performa komputasi komputer tetap stabil.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Bandingkan metode seleksi menghapus background foto menggunakan Eraser Tool konvensional dengan metode Layer Masking! Mengapa studio agensi periklanan melarang keras penggunaan Eraser Tool?",
        options: [
          { key: "A", text: "Karena Eraser Tool berharga sangat mahal" },
          { key: "B", text: "Karena Eraser Tool bersifat merusak permanen (destructive) di mana piksel yang terhapus hilang selamanya, sedangkan Layer Masking bersifat non-destructive sehingga revisi batas tepi dapat diperbaiki kapan saja dengan mudah" },
          { key: "C", text: "Karena Eraser Tool mengubah format file menjadi MP3" },
          { key: "D", text: "Tidak ada perbedaan di antara kedua alat tersebut" },
        ],
        correctKey: "B",
        explanation: "Alur kerja non-destructive (Layer Masking) adalah standar profesional mutlak yang menjamin fleksibilitas revisi kilat tanpa perlu mengulang seleksi rumit dari awal.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah Standard Operating Procedure (SOP) pembuatan template grafis Lower-Third nama presenter siaran berita sekolah di Adobe Photoshop / Illustrator!",
        options: [
          { key: "A", text: "Menggambar kotak di Paint lalu disalin ke layar monitor" },
          { key: "B", text: "Buat kanvas 1920x1080 piksel, RGB 72 PPI -> Aktifkan Title Safe Area 80% -> Buat pelat latar belakang teks menggunakan Shape Vektor bergradasi elegan -> Gunakan font Sans-Serif bersih (Inter/Roboto Bold) untuk nama dan Medium untuk gelar -> Pastikan kontras teks terbaca jelas -> Hapus layer background putih -> Ekspor format PNG-24 Transparan" },
          { key: "C", text: "Menulis nama presenter dengan spidol di atas selembar kertas putih" },
          { key: "D", text: "Menggunakan 10 font hiasan melengkung yang berbeda dalam satu layar" },
        ],
        correctKey: "B",
        explanation: "SOP profesional memastikan dimensi pas 1080p, kepatuhan zona aman tayang (Title Safe Margin), keterbacaan tipografi siaran, kontras warna yang ramah mata, dan format transparansi PNG-24 murni.",
      },
    ],
    lkpd: {
      title: "LKPD P2-K1: Pembuatan Template Lower-Third Siaran Berita TV dengan Pen Tool & Transparansi",
      objective: "Peserta didik mampu menggunakan Pen Tool dan Shape Tool untuk membuat template kartu grafis nama narasumber (Lower-Third) beresolusi 1080p transparan.",
      tools: ["Komputer Lab dengan Adobe Photoshop / Illustrator / Photopea", "Foto Logo Sekolah Format Vektor / PNG", "Panduan Safe Margin Siaran"],
      steps: [
        "Buka software grafis dan buat dokumen baru: 1920 x 1080 piksel, 72 PPI, Color Mode: RGB, Background: Transparent.",
        "Aktifkan Rulers (Ctrl + R) dan tarik Guides panduan untuk menandai Title Safe Area (margin 10% dari tepi).",
        "Gunakan Pen Tool untuk menggambar bentuk bidang pelat grafis modern dengan sudut dinamis di sepertiga bawah layar.",
        "Beri warna gradasi korporat sekolah (misal perpaduan biru navy dan emas/kuning).",
        "Tulis nama narasumber menggunakan font Sans-Serif tebal ukuran 42pt (misal: 'DR. IRWAN SAPUTRA, M.PD') warna putih.",
        "Tulis baris kedua di bawahnya untuk jabatan menggunakan ukuran 24pt warna abu-abu terang (misal: 'Kepala SMK Negeri 1 Penyiaran').",
        "Sematkan logo sekolah di sisi kiri pelat grafis.",
        "Ekspor file ke format 'PNG-24' dengan mencentang kotak 'Transparency' dan simpan dengan nama 'LOWER_THIRD_BERITA.png'.",
      ],
      outputFormat: "File master desain (.PSD / .AI) dan file gambar transparan (.PNG) berukuran 1920x1080 piksel.",
    },
    journalQuestions: {
      q1: "Mengapa pemahaman mengenai ruang warna RGB vs CMYK sangat penting agar Anda tidak dipermalukan oleh hasil cetak yang kusam di percetakan?",
      q2: "Bagaimana penggunaan garis pandu Title Safe Area membantu Anda memastikan bahwa teks lower-third tidak terpotong saat tayang di televisi?",
      q3: "Tantangan apa yang paling sulit Anda atasi saat pertama kali melatih kelenturan tangan membuat kurva lengkung dengan Pen Tool?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi perbedaan fundamental format Vektor vs Raster dan ruang warna RGB vs CMYK.",
      "Mampu mengoperasikan Pen Tool dan sistem Layer Masking non-destructive secara terampil.",
      "Mampu merancang aset grafis on-screen siaran televisi (Lower-Third) format PNG transparan sesuai SOP.",
    ],
  },

  // =========================================================================
  // KONTEN 2: p2-k2 - Teknik Pengolahan Objek Grafis Visual
  // =========================================================================
  {
    id: "p2-k2",
    order: 2,
    title: "Pengolahan objek",
    shortTitle: "Pengolahan Objek Desain",
    summary:
      "Keahlian manipulasi dan fabrikasi bentuk geometris dan organis: teknik seleksi, transformasi (Pick/Select Tool), pembentukan objek dasar dan kurva (Shape Tool, Bezier/Pen), operasi kombinasi Boolean (Weld, Trim, Intersect di CorelDraw / Grouping & Framing di Canva) untuk menghasilkan elemen visual yang komunikatif.",
    kompetensi: [
      "Menjelaskan",
      "Mengolah",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menjelaskan teknik pengolahan objek desain.",
      "Peserta didik mampu mengolah objek menjadi elemen desain yang komunikatif.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Jika Anda menggambar dua buah lingkaran dan ingin membuat bentuk bulan sabit sempurna dalam waktu kurang dari 3 detik, bagaimana operasi logika matematika Boolean pada Shape Builder Tool dapat melakukannya dalam satu geseran mouse?",
    hookContext:
      "Desainer grafis profesional tidak menggambar bentuk rumit dari nol titik demi titik. Mereka menggabungkan, memotong, dan melubangi bentuk-bentuk geometris dasar (lingkaran, kotak) menggunakan logika Boolean pada panel Pathfinder dan Shape Builder.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Fitur interaktif pada Adobe Illustrator yang memungkinkan desainer menggabungkan (merge) atau menghapus (erase) bagian-bagian bidang yang saling tumpang tindih hanya dengan menyeret kursor mouse melintasinya adalah...",
        options: [
          { key: "A", text: "Shape Builder Tool (Shift + M)" },
          { key: "B", text: "Eyedropper Tool" },
          { key: "C", text: "Gradient Tool" },
          { key: "D", text: "Hand Tool" },
        ],
        correctKey: "A",
        explanation: "Shape Builder Tool (Shift + M) adalah alat paling intuitif untuk menggabungkan bidang tumpang tindih (klik dan seret) atau memotong bidang (tahan tombol Alt lalu klik).",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Logo transparan kecil berukuran mungil yang diletakkan secara permanen di pojok kanan atau kiri atas layar siaran televisi sebagai identitas stasiun TV disebut...",
        options: [
          { key: "A", text: "Logo Bug / Station ID Watermark" },
          { key: "B", text: "End Credit" },
          { key: "C", text: "Storyboard" },
          { key: "D", text: "Cue Card" },
        ],
        correctKey: "A",
        explanation: "Logo Bug (atau Station Identifier / Corner Bug) adalah elemen grafis permanen di pojok atas layar yang menegaskan identitas saluran siaran kepada pemirsa.",
      },
    ],
    materialCards: [
      {
        title: "1. Seni Memahat Bentuk Vektor (Vector Geometry)",
        content: "Grafis vektor bekerja berdasarkan prinsip logika geometri analitis. Setiap bentuk kompleks di dunia nyata — mulai dari logo perusahaan, lambang perisai, hingga antarmuka grafis siaran berita — dapat didekonstruksi menjadi gabungan bentuk-bentuk dasar lingkaran, elips, dan persegi.",
        caseStudy: "Logo Twitter burung biru legendaris dirancang murni hanya dari perpotongan 13 lingkaran sempurna berukuran berbeda yang dipotong menggunakan operasi Boolean.",
      },
      {
        title: "2. Seni Menjiplak Manual: Manual Vector Tracing",
        content: "Proses mengubah sketsa pensil di atas kertas menjadi vektor bersih: (1) Impor foto sketsa ke software vektor, (2) Kunci layer sketsa dan turunkan opasitas menjadi 50% (Template Layer), (3) Buat layer baru di atasnya, (4) Jiplak garis bentuk utama menggunakan Pen Tool dengan jumlah anchor points seminimal mungkin.",
        didYouKnow: "Semakin sedikit jumlah anchor points pada sebuah kurva vektor, semakin mulus dan ramping garis lengkungan yang dihasilkan."
      },
      {
        title: "3. Fitur Cepat: Auto Image Trace & Keterbatasannya",
        content: "Image Trace (vektorisasi otomatis satu klik) mampu mengubah gambar hitam putih menjadi vektor seketika. Namun, untuk logo profesional, Image Trace sering menghasilkan sudut tumpul yang tidak rapi, garis meliuk tidak simetris, dan ribuan titik jangkar berlebih yang memperlambat kinerja komputer.",
      },
      {
        title: "4. Panel Pathfinder: Empat Operasi Bentuk (Shape Modes)",
        content: "Pilih dua objek yang bertumpuk: (1) Unite (menggabungkan kedua bentuk menjadi satu siluet utuh), (2) Minus Front (bentuk atas memotong dan melubangi bentuk bawah), (3) Intersect (hanya menyisakan area yang saling beririsan), (4) Exclude (menghapus area irisan tengah dan menyisakan sisanya).",
      },
      {
        title: "5. Alat Paling Populer: Shape Builder Tool (Shift + M)",
        content: "Shape Builder Tool adalah evolusi interaktif dari Pathfinder. Pilih semua objek bertumpuk, tekan Shift + M: Klik dan seret melintasi area untuk menyatukannya (tanda plus +); Tahan tombol Alt dan klik pada area yang ingin dibuang (tanda minus -). Sangat cepat dan presisi!",
      },
      {
        title: "6. Operasi Pemisah Garis: Pathfinder Division",
        content: "Tombol 'Divide' pada panel Pathfinder memotong seluruh bidang yang bertumpuk menjadi potongan-potongan puzzle independen di setiap persimpangan garis. Sangat berguna saat membuat ilustrasi pita melengkung atau efek anyaman visual.",
      },
      {
        title: "7. Presisi Sempurna: Align & Distribute Panel",
        content: "Dilarang menyejajarkan posisi teks atau logo hanya dengan mengandalkan kira-kira mata telanjang. Gunakan panel Align: Align Left, Horizontal Align Center, Align Right, Align Top/Bottom. Fitur 'Distribute Spacing' memastikan jarak celah antar ikon (misal 5 ikon media sosial) berjarak sama persis matematis.",
      },
      {
        title: "8. Acuan Perataan: Align to Selection vs Align to Artboard",
        content: "Pahami opsi perataan: 'Align to Selection' menyejajarkan objek terhadap objek lain yang dipilih bersamaan. 'Align to Artboard' menyejajarkan objek tepat terhadap bingkai kanvas layar (misal menempatkan logo tepat di tengah-tengah kanvas 1920x1080).",
      },
      {
        title: "9. Anatomi Elemen Grafis Siaran TV (On-Screen Graphics - OGG)",
        content: "Paket grafis siaran berita terintegrasi mencakup: (1) Station Bug (Logo saluran di pojok), (2) Lower Third (Nama & topik berita), (3) News Ticker (Pita teks berita berjalan di paling bawah), (4) Breaking News Banner (Grafis merah darurat), dan (5) OTS (Over the Shoulder box di samping kepala presenter).",
      },
      {
        title: "10. Merancang Logo Bug (Corner Bug) yang Elegan",
        content: "Logo bug diletakkan di pojok kanan atau kiri atas di dalam Safe Area margin. Standar industri: ukuran proporsional (sekitar 80-120 piksel), opasitas sedikit transparan (80-90%) agar tidak terlalu mencolok menyilaukan mata penonton, dan bebas dari ornamen teks yang terlalu kecil.",
        caseStudy: "Logo bug yang terlalu besar dan berwarna solid 100% dapat mengganggu pemandangan penonton saat menyaksikan pertandingan sepak bola atau film drama.",
      },
      {
        title: "11. Merancang News Ticker (Running Text Bar)",
        content: "News Ticker diletakkan menempel di batas bawah layar (ketinggian sekitar 60-80 piksel). Terdiri dari dua bagian: Kotak Header statis di sisi kiri (bertuliskan 'UPDATE' atau 'HEADLINE' warna merah/kuning) dan pita latar belakang gelap semi-transparan tempat teks ringkasan berita meluncur dari kanan ke kiri.",
      },
      {
        title: "12. Merancang Breaking News Banner yang Berdampak Kuat",
        content: "Grafis darurat pemecah siaran reguler: Gunakan warna psikologis urgensi tinggi (Merah Darah #C00000 dan Kuning Emas #FFD700), font Sans-Serif ekstra tebal kapital (Bold Caps), serta garis miring sudut dinamis (slant 15 derajat) untuk mengomunikasikan peristiwa genting yang sedang terjadi.",
      },
      {
        title: "13. Sistem Panduan Merek (Brand Style Guide) Grafis Siaran",
        content: "Setiap program siaran wajib memiliki panduan gaya visual tertulis: Palet warna primer dan sekunder terstandar (kode Hex/RGB), jenis font resmi yang diperbolehkan, batas ukuran minimal logo, dan aturan ruang kosong di sekitar logo (Clear Space rule).",
      },
      {
        title: "14. Mengubah Garis Stroke Menjadi Bidang: Outline Stroke",
        content: "Jika sebuah logo dibuat dari garis tebal (Stroke 5pt), saat logo diperkecil atau diperbesar, ketebalan garis bisa berubah janggal jika opsi scale stroke tidak aktif. Sebelum mengekspor master, pilih objek -> menu Object -> Path -> Outline Stroke untuk mengubah garis menjadi bidang padat (Fill) permanen.",
      },
      {
        title: "15. Pemotongan Tepi dengan Clipping Mask (Ctrl + 7)",
        content: "Clipping mask menggunakan bentuk vektor (misal lingkaran) sebagai 'jendela intip' untuk memotong foto di bawahnya. Foto diletakkan di bawah lingkaran, pilih keduanya, lalu tekan Ctrl + 7. Foto akan terpotong bulat rapi tanpa merusak data foto aslinya.",
      },
      {
        title: "16. Pewarnaan Gradasi Vektor yang Halus (Gradient Tool)",
        content: "Linear Gradient memancarkan transisi warna dalam satu garis lurus. Radial Gradient memancarkan warna melingkar dari tengah ke luar. Freeform Gradient (fitur canggih) memungkinkan penempatan titik-titik warna bebas di dalam bidang mesh untuk menciptakan efek pencahayaan organik yang kaya.",
      },
      {
        title: "17. Penggunaan Grid Sistem & Guides Matematik",
        content: "Aktifkan View -> Show Grid dan Snap to Grid saat merancang ikon siaran. Bekerja di atas kisi grid modular memastikan setiap ikon (kamera, mic, piala, lonceng) memiliki ketebalan garis, radius sudut, dan skala optik yang seragam.",
      },
      {
        title: "18. Pembuatan Ikonografi Siaran Berita (News Icon Set)",
        content: "Kumpulan ikon penunjang infografis berita: ikon cuaca (matahari, awan hujan), ikon ekonomi (grafik saham naik, dompet), ikon olahraga (bola, medali). Ikon wajib didesain dengan gaya visual konsisten (apakah Outline Minimalis atau Flat Solid).",
      },
      {
        title: "19. Ekspor Aset untuk Motion Graphics & Switcher vMix",
        content: "Simpan setiap elemen grafis secara terpisah dalam folder kerja: 'LOGO_BUG.png', 'LOWER_THIRD_BASE.png', 'BREAKING_NEWS_HEADER.png'. Format PNG-24 resolusi 1920x1080 dengan latar transparan siap diimpor ke vMix Title Designer atau Adobe After Effects.",
      },
      {
        title: "20. POS Verifikasi Aset Grafis Sebelum Disiarkan",
        content: "Urutan kerja kendali mutu: (1) Uji aset grafis di atas video sampel yang memiliki latar sangat terang dan sangat gelap (pastikan teks tetap terbaca di kedua kondisi), (2) Periksa kepatuhan zona aman Title Safe Margin, (3) Pastikan tidak ada warna yang melanggar batas Broadcast Legal RGB (16-235).",
      },
    ],
    video: {
      title: "Masterclass Vektor Grafis: Shape Builder, Pathfinder, & Desain Aset TV",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari cara membuat logo stasiun TV dengan Shape Builder Tool dan merancang paket grafis Breaking News lengkap.",
    },
    gamePairs: [
      { id: 1, left: "Shape Builder Tool", right: "Menggabungkan atau memotong bidang tumpang tindih secara cepat dengan geseran mouse" },
      { id: 2, left: "Pathfinder Unite", right: "Menyatukan dua bentuk geometri menjadi satu bentuk siluet utuh" },
      { id: 3, left: "Align to Artboard", right: "Menyejajarkan objek tepat terhadap titik tengah kanvas layar 1920x1080" },
      { id: 4, left: "News Ticker Bar", right: "Pita grafis di bagian bawah layar televisi tempat teks berita berjalan meluncur" },
      { id: 5, left: "Station Bug", right: "Logo saluran televisi mungil transparan permanen di pojok atas layar" },
    ],
    caseTitle: "Grafis Teks Running Text Menabrak Batas Bawah Layar Televisi",
    caseScenario:
      "Dalam siaran perdana warta berita sekolah, tim grafis menempatkan pita News Ticker (running text) persis menempel di tepi garis terbawah kanvas layar tanpa jarak margin. Ketika siaran dipancarkan ke pesawat TV tabung dan proyektor aula, separuh teks berita berjalan terpotong hilang di luar bingkai layar fisik karena tidak memperhitungkan Title Safe Margin dan Action Safe Margin.",
    caseInstruction:
      "Jelaskan konsep Title Safe Area (margin 80%) dan Action Safe Area (margin 90%) dalam desain grafis penyiaran televisi. Tuliskan perbaikan tata letak posisi dan ketinggian pita News Ticker agar teks terbaca utuh di seluruh jenis layar monitor.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Kombinasi tombol keyboard untuk mengaktifkan alat Shape Builder Tool pada software Adobe Illustrator adalah...",
        options: [
          { key: "A", text: "Shift + M" },
          { key: "B", text: "Ctrl + T" },
          { key: "C", text: "Alt + F4" },
          { key: "D", text: "Shift + Z" },
        ],
        correctKey: "A",
        explanation: "Shift + M adalah shortcut resmi untuk memanggil Shape Builder Tool di Adobe Illustrator.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Operasi pada panel Pathfinder yang berfungsi memotong objek bagian bawah menggunakan objek bagian atas sebagai pisau cetakan pemotong adalah...",
        options: [
          { key: "A", text: "Minus Front" },
          { key: "B", text: "Unite" },
          { key: "C", text: "Intersect" },
          { key: "D", text: "Soft Mix" },
        ],
        correctKey: "A",
        explanation: "Minus Front mengurangi bidang objek belakang dengan membuang area yang tertimpa oleh objek di depannya.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Seorang desainer grafis ingin menyusun 4 buah kotak menu berita agar memiliki jarak spasi celah antar kotak yang sama persis secara otomatis. Tombol perintah pada panel Align yang wajib diklik adalah...",
        options: [
          { key: "A", text: "Vertical Align Top" },
          { key: "B", text: "Horizontal Distribute Centers (atau Distribute Spacing)" },
          { key: "C", text: "Crop" },
          { key: "D", text: "Outline" },
        ],
        correctKey: "B",
        explanation: "Distribute Centers / Distribute Spacing membagi jarak interval celah antar objek secara merata berdasarkan perhitungan matematis presisi.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Mengapa seorang desainer grafis pertelevisian wajib mengubah garis tebal (Stroke) pada logo vektor menjadi bidang padat (Fill) menggunakan perintah 'Outline Stroke' sebelum menyerahkan file ke bagian motion graphics?",
        options: [
          { key: "A", text: "Agar ukuran file menjadi 10 kali lebih besar" },
          { key: "B", text: "Agar saat logo dianimasikan membesar atau mengecil di software video, ketebalan garis logo tidak terdistorsi menjadi terlalu kurus atau terlalu tebal secara tidak proporsional" },
          { key: "C", text: "Karena software video tidak bisa membaca warna garis" },
          { key: "D", text: "Hanya untuk menghapus warna logo" },
        ],
        correctKey: "B",
        explanation: "Outline Stroke mengonversi ketebalan garis menjadi kurva bidang permanen, menjamin proporsi visual logo tetap konsisten saat diskalakan dalam animasi video.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah sebuah paket elemen grafis siaran on-screen 'Breaking News' televisi sekolah yang terdiri dari Logo Bug, Breaking News Header Bar, dan News Ticker dalam kanvas 1920x1080 piksel!",
        options: [
          { key: "A", text: "Membuat tulisan 'Berita Gawat' menggunakan kuas cat air di kertas karton" },
          { key: "B", text: "Kanvas 1920x1080 Full HD: (1) Logo Bug transparan 90% di pojok kanan atas dalam Title Safe margin; (2) Pita Breaking News warna Merah Darah #C00000 bersudut miring 15° di atas lower third dengan teks kapital tebal warna putih; (3) News Ticker Bar hitam transparan 85% setinggi 65px di batas bawah aman dengan kotak header kuning 'UPDATE' di sisi kiri; (4) Seluruh aset diekspor sebagai PNG-24 transparan terpisah" },
          { key: "C", text: "Menutupi seluruh layar video dengan gambar bendera merah polos" },
          { key: "D", text: "Menggunakan warna kuning muda dan font tipis yang tidak terbaca" },
        ],
        correctKey: "B",
        explanation: "Rancangan paket OGG ini memenuhi standar broadcast komersial: kepatuhan margin aman, hierarki warna urgensi psikologis yang kontras, tipografi keterbacaan tinggi, dan format transparansi modular.",
      },
    ],
    lkpd: {
      title: "LKPD P2-K2: Pembuatan Paket Grafis On-Screen Breaking News TV dengan Shape Builder",
      objective: "Peserta didik mampu menggunakan operasi geometri Boolean (Shape Builder / Pathfinder) dan perataan Align untuk merancang paket grafis siaran berita TV (Breaking News Bar & Logo Bug).",
      tools: ["Komputer Lab dengan Software Vektor (Adobe Illustrator / CorelDRAW / Inkscape)", "Mouse Presisi", "Panduan Template Broadcast 1080p"],
      steps: [
        "Buka software vektor dan buat artboard baru ukuran 1920 x 1080 piksel (RGB, 72 PPI).",
        "Aktifkan garis pemandu Title Safe Margin (margin 10% dari tepi).",
        "Buat Logo Bug stasiun TV sekolah di pojok kanan atas: gabungkan 3 lingkaran dan 1 kotak menggunakan Shape Builder Tool (Shift + M). Atur opasitas menjadi 85%.",
        "Rancang bilah Breaking News: buat persegi panjang di sepertiga bawah, miringkan sisinya (shear 15°), beri warna gradasi merah gelap ke merah menyala.",
        "Tambahkan teks 'BREAKING NEWS' menggunakan font Sans-serif ekstra tebal (Impact/Roboto Black) warna putih bersih dengan bayangan lembut tipis.",
        "Buat News Ticker Bar di bagian paling bawah: buat bilah hitam transparan setinggi 60 piksel di atas batas Title Safe, tambahkan badge kotak 'HEADLINE' warna kuning di sisi kiri.",
        "Gunakan panel Align untuk memastikan teks berada tepat di tengah sumbu vertikal bilah.",
        "Ekspor masing-masing elemen secara terpisah ke format PNG-24 Transparan.",
      ],
      outputFormat: "File master vektor (.AI/.EPS) dan 3 file aset gambar transparan (.PNG) beresolusi 1920x1080.",
    },
    journalQuestions: {
      q1: "Bagaimana penggunaan Shape Builder Tool mempermudah dan mempercepat proses kreatif Anda dalam menciptakan logo yang kompleks?",
      q2: "Mengapa kepatuhan terhadap garis batas Title Safe Margin mutlak diperlukan oleh desainer grafis pertelevisian profesional?",
      q3: "Bagaimana perpaduan warna merah dan kuning pada grafis Breaking News memicu respons psikologis kewaspadaan bagi penonton berita?",
    },
    kktpIndicators: [
      "Mampu mengoperasikan teknik manipulasi geometri vektor Shape Builder dan Pathfinder secara presisi.",
      "Mampu menerapkan perataan matematis Align and Distribute pada penyusunan tata letak grafis.",
      "Mampu merancang paket grafis siaran on-screen berita TV (Logo Bug & Breaking News) format PNG transparan.",
    ],
  },

  // =========================================================================
  // KONTEN 3: p2-k3 - Prinsip Warna & Tipografi (Typography)
  // =========================================================================
  {
    id: "p2-k3",
    order: 3,
    title: "Pengolahan warna dan teks",
    shortTitle: "Pengolahan Warna & Tipografi",
    summary:
      "Penerapan estetika dan komunikasi visual: teori harmoni warna (Color Wheel, palet warna, Color Palette Generator), pewarnaan gradasi (Interactive Fill), anatomi tipografi, pemilihan font pairing (Serif, Sans-serif, Display), dan pengaturan teks artistik maupun paragraf agar terbaca jelas dan berdaya pikat.",
    kompetensi: [
      "Menjelaskan",
      "Menerapkan",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menjelaskan prinsip warna dan tipografi.",
      "Peserta didik mampu menerapkan warna dan teks secara tepat dalam desain.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Mengapa hampir semua stasiun televisi berita besar di dunia (CNN, BBC, TVRI, Kompas TV) memilih warna Biru dan Merah sebagai warna identitas studionya, dan tidak pernah menggunakan warna merah muda neon atau hijau stabilo?",
    hookContext:
      "Warna memiliki resonansi psikologis bawah sadar. Biru secara ilmiah memicu rasa percaya (trust), kredibilitas, dan otoritas stabilitas. Merah memancarkan urgensi peristiwa terkini (breaking immediacy) dan energi keberanian.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Skema kombinasi warna yang menggunakan dua warna yang posisinya saling berhadapan langsung 180 derajat pada roda warna (seperti Biru dan Oranye) disebut...",
        options: [
          { key: "A", text: "Skema Warna Komplementer (Complementary)" },
          { key: "B", text: "Skema Warna Monokromatik" },
          { key: "C", text: "Skema Warna Analog" },
          { key: "D", text: "Skema Warna Netral" },
        ],
        correctKey: "A",
        explanation: "Warna komplementer berada tepat berseberangan pada lingkaran warna, menghasilkan kontras visual paling tajam dan energi getaran visual paling dinamis.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Garis imajiner horizontal tempat berpijaknya huruf-huruf alfabet dalam anatomi tipografi disebut...",
        options: [
          { key: "A", text: "Baseline" },
          { key: "B", text: "X-Height" },
          { key: "C", text: "Cap Height" },
          { key: "D", text: "Descender Line" },
        ],
        correctKey: "A",
        explanation: "Baseline adalah garis dasar lantai horizontal tempat seluruh karakter huruf alfabet duduk dan bertumpu.",
      },
    ],
    materialCards: [
      {
        title: "1. Kekuatan Bawah Sadar: Psikologi Warna dalam Media",
        content: "Warna bukan sekadar hiasan estetis, melainkan senjata komunikasi psikologis yang bekerja dalam hitungan milidetik sebelum otak penonton membaca teks. 90% penilaian awal terhadap sebuah program media ditentukan oleh kesan pertama warna visualnya.",
        caseStudy: "Program berita investigasi kriminal menggunakan palet warna desaturasi dingin beraksen merah darah untuk menciptakan nuansa misteri dan bahaya moral.",
      },
      {
        title: "2. Makna Psikologis Warna Utama Siaran",
        content: "Biru: Kepercayaan, integritas, ketenangan, profesionalisme (Berita, Keuangan). Merah: Urgensi, aksi, bahaya, gairah, keberanian (Breaking news, Olahraga). Kuning/Emas: Optimisme, kehangatan, kewaspadaan, kemewahan. Hijau: Kesehatan, alam, uang, kestabilan (Program edukasi lingkungan). Hitam: Kekuatan, elegansi, misteri, kemewahan (Program talkshow malam eksklusif).",
      },
      {
        title: "3. Empat Skema Harmoni Roda Warna (Color Harmony)",
        content: "(1) Monochromatic (variasi terang-gelap dari satu warna tunggal; tenang dan elegan), (2) Analogous (tiga warna berdampingan di roda warna, misal Biru-Toska-Hijau; sangat harmonis alami), (3) Complementary (dua warna berseberangan, misal Oranye & Teal; kontras tinggi sinematik), (4) Triadic (tiga warna berjarak sama membentuk segitiga; dinamis dan bersemangat).",
      },
      {
        title: "4. Aturan Desain 60-30-10 dalam Penataan Warna",
        content: "Formula proporsi tata ruang warna visual: 60% Warna Dominan (biasanya warna netral latar belakang seperti abu-abu gelap, putih, atau navy), 30% Warna Sekunder (warna struktur pendukung seperti pelat grafis atau bingkai meja), dan 10% Warna Aksen (warna kontras menyala khusus untuk tombol call-to-action atau teks penting).",
        didYouKnow: "Aturan 60-30-10 diadaptasi dari prinsip desain interior arsitektur untuk menjaga agar ruangan tidak terasa monoton namun juga tidak terlalu ramai norak."
      },
      {
        title: "5. Anatomi Huruf: Membedah Struktur Tipografi",
        content: "Elemen dasar huruf: Baseline (garis lantai pijak), X-Height (ketinggian badan huruf kecil seperti 'x', 'a', 'o'), Cap Height (tinggi huruf kapital 'H'), Ascender (tangkai huruf kecil yang menjulang ke atas seperti 'd', 'b', 'k'), Descender (ekor huruf yang menggantung ke bawah baseline seperti 'y', 'g', 'p').",
      },
      {
        title: "6. Klasifikasi Font 1: Serif (Klasik & Otoritatif)",
        content: "Memiliki kait kaki (serif) kecil di ujung garis huruf (contoh: Times New Roman, Garamond, Playfair Display). Mengkomunikasikan tradisi, sejarah, sastra, kemewahan klasik, dan otoritas formal. Sangat nyaman untuk teks buku cetak panjang, namun rentan terlihat buram berkedip pada video beresolusi rendah.",
      },
      {
        title: "7. Klasifikasi Font 2: Sans-Serif (Modern & Keterbacaan Tinggi)",
        content: "Huruf tanpa kait kaki (Sans = tanpa dalam bahasa Prancis). Garis lurus dengan ketebalan yang konsisten (contoh: Helvetica, Roboto, Inter, Montserrat, Arial). Merupakan standar mutlak pertelevisian dunia dan antarmuka digital karena memiliki keterbacaan (readability) yang luar biasa tajam di layar bergerak.",
      },
      {
        title: "8. Klasifikasi Font 3: Slab Serif & Display Fonts",
        content: "Slab Serif memiliki kait kaki tebal berbentuk balok kotak (contoh: Rockwell, Roboto Slab), memberikan kesan kokoh industri dan maskulin. Display / Decorative fonts memiliki bentuk unik bergaya khusus (contoh: font horror, font retro komik, font tulisan tangan kaligrafi), hanya boleh digunakan sebagai judul utama, diharamkan untuk teks tubuh.",
      },
      {
        title: "9. Tiga Pilar Legibility: Kerning, Tracking, & Leading",
        content: "Legibility adalah kemudahan mengenali bentuk huruf individual. Kerning menyesuaikan ruang mikro antara pasangan huruf berisiko (misal jarak antara 'T' dan 'o'). Tracking merenggangkan seluruh spasi kata (bagus untuk judul teks kapital). Leading mengatur jarak antar baris kalimat agar teks tidak saling tumpang tindih.",
      },
      {
        title: "10. Hierarki Tipografi Visual (Visual Hierarchy)",
        content: "Mata manusia membaca berdasarkan ukuran dan kontras: (1) Heading / Judul Utama (Ukuran terbesar 60-72pt, font paling tebal, warna kontras; dibaca pertama dalam 1 detik), (2) Subheading (Ukuran sedang 32-40pt; merangkum konteks), (3) Body Text / Teks Isi (Ukuran terbaca 18-24pt; informasi detail), (4) Caption / Metadata (Ukuran terkecil 12-14pt).",
        caseStudy: "Poster acara yang tidak memiliki hierarki ukuran akan membuat mata penonton kebingungan mencari tahu informasi mana yang harus dibaca terlebih dahulu.",
      },
      {
        title: "11. Seni Memadukan Huruf (Font Pairing Mastery)",
        content: "Aturan emas memadukan font: Jangan gunakan lebih dari 2 jenis font dalam satu desain! Padukan font yang memiliki kontras kepribadian yang jelas: Judul menggunakan font Serif anggun / Display tegas, dipadukan dengan teks isi menggunakan font Sans-Serif netral yang sangat bersih (misal Playfair Display + Montserrat).",
      },
      {
        title: "12. Standar Kontras Keterbacaan WCAG (Web Content Accessibility Guidelines)",
        content: "Kontras warna teks terhadap latar belakang wajib memenuhi rasio matematis: Minimal rasio 4.5:1 untuk teks normal dan 3:1 untuk teks berukuran besar. Teks putih di atas latar belakang abu-abu terang memiliki rasio buruk (< 2:1) yang membuat penonton lansia atau tunanetra tidak bisa membacanya.",
      },
      {
        title: "13. Tipografi Bergerak Siaran: Readability on Motion",
        content: "Teks pada siaran televisi bergerak dan hilang dalam hitungan detik. Aturan wajib tipografi siaran: Gunakan huruf tebal (Bold/Semi-Bold), hindari font bergaris ultra-tipis (Hairline fonts mudah hilang saat kompresi video), tambahkan bayangan lembut (Drop Shadow) atau pelat latar belakang gelap semi-transparan.",
      },
      {
        title: "14. Fenomena Warna Strobing & Moiré pada Layar Televisi",
        content: "Hindari penggunaan warna merah 100% murni (#FF0000) bersebelahan dengan biru 100% murni (#0000FF) pada teks karena akan menimbulkan getaran ilusi optik menyakitkan (Chromostereopsis). Hindari pula garis-garis tipis berulang pada teks yang memicu interferensi moiré di layar TV.",
      },
      {
        title: "15. All-Caps vs Title Case dalam Penyampaian Pesan",
        content: "Huruf KAPITAL SEMUA (ALL-CAPS) sangat efektif untuk judul pendek 1-3 kata dan breaking news karena memancarkan ketegasan otoritas. Namun, dilarang menulis paragraf panjang dalam ALL-CAPS karena otak manusia membaca kata berdasarkan kontur bentuk huruf kecil (ascender/descender); ALL-CAPS memperlambat kecepatan membaca hingga 20%.",
      },
      {
        title: "16. Eksplorasi Alat Bantu: Adobe Color Wheel & Coolors",
        content: "Manfaatkan platform kurasi warna digital gratis: Adobe Color (color.adobe.com) untuk mengekstrak palet warna dari foto referensi film dan menguji kepatuhan aksesibilitas buta warna (Color Blindness Accessibility Check). Coolors.co untuk menghasilkan kombinasi palet warna harmonis secara acak dalam satu ketukan spasi.",
      },
      {
        title: "17. Tipografi Multi-Bahasa: Karakter Khusus & Tanda Baca",
        content: "Saat mendesain grafis penyiaran berita internasional, pastikan font yang dipilih mendukung kumpulan glif lengkap (Latin Extended): aksen ejaan nama asing (misal huruf é, ö, ñ) serta tanda kutip buku standar (\" \") bukan tanda petik lurus mesin cetak (' ').",
      },
      {
        title: "18. Tren Desain Modern: Tipografi Kinetik & Efek Blur Glassmorphism",
        content: "Tren grafis media siaran saat ini memadukan tipografi tebal minimalis dengan latar belakang efek kaca buram berkabut (Glassmorphism / Frosted Glass) yang memberikan kesan modern, futuristik, dan mewah pada program teknologi dan gaya hidup.",
      },
      {
        title: "19. Lisensi Font: Memahami Batasan Hak Cipta",
        content: "Gunakan sumber font gratis legal untuk kebutuhan broadcast: Google Fonts (fonts.google.com) menyediakan ribuan keluarga font berkualitas tinggi berlisensi open source bebas royalti. Hindari mengunduh font sembarangan dari situs bajakan tanpa membaca lisensi EULA (End User License Agreement).",
      },
      {
        title: "20. POS Evaluasi Warna & Tipografi Sebelum Produksi Cetak/Tayang",
        content: "Daftar periksa akhir: (1) Uji teks pada jarak 3 meter dari layar (apakah masih terbaca?), (2) Uji teks dalam mode hitam putih (Grayscale Check: jika teks tetap kontras terbaca dalam hitam putih, berarti kontras warnanya sempurna), (3) Pastikan tidak ada kesalahan ejaan kata (Zero Typo).",
      },
    ],
    video: {
      title: "Masterclass Psikologi Warna & Seni Tipografi untuk Desain Siaran",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari cara memilih palet warna harmonis di Adobe Color dan teknik Font Pairing yang memikat mata.",
    },
    gamePairs: [
      { id: 1, left: "Warna Biru", right: "Mengkomunikasikan rasa kepercayaan, profesionalisme, dan integritas berita" },
      { id: 2, left: "Skema Komplementer", right: "Dua warna yang berseberangan 180 derajat pada roda warna (kontras tinggi)" },
      { id: 3, left: "Font Sans-Serif", right: "Gaya huruf bersih tanpa kait kaki yang sangat mudah dibaca di layar video TV" },
      { id: 4, left: "Baseline", right: "Garis horizontal imajiner tempat berpijaknya huruf-huruf alfabet" },
      { id: 5, left: "Rasio Kontras 4.5:1", right: "Standar minimal aksesibilitas WCAG agar teks terbaca jelas di atas latar" },
    ],
    caseTitle: "Teks Pengumuman Darurat Bencana Tidak Terbaca Penonton Lansia",
    caseScenario:
      "Dalam siaran langsung liputan evakuasi gempa bumi, stasiun televisi sekolah menayangkan teks alamat posko bantuan darurat menggunakan font Script bersambung dekoratif berwarna kuning muda di atas latar belakang rekaman debu abu-abu terang tanpa bayangan (drop shadow). Akibatnya, ratusan pemirsa lansia dan keluarga korban mengeluh karena tidak bisa membaca alamat posko bantuan sama sekali.",
    caseInstruction:
      "Analisis kegagalan pemilihan font dan rasio kontras warna dalam situasi darurat tersebut. Rancang perbaikan tipografi (jenis font, ketebalan, warna teks, pelat latar belakang, dan rasio kontras WCAG) agar informasi kemanusiaan terbaca instan oleh seluruh kalangan usia pemirsa.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Kategori font yang memiliki ciri khas kait garis kaki kecil di ujung-ujung hurufnya dan memberikan kesan klasik, terhormat, serta formal adalah...",
        options: [
          { key: "A", text: "Font Sans-Serif" },
          { key: "B", text: "Font Serif" },
          { key: "C", text: "Font Monospace" },
          { key: "D", text: "Font Dingbats" },
        ],
        correctKey: "B",
        explanation: "Font Serif dicirikan oleh garis sirip kait kaki kecil (seperti Times New Roman), mengkomunikasikan nilai tradisi, sastra klasik, dan wibawa akademis.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Untuk menjamin sebuah teks judul berita televisi dapat terbaca dengan sangat jelas di atas rekaman video yang dinamis dan berubah-ubah kecerahannya, teknik grafis pendukung yang paling efektif adalah...",
        options: [
          { key: "A", text: "Membuat teks menjadi transparan 90%" },
          { key: "B", text: "Menambahkan Drop Shadow lembut berwarna gelap atau menempatkan pelat bidang balok semi-transparan (Backdrop Plate) di belakang teks" },
          { key: "C", text: "Mengganti huruf menjadi warna abu-abu pudar" },
          { key: "D", text: "Memperkecil ukuran teks sekecil mungkin" },
        ],
        correctKey: "B",
        explanation: "Pelat latar belakang (Backdrop Bar) atau bayangan tegas (Drop Shadow) menciptakan pemisah fisik optik antara teks putih dengan footage video terang di belakangnya.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Seorang siswa mendesain poster talkshow menggunakan 6 jenis font yang berbeda-beda dalam satu halaman (ada font gothic, tulisan tangan, komik, serif, dan sans-serif). Kesalahan desain fundamental yang terjadi adalah...",
        options: [
          { key: "A", text: "Pelanggaran aturan hierarki visual dan keharmonisan tipografi: desain terlihat kacau, amatir, membingungkan mata, dan kehilangan identitas profesional" },
          { key: "B", text: "Komputer akan otomatis menghapus file poster tersebut" },
          { key: "C", text: "Ukuran file desain menjadi lebih ringan" },
          { key: "D", text: "Warna poster otomatis menjadi hitam putih" },
        ],
        correctKey: "A",
        explanation: "Aturan emas tipografi membatasi penggunaan maksimal 2 jenis font yang harmonis dalam satu karya; menggunakan terlalu banyak font acak merusak fokus komunikasi pesan (visual clutter).",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Mengapa menuliskan seluruh paragraf teks penjelasan berita dalam huruf KAPITAL SEMUA (ALL-CAPS) sangat tidak disarankan dalam media komunikasi penyiaran?",
        options: [
          { key: "A", text: "Karena huruf kapital dilarang oleh kamus bahasa Indonesia" },
          { key: "B", text: "Karena mata manusia mengenali kata berdasarkan kontur bentuk ketinggian huruf kecil (ascender dan descender); susunan ALL-CAPS berbentuk kotak monolitik seragam yang memperlambat laju membaca penonton dan terkesan seperti membentak/berteriak" },
          { key: "C", text: "Karena huruf kapital membutuhkan kuota internet lebih banyak" },
          { key: "D", text: "Karena huruf kapital tidak memiliki warna" },
        ],
        correctKey: "B",
        explanation: "Penelitian psikologi membaca membuktikan teks panjang ALL-CAPS merusak keterbacaan (readability) karena menghilangkan variasi bentuk fisik kata, memperlambat pemrosesan kognitif otak.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah palet warna 60-30-10 dan kombinasi dua font (Font Pairing) yang sempurna untuk program siaran televisi dokumenter sejarah perjuangan pahlawan kemerdekaan!",
        options: [
          { key: "A", text: "Warna Merah Muda Neon, Hijau Stabilo, dan Kuning Lemon dengan font komik kartun lucu" },
          { key: "B", text: "Palet Warna: 60% Coklat Tua Antik / Hitam Kopi (latar belakang), 30% Merah Marun Patriotik #8B0000 (pelat judul), 10% Emas Antik #D4AF37 (aksen border dan highlight); Font Pairing: Judul menggunakan font Serif berwibawa tegas (Playfair Display / Cinzel Bold), teks narasi menggunakan font Sans-Serif bersih (Montserrat / Inter)" },
          { key: "C", text: "Hanya menggunakan warna putih polos tanpa teks apapun" },
          { key: "D", text: "Menggunakan 10 warna pelangi cerah acak" },
        ],
        correctKey: "B",
        explanation: "Rancangan ini selaras dengan konteks sejarah: palet warna antik marun-emas memancarkan penghormatan historis patriotik, sementara perpaduan font Serif klasik untuk judul dan Sans-Serif bersih untuk isi menjamin wibawa dan keterbacaan tinggi.",
      },
    ],
    lkpd: {
      title: "LKPD P2-K3: Eksplorasi Palet Warna Psikologis & Font Pairing Poster Siaran TV",
      objective: "Peserta didik mampu menyusun skema palet warna harmonis (60-30-10) menggunakan Adobe Color dan memadukan dua jenis font (Font Pairing) ber-keterbacaan tinggi untuk poster program TV.",
      tools: ["Komputer Lab dengan Akses Internet", "Browser (Akses color.adobe.com & fonts.google.com)", "Software Desain Grafis (Photoshop / Illustrator / Canva Pro)"],
      steps: [
        "Pilih salah satu tema program siaran: (A) Berita Investigasi Kriminal, (B) Talkshow Remaja Inspiratif, atau (C) Program Kuliner Nusantara.",
        "Buka situs Adobe Color (color.adobe.com). Pilih aturan harmoni (misal Complementary atau Triadic).",
        "Rancang palet 5 warna yang mencerminkan psikologi tema program Anda. Catat kode HEX masing-masing warna.",
        "Terapkan aturan proporsi 60-30-10: Tentukan warna Dominan (60%), warna Sekunder (30%), dan warna Aksen (10%).",
        "Buka Google Fonts. Pilih 2 font yang berpadu serasi: 1 font untuk Judul Acara (Heading) dan 1 font untuk Subjudul/Waktu Tayang (Body).",
        "Buat kanvas poster digital ukuran 1080 x 1350 piksel (format Instagram Portrait).",
        "Susun tata letak poster: masukkan judul program, nama presenter, tanggal jam tayang, logo stasiun, dan foto presenter.",
        "Uji keterbacaan teks menggunakan WebAIM Contrast Checker untuk memastikan rasio kontras teks > 4.5:1.",
      ],
      outputFormat: "File gambar poster format PNG resolusi 1080x1350 piksel disertai lembar keterangan palet warna HEX dan nama font yang digunakan.",
    },
    journalQuestions: {
      q1: "Mengapa pemahaman psikologi warna membantu Anda menyampaikan emosi program siaran bahkan sebelum penonton menyimak isi acaranya?",
      q2: "Bagaimana aturan pembatasan maksimal 2 jenis font dalam satu karya mendisiplinkan Anda dari godaan menggunakan terlalu banyak gaya tulisan?",
      q3: "Pelajaran apa yang Anda petik tentang pentingnya pengujian kontras warna demi kenyamanan penonton yang memiliki keterbatasan penglihatan?",
    },
    kktpIndicators: [
      "Mampu merancang skema palet warna harmonis (aturan 60-30-10) sesuai psikologi tema program siaran.",
      "Mampu mendemonstrasikan teknik Font Pairing yang serasi dengan hierarki tipografi visual yang tegas.",
      "Mampu memastikan keterbacaan teks memenuhi standar rasio kontras aksesibilitas WCAG.",
    ],
  },

  // =========================================================================
  // KONTEN 4: p2-k4 - Prinsip Tata Letak (Layout & Composition)
  // =========================================================================
  {
    id: "p2-k4",
    order: 4,
    title: "Tata letak (layout)",
    shortTitle: "Tata Letak (Layout)",
    summary:
      "Prinsip penyusunan elemen visual terpadu: hierarki visual, kontras, keseimbangan (simetris & asimetris), keselarasan (alignment), kedekatan (proximity), serta penggunaan sistem grid dan panduan garis (guidelines) untuk menghasilkan komposisi desain yang rapi, profesional, dan efektif menyampaikan pesan.",
    kompetensi: [
      "Menjelaskan",
      "Menerapkan",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu menjelaskan prinsip tata letak.",
      "Peserta didik mampu menerapkan tata letak pada karya desain sesuai kebutuhan media.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Jika Anda melihat brosur promosi yang seluruh sudut halamannya dijejali teks padat, gambar bertumpuk-tumpuk tanpa sisa ruang kosong sedikit pun, mengapa otak Anda secara spontan merasa lelah dan langsung membuang brosur tersebut ke tempat sampah?",
    hookContext:
      "Ruang kosong (White Space / Negative Space) bukan ruang sia-sia yang terbuang, melainkan ruang bernafas bagi mata penonton. Desain yang mewah dan berkelas dunia selalu memberikan ruang kosong yang lapang untuk memberi panggung bagi pesan utama agar bersinar.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Prinsip psikologi Gestalt yang menyatakan bahwa elemen-elemen visual yang diletakkan saling berdekatan satu sama lain akan dipersepsikan oleh otak manusia sebagai satu kelompok kesatuan yang memiliki relasi makna adalah...",
        options: [
          { key: "A", text: "Prinsip Kedekatan (Law of Proximity)" },
          { key: "B", text: "Prinsip Penutupan (Law of Closure)" },
          { key: "C", text: "Prinsip Kesamaan (Law of Similarity)" },
          { key: "D", text: "Prinsip Kontinuitas" },
        ],
        correctKey: "A",
        explanation: "Law of Proximity menyatakan jarak spasial yang rapat mengelompokkan elemen informasi secara kognitif, memudahkan pembaca mencerna data yang saling berhubungan.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Pusat gravitasi perhatian mata yang paling pertama kali dilihat oleh audiens saat menatap sebuah karya desain grafis disebut...",
        options: [
          { key: "A", text: "Focal Point (Pusat Perhatian)" },
          { key: "B", text: "Negative Space" },
          { key: "C", text: "Grid Column" },
          { key: "D", text: "Margin Gutter" },
        ],
        correctKey: "A",
        explanation: "Focal Point adalah area penarik perhatian utama (Center of Interest) yang diciptakan melalui kontras ukuran, warna mencolok, atau posisi strategis.",
      },
    ],
    materialCards: [
      {
        title: "1. Tata Letak (Layout): Mengatur Lalu Lintas Pandang",
        content: "Tata letak adalah seni mengorganisasikan elemen visual (teks, foto, bentuk, garis) pada bidang dua dimensi secara terstruktur. Desain yang baik bertindak seperti pemandu lalu lintas yang menuntun mata penonton meluncur mulus dari informasi terpenting menuju informasi pendukung tanpa kebingungan.",
        caseStudy: "Poster festival musik yang memiliki tata letak teratur memudahkan calon penonton menemukan nama musisi idola dan tanggal pembelian tiket hanya dalam pandangan 2 detik.",
      },
      {
        title: "2. Hukum Psikologi Persepsi: Prinsip Gestalt",
        content: "Teori psikologi Gestalt membuktikan bahwa otak manusia cenderung menyederhanakan dan mengelompokkan rangsangan visual menjadi satu kesatuan utuh. Empat prinsip Gestalt kunci: Proximity (kedekatan), Similarity (kesamaan bentuk/warna), Continuity (aliran garis pandang), dan Closure (otak melengkapi bentuk terputus).",
      },
      {
        title: "3. Prinsip Kedekatan (Law of Proximity)",
        content: "Jarak spasi adalah bahasa visual. Kelompokkan elemen yang saling berhubungan secara rapat: Judul acara dan jam tayang didekatkan. Nomor telepon dan alamat diletakkan berdampingan. Jangan pisahkan nama pembicara dengan fotonya secara berjauhan karena akan membingungkan pembaca.",
      },
      {
        title: "4. Keseimbangan Simetris (Formal Balance)",
        content: "Keseimbangan simetris membagi kanvas menjadi dua bagian yang identik seperti pantulan cermin (kiri-kanan sama persis). Mengomunikasikan kestabilan, formalitas, ketenangan, keagungan, dan keadilan resmi (sangat cocok untuk poster peringatan kenegaraan atau pameran museum).",
      },
      {
        title: "5. Keseimbangan Asimetris (Dynamic Balance)",
        content: "Keseimbangan asimetris menyeimbangkan elemen yang berbeda bobot visual di kedua sisi kanvas: satu foto besar di sisi kiri diimbangi oleh beberapa blok teks tebal dan logo di sisi kanan. Menghasilkan energi dinamis, modernitas, dan rasa penasaran visual yang menggugah emosi.",
        didYouKnow: "Lukisan terkenal karya pelukis Jepang Hokusai 'The Great Wave off Kanagawa' adalah mahakarya keseimbangan asimetris paling ikonik dalam sejarah seni dunia."
      },
      {
        title: "6. Menciptakan Titik Fokus Utama (Focal Point)",
        content: "Setiap desain wajib memiliki satu pahlawan visual (Visual Hero). Jangan biarkan semua elemen berteriak sama kerasnya. Ciptakan Focal Point melalui: (1) Kontras Ukuran (elemen utama dibuat jauh lebih besar), (2) Kontras Warna (elemen utama diberi warna aksen mencolok di tengah warna netral), atau (3) Isolasi Ruang.",
      },
      {
        title: "7. Pola Membaca Alami Mata: Pola F dan Pola Z",
        content: "Mata manusia membaca konten visual mengikuti pola kebiasaan budaya: Pola Z (Z-Pattern) untuk desain poster/iklan visual: mata meluncur dari kiri atas -> kanan atas -> menukik ke kiri bawah -> berhenti di kanan bawah (tempat tombol Call to Action). Pola F (F-Pattern) untuk halaman berita penuh teks artikel.",
      },
      {
        title: "8. Kekuatan Sakral Ruang Kosong (Negative Space / White Space)",
        content: "Negative Space adalah area di sekitar dan di antara elemen desain yang dibiarkan kosong tanpa tulisan atau gambar. White space memberikan istirahat bagi retina mata, mengurangi kelelahan kognitif, mempertegas hierarki, dan memancarkan aura kemewahan eksklusif (seperti iklan produk Apple).",
        caseStudy: "Merek barang mewah dunia sengaja meletakkan botol parfum kecil di tengah bidang putih kosong raksasa untuk mengomunikasikan prestise dan nilai harga tinggi.",
      },
      {
        title: "9. Kerangka Kerja Arsitektural: The Grid System",
        content: "Grid System adalah jaring garis panduan vertikal dan horizontal yang membagi halaman menjadi modul-modul terukur. Grid menjamin keselarasan letak (alignment), menciptakan ritme keteraturan, dan mempercepat alur kerja desainer dalam menyusun puluhan halaman majalah siaran.",
      },
      {
        title: "10. Anatomi Grid: Columns, Gutters, dan Margins",
        content: "Komponen kisi-kisi: (1) Columns (kolom vertikal tempat menaruh teks dan foto), (2) Gutters (celah spasi kosong pemisah antar kolom agar teks tidak bertabrakan), (3) Margins (jarak batas kosong pelindung antara isi desain dengan tepi batas luar kertas/layar).",
      },
      {
        title: "11. Sistem Kisi Populer: The 12-Column Grid",
        content: "Standar industri desain grafis dan web modern menggunakan sistem 12 kolom karena angka 12 sangat fleksibel: dapat dibagi rata menjadi 12 kolom tunggal, 6 kolom ganda, 4 kolom (3x4), 3 kolom (4x3), atau 2 kolom (6x6) dalam satu tata letak yang sama tanpa melanggar keteraturan.",
      },
      {
        title: "12. Modular Grid & Baseline Grid",
        content: "Modular Grid memadukan kolom vertikal dan baris horizontal membentuk kisi-kisi kotak (modules), sangat ideal untuk tata letak jadwal siaran televisi mingguan atau tabel infografis data. Baseline Grid adalah garis buku tulis berjarak tetap untuk mengunci agar seluruh baris teks paragraf sejajar lurus sempurna.",
      },
      {
        title: "13. Prinsip Skala & Proporsi (Golden Ratio 1:1.618)",
        content: "Golden Ratio (Rasio Emas Phi 1.618) adalah proporsi matematis yang ditemukan pada struktur alam semesta (cangkang kerang nautilus, pusaran galaksi, kelopak bunga). Menerapkan rasio 1:1.618 pada perbandingan ukuran gambar terhadap teks menghasilkan kenyamanan visual bawah sadar yang sangat harmonis.",
      },
      {
        title: "14. Prinsip Kontras: Membangkitkan Ketertarikan Visual",
        content: "Kontras terjadi ketika dua elemen visual saling bertolak belakang: Besar vs Kecil, Tebal vs Tipis, Gelap vs Terang, Geometris Kaku vs Garis Melengkung Organik. Tanpa kontras, desain akan terasa hambar, datar, dan membuat penonton bosan.",
      },
      {
        title: "15. Kesatuan & Harmoni Desain (Unity & Harmony)",
        content: "Unity menjamin seluruh elemen desain terlihat seperti berasal dari satu keluarga besar yang sama, bukan tempelan acak. Dicapai melalui: pengulangan gaya bentuk geometris, konsistensi palet warna, dan keseragaman sudut lengkungan (corner radius) pada seluruh tombol.",
      },
      {
        title: "16. Repetisi & Ritme Visual (Repetition & Rhythm)",
        content: "Mengulang elemen visual tertentu (seperti pola garis garis miring atau bentuk motif segitiga) di seluruh materi promosi (poster, banner web, lower third, bumper video) menciptakan ritme identitas visual yang memperkuat ingatan merek stasiun TV di benak penonton.",
      },
      {
        title: "17. Arah Gerak Pandang (Visual Flow & Direction)",
        content: "Arahkan pandangan mata penonton menggunakan garis penunjuk, panah grafis, atau arah tatapan mata foto karakter. Jika foto presenter di poster menatap ke arah kanan, mata penonton secara refleks akan ikut menoleh membaca judul acara yang berada di sebelah kanannya.",
      },
      {
        title: "18. Desain Responsif & Tata Letak Multi-Platform",
        content: "Materi promosi program TV masa kini harus dirancang dalam berbagai format rasio sekaligus: Format 16:9 (1920x1080) untuk banner YouTube dan layar TV, Format 1:1 (1080x1080) untuk feed Instagram, dan Format 9:16 (1080x1920) untuk Instagram Story dan TikTok.",
      },
      {
        title: "19. Kesalahan Fatal Tata Letak yang Wajib Dihindari",
        content: "Dilarang: (1) Meletakkan teks menabrak batas margin tepi kanvas, (2) Membiarkan satu kata sendirian di baris terakhir paragraf (Widows and Orphans), (3) Mengabaikan white space hingga kanvas sesak, (4) Menggunakan terlalu banyak titik fokus yang saling bersaing.",
      },
      {
        title: "20. POS Pengujian 'Squint Test' (Uji Menyipitkan Mata)",
        content: "Metode evaluasi instan para master desain grafis: Mundur dua langkah dari layar komputer dan sipitkan mata Anda hingga pandangan menjadi kabur. Apakah elemen terpenting (Focal Point) masih terlihat menonjol? Jika seluruh desain membaur menjadi abu-abu rata tanpa bentuk jelas, perbaiki hierarki kontras Anda seketika!",
      },
    ],
    video: {
      title: "Masterclass Layout & Komposisi Desain: Grid System & Negative Space",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari cara menyusun 12-Column Grid di software grafis dan menerapkan teknik Squint Test untuk menguji Focal Point.",
    },
    gamePairs: [
      { id: 1, left: "Negative Space", right: "Ruang kosong bernafas di sekitar objek yang mempertegas kesan elegan dan mewah" },
      { id: 2, left: "Focal Point", right: "Pusat perhatian utama yang paling pertama dilihat oleh mata penonton" },
      { id: 3, left: "12-Column Grid", right: "Sistem kisi modular fleksibel pembagi tata letak layout grafis profesional" },
      { id: 4, left: "Law of Proximity", right: "Prinsip pengelompokan elemen yang berdekatan sebagai satu kesatuan makna" },
      { id: 5, left: "Keseimbangan Asimetris", right: "Penataan bobot visual yang berbeda di kedua sisi kanvas namun tetap seimbang dinamis" },
    ],
    caseTitle: "Poster Promosi Program TV Sesak Tanpa Ruang Kosong dan Membingungkan",
    caseScenario:
      "Seorang siswa mendesain poster promosi acara konser musik amal sekolah. Karena takut ada ruang yang terbuang sia-sia, ia memenuhi seluruh latar belakang dengan 15 foto musisi berbeda, menambahkan 8 logo sponsor berukuran raksasa di sembarang tempat, dan menuliskan teks jadwal acara dengan huruf beraneka warna menabrak tepi kertas. Hasilnya: tidak ada satu pun orang yang tahu siapa bintang tamu utamanya dan di mana acara tersebut diadakan.",
    caseInstruction:
      "Evaluasi pelanggaran prinsip tata letak (Focal Point, Negative Space, dan Proximity) dalam poster tersebut. Rancang struktur tata letak baru menggunakan sistem Grid dan tentukan elemen apa yang berhak menjadi 'Hero Visual' utama.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Fungsi utama dari penerapan Negative Space (White Space) yang lapang dalam sebuah desain grafis media promosi adalah...",
        options: [
          { key: "A", text: "Menghemat tinta printer saat dicetak" },
          { key: "B", text: "Memberikan ruang istirahat bagi mata penonton, mencegah kelelahan kognitif, serta menonjolkan fokus pesan utama agar terlihat mewah dan bernilai tinggi" },
          { key: "C", text: "Menunjukkan bahwa desainer malas menggambar" },
          { key: "D", text: "Sebagai tempat mencoret-coret tanda tangan" },
        ],
        correctKey: "B",
        explanation: "Negative space bukan kekosongan tanpa guna; ruang kosong adalah elemen desain aktif yang membingkai pesan utama dan meningkatkan keterbacaan serta prestise karya.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Metode pengujian visual cepat di mana seorang desainer menyipitkan matanya sambil melihat layar komputer untuk memeriksa apakah titik fokus utama (Focal Point) dan hierarki kontras sudah bekerja sempurna disebut...",
        options: [
          { key: "A", text: "Squint Test" },
          { key: "B", text: "Color Test" },
          { key: "C", text: "Print Test" },
          { key: "D", text: "Font Test" },
        ],
        correctKey: "A",
        explanation: "Squint Test mengaburkan detail teks halus dan hanya menyisakan bentuk massa kontras terang-gelap, memperlihatkan alur navigasi mata secara objektif.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Dalam desain poster promosi acara berformat Z-Pattern (Pola Z), posisi penempatan elemen ajakan bertindak (Call to Action / Info Kontak Pembelian Tiket) yang paling strategis menurut kebiasaan alur baca mata adalah...",
        options: [
          { key: "A", text: "Di pojok kiri atas" },
          { key: "B", text: "Tepat di pojok kanan bawah (akhir dari sapuan garis diagonal Z)" },
          { key: "C", text: "Tersembunyi di balik foto pembicara" },
          { key: "D", text: "Di luar batas kertas kanvas" },
        ],
        correctKey: "B",
        explanation: "Pola Z berakhir di pojok kanan bawah. Mata penonton menyelesaikan pemindaian informasi judul dan visual di titik tersebut, menjadikannya lokasi ideal untuk Call to Action.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Bandingkan penerapan Keseimbangan Simetris dengan Keseimbangan Asimetris! Mengapa sebuah poster festival film indie modern lebih memilih menggunakan Keseimbangan Asimetris daripada Keseimbangan Simetris?",
        options: [
          { key: "A", text: "Karena Keseimbangan Simetris membutuhkan komputer yang lebih mahal" },
          { key: "B", text: "Karena Keseimbangan Asimetris memancarkan energi dinamis, kejutan visual, rasa ingin tahu, dan nuansa kontemporer yang selaras dengan jiwa pemberontakan kreatif film independen" },
          { key: "C", text: "Karena Keseimbangan Asimetris tidak memerlukan gambar foto" },
          { key: "D", text: "Keseimbangan Simetris dilarang oleh asosiasi perfilman dunia" },
        ],
        correctKey: "B",
        explanation: "Keseimbangan asimetris terasa hidup, berani, dan tidak monoton, sangat cocok untuk mengomunikasikan karya seni modern yang provokatif dan eksperimental.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah pembagian tata letak berbasis sistem 12-Column Grid untuk poster promosi serial drama televisi baru berukuran poster standar!",
        options: [
          { key: "A", text: "Meletakkan seluruh tulisan dan gambar bertumpuk di satu kolom pojok kiri atas" },
          { key: "B", text: "Bagi kanvas menjadi 12 kolom dengan margin keliling 80px: Kolom 1-12 (Full Width) untuk foto Hero Karakter Utama di area 60% atas; Kolom 2-11 untuk Judul Utama berukuran raksasa di tengah; Kolom 3-10 dibagi menjadi 2 blok asimetris untuk Sinopsis singkat dan Jadwal Tayang; Kolom 4-9 di dasar kanvas untuk logo stasiun TV dan Call to Action" },
          { key: "C", text: "Menempelkan 100 foto potongan video di seluruh halaman tanpa jarak" },
          { key: "D", text: "Membiarkan seluruh poster kosong tanpa gambar dan teks sama sekali" },
        ],
        correctKey: "B",
        explanation: "Rancangan tata letak berbasis 12 kolom ini menjamin keselarasan modul yang kokoh, penempatan pahlawan visual yang dominan, pemanfaatan margin pelindung, dan alur baca mata yang runtut dari atas ke bawah.",
      },
    ],
    lkpd: {
      title: "LKPD P2-K4: Perancangan Tata Letak Poster Siaran TV Berbasis 12-Column Grid",
      objective: "Peserta didik mampu menyusun panduan 12-Column Grid dan merancang tata letak poster promosi program TV yang memiliki Focal Point kuat dan pemanfaatan Negative Space yang proporsional.",
      tools: ["Komputer Lab dengan Software Grafis (Photoshop / Illustrator / InDesign)", "Foto Talent Presenter Resolusi Tinggi (Cut-out Transparan)", "Template Grid 12 Kolom"],
      steps: [
        "Buat kanvas baru: Ukuran 1080 x 1350 piksel (Rasio 4:5), RGB, 72 PPI.",
        "Buat panduan kisi-kisi: 12 Kolom vertikal, Gutter (jarak antar kolom) 20 piksel, dan Margin sekeliling kanvas 60 piksel.",
        "Tentukan Focal Point utama: tempatkan foto talent presenter memotong rentang Kolom 2 hingga Kolom 11 di area tengah atas.",
        "Tempatkan Judul Program TV dengan font tebal melintasi Kolom 2 sampai Kolom 10 di bawah foto talent.",
        "Gunakan prinsip Proximity: kelompokkan tanggal tayang, jam siaran, dan nomor saluran TV di sepertiga bawah dalam satu blok rapi.",
        "Pertahankan minimal 25% area kanvas sebagai Negative Space (ruang kosong bernafas) di sekitar bahu talent dan margin luar.",
        "Lakukan 'Squint Test': mundurlah 2 meter dan sipitkan mata untuk memastikan mata Anda langsung tertuju pada wajah presenter dan judul acara.",
      ],
      outputFormat: "File master desain (.PSD/.AI) lengkap dengan garis panduan Grid aktif dan file ekspor JPEG 1080x1350 piksel.",
    },
    journalQuestions: {
      q1: "Mengapa seorang desainer pemula sering merasa takut membiarkan ada ruang kosong (white space) di dalam karyanya?",
      q2: "Bagaimana penggunaan sistem kisi-kisi (Grid System) mendisiplinkan penataan elemen Anda sehingga tidak ada elemen yang 'melenceng' dari garis?",
      q3: "Pengalaman apa yang Anda dapatkan saat melakukan Squint Test untuk menguji kekuatan kontras tata letak buatan Anda sendiri?",
    },
    kktpIndicators: [
      "Mampu menerapkan prinsip persepsi visual Gestalt (Proximity dan Similarity) dalam pengorganisasian elemen.",
      "Mampu merancang tata letak berbasis sistem 12-Column Grid dengan margin dan gutter yang presisi.",
      "Mampu menciptakan Focal Point yang dominan dan memanfaatkan Negative Space secara seimbang.",
    ],
  },

  // =========================================================================
  // KONTEN 5: p2-k5 - Pemanfaatan Aset Grafis Secara Legal & Etis
  // =========================================================================
  {
    id: "p2-k5",
    order: 5,
    title: "Fitur pendukung desain (aset grafis dan template)",
    shortTitle: "Aset Grafis & Template",
    summary:
      "Optimalisasi fitur pendukung desain grafis: pemanfaatan library aset grafis, ikonografi, ilustrasi, stock image, dan template siap pakai di Canva dan CorelDraw Content Exchange secara etis dan legal, pemahaman hak cipta / lisensi karya komersial, serta efisiensi waktu kerja desain.",
    kompetensi: [
      "Mengidentifikasi",
      "Menggunakan",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu mengidentifikasi aset grafis dan template yang sesuai.",
      "Peserta didik mampu menggunakan aset grafis dan template secara legal dan tepat.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Jika Anda mengunduh font gratis dari internet bertuliskan 'Free Download' lalu menggunakannya untuk membuat logo stasiun TV komersial yang tayang nasional, mengapa rumah produksi Anda bisa disomasi dan didenda ratusan juta rupiah oleh pemilik font dari Jerman?",
    hookContext:
      "'Free Download' tidak sama dengan 'Free for Commercial Use'. Sebagian besar font gratis di internet berlisensi 'Personal Use Only' (hanya untuk tugas sekolah pribadi). Menggunakannya untuk kepentingan penyiaran atau bisnis komersial adalah tindakan pencurian hak cipta pelanggaran hukum.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Lisensi aset digital yang membebaskan karya ke domain publik tanpa batas hak cipta sama sekali (pembuat melepaskan haknya), sehingga boleh digunakan secara bebas untuk keperluan komersial tanpa perlu membayar dan tanpa wajib menulis atribusi adalah...",
        options: [
          { key: "A", text: "Creative Commons Zero (CC0 / Public Domain)" },
          { key: "B", text: "Creative Commons Non-Commercial (CC BY-NC)" },
          { key: "C", text: "All Rights Reserved" },
          { key: "D", text: "Shareware" },
        ],
        correctKey: "A",
        explanation: "CC0 (Creative Commons Zero / Public Domain Dedication) adalah lisensi paling bebas di mana pencipta melepaskan seluruh hak ciptanya ke publik tanpa syarat apapun.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Dokumen teks perjanjian hukum yang disertakan saat mengunduh software atau font yang memuat aturan batasan hak penggunaan bagi pengguna akhir disebut...",
        options: [
          { key: "A", text: "EULA (End User License Agreement)" },
          { key: "B", text: "Invoice Tagihan" },
          { key: "C", text: "Storyline" },
          { key: "D", text: "Log Sheet" },
        ],
        correctKey: "A",
        explanation: "EULA adalah kontrak perjanjian hukum antara pencipta aset (tipe desainer) dengan pengguna akhir yang merinci apakah font boleh digunakan untuk siaran TV, web, atau hanya cetak.",
      },
    ],
    materialCards: [
      {
        title: "1. HAKI: Pelindung Ekosistem Ekonomi Kreatif",
        content: "Hak Kekayaan Intelektual (HAKI) adalah hak eksklusif yang diberikan hukum kepada seseorang atas hasil olah pikir intelektualnya (karya seni, desain, sastra, teknologi). Di Indonesia diatur dalam UU No. 28 Tahun 2014 tentang Hak Cipta. Menghormati hak cipta adalah pondasi integritas moral desainer profesional.",
        caseStudy: "Sebuah agensi iklan ternama dituntut ganti rugi miliaran rupiah karena menggunakan foto stock dari fotografer luar negeri tanpa membeli lisensi komersial resmi.",
      },
      {
        title: "2. Mitos Bahaya: 'Mengambil dari Google Images Berarti Gratis'",
        content: "Google Images adalah mesin pencari, bukan penyedia lisensi. Gambar yang muncul di Google dilindungi oleh hak cipta pemilik aslinya secara otomatis sejak saat pertama diunggah. Mengambil gambar dari Google tanpa izin untuk materi siaran TV adalah pelanggaran hukum pembajakan digital.",
      },
      {
        title: "3. Hak Moral vs Hak Ekonomi Pencipta",
        content: "Hak Moral adalah hak abadi yang melekat pada pencipta untuk mencantumkan namanya pada karya dan melarang karyanya diubah secara menghina martabatnya (tidak bisa dijual/dialihkan). Hak Ekonomi adalah hak eksklusif untuk mendapatkan keuntungan uang dari penggandaan, penyiaran, atau penjualan karya.",
        didYouKnow: "Meskipun Anda membeli lukisan dari seorang pelukis, Anda hanya memiliki benda fisiknya; Anda tidak memiliki hak cipta untuk mencetak dan menjual lukisan tersebut sebagai kaos komersial."
      },
      {
        title: "4. Klasifikasi Lisensi Font: Jebakan 'Personal Use'",
        content: "Jenis lisensi font pada file EULA: (1) Free for Personal Use (hanya untuk tugas sekolah atau cetak di kamar tidur sendiri), (2) Commercial Desktop License (untuk cetak buku dan brosur komersial berbayar), (3) Webfont License (untuk kode situs web berdasarkan jumlah pageviews), (4) Broadcast License (khusus untuk penayangan di televisi/film).",
      },
      {
        title: "5. Lisensi Font Khusus Siaran: Broadcast / Motion License",
        content: "Banyak foundry font mewajibkan pembelian lisensi khusus 'Broadcast License' jika font digunakan pada grafik on-screen televisi, judul film bioskop, atau iklan berbayar YouTube. Lisensi ini memiliki harga lebih tinggi karena paparan audiensnya mencapai jutaan pasang mata.",
      },
      {
        title: "6. Solusi Font Legal Bebas Royalti: Google Fonts & SIL OFL",
        content: "Gunakan font berlisensi 'SIL Open Font License' (OFL) atau Apache License yang tersedia di Google Fonts. Font ini 100% legal, gratis digunakan untuk proyek personal maupun proyek komersial komersial stasiun televisi tanpa perlu membayar sepeser pun.",
      },
      {
        title: "7. Mengenal Spektrum Lisensi Creative Commons (CC)",
        content: "Creative Commons menyediakan lisensi modular standar: (1) CC BY (Bebas digunakan komersial, wajib cantumkan kredit nama pencipta), (2) CC BY-SA (Wajib cantumkan nama & karya turunan harus berlisensi serupa), (3) CC BY-NC (Hanya untuk non-komersial/tidak boleh cari uang), (4) CC BY-ND (Tidak boleh diubah atau diedit).",
      },
      {
        title: "8. Puncak Kebebasan: Domain Publik & CC0 (Zero)",
        content: "Karya yang berada di Domain Publik (Public Domain) atau didedikasikan melalui lisensi CC0 adalah aset yang sepenuhnya bebas dari jeratan hukum hak cipta. Anda bebas mengedit, memodifikasi, menggabungkan, dan menjual karya tersebut tanpa perlu meminta izin dan tanpa wajib menulis kredit.",
      },
      {
        title: "9. Sumber Foto & Ilustrasi Stock Legal CC0",
        content: "Situs penyedia aset visual berkualitas tinggi berlisensi bebas komersial tanpa royalti: Unsplash (unsplash.com), Pexels (pexels.com), Pixabay, Freepik (perhatikan filter 'Free with attribution' vs 'Premium'), dan Wikimedia Commons untuk foto sejarah arsip publik.",
      },
      {
        title: "10. Batasan 'Fair Use' (Penggunaan Wajar) dalam Pendidikan",
        content: "Doktrin Fair Use memperbolehkan penggunaan sebagian kecil materi berhak cipta orang lain tanpa izin KHUSUS untuk keperluan: kritik ulasan film, parodi satir, pelaporan berita aktual, dan pembelajaran di dalam ruang kelas tertutup. Namun, jika video tersebut diunggah ke publik YouTube dan dimonetisasi, tameng Fair Use sering kali gugur.",
        caseStudy: "Siswa SMK boleh menggunakan potongan poster film berhak cipta saat presentasi di depan kelas, tetapi tidak boleh mengunggahnya sebagai materi promosi berbayar sekolah di Instagram.",
      },
      {
        title: "11. Perbedaan Plagiarisme, Replikasi, dan Inspirasi",
        content: "Inspirasi (Legal & Terpuji): Mempelajari konsep warna atau tata letak karya orang lain, lalu menciptakan karya baru yang orisinal dengan gaya sendiri. Plagiarisme (Ilegal & Hina): Menjiplak, menelusuri garis (tracing) gambar orang lain secara identik, lalu mengakuinya sebagai karya ciptaan sendiri.",
      },
      {
        title: "12. Hak Privasi Wajah: Model Release & Property Release",
        content: "Meskipun Anda memotret seseorang dengan kamera Anda sendiri, orang tersebut memiliki hak privasi atas wajahnya (Right of Publicity). Jika foto wajah orang tersebut digunakan untuk iklan komersial komersial, fotografer wajib memiliki dokumen 'Model Release' bertandatangan subjek bersangkutan.",
      },
      {
        title: "13. Hak Merek Dagang (Trademark) pada Desain Grafis",
        content: "Logo perusahaan (seperti centang Nike atau tiga garis Adidas) dilindungi oleh hukum Merek Dagang (Trademark - ™/®). Dilarang menyisipkan logo merek komersial orang lain ke dalam materi promosi sekolah tanpa izin kerja sama resmi karena dapat menimbulkan tuntutan pencemaran nama baik.",
      },
      {
        title: "14. Etika Rekayasa Gambar: Manipulasi Foto Berita vs Iklan",
        content: "Dalam desain iklan komersial, manipulasi digital (menghaluskan kulit, mempercerah warna langit) adalah hal wajar. Namun, dalam jurnalisme berita pertelevisian, dilarang keras merekayasa atau memanipulasi foto berita jurnalistik yang mengubah fakta kenyataan peristiwa (pelanggaran berat Kode Etik Jurnalistik).",
      },
      {
        title: "15. Tantangan Hukum Desain Generatif AI (Midjourney / Firefly)",
        content: "Gambar hasil ciptaan murni Artificial Intelligence (AI) saat ini tidak dapat didaftarkan hak ciptanya di banyak negara karena tidak ada campur tangan cipta manusia (Human Authorship). Adobe Firefly menawarkan jaminan 'Commercially Safe' karena AI-nya dilatih murni dari aset Adobe Stock berlisensi legal.",
        didYouKnow: "Kantor Hak Cipta Amerika Serikat (US Copyright Office) secara resmi menolak memberikan perlindungan hak cipta pada lukisan yang 100% digenerate oleh kecerdasan buatan AI."
      },
      {
        title: "16. Format Penulisan Kredit Atribusi yang Benar",
        content: "Formula baku penulisan kredit karya Creative Commons (TASL): Title (Judul karya) + Author (Nama pembuat & link) + Source (Sumber link web asli) + License (Jenis lisensi & link hukumnya). Contoh: 'Foto Candi Borobudur oleh Budi Santoso, via Wikimedia Commons, lisensi CC BY-SA 4.0'.",
      },
      {
        title: "17. Cara Mendaftarkan Hak Cipta Karya Siswa ke Kemenkumham",
        content: "Karya desain grafis, logo, atau buku karya siswa SMK dapat didaftarkan secara online melalui e-HakCipta DJKI (e-hakcipta.dgip.go.id). Surat Pencatatan Ciptaan resmi dari negara terbit dalam waktu 1 hari kerja, memberikan perlindungan hukum seumur hidup pencipta ditambah 70 tahun setelah wafat.",
      },
      {
        title: "18. Prosedur Menghadapi Somasi Klaim Hak Cipta (Cease & Desist)",
        content: "Jika menerima surat peringatan hukum (somasi) klaim hak cipta font/gambar: (1) Jangan panik dan jangan menghapus bukti percakapan, (2) Lakukan audit internal: teliti apakah aset tersebut benar digunakan kru tanpa lisensi, (3) Turunkan materi dari siaran/medsos seketika (takedown), (4) Lakukan negosiasi damai secara kekeluargaan bersama pihak kuasa hukum sekolah.",
      },
      {
        title: "19. Membangun Perpustakaan Aset Legal Sendiri (Asset Library)",
        content: "Studio profesional membangun gudang aset mandiri: melakukan sesi pemotretan foto stock internal di sekolah, membuat koleksi ikon orisinal karya siswa, dan mengunduh paket font Google Fonts yang telah diverifikasi ke dalam server lokal yang aman.",
      },
      {
        title: "20. POS Copyright Clearance Sebelum Rilis Publikasi",
        content: "Daftar periksa kepatuhan hukum sebelum rilis: (1) Apakah seluruh font yang digunakan berlisensi komersial bebas atau ber-EULA resmi?, (2) Apakah semua foto stock berasal dari Unsplash/Pexels berstatus CC0 atau foto jepretan sendiri?, (3) Apakah ada logo merek komersial pihak ketiga yang tidak berizin?, (4) Apakah ada surat Model Release untuk talent utama?",
      },
    ],
    video: {
      title: "Hukum Hak Cipta & Lisensi Aset Desain: Menghindari Somasi Font & Foto",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari cara membaca lisensi EULA font, memahami simbol Creative Commons, dan mencari foto stock bebas royalti.",
    },
    gamePairs: [
      { id: 1, left: "Lisensi CC0", right: "Karya domain publik yang dilepas bebas untuk komersial tanpa wajib atribusi" },
      { id: 2, left: "Personal Use Only", right: "Font yang hanya boleh digunakan untuk tugas pribadi, dilarang untuk tayangan siaran" },
      { id: 3, left: "EULA", right: "Surat kontrak hukum perjanjian lisensi pengguna akhir antara pencipta dan pembeli" },
      { id: 4, left: "Model Release", right: "Surat persetujuan tertulis dari orang yang wajahnya dipotret untuk keperluan komersial" },
      { id: 5, left: "Google Fonts", right: "Katalog ribuan font berlisensi SIL Open Font License yang bebas royalti komersial" },
    ],
    caseTitle: "Surat Somasi Denda 50 Juta Rupiah Akibat Penggunaan Font Bajakan",
    caseScenario:
      "Tim grafis ekstrakurikuler sekolah membuat desain logo dan spanduk festival seni tahunan menggunakan font yang diunduh dari situs blog internet ilegal berstatus 'Personal Use Only'. Spanduk dicetak besar di depan sekolah dan logo tersebut ditayangkan pada siaran langsung YouTube sekolah yang disponsori perusahaan swasta. Dua minggu kemudian, pihak sekolah menerima surat somasi dari firma hukum perwakilan pembuat font yang menuntut ganti rugi denda pelanggaran hak cipta sebesar Rp 50.000.000 atau perkara akan diproses pidana.",
    caseInstruction:
      "Evaluasi kelalaian etika dan hukum tim grafis dalam kasus tersebut. Rumuskan langkah-langkah mitigasi hukum yang harus ditempuh sekolah serta buat Standard Operating Procedure (SOP) verifikasi lisensi font sebelum proyek publikasi dimulai.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Apakah diperbolehkan secara hukum mengambil foto dari Google Images lalu menggunakannya sebagai materi baliho promosi pendaftaran siswa baru komersial sekolah tanpa izin fotografernya?",
        options: [
          { key: "A", text: "Boleh, karena semua yang ada di internet adalah milik umum" },
          { key: "B", text: "Tidak boleh, karena setiap gambar di Google Images dilindungi hak cipta pemilik aslinya dan penggunaannya tanpa izin resmi dapat dituntut pelanggaran hukum perdata dan pidana" },
          { key: "C", text: "Boleh asalkan resolusi gambarnya diubah menjadi hitam putih" },
          { key: "D", text: "Boleh asalkan nama file fotonya diganti" },
        ],
        correctKey: "B",
        explanation: "Google Images bukanlah pemilik lisensi; karya foto secara otomatis dilindungi undang-undang hak cipta sejak saat pertama kali diunggah oleh penciptanya.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Lisensi font open-source bebas royalti yang mengizinkan font digunakan secara gratis untuk proyek desain personal, cetak komersial, maupun penyiaran televisi tanpa biaya lisensi adalah...",
        options: [
          { key: "A", text: "SIL Open Font License (OFL)" },
          { key: "B", text: "Trial License" },
          { key: "C", text: "Demo Version Only" },
          { key: "D", text: "Commercial Single Seat Tier" },
        ],
        correctKey: "A",
        explanation: "SIL Open Font License (OFL) adalah lisensi font sumber terbuka yang paling banyak digunakan (seperti di Google Fonts) yang menjamin kebebasan penggunaan komersial bebas biaya.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Seorang desainer grafis menggunakan foto berlisensi 'Creative Commons Attribution-NonCommercial (CC BY-NC)' untuk mendesain poster promosi konser musik sekolah yang menjual tiket masuk berbayar kepada umum. Tindakan tersebut dinyatakan...",
        options: [
          { key: "A", text: "Sepenuhnya legal dan benar" },
          { key: "B", text: "Pelanggaran lisensi, karena klausul 'NC' (Non-Commercial) secara tegas melarang penggunaan karya untuk kegiatan apa pun yang memungut biaya atau menghasilkan keuntungan finansial" },
          { key: "C", text: "Legal asalkan nama pencipta ditulis dengan huruf sangat kecil" },
          { key: "D", text: "Hanya melanggar etika tetapi tidak melanggar hukum" },
        ],
        correctKey: "B",
        explanation: "Klausul Non-Commercial (NC) mengikat secara hukum bahwa karya hanya boleh dimanfaatkan untuk kegiatan non-profit tanpa aliran transaksi uang komersial.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Mengapa sebuah agensi penyiaran televisi profesional mewajibkan pengarsipan berkas 'Purchase Receipt' dan teks 'EULA' dari setiap font dan aset stock yang dibeli ke dalam folder proyek klien?",
        options: [
          { key: "A", text: "Sebagai dokumen bukti audit legalitas (Copyright Clearance) jika di kemudian hari stasiun TV atau klien menerima somasi klaim hak cipta dari pihak ketiga" },
          { key: "B", text: "Untuk memenuhi kapasitas ruang simpan harddisk" },
          { key: "C", text: "Agar desainer grafis dapat meminta kenaikan gaji" },
          { key: "D", text: "Sebagai syarat pencairan dana bantuan pemerintah" },
        ],
        correctKey: "A",
        explanation: "Bukti pembelian lisensi resmi (invoice & EULA) adalah payung hukum perlindungan mutlak bagi rumah produksi untuk membuktikan di pengadilan bahwa seluruh aset digunakan secara sah.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah Standard Operating Procedure (SOP) 'Copyright Clearance Checklist' yang wajib ditandatangani oleh Art Director sebelum sebuah materi grafis diunggah ke siaran resmi stasiun televisi!",
        options: [
          { key: "A", text: "Mengunggah gambar tanpa pemeriksaan lisensi" },
          { key: "B", text: "SOP 4 Langkah: (1) Audit Font: Pastikan berlisensi SIL OFL Google Fonts atau memiliki lisensi Broadcast komersial; (2) Audit Foto: Wajib foto karya sendiri atau dari Unsplash/Pexels berlisensi CC0/bebas royalti komersial; (3) Audit Model: Pastikan ada Model Release bertandatangan subjek foto; (4) Simpan seluruh sertifikat lisensi PDF ke folder 00_LEGAL_CLEARANCE" },
          { key: "C", text: "Menghapus nama pembuat foto asli dari internet" },
          { key: "D", text: "Mengganti nama font bajakan menjadi nama sendiri" },
        ],
        correctKey: "B",
        explanation: "SOP profesional ini mencakup verifikasi kepatuhan menyeluruh terhadap jenis lisensi font, keabsahan foto stock komersial, perlindungan hak privasi subjek manusia, dan pengarsipan bukti hukum.",
      },
    ],
    lkpd: {
      title: "LKPD P2-K5: Audit Legalitas Hak Cipta Aset Grafis & Penyusunan Berkas Lisensi",
      objective: "Peserta didik mampu melakukan audit kepatuhan lisensi font dan aset foto (Copyright Clearance) serta menyusun berkas legalitas penggunaan aset grafis komersial.",
      tools: ["Komputer Lab dengan Akses Internet", "Folder Proyek Desain Grafis Sebelumnya", "Template Dokumen Copyright Clearance Form"],
      steps: [
        "Pilih salah satu file desain poster atau grafis lower-third yang pernah Anda buat pada tugas sebelumnya.",
        "Lakukan Audit Font: Buka situs tempat Anda mengunduh font tersebut. Cari file teks lisensi (EULA / license.txt). Periksa apakah bertuliskan 'Free for Personal Use' atau 'Open Font License'.",
        "Jika font berlisensi personal, gantilah font tersebut seketika dengan alternatif font serupa dari Google Fonts yang berlisensi 'SIL Open Font License'.",
        "Lakukan Audit Foto: Lacak sumber foto latar belakang yang digunakan. Pastikan berasal dari Unsplash/Pexels berlisensi bebas komersial atau dokumentasi pribadi.",
        "Jika menggunakan aset berlisensi Creative Commons (CC BY), tuliskan teks atribusi resmi menggunakan formula TASL (Title, Author, Source, License).",
        "Buat dokumen rekapitulasi 'Copyright Clearance Report' dalam format PDF yang memuat screenshot bukti lisensi dari setiap aset.",
      ],
      outputFormat: "Laporan Audit Kepatuhan Hak Cipta (Copyright Clearance Report) format PDF lengkap dengan tautan sumber lisensi.",
    },
    journalQuestions: {
      q1: "Mengapa penghargaan terhadap hak cipta orang lain mencerminkan integritas moral dan profesionalisme Anda sebagai seorang calon desainer grafis?",
      q2: "Bagaimana perasaan Anda jika logo atau ilustrasi karya Anda dicuri orang lain dan digunakan untuk bisnis tanpa izin dan tanpa menyebut nama Anda?",
      q3: "Komitmen apa yang akan Anda pegang teguh saat memilih font dan foto untuk proyek-proyek siaran sekolah di masa depan?",
    },
    kktpIndicators: [
      "Mampu mengidentifikasi status lisensi font (EULA Personal vs Commercial) dan lisensi foto Creative Commons.",
      "Mampu menyusun format atribusi kredit hak cipta resmi sesuai kaidah hukum yang berlaku.",
      "Mampu merancang prosedur Copyright Clearance untuk memitigasi risiko hukum pelanggaran hak cipta.",
    ],
  },

  // =========================================================================
  // KONTEN 6: p2-k6 - Pengaturan Ekspor Cetak & Portofolio Karya
  // =========================================================================
  {
    id: "p2-k6",
    order: 6,
    title: "Pengaturan ekspor/cetak dan karya siap pakai",
    shortTitle: "Ekspor/Cetak & Karya Siap Pakai",
    summary:
      "Finalisasi karya desain siap guna: manajemen color profile pra-cetak (CMYK 300 DPI vs RGB 72-150 DPI), pengaturan bleed margin dan crop marks di CorelDraw, ekspor multi-format (PDF Print, SVG vektor, PNG transparan, JPG web), serta teknik presentasi dan kurasi portofolio desain visual.",
    kompetensi: [
      "Mengatur",
      "Menghasilkan",
      "Mempresentasikan",
    ],
    tujuanPembelajaran: [
      "Peserta didik mampu mengatur ekspor/cetak sesuai kebutuhan media.",
      "Peserta didik mampu menghasilkan karya desain yang siap digunakan.",
      "Peserta didik mampu mempresentasikan karya desain dan merefleksikan prosesnya.",
    ],
    subMenus: DEFAULT_ELEMEN_SUBMENUS,
    hookQuestion:
      "Jika Anda mencetak 1000 lembar brosur acara sekolah, lalu setelah dipotong pisau mesin percetakan, pinggiran seluruh brosur tampak memiliki garis putih tipis compang-camping dan sebagian teks terpotong hilang, kesalahan teknis apa yang lupa Anda tambahkan saat mendesain kanvas?",
    hookContext:
      "Mesin potong kertas industri (Guillotine cutter) memiliki toleransi getaran pergeseran mekanis 1-2 mm. Tanpa menambahkan area lebihan warna di luar batas kertas yang disebut 'Bleed Area' (minimal 3 mm), pergeseran pisau akan menyisakan kertas putih asli yang merusak keindahan karya.",
    pretestQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Area lebihan warna latar belakang di luar garis tepi batas potong kertas (biasanya berjarak 3 mm hingga 5 mm) yang berfungsi mencegah timbulnya garis putih saat pisau percetakan bergeser disebut...",
        options: [
          { key: "A", text: "Bleed Area (Area Bleed)" },
          { key: "B", text: "Slug Area" },
          { key: "C", text: "Gutter Column" },
          { key: "D", text: "Baseline" },
        ],
        correctKey: "A",
        explanation: "Bleed Area adalah margin toleransi potong di luar ukuran kertas asli (minimal 3 mm) yang wajib diwarnai penuh agar hasil potongan pisau mesin cetak bersih rapi tanpa garis putih.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Tindakan wajib pada software desain vektor yang mengubah seluruh huruf teks ketikan menjadi bentuk kurva bidang poligon permanen agar file tidak mengalami 'Missing Fonts' saat dibuka di komputer percetakan adalah...",
        options: [
          { key: "A", text: "Create Outlines (Convert to Curves / Ctrl+Shift+O)" },
          { key: "B", text: "Group Objects" },
          { key: "C", text: "Lock Layers" },
          { key: "D", text: "Hide Elements" },
        ],
        correctKey: "A",
        explanation: "Create Outlines (Ctrl+Shift+O di Illustrator / Ctrl+Q di Corel) mengunci font menjadi gambar vektor permanen, sehingga komputer percetakan tidak perlu menginstal font tersebut.",
      },
    ],
    materialCards: [
      {
        title: "1. Garis Akhir Desain Grafis: Dari Layar ke Dunia Nyata",
        content: "Desain grafis tidak berhenti di layar monitor. Kemenangan sejati seorang desainer adalah ketika karyanya berhasil diproduksi secara sempurna: baik saat dicetak di atas kertas majalah mengkilap, dibentangkan di baliho jalan raya, maupun ditayangkan di layar kaca jutaan pemirsa.",
        caseStudy: "Kesalahan teknis pra-cetak (pre-press) pada cetak 50.000 kalender sekolah dapat mengakibatkan kerugian finansial puluhan juta rupiah dan pemborosan kertas yang merusak lingkungan.",
      },
      {
        title: "2. Masalah Utama Percetakan: Pisau Mesin Potong Bergetar",
        content: "Mesin potong kertas percetakan memotong tumpukan ratusan lembar kertas sekaligus. Tekanan pisau hidrolik dapat menyebabkan pergeseran kertas sebesar 1 hingga 2 milimeter. Untuk mengatasi hal ini, industri menetapkan aturan wajib: Bleed Area dan Safe Margin.",
        didYouKnow: "Mesin pemotong kertas percetakan modern bekerja dengan tekanan hidrolik hingga beberapa ton dan mampu memotong 1000 lembar kertas dalam satu ayunan pisau baja."
      },
      {
        title: "3. Konfigurasi Standar Bleed: Tambahan 3 Milimeter",
        content: "Saat membuat dokumen cetak di Illustrator/InDesign: tambahkan Bleed sebesar 3 mm di setiap sisi (Atas, Bawah, Kiri, Kanan). Tarik warna latar belakang dan foto menembus garis merah bleed tersebut. Hasil cetak akan dipotong pada garis batas asli (Trim Line), menjamin warna penuh hingga ke tepian kertas.",
      },
      {
        title: "4. Batas Teks Aman: Safety Margin (Inner Margin)",
        content: "Jangan menaruh teks, logo, atau nomor halaman terlalu mepet ke garis potong! Berikan jarak aman minimal 4 mm hingga 5 mm ke arah dalam dari garis potong. Jika pisau potong meleset ke arah dalam, teks penting Anda tetap aman tidak akan terpotong.",
      },
      {
        title: "5. Mengunci Teks: Create Outlines (Ctrl + Shift + O)",
        content: "Komputer percetakan belum tentu memiliki koleksi font langka yang Anda gunakan. Jika file AI/PSD dibuka di percetakan tanpa font tersebut, software akan otomatis menggantinya dengan font default (seperti Arial) yang merusak seluruh tata letak. Wajib 'Create Outlines' sebelum mengirim file!",
      },
      {
        title: "6. Menyematkan Gambar Tautan: Embed Images",
        content: "Software vektor sering kali hanya membuat tautan link ke file foto di komputer Anda. Jika file foto tidak disematkan (Embedded), komputer percetakan akan menampilkan peringatan 'Missing Links' dan kotak foto akan menjadi kosong putih. Pilih foto -> klik tombol 'Embed'.",
      },
      {
        title: "7. Standar Format Cetak Internasional: PDF/X-1a & PDF/X-4",
        content: "Standar baku industri percetakan offset global: Format PDF/X-1a (ISO 15930-1) secara otomatis mengunci seluruh warna ke ruang CMYK, menolak ruang warna RGB, menyematkan seluruh font, dan mempertahankan resolusi gambar minimal 300 DPI bebas dari kesalahan kompresi.",
      },
      {
        title: "8. Tanda-Tanda Pra-Cetak: Crop Marks & Registration Marks",
        content: "Saat mengekspor PDF cetak: centang kotak 'Trim Marks' (garis penunjuk sudut tempat pisau memotong) dan 'Registration Marks' (tanda target silang melingkar untuk menyelaraskan ketepatan 4 pelat silinder warna Cyan, Magenta, Yellow, dan Black di mesin percetakan offset).",
      },
      {
        title: "9. Masalah Warna Hitam: K100 vs Rich Black (Hitam Pekat)",
        content: "Di percetakan kertas: Teks kecil wajib menggunakan 100% Black murni (C:0, M:0, Y:0, K:100) agar tidak buram akibat getaran register warna. Namun, untuk blok latar belakang hitam luas, K100 akan tampak abu-abu kusam; gunakan formula 'Rich Black' (C:60, M:40, Y:40, K:100) untuk menghasilkan warna hitam pekat yang mewah.",
      },
      {
        title: "10. Memeriksa Overprint & Separasi Warna (Separations Preview)",
        content: "Buka panel 'Separations Preview' di Illustrator/InDesign. Matikan satu per satu channel warna Cyan, Magenta, Yellow, dan Black untuk melihat bagaimana masing-masing pelat cetak tinta akan diaplikasikan di atas kertas fisik.",
      },
      {
        title: "11. Ekspor Multi-Format untuk Aset Digital",
        content: "Selain format cetak, siapkan aset digital terorganisir: Format SVG (vektor ringan untuk ikon website sekolah), PNG-24 Transparan (untuk video lower-third dan thumbnail medsos), dan JPEG kualitas 100% sRGB teroptimasi untuk postingan media sosial.",
      },
      {
        title: "12. Filosofi Portofolio Desain: Kurasi Kualitas di Atas Kuantitas",
        content: "Portofolio bukan tong sampah yang menampung seluruh tugas latihan yang pernah Anda buat. Pilih hanya 5 hingga 8 karya terbaik yang paling Anda banggakan. Lebih baik menampilkan 5 karya berkualitas masterpiece daripada 30 karya biasa yang menurunkan standar profesionalisme Anda.",
      },
      {
        title: "13. Struktur Penyajian Kasus Desain (Design Case Study)",
        content: "Klien industri tidak hanya ingin melihat gambar akhir yang cantik, mereka ingin memahami cara Anda berpikir (Design Thinking). Struktur studi kasus: (1) Profil Klien & Masalah Tantangan, (2) Riset & Peta Konsep Ide, (3) Sketsa Awal, (4) Eksekusi Desain Final, (5) Mockup Penerapan di Dunia Nyata, (6) Hasil Dampak Positif.",
      },
      {
        title: "14. Menghidupkan Desain Menggunakan Mockup Fotorealistik",
        content: "Jangan tampilkan desain logo Anda hanya di atas latar belakang putih polos. Terapkan ke dalam template Mockup PSD berteknologi Smart Object: tampilkan logo tercetak di atas kaos kru, terpampang di papan nama kantor kaca studio, atau tercetak pada kartu nama timbul bertekstur emas.",
        caseStudy: "Pemberian visualisasi mockup studio TV meningkatkan peluang proposal desain disetujui oleh kepala sekolah hingga 300% karena klien dapat langsung membayangkan wujud fisiknya.",
      },
      {
        title: "15. Platform Portofolio Desain Global: Behance & Dribbble",
        content: "Publikasikan portofolio Anda di etalase industri dunia: Behance (behance.net) milik Adobe adalah standar industri untuk memamerkan studi kasus branding dan grafis lengkap. Dribbble (dribbble.com) ideal untuk pamer cuplikan detail animasi mikro dan ilustrasi ikon.",
      },
      {
        title: "16. Portofolio Cetak / PDF Interaktif (Pitch Book)",
        content: "Untuk wawancara kerja tatap muka di stasiun televisi: siapkan berkas PDF portofolio horizontal (resolusi layar tablet 1920x1080) yang ringkas (10-15 halaman) memuat profil bio singkat, kontak WhatsApp/email aktif, dan link tautan aktif menuju akun Behance/LinkedIn Anda.",
      },
      {
        title: "17. Sikap & Teknik Presentasi Desain di Depan Klien (Pitching)",
        content: "Tips presentasi karya: Jelaskan ALASAN di balik setiap pilihan desain Anda. Jangan katakan 'Saya pakai warna biru karena saya suka biru', katakan 'Kami memilih warna biru safir karena selaras dengan nilai integritas penyiaran dan meningkatkan keterbacaan di layar siaran'. Klien membayar proses pemecahan masalah Anda.",
      },
      {
        title: "18. Standar Sertifikasi Kompetensi Desain Grafis (LSP / BNSP)",
        content: "Lulusan peminatan desain komunikasi visual SMK disiapkan untuk meraih Sertifikat Kompetensi Kerja Nasional (SKKNI) skema 'Desainer Grafis Muda' atau 'Junior Graphic Designer' dari Badan Nasional Sertifikasi Profesi (BNSP), membuktikan kemahiran penguasaan software dan etika pra-cetak.",
      },
      {
        title: "19. POS Pengarsipan Proyek Desain (Project Archiving SOP)",
        content: "Sebelum menutup proyek: Gunakan fitur 'Package' di Illustrator atau InDesign (File -> Package). Software akan secara otomatis mengumpulkan file master .AI, seluruh file tautan foto resolusi tinggi, dan file font yang digunakan ke dalam satu folder rapi berlabel tanggal siap diarsipkan.",
      },
      {
        title: "20. Refleksi: Menjadi Desainer Grafis yang Berdampak dan Berkarakter",
        content: "Keterampilan grafis adalah kekuatan super untuk mempengaruhi persepsi manusia. Gunakan keahlian visual Anda untuk menyuarakan kebenaran informasi, mengedukasi masyarakat, memajukan budaya bangsa, dan menjunjung tinggi kejujuran etika berkarya.",
      },
    ],
    video: {
      title: "Masterclass Pre-Press & Portofolio Desain: Bleed, Create Outlines, & Behance",
      embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      guide: "Pelajari cara menyetel Bleed 3mm, mengekspor PDF/X-1a siap cetak, dan membuat studi kasus portofolio di Behance.",
    },
    gamePairs: [
      { id: 1, left: "Bleed Area 3mm", right: "Area lebihan warna di luar garis potong untuk mencegah garis putih mesin potong" },
      { id: 2, left: "Create Outlines", right: "Mengunci teks menjadi bentuk vektor permanen agar tidak missing font di percetakan" },
      { id: 3, left: "PDF/X-1a", right: "Standar format ekspor file internasional siap cetak offset dengan ruang warna CMYK" },
      { id: 4, left: "Mockup Fotorealistik", right: "Template presentasi desain yang disimulasikan pada media fisik nyata (kaos, papan nama)" },
      { id: 5, left: "Rich Black", right: "Formula hitam pekat cetak (C:60, M:40, Y:40, K:100) untuk blok latar belakang luas" },
    ],
    caseTitle: "Tragedi 500 Lembar Brosur Sekolah Rusak: Teks Terpotong dan Font Berubah",
    caseScenario:
      "Panitia pendaftaran siswa baru SMK mencetak 500 lembar brosur lipat tiga di percetakan luar. Desainer grafis mengirimkan file mentah berformat .AI tanpa Bleed, teks tidak di-Create Outlines, dan gambar foto tidak di-embed. Hasil cetakan berakhir bencana: font judul sekolah yang indah berubah otomatis menjadi font kaku Times New Roman, foto di halaman dalam hilang putih, dan nomor kontak pendaftaran terpotong separuh oleh pisau potong percetakan.",
    caseInstruction:
      "Analisis 3 kelalaian fatal pra-cetak (pre-press) dalam kasus tersebut. Rumuskan Prosedur Operasional Standar (POS) penyiapan file cetak profesional (Bleed, Outlines, Embed, Export PDF/X-1a) yang wajib dieksekusi sebelum file diserahkan ke vendor percetakan.",
    sampleQuestions: [
      {
        id: 1,
        bloom: "C2",
        stem: "Tindakan apa yang harus dilakukan oleh seorang desainer grafis terhadap seluruh elemen teks naskah sebelum mengirimkan file vektor ke vendor percetakan agar tidak terjadi error font hilang (Missing Fonts)?",
        options: [
          { key: "A", text: "Menghapus seluruh teks naskah" },
          { key: "B", text: "Melakukan Create Outlines (Convert to Curves / Ctrl+Shift+O) untuk mengunci huruf menjadi bentuk kurva vektor permanen" },
          { key: "C", text: "Mengganti seluruh huruf menjadi warna merah" },
          { key: "D", text: "Mengubah ukuran teks menjadi 1000pt" },
        ],
        correctKey: "B",
        explanation: "Create Outlines mengonversi teks tipografi dinamis menjadi kurva vektor statis, sehingga file dapat dibuka dengan sempurna di komputer percetakan mana pun tanpa butuh file font aslinya.",
      },
      {
        id: 2,
        bloom: "C3",
        stem: "Berapa ukuran standar toleransi lebihan area warna (Bleed Area) yang wajib ditambahkan di luar garis batas potong kanvas pada dokumen desain cetak profesional?",
        options: [
          { key: "A", text: "Minimal 3 milimeter (atau 1/8 inci) di setiap sisi" },
          { key: "B", text: "1 meter di setiap sisi" },
          { key: "C", text: "0 milimeter (tanpa lebihan)" },
          { key: "D", text: "50 sentimeter" },
        ],
        correctKey: "A",
        explanation: "Standar industri percetakan menetapkan toleransi bleed minimal 3 mm (atau 0.125 inci) di sekeliling dokumen untuk mengakomodasi pergeseran mekanis pisau mesin potong.",
      },
      {
        id: 3,
        bloom: "C4",
        stem: "Ketika mencetak blok latar belakang berwarna hitam pekat di atas kertas majalah yang luas, mengapa menggunakan tinta K murni 100% (C:0, M:0, Y:0, K:100) sering menghasilkan warna yang tampak abu-abu kusam dan tidak mewah?",
        options: [
          { key: "A", text: "Karena kertas percetakan menolak warna hitam" },
          { key: "B", text: "Karena tinta hitam tunggal (K100) menyerap sedikit cahaya; untuk menghasilkan warna hitam pekat berbobot (Rich Black), tinta K100 wajib didukung oleh lapisan tinta Cyan, Magenta, dan Yellow di bawahnya (misal C:60 M:40 Y:40 K:100)" },
          { key: "C", text: "Karena mesin percetakan kehabisan tinta hitam" },
          { key: "D", text: "Hanya karena salah melihat di ruangan gelap" },
        ],
        correctKey: "B",
        explanation: "K100 tunggal tampak transparan abu-abu pada permukaan luas. Rich Black (penambahan tinta C, M, Y di bawah K100) menciptakan saturasi kepadatan optik pigmen tinta yang sangat pekat dan mewah.",
      },
      {
        id: 4,
        bloom: "C5",
        stem: "Bandingkan penyajian portofolio desain yang hanya menampilkan gambar datar 2D di atas latar putih polos dengan portofolio yang menampilkan desain di dalam template 'Mockup Fotorealistik'! Mengapa format Mockup jauh lebih memikat bagi calon klien?",
        options: [
          { key: "A", text: "Karena Mockup dibuat menggunakan kamera bioskop" },
          { key: "B", text: "Karena Mockup menyimulasikan penerapan wujud fisik produk di dunia nyata (seperti logo yang tercetak timbul di kartu nama bertekstur atau terpampang di seragam kerja), membantu klien memvisualisasikan nilai guna dan estetika produk secara konkret" },
          { key: "C", text: "Karena format Mockup tidak membutuhkan keahlian desain sama sekali" },
          { key: "D", text: "Mockup hanya disukai oleh anak kecil" },
        ],
        correctKey: "B",
        explanation: "Mockup menjembatani imajinasi abstrak desain 2D ke dalam konteks aplikasi fisik dunia nyata, meningkatkan nilai komersial dan daya tarik persuasif di mata calon pemberi kerja.",
      },
      {
        id: 5,
        bloom: "C6",
        stem: "Rancanglah alur penyusunan studi kasus desain (Case Study) untuk portofolio digital di Behance yang memamerkan proyek pembuatan identitas merek (Branding) stasiun TV sekolah!",
        options: [
          { key: "A", text: "Hanya mengunggah 1 file gambar logo kecil tanpa tulisan penjelasan apa pun" },
          { key: "B", text: "Sistematika Studi Kasus 6 Bagian: (1) Header Banner sinematik logo TV; (2) Narasi Tantangan & Visi Merek; (3) Sketsa Geometri & Filosofi Logo; (4) Sistem Warna & Tipografi resmi; (5) Mockup Aplikasi Nyata (Logo Bug di layar TV, Mikrofon Flag, Seragam Kru, ID Card); (6) Ucapan penutup apresiasi dan kredit tim desainer" },
          { key: "C", text: "Mengunggah seluruh screenshot percakapan WhatsApp saat mengerjakan tugas" },
          { key: "D", text: "Menyalin portofolio desainer lain dari luar negeri" },
        ],
        correctKey: "B",
        explanation: "Struktur studi kasus Behance profesional ini menyajikan narasi lengkap proses berpikir kreatif (Design Thinking), kedalaman riset konsep, konsistensi sistem identitas, dan visualisasi penerapan di dunia penyiaran nyata.",
      },
    ],
    lkpd: {
      title: "LKPD P2-K6: Penyiapan File Pre-Press Siap Cetak (Bleed 3mm) & Penyusunan Mockup Portofolio",
      objective: "Peserta didik mampu mengkonfigurasi dokumen cetak ber-bleed 3mm, melakukan Create Outlines dan Embed Images, mengekspor PDF/X siap cetak, serta mengemas karya ke dalam template mockup portofolio.",
      tools: ["Komputer Lab dengan Adobe Illustrator & Photoshop", "Desain Poster / Logo yang Sudah Selesai", "File Template Mockup PSD Fotorealistik"],
      steps: [
        "Buka file master poster di Adobe Illustrator.",
        "Buka File -> Document Setup: Atur Bleed = 3 mm di keempat sisinya. Tarik warna latar belakang melewati garis merah batas bleed.",
        "Pastikan seluruh teks telah di-Create Outlines (Select All -> Ctrl + Shift + O).",
        "Buka panel Links: pastikan seluruh gambar foto berstatus 'Embedded' (tidak ada ikon rantai putus).",
        "Ekspor file cetak: File -> Save As -> Adobe PDF. Pilih preset 'PDF/X-1a:2001'. Di tab 'Marks and Bleeds', centang 'Trim Marks' dan 'Use Document Bleed Settings'.",
        "Buka file template Mockup PSD di Adobe Photoshop (misal mockup poster di dinding galeri seni).",
        "Klik dua kali pada thumbnail Smart Object, tempelkan file desain Anda, simpan (Ctrl+S), dan amati penerapan mockup fotorealistik yang terbentuk.",
        "Kompilasi gambar mockup tersebut ke dalam satu berkas PDF portofolio profesional.",
      ],
      outputFormat: "File PDF/X-1a siap cetak ber-bleed lengkap dan 1 file gambar presentasi Mockup portofolio resolusi tinggi.",
    },
    journalQuestions: {
      q1: "Mengapa pemahaman tentang persiapan pra-cetak (pre-press) adalah benteng terakhir yang membedakan desainer profesional dari desainer amatir?",
      q2: "Bagaimana cara Anda menumbuhkan rasa percaya diri saat mempresentasikan ide desain di hadapan orang lain yang belum Anda kenal?",
      q3: "Refleksi apa yang Anda rasakan mengenai perkembangan keterampilan visual Anda dari awal kelas X hingga mampu menghasilkan portofolio karya yang membanggakan?",
    },
    kktpIndicators: [
      "Mampu mengonfigurasi pengaturan pra-cetak (Bleed 3mm, Safety Margin, Create Outlines, Embed Links) secara tepat.",
      "Mampu mengekspor berkas master cetak standar industri internasional (PDF/X-1a CMYK 300 DPI).",
      "Mampu menyusun portofolio studi kasus desain grafis profesional dengan visualisasi mockup fotorealistik.",
    ],
  },
];
