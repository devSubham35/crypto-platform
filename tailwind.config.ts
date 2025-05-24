import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1500px'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        secondary: ['Raleway', 'sans-serif'],
        customFont1: ['Rowdies', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ['responsive'],
    },
  },
  plugins: [],
};
export default config;
