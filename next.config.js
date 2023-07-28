/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /YOUR FOLDER NAME\/.*/,
        loader: 'ignore-loader',
      })
    }
  },

}

module.exports = nextConfig
