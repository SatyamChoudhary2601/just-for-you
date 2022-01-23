import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import StackNavigation from "./StackNavigation";

export default function App() {
  
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  
});
