module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#F7F7F7",
        customBlue: "#0147FF",
      },
      fontFamily: {
        robotoFlex: ["Roboto Flex", "sans-serif"],
        bebasNeue: ["Bebas Neue", "cursive"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
