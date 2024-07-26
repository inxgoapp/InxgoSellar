//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import appStyle from "../../style/login_start";
const arrow_back = require("../../assets/arrow_back.png");
import signUpStyle from "../../style/SignUp";
import wallet from "../../style/wallet";
import hrs from "../../assets/icons/hrs.png";
import circle from "../../assets/icons/circle.png";
import image_upload from "../../assets/Frame.png";
import rightarrow from "../../assets/rightarrow.png";
import location from "../../assets/assistant_direction.png";
import { Bold, Medium, Regular } from "../../constants/fonts";
import CustomButton from "../../components/CustomButton";

// create a component
const Checkout = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: responsiveHeight(7),
          width: responsiveWidth(100),
          justifyContent: "flex-start",
          flexDirection: "row",
          left: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image style={appStyle.arrow_backF} source={arrow_back} />
        </TouchableOpacity>
        <Text style={signUpStyle.welcomeF}>Checkout</Text>
      </View>
      <View style={{ width: responsiveWidth(60), alignSelf: "center",height:responsiveHeight(5) }}>
        <Text
          style={{ fontSize: 14, fontFamily: Regular, textAlign: "center" }}
        >
          Great job on completing the task! Total amount you’ve earned
        </Text>
      </View>
      <View style={{height:responsiveHeight(18),justifyContent:'center'}}>
        <TextInput
          style={styles.input}
          placeholder="$"
          keyboardType="numeric"
          // value={inputValue} // Bind the state to the value prop
        />
      </View>
      <View
        style={{
          elevation: 10,
          marginRight: "2%",
          marginLeft: "2%",
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          height: responsiveHeight(56),
        }}
      >
        <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
          <Image style={wallet.image} source={image_upload} />
          <View style={wallet.LeftContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 18 }}>Mark Tuan</Text>
            </View>
            {/* <Text style={{ fontSize: 12 }}>Plumber</Text> */}
          </View>
          <View style={wallet.RightContainer}>
            <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
              <View
                style={{
                  right: 10,
                  width: 70,
                  height: 20,
                  backgroundColor: "#FFE24D",

                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 10 }}>Completed</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Tracker")}>
              {/* <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                <Image
                  style={{
                    marginTop: 20,
                    marginBottom: 30,
                    width: 15,
                    height: 15,
                  }}
                  source={rightarrow}
                />
              </View> */}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: responsiveHeight(5), justifyContent: "center" }}>
          <Image
            source={require("../../assets/Line.png")}
            style={{ width: responsiveWidth(90), marginLeft: 10 }}
          />
        </View>

        <View
          style={{
            marginBottom: 10,
            width: "90%",
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "38%", marginLeft: 5, flexDirection: "row" }}>
            <Image source={location} />
            <Text style={{ fontSize: 12, fontWeight: Medium, marginLeft: 2 }}>
              Sadiq Centre LHR
            </Text>
          </View>
          <View
            style={{
              width: "30%",
              left: 10,
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image style={{ width: 15, height: 15 }} source={circle} />
            <Text
              style={{
                fontSize: 12,
                textAlign: "center",
                fontWeight: Medium,
                marginLeft: 2,
              }}
            >
              4 hrs
            </Text>
          </View>
          <View
            style={{
              width: "30%",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              right: 5,
              flexDirection: "row",
            }}
          >
            <Image style={{ width: 15, height: 15 }} source={hrs} />
            <Text
              style={{
                fontSize: 12,
                textAlign: "center",
                fontWeight: Medium,
                marginLeft: 2,
              }}
            >
              $40/ hr
            </Text>
          </View>
        </View>
        <View style={{ height: responsiveHeight(5), justifyContent: "center" }}>
          <Image
            source={require("../../assets/Line.png")}
            style={{ width: responsiveWidth(90), marginLeft: 10 }}
          />
        </View>
        <View style={{ height: responsiveHeight(5) }}>
          <Text style={{ fontSize: 14, fontFamily: Medium, marginLeft: 20 }}>
            Job Title
          </Text>
          <Text style={{ fontSize: 10, fontFamily: Regular, marginLeft: 20 }}>
            Plumber
          </Text>
        </View>
        <View style={{ height: responsiveHeight(12),justifyContent:'center',width:responsiveWidth(90)}}>
          <Text style={{ fontSize: 14, fontFamily: Medium, marginLeft: 20 }}>
            Description
          </Text>
          <Text style={{ fontSize: 10, fontFamily: Regular, marginLeft: 20 }}>
            We have assigned you a plumbing task for an urgent repair at Sadiq
            Centre, Lahore. Please make arrangements to visit the location as
            soon as possible and address the issue accordingly. Your expertise
            and prompt response are greatly appreciated.
          </Text>
        </View>
        <View style={{ height: responsiveHeight(5) }}>
          <Text style={{ fontSize: 14, fontFamily: Medium, marginLeft: 20 }}>
Time Taken          </Text>
          <Text style={{ fontSize: 10, fontFamily: Regular, marginLeft: 20 }}>
            Started at : 11:00 AM
          </Text>
         
        </View>
        <View style={{height:responsiveHeight(7),gap:5}}>
         <Image source={require('../../assets/bulletpoint.png')} style={{marginLeft:20,width:5,height:5}}/>
                    <Image source={require('../../assets/bulletpoint.png')} style={{marginLeft:20,width:5,height:5}}/>

          <Image source={require('../../assets/bulletpoint.png')} style={{marginLeft:20,width:5,height:5}}/>

          <Image source={require('../../assets/bulletpoint.png')} style={{marginLeft:20,width:5,height:5}}/>
          <Image source={require('../../assets/bulletpoint.png')} style={{marginLeft:20,width:5,height:5}}/>

        
        </View>
         <View style={{ height: responsiveHeight(3) }}>
          
          <Text style={{ fontSize: 10, fontFamily: Regular, marginLeft: 20 }}>
Ended at : 02:00 PM          </Text>
         
        </View>
      </View>
      <View
        style={{ height: responsiveHeight(14), justifyContent: "center" }}
      >
        <CustomButton
          title={"Confirm"}
          color="#FFC44D"
          width={responsiveWidth(80)}
          onPress={() => navigation.navigate("Checkout")}
        />
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
  input: {
    height: responsiveHeight(15),
    //top: 20,
    borderColor: "#FFC44D",
    borderWidth: 1,
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    width: responsiveWidth(90),
    marginLeft: 20,
    alignItems: "center",
    fontSize: 40,
    fontFamily: Regular,
    fontWeight: "600",
    textAlign: "center",
    borderRadius: 10,
  },
});

//make this component available to the app
export default Checkout;
