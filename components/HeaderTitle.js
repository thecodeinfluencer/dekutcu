import React from "react";
import { View } from "react-native";

import { ThemeColors } from "../constants/Colors";
import Layout from "../constants/Layout";

import { MonoText } from "./StyledText";

export default function HeaderTitle({ onPress, title }) {
  return (
    <View>
      <MonoText
        style={{
          fontSize: 26,
          color: ThemeColors.themeColor,
          marginVertical: 8,
          marginHorizontal: Layout.marginHorizontal,
          paddingBottom: 8,
          borderBottomWidth: 4,
          borderBottomColor: ThemeColors.themeColor,
        }}
      >
        {title}
      </MonoText>
    </View>
  );
}
