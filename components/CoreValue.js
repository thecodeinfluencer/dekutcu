import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ThemeColors } from "../constants/Colors";
import { MonoText } from "./StyledText";
import Layout from "../constants/Layout";

export default function CoreValue(props) {
  return (
    <View
      style={{
        backgroundColor: ThemeColors.blackWhiteAlt,
        marginVertical: 8,
        paddingBottom: 32,
        padding: 16,
        marginHorizontal: Layout.marginHorizontal,
        shadowOffset: { backgroundColor: "#37003c" },
        elevation: 4,
        alignItems: "center",
        borderRadius: 8,
      }}
    >
      <Ionicons name={props.iconName} size={30} color={ThemeColors.grayColor} />
      <MonoText
        style={{
          fontSize: 18,
          textAlign: "center",
          color: ThemeColors.blackWhiteTextAlt,
          paddingVertical: 5,
          fontWeight: "bold",
        }}
      >
        {props.header}
      </MonoText>
      <MonoText
        style={{
          fontSize: 16,
          textAlign: "center",
          color: ThemeColors.white,
        }}
      >
        {props.content}
      </MonoText>
    </View>
  );
}
