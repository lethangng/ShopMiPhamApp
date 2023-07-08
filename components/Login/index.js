import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import color from "../../contains/color";
import SvgImgLogin from "../../assets/img/svgComponent/imgLogin";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [submit, setSubmit] = useState(false);

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
    navigation.navigate("HomeDrawer");
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
            <Text style={styles.headerTitle}>Login</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  marginRight: 15,
                }}
              >
                <Text style={[styles.headerText, styles.headerTextActive]}>
                  Login
                </Text>
                <View style={styles.borderActive} />
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Regiter");
                }}
              >
                <Text style={styles.headerText}>Regiter</Text>
              </TouchableOpacity>
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
              <View>
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

              <View style={styles.forgetText}>
                <TouchableOpacity>
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
              <TouchableOpacity onPress={handleSubmit} disabled={isValidating}>
                <View style={styles.button}>
                  <Text style={styles.textLogin}>Login</Text>
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

export default Login;
