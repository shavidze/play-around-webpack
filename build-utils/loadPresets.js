const webpackMerge = require("webpack-merge");
module.exports = (env) => {
  const { presets } = env;
  console.log({ presets });
  /**@type {string[]} */
  const mergePresets = [].concat(...[presets]);
  console.log({ mergePresets });
  const mergeConfigs = mergePresets.map((presetName) =>
    require(`./presets/webpack.${presetName}`)(env)
  );
  console.log({ mergeConfigs });
  return webpackMerge({}, ...mergeConfigs);
};
