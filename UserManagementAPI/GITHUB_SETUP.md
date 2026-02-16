# GitHub Repository Setup Instructions

## Step-by-Step Guide to Create and Push Your User Management API Project

### Step 1: Create a GitHub Repository

1. **Sign in to GitHub**
   - Go to [github.com](https://github.com) and sign in to your account

2. **Create a New Repository**
   - Click the "+" icon in the upper-right corner
   - Select "New repository"

3. **Repository Settings**
   - **Repository name**: `UserManagementAPI` (or `User-Management-API` if the name is taken)
   - **Description**: "RESTful API for User Management - Built with ASP.NET Core and Microsoft Copilot"
   - **Visibility**: Select **Public** (required for peer review)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

### Step 2: Initialize Git in Your Project

Open PowerShell or Command Prompt in your project directory and run:

```bash
# Navigate to your project directory
cd UserManagementAPI

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: User Management API with CRUD operations, validation, and middleware"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/UserManagementAPI.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Verify Your Repository

1. Go to your GitHub repository page
2. Verify that all files are uploaded
3. Copy the repository URL (it should look like: `https://github.com/YOUR_USERNAME/UserManagementAPI`)

### Step 4: Submit Your Project

Use the following information for your submission:

- **Project Title**: `User Management API - Building a Simple API with Copilot`
- **GitHub URL**: `https://github.com/YOUR_USERNAME/UserManagementAPI`
- **Summary**: Copy the "Brief Summary of How Copilot Assisted in Each Step" section from ASSIGNMENT_SUMMARY.md

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
- Include all project files (Controllers, Models, Services, Middleware, etc.)
- The README.md file contains your Copilot assistance summary
- Double-check that your repository URL is accessible before submitting

## Project Checklist

Before submitting, verify:
- ✅ GitHub repository created and public
- ✅ All CRUD endpoints implemented (GET, POST, PUT, DELETE)
- ✅ Data validation implemented
- ✅ Request logging middleware implemented
- ✅ Error handling middleware implemented
- ✅ README with Copilot assistance summary included
