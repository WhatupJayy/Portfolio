/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kohoRegular:['kohoRegular'],
        kohoBold:['kohoBold'],
        kohoSemibold:['KohoSemibold']
      },

      backgroundImage: {
        'parallax1': 'url("assets/moonbg.png")',
        'parallax2': 'url("assets/football.png")',
        'parallax3': 'url("assets/code.jpg")'
      },
      fontSize: {
        'xxs':'0.8rem'
      }
    },
  },
  plugins: [],
}

