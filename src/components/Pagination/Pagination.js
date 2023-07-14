import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import color from "../../contains/color";
import { TouchableOpacity } from "react-native-gesture-handler";

const Pagination = (props) => {
  const { totalRecords, pageLimit, pageSize } = props;
  const [currentPage, setCurrentPage] = useState(1);
  // Tổng số page (làm tròn lên)
  const totalPages = Math.ceil(totalRecords / pageSize);

  // Trang bắt đầu và trang kết thúc khi hiển thị
  let startPageIndex = Math.max(currentPage - pageLimit, 1);
  let endPageIndex = Math.min(currentPage + pageLimit, totalPages);

  const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }
    return range;
  };

  // Lấy array phân trang
  const pages = range(startPageIndex, endPageIndex);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    props.onPageChanged(pageNumber);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Text
          style={
            currentPage === 1
              ? [styles.text, styles.textLeft, styles.textDisabled]
              : [styles.text, styles.textLeft]
          }
        >
          Trước
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {pages.map((page, index) => {
          return (
            <TouchableOpacity
              key={index.toString()}
              onPress={() => handleClick(page)}
              disabled={currentPage === page}
            >
              <Text
                style={
                  currentPage === page
                    ? [styles.textPage, styles.textActive]
                    : styles.textPage
                }
              >
                {page}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Text
          style={
            currentPage === totalPages
              ? [styles.text, styles.textRight, styles.textDisabled]
              : [styles.text, styles.textRight]
          }
        >
          Sau
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textActive: {
    color: color.white,
    backgroundColor: color.primary,
  },
  textPage: {
    color: color.primary,
    padding: 2,
    paddingHorizontal: 8,
    marginHorizontal: 2,
    fontSize: 18,
    borderWidth: 1,
    borderColor: color.white,
  },
  text: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: color.white,
    fontSize: 18,
    padding: 2,
    paddingHorizontal: 5,
  },
  textLeft: {
    color: color.primary,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  textDisabled: {
    color: color.gray,
  },
  textRight: {
    color: color.primary,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

export default Pagination;
