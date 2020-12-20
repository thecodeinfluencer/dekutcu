import React from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";

import CoreValue from "../components/CoreValue";
import { ThemeColors } from "../constants/Colors";

export default function CoreValues() {
  const store = useSelector(state => state);

  return (
    <ScrollView
      style={{
        backgroundColor: ThemeColors.blackWhiteBgAlt,
        flex: 1,
      }}
      contentContainerStyle={{ paddingVertical: 8 }}
    >
      {store.coreValues.map(item => (
        <CoreValue
          key={item.iconName}
          iconName={item.iconName}
          header={item.header}
          content={item.content}
        />
      ))}
    </ScrollView>
  );
}
