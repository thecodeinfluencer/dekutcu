import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

import Colors, { Light, Dark } from "../constants/Colors";

import { MonoText } from "../components/StyledText";
import ContactFooter from "../components/ContactFooter";
import LocalButton from "../components/LocalButton";

export default function EventsBar() {
  const [theme, setTheme] = React.useState("");
  AsyncStorage.getItem("@Theme", (err, val) => {
    setTheme(val);
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          theme === "light" ? Light.appBarColor : Dark.appBarColor,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <View>
        <LocalButton
          title="See Events"
          onPress={() =>
            WebBrowser.openBrowserAsync("http://www.dekutcu.co.ke/events/")
          }
          elevated
          bg={Colors.themeColor}
          color={theme === "light" ? Light.appBarColor : Dark.appBarColor}
        />
      </View>
    </View>
  );
}
