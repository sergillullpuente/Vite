const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        yanone: ['"Yanone Kaffeesatz"', ...defaultTheme.fontFamily.sans],
        ebg: ['"EB+Garamond"']
      }
    },
  },
  plugins: [],
}
