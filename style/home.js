import { StyleSheet } from "react-native";
import { Colors } from "../constants/color";
import { Regular, Medium, Bold } from "../constants/fonts";

const homeStyles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 5,
  },
  leftContainer: {
    paddingLeft: "10%",
    width: "80%",
    height: 50,
  },
  leftContainerPromotion: {
    width: "65%",
    top: 10,
  },
  space: {
    height: 100,
  },
  rightContainerPromotion: {
    width: "30%",
  },
  rightIconPromotion: {
    width: 100,
    height: 100,
    flexDirection: "row",
  },
  leftContainerRight: {
    paddingLeft: "8%",
    width: "84%",
    height: 35,
  },
  rightContainer: {
    alignItems: "flex-end",
    width: "10%",
  },
  rightContainerSmall: {
    // alignItems: 'flex-end',
    width: "16%",
    // marginRight:100,
  },
  rowLabelText: {
    // flex: 1,
    flexDirection: "row",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: Medium,
  },
  Myservicesall: {
    flexDirection: "row",
    // backgroundColor: "red",
  },

  rowLabelTextRight: {
    fontSize: 12,
    flex: 1,
    top: 2,
    fontFamily: Regular,
    flexDirection: "row",
    fontWeight: "300",
  },
  image: {
    width: 20,
    height: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch", // or 'stretch'
  },
  inputSearch: {
    width: "80%",
    flexDirection: "row",
    backgroundColor: "#F4DEB5",
    borderColor: "#e9810e",
  },
  rightIcon: {
    width: "10%",
    height: 30,
    flexDirection: "row",
    // marginLeft:30,
    // alignContent: "center",
  },
  searchSection: {
    flex: 1,
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    // marginRight:"7%",
    // zIndex:1000,
    right: 30,
    // postion:'absolute'
  },
  input: {
    elevation: 3,
    width: "95%",
    flex: 1,
    marginLeft: "6%",
    height: 36,
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: "#FAFAFA",
    color: "#424242",
  },
  category: {
    width: "33%",
    height: 70,
  },
  categoryDiv: {
    // height: 70,
    // ellipsizeMode='tail'
    // marginLeft:'12%',
    // padding:5,
    // marginRight:"7%",
  },
  categoryImage: {
    width: 45,
    height: 40,
    backgroundColor: "#FAFAFA",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch", // or 'stretch'
  },
  categoryText: {
    fontSize: 11,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText2nd: {
    width: 58,
    fontSize: 11,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTextLast: {
    width: 75,
    fontSize: 11,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryCardContainer: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
    flexWrap: "wrap",
  },
  CurrentJobView: {
    marginTop: 13,
    paddingLeft: "8%",
    // backgroundColor: "red",
  },
  CurrentJobTitle: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: Medium,
    color: Colors.txtColor,
  },
  promtionTwo: {
    width: "90%",
    backgroundColor: "#FFF5E1CC",
    padding: 10,
    height: 129,
    // elevation: 2,
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 15,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  smallRounderContainer: {
    width: "90%",
    backgroundColor: "#FFC44D",
    padding: 10,
    height: 129,
    elevation: 2,
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 15,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  download: {
    backgroundColor: "#fff",
    height: 25,
    width: 80,

    // fontSize:8,
    borderRadius: 16,
    textAlignVertical: "center",
    textAlign: "center",
    fontFamily: Regular,
    fontSize: 8,
    fontWeight: "400",
  },
});
export default homeStyles;
