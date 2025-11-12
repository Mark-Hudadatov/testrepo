import { NextConfig } from 'next';

/** @type {NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
