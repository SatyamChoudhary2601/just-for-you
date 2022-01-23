import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { data } from "../utils/data";
import { cardData } from "../utils/cardData";
import { useNavigation } from "@react-navigation/native";

const GridPhotos = () => {
  const navigation = useNavigation();
  const routeHandler = (item) => {
    // console.log(item);
    navigation.navigate("Photos", { data: item });
  };
  return (
    // <ScrollView style={{ backgroundColor: "black", flex: 2 }}>
    <View>
      <FlatGrid
        itemDimension={130}
        data={cardData}
        keyExtractor={(item) => item.src}
        //   style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => routeHandler(item)}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image source={item.src} style={{ width: 180, height: 180 }} />
            </View>
          </TouchableOpacity>
        )}
      />
      <FlatGrid
        itemDimension={130}
        data={data}
        keyExtractor={(item) => item.src}
        //   style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => routeHandler(item)}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image source={item.src} style={{ width: 180, height: 180 }} />
            </View>
          </TouchableOpacity>
        )}
      />
      {/* </ScrollView> */}
    </View>
  );
};

export default GridPhotos;

const styles = StyleSheet.create({});
