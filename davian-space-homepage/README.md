# Davian Space Homepage

A modern, elegant homepage for Davian Space that automatically showcases GitHub repositories.

## 🎨 Design Features

- **Modern & Minimal**: Clean aesthetic with generous spacing and smooth animations
- **Dark/Light Mode**: Automatic theme switching with localStorage persistence
- **Responsive Design**: Mobile-first approach that works beautifully on all devices
- **Dynamic Content**: Automatically loads and displays repositories from GitHub
- **Glassmorphism**: Subtle glass effects and animated gradients
- **Smooth Interactions**: Micro-interactions and hover effects throughout

## 🛠️ Tech Stack

- **Vite** - Lightning-fast build tool
- **React** - UI library with functional components and hooks
- **Tailwind CSS v4** - Utility-first CSS framework
- **GitHub REST API** - For fetching repository data

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
│   │   ├── Projects.jsx   # Auto-loading projects grid
│   │   └── Footer.jsx     # Simple footer
│   ├── config.js          # ⚙️ Main configuration file
│   ├── ThemeContext.jsx   # Dark mode context provider
│   ├── App.jsx            # Main app component
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## ⚙️ Configuration

Edit `src/config.js` to customize your site:

```javascript
export const config = {
  // GitHub Organization Settings
  githubOrg: 'davianspace',     // Your GitHub org name
  
  // Site Identity
  siteName: 'Davian Space',
  tagline: 'A quiet orbit of ideas, experiments, and creations',
  
  // Logo Paths (relative to public folder)
  logos: {
    light: '/Light.png',
    dark: '/dark.png',
  },
  
  // Footer
  copyright: `© ${new Date().getFullYear()} Davian Space. All rights reserved.`,
};
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd davian-space-homepage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📦 Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create a file `.github/workflows/deploy.yml` in your repository root:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          
      - name: Install dependencies
        run: |
          cd davian-space-homepage
          npm install
          
      - name: Build
        run: |
          cd davian-space-homepage
          npm run build
          
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './davian-space-homepage/dist'
          
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Go to your repository Settings → Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push your changes to the main branch
5. The site will be automatically deployed!

### Option 2: Manual Deployment

1. Build the project:
```bash
cd davian-space-homepage
npm run build
```

2. The `dist` folder contains your built site

3. Push the `dist` folder contents to a `gh-pages` branch:
```bash
cd dist
git init
git add -A
git commit -m 'Deploy to GitHub Pages'
git push -f git@github.com:davianspace/.github.git main:gh-pages
```

4. Go to your repository Settings → Pages
5. Select the `gh-pages` branch as the source
6. Your site will be live at `https://davianspace.github.io/.github/`

### Important Notes for GitHub Pages

- If deploying to a repository subdirectory (not the root), update `vite.config.js`:
  ```javascript
  base: '/repository-name/'
  ```

- For organization pages (`username.github.io`), use:
  ```javascript
  base: '/'
  ```

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

### Updating Logos

Replace `public/Light.png` and `public/dark.png` with your own logo files.

### Modifying Content

- Edit `src/config.js` for site name, tagline, and organization name
- Components are in `src/components/` for structural changes

## 📝 Features in Detail

### Automatic Repository Loading

The site automatically:
- Fetches all repositories from your GitHub organization
- Filters out forked repositories
- Sorts by most recently updated
- Displays with name, description, and last updated date

### Dark Mode

- Automatically detects system preference on first visit
- Toggle button in the navbar
- Preference saved in localStorage
- Logo switches automatically based on theme

### Responsive Design

- Mobile-first approach
- Responsive grid layouts
- Touch-friendly buttons and interactions
- Optimized for all screen sizes

## 🔧 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with ❤️ for Davian Space
