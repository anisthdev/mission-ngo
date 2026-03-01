/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3E2723', // Rich Espresso-800
          light: '#5D4037',
          dark: '#211512',
        },
        secondary: {
          DEFAULT: '#795548', // Coffee-600
          light: '#A1887F',
          dark: '#3E2723',
        },
        accent: {
          DEFAULT: '#D97706', // Amber-600
          light: '#F59E0B',
          dark: '#B45309',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'Roboto', 'sans-serif'],
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
