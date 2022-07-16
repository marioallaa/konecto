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
        },
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
      },
      backgroundColor: {
        body: 'var(--bg-body)',
      },
      fontFamily: {
        base: ['var(--font-family-base)', 'sans-serif'],
        secondary: ['var(--font-family-secondary)', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addUtilities }) {
      const utilities = {
        '.bg-gradient-primary': {
          background: 'var(--gradient-main)',
        },
        '.text-gradient-primary': {
          background: 'var(--gradient-main)',
          backgroundClip: 'text',
        },
      }
      addUtilities(utilities)
    }),
  ],
}
