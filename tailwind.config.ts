import type { Config } from "tailwindcss"

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eef6ff",
          100: "#daeefe",
          200: "#bedbfb",
          300: "#94c1f7",
          400: "#62a0f1",
          500: "#3e86ea",
          600: "#2e6ad2",
          700: "#2554a9",
          800: "#204986",
          900: "#1f3f6e",
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
} satisfies Config