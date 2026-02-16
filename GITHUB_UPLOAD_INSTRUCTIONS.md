# GitHub Upload Instructions - URGENT

## ⚠️ CRITICAL: Files Must Be Uploaded to GitHub

The assignment grader cannot access your files because they haven't been uploaded to GitHub yet. Follow these steps IMMEDIATELY:

---

## Step 1: Remove Fork Status (Do This First!)

1. Go to: https://github.com/EhsanGhafoori/paradise-nursery/settings
2. Scroll down to **"Danger Zone"** section
3. Click **"Delete this repository"** (or "Detach fork" if available)
4. Confirm deletion
5. Create a NEW repository:
   - Go to: https://github.com/new
   - Repository name: `paradise-nursery`
   - Make it **PUBLIC**
   - **DO NOT** check "Add a README file"
   - Click "Create repository"

---

## Step 2: Upload All Files to GitHub

Open PowerShell in your project folder and run these commands:

```powershell
# Navigate to your project folder
cd "d:\Documents\Projects\Cursor_Chats\New folder (2)"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - e-plantShopping project"

# Add remote repository
git remote add origin https://github.com/EhsanGhafoori/paradise-nursery.git

# If remote already exists, update it:
# git remote set-url origin https://github.com/EhsanGhafoori/paradise-nursery.git

# Rename branch to main
git branch -M main

# Push to GitHub (FORCE PUSH to replace everything)
git push -u origin main --force
```

---

## Step 3: Verify Files Are on GitHub

1. Go to: https://github.com/EhsanGhafoori/paradise-nursery
2. Check that you can see:
   - ✅ README.md (with "e-plantShopping" project name)
   - ✅ src/App.jsx
   - ✅ src/App.css
   - ✅ src/components/AboutUs.jsx
   - ✅ src/components/ProductList.jsx
   - ✅ src/components/CartItem.jsx
   - ✅ src/store/CartSlice.jsx

3. Click on each file to verify they open correctly

---

## Step 4: Test URLs

Test each URL in your browser to make sure they work:

1. https://github.com/EhsanGhafoori/paradise-nursery/blob/main/README.md
2. https://github.com/EhsanGhafoori/paradise-nursery/blob/main/src/components/AboutUs.jsx
3. https://github.com/EhsanGhafoori/paradise-nursery/blob/main/src/App.css
4. https://github.com/EhsanGhafoori/paradise-nursery/blob/main/src/App.jsx
5. https://github.com/EhsanGhafoori/paradise-nursery/blob/main/src/store/CartSlice.jsx
6. https://github.com/EhsanGhafoori/paradise-nursery/blob/main/src/components/ProductList.jsx
7. https://github.com/EhsanGhafoori/paradise-nursery/blob/main/src/components/CartItem.jsx

---

## Troubleshooting

### If you get "fatal: not a git repository"
Run: `git init` first

### If you get authentication errors
- Use GitHub Personal Access Token instead of password
- Or use GitHub Desktop application

### If files don't appear after push
- Make sure repository is **PUBLIC**
- Check that you ran `git add .` before commit
- Verify you're on the `main` branch

### If you see old files from the fork
- Delete the repository completely
- Create a new one with the same name
- Force push again

---

## Important Notes

1. **Repository MUST be PUBLIC** - Private repos cannot be accessed by graders
2. **README.md MUST contain "e-plantShopping"** - This is now fixed in the README
3. **All files must be in the correct paths** - They are already in the right places
4. **Test URLs before resubmitting** - Make sure each URL opens the file

---

## After Uploading

Once all files are uploaded and URLs are verified, you can resubmit your assignment with the same URLs from `ASSIGNMENT_ANSWERS.md`.
