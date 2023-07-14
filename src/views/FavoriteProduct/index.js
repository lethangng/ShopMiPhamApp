import { View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderHome from "../Home/HeaderHome";
import color from "../../contains/color";
import ProductList from "../../components/ProductList/ProductList";

const FavoriteProduct = () => {
  const [products, setProducts] = useState([]);

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
      <HeaderHome />
      <ProductList content={"Danh sách đã thích"} products={products} />
    </View>
  );
};

export default FavoriteProduct;
