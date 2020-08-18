import React, { Component } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity,Platform, } from "react-native";

import theme from "../../../Theme";
import styles from "./style";
import { Static_Images } from "../../../Constants";
import Switch from "react-native-switch-pro";
import { withNavigation } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      journalEntries: "journal entries",
      longestStreak: "longest streak",
      lucidDreams: "lucid dreams",
      value: false
    };
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingTop:Platform.OS==='ios'?25:'10%' }}>
          <View style={{ paddingHorizontal: "5%" }}>
            <View style={styles.firstViewContainer}>
              <View />
              <View>
                <Text style={styles.headerText}>Settings</Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.headerText,
                    { fontFamily: theme.FONT_NORMAL, opacity: 0.6 }
                  ]}
                >
                  {/* Edit */}
                </Text>
              </View>
            </View>

            <View style={styles.secondViewContainer}>
              <View>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.numberText}>51</Text>
                  <Text style={styles.stateText}>
                    {this.state.journalEntries}
                  </Text>
                </View>
              </View>

              <View>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.numberText}>14</Text>
                  <Text style={styles.stateText}>
                    {this.state.longestStreak}
                  </Text>
                </View>
              </View>

              <View>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.numberText}>23</Text>
                  <Text style={styles.stateText}>{this.state.lucidDreams}</Text>
                </View>
              </View>
            </View>

            <View style={styles.thirdViewContainer}>
              <View style={styles.rowViewContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1
                  }}
                >
                  <Image
                    source={Static_Images.image_plus}
                    style={styles.plusImage}
                  />
                  <Text style={styles.rowTexts}>Unlock full stats</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1
                  }}
                >
                  <Image
                    source={Static_Images.image_plus}
                    style={styles.plusImage}
                  />
                  <Text style={styles.rowTexts}>Enable passcode</Text>
                </View>
              </View>

              <View style={styles.rowViewContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1
                  }}
                >
                  <Image
                    source={Static_Images.image_plus}
                    style={styles.plusImage}
                  />
                  <Text style={styles.rowTexts}>Remove ads</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1
                  }}
                >
                  <Image
                    source={Static_Images.image_plus}
                    style={styles.plusImage}
                  />
                  <Text style={styles.rowTexts}>iCloud backups</Text>
                </View>
              </View>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("LucidPremium")}
              >
                <LinearGradient
                  colors={["#817DE8", "#9E68F0"]}
                  style={styles.button}
                >
                  <Text style={styles.text}>Go Lucid Pro</Text>
                  <Image
                    source={Static_Images.image_go_pro}
                    style={{ width: 26, height: 26, marginStart: 5 }}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#5c3bb3",
              paddingLeft: "5%",
              paddingTop: "6%"
            }}
          >
            <View style={styles.listingViewContainer}>
              <View>
                <Text style={[styles.listingText, { opacity: 0.5 }]}>
                  Passcode
                </Text>
              </View>

              <View style={{ padding: "3%" }}>
                <Switch
                  disabled={true}
                  width={58}
                  height={32}
                  style={{
                    borderColor: theme.PRIMARY_COLOR,
                    borderWidth: 1
                  }}
                  circleStyle={{
                    height: 25,
                    width: 25,
                    margin: 2
                  }}
                  backgroundInactive="transparent"
                  backgroundActive="transparent"
                  circleColorActive="white"
                  circleColorInactive="#7d66be"
                  value={this.state.value}
                  // onAsyncPress={(callback) => {
                  //   callback(true, value => this.setState({ value }))
                  // }}
                />
              </View>
            </View>

            <View style={styles.listingViewContainer}>
              <View>
                <Text style={[styles.listingText, { opacity: 0.5 }]}>
                  iCloud backups
                </Text>
              </View>

              <View style={{ padding: "3%" }}>
                <Switch
                  disabled={true}
                  width={58}
                  height={32}
                  style={{
                    borderColor: theme.PRIMARY_COLOR,
                    borderWidth: 1
                  }}
                  circleStyle={{
                    height: 25,
                    width: 25,
                    margin: 2
                  }}
                  backgroundInactive="transparent"
                  backgroundActive="transparent"
                  circleColorActive="white"
                  circleColorInactive="#7d66be"
                  value={this.state.value}
                  // onAsyncPress={(callback) => {
                  //   callback(true, value => this.setState({ value }))
                  // }}
                />
              </View>
            </View>
          </View>

          <View style={{ paddingLeft: "5%", paddingBottom: "30%" }}>
            <View style={[styles.listingViewContainer, { borderTopWidth: 0 }]}>
              <View>
                <Text style={styles.listingText}>Restore subsscription</Text>
              </View>

              <View style={{ padding: "5%" }}>
                <Image
                  source={Static_Images.image_right_arrow}
                  style={styles.rightArrowImage}
                />
              </View>
            </View>

            <View style={styles.listingViewContainer}>
              <View>
                <Text style={styles.listingText}>Notofications</Text>
              </View>

              <View style={{ padding: "5%" }}>
                <Image
                  source={Static_Images.image_right_arrow}
                  style={styles.rightArrowImage}
                />
              </View>
            </View>

            <View style={styles.listingViewContainer}>
              <View>
                <Text style={styles.listingText}>Rate this app</Text>
              </View>

              <View style={{ padding: "5%" }}>
                <Image
                  source={Static_Images.image_right_arrow}
                  style={styles.rightArrowImage}
                />
              </View>
            </View>

            <View style={styles.listingViewContainer}>
              <View>
                <Text style={styles.listingText}>Support</Text>
              </View>

              <View style={{ padding: "5%" }}>
                <Image
                  source={Static_Images.image_right_arrow}
                  style={styles.rightArrowImage}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("TermsConditions")}
            >
              <View style={styles.listingViewContainer}>
                <View>
                  <Text style={styles.listingText}>Terms & Conditions</Text>
                </View>

                <View style={{ padding: "5%" }}>
                  <Image
                    source={Static_Images.image_right_arrow}
                    style={styles.rightArrowImage}
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("PrivacyPolicy")}
            >
              <View style={styles.listingViewContainer}>
                <View>
                  <Text style={styles.listingText}>Privacy policy</Text>
                </View>

                <View style={{ padding: "5%" }}>
                  <Image
                    source={Static_Images.image_right_arrow}
                    style={styles.rightArrowImage}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default withNavigation(Settings);
