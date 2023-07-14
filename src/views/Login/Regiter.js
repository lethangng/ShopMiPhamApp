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

export default BodyRegiterComponent = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfigPassword, setShowConfigPassword] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const initialValues = {
    name: "",
    phone: "",
    username: "",
    password: "",
    configPassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Vui lòng nhập tên của bạn.")
      .max(30, "Tên không được dài quá 30 ký tự."),
    phone: Yup.string()
      .required("Vui lòng nhập số điện thoại.")
      .matches(/^[0-9]{10}$/, "Số điện thoại phải có 10 chữ số."),
    username: Yup.string()
      .required("Vui lòng nhập Email / Username.")
      .email("Email / Username không đúng."),
    password: Yup.string()
      .required("Vui lòng nhập mật khẩu.")
      .min(8, "Vui lòng nhập tối thiểu 8 ký tự."),
    configPassword: Yup.string()
      .required("Vui lòng nhập lại mật khẩu.")
      .oneOf([Yup.ref("password"), null], "Mật khẩu nhập lại không đúng."),
  });

  const onSubmit = (values) => {
    // Code
    // navigation.navigate("HomeDrawer");
    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false);
    }, 2000);
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
                <Icon name={"user"} size={25} color={color.gray} solid />
              </View>
              <TextInput
                placeholder="Your name"
                placeholderTextColor={color.gray}
                style={styles.input}
                onChangeText={handleChange("name")}
                value={values.name}
              />
            </View>
            {errors.name && touched.name && (
              <Text
                style={{
                  color: color.textDanger,
                }}
              >
                {errors.name}
              </Text>
            )}
          </View>
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
                <Icon name={"phone"} size={25} color={color.gray} solid />
              </View>
              <TextInput
                placeholder="Phone number"
                placeholderTextColor={color.gray}
                style={styles.input}
                onChangeText={handleChange("phone")}
                value={values.phone}
                keyboardType="numeric"
              />
            </View>
            {errors.phone && touched.phone && (
              <Text
                style={{
                  color: color.textDanger,
                }}
              >
                {errors.phone}
              </Text>
            )}
          </View>
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
                <Icon name={"envelope"} size={25} color={color.gray} />
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
          <View
            style={{
              marginBottom: 40,
            }}
          >
            <View style={styles.wapperInput}>
              <View
                style={{
                  width: "15%",
                }}
              >
                <Icon name={"lock"} size={25} color={color.gray} />
              </View>
              <TextInput
                placeholder="Config password"
                placeholderTextColor={color.gray}
                style={styles.input}
                secureTextEntry={showConfigPassword !== true}
                onChangeText={handleChange("configPassword")}
                value={values.configPassword}
              />

              <TouchableOpacity
                onPress={() => {
                  setShowConfigPassword(!showConfigPassword);
                }}
              >
                <View
                  style={{
                    marginRight: 10,
                  }}
                >
                  <Icon
                    name={showConfigPassword == true ? "eye" : "eye-slash"}
                    size={20}
                    color={color.gray}
                  />
                </View>
              </TouchableOpacity>
            </View>
            {errors.configPassword && touched.configPassword && (
              <Text
                style={{
                  color: color.textDanger,
                }}
              >
                {errors.configPassword}
              </Text>
            )}
          </View>

          <TouchableOpacity onPress={handleSubmit} disabled={isSubmit === true}>
            <View style={styles.button}>
              {isSubmit && (
                <ActivityIndicator size={"small"} color={color.white} />
              )}
              <Text style={styles.textLogin}>Regiter</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
