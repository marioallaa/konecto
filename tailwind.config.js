module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        color: {
          'k-light-blue': '#20D1FD',
          'k-purple': '#9642FF',
        },
        textColor: {
          primary: '#FFFFFF',
          secondary: '#EBEBF599',
          tertiary: '#FFFFFF66',
        },
        backgroundColor: {
          body: '#000000',
        },
      },
      fontFamily: {
        base: ['var(--font-family-base)', 'sans-serif'],
        secondary: ['var(--font-family-secondary)', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
