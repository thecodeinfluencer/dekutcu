import React from "react";
import { ScrollView } from "react-native";
import { MonoText } from "../components/StyledText";
import { ThemeColors } from "../constants/Colors";
import Layout from "../constants/Layout";

export default function Devotional({ route }) {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 16,
      }}
      style={{
        flex: 1,
        paddingHorizontal: Layout.marginHorizontal,
        backgroundColor: ThemeColors.blackWhiteBgAlt,
      }}
    >
      <MonoText
        style={{
          fontSize: 16,
          color: ThemeColors.themeColor,
          // textAlign: "justify",
        }}
      >
        {route.params.content}
      </MonoText>
    </ScrollView>
  );
}
