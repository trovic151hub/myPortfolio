/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        brand: '#00ff88',
        dark: '#080c14',
        card: '#0d1321',
      },
      fontFamily: {
        heading: ['Syne', 'Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        body: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      gridTemplateColumns: {
        'contact': '1fr 1.6fr',
      },
    },
  },
  plugins: [],
};
