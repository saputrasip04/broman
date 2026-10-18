@echo off
title Hentikan Server BroMan
echo Menghentikan proses server BroMan di port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do (
    taskkill /F /PID %%a >nul 2>&1
)
echo [OK] Server BroMan dihentikan.
timeout /t 2 >nul
