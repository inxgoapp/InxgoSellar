//import liraries
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
//import Home from '../home/Home';
const arrow_back = require("../../assets/arrow_back.png");

import profile from "../../style/profile";

import { Bold, Medium, Regular } from "../../constants/fonts";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
// create a component
const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <Image style={profile.arrow_back} source={arrow_back} />
        </TouchableOpacity>

        <Text style={profile.welcomeText}>Settings</Text>
      </View>
      <View style={{flexDirection:'row',height:responsiveHeight(30),alignItems:'center',paddingHorizontal:20}}>
        <Image source={require('../../assets/logout.png')} style={{height:20,width:20}}/>
        <TouchableOpacity   onPress={() => navigation.navigate("Login")}>
        <Text style={{fontSize:18,fontFamily:Medium,paddingHorizontal:20}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#FAFAFA",
  },
  welcome: {
    //marginTop:50,
    fontSize: 20,
    //marginLeft:20,
    flexDirection: "row",
    // alignSelf: "center",
    // justifyContent: 'center',
    // alignItems: 'center',
    height: responsiveHeight(10),

    backgroundColor:'red'
  },
});

//make this component available to the app
export default Settings;
