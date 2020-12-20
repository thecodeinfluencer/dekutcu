import React from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";

import { ThemeColors } from "../constants/Colors";
import MinistryCard from "../components/MinistryCard";

export default function Ministries({ route, navigation }) {
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
      {store.ministryArray.map(item => (
        <MinistryCard key={item.link} item={item} navigation={navigation} />
      ))}
    </ScrollView>
  );
}
