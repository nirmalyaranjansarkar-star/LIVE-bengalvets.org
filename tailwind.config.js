/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#070e22', 900: '#0b1530', 800: '#13214a', 700: '#1c2f63' },
        gold: { 300: '#ecd08a', 400: '#e0b95a', 500: '#d4a63c', 600: '#b48a2a' },
        cream: '#faf6ec', ink: '#f5f1e6', mist: '#a9b3cc',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        caps: ['Cinzel', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        bn: ['"Noto Serif Bengali"', 'serif'],
      },
    },
  },
  plugins: [],
};
