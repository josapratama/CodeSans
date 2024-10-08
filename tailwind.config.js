/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        shadowBox: "1px 1px 15px secondary",
        shadowCard: "0px 4px 4px 1px rgba(48, 123, 196, 0.15)",
      },
      fontFamily: {
        Inter: ["Inter", "serif"],
        Poppins: ["Poppins", "serif"],
      },
      colors: {
        primary: "#274760",
        secondary: "#307BC4",
        third: "#ffffff",
      },
    },
  },
  plugins: [],
};
