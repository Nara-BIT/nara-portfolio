/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#64ffda",
        "accent-purple": "#7c3aed",
        dark: {
          DEFAULT: "#0a192f",
          light: "#112240",
          lighter: "#233554",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"Fira Code"', "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite alternate",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%": { boxShadow: "0 0 5px rgba(100,255,218,0.4)" },
          "100%": { boxShadow: "0 0 25px rgba(100,255,218,0.8)" },
        },
      },
    },
  },
  plugins: [],
};