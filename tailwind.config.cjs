/** @type {import('tailwindcss').Config} */
const defaultConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "royal-blue": "#0e3ce7",
        "ghost-white": "#f7f8f8",
        "cadet-blue": "#a6b3c2",
        "sage-green": "#9cc8a6",
        "cornflower-blue": "#5b88e7",
        gray: "#5b615c",
        sage: "#698d72",
        "medium-blue": "#2755da",
        "light-silver": "#CDE5D3",
        "sea-green": "#30A650",
        "quick-silver": "#9CA49E",
        blueberry: "#4285F4",
        "anti-flash-white": "#F3F3F3",
        orange: "#F7630C",
        "true-blue": "#0078D7",
        "anti-flash-white": "#F2F2F2",
        "white-coffee": "#ECDADA",
        "bright-gray": "#EAEDED ",
      },
    },
  },
  plugins: [],
};

module.exports = defaultConfig;
