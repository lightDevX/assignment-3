/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'c-primary': '#ABEF5F',

    },

  },
  plugins: [
    require('daisyui'),
  ],
}