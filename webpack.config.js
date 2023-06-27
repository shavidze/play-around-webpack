const HtmlWebpackPlugin = require("html-webpack-plugin");
const { web } = require("webpack");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const loadPresets = require("./build-utils/presets/loadPresets");
const modeConfig = (env) => require(`./build-utils/webpack.${env}.js`)(env);

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return merge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.jpe?g$/,
            use: [{ loader: "url-loader", options: { limit: 5000 } }],
          },
        ],
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode)
    //loadPresets({ mode, presets })
  );
};
