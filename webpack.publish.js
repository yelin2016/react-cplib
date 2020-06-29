"use strict";
const path = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
module.exports = {
  entry: {
    index: "./src/index.jsx"
  },
  output: {
    path: path.join(__dirname, "lib"),
    filename: "index.js",
    libraryTarget: "umd", //发布组件专用
    libraryExport: "default",// 兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: "babel-loader"
      },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader,//提取一个独立的文件
          'css-loader']
      },
      {
        test: /.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({
                overrideBrowserslist: ['last 2 version', '>1%', 'ios 7'],
              })
            ]
          },
        },
        ]
      },
      {
        test: /.(png|jpg|gif|jpej)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  },
  resolve: {
    extensions: ['.jsx','.js']
  },
  plugins: [
    // 抽离css 文件
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
    // css 压缩 使用某种模式
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano
    }),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ],
  stats: "errors-only"
};
