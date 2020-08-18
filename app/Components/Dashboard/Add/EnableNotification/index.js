import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Platform, Dimensions } from "react-native";

import { Static_Images } from "../../../../Constants";
import GradientButton from "../../../GradientButton";
import theme from "../../../../Theme";
import LinearGradient from 'react-native-linear-gradient';


const { width, height } = Dimensions.get('window');

const isIphoneX =
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (height === 812 || width === 812);


export default class EnableNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staticText1: "Turn on notifications so we can give you a nudge"
    };
  }

  render() {
    return (
      <ImageBackground
        source={Static_Images.image_bg}
        style={{ height: "100%", width: "100%" }}
      >
        <View
          style={{ flex: 1,}}
        >
          <LinearGradient 
               colors={['#6446c5', '#543aab']}
            style={{
              backgroundColor: "#6549bc",
              borderRadius: 10,
              alignItems: "center",
              paddingHorizontal: "5%",
              paddingVertical:'10%',
              margin:'8%',
              bottom:'20%',
              position:'absolute',
              alignSelf:'center'
            }}
          >
            <View style={{ paddingHorizontal: "5%" }}>
              <Text
                style={{
                  fontFamily: theme.FONT_MEDIUM,
                  fontSize: 16,
                  color: "white",
                  textAlign: "center",
                  letterSpacing: 0.5
                }}
              >
                {this.state.staticText1}
              </Text>
            </View>

            <View style={{ width:'80%', paddingVertical: "10%" }}>
              <GradientButton
                title="Enable Notifications"
                // customClick={() =>
                //      this.props.navigation.navigate("EnableNotification")
                // }
              />
            </View>

            <View style={{}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Dashboard')}>
                <Text
                  style={{
                    fontFamily: theme.FONT_MEDIUM,
                    color: "#7e65ea",
                    fontSize: 16,
                    letterSpacing:0.5,
                  }}
                >
                  Not now
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    );
  }
}
