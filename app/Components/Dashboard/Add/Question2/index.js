import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  AsyncStorage,
} from "react-native";

import styles from "../NewJournal/style";
import Theme from "../../../../Theme";
import { Static_Icons } from "../../../../Constants";

export default class Question2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      border_color_1: "#886cca",
      border_color_2: "#886cca",
      border_color_3: "#886cca",
      border_color_4: "#886cca",
      border_color_5: "#886cca",
      title: "How clear was your dream tonight?"
    };
  }

  render() {
    return (
      <ScrollView>
        <View>
          <View style={{ marginTop: "24%" }}>
            <View
              style={{
                alignSelf: "center",
                marginTop: Platform.OS === "ios" ? 50 : "8%",
                marginBottom: Platform.OS === "ios" ? 30 : "9%"
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: Theme.FONT_LIGHT,
                  fontSize: 30,
                  textAlign: "center",
                  marginHorizontal: "8%"
                }}
              >
                {this.state.title}
              </Text>
            </View>

            <View style={{ marginHorizontal: "15%" }}>
              <TouchableOpacity
                onPress={() => this._onSelected_1("I didn't dream")}
              >
                <View
                  style={[
                    styles.itemContainer,
                    { borderColor: this.state.border_color_1 }
                  ]}
                >
                  <View style={styles.viewContainer1}>
                    <View style={styles.viewContainer2}>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Image
                          source={Static_Icons.icon_clarity_didnt_dream}
                          style={{ height: 36, width: 36 }}
                        />
                      </View>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Text style={styles.containerItemText}>
                          I didn't dream
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Image
                        source={Static_Icons.icon_arrow_right}
                        style={{ height: 20, width: 20 }}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this._onSelected_2("Cloudy")}>
                <View
                  style={[
                    styles.itemContainer,
                    { borderColor: this.state.border_color_2 }
                  ]}
                >
                  <View style={styles.viewContainer1}>
                    <View style={styles.viewContainer2}>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Image
                          source={Static_Icons.icon_clarity_cloudy}
                          style={{ height: 36, width: 36 }}
                        />
                      </View>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Text style={styles.containerItemText}>Cloudy</Text>
                      </View>
                    </View>
                    <View>
                      <Image
                        source={Static_Icons.icon_arrow_right}
                        style={{ height: 20, width: 20 }}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this._onSelected_3("Normal")}>
                <View
                  style={[
                    styles.itemContainer,
                    { borderColor: this.state.border_color_3 }
                  ]}
                >
                  <View style={styles.viewContainer1}>
                    <View style={styles.viewContainer2}>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Image
                          source={Static_Icons.icon_clarity_normal}
                          style={{ height: 36, width: 36 }}
                        />
                      </View>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Text style={styles.containerItemText}>Normal</Text>
                      </View>
                    </View>
                    <View>
                      <Image
                        source={Static_Icons.icon_arrow_right}
                        style={{ height: 20, width: 20 }}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this._onSelected_4("Clear")}>
                <View
                  style={[
                    styles.itemContainer,
                    { borderColor: this.state.border_color_4 }
                  ]}
                >
                  <View style={styles.viewContainer1}>
                    <View style={styles.viewContainer2}>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Image
                          source={Static_Icons.icon_clarity_clear}
                          style={{ height: 36, width: 36 }}
                        />
                      </View>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Text style={styles.containerItemText}>Clear</Text>
                      </View>
                    </View>
                    <View>
                      <Image
                        source={Static_Icons.icon_arrow_right}
                        style={{ height: 20, width: 20 }}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this._onSelected_5("Super clear")}
              >
                <View
                  style={[
                    styles.itemContainer,
                    { borderColor: this.state.border_color_5 }
                  ]}
                >
                  <View style={styles.viewContainer1}>
                    <View style={styles.viewContainer2}>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Image
                          source={Static_Icons.icon_clarity_super_clear}
                          style={{ height: 36, width: 36 }}
                        />
                      </View>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Text style={styles.containerItemText}>
                          Super clear
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Image
                        source={Static_Icons.icon_arrow_right}
                        style={{ height: 20, width: 20 }}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }

  _onSelected_1 = text => {
    if (this.state.border_color_1 === "#886cca") {
      AsyncStorage.setItem('ans2',text)
      this.setState({
        border_color_1: "white",
        border_color_2: "#886cca",
        border_color_3: "#886cca",
        border_color_4: "#886cca",
        border_color_5: "#886cca"
      });
    } else {
      AsyncStorage.removeItem('ans2')
      this.setState({
        border_color_1: "#886cca",
        border_color_2: "#886cca",
        border_color_3: "#886cca",
        border_color_4: "#886cca",
        border_color_5: "#886cca"
      });
    }
  };

  _onSelected_2 = text => {
    if (this.state.border_color_2 === "#886cca") {
      AsyncStorage.setItem('ans2',text)
      this.setState({
        border_color_1: "#886cca",
        border_color_2: "white",
        border_color_3: "#886cca",
        border_color_4: "#886cca",
        border_color_5: "#886cca"
      });
    } else {
      AsyncStorage.removeItem('ans2')
      this.setState({
        border_color_1: "#886cca",
        border_color_2: "#886cca",
        border_color_3: "#886cca",
        border_color_4: "#886cca",
        border_color_5: "#886cca"
      });
    }
  };

  _onSelected_3 = text => {
    if (this.state.border_color_3 === "#886cca") {
      AsyncStorage.setItem('ans2',text)
      this.setState({
        border_color_1: "#886cca",
        border_color_2: "#886cca",
        border_color_3: "white",
        border_color_4: "#886cca",
        border_color_5: "#886cca"
      });
    } else {
      AsyncStorage.removeItem('ans2')
      this.setState({
        border_color_1: "#886cca",
        border_color_2: "#886cca",
        border_color_3: "#886cca",
        border_color_4: "#886cca",
        border_color_5: "#886cca"
      });
    }
  };

  _onSelected_4 = text => {
    if (this.state.border_color_4 === "#886cca") {
      AsyncStorage.setItem('ans2',text)
      this.setState({
        border_color_1: "#886cca",
        border_color_2: "#886cca",
        border_color_3: "#886cca",
        border_color_4: "white",
        border_color_5: "#886cca"
      });
    } else {
      AsyncStorage.removeItem('ans2')
      this.setState({
        border_color_1: "#886cca",
        border_color_2: "#886cca",
        border_color_3: "#886cca",
        border_color_4: "#886cca",
        border_color_5: "#886cca"
      });
    }
  };

  _onSelected_5 = text => {
    if (this.state.border_color_5 === "#886cca") {
      AsyncStorage.setItem('ans2',text)
      this.setState({
        border_color_1: "#886cca",
        border_color_2: "#886cca",
        border_color_3: "#886cca",
        border_color_4: "#886cca",
        border_color_5: "white"
      });
    } else {
      AsyncStorage.removeItem('ans2')
      this.setState({
        border_color_1: "#886cca",
        border_color_2: "#886cca",
        border_color_3: "#886cca",
        border_color_4: "#886cca",
        border_color_5: "#886cca"
      });
    }
  };
}
