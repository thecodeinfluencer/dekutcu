import React from "react";
import { View } from "react-native";
import * as WebBrowser from "expo-web-browser";

import { ThemeColors } from "../constants/Colors";
import Layout from "../constants/Layout";
import LocalButton from "./LocalButton";
import { MonoText } from "./StyledText";

export default function SubMinistryCard({ item, url }) {
  return (
    <View
      style={{
        marginVertical: 8,
        paddingVertical: 4,
        paddingHorizontal: 16,
        backgroundColor: ThemeColors.blackWhiteAlt,
        marginHorizontal: Layout.marginHorizontal,
        borderRadius: 8,
        paddingTop: 16,
      }}
    >
      <MonoText
        style={{
          color: ThemeColors.blackWhiteTextAlt,
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 5,
        }}
      >
        {item.name}
      </MonoText>
      <MonoText
        style={{
          color: ThemeColors.white,
          fontSize: 18,
        }}
      >
        {item.desc}
      </MonoText>
      <LocalButton
        title="Read More"
        onPress={() => WebBrowser.openBrowserAsync(url)}
        bg={ThemeColors.blackWhiteTextAlt}
        color={ThemeColors.blackWhiteAlt}
      />
    </View>
  );
}
