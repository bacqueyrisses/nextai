/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grainy': "url('https://phenomenonstudio.com/wp-content/webp-express/webp-images/themes/phenomenon/img/black-bg.png.webp')",
      }
    },
  },
  plugins: [],
}
