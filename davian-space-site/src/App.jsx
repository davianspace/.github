import { siteConfig } from "./config/siteConfig";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedApps from "./components/FeaturedApps";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      </main>
      <Footer footerTagline={siteConfig.footerTagline} />
    </div>
  );
};

export default App;
