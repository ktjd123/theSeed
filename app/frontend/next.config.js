/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
  },
  poweredByHeader: false,
  async rewrites() {
    if (process.env.NODE_ENV !== "production") {
      return [
        {
          source: "/:path*",
          destination: "http://localhost/:path*",
        },
      ];
    }
  },
};

module.exports = nextConfig;
