/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Custom Uber Colors
      'uber-black': '#000000',
      'uber-dark-gray': '#1E1E1E',
      'uber-light-gray': '#F6F6F6',
      'uber-green': '#1E9455',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'], 
    },
  },
}