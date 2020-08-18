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
import {Static_Icons} from '../../../../Constants'

export default class Question5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      border_color_1: "#886cca",
      border_color_2: "#886cca",
      border_color_3: "#886cca",
      border_color_4: "#886cca",
      border_color_5: "#886cca",
      title: "What was the overall mood of the dream?",
      border_Width: 1
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
                  marginHorizontal: "7%"
                }}
              >
                {this.state.title}
              </Text>
            </View>

            <View style={{ marginHorizontal: "15%" }}>
              <TouchableOpacity
                onPress={() => this._onSelected_1("Super Negative")}
              >
                <View
                  style={[
                    styles.itemContainer,
                    { borderColor: this.state.border_color_1 }
                  ]}
                >
                  <View style={styles.viewContainer1}>
                    <View style={styles.viewContainer2}>
                      <View
                        style={{
                          paddingHorizontal: "5%",
                          paddingVertical: "4%"
                        }}
                      >
                        <Image
                          source={Static_Icons.icon_mood_super_naegative}
                          style={{ height: 25, width: 25 }}
                        />
                      </View>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Text style={styles.containerItemText}>
                          Super Negative
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

              <TouchableOpacity onPress={() => this._onSelected_2("Negative")}>
                <View
                  style={[
                    styles.itemContainer,
                    { borderColor: this.state.border_color_2 }
                  ]}
                >
                  <View style={styles.viewContainer1}>
                    <View style={styles.viewContainer2}>
                      <View
                        style={{
                          paddingHorizontal: "5%",
                          paddingVertical: "4%"
                        }}
                      >
                        <Image
                          source={Static_Icons.icon_mood_negative}
                          style={{ height: 25, width: 25 }}
                        />
                      </View>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Text style={styles.containerItemText}>Negative</Text>
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
                      <View
                        style={{
                          paddingHorizontal: "5%",
                          paddingVertical: "4%"
                        }}
                      >
                        <Image
                          source={Static_Icons.icon_mood_normal}
                          style={{ height: 25, width: 25 }}
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

              <TouchableOpacity onPress={() => this._onSelected_4("Nice")}>
                <View
                  style={[
                    styles.itemContainer,
                    { borderColor: this.state.border_color_4 }
                  ]}
                >
                  <View style={styles.viewContainer1}>
                    <View style={styles.viewContainer2}>
                      <View
                        style={{
                          paddingHorizontal: "5%",
                          paddingVertical: "4%"
                        }}
                      >
                        <Image
                          source={Static_Icons.icon_mood_nice}
                          style={{ height: 25, width: 25 }}
                        />
                      </View>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Text style={styles.containerItemText}>Nice</Text>
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

              <TouchableOpacity onPress={() => this._onSelected_5("Woop woop")}>
                <View
                  style={[
                    styles.itemContainer,
                    { borderColor: this.state.border_color_5 }
                  ]}
                >
                  <View style={styles.viewContainer1}>
                    <View style={styles.viewContainer2}>
                      <View
                        style={{
                          paddingHorizontal: "5%",
                          paddingVertical: "4%"
                        }}
                      >
                        <Image
                          source={Static_Icons.icon_mood_woop_woop}
                          style={{ height: 25, width: 25 }}
                        />
                      </View>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Text style={styles.containerItemText}>Woop woop</Text>
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
      AsyncStorage.setItem('ans5',text)
      this.setState({
        border_color_1: "white",
        border_color_2: "#886cca",
        border_color_3: "#886cca",
        border_color_4: "#886cca",
        border_color_5: "#886cca"
      });
    } else {
      AsyncStorage.removeItem('ans5')
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
      AsyncStorage.setItem('ans5',text)
      this.setState({
        border_color_1: "#886cca",
        border_color_2: "white",
        border_color_3: "#886cca",
        border_color_4: "#886cca",
        border_color_5: "#886cca"
      });
    } else {
      AsyncStorage.removeItem('ans5')
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
      AsyncStorage.setItem('ans5',text)
      this.setState({
        border_color_1: "#886cca",
        border_color_2: "#886cca",
        border_color_3: "white",
        border_color_4: "#886cca",
        border_color_5: "#886cca"
      });
    } else {
      AsyncStorage.removeItem('ans5')
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
      AsyncStorage.setItem('ans5',text)
      this.setState({
        border_color_1: "#886cca",
        border_color_2: "#886cca",
        border_color_3: "#886cca",
        border_color_4: "white",
        border_color_5: "#886cca"
      });
    } else {
      AsyncStorage.removeItem('ans5')
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
      AsyncStorage.setItem('ans5',text)
      this.setState({
        border_color_1: "#886cca",
        border_color_2: "#886cca",
        border_color_3: "#886cca",
        border_color_4: "#886cca",
        border_color_5: "white"
      });
    } else {
      AsyncStorage.removeItem('ans5')
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
