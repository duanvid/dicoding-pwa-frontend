const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { merge } = require('webpack-merge');
// eslint-disable-next-line prefer-destructuring
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
    }),
    new BundleAnalyzerPlugin(),
    new WebpackPwaManifest({
      filename: 'app.webmanifest',
      name: 'Hot Food finder',
      short_name: 'FoodHub',
      description: 'List of Restaurant Selling Spicy Food in Indonesia',
      display: 'standalone',
      start_url: './index.html',
      theme_color: '#2DC2A3',
      inject: false,
      fingerprints: false,
      background_color: '#FFFFFF',
      icons: [
        {
          src: path.resolve('src/public/icons/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve('src/public/icons/maskable_icon.png'),
          size: '512x512',
          purpose: 'maskable',
        },
      ],

    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
});
