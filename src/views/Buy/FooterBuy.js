import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { totalPrice } from "../../helpers/totalPrice";
import { windownWidth } from "../../utils/Dimensions";

const FooterBuy = (props) => {
  const { productInfo } = props;

  const handleOnPressBuy = () => {
    Alert.alert("Thông báo", "Đặt hàng thành công.", [
      {
        text: "OK",
        onPress: () => {
          console.log("OK");
        },
      },
    ]);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <View style={styles.wrapFooter}>
        <View
          style={{
            marginRight: 10,
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: color.text,
              fontSize: 12,
            }}
          >
            Tổng thanh toán
          </Text>
          <Text
            style={{
              color: "red",
              fontSize: 16,
            }}
          >
            {totalPrice(productInfo)}đ
          </Text>
        </View>
        <TouchableOpacity
          style={styles.wrapBuy}
          onPress={() => handleOnPressBuy()}
        >
          <Text
            style={{
              color: color.white,
              fontWeight: "bold",
            }}
          >
            Đặt hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FooterBuy;

const styles = StyleSheet.create({
  wrapFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderWidth: 1,
    borderColor: color.primary,
    width: windownWidth,
    backgroundColor: color.white,
  },
  wrapBuy: {
    backgroundColor: color.primary,
    paddingVertical: 10,
    width: windownWidth * 0.3,
    alignItems: "center",
  },
});
