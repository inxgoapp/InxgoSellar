import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import Footer from "../Footer/Index";
import appStyle from "../../style/home";
import ApiCall from "../../Services/ApiCall";
import MyGlobleSetting from "../../Services/MyGlobleSetting";
import { NavigationContainer } from "@react-navigation/native";
import SvgUri from "react-native-svg-uri";
import { Regular, Bold, Medium } from "../../constants/fonts";
import LocationComponent from "../../components/MyLocation";
//const image_url = MyGlobleSetting.state.imageUrl;
const bell = require("../../assets/go.png");
const setting = require("../../assets/icons/setting.png");
const plumber = require("../../assets/icons/plumber.png");
const labour = require("../../assets/icons/labour.png");
const barber = require("../../assets/icons/barber.png");
const promtion = require("../../assets/icons/promtion.png");
const promotion1 = require("../../assets/icons/promotion1.png");
const search = require("../../assets/searching.png");

import { CommonImages } from "../../constants/Images";
import SellarCard from "../../components/SellarCard";
const Index = ({ navigation }) => {
  const [data, setData] = useState({});
  const [flag, setFlag] = useState(false);
  const [limitFlag, setLimitFlag] = useState(true);
  const [limit, setLimit] = useState(9);
  const [filteredData, setFilteredData] = useState({});
  const [searchInput, setSearchInput] = useState(null);

  const HandleSetState = (key, value) => {
    setState({ [key]: value });
  };

  const getdata = async () => {
    let response = await ApiCall.getAPICall(1, "skill");
    HandleSetState("data", response.data);
    HandleSetState("filteredData", response.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  const globalSearch = () => {
    let filteredData = data.filter((value) => {
      return value.Title?.toLowerCase().includes(searchInput?.toLowerCase());
    });
    setFilteredData(filteredData);
  };

  const handleChange = (event) => {
    setSearchInput(event.nativeEvent.text);
    globalSearch();
  };

  const HandleViewAll = async () => {
    setLimitFlag(!limitFlag);
    if (!limitFlag) {
      setLimit(data.length);
    } else {
      setLimit(9);
    }
  };

  const HandleSetImage = (image) => {
    let ret = null;
    if (image) {
      ret = image.replace("/Clients/Temp", "");
    }
    ret = image_url + ret;
    return { uri: ret };
  };

  return (
    <View style={{ flex: 1, paddingTop: 30, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView keyboardDismissMode={"on-drag"}>
          <View style={appStyle.cardContainer}>
            <View style={appStyle.leftContainer}>
              <LocationComponent />
            </View>

            <View style={appStyle.rightContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notification")}
              >
                <Image style={appStyle.image} source={bell} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={appStyle.cardContainer}>
            <View style={appStyle.searchSection}>
              <TextInput
                onChange={handleChange}
                style={appStyle.input}
                placeholder="Search here"
              />
              <Image style={appStyle.searchIcon} source={search} />
            </View>
          </View>
          <View style={appStyle.cardContainer}>
            <View style={appStyle.leftContainerRight}>
              <Text style={appStyle.rowLabelText}>My Services</Text>
            </View>

            <View style={appStyle.rightContainerSmall}>
              <TouchableOpacity onPress={()=>navigation.navigate('ViewAll')}>
                <Text style={appStyle.rowLabelTextRight}>View all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={appStyle.Myservicesall}>
            <TouchableOpacity onPress={HandleViewAll}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ marginLeft: 10, paddingHorizontal: 20 }}>
                  <Image
                    style={{ width: 60, height: 60 }}
                    source={CommonImages.plumber}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontFamily: Regular,
                      fontSize: 11,
                      fontWeight: "400",
                    }}
                  >
                    Plumber
                  </Text>
                </View>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{ width: 60, height: 60 }}
                    source={CommonImages.electrition}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontFamily: Regular,
                      fontSize: 11,
                      fontWeight: "400",
                    }}
                  >
                    Electrician
                  </Text>
                </View>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{ width: 60, height: 60 }}
                    source={CommonImages.manson}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontFamily: Regular,
                      fontSize: 11,
                      fontWeight: "400",
                    }}
                  >
                    Mason
                  </Text>
                </View>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{ width: 60, height: 60 }}
                    source={CommonImages.welder}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontFamily: Regular,
                      fontSize: 11,
                      fontWeight: "400",
                    }}
                  >
                    Welder
                  </Text>
                </View>
                <View>
                  <Image
                    style={{ width: 60, height: 60 }}
                    source={CommonImages.barber}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontFamily: Regular,
                      fontSize: 11,
                      fontWeight: "400",
                    }}
                  >
                    Barber
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* <View style={appStyle.categoryCardContainer}>
            {typeof filteredData !== "undefined" &&
              Object.keys(filteredData)
                .slice(0, limit)
                .map((val, i) => (
                  <View style={appStyle.category} key={i}>
                    <View style={appStyle.categoryDiv}>
                      {filteredData[val]["PhotoPath"].includes("svg") ? (
                        <SvgUri
                          width="80%"
                          height="80%"
                          style={appStyle.categoryImage}
                          source={HandleSetImage(
                            filteredData[val]["PhotoPath"]
                          )}
                        />
                      ) : (
                        <Image
                          style={appStyle.categoryImage}
                          source={HandleSetImage(
                            filteredData[val]["PhotoPath"]
                          )}
                        />
                      )}
                      <Text numberOfLines={1} style={appStyle.categoryText}>
                        {filteredData[val]["Title"]}
                      </Text>
                    </View>
                  </View>
                ))}
          </View> */}
          <View style={appStyle.CurrentJobView}>
            <Text style={appStyle.CurrentJobTitle}>Current Job</Text>
          </View>
          <SellarCard />
          <View style={appStyle.smallRounderContainer}>
            <View style={appStyle.leftContainerPromotion}>
              <Text
                style={{
                  width: "70%",
                  fontSize: 15,
                  color: "#000",
                  bottom: 9,
                  fontFamily: Medium,
                  fontWeight: "500",
                }}
              >
                Become our Partner and get service requests near you
              </Text>
              <Text style={appStyle.download}>Download Now</Text>
            </View>
            <View style={appStyle.rightContainerPromotion}>
              <Image style={appStyle.rightIconPromotion} source={promtion} />
            </View>
          </View>

          <View style={appStyle.space}></View>
        </ScrollView>
        <Footer flag={"Home"} navigation={navigation} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Index;
