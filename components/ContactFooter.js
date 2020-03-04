import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  AsyncStorage
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

import { Light, Dark } from "../constants/Colors";

import { MonoText } from "./StyledText";
import { Ionicons } from "@expo/vector-icons";

export default function ContactFooter({ onPress, title }) {
  const [theme, setTheme] = React.useState("");
  AsyncStorage.getItem("@Theme", (err, val) => {
    setTheme(val);
  });
  return (
    <View style={{ marginHorizontal: 35, marginBottom: 30 }}>
      <MonoText
        style={{
          fontWeight: "bold",
          marginVertical: 5,
          fontSize: 18,
          color: theme === "light" ? Light.blackWhiteText : Dark.blackWhiteText
        }}
      >
        Contact
      </MonoText>
      <View>
        <MonoText
          style={{
            fontSize: 16,
            color:
              theme === "light" ? Light.blackWhiteText : Dark.blackWhiteText
          }}
        >
          info@dekutcu.co.ke | dedanchristians@gmail.com
        </MonoText>
        <MonoText
          style={{
            fontSize: 16,
            color:
              theme === "light" ? Light.blackWhiteText : Dark.blackWhiteText
          }}
        >
          Call: 07XXXXXXXX
        </MonoText>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 5 }}>
        <Ionicons
          name="logo-facebook"
          size={30}
          style={{ margin: 5 }}
          color="#91969c"
        />
        <Ionicons
          name="logo-twitter"
          size={30}
          style={{ margin: 5 }}
          color="#91969c"
        />
        <Ionicons
          name="logo-youtube"
          size={30}
          style={{ margin: 5 }}
          color="#91969c"
        />
        <Ionicons
          name="logo-instagram"
          size={30}
          style={{ margin: 5 }}
          color="#91969c"
        />
      </View>
      <MonoText
        style={{
          fontSize: 16,
          color: theme === "light" ? Light.blackWhiteText : Dark.blackWhiteText
        }}
      >
        DekutCU {new Date().getFullYear()} All Rights Reserved
      </MonoText>
    </View>
  );
}
