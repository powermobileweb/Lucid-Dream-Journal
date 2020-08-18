import { StyleSheet ,Platform,Dimensions} from "react-native";

const { width, height } = Dimensions.get('window');

const isIphoneX =
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (height === 812 || width === 812);

import theme from "../../Theme";

export default StyleSheet.create({
  container: {
    paddingTop: "35%",
    paddingHorizontal: "8%"
  },

  titleText: {
    fontFamily: theme.FONT_DISPLAY_BOLD,
    color: "white",
    fontSize: 24,
    paddingHorizontal: "5%"
  },

  plusImage: {
    height: 14,
    width: 14,
    tintColor: "#9a6af0",
    marginRight: "3%"
  },

  simpleText: {
    color: "white",
    fontFamily: theme.FONT_SEMI_BOLD,
    fontSize: 14
  },

  privacyText: {
    fontFamily: theme.FONT_REGULAR,
    color: "white",
    textAlign: "center",
    opacity: 0.5,
    fontSize: 12
  },

  //Modal Style
  modal: {
    justifyContent: "center",
    alignItems: "center"
  },

  modal3: {
    height:isIphoneX ? "45%" : "55%",
    width: "80%",
    borderRadius: 10
  },

  text: {
    color: "black",
    fontSize: 22
  }
});
