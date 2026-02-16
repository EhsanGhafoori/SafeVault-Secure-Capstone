# GitHub Repository Cleanup Guide - Paradise Nursery

## Current Situation
- Repository: https://github.com/EhsanGhafoori/paradise-nursery
- Status: Currently a fork of `ibm-developer-skills-network/mcino-Introduction-to-Git-and-GitHub`
- Goal: Remove fork status, delete all existing files, and upload Paradise Nursery project

---

## Step 1: Remove Fork Status (Must be done on GitHub Website)

**Option A: Detach Fork (Recommended - Keeps repository history)**
1. Go to https://github.com/EhsanGhafoori/paradise-nursery
2. Click on **Settings** tab (top right of repository page)
3. Scroll down to the **Danger Zone** section (at the bottom)
4. Click **"Detach fork"** or **"Delete fork relationship"**
5. Confirm the action

**Option B: Delete and Recreate Repository (Clean slate)**
1. Go to https://github.com/EhsanGhafoori/paradise-nursery
2. Click on **Settings** tab
3. Scroll to **Danger Zone** section
4. Click **"Delete this repository"**
5. Type the repository name to confirm
6. Create a new repository with the same name:
   - Go to https://github.com/new
   - Repository name: `paradise-nursery`
   - Make it **Public**
   - **DO NOT** initialize with README, .gitignore, or license

---

## Step 2: Delete All Existing Files (Using Git Commands)

Open PowerShell in your project directory and run:

```powershell
# Navigate to your project directory (where your Paradise Nursery files are)
cd "path\to\your\paradise-nursery-project"

# Initialize git if not already done
git init

# Add the remote repository
git remote add origin https://github.com/EhsanGhafoori/paradise-nursery.git

# If remote already exists, update it:
# git remote set-url origin https://github.com/EhsanGhafoori/paradise-nursery.git

# Fetch the existing repository
git fetch origin

# Checkout the main branch
git checkout -b main

# Remove all existing files from the repository (but keep them locally)
git rm -r --cached .

# Or if you want to force delete everything and start fresh:
# Create an orphan branch (no history)
git checkout --orphan new-main

# Remove all files from staging
git rm -rf .

# Now add your new Paradise Nursery project files
git add .

# Commit the new files
git commit -m "Initial commit - Paradise Nursery Shopping Cart Application"

# Force push to replace everything
git push -u origin new-main --force

# Then rename the branch on GitHub (or delete old main and rename new-main to main)
```

---

## Step 3: Alternative - Simple Force Push Method

If you have your Paradise Nursery project files ready in a local folder:

```powershell
# Navigate to your Paradise Nursery project folder
cd "path\to\your\paradise-nursery-project"

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Paradise Nursery Shopping Cart Application"

# Add remote (or update if exists)
git remote add origin https://github.com/EhsanGhafoori/paradise-nursery.git
# OR if remote exists:
# git remote set-url origin https://github.com/EhsanGhafoori/paradise-nursery.git

# Force push to replace everything (WARNING: This deletes all existing files)
git branch -M main
git push -u origin main --force
```

**⚠️ WARNING:** The `--force` flag will permanently delete all existing files in the repository. Make sure you have your Paradise Nursery project files ready before running this.

---

## Step 4: Verify Your Files Are Uploaded

1. Go to https://github.com/EhsanGhafoori/paradise-nursery
2. Verify that you see your Paradise Nursery project files:
   - `README.md`
   - `src/App.jsx`
   - `src/App.css`
   - `src/components/AboutUs.jsx`
   - `src/components/ProductList.jsx`
   - `src/components/CartItem.jsx`
   - `src/store/CartSlice.jsx`
   - And other project files

3. Click on each file to verify the URLs work correctly

---

## Step 5: Update Submission URLs

After uploading, verify all URLs in `PARADISE_NURSERY_SUBMISSION_URLS.md` are correct and accessible.

---

## Troubleshooting

### If you get authentication errors:
- Use GitHub Personal Access Token instead of password
- Or use GitHub Desktop application

### If fork status doesn't go away:
- You may need to contact GitHub support
- Or delete the repository and create a new one with the same name

### If files don't appear:
- Make sure you ran `git add .` before committing
- Check that files are not in `.gitignore`
- Verify you pushed to the correct branch (`main`)

---

## Important Notes

1. **Backup First**: Make sure you have a backup of your Paradise Nursery project files before force pushing
2. **Public Repository**: Ensure the repository is set to **Public** so graders can access it
3. **File Structure**: Make sure your files match the expected paths in the submission URLs
4. **Branch Name**: Use `main` branch (or adjust URLs if using `master`)
