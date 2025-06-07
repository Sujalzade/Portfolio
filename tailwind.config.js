/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        'gold-dark': '#B8860B',
        'gold-light': '#FFED4E',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.8s ease-out forwards',
        'slideIn': 'slideIn 0.8s ease-out forwards',
        'goldGlow': 'goldGlow 2s ease-in-out infinite',
      },
      boxShadow: {
        'gold': '0 10px 25px -3px rgba(255, 215, 0, 0.1), 0 4px 6px -2px rgba(255, 215, 0, 0.05)',
        'gold-lg': '0 20px 25px -5px rgba(255, 215, 0, 0.2), 0 10px 10px -5px rgba(255, 215, 0, 0.1)',
        'gold-xl': '0 25px 50px -12px rgba(255, 215, 0, 0.3)',
      },
    },
  },
  plugins: [],
};