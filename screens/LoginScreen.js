import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from "react-native-web";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Image
        source={require("../assets/akku.gif")}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
      />
      {/* <Button title="Go to Home" onPress={() => navigation.navigate("Home")} /> */}
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate("MainLogin")}
        >
          Login
        </Text>
        {/* <TextInput/> */}
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    width: "80%",
    position: "absolute",
    top: 350,
    left: 50,
    right: 50,
    padding: 20,
    opacity: 0.8,
    zIndex: 1,
    borderRadius: 30,
  },
  text: {
    color: "black",
    opacity: 1,
    textAlign: "center",
    letterSpacing: 2,
    fontWeight: "bold",
  },
});
