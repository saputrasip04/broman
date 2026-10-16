<?php
/**
 * BroMan — XAMPP Apache Gateway & Reverse Router
 * Terintegrasi untuk: Media Pembelajaran Broadcasting & Perfilman SMK
 */

// 1. Cek status Next.js di port 3000
$next_host = '127.0.0.1';
$next_port = 3000;
$is_nextjs_running = false;

$socket = @fsockopen($next_host, $next_port, $errno, $errstr, 0.5);
if ($socket) {
    $is_nextjs_running = true;
    fclose($socket);
}

// 2. Cek status MySQL XAMPP
$mysql_connected = false;
$table_count = 0;
$mysql_error = '';

try {
    $mysqli = @new mysqli("127.0.0.1", "root", "", "broman_db", 3306);
    if (!$mysqli->connect_error) {
        $mysql_connected = true;
        $res = $mysqli->query("SELECT count(*) as total FROM information_schema.tables WHERE table_schema = 'broman_db'");
        if ($res && $row = $res->fetch_assoc()) {
            $table_count = (int)$row['total'];
        }
        $mysqli->close();
    } else {
        $mysql_error = $mysqli->connect_error;
    }
} catch (Exception $e) {
    $mysql_error = $e->getMessage();
}

// Jika Next.js sedang berjalan dan bukan mode portal (?gateway=1), alihkan langsung ke aplikasi
$force_gateway = isset($_GET['gateway']) && $_GET['gateway'] == '1';
if ($is_nextjs_running && !$force_gateway) {
    header("Location: /broman");
    exit;
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BroMan — Portal Integrasi XAMPP</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-dark: #0a0e17;
      --card-bg: rgba(18, 24, 38, 0.75);
      --card-border: rgba(255, 255, 255, 0.08);
      --primary: #3b82f6;
      --primary-hover: #2563eb;
      --emerald: #10b981;
      --amber: #f59e0b;
      --rose: #f43f5e;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    body {
      background: radial-gradient(circle at 50% 0%, #1e293b 0%, var(--bg-dark) 70%);
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .container {
      width: 100%;
      max-width: 720px;
      background: var(--card-bg);
      backdrop-filter: blur(16px);
      border: 1px solid var(--card-border);
      border-radius: 24px;
      padding: 36px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(59, 130, 246, 0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 32px;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      background: rgba(59, 130, 246, 0.15);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 9999px;
      color: #93c5fd;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.5px;
      margin-bottom: 14px;
    }
    h1 {
      font-size: 28px;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin-bottom: 8px;
      background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p.subtitle {
      color: var(--text-muted);
      font-size: 14px;
      line-height: 1.5;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 28px;
    }
    .card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 18px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .card-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .status-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .status-active {
      background: var(--emerald);
      box-shadow: 0 0 10px var(--emerald);
    }
    .status-warning {
      background: var(--amber);
      box-shadow: 0 0 10px var(--amber);
    }
    .status-danger {
      background: var(--rose);
      box-shadow: 0 0 10px var(--rose);
    }
    .card-val {
      font-size: 18px;
      font-weight: 700;
    }
    .card-desc {
      font-size: 12px;
      color: var(--text-muted);
    }
    .action-box {
      background: rgba(59, 130, 246, 0.08);
      border: 1px dashed rgba(59, 130, 246, 0.3);
      border-radius: 16px;
      padding: 20px;
      margin-bottom: 24px;
      text-align: center;
    }
    .action-box h3 {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 8px;
      color: #bfdbfe;
    }
    .action-box p {
      font-size: 13px;
      color: var(--text-muted);
      margin-bottom: 16px;
    }
    .btn-group {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 22px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
      border: none;
    }
    .btn-primary {
      background: var(--primary);
      color: white;
      box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
    }
    .btn-primary:hover {
      background: var(--primary-hover);
      transform: translateY(-1px);
    }
    .btn-secondary {
      background: rgba(255, 255, 255, 0.08);
      color: var(--text-main);
      border: 1px solid var(--card-border);
    }
    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.12);
    }
    .code-block {
      background: #0f172a;
      border: 1px solid #1e293b;
      padding: 12px 16px;
      border-radius: 10px;
      font-family: monospace;
      font-size: 13px;
      color: #38bdf8;
      display: inline-block;
      margin-top: 10px;
      user-select: all;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #64748b;
      margin-top: 24px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">
        <span>🎬</span>
        <span>BRO-MAN INTEGRASI XAMPP</span>
      </div>
      <h1>Media Pembelajaran Broadcasting & Perfilman</h1>
      <p class="subtitle">
        Portal Gateway Lokal SMK — Kurikulum Merdeka Fase E & Fase F
      </p>
    </div>

    <div class="grid">
      <!-- Status Apache -->
      <div class="card">
        <div class="card-top">
          <span class="card-title">Apache Server</span>
          <span class="status-dot status-active" title="Aktif"></span>
        </div>
        <div class="card-val" style="color: #34d399;">Aktif</div>
        <div class="card-desc">Port 80 (F:\XAMPP\htdocs\broman)</div>
      </div>

      <!-- Status MySQL -->
      <div class="card">
        <div class="card-top">
          <span class="card-title">MySQL Database</span>
          <span class="status-dot <?php echo $mysql_connected ? 'status-active' : 'status-danger'; ?>"></span>
        </div>
        <div class="card-val" style="color: <?php echo $mysql_connected ? '#34d399' : '#f87171'; ?>;">
          <?php echo $mysql_connected ? 'Tersambung' : 'Mati'; ?>
        </div>
        <div class="card-desc">
          <?php echo $mysql_connected ? "broman_db ({$table_count} tabel)" : ($mysql_error ?: 'Port 3306 tidak aktif'); ?>
        </div>
      </div>

      <!-- Status Next.js -->
      <div class="card">
        <div class="card-top">
          <span class="card-title">Aplikasi BroMan</span>
          <span class="status-dot <?php echo $is_nextjs_running ? 'status-active' : 'status-warning'; ?>" id="next-dot"></span>
        </div>
        <div class="card-val" id="next-text" style="color: <?php echo $is_nextjs_running ? '#34d399' : '#fbbf24'; ?>;">
          <?php echo $is_nextjs_running ? 'Siap Diakses' : 'Standby / Belum Aktif'; ?>
        </div>
        <div class="card-desc">Port 3000 (Next.js 16)</div>
      </div>
    </div>

    <?php if ($is_nextjs_running): ?>
      <div class="action-box" style="background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.3);">
        <h3 style="color: #a7f3d0;">✨ Aplikasi BroMan Siap Digunakan</h3>
        <p>Server aplikasi lokal telah aktif dan terhubung ke database XAMPP MySQL.</p>
        <div class="btn-group">
          <a href="/broman" class="btn btn-primary" style="background: #10b981;">
            🚀 Buka Aplikasi BroMan
          </a>
          <a href="http://localhost/phpmyadmin/index.php?route=/database/structure&db=broman_db" target="_blank" class="btn btn-secondary">
            🗄️ Buka Database phpMyAdmin
          </a>
        </div>
      </div>
    <?php else: ?>
      <div class="action-box">
        <h3>🚀 Memulai Server Aplikasi BroMan</h3>
        <p>Jalankan server aplikasi BroMan dengan klik ganda berkas berikut di folder proyek atau lewat terminal:</p>
        <div class="code-block">F:\APPPSPT\BroMan\buka-broman.bat</div>
        <div style="margin-top: 18px;" class="btn-group">
          <a href="/broman?check=1" class="btn btn-primary" onclick="location.reload(); return false;">
            🔄 Cek Ulang Status Server
          </a>
          <a href="http://localhost/phpmyadmin/index.php?route=/database/structure&db=broman_db" target="_blank" class="btn btn-secondary">
            🗄️ Kelola Tabel (phpMyAdmin)
          </a>
        </div>
      </div>
    <?php endif; ?>

    <div class="footer">
      BroMan v1.0 • Terkonfigurasi di XAMPP MySQL (<code>127.0.0.1:3306/broman_db</code>) & Apache (<code>F:\XAMPP\htdocs\broman</code>)
    </div>
  </div>

  <script>
    // Deteksi otomatis jika Next.js dinyalakan di latar belakang
    let isChecking = false;
    async function checkServer() {
      if (isChecking) return;
      isChecking = true;
      try {
        const res = await fetch('/broman/api/health', { mode: 'cors' });
        if (res.ok) {
          document.getElementById('next-dot').className = 'status-dot status-active';
          document.getElementById('next-text').textContent = 'Mengalihkan...';
          document.getElementById('next-text').style.color = '#34d399';
          window.location.href = '/broman';
        }
      } catch (e) {
        // Next.js belum aktif
      } finally {
        isChecking = false;
      }
    }
    // Cek setiap 3 detik
    setInterval(checkServer, 3000);
  </script>
</body>
</html>
