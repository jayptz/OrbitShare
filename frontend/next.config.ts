import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports for better performance
  output: 'standalone',
  
  // Optimize images
  images: {
    unoptimized: true,
  },
  
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react'],
  },
  
  // Webpack configuration for OGL
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};

export default nextConfig;
