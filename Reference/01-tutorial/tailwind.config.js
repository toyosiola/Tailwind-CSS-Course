/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/03-states-and-responsive-design/**/*.{html,js}"],
  darkMode: "class",
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
      spacing: {
        // 98: "30rem",
        // 100: "32rem",
      },
      screens: {
        xs: "480px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
