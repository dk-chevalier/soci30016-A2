/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": { transform: "translateY(110vh) translateX(0)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
      },
      animation: {
        float: "float 10s",
      },
    },
  },
  plugins: [],
};
