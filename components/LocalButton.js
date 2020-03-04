import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableWithoutFeedback
} from "react-native";
import { MonoText } from "./StyledText";
import { ScrollView } from "react-native-gesture-handler";

import Colors from "../constants/Colors";

export default function LocalButton({ bg, color, elevated, onPress, title }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={{
        backgroundColor: bg,
        marginVertical: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: elevated ? 4 : 0,
        alignSelf: "baseline",
        borderRadius: 20
      }}
    >
      <View>
        <MonoText
          style={{
            fontSize: 16,
            color: color,
            textAlign: "center"
          }}
        >
          {title}
        </MonoText>
      </View>
    </TouchableHighlight>
  );
}
