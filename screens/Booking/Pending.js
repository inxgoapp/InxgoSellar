import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import wallet from "../../style/wallet";
import image_upload from "../../assets/image_upload.png";
import rightarrow from "../../assets/rightarrow.png";
import circle from "../../assets/icons/circle.png";
import location from "../../assets/icons/location.png";
import hrs from "../../assets/icons/hrs.png";

const Pending = ({ navigation }) => {
  const detailJob = async (path) => {
    navigation.navigate(path);
  };

  return (
    <View
      style={{
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        top: 50,
      }}
    >
      <View style={{ marginTop: 50 }}>
        <Image source={require("../../assets/calendar.png")}></Image>
      </View>
      <View style={{ marginTop: 50 }}>
        <Text>No tasks scheduled</Text>
      </View>
      <View style={{ marginTop: 20 }}></View>
    </View>
  );
};

export default Pending;
