import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ImageBackground,
  Dimensions,
  StatusBar,
  ToolbarAndroid,
  AsyncStorage
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import LocalButton from "../components/LocalButton";
import CoreValues from "../components/CoreValues";

import { MonoText } from "../components/StyledText";
import ContactFooter from "../components/ContactFooter";
import HeaderTitle from "../components/HeaderTitle";
import FellowshipDay from "../components/FellowshipDay";

import Colors, { Light, Dark } from "../constants/Colors";

export const coreValues = [
  {
    iconName: "md-heart",
    header: "Believing In the Bible",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quiodit facilis tenetur tempora libero "
  },
  {
    iconName: "md-book",
    header: "Living in his grace",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quiodit facilis tenetur tempora libero "
  }
];

const weeklyFellow = [
  {
    day: "Monday",
    meetings: [
      { name: "Evening Devotion", venue: "Room 8", time: "6am" },
      { name: "Evening Devotion 1", venue: "Room 8", time: "6am" },
      { name: "Evening Devotion 2", venue: "Room 8", time: "6am" }
    ]
  },
  {
    day: "Tuesday",
    meetings: [
      { name: "Evening Devotion5", venue: "Room 8", time: "6am" },
      { name: "Evening Devotion 3", venue: "Room 8", time: "6am" },
      { name: "Evening Devotion 4", venue: "Room 8", time: "6am" }
    ]
  },
  {
    day: "Wednesday",
    meetings: [
      { name: "Evening Devotion6", venue: "Room 8", time: "6am" },
      { name: "Evening Devotion 7", venue: "Room 8", time: "6am" },
      { name: "Evening Devotion 8", venue: "Room 8", time: "6am" }
    ]
  }
];

export default function HomeBar({ navigation }) {
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
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={{ paddingHorizontal: 32 }}>
          <MonoText
            style={{
              fontSize: 24,
              color:
                theme === "light" ? Light.blackWhiteText : Dark.blackWhiteText
            }}
          >
            Dedan Kimathi University Of Technology Christian Union (DekutCU)
          </MonoText>
          <MonoText
            style={{
              fontSize: 24,
              color:
                theme === "light" ? Light.blackWhiteText : Dark.blackWhiteText
            }}
          >
            The Church of Kimathi
          </MonoText>
        </View>
        <View style={{ padding: 32 }}>
          <MonoText
            style={{
              fontSize: 16,
              color:
                theme === "light" ? Light.blackWhiteText : Dark.blackWhiteText
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, qui odit facilis tenetur tempora libero architecto
            pariatur, nesciunt sapiente ea quo, assumenda repellendus enim ut
            eligendi maiores. Ducimus, ab expedita!
          </MonoText>
          <LocalButton
            title="Read More"
            onPress={() => navigation.navigate("About")}
            elevated
            bg={Colors.themeColor}
            color={theme === "light" ? Light.appBarColor : Dark.appBarColor}
          />
        </View>

        <View
          style={{
            marginVertical: 50,
            paddingVertical: 5,
            paddingHorizontal: 20,
            backgroundColor: Colors.themeColor,
            marginHorizontal: 30,
            borderRadius: 20,
            paddingTop: 20
          }}
        >
          <MonoText
            style={{
              color: theme === "light" ? Light.appBarColor : Dark.appBarColor,
              fontSize: 20
            }}
          >
            Register Online and be part of us
          </MonoText>
          <LocalButton
            title="Register"
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "http://www.dekutcu.co.ke/online-registration-2/"
              )
            }
            bg={theme === "light" ? Light.appBarColor : Dark.appBarColor}
            color={Colors.themeColor}
          />
        </View>

        <HeaderTitle title="Weekly Fellowships" />
        <FlatList
          data={weeklyFellow}
          keyExtractor={item => item.day}
          renderItem={({ item }) => (
            <FellowshipDay day={item.day} meetings={item.meetings} />
          )}
        />
        <ContactFooter />
      </ScrollView>
    </View>
  );
}

HomeBar.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  }
});
