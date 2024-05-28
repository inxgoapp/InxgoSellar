//import libraries
import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList, SafeAreaView } from "react-native";
import { Regular } from "../../constants/fonts";
import appStyle from "../../style/home";
import axios from 'axios';
import SvgUri from 'react-native-svg-uri';
const setting = require("../../assets/icons/setting.png");
const search = require("../../assets/searching.png");
import { useRoute } from '@react-navigation/native';
import CustomViewAll from "../../components/CustomViewAll";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Footer from '../Footer/Index';
import ApiCall from "../../Services/ApiCall.js";

// create a component
const ViewAll = ({navigation}) => {
    const route = useRoute();
  // Accessing the passed array from ScreenA
 //  const location = route.params.location;
   const location = route.params?.location || 'default location'; // Provide a default value or handle undefined

    const ViewAllHistory = [
        {
          //  image:require('../../assets/Networking.png'),
            textContent :"Cyber Security"
        },
        {
          //  imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           // imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        },
        {
          //  imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           // imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
           // imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           // imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
           // imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           // imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
           // imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           // imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
           // imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
          //  imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
           // imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           // imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
           // imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           // imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
          //  imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           // imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
          //  imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           // imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
           // imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           // imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
          //  imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
          //  imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
          //  imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           // imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
           // imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           // imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
           // imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
          //  imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
           // imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           // imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
            //imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           // imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
            //imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           // imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
          //  imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           // imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
           // imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
          //  imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
           // imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
          //  imageSource:require('../../assets/react developer.png'),
            textContent:"React Developer"
        }, {
           // imageSource:require('../../assets/Networking.png'),
            textContent :"Networking"
        },
        {
           //image_path:('https://inxgo.com/public/api/skills'),
            textContent:"React Developer"
        },
    ];
    
    const [data, setData] = useState([]);

    const [searchInput, setSearchInput] = useState(null);

    const [filteredData, setFilteredData] = useState(ViewAllHistory);
    const [groupedItems, setGroupedItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response=await ApiCall.getAPICall('skills');
                const processedData = response.data.map(item => ({
                    image_path: item.image_path,
                    textContent: item.title,
                    id: item.id
                }));
                setData(processedData);
                setFilteredData(processedData);
               
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        const newGroupedItems = groupItems(filteredData);
        setGroupedItems(newGroupedItems);
    }, [filteredData]);
    const handleChange = (text) => {
        setSearchInput(text);
        const filtered = data.filter(item =>
            item.textContent.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(filtered);
    };

    
    // Function to group items into chunks of three
    const groupItems = (items) => {
        const chunkSize = 3;
        const chunks = [];
        for (let i = 0; i < items.length; i += chunkSize) {
            chunks.push(items.slice(i, i + chunkSize));
        }
        return chunks;
    };


    return (
        <SafeAreaView style={{flex:1}}>

       
        <View style={styles.container}>

            <View
                style={{
                    paddingHorizontal: 20,
                    marginTop: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width:responsiveWidth(100)
                }}
            >
                <Text style={{ fontSize:20, fontWeight: "600", fontFamily: Regular }}>
                Let’s Find You the {"\n"}Right Provider!        
                </Text>
                <TouchableOpacity>
                    <Image source ={require('../../assets/send.png')}/>
                </TouchableOpacity>
            </View>
            <View style={appStyle.cardContainer}>
                <View style={appStyle.searchSection}>
                <TextInput
    onChangeText={handleChange} // Ensure this is correctly set
    style={appStyle.input}
    placeholder="Search here"
    value={searchInput}
/>
                    <Image style={{ right:30,resizeMode:'contain'}} source={search} />
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
                <Text style={{ fontSize: 15, fontWeight: "700", fontFamily: Regular }}>
                    Categories        
                </Text>
                <TouchableOpacity >
                    <Text style={{ fontSize: 12, color: "black", fontFamily: Regular }}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList  
                    data={groupedItems}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <CustomViewAll items={item} location={location}/>
                    )}
                />

                    <Footer flag={"Home"} navigation={navigation} />

        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
    },
});

export default ViewAll;