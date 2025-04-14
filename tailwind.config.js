/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        textPrimary: '#333333',
      },
      fontFamily: {
        gelasio: ['Gelasio', 'serif'],
      },
    },
  },
  plugins: [],
}
