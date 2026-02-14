import { config } from '../config';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 border-t border-gray-200/50 dark:border-gray-800/50 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-base font-light tracking-wide">
            {config.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
