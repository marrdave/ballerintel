import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pitch: {
          950: "#07130c",
          900: "#0d1f13",
          800: "#11321d",
          700: "#164624",
          600: "#1c5d30",
          500: "#267a3e",
          400: "#4caf50",
          300: "#87d38d",
          200: "#c6efc8",
          100: "#eaf9eb"
        },
        accent: "#f4c542"
      },
      boxShadow: {
        glow: "0 20px 60px rgba(15, 111, 55, 0.25)"
      }
    },
  },
  plugins: [],
};

export default config;
