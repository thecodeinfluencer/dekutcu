import React from "react";
import { View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { MonoText } from "../components/StyledText";
import { ThemeColors } from "../constants/Colors";
import Layout from "../constants/Layout";

const contactList = [
  { icon: "email", text: "info@dekutcu.co.ke" },
  { icon: "email", text: "dedanchristians@gmail.com" },
  { icon: "phone", text: "07XXXXXXXX" },
  { icon: "facebook", text: "dedanChristians" },
  { icon: "twitter", text: "dedanChristians" },
  { icon: "youtube", text: "dedanChristians" },
  { icon: "instagram", text: "dedanChristians" },
];

export default function Contact({}) {
  return (
    <View
      style={{
        paddingHorizontal: Layout.marginHorizontal,
        paddingVertical: 16,
        backgroundColor: ThemeColors.blackWhiteBgAlt,
        flex: 1,
      }}
    >
      {contactList.map(item => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 4,
          }}
        >
          <MaterialCommunityIcons
            name={item.icon}
            style={{ fontSize: 28, color: ThemeColors.themeColor }}
          />
          <MonoText
            style={{
              fontSize: 20,
              color: ThemeColors.themeColor,
              marginLeft: 10,
            }}
          >
            {item.text}
          </MonoText>
        </View>
      ))}

      <MonoText
        style={{
          fontSize: 18,
          color: ThemeColors.themeColor,
          marginVertical: 8,
        }}
      >
        DekutCU {new Date().getFullYear()} All Rights Reserved
      </MonoText>
    </View>
  );
}
