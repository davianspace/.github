/**
 * Web Font Loader - Asynchronous Font Loading Strategy
 * 
 * This utility provides:
 * 1. Async font loading without blocking render
 * 2. FOUT (Flash of Unstyled Text) prevention
 * 3. Font loading status tracking
 * 4. Fallback font system
 * 
 * Usage: Automatically runs on page load
 */

class FontLoader {
  constructor() {
    this.fonts = [
      {
        family: 'Orbitron',
        weights: [400, 500, 600, 700, 800, 900],
        fallback: 'monospace'
      },
      {
        family: 'Space Grotesk',
        weights: [400, 500, 600, 700],
        fallback: 'sans-serif'
      },
      {
        family: 'Sora',
        weights: [300, 400, 500, 600, 700],
        fallback: 'sans-serif'
      }
    ];
    
    this.fontLoadTimeout = 3000; // 3 second timeout
    this.fontsLoaded = false;
  }

  /**
   * Initialize font loading
   */
  async init() {
    // Check if Font Loading API is supported
    if (!('fonts' in document)) {
      console.warn('Font Loading API not supported, fonts will load normally');
      return;
    }

    try {
      // Wait for fonts to load with timeout
      await Promise.race([
        this.loadFonts(),
        this.timeout(this.fontLoadTimeout)
      ]);

      this.onFontsLoaded();
    } catch (error) {
      console.warn('Font loading timeout or error:', error);
      this.onFontsLoadFailed();
    }
  }

  /**
   * Load all configured fonts
   */
  async loadFonts() {
    const fontPromises = [];

    for (const font of this.fonts) {
      for (const weight of font.weights) {
        const fontFace = new FontFace(
          font.family,
          `url(https://fonts.gstatic.com/s/${this.getFontPath(font.family, weight)})`,
          {
            weight: weight.toString(),
            style: 'normal',
            display: 'swap'
          }
        );

        fontPromises.push(fontFace.load());
      }
    }

    // Load all fonts in parallel
    const loadedFonts = await Promise.allSettled(fontPromises);
    
    // Add successfully loaded fonts to document
    loadedFonts.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        document.fonts.add(result.value);
      }
    });

    return loadedFonts;
  }

  /**
   * Helper to create timeout promise
   */
  timeout(ms) {
    return new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Font load timeout')), ms)
    );
  }

  /**
   * Get font path for Google Fonts
   * Note: This is simplified - actual implementation should use the real Google Fonts URLs
   */
  getFontPath(family, weight) {
    // This is a placeholder - in reality, fonts are loaded via the preloaded stylesheet
    return `${family.toLowerCase().replace(/\s+/g, '')}/v1/${family}-${weight}.woff2`;
  }

  /**
   * Called when fonts successfully load
   */
  onFontsLoaded() {
    this.fontsLoaded = true;
    document.documentElement.classList.add('fonts-loaded');
    
    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('fontsloaded', {
      detail: { fonts: this.fonts }
    }));

    console.log('✓ Fonts loaded successfully');
  }

  /**
   * Called when font loading fails or times out
   */
  onFontsLoadFailed() {
    document.documentElement.classList.add('fonts-failed');
    console.warn('Font loading failed or timed out, using fallbacks');
  }

  /**
   * Check if fonts are loaded
   */
  areFontsLoaded() {
    return this.fontsLoaded;
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const loader = new FontLoader();
    loader.init();
  });
} else {
  const loader = new FontLoader();
  loader.init();
}

export default FontLoader;
