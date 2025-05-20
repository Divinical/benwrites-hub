const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    purgecss({
      content: ['./*.html', './*.js'],
      safelist: [
        'visible',
        'hidden',
        'fade',
        'scroll-reveal',
        'reveal',
        'dark',
        'light',
        'data-theme',
        'toolkit-reveal',
        'forge-card',
        'toolkit-toggle-wrapper',
        'section-divider-svg',
        'section-divider-wrapper'
      ]
    })
  ]
};