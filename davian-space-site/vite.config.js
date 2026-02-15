import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Custom plugin to defer CSS loading
function deferCSSPlugin() {
  return {
    name: 'defer-css',
    enforce: 'post',
    transformIndexHtml(html) {
      // Transform CSS link to use media="print" trick for async loading
      let cssLinks = [];
      const transformed = html.replace(
        /<link([^>]*?)rel="stylesheet"([^>]*?)>/gi,
        (match, before, after) => {
          // Skip if already has media attribute or is a font
          if (match.includes('media=') || match.includes('fonts.googleapis')) {
            return match;
          }
          
          // Store original link for noscript fallback
          cssLinks.push(match);
          
          // Add media="print" and onload handler for async CSS
          const asyncLink = `<link${before}rel="stylesheet"${after} media="print" onload="this.media='all';this.onload=null;">`;
          
          // Add noscript fallback immediately after
          return `${asyncLink}\n    <noscript>${match}</noscript>`;
        }
      );
      
      return transformed;
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    deferCSSPlugin()
  ],
  base: "/",
  // esbuild configuration for production
  esbuild: {
    drop: ['console', 'debugger'], // Remove console.log and debugger in production
    legalComments: 'none'
  },
  build: {
    // Enable content-based hashing for cache busting
    rollupOptions: {
      output: {
        // Consistent hash-based naming for long-term caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Keep image names consistent for proper srcset resolution
          if (/\.(png|jpe?g|webp|svg|gif|ico)$/i.test(assetInfo.name)) {
            return 'assets/[name].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        },
        // Manual chunking for better code splitting
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            // React core and react-dom together (prevents circular dependency)
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              return 'react-vendor';
            }
            // Lucide icons - split into separate chunk
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            // Other vendor code
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Source maps for debugging in production
    sourcemap: true,
    // Asset inlining threshold - increased to inline CSS
    assetsInlineLimit: 15360, // Inline assets under 15KB including CSS
    // CSS code splitting
    cssCodeSplit: false, // Bundle all CSS into one file for better caching
    // Minification with esbuild (faster and built-in)
    minify: 'esbuild',
    target: 'es2015'
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  },
  // CSS optimization
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      css: {
        // Minimize CSS output
        charset: false
      }
    }
  }
});
