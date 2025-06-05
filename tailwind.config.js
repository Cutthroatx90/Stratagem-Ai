/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); // Ensure this line is present

module.exports = {
  content: [
    "./*.html",        // Scans all .html files in your main project folder
    "./blog/**/*.html", // Specifically scans .html files in a /blog/ subfolder
    "./**/*.html",      // Scans all .html files in any other subfolders
    "./js/**/*.js"      // Scans JavaScript files if you add/remove Tailwind classes via JS
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans], // Adds Inter as the primary sans-serif font
      },
      colors: {
        'brand-header-bg': '#dce6f0',         // Light blue-gray (for header background)
        'brand-navy': '#0f3253',            // Deep navy blue (for primary text, headings)
        'brand-gold': '#c39020',            // Golden yellow (for buttons, interactive accents)
        'brand-gold-darker': '#ad7f1c',     // Darker golden yellow (for button hover)
        'brand-gray-muted': '#75787c',      // Muted gray (for secondary text or elements)
        'brand-gray-slate': '#54627b',    // Slate gray-blue (alternative accent)
        'brand-text': '#000000',            // True black for general body text
        'brand-text-header-link': '#FFFFFF', // White for header navigation links
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Add the typography plugin for styling blog content
  ],
}