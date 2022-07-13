/** @type {import("next").NextConfig} */

const {i18n} = require("./next-i18next.config");
const withPlugins = require("next-compose-plugins");
var path = require("path");
const withTM = require("next-transpile-modules")([]);
const removeImports = require("next-remove-imports")();

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false
});

const nextConfig = {
  reactStrictMode: false,
  i18n,
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ["pages", "lib", "components"] // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  devIndicators: {
    autoPrerender: true,
    buildActivity: true
  },
  images: {
    // domains: ['http://localhost:1070'],
  },
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "../../"),
  serverRuntimeConfig: {
    secret: 'ppd-config'
  },
  publicRuntimeConfig: {
    // apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:1002/api' : 'http://localhost:1002/api'
  }
};

module.exports = withPlugins([withBundleAnalyzer, withTM], removeImports(nextConfig));