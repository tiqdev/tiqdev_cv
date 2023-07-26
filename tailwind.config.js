/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0F0F0F",
        secondary: "#E1AE61",
        secondary_hover: "#333333",
        badge: "#1a1a1a",
        badge_hover: "#292929",
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
      },
      borderColor: {
        badge: "#292929",
        badge_hover: "#333333",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        albert_sans: ["Albert Sans", "sans-serif"],
      },
    },
    screens: {
      md: "1200px",
    },
  },

  plugins: [],
};
