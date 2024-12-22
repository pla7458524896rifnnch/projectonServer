/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        custom: ['CustomFont', 'sans-serif'],
      },
        colors: {
          primary: '#00572C',
          background: '#FAEEDC',
          beige: "#FAF5EE"
        },
    }
  },
  plugins: [],
}
