import { View, StyleSheet } from "react-native";
import React from "react";
import color from "../../contains/color";

const PaginationSlider = ({ data, currentImage }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <View
            key={index.toString()}
            style={
              currentImage === index
                ? [styles.dot, { backgroundColor: color.primary }]
                : styles.dot
            }
          />
        );
      })}
    </View>
  );
};

export default PaginationSlider;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: "#ccc",
    marginHorizontal: 3,
  },
});
