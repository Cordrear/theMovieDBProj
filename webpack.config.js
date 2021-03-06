const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            //options: {
            //  modules: true,
            //  importLoaders: 1,
            //  localIdentName: '[name]_[local]_[hash:base64]',
            //  sourceMap: true,
            //  minimize: true,
            //},
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
};
