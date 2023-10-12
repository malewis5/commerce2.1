const { withLogtail } = require('@logtail/next');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'cdn.shopify.com'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = withLogtail(nextConfig);
