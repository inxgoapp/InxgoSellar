import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import CustomButton from "./CustomButton";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { CommonImages } from "../constants/Images";

const CustomImageModal = ({
  title,
  buttontitle,
  buttontitle2,
  modalVisible,
  setModalVisible,
  onPressNO,
  onPressYes,
}) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={[
            styles.centeredView,
            { width: windowWidth, height: windowHeight },
          ]}
        >
          <View style={[styles.modalView, { width: windowWidth * 0.8 }]}>
            <Image
              style={{ width: 210, height: 210 }}
              source={CommonImages.visa}
            />
            <Text style={styles.modalText}>Visa card successful!</Text>
            <Text style={styles.modalTextSub}>
              You have successfully added Visa card credits.
            </Text>

            <View style={styles.buttonsContainer}>
              <CustomButton
                buttontitle="Okay"
                color="#FFC44D"
                width={windowWidth * 0.6}
                height={45}
                onPress={onPressYes}
              />
              <View style={{ width: 10 }}></View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#FAFAFA",
    borderRadius: 20,
    paddingVertical: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "auto",
    bottom: 50,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    paddingHorizontal: 23,
    bottom: 10,
    fontWeight: "600",
    textAlign: "center",

    fontSize: responsiveFontSize(2.8),
  },
  modalTextSub: {
    paddingHorizontal: 23,
    bottom: 10,
    fontWeight: "400",
    textAlign: "center",
    fontSize: responsiveFontSize(1.5),
  },
});

export default CustomImageModal;
