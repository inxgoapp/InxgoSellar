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
import profile from "../../style/profile";
import arrow_back from "../../assets/arrow_back.png";
import CustomButton from "../../components/CustomButton";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { Regular } from "../../constants/fonts";
// create a component
const TaskCharges = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={profile.welcome}>
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <Image style={profile.arrow_back} source={arrow_back} />
        </TouchableOpacity>
        <Text style={profile.welcomeText}>Task Charges</Text>
      </View>
      <View>
        <Text style={{ marginHorizontal: 20, fontFamily: Regular }}>
          Minimum:
        </Text>
        <TextInput
          placeholder=""
          keyboardType="numeric"
          style={{
            marginHorizontal: 20,
            borderWidth: 1,
            height: 50,
            top: 10,
            borderColor: "#FFC44D",
            paddingHorizontal: 20,
            width:responsiveWidth(90),

          }}
        ></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ marginHorizontal: 20, fontFamily: Regular }}>
          Maximum:
        </Text>
        <TextInput
          placeholder=""
          keyboardType="numeric"
          style={{
            marginHorizontal: 20,
            borderWidth: 1,
            height: 50,
            top: 10,
            borderColor: "#FFC44D",
            paddingHorizontal: 20,
            width:responsiveWidth(90),

          }}
        ></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ marginHorizontal: 20, fontFamily: Regular }}>
          Currency:
        </Text>
        <TextInput
          placeholder="USD"
          keyboardType="numeric"
          style={{
            marginHorizontal: 20,
            borderWidth: 1,
            height: 50,
            top: 10,
            borderColor: "#FFC44D",
            paddingHorizontal: 20,
            width:responsiveWidth(90),

          }}
        ></TextInput>
         <Image source={require("../../assets/DownArrow.png")}  style={{marginLeft:340,top:45,position:'absolute'}}/> 
      </View>
      <View style={{ marginTop: 20}}>
        <Text style={{ marginHorizontal: 20, fontFamily: Regular }}>
          Frequency:
        </Text>
        <TextInput
          placeholder="Hourly"
          keyboardType="numeric"
          style={{
            marginHorizontal: 20,
            borderWidth: 1,
            height: 50,
            top: 10,
            borderColor: "#FFC44D",
            width:responsiveWidth(90),
            paddingHorizontal: 20,
           
            
          }}
          
        >
             
        </TextInput>
         <Image source={require("../../assets/DownArrow.png")}  style={{marginLeft:340,top:45,position:'absolute'}}/> 
      </View>
      <View
        style={{ height: responsiveHeight(45), justifyContent: "flex-end" }}
      >
        <CustomButton
          title={"Save"}
          color="#FFC44D"
          width={responsiveWidth(80)}
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
    //justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#FAFAFA",
  },
});

//make this component available to the app
export default TaskCharges;
