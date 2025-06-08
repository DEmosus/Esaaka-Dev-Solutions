import type { Config } from 'tailwindcss';
import aspectRatio from "@tailwindcss/aspect-ratio";
import scrollbarHide from "tailwind-scrollbar-hide";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [aspectRatio, scrollbarHide],
};

export default config;
