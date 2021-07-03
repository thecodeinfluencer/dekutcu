import React from "react";
import { Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import * as WebBrowser from "expo-web-browser";

import { ThemeColors } from "../../constants/Colors";
import { MonoText } from "../../components/StyledText";
import HeaderTitle from "../../components/HeaderTitle";
import LocalButton from "../../components/LocalButton";
import SubMinistryCard from "../../components/SubMinistryCard";

import bg from "../../assets/images/bg.jpg";

export default function Publicity({ route }) {
  const store = useSelector((state) => state);

  let ministry = store.ministryArray.filter(
    (ministry) => ministry.name === "Publicity"
  )[0];
  let description = ministry.desc;
  let leader = ministry.leader;
  let subMinistries = ministry.subMinistries;
  let photoURL = ministry.photoURL;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ThemeColors.blackWhiteBgAlt,
      }}
    >
      <ScrollView style={{ flex: 1 }}>
        <Image
          source={{
            uri: photoURL,
          }}
          style={{
            width: "100%",
            height: 200,
          }}
        />
        <View
          style={{
            backgroundColor: ThemeColors.themeColor,
            padding: 16,
          }}
        >
          <MonoText
            style={{
              fontSize: 18,
              color: ThemeColors.blackWhiteTextAlt2,
            }}
          >
            {description.slice(0, description.search("\n")) + ".."}
          </MonoText>
          <MonoText
            style={{
              fontSize: 20,
              color: ThemeColors.blackWhiteTextAlt2,
              fontWeight: "bold",
              marginVertical: 4,
            }}
          >
            - {leader}
          </MonoText>
          <LocalButton
            title="Read More"
            onPress={() => WebBrowser.openBrowserAsync(ministry.url)}
            bg={ThemeColors.blackWhiteTextAlt2}
            color={ThemeColors.themeColor}
          />
        </View>
        <HeaderTitle title="Sub Ministries" />
        {subMinistries.map((item) => (
          <SubMinistryCard item={item} url={ministry.url} />
        ))}
      </ScrollView>
    </View>
  );
}
