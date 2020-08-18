import { StyleSheet } from "react-native";

import theme from '../../../../Theme'

export default StyleSheet.create({

     staticText1:{
          textAlign:'center',
          fontFamily:theme.FONT_DISPLAY_BOLD,
          fontSize:24,
          color:'white',
          letterSpacing:0.5,
     },

     staticText2:{
          textAlign:'center',
          fontFamily:theme.FONT_SEMI_BOLD,
          fontSize:16,
          color:'white'
     },

     staticText3:{
          textAlign:'center',
          fontFamily:theme.FONT_REGULAR,
          fontSize:16,
          color:'white',
          opacity:0.5,
          letterSpacing:0.5,
     }

})