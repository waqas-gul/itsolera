/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'], // Add the Inter font
    },
    colors: {
      CPurple: '#7A3F56', // Custom color for primary use
      cDarkBlue: '#3C4073',
      cWhite: "#FFFFFF",
      cgray: "#FAFAFA",
      textGray: "#757575",
      cBlack: "#000000",
      lightBlue: "#B2B8D3",
      CcradColor: "#333661"



    },
    height: {
      'custom-632': '632px',
      'custom-480': "480px",
      'custom-442': "442px"

    },
    width: {
      'custom-322': '322px',
      'custom-544': '544px',
      'custom-1050': '1440px',
      'custom-535': '535px',


    },
    extend: {


      spacing: {
        '104': '104px', // Custom spacing for top/bottom margin
        '160': '160px', // Custom spacing for left/right margin
        "187": "187px",
        "79": "70px",
        "80": "80px"

      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      borderWidth: {
        '0.5': '0.5px',
      },

    },


  },
  plugins: [],
}