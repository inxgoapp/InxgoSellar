import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image,KeyboardAvoidingView,TextInput } from "react-native";
import appStyle from "../../style/login_start";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import signUpStyle from "../../style/SignUp";
import CustomButton from "../../components/CustomButton";
import Canceltext from "../../components/CancelText";
import CustomImageModal from "../../components/CustomImageModal";
import { CommonAnimations } from "../../constants/animations";
import { Platform } from 'react-native';

import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { Regular } from "../../constants/fonts";

const arrow_back = require("../../assets/arrow_back.png");

const Experties = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [isSelectionMade, setIsSelectionMade] = useState(false);

  const handleRadioSelect = (option) => {
    setSelectedOption(option);
    setIsSelectionMade(true);
  };
  const handleCancel = () => {
    // Check if a valid selection has been made
    if (!isSelectionMade) {
      alert("Please select a reason for cancellation.");
      return;
    }
    setModalVisible(!modalVisible);
  };

  return (
  
    <View style={styles.container}>
     <CustomImageModal
          title="Your task has been cancelled!!"
          subtitle="See on your next task..."
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          animationlogo={CommonAnimations.realcheck}
          onPressButton={() => setModalVisible(false)}
        />
      <View
        style={{
          height: responsiveHeight(5),
          width: responsiveWidth(100),
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("TrackerMain")}>
          <Image style={styles.arrow_backF} source={arrow_back} />
        </TouchableOpacity>
        
      </View>
      <View style={{ height: responsiveHeight(10), justifyContent: "center",}}>
      <Text style={styles.welcomeF}>What is Your Expertise?</Text>
        <Text style={{ fontSize: 15, fontWeight: "300", marginLeft: 20 ,fontFamily:Regular,textAlign:'center'}}>
        Please select your field of expertise (up-to 5)        </Text>
        
      </View>
      <View style={{ height: responsiveHeight(75) }}>
        <Canceltext
          Cancel="Plumber"
          selected={selectedOption === "Plumber"}
          onSelect={() => handleRadioSelect("Plumber")}
        />
        <Canceltext
          Cancel="Electrician"
          selected={selectedOption === "Electrician"}
          onSelect={() => handleRadioSelect("Electrician")}
        />
        <Canceltext
          Cancel="Contractor"
          selected={selectedOption === "Contractor"}
          onSelect={() => handleRadioSelect("Contractor")}
        />
        <Canceltext
          Cancel="App Developer"
          selected={selectedOption === "App Developer"}
          onSelect={() => handleRadioSelect("App Developer")}
        />
         <Canceltext
          Cancel="Barber"
          selected={selectedOption === "Barber"}
          onSelect={() => handleRadioSelect("Barber")}
        />
         <Canceltext
          Cancel="Graphic Designer"
          selected={selectedOption === "Graphic Designer"}
          onSelect={() => handleRadioSelect("Graphic Designer")}
        />
        <Canceltext
          Cancel="Beauty Salon"
          selected={selectedOption === "Beauty Salon"}
          onSelect={() => handleRadioSelect("Beauty Salon")}
        />

      </View>
      
     
      {/* <View style={{ height: responsiveHeight(14) }} /> */}
      <View style={{ height: responsiveHeight(10) }}>
        <CustomButton
          title={"Submit"}
          color="#FFC44D"
          onPress={handleCancel}
          width={responsiveWidth(85)}
          disabled={!isSelectionMade} 
        />
      </View>
      
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    
  },
  arrow_backF: {
    //top: 6,
    marginHorizontal:20,
    // marginLeft:10 
 },
  inputSearchs: {
    width: responsiveWidth(85),
    paddingHorizontal: 5,
    fontSize: 13,
    zIndex: 0,
    left: 20,
  },
  input: {
    borderWidth:0.5,
    borderColor: "#E6E6E6",
    height: responsiveHeight(7),
    backgroundColor:'#fafafa',
   // borderRadius: moderateScale(10),
    paddingLeft: responsiveWidth(1.5),
    width: responsiveWidth(85),
    marginLeft:20,
    fontSize:13,
    justifyContent:"center"
    
  },
  welcomeF: {
    fontSize: 28,
    fontWeight: "700",
    //left:10,
    textAlign:'center'
    //marginBottom:20,
  },
});

export default Experties;
