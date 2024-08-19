/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  corePlugins: {
    preflight: true,
  },
  content: ['../../packages/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1025px',
      xl: '1280px',
      xl2: '1360px',
    },
    colors: {
      black: '#000000',
      white: '#f6f6f6',
      red: '#D6173A',
      gold: {
        10: '#FCEAB0',
        50: '#FFD700',
        80: '#B59400',
      },
      gray: {
        10: '#F3F4F6',
        50: '#6B7280',
        80: '#111927',
      },
      orange: {
        10: '#FFF8EB',
        50: '#FFA500',
      },
      violet: {
        10: '#F1EFFD',
        50: '#5534DA',
      },
      green: {
        10: '#F5FAF2',
        50: '#7AC555',
      },
      purple: {
        10: '#F4ECFC',
        50: '#760DDE',
      },
      blue: {
        10: '#F4F8FD',
        50: '#76A5EA',
      },
      pink: {
        10: '#FDF4FD',
        50: '#E876EA',
      },
    },
  },
  plugins: [],
};
