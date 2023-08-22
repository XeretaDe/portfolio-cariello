const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter, sans-serif",
        rubik: ["var(--font-rubik)"],
        wave: "Wavefont, cursive"
      },
      colors: {
        "home-color": "#6D6875",
        "3d-color": "#B5838D",
        "portfolio-color": "#E5989B",
        "light-mode": "#F5F5F5",
        "dark-mode": "#0B0B0B",
        "light-surface": "#FFFFFF",
        "dark-surface": "#1F1F1F",
      },
      transitionDelay: {
        0: "0ms",
        300: "300ms",
      },
      transitionTimingFunction: {
        InOutCirc: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
        InOutExpo: "cubic-bezier(1.0, 0.0, 0.0, 1.0)",
      },
    },
  },
  plugins: [],
};
