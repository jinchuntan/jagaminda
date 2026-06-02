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
        medical: {
          DEFAULT: '#3B82F6',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(10, 37, 64, 0.04), 0 4px 12px rgba(10, 37, 64, 0.03)',
        'card-hover': '0 4px 16px rgba(10, 37, 64, 0.08), 0 1px 4px rgba(10, 37, 64, 0.04)',
        'elevated': '0 8px 30px rgba(10, 37, 64, 0.06), 0 2px 8px rgba(10, 37, 64, 0.04)',
        'glow': '0 0 40px rgba(59, 130, 246, 0.08)',
      },
    },
  },
  plugins: [],
}
