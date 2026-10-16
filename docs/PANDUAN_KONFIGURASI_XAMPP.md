# 🛠️ Panduan Konfigurasi & Integrasi BroMan ke XAMPP

Dokumen ini memuat arsitektur teknis, lokasi berkas konfigurasi, serta panduan operasional integrasi aplikasi **BroMan (Media Pembelajaran Broadcasting & Perfilman SMK)** ke dalam server lokal **XAMPP (Apache & MySQL)**.

---

## 1. Arsitektur Integrasi Sistem

Aplikasi BroMan beroperasi dalam model **Hybrid High-Performance Gateway**:

```
                  ┌────────────────────────────────────────┐
                  │    Peramban Web (Google Chrome)         │
                  │       http://localhost/broman          │
                  └───────────────────┬────────────────────┘
                                      │ Port 80 (HTTP)
                                      ▼
                  ┌────────────────────────────────────────┐
                  │          Apache XAMPP Server           │
                  │   (Reverse Proxy & mod_proxy_http)     │
                  └─────────┬────────────────────┬─────────┘
                            │                    │
    ProxyPass /broman/      │                    │ Fallback 503/502
    Port 3000 (Internal)    ▼                    ▼
┌─────────────────────────────────┐   ┌─────────────────────────────────┐
│     BroMan Next.js 16 Server    │   │  broman-offline.php (Auto-Start)│
│  (React 19, Turbopack, API SSR) │   │  (Memicu start server otomatis) │
└───────────────┬─────────────────┘   └─────────────────────────────────┘
                │
                │ Port 3306 (MySQL Protocol)
                ▼
┌───────────────────────────────────────────────────────────────────────┐
│                          MySQL XAMPP Server                           │
│                      Database: broman_db (31 Tabel)                   │
│          Dikelola via phpMyAdmin: http://localhost/phpmyadmin         │
└───────────────────────────────────────────────────────────────────────┘
```

---

## 2. Berkas-Berkas Konfigurasi XAMPP

Seluruh konfigurasi telah terpasang dan tersinkronisasi di sistem:

### A. Konfigurasi Basis Data MySQL (`.env.local`)
Tersimpan di [`f:\APPPSPT\BroMan\.env.local`](file:///f:/APPPSPT/BroMan/.env.local):
```env
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=broman_db
```

### B. Konfigurasi Apache Reverse Proxy (`httpd-proxy.conf`)
Tersimpan di [`F:\XAMPP\apache\conf\extra\httpd-proxy.conf`](file:///F:/XAMPP/apache/conf/extra/httpd-proxy.conf) dan di-include pada [`F:\XAMPP\apache\conf\httpd.conf`](file:///F:/XAMPP/apache/conf/httpd.conf):
- **Port 80 ke Port 3000**: Meneruskan seluruh rute `/broman/*` secara transparan.
- **WebSocket HMR**: Mendukung koneksi live development pada `/_next/webpack-hmr` dan `/_next/hmr`.
- **Fallback Otomatis**: Jika Next.js belum aktif, Apache menyajikan `broman-offline.php`.

### C. Portal Gateway & Script di `htdocs`
Folder [`F:\XAMPP\htdocs\broman\`](file:///F:/XAMPP/htdocs/broman):
- `index.php`: Portal pengecekan status MySQL & Next.js.
- `start-broman.bat`: Shortcut cepat menyalakan server.
- `hentikan-broman.bat`: Shortcut mematikan proses port 3000.
- `F:\XAMPP\htdocs\broman-offline.php`: Halaman antarmuka auto-starter saat server offline.

### D. Tautan Dashboard XAMPP
Tersimpan di `F:\XAMPP\htdocs\dashboard\index.html`:
- Menu navigasi **BroMan LMS** langsung tersedia di beranda XAMPP [`http://localhost/dashboard`](http://localhost/dashboard) bersanding dengan phpMyAdmin.

---

## 3. Alamat Akses di Browser

| Layanan | Alamat URL | Keterangan |
|---|---|---|
| **Aplikasi BroMan** | `http://localhost/broman` | Halaman utama media pembelajaran (Port 80) |
| **Aplikasi via index.php** | `http://localhost/broman/index.php` | Di-rewrite otomatis ke halaman utama |
| **Status API & Database** | `http://localhost/broman/api/health` | Status JSON koneksi MySQL dan tabel |
| **XAMPP Dashboard** | `http://localhost/dashboard` | Portal utama XAMPP lokal |
| **phpMyAdmin** | `http://localhost/phpmyadmin` | Panel manajemen database MySQL `broman_db` |

---

## 4. Cara Menjalankan Aplikasi

### Opsi 1: Otomatis via `buka-broman.bat` (Sangat Disarankan)
Cukup klik ganda berkas [`buka-broman.bat`](file:///f:/APPPSPT/BroMan/buka-broman.bat) di folder proyek:
1. Skrip akan memeriksa dan menyalakan MySQL XAMPP jika belum aktif.
2. Skrip akan memeriksa dan menyalakan Apache XAMPP jika belum aktif.
3. Skrip akan menjalankan server BroMan Next.js.
4. Peramban Chrome langsung terbuka ke `http://localhost/broman`.

### Opsi 2: Otomatis dari Browser (Zero-Click)
1. Nyalakan Apache dan MySQL di **XAMPP Control Panel**.
2. Buka peramban ke **`http://localhost/broman`**.
3. Jika server belum aktif, halaman pintar *BroMan Offline Gateway* akan otomatis memicu penyalaan server dan mengalihkan halaman dalam 2–3 detik begitu server siap.

---

## 5. Sinkronisasi Ulang Database & Konfigurasi

Jika Anda menginstal ulang XAMPP atau melakukan migrasi ke komputer sekolah lain:
1. Pastikan XAMPP terinstal di `F:\XAMPP` (atau sesuaikan path jika berbeda).
2. Jalankan berkas [`sinkron-xampp.bat`](file:///f:/APPPSPT/BroMan/sinkron-xampp.bat) dengan klik kanan -> **Run as Administrator**.
3. Skrip akan secara otomatis:
   - Membuat basis data `broman_db` dan mengimpor 31 tabel dari `database/broman_mysql_schema.sql`.
   - Menyalin berkas proxy `httpd-proxy.conf` ke folder Apache.
   - Menyalin berkas gateway ke folder `htdocs`.
