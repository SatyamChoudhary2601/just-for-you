import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

const MainLoginScreen = () => {
  const [data, setData] = useState({
    email: "",
    // password: "",
  });

  const [isAuth, setIsAuth] = useState(false);
  const { email } = data;
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    if (email === "happybirthday@akanksha.com") {
      setIsAuth(true);
      // console.log("Auth Successful");
    }
  }, [email]);
  const onchangeEmail = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
      });
    }
    // console.log(e.target.value);
  };
  // const onchangePassword = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       password: val,
  //     });
  //   }
  // };

  console.log(data);

  return (
    <KeyboardAvoidingView
      //   style={styles.container}
      behavior="position"
      keyboardVerticalOffset={-550}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/31.jpg")}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        />
        <View style={styles.loginform_container}>
          <View
            style={{
              // backgroundColor: "green",
              width: "100%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Text style={styles.title_text}>Welcome,</Text>
            <Text style={styles.akku_text}>AKANKSHA</Text>
          </View>
          <View style={styles.input_container}>
            <TextInput
              // style={styles.input}
              onChangeText={(val) => onchangeEmail(val)}
              value={email}
              placeholder="Email"
            />
          </View>
          {/* <View style={styles.input_container}>
            <TextInput
              // style={styles.input}
              onChangeText={(val) => onchangePassword(val)}
              value={password}
              placeholder="Password"
            />
          </View> */}
          {isAuth && (
            <TouchableOpacity
              style={styles.login_btn}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.btn_text}>Login</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MainLoginScreen;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  title_text: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  akku_text: {
    backgroundColor: "red",
    marginLeft: 10,
    padding: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 3,
    borderRadius: 10,
    fontStyle: "italic",
    elevation: 10,
  },
  loginform_container: {
    backgroundColor: "white",
    position: "absolute",
    zIndex: 1,
    top: 200,
    left: 50,
    right: 50,
    padding: 20,
    opacity: 0.8,
    borderRadius: 20,
    height: "40%",
  },
  input_container: {
    backgroundColor: "white",
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    // elevation: 10,
  },
  login_btn: {
    backgroundColor: "#008001",
    marginTop: 20,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    elevation: 10,
    opacity: 1,
  },
  btn_text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 3,
  },
});
