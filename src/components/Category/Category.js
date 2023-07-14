import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import color from "../../contains/color";
import { windownWidth } from "../../utils/Dimensions";
import { useNavigation } from "@react-navigation/native";

const Category = ({ categoryList }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderColor: color.white,
      }}
    >
      <Text
        style={{
          color: color.primary,
          fontSize: 24,
          fontWeight: "bold",
          marginLeft: 10,
        }}
      >
        Categories
      </Text>
      <ScrollView horizontal>
        {categoryList.map((item, index) => {
          return (
            <TouchableOpacity
              key={index.toString()}
              style={{
                borderWidth: 2,
                margin: 10,
                alignItems: "center",
                width: windownWidth * 0.25,
                borderRadius: 5,
                paddingTop: 5,
                backgroundColor: color.primary,
                borderColor: color.white,
              }}
              onPress={() => {
                navigation.navigate("CategoryView", {
                  title: item.description,
                });
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                }}
              >
                {item.image}
              </View>
              <Text
                style={{
                  color: color.white,
                  fontSize: 14,
                }}
              >
                {item.description}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Category;
