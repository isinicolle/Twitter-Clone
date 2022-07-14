/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          base: 'hsl(203,89%,53%)',
          light: 'hsl(203,89%,46%)',
          dark: 'hsl(203,89%,96%)',
          },
          gray:{
            dark: '#657786',
            light: '#AABBC2',
            extraLight: '#E1EBED',
            Lightest: '#F5F8Fa',

          },
          black: '#14171A',
          },
    },
  },
  plugins: [],
}
