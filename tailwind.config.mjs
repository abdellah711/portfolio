/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 10%, 20%": { transform: "rotate(-3deg)" },
          "5%, 15%, 25%": { transform: "rotate(3deg)" },
          "30%": { transform: "rotate(0deg)" },
        },
        "rotate-fade": {
          "0%": { transform: "rotate(0deg)", opacity: 0 },
          "10%, 90%": { opacity: 1 },
          "95%": { opacity: 0.5 },
          "100%": { transform: "rotate(360deg)", opacity: 0 },
        },
        "fade-left": {
          "0%": {
            opacity: 0,
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        default: {
          primary: "#3763e6",
          "primary-content": "#f5f5f4",
          secondary: "#14b8a6",
          accent: "#facc15",
          neutral: "#f3f4f601",
          "base-100": "#1c1c1d",
          "base-200": "#212122",
          "base-300": "#151516",
          info: "#00dcff",
          success: "#00b678",
          warning: "#b76b00",
          error: "#ff5d73",
        },
      },
    ],
  },
};
