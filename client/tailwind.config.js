/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {
    extend: {
      keyframes: {
        "roll": {
          from: { transform: 'rotate(0deg)'},
          to: { transform: 'rotate(-360deg)'},
        },
      },
      animation: {
        'one-roll': 'roll .25s linear',
      }
    },
  },
  plugins: [],
};