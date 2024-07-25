import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import wallet from "../../style/wallet";
import image_upload from "../../assets/Frame.png";
import rightarrow from "../../assets/rightarrow.png";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import location from "../../assets/assistant_direction.png";
import { Bold, Medium, Regular } from "../../constants/fonts";
import hrs from "../../assets/icons/hrs.png";
import circle from "../../assets/icons/circle.png";
const Progress = ({ navigation }) => {
  return (
    <View
      style={{
        marginTop: "10%",
        elevation: 10,
        marginRight: "2%",
        marginLeft: "2%",
        backgroundColor: "#FFFFFF",
         borderRadius: 10,
        height:responsiveHeight(20)
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
                width: 60,
                height: 20,
                backgroundColor: "#FFE24D",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 14 }}>Active</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Tracker")}>
            <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
              <Image
                style={{
                  marginTop: 20,
                  marginBottom: 30,
                  width: 15,
                  height: 15,
                }}
                source={rightarrow}
              />
            </View>
          </TouchableOpacity>

        </View>
        
      </View>
      <View style ={{height:responsiveHeight(5),justifyContent:"center"}}>
      <Image source={require('../../assets/Line.png')} style={{width:responsiveWidth(90),marginLeft:10}}/>

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
          <Text style={{ fontSize: 12, fontWeight:Medium, marginLeft: 2 }}>
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
              fontWeight:Medium,
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

export default Progress;
