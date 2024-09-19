/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        "Inter": ["Inter", "serif"],
        "Poppins": ["Poppins", "serif"]
      },
      colors: {
        "primary": "#274760",
        "secondary": "#307BC4",
        "third": "#ffffff"
      }
    },
  },
  plugins: [],
};
