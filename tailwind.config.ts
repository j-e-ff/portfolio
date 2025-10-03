import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fall: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      animation: {
        fall: "fall 3s linear infinite",
      },
    },
  },
};

export default config;
