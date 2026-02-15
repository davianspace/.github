import PropTypes from "prop-types";
import SectionHeading from "./SectionHeading";
import { Search, Network, LayoutList, Code2, Rocket, Box } from "lucide-react";

// Icon mapping for dynamic lookup
const iconMap = {
  Search, Network, LayoutList, Code2, Rocket, Box
};

const Process = ({ process }) => (
  <section id="process" className="relative py-8 sm:py-12 scroll-mt-[1.5rem] sm:scroll-mt-16">
    <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-b from-transparent via-slate-100/50 to-transparent dark:via-night-900/30" />
    <div className="relative mx-auto max-w-6xl space-y-12 sm:space-y-16 px-4 sm:px-6">
      <SectionHeading
        eyebrow="Workflow"
        title="How I Build"
        subtitle="Enterprise-grade development process from discovery to production, following Agile and SAFe methodologies."
      />
      
      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {process.map((step, index) => {
          const IconComponent = iconMap[step.icon] || Box;
          return (
            <div
              key={index}
              className="glass-panel glow-border group relative rounded-xl sm:rounded-2xl p-6 sm:p-8 transition hover:-translate-y-2"
            >
              <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-glow-500 to-accent-500 font-display text-sm font-bold text-white shadow-lg">
                {index + 1}
              </div>
              <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-glow-500 dark:text-accent-400 mb-4" />
              <h3 className="font-display text-xl sm:text-2xl text-slate-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

Process.propTypes = {
  process: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Process;
