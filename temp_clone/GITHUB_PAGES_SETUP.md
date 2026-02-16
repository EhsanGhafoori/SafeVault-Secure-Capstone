# GitHub Pages Deployment Guide

This guide will help you deploy your Blazor WebAssembly app to GitHub Pages for free!

## Your App URL
Once deployed, your app will be available at:
**`https://ehsanghafoori.github.io/EventEase-Blazor/`**

## Step-by-Step Instructions

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/EhsanGhafoori/EventEase-Blazor
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Source**: `GitHub Actions`
5. Click **Save**

### Step 2: Push the Deployment Workflow

The GitHub Actions workflow has already been created. Just make sure it's committed:

```bash
cd temp_clone
git add .github/workflows/github-pages.yml
git add wwwroot/404.html
git commit -m "Add GitHub Pages deployment"
git push origin main
```

### Step 3: Wait for Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait 2-3 minutes for it to complete
4. Once it shows a green checkmark ✅, your site is live!

### Step 4: Access Your Site

Your app will be live at:
**`https://ehsanghafoori.github.io/EventEase-Blazor/`**

## Important Notes

- ⚠️ **Base Path**: The app is configured with base href `/EventEase-Blazor/` to match your repository name
- ✅ **Automatic Deploys**: Every push to `main` branch will automatically redeploy your site
- ⏱️ **Deployment Time**: First deployment takes 2-3 minutes, subsequent ones are faster
- 🔄 **Updates**: Just push changes to GitHub and they'll deploy automatically

## Troubleshooting

### If the site shows 404:
1. Make sure GitHub Pages is enabled (Settings → Pages)
2. Check that the workflow completed successfully (Actions tab)
3. Wait a few minutes and refresh

### If routing doesn't work:
- The `404.html` file handles client-side routing
- Make sure both `index.html` and `404.html` are in the `wwwroot` folder

### To change the base path:
If you rename your repository, update the base href in:
- `wwwroot/index.html` (line 8)
- `wwwroot/404.html` (line 8)

## View Your Deployment

1. Go to: https://github.com/EhsanGhafoori/EventEase-Blazor/actions
2. Click on the latest workflow run
3. Scroll down to see the deployment status
4. Once complete, visit: **https://ehsanghafoori.github.io/EventEase-Blazor/**

## That's It! 🎉

Your Blazor app is now live on GitHub Pages for free!
