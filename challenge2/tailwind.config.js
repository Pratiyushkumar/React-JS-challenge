/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lavendar: '#fff0f5',
        cardTitle: '#007bff',
        cardBg: '#f7f7f7',
      },
      borderWidth: {
        0: '1px',
      },
      borderColor: {
        cardBorderColor: '#ccc',
      },
      boxShadow: {
        cardBoxShadow: ' 2px 2px 5px #0000001a',
      },
      width: {
        cardWidth: '20rem',
      },
      spacing: {
        300: '300px',
        3: '-3px',
      },
      transitionDelay: {
        '.2': '200ms',
      },
    },
  },
  plugins: [],
};
