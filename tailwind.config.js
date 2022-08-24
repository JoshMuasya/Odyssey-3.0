/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      orange: '#C14627',
      black: '#000',
      white: '#FFF',
      brown: '#591D0C',
      yellow: '#FAA626',
      dbrown: '#3d2b1f'
    },
    fontSize: {
      's': '16px',
      'm': '24px',
      'l': '32px',
      'lg': '40px',
      'xl': '48px',
      'xxl': '80px',
    },
    extend: {},
  },
  plugins: [],
}
