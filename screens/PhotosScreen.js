import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { wishes } from "../utils/wishes";
const PhotosScreen = (props) => {
  console.log(props, "props here");

  const number = Math.floor(Math.random() * 21);
  const checkNumber = number ? number : 1;
  // console.log(checkNumber, "wishes");
  const imgUrl = props.route.params.data.src;
  const WISH = "HAPPY BIRTHDAY";

  console.log(imgUrl, "imgUrl");

  return (
    <View style={{ position: "relative" }}>
      <Image
        source={imgUrl}
        style={{
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
      />
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={{ position: "absolute", top: 40, left: 20 }}
      >
        <Ionicons name="arrow-back-sharp" size={50} color="white" />
      </TouchableOpacity>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          backgroundColor: "white",
          width: "90%",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "red",
            fontSize: 14,
            padding: 10,
            fontWeight: "bold",
          }}
        >
          {wishes[checkNumber]?.quote} {WISH}
        </Text>
      </View>
    </View>
  );
};

export default PhotosScreen;

const styles = StyleSheet.create({});
