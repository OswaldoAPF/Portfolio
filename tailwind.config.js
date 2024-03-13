/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['quicksand', 'serif']
      },
      boxShadow: {
        '3xl': '0px -1px 8px rgba(0, 0, 0, 0.4)',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
