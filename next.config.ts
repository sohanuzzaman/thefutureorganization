import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable image optimization for better performance and caching
    unoptimized: false,
    // Allow images from WordPress and local assets
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.thefutureorganization.com',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'thefutureorganization.com',
        pathname: '/wp-content/**',
      },
    ],
    // Optimize images with different sizes for responsive loading
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for better performance
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
};

export default nextConfig;
