/**
 * Image Optimization Script for Davian Space
 * 
 * This script automatically:
 * 1. Converts PNG images to WebP format
 * 2. Creates multiple size variants (sm, md, lg) for responsive images
 * 3. Optimizes compression while maintaining quality
 * 4. Generates all required files for optimal performance
 * 
 * Usage: node scripts/optimize-images.js
 * 
 * Prerequisites: npm install --save-dev sharp
 */

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  // Input/output directories
  assetsDir: path.join(__dirname, '../public/assets'),
  
  // Image configurations
  images: {
    // Logo images (landscape 841x446 aspect ratio ~1.89:1)
    logos: {
      files: ['Light.png', 'dark.png'],
      sizes: {
        sm: { width: 96, quality: 85 },   // Mobile navbar
        md: { width: 192, quality: 85 },  // Tablet
        lg: { width: 384, quality: 85 },  // Desktop hero
        full: { width: 512, quality: 85 } // Full quality
      }
    },
    
    // App icons/favicons (square aspect ratio)
    icons: {
      files: [], // Will be populated dynamically
      sizes: {
        sm: { width: 48, quality: 90 },  // Thumbnail
        full: { width: 96, quality: 90 } // Display size
      }
    }
  },
  
  // Quality settings
  webpQuality: 85,
  pngQuality: 90,
  
  // Optimization options
  webpOptions: {
    quality: 85,
    effort: 6, // 0-6, higher = smaller file but slower
    lossless: false
  },
  
  pngOptions: {
    quality: 90,
    compressionLevel: 9,
    adaptiveFiltering: true
  }
};

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

/**
 * Format bytes to human-readable size
 */
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Get file size
 */
async function getFileSize(filePath) {
  try {
    const stats = await fs.stat(filePath);
    return stats.size;
  } catch {
    return 0;
  }
}

/**
 * Process a single image with multiple size variants
 */
