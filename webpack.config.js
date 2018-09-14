const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: './src/js/devMain.js',
	output: {
		path: __dirname,
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	plugins: [
		new UglifyJSPlugin({
			uglifyOptions: {
				beautify: false,
				ecma: 6,
				compress: true,
				comments: false
			}
		})
	],
	stats: { colors: true }
};