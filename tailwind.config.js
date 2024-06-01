/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": {
          50: "#002D62",
          100: "#0066b2",
        },
      },
    },
  },
  plugins: [],
};
