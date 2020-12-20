import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

import { MonoText } from "./StyledText";
import { ThemeColors } from "../constants/Colors";
import Layout from "../constants/Layout";

export default function LinkSection({ title, link, component, navigation }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        navigation && component && navigation.navigate(component);
        link && WebBrowser.openBrowserAsync(link);
      }}
    >
      <View
        style={{
          marginHorizontal: Layout.marginHorizontal,
          borderTopWidth: 2,
          borderTopColor: ThemeColors.themeColor,
          paddingVertical: 12,
          paddingHorizontal: 8,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <MonoText
          style={{
            fontSize: 18,
            marginRight: 20,
            color: ThemeColors.themeColor,
          }}
        >
          {title}
        </MonoText>
        <MaterialCommunityIcons
          name="chevron-right"
          color={ThemeColors.themeColor}
          style={{ fontSize: 24 }}
        />
      </View>
    </TouchableOpacity>
  );
}
