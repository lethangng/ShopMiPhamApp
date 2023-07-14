import { View, ScrollView, ActivityIndicator } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import PaginationSlider from "../Pagination/PaginationSlider";
import { windownWidth } from "../../utils/Dimensions";
import color from "../../contains/color";

const Slider = (props) => {
  const { imageList, title } = props;
  const [currentImage, setCurrentImage] = useState(0);
  const stepCarousel = useRef(null);

  // Lấy vị trí hiện tại của list image, gán cho currentImage
  const handleOnScroll = (nativeEvent) => {
    if (nativeEvent) {
      const imageIndex = Math.ceil(nativeEvent.contentOffset.x / windownWidth);
      if (imageIndex !== currentImage) {
        setCurrentImage(imageIndex);
      }
    }
  };

  useEffect(() => {
    if (title === "HOME") {
      let intervalId;
      if (imageList && imageList.length > 0) {
        // console.log(stepCarousel);
        let index = 0;
        intervalId = setInterval(() => {
          stepCarousel.current.scrollTo({
            x: index * windownWidth,
            y: 0,
            animated: true,
          });
          index += 1;
          if (index === imageList.length) {
            index = 0;
          }
        }, 3000);
      }
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [imageList]);

  return imageList ? (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          width: windownWidth * imageList.length,
          height: "auto",
        }}
        pagingEnabled
        onScroll={({ nativeEvent }) => handleOnScroll(nativeEvent)}
        scrollEventThrottle={16}
        ref={stepCarousel}
      >
        {imageList.map((item, index) => {
          return (
            <View
              key={index.toString()}
              style={{
                width: windownWidth,
                height: 200,
              }}
            >
              {item.image}
            </View>
          );
        })}
      </ScrollView>
      <View>
        <PaginationSlider data={imageList} currentImage={currentImage} />
      </View>
    </View>
  ) : (
    <View
      style={{
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.white,
      }}
    >
      <ActivityIndicator size={"big"} color={color.primary} />
    </View>
  );
};

export default Slider;
