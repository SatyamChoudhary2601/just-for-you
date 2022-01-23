import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import profileImg from "../assets/27.jpg";
import GridPhotos from "../components/GridPhotos";
import VideoContainer from "../components/VideoContainer";

import { videoData } from "../utils/videoData";
import { useNavigation } from "@react-navigation/native";
const ProfileScreen = () => {
  const navigation = useNavigation();
  // console.log(videoData, "daaaaaaaaaaaaaaaaaa");
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <TouchableOpacity
        style={{ position: "absolute", top: 40, left: 20 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="white" />
      </TouchableOpacity>
      <View
        style={{
          //   backgroundColor: "green",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: 40,
        }}
      >
        {/* arrow-back-outline */}

        <View>
          <LinearGradient
            colors={["#CA1D7E", "#E35157", "#F2703F"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={{
              height: 84,
              width: 84,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 84 / 2,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Picture")}>
              <Image
                source={profileImg}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 80 / 2,
                  alignSelf: "center",
                  borderColor: "#fff",
                  borderWidth: 3,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </LinearGradient>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              alignSelf: "center",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            DESIRE
          </Text>
        </View>
        <View
          style={{
            width: "100%",

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: 20,
            // backgroundColor: "green",
          }}
        >
          <View style={styles.section__one}>
            <Text style={styles.section__two}>182</Text>
            <Text style={styles.section__three}>Posts</Text>
          </View>
          <View style={styles.section__one}>
            <Text style={styles.section__two}>424</Text>
            <Text style={styles.section__three}>Followers</Text>
          </View>
          <View style={styles.section__one}>
            <Text style={styles.section__two}>747</Text>
            <Text style={styles.section__three}>Following</Text>
          </View>
        </View>
      </View>
      <View>
        <ScrollView horizontal={true}>
          {videoData.map((item, index) => (
            <VideoContainer key={index} item={item} />
          ))}
        </ScrollView>
      </View>
      <View style={{ flex: 2 }}>
        <GridPhotos />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  section__one: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  section__two: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  section__three: {
    color: "white",
    fontSize: 16,
  },
});
