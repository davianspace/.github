import PropTypes from "prop-types";
import SectionHeading from "./SectionHeading";
import { Zap, Smartphone, Layers, Cloud, Container, Rocket, Code, Database, Box } from "lucide-react";

// Icon mapping for dynamic lookup
const iconMap = {
  Zap, Smartphone, Layers, Cloud, Container, Rocket, Code, Database, Box
};

const About = ({ personal, organization, technologies }) => (
  <section id="about" className="relative py-8 sm:py-12 scroll-mt-[1.5rem] sm:scroll-mt-16">
    <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-b from-slate-100 via-transparent to-slate-50 dark:from-night-900/50 dark:via-transparent dark:to-night-950/90" />
    <div className="relative mx-auto max-w-6xl space-y-12 sm:space-y-16 px-4 sm:px-6">
      <SectionHeading
        eyebrow="Identity"
        title="Developer + Studio"
        subtitle="A solo developer with a studio mindset. Building full-stack applications with modern technologies and cloud-first architecture."
      />

      <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="glass-panel glow-border space-y-4 sm:space-y-6 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
          <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-glow-600 dark:text-glow-400">About Davian</p>
          <h3 className="font-display text-2xl sm:text-3xl text-slate-900 dark:text-white">{personal.name}</h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 md:text-base">{personal.summary}</p>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 md:text-base">{personal.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-glow-500/50 bg-glow-500/20 px-3 sm:px-4 py-1 text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-glow-700 dark:border-glow-400/40 dark:bg-glow-400/10 dark:text-glow-400">
              {personal.title}
            </span>
          </div>
        </div>

        <div className="glass-panel glow-border space-y-4 sm:space-y-6 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
          <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-glow-600 dark:text-glow-400">About {organization.name}</p>
          <h3 className="font-display text-2xl sm:text-3xl text-slate-900 dark:text-white">{organization.name}</h3>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 md:text-base">{organization.description}</p>
          <div className="rounded-xl sm:rounded-2xl border border-slate-300 bg-slate-100/80 p-3 sm:p-4 text-xs sm:text-sm text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            Privacy-first, security-focused, and transparent by design. Every project is crafted end-to-end by a single developer.
          </div>
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <SectionHeading
          eyebrow="Expertise"
          title="Core Technologies"
          subtitle="Modern tech stack for building scalable backends, beautiful mobile apps, and responsive web interfaces."
        />
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => {
            const IconComponent = iconMap[tech.icon] || Box;
            return (
              <div
                key={tech.label}
                className="glass-panel glow-border group rounded-xl sm:rounded-2xl p-5 sm:p-6 transition hover:-translate-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-glow-500 dark:text-accent-400 flex-shrink-0" />
                    <h3 className="font-display text-lg sm:text-xl text-slate-900 dark:text-white">{tech.label}</h3>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-glow-500 shadow-glow dark:bg-glow-400" />
                </div>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">{tech.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

About.propTypes = {
  personal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired
  }).isRequired,
  organization: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ).isRequired
};

export default About;
