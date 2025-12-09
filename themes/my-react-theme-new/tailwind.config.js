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
        primary: '#2563eb',
        secondary: '#64748b',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
