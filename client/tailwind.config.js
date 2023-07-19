/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "Sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    /*     require("flowbite/plugin"),*/
    require("daisyui"),
  ],
};
