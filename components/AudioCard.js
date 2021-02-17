import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DateTime } from "luxon";
// import TrackPlayer from "react-native-track-player";

import LocalButton from "./LocalButton";
import { MonoText } from "./StyledText";
import { ThemeColors } from "../constants/Colors";
import Layout from "../constants/Layout";

export default function MusicCard({ audio }) {
  const { author, time, title, url } = audio;
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginVertical: 8,
        paddingVertical: 8,
        paddingHorizontal: 24,
        backgroundColor: ThemeColors.blackWhiteAlt,
        marginHorizontal: Layout.marginHorizontal,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <MonoText
          style={{
            color: ThemeColors.blackWhiteTextAlt,
            fontSize: 20,
            marginBottom: -5,
          }}
        >
          {title}
        </MonoText>
        <MonoText
          style={{
            color: ThemeColors.white,
            fontSize: 18,
          }}
        >
          {author}
        </MonoText>
        <MonoText
          style={{
            color: ThemeColors.blackWhiteTextAlt,
            fontSize: 10,
          }}
        >
          {DateTime.fromMillis(time).toSQLDate()}
        </MonoText>
      </View>
      <LocalButton
        title="Listen"
        onPress={() =>
          navigation.navigate("Player", {
            content: audio,
          })
        }
        bg={ThemeColors.blackWhiteTextAlt}
        color={ThemeColors.blackWhiteAlt}
      />
    </View>
  );
}
