import React from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { ThemeColors } from "../constants/Colors";
import { MonoText } from "../components/StyledText";
import LocalButton from "../components/LocalButton";
import Layout from "../constants/Layout";
import MinistryCard from "../components/MinistryCard";

export default function Ministries({ route, navigation }) {
  const store = useSelector(state => state);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ThemeColors.blackWhiteBgAlt,
        paddingVertical: 8,
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.link}
        data={store.ministryArray}
        renderItem={({ item }) => (
          <MinistryCard item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}
