import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      colors: {
        background: "#3f3d41",
        foreground: '#f1f1f1',
        main: "#262528",
        'gray-200': "#d0d0d0",
        "gray-900": "#171717",
        title: "#ffffff",
        green: "#c2f7d3",
        
      },
    },
  },

  darkMode: "class",
  plugins: [nextui()],
};
export default config;