async function processImage(inputPath, sizes, type = 'logos') {
  const baseName = path.basename(inputPath, path.extname(inputPath));
  const inputDir = path.dirname(inputPath);
  
  let totalSavings = 0;
  let originalSize = 0;
  const results = [];

  console.log(`\n${colors.bright}${colors.blue}Processing: ${baseName}${colors.reset}`);
  
  try {
    originalSize = await getFileSize(inputPath);
    console.log(`  Original size: ${formatBytes(originalSize)}`);
    
    // Load original image
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    console.log(`  Dimensions: ${metadata.width}x${metadata.height}`);

    // Process each size variant
    for (const [sizeName, config] of Object.entries(sizes)) {
      const suffix = sizeName === 'full' ? '' : `-${sizeName}`;
      
      // Calculate height maintaining aspect ratio
      const width = config.width;
      const height = Math.round(width * (metadata.height / metadata.width));
      
      // WebP version
      const webpPath = path.join(inputDir, `${baseName}${suffix}.webp`);
      await sharp(inputPath)
        .resize(width, height, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp(CONFIG.webpOptions)
        .toFile(webpPath);
      
      const webpSize = await getFileSize(webpPath);
      results.push({
        file: path.basename(webpPath),
        size: webpSize,
        dimensions: `${width}x${height}`
      });
      
      // PNG fallback version (except for full size - keep original)
      if (sizeName !== 'full') {
        const pngPath = path.join(inputDir, `${baseName}${suffix}.png`);
        await sharp(inputPath)
          .resize(width, height, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .png(CONFIG.pngOptions)
          .toFile(pngPath);
        
        const pngSize = await getFileSize(pngPath);
        results.push({
          file: path.basename(pngPath),
          size: pngSize,
          dimensions: `${width}x${height}`
        });
      }
    }
    
    // Calculate savings
    const totalGenerated = results.reduce((sum, r) => sum + r.size, 0);
    totalSavings = originalSize - totalGenerated;
    
    // Display results
    console.log(`\n  ${colors.green}✓ Generated variants:${colors.reset}`);
    results.forEach(r => {
      console.log(`    ${r.file.padEnd(30)} ${formatBytes(r.size).padStart(10)} (${r.dimensions})`);
    });
    
    const savingsPercent = ((totalSavings / originalSize) * 100).toFixed(1);
    console.log(`  ${colors.cyan}Total savings: ${formatBytes(totalSavings)} (${savingsPercent}%)${colors.reset}`);
    
    return {
      baseName,
      originalSize,
      totalSavings,
      filesCreated: results.length
    };
    
  } catch (error) {
    console.error(`  ${colors.red}✗ Error processing ${baseName}:${colors.reset}`, error.message);
    return {
      baseName,
      originalSize: 0,
      totalSavings: 0,
      filesCreated: 0,
      error: error.message
    };
  }
}

/**
 * Main optimization function
 */
async function optimizeImages() {
  console.log(`${colors.bright}${colors.blue}
╔═══════════════════════════════════════════════════════╗
║         Image Optimization Script - Davian Space      ║
╚═══════════════════════════════════════════════════════╝
${colors.reset}`);

  const startTime = Date.now();
  const allResults = [];

  try {
    // Ensure assets directory exists
    await fs.access(CONFIG.assetsDir);
    console.log(`${colors.green}✓${colors.reset} Assets directory: ${CONFIG.assetsDir}\n`);
  } catch {
    console.error(`${colors.red}✗ Assets directory not found: ${CONFIG.assetsDir}${colors.reset}`);
    process.exit(1);
  }

  // Process logo images
  console.log(`${colors.bright}${colors.yellow}[1/2] Processing Logo Images${colors.reset}`);
  console.log('─'.repeat(55));
  
  for (const filename of CONFIG.images.logos.files) {
    const filePath = path.join(CONFIG.assetsDir, filename);
    
    try {
      await fs.access(filePath);
      const result = await processImage(filePath, CONFIG.images.logos.sizes, 'logos');
      allResults.push(result);
    } catch {
      console.log(`${colors.yellow}⚠ Skipping ${filename} (file not found)${colors.reset}`);
    }
  }

  // Summary
  console.log(`\n${colors.bright}${colors.blue}
╔═══════════════════════════════════════════════════════╗
║                    Summary Report                     ║
╚═══════════════════════════════════════════════════════╝
${colors.reset}`);

  const totalOriginalSize = allResults.reduce((sum, r) => sum + r.originalSize, 0);
  const totalSavings = allResults.reduce((sum, r) => sum + r.totalSavings, 0);
  const totalFilesCreated = allResults.reduce((sum, r) => sum + r.filesCreated, 0);
  const totalErrors = allResults.filter(r => r.error).length;

  console.log(`Original total size:    ${formatBytes(totalOriginalSize)}`);
  console.log(`Generated files:        ${totalFilesCreated} variants`);
  console.log(`${colors.green}Total savings:          ${formatBytes(totalSavings)} (${((totalSavings/totalOriginalSize)*100).toFixed(1)}%)${colors.reset}`);
  
  if (totalErrors > 0) {
    console.log(`${colors.red}Errors encountered:     ${totalErrors}${colors.reset}`);
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\nCompleted in ${duration}s`);

  console.log(`\n${colors.bright}${colors.green}✓ Optimization complete!${colors.reset}`);
  console.log(`\nNext steps:`);
  console.log(`  1. Verify images in: ${CONFIG.assetsDir}`);
  console.log(`  2. Test locally: npm run dev`);
  console.log(`  3. Build production: npm run build`);
  console.log(`  4. Deploy to hosting platform`);
  console.log(`  5. Test with PageSpeed Insights\n`);
}

// Run the optimization
optimizeImages().catch(error => {
  console.error(`${colors.red}Fatal error:${colors.reset}`, error);
  process.exit(1);
});
