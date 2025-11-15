@echo off
REM run-seed-windows.bat
REM Starts mongod (if found at default path) in a new window and runs the project's seed script.
REM Edit the MONGOD_PATH variable below if your mongod.exe is installed elsewhere.

SETLOCAL
set "MONGOD_PATH=C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe"
set "DB_PATH=D:\data\db"

echo Project root (this script is in scripts): %~dp0\..

if not exist "%DB_PATH%" (
  echo Creating DB folder %DB_PATH%
  mkdir "%DB_PATH%"
)

if exist "%MONGOD_PATH%" (
  echo Starting mongod from %MONGOD_PATH% with dbpath %DB_PATH%
  start "mongod" "%MONGOD_PATH%" --dbpath "%DB_PATH%"
  timeout /t 3 /nobreak >nul
) else (
  echo ERROR: mongod.exe not found at %MONGOD_PATH%
  echo Edit this file and set MONGOD_PATH to your mongod.exe location, or run mongod manually.
  pause
  exit /b 1
)

REM change to project root and run the seed
cd /d "%~dp0\.."
echo Running: npm run seed:db
npm run seed:db

echo Done. If the seed inserted users, open MongoDB Compass and refresh the connection.
pause
ENDLOCAL
