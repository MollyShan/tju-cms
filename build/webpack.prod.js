'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': 'production'
		}),
		new UglifyJsPlugin({
			parallel: true
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html'),
			inject: true
		})
	]
});