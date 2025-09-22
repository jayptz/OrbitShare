import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    unoptimized: true,
  },
  
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react'],
  },
  
  // Webpack configuration for OGL and TDZ prevention
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    
    // Handle OGL library properly
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    
    // Prevent TDZ issues by ensuring proper module loading order
    config.optimization = {
      ...config.optimization,
      sideEffects: false,
    };
    
    return config;
  },
};

export default nextConfig;
