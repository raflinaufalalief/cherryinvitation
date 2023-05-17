export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Poppins: 'Poppins',
    },
    extend: {
      screens: {
        tablet: { max: '1022px' },
        desktop: '1023px',
        desktopNav: { max: '1090px' },
      },
      backgroundColor: '#F4F4F4',
      colors: {
        primary: '#B2C9FF',
        secondary: '#3F5CFA',
        100: '#FE5E98',
        200: '#F4F4F4',
      },
    },
  },
  plugins: [],
}
