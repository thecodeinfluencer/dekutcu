import React from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";

import FellowshipDay from "../components/FellowshipDay";
import { ThemeColors } from "../constants/Colors";

export default function Fellowships() {
  const store = useSelector(state => state);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: ThemeColors.blackWhiteBgAlt,
      }}
      contentContainerStyle={{
        paddingVertical: 8,
      }}
    >
      {store.weeklyFellow.map(item => (
        <FellowshipDay key={item.day} day={item.day} meetings={item.meetings} />
      ))}
    </ScrollView>
  );
}
