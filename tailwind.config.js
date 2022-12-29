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
        '56.25':'56.25%',
        '18':'75px'
      },
      backgroundImage: {
        'header-blog':'url(../images/concert-2.jpg)'
      },
      backgroundPosition: {
        'p-50':'50px'
      },
      fontSize: {
        'xl.1':'1.2rem'
      },
      gridTemplateRows: {
        '1-2(350)':'1fr 350px 350px'
      },
      screens: {
        'screen-w-672-h-432': {'raw': '(min-width: 672px) and (min-height: 432px)'},
        '1400': {'raw': '(min-width:1400px)'},
        '1200':{'raw': '(min-width:1200px)'},
        '992': {'raw': '(min-width:992px)'},
        '768': {'raw': '(min-width:768px)'},
        '576': {'raw': '(min-width:576px)'},
      }
    },
  },
  plugins: [],
}
