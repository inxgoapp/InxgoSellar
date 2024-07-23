import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import wallet from "../../style/wallet";
import image_upload from "../../assets/Frame.png";
import rightarrow from "../../assets/rightarrow.png";
import location from "../../assets/assistant_direction.png";
import hrs from "../../assets/icons/hrs.png";
import circle from "../../assets/icons/circle.png";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Medium } from "../../constants/fonts";

const Accepted = ({ navigation }) => {
  return (
    <View
      style={{
        marginTop: "10%",
        elevation: 10,
        marginRight: "2%",
        marginLeft: "2%",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        height:responsiveHeight(30)
      }}
    >
      <View style={{ flexDirection: "row", width:responsiveWidth(100), marginTop: 20 ,height:responsiveHeight(8),backgroundColor:'pink'}}>
        <Image style={wallet.image} source={image_upload} />
        <View style={wallet.LeftContainer}>
          <View style={{ flexDirection: "row",}}>
            <Text style={{ fontSize: 18 ,fontFamily:Medium,paddingTop:10}}>Mark Tuan</Text>
          </View>
          {/* <Text style={{ fontSize: 12 }}>Plumber</Text> */}
        </View>
        <View style={wallet.RightContainer}>
          <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
            <View
              style={{
                right: 10,
                width: 80,
                top:10,
                height: 25,
                backgroundColor: "#9AEF56",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 14 }}>Accepted</Text>
            </View>
          </View>
         
        </View>
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
          <Text style={{ fontSize: 14, fontWeight: "bold", marginLeft: 2 }}>
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
          <Image style={{ width: 15, height: 15 }} source={hrs} />
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              fontWeight: "bold",
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
          <Image style={{ width: 15, height: 15 }} source={circle} />
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              fontWeight: "bold",
              marginLeft: 2,
            }}
          >
            $40/ hr
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Accepted;
