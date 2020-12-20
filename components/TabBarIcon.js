import React from "react";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { View, Text, AsyncStorage } from "react-native";

import { ThemeColors } from "../constants/Colors";
import { MonoText } from "./StyledText";

export default function TabBarIcon({ focused, name, label }) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Ionicons
        name={name}
        size={focused ? 20 : 25}
        style={{ marginBottom: 0, marginTop: 3 }}
        color={
          focused ? ThemeColors.tabIconSelected : ThemeColors.tabIconDefault
        }
      />
      {
        /*focused*/ true ? (
          <MonoText
            style={{
              color: focused
                ? ThemeColors.tabIconSelected
                : ThemeColors.tabIconDefault,
            }}
          >
            {label}
          </MonoText>
        ) : null
      }
    </View>
  );
}
