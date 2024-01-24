/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#F2A320",
        secondary:"#FBE6D6",
        tertiary:"#2D2D2D",
        quaternary:"#ED7801",
        quinary:"#8B542F",
      }
    },
  },
  plugins: [],
}