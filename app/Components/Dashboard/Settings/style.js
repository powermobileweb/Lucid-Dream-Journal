import { StyleSheet,Platform } from "react-native";

import theme from "../../../Theme";

export default StyleSheet.create({
  firstViewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "8%",
    alignItems: "center",
    paddingRight: "5%"
  },

  headerText: {
    fontFamily: theme.FONT_SEMI_BOLD,
    color: "white",
    fontSize: 18
  },

  secondViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    paddingVertical: "5%"
  },

  numberText: {
    fontFamily: theme.FONT_SEMI_BOLD,
    fontSize: 30,
    color: "white"
  },

  stateText: {
    color: "white",
    fontSize: 12,
    letterSpacing: 0.5,
    opacity: 0.6
  },

  thirdViewContainer: {
    paddingVertical: "5%",
    paddingHorizontal: "10%"
  },

  rowViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: "5%"
  },

  plusImage: {
    height: 14,
    width: 14,
    tintColor: "#9a6af0"
  },

  rowTexts: {
    fontFamily: theme.FONT_SEMI_BOLD,
    color: "white",
    fontSize: 13,
    paddingHorizontal: "3%"
  },

  listingViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#7658be"
  },

  rightArrowImage: {
    height: 20,
    width: 20
  },

  listingText: {
    color: "white",
    letterSpacing: 0.5
  },

  //Gradient button

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    color: "#ffffff",
    width: "100%",
    padding:Platform.OS==='ios'? 10:15,
    borderRadius: 30,
    borderWidth: 0
  },
  text: {
    color: "#ffffff",
    fontFamily: theme.FONT_SEMI_BOLD,
    fontSize: 16,
    letterSpacing: 0.3,
    opacity: 0.9,
    textAlign: "center"
  }
});
