/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        legal: {
          navy: '#0F2144',
          marine: '#142859',
          royal: '#1D4789',
          red: '#C5221F',
          gold: '#B4821A',
          ice: '#F0F4F4',
          paper: '#F8F9FA',
        },
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Be Vietnam Pro"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Be Vietnam Pro"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
