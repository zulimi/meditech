/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    colors: {
      'biru': '#0F4C82',
      'white': '#fff',
      'zinc800': '#27272a',
      'mgsb1': '#F0F6F6',
      'mgsb2': '#BBE6E4',
      'black': '#000000'
    },
    minHeight: {
      '1/2': '50%',
    },
    extend: {
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
        barlowCondensed: ['Barlow Condensed', 'sans-serif']
      },
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',
        'layout': '200px minmax(900px, 1fr) 100px'
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
