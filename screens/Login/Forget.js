import React from 'react';
import { StatusBar } from "expo-status-bar";
import { TextInput } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView } from "react-native";
import appStyle from "../../style/login_start";
import signUpStyle from "../../style/SignUp";
import { SvgUri, SvgXml } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';

const start3 = require('../../assets/svg/rafiki.png')
const message = require('../../assets/icons/message.png')
const email = require('../../assets/icons/email.png')
const arrow_back=require('../../assets/arrow_back.png')

import { useFonts } from 'expo-font';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const Forget = ({ navigation }) => {
  // You can use useEffect hook for componentDidMount
  // useEffect(() => {
  //   console.log(navigation);
  // }, []);

  return (
    <View  style={appStyle.body}>
      <View>
      <View style={{height:responsiveHeight(15), marginTop:50,
        justifyContent:'flex-start',
        marginLeft:20,
        top:20,
        flexDirection: 'row',}}>
        <TouchableOpacity onPress={() =>navigation.navigate('Index')}>
        <Image style={appStyle.arrow_backF}  source={arrow_back}   />
        </TouchableOpacity>
      
      <Text style={signUpStyle.welcomeF}>Forgot Password</Text>        
      </View>
        <View style ={{height:responsiveHeight(30)}}>
        <Image style={appStyle.logoF} source={start3} />

        </View>
        <View style={{ height:responsiveHeight(7)}}>
            <Text style={appStyle.ForgetTxt}>
              Select which contact details should we use to reset your password
            </Text>
        </View>
        <View style={{height:responsiveHeight(30)}}>

        <View style={appStyle.smallRounderContainer}>
          <View style={appStyle.leftContainerForget}>
            <Image style={appStyle.rightIconForget} source={message} />
          </View>
          <View style={appStyle.rightContainerForget}>
            <Text
              style={{
                width: '100%',
                fontSize: 14,
                color: "#000",
                bottom: 9,
                marginLeft: 30,
                fontWeight: 'bold',
              }}
            >
              via SMS:
            </Text>
            <Text
              style={{
                width: '100%',
                fontSize: 14,
                color: "#000",
                bottom: 9,
                marginLeft: 30,
                fontWeight: 'bold',
              }}
            >
              +92 334 ******7
            </Text>
          </View>
        </View>
        <View style={appStyle.smallRounderContainer}>
          <View style={appStyle.leftContainerForget}>
            <Image style={appStyle.rightIconForget} source={email} />
          </View>
          <View style={appStyle.rightContainerForget}>
          <TouchableOpacity  onPress={navigation.navigate('ForgotPswd')}>
            <Text
              style={{
                width: 200,
                fontSize: 14,
                color: "#000",
                bottom: 9,
                marginLeft: 80,
                fontWeight: 'bold',
              }}
            >
            via Email:
            </Text>
            <Text
              style={{
                width: 200,
                fontSize: 14,
                color: "#000",
                bottom: 9,
                marginLeft: 80,
                fontWeight: 'bold',
              }}
            >
              ja****oe@yourdomain.com
            </Text>
            </TouchableOpacity>
          </View>
          </View>

        </View>
        <View style={{height:responsiveHeight(15)}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={appStyle.appButtonContainer}>
          <Text style={appStyle.appButtonText}>Continue</Text>
        </TouchableOpacity>

        </View>
        
        {/* <View style={{ height: 10 }}></View> */}
      </View>
    </View>
  );
}

export default Forget;
