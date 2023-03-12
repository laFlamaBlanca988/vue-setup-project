/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "400px",
      xs: "501px",
      sm: "640px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "main-red": "#DB102D",
        "main=blue": "#244088",
        "silver-gray": "#E6E6E6",
        "velvet-blue": "#40434F",
        "bleue-royale": "#25988B",
        "sweet-yellow": "#F8DE7A",
      },
      backgroundImage: {},
      boxShadow: {
        opportunities: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
