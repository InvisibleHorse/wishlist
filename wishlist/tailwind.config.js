/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wish-main': '#DAD7CD',
        'wish-dark-green': '#344E41',
        'wish-card-beige': '#FDFCF7',
        'wish-gray-bg': '#DDD9CD',
        'wish-green-lighter': '#588157',
        'wish-green-mid': '#A3B18A',
        'wish-green-main': '#3A5A40',
        'gray-disabled': '#EBEBEB',
        'gray-disabled-text': '#DDD9CD',
        'light-beige-text': '#E5E5E5',
        'wish-red': '#BD3F3F',
      },
      fontFamily: {
        'italiana': ['Italiana', 'sans-serif'],
        'inter': ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
