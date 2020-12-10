import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";

import firebase from "../data/firebaseConfig";
import DevotionalCard from "../components/DevotionalCard";
import { ThemeColors } from "../constants/Colors";

export default function Devotionals({ navigation }) {
  const store = useSelector(state => state);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot(function (snap) {
        const products = [];
        snap.forEach(doc => {
          products.push(doc.data());
        });

        console.warn("users: ", products);
      });
  }, []);

  return (
    <View
      style={{
        backgroundColor: ThemeColors.blackWhiteBgAlt,
        paddingVertical: 8,
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.text}
        data={store.devotionals}
        renderItem={({ item }) => (
          <DevotionalCard content={item.text} navigation={navigation} />
        )}
      />
    </View>
  );
}
