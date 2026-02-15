import PropTypes from "prop-types";

const ThemeToggle = ({ theme, onToggle }) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="group relative inline-flex h-8 w-14 sm:h-10 sm:w-16 items-center rounded-full border-2 border-slate-400 bg-slate-100 p-1 transition hover:border-glow-500 dark:border-white/30 dark:bg-white/10 dark:hover:border-glow-400"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
    >
      <span
        className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full text-sm sm:text-base transition-all duration-300 ${
          isDark
            ? "translate-x-0 bg-night-900 text-glow-400"
            : "translate-x-6 bg-white text-amber-500"
        }`}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-glow-400/20 to-transparent opacity-0 transition group-hover:opacity-100" />
    </button>
  );
};

ThemeToggle.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"]).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default ThemeToggle;
