const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const packageJson = require('../package.json');

const isDevelopment = process.env.NODE_ENV === 'development';

const domains = {
  ComponentLibraryAndUtils: isDevelopment ? 'http://localhost:3100' : process.env.PRODUCTION_DOMAIN + '/ComponentLibraryAndUtils/latest',
};

domains.ComponentLibraryAndUtils = 'https://component-lib-and-utils.netlify.app';

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'MainApp',
      remotes: {
        ComponentLibraryAndUtils: `ComponentLibraryAndUtils@${domains.ComponentLibraryAndUtils}/remoteEntry.js`
      },
      shared: packageJson.dependencies,
    }),
  ],
};
