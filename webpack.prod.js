const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
	mode: 'production',
    entry: './src/js/scale.js',
    output: {
        path:__dirname + '/dist',
        filename: 'scales.js',
        libraryTarget: 'var',
        library: 'scales'
    }
});