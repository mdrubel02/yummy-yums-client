/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mainThem: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors:{
        primary:'#FD8311',
        secondary:'#313D4D',
        accent:'#d2d2d240', 
        background:'#0201010d', 
      }
    },
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

