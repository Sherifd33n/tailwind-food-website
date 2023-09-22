/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      vs: "510px",
      sm: "600px",
      md: "768px",
      ab: " 930px",
      lg: "976px",
      pg: "1050px",
      xl: "1440px",
    },

    extend: {
      boxShadow: {
        "2xl": "0 35px 60px -15px rgba(0,0,0,0.3)",
      },
    },

    borderRadius: {
      vs: "5px",
      sm: "600px",
      md: "768px",
      ab: " 930px",
      lg: "15px",
      pg: "1050px",
      xl: "1440px",
    },

    extend: {
      colors: {
        mainColor: "#f24f04",
        textColor: "#252429",
        bgColor: "#fffefb",
        rrColor: "#ffa50a",
        otherColor: "#95949a",
        bbColor: "#fff2de",
      },
    },
  },
  plugins: [],
};
