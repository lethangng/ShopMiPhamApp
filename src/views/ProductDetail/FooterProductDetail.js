import {
  Text,
  View,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { windownWidth } from "../../utils/Dimensions";
import color from "../../contains/color";

const FooterProductDetail = (props) => {
  const { handleOnPressShow, status } = props;

  const handleOnPress = () => {
    handleOnPressShow();
  };

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: windownWidth,
        justifyContent: "space-between",
        flexDirection: "row",
        borderTopWidth: 1,
        borderColor: color.primary,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          borderRightWidth: 1,
          borderColor: color.white,
          width: windownWidth * 0.5,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 0.5,
            justifyContent: "center",
            alignItems: "center",
            borderRightWidth: 1,
            borderColor: color.gray,
          }}
          onPress={() => {
            const url = "https://www.messenger.com/t/100054196028101"; // URL của trang bạn muốn liên kết đến
            Linking.openURL(url);
          }}
        >
          <Icon name="comments" size={25} color={color.primary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 0.5,
          }}
        >
          <Icon name="cart-plus" size={25} color={color.primary} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={
          status ? styles.buttonBuy : [styles.buttonBuy, styles.buttonDisable]
        }
        onPress={() => handleOnPress()}
        disabled={status === false}
      >
        <Text
          style={{
            color: color.white,
          }}
        >
          Mua ngay
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterProductDetail;

const styles = StyleSheet.create({
  buttonBuy: {
    backgroundColor: color.primary,
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDisable: {
    backgroundColor: color.gray,
  },
});
