import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Platform, AsyncStorage } from "react-native";

import styles from "../NewJournal/style";
import { Static_Icons } from "../../../../Constants";

export default class Question1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      border_color_1:'#886cca',
      border_color_2:'#886cca',
      border_color_3:'#886cca',
      border_color_4:'#886cca',
      border_color_5:'#886cca',
      intro_text:
        "Let's start by analyzing your last night's sleep and dream state",
      title: "How was your sleep?"
    };
  }

  render() {
    return (
      <ScrollView>
        <View>
          <View style={{ marginTop: "24%" }}>
            <View style={{ alignSelf: "center" }}>
              <Text style={styles.introText}>{this.state.intro_text}</Text>
            </View>
            <View style={{ alignSelf: "center", marginVertical:Platform.OS==='ios'?30: "8%" }}>
              <Text style={styles.titleText}>{this.state.title}</Text>
            </View>

            <View style={{ marginHorizontal: "15%" }}>
              <TouchableOpacity onPress={() => this._onSelected_1("Very bad")}>
                <View
                  style={[
                    styles.itemContainer,
                    { borderColor:this.state.border_color_1 }
                  ]}
                >
                  <View style={styles.viewContainer1}>
                    <View style={styles.viewContainer2}>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Image
                          source={Static_Icons.icon_sleep_very_bad}
                          style={{ height: 36, width: 36 }}
                        />
                      </View>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Text style={styles.containerItemText}>Very bad</Text>
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

              <TouchableOpacity onPress={() => this._onSelected_2("Meh")}>
                <View
                  style={[
                    styles.itemContainer,
                    { borderColor:this.state.border_color_2 }
                  ]}
                >
                  <View style={styles.viewContainer1}>
                    <View style={styles.viewContainer2}>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Image
                          source={Static_Icons.icon_sleep_meh}
                          style={{ height: 36, width: 36 }}
                        />
                      </View>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Text style={styles.containerItemText}>Meh</Text>
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
                    { borderColor:this.state.border_color_3 }
                  ]}
                >
                  <View style={styles.viewContainer1}>
                    <View style={styles.viewContainer2}>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Image
                          source={Static_Icons.icon_sleep_normal}
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

              <TouchableOpacity onPress={() => this._onSelected_4("Great")}>
                <View
                  style={[
                    styles.itemContainer,
                    { borderColor:this.state.border_color_4 }
                  ]}
                >
                  <View style={styles.viewContainer1}>
                    <View style={styles.viewContainer2}>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Image
                          source={Static_Icons.icon_sleep_great}
                          style={{ height: 36, width: 36 }}
                        />
                      </View>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Text style={styles.containerItemText}>Great</Text>
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

              <TouchableOpacity onPress={() => this._onSelected_5("Supa dupa")}>
                <View
                  style={[
                    styles.itemContainer,
                    { borderColor:this.state.border_color_5 }
                  ]}
                >
                  <View style={styles.viewContainer1}>
                    <View style={styles.viewContainer2}>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Image
                          source={Static_Icons.icon_sleep_supa_dupa}
                          style={{ height: 36, width: 36 }}
                        />
                      </View>
                      <View style={{ paddingHorizontal: "5%" }}>
                        <Text style={styles.containerItemText}>Supa dupa</Text>
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

  _onSelected_1 = (text) =>{
  
    if(this.state.border_color_1==='#886cca'){
      AsyncStorage.setItem('ans1',text)
      this.setState({border_color_1:'white',border_color_2:'#886cca',border_color_3:'#886cca',border_color_4:'#886cca',border_color_5:'#886cca'})
    }else{
      AsyncStorage.removeItem('ans1')
      this.setState({border_color_1:'#886cca',border_color_2:'#886cca',border_color_3:'#886cca',border_color_4:'#886cca',border_color_5:'#886cca'})
    }

  
};


_onSelected_2 = (text) =>{

    if(this.state.border_color_2==='#886cca'){
      AsyncStorage.setItem('ans1',text)
      this.setState({border_color_1:'#886cca',border_color_2:'white',border_color_3:'#886cca',border_color_4:'#886cca',border_color_5:'#886cca'})
    }else{
      AsyncStorage.removeItem('ans1')
      this.setState({border_color_1:'#886cca',border_color_2:'#886cca',border_color_3:'#886cca',border_color_4:'#886cca',border_color_5:'#886cca'})
    }

};

_onSelected_3 = (text) =>{

  if(this.state.border_color_3==='#886cca'){
    AsyncStorage.setItem('ans1',text)
    this.setState({border_color_1:'#886cca',border_color_2:'#886cca',border_color_3:'white',border_color_4:'#886cca',border_color_5:'#886cca'})
  }else{
    AsyncStorage.removeItem('ans1')
    this.setState({border_color_1:'#886cca',border_color_2:'#886cca',border_color_3:'#886cca',border_color_4:'#886cca',border_color_5:'#886cca'})
  }

};

_onSelected_4 = (text) =>{

  if(this.state.border_color_4==='#886cca'){
    AsyncStorage.setItem('ans1',text)
    this.setState({border_color_1:'#886cca',border_color_2:'#886cca',border_color_3:'#886cca',border_color_4:'white',border_color_5:'#886cca'})
  }else{
    AsyncStorage.removeItem('ans1')
    this.setState({border_color_1:'#886cca',border_color_2:'#886cca',border_color_3:'#886cca',border_color_4:'#886cca',border_color_5:'#886cca'})
  }

};

_onSelected_5 = (text) =>{

  if(this.state.border_color_5==='#886cca'){
    AsyncStorage.setItem('ans1',text)
    this.setState({border_color_1:'#886cca',border_color_2:'#886cca',border_color_3:'#886cca',border_color_4:'#886cca',border_color_5:'white'})
  }else{
    AsyncStorage.removeItem('ans1')
    this.setState({border_color_1:'#886cca',border_color_2:'#886cca',border_color_3:'#886cca',border_color_4:'#886cca',border_color_5:'#886cca'})
  }

};
}
