/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": { transform: "translateY(100vh) scale(0)", opacity: "0.7" },
          "20%": { transform: "translateY(93vh) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
        flash: {
          "0%": { opacity: "0.6" },
          "100%": { opacity: "1" },
        },
        flash1: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 10s",
        flash: "flash 1s infinite",
        flash1: "flash1 2s",
      },
    },
  },
  plugins: [],
};
