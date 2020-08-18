import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  AsyncStorage,
  ImageBackground,
} from 'react-native';

import styles from '../NewJournal/style';
import {Static_Images} from '../../../../Constants';

export default class Question3 extends Component {
  constructor (props) {
    super (props);
    this.state = {
      border_color_1: '#886cca',
      border_color_2: '#886cca',
      bg_1: 'transparent',
      bg_2: 'transparent',
      border_width_1: 2,
      border_width_2: 2,
      opacity_1: 0.6,
      opacity_2: 0.6,

      bg_lucid: true,

      title: 'Was the dream lucid?',
      lucidInfoText: "Not sure what a Lucid dream means? No worries - you'll find that out later.",

      isLucid: 'lucid',
    };
  }

  componentDidMount=()=>{
    AsyncStorage.setItem ('ans3', this.state.isLucid)
  }

  _onSelected_1 = text => {
    if (this.state.isLucid === 'lucid') {
      this.setState ({isLucid: 'not'});
      AsyncStorage.setItem ('ans3', text);
    } else {
      AsyncStorage.setItem ('ans3', text);
    }
  };

  _onSelected_2 = text => {
    if (this.state.isLucid === 'not') {
      this.setState ({isLucid: 'lucid'});
      AsyncStorage.setItem ('ans3', text);
    } else {
      AsyncStorage.setItem ('ans3', text);
    }
  };

  render () {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            paddingHorizontal: '5%',
            alignItems: 'center',
            marginTop: '24%',
          }}
        >
          <View
            style={{
              alignSelf: 'center',
              marginTop: Platform.OS === 'ios' ? 50 : '8%',
              marginBottom: Platform.OS === 'ios' ? 30 : '9%',
            }}
          >
            <Text
              style={[
                styles.titleText,
                {textAlign: 'center', marginHorizontal: '15%'},
              ]}
            >
              {this.state.title}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: Platform.OS === 'ios' ? 210 : 204,
              alignItems: 'center',
              marginVertical: Platform.OS === 'ios' ? 10 : 30,
            }}
          >
            <TouchableOpacity
              onPress={() => this._onSelected_1 ('not')}
              style={{
                width: 122,
                marginEnd: 10,
              }}
            >
              {this.state.isLucid === 'not'
                ? <ImageBackground
                    source={require ('../../../../Images/LucidnotLucid.png')}
                    style={{
                      flex: 1,
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <Text style={[styles.lucidText, {fontSize: 20}]}>
                      Not Lucid
                    </Text>
                  </ImageBackground>
                : <View
                    style={{
                      flex: 1,
                      borderColor: '#886cca',
                      borderWidth: 2,
                      borderRadius: 90,
                      justifyContent: 'center',
                    }}
                  >
                    <Text
                      style={[styles.lucidText, {fontSize: 20, opacity: 0.6}]}
                    >
                      Not Lucid
                    </Text>
                  </View>}
            </TouchableOpacity>

            <TouchableOpacity
              style={{width: 122, marginStart: 10}}
              onPress={() => this._onSelected_2 ('lucid')}
            >
              {this.state.isLucid === 'lucid'
                ? <ImageBackground
                    source={require ('../../../../Images/LucidnotLucid.png')}
                    style={{
                      flex: 1,
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <Text style={[styles.lucidText, {fontSize: 20}]}>
                      Lucid
                    </Text>
                  </ImageBackground>
                : <View
                    style={{
                      flex: 1,
                      borderColor: '#886cca',
                      borderWidth: 2,
                      borderRadius: 90,
                      justifyContent: 'center',
                    }}
                  >
                    <Text
                      style={[styles.lucidText, {fontSize: 20, opacity: 0.6}]}
                    >
                      Lucid
                    </Text>
                  </View>}

            </TouchableOpacity>
          </View>

          <View style={{paddingVertical: Platform.OS === 'ios' ? 60 : '10%'}}>
            <Text
              style={[
                styles.introText,
                {
                  opacity: 0.9,
                  fontSize: 16,
                  lineHeight: 25,
                  marginHorizontal: '15%',
                },
              ]}
            >
              {/* {this.state.lucidInfoText} */}
              Not sure what a{' '}
              <Text style={{color: '#00a4e2'}}>Lucid dream </Text>means? No
              worries - you'll find that out later.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
