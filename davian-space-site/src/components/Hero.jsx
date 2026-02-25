import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-400/6 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10 text-center py-24">
        <img
          src="/assets/dark.webp"
          alt="Davian Space logo"
          className="h-24 w-24 md:h-32 md:w-32 object-contain mx-auto mb-8 animate-fade-in"
        />

        <p className="text-sm font-mono text-brand-400 tracking-widest uppercase mb-6 animate-fade-in">
          Software Engineering Organization
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 animate-slide-up">
          Davian Space
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: "0.15s" }}>
          Building scalable, secure, and production-ready systems.
          <br className="hidden sm:block" />
          Enterprise backend. Cross-platform applications. Cloud infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Explore Capabilities
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white text-sm font-medium rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <a
          href="#about"
          className="inline-block mt-20 text-neutral-600 hover:text-neutral-400 transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
