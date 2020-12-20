import React from "react";
import { View } from "react-native";

import LocalButton from "./LocalButton";
import { ThemeColors } from "../constants/Colors";
import { MonoText } from "./StyledText";
import Layout from "../constants/Layout";

export default function DevotionalCard({ content, navigation }) {
  return (
    <View
      style={{
        marginVertical: 8,
        paddingTop: 12,
        paddingBottom: 8,
        paddingHorizontal: 16,
        backgroundColor: ThemeColors.blackWhiteAlt,
        marginHorizontal: Layout.marginHorizontal,
        borderRadius: 8,
      }}
    >
      <MonoText
        style={{
          color: ThemeColors.white,
          fontSize: 16,
          marginBottom: 4,
        }}
      >
        {content.slice(0, 200)}
      </MonoText>
      <LocalButton
        title="Read More"
        onPress={() =>
          navigation && navigation.navigate("Devotional", { content: content })
        }
        bg={ThemeColors.blackWhiteTextAlt}
        color={ThemeColors.blackWhiteAlt}
      />
    </View>
  );
}
