/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'picsum.photos', 'cdn.shopify.com'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
