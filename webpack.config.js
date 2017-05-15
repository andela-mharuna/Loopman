const webpack = require('webpack');
const dotenv = require('dotenv').config();
console.log(dotenv.config());
const env = dotenv.parsed;

console.log(env, JSON.stringify(env.API_KEY));

module.exports = {
  devtool: 'eval-source-map',
  entry: {
      main: [
          './src/main.js',
      ]
  },
  output: {
      filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process': {
        'env': {
          'API_KEY': JSON.stringify(env.API_KEY)
        }
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            "presets": ['react', 'es2015']
        }
    },

      {
        test: /\.scss$/,
        loaders: [
          'style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'
        ]
      }
    ]
  }


 }
