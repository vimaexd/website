/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "InterDisplay",
        mono: ["var(--font-jbm)"],
      },
      colors: {},
      boxShadow: {
        'mae': '0px 2px 32px 8px rgba(133, 72, 245, 0.1)'
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "mocha",
    }),
  ],
};
