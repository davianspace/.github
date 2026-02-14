# Davian Space Homepage - Setup Guide

This repository contains a modern homepage for the Davian Space GitHub organization, built with Vite, React, and Tailwind CSS.

## 📋 Quick Start

### 1. Local Development

```bash
# Navigate to the project directory
cd davian-space-homepage

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`

### 2. Build for Production

```bash
cd davian-space-homepage
npm run build
```

The production-ready files will be in the `dist` folder.

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

A GitHub Actions workflow is already configured in `.github/workflows/deploy-homepage.yml`.

**To enable automatic deployment:**

1. Go to your repository **Settings** → **Pages**
2. Under **Build and deployment**, select **GitHub Actions** as the source
3. Commit and push changes to the `main` branch
4. The workflow will automatically build and deploy your site

The site will be live at: `https://davianspace.github.io/.github/`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
cd davian-space-homepage
npm run build

# Deploy the dist folder to gh-pages branch
cd dist
git init
git add -A
git commit -m 'Deploy to GitHub Pages'
git push -f git@github.com:davianspace/.github.git main:gh-pages
```

Then configure GitHub Pages to use the `gh-pages` branch.

## ⚙️ Configuration

All site settings are centralized in `davian-space-homepage/src/config.js`:

```javascript
export const config = {
  // GitHub Organization Settings
  githubOrg: 'davianspace',  // Change this to your organization name
  
  // Site Identity
  siteName: 'Davian Space',
  tagline: 'A quiet orbit of ideas, experiments, and creations',
  
  // Logo Paths (in public folder)
  logos: {
    light: '/Light.png',
    dark: '/dark.png',
  },
  
  // Footer
  copyright: `© ${new Date().getFullYear()} Davian Space. All rights reserved.`,
};
```

### Customizing Logos

1. Replace `davian-space-homepage/public/Light.png` with your light mode logo
2. Replace `davian-space-homepage/public/dark.png` with your dark mode logo
3. Update the paths in `config.js` if needed

## 🎨 Design Features

- **Modern Aesthetic**: Clean, minimal design with generous spacing
- **Dark/Light Mode**: Automatic theme switching with localStorage persistence
- **Responsive**: Mobile-first design that works on all devices
- **Animated Gradients**: Subtle blob animations in the hero section
- **Auto-Loading Projects**: Fetches repositories from GitHub API
- **Smooth Transitions**: All theme changes and interactions are animated

## 📁 Project Structure

```
davian-space-homepage/
├── public/
│   ├── Light.png          # Light mode logo
│   └── dark.png           # Dark mode logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx     # Sticky navbar with theme toggle
│   │   ├── Hero.jsx       # Hero section with logo and tagline
│   │   ├── Projects.jsx   # Projects grid (auto-loads from GitHub)
│   │   └── Footer.jsx     # Footer with copyright
│   ├── config.js          # ⚙️ Configuration file
│   ├── ThemeContext.jsx   # Theme management
│   ├── App.jsx            # Main app component
│   └── index.css          # Global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🔧 Development Commands

```bash
npm run dev      # Start development server (port 5173)
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## 🎯 Key Features

### 1. Automatic Repository Loading

The homepage automatically:
- Fetches all repositories from your GitHub organization
- Filters out forked repositories
- Sorts by most recently updated
- Displays with name, description, and last updated date
- Shows loading skeletons while fetching
- Handles errors gracefully

### 2. Theme Switching

- Detects system preference on first visit
- Toggle button in the navbar
- Smooth transitions between themes
- Logos switch automatically
- Preference saved in localStorage

### 3. Responsive Design

- Mobile-first approach
- Responsive grid layouts (1 column mobile, 2 tablet, 3 desktop)
- Touch-friendly interactions
- Optimized typography for all screen sizes

## 🛠️ Customization

### Changing Colors

Edit `davian-space-homepage/tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      brand: {
        50: '#f0f9ff',
        // ... add more custom colors
      }
    }
  }
}
```

### Modifying the Tagline

Edit `src/config.js`:

```javascript
tagline: 'Your custom tagline here'
```

### Updating Footer

Edit `src/config.js`:

```javascript
copyright: 'Your custom copyright text'
```

## 📝 Important Notes

1. **GitHub API Rate Limits**: The GitHub API allows 60 requests per hour for unauthenticated requests. For production use, consider adding authentication for higher limits.

2. **Base Path**: If deploying to a repository subdirectory, update `vite.config.js`:
   ```javascript
   base: '/repository-name/'
   ```

3. **No Programming Language Mentions**: The UI intentionally avoids mentioning any technologies, maintaining a creative studio aesthetic.

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Pages Not Updating

1. Check the Actions tab for workflow runs
2. Ensure GitHub Pages is configured to use GitHub Actions
3. Check repository permissions for workflows

### API Not Loading

- Check browser console for CORS or network errors
- Verify the organization name in `config.js` is correct
- Check GitHub API rate limits

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [GitHub REST API Documentation](https://docs.github.com/en/rest)

## 🎓 Support

For issues or questions:
1. Check the README in the `davian-space-homepage` folder
2. Review the GitHub Actions workflow logs
3. Ensure all configuration in `config.js` is correct

---

Built with ❤️ for Davian Space
