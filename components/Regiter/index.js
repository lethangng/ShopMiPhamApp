import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "../Login/styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import color from "../../contains/color";
import SvgImgLogin from "../../assets/img/svgComponent/imgLogin";
import { Formik } from "formik";
import * as Yup from "yup";

const Regiter = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfigPassword, setShowConfigPassword] = useState(false);

  const initialValues = {
    name: "",
    username: "",
    password: "",
    configPassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập tên của bạn."),
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
  };

  return (
    <ScrollView>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValidating,
        }) => (
          <View style={styles.login}>
            <StatusBar
              barStyle="dark-content"
              backgroundColor={"transparent"}
              translucent
            />
            <Text style={styles.headerTitle}>Regiter</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text style={styles.headerText}>Login</Text>
              </TouchableOpacity>
              <View
                style={{
                  marginLeft: 15,
                }}
              >
                <Text style={[styles.headerText, styles.headerTextActive]}>
                  Regiter
                </Text>
                <View style={styles.borderActive} />
              </View>
            </View>
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
                    <Icon name={"user"} size={25} color={color.gray} />
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
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size={25}
                      color={color.gray}
                    />
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
                    <Icon name={"lock"} size={30} color={color.gray} />
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
                      <FontAwesomeIcon
                        icon={showPassword == true ? faEye : faEyeSlash}
                        size={25}
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
                    <Icon name={"lock"} size={30} color={color.gray} />
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
                      <FontAwesomeIcon
                        icon={showConfigPassword == true ? faEye : faEyeSlash}
                        size={25}
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

              <TouchableOpacity onPress={handleSubmit} disabled={isValidating}>
                <View style={styles.button}>
                  <Text style={styles.textLogin}>Regiter</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <SvgImgLogin />
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default Regiter;
