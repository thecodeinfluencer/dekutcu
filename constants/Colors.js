const whiteBg = "#f6f6f6";
const themeColor = "#34D78A";

export const ThemeColors = true
  ? {
      white: "#fff",
      tabIconDefault: "#ccc",
      tabIconSelected: themeColor,
      themeColor: themeColor,
      grayColor: "#ddd",
      statusBarColor: whiteBg,
      blackWhiteText: "#000",
      blackWhiteAlt: themeColor,
      blackWhiteBgAlt: whiteBg,
      blackWhiteTextAlt: whiteBg,
      blackWhiteTextAlt2: whiteBg,
      appBarBackground: whiteBg,
      barStyle: "dark-content",
    }
  : {
      white: "#fff",
      tabIconDefault: "#ccc",
      tabIconSelected: themeColor,
      themeColor: themeColor,
      grayColor: "#ddd",
      statusBarColor: "#101d25",
      blackWhiteAlt: "#35363a",
      blackWhiteText: "#fff",
      blackWhiteBgAlt: "#101d25",
      blackWhiteTextAlt: themeColor,
      blackWhiteTextAlt2: "#35363a",
      appBarBackground: "#101d25",
      barStyle: "light-content",
    };
