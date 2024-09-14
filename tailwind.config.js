module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mb': {'min':'375px', 'max': '639px'},
      'tb': {'min':'640px', 'max': '1023px'},
      'lg': {'min':'1024px', 'max': '1600px'},
    },
    extend: {
      colors: {
        customGray: "#F7F7F7",
        customBlue: "#0147FF",
        customDark: "#282828",
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
