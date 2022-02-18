/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  async redirects() {
    return [
      {
        source: '/ko',
        destination: '/random',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/tw',
        destination: '/zh-TW',
      }
    ]
  }
}

module.exports = nextConfig
