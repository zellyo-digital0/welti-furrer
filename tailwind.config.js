/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    container: {
      center: true,
    },

    screens: {
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
      '4xl': '1920px',
    },
    fontFamily: {
      proximaNova: ['"Proxima Nova"'],
      helveticaNeue: ['"Helvetica Neue"'],
    },
  },
  plugins: [require('flowbite/plugin')],
};
