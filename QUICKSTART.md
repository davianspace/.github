# Quick Configuration Guide

## 🎯 Essential Configuration

### 1. Update Organization Name

Edit `davian-space-homepage/src/config.js`:

```javascript
githubOrg: 'davianspace',  // Change to your organization name
```

### 2. Customize Site Identity

```javascript
siteName: 'Davian Space',  // Your organization name
tagline: 'A quiet orbit of ideas, experiments, and creations',  // Your tagline
```

### 3. Logo Files

Place your logo files in `davian-space-homepage/public/`:
- `Light.png` - Logo for light mode
- `dark.png` - Logo for dark mode

Update paths in config if needed:
```javascript
logos: {
  light: '/Light.png',
  dark: '/dark.png',
}
```

## 🚀 Deployment Configuration

### For Organization Homepage (recommended)

In `vite.config.js`, use:
```javascript
base: '/',
```

Site URL: `https://davianspace.github.io/.github/`

### For Repository Subdirectory

In `vite.config.js`, use:
```javascript
base: '/repository-name/',
```

Site URL: `https://davianspace.github.io/repository-name/`

## 📝 Common Customizations

### Update Tagline
```javascript
// config.js
tagline: 'Your custom tagline here'
```

### Update Copyright
```javascript
// config.js
copyright: '© 2026 Your Name. All rights reserved.'
```

### Change Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // Add more colors
    }
  }
}
```

## 🔧 Build Commands

```bash
npm run dev      # Development (localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
```

## ✅ Checklist Before Deployment

- [ ] Updated `githubOrg` in `config.js`
- [ ] Customized site name and tagline
- [ ] Replaced logo files (Light.png and dark.png)
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`
- [ ] Configured GitHub Pages in repository settings
- [ ] Committed and pushed to main branch

## 🐛 Troubleshooting

**Build fails:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**API not loading:**
- Check console for errors
- Verify organization name in config.js
- Check GitHub API rate limits

**GitHub Pages not updating:**
- Check Actions tab for workflow status
- Verify Pages settings use "GitHub Actions"
- Wait a few minutes for deployment

## 📚 Documentation

- **SETUP.md** - Complete setup guide
- **davian-space-homepage/README.md** - Detailed project docs
- **README.md** - Repository overview
