/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          50: '#E0F7FF',
          100: '#B3E8FF',
          200: '#87DFFF',
          300: '#5BCFFF',
          400: '#2FC0FF',
          500: '#00BFFF', // Base sky blue
          600: '#0099CC',
          700: '#007399',
          800: '#004D66',
          900: '#002633',
        },
      },
    },
  },
  plugins: [],
};
