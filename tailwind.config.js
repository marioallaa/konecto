const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        color: {
          'k-light-blue': 'var(--k-light-blue)',
          'k-purple': 'var(--k-purple)',
          'dark-1': 'var(--dark-1)',
          'dark-2': 'var(--dark-2)',
        },
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
      },
      backgroundColor: {
        body: 'var(--bg-body)',
        card: 'var(--dark-1)',
      },
      fontFamily: {
        base: ['var(--font-family-base)', 'sans-serif'],
        secondary: ['var(--font-family-secondary)', 'sans-serif'],
      },
      backgroundImage: {
        'launch-section': 'url(/images/home/launch-section.png)',
        'price-section': 'url(/images/things/price-gradient.svg)',
      },
      screens: {
        xs: '475px',
        lgx: '1200px',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addUtilities, addComponents }) {
      const utilities = {
        '.bg-gradient-primary': {
          background: 'var(--gradient-main)',
        },
        '.bg-gradient-primary-hover': {
          background: 'var(--gradient-main-hover)',
        },
        '.bg-gradient-secondary': {
          background: 'var(--gradient-main-secondary)',
        },
        '.text-gradient-primary': {
          background: 'var(--gradient-main)',
          backgroundClip: 'text',
          color: 'transparent',
        },
        '.text-gradient-primary-hover': {
          background: 'var(--gradient-main-hover)',
          backgroundClip: 'text',
          color: 'transparent',
        },
      }

      addUtilities(utilities)
    }),
  ],
}
