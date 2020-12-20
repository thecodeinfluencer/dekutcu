import React from "react";
import { StyleSheet } from "react-native";
import { ThemeColors } from "../constants/Colors";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Music from "../screens/ministries/Music";
import Publicity from "../screens/ministries/Publicity";
import Ushering from "../screens/ministries/Ushering";
import Ministries from "../screens/Ministries";

const Ministry = createStackNavigator();

export default function MinistriesStackNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Ministry.Navigator
        initialRouteName="Ministries"
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
        <Ministry.Screen name="Ministries" component={Ministries} />
        <Ministry.Screen name="Music Ministry" component={Music} />
        <Ministry.Screen name="Publicity Ministry" component={Publicity} />
        <Ministry.Screen name="Ushering Ministry" component={Ushering} />
      </Ministry.Navigator>
    </NavigationContainer>
  );
}

MinistriesStackNavigator.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
