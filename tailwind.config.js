const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "colors": {
        "Noir": "#000000",
        "Noir-80": "#000000",
        "Blanc": "#ffffff",
        "Turquoise": "#2dd2e9",
        "BleuVert": "#46bcbc",
        "Marron-fonce": "#bc8f8f",
        "Rouge": "#da2424",
        "Gris": "#d9d9d9",
        "Bleu-foncer": "#3c7ba6",
        "Vert-foncer": "#abbe34",
        "Rose": "#d3609e",
        "Jaune": "#e9d521"
      },
      "fontSize": {
        "base": "1.5rem",
        "lg": "2rem",
        "xl": "2.25rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        "4xl": "4rem",
        "5xl": "5rem"
      },
      "fontFamily": {
        "made-okine-sans-personal-use": "MADE Okine Sans PERSONAL USE"
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.9375rem"
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
