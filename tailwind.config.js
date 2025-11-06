/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9'
        }
      },
      backgroundImage: {
        'grid-glow': "radial-gradient(circle at 25% 25%, rgba(139,92,246,0.2), transparent 40%), radial-gradient(circle at 75% 25%, rgba(59,130,246,0.2), transparent 45%)"
      }
    }
  },
  plugins: []
};
