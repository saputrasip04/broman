<?php
/**
 * BroMan - Smart Offline Gateway & Auto-Starter
 * Media Pembelajaran Broadcasting & Perfilman SMK
 */

header("Content-Type: text/html; charset=UTF-8");
header("HTTP/1.1 503 Service Unavailable");
header("Retry-After: 2");

$lock_file = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'broman_autostart.lock';
$force_start = isset($_GET['start']) && $_GET['start'] === '1';

// 1. Cek apakah Next.js port 3000 sudah siap
$next_ready = false;
$socket = @fsockopen('127.0.0.1', 3000, $errno, $errstr, 0.25);
if ($socket) {
    $next_ready = true;
    fclose($socket);
    // Jika sudah aktif, langsung alihkan ke aplikasi
    header("HTTP/1.1 302 Found");
    header("Location: /broman");
    exit;
}

// 2. Cek status MySQL
$mysql_ready = false;
$mysql_socket = @fsockopen('127.0.0.1', 3306, $errno, $errstr, 0.2);
if ($mysql_socket) {
    $mysql_ready = true;
    fclose($mysql_socket);
}

// 3. Otomatis jalankan server jika belum aktif & belum ditrigger dalam 25 detik terakhir
$auto_started = false;
$now = time();
$should_trigger = $force_start || !file_exists($lock_file) || ($now - filemtime($lock_file)) > 25;

