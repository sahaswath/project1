/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'custom': '390px',
      },
      color:{
        myblue:"#3973f4",
      },
    },
  },
  plugins: [],
}

