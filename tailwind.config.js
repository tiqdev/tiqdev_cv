/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#0F0F0F",
        secondary: "#E1AE61",
        grey: "#525252",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        quiet: "quiet 1s linear infinite",
        loud: "loud 1s linear infinite",
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
    },
    screens: {
      md: "1200px",
      sm: "768px",
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
