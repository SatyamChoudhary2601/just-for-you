import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

import { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function VideoComponent({ data }) {
  // console.log(data, "video compoooooo");
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [loading, setLoading] = useState(false);
  // console.log(status, "play");
  setTimeout(() => {
    setLoading(true);
  }, 2000);
  return (
    <>
      {loading ? (
        <View style={styles.container}>
          <Video
            ref={video}
            style={styles.video}
            source={data.src}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            useNativeControls={false}
          />
          <View style={styles.buttons}>
            {status.isPlaying ? (
              <TouchableOpacity
                onPress={() =>
                  status.isPlaying
                    ? video.current.pauseAsync()
                    : video.current.playAsync()
                }
              >
                <Ionicons name="pause-outline" size={50} color="white" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() =>
                  status.isPlaying
                    ? video.current.pauseAsync()
                    : video.current.playAsync()
                }
              >
                <Ionicons name="play-outline" size={50} color="white" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="large" color="red" />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  buttons: {
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    position: "absolute",
    bottom: 100,
    left: "45%",
  },
});
