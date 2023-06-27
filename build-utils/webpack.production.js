const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = ({ mode }) => ({
  mode: mode,
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
});
