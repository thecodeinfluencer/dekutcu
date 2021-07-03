import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import DevotionalCard from "../components/DevotionalCard";
import { ThemeColors } from "../constants/Colors";
import { fetchDevotionals } from "../redux/actions/devotionalsActions";

export default function Devotionals({ navigation }) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  console.warn("Devotionals: ", store.devotionals);

  useEffect(() => {
    dispatch(fetchDevotionals());
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: ThemeColors.blackWhiteBgAlt,
      }}
      contentContainerStyle={{
        paddingVertical: 8,
      }}
    >
      {store.devotionals.list.map((item) => (
        <DevotionalCard
          key={item.text}
          content={item.text}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
}
