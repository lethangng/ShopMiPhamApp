import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";
import color from "../../contains/color";

export default MemuBar = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        backgroundColor: color.primary,
      }}
    >
      <View
        style={{
          padding: 16,
          paddingTop: 20,
        }}
      >
        <Image
          source={require("../../assets/img/slider/image-1.jpg")}
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
            borderWidth: 3,
            borderColor: color.white,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: color.white,
            marginVertical: 8,
          }}
        >
          Lê Ngọc Thắng
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 10,
        }}
      >
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};
