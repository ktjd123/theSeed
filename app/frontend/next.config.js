/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
