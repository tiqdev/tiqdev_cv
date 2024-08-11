/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F0F",
        secondary: "#E1AE61",
        grey: "#525252",

        equator: {
          50: "#fcf9f0",
          100: "#f9f1db",
          200: "#f2dfb6",
          300: "#e9c988",
          400: "#e1ae61",
          500: "#d89137",
          600: "#ca7a2c",
          700: "#a86026",
          800: "#864d26",
          900: "#6d4021",
          950: "#3a1f10",
        },
      },
      backgroundImage: {
        "dots-pattern":
          "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27%3E%3Ccircle cx=%276%27 cy=%276%27 r=%270.75%27 fill=%27%231a1a1a%27 fill-opacity=%270.8%27/%3E%3C/svg%3E')",
      },
      backgroundColor: {
        primary: "#0F0F0F",
        secondary: "#E1AE61",
        secondary_hover: "#333333",
        badge: "#1a1a1a",
        badge_hover: "#292929",
        grey: "#525252",
      },
      textColor: {
        primary: "#0F0F0F",
        secondary: "#E1AE61",
        secondary_hover: "#333333",
        badge: "#848484",
        grey: "#525252",
      },
      fill: {
        hero_button_icon: "#858585",
        hero_button_icon_hover: "#E1AE61",
      },
      borderColor: {
        badge: "#292929",
        badge_hover: "#333333",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        albert_sans: ["Albert Sans", "sans-serif"],
        caveat: ["Caveat", "cursive"],
      },
      animation: {
        quiet: "quiet 1s linear infinite",
        loud: "loud 1s linear infinite",
      },
    },
    screens: {
      md: "1200px",
      sm: "768px",
    },
  },

  plugins: [],
};
