module.exports = ({ mode }) => ({
  mode: mode,
  output: {
    filename: "[chunkhash].js",
  },
});
