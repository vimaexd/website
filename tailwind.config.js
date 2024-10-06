/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "InterDisplay",
        mono: ["var(--font-jbm)"],
      },
      colors: {
        "str-cotton": "#8548F5",
        "str-yarn": "#FA93FF",
        "str-bleck": "#060606",
        "str-bleck-100": "#0a0a0a",
        "str-bleck-200": "#0f0f0f",
        "str-ice": "#f5f5f5",
        "str-ice-100": "#ebebeb",
        "str-ice-200": "#dedede",
      },
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
