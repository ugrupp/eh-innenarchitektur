const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./templates/**/*.twig",
    "./assets/**/*.{js,ts,vue}",
    "./tailwind-jit-safelist.txt",
  ],
  media: false, // or 'media' or 'class'
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
        xs: ["0.75rem", 1.55], // 12px
        sm: ["0.9375rem", 1.55], // 15px
        base: ["1rem", 1.55], // 16px
        lg: ["1.1875rem", 1.55], // 19px
        xl: ["1.375rem", 1.55], // 22px
        "2xl": ["1.5625rem", 1.55], // 25px
        "3xl": ["1.875rem", 1.55], // 30px
        "4xl": ["2.4375rem", 1.55], // 39px
      },
      colors: {
        warmGray: {
          50: "#f9f9f9",
          600: "#4b4a46",
        },
        red: {
          600: "#e63209",
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
