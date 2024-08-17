/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c",
        "primary-light": "#2d3748",
        "primary-dark": "#0f141a",
        secondary: "#2d3748",
        "secondary-light": "#4a5568",
        "secondary-dark": "#1c2733",
        accent: "#f6ad55",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
