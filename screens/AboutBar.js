import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  AsyncStorage
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import LocalButton from "../components/LocalButton";
import HeaderTitle from "../components/HeaderTitle";
import CoreValues from "../components/CoreValues";
import { coreValues } from "../screens/HomeBar";

import Colors, { Light, Dark } from "../constants/Colors";

import { MonoText } from "../components/StyledText";
import ContactFooter from "../components/ContactFooter";

export default function AboutBar() {
  const [theme, setTheme] = React.useState("");
  AsyncStorage.getItem("@Theme", (err, val) => {
    setTheme(val);
  });

  return (
    <View
      style={{
        backgroundColor:
          theme === "light" ? Light.blackWhiteBg : Dark.blackWhiteBg,
        flex: 1
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
        </View>

        <View
          style={{
            marginVertical: 30,
            paddingVertical: 20,
            paddingHorizontal: 30,
            backgroundColor: Colors.themeColor,
            marginHorizontal: 30,
            borderRadius: 20
          }}
        >
          <MonoText
            style={{
              color: theme === "light" ? Light.appBarColor : Dark.appBarColor,
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10
            }}
          >
            Vision
          </MonoText>
          <MonoText
            style={{
              color: theme === "light" ? Light.appBarColor : Dark.appBarColor,
              fontSize: 20,
              borderTopWidth: 2,
              borderTopColor:
                theme === "light" ? Light.appBarColor : Dark.appBarColor,
              paddingVertical: 20
            }}
          >
            Usually tabs don't just display one screen for example, on your
            Twitter feed, you can tap on a tweet and it brings you to a new
            screen within that tab with all of the replies.
          </MonoText>
        </View>

        <View
          style={{
            marginVertical: 30,
            paddingVertical: 20,
            paddingHorizontal: 30,
            backgroundColor: "#fff",
            marginHorizontal: 30,
            borderRadius: 20,
            borderColor: Colors.themeColor,
            borderWidth: 2,
            backgroundColor:
              theme === "light" ? Light.blackWhiteBg : Dark.blackWhiteBg
          }}
        >
          <MonoText
            style={{
              color: Colors.themeColor,
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10
            }}
          >
            Mission
          </MonoText>
          <MonoText
            style={{
              color: Colors.themeColor,
              fontSize: 20,
              borderTopWidth: 2,
              borderTopColor: Colors.themeColor,
              paddingVertical: 20
            }}
          >
            Usually tabs don't just display one screen for example, on your
            Twitter feed, you can tap on a tweet and it brings you to a new
            screen within that tab with all of the replies.
          </MonoText>
        </View>

        <HeaderTitle title="Our Core Values" />
        <FlatList
          data={coreValues}
          renderItem={({ item }) => (
            <CoreValues
              iconName={item.iconName}
              header={item.header}
              content={item.content}
            />
          )}
          keyExtractor={item => item.iconName}
        />
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
            View the DekutCU executive commitee
          </MonoText>
          <LocalButton
            title="View Leaders"
            onPress={() =>
              WebBrowser.openBrowserAsync("http://www.dekutcu.co.ke/leaders/")
            }
            bg={theme === "light" ? Light.appBarColor : Dark.appBarColor}
            color={Colors.themeColor}
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
            Visit the church website
          </MonoText>
          <LocalButton
            title="Visit Website"
            onPress={() =>
              WebBrowser.openBrowserAsync("http://www.dekutcu.co.ke/")
            }
            bg={theme === "light" ? Light.appBarColor : Dark.appBarColor}
            color={Colors.themeColor}
          />
        </View>
        <ContactFooter />
      </ScrollView>
    </View>
  );
}

AboutBar.navigationOptions = {
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
