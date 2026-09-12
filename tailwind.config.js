/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F3EA",
        ivory: "#FFFDF8",
        maroon: "#7A1F32",
        burgundy: "#551322",
        charcoal: "#252126",
        "soft-beige": "#E8DCCB",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      fontSize: {
        "display-xl": ["4rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-md": ["3rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-sm": ["2.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "heading-xl": ["2rem", { lineHeight: "1.2", fontWeight: "600" }],
        "heading-lg": ["1.75rem", { lineHeight: "1.2", fontWeight: "600" }],
        "heading-md": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "heading-sm": ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
      spacing: {
        "section": "5rem",
        "section-lg": "7rem",
      },
      borderRadius: {
        DEFAULT: "12px",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
        slideUp: "slideUp 0.6s ease-out",
        slideDown: "slideDown 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          from: { transform: "translateY(-20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
