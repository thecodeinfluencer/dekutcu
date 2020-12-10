import React from "react";
import { View } from "react-native";
import * as WebBrowser from "expo-web-browser";

import LocalButton from "../components/LocalButton";
import { ThemeColors } from "../constants/Colors";
import { MonoText } from "../components/StyledText";
import Layout from "../constants/Layout";

export default function CallToAction({ title, buttonText, link }) {
  return (
    <View
      style={{
        marginVertical: 8,
        paddingVertical: 8,
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
          marginTop: 8,
        }}
      >
        {title}
      </MonoText>
      <LocalButton
        title={buttonText}
        onPress={() => link && WebBrowser.openBrowserAsync(link)}
        bg={ThemeColors.blackWhiteTextAlt}
        color={ThemeColors.blackWhiteAlt}
      />
    </View>
  );
}
