/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      
      },
    },
extend: {
  colors: {
    'primary-500': '#ec4899',    // Romantic rose (pink)
    'primary-600': '#db2777',    // Deeper romantic pink
    'secondary-500': '#fbbf24',  // Keep this warm yellow (optional)
    'off-white': '#fce4ec',      // Soft pastel pink
    'red': '#f43f5e',            // Romantic red for errors
    'dark-1': '#2d0b39', // Deep romantic berry
    'dark-2': '#3c0f52', // Purple-pink twilight
    'dark-3': '#541863', // Mauve sunset shadow
    'dark-4': '#732c7b', // Rosy violet blush
    'light-1': '#fff1f6',        // Blush white (text)
    'light-2': '#fde7f3',        // Romantic light background
    'light-3': '#dab6fc',        // Pale lavender-pink (hover rings etc.)
    'light-4': '#b084cc',        // Soft lavender (placeholder, borders)
  },
  screens: {
    'xs': '480px',
  },
  width: {
    '420': '420px',
    '465': '465px',
  },
  fontFamily: {
    inter: ['Inter', 'sans-serif'],
  },
  keyframes: {
    'accordion-down': {
      from: { height: 0 },
      to: { height: 'var(--radix-accordion-content-height)' },
    },
    'accordion-up': {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: 0 },
    },
  },
  animation: {
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out',
  },
}
,
  },
  plugins: [require('tailwindcss-animate')],
};

