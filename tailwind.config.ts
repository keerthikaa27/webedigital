import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-navy": "#0f2834",
        "brand-green": "#c8f169",
        "brand-cyan": "#7bc6d3"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(15, 40, 52, 0.10)"
      },
      maxWidth: {
        shell: "1240px"
      }
    }
  },
  plugins: []
};

export default config;
