/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f0',
          100: '#dbeddb',
          200: '#b8dbb8',
          300: '#89c289',
          400: '#5ea45e',
          500: '#3d8a3d',
          600: '#2f6e2f',
          700: '#275827',
          800: '#224722',
          900: '#1d3b1d',
          950: '#0e200e'
        },
        wood: {
          50: '#faf6f1',
          100: '#f2e8db',
          200: '#e4cfb5',
          300: '#d4b088',
          400: '#c69464',
          500: '#ba7e4a',
          600: '#ac6a3e',
          700: '#8f5335',
          800: '#744430',
          900: '#5f3929',
          950: '#331c14'
        },
        cream: {
          50: '#fefdf8',
          100: '#fdf9ed',
          200: '#faf2d4',
          300: '#f5e6af',
          400: '#eed47f',
          500: '#e6be53',
          600: '#d4a43a',
          700: '#b1832e',
          800: '#8f672b',
          900: '#755526',
          950: '#422d12'
        },
        bark: {
          50: '#f7f5f3',
          100: '#ece8e2',
          200: '#d9d0c5',
          300: '#c1b3a2',
          400: '#a7937d',
          500: '#947e66',
          600: '#876f5a',
          700: '#705b4b',
          800: '#5d4c41',
          900: '#4d3f37',
          950: '#29211c'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
      borderRadius: {
        'organic': '30% 70% 70% 30% / 30% 30% 70% 70%'
      }
    }
  },
  plugins: []
}