import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

import Colors from "../constants/Colors";

import { MonoText } from "./StyledText";

export default function HeaderTitle({ onPress, title }) {
  return (
    <View>
      <MonoText
        style={{
          fontSize: 26,
          color: Colors.themeColor,
          marginTop: 60,
          marginHorizontal: 40,
          borderBottomWidth: 4,
          borderBottomColor: Colors.themeColor,
          paddingBottom: 10
        }}
      >
        {title}
      </MonoText>
    </View>
  );
}
