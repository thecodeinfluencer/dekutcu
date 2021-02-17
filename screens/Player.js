import React, { useState } from "react";
import { View, Slider } from "react-native";
import { DateTime } from "luxon";

import { MonoText } from "../components/StyledText";
import { ThemeColors } from "../constants/Colors";
import Layout from "../constants/Layout";
import IconButton from "../components/IconButton";

export default function Player({ route }) {
  const { author, time, title, url } = route.params.content;
  const [playBtn, setPlayBtn] = useState(false);

  return (
    <View>
      <View
        style={{
          paddingVertical: 16,
          flex: 1,
          paddingHorizontal: Layout.marginHorizontal,
          backgroundColor: ThemeColors.blackWhiteBgAlt,
        }}
      >
        <MonoText
          style={{
            color: ThemeColors.themeColor,
            fontSize: 24,
            marginBottom: -4,
          }}
        >
          {title}
        </MonoText>
        <MonoText
          style={{
            color: ThemeColors.themeColor,
            fontSize: 18,
          }}
        >
          {author}
        </MonoText>
        <MonoText
          style={{
            color: ThemeColors.themeColor,
            fontSize: 16,
            marginTop: 16,
          }}
        >
          {DateTime.fromMillis(time).toSQLDate()}
        </MonoText>
      </View>
      <Slider
        minimumTrackTintColor={ThemeColors.themeColor}
        thumbTintColor={ThemeColors.themeColor}
        style={{
          width: "100%",
          position: "absolute",
          top: Layout.window.height - 240,
          left: 0,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 45,
          position: "absolute",
          top: Layout.window.height - 200,
          left: 0,
        }}
      >
        <View
          style={{
            paddingHorizontal: Layout.marginHorizontal,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MonoText
            style={{
              color: ThemeColors.themeColor,
              fontSize: 18,
            }}
          >{`${author} . ${title}`}</MonoText>
          <IconButton
            rounded
            name={playBtn ? "pause" : "play"}
            size={30}
            bg={ThemeColors.themeColor}
            color={ThemeColors.white}
            onPress={() => setPlayBtn(!playBtn)}
          />
        </View>
      </View>
    </View>
  );
}
