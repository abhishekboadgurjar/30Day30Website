/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['@/components'],
  },
  compiler: {
    removeConsole: true,
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;
