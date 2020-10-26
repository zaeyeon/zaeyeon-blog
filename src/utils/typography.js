import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.618,
  googleFonts: [
    {
      name: "Noto Serif KR",
      styles: ["100", "300", "400", "700"],
    },
    {
      name: "Noto Sans",
      styles: ["100", "300", "400","500","700","900"],
    },
    {
        name: "Noto Sans KR",
        styles: ["100", "300", "400","500","700","900"],
    },
    {
        name: "Lobster",
        styles: ["400"],
    },
    {
        name: "Sriracha",
        styles: ["400"],
    },
    {
        name: "Do Hyeon",
        styles: ["400"],
    },
    {
        name: "Nanum Myeongjo",
        styles: ["400", "700", "800"]
    },
    {
        name: "Gothic A1",
        styles: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
    },
  ],
  headerFontFamily: ["Do Hyeon", "sans-serif"],
  bodyFontFamily: ["Noto Sans", "serif"],
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
})

typography.injectStyles();

export default typography