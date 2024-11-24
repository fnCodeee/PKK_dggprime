/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./node_modules/primereact/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'about': '#8AAEE0'
      }
    },
  },
  plugins: [],
};
