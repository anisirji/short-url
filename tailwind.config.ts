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
        background: "rgba(var(--background))",
        foreground: "rgba(var(--foreground))",
        cta: {
          text: "rgba(var(--cta-text))",
          primary: {
            background: "rgba(var(--cta-primary-background))",
          },
          secondary: {
            background: "rgba(var(--cta-secondary-background))",
            border: "rgba(var(--cta-secondary-border))",
          },
        },
        pinkText: "rgba(var(--text-secondary))",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/typography"),
    // require("tailwindcss-animate"),
    // require("tailwindcss/aspect-ratio"),
  ],
  darkMode: ["class"],
};
export default config;
