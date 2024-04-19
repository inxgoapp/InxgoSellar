import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  About,
  Notification,
  TermsConditions,
  CommunityGuidelines,
  Country,
  Menu,
  Home,
  Messages,
  Login,
  Start,
  StartLogin,
  SignUp,
  Forget,
  Profile,
  Wallet,
  Payment,
  PaymentAdd,
  Booking,
  Detail,
  SplashScreen,
  Onboarding,
  IntroScreen01,
  IntroScreen02,
  LogInScreen,
  Pending,
  Application,
  General,
  ForgotPswd,
  NewPassword,
  LocationBottomSheet,
  RateSupplierBSheet,
  Tracker,
  CompleteDetails,
  Credit,
  AddCredit,
  YourCountry,
  SeeAll,
} from "../screens";
import { component, Alert, View, StyleSheet, Button } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Accepted from "../screens/Booking/Accepted";
import EditProfile from "../screens/Profile/EditProfile";

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const asyncFetchDailyData = async () => {
      var isLogin = await AsyncStorage.getItem("isLogin");
      if (isLogin) {
        await setUsers(true);
      } else {
        await setUsers(false);
      }
    };
    asyncFetchDailyData();
  }, [users]);

  const options = { headerShown: false, tabBarStyle: { display: "none" } };

  return (
    <Tab.Navigator
      initialRouteName={!users ? "Home" : "SplashScreen"}
      screenOptions={options}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="Home" component={Home} />

      <Tab.Screen name="StartLogin" component={StartLogin} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Forget" component={Forget} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="PaymentAdd" component={PaymentAdd} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Detail" component={Detail} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Country" component={Country} />
      <Tab.Screen name="CommunityGuidelines" component={CommunityGuidelines} />
      <Tab.Screen name="TermsConditions" component={TermsConditions} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="SplashScreen" component={SplashScreen} />
      <Tab.Screen name="LocationBottomSheet" component={LocationBottomSheet} />
      <Tab.Screen name="RateSupplierBSheet" component={RateSupplierBSheet} />
      <Tab.Screen name="Accepted" component={Accepted} />
      <Tab.Screen name="Tracker" component={Tracker} />

      <Tab.Screen name="Onboarding1" component={IntroScreen01} />
      <Tab.Screen name="Onboarding2" component={IntroScreen02} />
      <Tab.Screen name="Onboarding3" component={LogInScreen} />
      <Tab.Screen name="Pending" component={Pending} />
      <Tab.Screen name="Application" component={Application} />
      <Tab.Screen name="General" component={General} />
      <Tab.Screen name="ForgotPswd" component={ForgotPswd} />
      <Tab.Screen name="NewPassword" component={NewPassword} />
      <Tab.Screen name="CompleteDetails" component={CompleteDetails} />
      <Tab.Screen name="EditProfile" component={EditProfile} />
      <Tab.Screen name="Credit" component={Credit} />
      <Tab.Screen name="AddCredit" component={AddCredit} />

      <Tab.Screen name="YourCountry" component={YourCountry} />
    </Tab.Navigator>
  );
};

export default Tabs;
