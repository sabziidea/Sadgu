@echo off
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  py open-flowly.py
) else (
  python open-flowly.py
)
pause
