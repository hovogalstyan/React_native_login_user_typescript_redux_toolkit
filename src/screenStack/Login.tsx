import React, { FC, useCallback } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import { ActiveEyeSvg, EmailSvg, EyeSvg, PasswordSvg } from "../../assets";
import * as Yup from "yup";

interface initialValuesTypes {
  email: string,
  password: string
}

import useToggle from "../Componentns/Hooks/useToggle";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "./ScreenStack";


const Login: FC = () => {
  const [secure, togglePassword] = useToggle(true);
  const initialValues: initialValuesTypes = { email: "", password: "" };
  const { navigate } = useNavigation<StackNavigation>();
  const forgetPasswordChangeEmailPage = useCallback(() => {
    navigate("ForgetPasswordChangeEmail");
  }, []);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("The email is invalid")
      .required("This field is required"),
    password: Yup.string()
      .min(6, "The password is too short")
      .max(12, "The password is too long")
      .required("This field is required")
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.img_cont}>
          <Image source={require("../Images/HomeScreen/Login.png")} style={styles.img} />
        </View>
        <Formik initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={value => console.log(value)}
        >
          {({
              values, handleChange, errors,
              handleBlur, touched, handleSubmit, isValid
            }) => (
            <View style={styles.Form}>
              <View style={isValid ? styles.input_block : [styles.input_block, styles.error_input_block]}>
                <View style={styles.input_items}>
                  <EmailSvg />
                  <TextInput
                    style={styles.input}
                    placeholder={"Email"}
                    placeholderTextColor={"#fff"}
                    defaultValue={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                  />
                </View>
                {touched.email && errors.email && <Text style={styles.error_messing}>{errors.email}</Text>}
              </View>
              <View style={isValid ? [styles.input_block, styles.input_blockBottom]
                : [styles.input_block, styles.error_input_block, styles.input_blockBottom]}>
                <View style={styles.input_items}>
                  <PasswordSvg />
                  <TextInput
                    style={styles.input}
                    placeholder={"Password"}
                    placeholderTextColor={"#fff"}
                    secureTextEntry={secure}
                    defaultValue={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                  />
                  {
                    values.password.length >= 1 &&
                    <TouchableOpacity
                      style={styles.secure_btn_password}
                      onPress={togglePassword}>
                      {secure ? <EyeSvg /> : <ActiveEyeSvg />}
                    </TouchableOpacity>
                  }
                </View>
                {touched.password && errors.password && <Text style={styles.error_messing}>{errors.password}</Text>}
              </View>
              <View style={styles.forget_password_block}>
                <Text
                  onPress={forgetPasswordChangeEmailPage}
                  style={styles.forget_password}>Forget Password ?</Text>
              </View>
              <TouchableOpacity
                style={styles.login_btn}
                onPress={handleSubmit}
              >
                <Text style={styles.login_btn_text}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  img_cont: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 35
  },
  img: {
    width: 180
  },
  error_input_block: {
    borderWidth: 1,
    borderColor: "red"
  },
  Form: {
    width: "100%",
    paddingHorizontal: 45,
    paddingVertical: 45,
    alignItems: "center"
  },
  input_block: {
    width: "100%",
    borderRadius: 18,
    overflow: "hidden"
  },
  input_blockBottom: {
    marginTop: 45
  },
  input_items: {
    width: "100%",
    paddingVertical: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#91C788",
    position: "relative"
  },
  input: {
    width: "75%",
    height: "100%",
    color: "#000",
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "600"

  },
  error_messing: {
    color: "red",
    fontSize: 15,
    marginVertical: 3,
    textAlign: "center"
  },
  secure_btn_password: {
    position: "absolute",
    right: 15,
    top: 13
  },
  forget_password_block: {
    width: "100%",
    alignItems: "flex-end",
    paddingVertical: 8,
    paddingRight: 8
  },
  forget_password: {
    color: "blue",
    fontSize: 17,
    fontWeight: "600",
    textAlign: "right"
  },
  login_btn: {
    width: "80%",
    marginVertical: 25,
    paddingVertical: 15,
    backgroundColor: "blue",
    borderRadius: 14,
    alignItems: "center"
  },
  login_btn_text: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18
  }
});
export default Login;
