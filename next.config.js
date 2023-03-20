/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  basePath: isProduction ? '/MineInAbyss.io' : '',
  assetPrefix: isProduction ? '/MineInAbyss.io/' : '',
}

module.exports = nextConfig;
