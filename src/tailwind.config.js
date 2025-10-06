// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    // This is CRITICAL: it tells Tailwind to look in all files 
    // ending in .js, .jsx, .ts, or .tsx inside your src folder.
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}