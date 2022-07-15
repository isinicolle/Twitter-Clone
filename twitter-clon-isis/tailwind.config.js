/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          base: 'hsl(203,89%,53%)',
          light: 'hsl(203,89%,46%)',
          dark: 'hsl(203,89%,16%)',
          },
          gray:{
            dark: '#657786',
            light: '#AABBC2',
            extraLight: '#EBF6FD',
            Lightest: '#F5F8Fa',

          },
          black: '#14171A',
          },
    },
  },
  plugins: [],
}
