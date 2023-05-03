import React, { FC } from "react";
import { Modal, SafeAreaView, StyleSheet, Text, View } from "react-native";
interface PropsType{
   openModal: boolean
}
const ModalEditPassword:FC<PropsType> = ({openModal}) => {
  return (
  <View style={styles.container}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={openModal}
    >
    <Text>hellossss</Text>
    </Modal>
  </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical:120,
    backgroundColor: "#000"
  }
});
export default ModalEditPassword;
