import React from "react";
import { Modal, StyleSheet, View, Dimensions, Text } from "react-native";
import LottieView from "lottie-react-native";
import Animated from "react-native-reanimated";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import CustomModelBtn from "./CustomModelBtn";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

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
          <View style={[styles.modalView, { width: windowWidth * 0.7 }]}>
            <AnimatedLottieView
              source={require("../assets/animations/realcheck.json")}
              autoPlay
              loop={false}
              style={{
                width: "100%",
                height: 170,
                // bottom: 30,
                //s position: "relative",
              }}
            />
            {/* <CustomButton
              buttontitle="Okay"
              color="#FFC44D"
              width={windowWidth * 0.7}
              height={40}
              onPress={onPressYes}
            /> */}

            <Text style={styles.modalText}>Visa card successful!</Text>
            <Text style={styles.modalTextSub}>
              You have successfully added Visa card credits.
            </Text>
            <CustomModelBtn
              buttontitle="Okay"
              color="#FFC44D"
              width={windowWidth * 0.5}
              height={40}
              onPress={onPressYes}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    // backgroundColor: "black",
    borderRadius: 15,

    paddingVertical: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,

    gap: 5,
  },
  modalText: {
    paddingHorizontal: 23,
    //bottom: 40,
    fontWeight: "600",
    textAlign: "center",
    fontSize: responsiveFontSize(2.8),
  },
  modalTextSub: {
    paddingHorizontal: 23,
    //bottom: 10,
    fontWeight: "400",
    textAlign: "center",
    fontSize: responsiveFontSize(1.5),
  },
});

export default CustomImageModal;
