/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red : '#A7504C',
        black : '#0D1117',
        darkgrey : '#14181E',
        grey : '#7E7F80',
        bordergrey: '#383B3E',
        pink: '#c15bbc',
        white: '#BFC0C0',
        blue: '#16859D'
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
}

