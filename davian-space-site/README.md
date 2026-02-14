# Davian Space Homepage

Premium cinematic personal + organization homepage built with Vite, React, and Tailwind CSS. Fully static and GitHub Pages compatible.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Configuration

Update the config in [src/config/siteConfig.js](src/config/siteConfig.js) to customize:

- **Personal Profile**: Name, title, summary, and tagline
- **Organization Details**: Studio/company name and description
- **Technology Stack**: List of technologies with icons
- **Skills & Certifications**: Professional skills and certifications
- **Featured Apps**: Showcase your applications
- **Social Links**: GitHub, LinkedIn, and Gravatar profiles
- **Logo Paths**: Paths to light and dark mode logos

## GitHub Pages

1. Ensure the repository has GitHub Pages enabled in Settings > Pages.
2. Set the source to GitHub Actions.
3. Push to the `main` branch. The workflow deploys the build output to Pages.

## Notes

- Logos are expected at `public/assets/logo-light.svg` and `public/assets/logo-dark.svg` by default.
- Update `base` in [vite.config.js](vite.config.js) if deploying to a project page with a subpath.
