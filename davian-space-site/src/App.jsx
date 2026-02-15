import { lazy, Suspense } from "react";
import { siteConfig } from "./config/siteConfig";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load below-the-fold components to reduce initial bundle
const FeaturedApps = lazy(() => import("./components/FeaturedApps"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Certifications = lazy(() => import("./components/Certifications"));
const Process = lazy(() => import("./components/Process"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-night-950 dark:text-white">
      <Navbar
        theme={theme}
        onToggle={toggleTheme}
        logoLight={siteConfig.logos.light}
        logoDark={siteConfig.logos.dark}
      />
      <main>
        <Hero
          logoLight={siteConfig.logos.light}
          logoDark={siteConfig.logos.dark}
          orgName={siteConfig.organization.name}
          tagline={siteConfig.hero.taglines[0]}
          theme={theme}
        />
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <About
            personal={siteConfig.personal}
            organization={siteConfig.organization}
            technologies={siteConfig.technologies}
          />
          <FeaturedApps apps={siteConfig.featuredApps} />
          <Skills skills={siteConfig.skills} />
          <Certifications certifications={siteConfig.certifications} />
          <Process process={siteConfig.process} />
          <Contact social={siteConfig.social} />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer footerTagline={siteConfig.footerTagline} />
      </Suspense>
    </div>
  );
};

export default App;
