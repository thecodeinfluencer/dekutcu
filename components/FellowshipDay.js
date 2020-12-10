import React from "react";
import { View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import { ThemeColors } from "../constants/Colors";
import { MonoText } from "./StyledText";
import Layout from "../constants/Layout";

export default function FellowshipDay({ day, meetings }) {
  return (
    <View
      style={{
        backgroundColor: ThemeColors.blackWhiteAlt,
        padding: 16,
        borderRadius: 8,
        marginHorizontal: Layout.marginHorizontal,
        marginVertical: 8,
        elevation: 4,
      }}
    >
      <View>
        <MonoText
          style={{
            fontSize: 20,
            color: ThemeColors.blackWhiteTextAlt,
            fontWeight: "bold",
          }}
        >
          {day}
        </MonoText>
      </View>
      {meetings.map(item => (
        <View
          key={item.name}
          style={{
            marginVertical: 8,
            borderTopWidth: 2,
            borderTopColor: ThemeColors.blackWhiteTextAlt,
            paddingTop: 10,
          }}
        >
          <MonoText
            style={{ fontSize: 18, color: ThemeColors.blackWhiteTextAlt }}
          >
            {item.name}
          </MonoText>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SimpleLineIcons
              style={{
                fontSize: 18,
                marginRight: 5,
                color: ThemeColors.blackWhiteTextAlt,
              }}
              name="location-pin"
            />
            <MonoText
              style={{
                fontSize: 18,
                marginRight: 20,
                color: ThemeColors.blackWhiteTextAlt,
              }}
            >
              {item.venue}
            </MonoText>
            <SimpleLineIcons
              style={{
                fontSize: 18,
                marginRight: 5,
                color: ThemeColors.blackWhiteTextAlt,
              }}
              name="clock"
            />
            <MonoText
              style={{
                fontSize: 18,
                marginRight: 20,
                color: ThemeColors.blackWhiteTextAlt,
              }}
            >
              {item.time}
            </MonoText>
          </View>
        </View>
      ))}
    </View>
  );
}
