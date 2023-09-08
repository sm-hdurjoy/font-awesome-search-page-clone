/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': '#183153',
        'custom-bg-gray': '#F0F1F3',
        'card-hover-yellow': '#FFD43B'

      },
    },
  },
  plugins: [],
}

