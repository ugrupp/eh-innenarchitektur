const { extendDefaultPlugins } = require("svgo");

module.exports = {
  plugins: extendDefaultPlugins([
    {
      name: "inlineStyles",
      params: {
        onlyMatchedOnce: false,
      },
    },
    {
      name: "prefixIds",
    },
  ]),
};
