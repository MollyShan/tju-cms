'use strict';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: path.resolve(__dirname, '../app/index.js')
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.runtime.min.js',
			'@': path.resolve(__dirname, '../src')
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(['css-loader'])
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'less-loader'])
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	],
	node: false
}