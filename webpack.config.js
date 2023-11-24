const path = require('path');

module.exports = {
  entry: './bin/playlib.js',
  output: {
    filename: 'playlib.js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'development',
};