import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const arrow_back = require("../../assets/arrow_back.png");

import { Bold, Regular,Medium } from "../../constants/fonts";
import CustomButton from "../../components/CustomButton";
import profile from "../../style/profile";
import { assets } from "../../react-native.config";
import Footer from "../Footer/Index";
import Switcher from "../../components/Switcher";
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
          height: responsiveHeight(5),
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image style={profile.arrow_back} source={arrow_back} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontFamily:Medium ,right:110}}>Profile</Text>
        <TouchableOpacity>
          <Image source={require("../../assets/SettingP.png")} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
         // marginRight: 20,
         paddingLeft: 10,
          height: responsiveHeight(20),
        }}
      >
        <Image
          source={require("../../assets/FrameJ.png")}
          style={{ height: 140, width: 140 }}
        />
        <Image
          source={require("../../assets/Editbtn.png")}
          style={{ right: 30, marginTop: 90 }}
        />
      </View>
      <View style={styles.viewstyle1}>
        <Text style={{ fontSize: 20, fontFamily: Medium,textAlign:'center' }}>Jane Doe </Text>
        <Text style={{ fontSize: 20, fontFamily: Medium }}>+92 334 1234567  </Text>

      </View>
      <View style={{height:responsiveHeight(1),alignItems:'center'}}>
        <Image source={require("../../assets/Line.png")}/>
      </View>
      <View style={{ height: responsiveHeight(40) }}>
        <View style={styles.viewstyle}>
          <Image source={require("../../assets/Profile.png")} />
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.txt}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewstyle}>
          <Image source={require("../../assets/address.png")} />
          <TouchableOpacity onPress={() => navigation.navigate("NewAddress")}>
            <Text style={styles.txt}>Address</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewstyle}>
          <Image source={require("../../assets/description.png")} />
          <TouchableOpacity onPress={() => navigation.navigate("Summary")}>
            <Text style={styles.txt}>Summary</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewstyle}>
          <Image source={require("../../assets/wallet.png")} />
          <TouchableOpacity  onPress={() => navigation.navigate("TaskCharges")}>
            <Text style={styles.txt}>Task Charges</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewstyle}>
          <Image source={require("../../assets/work.png")} />
          <TouchableOpacity
            onPress={() => navigation.navigate("WorkExperience")}
          >
            <Text style={styles.txt}>Work Experience</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewstyle}>
          <Image source={require("../../assets/translate.png")} />
          <TouchableOpacity
            onPress={() => navigation.navigate("Languages")}
          >
            <Text style={styles.txt}>Language</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={{ height: responsiveHeight(7) }}></View> */}
      {/* <View style={{ height: responsiveHeight(5), justifyContent: "center" }}>
        <CustomButton
          title={"Logout"}
          color="#FFC44D"
          width={responsiveWidth(40)}
          onPress={() => navigation.navigate("Login")}
        />
      </View> */}
      <View style={{height:responsiveHeight(15),justifyContent:'center'}}>
      <Switcher/>

      </View>
      <Footer flag={"SellerProfile"} navigation={navigation} />
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
    marginTop: 25,
    //   backgroundColor:'green'
  },
  viewstyle1: {
   // justifyContent: "center",
   // paddingHorizontal: 20,
    // marginTop: 30,
    alignItems: "center",
    height: responsiveHeight(10),
  },
});

//make this component available to the app
export default EditProfile;
