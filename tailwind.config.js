/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animate: {
          "0%": {
            backgroundPosition: "0 50%",
          },
          "50%": {
            backgroundPosition: "right 50%",
          },
          "100%": {
            backgroundPosition: "0 50%",
          },
        },
      },
      animation: {
        gradient: "animate 5s ease infinite",
      },
    },
  },
  plugins: [],
};
