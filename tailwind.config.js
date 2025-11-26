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
          DEFAULT: '#F9A825',
          light: '#FFB74D',
          dark: '#F57F17',
        },
        secondary: {
          DEFAULT: '#1565C0',
          light: '#42A5F5',
          dark: '#0D47A1',
        },
        accent: {
          DEFAULT: '#43A047',
          light: '#66BB6A',
          dark: '#2E7D32',
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
