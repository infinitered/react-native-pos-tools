const path = require('path');
const pak = require('../package.json');

/** @type {import('@babel/core').ConfigFunction} */
module.exports = function (api) {
  api.cache.never();

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          extensions: ['.tsx', '.ts', '.js', '.json'],
          alias: {
            // For development, we want to alias the library to the source
            [pak.name]: path.join(__dirname, '..', pak.source),
          },
        },
      ],
    ],
  };
};
