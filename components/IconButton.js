import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function IconButton({
  name,
  size,
  bg,
  color,
  rounded,
  onPress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={{
        alignSelf: "baseline",
        padding: 4,
        backgroundColor: bg,
        borderRadius: rounded ? size + 8 / 2 : 0,
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={size}
        style={{
          color: color,
        }}
      />
    </TouchableOpacity>
  );
}
