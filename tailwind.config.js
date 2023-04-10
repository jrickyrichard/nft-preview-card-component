/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        "sm": "375px",
        "md": "650px"
      },
      colors: {
        "soft-blue": "hsl(215, 51%, 70%)",
        "cyan": "hsl(178, 100%, 50%)",
        "main-bg": "hsl(217, 54%, 11%)",
        "card-bg": "hsl(216, 50%, 16%)",
        "line": "hsl(215, 32%, 27%)"
      },
      fontWeight: {
        "300": "300",
        "400": "400",
        "600": "600"
      },
      fontFamily: {
        "outfit": ["Outfit", "sans-serif"]
      },
      fontSize: {
        "base": "18px"
      }
    },
  },
  plugins: [],
}