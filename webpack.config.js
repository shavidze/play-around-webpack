const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = ({ mode }) => ({
  mode,
  output: {
    filename: "bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
});
