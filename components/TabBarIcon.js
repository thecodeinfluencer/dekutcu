import * as React from "react";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { View, Text, AsyncStorage } from "react-native";

import Colors, { Light, Dark } from "../constants/Colors";
import { MonoText } from "./StyledText";

export default function TabBarIcon({ focused, name, label }) {
  const [theme, setTheme] = React.useState("");
  AsyncStorage.getItem("@Theme", (err, val) => {
    setTheme(val);
  });

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <SimpleLineIcons
        name={name}
        size={focused ? 20 : 25}
        style={{ marginBottom: 0, marginTop: 3 }}
        color={
          focused
            ? theme === "light"
              ? Light.tabIconSelected
              : Dark.tabIconSelected
            : theme === "light"
            ? Light.tabIconDefault
            : Dark.tabIconDefault
        }
      />
      {focused ? (
        <MonoText
          style={{
            color:
              theme === "light" ? Light.tabIconSelected : Dark.tabIconSelected
          }}
        >
          {label}
        </MonoText>
      ) : null}
    </View>
  );
}
