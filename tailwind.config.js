module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'autoFit': 'repeat(auto-fit, minmax(100px, 1fr))',
        'autoFill': 'repeat(auto-fill, minmax(100px, 1fr))'
      }
    },
  },
  plugins: [],
}
