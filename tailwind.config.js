/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prim: "#44ADEE",
        sec: "#E9498C",
      },
      keyframes: {
        animateBox: {
          from: { transform: "translateX(0px)" },
          to: { transform: "translateX(80vw)" },
        },
      },
    },
  },
  plugins: [],
};
