import PropTypes from "prop-types";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const FeaturedApps = ({ apps }) => {
  const [imageLoadStates, setImageLoadStates] = useState({});

  const handleImageLoad = (index) => {
    setImageLoadStates(prev => ({ ...prev, [index]: 'loaded' }));
  };

  const handleImageError = (index) => {
    setImageLoadStates(prev => ({ ...prev, [index]: 'error' }));
  };

  return (
    <section id="apps" className="relative py-8 sm:py-12 scroll-mt-[1.5rem] sm:scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/80 to-transparent dark:via-night-900/30" />
      <div className="relative mx-auto max-w-6xl space-y-12 sm:space-y-16 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Production"
          title="Live Applications"
          subtitle="Production-ready applications built from the ground up — secure, scalable, and actively maintained."
        />
        
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
          {apps.map((app, index) => {
            const loadState = imageLoadStates[index] || 'loading';
            
            return (
              <a
                key={index}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glow-border group relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition hover:-translate-y-2 hover:shadow-glowStrong"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-glow-500/5 via-transparent to-accent-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                
                <div className="relative space-y-4">
                  {/* Icon & External Link */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-gradient-to-br from-glow-500/20 to-accent-500/20 p-3 sm:p-4 relative">
                        {/* Loading skeleton */}
                        {loadState === 'loading' && (
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded animate-pulse" />
                        )}
                        
                        {/* Actual image */}
                        <img
                          src={app.favicon}
                          alt={`${app.name} logo`}
                          className={`w-10 h-10 sm:w-12 sm:h-12 object-contain transition-opacity duration-300 ${
                            loadState === 'loaded' ? 'opacity-100' : 'opacity-0 absolute inset-0'
                          }`}
                          onLoad={() => handleImageLoad(index)}
                          onError={() => handleImageError(index)}
                        />
                        
                        {/* Fallback icon with animation */}
                        {loadState === 'error' && (
                          <ExternalLink className="w-10 h-10 sm:w-12 sm:h-12 text-glow-600 dark:text-accent-400 animate-pulse" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl text-slate-900 dark:text-white group-hover:text-glow-600 dark:group-hover:text-accent-400 transition-colors">
                          {app.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-1">
                          {app.url.replace('https://', '')}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 dark:text-slate-600 group-hover:text-glow-500 dark:group-hover:text-accent-400 transition-colors flex-shrink-0" />
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    {app.description}
                  </p>

                  {/* Tags */}
                  {app.tags && app.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {app.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-glow-500/10 to-accent-500/10 text-slate-700 dark:text-slate-300 border border-glow-500/20 dark:border-accent-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="flex items-center gap-2 pt-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium text-green-600 dark:text-green-400 uppercase tracking-wider">
                      Live & Active
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

FeaturedApps.propTypes = {
  apps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      favicon: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired
};

export default FeaturedApps;