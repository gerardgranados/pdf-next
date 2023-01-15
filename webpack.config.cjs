const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
module.exports = {
  name: "server",
  entry: "./server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  externals: [webpackNodeExternals()],
  target: "node",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.tsx?$/,
  //         loader: "esbuild-loader",
  //         exclude: /node_modules/,
  //         options: {
  //           loader: "tsx",
  //           target: "es2015",
  //         },
  //       },
  //       {
  //         test: /\.s[ac]ss$/i,
  //         use: ["style-loader", "css-loader", "sass-loader"],
  //       },
  //     ],
  //   },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
