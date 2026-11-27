/** @type {import('tailwindcss').Config} */
// v4 palette: "Belgachia heritage" — sandstone canvas, BVC brick red, marigold accent, warm kohl dark.
export default {
  content: ['./index.html', './register.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: { 50: '#faf4e8', 100: '#f2e8d5', 200: '#e9dbc0', 300: '#dbc5a0', 400: '#c9ab7c' },
        ink: { DEFAULT: '#2b2019', soft: '#54443a', mute: '#76645a' },
        brick: { 400: '#c25a45', 500: '#a8402e', 600: '#8c3022', 700: '#6c2218' },
        marigold: { 200: '#fbe2a6', 300: '#f7c65e', 400: '#efab2c', 500: '#e1951a', 600: '#b8760f' },
        kohl: { 950: '#140e0b', 900: '#1c1511', 800: '#2a201a', 700: '#3a2d24' },
        // kept for the policy pages
        mist: '#76645a',
      },
      fontFamily: {
        display: ['Fraunces', '"Noto Serif Bengali"', 'Georgia', 'serif'],
        sans: ['Manrope', '"Noto Sans Bengali"', 'system-ui', 'sans-serif'],
        bn: ['"Noto Serif Bengali"', 'serif'],
      },
      letterSpacing: { kicker: '0.28em' },
    },
  },
  plugins: [],
};
