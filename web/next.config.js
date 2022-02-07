/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    swcFileReading: false,
    externalDir: true,
  },
  poweredByHeader: false,
}

module.exports = nextConfig
