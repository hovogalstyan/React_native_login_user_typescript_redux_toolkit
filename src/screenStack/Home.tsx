import React, { FC, useCallback, useEffect } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "./ScreenStack";

const Home: FC = () => {
  const { navigate } = useNavigation<StackNavigation>();
  const SlidePage = () => (
    navigate("SlidHome")
  );
  useEffect(() => {
    setTimeout(() => {
      SlidePage();
    }, 1000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={0}
        onPress={SlidePage}
        style={styles.container}
      >
        <View style={styles.con_title}>
          <Image
            source={require("../Images/HomeScreen/kcal.png")} />
        </View>
        <Text style={styles.text}>ZUAMICA</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#91C788"
  },
  con_title: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 25,
    fontWeight: "900",
    color: "#fff"
  }
});
export default Home;

