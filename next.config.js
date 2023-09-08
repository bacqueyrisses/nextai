/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 500,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'em-content.zobj.net',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
