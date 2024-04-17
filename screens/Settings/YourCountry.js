import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import arrow_back from "../../assets/arrow_back.png";
import profile from "../../style/profile";
import { getName } from "i18n-iso-countries";
import localeEn from "i18n-iso-countries/langs/en.json";

const countryName = getName("US", "En");
console.log(countryName); // Outputs: "États-Unis"

const YourCountry = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={profile.welcome}>
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <Image style={profile.arrow_back} source={arrow_back} />
        </TouchableOpacity>
        <Text style={profile.welcomeText}> Your Country</Text>
      </View>
    </View>
  );
};

export default YourCountry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
