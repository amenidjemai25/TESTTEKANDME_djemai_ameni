/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yellow: "#F4C02F",
      black: {
        100: "#2B2B2B",
        75: "#2B2B2B75",
        70: "#2B2B2B70",
        50: "#2B2B2B50",
        12: "#2B2B2B12",
      },
      white: "#FCFCFC",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
