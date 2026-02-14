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
            key={theme}
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

      <style>{`
        @keyframes blob {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
          }
          25% { 
            transform: translate(30px, -60px) scale(1.15); 
          }
          50% { 
            transform: translate(-30px, 30px) scale(0.85); 
          }
          75% { 
            transform: translate(60px, 60px) scale(1.1); 
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes logoSwitch {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 25s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out backwards;
        }
        
        .animate-logoSwitch {
          animation: logoSwitch 0.7s ease-out;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
