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

import { MonoText } from "../components/StyledText";
import { Ionicons } from "@expo/vector-icons";

export default function ContactFooter({ onPress, title }) {
  return (
    <View style={{ marginHorizontal: 35, marginBottom: 30 }}>
      <Text style={{ fontWeight: "bold", marginVertical: 5, fontSize: 18 }}>
        Contact
      </Text>
      <View>
        <Text style={{ fontSize: 16 }}>
          info@dekutcu.co.ke | dedanchristians@gmail.com
        </Text>
        <Text style={{ fontSize: 16 }}>Call: 07XXXXXXXX</Text>
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
      <Text style={{ fontSize: 16 }}>
        DekutCU {new Date().getFullYear()} All Rights Reserved
      </Text>
    </View>
  );
}
