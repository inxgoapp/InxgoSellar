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
import * as ImagePicker from "expo-image-picker";         
import upload_file from "../../assets/upload_file.png";
import CustomButton from "../../components/CustomButton";


// create a component
const WorkExperience = ({ navigation }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [image, setImage] = useState(null);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const showStartDatePickerModal = () => {
    setShowStartDatePicker(true);
  };

  const showEndDatePickerModal = () => {
    setShowEndDatePicker(true);
  };

  const onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };

  const onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    setEndDate(currentDate);
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
  const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!pickerResult.cancelled) {
      setImage(pickerResult.assets[0].uri);
    }
  };

  return (
    <ScrollView keyboardDismissMode={'on-drag'} style={{height:'100%',backgroundColor:'white'}}>
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
        <Text style={{ fontSize: 20, fontFamily: Medium, right:50 }}>
          Work Experience
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={require("../../assets/deleted.png")} />
        </TouchableOpacity>
      </View>
      <View style={{ height:responsiveHeight(15),justifyContent:'center'}}>
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
      <View style={{ height:responsiveHeight(15),justifyContent:'center'}}>
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
                   //justifyContent:'center',
                    flexDirection: "row",
                    justifyContent: "space-between",
                    // width:responsiveWidth(100),
                    height:responsiveHeight(3),
                   
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
            <View style={{ flexDirection:"row",height:responsiveHeight(8)}}>
        <TextInput
          placeholder="Start Date"
          keyboardType="numeric"
          editable={false}
          style={{
            marginHorizontal: 20,
            //   borderWidth: 1,
            height: 50,
            top: 10,
            // borderColor: "#FFC44D",
            backgroundColor: "#FAFAFA",

            paddingHorizontal: 20,
            width: responsiveWidth(42),
          }}
          value={startDate.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
        ></TextInput>
        <TouchableOpacity  onPress={showStartDatePickerModal} 
                >
        <Image source={require("../../assets/DownArrow.png")}  style={{top:25,position:'absolute',right:30}}/>

        </TouchableOpacity>
        {showStartDatePicker  && (
                <DateTimePicker
                  value={startDate}
                  mode="date"
                  display="default"
                  onChange={onChangeStartDate}
                />
              )}
         <TextInput
          placeholder="End Date"
          //keyboardType="numeric"
          editable={false}
          style={{
            // marginHorizontal: 20,
            //   borderWidth: 1,
            height: 50,
            top: 10,
            // borderColor: "#FFC44D",
            backgroundColor: "#FAFAFA",

            paddingHorizontal: 20,
            width: responsiveWidth(42),
          }}
          value={endDate.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
        ></TextInput>
        <TouchableOpacity onPress={showEndDatePickerModal} >
        <Image source={require("../../assets/DownArrow.png")}  style={{top:25,position:'absolute',right:10}}/>    

        </TouchableOpacity>
        {showEndDatePicker  && (
                <DateTimePicker
                  value={endDate}
                  mode="date"
                  display="default"
                  onChange={onChangeEndDate}
                />
              )}
      </View>
      <View style={{flexDirection:'row', height:responsiveHeight(3),alignItems:'center',}}>
      <Text style={{fontSize:12,fontFamily:Regular,paddingHorizontal:20}}>I am currently work here</Text>
      <Image source={require("../../assets/toggle_off.png")}/>

      </View>
      <View style={{height:responsiveHeight(25),justifyContent:'center'}}>
        <Text style={{ marginHorizontal: 20, fontFamily: Regular }}>
          Description (Optional)
        </Text>
        <TextInput
          placeholder=""
          editable={false}

         // keyboardType="numeric"
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
      <View style={{ height:responsiveHeight(25),justifyContent:'center' }}>
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
        
        <TouchableOpacity  onPress={openImagePickerAsync} activeOpacity={0.5}>
        <Image
          source={require("../../assets/upload_file.png")}
         // source={image ? { uri: image } : upload_file}
         style={{ position: "absolute",bottom:45, left: 190 }}
         // style={{ height:20,width:20,left: 190 ,bottom:45 }}

        />
        </TouchableOpacity>
      
        <Text style={{fontFamily:Regular,fontSize:12,textAlign:'center',bottom:40}}>Browse Files</Text> 
      </View>
      
      <View style={{height:responsiveHeight(15),justifyContent:'center' }}>
        <Text style={{ marginHorizontal: 20, fontFamily: Regular }}>
        Key Skills
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
      <View style={{height:responsiveHeight(5),width:responsiveWidth(80),marginLeft:20,flexDirection:"row"}}>
        <Text style={{borderWidth:1,borderColor:'#C4C4C4',borderRadius:20,paddingVertical:10,paddingHorizontal:20}}>Plumbing Systems Installation </Text>
        <Image source={require("../../assets/closed.png")} style={{top:14,right:20}}/>

      </View>
      <View
        style={{ height: responsiveHeight(20), justifyContent:'center'}}
      >
        <CustomButton
          title={"Save"}
          color="#FFC44D"
          width={responsiveWidth(80)}
          onPress={() => navigation.navigate("WorkExperience")}
        />
      </View>
      {/* <View style={{flexDirection:"row",backgroundColor:'pink',borderWidth:1,paddingHorizontal:20,height:30}}>
        <Text style={{}}>Pipefitting and Welding</Text>
        <Image source={require("../../assets/Crossed.png")}/>
      </View> */}
    </View>
    </ScrollView>
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
