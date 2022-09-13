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
        'extra-loose': '2.5',
        '12': '3rem',
        '20': '80px'
    },
    aspectRatio: {
      '4/3': '4 / 3',
    },
    flexBasis: {
      '1/9': '11.1111111%',
      '8/9': '88.999999%',
      
    }
  },
  plugins: [],
}
}