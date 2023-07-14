import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import HeaderHome from "../Home/HeaderHome";
import color from "../../contains/color";
import CheckBox from "@react-native-community/checkbox";
import Footer from "./Footer";

const Cart = () => {
  const [products, setProducts] = useState([]);
  // console.log("products: ", products);

  // Mảng chứa id của các product được chọn
  const [selectedItem, setSelectedItem] = useState([]);

  const [checkAll, setCheckAll] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  // Mảng chứa product được chọn trong selectedItem
  const [productSelected, setProductSelected] = useState([]);
  // console.log("productSelected: ", productSelected);

  // Load lại các productSelected khi selectItem thay đổi
  const handleSelectedProduct = () => {
    let newProductList = [];
    selectedItem.forEach((item) => {
      products.forEach((product) => {
        if (item === product.id) {
          newProductList.push({
            id: product.id,
            name: product.name,
            price: product.price,
            type: product.type,
            count: product.countProduct,
            image: product.image,
          });
        }
      });
    });
    setProductSelected(newProductList);
  };
  useEffect(() => {
    handleSelectedProduct();
  }, [selectedItem, products]);

  // OnPress button Delete
  const handleShowDelete = () => {
    setShowDelete(!showDelete);
    setSelectedItem([]);
    setCheckAll(false);
  };

  // OnPress button All
  const handleCheckAll = () => {
    setCheckAll(!checkAll);
  };

  // Xử lý trường hợp onPress button checkAll
  const handleCheck = () => {
    let newSelectedItems = [];

    // Nếu true, xét showDelete,
    // nếu showDelete = true => push hết các phần tử trong products vào mảng selectedItem
    // nếu showDelete = false => chỉ push các phần tử có status = true (còn hàng)
    if (checkAll) {
      if (showDelete) {
        products.forEach((item) => {
          return newSelectedItems.push(item.id);
        });
      } else {
        products.forEach((item) => {
          if (item.status) {
            return newSelectedItems.push(item.id);
          }
        });
      }
    }
    setSelectedItem(newSelectedItems);
  };
  useEffect(() => {
    handleCheck();
  }, [checkAll]);

  // Xử lý khi onPress checkBox
  const handleSelectRow = (id) => {
    let newSelectedItems = [...selectedItem];

    // Tìm thấy thì loại bỏ nó ra khỏi mảng, không tìm thấy thì thêm vào mảng
    if (selectedItem.indexOf(id) !== -1) {
      newSelectedItems = selectedItem.filter((item) => item !== id);
      setCheckAll(false);
    } else {
      newSelectedItems.push(id);
    }

    setSelectedItem(newSelectedItems);
  };

  // Xử lý onPress tăng/giảm count product
  const handleChangeCount = (id, add = true) => {
    const newProducts = products.map((item) => {
      if (item.id != id) {
        return item;
      } else if (add) {
        return {
          ...item,
          countProduct: (item.countProduct += 1),
        };
      } else {
        const count = (item.countProduct -= 1);
        if (count === 0) {
          Alert.alert("", "Bạn chắc chắn muốn hủy sản phẩm ?", [
            {
              text: "Hủy",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }
        return {
          ...item,
          countProduct: count === 0 ? 1 : count,
        };
      }
    });
    // console.log(newProducts);

    setProducts(newProducts);
  };
  // console.log(countProduct);

  // Load dữ liệu lần đầu
  useEffect(() => {
    const dataProduct = [
      {
        id: 1,
        name: "Nước hoa hồng",
        image: (
          <Image
            source={require("../../assets/img/slider/image-1.jpg")}
            resizeMode="stretch"
            style={HomeStyles.productImage}
          />
        ),
        type: "Nước hoa",
        price: 50000,
        status: true,
        countProduct: 1,
      },
      {
        id: 2,
        name: "Nước hoa hồng 2",
        image: (
          <Image
            source={require("../../assets/img/slider/image-1.jpg")}
            resizeMode="stretch"
            style={HomeStyles.productImage}
          />
        ),
        type: "Nước hoa",
        price: 50000,
        status: true,
        countProduct: 1,
      },
      {
        id: 3,
        name: "Nước hoa hồng 3",
        image: (
          <Image
            source={require("../../assets/img/slider/image-3.jpg")}
            resizeMode="stretch"
            style={HomeStyles.productImage}
          />
        ),
        type: "Nước hoa",
        price: 50000,
        status: false,
        countProduct: 3,
      },
      {
        id: 4,
        name: "Nước hoa hồng 4",
        image: (
          <Image
            source={require("../../assets/img/slider/image-2.jpg")}
            resizeMode="stretch"
            style={HomeStyles.productImage}
          />
        ),
        type: "Nước hoa",
        price: 50000,
        status: false,
        countProduct: 2,
      },
      {
        id: 5,
        name: "Nước hoa hồng 5",
        image: (
          <Image
            source={require("../../assets/img/slider/image-2.jpg")}
            resizeMode="stretch"
            style={HomeStyles.productImage}
          />
        ),
        type: "Nước hoa",
        price: 50000,
        status: false,
        countProduct: 1,
      },
      {
        id: 6,
        name: "Nước hoa hồng 5",
        image: (
          <Image
            source={require("../../assets/img/slider/image-2.jpg")}
            resizeMode="stretch"
            style={HomeStyles.productImage}
          />
        ),
        type: "Nước hoa",
        price: 50000,
        status: false,
        countProduct: 1,
      },
    ];

    setProducts(dataProduct);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.backgroudPrimary,
      }}
    >
      <HeaderHome
        title={"CART"}
        numberProduct={products.length}
        handleShowDelete={handleShowDelete}
        showDelete={showDelete}
      />
      <ScrollView
        style={{
          marginBottom: 50,
        }}
      >
        {products.map((item, index) => {
          return (
            <View key={index.toString()} style={styles.wrapProduct}>
              <View
                style={{
                  paddingTop: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <CheckBox
                  value={selectedItem.indexOf(item.id) !== -1}
                  onValueChange={() => handleSelectRow(item.id)}
                  tintColors={{ true: color.primary, false: color.primary }}
                  disabled={item.status === false && showDelete === false}
                />
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
                <Text
                  style={{
                    color: "gray",
                  }}
                >
                  {item.type}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
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
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 5,
                  }}
                >
                  <TouchableOpacity
                    style={styles.countProduct}
                    onPress={() => handleChangeCount(item.id, false)}
                    disabled={item.status === false}
                  >
                    <Text
                      style={{
                        color: color.text,
                      }}
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.countProductCenter}>
                    {item.countProduct}
                  </Text>
                  <TouchableOpacity
                    style={styles.countProduct}
                    onPress={() => handleChangeCount(item.id)}
                    disabled={item.status === false}
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
            </View>
          );
        })}
      </ScrollView>
      <Footer
        checkAll={checkAll}
        handleCheckAll={handleCheckAll}
        title={showDelete ? "DELETE" : "PRODUCT"}
        count={selectedItem.length}
        productSelected={productSelected}
      />
    </View>
  );
};

export default Cart;

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
});
