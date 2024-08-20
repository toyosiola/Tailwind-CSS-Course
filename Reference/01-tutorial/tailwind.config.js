/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/01-basics/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        // roboto: '"Roboto", "sans-serif"',
        // roboto: "var(--roboto)",
      },
      fontSize: {
        "10xl": ["25rem", "1.5"],
      },
      lineHeight: {
        "extra-loose": "5",
      },
      fontWeight: {
        "extra-extra-bold": "900",
      },
      colors: {
        primary: "#000",
      },
      listStyleType: {
        upperRoman: "upper-roman",
        "lower-roman": "lower-roman",
      },
    },
  },
  plugins: [],
};
