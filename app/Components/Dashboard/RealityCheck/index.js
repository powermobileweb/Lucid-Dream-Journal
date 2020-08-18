import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  // Slider,
  Dimensions,
} from "react-native";
import Switch from "react-native-switch-pro";
import { Slider } from "react-native-elements";
import DateTimePicker from "react-native-modal-datetime-picker";
import theme from "../../../Theme";
import { Static_Images } from "../../../Constants";

const  Screenwidth = Dimensions.get('window').width;

export default class RealityCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {

      distance: 2,
      minDistance: 0,
      maxDistance: 4,

      notification_value: false,
      silent_value: false,
      slider_value: 30,

      rangeLow:"",
      rangeHigh:"",


      isStartingTimePickerVisible: false,
      isEndingTimePickerVisible: false,
      currentTime: "",
      DefaultEndingTime:"",
      selectedStartingTime: "",
      selectedEndingTime: "",

      reality_check_text:
        "Analyzing your dreams is a great way to gain better self-knowledge, but the benefits of dream journaling don't stop there.",
      tick1: "Get better at problem solving",
      tick2: "Overcome anxiety and reduce stress",
      tick3: "Be more creative"
    };
  }

  componentDidMount = () => {
    let self = this;

    var hours = new Date().getHours(); //Current Hours
    var minutes = new Date().getMinutes(); //Current Minutes
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;

    self.setState({ currentTime: hours + ":" + minutes + " " + ampm , DefaultEndingTime : hours+1 + ":" + minutes + " " + ampm });
  };

  showStartingTimePicker = () => {
    this.setState({ isStartingTimePickerVisible: true });
  };

  showEndingTimePicker = () => {
    this.setState({ isEndingTimePickerVisible: true });
  };

  hideTimePicker = () => {
    this.setState({ isStartingTimePickerVisible: false, isEndingTimePickerVisible:false });
  };

  handleTimePicked = date => {
    this.hideTimePicker();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;

    this.setState({ selectedStartingTime: strTime });
  };

  handleEndingTimePicked = date => {
    this.hideTimePicker();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;

    this.setState({ selectedEndingTime: strTime });
  };

  render() {
    const { isEndingTimePickerVisible, isStartingTimePickerVisible, selectedStartingTime, selectedEndingTime, currentTime, DefaultEndingTime } = this.state;
    return (
      <ImageBackground
        source={Static_Images.image_reality_check}
        style={styles.img_bg}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, paddingTop: "70%", paddingBottom: "20%" }}>
            <View style={{ padding: "5%" }}>
              <View>
                <Text style={styles.text_title}> Reality Check </Text>
                <Text style={styles.text_desc}>
                  {this.state.reality_check_text}
                </Text>
              </View>

              <View>
                <View style={{ flexDirection: "row", marginVertical: 10 }}>
                  <Image
                    source={Static_Images.image_tick_circle}
                    style={{ width: 24, height: 24 }}
                  />
                  <Text style={styles.tick_circle_text}>
                    {this.state.tick1}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 10 }}>
                  <Image
                    source={Static_Images.image_tick_circle}
                    style={{ width: 24, height: 24 }}
                  />
                  <Text style={styles.tick_circle_text}>
                    {this.state.tick2}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 10 }}>
                  <Image
                    source={Static_Images.image_tick_circle}
                    style={{ width: 24, height: 24 }}
                  />
                  <Text style={styles.tick_circle_text}>
                    {this.state.tick3}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flex:1, marginTop:Platform.OS==='ios'?50:'1%' }}>
              <View
                style={{
                  flexDirection: "row",
                  borderTopWidth: 1,
                  borderColor: theme.PRIMARY_COLOR,
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginStart: "5%"
                }}
              >
                <View>
                  <Text
                    style={[
                      styles.tick_circle_text,
                      { fontFamily: theme.FONT_MEDIUM, marginLeft: 0 }
                    ]}
                  >
                    Reality check notifications
                  </Text>
                </View>
                <View style={{ padding: "5%" }}>
                  <Switch
                    width={58}
                    height={32}
                    style={{
                      borderColor: theme.PRIMARY_COLOR,
                      borderWidth: 1,
                      opacity: 0.8
                    }}
                    circleStyle={{
                      height: 25,
                      width: 25,
                      margin: 2
                    }}
                    backgroundInactive="transparent"
                    backgroundActive="transparent"
                    circleColorActive="#817DE8"
                    value={this.state.notification_value}
                    onAsyncPress={callback => {
                      callback(true, notification_value =>
                        this.setState({ notification_value })
                      );
                    }}
                  />
                </View>
              </View>

              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: theme.PRIMARY_COLOR,
                  flexDirection: "row"
                }}
              />

              {this.state.notification_value === true ? (
                <View
                  style={{
                    height: "100%",
                    paddingStart: "5%",
                    backgroundColor: "#4e38a8"
                  }}
                >
                  <Text style={styles.hiddentexts}>Frequency</Text>
                  <View
                    style={{
                      alignItems: "stretch",
                      justifyContent: "center",
                      marginEnd: "5%",
                      paddingBottom: "5%"
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={{
                            color: "white",
                            opacity: 0.5,
                            fontFamily: theme.FONT_MEDIUM,
                            fontSize: 12
                          }}
                        >
                          Rarely
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: "white",
                            opacity: 0.5,
                            fontFamily: theme.FONT_MEDIUM,
                            fontSize: 12
                          }}
                        >
                          Often
                        </Text>
                      </View>
                    </View>

                    <View>
                      <Slider
                        step={1}
                        minimumValue={this.state.minDistance}
                        maximumValue={this.state.maxDistance}
                        value={this.state.distance}
                        onValueChange={val => this.setState({ distance: val })}
                        thumbTintColor={theme.PRIMARY_COLOR}
                        maximumTrackTintColor="#817DE8"
                        minimumTrackTintColor="white"
                        thumbStyle={{ borderWidth:2,borderColor:"#4e38a8"}}
                        trackStyle={{ height:2.5 }}
                      />

                      <TouchableOpacity 
                        activeOpacity={1}
                        style={{
                          backgroundColor:'#fff',
                          borderRadius:6,
                          padding:2,
                          width:110,
                          marginTop:-5,
                          left: (this.state.distance * (Screenwidth - 150)) / 4 + 5,
                          
                        }}
                      >
                        <Text
                          style={{
                            color: "#4e38a8",
                            fontSize:12,
                            textAlign: "center",
                            fontFamily:theme.FONT_MEDIUM,
                            
                          }}
                        >
                          ~{this.state.distance + " times in hour"}
                        </Text>
                      </TouchableOpacity>
                    </View>

                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      borderTopWidth: 1,
                      borderColor: theme.PRIMARY_COLOR,
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <View>
                      <Text style={styles.hiddentexts}>Sound</Text>
                    </View>
                    <View
                      style={{ paddingHorizontal: "5%", paddingVertical: "3%" }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={[styles.hiddentexts, { paddingVertical: 0 }]}
                        >
                          Marimba
                        </Text>
                        <Image
                          source={Static_Images.image_right_arrow}
                          style={{ width: 20, height: 20, marginStart: 8 }}
                        />
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      borderTopWidth: 1,
                      borderColor: theme.PRIMARY_COLOR,
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <View>
                      <Text style={styles.hiddentexts}>Silent period</Text>
                    </View>
                    <View
                      style={{ paddingHorizontal: "5%", paddingVertical: "3%" }}
                    >
                      <Switch
                        width={58}
                        height={32}
                        style={{
                          borderColor: theme.PRIMARY_COLOR,
                          borderWidth: 1,
                          opacity: 0.8
                        }}
                        circleStyle={{
                          height: 25,
                          width: 25,
                          margin: 2
                        }}
                        backgroundInactive="transparent"
                        backgroundActive="transparent"
                        circleColorActive="#817DE8"
                        value={this.state.silent_value}
                        onAsyncPress={callback => {
                          callback(true, silent_value =>
                            this.setState({ silent_value })
                          );
                        }}
                      />
                    </View>
                  </View>

                  {this.state.silent_value === true ? (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems:'center',
                        marginEnd: "6%",
                        marginTop:'2%'
                      }}
                    >
                      <View>
                        <TouchableOpacity
                          style={{
                            alignItems: "center",
                            flexDirection: "row",
                            borderRadius: 12,
                            borderColor: "#817DE8",
                            borderWidth: 1,
                            paddingVertical: 5,
                            paddingHorizontal: 10
                          }}
                          onPress={this.showStartingTimePicker}
                        >
                          {this.state.selectedStartingTime === "" ? (
                            <View>
                              <Text
                                style={{
                                  color: "white",
                                  fontSize: 16,
                                  fontFamily: theme.FONT_SEMI_BOLD
                                }}
                              >
                                {currentTime}
                              </Text>
                            </View>
                          ) : (
                            <View>
                              <Text
                                style={{
                                  color: "white",
                                  fontSize: 16,
                                  fontFamily: theme.FONT_SEMI_BOLD
                                }}
                              >
                                {selectedStartingTime}
                              </Text>
                            </View>
                          )}

                          <Image
                            source={Static_Images.image_down_arrow}
                            style={{
                              width: 7,
                              height: 7,
                              resizeMode: "stretch",
                              marginStart: 8
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                      
                      <View style={{paddingHorizontal:5}}>
                        <Image source={Static_Images.image_long_arrow} style={{width:100,height:20}}/>
                      </View>

                      <View>
                        <TouchableOpacity
                          style={{
                            alignItems: "center",
                            flexDirection: "row",
                            borderRadius: 12,
                            borderColor: "#817DE8",
                            borderWidth: 1,
                            paddingVertical: 5,
                            paddingHorizontal: 10
                          }}
                          onPress={this.showEndingTimePicker}
                        >
                          {this.state.selectedEndingTime === "" ? (
                            <View>
                              <Text
                                style={{
                                  color: "white",
                                  fontSize: 16,
                                  fontFamily: theme.FONT_SEMI_BOLD
                                }}
                              >
                                {DefaultEndingTime}
                              </Text>
                            </View>
                          ) : (
                            <View>
                              <Text
                                style={{
                                  color: "white",
                                  fontSize: 16,
                                  fontFamily: theme.FONT_SEMI_BOLD
                                }}
                              >
                                {selectedEndingTime}
                              </Text>
                            </View>
                          )}

                          <Image
                            source={Static_Images.image_down_arrow}
                            style={{
                              width: 7,
                              height: 7,
                              resizeMode: "stretch",
                              marginStart: 8
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                      
                    </View>
                  ) : null}
                </View>
              ) : null}
            </View>
          </View>

          <DateTimePicker
            mode={"time"}
            is24Hour={false}
            timePickerModeAndroid="clock"
            isVisible={isStartingTimePickerVisible}
            onConfirm={this.handleTimePicked}
            onCancel={this.hideTimePicker}
          />
          <DateTimePicker
            mode={"time"}
            is24Hour={false}
            timePickerModeAndroid="clock"
            isVisible={isEndingTimePickerVisible}
            onConfirm={this.handleEndingTimePicked}
            onCancel={this.hideTimePicker}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  img_bg: {
    bottom: 0,
    top: 0,
    left: 0,
    right: 0
  },

  text_title: {
    color: "white",
    fontSize: 24,
    fontFamily: theme.FONT_DISPLAY_BOLD,
    letterSpacing: 0.5
  },

  text_desc: {
    marginVertical: "5%",
    color: "white",
    opacity: 0.5,
    fontFamily: theme.FONT_REGULAR,
    lineHeight: 25,
    letterSpacing: 0.5,
    fontSize: 16,
    marginLeft: "1%"
  },

  tick_circle_text: {
    color: "white",
    fontFamily: theme.FONT_SEMI_BOLD,
    alignSelf: "center",
    marginLeft: "5%",
    letterSpacing: 0.5
  },

  hiddentexts: {
    color: "white",
    fontFamily: theme.FONT_MEDIUM,
    paddingVertical: "5%",
    letterSpacing: 0.5,
    opacity: 0.9
  }
});
