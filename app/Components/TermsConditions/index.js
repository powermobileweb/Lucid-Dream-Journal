import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  WebView,
  ImageBackground,
  BackHandler,
  DeviceEventEmitter,
  TouchableOpacity
} from "react-native";

import { Static_Images } from "../../Constants";
import theme from "../../Theme";

export default class TermsConditions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    DeviceEventEmitter.removeAllListeners("hardwareBackPress");
    DeviceEventEmitter.addListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  };

  componentWillUnmount = () => {
    DeviceEventEmitter.removeAllListeners("hardwareBackPress");
  };

  render() {
    return (
      <SafeAreaView>
        <ImageBackground
          source={Static_Images.image_bg}
          style={{ height: "100%", width: "100%" }}
          resizeMode="stretch"
        >
          <View
            style={{
              height: "10%",
              paddingHorizontal: "5%",
              paddingVertical: "10%"
            }}
          >
            <View style={{ flexDirection: "row", marginBottom: "5%" }}>
              <View style={{ flex: 0.2, alignItems: "flex-start" }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Image
                    source={Static_Images.image_back_arrow}
                    style={{ width: 30, height: 30 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.6, alignItems: "center" }}>
                <Text
                  style={{
                    color: "white",
                    fontFamily: theme.FONT_SEMI_BOLD,
                    fontSize: 18
                  }}
                >
                  Terms & Conditions
                </Text>
              </View>
              <View style={{ flex: 0.2, alignItems: "flex-end" }} />
            </View>
          </View>
          <View style={{ height: "90%" }}>
            <WebView source={{ uri: "https://en.wikipedia.org/wiki/Terms_of_service" }} />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
