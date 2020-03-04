import * as React from "react";
import { Text, View, AsyncStorage } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import Colors, { Light, Dark } from "../constants/Colors";

import { MonoText } from "./StyledText";

export default function FellowshipDay({ day, meetings }) {
  const [theme, setTheme] = React.useState("");
  AsyncStorage.getItem("@Theme", (err, val) => {
    setTheme(val);
  });
  return (
    <View
      style={{
        backgroundColor:
          theme === "light" ? Light.appBarColor : Dark.appBarColor,
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 20,
        elevation: 4
      }}
    >
      <View>
        <MonoText
          style={{ fontSize: 20, color: Colors.themeColor, fontWeight: "bold" }}
        >
          {day}
        </MonoText>
      </View>
      {meetings.map(item => (
        <View
          key={item.name}
          style={{
            marginVertical: 8,
            borderTopWidth: 2,
            borderTopColor: Colors.themeColor,
            paddingTop: 10
          }}
        >
          <MonoText style={{ fontSize: 18, color: Colors.themeColor }}>
            {item.name}
          </MonoText>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SimpleLineIcons
              style={{ fontSize: 18, marginRight: 5, color: Colors.themeColor }}
              name="location-pin"
            />
            <MonoText
              style={{
                fontSize: 18,
                marginRight: 20,
                color: Colors.themeColor
              }}
            >
              {item.venue}
            </MonoText>
            <SimpleLineIcons
              style={{ fontSize: 18, marginRight: 5, color: Colors.themeColor }}
              name="clock"
            />
            <MonoText
              style={{
                fontSize: 18,
                marginRight: 20,
                color: Colors.themeColor
              }}
            >
              {item.time}
            </MonoText>
          </View>
        </View>
      ))}
    </View>
  );
}
