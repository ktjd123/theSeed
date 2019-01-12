/* eslint-disable */
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [withCss],
  [
    withSass,
    {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[folder]__[name]__[local]___[hash:base64:5]',
      },
      sassLoaderOptions: {
        includePaths: ['styles'],
        data: "@import 'utils';",
      },
    },
  ],
]);
