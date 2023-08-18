/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#071a3b',
        secondary: '#d22630',
        accent: 'rgba(255, 255, 255, 0.6)',
      },
      fontFamily: {
        almarai: ['Almarai', 'Arial', 'sans-serif'],
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
    },
  },
};
