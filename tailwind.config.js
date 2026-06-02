/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2540',
          50: '#F4F7FB',
          100: '#E1EAF5',
          200: '#C3D5EB',
          300: '#8BAFD4',
          400: '#5088BD',
          500: '#2B6298',
          600: '#1A4D7A',
          700: '#13395E',
          800: '#0A2540',
          900: '#061A2E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
}
