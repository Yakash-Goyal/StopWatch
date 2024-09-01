/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./script.js"],
  theme: {
    extend: {
      borderRadius: {
        'custom': '94% 6% 94% 6% / 6% 96% 4% 94% ',
      },
    },
  },
  plugins: [],
}