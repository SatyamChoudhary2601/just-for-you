import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import profileImg from "../assets/27.jpg";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const PicturePreview = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Image
        source={profileImg}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
};

export default PicturePreview;

const styles = StyleSheet.create({});
