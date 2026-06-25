/**
 * Image optimization utilities for lazy loading and compression
 */

export interface OptimizedImage {
  original: string;
  webp?: string;
  thumbnail?: string;
  alt: string;
}

/**
 * Generate srcset for responsive images
 */
export function generateSrcSet(imagePath: string): string {
  return `${imagePath}?w=400 400w, ${imagePath}?w=800 800w, ${imagePath}?w=1200 1200w`;
}

/**
 * Create optimized image object with multiple formats
 */
export function createOptimizedImage(
  imagePath: string,
  alt: string,
  formats: { webp?: boolean; thumbnail?: boolean } = {}
): OptimizedImage {
  const baseImage: OptimizedImage = {
    original: imagePath,
    alt,
  };

  if (formats.webp) {
    baseImage.webp = imagePath.replace(/\.(jpg|png)$/, ".webp");
  }

  if (formats.thumbnail) {
    baseImage.thumbnail = imagePath.replace(/\./, "_thumb.");
  }

  return baseImage;
}

/**
 * Calculate optimal image dimensions maintaining aspect ratio
 */
export function calculateImageDimensions(
  containerWidth: number,
  aspectRatio: number = 16 / 9
): { width: number; height: number } {
  return {
    width: containerWidth,
    height: Math.round(containerWidth / aspectRatio),
  };
}

/**
 * Preload images for better performance
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
    img.src = src;
  });
}

/**
 * Batch preload multiple images
 */
export async function preloadImages(srcs: string[]): Promise<void> {
  try {
    await Promise.all(srcs.map(src => preloadImage(src)));
  } catch (error) {
    console.warn("Some images failed to preload:", error);
  }
}