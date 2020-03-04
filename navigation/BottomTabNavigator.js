import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeBar from "../screens/HomeBar";
import EventsBar from "../screens/EventsBar";
import MinistriesBar from "../screens/MinistriesBar";
import MediaBar from "../screens/MediaBar";
import AboutBar from "../screens/AboutBar";
import { Text, StatusBar, TextInput } from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "../components/StyledText";
import { AsyncStorage } from "react-native";
import { Light, Dark } from "../constants/Colors";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerShown: setHeaderShown(route)
  });

  const [theme, setTheme] = React.useState("");
  AsyncStorage.getItem("@Theme", (err, val) => {
    setTheme(val);
  });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      backBehavior="none"
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor:
          theme === "light" ? Light.appBarColor : Dark.appBarColor,
        inactiveBackgroundColor:
          theme === "light" ? Light.appBarColor : Dark.appBarColor
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeBar}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="home" label="Home" />
          )
        }}
      />
      <BottomTab.Screen
        name="Events"
        component={EventsBar}
        options={{
          title: "Events",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="event" label="Events" />
          )
        }}
      />
      <BottomTab.Screen
        name="Ministries"
        component={MinistriesBar}
        options={{
          title: "Ministries",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="layers" label="Ministries" />
          )
        }}
      />
      <BottomTab.Screen
        name="Media"
        component={MediaBar}
        options={{
          title: "Media",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="camrecorder" label="Gallery" />
            //notebook..folder..drawer
          )
        }}
      />
      <BottomTab.Screen
        name="About"
        component={AboutBar}
        options={{
          title: "About",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="info" label="About" />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function setHeaderShown(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return true;
    case "Events":
      return false;
    case "Ministries":
      return false;
    case "Media":
      return false;
    case "About":
      return true;
  }
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return <MonoText>Home</MonoText>;
    case "Events":
      return <MonoText>Events</MonoText>;
    case "Ministries":
      return <MonoText>Ministries</MonoText>;
    case "Media":
      return <MonoText>Media Gallery</MonoText>;
    case "About":
      return <MonoText>About</MonoText>;
  }
}
