/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"],
        lexend: ["Lexend Zetta", "sans-serif"],
      },
    },
    screens: {
      txs: "280px",
      xxs: "400px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smd: "900px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }, colors :{
      'statsbg': '#1e1e1e' //background color for stats section
    },
    backgroundSize:{
      '18%': '18%', //background size for stats section
      '33%':'33%' //background size for stats section
    },
    backgroundPosition:{
      'top-4': 'center top 4.5rem', //background position for stats section
      'left-bottom': 'left bottom',
      'right-bottom': 'right bottom',
    }
  },
  plugins: [],
});
