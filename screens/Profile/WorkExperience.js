//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import profile from "../../style/profile";
import arrow_back from "../../assets/arrow_back.png";
import { Regular, Medium } from "../../constants/fonts";
import DocumentPicker from 'react-native-document-picker';
import DateTimePicker from "@react-native-community/datetimepicker";


// create a component
const WorkExperience = ({ navigation }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const showDatePicker = () => {
    setShow(true);
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };
  const handleUploadFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('Name : ' + res.name);
      console.log('Size : ' + res.size);
      // Now you can do something with the selected file, like upload it to a server
      // For simplicity, let's just log the details for now
      setSelectedDocument(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
        console.log('User cancelled the file picker');
      } else {
        // Error occurred
        console.log('Error while picking the file', err);
      }
    }
    
  
  };
  
  return (
  
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 20,
          paddingLeft: 10,
          height: responsiveHeight(5),
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <Image style={profile.arrow_back} source={arrow_back} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontFamily: Medium, right: 70 }}>
          Work Experience
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={require("../../assets/deleted.png")} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ marginHorizontal: 20, fontFamily: Regular }}>
          Job Title
        </Text>
        <TextInput
          placeholder="Plumbing Technician"
          keyboardType="numeric"
          style={{
            marginHorizontal: 20,
            //   borderWidth: 1,
            height: 50,
            top: 10,
            // borderColor: "#FFC44D",
            backgroundColor: "#FAFAFA",

            paddingHorizontal: 20,
            width: responsiveWidth(90),
          }}
        ></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ marginHorizontal: 20, fontFamily: Regular }}>
          Company
        </Text>
        <TextInput
          placeholder="Tricon Plumbing Services, New York, USA"
          keyboardType="numeric"
          style={{
            marginHorizontal: 20,
            //   borderWidth: 1,
            height: 50,
            top: 10,
            // borderColor: "#FFC44D",
            backgroundColor: "#FAFAFA",

            paddingHorizontal: 20,
            width: responsiveWidth(90),
          }}
        ></TextInput>
        {/* <Image source={require("../../assets/DownArrow.png")}  style={{marginLeft:340,top:45,position:'absolute'}}/>  */}
      </View>
      {/* <View style={{ marginTop: 20,flexDirection:'row',  marginHorizontal: 20,}}>
        <Text> From</Text>
        <Text> To</Text>

      </View> */}
      <View
                style={{
                    paddingHorizontal: 20,
                    marginTop: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width:responsiveWidth(80)
                }}
            >
                <Text style={{ fontSize: 14,  fontFamily: Regular }}>
                    From        
                </Text>
                <TouchableOpacity >
                    <Text style={{ fontSize: 14, color: "black", fontFamily: Regular }}>
To                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 ,flexDirection:"row"}}>
        <TextInput
          placeholder=""
          keyboardType="numeric"
          style={{
            marginHorizontal: 20,
            //   borderWidth: 1,
            height: 50,
            top: 10,
            // borderColor: "#FFC44D",
            backgroundColor: "#FAFAFA",

            paddingHorizontal: 20,
            width: responsiveWidth(45),
          }}
          value={date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
        ></TextInput>
        <TouchableOpacity  onPress={showDatePicker} 
                >
        <Image source={require("../../assets/DownArrow.png")}  style={{top:25,position:'absolute',right:30}}/>

        </TouchableOpacity>
        {show && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onChange}
                />
              )}
         <TextInput
          placeholder=""
          keyboardType="numeric"
          style={{
            // marginHorizontal: 20,
            //   borderWidth: 1,
            height: 50,
            top: 10,
            // borderColor: "#FFC44D",
            backgroundColor: "#FAFAFA",

            paddingHorizontal: 20,
            width: responsiveWidth(40),
          }}
          value={date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
        ></TextInput>
        <TouchableOpacity onPress={showDatePicker} >
        <Image source={require("../../assets/DownArrow.png")}  style={{top:25,position:'absolute',right:10}}/>    

        </TouchableOpacity>
        {show && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onChange}
                />
              )}
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ marginHorizontal: 20, fontFamily: Regular }}>
          Description (Optional)
        </Text>
        <TextInput
          placeholder=""
          keyboardType="numeric"
          style={{
            marginHorizontal: 20,
            //   borderWidth: 1,
            height: 120,
            top: 10,
            // borderColor: "#FFC44D",
            backgroundColor: "#FAFAFA",

            paddingHorizontal: 20,
            width: responsiveWidth(90),
          }}
        ></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ marginHorizontal: 20, fontFamily: Regular }}>
          Add Media (Optional){" "}
        </Text>
        <View  style={{
            marginHorizontal: 20,
              borderWidth: 1,
            height: 120,
            top: 10,
             borderColor: "#D9D9D9",
            backgroundColor: "#FAFAFA",
           // borderStyle: "dotted",
            borderStyle: "dotted", // This creates the dotted border effect
            borderRadius: 5,
            paddingHorizontal: 20,
            width: responsiveWidth(90),
          }}>

        </View>
        
        <TouchableOpacity  onPress={handleUploadFile}>
        <Image
          source={require("../../assets/upload_file.png")}
          style={{ position: "absolute",bottom:45, left: 190 }}
        />
        </TouchableOpacity>
      
        <Text style={{fontFamily:Regular,fontSize:12,textAlign:'center',bottom:40}}>Browse Files</Text> 
      </View>
      
      <View style={{ marginTop: 20 }}>
        <Text style={{ marginHorizontal: 20, fontFamily: Regular }}>
          Company
        </Text>
        <TextInput
          placeholder="Plumbing Systems Installation and Repair"
          keyboardType="numeric"
          style={{
            marginHorizontal: 20,
            //   borderWidth: 1,
            height: 50,
            top: 10,
            // borderColor: "#FFC44D",
            backgroundColor: "#FAFAFA",

            paddingHorizontal: 20,
            width: responsiveWidth(90),
          }}
        ></TextInput>
        <TouchableOpacity>
         <Image source={require("../../assets/Plus.png")}  style={{marginLeft:350,position:'absolute',bottom:5}}/> 
         </TouchableOpacity>
      </View>
      {/* <View style={{flexDirection:"row",backgroundColor:'pink',borderWidth:1,paddingHorizontal:20,height:30}}>
        <Text style={{}}>Pipefitting and Welding</Text>
        <Image source={require("../../assets/Crossed.png")}/>
      </View> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "white",
  },
});

//make this component available to the app
export default WorkExperience;
