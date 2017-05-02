let path = require('path');
let webpack = require('webpack')
let StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin')
let siteConfig = require('./config');

let BUILD = process.env.BUILD;
let ENV = process.env.ENV;

let plugins = [];
let entry = {};
let output = {};

if (BUILD == 'style') {
  plugins.push(new ExtractTextPlugin('[name]', {
    allChunks: true
  }));
  entry['static/css/style.css'] = path.resolve(__dirname, 'scss', 'app.scss');

  output = {
    filename: 'static/js/style.js',
    path: 'static',
    libraryTarget: 'umd'
  };
}

if (BUILD == 'static') {
  plugins.push(new StaticSiteGeneratorPlugin('render', siteConfig.routes, siteConfig));
  entry['render'] = './render.js';

  output = {
    filename: 'static/js/bundle.js',
    path: 'static',
    libraryTarget: 'umd'
  };
}

if (ENV == 'production') {
  plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );
}

plugins.push(new CopyWebpackPlugin([{
  from: 'images',
  to: 'static/images'
}]));


module.exports = exports = {
  resolve: {
    root: path.resolve(__dirname, 'src')
  },
  devtool: 'inline-source-map',
  entry: entry,
  output: output,
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: [/\.scss$/, /\.css$/],
      loader: ExtractTextPlugin.extract('css!sass')
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  plugins: plugins
};