const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: './bin/playlib.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
