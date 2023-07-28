/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /api\/.*/,
        loader: 'ignore-loader',
      })
    }
    return config
  },

}

module.exports = nextConfig
