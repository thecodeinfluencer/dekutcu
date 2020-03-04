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
import LocalButton from "../components/LocalButton";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

import { MonoText } from "../components/StyledText";

export default function MediaBar() {
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
          title="See Gallery"
          onPress={() =>
            WebBrowser.openBrowserAsync("http://www.dekutcu.co.ke/gallery/")
          }
          elevated
          bg={Colors.themeColor}
          color={theme === "light" ? Light.appBarColor : Dark.appBarColor}
        />
      </View>
    </View>
  );
}

MediaBar.navigationOptions = {
  header: null
};
