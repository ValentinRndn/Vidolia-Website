// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{vue,js,ts}', // Inclure toutes les pages
    './components/**/*.{vue,js,ts}', // Inclure tous les composants
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#B2DCFF',
          200: '#024FCF',
          300: '#091555',
          400: '#161B33',
        },
        secondary: {
          100: '#F5EFEB',
          200: '#ebe6e3',
        },
      },
      fontFamily: {
        'elzaRegular': ['ElzaRegular', 'sans-serif'],
        'elzaBold': ['ElzaBold', 'sans-serif'],
        'elzaLight': ['ElzaLight', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-vertical': 'linear-gradient(to top, #01032c, #012899 100%)',
         'landing': "url('/assets/images/index/bg-landing.webp')",
         'landing-bleach': "url('/assets/images/boutique/bleach_wallpaper.webp')",
         'tebexCard': "url('/assets/images/index/backgroundTebex.png')",
         'blueTexture': "url('/assets/images/index/bgBleu.png')",
         'server-card': 'linear-gradient(to top, #1e40af,  5%,#0f172a 100%)',
         'server-card-bottom': 'linear-gradient(to bottom, #1e40af,  5%,#0f172a 100%)',
         'logo-server-card': 'linear-gradient(to top, #1e40af,  30%,#0f172a 100%)',
         'button-gradient': 'linear-gradient(to right, #1e40af,  50%,#0f172a 100%)'

      },


      screens: {
        'sm': {'max': '639px'}, // jusqu'à 640px
        'md': {'max': '767px'}, // jusqu'à 768px
        'lg': {'max': '1023px'}, // jusqu'à 1024px
        'xl': {'max': '1279px'}, // jusqu'à 1280px
        '2xl': {'max': '1535px'}, // jusqu'à 1536px
      },


    },
  },
  plugins: [],
}
