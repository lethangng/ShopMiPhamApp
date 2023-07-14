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

export default BodyForgetPasswordComponnent = ({ navigation }) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const initialValues = {
    username: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Vui lòng nhập Email / Username.")
      .email("Email / Username không đúng."),
  });

  const onSubmit = (values) => {
    // Code
    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false);
    }, 2000);
    navigation.navigate("Login");
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

          <TouchableOpacity onPress={handleSubmit} disabled={isSubmit === true}>
            <View style={styles.button}>
              {isSubmit && (
                <ActivityIndicator size={"small"} color={color.white} />
              )}
              <Text style={styles.textLogin}>Send</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
