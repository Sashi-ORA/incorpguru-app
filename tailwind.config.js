/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "public-sans-regular": "PublicSans-Regular.ttf",
        "public-sans-medium": "PublicSans-Medium.ttf",
        "public-sans-semibold": "PublicSans-SemiBold.ttf",
        "public-sans-bold": "PublicSans-Bold.ttf",
      },
      colors: {
        primaryColor: "#BE8EB2",
        primaryLight: "#736B95",
        textDark: "#160F2D",
      },
    },
  },
  plugins: [],
};
