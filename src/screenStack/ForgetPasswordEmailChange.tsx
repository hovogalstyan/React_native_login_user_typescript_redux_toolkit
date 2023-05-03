import React, { FC, useCallback, useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { CloseSvg } from "../../assets";
import { regEmil } from "../Regex/Regex";
import useToggle from "../Componentns/Hooks/useToggle";
import ModalEditPassword from "../Componentns/Home/ModalEditPassword";

const ForgetPasswordEmailChange: FC = () => {
  const [errorMessing, setErrorMessing] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);
  const [counterClear, setCounterClear] = useState<null | boolean>(null);
  // const [openModal, toggleModal, setOpenModal] = useToggle(false);
  const changeEmail = useCallback((text: string) => {
    if (text === "") {
      setCounterClear(false);
    } else if (!regEmil.test(text)) {
      setCounterClear(false);
    } else {
      setCounterClear(null);
    }
    setEmail(text);
  }, [email]);
  const removeEmail = useCallback(() => {
    changeEmail("");
    setErrorMessing(null);
  }, []);
  const getCodeEmil = useCallback(() => {
    if (email === "") {
      setErrorMessing("This field is required");
    } else if (!regEmil.test(email)) {
      setErrorMessing("The email is invalid");
    } else {
      if (counter === 0) {
        setCounter(30);
        setCounterClear(true);
      }
    }
  }, [email, counter]);
  useEffect(() => {
    let numberClear = 30;
    if (counterClear) {
      var x = setInterval(() => {
        setCounter((num) => num - 1);
        numberClear--;
        if (numberClear === 0) {
          clearInterval(x);
          setCounterClear(null);
        }
      }, 1000);
    }
  }, [counterClear]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.images_cont}>
        <Image source={require("../Images/HomeScreen/mail.gif")} style={styles.img} />
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>E-mail address specified in your profile</Text>
        <View style={styles.input_items}>
          <TextInput
            style={styles.input}
            placeholder={"Please write your E-mail address"}
            placeholderTextColor={"#000"}
            defaultValue={email}
            onChangeText={changeEmail}
          />
          {
            counterClear === false && email.length >= 1 && (
              <TouchableOpacity
                onPress={removeEmail}
                style={styles.remove_value}>
                <CloseSvg />
              </TouchableOpacity>
            )}
        </View>
        {errorMessing !== null && <Text style={styles.error_messing}>{errorMessing}</Text>}
        {counterClear && <Text style={{
          color: "#000"
        }}>Please to wait {counter} second</Text>}
        <TouchableOpacity
          style={styles.email_btn}
          onPress={getCodeEmil}
        >
          <Text style={styles.text_btn_emil}>Get code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  images_cont: {
    width: "100%",
    paddingVertical: 25,
    paddingHorizontal: 5,
    alignItems: "center"
  },
  img: {
    width: 330,
    height: 330,
    resizeMode: "cover"
  },
  form: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 45,
    alignItems: "center"
  },
  title: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 40
  },
  input_items: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    position: "relative"
  },
  input: {
    width: "80%",
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 10
  },
  remove_value: {
    position: "absolute",
    right: 10,
    top: 10
  },
  email_btn: {
    width: "70%",
    paddingVertical: 10,
    backgroundColor: "#91C788",
    marginTop: 35,
    alignItems: "center",
    borderRadius: 15
  },
  text_btn_emil: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600"
  },
  error_messing: {
    color: "red"
  }
});
export default ForgetPasswordEmailChange;
