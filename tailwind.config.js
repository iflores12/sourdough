module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'dark-blue': '#12162B',
      'off-white': '#EAEAEA',
      'ruby': '#D51E58',
      'dim-gray': '#5D6360'
    }),
    textColor: theme => ({
      'dark-blue': '#12162B',
      'off-white': '#EAEAEA',
      'ruby': '#D51E58',
      'dim-gray': '#5D6360'
    }),
    divideColor: theme => ({
      'dark-blue': '#12162B',
      'off-white': '#EAEAEA',
      'ruby': '#D51E58',
      'dim-gray': '#5D6360'
    }),
    borderWidth: theme => ({
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '12': '12px'
    }),
    divideWidth: theme => ({
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '12': '12px',
      '64': '64px'
    }),
    
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
