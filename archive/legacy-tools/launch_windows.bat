@echo off
cd /d %~dp0
python launch_bitgods.py
if errorlevel 1 py launch_bitgods.py
pause
