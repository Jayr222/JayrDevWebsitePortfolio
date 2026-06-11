/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F3E8',
        green: {
          DEFAULT: '#173F2A',
          deep: '#0F2D1F',
        },
        gold: '#F5B21A',
        orange: '#F26B3A',
        ink: '#111111',
        muted: '#6B6B6B',
        line: '#E5DCCB',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(17, 17, 17, 0.08)',
        green: '0 24px 80px rgba(15, 45, 31, 0.22)',
      },
    },
  },
  plugins: [],
};
