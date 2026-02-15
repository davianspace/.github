import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
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
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Source maps for debugging in production
    sourcemap: true,
    // Asset inlining threshold (10kb default - inline small CSS)
    assetsInlineLimit: 10240, // Inline CSS under 10KB to eliminate render-blocking
    // CSS code splitting
    cssCodeSplit: false // Bundle all CSS into one file for better caching
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  }
});
