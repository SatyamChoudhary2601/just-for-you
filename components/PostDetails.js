import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import profileImg from "../assets/27.jpg";
const PostDetails = ({ data }) => {
  const navigation = useNavigation();
  const routeHandler = (item) => {
    // console.log(item);
    navigation.navigate("Photos", { data: item });
  };
  return (
    <View
      style={{
        // marginVertical: 20,
        // height: 600,
        marginBottom: 10,
        // borderBottomWidth: 2,
        borderTopWidth: 0.2,
        borderTopColor: "white",
        elevation: 5,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <LinearGradient
            colors={["#CA1D7E", "#E35157", "#F2703F"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={{
              height: 38,
              width: 38,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 40 / 2,
            }}
          >
            <Image
              source={profileImg}
              style={{
                width: 35,
                height: 35,
                borderRadius: 36 / 2,
                alignSelf: "center",
                borderColor: "#fff",
                borderWidth: 3,
              }}
              resizeMode="cover"
            />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text
            style={{
              color: "black",
              marginLeft: 10,
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            akanksha_bhar_dwaj
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => routeHandler(data)}>
        <Image
          source={data.src}
          style={{ width: "100%", height: 500, backgroundColor: "white" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({});
