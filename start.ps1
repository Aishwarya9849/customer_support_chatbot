Write-Host "Starting SupportHub development server..." -ForegroundColor Green
Write-Host ""

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "ERROR: Dependencies not installed!" -ForegroundColor Red
    Write-Host "Please run install.ps1 first to install dependencies." -ForegroundColor Yellow
    Read-Host "Press Enter to continue"
    exit 1
}

# Check if package.json exists
if (-not (Test-Path "package.json")) {
    Write-Host "ERROR: package.json not found!" -ForegroundColor Red
    Write-Host "Please ensure you're in the correct directory." -ForegroundColor Yellow
    Read-Host "Press Enter to continue"
    exit 1
}

Write-Host "Starting development server..." -ForegroundColor Yellow
Write-Host "The application will open at http://localhost:3000" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor White
Write-Host ""

npm run dev

Read-Host "Press Enter to continue"



