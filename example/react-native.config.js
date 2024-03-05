const path = require('path');

// @ts-check
/** @type {import('@react-native-community/cli-types').Config} */
module.exports = {
  dependencies: {
    'react-native-pos-tools': {
      root: path.join(__dirname, '..'),
    },
  },
};
