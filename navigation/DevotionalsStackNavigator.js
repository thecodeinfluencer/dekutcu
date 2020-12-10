import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ThemeColors } from "../constants/Colors";
import Devotionals from "../screens/Devotionals";
import Devotional from "../screens/Devotional";

const Stack = createStackNavigator();

export default function DevotionalsStackNavigator({}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: ThemeColors.appBarBackground,
        },
        headerTitleStyle: {
          fontFamily: "nunito-light",
        },
        headerTintColor: ThemeColors.themeColor,
      }}
    >
      <Stack.Screen name="Devotionals" component={Devotionals} />
      <Stack.Screen name="Devotional" component={Devotional} />
    </Stack.Navigator>
  );
}
