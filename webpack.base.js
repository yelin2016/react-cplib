const path = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
module.exports = {
  entry: {
    index: './example/index.jsx',
  },
  output: {
    path: path.join(__dirname, 'example/dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader'
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
              name: '[name].[ext]'
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
              name: '[name].[ext]'
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.jsx','.js']
  },
  plugins: [
    // 抽离css 文件
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CleanWebpackPlugin(),
    // 可以设置参数 压缩html
    new HtmlWebpackPlugin({
      title: 'react-test',// html文件标题
      filename: 'index.html',// 生成的html文件名
      template: './index.html', //文件模板
      //hash: true,// 是否生成hash(js css)
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
  stats: 'errors-only',
}
