/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      light1 : '#e7d3d3',
      light2 : '#f0e4e4',
      light3 : '#ffffff',
      dark1: '#362222',
      dark2: '#423F3E',
      dark3: '#171010',
      textL: '#F9F9F3',
      textD: '#2a2a2a',
      borderColor: '#4C4B4B',
      borderColorL: '#D3D3D3'
    }
  },
  plugins: [],
}
