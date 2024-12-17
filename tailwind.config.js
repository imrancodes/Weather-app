/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      screens:{
        'media550': '550px'
      },
    },
    fontFamily:{
      'main-font': ["Varela Round"]
    }
  },
  plugins: [],
}

