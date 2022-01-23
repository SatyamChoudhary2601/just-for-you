import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CameraScreen from "./screens/CameraScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MainLoginScreen from "./screens/MainLoginScreen";
import PhotosScreen from "./screens/PhotosScreen";
import PicturePreview from "./screens/PicturePreview";
import ProfileScreen from "./screens/ProfileScreen";
import StoryPhotosScreen from "./screens/StoryPhotosScreen";
import VideoScreen from "./screens/VideoScreen";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainLogin"
        component={MainLoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Photos"
        component={PhotosScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VideoScreen"
        component={VideoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Picture"
        component={PicturePreview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StoryPhotos"
        component={StoryPhotosScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
