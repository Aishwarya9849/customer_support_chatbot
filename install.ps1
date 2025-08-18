Write-Host "Installing SupportHub dependencies..." -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Node.js version: $nodeVersion" -ForegroundColor Cyan
    } else {
        throw "Node.js not found"
    }
} catch {
    Write-Host "ERROR: Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "After installation, run this script again." -ForegroundColor Yellow
    Read-Host "Press Enter to continue"
    exit 1
}

# Check if npm is available
try {
    $npmVersion = npm --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "npm version: $npmVersion" -ForegroundColor Cyan
    } else {
        throw "npm not found"
    }
} catch {
    Write-Host "ERROR: npm is not available!" -ForegroundColor Red
    Write-Host "Please ensure npm is properly installed with Node.js." -ForegroundColor Yellow
    Read-Host "Press Enter to continue"
    exit 1
}

Write-Host ""

Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "SUCCESS: Dependencies installed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "To start the development server, run:" -ForegroundColor Cyan
    Write-Host "  npm run dev" -ForegroundColor White
    Write-Host ""
    Write-Host "Then open http://localhost:3000 in your browser." -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "ERROR: Failed to install dependencies." -ForegroundColor Red
    Write-Host "Please check the error messages above." -ForegroundColor Yellow
}

Read-Host "Press Enter to continue"


