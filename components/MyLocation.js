import React, { useState, useEffect } from "react";
import { View, Text, PermissionsAndroid, Button, Linking } from "react-native";
import Geolocation from "@react-native-community/geolocation";

const MyLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "This app needs access to your location.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              setLocation({ latitude, longitude });
              // Fetch the address using the mock geocoding service
              const address = await fetchAddressFromGeocodingService(
                latitude,
                longitude
              );
              setAddress(address);
            },
            (error) => {
              setErrorMessage(error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
        } else {
          setErrorMessage("Location permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    };

    getLocation();

    return () => {
      Geolocation.stopObserving();
    };
  }, []);

  const openAppSettings = () => {
    Linking.openSettings();
  };

  const formatLocation = () => {
    if (address) {
      return address;
    } else if (location) {
      return `Latitude: ${location.latitude.toFixed(
        2
      )}, Longitude: ${location.longitude.toFixed(2)}`;
    } else {
      return "Fetching location...";
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {errorMessage ? (
        <>
          <Text>{errorMessage}</Text>
          <Button title="Open Settings" onPress={openAppSettings} />
        </>
      ) : (
        <Text>{formatLocation()}</Text>
      )}
    </View>
  );
};

// Placeholder for the geocoding service function
const fetchAddressFromGeocodingService = (latitude, longitude) => {
  return new Promise((resolve) => {
    // Simulate a delay to mimic an actual API call
    setTimeout(() => {
      // For demonstration purposes, we'll return a simple formatted address
      // In a real application, this would be replaced with an actual API call
      resolve(`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`);
    }, 1000);
  });
};

export default MyLocation;
