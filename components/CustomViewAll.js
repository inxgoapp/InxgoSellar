import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Regular } from '../constants/fonts';
import { useNavigation } from '@react-navigation/native';
import SvgUri from 'react-native-svg-uri';
import axios from "axios";
import ApiCall from "../Services/ApiCall.js";


const CustomViewAll = ({ items,location }) => {
    const imageDisplay = (image) => {
        if (image && image.includes('.svg')) {
            return (<SvgUri width={responsiveWidth(15)} height={responsiveHeight(6)} source={{ uri: image }}/>);
        } else {
            return (<Image style={{resizeMode: 'contain', width: responsiveWidth(15), height: responsiveHeight(6) }} source={{ uri: image }}/>);
        }
    };
    const mapNavigate= async(id)=>
    {
        const formData = new FormData();
        formData.append("skill_id", id);
        formData.append("latitude", location.latitude);
        formData.append("longitude", location.longitude);
        console.log(formData);
        let response=await ApiCall.postAPICall('skill/get/users',formData);
        navigation.navigate('SearchProvider', { data: response.data });
    };

    const navigation = useNavigation();
    return (
  <View style={styles.container}>
    {items.map((item, index) => (
      <TouchableOpacity key={index} onPress={() =>mapNavigate(item.id) }>
        <View style={{ justifyContent: "center", alignItems: 'center' }}>
            <View key={index}>
                {imageDisplay(item.image_path)}
            </View>
          <Text style={{ fontSize: 11, fontFamily: 'Regular' }}>{item.textContent}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        width: responsiveWidth(100),
        height: responsiveHeight(9),
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 20
    },
});

export default CustomViewAll;
