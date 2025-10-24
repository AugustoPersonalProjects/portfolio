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
        emerald: {
          50: "#E6FDF1",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEDCD",
          400: "#2DD4B8",
          500: "#14B89D",
          600: "#0D947E",
          700: "#057061",
          800: "#045C52",
          900: "#034741",
          950: "#012626",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
