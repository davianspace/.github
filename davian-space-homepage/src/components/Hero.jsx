import { useTheme } from '../ThemeContext';
import { config } from '../config';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-purple-950/50 dark:to-blue-950/50 transition-colors duration-700">
        <div className="absolute inset-0 opacity-40 dark:opacity-30">
          <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-purple-400/40 dark:bg-purple-500/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-blue-400/40 dark:bg-blue-500/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[32rem] h-[32rem] bg-pink-400/40 dark:bg-pink-500/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto animate-fadeIn">
        {/* Logo */}
        <div className="mb-12 flex justify-center animate-fadeInUp">
          <img
            src={theme === 'dark' ? config.logos.dark : config.logos.light}
            alt={config.siteName}
            className="h-48 w-auto sm:h-56 lg:h-72 object-contain transition-all duration-700 animate-logoSwitch"
            style={{ maxWidth: '90vw' }}
          />
        </div>

        {/* Site Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight transition-colors duration-700 animate-fadeInUp animation-delay-200">
          {config.siteName}
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-700 font-light animate-fadeInUp animation-delay-400">
          {config.tagline}
        </p>
      </div>
    </section>
  );
};

export default Hero;
