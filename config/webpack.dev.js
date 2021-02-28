const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: '',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  }
};

module.exports = merge(commonConfig, devConfig);
