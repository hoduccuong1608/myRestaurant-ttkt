/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shope': '#000000de',
      },
      lineHeight: {
        '56' : '56px',
    },
    aspectRatio: {
      '4/3': '4 / 3',
    },
  },
  plugins: [],
}
}