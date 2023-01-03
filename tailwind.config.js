/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '301px',
      'md': '500px',
      'lg': '1000px'
    },
    colors: {
      orange: '#C14627',
      black: '#000',
      white: '#FFF',
      brown: '#591D0C',
      yellow: '#FAA626',
      dbrown: '#3d2b1f',
      borange: '#f3742e'
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
