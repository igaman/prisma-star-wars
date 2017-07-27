const path = require('path');
const root = path.resolve(__dirname);
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS =  new ExtractTextPlugin('bundle.css', {
	allChunks: true
	});
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//webpack-dev-server --hot --inline --content-base ./

module.exports = {
	entry: {
		app: ['./css/main.scss','./js/main.js']
	},
	output: {
		path: __dirname + '/dist/',
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/,
				include: root
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader?url=false', 'sass-loader']
				})
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			}
		]
	},
	plugins: [
		extractCSS,
		new OptimizeCssAssetsPlugin({
			cssProcessorOptions: { discardComments: {removeAll: true } }
		}),
		new webpack.optimize.UglifyJsPlugin({
			comments: false
		})
	]
}