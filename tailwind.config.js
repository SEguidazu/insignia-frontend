const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#1E1E1E",
        main_hover: "#323232",
        main_stroke: "#E4E7EE",
        main_bgcolor: "#F3F4F5",
        wpps_bgcolor: "#25D366",
        secondary: "#F7F7F7",
        secondary_link: "#6C757D",
        light: "#FCFFFC",
        gray: "#CCCCCC",
        success: "#2CB708",
        failure: "#FF0101",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
