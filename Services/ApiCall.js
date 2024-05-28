import React from 'react';
// import { useGlobalSettings } from './MyGlobalSetting';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// const { base_url, svgUrl, serverUrl, imageUrl, reactUrl, reactServerUrl, unexpectedError } = useGlobalSettings();



var ApiCall = {
  async getAPICall(url)
  {

  // console.log('baseeeee',base_url,MyGlobalSetting);
    const response = await axios.get('https://inxgo.com/public/api/'+url);
    return response;
  },
  async postAPICall(url, formData) {
    try {
      const response = await axios.post("https://inxgo.com/public/api/" + url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      console.error("Error:", error);
      // You can handle the error here, throw it or return an error object as needed
      throw error;
    }
  }
  // async getAPICall(flag, url) {
  //   let temp_url = flag == 1 ? base_url : base_url_MSQL;
  //   var content_type = "application/json";
  //   if (flag == 1) {
  //     var token = await AsyncStorage.getItem("token");
  //     if (typeof token != "undefined") {
  //       token = JSON.parse(token);
  //     }
  //     //content_type='application/json';
  //     content_type = "application/x-www-form-urlencoded;token=" + token;
  //     var headers = {
  //       "Content-Type": content_type,
  //     };
  //   } else {
  //     var token = await AsyncStorage.getItem("Bearertoken");
  //     token = JSON.parse(token);
  //     content_type = "application/json";
  //     var headers = {
  //       "Content-Type": content_type,
  //       Authorization: token,
  //     };
  //   }
  //   // crossorigin: false,
  //   // mode: 'no-cors',
  //   try {
  //     let response = await fetch(temp_url + "/" + url, {
  //       method: "GET",
  //       headers: new Headers(headers),
  //     });
  //     return response.json();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  // async postAPICall(flag, url, data, Content_Type = "application/json") {
  //   var content_type = "application/json";
  //   if (flag == 1) {
  //     var token = await AsyncStorage.getItem("token");
  //     console.log(token);
  //     if (typeof token != "undefined") {
  //       token = JSON.parse(token);
  //     }
  //     content_type = "application/x-www-form-urlencoded;token=" + token;
  //     // content_type='application/json';
  //     var headers = {
  //       "Content-Type": content_type,
  //     };
  //   } else {
  //     var token = await AsyncStorage.getItem("Bearertoken");
  //     token = JSON.parse(token);
  //     content_type = "application/json";
  //     var headers = {
  //       "Content-Type": content_type,
  //       Authorization: token,
  //     };
  //   }
  //   let temp_url = flag == 1 ? base_url : base_url_MSQL;
  //   try {
  //     let response = await fetch(temp_url + "/" + url, {
  //       method: "POST",
  //       headers: new Headers(headers),
  //       body: JSON.stringify(data),
  //     });
  //     return response.json();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};

export default ApiCall;
