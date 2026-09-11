import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      colors: {
        // Institutional blue, taken from the shield gradient in the logo.
        brand: {
          50: "#F6F9FC",
          100: "#EAF2FB",
          200: "#D3E3F5",
          300: "#C6D9EF",
          400: "#9FBBDA",
          500: "#2E7FD4",
          600: "#1B5FAE",
          700: "#123B72",
          800: "#0A2A54",
          900: "#081F3E",
        },
        // Graphite grays used for text and neutral surfaces.
        ink: {
          50: "#F5F7FA",
          100: "#EDF1F6",
          200: "#E3E8EF",
          300: "#DCE3EC",
          400: "#8A97A5",
          500: "#7C8998",
          600: "#66727E",
          700: "#54626F",
          800: "#3D4B59",
          900: "#2F3A45",
          950: "#16202B",
        },
        // Dark navy used by the footer.
        navy: {
          400: "#5B8ECB",
          300: "#7D8DA1",
          200: "#95A5B8",
          100: "#C6D0DB",
          700: "#1E3049",
          800: "#152238",
          900: "#0F2138",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1FBE5B",
          text: "#08331A",
          textDark: "#062B15",
        },
        success: {
          bg: "#E9F8EF",
          border: "#BFE8CF",
          text: "#12663A",
        },
      },
      boxShadow: {
        card: "0 2px 10px rgba(15,33,56,.04)",
        "card-hover": "0 10px 24px rgba(15,33,56,.09)",
        stats: "0 12px 30px rgba(15,33,56,.10)",
        cta: "0 8px 20px rgba(27,95,174,.24)",
        wa: "0 10px 26px rgba(9,74,38,.32)",
        modal: "0 28px 70px rgba(5,20,40,.4)",
        formCard: "0 20px 50px rgba(5,20,40,.25)",
      },
      keyframes: {
        volPop: {
          from: { opacity: "0", transform: "translateY(12px) scale(.98)" },
          to: { opacity: "1", transform: "none" },
        },
        volReveal: {
          from: { opacity: "0", transform: "translateY(22px)" },
          to: { opacity: "1", transform: "none" },
        },
        volFade: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        volPop: "volPop .18s ease-out",
        volFade: "volFade .15s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
