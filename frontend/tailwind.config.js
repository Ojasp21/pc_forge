/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'homepagebg' : "url('./src/images/homepagebg.png')"
      }
    },
  },
  plugins: [],
}