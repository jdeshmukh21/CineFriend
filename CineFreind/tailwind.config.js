module.exports = {
  darkMode: 'class', // Enable dark mode using a CSS class
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path based on your project structure
    './public/index.html',
  ],
  theme: {
    extend: {
      screens:{
        "other": {'min': '340px', 'max': '1200px'},
      },
      colors:{
        darkbg: "#1E293B",
        blue:{
          850: "#7dd3fc"
        }
      }
    },
  },
  plugins: [],
};
