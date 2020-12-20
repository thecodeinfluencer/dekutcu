import React from "react";
import { View, Image } from "react-native";

import { ThemeColors } from "../constants/Colors";
import { MonoText } from "./StyledText";
import Layout from "../constants/Layout";
import { DateTime } from "luxon";

import bg from "../assets/images/bg.jpg";

export default function NotificationCard({ content, date, title, photoURL }) {
  return (
    <View
      style={{
        marginVertical: 8,
        paddingTop: 12,
        paddingBottom: 8,
        backgroundColor: ThemeColors.blackWhiteAlt,
        marginHorizontal: Layout.marginHorizontal,
        borderRadius: 8,
        elevation: 4,
      }}
    >
      <MonoText
        style={{
          color: ThemeColors.blackWhiteTextAlt,
          fontSize: 18,
          marginBottom: 2,
          fontWeight: "bold",
          paddingHorizontal: 16,
        }}
      >
        {title}
      </MonoText>
      <MonoText
        style={{
          color: ThemeColors.grayColor,
          fontSize: 14,
          marginBottom: 12,
          paddingHorizontal: 16,
        }}
      >
        {DateTime.fromMillis(date).toRelative().toString()}
      </MonoText>
      <Image
        source={{
          url: photoURL,
        }}
        style={{
          width: "100%",
        }}
      />
      <MonoText
        style={{
          color: ThemeColors.white,
          fontSize: 16,
          marginBottom: 4,
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
      >
        {content}
      </MonoText>
      {/* <LocalButton
        title="Read More"
        onPress={() =>
          navigation && navigation.navigate("Devotional", { content: content })
        }
        bg={ThemeColors.blackWhiteAlt}
        color={ThemeColors.themeColor}
      /> */}
    </View>
  );
}
