import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: color.backgroudPrimary,
  },
  headerTitle: {
    color: color.text,
    fontSize: 40,
    textAlign: "center",
    marginVertical: 30,
    marginTop: 100,
  },
  headerText: {
    color: color.gray,
    fontSize: 18,
  },
  headerTextActive: {
    color: color.primary,
  },
  borderActive: {
    borderBottomWidth: 1,
    marginTop: 3,
  },
  wapperInput: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: color.gray,
  },
  input: {
    flex: 1,
    padding: 5,
    color: color.gray,
  },
  body: {
    marginHorizontal: 40,
    marginTop: 40,
  },
  forgetText: {
    alignItems: "flex-end",
    marginTop: 20,
    marginBottom: 40,
  },
  button: {
    flexDirection: "row",
    backgroundColor: color.primary,
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 7,
  },
  textLogin: {
    fontSize: 16,
    color: color.textWhite,
    fontWeight: "bold",
    marginLeft: 10,
  },
  footer: {
    marginBottom: 30,
    marginTop: 40,
    flex: 1,
    alignItems: "center",
  },
  footerForgetPassword: {
    height: 350,
    justifyContent: "flex-end",
  },
});

export default styles;
