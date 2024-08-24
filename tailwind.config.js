/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 4s linear infinite",
        "spin-fast": "spin 0.5s linear infinite",
      },
      colors: {
        highlight: {
          btn: "#3DB883",
        },
      },
      fontFamily: {
        founders_bl: ["Founders_bl", "sans-serif"],
        founders_lg: ["Founders_lg", "sans-serif"],
        neue: ["Neue", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
