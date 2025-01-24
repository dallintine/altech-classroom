const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        blue: "#335577",
        green: "#449966",
        contrast: "#88aabb",
        hoverDark: "#446677",
        hoverLight: "#aaccee",
      },
    },
  },
  plugins: [],
});
