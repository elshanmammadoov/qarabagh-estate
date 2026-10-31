/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: { DEFAULT: '#09090A', 900: '#09090A', 800: '#0F0F10', 700: '#161615', 600: '#1F1E1C' },
        champagne: { DEFAULT: '#C9A96A', light: '#E8D6A8', dark: '#9A7B45' },
        pearl: { DEFAULT: '#F2EDE4', muted: '#B9B3A9', dim: '#7D786F' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        caps: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      letterSpacing: { luxe: '0.32em' },
    },
  },
  plugins: [],
};
