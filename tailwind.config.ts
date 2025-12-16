import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        "blue-dark": "#003E7D",
        "pink-accent": "#F985FF",
        // Ajuste para alinhar o novo tom aplicado no botão primário
        "pink-light": "#FA94FF",
        "pink-lighter": "#FEE8FF",
        "blue-light": "#0056A3",
        "blue-lighter": "#E6F0F8",
      },
      fontFamily: {
        serif: ['"lust-script"', "sans-serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
        script: ['"lust-script"', "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

