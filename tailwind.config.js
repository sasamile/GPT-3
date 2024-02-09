/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Manrope: "Manrope",
    },
    extend: {
      colors: {
        "color-bg": "#040c18",
        "color-footer": "#031b34",
        "color-blog": "#042c54",
        "color-text": "#81afdd",
        "color-subtext": "#ff8a71",
       
      },
    
      


    },
  },
  plugins: [],
};
