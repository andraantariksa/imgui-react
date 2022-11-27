/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#20324d',
        secondary: '#274972',
        'secondary-active': '#4296fa',
        'text-primary': '#d3dae2'
      }
    },
  },
  plugins: [],
}
