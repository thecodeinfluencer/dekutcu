import React from "react";
import { StyleSheet, View } from "react-native";
import { MonoText } from "../components/StyledText";
import { ThemeColors } from "../constants/Colors";
import Layout from "../constants/Layout";

export default function Devotional({ route }) {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: Layout.marginHorizontal,
        paddingVertical: 16,
        backgroundColor: ThemeColors.blackWhiteBgAlt,
      }}
    >
      <MonoText
        style={{
          fontSize: 16,
          color: ThemeColors.themeColor,
          textAlign: "justify",
        }}
      >
        {route.params.content}
      </MonoText>
    </View>
  );
}
