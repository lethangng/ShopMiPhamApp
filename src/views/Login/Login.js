import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import color from "../../contains/color";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

const FORGET_PASSWORD = "FORGET_PASSWORD";

export default BodyLoginComponnent = (props) => {
  const navigation = useNavigation();
  const { page, setPage } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    // username: Yup.string()
    //   .required("Vui lòng nhập Email / Username.")
    //   .email("Email / Username không đúng."),
    // password: Yup.string()
    //   .required("Vui lòng nhập mật khẩu.")
    //   .min(8, "Vui lòng nhập tối thiểu 8 ký tự."),
  });

  const onSubmit = (values) => {
    // Code
    // setIsSubmit(true);
    // setTimeout(() => {
    //   setIsSubmit(false);
    // }, 2000);
    navigation.navigate("HomeDrawer");
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        // handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        // isValidating,
      }) => (
        <View style={styles.body}>
          <View
            style={{
              marginBottom: 30,
            }}
          >
            <View style={styles.wapperInput}>
              <View
                style={{
                  width: "15%",
                }}
              >
                <Icon name={"envelope"} size={25} color={color.gray} regular />
              </View>
              <TextInput
                placeholder="Email / User name"
                placeholderTextColor={color.gray}
                style={styles.input}
                onChangeText={handleChange("username")}
                value={values.username}
              />
            </View>
            {errors.username && touched.username && (
              <Text
                style={{
                  color: color.textDanger,
                }}
              >
                {errors.username}
              </Text>
            )}
          </View>
          <View>
            <View style={styles.wapperInput}>
              <View
                style={{
                  width: "15%",
                }}
              >
                <Icon name={"lock"} size={25} color={color.gray} />
              </View>
              <TextInput
                placeholder="Password"
                placeholderTextColor={color.gray}
                style={styles.input}
                secureTextEntry={showPassword !== true}
                onChangeText={handleChange("password")}
                value={values.password}
              />

              <TouchableOpacity
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <View
                  style={{
                    marginRight: 10,
                  }}
                >
                  <Icon
                    name={showPassword == true ? "eye" : "eye-slash"}
                    size={20}
                    color={color.gray}
                  />
                </View>
              </TouchableOpacity>
            </View>
            {errors.password && touched.password && (
              <Text
                style={{
                  color: color.textDanger,
                }}
              >
                {errors.password}
              </Text>
            )}
          </View>

          <View style={styles.forgetText}>
            <TouchableOpacity
              onPress={() => {
                setPage(FORGET_PASSWORD);
              }}
            >
              <Text
                style={{
                  color: color.primary,
                  fontSize: 12,
                }}
              >
                Forget password
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleSubmit} disabled={isSubmit === true}>
            <View style={styles.button}>
              {isSubmit && (
                <ActivityIndicator size={"small"} color={color.white} />
              )}
              <Text style={styles.textLogin}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
