import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GetStartedButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 42,
    paddingVertical: 20
  },
  btn: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#91C788",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:24
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    color: "#fff"
  }
});
export default GetStartedButton;
