/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cat-paw': '#ffb3b9',
        'cat-pink': '#ffccd0',
        'cat-gray': '#D3D3D3',
        'cat-theme': "#fff5f6",
      }
    }
  },
  plugins: [],
}