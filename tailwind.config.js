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
          DEFAULT: '#2D5A27', // Forest Green
          light: '#4A8C42',
          dark: '#1E3D1A',
        },
        secondary: {
          DEFAULT: '#8B4513', // Saddle Brown
          light: '#A0522D',
          dark: '#5D2E0C',
        },
        accent: {
          DEFAULT: '#E67E22', // Warm Ochre
          light: '#F39C12',
          dark: '#D35400',
        },
        'warm-sand': '#FDF5E6',
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
