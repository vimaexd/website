module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': "Inter",
        'code': "Roboto Mono"
      },
      colors: {
        'str-cotton': "#8548F5",
        'str-yarn': '#FA93FF',
        'str-bleck': '#060606',
        'str-bleck-100': '#0a0a0a',
        'str-bleck-200': '#0f0f0f',
        'str-ice': '#f5f5f5',
        'str-ice-100': '#ebebeb',
        'str-ice-200': '#dedede'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
