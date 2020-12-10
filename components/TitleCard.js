import React from "react";
import { View } from "react-native";

import { MonoText } from "../components/StyledText";
import { ThemeColors } from "../constants/Colors";
import Layout from "../constants/Layout";

export default function TitleCard({ title, content, outline }) {
  return (
    <View
      style={{
        marginVertical: 8,
        paddingTop: 16,
        paddingHorizontal: 16,
        backgroundColor: ThemeColors.blackWhiteAlt,
        marginHorizontal: Layout.marginHorizontal,
        borderRadius: 8,
      }}
    >
      <MonoText
        style={{
          color: ThemeColors.blackWhiteTextAlt,
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 8,
        }}
      >
        {title}
      </MonoText>
      <MonoText
        style={{
          color: ThemeColors.blackWhiteTextAlt,
          fontSize: 18,
          borderTopWidth: 2,
          borderTopColor: ThemeColors.blackWhiteTextAlt,
          paddingVertical: 16,
        }}
      >
        {content}
      </MonoText>
    </View>
  );
}
