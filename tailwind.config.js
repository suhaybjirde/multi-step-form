/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      Ubuntu: ["Ubuntu", 'sans-serif'],
    },
    screens: {
      md: '660px' 
    },
    animation:{
      rightToLeftFade: 'rightToLeftFade 500ms linear forwards',
      leftToRightFade: 'leftToRightFade 500ms linear forwards',
    },
    keyframes: {
      rightToLeftFade: {
        '0%': {
          opacity: '0',
          transform: 'translateX(10%)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0%)'
        }
      },
      leftToRightFade: {
        '0%': {
          opacity: '0',
          transform: 'translateX(-10%)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0%)'
        }
      }
    },
    colors: {
      "white": "hsl(0, 0%, 100%)",
      "primary": {
        100: "hsl(354, 84%, 57%)",
        200: "hsl(206, 94%, 87%)",
        300: "hsl(228, 100%, 84%)",
        400: "hsl(243, 100%, 62%)",
        500: "hsl(213, 96%, 18%)"
      },
      "neutral": {
        100: "hsl(231, 100%, 99%)",
        200: "hsl(217, 100%, 97%)",
        300: "hsl(229, 24%, 87%)",
        400: "hsl(231, 11%, 63%)"
      }
    }
  },
  plugins: [],
}