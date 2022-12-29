/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'sans-serif':['-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol']
      },
      colors: {
        'dark-original':'#353232',
        'black-original':'#212529',
        'white-original':'#fff',
        'orange-original':'#fffcee'
      },
      flex: {
        'orginal':'1 300px'
      },
      spacing: {
        '400': '400px',
        '65':'65%',
        '3.75':'15px',
        '12.5':'50px',
        '56.25':'56.25%'
      },
      fontSize: {
        'xl.1':'1.2rem'
      },
      screens: {
        'screen-w-672-h-432': {'raw': '(min-width: 672px) and (min-height: 432px)'},
        '1400': {'raw': '(min-width:1400px)'}
      }
    },
  },
  plugins: [],
}
