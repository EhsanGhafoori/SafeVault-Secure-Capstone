# Deployment Guide for EventEase Blazor Application

This guide will help you deploy your Blazor WebAssembly application to a free hosting service so you can view it online.

## Option 1: Azure Static Web Apps (Recommended - Free)

Azure Static Web Apps offers free hosting with automatic deployments from GitHub.

### Steps:

1. **Go to Azure Portal**
   - Visit [portal.azure.com](https://portal.azure.com)
   - Sign in with your Microsoft account (or create one for free)

2. **Create Static Web App**
   - Click "Create a resource"
   - Search for "Static Web App"
   - Click "Create"

3. **Configure the App**
   - **Subscription**: Choose Free tier
   - **Resource Group**: Create new or use existing
   - **Name**: `eventease-blazor` (or your preferred name)
   - **Plan type**: Free
   - **Region**: Choose closest to you
   - **Source**: GitHub
   - **Sign in with GitHub**: Authorize Azure
   - **Organization**: Your GitHub username
   - **Repository**: `EventEase-Blazor`
   - **Branch**: `main`
   - **Build Presets**: Custom
   - **App location**: `/published/wwwroot`
   - **Api location**: (leave empty)
   - **Output location**: (leave empty)

4. **Deploy**
   - Click "Review + create"
   - Click "Create"
   - Azure will automatically create a GitHub Actions workflow
   - Your app will be available at: `https://eventease-blazor-XXXXX.azurestaticapps.net`

5. **Get Your URL**
   - After deployment (takes 2-3 minutes), go to your Static Web App in Azure Portal
   - Copy the URL from the "Overview" page

## Option 2: Netlify (Free)

### Steps:

1. **Build the Project Locally**
   ```bash
   cd temp_clone
   dotnet publish -c Release -o published
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login (free)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select `EventEase-Blazor` repository
   - **Build command**: `dotnet publish -c Release -o published && cp -r published/wwwroot/* ./dist`
   - **Publish directory**: `dist`
   - Click "Deploy site"
   - Your app will be available at: `https://eventease-blazor-XXXXX.netlify.app`

## Option 3: Vercel (Free)

### Steps:

1. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login (free)
   - Click "Add New Project"
   - Import your GitHub repository `EventEase-Blazor`
   - **Framework Preset**: Other
   - **Build Command**: `dotnet publish -c Release -o published && cp -r published/wwwroot/* ./dist`
   - **Output Directory**: `dist`
   - Click "Deploy"
   - Your app will be available at: `https://eventease-blazor-XXXXX.vercel.app`

## Option 4: GitHub Pages (Free but requires manual setup)

### Steps:

1. **Build the Project**
   ```bash
   cd temp_clone
   dotnet publish -c Release -o published
   ```

2. **Create gh-pages branch**
   ```bash
   git checkout -b gh-pages
   git add published/wwwroot/*
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save
   - Your app will be available at: `https://ehsanghafoori.github.io/EventEase-Blazor/`

## Quick Local Testing

If you want to test locally first:

```bash
cd temp_clone
dotnet restore
dotnet build
dotnet publish -c Release -o published
cd published/wwwroot
# Use any local web server, for example:
python -m http.server 8000
# Then open http://localhost:8000
```

## Important Notes

- **Base Path**: The app is configured with `<base href="/" />` which works for most hosting services
- **Routing**: All hosting services above support client-side routing with proper configuration
- **Build Time**: First deployment may take 3-5 minutes
- **Free Tier Limits**: All services above offer generous free tiers suitable for this project

## Recommended: Azure Static Web Apps

I recommend **Azure Static Web Apps** because:
- ✅ Completely free tier
- ✅ Automatic deployments from GitHub
- ✅ Custom domain support (free)
- ✅ Built-in CI/CD
- ✅ Perfect for Blazor WebAssembly

Your app will be live at a URL like: `https://eventease-blazor-XXXXX.azurestaticapps.net`
