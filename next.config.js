/** @type {import("next").NextConfig} */

const {i18n} = require("./next-i18next.config");
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([]);
const removeImports = require('next-remove-imports')();

const nextConfig = {
  reactStrictMode: false,
  distDir: 'build',
  i18n,
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ["pages", "lib", "components"] // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  devIndicators: {
    autoPrerender: false,
  },
  images: {
    // domains: ['http://localhost:1070'],
  },
};

module.exports =   withPlugins([withTM], removeImports(nextConfig));