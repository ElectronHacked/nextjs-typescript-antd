const withPlugins = require('next-compose-plugins');

const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const nextRuntimeDotenv = require('next-runtime-dotenv');

const path = require('path');

const withConfig = nextRuntimeDotenv({
  public: ['API_URL'],
});

module.exports = withPlugins(
  [
    [withTypescript],
    [withCSS],
    [withLess],
    [withSass],
    [withConfig],
    [withBundleAnalyzer],
  ],
  {
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html',
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html',
      },
    },
    webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty',
      };
      // Added aliases
      config.resolve.alias = {
        '@root': path.join(__dirname),
        config: path.resolve(__dirname, 'lib/config.shim'),
      };

      return config;
    },
  }
);
