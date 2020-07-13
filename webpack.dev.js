const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin"); // Ding

module.exports = {
  mode: "development",
  output: {
    filename: "./dev/main.js",
    devtoolModuleFilenameTemplate: '[absolute-resource-path]'

  },

  devtool: "source-map",

  target: "node",
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
  },
  watch: true,
  watchOptions: {
    ignored: [/node_modules/, /dist/],
    aggregateTimeout: 100
  },

  plugins: [
    // new webpack.SourceMapDevToolPlugin({
    //   filename: "./dev/[name].js.map",
    // }),
    new NodemonPlugin({
      nodeArgs: ["--inspect=37021"],
    })
  ]
};
