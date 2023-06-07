/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e0c56e",
        dark: "#483a23",
        light: "#f7ebae",
        tokens: "#e1bc2e",
        prosperity: "#543e7f",
      },
      backgroundImage: {
        "everdell-bg": "url('./public/everdell_bg.png')",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss"), require("@headlessui/react")],
};
