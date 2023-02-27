module.exports = {
  plugins: [
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("postcss-preset-env")({ stage: 1 }),
  ],
};
