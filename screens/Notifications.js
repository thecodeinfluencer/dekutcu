import React from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";

import NotificationCard from "../components/NotificationCard";
import { ThemeColors } from "../constants/Colors";

export default function Notifications({ navigation }) {
  const store = useSelector(state => state);
  console.warn("Notifications: ", store.notifications);
  navigation.setOptions({
    headerTitle: "Notifications",
  });

  return (
    <ScrollView
      style={{
        backgroundColor: ThemeColors.blackWhiteBgAlt,
        flex: 1,
      }}
      contentContainerStyle={{ paddingVertical: 8 }}
    >
      {store.notifications.list.map(item => (
        <NotificationCard
          key={item.date}
          content={item.text}
          date={item.date}
          title={item.title}
          photoURL={item.photoURL ? item.photoURL : null}
        />
      ))}
    </ScrollView>
  );
}
