import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Camera } from "expo-camera";

import { Entypo } from "@expo/vector-icons";
import akku1 from "../assets/image/1.jpg";
import akku2 from "../assets/image/2.jpg";
import akku3 from "../assets/image/3.jpg";
import akku4 from "../assets/image/4.jpg";
import akku5 from "../assets/image/5.jpg";
import akku6 from "../assets/image/6.jpg";
import akku7 from "../assets/image/7.jpg";
import akku8 from "../assets/image/8.jpg";
import akku9 from "../assets/image/9.jpg";
import akku10 from "../assets/image/10.jpg";
import akku11 from "../assets/image/11.jpg";
import akku12 from "../assets/image/12.jpg";
import akku13 from "../assets/image/13.jpg";
import akku14 from "../assets/image/14.jpg";
import akku15 from "../assets/image/15.jpg";
import akku16 from "../assets/image/16.jpg";
import akku17 from "../assets/image/17.jpg";
import akku18 from "../assets/image/18.jpg";
import akku19 from "../assets/image/19.jpg";
import akku20 from "../assets/image/20.jpg";
import akku21 from "../assets/image/21.jpg";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Post from "../components/Post";
import { LinearGradient } from "expo-linear-gradient";
// import CameraComponent from "../components/CameraComponent";

const HomeScreen = () => {
  const navigation = useNavigation();
  const data = [
    {
      src: akku1,
    },
    {
      src: akku2,
    },
    {
      src: akku3,
    },
    {
      src: akku4,
    },
    {
      src: akku5,
    },
    {
      src: akku6,
    },
    {
      src: akku7,
    },
    {
      src: akku8,
    },
    {
      src: akku9,
    },
    {
      src: akku10,
    },
    {
      src: akku11,
    },
    {
      src: akku12,
    },
    {
      src: akku13,
    },
    {
      src: akku14,
    },
    {
      src: akku15,
    },
    {
      src: akku16,
    },
    {
      src: akku17,
    },
    {
      src: akku18,
    },
    {
      src: akku19,
    },
    {
      src: akku20,
    },
    {
      src: akku21,
    },
  ];

  const [cameraOpen, setCameraOpen] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const camRef = useRef(null);
  // console.log(camRef, "camRef");

  const __handleCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
    if (status === "granted") {
      setCameraOpen(true);
    }

    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  };
  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   })();
  // }, [cameraOpen]);

  const storyOnclick = (item) => {
    navigation.navigate("StoryPhotos", { item });
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          // paddingVertical: 10,
          paddingTop: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={require("../assets/31.jpg")}
            style={{
              width: 50,
              height: 50,
              resizeMode: "cover",
              borderRadius: 50,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Entypo name="camera" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView horizontal={true}>
          {data.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  // backgroundColor: "#008080",
                  paddingVertical: 10,
                }}
              >
                <TouchableOpacity
                  // onPress={() => storyOnclick(item)}
                  style={{
                    width: 85,
                    height: 85,
                    borderRadius: 50,
                    marginLeft: 5,
                  }}
                >
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
                    <Image
                      source={item.src}
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
                  </LinearGradient>
                  {/* <Image
                    source={item.src}
                    style={{
                      width: 80,
                      height: 80,
                      resizeMode: "cover",
                      borderRadius: 50,
                      borderWidth: 2,
                      borderColor: "green",
                    }}
                  /> */}
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <Post />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
