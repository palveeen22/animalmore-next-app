import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#344054",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-nunito)'],
      },
      width:{
        s: "20%",
        m: "30%",
        l: "40%",
        xl: "50%",
        xxl:"80%"
      }
    },
  },
  plugins: [],
} satisfies Config;
