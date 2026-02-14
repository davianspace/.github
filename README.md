# Davian Space - GitHub Organization

Welcome to the Davian Space GitHub organization repository.

## 🌐 Homepage

This repository contains a modern, elegant homepage for Davian Space built with:
- **Vite** - Fast build tool
- **React** - UI library
- **Tailwind CSS** - Styling framework

### Features

✨ **Automatic Project Loading**: Dynamically fetches and displays all repositories from the organization  
🌓 **Dark/Light Mode**: Theme toggle with automatic logo switching  
📱 **Fully Responsive**: Mobile-first design that works on all devices  
🎨 **Modern Design**: Clean aesthetic with smooth animations and gradients  
🚀 **GitHub Pages Ready**: Automatic deployment via GitHub Actions  

### Quick Start

See **[SETUP.md](./SETUP.md)** for detailed setup and deployment instructions.

```bash
cd davian-space-homepage
npm install
npm run dev
```

### Documentation

- **[SETUP.md](./SETUP.md)** - Complete setup and deployment guide
- **[davian-space-homepage/README.md](./davian-space-homepage/README.md)** - Detailed project documentation

### Screenshots

**Light Mode:**

![Light Mode](https://github.com/user-attachments/assets/a724ea2c-9466-4d12-a4cd-2fc6705c8cd2)

**Dark Mode:**

![Dark Mode](https://github.com/user-attachments/assets/debbb902-b9bf-408b-a12e-c63ff5b27613)

---

## 📂 Repository Structure

```
.github/
├── davian-space-homepage/    # Modern homepage application
├── profile/                  # Organization profile
├── .github/workflows/        # GitHub Actions workflows
├── Light.png                 # Light mode logo
├── dark.png                  # Dark mode logo
├── SETUP.md                  # Setup guide
└── README.md                 # This file
```

## 🚀 Deployment

The homepage can be automatically deployed to GitHub Pages:

1. Go to **Settings** → **Pages**
2. Select **GitHub Actions** as the source
3. Push to `main` branch
4. Site deploys automatically

## ⚙️ Configuration

All site settings are in `davian-space-homepage/src/config.js`:

```javascript
export const config = {
  githubOrg: 'davianspace',  // Your organization name
  siteName: 'Davian Space',
  tagline: 'A quiet orbit of ideas, experiments, and creations',
  // ... more settings
};
```

## 📝 About

Davian Space is an independent GitHub organization maintained by a sole developer, serving as home for projects, tools, and documentation with a strong focus on privacy, security, and transparency.

---

Built with ❤️ for Davian Space
