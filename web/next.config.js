/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    swcFileReading: false,
  },
  poweredByHeader: false,
}

module.exports = nextConfig
