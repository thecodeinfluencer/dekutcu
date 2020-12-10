import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import CoreValue from "../components/CoreValue";
import { MonoText } from "../components/StyledText";
import { ThemeColors } from "../constants/Colors";

export default function CoreValues() {
  const store = useSelector(state => state);
  console.log("corev: ", store.coreValues);

  return (
    <View
      style={{
        backgroundColor: ThemeColors.blackWhiteBgAlt,
        paddingVertical: 8,
        flex: 1,
      }}
    >
      <FlatList
        data={store.coreValues}
        keyExtractor={item => item.iconName}
        renderItem={({ item }) => (
          <CoreValue
            iconName={item.iconName}
            header={item.header}
            content={item.content}
          />
        )}
      />
    </View>
  );
}
