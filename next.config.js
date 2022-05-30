const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["lries.com"],
    minimumCacheTTL: 86400,
  },
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
});
