import { View, Image, Animated, Easing } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import HeaderHome from "../Home/HeaderHome";
import FooterProductDetail from "./FooterProductDetail";
import BodyProductDetail from "./BodyProductDetail";
import color from "../../contains/color";
import CountProduct from "../../components/CountProduct/CountProduct";
import { windownHeight } from "../../utils/Dimensions";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const route = useRoute();
  const [count, setCount] = useState(1);

  const showProduct = useRef(new Animated.Value(windownHeight + 250)).current;

  const handleOnPressShow = () => {
    Animated.timing(showProduct, {
      toValue: windownHeight - 210,
      duration: 1000,
      useNativeDriver: false,

      // Chậm rồi nhanh dần
      // easing: Easing.ease,
    }).start();
  };

  const handleOnPressHide = () => {
    Animated.timing(showProduct, {
      toValue: windownHeight + 250,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    const { productId } = route.params;
    // console.log(route.params);

    // Lấy thông tin sản phẩm từ cơ sở dữ liệu hoặc từ bộ nhớ cache
    // const product = getProductById(productId);
    // setProduct(product);

    const data = {
      id: productId,
      name: "Nước hoa Dora",
      numberPrice: 10,
      images: [
        {
          id: 1,
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
        },
        {
          id: 2,
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
        },
        {
          id: 3,
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
        },
      ],

      description:
        "Nước Hoa Unisex Roja Parfums Haute Luxe Scent-Maker’s Scenter được tạo nên với những nguyên liệu quý hiếm, những công thức tạo ra một hương thơm thần bí, vàng 24k, đá quý. Quả thật không thể nói hết những tinh hoa nghệ thuật trong chai nước hoa này.",
      price: 50000,
      type: "Nước hoa",
      quantity: 15,
      status: true,
    };
    setProduct(data);
  }, []);
  // console.log(product.images ? product.images[0].image : null);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.backgroudPrimary,
      }}
    >
      <HeaderHome />
      <BodyProductDetail product={product} />
      <FooterProductDetail
        handleOnPressShow={handleOnPressShow}
        status={product.status}
      />
      <CountProduct
        setCount={setCount}
        count={count}
        product={product}
        handleOnPressHide={handleOnPressHide}
        showProduct={showProduct}
        productInfo={[
          {
            id: product.id,
            name: product.name,
            price: product.price,
            type: product.type,
            count: count,
            image: product.images ? product.images[0].image : null,
          },
        ]}
      />
    </View>
  );
};

export default ProductDetail;
