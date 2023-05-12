/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        textBlue: '#2F80ED',
      },
      fontFamily: {
        sans: [
          'system-ui',
          'Roboto',
        ],
      }
    },
  },
  plugins: [],
}

