import { createContext } from "react";
import { AsyncStorage, ToastAndroid } from "react-native";

const tintColor = "#2afd8c";
let myObject = "";

AsyncStorage.getItem("@Theme", (err, val) => {
  if (val === "light") {
    // console.log("light: " + val);
    myObject = val;
  } else {
    // console.log("dark: " + val);
    myObject = val;
  }
});

console.log(myObject);

export default {
  tintColor,
  tabIconDefault: "#ccc",
  tabIconSelected: tintColor,
  tabBar: "#fefefe",
  errorBackground: "red",
  errorText: "#fff",
  warningBackground: "#EAEB5E",
  warningText: "#666804",
  noticeBackground: tintColor,
  noticeText: "#fff",
  // themeColor: "#8ad14f",
  themeColor: "#2afd8c",
  grayColor: "#ddd",
  statusBarColor: "#fff"
};

export const Dark = {
  tintColor,
  tabIconDefault: "#ccc", //
  tabIconSelected: tintColor, //
  tabBar: "#fefefe",
  errorBackground: "red",
  errorText: "#fff",
  warningBackground: "#EAEB5E",
  warningText: "#666804",
  noticeBackground: tintColor,
  noticeText: "#fff",
  themeColor: "#2afd8c",
  grayColor: "#ddd",
  statusBarColor: "#000", //
  appBarColor: "#35363a", //
  blackWhiteText: "#fff", //
  blackWhiteBg: "#000" //
};

export const Light = {
  tintColor,
  tabIconDefault: "#ccc", //
  tabIconSelected: tintColor, //
  tabBar: "#fefefe",
  errorBackground: "red",
  errorText: "#fff",
  warningBackground: "#EAEB5E",
  warningText: "#666804",
  noticeBackground: tintColor,
  noticeText: "#fff",
  themeColor: "#2afd8c",
  grayColor: "#ddd",
  statusBarColor: "#fff", //
  appBarColor: "#fff", //
  blackWhiteText: "#000", //
  blackWhiteBg: "#f6f6f4" //
};

// themeColor: "#8ad14f",

export const updateTheme = () => {
  ToastAndroid.show("updateTheme Called", ToastAndroid.SHORT);
  AsyncStorage.setItem("@item", "item");
};
