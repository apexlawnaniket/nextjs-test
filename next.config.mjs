/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'producation';
const nextConfig = {
  basePath : isProd ? '/nextjs-test' : '',
};

export default nextConfig;
