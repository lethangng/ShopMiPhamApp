import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import color from "../../contains/color";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          marginTop: 40,
        }}
      >
        <View
          style={{
            backgroundColor: color.primary,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <View style={{}}>
              <Icon name="bars" size={30} color={color.white} />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              color: color.white,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Home
          </Text>
          <View>
            <Icon name="search" size={25} color={color.white} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
