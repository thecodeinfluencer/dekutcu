import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MinistryStack from "./ministries/MinistryStack";
import Music from "./ministries/Music";
import Publicity from "./ministries/Publicity";
import Ushering from "./ministries/Ushering";

const Ministry = createStackNavigator();

export default function MinistriesBar() {
  return (
    <NavigationContainer independent={true}>
      <Ministry.Navigator initialRouteName="Ministries">
        <Ministry.Screen
          name="Ministries"
          component={MinistryStack}
          options={{
            headerShown: false,
          }}
        />
        <Ministry.Screen
          name="Music Ministry"
          component={Music}
          options={{
            headerTintColor: "#aaa",
            headerShown: true,
          }}
        />
        <Ministry.Screen
          name="Publicity Ministry"
          component={Publicity}
          options={{
            headerTintColor: "#aaa",
            headerShown: true,
          }}
        />
        <Ministry.Screen
          name="Ushering Ministry"
          component={Ushering}
          options={{
            headerTintColor: "#aaa",
            headerShown: true,
          }}
        />
      </Ministry.Navigator>
    </NavigationContainer>
  );
}

MinistriesBar.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
