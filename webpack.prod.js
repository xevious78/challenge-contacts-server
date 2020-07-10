var nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  output: {
    filename: './prod/main.js',
  },
    target: 'node',
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
    
  };