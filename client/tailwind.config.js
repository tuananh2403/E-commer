/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/index.html",
  ],
  theme: {
    fontFamily: {
      main: ["Arial", "'Times New Roman'"],
    },
    extend: {
      width: {
        main: "1140px",
      },
      backgroundColor: {
        main: "#3daa12",
      },
      colors: {
        main: "#f28902",
      },
    },
  },
  plugins: [],
};
