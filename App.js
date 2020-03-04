import * as React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { SplashScreen, Updates } from "expo";
import * as Font from "expo-font";
import { Ionicons, SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import changeNavigationBarColor from "react-native-navigation-bar-color";

// changeNavigationBarColor("#008b8b", true, false);
// HideNavigationBar();

import BottomTabNavigator from "./navigation/BottomTabNavigator";
import useLinking from "./navigation/useLinking";
import { Light, Dark, updateTheme } from "./constants/Colors";

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  const [theme, setTheme] = React.useState("");
  const [notifications, setNotifications] = React.useState("");

  StatusBar.setBackgroundColor(
    theme === "light" ? Light.statusBarColor : Dark.statusBarColor,
    false
  );
  StatusBar.setBarStyle(theme === "light" ? "dark-content" : "light-content");

  AsyncStorage.getItem("@Theme", (err, val) => {
    setTheme(val);
  });

  AsyncStorage.getItem("@Notifications", (err, val) => {
    setNotifications(val);
  });

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
          "nunito-light": require("./assets/fonts/Nunito-Light.ttf")
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <Stack.Navigator>
            <Stack.Screen
              name="DekutCU"
              component={BottomTabNavigator}
              options={{
                headerStyle: {
                  backgroundColor:
                    theme === "light" ? Light.appBarColor : Dark.appBarColor
                },
                headerTintColor: "#aaa",
                headerTitleStyle: {
                  fontWeight: "bold"
                },
                headerRight: () => (
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      onPress={() => {
                        if (notifications === "on") {
                          AsyncStorage.setItem("@Notifications", "off");
                          AsyncStorage.getItem("@Notifications", (err, val) => {
                            setNotifications(val);
                          });
                        } else {
                          AsyncStorage.setItem("@Notifications", "on");
                          AsyncStorage.getItem("@Notifications", (err, val) => {
                            setNotifications(val);
                          });
                        }
                      }}
                    >
                      <MaterialIcons
                        name={
                          notifications === "on"
                            ? "notifications-active"
                            : "notifications-off"
                        }
                        // name="home"
                        size={22}
                        style={{ marginRight: 20, marginTop: 3 }}
                        color={
                          theme === "light"
                            ? Light.blackWhiteText
                            : Dark.blackWhiteText
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        if (theme === "light") {
                          AsyncStorage.setItem("@Theme", "dark");
                          AsyncStorage.getItem("@Theme", (err, val) => {
                            setTheme(val);
                          });
                        } else {
                          AsyncStorage.setItem("@Theme", "light");
                          AsyncStorage.getItem("@Theme", (err, val) => {
                            setTheme(val);
                          });
                        }
                        updateTheme();
                        Updates.reload();
                      }}
                    >
                      <MaterialIcons
                        name={
                          theme === "light"
                            ? "brightness-low"
                            : "brightness-high"
                        }
                        // name="home"
                        size={22}
                        style={{ marginRight: 20, marginTop: 3 }}
                        color={
                          theme === "light"
                            ? Light.blackWhiteText
                            : Dark.blackWhiteText
                        }
                      />
                    </TouchableOpacity>
                  </View>
                )
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
