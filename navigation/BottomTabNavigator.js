import React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MinistriesStackNavigator from "../navigation/MinistriesStackNavigator";
import HomeStackNavigator from "./HomeStackNavigator";
import DevotionalsStackNavigator from "./DevotionalsStackNavigator";
import Notifications from "../screens/Notifications";
import TabBarIcon from "../components/TabBarIcon";
import { ThemeColors } from "../constants/Colors";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({
    headerShown: setHeaderShown(route),
    headerTitle: setHeaderTitle(route),
    headerStyle: {
      backgroundColor: ThemeColors.appBarBackground,
    },
    headerTitleStyle: {
      fontFamily: "nunito-light",
    },
    headerTintColor: ThemeColors.themeColor,
  });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      backBehavior="none"
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: ThemeColors.blackWhiteBgAlt,
        inactiveBackgroundColor: ThemeColors.blackWhiteBgAlt,
        style: {
          borderTopColor: ThemeColors.blackWhiteBgAlt,
          // paddingVertical: 10,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-home" label="Home" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Ministries"
        component={MinistriesStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-apps" label="Ministries" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Devotionals"
        component={DevotionalsStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-menu" label="Devotionals" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="ios-notifications"
              label="Notifications"
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function setHeaderShown(route) {
  let routeName = getFocusedRouteNameFromRoute(route) ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return false;
    case "Ministries":
      return false;
    case "Devotionals":
      return false;
    case "Notifications":
      return true;
  }
}

function setHeaderTitle(route) {
  let routeName = getFocusedRouteNameFromRoute(route) ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Notifications":
      return "Notifications";
  }
}
