
import { StyleSheet } from "react-native";

const appStyle =StyleSheet.create({
      appButtonContainer: {
        width:"90%",
        alignSelf: 'center',
        backgroundColor: "#FFC44D",
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop:10,
      },
      inputSearch: {
        width: "100%",
       backgroundColor:'#FAFAFA',
        zIndex: 0, // Ensure border has z-index of 0
      },
      countrySearch: {
        width: "100%",
       backgroundColor:'#fff',
        zIndex: 0, // Ensure border has z-index of 0
      },
      arrow_back:
      {
        top:3,
        marginRight:10,
      } ,
      welcome:
      {
        marginTop:50,
        fontSize:20,
        marginLeft:20,
        flexDirection: 'row',
        // alignSelf: "center",
        // justifyContent: 'center',
        // alignItems: 'center',
      },
      welcomeText:
      {
        fontWeight: "bold",
        marginBottom:20,  
      },
      image:
      {
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        height:130,
        width:130,
        borderRadius: 65, 
      },
      aboutimage:
      {
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        height:130,
        borderRadius: 65, 
      },
     

})
export default appStyle;
