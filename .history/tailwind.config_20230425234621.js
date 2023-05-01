/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
  plugins: [require("daisyui")],
}

