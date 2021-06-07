const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./templates/**/*.twig",
    "./assets/**/*.{js,ts,vue}",
    "./tailwind-jit-safelist.txt",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontWeight: {
      light: 300,
      normal: 400,
    },
    extend: {
      fontFamily: {
        sans: ["neue-haas-grotesk-display", "sans-serif"],
        mono: [
          "basier_square_mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      colors: {
        warmGray: {
          600: "#4B4A46",
        },
        red: {
          600: "#E63209",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
