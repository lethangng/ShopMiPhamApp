import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const FiveStarView = (props) => {
  const { starFull, starHafl, starEmpty } = props;

  const StarFull = (n) => {
    const star = [];
    for (let i = 0; i < n; i++) {
      star.push(<Icon key={i} name="star" size={15} color="#FFD700" solid />);
    }
    return star;
  };

  const StarEmpty = (n) => {
    const star = [];
    for (let i = 0; i < n; i++) {
      star.push(<Icon key={i} name="star" size={15} color="#FFD700" />);
    }
    return star;
  };

  const StarHafl = (n) => {
    const star = [];
    for (let i = 0; i < n; i++) {
      star.push(
        <Icon key={i} name="star-half-alt" size={15} color="#FFD700" />
      );
    }
    return star;
  };

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {StarFull(starFull)}
      {StarEmpty(starEmpty)}
      {StarHafl(starHafl)}
    </View>
  );
};

export default FiveStarView;
