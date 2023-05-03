import React, { FC, useCallback } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import CarouselHome from "../Componentns/Home/CarouselHome";
import GetStartedButton from "../Componentns/Home/GetStartedButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "./ScreenStack";


const SliderHome:FC = () => {
  const { navigate } = useNavigation<StackNavigation>();
  const loginPage = useCallback(() => {
     navigate('Login')
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.images_container}>
          <Image source={require("../Images/HomeScreen/kcal1.png")} />
        </View>
        <CarouselHome />
        <GetStartedButton />
        <Text style={styles.login_login}>Already Have An Acount?
          <Text onPress={loginPage} style={styles.login_link}> Log In</Text></Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  images_container: {
    width: "100%",
    paddingVertical: 54,
    alignItems: "center"
  },
  login_login: {
    fontSize: 17,
    fontWeight: "600",
    lineHeight: 25,
    color: "#7C7C7C",
    textAlign: "center"
  },
  login_link: {
    color: "#91C788",
    fontSize: 19,
    fontWeight: "800"
  }
});
export default SliderHome;
