import type { ElemenContentItem } from "./curriculum-types";

export const F4_CONTENTS: ElemenContentItem[] = [
      // =========================================================================
      // KONTEN 1: Prosedur tahapan produksi departemen kamera dan tata cahaya
      // =========================================================================
      {
        id: "f4-k1",
        order: 1,
        title: "1. Prosedur tahapan produksi departemen kamera dan tata cahaya",
        shortTitle: "Prosedur Produksi",
        summary: "Pemahaman alur kerja pra-produksi, produksi siaran langsung, pasca-produksi, serta pembagian tugas dan tanggung jawab profesional kru kamera dan tata cahaya.",
        kompetensi: ["1. Memahami", "2. Menjelaskan"],
        tujuanPembelajaran: [
          "Peserta didik mampu memahami prosedur tahapan produksi departemen kamera dan tata cahaya.",
          "Peserta didik mampu menjelaskan tugas dan tanggung jawab kru kamera dan tata cahaya.",
        ],
        hookQuestion: "Sebelum sutradara berseru 'Action!' pada siaran langsung (live broadcast), apa saja persiapan kritis yang wajib dikoordinasikan antara penata kamera (DoP/Cam Operator) dan penata cahaya (Gaffer) di studio?",
        hookContext: "Di industri pertelevisian, ketidaksesuaian koordinasi 1 detik saja antara juru kamera atau penata cahaya saat siaran langsung dapat berakibat fatal pada kualitas visual jutaan penonton.",
        pretestQuestions: [
          {
            id: 101,
            bloom: "C2",
            stem: "Tahap penyusunan rundown, floor plan, dan lighting plot dalam produksi televisi dilakukan pada fase...",
            options: [
              { key: "A", text: "Pasca-produksi" },
              { key: "B", text: "Pra-produksi" },
              { key: "C", text: "Produksi live" },
              { key: "D", text: "Evaluasi siaran" },
            ],
            correctKey: "B",
            explanation: "Pra-produksi adalah tahapan perencanaan teknis menyeluruh sebelum kamera dan lampu dinyalakan di studio.",
          },
          {
            id: 102,
            bloom: "C2",
            stem: "Kru yang memimpin dan bertanggung jawab penuh atas instalasi teknis tata cahaya, kabel daya, dan operasional dimmer di studio adalah...",
            options: [
              { key: "A", text: "Floor Director (FD)" },
              { key: "B", text: "Gaffer / Lighting Director" },
              { key: "C", text: "Audioman" },
              { key: "D", text: "Switcherman" },
            ],
            correctKey: "B",
            explanation: "Gaffer adalah kepala departemen pencahayaan yang merealisasikan konsep artistik cahaya dari DoP atau Sutradara.",
          },
          {
            id: 103,
            bloom: "C2",
            stem: "Dokumen yang memuat rincian penempatan sudut kamera, jenis shot, dan pembagian tugas per adegan selama siaran langsung disebut...",
            options: [
              { key: "A", text: "Camera Card / Shot List" },
              { key: "B", text: "Surat Izin Siar" },
              { key: "C", text: "Slip Gaji Kru" },
              { key: "D", text: "Invoice Sewa Alat" },
            ],
            correctKey: "A",
            explanation: "Camera card/shot list memandu juru kamera mengetahui giliran on-air dan framing apa yang harus disiapkan.",
          },
        ],
        materialCards: [
          {
            title: "1. Urgensi & Filosofi Sinergi Departemen Kamera dan Tata Cahaya",
            content: "Dalam industri televisi dan perfilman, kamera dan tata cahaya adalah dua elemen simbiotik yang tidak dapat dipisahkan. Kamera bertindak sebagai 'mata teknis' yang menangkap foton cahaya, sedangkan tata cahaya adalah 'pembentuk atmosfer dan dimensi'. Sinergi keduanya menentukan apakah tayangan terlihat datar (flat) atau memiliki kedalaman visual sinematik berkualitas siar (broadcast-grade).",
            didYouKnow: "Di stasiun televisi nasional, ketidakcocokan kalibrasi warna kamera atau tata cahaya sebesar 5% saja dapat memicu penolakan master kaset siar oleh divisi Quality Control (QC).",
          },
          {
            title: "2. Peta Alur Kerja Produksi Siaran Televisi (Pra, On-Air, Pasca)",
            content: "Alur kerja produksi televisi terbagi menjadi tiga tahapan terstruktur: Pra-Produksi (bedah naskah, floor plan, lighting plot, technical meeting, dan setup alat), Produksi (gladi bersih/rehearsal, recording/live broadcast on-air, blocking kamera, dan live switching), serta Pasca-Produksi (evaluasi pasca siar, de-rigging alat, log sheet pencatatan rekaman, dan safety debriefing).",
          },
          {
            title: "3. Standar Kompetensi Kerja Nasional Indonesia (SKKNI) BCF",
            content: "Berdasarkan SKKNI Kategori Aktivitas Produksi Film, Video, dan Program Televisi, seorang praktisi kamera dan cahaya wajib menguasai unit kompetensi: menerapkan prosedur K3, menyiapkan peralatan kamera/cahaya, mengoperasikan peralatan secara aman, mengontrol kualitas visual, serta memelihara peralatan setelah penggunaan.",
            caseStudy: "Uji sertifikasi BNSP bidang Audio-Visual menguji kemampuan peserta mendeteksi kerusakan kabel daya lampu dan mengalibrasi white balance kamera dalam waktu kurang dari 5 menit.",
          },
          {
            title: "4. Struktur Hierarki & Pembagian Tugas Kru Departemen Kamera",
            content: "Departemen kamera dipimpin oleh Director of Photography (DoP) atau Lighting Director (LD). Di bawahnya terdapat Camera Operator (Cam 1 Master, Cam 2 Host, Cam 3 Guest), Focus Puller (1st AC) yang menjaga ketajaman fokus subjek bergerak, 2nd AC / Clapper Loader (mencatat scene & take), serta Camera Utility / Cable Puller yang mengamankan kabel pedestal di lantai.",
          },
          {
            title: "5. Struktur Hierarki & Pembagian Tugas Kru Departemen Tata Cahaya",
            content: "Departemen tata cahaya (G&E - Grip and Electric) dipimpin oleh Gaffer (kepala teknisi pencahayaan). Dibantu oleh Best Boy Electric (manajer logistik kabel, daya, dan persewaan alat), Electrician/Sparks (kru pemasang lampu dan penyetel dimmer), Key Grip (kepala rigging fisik dudukan lampu dan kamera), serta Dolly Grip (pengoperasi pergerakan dolly/pedestal).",
            didYouKnow: "Istilah 'Gaffer' berasal dari era teater abad pertengahan di Inggris dari kata 'Gaff' yaitu tongkat panjang berkait untuk menyetel lentera gantung di langit-langit panggung.",
          },
          {
            title: "6. Dokumen Kerja Pra-Produksi 1: Script Breakdown & Storyboard",
            content: "Sebelum lampu dinyalakan, DoP dan Sutradara melakukan Script Breakdown untuk mengidentifikasi kebutuhan visual setiap adegan: waktu (day/night), mood dramatik (ceria, tegang, romantis), dan perpindahan shot. Storyboard memvisualisasikan ukuran shot (framing) dan arah pergerakan kamera agar kru memiliki acuan konkret sebelum memasuki studio.",
          },
          {
            title: "7. Dokumen Kerja Pra-Produksi 2: Floor Plan Studio & Camera Placement",
            content: "Floor plan adalah denah 2 dimensi studio tampak atas dengan skala proporsional. Dokumen ini menentukan posisi panggung set dekorasi, jalur aman kru dan kabel, serta formasi sudut kamera: Kamera 1 (Wide/Master Shot tengah), Kamera 2 (Close-up Pembawa Acara), dan Kamera 3 (Close-up Tamu/Narasumber).",
          },
          {
            title: "8. Dokumen Kerja Pra-Produksi 3: Lighting Plot & Dimmer Patch Sheet",
            content: "Lighting Plot adalah denah tata letak lampu pada kisi-kisi gantungan plafon studio (lighting grid). Setiap lampu diberi nomor ID, jenis instrumen (Fresnel, LED, Profile), daya watt, aksesoris (barn doors/scrim), serta nomor channel dimmer DMX agar operator konsol lampu dapat mengendalikannya dari ruang kontrol.",
            caseStudy: "Penyusunan lighting plot yang akurat memangkas waktu persiapan studio dari 4 jam menjadi hanya 45 menit saat pergantian program acara.",
          },
          {
            title: "9. Parameter Teknis Pra-On Air: Camera Line-up & Sensor Shading",
            content: "30 menit sebelum siaran dimulai, Video Engineer dan Penata Kamera melakukan 'Line-up' seluruh kamera studio: kalibrasi genlock/sync sinyal video, penyamaan temperatur warna sensor (white balance 3200K/5600K), serta penyetelan Black Level (pedestal) di Camera Control Unit (CCU) agar warna kulit antar kamera 1, 2, dan 3 identik.",
          },
          {
            title: "10. SOP Tahap Pra-Produksi: Rig-up Peralatan & Safety Inspection",
            content: "Prosedur instalasi (rig-up) wajib mematuhi kaidah K3: memeriksa kondisi fisik kabel SDI/XLR, mengunci mur pengencang C-clamp lampu pada grid, memastikan level gelembung (bubble level) tripod rata air, serta memasang sandbag pemberat minimal 10 kg pada setiap kaki stand lampu mandiri.",
          },
          {
            title: "11. POS / SOP On-Air: Protokol Komunikasi Intercom Studio",
            content: "Selama siaran berlangsung, koordinasi studio dilakukan melalui sistem Intercom berkabel tertutup. Komando dipimpin Sutradara/Program Director (PD) didampingi Floor Director (FD). Pola komando baku: Peringatan Standby ('Standby Cam 1...'), aba-aba eksekusi ('Take Cam 1!'), dan komando pergerakan re-framing kamera yang sedang off-air.",
            didYouKnow: "Kamera yang sedang aktif tayang on-air DILARANG melakukan gerakan mendadak atau zooming kasar kecuali memang diinstruksikan secara khusus oleh sutradara.",
          },
          {
            title: "12. Protokol Tally Light & Isyarat Tangan (Hand Cues) Studio",
            content: "Lampu Tally merah menyala otomatis di depan kamera studio saat feed kamera tersebut dipilih switcher untuk siaran on-air. Bersamaan dengan itu, Floor Director (FD) memberikan isyarat tangan universal kepada host: tanda standby (tangan terangkat), hitung mundur 5-4-3-2-1, isyarat mempercepat (memutar telunjuk), atau isyarat jeda iklan (membentuk huruf T).",
          },
          {
            title: "13. SOP Manajemen Kabel Studio: Teknik Coiling 'Over-Under'",
            content: "Kabel kamera broadcast (triax/fiber optic) dan kabel audio-lighting wajib digulung menggunakan teknik 'Over-Under' (satu putaran searah jarum jam, satu putaran berlawanan). Teknik ini mencegah lilitan kawat tembaga di dalam kabel terpelintir, memperpanjang usia kabel, dan memungkinkan kabel diulur cepat tanpa kusut.",
          },
          {
            title: "14. Standar Keselamatan Listrik Studio (K3LH) & Beban Daya",
            content: "Studio siaran mengonsumsi daya listrik tinggi (hingga ratusan Ampere). SOP K3LH mewajibkan: penggunaan kotak distribusi daya ber-MCB (Miniature Circuit Breaker), pentanahan (grounding) grounding rod di bawah 5 Ohm, penutupan kabel lantai dengan cable bridge/protector tahan lindasan, dan larangan membebani satu stopkontak lebih dari 80% kapasitas nominal.",
          },
          {
            title: "15. Pro-Tips Praktisi: Mengatasi Refleksi Kacamata & Glare Meja",
            content: "Jika kacamata narasumber memantulkan cahaya softbox, naikkan posisi Key Light beberapa derajat lebih tinggi atau geser sudut lampu 10-15 derajat lebih menyamping. Untuk glare pada meja kaca/pernis, pasang filter polariser (CPL) pada lensa kamera atau tempelkan lapisan anti-glare matte pada permukaan meja.",
          },
          {
            title: "16. Komparasi Alur Kerja: Single Camera vs Multi Camera System",
            content: "Single Camera System (Film/Drama): Satu kamera membidik adegan berulang kali dari berbagai sudut (Master, Over-the-shoulder, Close-up) dengan penataan lampu yang dikustomisasi per-shot. Multi Camera System (Live TV Talkshow/Berita): 3 hingga 5 kamera merekam secara bersamaan dalam satu kali take, menuntut pencahayaan merata (continuous base lighting) ke segala penjuru panggung.",
          },
          {
            title: "17. Troubleshooting Cepat Lapangan: Penanganan Drop Sinyal SDI",
            content: "Jika monitor CCU mendadak menampilkan layar hitam (blackout) atau bintik sinyal digital (sparkles): 1. Periksa sambungan BNC kabel SDI di camera head dan patch panel. 2. Ganti ke kabel cadangan yang telah terpasang di jalur redundan. 3. Alihkan sementara siaran ke kamera lain dengan aba-aba intercom darurat.",
          },
          {
            title: "18. Studi Kasus Riil: Kamera Rusak 5 Menit Sebelum Prime Time",
            content: "Studi kasus: Kabel Kamera 1 (Master Presenter) tergilas pedestal hingga putus 5 menit sebelum siaran warta berita jam 19.00. Solusi SOP: Sutradara menginstruksikan Kamera 2 mengambil alih posisi Master Wide shot, sementara Kamera 3 melakukan cross shot presenter. Berita on-air tepat waktu tanpa jeda kekosongan gambar.",
            caseStudy: "Penerapan sistem redundansi kamera dan keluwesan re-blocking mencegah stasiun TV terkena denda penalti jutaan rupiah per detik dari klien sponsor iklan.",
          },
          {
            title: "19. Inovasi Masa Depan: Remote Production (REMI) & IP Broadcast",
            content: "Teknologi penyiaran modern beralih ke Remote Production (REMI) berbasis IP (SMPTE ST 2110 dan NDI). Kamera di lokasi stadion olahraga terhubung langsung melalui jaringan fiber optik internet ke ruang kendali siaran di ibu kota ribuan kilometer jauhnya, menghemat biaya mobilisasi OB-Van dan kru teknis.",
          },
          {
            title: "20. Rangkuman Kunci & Lembar Checklist Kesiapan Produksi",
            content: "Siklus departemen kamera dan tata cahaya berhasil jika mematuhi 4 pilar: 1. Perencanaan matang (Floor Plan & Lighting Plot). 2. Kalibrasi teknis presisi (Line-up, WB, CCU). 3. Disiplin komunikasi on-air (Intercom & Tally). 4. Budaya K3LH dan perawatan pasca-produksi (Over-Under coiling & dry box).",
            didYouKnow: "Kru penyiaran profesional selalu melakukan 'Safety Briefing' 15 menit sebelum masuk studio untuk memastikan nol kecelakaan kerja (Zero Accident).",
          },
        ],
        video: {
          title: "SOP dan Prosedur Alur Kerja Kru Kamera & Tata Cahaya Studio TV Profesional",
          embedUrl: "https://www.youtube.com/embed/gI8J5n-Yj88",
          guide: "Amati alur komunikasi intercom antara sutradara, switcher, kameramen, dan gaffer saat hitung mundur siaran berlangsung.",
        },
        gamePairs: [
          { id: 1, left: "Director of Photography (DoP)", right: "Perancang konsep estetika visual dan pengarah pencahayaan utama" },
          { id: 2, left: "Camera Operator", right: "Pengoperasi kamera studio/lapangan sesuai arahan shot list" },
          { id: 3, left: "Gaffer", right: "Kepala teknisi tata cahaya yang mengatur instalasi lampu dan dimmer" },
          { id: 4, left: "Safety Bond", right: "Kawat/rantai baja pengaman ekstra pada lampu grid studio gantung" },
        ],
        caseTitle: "Krisis Kabel Kamera Putus 5 Menit Sebelum Siaran Berita Utama (Prime Time)",
        caseScenario: "Lima menit menjelang hitung mundur siaran langsung berita pukul 19.00, monitor di control room mendadak kehilangan feed Kamera 2 (Kamera Utama Presenter). Setelah dicek cepat di studio, kabel SDI Kamera 2 terjepit roda pedestal dan putus.",
        caseInstruction: "Berdasarkan prosedur kerja dan pembagian tugas kru, langkah darurat apa yang harus segera diambil oleh kru kamera dan pengarah acara agar siaran tetap dapat on-air tepat waktu tanpa kekacauan visual?",
        sampleQuestions: [
          {
            id: 111,
            bloom: "C2",
            stem: "Lampu indikator merah di bagian atas kamera studio yang menyala saat gambar kamera tersebut sedang tayang on-air disebut...",
            options: [
              { key: "A", text: "Strobe Light" },
              { key: "B", text: "Tally Light" },
              { key: "C", text: "Flood Light" },
              { key: "D", text: "Dimmer Indicator" },
            ],
            correctKey: "B",
            explanation: "Tally Light memberi sinyal visual kepada pembawa acara dan juru kamera bahwa kamera tersebut aktif mengudara.",
          },
          {
            id: 112,
            bloom: "C3",
            stem: "Jika terjadi korsleting listrik pada salah satu lampu spot di kisi-kisi (grid) studio, langkah pertama kru lighting sesuai SOP K3LH adalah...",
            options: [
              { key: "A", text: "Menyiram lampu dengan air" },
              { key: "B", text: "Memutus aliran listrik melalui sakelar pemutus darurat (circuit breaker/MCB) dimmer" },
              { key: "C", text: "Menarik kabel lampu secara paksa saat masih menyala" },
              { key: "D", text: "Melanjutkan siaran hingga selesai segmen" },
            ],
            correctKey: "B",
            explanation: "Memutus sumber arus listrik utama melalui MCB adalah SOP paling krusial untuk mencegah kebakaran studio.",
          },
          {
            id: 113,
            bloom: "C4",
            stem: "Dalam struktur kru produksi, perbedaan mendasar peran antara Gaffer dan Grip adalah...",
            options: [
              { key: "A", text: "Gaffer mengurus suara, Grip mengurus video" },
              { key: "B", text: "Gaffer fokus pada instalasi kelistrikan & lampu, Grip fokus pada rigging & penopang fisik peralatan" },
              { key: "C", text: "Gaffer menulis naskah, Grip membaca teleprompter" },
              { key: "D", text: "Gaffer adalah sutradara, Grip adalah produser" },
            ],
            correctKey: "B",
            explanation: "Gaffer mengepalai tata cahaya/elektrikal, sedangkan Grip bertanggung jawab atas rigging penyangga mekanik dan support kamera/lampu.",
          },
          {
            id: 114,
            bloom: "C5",
            stem: "Sebuah program talkshow studio membutuhkan 3 kamera. Rencana distribusi sudut kamera yang paling efektif sesuai standar produksi pertelevisian adalah...",
            options: [
              { key: "A", text: "Ketiga kamera diletakkan berjejer rapat di satu sudut kiri" },
              { key: "B", text: "Kamera 1 untuk Master Wide Shot, Kamera 2 untuk Close-Up Host, Kamera 3 untuk Close-Up Guest" },
              { key: "C", text: "Ketiga kamera merekam gambar close up host secara bersamaan" },
              { key: "D", text: "Kamera bergerak acak tanpa koordinasi floor plan" },
            ],
            correctKey: "B",
            explanation: "Formasi standar multicamera studio talkshow menggunakan Kamera 1 (Wide/Master tengah), Kamera 2 (Host cross shot), dan Kamera 3 (Guest cross shot).",
          },
          {
            id: 115,
            bloom: "C6",
            stem: "Evaluasi tahapan pasca-produksi kru kamera dan tata cahaya setelah siaran langsung selesai mencakup...",
            options: [
              { key: "A", text: "Membiarkan lampu tetap menyala semalaman" },
              { key: "B", text: "Pengecekan logsheet kondisi fisik alat, pemutusan daya bertahap, perapian kabel over-under, dan pengembalian ke master storage" },
              { key: "C", text: "Menghapus rekaman master program tanpa konfirmasi produser" },
              { key: "D", text: "Menutup studio tanpa mematikan AC pendingin ruang kontrol" },
            ],
            correctKey: "B",
            explanation: "SOP pasca-produksi memastikan seluruh aset studio terinventarisasi aman, kabel tergulung rapi, dan siap digunakan untuk shift berikutnya.",
          },
        ],
        lkpd: {
          title: "LKPD 1: Penyusunan Camera & Lighting Breakdown Sheet",
          objective: "Peserta didik mampu menyusun lembar rencana teknis alur produksi kamera dan tata cahaya berdasarkan naskah program talkshow televisi.",
          tools: ["Formulir Breakdown Sheet", "Naskah Rundown Program TV", "Denah Floor Plan Studio"],
          steps: [
            "Bacalah naskah rundown dan tentukan kebutuhan adegan segmen 1.",
            "Identifikasi formasi 3 kamera studio (Master Wide, Host Close-Up, Guest Close-Up).",
            "Buat daftar alokasi kru: DoP, Cam Operator 1-3, Gaffer, dan Grip.",
            "Tuliskan langkah mitigasi keselamatan kerja listrik di lembar kerja.",
          ],
          outputFormat: "Dokumen PDF/Foto Lembar Kerja Breakdown Sheet dan Floor Plan.",
        },
        journalQuestions: {
          q1: "Sebutkan 3 tugas utama departemen kamera dan tata cahaya pada tahap pra-produksi!",
          q2: "Mengapa kepatuhan terhadap SOP K3LH kelistrikan studio merupakan hal mutlak bagi kru?",
          q3: "Tantangan apa yang paling menarik bagi Anda dalam koordinasi tim produksi multicamera?",
        },
      },

      // =========================================================================
      // KONTEN 2: Peralatan tata cahaya dan teknik pencahayaan
      // =========================================================================
      {
        id: "f4-k2",
        order: 2,
        title: "2. Peralatan tata cahaya dan teknik pencahayaan",
        shortTitle: "Peralatan & Teknik Cahaya",
        summary: "Identifikasi jenis dan fungsi peralatan tata cahaya televisi serta penerapan teknik pencahayaan Three-Point Lighting, rasio kontras, dan temperatur warna.",
        kompetensi: ["1. Mengidentifikasi", "2. Menerapkan"],
        tujuanPembelajaran: [
          "Peserta didik mampu mengidentifikasi jenis dan fungsi peralatan tata cahaya.",
          "Peserta didik mampu menerapkan teknik pencahayaan sesuai kebutuhan adegan.",
        ],
        hookQuestion: "Mengapa presenter berita di studio TV terlihat tajam, berdimensi, dan tanpa bayangan gelap di bawah mata, sedangkan video rekaman HP kita sering tampak kusam atau berminyak?",
        hookContext: "Teknik Three-Point Lighting adalah standar emas pertelevisian dunia untuk menciptakan kedalaman ruang visual 3 dimensi pada layar kaca 2 dimensi.",
        pretestQuestions: [
          {
            id: 201,
            bloom: "C2",
            stem: "Lampu studio yang memiliki lensa cembung bertingkat untuk menghasilkan berkas cahaya fokus dan tepian yang halus disebut...",
            options: [
              { key: "A", text: "Lampu Strobe" },
              { key: "B", text: "Lampu Fresnel" },
              { key: "C", text: "Lampu Neon Biasa" },
              { key: "D", text: "Lampu Senter" },
            ],
            correctKey: "B",
            explanation: "Lampu Fresnel menggunakan lensa bertingkat khusus yang memungkinkan pengaturan berkas cahaya spot (fokus) hingga flood (menyebar).",
          },
          {
            id: 202,
            bloom: "C2",
            stem: "Komponen pencahayaan dalam Three-Point Lighting yang berfungsi memisahkan subjek dari latar belakang dengan menyinari rambut dan pundak belakang adalah...",
            options: [
              { key: "A", text: "Key Light" },
              { key: "B", text: "Fill Light" },
              { key: "C", text: "Back Light / Hair Light" },
              { key: "D", text: "Base Light" },
            ],
            correctKey: "C",
            explanation: "Back Light memberikan garis tepi cahaya (rim light) di kepala dan pundak agar subjek tidak menyatu dengan latar belakang gelap.",
          },
          {
            id: 203,
            bloom: "C2",
            stem: "Temperatur warna standar lampu studio halogen/tungsten dinyatakan dalam skala Kelvin bernilai...",
            options: [
              { key: "A", text: "3200 Kelvin (Kekuningan/Warm)" },
              { key: "B", text: "5600 Kelvin (Kebiruan/Daylight)" },
              { key: "C", text: "9000 Kelvin" },
              { key: "D", text: "1000 Kelvin" },
            ],
            correctKey: "A",
            explanation: "Lampu tungsten studio memiliki suhu warna 3200K, sedangkan cahaya matahari siang hari (daylight) bernilai 5600K.",
          },
        ],
        materialCards: [
          {
            title: "1. Fisika Cahaya & Karakteristik Gelombang dalam Sinematografi",
            content: "Cahaya adalah radiasi elektromagnetik yang terlihat oleh mata manusia (panjang gelombang 380-740 nm). Dalam penyiaran televisi, cahaya memiliki 4 karakteristik utama yang wajib dikontrol oleh penata cahaya: Kuantitas (intensitas/kecerahan), Kualitas (hard light atau soft light), Warna (color temperature Kelvin), dan Arah (angle of incidence).",
            didYouKnow: "Mata manusia dapat beradaptasi secara otomatis pada perubahan cahaya, namun sensor kamera membutuhkan kalibrasi buatan untuk membaca intensitas dan warna secara konsisten.",
          },
          {
            title: "2. Spektrum Warna & Skala Temperatur Warna (Kelvin)",
            content: "Temperatur warna mengukur rona visual cahaya yang dinyatakan dalam derajat Kelvin (K). Standar industri penyiaran membagi dua acuan utama: 3200K (Tungsten/Halogen - warna kuning hangat khas studio dalam ruangan) dan 5600K (Daylight - warna putih kebiruan khas sinar matahari siang hari). Mencampur dua suhu warna tanpa filter koreksi akan menghasilkan distorsi warna kulit (skin tone) yang tidak wajar.",
          },
          {
            title: "3. Indeks Akurasi Warna: Standar CRI dan TLCI Televisi",
            content: "Color Rendering Index (CRI) mengukur kemampuan sumber cahaya menampilkan warna objek secara akurat dibandingkan cahaya alami (skala 0-100). Untuk siaran televisi berkualitas siar (broadcast), lampu studio wajib memiliki nilai CRI >95 dan TLCI (Television Lighting Consistency Index) >90 agar warna pakaian presenter dan riasan wajah tampil natural di layar televisi.",
            caseStudy: "Lampu LED murah dengan CRI di bawah 80 menyebabkan warna kulit talent terlihat kehijauan (green tint) yang sangat sulit diperbaiki saat siaran langsung.",
          },
          {
            title: "4. Klasifikasi Sumber Lampu Studio: Tungsten, HMI, Fluorescent, dan LED",
            content: "1. Tungsten Halogen: Menghasilkan spektrum warna kontinu 3200K yang sangat akurat, namun menghasilkan panas tinggi dan konsumsi listrik besar. 2. HMI (Hydrargyrum Medium-arc Iodide): Menghasilkan daylight 5600K bertenaga sangat tinggi untuk luar ruangan. 3. Fluorescent (Kino Flo): Menghasilkan soft light merata untuk berita studio. 4. LED Panel: Sangat hemat energi, temperatur warna bisa diatur (Bi-color), dan dingin.",
          },
          {
            title: "5. Anatomi Lampu Fresnel Studio & Mekanisme Fokus Lensa",
            content: "Lampu Fresnel adalah instrumen utama studio. Dilengkapi lensa cembung bertingkat (concentric rings), reflektor parabola, dan dudukan bohlam yang dapat digeser maju-mundur menggunakan kenop fokus. Jika bohlam digeser mendekati lensa, cahaya menyebar (Flood). Jika bohlam digeser menjauhi lensa, berkas cahaya memusat sempit (Spot).",
            didYouKnow: "Bobot lensa Fresnel jauh lebih tipis dan ringan dibandingkan lensa cembung standar konvensional dengan diameter optik yang sama.",
          },
          {
            title: "6. Karakteristik Hard Light vs Soft Light & Ukuran Sumber Cahaya",
            content: "Kualitas cahaya ditentukan oleh ukuran relatif sumber cahaya terhadap subjek. Hard Light: Berasal dari sumber cahaya kecil (misal lampu spot tanpa difusi), menghasilkan bayangan tajam, kontras tinggi, dan menonjolkan tekstur wajah. Soft Light: Berasal dari sumber cahaya yang luas (misal softbox besar atau pantulan bounce board), menghasilkan gradasi bayangan lembut dan mempercantik penampilan wajah.",
          },
          {
            title: "7. Aksesoris Pembentuk & Pengendali Cahaya (Light Modifiers)",
            content: "1. Barn Doors: 4 bilah logam pengatur batas sebaran berkas cahaya. 2. Scrim (wire mesh): Kawat jaring peredam intensitas cahaya tanpa merubah temperatur warna. 3. Gels (CTO - Color Temperature Orange & CTB - Color Temperature Blue): Lembar filter koreksi suhu warna. 4. Softbox & Eggcrate: Mengarahkan soft light agar tidak tumpah (spill) ke latar belakang.",
          },
          {
            title: "8. Konsep Baku Three-Point Lighting 1: Key Light",
            content: "Key Light adalah sumber cahaya utama yang paling terang dan dominan pada subjek. Diletakkan pada sudut 45 derajat secara horizontal dari sumbu kamera dan 45 derajat secara vertikal dari ketinggian kepala subjek. Key Light menentukan arah jatuhnya bayangan, eksposur dasar, dan memberikan kilau mata (catchlight) yang membuat subjek terlihat hidup.",
          },
          {
            title: "9. Three-Point Lighting 2: Fill Light & Rasio Pencahayaan",
            content: "Fill Light diletakkan pada sisi berlawanan dari Key Light untuk melembutkan bayangan pekat tanpa menciptakan bayangan kedua. Rasio kontras Key-to-Fill menentukan atmosfer: Rasio 2:1 (berita/talkshow ceria - bayangan sangat tipis), Rasio 3:1 atau 4:1 (drama televisi standar), dan Rasio 8:1 ke atas (misteri/thriller dengan bayangan sangat kontras).",
          },
          {
            title: "10. Three-Point Lighting 3: Back Light / Hair Light / Rim Light",
            content: "Back Light ditempatkan di belakang atas subjek menghadap ke arah kamera (namun tersembunyi di luar bingkai shot). Fungsinya menyinari garis rambut dan bahu subjek, menciptakan garis pembatas terang (rim of light) yang memisahkan subjek 3 dimensi dari latar belakang datar (backdrop studio).",
            didYouKnow: "Tanpa Back Light, presenter yang mengenakan setelan jas hitam akan terlihat menyatu dan 'tenggelam' ke dalam latar belakang studio yang gelap.",
          },
          {
            title: "11. Cahaya Tambahan Studio: Background Light, Kicker, dan Eye Light",
            content: "Untuk menyempurnakan tata artistik studio, ditambahkan: Background Light (menerangi set dekorasi studio dan memunculkan warna dinding), Kicker Light (menyinari pipi samping dari arah 3/4 belakang), dan Eye Light / Inkie (lampu kecil intensitas rendah di atas kamera untuk memberikan pantulan titik putih di pupil mata narasumber).",
          },
          {
            title: "12. Ragam Pola Pencahayaan Wajah: Rembrandt, Loop, dan Split Lighting",
            content: "1. Rembrandt Lighting: Membentuk segitiga cahaya kecil khas di bawah mata pada sisi wajah yang berbayang. 2. Loop Lighting: Bayangan kecil hidung melingkar ke bawah sudut bibir (paling flattering untuk presenter berita). 3. Split Lighting: Wajah terbagi persis separuh terang dan separuh gelap (simbol karakter berkepribadian ganda). 4. Butterfly/Paramount Lighting: Bayangan simetris tepat di bawah cuping hidung.",
          },
          {
            title: "13. Gaya Pencahayaan: High-Key Lighting vs Low-Key Lighting",
            content: "High-Key Lighting: Ditandai dengan intensitas cahaya merata, rasio kontras rendah, hampir tidak ada bayangan gelap (sangat ideal untuk program variety show, komedi, berita pagi, dan iklan komersial). Low-Key Lighting: Didominasi area gelap (chiaroscuro), bayangan pekat, rasio kontras tinggi (sangat ideal untuk film horor, drama kriminal, investigasi mendalam, dan adegan menegangkan).",
          },
          {
            title: "14. Sistem Kontrol Digital DMX-512 & Dimmer Console Studio",
            content: "Di studio penyiaran modern, seluruh lampu dikendalikan secara sentral dari Meja Konsol Lighting (Lighting Desk) menggunakan kabel protokol digital DMX-512 (Digital Multiplex 512 saluran). Setiap unit lampu dialokasikan alamat unik (DMX Address) sehingga operator dapat mengatur intensitas 0-100%, motorized pan/tilt, dan palet warna RGBW secara instan antar segmen acara.",
          },
          {
            title: "15. Perlengkapan Rigging & Penyangga Lampu: C-Stand & Grip Head",
            content: "C-Stand (Century Stand) adalah penyangga lampu paling kokoh di industri film. Dilengkapi 'Turtle Base' dengan kaki berundak yang dapat ditumpuk rapat, 'Grip Head' untuk menjepit aksesoris, dan 'Gobo Arm' untuk menjorokkan lampu/bendera pemotong cahaya. Setiap C-Stand WAJIB diberi pemberat Sandbag pada kaki tertingginya untuk mencegah stand tumbang.",
          },
          {
            title: "16. Standar K3LH Departemen Tata Cahaya & Bahaya Panas",
            content: "1. Selalu kenakan sarung tangan kulit tahan panas (rigging gloves) saat menyetel barn doors lampu halogen yang suhunya mencapai >200°C. 2. Jangan menyentuh kaca bohlam halogen langsung dengan jari tangan kosong (minyak kulit memicu bohlam meledak saat panas). 3. Pasang Safety Bond (kawat baja) ekstra pada setiap lampu grid gantung. 4. Beri waktu pendinginan (cooling down) 10-15 menit sebelum lampu dipindahkan.",
          },
          {
            title: "17. Komparasi Perangkat: Lampu Halogen Tradisional vs Lampu LED Bi-Color",
            content: "Lampu Halogen 2000W: Menghasilkan CRI 100 sempurna dan throw distance jauh, namun membebani AC studio dengan panas ekstrem dan boros listrik. Lampu LED Bi-Color 300W: Menghasilkan kecerahan setara dengan konsumsi daya 85% lebih hemat, suhu dingin, bobot ringan, dan dapat berpindah dari 3200K ke 5600K hanya dengan memutar kenop digital.",
          },
          {
            title: "18. Troubleshooting Lapangan: Mengatasi Flickering & Penyesuaian Shutter",
            content: "Jika rekaman kamera tampak berkedip (flicker) di bawah lampu LED studio: 1. Masalah frekuensi daya (50 Hz PAL vs refresh rate LED). 2. Ubah shutter speed kamera ke 1/50 detik atau 1/100 detik (kelipatan frekuensi listrik PLN). 3. Gunakan dimmer LED bersirkuit PWM (Pulse Width Modulation) frekuensi tinggi khusus broadcast (>20 kHz).",
          },
          {
            title: "19. Studi Kasus Riil: Koreksi Glare Kacamata & Kilau Minyak Wajah",
            content: "Narasumber program wawancara memiliki kulit berminyak dan kacamata anti-radiasi yang memantulkan kotak softbox putih. Tindakan solusi: 1. Minta MUA (Make-Up Artist) mengaplikasikan bedak tabur matte transparan untuk menyerap minyak dahi dan hidung. 2. Naikkan posisi Key Light 15 derajat lebih tinggi dari garis pandang mata subjek sehingga pantulan softbox memantul ke bawah lantai studio di luar bidikan lensa kamera.",
            caseStudy: "Penyelesaian kendala glare dalam waktu 3 menit sebelum on-air menjaga profesionalisme presenter tanpa menunda rundown siaran langsung.",
          },
          {
            title: "20. Rangkuman Inti Tata Cahaya & Lembar Checklist Lighting Plot",
            content: "Kunci keberhasilan tata cahaya televisi: 1. Pahami arah dan rasio Three-Point Lighting (Key, Fill, Back). 2. Samakan temperatur warna seluruh sumber cahaya (3200K atau 5600K). 3. Pastikan nilai CRI >95 untuk akurasi warna kulit manusia. 4. Utamakan keselamatan kerja K3 (Sandbag, Safety Bond, dan Sarung Tangan Kulit).",
            didYouKnow: "Sutradara legendaris Stanley Kubrick terkenal hanya menggunakan cahaya lilin alami dengan lensa bukaan f/0.7 saat memfilmkan adegan malam di film Barry Lyndon.",
          },
        ],
        video: {
          title: "Masterclass Three-Point Lighting Studio dan Pengaturan Lampu Sinematik",
          embedUrl: "https://www.youtube.com/embed/j_SovF3lk4I",
          guide: "Amati sudut 45 derajat penempatan Key Light, rasio intensitas Fill Light, dan fungsi Back Light dalam memisahkan rambut/bahu subjek dari latar belakang.",
        },
        gamePairs: [
          { id: 1, left: "Key Light", right: "Lampu utama penentu eksposur dan karakter wajah subjek" },
          { id: 2, left: "Fill Light", right: "Lampu pelembut bayangan kasar di sisi wajah subjek" },
          { id: 3, left: "Back Light", right: "Lampu pemisah subjek dari latar belakang (rim/depth)" },
          { id: 4, left: "Barn Doors", right: "Daun logam penahan tumpahan cahaya liar pada lampu Fresnel" },
        ],
        caseTitle: "Mengatasi Glare Pantulan Lampu pada Narasumber Berkacamata Tebal",
        caseScenario: "Seorang menteri hadir sebagai narasumber siaran langsung talkshow mengenakan kacamata tebal yang sangat memantulkan cahaya. Ketika Key Light menyala normal, pantulan putih softbox menutupi pupil matanya di Kamera 1.",
        caseInstruction: "Sebagai penata cahaya (Lighting Director), langkah teknis apa yang harus Anda lakukan untuk menghilangkan pantulan kacamata tanpa membuat wajah narasumber menjadi gelap?",
        sampleQuestions: [
          {
            id: 211,
            bloom: "C2",
            stem: "Rasio pencahayaan (lighting ratio) 2:1 antara Key Light dan Fill Light umumnya digunakan pada program siaran...",
            options: [
              { key: "A", text: "Film horor misteri" },
              { key: "B", text: "Program berita dan talkshow televisi (High-Key)" },
              { key: "C", text: "Adegan penyergapan malam hari" },
              { key: "D", text: "Teater siluet" },
            ],
            correctKey: "B",
            explanation: "Program berita mengutamakan kejelasan wajah presenter tanpa bayangan dramatis berlebih, sehingga rasio 2:1 (High-Key) sangat ideal.",
          },
          {
            id: 212,
            bloom: "C3",
            stem: "Filter koreksi warna yang digunakan untuk mengubah cahaya lampu Tungsten (3200K) menjadi setara cahaya siang hari Daylight (5600K) adalah...",
            options: [
              { key: "A", text: "CTO (Color Temperature Orange)" },
              { key: "B", text: "CTB (Color Temperature Blue)" },
              { key: "C", text: "Green Minus Filter" },
              { key: "D", text: "Polarizer" },
            ],
            correctKey: "B",
            explanation: "CTB (Color Temperature Blue) menggeser temperatur cahaya kuning 3200K ke spektrum biru 5600K.",
          },
          {
            id: 213,
            bloom: "C4",
            stem: "Fungsi utama daun penutup (Barn Doors) pada lampu Fresnel studio televisi adalah...",
            options: [
              { key: "A", text: "Mengubah warna cahaya menjadi merah" },
              { key: "B", text: "Membatasi dan membentuk arah tumpahan cahaya agar tidak mengenai lensa kamera atau latar belakang yang tidak diinginkan" },
              { key: "C", text: "Mendinginkan bohlam lampu yang panas" },
              { key: "D", text: "Menghubungkan lampu ke internet" },
            ],
            correctKey: "B",
            explanation: "Barn doors membatasi area penyinaran sehingga cahaya tidak bocor (spill) ke kamera atau set dekorasi lain.",
          },
          {
            id: 214,
            bloom: "C5",
            stem: "Jika subjek berjarak terlalu dekat dengan latar belakang studio sehingga bayangan subjek jatuh kasar di dinding backdrop, solusi pencahayaan terbaik adalah...",
            options: [
              { key: "A", text: "Mematikan seluruh lampu studio" },
              { key: "B", text: "Maju kan subjek minimal 1,5 - 2 meter dari backdrop dan naikkan sudut Key Light menjadi 45 derajat" },
              { key: "C", text: "Membesarkan watt lampu Back Light" },
              { key: "D", text: "Menaruh kamera tepat di depan lampu" },
            ],
            correctKey: "B",
            explanation: "Menjauhkan subjek dari backdrop memungkinkan bayangan Key Light jatuh ke lantai di bawah, bukan di dinding belakang.",
          },
          {
            id: 215,
            bloom: "C6",
            stem: "Penggunaan konsol DMX-512 dalam tata cahaya studio modern memberikan keunggulan utama berupa...",
            options: [
              { key: "A", text: "Menghemat biaya listrik 100%" },
              { key: "B", text: "Pengaturan intensitas, warna RGB, dan preset pencahayaan multi-adegan secara terpusat, presisi, dan dapat diprogram" },
              { key: "C", text: "Menggantikan peran presenter studio" },
              { key: "D", text: "Menghilangkan kebutuhan kabel listrik" },
            ],
            correctKey: "B",
            explanation: "Protokol DMX-512 memungkinkan programmer pencahayaan mengatur puluhan kanal dimmer dan lampu cerdas (moving head) dari satu meja kontrol.",
          },
        ],
        lkpd: {
          title: "LKPD 2: Rancang Bangun Tata Cahaya Three-Point Lighting Studio",
          objective: "Peserta didik mampu menata peralatan tata cahaya studio dengan konfigurasi Three-Point Lighting berasio kontras 2:1 sesuai standar broadcast.",
          tools: ["Lampu Fresnel / LED Studio", "Stand C-Stand & Sandbag", "Lightmeter / Waveform Monitor", "Model Subjek"],
          steps: [
            "Posisikan Key Light pada sudut 45 derajat dari kamera menghadap subjek.",
            "Nyalakan Fill Light pada sisi berlawanan dengan intensitas setengah dari Key Light.",
            "Pasang Back Light dari belakang atas subjek untuk memisahkan rambut/bahu.",
            "Ukur rasio pencahayaan dan amati hasil visual di monitor kamera.",
          ],
          outputFormat: "Foto dokumentasi set pencahayaan beserta analisis rasio kontras.",
        },
        journalQuestions: {
          q1: "Jelaskan fungsi dari masing-masing komponen Three-Point Lighting (Key, Fill, Back Light)!",
          q2: "Kapan Anda harus menggunakan pencahayaan High-Key vs Low-Key dalam produksi televisi?",
          q3: "Bagaimana cara Anda memastikan keamanan beban kelistrikan lampu saat instalasi di studio?",
        },
      },

      // =========================================================================
      // KONTEN 3: Pengoperasian kamera
      // =========================================================================
      {
        id: "f4-k3",
        order: 3,
        title: "3. Pengoperasian kamera",
        shortTitle: "Pengoperasian Kamera",
        summary: "Pengoperasian kamera televisi studio dan EFP sesuai prosedur kalibrasi sensor (White Balance, Iris, Focus, Shutter), serta penerapan kaidah komposisi, ukuran shot, dan gerakan kamera naskah.",
        kompetensi: ["1. Mengoperasikan", "2. Menerapkan"],
        tujuanPembelajaran: [
          "Peserta didik mampu mengoperasikan kamera televisi sesuai prosedur.",
          "Peserta didik mampu menerapkan komposisi, ukuran shot, dan gerakan kamera sesuai naskah.",
        ],
        hookQuestion: "Apa yang terjadi pada warna kulit presenter jika seorang juru kamera lupa melakukan White Balance sebelum siaran langsung di bawah lampu studio 3200K?",
        hookContext: "Kamera broadcast memerlukan kalibrasi sensor yang presisi melalui white balance, black balance, iris, dan servo focus agar gambar yang dikirim ke switcher seragam dan natural.",
        pretestQuestions: [
          {
            id: 301,
            bloom: "C2",
            stem: "Prosedur kalibrasi warna kamera agar warna putih pada objek tampil murni putih di bawah sumber cahaya tertentu disebut...",
            options: [
              { key: "A", text: "Black Balance" },
              { key: "B", text: "White Balance" },
              { key: "C", text: "Focus Peaking" },
              { key: "D", text: "Zebra Pattern" },
            ],
            correctKey: "B",
            explanation: "White balance mengkalibrasi sensor warna RGB kamera terhadap suhu warna sumber cahaya yang menerangi subjek.",
          },
          {
            id: 302,
            bloom: "C2",
            stem: "Jarak ruang kosong antara bagian atas kepala subjek dengan batas atas bingkai gambar dalam kaidah komposisi visual disebut...",
            options: [
              { key: "A", text: "Looking Room" },
              { key: "B", text: "Walking Room" },
              { key: "C", text: "Headroom" },
              { key: "D", text: "Rule of Thirds" },
            ],
            correctKey: "C",
            explanation: "Headroom adalah ruang di atas kepala agar komposisi gambar tidak terkesan terbentur atau tercekik batas atas frame.",
          },
          {
            id: 303,
            bloom: "C2",
            stem: "Ukuran bidang pandang gambar yang menampilkan subjek dari dada hingga batas atas kepala disebut...",
            options: [
              { key: "A", text: "Extreme Close-Up (ECU)" },
              { key: "B", text: "Medium Close-Up (MCU)" },
              { key: "C", text: "Full Shot (FS)" },
              { key: "D", text: "Extreme Long Shot (ELS)" },
            ],
            correctKey: "B",
            explanation: "Medium Close-Up (MCU) membidik area dada hingga kepala, sangat umum digunakan untuk presenter berita televisi.",
          },
        ],
        materialCards: [
          {
            title: "1. Prinsip Kerja Kamera Televisi & Konversi Optik-Elektronik",
            content: "Kamera televisi bekerja dengan menangkap foton cahaya melalui elemen optik lensa, memisahkannya ke spektrum Red, Green, Blue (RGB) melalui prisma pemisah berkas (dichroic prism block), lalu mengonversinya menjadi sinyal muatan listrik melalui jutaan fotodioda sensor gambar digital.",
            didYouKnow: "Kamera broadcast profesional menggunakan sistem 3-chip sensor (3-CMOS) terpisah untuk masing-masing warna primer Red, Green, dan Blue demi akurasi warna mutlak.",
          },
          {
            title: "2. Anatomi Sensor Gambar: CCD vs CMOS & Global Shutter",
            content: "Sensor CMOS modern mengonsumsi daya rendah dan mendukung pemrosesan 4K HDR. Dalam penyiaran siaran langsung olahraga dan panggung konser, sensor dengan teknologi 'Global Shutter' sangat diutamakan untuk mencegah distorsi efek 'Jello' atau garis miring (rolling shutter skew) saat kamera digerakkan cepat (whip pan).",
          },
          {
            title: "3. Anatomi Kamera Studio Broadcast & Konektivitas I/O",
            content: "Kamera studio terdiri atas: Camera Head (bodi utama), Studio Viewfinder (monitor LCD 7 inci dengan hood pelindung silau), Tally Light (indikator merah on-air), Intercom Headset jack, Return Video switch (melihat feed siaran program), serta port koneksi SMPTE Hybrid Fiber Optic yang mengalirkan video, daya, audio, dan kontrol jarak jauh dalam satu kabel.",
          },
          {
            title: "4. Sistem Lensa Parfocal Broadcast & Servo Controller",
            content: "Lensa siaran televisi berjenis 'Parfocal' (fokus tidak bergeser saat melakukan zoom in maupun zoom out). Dioperasikan menggunakan sistem kendali jarak jauh pada handle tripod: tangan kanan mengendalikan 'Servo Zoom Demand' (rocker switch kecepatan variabel), dan tangan kiri mengendalikan 'Focus Demand' (roda pemutar fokus yang sangat presisi).",
            caseStudy: "Menggunakan lensa fotografi non-parfocal pada siaran langsung talkshow akan menyebabkan gambar out-of-focus setiap kali juru kamera mengubah ukuran shot.",
          },
          {
            title: "5. Segitiga Eksposur 1: Shutter Speed & Aturan 180 Derajat",
            content: "Shutter speed mengontrol durasi sensor terpapar cahaya. Standar siaran televisi sistem PAL (50i / 25 fps) mengadopsi Aturan 180 Derajat (Shutter Speed = 1 / [2 x Frame Rate]), yaitu 1/50 detik. Shutter speed terlalu tinggi (>1/500s) menyebabkan gerakan tampak patah-patah (stroboscopic), sedangkan terlalu lambat (<1/25s) menghasilkan blur berlebihan.",
          },
          {
            title: "6. Segitiga Eksposur 2: Aperture / Iris (F-Stop) & Depth of Field",
            content: "Iris (diafragma) mengatur volume berkas cahaya yang masuk. Angka F-stop kecil (f/1.4, f/2.8) berarti bukaan lensa lebar: gambar terang dan Depth of Field (DoF) dangkal/bokeh. Angka F-stop besar (f/8, f/11) berarti bukaan lensa sempit: gambar lebih gelap namun ruang ketajaman fokus luas dari depan hingga latar belakang.",
          },
          {
            title: "7. Segitiga Eksposur 3: Gain (dB) vs ISO & Noise Elektronik",
            content: "Pada kamera broadcast, amplifikasi sensitivitas sensor dinyatakan dalam decibel (dB) Gain (0 dB, +6 dB, +12 dB, +18 dB), setara dengan skala ISO (ISO 100, 200, 400, 800). Penambahan gain +6 dB menggandakan sinyal kecerahan namun menaikkan noise elektronik (grain/bintik pasir) pada area gelap bayangan.",
            didYouKnow: "Di studio penyiaran berlampu cukup, juru kamera selalu mempertahankan Gain pada nilai 0 dB (Unity Gain) demi gambar terbersih tanpa noise.",
          },
          {
            title: "8. Filter Optik Internal: Neutral Density (ND Filter Wheel)",
            content: "Kamera broadcast dilengkapi roda filter fisik berputar (Filter Wheel) di depan sensor: 1. Clear/Cross (tanpa filter). 2. 1/4 ND (mereduksi 2 stop cahaya). 3. 1/16 ND (mereduksi 4 stop). 4. 1/64 ND (mereduksi 6 stop). Filter ND bertindak seperti kacamata hitam optik untuk meredam cahaya terik matahari tanpa mengubah warna sedikit pun.",
          },
          {
            title: "9. Prosedur Kalibrasi White Balance (AWB) & Black Balance (ABB)",
            content: "Prosedur wajib sebelum on-air: 1. Arahkan kamera ke kertas putih bersih atau 18% Gray Card yang tersorot lampu studio. 2. Lakukan zoom in hingga kertas memenuhi 80% layar. 3. Tekan sakelar AWB (Auto White Balance). 4. Kamera akan mengunci suhu warna (misal 3200K). Lanjutkan dengan Auto Black Balance (ABB) untuk mereset arus gelap sensor saat shutter tertutup.",
          },
          {
            title: "10. Sistem Kendali Jarak Jauh: CCU dan Remote Control Panel (RCP)",
            content: "Di stasiun televisi, juru kamera fokus pada komposisi dan pergerakan bingkai (framing), sementara bukaan iris eksposur dan koreksi warna diatur dari ruang Master Control Room (MCR) oleh insinyur video menggunakan Remote Control Panel (RCP) yang terhubung ke CCU (Camera Control Unit).",
          },
          {
            title: "11. Bantuan Pemantauan Eksposur: Indikator Zebra Pattern",
            content: "Fitur Zebra Pattern di viewfinder menampilkan garis-garis belang diagonal penanda kecerahan IRE (Institute of Radio Engineers): Garis Zebra 70% digunakan sebagai pedoman pencahayaan tepat pada pipi wajah manusia (skin tone Caucasian/Asian), sedangkan Zebra 100% menandakan area putih yang telah mengalami clipping/overexposure (hilang detail).",
          },
          {
            title: "12. Bantuan Pemfokusan Manual: Focus Peaking & Expanded Focus",
            content: "Di viewfinder beresolusi HD, juru kamera mengaktifkan 'Focus Peaking' yang menampilkan garis tepi berwarna mencolok (merah/putih/kuning) pada objek yang berada dalam zona fokus tertajam. Fitur 'Expanded Focus' memperbesar bagian tengah layar sementara waktu untuk memastikan mata presenter tajam sempurna sebelum take.",
          },
          {
            title: "13. Standar Skala Ukuran Bidang Pandang (Shot Size)",
            content: "1. Extreme Long Shot (ELS): Menunjukkan panorama lingkungan luas. 2. Long Shot (LS): Menampilkan tubuh manusia utuh dari ujung kepala ke kaki beserta latar. 3. Medium Shot (MS): Pinggang ke atas. 4. Medium Close-Up (MCU): Dada ke atas (standar presenter berita). 5. Close-Up (CU): Leher ke atas. 6. Extreme Close-Up (ECU): Detail mata atau jari tangan.",
          },
          {
            title: "14. Sudut Pengambilan Gambar (Camera Angle) & Makna Psikologis",
            content: "1. Eye Level: Sudut sejajar mata netral dan objektif. 2. Low Angle: Kamera membidik dari bawah ke atas, memberi kesan megah, berwibawa, atau mendominasi. 3. High Angle: Kamera membidik dari atas ke bawah, memberi kesan subjek kerdil, lemah, atau terisolasi. 4. Dutch Angle / Canted: Garis horizon miring sengaja untuk menciptakan kesan disorientasi atau panik.",
          },
          {
            title: "15. Ragam Gerakan Kamera Dinamis (Camera Movement)",
            content: "1. Pan (Panning): Kepala kamera berputar horisontal ke kiri atau kanan pada poros tripod. 2. Tilt (Tilting): Kepala kamera mendongak ke atas atau menunduk ke bawah. 3. Pedestal (Ped): Seluruh kamera dinaikkan atau diturunkan tegak vertikal. 4. Dolly: Kamera meluncur maju (Dolly In) atau mundur (Dolly Out). 5. Truck: Kamera bergeser sejajar ke samping.",
          },
          {
            title: "16. Kaidah Komposisi Estetika: Rule of Thirds & Looking Room",
            content: "Rule of Thirds membagi bidang bidik menjadi kisi 3x3. Mata presenter diletakkan pada garis sepertiga horizontal atas. Looking Room (Nose Room): Menyediakan ruang kosong di depan arah pandang wajah narasumber. Headroom: Memberikan ruang udara proporsional di atas kepala agar subjek tidak terlihat tercekik batas atas frame.",
            didYouKnow: "Headroom yang terlalu lebar membuat subjek tampak tenggelam di bagian bawah layar televisi, sedangkan tanpa headroom membuat dahi subjek terpotong.",
          },
          {
            title: "17. Aturan Sumbu Imajiner 180 Derajat (Axis of Action)",
            content: "Dalam liputan multi-kamera (misal dua orang sedang berbincang atau pertandingan sepak bola), garis imajiner ditarik antara kedua subjek. Seluruh kamera (Kamera 1, 2, 3) WAJIB berada pada satu sisi garis 180 derajat yang sama. Melintasi garis (crossing the line) akan membalik arah hadap subjek di layar dan membingungkan penonton.",
          },
          {
            title: "18. Pro-Tips Juru Kamera: Menjaga Kestabilan Saat Servo Zooming",
            content: "Saat melakukan perbesaran (zoom in) secara langsung on-air: 1. Letakkan jempol tangan kanan menahan bodi tripod handle, gunakan jari telunjuk untuk menekan rocker servo dengan tekanan konstan. 2. Jangan mengubah kecepatan zoom di tengah jalan (awali halus, laju konstan, akhiri halus tanpa sentakan mendadak). 3. Kunci fokus pada mata sebelum melakukan zoom.",
          },
          {
            title: "19. Troubleshooting Cepat: Koreksi Back Focus Lensa Zoom",
            content: "Jika lensa fokus tajam saat zoom in tetapi menjadi buram saat di-zoom out, ini adalah gejala 'Back Focus Misalignment' (jarak elemen belakang lensa ke sensor bergeser): Solusi: 1. Pasang Siemens Star chart pada jarak 3 meter. 2. Buka iris lebar (f/1.4). 3. Zoom in penuh, fokuskan ring depan. 4. Zoom out penuh, kendurkan sekrup flange back dan putar ring back focus hingga tajam.",
            caseStudy: "Penyetelan back focus berkala setiap 3 bulan menjamin lensa kamera siap meliput siaran olahraga cepat tanpa kehilangan fokus optik.",
          },
          {
            title: "20. Rangkuman Pengoperasian Kamera, Kode Etik & Kesiapan On-Air",
            content: "Juru kamera profesional wajib: 1. Tiba 30 menit sebelum siaran untuk checklist (WB, ABB, Zoom, Tally, Intercom). 2. Mematuhi aba-aba sutradara dan tidak memotong framing saat kamera sedang tayang merah (on-air). 3. Menguasai komposisi visual cepat (Headroom, Lead room, 180-degree rule). 4. Selalu mengunci pengaman (tilt lock) saat kamera ditinggalkan.",
          },
        ],
        video: {
          title: "Masterclass Pengoperasian Kamera Studio Broadcast & Kaidah Framing Televisi",
          embedUrl: "https://www.youtube.com/embed/7y9Z_A8Vj_o",
          guide: "Fokus pada cara mempertahankan headroom yang stabil saat panning/tilting mengikuti pembawa acara, penggunaan indikator Zebra pada wajah, dan teknik servo zoom.",
        },
        gamePairs: [
          { id: 1, left: "Rule of Thirds", right: "Pedoman menempatkan pusat perhatian pada perpotongan garis 3x3" },
          { id: 2, left: "Looking Room", right: "Ruang kosong di depan arah pandang wajah narasumber" },
          { id: 3, left: "Headroom", right: "Ruang proporsional antara batas atas kepala dengan tepi atas bingkai" },
          { id: 4, left: "Pan Right", right: "Gerakan memutar kepala kamera secara horisontal ke arah kanan" },
        ],
        caseTitle: "Framing Kamera Pada Gerakan Panggung Dinamis Pembawa Acara Talkshow",
        caseScenario: "Dalam siaran langsung talkshow, pembawa acara mendadak berdiri dan berjalan mendekati penonton di luar rencana latihan blocking. Anda bertugas sebagai juru Kamera 2 (Close-Up).",
        caseInstruction: "Bagaimana teknik tangan kiri (focus ring demand) dan tangan kanan (servo zoom & panning handle) bekerja sama agar framing gambar tidak goyang, fokus tetap tajam (in-focus), dan headroom tidak terpotong?",
        sampleQuestions: [
          {
            id: 311,
            bloom: "C2",
            stem: "Fitur display di viewfinder kamera berupa garis-garis belang diagonal untuk mendeteksi area gambar yang mengalami overexposure disebut...",
            options: [
              { key: "A", text: "Peaking" },
              { key: "B", text: "Zebra Pattern" },
              { key: "C", text: "Histogram" },
              { key: "D", text: "Waveform" },
            ],
            correctKey: "B",
            explanation: "Zebra pattern menampilkan garis hitam-putih pada kecerahan tertentu (misal 70% untuk kulit manusia, 100% untuk highlight putih).",
          },
          {
            id: 312,
            bloom: "C3",
            stem: "Jika subjek presenter bergerak berjalan ke arah kanan frame, pergerakan kamera yang tepat untuk mempertahankan komposisi stabil adalah...",
            options: [
              { key: "A", text: "Pan Left mendahului subjek" },
              { key: "B", text: "Pan Right halus dengan memberikan walking room di depan langkah subjek" },
              { key: "C", text: "Tilt Down ke arah lantai" },
              { key: "D", text: "Zoom In mendadak ke arah sepatu" },
            ],
            correctKey: "B",
            explanation: "Pan Right mengikuti subjek dengan menyediakan lead/walking room di depan arah jalan menjaga kenyamanan visual penonton.",
          },
          {
            id: 313,
            bloom: "C4",
            stem: "Perbedaan mendasar antara pergerakan Zoom In dengan Dolly In adalah...",
            options: [
              { key: "A", text: "Zoom In mengubah panjang fokus lensa (perspektif terkompresi), sedangkan Dolly In memindahkan fisik kamera mendekati subjek (perspektif berubah alami)" },
              { key: "B", text: "Zoom In menggunakan rel, Dolly In menggunakan tombol" },
              { key: "C", text: "Zoom In dilakukan saat kamera mati, Dolly In saat kamera menyala" },
              { key: "D", text: "Keduanya sama persis tanpa perbedaan" },
            ],
            correctKey: "A",
            explanation: "Zoom adalah perubahan optik focal length yang memipihkan kedalaman ruang, sedangkan Dolly adalah gerakan fisik kamera di ruang tiga dimensi.",
          },
          {
            id: 314,
            bloom: "C5",
            stem: "Ketika sutradara memberi aba-aba di intercom: 'Standby Cam 2, beri Medium Shot pembicara!', tindakan juru kamera 2 adalah...",
            options: [
              { key: "A", text: "Membidik pembicara dari pinggang hingga batas kepala dengan headroom proporsional, kunci fokus, lalu konfirmasi siap" },
              { key: "B", text: "Merekam kaki pembicara" },
              { key: "C", text: "Mematikan kamera" },
              { key: "D", text: "Menggoyangkan kamera ke kiri dan ke kanan" },
            ],
            correctKey: "A",
            explanation: "Medium Shot (MS) membingkai subjek dari pinggang ke atas dan juru kamera harus mengunci fokus sebelum gambar di-cut on-air.",
          },
          {
            id: 315,
            bloom: "C6",
            stem: "Pada siaran luar ruangan (outdoor) saat terik matahari sangat kuat, sensor kamera mengalami overexposure meskipun aperture iris sudah ditutup ke f/16. Tindakan teknis juru kamera yang paling tepat adalah...",
            options: [
              { key: "A", text: "Menaikkan shutter speed menjadi 1/8000 detik sehingga gambar patah-patah" },
              { key: "B", text: "Mengaktifkan Neutral Density (ND) Filter internal kamera untuk mereduksi intensitas cahaya tanpa merusak warna" },
              { key: "C", text: "Menutupi lensa kamera dengan lakban hitam" },
              { key: "D", text: "Meminta matahari dipadamkan" },
            ],
            correctKey: "B",
            explanation: "ND Filter internal berfungsi seperti kacamata hitam untuk sensor kamera, menurunkan intensitas cahaya tanpa mengorbankan shutter speed dan depth of field.",
          },
        ],
        lkpd: {
          title: "LKPD 3: Pengambilan Variasi 8 Ukuran Shot dan Gerakan Kamera Standar Broadcast",
          objective: "Peserta didik mampu mengoperasikan kamera televisi dengan mempraktikkan kalibrasi white balance, variasi ukuran shot (ELS s.d. ECU), dan pergerakan Pan/Tilt halus.",
          tools: ["Kamera Broadcast / Mirrorless Rig", "Tripod Fluid Head", "Grey Card / White Paper", "Buku Naskah"],
          steps: [
            "Lakukan kalibrasi White Balance di bawah pencahayaan ruangan.",
            "Rekam 8 variasi ukuran shot: ELS, LS, MLS, MS, MCU, CU, BCU, ECU.",
            "Praktikkan gerakan Panning 90 derajat dan Tilting 45 derajat dengan kecepatan konstan.",
            "Terapkan aturan Headroom dan Looking Room pada subjek narasumber.",
          ],
          outputFormat: "Video kompilasi shot berdurasi 60 detik beserta lembar penilaian mandiri.",
        },
        journalQuestions: {
          q1: "Mengapa pengaturan White Balance harus diulang saat berpindah lokasi syuting?",
          q2: "Bagaimana cara Anda menjaga kestabilan framing saat melakukan zoom in jarak jauh?",
          q3: "Apa pentingnya komunikasi verbal yang ringkas dan jelas via intercom bagi seorang kameramen?",
        },
      },

      // =========================================================================
      // KONTEN 4: Peralatan pendukung kamera (camera support)
      // =========================================================================
      {
        id: "f4-k4",
        order: 4,
        title: "4. Peralatan pendukung kamera (camera support)",
        shortTitle: "Camera Support",
        summary: "Identifikasi jenis dan fungsi peralatan penopang kamera (tripod fluid head, pedestal studio hidrolik/pneumatik, dolly track, jib crane, dan gimbal stabilizer) serta pengoperasian aman sesuai SOP K3LH.",
        kompetensi: ["1. Mengidentifikasi", "2. Mengoperasikan"],
        tujuanPembelajaran: [
          "Peserta didik mampu mengidentifikasi jenis camera support (tripod, dolly, jib, gimbal).",
          "Peserta didik mampu mengoperasikan camera support secara aman dan tepat.",
        ],
        hookQuestion: "Kamera studio dengan teleprompter, viewfinder, dan kabel tebal bisa berbobot lebih dari 25 kg. Bagaimana mungkin seorang juru kamera bisa menaik-turunkan kamera sehalus sutra hanya dengan satu jari?",
        hookContext: "Sistem penopang kamera (camera support) seperti Pedestal studio pneumatik dan fluid head dirancang dengan mekanisme counterweight dan drag balancing presisi untuk menjamin keselamatan alat berat dan kehalusan siaran.",
        pretestQuestions: [
          {
            id: 401,
            bloom: "C2",
            stem: "Kepala penyangga tripod yang menggunakan cairan pelumas khusus untuk meredam hentakan sehingga gerakan pan dan tilt berjalan sangat halus disebut...",
            options: [
              { key: "A", text: "Ball Head Foto Biasa" },
              { key: "B", text: "Fluid Head Video" },
              { key: "C", text: "Rigid Head" },
              { key: "D", text: "Screw Mount" },
            ],
            correctKey: "B",
            explanation: "Fluid Head video memiliki ruang oli hidrolik peredam hentakan yang dirancang khusus untuk pergerakan video broadcast yang halus.",
          },
          {
            id: 402,
            bloom: "C2",
            stem: "Penyangga kamera studio berbasis kolom pneumatik hidrolik beroda tiga dengan kemudi kemudi (steering ring) disebut...",
            options: [
              { key: "A", text: "Monopod" },
              { key: "B", text: "Studio Pedestal" },
              { key: "C", text: "Selfie Stick" },
              { key: "D", text: "Gorillapod" },
            ],
            correctKey: "B",
            explanation: "Studio Pedestal adalah standar wajib studio TV yang memungkinkan kamera bergerak naik-turun dan berpindah posisi di lantai studio dengan sangat mulus.",
          },
          {
            id: 403,
            bloom: "C2",
            stem: "Alat pengaman pada lempeng dudukan kamera (Quick Release Plate) yang mencegah kamera meluncur jatuh saat pengunci utama terlepas disebut...",
            options: [
              { key: "A", text: "Safety Lock Pin" },
              { key: "B", text: "Tilt Lock" },
              { key: "C", text: "Bubble Level" },
              { key: "D", text: "Pan Handle" },
            ],
            correctKey: "A",
            explanation: "Safety lock pin menahan plat quick release agar tidak tergelincir keluar dari clamp dudukan kamera secara tidak sengaja.",
          },
        ],
        materialCards: [
          {
            title: "1. Urgensi & Fungsi Vital Camera Support dalam Penyiaran",
            content: "Kamera siaran televisi studio dengan teleprompter, lensa servo berat, viewfinder 7 inci, dan kabel hybrid fiber optic memiliki bobot total 15 hingga 35 kg. Camera Support (alat penopang kamera) mutlak diperlukan untuk: 1. Meniadakan getaran tangan manusia. 2. Memastikan horizon kamera rata air sempurna. 3. Memungkinkan pergerakan shot dramatis yang halus dan presisi selama berjam-jam siaran.",
            didYouKnow: "Mata manusia sangat sensitif terhadap getaran mikro vertikal; guncangan kamera sekecil 1 milimeter saat zoom in penuh akan terlihat seperti gempa bumi di layar TV penonton.",
          },
          {
            title: "2. Klasifikasi Instrumen Camera Support Broadcast",
            content: "Peralatan penopang kamera terbagi menurut mobilitas dan fungsi adegan: 1. Tripod Fluid Head (stabilitas statis dan panning halus). 2. Studio Pedestal (elevasi vertikal naik-turun dan jelajah lantai studio). 3. Camera Dolly & Track (gerakan meluncur mulus mengikuti pergerakan aktor). 4. Jib Arm / Camera Crane (sapuan dramatis dari sudut tinggi/aerial). 5. Gimbal & Steadicam (stabilizer dinamis kamera bergerak).",
          },
          {
            title: "3. Anatomi Tripod Heavy Duty Broadcast & Spreader",
            content: "Tripod broadcast dirancang dengan mangkuk leveling (bowl interface ukuran 75mm, 100mm, atau 150mm), kaki tabung ganda berbahan serat karbon (carbon fiber) atau aluminium penerbangan. Dilengkapi 'Spreader' pengunci rentang kaki: Ground Spreader (untuk lantai rata studio) atau Mid-level Spreader (untuk medan outdoor berundak dan berbatu).",
          },
          {
            title: "4. Mekanisme Fluid Head & Fluid Drag System",
            content: "Fluid Head menggunakan bilah logam bertingkat yang terendam dalam cairan silikon berdensitas tinggi (viscous fluid). Hambatan gesekan cairan ini (Fluid Drag) dapat diatur dalam beberapa tingkatan (1 hingga 7) untuk sumbu horizontal (Pan Drag) dan sumbu vertikal (Tilt Drag), memastikan gerakan kamera dimulai dan diakhiri tanpa hentakan (feathering stop).",
          },
          {
            title: "5. Kalibrasi Keseimbangan Dinamis (Counterbalance System)",
            content: "Counterbalance adalah sistem pegas torsi internal pada fluid head yang melawan gravitasi beban kamera saat menunduk atau mendongak. Cara pengujian: arahkan kamera tilt 45 derajat ke depan, lalu lepaskan tangan Anda. Kamera yang terkalibrasi sempurna akan tetap diam mengambang di posisinya tanpa terjungkal ke depan maupun membal ke belakang.",
            caseStudy: "Counterbalance yang salah diatur memaksa juru kamera terus menerus menahan beban kamera dengan otot pergelangan tangan, memicu kelelahan ekstrem dan gambar bergetar.",
          },
          {
            title: "6. Quick Release Plate & Sistem Pengaman Ganda",
            content: "Kamera dipasang ke fluid head menggunakan lempeng geser cepat (Quick Release Plate atau Touch & Go Wedge Plate). Dilengkapi dua lapis pengaman: 1. Tuas pengencang geser (Clamping Lever). 2. Tombol Pin Pengaman (Safety Lock Pin) mekanik yang wajib ditekan manual saat kamera dilepaskan, mencegah kamera meluncur jatuh jika tuas penjepit tidak sengaja tersenggol.",
          },
          {
            title: "7. Anatomi & Prinsip Fisika Studio Pedestal Pneumatik",
            content: "Studio Pedestal menggunakan kolom teleskopik silinder gas nitrogen bertekanan tinggi (biasanya 15-25 bar/PSI). Tekanan gas ini menyeimbangkan persis bobot kamera studio, sehingga juru kamera dapat menaikkan atau menurunkan kamera setinggi 1 meter ke atas maupun ke bawah hanya dengan dorongan ujung satu jari tangan.",
            didYouKnow: "Pedestal studio profesional dilengkapi katup pengaman tekanan gas otomatis dan pompa manual jika bobot rig kamera bertambah (misalnya saat teleprompter prompter glass dipasang).",
          },
          {
            title: "8. Kemudi Pedestal: Mode Crab Steering vs Steer Mode",
            content: "Pedestal beroda tiga digerakkan menggunakan roda kemudi lingkar besar (steering ring). Memiliki dua mode kemudi: 1. Steer Mode (hanya satu roda depan yang berbelok seperti mobil untuk bermanuver memutar). 2. Crab Mode (ketiga roda berbelok bersamaan ke arah yang sama, memungkinkan kamera bergeser miring melintang tanpa mengubah sudut hadap shot).",
          },
          {
            title: "9. Asesoris Keamanan Pedestal: Cable Guard & Foot Brake",
            content: "Setiap roda pedestal studio dilengkapi 'Cable Guard' (sepatu karet melingkar penepis kabel). Jarak cable guard ke lantai diatur hanya 2-3 milimeter. Fungsinya menepis kabel kamera dan kabel lampu studio yang melintang di lantai agar tidak terlindas roda pedestal yang sedang berjalan on-air.",
          },
          {
            title: "10. Camera Dolly & Track System di Lokasi Produksi",
            content: "Dolly adalah platform beroda karet lunak yang meluncur di atas rel (track) lurus atau melengkung. Dioperasikan oleh Dolly Grip profesional. Digunakan untuk tembakan kamera mendekat (Dolly In), menjauh (Dolly Out), atau menyamping (Tracking Shot) sejajar dengan aktor yang sedang berjalan tanpa sedikit pun goncangan.",
          },
          {
            title: "11. Jib Arm & Camera Crane: Gerakan Vertikal Spektakuler",
            content: "Jib Arm adalah lengan penopang panjang dengan prinsip tuas mekanik (lever arm) yang bertumpu pada titik fulcrum. Bagian depan menahan kamera dengan remote head motorik (diatur via joystick), sedangkan bagian belakang diisi beban barbel penyeimbang (counterweight). Memungkinkan pergerakan kamera menyapu dari lantai hingga ketinggian 5-10 meter di udara.",
            caseStudy: "Dalam siaran langsung konser musik, Jib Arm menghasilkan opening shot megah yang memperlihatkan antusiasme ribuan penonton dari atas panggung.",
          },
          {
            title: "12. Monopod & Shoulder Rig: Mobilitas Berita Cepat (ENG)",
            content: "Untuk liputan berita cepat lapangan (Electronic News Gathering / ENG) atau dokumenter perang/bencana alam di mana tripod tidak memungkinkan: Monopod memberikan stabilitas vertikal instan di ruang sempit. Shoulder Rig mendistribusikan beban kamera ke pundak dan dada juru kamera dengan pegangan tangan ganda ergonomis.",
          },
          {
            title: "13. Electronic 3-Axis Gimbal Stabilizer (Motor Brushless)",
            content: "Gimbal elektronik menggunakan sensor giroskop (IMU) dan 3 motor brushless untuk mengoreksi guncangan pada 3 sumbu: Pan (yaw), Tilt (pitch), dan Roll. Mode operasional: Pan Follow (kamera mengikuti arah belokan horizontal), Lock Mode (arah lensa terkunci ke satu titik), dan FPV Mode (kamera mengikuti kemiringan dinamis).",
          },
          {
            title: "14. Steadicam System: Isolasi Inersia & Drop Time Balance",
            content: "Steadicam mengisolasi guncangan langkah kaki juru kamera menggunakan rompi tubuh (vest), lengan pegas berartikulasi (iso-elastic arm), dan tiang penyeimbang bawah (sled). Parameter kalibrasi kritis adalah 'Drop Time' (waktu yang dibutuhkan sled berayun dari posisi horizontal ke vertikal), dengan nilai ideal 2 hingga 3 detik.",
            didYouKnow: "Steadicam pertama kali diciptakan oleh Garrett Brown pada tahun 1975 dan langsung merevolusi sinematografi pada film legendaris Rocky dan The Shining.",
          },
          {
            title: "15. Slider Kamera: Gerakan Geser Presisi untuk Iklan & B-Roll",
            content: "Slider kamera terdiri dari rel presisi dengan bantalan peluru (ball bearings) tempat dudukan kamera meluncur. Digunakan untuk shot pendek berjarak 60-120 cm. Model motorized slider dilengkapi motor servo digital dengan kendali kecepatan konsisten untuk kebutuhan macro food shot, produk iklan, dan visual time-lapse.",
          },
          {
            title: "16. SOP Pemasangan & Pembongkaran (Rig-up / Tear-down) Aman",
            content: "SOP instalasi: 1. Rentangkan kaki tripod dan kunci erat spreader sebelum menaruh head. 2. Periksa bubble level hingga gelembung berada tepat di dalam lingkaran hitam tengah. 3. Pasang pan handle dan kencangkan tilt lock. 4. Pasang kamera dengan kedua tangan menopang hingga terdengar bunyi 'klik' pin pengunci wedge plate.",
          },
          {
            title: "17. Standar Keselamatan Kerja Fisik (K3LH) Penopang Kamera",
            content: "1. DILARANG meninggalkan kamera di atas tripod tanpa mengunci tuas Tilt Lock dan Pan Lock. 2. Pasang barikade pembatas dan tugaskan kru spotter di bawah jangkauan swing Jib Arm di area berpenonton. 3. Pastikan pin pengaman besi (safety cotter pin) terpasang di ujung palang barbel counterweight Jib Arm.",
          },
          {
            title: "18. Pro-Tips Praktisi: Menjaga Kemudi Pedestal di Siaran Langsung",
            content: "Saat memindahkan pedestal saat siaran live: 1. Selalu dorong steering ring menggunakan telapak tangan terbuka, jangan mencengkeram kaku. 2. Arahkan pandangan mata ke lantai 2 meter di depan roda untuk memantau kabel atau properti panggung. 3. Gunakan dorongan dari tumpuan pinggul dan lutut, bukan dorongan mendadak pergelangan tangan.",
          },
          {
            title: "19. Troubleshooting Lapangan: Fluid Head Macet & Kehilangan Tekanan",
            content: "Jika putaran pan terasa bergetar (jerky): periksa apakah cairan silikon telah mengering akibat usia pakai atau suhu dingin ekstrem; kendurkan drag knob dan putar bolak-balik 360 derajat untuk mendistribusikan pelumas. Jika kolom pedestal amblas turun: periksa manometer tekanan gas nitrogen, dan isi ulang gas nitrogen murni menggunakan adaptor regulator bertekanan.",
          },
          {
            title: "20. Rangkuman Camera Support, Matriks Kebutuhan & Checklist Safety",
            content: "Kaidah emas penopang kamera: 1. Sesuaikan alat dengan kebutuhan adegan (Pedestal untuk studio siaran, Tripod untuk wawancara statis, Jib untuk kemegahan, Gimbal untuk aksi dinamis). 2. Jangan pernah melebihi kapasitas beban maksimal (payload limit). 3. Kunci pengaman ganda adalah jaminan keselamatan investasi kamera ratusan juta rupiah.",
            didYouKnow: "Kerusakan lensa dan sensor akibat kamera terjatuh dari tripod yang spreader-nya tidak terkunci adalah klaim asuransi paling umum di industri pertelevisian dunia.",
          },
        ],
        video: {
          title: "Camera Support Systems: Tripods, Studio Pedestals, Cranes and Gimbals",
          embedUrl: "https://www.youtube.com/embed/8A8zI1lKq4w",
          guide: "Amati cara teknisi memasang kamera ke quick release plate, menguji dynamic balance fluid head, dan mengoperasikan mode kemudi studio pedestal.",
        },
        gamePairs: [
          { id: 1, left: "Studio Pedestal", right: "Penyangga tabung pneumatik beroda tiga untuk pergerakan vertikal halus" },
          { id: 2, left: "Fluid Head", right: "Kepala penyangga berisi cairan peredam hentakan pan dan tilt" },
          { id: 3, left: "Jib Arm / Crane", right: "Lengan penopang panjang berpemberat untuk sapuan sudut tinggi" },
          { id: 4, left: "Bubble Level", right: "Indikator gelembung udara untuk memastikan posisi kamera rata air (horizontal)" },
        ],
        caseTitle: "Prosedur Keamanan K3LH Pengoperasian Jib Arm di Studio Berpenonton",
        caseScenario: "Dalam siaran langsung konser musik dengan 200 penonton di lantai studio, juru Jib Arm harus bermanuver rendah di atas kerumunan penonton untuk mengambil shot dramatis penonton bersorak.",
        caseInstruction: "Sebutkan protokol K3LH yang wajib dipatuhi kru Jib Arm terkait batas ketinggian aman, penugasan spotter (kru pemandu di bawah), dan penguncian beban penyeimbang (counterweight)!",
        sampleQuestions: [
          {
            id: 411,
            bloom: "C2",
            stem: "Indikator gelembung cairan pada tripod yang berfungsi memastikan horizon kamera rata dan tidak miring disebut...",
            options: [
              { key: "A", text: "Bubble Level (Spirit Level)" },
              { key: "B", text: "Pressure Meter" },
              { key: "C", text: "Hydraulic Gauge" },
              { key: "D", text: "Speedometer" },
            ],
            correctKey: "A",
            explanation: "Bubble level memastikan kamera bertumpu rata secara horisontal sehingga saat di-panning, garis cakrawala tidak miring.",
          },
          {
            id: 412,
            bloom: "C3",
            stem: "Sebelum memasang kamera studio seberat 20 kg ke atas fluid head tripod, tindakan pengamanan pertama yang wajib dilakukan juru kamera adalah...",
            options: [
              { key: "A", text: "Mengencangkan kunci pan lock dan tilt lock pada fluid head" },
              { key: "B", text: "Melepas kaki tripod" },
              { key: "C", text: "Menyalakan kamera terlebih dahulu" },
              { key: "D", text: "Memutar panning handle secepat mungkin" },
            ],
            correctKey: "A",
            explanation: "Mengunci pan lock dan tilt lock mencegah kepala tripod terjungkal mendadak akibat beban kamera yang belum seimbang.",
          },
          {
            id: 413,
            bloom: "C4",
            stem: "Jika saat kamera ditilt 30 derajat ke depan lalu tangan dilepas kamera langsung terjungkal ke bawah, hal ini menandakan bahwa...",
            options: [
              { key: "A", text: "Kamera terlalu ringan" },
              { key: "B", text: "Pengaturan Counterbalance terlalu lemah atau posisi plat quick release terlalu maju" },
              { key: "C", text: "Baterai kamera habis" },
              { key: "D", text: "Lampu studio terlalu terang" },
            ],
            correctKey: "B",
            explanation: "Kamera terjungkal ke depan berarti titik berat berada di depan atau counterbalance spring belum cukup kuat mengimbangi beban kamera.",
          },
          {
            id: 414,
            bloom: "C5",
            stem: "Fungsi utama dari Cable Guards (pelindung karet bulat) pada roda studio pedestal televisi adalah...",
            options: [
              { key: "A", text: "Sebagai hiasan roda" },
              { key: "B", text: "Mencegah roda pedestal melindas dan merusak kabel kamera atau kabel listrik yang menjalar di lantai studio" },
              { key: "C", text: "Mempercepat laju dorongan pedestal" },
              { key: "D", text: "Menahan air banjir di studio" },
            ],
            correctKey: "B",
            explanation: "Cable guard menyapu kabel di lantai ke samping sehingga roda tidak tersangkut atau memutus kabel siaran.",
          },
          {
            id: 415,
            bloom: "C6",
            stem: "Analisis prosedur mitigasi kecelakaan saat pengoperasian Jib Arm crane di ruang studio mengharuskan adanya kru 'Spotter' yang bertugas...",
            options: [
              { key: "A", text: "Membelikan konsumsi kru" },
              { key: "B", text: "Mengawasi lintasan ayunan fisik lengan crane dan memberi peringatan agar tidak menabrak lampu grid, dinding, atau kepala penonton" },
              { key: "C", text: "Mencatat nama seluruh penonton studio" },
              { key: "D", text: "Menyanyi bersama penonton" },
            ],
            correctKey: "B",
            explanation: "Spotter bertindak sebagai 'mata kedua' bagi operator crane yang fokus melihat monitor, menjamin tidak terjadi tabrakan mekanik.",
          },
        ],
        lkpd: {
          title: "LKPD 4: Kalibrasi Leveling & Counterbalance Tripod Fluid Head",
          objective: "Peserta didik mampu melakukan pemasangan kamera pada tripod, penyesuaian bubble level, dan pengujian lepas tangan counterbalance 45 derajat secara tepat dan aman.",
          tools: ["Kamera Broadcast / Video Rig", "Tripod Fluid Head Profesional", "Quick Release Plate", "Bubble Level"],
          steps: [
            "Bentangkan kaki tripod dan kunci spreader dengan kokoh.",
            "Setel gelembung udara bubble level hingga tepat berada di lingkaran tengah.",
            "Pasang quick release plate di titik pusat gravitasi kamera dan pasang ke head hingga safety lock berbunyi klik.",
            "Uji counterbalance tilt 45 derajat ke depan dan ke belakang tanpa tangan memegang handle.",
          ],
          outputFormat: "Foto verifikasi bubble level dan video uji counterbalance lepas tangan.",
        },
        journalQuestions: {
          q1: "Mengapa uji lepas tangan (hands-off tilt test) wajib dilakukan sebelum mengoperasikan fluid head?",
          q2: "Kapan Anda memilih menggunakan Studio Pedestal dibandingkan Tripod biasa?",
          q3: "Jelaskan risiko bahaya jika safety pin pada dudukan kamera diabaikan!",
        },
      },
    ];
