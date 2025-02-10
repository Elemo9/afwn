import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        glow: "0 0 10px rgba(255, 255, 255, 0.8)",
        intense: "0 0 20px rgba(255, 0, 150, 0.9)",
      },
      animation: {
        textGlow: "text-glow 1.5s ease-in-out infinite alternate",
        slideIn: "slide-in 0.5s ease-out",
        breathe: "breathe 3s ease-in-out infinite",
        fadeIn: "fade-in 0.8s ease-in",
      },
      backgroundImage: {
        'gradient-radial': "radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        'gradient-linear': "linear-gradient(to right, #ff7e5f, #feb47b)",
        'gradient-dark': "linear-gradient(to right, #232526, #414345)",
      },
      keyframes: {
        "text-glow": {
          "0%": { textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" },
          "100%": { textShadow: "0 0 20px rgba(255, 255, 255, 1)" },
        },
        "slide-in": {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "breathe": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
