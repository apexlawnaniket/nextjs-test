/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  distDir: 'dist',
  basePath: isProd ? '/nextjs-test' : '',
};

module.exports = nextConfig;
