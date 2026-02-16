# GitHub Repository Setup Instructions

## Step-by-Step Guide to Create and Push Your EventEase Project

### Step 1: Create a GitHub Repository

1. **Sign in to GitHub**
   - Go to [github.com](https://github.com) and sign in to your account

2. **Create a New Repository**
   - Click the "+" icon in the upper-right corner
   - Select "New repository"

3. **Repository Settings**
   - **Repository name**: `EventEase` (or `EventEase-Blazor` if the name is taken)
   - **Description**: "Blazor Event Management Application - Peer Graded Assignment"
   - **Visibility**: Select **Public** (required for peer review)
   - **DO NOT** initialize with README, .gitignore, or license (we'll add these)
   - Click "Create repository"

### Step 2: Initialize Git in Your Project

Open PowerShell or Command Prompt in your project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/EventEase.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Verify Your Repository

1. Go to your GitHub repository page
2. Verify that all files are uploaded
3. Copy the repository URL (it should look like: `https://github.com/YOUR_USERNAME/EventEase`)

### Step 4: Submit Your Project

Use the following information for your submission:

- **Project Title**: `EventEase - Blazor Event Management Application`
- **GitHub URL**: `https://github.com/YOUR_USERNAME/EventEase`
- **Summary**: Copy the "How Microsoft Copilot Assisted in Development" section from the README.md file

## Troubleshooting

### If you get authentication errors:
- Use GitHub Personal Access Token instead of password
- Or use GitHub Desktop application for easier setup

### If files are not showing:
- Make sure you've run `git add .` to stage all files
- Check that files are not in .gitignore

### If you need to update files later:
```bash
git add .
git commit -m "Update project files"
git push
```

## Important Notes

- Make sure your repository is **Public** so peers can review it
- Include all project files (components, pages, models, etc.)
- The README.md file contains your Copilot assistance summary
- Double-check that your repository URL is accessible before submitting
