import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { windownWidth } from "../../utils/Dimensions";
import color from "../../contains/color";
import CheckBox from "@react-native-community/checkbox";
import { useNavigation } from "@react-navigation/native";
import { totalPrice } from "../../helpers/totalPrice";

const DELETE = "DELETE";
const PRODUCT = "PRODUCT";

const Footer = (props) => {
  const { checkAll, handleCheckAll, title, count, productSelected } = props;

  return (
    <View style={styles.wrapFooter}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 10,
        }}
      >
        <CheckBox
          value={checkAll}
          tintColors={{ true: color.primary, false: color.primary }}
          onChange={() => handleCheckAll()}
        />
        <Text
          style={{
            color: color.primary,
            fontSize: 12,
          }}
        >
          Tất cả
        </Text>
      </View>
      {title === DELETE && <FooterDelete count={count} />}
      {title === PRODUCT && (
        <FooterProduct count={count} productSelected={productSelected} />
      )}
    </View>
  );
};

const FooterProduct = (props) => {
  const { count, productSelected } = props;
  const navigation = useNavigation();
  // console.log("productSelected:", productSelected);

  const handleOnPressBuy = () => {
    navigation.navigate("Buy", { productInfo: productSelected });
  };

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            // flexDirection: "row",
            marginRight: 5,
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: color.primary,
              fontSize: 12,
            }}
          >
            Tổng thanh toán:{" "}
          </Text>
          <Text
            style={{
              color: "red",
            }}
          >
            {totalPrice(productSelected)}đ
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={
          count === 0
            ? [styles.buttonBuy, styles.buttonDisable]
            : styles.buttonBuy
        }
        disabled={count === 0}
        onPress={() => handleOnPressBuy()}
      >
        <Text
          style={{
            color: color.white,
          }}
        >
          Mua hàng ({count})
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const FooterDelete = (props) => {
  const { count } = props;

  const handleOnPressDelete = () => {
    Alert.alert("Xóa", "Bạn chắc chắn muốn xóa ?", [
      {
        text: "Hủy",
        onPress: () => console.log("Cancel pressed"),
      },
      { text: "OK", onPress: () => console.log("OK pressed") },
    ]);
  };

  return (
    <TouchableOpacity
      style={{
        marginRight: 20,
        paddingVertical: 10,
      }}
      disabled={count === 0}
      onPress={() => handleOnPressDelete()}
    >
      <Text
        style={
          count === 0
            ? [styles.textDelete, styles.textDisable]
            : styles.textDelete
        }
      >
        Xóa
      </Text>
    </TouchableOpacity>
  );
};

export default Footer;

const styles = StyleSheet.create({
  wrapFooter: {
    width: windownWidth,
    flexDirection: "row",
    backgroundColor: color.white,
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: color.primary,
    position: "absolute",
    bottom: 0,
    // backgroundColor: "red",
  },
  buttonBuy: {
    backgroundColor: color.primary,
    padding: 15,
    paddingHorizontal: 10,
    width: windownWidth * 0.35,
    alignItems: "center",
  },
  buttonDisable: {
    backgroundColor: color.gray,
  },
  textDelete: {
    color: color.text,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderColor: color.gray,
    paddingVertical: 4,
  },
  textDisable: {
    color: color.gray,
  },
});
