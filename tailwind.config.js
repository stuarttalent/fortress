/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#0f1115",
          10: "#1a1d24",
          20: "#252a35",
          30: "#303748"
        },
        brand: {
          50: "#eaf4ff",
          100: "#d4e8ff",
          200: "#a7d0ff",
          300: "#6bb7ff",
          400: "#379fff",
          500: "#1e86ff",
          600: "#0f66cc"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(17, 24, 39, 0.10)",
        glow: "0 0 0 1px rgba(30, 134, 255, 0.20), 0 18px 40px rgba(30, 134, 255, 0.12)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        fadeInUp: "fadeInUp 520ms ease-out both"
      }
    }
  },
  plugins: []
};

