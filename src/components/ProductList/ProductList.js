import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import color from "../../contains/color";
import FiveStarView from "../FiveStarView/FiveStarView";
import Pagination from "../Pagination/Pagination";
import { useNavigation } from "@react-navigation/native";

const ProductList = (props) => {
  const { products, title, content } = props;
  const navigation = useNavigation();

  // const totalItem = useSelector((state: AppState) => state.products.total);
  // const pageSize = useSelector((state: AppState) => state.products.pageSize);
  const totalItem = products.length;
  const pageSize = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChanged = (pageNumber) => {
    setCurrentPage(pageNumber);

    // Call API
    // dispatch(loadProductPaging(searchKeyword, pageNumber));
  };

  const handlePressProduct = (product) => {
    navigation.navigate("ProductDetail", { productId: product.id.toString() });
  };

  return products ? (
    <View
      style={{
        marginHorizontal: 10,
        marginBottom: 10,
        flex: 1,
      }}
    >
      <ScrollView>
        {content && (
          <Text
            style={{
              color: color.primary,
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            {content}
          </Text>
        )}

        {products.map((item, index) => {
          return (
            <TouchableOpacity
              key={index.toString()}
              style={styles.wrapProduct}
              onPress={() => handlePressProduct(item)}
            >
              <View
                style={{
                  paddingTop: 5,
                }}
                disabled={item.status === false}
              >
                <View
                  style={{
                    width: 60,
                    height: 60,
                  }}
                >
                  {item.image}
                </View>
              </View>
              <View
                style={{
                  marginLeft: 10,
                  flex: 1,
                  // backgroundColor: "red",
                }}
              >
                <Text
                  style={
                    item.status === true
                      ? styles.textName
                      : [styles.textName, styles.textNameDisable]
                  }
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: "gray",
                      }}
                    >
                      {item.type}
                    </Text>
                    <FiveStarView starFull={4} starHafl={1} starEmpty={0} />
                  </View>
                  <View
                    style={
                      item.status === true
                        ? styles.buttonOnPressPrice
                        : [
                            styles.buttonOnPressPrice,
                            styles.buttonOnPressPriceDisable,
                          ]
                    }
                  >
                    <Text style={styles.textOnPressPrice}>Mua</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                  }}
                >
                  <Text
                    style={
                      item.status === true
                        ? styles.textPrice
                        : [styles.textPrice, styles.textDisable]
                    }
                  >
                    Giá: {item.price}đ
                  </Text>
                  <Text
                    style={
                      item.status === true
                        ? styles.textStatus
                        : [styles.textStatus, styles.textDisable]
                    }
                  >
                    {item.status === true ? "Còn hàng" : "Hết hàng"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {title === "HOME" && (
        <Pagination
          totalRecords={totalItem}
          pageLimit={5}
          pageSize={pageSize}
          onPageChanged={onPageChanged}
        />
      )}
    </View>
  ) : (
    <View
      style={{
        height: 200,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size={"big"} color={color.primary} />
    </View>
  );
};

export default ProductList;

// const styles = StyleSheet.create({
//   wrapProduct: {
//     flexDirection: "row",
//     borderWidth: 2,
//     marginVertical: 5,
//     marginHorizontal: 10,
//     borderRadius: 5,
//     padding: 10,
//     borderColor: color.primary,
//     backgroundColor: color.white,
//     alignItems: "flex-start",
//   },
//   wrapBottomContent: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "flex-end",
//   },
//   textNameDisable: {
//     color: color.gray,
//     textDecorationLine: "line-through",
//     textDecorationStyle: "solid",
//   },
//   textName: {
//     color: color.primary,
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   textPrice: {
//     color: "red",
//     marginRight: 5,
//     fontSize: 18,
//   },
//   textDisable: {
//     color: "gray",
//   },
//   textStatus: {
//     color: "blue",
//   },
// });
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
    color: color.text,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: color.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  textOnPressPrice: {
    color: color.white,
    padding: 5,
    paddingHorizontal: 15,
  },
  buttonOnPressPrice: {
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  buttonOnPressPriceDisable: {
    backgroundColor: color.gray,
  },
});
