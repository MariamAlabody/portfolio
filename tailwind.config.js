/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",     
        secondary: "#F59E0B",   
      },
      fontFamily: {
        arabic: ['"Cairo"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
