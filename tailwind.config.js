/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // lets us toggle dark mode manually instead of following OS settings
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4ade80',
          DEFAULT: '#16a34a',
          dark: '#15803d',
        },
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4ade80',
          DEFAULT: '#16a34a',
          dark: '#15803d',
        },
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': {
            textShadow: '0 0 0px rgba(255,255,255,0)',
            transform: 'scale(1)',
          },
          '50%': {
            textShadow: '0 0 20px rgba(255,255,255,0.6)',
            transform: 'scale(1.02)',
          },
        },
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}