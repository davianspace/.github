# Deployment Checklist for Davian Space Homepage

## ✅ Pre-Deployment Checklist

### 1. Configuration
- [ ] Updated `githubOrg` in `davian-space-homepage/src/config.js` to your organization name
- [ ] Customized `siteName` and `tagline` in config.js
- [ ] Verified logo files exist in `davian-space-homepage/public/` (Light.png, dark.png)
- [ ] Updated copyright text in config.js

### 2. Testing
- [ ] Installed dependencies: `cd davian-space-homepage && npm install`
- [ ] Started dev server successfully: `npm run dev`
- [ ] Tested in browser at http://localhost:5173
- [ ] Verified dark/light mode toggle works
- [ ] Confirmed logo switches between themes
- [ ] Checked responsive design on mobile/tablet/desktop
- [ ] Tested that repositories load from GitHub API
- [ ] Verified forked repositories are excluded

### 3. Build
- [ ] Build completes successfully: `npm run build`
- [ ] No errors in build output
- [ ] Verified dist folder contains index.html and assets
- [ ] Logo files copied to dist folder

### 4. GitHub Pages Setup
- [ ] Pushed all changes to main branch
- [ ] Go to repository **Settings** → **Pages**
- [ ] Under "Build and deployment", select **GitHub Actions** as source
- [ ] Wait for GitHub Actions workflow to complete
- [ ] Check **Actions** tab for deployment status

### 5. Post-Deployment
- [ ] Site is live at https://davianspace.github.io/.github/
- [ ] Homepage loads correctly
- [ ] Theme toggle works on live site
- [ ] Repositories are loading from API
- [ ] All links work correctly
- [ ] Mobile view is responsive
- [ ] No console errors in browser

## 🚀 Deployment Steps

### Step 1: Configure
```bash
cd davian-space-homepage
# Edit src/config.js with your settings
```

### Step 2: Test Locally
```bash
npm install
npm run dev
# Visit http://localhost:5173
```

### Step 3: Build
```bash
npm run build
# Verify build succeeds
```

### Step 4: Deploy via GitHub Actions

**Option A: Automatic (Recommended)**
1. Ensure all changes are committed
2. Push to main branch: `git push origin main`
3. GitHub Actions will automatically deploy

**Option B: Manual Trigger**
1. Go to repository → **Actions** tab
2. Select "Deploy Davian Space Homepage to GitHub Pages"
3. Click "Run workflow"

### Step 5: Configure GitHub Pages
1. Go to repository **Settings**
2. Navigate to **Pages** (in left sidebar)
3. Under **Source**, select "GitHub Actions"
4. Click Save

### Step 6: Verify Deployment
1. Wait 1-2 minutes for deployment
2. Visit https://davianspace.github.io/.github/
3. Check that everything works

## 🔧 Troubleshooting

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Actions Fails
1. Check the Actions tab for error logs
2. Ensure repository has Pages enabled
3. Verify workflow file is correct: `.github/workflows/deploy-homepage.yml`
4. Check that node version matches (20) in workflow

### Site Not Loading
1. Clear browser cache
2. Check GitHub Pages is enabled in Settings
3. Verify Actions source is selected (not branch)
4. Wait a few minutes - deployment can take time

### API Not Loading
1. Open browser console (F12)
2. Check for CORS or network errors
3. Verify organization name in config.js is correct
4. Check GitHub API status: https://www.githubstatus.com/

### Wrong Base Path
If site is at https://davianspace.github.io/.github/ but assets 404:

Edit `vite.config.js`:
```javascript
base: '/.github/',  // Match your repository name
```

Then rebuild and redeploy.

## 📝 Maintenance

### Updating Content
1. Edit `src/config.js` for site text
2. Replace logo files in `public/` folder
3. Commit and push - GitHub Actions handles deployment

### Adding Custom Pages
1. Create new components in `src/components/`
2. Import in `src/App.jsx`
3. Build and deploy

### Updating Dependencies
```bash
cd davian-space-homepage
npm update
npm run build  # Test build
```

## 🎯 Quick Reference

**Local Development:**
```bash
cd davian-space-homepage
npm run dev
```

**Production Build:**
```bash
npm run build
```

**Preview Production Build:**
```bash
npm run preview
```

**Deploy to GitHub Pages:**
Push to main branch - automatic via GitHub Actions

## 📚 Documentation

- **QUICKSTART.md** - Quick configuration guide
- **SETUP.md** - Complete setup instructions
- **README.md** - Project overview
- **davian-space-homepage/README.md** - Detailed documentation

## ✨ Features Summary

- ✅ Modern, minimal design
- ✅ Dark/light mode with auto logo switch
- ✅ Auto-loads GitHub repositories
- ✅ Filters out forked repos
- ✅ Fully responsive
- ✅ Smooth animations
- ✅ Loading states
- ✅ Error handling
- ✅ GitHub Pages ready
- ✅ Easy configuration

---

Built with ❤️ for Davian Space
