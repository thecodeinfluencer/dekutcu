import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import firebase from "./data/firebaseConfig";

export default function Messaging() {
  const [fcmToken, setFcmToken] = useState(null);

  useEffect(() => {
    firebase
      .messaging()
      .getToken()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <Text>FCM Token: </Text>
      <Text>{JSON.stringify(fcmToken)}</Text>
    </View>
  );
}
