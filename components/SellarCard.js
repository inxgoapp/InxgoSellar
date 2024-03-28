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
      <Image style={{ width: 65, height: 65 }} source={CommonImages.welder} />
      <View style={{ width: responsiveWidth(70) }}>
        <View style={{ flex: 1 }}>
          {/* Name */}
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
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
            <Text style={{ fontSize: 14 }}>Plumber</Text>

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
              <Text style={{ fontSize: 12 }}>New York, USA</Text>
              <Image
                style={{ marginLeft: 80, width: 22, height: 22 }}
                source={CommonImages.rightarrow}
              />
            </View>
          </View>

          {/* Active Status and Arrow Icon */}
          <View>
            <Text style={{ fontSize: 12, marginRight: 5 }}>Active now</Text>
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
