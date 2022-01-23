import { StyleSheet, Text, View } from "react-native";
import React from "react";
import VideoComponent from "../components/VideoComponent";

const VideoScreen = (props) => {
  //   console.log(props.route.params.data, "props.route.params.data");
  return <VideoComponent data={props.route.params.data} />;
};

export default VideoScreen;

const styles = StyleSheet.create({});
