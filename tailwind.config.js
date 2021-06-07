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
      fontSize: {
        base: ["1rem", 1.55], // 16px
        lg: ["1.1875rem", 1.55], // 19px
        xl: ["1.375rem", 1.55], // 22px
        "2xl": ["1.5625rem", 1.55], // 25px
        "3xl": ["1.875rem", 1.55], // 30px
        "4xl": ["2.4375rem", 1.55], // 39px
      },
      colors: {
        warmGray: {
          600: "#4B4A46",
        },
        red: {
          600: "#E63209",
        },
      },
      maxWidth: {
        "screen-2xl": "1552px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
