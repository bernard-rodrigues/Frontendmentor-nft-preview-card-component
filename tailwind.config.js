/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        softBlue: 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',

        veryDarkBlueBG: 'hsl(217, 54%, 11%)',
        veryDarkBlueCardBG: 'hsl(216, 50%, 16%)',
        veryDarkBlueLine: 'hsl(215, 32%, 27%)',
        white: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        outfit: "'Outfit', sans-serif;"
      }
    },
  },
  plugins: [],
}
