//import liraries
import React, { useState } from 'react';
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
import DropDownPicker from 'react-native-dropdown-picker';

import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { Regular } from "../../constants/fonts";
// create a component
const TaskCharges = ({navigation}) => {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [currencyValue, setCurrencyValue] = useState(null);
  const [frequencyOpen, setFrequencyOpen] = useState(false);
  const [frequencyValue, setFrequencyValue] = useState(null);

  // Currency options
  const currencyItems = [
    { label: 'Pound', value: 'GBP' },
    { label: 'Pkr', value: 'PKR' },
    { label: 'Euro', value: 'EU' },
  ];

  // Frequency options
  const frequencyItems = [
    { label: 'Hourly', value: 'hourly' },
    { label: 'Fixed', value: 'fixed' },
  ];
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
          //  borderWidth: 1,
            height: 50,
            top: 10,
           // borderColor: "#FFC44D",
             backgroundColor:"#FAFAFA",
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
         //   borderWidth: 1,
            height: 50,
            top: 10,
           // borderColor: "#FFC44D",
             backgroundColor:"#FAFAFA",

            paddingHorizontal: 20,
            width:responsiveWidth(90),

          }}
        ></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
       <Text style={{ marginHorizontal: 20, fontFamily: Regular }}>Currency:</Text> 
       <DropDownPicker
  open={currencyOpen}
  value={currencyValue}
  items={currencyItems}
  setOpen={setCurrencyOpen}
  setValue={setCurrencyValue}
  placeholder="Select Currency"
  style={{ backgroundColor: '#FAFAFA',borderWidth:0 ,width:responsiveWidth(90),marginLeft:20,marginTop:20}}
  // dropDownContainerStyle={{paddingHorizontal:20 }} // Attempt to offset any border
  textStyle={{ fontSize: 12}}
   maxHeight={80} // Limit the height of the dropdown list

  dropDownTextStyle={{ fontSize: 12}}
/>

      {/* <Image source={require("../../assets/DownArrow.png")} style={{marginLeft:340,top:45,position:'absolute'}}/> */}
    </View>

      <View style={{ marginTop: 20}}>
        <Text style={{ marginHorizontal: 20, fontFamily: Regular }}>
          Frequency:
        </Text>
        <DropDownPicker
          open={frequencyOpen}
          value={frequencyValue}
          items={frequencyItems}
          setOpen={setFrequencyOpen}
          setValue={setFrequencyValue}
          placeholder="Select Frequency"
          style={{ backgroundColor: '#FAFAFA', borderWidth: 0, width: responsiveWidth(90), marginLeft: 20, marginTop: 20 }}
          textStyle={{ fontSize: 12}}
          dropDownTextStyle={{ fontSize: 12}}
          maxHeight={80} // Limit the height of the dropdown list


        />
         {/* <Image source={require("../../assets/DownArrow.png")}  style={{marginLeft:340,top:45,position:'absolute'}}/>  */}
      </View>
      <View
        style={{ height: responsiveHeight(25), justifyContent: "flex-end" }}
      >
        <CustomButton
          title={"Save"}
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
    //justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
  }, listContainer: {
    width:responsiveWidth(20), 



    justifyContent:'flex-end'
    // Constrain the width of the dropdown list
    // marginLeft: , // Optional: Add left margin if needed
  },
});

//make this component available to the app
export default TaskCharges;
