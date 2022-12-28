module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '570px',
      // => @media (min-width: 570px) { ... }
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      'green': '#04B90B',
      'black': '#23262F',
      'dark': '#141416',
      'gray3': '#353945',
      'gray4': '#777E90',
      'gray5': '#B1B5C3',
      'gray6': '#E6E8EC',
      'gray7': '#F4F5F6',
      'white': '#FCFCFD'
    },
    fontFamily: {
      'poppins': 'Poppins',
      'alice': 'Alice'
    }
  },
  plugins: [],
}