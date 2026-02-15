import { useState } from "react";
import PropTypes from "prop-types";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ theme, onToggle, logoLight, logoDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const menuItems = [
    { label: "Home", href: "#top" },
    { label: "Identity", href: "#about" },
    { label: "Apps", href: "#apps" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/60 backdrop-blur-2xl dark:border-white/[0.06] dark:bg-night-950/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6 sm:py-3">
        <a href="#top" className="flex items-center gap-2 sm:gap-3 md:gap-4 group">
          <div className="logo-container relative flex items-center justify-center transition-transform duration-200 group-hover:animate-bounce w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
            <img
              src={logoLight}
              alt="Davian Space logo"
              width="80"
              height="42"
              loading="eager"
              aria-hidden={theme !== "light"}
              className={`object-contain transition-opacity duration-300 w-full h-full ${theme === "light" ? "opacity-100" : "opacity-0"}`}
            />
            <img
              src={logoDark}
              alt="Davian Space logo"
              width="80"
              height="42"
              loading="eager"
              aria-hidden={theme !== "dark"}
              className={`absolute inset-0 object-contain transition-opacity duration-300 w-full h-full ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
            />
          </div>
          <span className="font-display text-base sm:text-lg md:text-xl font-semibold text-slate-900 dark:text-white flex items-center" style={{ lineHeight: 1 }}>
            <span className="hidden xs:inline">Davian Space</span>
            <span className="xs:hidden">Davian</span>
          </span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden items-center gap-4 text-sm font-medium text-slate-700 dark:text-slate-300 md:flex md:gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              className="transition hover:text-glow-600 dark:hover:text-glow-400"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden border-t border-slate-200/60 dark:border-white/[0.06] bg-white/95 dark:bg-night-950/95 backdrop-blur-2xl"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className="block px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

Navbar.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"]).isRequired,
  onToggle: PropTypes.func.isRequired,
  logoLight: PropTypes.string.isRequired,
  logoDark: PropTypes.string.isRequired
};

export default Navbar;
