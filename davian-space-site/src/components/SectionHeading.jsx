import PropTypes from "prop-types";

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <div className="space-y-3 sm:space-y-4 text-center">
    <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-slate-700 dark:text-glow-400">{eyebrow}</p>
    <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-slate-900 dark:text-white">{title}</h2>
    <p className="mx-auto max-w-2xl text-xs sm:text-sm text-slate-700 dark:text-slate-300 md:text-base px-4 sm:px-0">
      {subtitle}
    </p>
  </div>
);

SectionHeading.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default SectionHeading;
