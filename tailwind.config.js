/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      'biru': '#0F4C82',
      'white': '#fff'
    },
    minHeight: {
      '1/2': '50%',
    },
    extend: {
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
        barlowCondensed: ['Barlow Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
};
