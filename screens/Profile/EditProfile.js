import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import { Bold, Regular } from "../../constants/fonts";
import CustomButton from "../../components/CustomButton";

// create a component
const EditProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 20,
          paddingLeft: 10,
height:responsiveHeight(10)
        }}
      >
        <Image source={require("../../assets/FrameJ.png")} />
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={require("../../assets/Close.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewstyle1}>
        <Text style={{ fontSize: 28, fontFamily: Bold, fontWeight: "700" }}>
          Welcome Jane Doe!
        </Text>
      </View>
      <View style={{height:responsiveHeight(65)}}>
      <View style={styles.viewstyle}>
        <Image source={require("../../assets/User.png")} />
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text style={styles.txt}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewstyle}>
        <Image source={require("../../assets/WalletP.png")} />
        <TouchableOpacity onPress={() => navigation.navigate("Credit")}>
          <Text style={styles.txt}>Wallet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewstyle}>
        <Image source={require("../../assets/Bell.png")} />
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <Text style={styles.txt}>Alerts</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewstyle}>
        <Image source={require("../../assets/Deal.png")} />
        <TouchableOpacity>
          <Text style={styles.txt}>Partner with Us</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewstyle}>
        <Image source={require("../../assets/Guideline.png")} />
        <TouchableOpacity
          onPress={() => navigation.navigate("CommunityGuidelines")}
        >
          <Text style={styles.txt}>Community Guidelines</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewstyle}>
        <Image source={require("../../assets/Accept.png")} />
        <TouchableOpacity
          onPress={() => navigation.navigate("TermsConditions")}
        >
          <Text style={styles.txt}>Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewstyle}>
        <Image source={require("../../assets/Information.png")} />
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <Text style={styles.txt}>About Us</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewstyle}>
        <Image source={require("../../assets/Help.png")} />
        <TouchableOpacity onPress={() => navigation.navigate("Faq")}>
          <Text style={styles.txt}>FAQS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewstyle}>
        <Image source={require("../../assets/SettingP.png")} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Country");
          }}
        >
          <Text style={styles.txt}>Settings</Text>
        </TouchableOpacity>
      </View>
      </View>
      {/* <View style={{ height: responsiveHeight(7) }}></View> */}
      <View style={{ height: responsiveHeight(15),justifyContent:'center' }}>
        <CustomButton
          title={"Logout"}
          color="#FFC44D"
          width={responsiveWidth(40)}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   justifyContent: 'center',
    //  alignItems: 'center',
    backgroundColor: "#FAFAFA",
  },
  txt: {
    fontSize: 20,
    fontFamily: Regular,
    paddingLeft: 25,
    bottom: 3,
  },
  viewstyle: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop:25,
 //   backgroundColor:'green'
 
  },
  viewstyle1: {
    flexDirection: "row",
    paddingHorizontal: 20,
    // marginTop: 30,
    
    alignItems:'center',
    height:responsiveHeight(10)
  },
});

//make this component available to the app
export default EditProfile;
