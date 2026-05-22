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
        gold: "#FFD700",
        charcoal: "#1F1F1F",
        neon: "#FF0055",
        purple: "#6D5D9B",
        surface: "#2A2A2A",
        border: "#333333",
      },
    },
  },
  plugins: [],
};

export default config;