/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#05040a',
        plasma: '#08d9ff',
        ember: '#ff3b1f',
        voltage: '#f8b84e',
        smoke: '#a8b0c3',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 48px rgba(8, 217, 255, 0.28)',
        ember: '0 0 48px rgba(255, 59, 31, 0.24)',
      },
    },
  },
}
