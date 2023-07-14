import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";

const BodyBuy = (props) => {
  const { productInfo, bill, setSelectedValue, selectedValue } = props;
  // console.log("bill", bill);

  return (
    <ScrollView
      style={{
        marginHorizontal: 10,
      }}
    >
      {productInfo &&
        productInfo.length > 0 &&
        productInfo.map((product, index) => {
          return (
            <View
              key={index.toString()}
              style={{
                flexDirection: "row",
                // backgroundColor: "red",
                borderWidth: 1,
                borderColor: color.primary,
                padding: 10,
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  width: 80,
                  height: 80,
                }}
              >
                {product.image}
              </View>
              <View
                style={{
                  marginLeft: 10,
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: color.text,
                    fontSize: 16,
                  }}
                >
                  {product.name}
                </Text>
                <Text
                  style={{
                    color: color.gray,
                  }}
                >
                  {product.type}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
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
                      marginRight: 10,
                    }}
                  >
                    x{product.count}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}

      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text style={styles.textTitle}>Tên khách hàng:</Text>
        <TextInput style={styles.textInput} editable={false} />
      </View>

      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text style={styles.textTitle}>Số điện thoại:</Text>
        <TextInput style={styles.textInput} value={bill.phoneNumber} />
      </View>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text style={styles.textTitle}>Địa chỉ nhận hàng:</Text>
        <TextInput style={styles.textInput} value={bill.address} />
      </View>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text style={styles.textTitle}>Phương thức thanh toán:</Text>
        <View style={styles.wrapDropDown}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
            style={styles.textDropDown}
            mode="dropdown"
          >
            <Picker.Item label="Thanh toán khi nhận hàng" value="0" />
            <Picker.Item label="Thẻ tín dụng/Ghi nợ" value="1" />
            <Picker.Item label="Ngân hàng" value="2" />
          </Picker>
        </View>
      </View>
    </ScrollView>
  );
};

export default BodyBuy;

const styles = StyleSheet.create({
  textInput: {
    color: color.gray,
    borderColor: color.gray,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  textTitle: {
    color: color.primary,
    fontSize: 16,
    marginBottom: 5,
  },
  textDropDown: {
    fontSize: 18,
    fontWeight: "bold",
    color: color.gray,
  },
  wrapDropDown: {
    borderColor: color.gray,
    borderWidth: 1,
    borderRadius: 10,
  },
});
