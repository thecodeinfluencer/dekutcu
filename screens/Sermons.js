import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import AudioCard from "../components/AudioCard";
import Layout from "../constants/Layout";
import { ThemeColors } from "../constants/Colors";
import { fetchSermons } from "../redux/actions/sermonsActions";

export default function Sermons({ route }) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSermons());
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 16,
      }}
      style={{
        flex: 1,
        backgroundColor: ThemeColors.blackWhiteBgAlt,
      }}
    >
      {store.sermons.list.map((sermon) => (
        <AudioCard key={sermon.date} audio={sermon} />
      ))}
    </ScrollView>
  );
}
