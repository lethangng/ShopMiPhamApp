import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { windownWidth } from "../../utils/Dimensions";
import Icon from "react-native-vector-icons/FontAwesome5";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CountProduct = (props) => {
  const {
    setCount,
    count,
    handleOnPressHide,
    productInfo,
    showProduct,
    product,
  } = props;
  const navigation = useNavigation();

  const handleOnPressBuy = () => {
    navigation.navigate("Buy", { productInfo });
  };

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: showProduct,
        width: windownWidth,
        backgroundColor: color.white,
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingBottom: 15,
        height: 250,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
            }}
          >
            <Image
              source={require("../../assets/img/slider/image-1.jpg")}
              resizeMode="stretch"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>
          <View
            style={{
              justifyContent: "flex-end",
              // backgroundColor: "blue",
            }}
          >
            <Text
              style={{
                color: color.gray,
              }}
            >
              Giá: {product.price}đ
            </Text>
            <Text
              style={{
                color: color.gray,
              }}
            >
              Còn lại: {product.quantity}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => handleOnPressHide()}>
          <Icon name={"times"} size={25} color={color.primary} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 20,
          marginTop: 10,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: color.gray,
        }}
      >
        <View>
          <Text
            style={{
              color: color.gray,
            }}
          >
            Số lượng
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
          }}
        >
          <TouchableOpacity
            style={styles.countProduct}
            onPress={() => setCount(count - 1)}
            disabled={count === 1}
          >
            <Text
              style={{
                color: color.text,
              }}
            >
              -
            </Text>
          </TouchableOpacity>
          <Text style={styles.countProductCenter}>{count}</Text>
          <TouchableOpacity
            style={styles.countProduct}
            onPress={() => setCount(count + 1)}
            disabled={count === product.quantity}
          >
            <Text
              style={{
                color: color.text,
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: color.primary,
          marginTop: 20,
          alignItems: "center",
          paddingVertical: 10,
        }}
        onPress={() => handleOnPressBuy()}
      >
        <Text
          style={{
            color: color.white,
          }}
        >
          Mua ngay
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CountProduct;

const styles = StyleSheet.create({
  wrapProduct: {
    flexDirection: "row",
    borderWidth: 2,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    padding: 10,
    borderColor: color.primary,
    backgroundColor: color.white,
    alignItems: "flex-start",
  },
  textNameDisable: {
    color: color.gray,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  textName: {
    color: color.primary,
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrice: {
    color: "red",
    marginRight: 5,
    fontSize: 18,
  },
  textDisable: {
    color: "gray",
  },
  textStatus: {
    color: "blue",
  },
  countProduct: {
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: color.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  countProductCenter: {
    color: color.primary,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: color.gray,
    alignItems: "center",
    justifyContent: "center",
  },
});
