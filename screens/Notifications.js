import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import NotificationCard from "../components/NotificationCard";
import { ThemeColors } from "../constants/Colors";
import { fetchNotifications } from "../redux/actions/notificationsActions";

export default function Notifications({ navigation }) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  navigation.setOptions({
    headerTitle: "Notifications",
  });

  useEffect(() => {
    dispatch(fetchNotifications());
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: ThemeColors.blackWhiteBgAlt,
        flex: 1,
      }}
      contentContainerStyle={{ paddingVertical: 8 }}
    >
      {store.notifications.list.map((item) => (
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
