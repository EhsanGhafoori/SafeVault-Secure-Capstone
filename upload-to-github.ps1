# GitHub Upload Script for e-plantShopping Project
# Run this script in PowerShell from the project directory

Write-Host "=== GitHub Upload Script ===" -ForegroundColor Green
Write-Host ""

# Check if git is installed
try {
    $gitVersion = git --version
    Write-Host "Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Git is not installed or not in PATH" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Step 1: Initializing git repository..." -ForegroundColor Yellow
git init

Write-Host ""
Write-Host "Step 2: Adding all files..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "Step 3: Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit - e-plantShopping project"

Write-Host ""
Write-Host "Step 4: Setting up remote repository..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin https://github.com/EhsanGhafoori/paradise-nursery.git

Write-Host ""
Write-Host "Step 5: Renaming branch to main..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "Step 6: Pushing to GitHub (this will replace all existing files)..." -ForegroundColor Yellow
Write-Host "WARNING: This will force push and replace everything in the repository!" -ForegroundColor Red
Write-Host ""
$confirm = Read-Host "Type 'yes' to continue, or anything else to cancel"
if ($confirm -ne "yes") {
    Write-Host "Upload cancelled." -ForegroundColor Yellow
    exit 0
}

git push -u origin main --force

Write-Host ""
Write-Host "=== Upload Complete! ===" -ForegroundColor Green
Write-Host ""
Write-Host "Please verify your files at:" -ForegroundColor Cyan
Write-Host "https://github.com/EhsanGhafoori/paradise-nursery" -ForegroundColor Cyan
Write-Host ""
Write-Host "Test these URLs:" -ForegroundColor Yellow
Write-Host "1. https://github.com/EhsanGhafoori/paradise-nursery/blob/main/README.md"
Write-Host "2. https://github.com/EhsanGhafoori/paradise-nursery/blob/main/src/components/AboutUs.jsx"
Write-Host "3. https://github.com/EhsanGhafoori/paradise-nursery/blob/main/src/App.css"
Write-Host "4. https://github.com/EhsanGhafoori/paradise-nursery/blob/main/src/App.jsx"
Write-Host "5. https://github.com/EhsanGhafoori/paradise-nursery/blob/main/src/store/CartSlice.jsx"
Write-Host "6. https://github.com/EhsanGhafoori/paradise-nursery/blob/main/src/components/ProductList.jsx"
Write-Host "7. https://github.com/EhsanGhafoori/paradise-nursery/blob/main/src/components/CartItem.jsx"
