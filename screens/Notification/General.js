import React from "react";
import { View, Text, Image,TouchableOpacity } from "react-native";
import wallet from "../../style/wallet";
import image_upload from "../../assets/icons/shield.png";
import lock from "../../assets/icons/lock.png";
import tick_blue from "../../assets/icons/tick_blue.png";
import info from "../../assets/icons/info.png";
import { Medium } from "../../constants/fonts";
import CustomButton from "../../components/CustomButton";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
const General = ({ navigation }) => {
  const detailJob = async (path) => {
    navigation.navigate(path);
  };

  console.log("General");

  return (
    <View
      style={{
        marginTop: "10%",
        marginRight: "2%",
        marginLeft: "2%",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
      }}
    >
      <View>
        <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
          <View
            style={[wallet.short_image_outer, { backgroundColor: "#FFF5E1" }]}
          >
            <Image style={wallet.short_image} source={image_upload} />
          </View>
          <View style={wallet.LeftContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text numberOfLines={1} style={{ fontSize: 16, width: "110%" ,fontFamily:Medium}}>
Mark Tuan              </Text>
            </View>
            <Text style={{ fontSize: 11 }}>26 May, 2023 | 16:39 PM</Text>
          </View>
          <View style={wallet.RightContainer}>
            <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
              <View
                style={{
                  right: 10,
                  width: 30,
                  height: 20,
                  backgroundColor: "#FFC44D",
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 10, color: "#FFF" }}>new</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{height:responsiveHeight(8),justifyContent:'center'}}>
        <Text
          style={{
            fontSize: 14,
            width: "100%",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
         Please Confirm that supplier marked your Job as Completed.
        </Text>
        </View>
        
      </View>
       <View
        style={{ height: responsiveHeight(5),flexDirection:'row'}}
      >
        <TouchableOpacity style={{backgroundColor:"#FFC44D",height:25,width:70,justifyContent:'center',marginLeft:20,borderRadius:5}}>
<Text style={{textAlign:'center'}}>Accepted</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:"black",height:25,width:70,marginLeft:20,borderRadius:5,justifyContent:'center'}}>
<Text style={{textAlign:'center',color:"white"}}>Decline</Text>
      </TouchableOpacity>
      </View> 
      
      {/* Repeat similar views for other sections */}
    </View>
  );
};

export default General;
