/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: { 500: '#6366f1', 600: '#4f46e5' },
        cyan: { 400: '#22d3ee' },
        dark: { 900: '#030712', 800: '#0a0f1e', 700: '#060c1a', 600: '#111827' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'scroll-left': 'scrollLeft 25s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        scrollLeft: { to: { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
}
