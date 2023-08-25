/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        binar: 'Helvetica,Arial, sans-serif',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
