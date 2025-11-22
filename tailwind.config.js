/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3B82F6',    // A calm blue
        'secondary': '#10B981',  // A vibrant green/teal
        'accent': '#F59E0B',     // A warm amber for highlights
        'background': '#111827', // A very dark blue-gray (almost black)
        'surface': '#848B96',    // A neutral gray for cards and surfaces, providing a white tint when transparent
        'text-primary': '#F9FAFB',  // Off-white for primary text
        'text-secondary': '#9CA3AF', // Lighter gray for secondary text
      }
    },
  },
  plugins: [],
}
