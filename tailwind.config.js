/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

// https://tailwindcss.com/docs/theme#referencing-the-default-theme
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L363
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Albert Sans', ...defaultTheme.fontFamily.sans],
        cursive: ['Grape Nuts', 'cursive'],
      },
    },
  },
  plugins: [],
};
