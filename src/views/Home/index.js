import { View, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import color from "../../contains/color";
import Slider from "../../components/Slider/Slider";
import HomeStyles from "./HomeStyles";
import Category from "../../components/Category/Category";
import ProductList from "../../components/ProductList/ProductList";
import HeaderHome from "./HeaderHome";

const Home = () => {
  const [imageList, setImageList] = useState([]);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load data
    const data = [
      {
        image: (
          <Image
            source={require("../../assets/img/slider/image-1.jpg")}
            resizeMode="stretch"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        ),
        type: "jpg",
        camera: "Sony",
      },
      {
        image: (
          <Image
            source={require("../../assets/img/slider/image-2.jpg")}
            resizeMode="stretch"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        ),
        type: "jpg",
        camera: "Canon",
      },
      {
        image: (
          <Image
            source={require("../../assets/img/slider/image-3.jpg")}
            resizeMode="stretch"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        ),
        type: "jpg",
        camera: "Xoai",
      },
    ];

    const dataCategory = [
      {
        image: (
          <Image
            source={require("../../assets/img/slider/image-1.jpg")}
            resizeMode="stretch"
            style={HomeStyles.categoryImage}
          />
        ),
        description: "Sữa rửa mặt",
      },
      {
        image: (
          <Image
            source={require("../../assets/img/slider/image-2.jpg")}
            resizeMode="stretch"
            style={HomeStyles.categoryImage}
          />
        ),
        description: "Dưỡng ẩm",
      },
      {
        image: (
          <Image
            source={require("../../assets/img/slider/image-3.jpg")}
            resizeMode="stretch"
            style={HomeStyles.categoryImage}
          />
        ),
        description: "Phấn nền",
      },
      {
        image: (
          <Image
            source={require("../../assets/img/slider/image-3.jpg")}
            resizeMode="stretch"
            style={HomeStyles.categoryImage}
          />
        ),
        description: "Phấn nền",
      },
    ];

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
      },
      {
        id: 7,
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
      },
      {
        id: 8,
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
      },
      {
        id: 9,
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
      },
    ];
    setProducts(dataProduct);
    setCategory(dataCategory);
    setImageList(data);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.backgroudPrimary,
      }}
    >
      <HeaderHome title={"HOME"} />

      <ScrollView>
        {/* Slider */}
        <Slider imageList={imageList} title={"HOME"} />

        {/* Category */}
        <Category categoryList={category} />

        {/* Product List */}
        <ProductList
          products={products}
          title={"HOME"}
          content={"Product List"}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
