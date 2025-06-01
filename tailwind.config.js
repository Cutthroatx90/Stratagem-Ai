/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",        // Scans all .html files in your main project folder
    "./**/*.html"      // Scans all .html files in any subfolders you might have
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}