//import liraries
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import profile from "../../style/profile";
import arrow_back from "../../assets/arrow_back.png";
import { responsiveWidth,responsiveHeight } from "react-native-responsive-dimensions";
import CustomButton from "../../components/CustomButton";
// create a component
const Summary = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={profile.welcome}>
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <Image style={profile.arrow_back} source={arrow_back} />
        </TouchableOpacity>
        <Text style={profile.welcomeText}>Summary</Text>
      </View>
      <View>
        <Text style={{ marginHorizontal: 20 }}>
          Summary ( Max. 300 characters)
        </Text>
        <Text style ={{width:responsiveWidth(100),paddingHorizontal:30,paddingVertical:15}}>
          Dedicated and highly skilled plumber with 5+ years of experience
          providing exceptional plumbing services. Proficient in diagnosing,
          repairing, and installing various plumbing systems. Committed to
          delivering high-quality workmanship and outstanding customer service.
        </Text>
      </View>
      <View style={{ height: responsiveHeight(70),justifyContent:'flex-end' }}>
        <CustomButton
          title={"Save"}
          color="#FFC44D"
          width={responsiveWidth(80)}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    //  alignItems: 'center',
    backgroundColor: "#FAFAFA",
  },
});

//make this component available to the app
export default Summary;
