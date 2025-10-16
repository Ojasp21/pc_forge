/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bungee : ['Bungee Tint','serif'],
        nabla : ['Nabla', 'serif'],
        honk : ['Honk', 'serif'],
        trainone : ["Train One", 'serif'],
        yatra : ['Yatra One', 'serif'],
        metrop : ['Metrophobic', 'serif'],
        doto : ["Doto", 'serif'],
        host : ["Host Grotesk", 'serif'],
        rubik : ["Rubik Mono One", 'serif'],
        martian : ["Martian Mono", 'serif'],
        audiowide : ["Audiowide", 'serif']
      },
      backgroundImage:{
  'homepagebg' : "url('/images/homepagebg.png')",
  'Edit': "url('/images/Edit.jpg')",
  'Loginbg': "url('/images/Loginbg.jpg')",
}
    },
  },
  plugins: [],
}
