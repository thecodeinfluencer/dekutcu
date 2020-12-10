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
import Colors, { Dark, Light } from "../constants/Colors";

import { MonoText } from "../components/StyledText";
import HeaderTitle from "../components/HeaderTitle";
import LocalButton from "../components/LocalButton";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleLineIcons } from "@expo/vector-icons";
import MinistryStack from "./ministries/MinistryStack";
import Music from "./ministries/Music";
import Publicity from "./ministries/Publicity";
import Ushering from "./ministries/Ushering";

const Ministry = createStackNavigator();

export default function MinistriesBar() {
  const [theme, setTheme] = React.useState("");
  AsyncStorage.getItem("@Theme", (err, val) => {
    setTheme(val);
  });
  return (
    <NavigationContainer independent={true}>
      <Ministry.Navigator initialRouteName="Ministries">
        <Ministry.Screen
          name="Ministries"
          component={MinistryStack}
          options={{
            headerShown: false
          }}
        />
        <Ministry.Screen
          name="Music Ministry"
          component={Music}
          options={{
            headerStyle: {
              backgroundColor:
                theme === "light" ? Light.appBarColor : Dark.appBarColor
            },
            headerTintColor: "#aaa",
            headerShown: true
          }}
        />
        <Ministry.Screen
          name="Publicity Ministry"
          component={Publicity}
          options={{
            headerStyle: {
              backgroundColor:
                theme === "light" ? Light.appBarColor : Dark.appBarColor
            },
            headerTintColor: "#aaa",
            headerShown: true
          }}
        />
        <Ministry.Screen
          name="Ushering Ministry"
          component={Ushering}
          options={{
            headerStyle: {
              backgroundColor:
                theme === "light" ? Light.appBarColor : Dark.appBarColor
            },
            headerTintColor: "#aaa",
            headerShown: true
          }}
        />
      </Ministry.Navigator>
    </NavigationContainer>
  );
}

MinistriesBar.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
