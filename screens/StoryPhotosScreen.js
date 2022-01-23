import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const StoryPhotosScreen = (props) => {
  const navigation = useNavigation();
  //   console.log(props, "data");
  //   const imgUrl = props.route.params.item.src;
  //   console.log(imgUrl, "data");

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={props.route.params.item.src}
        resizeMode="cover"
        width={100}
        height={"100%"}

        // blurRadius={1}
        // width={Dimensions.get("window").width}
        // height={Dimensions.get("window").height}
        // style={{ width: "100%", height: "100%" }}
      />
      {/* <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={{ position: "absolute", top: 40, left: 20 }}
      >
        <Ionicons name="arrow-back-sharp" size={50} color="white" />
      </TouchableOpacity> */}
    </View>
  );
};

export default StoryPhotosScreen;

const styles = StyleSheet.create({});
