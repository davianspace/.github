import PropTypes from "prop-types";
import { getCurrentYear } from "../utils/dateUtils";

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="inline-block h-4 w-4 text-red-500 animate-pulse"
    aria-hidden="true"
  >
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
);

const Footer = ({ footerTagline }) => (
  <footer className="border-t border-slate-300 py-8 sm:py-10 md:py-12 dark:border-white/[0.06] bg-slate-50 dark:bg-night-950">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 sm:gap-4 px-4 sm:px-6 text-center text-[10px] sm:text-xs text-slate-600 dark:text-slate-400">
      <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-glow-500/60 to-transparent dark:via-glow-400/40" />
      <p className="flex items-center gap-2">
        <span className="inline-flex items-center">
          <HeartIcon />
        </span>
        <span className="leading-relaxed">{footerTagline}</span>
      </p>
      <p>© {getCurrentYear()} Davian Space. All rights reserved.</p>
    </div>
  </footer>
);

Footer.propTypes = {
  footerTagline: PropTypes.string.isRequired
};

export default Footer;
