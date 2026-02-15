import PropTypes from "prop-types";

const Hero = ({ logoLight, logoDark, orgName, tagline, theme }) => (
  <section id="top" className="relative overflow-hidden scroll-mt-16">
    <div className="absolute inset-0 hero-gradient" />
    <div className="stars" />
    <div className="planets">
      <div className="planet planet-1" />
      <div className="planet planet-2" />
      <div className="planet planet-3" />
      <div className="planet planet-4" />
    </div>
    <div className="galaxy-overlay" />
    <div className="absolute -left-24 top-16 h-96 w-96 rounded-full bg-glow-400/15 blur-[100px] animate-pulseGlow" />
    <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-accent-500/10 blur-[80px] animate-pulseGlow" />
    <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-400/8 blur-[120px]" />

    <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6 text-center pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="glass-panel glow-border fade-up flex w-full max-w-4xl flex-col items-center gap-6 sm:gap-8 overflow-hidden rounded-2xl sm:rounded-3xl px-4 py-10 sm:px-6 sm:py-14 md:px-12">
        {/* Logo area — large and floating freely across the box */}
        <div className="relative h-32 w-full sm:h-40 md:h-48 flex items-center justify-center">
          <img
            src={logoLight}
            alt={`${orgName} light logo`}
            width="420"
            height="210"
            loading="eager"
            fetchpriority="high"
            decoding="sync"
            style={{ width: '420px', height: '210px' }}
            aria-hidden={theme !== "light"}
            className={`h-auto w-auto animate-logoGlow logo-glow-effect transition-opacity duration-500 ${
              theme === "light" ? "opacity-100" : "opacity-0 absolute"
            }`}
          />
          <img
            src={logoDark}
            alt={`${orgName} dark logo`}
            width="420"
            height="210"
            loading="eager"
            fetchpriority="high"
            decoding="sync"
            style={{ width: '420px', height: '210px' }}
            aria-hidden={theme !== "dark"}
            className={`h-auto w-auto animate-logoGlow logo-glow-effect transition-opacity duration-500 ${
              theme === "dark" ? "opacity-100" : "opacity-0 absolute"
            }`}
          />
        </div>

        <div className="space-y-4 sm:space-y-5">
          <p className="text-[0.65rem] sm:text-xs font-medium uppercase tracking-[0.3em] sm:tracking-[0.5em] text-slate-700 dark:text-glow-400">
            Creative Development Studio
          </p>
          <h1 className="font-hero text-3xl sm:text-5xl md:text-7xl font-black tracking-wider animated-title">
            {orgName.split('').map((letter, index) => (
              <span 
                key={index} 
                className="letter-animate"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg px-2">
            {tagline}
          </p>
        </div>

        <div className="mt-2 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="#apps"
            className="rounded-full bg-gradient-to-r from-glow-500 to-glow-400 px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:shadow-glowStrong"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-slate-400 bg-white/50 px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-800 transition hover:-translate-y-1 hover:border-glow-500 hover:bg-white hover:text-glow-600 dark:border-white/30 dark:bg-white/10 dark:text-white dark:hover:border-glow-400 dark:hover:bg-white/20 dark:hover:text-glow-400"
          >
            Meet Davian
          </a>
        </div>
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  logoLight: PropTypes.string.isRequired,
  logoDark: PropTypes.string.isRequired,
  orgName: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(["dark", "light"]).isRequired
};

export default Hero;
