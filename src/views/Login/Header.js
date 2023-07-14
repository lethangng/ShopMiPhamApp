import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const LOGIN = "LOGIN";
const REGITER = "REGITER";

export default HeaderLoginComponent = ({ page, setPage }) => {
  return (
    <View>
      <Text style={styles.headerTitle}>
        {page === LOGIN
          ? "Login"
          : page === REGITER
          ? "Regiter"
          : "Forget password"}
      </Text>
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
          <TouchableOpacity
            onPress={() => {
              setPage(LOGIN);
            }}
            disabled={page === LOGIN}
          >
            <Text
              style={
                page === LOGIN
                  ? [styles.headerText, styles.headerTextActive]
                  : styles.headerText
              }
            >
              Login
            </Text>
            {page === LOGIN && <View style={styles.borderActive} />}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setPage(REGITER);
          }}
          disabled={page === REGITER}
        >
          <Text
            style={
              page === REGITER
                ? [styles.headerText, styles.headerTextActive]
                : styles.headerText
            }
          >
            Regiter
          </Text>
          {page === REGITER && <View style={styles.borderActive} />}
        </TouchableOpacity>
      </View>
    </View>
  );
};
