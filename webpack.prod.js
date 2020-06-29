'use strict';
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const cssnano = require('cssnano');
const proConfig = {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'example/build'),
    filename: "[name].js"
  },
  plugins: [
    // css 压缩 使用某种模式
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano
    }),
  ],
}
module.exports = merge(baseConfig,proConfig)
