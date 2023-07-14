import { View, StatusBar, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import BodyRegiterComponent from "./Regiter";
import BodyLoginComponnent from "./Login";
import HeaderLoginComponent from "./Header";
import BodyForgetPasswordComponent from "./ForgetPassword";
import Logo from "../../assets/img/imgLogin.svg";

const LOGIN = "LOGIN";
const REGITER = "REGITER";
const FORGET_PASSWORD = "FORGET_PASSWORD";

const Login = () => {
  const [page, setPage] = useState(LOGIN);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={"transparent"}
        translucent
      />
      <ScrollView style={styles.login}>
        <HeaderLoginComponent page={page} setPage={setPage} />
        {page === LOGIN ? (
          <BodyLoginComponnent page={page} setPage={setPage} />
        ) : null}
        {page === REGITER ? <BodyRegiterComponent /> : null}
        {page === FORGET_PASSWORD ? <BodyForgetPasswordComponent /> : null}

        <View
          style={
            page === FORGET_PASSWORD
              ? [styles.footer, styles.footerForgetPassword]
              : styles.footer
          }
        >
          <Logo />
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
