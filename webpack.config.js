const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/public/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports  = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
          ],
      },
      {
          test: /\.scss$/,
          use: [{
              loader: 'style-loader', // creates style nodes from JS strings
            },
          {
              loader: 'css-loader', // translates CSS into CommonJS
            },
          {
              loader: 'sass-loader', // compiles Sass to CSS
              options: {
                includePaths: ['absolute/path/a', 'absolute/path/b'],
              },
            },
        ],
        },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
};
