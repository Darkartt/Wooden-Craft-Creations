/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['facebook.com', 'scontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

module.exports = nextConfig;
