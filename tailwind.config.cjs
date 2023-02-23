/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        "VeryLightGrayishBlue":"hsl(240, 78%, 98%)",
        "LightGrayishBlue":"hsl(234, 14%, 74%)",
        "GrayishBlue":"hsl(233, 13%, 49%)",
        "DarkGrayishBlue":"hsl(232, 13%, 33%)",
        "gradient1": "hsl(236, 72%, 79%)",
        "gradient2":"hsl(237, 63%, 64%)"},
      fontFamily: {
        "monserrat":["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}
