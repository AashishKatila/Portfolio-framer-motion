/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tourney: ['"Tourney"'],
        poppins: ['"Poppins"'],
      },
      keyframes: {

        "bubble":{
          '0%': {
            transform: 'translateY(0) rotate(0deg)',
            opacity: '0.6',
            borderRadius: '0',
          },
          '100%': {
            transform: 'translateY(-1400px) rotate(720deg)',
            opacity: '0',
            borderRadius: '70%',
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
    },
    animation:{
      "bubble": "bubble 25s linear infinite",
      "meteor-effect": "meteor 5s linear infinite",
    },
  },
  },
  plugins: [tailwindcssAnimate],
}