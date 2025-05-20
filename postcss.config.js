const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    purgecss({
      content: ['./**/*.html'],
    })
  ]
};
