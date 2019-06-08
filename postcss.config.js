/* eslint-disable */

module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    // autoprefixer: {
    //   browsers: ['last 2 versions'],
    //   flexbos: 'no-2009',
    // },
    require('postcss-preset-env')({
      autoprefixer: {
        overrideBrowserslist: ['last 3 versions'],
      },
      stage: 3,
    }),
  ],
};
