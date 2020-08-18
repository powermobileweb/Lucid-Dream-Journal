import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Image,
  BackHandler,
  DeviceEventEmitter,
  Platform
} from "react-native";

import theme from "../../Theme";
import GradientButton from "../GradientButton";

import { Static_Images } from "../../Constants";

export default class IntroScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondIntro: false
    };
  }

  componentDidMount = () => {
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
    DeviceEventEmitter.addListener('hardwareBackPress', () => {
      BackHandler.exitApp();
      return true;
    })
  }

  componentWillUnmount = () => {
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
    //this.backPressSubscriptions.clear()
  }

  _onSkip = () => {
    this.setState({ secondIntro: true });
  };

  render() {
    if (this.state.secondIntro === true) {
      //Real Application
      return (

        <ImageBackground
          source={Static_Images.image_intro2_bg}
          style={styles.img_bg}
          resizeMode={Platform.OS==='ios'?"": 'stretch'}
        >
          <SafeAreaView style={{flex:1}}>
            <StatusBar translucent={true} backgroundColor={"transparent"} />
            <View style={{ flex: 1, padding: "8%", alignItems: "center" }}>
              <View style={{ bottom: "8%", position: "absolute" }}>
                <View>
                  <Text
                    allowFontScaling={true}
                    style={{
                      color: "white",
                      fontFamily: theme.FONT_MEDIUM,
                      lineHeight: 20,
                      opacity: 0.4
                    }}
                  >
                    Consistency is the key to success. Start with small simple
                    steps and pretty soon you'll uncover the real power of your
                    dreams.
                  </Text>
                  <View style={{ marginTop: "3%" }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "5%"
                      }}
                    >
                      <View>
                        <Image
                          source={Static_Images.image_plus}
                          style={{
                            width: 15,
                            height: 15,
                            tintColor: theme.PRIMARY_COLOR
                          }}
                        />
                      </View>
                      <View style={{ marginStart: "5%" }}>
                        <Text
                          style={{
                            color: "white",
                            fontFamily: theme.FONT_SEMI_BOLD
                          }}
                        >
                          Get better at problem solving
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "5%"
                      }}
                    >
                      <View>
                        <Image
                          source={Static_Images.image_plus}
                          style={{
                            width: 15,
                            height: 15,
                            tintColor: theme.PRIMARY_COLOR
                          }}
                        />
                      </View>
                      <View style={{ marginStart: "5%" }}>
                        <Text
                          style={{
                            color: "white",
                            fontFamily: theme.FONT_SEMI_BOLD
                          }}
                        >
                          Overcome anxiety and reduce stress
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "5%"
                      }}
                    >
                      <View>
                        <Image
                          source={Static_Images.image_plus}
                          style={{
                            width: 15,
                            height: 15,
                            tintColor: theme.PRIMARY_COLOR
                          }}
                        />
                      </View>
                      <View style={{ marginStart: "5%" }}>
                        <Text
                          style={{
                            color: "white",
                            fontFamily: theme.FONT_SEMI_BOLD
                          }}
                        >
                          Be more creative
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "5%"
                      }}
                    >
                      <View>
                        <Image
                          source={Static_Images.image_plus}
                          style={{
                            width: 15,
                            height: 15,
                            tintColor: theme.PRIMARY_COLOR
                          }}
                        />
                      </View>
                      <View style={{ marginStart: "5%" }}>
                        <Text
                          style={{
                            color: "white",
                            fontFamily: theme.FONT_SEMI_BOLD
                          }}
                        >
                          Control dreams with lucid dreaming
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%", marginTop: "12%" }}>
                  <GradientButton
                    style={{ width: "100%" }}
                    title="Let's start"
                    customClick={() =>
                      this.props.navigation.navigate("Dashboard")
                      //this.setState({ secondIntro: true })
                    }
                  />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      );
    } else {
      return (

        <ImageBackground
          source={Static_Images.image_intro_bg}
          style={[styles.img_bg,{backgroundColor:"#413298"}]}
          resizeMode={Platform.OS==='ios'?"": 'stretch'}
        >
          <SafeAreaView style={{flex:1}}>
            <StatusBar translucent={true} backgroundColor={"transparent"} />
            <View style={{ flex: 1, padding: "8%", alignItems: "center" }}>
              <View style={{ bottom: "8%", position: "absolute" }}>
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 20,
                      fontFamily: theme.FONT_DISPLAY_BOLD,
                      letterSpacing: 0.5,
                      marginVertical: "5%"
                    }}
                  >
                    {" "}
                    Lucid dream journal{" "}
                  </Text>
                  <Text
                    allowFontScaling={true}
                    style={{
                      color: "white",
                      fontFamily: theme.FONT_MEDIUM,
                      lineHeight: 20,
                      opacity: 0.4,
                      marginBottom: "10%"
                    }}
                  >
                    Analyzing your dreams is a great way to gain better self
                    knowledge, but the benefits of dream journaling don't stop
                    there.
                  </Text>
                </View>
                <View style={{ width: "100%" }}>
                  <GradientButton
                    style={{ width: "100%" }}
                    title="Continue"
                    customClick={() =>
                      //this.props.navigation.navigate("Dashboard")
                      this.setState({ secondIntro: true })
                    }
                  />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.PRIMARY_COLOR
  },

  img_bg: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
});