import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import { CommonImages } from "../../constants/Images";
import profile from "../../style/profile";
import {
 responsiveHeight,
 responsiveWidth,
} from "react-native-responsive-dimensions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../../components/CustomButton";
import { Bold, Regular } from "../../constants/fonts";
import CustomView from "../../components/CustomView";
import customImage from '../../assets/Frame.png';
import customMoneyIcon from '../../assets/Money.png';
import { moderateScale } from "react-native-size-matters";
import { ScrollView } from "react-native-gesture-handler";
import Footer from "../Footer/Index";
import ApiCall from "../../Services/ApiCall";

// Create a component
const Credit = ({navigation}) => {
 const dummyTransactionHistory = [
    {
      text: "Mark Tuan",
      cashText: "Cash",
      moneyIconSource: customMoneyIcon,
      amountText: "$ 40",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit.png'),
      amountText: "$ 120",
    },
    {
      text: "Mark Tuan",
      cashText: "Cash",
      moneyIconSource: customMoneyIcon,
      amountText: "$ 40",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa ",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },

 ];
const [transactionHistory, setTransactionHistory] = useState(dummyTransactionHistory);
const [generalData, setGeneralData] = useState([]);
    useEffect(() => {
    const fetchData = async () => {
        try {
          var user_id='';
        await AsyncStorage.getItem('userId')
        .then((userId) => {
          user_id=userId;
        })
        .catch((error) => {
        // Handle errors
        console.error('Error retrieving userId:', error);
        });
        const formData = new FormData(); // Creates an empty FormData objects
        formData.append("seller_id", user_id?user_id:5);//uses ternary operator  (condition? valueIfTrue : valueIfFalse)
        formData.append("api", true);//Adds data to the form. Here, it adds "seller_id" and "api".
        let response=await ApiCall.postAPICall('wallet/seller',formData);//A hypothetical function that makes a POST request to the server. It takes two arguments: the endpoint URL and the form data.
        console.log('>>>>>>>',response.data.data[0]);
        let maintenanceSum = 0;
        let name = 'Jane Doe';
        let currency='$';
        const processedData = response.data.data.map(item => {
          // Format date using toLocaleDateString
          const formattedDate = new Date(item.created_at).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          });
          if (item.buyer_amount) {
            maintenanceSum += parseFloat(item.buyer_amount); // Assuming amountText is a number
          }
          name=item.seller.name;
          currency=item.currency.toUpperCase();
          const formattedMonth = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
          return {
            text: item.seller.name,
            amountText: item.buyer_amount,
            cashText: "Cash",
            date: formattedMonth,
            moneyIconSource: customMoneyIcon,
            skills: item.seller.users_skills.map(infoItem => infoItem.skills.title).join(', ')
          };
        });
        setGeneralData({'name':name,'sum':maintenanceSum,'currency':currency})

        console.log('processedData',processedData,maintenanceSum);
        setTransactionHistory(processedData);
           
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
  }, []);



 return (
    <View style={styles.container}>
      <View style={profile.welcome}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Image style={profile.arrow_back} source={CommonImages.arrow} />
        </TouchableOpacity>
        <Text style={profile.welcomeText}>My Wallet</Text>
      </View>
      <View
        style={{
          backgroundColor: "#FFC44D",
          height: responsiveHeight(25),
          width: responsiveWidth(90),
          marginLeft: 20,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height:responsiveHeight(5),
            paddingHorizontal: 20,
            //backgroundColor:'brown'
          }}
        >
          <Text style={{ marginTop:moderateScale(10), fontSize: 18, fontFamily: Regular }}>
            {generalData.name?generalData.name:'Jane Doe'}
          </Text>
          <Image
            source={require("../../assets/Symbols.png")}
            style={{ right: 10 }}
          />
        </View>
        <View style={{ paddingHorizontal: 20,height:responsiveHeight(7) }}>
          <Text>****_****_****_**23</Text>
        </View>
        <View style={{  paddingHorizontal: 18,height:responsiveHeight(5)}}>
          <Text style={{ fontSize: 16,fontFamily:Regular }}> Balance:</Text>
        </View>
        <View style={{ paddingHorizontal: 20, flexDirection: "row",height:responsiveHeight(8),justifyContent:'space-between' ,width:responsiveWidth(90)}}>
          <Text style={{ fontSize: 32, fontWeight: "600",fontFamily:Bold,}}>{generalData.currency?generalData.currency:'$'} {generalData.sum?generalData.sum:'0'}</Text>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Payment")}>
            <Text style={{fontFamily:Regular}}>Add Credit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          width:responsiveWidth(100)
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "600", fontFamily: Regular }}>
          Transaction History
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('SeeAll')}>
          <Text style={{ fontSize: 15, color: "#FFC44D", fontFamily: Regular }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={transactionHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CustomView
            imageSource={customImage}
            text={item.text}
            cashText={item.cashText}
            moneyIconSource={item.moneyIconSource}
            amountText={item.amountText}
            skills={item.skills}
            date={item.date}
          />
        )}
      />
       <Footer flag={"Wallet"} navigation={navigation} />
    </View>
 );
};

// Define your styles
const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "#fafafa",
 },
 btn: {
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 10,
   // marginLeft: 80,
   // paddingVertical: 5,
    height:responsiveHeight(5),
   // marginTop: 8,
    justifyContent:'center'
 },
});

// Make this component available to the app
export default Credit;
