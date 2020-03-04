import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  AsyncStorage
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import Colors, { Light, Dark } from "../../constants/Colors";

import { MonoText } from "../../components/StyledText";
import HeaderTitle from "../../components/HeaderTitle";
import LocalButton from "../../components/LocalButton";

const ministryArray = [
  {
    name: "Publicity Ministry",
    slogan: "THE LOVE FAMILY",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ea quo, assumenda repellendus enim ut eligendi maiores. Ducimus, abexpedita"
  }
];

export default function Publicity({ route }) {
  const [theme, setTheme] = React.useState("");
  AsyncStorage.getItem("@Theme", (err, val) => {
    setTheme(val);
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          theme === "light" ? Light.blackWhiteBg : Dark.blackWhiteBg
      }}
    >
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: Colors.themeColor,
            paddingTop: 20,
            padding: 20
          }}
        >
          <View
            style={{
              marginBottom: 20
            }}
          >
            <MonoText
              style={{
                fontSize: 24,
                color: theme === "light" ? Light.appBarColor : Dark.appBarColor
              }}
            >
              The Love Family
            </MonoText>
          </View>

          <MonoText
            style={{
              fontSize: 18,
              color: theme === "light" ? Light.appBarColor : Dark.appBarColor
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, qui odit facilis tenetur tempora libero architecto
            pariatur, nesciunt sapiente ea quo, assumenda repellendus enim ut
            eligendi maiores. Ducimus, ab expedita!
          </MonoText>
        </View>
        <HeaderTitle title="Sub Ministries" />
        <View
          style={{
            marginVertical: 50,
            paddingVertical: 5,
            paddingHorizontal: 20,
            backgroundColor: Colors.themeColor,
            marginHorizontal: 30,
            borderRadius: 10,
            paddingTop: 20
          }}
        >
          <MonoText
            style={{
              color: theme === "light" ? Light.appBarColor : Dark.appBarColor,
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 5
            }}
          >
            Media
          </MonoText>
          <MonoText
            style={{
              color: theme === "light" ? Light.appBarColor : Dark.appBarColor,
              fontSize: 20
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, qui odit facilis tenetur tempora libero architecto
            pariatur, nesciunt sapiente ea quo,
          </MonoText>
          <LocalButton
            title="Read More"
            onPress={() =>
              WebBrowser.openBrowserAsync("http://www.dekutcu.co.ke/")
            }
            bg={theme === "light" ? Light.appBarColor : Dark.appBarColor}
            color={Colors.themeColor}
          />
        </View>
      </ScrollView>
    </View>
  );
}
