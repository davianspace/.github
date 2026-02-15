/**
 * Font Loading Strategy Script
 * 
 * This script optimizes Google Fonts loading to prevent render-blocking
 * and improve LCP (Largest Contentful Paint).
 * 
 * Strategy:
 * 1. Start with system fonts (instant)
 * 2. Load Google Fonts asynchronously
 * 3. Swap when loaded (minimal FOUT)
 */

(function() {
  'use strict';
  
  // Check if fonts are already cached
  if (sessionStorage.fontsLoaded) {
    // Use requestAnimationFrame to avoid forced reflow
    requestAnimationFrame(function() {
      document.documentElement.classList.add('fonts-loaded');
    });
    return;
  }
  
  // Font Face Observer pattern
  if ('fonts' in document) {
    // Modern browsers with Font Loading API
    Promise.all([
      document.fonts.load('1em Orbitron'),
      document.fonts.load('1em Space Grotesk'),
      document.fonts.load('1em Sora')
    ]).then(function() {
      // Batch DOM updates with requestAnimationFrame to prevent forced reflow
      requestAnimationFrame(function() {
        document.documentElement.classList.add('fonts-loaded');
        sessionStorage.fontsLoaded = true;
      });
    }).catch(function(error) {
      console.warn('Font loading failed:', error);
      // Continue with system fonts
    });
  } else {
    // Fallback for older browsers - use requestAnimationFrame for optimal timing
    requestAnimationFrame(function() {
      document.documentElement.classList.add('fonts-loaded');
      sessionStorage.fontsLoaded = true;
    });
  }
})();
