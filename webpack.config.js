const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = ({ mode }) => ({
  mode,
  output: {
    filename: "bundle.js",
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
});
