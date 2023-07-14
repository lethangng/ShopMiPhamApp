import {
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import HomeStyles from "./HomeStyles";
import Icon from "react-native-vector-icons/FontAwesome5";
import color from "../../contains/color";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const HOME = "HOME";
const CART = "CART";
const FAVORITE_PRODUCT = "FAVORITE_PRODUCT";

export default HeaderHome = (props) => {
  const { title, numberProduct, handleShowDelete, showDelete } = props;
  const navigation = useNavigation();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent
      />
      <View style={HomeStyles.header}>
        {title === HOME ? (
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <View>
              <Icon name="bars" size={30} color={color.white} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon name="arrow-left" size={25} color={color.white} />
              {title === CART && (
                <Text
                  style={{
                    marginLeft: 10,
                    color: color.white,
                    fontSize: 16,
                  }}
                >
                  Giỏ hàng ({numberProduct})
                </Text>
              )}
            </View>
          </TouchableOpacity>
        )}

        {title === CART ? (
          <TouchableOpacity onPress={() => handleShowDelete()}>
            <Text
              style={{
                color: color.white,
              }}
            >
              {showDelete ? "Xong" : "Sửa"}
            </Text>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setShowSearch(!showSearch);
              }}
              style={{
                marginRight: 15,
              }}
            >
              <Icon name="search" size={25} color={color.white} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Cart");
              }}
            >
              <Icon name="shopping-cart" size={25} color={color.white} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {showSearch && (
        <View
          style={{
            borderWidth: 1,
            borderColor: color.white,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 5,
            margin: 10,
          }}
        >
          <TextInput
            placeholder="Từ khóa"
            placeholderTextColor={color.gray}
            style={{
              borderRightWidth: 2,
              borderColor: color.white,
              flex: 1,
              backgroundColor: color.white,
              paddingHorizontal: 10,
              color: color.gray,
            }}
          />
          <TouchableOpacity>
            <Text
              style={{
                color: color.primary,
                padding: 10,
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
