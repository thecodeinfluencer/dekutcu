import React from "react";
import { View } from "react-native";

import LocalButton from "./LocalButton";
import { MonoText } from "./StyledText";
import { ThemeColors } from "../constants/Colors";
import Layout from "../constants/Layout";

export default function MinistryCard({ item, navigation }) {
  return (
    <View
      style={{
        marginVertical: 8,
        paddingVertical: 8,
        paddingHorizontal: 24,
        backgroundColor: ThemeColors.blackWhiteAlt,
        marginHorizontal: Layout.marginHorizontal,
        borderRadius: 8,
        paddingTop: 16,
      }}
    >
      <MonoText
        style={{
          color: ThemeColors.blackWhiteTextAlt,
          fontSize: 20,
          marginBottom: 5,
        }}
      >
        {item.name} Ministry
      </MonoText>
      <MonoText
        style={{
          color: ThemeColors.white,
          fontSize: 18,
        }}
      >
        {item.desc.slice(0, 56) + " ..."}
      </MonoText>
      <LocalButton
        title="Explore"
        onPress={() => navigation.navigate(item.link)}
        bg={ThemeColors.blackWhiteTextAlt}
        color={ThemeColors.blackWhiteAlt}
      />
    </View>
  );
}
