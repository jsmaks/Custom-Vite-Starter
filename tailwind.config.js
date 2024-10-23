/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,njk,css,js,json}'],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    // CONTAINER
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', // 1.25rem
        sm: '1rem', // 1.25rem
        md: '2rem', // 2rem
        xl: '2rem', // 2.5rem
        xxl: '3.5rem', //
      },
    },
    // BASE FONT
    fontFamily: {
      quick: ['Quicksand', 'sans-serif'],
    },
    // SHADOW
    boxShadow: {
      orange: '2px 8px 29px rgba(240, 127, 46, 0.2)', // class="shadow-orange"
      blue: '5px 5px 20px 0px rgba(2, 133, 254, 0.2)',
    },
    // THEME
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
      backgroundImage: {
        check: "url('../images/components/agree-checkbox.svg')",
      },
      // ALL COLORS
      colors: {
        body: '#ffffff', // class="bg-body"
        black: {
          DEFAULT: '#000000', // class="bg-black text-black border-black"
          light: '#202020', // class="bg-black-light text-black-light border-black-light"
          dark: '#010101', // class="bg-black-dark text-black-dark border-black-dark"
          extralight: '#6E6E6E',
          '1A': '#1A1A1A',
          '06': '#060606',
          37: '#373737',
        },
        white: {
          DEFAULT: '#ffffff',
          FD: '#F9F8FD',
          DD: '#DDDDDD',
          F3: '#F3F3F3',
        },
        blue: {
          FF: '#2A60FF',
          DD: '#0038DD',
          67: '#112667',
        },

        accent: '#2E43A4', // class="bg-accent text-accent border-accent"
        primary: '#f1f1f1',
        second: '#f2f2f2',
        'green-61': '#B0E061',
        'green-32': '#82B232',
        'gray-ED': '#EDEDED',
        'gray-E0': '#E0E0E0',
      },

      // ANIMATION
      animation: {
        marquee: 'marquee 35s linear infinite',
        'marquee-md': 'marquee 45s linear infinite',
        'marquee-xl': 'marquee 100s linear infinite',
        marquee2: 'marquee2 35s linear infinite',
        'marquee2-md': 'marquee2 45s linear infinite',
        'marquee2-xl': 'marquee2 100s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
