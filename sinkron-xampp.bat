@echo off
title Sinkronisasi BroMan dengan XAMPP
echo =======================================================================
echo   SINKRONISASI DATABASE ^& GATEWAY XAMPP - BROMAN SMK
echo =======================================================================
echo.

cd /d "f:\APPPSPT\BroMan"

:: 1. Cek keberadaan MySQL binary
if not exist "F:\XAMPP\mysql\bin\mysql.exe" (
    echo [ERROR] MySQL tidak ditemukan di F:\XAMPP\mysql\bin\mysql.exe
    echo Pastikan XAMPP terinstal di drive F:\XAMPP
    pause
    exit /b 1
)

echo 1. Memeriksa status MySQL XAMPP...
powershell -NoProfile -Command "Get-Process mysqld -ErrorAction SilentlyContinue" >nul 2>&1
if errorlevel 1 (
    echo [PERINGATAN] MySQL XAMPP belum menyala. Silakan start MySQL di XAMPP Control Panel.
    pause
    exit /b 1
)
echo    [OK] MySQL XAMPP sedang berjalan.

echo.
echo 2. Menjalankan migrasi database ke MySQL (database: broman_db)...
powershell -NoProfile -Command "Get-Content -Raw 'f:\APPPSPT\BroMan\database\broman_mysql_schema.sql' | & 'F:\XAMPP\mysql\bin\mysql.exe' -u root"
if errorlevel 1 (
    echo    [GAGAL] Terjadi kesalahan saat migrasi skema SQL.
    pause
    exit /b 1
)
echo    [OK] Skema tabel dan data seed berhasil diimpor ke broman_db.

echo.
echo 3. Memverifikasi tabel di broman_db...
"F:\XAMPP\mysql\bin\mysql.exe" -u root -e "SELECT count(*) as 'Total Tabel di broman_db' FROM information_schema.tables WHERE table_schema='broman_db'; SELECT count(*) as 'Total 12 Elemen' FROM broman_db.babs;"

echo.
echo 4. Menyinkronkan Gateway ^& Reverse Proxy Apache XAMPP ke http://localhost/broman...
powershell -NoProfile -Command "New-Item -ItemType Directory -Force -Path 'F:\XAMPP\htdocs\broman' | Out-Null; Copy-Item 'f:\APPPSPT\BroMan\public\xampp\index.php' 'F:\XAMPP\htdocs\broman\index.php' -Force; Copy-Item 'f:\APPPSPT\BroMan\public\xampp\broman-offline.php' 'F:\XAMPP\htdocs\broman-offline.php' -Force; Copy-Item 'f:\APPPSPT\BroMan\public\xampp\httpd-proxy.conf' 'F:\XAMPP\apache\conf\extra\httpd-proxy.conf' -Force; Set-Content 'F:\XAMPP\htdocs\broman\start-broman.bat' '@echo off`ncall \"f:\APPPSPT\BroMan\buka-broman.bat\"'"
echo    [OK] Gateway XAMPP, proxy config, dan fallback offline berhasil disinkronkan.

echo.
echo =======================================================================
echo   SINKRONISASI SELESAI DENGAN SUKSES!
echo =======================================================================
echo - URL Utama Aplikasi: http://localhost/broman
echo - phpMyAdmin:         http://localhost/phpmyadmin/index.php?route=/database/structure^&db=broman_db
echo =======================================================================
echo.
pause
