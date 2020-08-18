import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  BackHandler,
  DeviceEventEmitter,
  Platform,
} from "react-native";

import { Static_Images } from "./../../../../Constants";
import theme from "../../../../Theme";
import GradientButton from "../../../GradientButton";
import styles from "./style";
import DateTimePicker from "react-native-modal-datetime-picker";
import { withNavigation } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";

class SavedFirstEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staticText1: "Excellent, you've added your first entry!",
      staticText2: "Now let's make this a habit",
      staticText3: "We'll send you a nudge around the time you wake up",
      
      isDateTimePickerVisible: false,
      currentTime:"",
      selectedTime: "",
    };
  }

  componentDidMount = () => {
    let self = this;
    DeviceEventEmitter.removeAllListeners("hardwareBackPress");
    DeviceEventEmitter.addListener("hardwareBackPress", () => {
      this.props.navigation.navigate("Dashboard");
      return true;
    });

    var hours = new Date().getHours(); //Current Hours
    var minutes = new Date().getMinutes(); //Current Minutes
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;

    self.setState({currentTime:hours + ":" + minutes + " " + ampm})
  };

  componentWillUnmount = () => {
    DeviceEventEmitter.removeAllListeners("hardwareBackPress");
    //this.backPressSubscriptions.clear()
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.hideDateTimePicker();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;

    this.setState({ selectedTime: strTime });
  };

  render() {
    const { isDateTimePickerVisible, selectedTime, currentTime } = this.state;
    return (
      <ImageBackground
        source={Static_Images.image_first_entry_saved}
        style={{ height: "100%", width: "100%" }}
        // resizeMode="stretch"
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            paddingHorizontal: "5%",
            justifyContent: "center"
          }}
        >
          <View style={{ top: Platform.OS==='ios'?50: "10%" }}>
            <View style={{ paddingVertical:Platform.OS==="ios"?15: "10%", paddingHorizontal:Platform.OS==="ios"?40:"15%" }}>
              <Text style={styles.staticText1}>{this.state.staticText1}</Text>
            </View>

            <LinearGradient
              colors={["#6446c5", "#543aab"]}
              style={{
                borderRadius: 10,
                paddingHorizontal: "8%",
                paddingVertical: "10%",
                marginHorizontal: "3%"
              }}
            >
              <View style={{ paddingBottom: "5%" }}>
                <Text style={styles.staticText2}>{this.state.staticText2}</Text>
              </View>

              <View style={{ paddingHorizontal: "8%" }}>
                <Text style={styles.staticText3}>{this.state.staticText3}</Text>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  marginVertical: "7%"
                }}
              >
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
                  onPress={this.showDateTimePicker}
                >
                  {this.state.selectedTime === "" ? (
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
                        {selectedTime}
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
            </LinearGradient>

            <View
              style={{
                width: "95%",
                marginTop: "10%",
                alignSelf:'center'
              }}
            >
              <GradientButton
                title="Continue"
                customClick={
                  () => this.props.navigation.navigate("EnableNotification")
                  //this.setState({ secondIntro: true })
                }
              />
            </View>
          </View>
          <DateTimePicker
            mode={"time"}
            is24Hour={false}
            timePickerModeAndroid="clock"
            isVisible={isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default withNavigation(SavedFirstEntry);
