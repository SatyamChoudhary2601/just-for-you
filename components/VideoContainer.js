import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const VideoContainer = (props) => {
  const { item } = props;
  //   console.log(props, "props");
  const navigation = useNavigation();

  const storyOnclick = (item) => {
    navigation.navigate("VideoScreen", { data: item });
  };

  return (
    <View
      style={{
        // backgroundColor: "#008080",
        paddingVertical: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => storyOnclick(item)}
        style={{
          width: 90,
          height: 80,
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
            source={item?.logo}
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
};

export default VideoContainer;
