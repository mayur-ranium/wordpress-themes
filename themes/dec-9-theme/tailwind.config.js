module.exports = {
  content: [
    './**/*.{html,js,jsx,php}',
    './blocks/**/*.{js,jsx}',
    './parts/**/*.html',
    './templates/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        secondary: '#ec4899',
        accent: '#06b6d4',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
