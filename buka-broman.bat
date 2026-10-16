@echo off
title BroMan - Media Pembelajaran Broadcasting dan Perfilman SMK
color 0A

echo =======================================================================
echo    BROMAN - MEDIA PEMBELAJARAN BROADCASTING DAN PERFILMAN SMK
echo =======================================================================
echo.

cd /d "F:\APPPSPT\BroMan"

:: Parameter: --no-browser untuk inisialisasi background dari gateway PHP
set NO_BROWSER=0
if "%1"=="--no-browser" set NO_BROWSER=1

:: [1/3] Memeriksa layanan MySQL XAMPP
echo [1/3] Memeriksa layanan MySQL XAMPP...
netstat -ano | findstr :3306 >nul
if %errorlevel% equ 0 goto MYSQL_READY

echo Mengaktifkan MySQL XAMPP...
if exist "F:\XAMPP\mysql_start.bat" (
    start "" /min "F:\XAMPP\mysql_start.bat"
) else (
    start "" /B "F:\XAMPP\mysql\bin\mysqld.exe" --defaults-file="F:\XAMPP\mysql\bin\my.ini" --standalone
)

:: Tunggu hingga port 3306 aktif
set MYSQL_ATTEMPTS=0
:WAIT_MYSQL
set /a MYSQL_ATTEMPTS+=1
ping 127.0.0.1 -n 2 >nul
netstat -ano | findstr :3306 >nul
if %errorlevel% equ 0 goto MYSQL_READY
if %MYSQL_ATTEMPTS% lss 10 goto WAIT_MYSQL

:MYSQL_READY
echo [OK] MySQL XAMPP aktif di port 3306.

:: [2/3] Memeriksa layanan Apache XAMPP
echo [2/3] Memeriksa layanan Apache XAMPP...
netstat -ano | findstr :80 >nul
if %errorlevel% equ 0 goto APACHE_READY

echo Mengaktifkan Apache XAMPP...
if exist "F:\XAMPP\apache_start.bat" (
    start "" /min "F:\XAMPP\apache_start.bat"
) else (
    start "" /B "F:\XAMPP\apache\bin\httpd.exe"
)

:: Tunggu hingga port 80 aktif
set APACHE_ATTEMPTS=0
:WAIT_APACHE
set /a APACHE_ATTEMPTS+=1
ping 127.0.0.1 -n 2 >nul
netstat -ano | findstr :80 >nul
if %errorlevel% equ 0 goto APACHE_READY
if %APACHE_ATTEMPTS% lss 10 goto WAIT_APACHE

:APACHE_READY
echo [OK] Apache XAMPP aktif di port 80.

:: [3/3] Memeriksa status aplikasi BroMan
echo [3/3] Memeriksa status aplikasi BroMan...
curl.exe -s -o nul -w "%%{http_code}" http://127.0.0.1:3000/broman/api/health 2>nul | findstr "200" >nul
if %errorlevel% equ 0 goto WARMUP_APP

echo Memulai server BroMan (npm run dev)...
start "BroMan Next.js Server" /min cmd /c "cd /d F:\APPPSPT\BroMan && npm run dev"
echo Menunggu inisialisasi Next.js (maks. 35 detik)...

set ATTEMPTS=0
:WAIT_SERVER
set /a ATTEMPTS+=1
ping 127.0.0.1 -n 2 >nul
curl.exe -s -o nul -w "%%{http_code}" http://127.0.0.1:3000/broman/api/health 2>nul | findstr "200" >nul
if %errorlevel% equ 0 goto WARMUP_APP
if %ATTEMPTS% geq 35 (
    echo [PERINGATAN] Waktu inisialisasi lebih lama dari perkiraan.
    goto READY_TO_OPEN
)
goto WAIT_SERVER

:WARMUP_APP
echo Melakukan pra-kompilasi halaman utama BroMan...
curl.exe -s -o nul "http://127.0.0.1:3000/broman" 2>nul
echo [OK] Server BroMan siap dan terkompilasi!

:READY_TO_OPEN
echo.
echo =======================================================================
echo   Aplikasi BroMan siap digunakan!
echo   - Alamat Aplikasi: http://localhost/broman
echo   - phpMyAdmin:      http://localhost/phpmyadmin/index.php?route=/database/structure^&db=broman_db
echo =======================================================================
echo.

if %NO_BROWSER% equ 1 (
    echo Mode latar belakang: peramban tidak dibuka ulang.
    exit /b 0
)

echo Membuka peramban ke http://localhost/broman ...
start "" http://localhost/broman

ping 127.0.0.1 -n 2 >nul
exit /b 0
