//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import EditAddress from '../../components/EditAddress';
import wallet from "../../style/wallet";
import image_upload from "../../assets/addresses.png";
import Edit from "../../assets/Edit.png";
import profile from "../../style/profile";
import { CommonImages } from "../../constants/Images";
import { Medium } from '../../constants/fonts';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import appStyle from "../../style/payment";
import CustomButton from "../../components/CustomButton";

// create a component
const NewAddress = ({navigation}) => {
    return (
        <View style={styles.container}>
         <View style={styles.welcome}>
           <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
             <Image style={profile.arrow_back} source={CommonImages.arrow} />
           </TouchableOpacity>
           <Text style={profile.welcomeText}>Address </Text>
         </View>
         <View style={{height:responsiveHeight(30)}}>
             <View style={{ flexDirection: "row", width: "100%",height:responsiveHeight(10) }}>
        <Image style={wallet.image} source={image_upload} />
        <View style={styles.LeftContainer}>
          <View style={{ flexDirection: "row"}}>
            <Text style={{ fontSize: 18,fontFamily:Medium }}>Home</Text>
          </View>
          <Text style={{ fontSize: 12 }}>123 Main Street Anytown, CA 12345 United States</Text>
        </View>
        <View style={styles.RightContainer}>
          <TouchableOpacity onPress={() => detailJob("Detail")}>
            <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
              <Image
                style={{ marginTop: 10, width: 25, height: 25 }}
                source={Edit}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row", width: "100%" ,height:responsiveHeight(10)}}>
        <Image style={wallet.image} source={image_upload} />
        <View style={styles.LeftContainer}>
          <View style={{ flexDirection: "row"}}>
            <Text style={{ fontSize: 18,fontFamily:Medium }}>Office</Text>
          </View>
          <Text style={{ fontSize: 12 ,fontWeight:'400'}}>456 Elm Avenue Cityville, NY 67890 United States</Text>
        </View>
        <View style={styles.RightContainer}>
          <TouchableOpacity onPress={() => detailJob("Detail")}>
            <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
              <Image
                style={{ marginTop: 10, width: 25, height: 25 }}
                source={Edit}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </View>
      <View style={{height:responsiveHeight(20)}}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PaymentAdd")}
          style={appStyle.downloadView}
        >
          <Text style={appStyle.download}>Add New Address</Text>
        </TouchableOpacity>
        </View>
        <View
        style={{ height: responsiveHeight(40),justifyContent:'center'  }}
      >
        <CustomButton
          title={"Save"}
          color="#FFC44D"
          width={responsiveWidth(80)}
          onPress={() => navigation.navigate("WorkExperience")}
        />
      </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#fafafa',
    },
    LeftContainer: {
    width: "37%",
    marginLeft: "3%",
    // backgroundColor:'pink'
    // alignSelf: 'flex-start',
  },RightContainer: {
    width: "35%",
    // alignSelf: 'flex-end',
    // backgroundColor:'red'
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
  },
});

//make this component available to the app
export default NewAddress;
