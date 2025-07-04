/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5722',
          dark: '#E64A19',
        },
        secondary: '#2A2A2A',
        accent: '#3D5AFE',
        success: '#4CAF50',
        warning: '#FFC107',
        error: '#F44336',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-down': 'fadeInDown 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#FF5722',
              '&:hover': {
                color: '#E64A19',
              },
            },
            h1: {
              color: '#2A2A2A',
            },
            h2: {
              color: '#2A2A2A',
            },
            h3: {
              color: '#2A2A2A',
            },
            h4: {
              color: '#2A2A2A',
            },
          },
        },
      },
    },
  },
  plugins: [],
};