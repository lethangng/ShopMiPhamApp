import { Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import Sliders from "../../components/Slider/Slider";
import color from "../../contains/color";
import FiveStarView from "../../components/FiveStarView/FiveStarView";
import Icon from "react-native-vector-icons/FontAwesome5";

const BodyProductDetail = (props) => {
  const { product } = props;
  const [isHeart, setIsHeart] = useState(false);

  const handleOnPressHeart = () => {
    setIsHeart(!isHeart);

    isHeart === false &&
      Alert.alert("Thông báo", "Đã thêm vào danh sách yêu thích.");
  };

  return (
    <ScrollView>
      <Sliders imageList={product.images} />

      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 20,
          paddingTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: color.text,
          }}
        >
          {product.name}
        </Text>
        <Text
          style={{
            color: "red",
            fontSize: 18,
            marginVertical: 10,
          }}
        >
          Giá: {product.price}đ
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FiveStarView starFull={4} starHafl={1} />
            <Text
              style={{
                color: color.text,
                marginHorizontal: 10,
                borderRightWidth: 1,
                borderColor: color.gray,
                paddingRight: 10,
              }}
            >
              4.8
            </Text>
            <Text
              style={{
                color: color.text,
              }}
            >
              Đã bán: {product.numberPrice}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              marginRight: 20,
            }}
            onPress={() => handleOnPressHeart()}
          >
            <Icon
              name="heart"
              size={25}
              color={isHeart ? "red" : color.gray}
              solid
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: color.white,
          height: 10,
        }}
      ></View>
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            color: color.text,
            paddingVertical: 10,
            borderBottomWidth: 2,
            borderColor: color.gray,
          }}
        >
          Loại sản phẩm: {product.type}
        </Text>
        <Text
          style={{
            color: color.text,
            fontSize: 16,
            marginVertical: 10,
          }}
        >
          Mô tả sản phẩm
        </Text>
        <Text
          style={{
            color: color.text,
          }}
        >
          {product.description}
        </Text>
      </View>
    </ScrollView>
  );
};

export default BodyProductDetail;
