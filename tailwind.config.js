/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#f5f6f7",
        "dark-blue": "#15283d",
        darkslategray: {
          "100": "#454545",
          "200": "#2d2d2d",
          "300": "rgba(45, 45, 45, 0.1)",
        },
        black: "#000",
        steelblue: {
          "100": "#68a3d2",
          "200": "#388dd0",
        },
        mediumslateblue: "#3763f4",
        deepskyblue: "#52a6eb",
        royalblue: "#527dff",
        gray: "rgba(0, 0, 0, 0.65)",
      },
      spacing: {
        "spacing-s": "24px",
        "spacing-xs": "8px",
      },
      fontFamily: {
        "body-body-2": "Inter",
      },
      borderRadius: {
        "69xl": "88px",
        xl: "20px",
        "13xl": "32px",
      },
    },
    fontSize: {
      base: "16px",
      "base-8": "15.8px",
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      "13xl": "32px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
