import React from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import NotificationCard from "../components/NotificationCard";
import { ThemeColors } from "../constants/Colors";

export default function Notifications({ navigation }) {
  const store = useSelector(state => state);
  navigation.setOptions({
    headerTitle: "Notifications",
  });

  return (
    <View
      style={{
        backgroundColor: ThemeColors.blackWhiteBgAlt,
        paddingVertical: 8,
        flex: 1,
      }}
    >
      <FlatList
        keyExtractor={item => item.text}
        data={store.notifications}
        renderItem={({ item }) => (
          <NotificationCard
            content={item.text}
            date={item.date}
            title={item.title}
          />
        )}
      />
    </View>
  );
}
