import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { cardData } from "../utils/cardData";
import PostDetails from "./PostDetails";

const Post = () => {
  return (
    <ScrollView>
      <View style={{ width: "100%" }}>
        {cardData.map((item, index) => (
          <PostDetails key={index} data={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Post;

const styles = StyleSheet.create({});