if ($should_trigger && file_exists("F:\\APPPSPT\\BroMan\\buka-broman.bat")) {
    @touch($lock_file);
    // Gunakan parameter --no-browser agar tidak membuka tab duplikat di peramban
    pclose(popen('start "" /min cmd /c "call F:\\APPPSPT\\BroMan\\buka-broman.bat --no-browser"', 'r'));
    $auto_started = true;
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BroMan - Menyiapkan Aplikasi</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-dark: #0a0e17;
      --card-bg: rgba(18, 24, 38, 0.85);
      --card-border: rgba(255, 255, 255, 0.08);
      --primary: #3b82f6;
      --primary-hover: #2563eb;
      --emerald: #10b981;
      --amber: #f59e0b;
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
      background: radial-gradient(circle at 50% 10%, #1e293b 0%, var(--bg-dark) 75%);
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .box {
      width: 100%;
      max-width: 580px;
      background: var(--card-bg);
      backdrop-filter: blur(24px);
      border: 1px solid var(--card-border);
      border-radius: 28px;
      padding: 40px 36px;
      text-align: center;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 50px rgba(59, 130, 246, 0.12);
      position: relative;
      overflow: hidden;
    }
    .box::before {
      content: '';
      position: absolute;
      top: 0;
      left: 10%;
      right: 10%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.5), transparent);
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 16px;
      background: rgba(59, 130, 246, 0.15);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 9999px;
      color: #93c5fd;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.5px;
      margin-bottom: 24px;
    }
    .spinner-wrapper {
      position: relative;
      width: 64px;
      height: 64px;
      margin: 0 auto 24px;
    }
    .spinner {
      width: 100%;
      height: 100%;
      border: 4px solid rgba(59, 130, 246, 0.2);
      border-top-color: #38bdf8;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    .spinner-icon {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    h1 {
      font-size: 24px;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin-bottom: 10px;
      color: #ffffff;
    }
    p.subtitle {
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 24px;
    }
    .status-panel {
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 16px 20px;
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      text-align: left;
    }
    .status-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
    }
    .status-label {
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .status-indicator {
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: 600;
    }
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .dot-green { background: #10b981; box-shadow: 0 0 8px #10b981; }
    .dot-amber { background: #f59e0b; box-shadow: 0 0 8px #f59e0b; animation: pulse 1.5s infinite; }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.85); }
    }
    .cmd {
      background: #0f172a;
      border: 1px solid #1e293b;
      padding: 10px 14px;
      border-radius: 10px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 12px;
      color: #38bdf8;
      display: inline-block;
      margin-bottom: 20px;
      user-select: all;
      word-break: break-all;
    }
    .btn-group {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 11px 20px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.2s ease;
      border: none;
    }
    .btn-primary {
      background: var(--primary);
      color: #fff;
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
    .note {
      margin-top: 18px;
      font-size: 12px;
      color: #64748b;
    }
  </style>
</head>
<body>
  <div class="box">
    <div class="badge">🎬 BROMAN SMK BCF</div>
    
    <div class="spinner-wrapper">
      <div class="spinner"></div>
      <div class="spinner-icon">⚡</div>
    </div>
    
    <h1 id="title-text">Menghubungkan ke Aplikasi BroMan...</h1>
    <p class="subtitle" id="desc-text">
      Server aplikasi lokal sedang diinisialisasi otomatis di latar belakang (port 3000). Halaman ini akan beralih langsung dalam beberapa saat.
    </p>

    <div class="status-panel">
      <div class="status-row">
        <span class="status-label"><span>🌐</span> Apache Web Gateway</span>
        <span class="status-indicator" style="color: #34d399;"><span class="dot dot-green"></span> Aktif (Port 80)</span>
      </div>
      <div class="status-row">
        <span class="status-label"><span>🗄️</span> Database MySQL XAMPP</span>
        <span class="status-indicator" style="color: <?= $mysql_ready ? '#34d399' : '#f59e0b' ?>;">
          <span class="dot <?= $mysql_ready ? 'dot-green' : 'dot-amber' ?>"></span>
          <?= $mysql_ready ? 'Aktif (Port 3306)' : 'Menghubungkan...' ?>
        </span>
      </div>
      <div class="status-row">
        <span class="status-label"><span>🚀</span> Server Aplikasi (Next.js)</span>
        <span class="status-indicator" id="status-next" style="color: #fbbf24;">
          <span class="dot dot-amber"></span> Menginisialisasi...
        </span>
      </div>
    </div>

    <div class="cmd">F:\APPPSPT\BroMan\buka-broman.bat</div>

    <div class="btn-group">
      <a href="/broman-offline.php?start=1" class="btn btn-primary">
        ⚡ Nyalakan Server Sekarang
      </a>
      <a href="/broman" class="btn btn-secondary" onclick="location.reload(); return false;">
        🔄 Muat Ulang Halaman
      </a>
    </div>

    <div class="note" id="timer-note">
      Mengecek ketersediaan server setiap 1.5 detik...
    </div>
  </div>

  <script>
    let elapsed = 0;
    let redirected = false;

    async function checkReady() {
      if (redirected) return;
      elapsed += 1.5;

      try {
        const res = await fetch('/broman/api/health', { cache: 'no-store' });
        if (res.ok) {
          redirected = true;
          document.getElementById('title-text').textContent = '✨ Server BroMan Siap!';
          document.getElementById('desc-text').textContent = 'Aplikasi berhasil diinisialisasi. Mengalihkan ke halaman utama BroMan sekarang...';
          document.getElementById('status-next').innerHTML = '<span class="dot dot-green"></span> Siap (Port 3000)';
          document.getElementById('status-next').style.color = '#34d399';
          setTimeout(() => {
            window.location.replace('/broman');
          }, 400);
          return;
        }
      } catch (e) {
        // Belum siap
      }

      if (elapsed >= 35 && !redirected) {
        document.getElementById('timer-note').innerHTML = 
          '⚠️ Server memerlukan waktu sedikit lebih lama. Klik tombol <b>Nyalakan Server Sekarang</b> di atas jika belum beralih.';
        document.getElementById('timer-note').style.color = '#f59e0b';
      }
    }

    // Polling setiap 1.5 detik
    setInterval(checkReady, 1500);
    // Jalankan pertama kali setelah 800ms
    setTimeout(checkReady, 800);
  </script>
</body>
</html>
