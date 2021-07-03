import React, { useState, useEffect } from "react";
import { View, Slider } from "react-native";
import { DateTime } from "luxon";
import { Audio } from "expo-av";
import { Duration } from "luxon";
import { useNavigation } from "@react-navigation/native";

import { MonoText } from "../components/StyledText";
import { ThemeColors } from "../constants/Colors";
import Layout from "../constants/Layout";
import IconButton from "../components/IconButton";

export default function Player({ route }) {
  const navigation = useNavigation();
  const { author, time, title, url } = route.params.content;
  const [sound, setSound] = useState(null);
  const [musicState, setMusicState] = useState({});

  async function unloadSound() {
    sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : console.log("No Sound to Unload");
  }

  async function loadSound() {
    unloadSound();
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      {
        uri: url,
      },
      null,
      (state) => {
        setMusicState(state);
      },
      false
    );
    setSound(sound);

    await sound.playAsync();
    console.log("Sound Loaded");
  }

  async function playSound() {
    if (musicState.isLoaded) {
      console.log("Resuming Sound");
      await sound.playAsync();
    } else {
      console.log("Sound Not loaded yet", musicState.isLoaded);
      loadSound();
    }
  }

  async function pauseSound() {
    console.log("Pausing Sound");
    await sound.pauseAsync();
  }

  navigation.addListener("beforeRemove", () => {
    pauseSound();
    return;
  });

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
        value={musicState.positionMillis / musicState.durationMillis || 0}
        onValueChange={(val) => {
          musicState.durationMillis && sound.pauseAsync();
        }}
        onSlidingComplete={(val) => {
          musicState.durationMillis &&
            sound.setStatusAsync({
              positionMillis: Math.floor(val * musicState.durationMillis),
            });
          sound.playAsync();
        }}
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
          <View>
            <MonoText
              style={{
                color: ThemeColors.themeColor,
                fontSize: 18,
              }}
            >
              {musicState.durationMillis &&
                Duration.fromObject({
                  milliseconds: musicState.positionMillis,
                }).toFormat("hh:mm:ss")}
            </MonoText>

            <MonoText
              style={{
                color: ThemeColors.themeColor,
                fontSize: 18,
              }}
            >{`${author} . ${title}`}</MonoText>
          </View>
          <IconButton
            rounded
            name={musicState.isPlaying ? "pause" : "play"}
            size={30}
            bg={ThemeColors.themeColor}
            color={ThemeColors.white}
            onPress={musicState.isPlaying ? pauseSound : playSound}
          />
        </View>
      </View>
    </View>
  );
}
