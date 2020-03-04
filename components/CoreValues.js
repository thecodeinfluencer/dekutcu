import * as React from "react";
import { Text, View, AsyncStorage } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors, { Dark, Light } from "../constants/Colors";

import { MonoText } from "./StyledText";

export default function CoreValues(props) {
  const [theme, setTheme] = React.useState("");
  AsyncStorage.getItem("@Theme", (err, val) => {
    setTheme(val);
  });

  return (
    <View
      style={{
        backgroundColor:
          theme === "light" ? Light.appBarColor : Dark.appBarColor,
        marginVertical: 30,
        paddingBottom: 40,
        padding: 18,
        marginHorizontal: 30,
        shadowOffset: { backgroundColor: "#37003c" },
        elevation: 4,
        alignItems: "center",
        borderRadius: 20
      }}
    >
      <Ionicons name={props.iconName} size={30} color={Colors.grayColor} />
      <MonoText
        style={{
          fontSize: 18,
          textAlign: "center",
          color: Colors.themeColor,
          paddingVertical: 5,
          fontWeight: "bold"
        }}
      >
        {props.header}
      </MonoText>
      <MonoText
        style={{
          fontSize: 16,
          textAlign: "center",
          color: theme === "light" ? Light.blackWhiteText : Dark.blackWhiteText
        }}
      >
        {props.content}
      </MonoText>
    </View>
  );
}
