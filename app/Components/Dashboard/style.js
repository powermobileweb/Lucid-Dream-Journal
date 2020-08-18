import { StyleSheet } from "react-native";

import theme from '../../Theme'

export default StyleSheet.create({

    container: {
        flex: 1,
    },

    image_bg:{
        width:"100%",
        height:"100%",  
    },

    icon_texts:{
        color:'white',
        fontSize:10,
        opacity: 0.8,
        fontFamily: theme.FONT_CURVED,
        letterSpacing:0.5
    },

    bottom_icons:{
        width: 24, 
        height: 24, 
        tintColor: "white",
        marginVertical: 5,
    },

    calendar_Img:{
        height: 25,
        width: 25,
    },

    text_topicTitle:{
        fontSize:24,
        color:'white',
        marginTop:'10%',
        fontFamily: theme.FONT_TEXT_BOLD,
        // letterSpacing:0.5,
    },

    text_date_time:{
        fontSize:12, 
        opacity: 0.8, 
        color: "white", 
        marginRight: "2%"
    },

    componentContainer:{
        flex:1,
        flexDirection:'row',
        marginTop:'5%',
        borderRadius:13,
        borderWidth:1.5 ,
        borderColor:"#715cd2",
        justifyContent:'space-between',
    },

    image_lock:{
        height: 40,
        width: 40,
        borderRadius:8
    },

    component_text:{
        // flex:1,
        fontSize:16,
        //letterSpacing:0.5,
        color:'white',
        fontFamily:theme.FONT_SEMI_BOLD
    },

    component_detailText:{
        // flex:1,
        color:'white',
        lineHeight:20,
        opacity:0.8,
        // marginBottom:'2%',
        fontFamily:theme.FONT_REGULAR,
        fontSize:13,
        letterSpacing:0.5
    },

    image_close:{
        position:'absolute',
        top: 5,
        right: 5,
        height: 12,
        width: 12,
        opacity:0.6
    },

    modal: {
        //elevation:100
    },

    modal4: {
        height: '80%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    btn: {
        margin: 10,
        backgroundColor: "#3B5998",
        color: "white",
        padding: 10
      },
    
    btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
    },

    blurView: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    },

    //rating tab
    subView:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:theme.PRIMARY_COLOR,
        borderRadius:30,
        marginHorizontal: 10,
        paddingVertical:5
    },
    numbers:{
        color:'white',
        fontFamily: theme.FONT_MEDIUM,
        marginRight: 3,
    }
});
  