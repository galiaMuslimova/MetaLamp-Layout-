const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const pages = ['index', 'room', 'login', 'signin', 'catalog', 'empty'];
const htmlPlugins = pages.map(fileName => new HTMLWebpackPlugin({  
  template: `pages/${fileName}/${fileName}.pug`,
  filename: `${fileName}.html`,
  favicon: `favicon.jpg`
}));
const uiKit = ['cards', 'colors', 'forms', 'insertions'];
const uiKitHtmlPlugins = uiKit.map(fileName => new HTMLWebpackPlugin({
  template: `ui-kit/${fileName}/${fileName}.pug`,
  filename: `ui-kit/${fileName}.html`
}))

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',  
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs'),
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@c': path.resolve(__dirname, 'src/components/'),
    }
  },
  devServer: {
    port: 4000
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ].concat(htmlPlugins).concat(uiKitHtmlPlugins),
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        },
          'css-loader',
          'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  }
};