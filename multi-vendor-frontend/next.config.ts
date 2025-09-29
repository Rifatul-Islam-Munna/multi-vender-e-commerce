import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    cssChunking: true,
    reactCompiler: true,
    viewTransition: true,
  },
  images: {
    remotePatterns:[{
      hostname:"placehold.co"
    }]
  }
  /* config options here */
};

export default nextConfig;
