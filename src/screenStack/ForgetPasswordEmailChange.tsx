import React, { FC, useCallback, useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { CloseSvg } from "../../assets";
import { regEmil } from "../Regex/Regex";

const ForgetPasswordEmailChange: FC = () => {
  const [errorMessing, setErrorMessing] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const changeEmail = useCallback((text: string) => {
    setEmail(text);
  }, [email]);
  const removeEmail = useCallback(() => {
    changeEmail("");
    setErrorMessing('')
  }, []);
  const getCodeEmil = useCallback(()=>{
     if(email === ''){
        setErrorMessing('erorr')
     }else  if(!regEmil.test(email)){
        setErrorMessing('error messing')
     }else {
       setErrorMessing('')
     }
  },[email])
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
            email.length >= 1 &&
            <TouchableOpacity
              onPress={removeEmail}
              style={styles.remove_value}>
              <CloseSvg />
            </TouchableOpacity>
          }
        </View>
        {errorMessing !== null && <Text style={styles.error_messing}>{errorMessing}</Text>}
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
    alignItems:'center'
  },
  title:{
    color:'#000',
    fontSize:16,
    fontWeight:'500',
    textAlign:'center',
    lineHeight:40
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
  email_btn:{
    width:'70%',
    paddingVertical:10,
    backgroundColor:'#91C788',
    marginTop:35,
    alignItems:'center',
    borderRadius:15
  },
  text_btn_emil:{
    color:'#fff',
    fontSize:17,
    fontWeight:'600'
  },
  error_messing:{
    color:'red'
  }
});
export default ForgetPasswordEmailChange;
