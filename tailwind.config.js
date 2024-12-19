/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      screens:{
        'media550': '550px',
        'media450': '450px'
      },
    },
    fontFamily:{
      'main-font': ["Varela Round"]
    }
  },
  plugins: [],
}

