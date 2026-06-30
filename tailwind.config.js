/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: '#6D28D9',
          light: '#C4B5FD',
        },
        lime: {
          DEFAULT: '#a3e635',
          glow: 'rgba(163, 230, 53, 0.4)',
        },
        surface: {
          light: '#FAF7FF',
          dark: '#1F2937',
          card: '#273444',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(3rem,8vw,6rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        section: ['clamp(2.5rem,5vw,3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(109, 40, 217, 0.08)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.3)',
        glow: '0 0 40px rgba(163, 230, 53, 0.15)',
        'glow-plum': '0 0 40px rgba(109, 40, 217, 0.2)',
        float: '0 20px 60px -15px rgba(109, 40, 217, 0.15)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
