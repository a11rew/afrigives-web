module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "767px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
