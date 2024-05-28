
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import appStyle from "../../style/login_start";
import signUpStyle from "../../style/SignUp";
import { Regular } from '../../constants/fonts';
import Toast from 'react-native-toast-message';
import { CommonImages } from "../../constants/Images";

import profile from "../../style/profile";

const google = require("../../assets/google.png");
const arrow_back = require('../../assets/arrow_back.png');

// create a component
const Pin = ({ navigation }) => {
  const [timer, setTimer] = useState(30); // Initial timer value
  const [selectedInputIndex, setSelectedInputIndex] = useState(null); // Track selected input index

  
//   const showToast = () => {
//     Toast.show({
//       type: 'success',
//       text1: 'OTP Sent Successfully',
//      // text2: 'This is some something 👋'
//     });
//   }

 

 
  const toggleSelectedInput = (index) => {
    setSelectedInputIndex(selectedInputIndex === index? null : index);
  };

  return (
    <View style={styles.body} >
       <View style={profile.welcome}>
        <TouchableOpacity onPress={()=>navigation.navigate('Credit')}>
          <Image style={profile.arrow_back} source={CommonImages.arrow} />
        </TouchableOpacity>
        <Text style={profile.welcomeText}>Enter your Pin</Text>
      </View>
      <View style={{ backgroundColor: '#FAFAFA', height: responsiveHeight(10), justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 14, alignSelf: 'center', paddingHorizontal: 50,fontFamily:Regular }}>Enter your PIN to confirm your credit</Text>
      </View>
      <View style={{ flexDirection: "row", backgroundColor: "#FAFAFA", height: responsiveHeight(20), justifyContent:'space-around', alignItems: 'center' }}>
        {[...Array(4)].map((_, i) => (
          <TextInput
            key={i}
            style={[styles.TextPin, selectedInputIndex === i? {backgroundColor: '#FFF5E1', borderColor: '#FFC44D'} : {}]}
            keyboardType="numeric"
            maxLength={1}
            secureTextEntry={true}
            onFocus={() => toggleSelectedInput(i)}
            onBlur={() => toggleSelectedInput(i)}
          />
        ))}
      </View>
      
      <View style={{ backgroundColor: "#FAFAFA", height: responsiveHeight(20), justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={() => navigation.navigate("AddCredit")} style={styles.Btncontainer}>
          <Text style={styles.btntxt}>Continue</Text>
        </TouchableOpacity>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FAFAFA',
  //  paddingHorizontal: 30,
    width: responsiveWidth(100),
    
    flex: 1,
  },
  TextPin: {
    borderWidth: 1,
    width: 80,
    height: 60,
    borderRadius: 8,
    
    fontSize: 24,
    textAlign: 'center',
    borderColor: "#D9D9D9",
  },
  btntxt: {
    fontSize: 16,
    color: "black",
    alignSelf: "center",
    fontFamily: 'Inter',
    fontWeight: '600',
  },
  Btncontainer: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    backgroundColor: "#FFC44D",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: 'flex-end'
  },
  arrow_backForget: {
    top: 6,
    marginRight: 20,
  },
});

//make this component available to the app
export default Pin;
;
