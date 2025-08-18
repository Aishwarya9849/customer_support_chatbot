@echo off
echo Installing SupportHub dependencies...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    echo After installation, run this script again.
    pause
    exit /b 1
)

REM Check if npm is available
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not available!
    echo Please ensure npm is properly installed with Node.js.
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo npm version:
npm --version
echo.

echo Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo.
    echo SUCCESS: Dependencies installed successfully!
    echo.
    echo To start the development server, run:
    echo   npm run dev
    echo.
    echo Then open http://localhost:3000 in your browser.
) else (
    echo.
    echo ERROR: Failed to install dependencies.
    echo Please check the error messages above.
)

pause


