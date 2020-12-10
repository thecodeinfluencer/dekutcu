import React from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import FellowshipDay from "../components/FellowshipDay";
import { ThemeColors } from "../constants/Colors";

export default function Fellowships() {
  const store = useSelector(state => state);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ThemeColors.blackWhiteBgAlt,
        marginVertical: 8,
      }}
    >
      <FlatList
        data={store.weeklyFellow}
        keyExtractor={item => item.day}
        renderItem={({ item }) => (
          <FellowshipDay day={item.day} meetings={item.meetings} />
        )}
      />
    </View>
  );
}
