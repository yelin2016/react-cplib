'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',
  plugins: [
    // hot update
    new webpack.HotModuleReplacementPlugin(),
  ],
  // hot update
  devServer: {
    contentBase: './example/dist',
    hot: true,
    historyApiFallback: true,//开发环境下路由问题（刷新404问题）
  },
  devtool: 'source-map'
}
module.exports = merge(baseConfig,devConfig);
