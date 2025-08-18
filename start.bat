@echo off
echo Starting SupportHub development server...
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo ERROR: Dependencies not installed!
    echo Please run install.bat first to install dependencies.
    pause
    exit /b 1
)

REM Check if package.json exists
if not exist "package.json" (
    echo ERROR: package.json not found!
    echo Please ensure you're in the correct directory.
    pause
    exit /b 1
)

echo Starting development server...
echo The application will open at http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

npm run dev

pause



