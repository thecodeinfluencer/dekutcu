import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

import { MonoText } from "../components/StyledText";
import { ThemeColors } from "../constants/Colors";
import TitleCard from "../components/TitleCard";
import CallToAction from "../components/CallToAction";
import LinkSection from "../components/LinkSection";
import Layout from "../constants/Layout";
import { fetchDevotionals } from "../redux/actions/devotionalsActions";
import { fetchNotifications } from "../redux/actions/notificationsActions";

export default function HomeBar({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDevotionals());
    dispatch(fetchNotifications());
  }, []);

  const store = useSelector(state => state);
  const { about, missionVision } = store;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ThemeColors.blackWhiteBgAlt,
      }}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={{ marginHorizontal: Layout.marginHorizontal }}>
          <MonoText
            style={{
              fontSize: 24,
              color: ThemeColors.blackWhiteText,
            }}
          >
            {about.title}
          </MonoText>
        </View>
        <View
          style={{
            marginHorizontal: Layout.marginHorizontal,
            marginVertical: 8,
          }}
        >
          <MonoText
            style={{
              fontSize: 16,
              color: ThemeColors.blackWhiteText,
            }}
          >
            {about.desc}
          </MonoText>
        </View>

        {missionVision.map(item => (
          <TitleCard
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}

        <View style={{ paddingVertical: 24 }}>
          <LinkSection
            navigation={navigation}
            title="Core Values"
            component="CoreValues"
          />
          <LinkSection
            navigation={navigation}
            title="Weekly Fellowships"
            component="Fellowships"
          />
          <LinkSection
            title="Events"
            link="https://www.dekutcu.co.ke/events/"
          />
          <LinkSection
            title="Gallery"
            link="https://www.dekutcu.co.ke/gallery/"
          />
          <LinkSection
            navigation={navigation}
            title="Contact"
            component="Contact"
          />
        </View>

        <CallToAction
          title="Register Online and join the church of Kimathi"
          link="http://www.dekutcu.co.ke/online-registration-2/"
          buttonText="Register"
        />

        <CallToAction
          title="View the DekutCU executive commitee"
          link="http://www.dekutcu.co.ke/leaders/"
          buttonText="View Leaders"
        />

        <CallToAction
          title="Visit the church website to explore more"
          link="http://www.dekutcu.co.ke/"
          buttonText="Visit Website"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 30,
  },
  container: {
    paddingVertical: 30,
  },
});
