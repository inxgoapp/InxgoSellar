import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  useResponsiveHeight,
} from "react-native-responsive-dimensions";
import { CommonImages } from "../constants/Images";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { Regular } from "../constants/fonts";
const SellarCard = () => {
  return (
    <View
      style={{
        width: responsiveWidth(90),
        marginTop: 10,
        marginLeft: 20,
        height: responsiveHeight(10),
        paddingLeft: "2%",
        borderRadius: 7,
        //  backgroundColor: "red",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Image style={{ width: 65, height: 65 }} source={CommonImages.plumber} />
      <View style={{ width: responsiveWidth(70), paddingLeft: "3%" }}>
        <View style={{ flex: 1 }}>
          {/* Name */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 5,
              fontFamily: Regular,
            }}
          >
            John Doe
          </Text>

          {/* Profession and Location */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
              //  backgroundColor: "red",
              paddingLeft: "1%",
            }}
          >
            {/* Profession */}
            <Text style={{ fontSize: 14, fontFamily: Regular }}>Plumber</Text>

            {/* Line Separator */}
            <View
              style={{
                height: 12,
                width: 1.5,
                backgroundColor: "black",
                marginHorizontal: 10,
              }}
            />

            {/* Location */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: 16, height: 16, marginRight: 5 }}
                source={CommonImages.location}
              />
              <Text style={{ fontSize: 12, fontFamily: Regular }}>
                New York, USA
              </Text>
              <Image
                style={{ marginLeft: 50, width: 22, height: 22 }}
                source={CommonImages.rightarrow}
              />
            </View>
          </View>

          {/* Active Status and Arrow Icon */}
          <View>
            <Text style={{ fontSize: 12, marginRight: 5, fontFamily: Regular,color:'#FFC44D'}}>
              Active now
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {/* Active Status */}
            <View
              style={{
                //  backgroundColor: "green",
                width: 10,
                height: 10,
                borderRadius: 5,
                marginRight: 5,
              }}
            />

            {/* Active Now Text */}

            {/* Arrow Icon */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default SellarCard;

const styles = StyleSheet.create({});
