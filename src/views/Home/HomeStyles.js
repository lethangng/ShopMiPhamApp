import { StyleSheet } from "react-native";

export default HomeStyles = StyleSheet.create({
  header: {
    backgroundColor: color.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingTop: 40,
  },
  headerText: {
    color: color.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  productImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    borderColor: color.primary,
    borderWidth: 1,
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
});
