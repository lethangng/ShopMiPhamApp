import { View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderHome from "../Home/HeaderHome";
import color from "../../contains/color";
import { useRoute } from "@react-navigation/native";
import FooterBuy from "./FooterBuy";
import BodyBuy from "./BodyBuy";

// Xóa cảnh báo khi truyền Image qua params
import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const Buy = () => {
  const router = useRoute();
  const { productInfo } = router.params;
  // console.log("productInfo:", router.params);

  // Mảng chứa các option của phương thức thanh toán
  const [selectedValue, setSelectedValue] = useState(0);

  // Opject chứa info hóa đơns
  const [bill, setBill] = useState({});
  // console.log(bill.count);

  useEffect(() => {
    const newBill = {
      products: productInfo,
      phoneNumber: "0345684012",
      address: "Thai Binh",
      paymentMethods: selectedValue,
    };
    setBill(newBill);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.backgroudPrimary,
      }}
    >
      <HeaderHome />
      <BodyBuy
        productInfo={productInfo}
        bill={bill}
        setSelectedValue={setSelectedValue}
        selectedValue={selectedValue}
      />
      <FooterBuy productInfo={productInfo} />
    </View>
  );
};

export default Buy;
