/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'main-orange':'#f44a62',
        'second-orange':'#f46d81',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}