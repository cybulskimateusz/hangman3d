const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.jsx',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: [/node_modules/, /\.(test|spec).(js|jsx)?$/],
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gltf)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    public: 'localhost:8080',
    hot: true,
    host: '0.0.0.0',
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.SourceMapDevToolPlugin({}),
  ],
};
