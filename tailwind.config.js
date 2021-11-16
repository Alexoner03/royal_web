module.exports = {
  purge: ["./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        royalblue: "#3b4693",
        royalorange: "#f48838",
        royalcyan: "#3bcddc",
      },
    },
  },
  variants: {
    extend: {
      fontSize: ["hover"],
    },
  },
  plugins: [],
};
