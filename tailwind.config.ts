import type { Config } from 'tailwindcss'

const withMT = require('@material-tailwind/html/utils/withMT')

const config: Config = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // not used
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        buff: {
          DEFAULT: '#cb997e',
          900: '#2f1d13',
          800: '#5f3a26',
          700: '#8e5739',
          600: '#b97550',
          500: '#cb997e',
          400: '#d6ae99',
          300: '#e0c3b2',
          200: '#ebd7cc',
          100: '#f5ebe5',
        },
        desert_sand: {
          DEFAULT: '#ddbea9',
          900: '#372316',
          800: '#6f472c',
          700: '#a66a42',
          600: '#c69270',
          500: '#ddbea9',
          400: '#e3cab9',
          300: '#ead7ca',
          200: '#f1e4dc',
          100: '#f8f2ed',
        },
        champagne_pink: {
          DEFAULT: '#ffe8d6',
          900: '#5e2900',
          800: '#bc5100',
          700: '#ff7e1b',
          600: '#ffb378',
          500: '#ffe8d6',
          400: '#ffedde',
          300: '#fff1e7',
          200: '#fff6ef',
          100: '#fffaf7',
        },
        ash_gray: {
          DEFAULT: '#b7b7a4',
          900: '#27271f',
          800: '#4e4e3d',
          700: '#75755c',
          600: '#99997d',
          500: '#b7b7a4',
          400: '#c6c6b6',
          300: '#d4d4c8',
          200: '#e2e2da',
          100: '#f1f1ed',
        },
        sage: {
          DEFAULT: '#a5a58d',
          900: '#22221b',
          800: '#454536',
          700: '#676751',
          600: '#89896c',
          500: '#a5a58d',
          400: '#b7b7a4',
          300: '#c9c9ba',
          200: '#dbdbd1',
          100: '#edede8',
        },
        reseda_green: {
          DEFAULT: '#6b705c',
          900: '#151612',
          800: '#2b2d25',
          700: '#404337',
          600: '#565a49',
          500: '#6b705c',
          400: '#8b9178',
          300: '#a8ac9a',
          200: '#c5c8bc',
          100: '#e2e3dd',
        },
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
})

export default config
