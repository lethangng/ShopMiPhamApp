import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import color from "../../contains/color";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.backgroudPrimary,
      }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent
      />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="arrow-left" size={25} color={color.white} />
        </TouchableOpacity>
        <Text
          style={{
            color: color.white,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Profile
        </Text>
        <Icon name="pencil-alt" size={25} color={color.white} />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/img/slider/image-1.jpg")}
          resizeMode="stretch"
          style={styles.avatar}
        />
      </View>
      <View
        style={{
          height: 60,
        }}
      ></View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: color.text,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Lê Ngọc Thắng
        </Text>
        <Text
          style={{
            color: color.text,
          }}
        >
          +84345684012
        </Text>
      </View>
      <View style={styles.wrapAccount}>
        <Text style={styles.textAccount}>Account</Text>
        <View>
          <View style={styles.wrapInfo}>
            <Text style={styles.textLeft}>Username</Text>
            <Text style={styles.textRight}>admin@gmail.com</Text>
          </View>
          <View style={styles.wrapInfo}>
            <Text style={styles.textLeft}>Gender</Text>
            <Text style={styles.textRight}>Male</Text>
          </View>
          <View style={styles.wrapInfo}>
            <Text style={styles.textLeft}>Birthday</Text>
            <Text style={styles.textRight}>04/07/2002</Text>
          </View>
          <View style={styles.wrapInfo}>
            <Text style={styles.textLeft}>Location</Text>
            <Text style={styles.textRight}>Thái Bình</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.textLogout}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: color.primary,
    alignItems: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingTop: 40,
    height: "20%",
    borderRadius: 15,
  },
  wrapInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderColor: color.white,
    paddingVertical: 10,
  },
  textRight: {
    color: color.text,
    fontSize: 16,
  },
  textLeft: {
    fontSize: 16,
    color: color.white,
  },
  textAccount: {
    fontSize: 18,
    fontWeight: "bold",
    color: color.text,
    paddingVertical: 10,
  },
  textLogout: {
    fontSize: 20,
    color: color.white,
    backgroundColor: color.primary,
    padding: 10,
    borderRadius: 10,
  },
  wrapAccount: {
    marginHorizontal: 15,
    backgroundColor: "#a0b4c9",
    borderRadius: 10,
    padding: 10,
    paddingBottom: 40,
    marginTop: 40,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
    position: "absolute",
    top: -50,
    borderWidth: 2,
    borderColor: color.white,
  },
});
