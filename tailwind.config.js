/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        prim: "#44ADEE",
        sec: "#E9498C",
      },
      keyframes: {
        animateBoxProjects: {
          from: { transform: "translateX(70vw)" },
          to: { transform: "translateX(0vw)" },
        },
        animateBoxTeams: {
          from: { transform: "translateX(0vw)" },
          to: { transform: "translateX(70vw)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar", "flowbite/plugin")],
};
