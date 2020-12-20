import * as React from "react";
import { View, AsyncStorage } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Colors, { Light, Dark } from "../../constants/Colors";
import { MonoText } from "../../components/StyledText";

import HeaderTitle from "../../components/HeaderTitle";
import LocalButton from "../../components/LocalButton";

const ministryArray = [
  {
    name: "Music",
    link: "Music Ministry",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ea quo, assumenda repellendus enim ut eligendi maiores. Ducimus, abexpedita",
  },
  {
    name: "Publicity",
    link: "Publicity Ministry",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ea quo, assumenda repellendus enim ut eligendi maiores. Ducimus, abexpedita",
  },
  {
    name: "Ushering",
    link: "Ushering Ministry",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ea quo, assumenda repellendus enim ut eligendi maiores. Ducimus, abexpedita",
  },
];

export default function MinistryStack({ route, navigation }) {
  const [theme, setTheme] = React.useState("");
  AsyncStorage.getItem("@Theme", (err, val) => {
    setTheme(val);
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          theme === "light" ? Light.appBarColor : Dark.appBarColor,
      }}
    >
      <ScrollView style={{ flex: 1 }}>
        <HeaderTitle title="Ministries" />
        {ministryArray.map(item => (
          <View
            key={item.desc}
            style={{
              marginTop: 40,
              paddingVertical: 5,
              paddingHorizontal: 20,
              backgroundColor: Colors.themeColor,
              marginHorizontal: 30,
              borderRadius: 10,
              paddingTop: 20,
              marginBottom: 10,
            }}
          >
            <MonoText
              style={{
                color: theme === "light" ? Light.appBarColor : Dark.appBarColor,
                fontSize: 24,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              {item.name}
            </MonoText>
            <MonoText
              style={{
                color: theme === "light" ? Light.appBarColor : Dark.appBarColor,
                fontSize: 20,
              }}
            >
              {item.desc}
            </MonoText>
            <LocalButton
              title="Read More"
              onPress={() => navigation.navigate(item.link)}
              bg={theme === "light" ? Light.appBarColor : Dark.appBarColor}
              color={Colors.themeColor}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
