import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * OptimizedImage Component
 * 
 * Provides responsive, optimized images with WebP support and proper loading states.
 * Implements best practices for LCP (Largest Contentful Paint) optimization.
 * 
 * Features:
 * - WebP format with PNG fallback
 * - Responsive images with srcset
 * - Lazy loading (configurable)
 * - Loading states with skeleton
 * - Error handling with fallback
 */

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  sizes,
  priority = false,
  onLoad,
  onError,
  objectFit = 'contain',
  fallbackSrc = null,
  showSkeleton = true
}) => {
  const [loadState, setLoadState] = useState('loading');
  const [imgSrc, setImgSrc] = useState(src);

  // Generate WebP source if PNG is provided
  const webpSrc = src?.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const hasDifferentWebp = webpSrc !== src;

  // Generate srcset for responsive images
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc) return '';
    
    // Extract file extension
    const ext = baseSrc.match(/\.(png|jpg|jpeg|webp)$/i)?.[0] || '';
    const baseWithoutExt = baseSrc.replace(ext, '');
    
    // For logo images, create different sizes
    // Example: logo.png -> logo-sm.png, logo-md.png, logo-lg.png
    return `
      ${baseWithoutExt}-sm${ext} 96w,
      ${baseWithoutExt}-md${ext} 192w,
      ${baseWithoutExt}-lg${ext} 384w,
      ${baseSrc} 512w
    `.trim();
  };

  const handleLoad = () => {
    setLoadState('loaded');
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setLoadState('error');
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setLoadState('loading');
    } else if (onError) {
      onError();
    }
  };

  const skeletonClassName = `animate-pulse bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 ${className}`;
  
  const imgClassName = `
    ${className}
    transition-opacity duration-300
    ${loadState === 'loaded' ? 'opacity-100' : 'opacity-0'}
  `.trim();

  return (
    <div className="relative inline-block" style={{ width, height }}>
      {/* Loading Skeleton */}
      {showSkeleton && loadState === 'loading' && (
        <div 
          className={skeletonClassName}
          style={{ 
            width: width || '100%', 
            height: height || '100%',
            objectFit 
          }} 
        />
      )}

      {/* Optimized Image with WebP support */}
      <picture>
        {/* WebP source for modern browsers */}
        {hasDifferentWebp && (
          <source
            type="image/webp"
            srcSet={generateSrcSet(webpSrc)}
            sizes={sizes}
          />
        )}
        
        {/* Fallback to original format */}
        <img
          src={imgSrc}
          srcSet={generateSrcSet(imgSrc)}
          sizes={sizes}
          alt={alt}
          className={imgClassName}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={handleLoad}
          onError={handleError}
          style={{ 
            objectFit,
            ...(loadState !== 'loaded' && { position: 'absolute', top: 0, left: 0 })
          }}
        />
      </picture>

      {/* Error state */}
      {loadState === 'error' && !fallbackSrc && (
        <div 
          className="flex items-center justify-center bg-slate-200 dark:bg-slate-800 rounded"
          style={{ width: width || '100%', height: height || '100%' }}
        >
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Image unavailable
          </span>
        </div>
      )}
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sizes: PropTypes.string,
  priority: PropTypes.bool,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  objectFit: PropTypes.string,
  fallbackSrc: PropTypes.string,
  showSkeleton: PropTypes.bool
};

export default OptimizedImage;
