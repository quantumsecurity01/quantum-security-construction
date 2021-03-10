// next.config.js
const { withPlugins, optional } = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');

// next.js configuration
const nextConfig = {
  env: {
    customKey: 'value',
    //put your sendgrid api key
    SENDGRID_API_KEY: '',
  },
  // crossOrigin: 'anonymous',
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Will make webpack look for these modules in parent directories
      // 'shared-ui': require.resolve('shared-ui/src'),
      // '@your-project/styleguide': require.resolve('@your-project/styleguide'),
      // ...
    };
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      optional(() => require('next-transpile-modules')),
      {
        transpileModules: ['@deadline/common', '@deadline/components'],
      },
    ],
    [withCSS],

    // add a plugin without a configuration
    withOptimizedImages,
    [withFonts],
  ],
  nextConfig
);
