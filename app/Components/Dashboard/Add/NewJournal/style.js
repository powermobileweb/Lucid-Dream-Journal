import { StyleSheet ,Platform} from "react-native";

import theme from '../../../../Theme';

export default StyleSheet.create({
     itemContainer: {
          borderWidth:1,
          borderRadius: 35,
          borderColor: "#886cca",
          marginVertical: '3%',
          padding: '4%'
     },

     introText: {
          marginHorizontal: '20%',
          textAlign: 'center',
          color: 'white',
          opacity:0.6,
          lineHeight: 25,
          fontFamily:theme.FONT_REGULAR,
          letterSpacing:0.5
     },

     titleText: {
          color: 'white',
          fontSize: 30,
          fontFamily:theme.FONT_LIGHT,
          letterSpacing:0.5,
     },

     viewContainer1: {
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'space-between'
     },

     viewContainer2: {
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center'
     },

     containerItemText: {
          color: 'white',
          fontSize: 14,
          fontFamily: theme.FONT_SEMI_BOLD,
     },


     //LUCIDITY CHECK SCREEN
     lucidViewContainer: {
          flex: 1,
          width: '70%',
          paddingVertical: '28%',
          borderRadius: 90,
          borderWidth: 2,
          borderColor: theme.PRIMARY_COLOR,
          margin: '3%'
     },

     lucidText: {
          color: 'white',
          textAlign:'center',
          // opacity: 0.9,
          fontSize: 24,
          fontFamily: theme.FONT_DISPLAY_BOLD,
          letterSpacing:0.5
     },

     //DESCRIPTION TEXT
     addDescriptionText: {
          fontSize: 26,
          fontFamily: theme.FONT_SEMI_BOLD,
          color: 'white'
     },

     descriptionTitleText:{
          color:'white',
          fontFamily:theme.FONT_SEMI_BOLD,
     },

     titleTextInput:{
          borderRadius:12,
          borderWidth:1,
          borderColor: "#886cca",
          paddingHorizontal: 20,
          color:'white',
          lineHeight:20,
          fontFamily:theme.FONT_MEDIUM,
          letterSpacing:Platform.OS==='ios'?0: 0.5,
          fontSize:16
     },

     textInputContainer:{
          paddingTop:'2%',
          paddingBottom:'3%'
     },
})