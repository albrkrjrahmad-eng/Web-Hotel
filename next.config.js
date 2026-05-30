/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/Web-Hotel',
  assetPrefix: '/Web-Hotel/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
