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
          50: '#F0F4FA',
          100: '#D9E4F5',
          200: '#B3C9EB',
          300: '#6B9AD4',
          400: '#3A75BD',
          500: '#1A5198',
          600: '#0E3D7A',
          700: '#0A2F5E',
          800: '#0A2540',
          900: '#071B2E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
