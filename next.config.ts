import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
      },
    ],
  },
};

export default nextConfig;
