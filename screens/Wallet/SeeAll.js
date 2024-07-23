//import liraries
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import { CommonImages } from "../../constants/Images";
import profile from "../../style/profile";
import {
 responsiveHeight,
 responsiveWidth,
} from "react-native-responsive-dimensions";
import CustomButton from "../../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiCall from "../../Services/ApiCall";

import { Bold, Regular } from "../../constants/fonts";
import CustomView from "../../components/CustomView";
import customImage from '../../assets/Frame.png';
import customMoneyIcon from '../../assets/Money.png';
import { moderateScale } from "react-native-size-matters";
import { ScrollView } from "react-native-gesture-handler";
// create a component
const SeeAll = ({navigation}) => {
  const [generalData, setGeneralData] = useState([]);
  const [transactionHistory, setTransactionHistory] = useState(dummyTransactionHistory);

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
        const formData = new FormData(); // Creates an empty FormData object
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
         cashText: "Cash",
         moneyIconSource: require('../../assets/Credit card.png'),
         amountText: "$ 20",
       },
       {
         text: "Mark Tuan",
         cashText: "Cash",
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
         cashText: "Cash",
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
   
    ];
   
    return (
       <View style={styles.container}>
         <View style={profile.welcome}>
           <TouchableOpacity onPress={()=>navigation.navigate('Credit')}>
             <Image style={profile.arrow_back} source={CommonImages.arrow} />
           </TouchableOpacity>
           <Text style={profile.welcomeText}>Transaction History</Text>
         </View>
        
         <View
           style={{
             paddingHorizontal: 20,
             marginTop: 0,
             flexDirection: "row",
             justifyContent: "space-between",
           }}
         >
           
           
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
       marginLeft: 80,
       paddingVertical: 5,
       height: 30,
       marginTop: 8,
    },
   });
   
   // Make this component available to the app
   export default SeeAll;
   