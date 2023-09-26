/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('/images/wave-top.png')",
      },
      colors: {
        'green-600': '#00B37E',
      },
    },
  },
  plugins: [],
}

