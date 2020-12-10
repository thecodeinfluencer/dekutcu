import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { ThemeColors } from "./constants/Colors";
import useCachedResources from "./hooks/useCachedResources";

import rootReducer from "./redux/reducers/rootReducer";

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  StatusBar.setBackgroundColor(ThemeColors.statusBarColor);
  StatusBar.setBarStyle(ThemeColors.barStyle);

  const store = createStore(rootReducer, applyMiddleware(thunk));

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Dedan Christians"
                component={BottomTabNavigator}
                options={{
                  headerStyle: {
                    backgroundColor: ThemeColors.appBarColor,
                  },
                  headerTintColor: "#aaa",
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
