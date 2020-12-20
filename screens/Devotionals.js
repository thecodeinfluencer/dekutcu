import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";

import DevotionalCard from "../components/DevotionalCard";
import { ThemeColors } from "../constants/Colors";

export default function Devotionals({ navigation }) {
  const store = useSelector(state => state);
  console.warn("Devotionals: ", store.devotionals);

  return (
    <ScrollView
      style={{
        backgroundColor: ThemeColors.blackWhiteBgAlt,
      }}
      contentContainerStyle={{
        paddingVertical: 8,
      }}
    >
      {store.devotionals.list.map(item => (
        <DevotionalCard
          key={item.text}
          content={item.text}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
}
