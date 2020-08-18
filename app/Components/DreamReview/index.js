import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  BackHandler,
  Platform,
  DeviceEventEmitter,
} from 'react-native';
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';

import {Static_Images} from '../../Constants';
import theme from '../../Theme';

import Date from './Date';
import Rating from './Rating';
import Mood from './Mood';
import Lucidity from './Lucidity';

const Tabs = createAppContainer (
  createMaterialTopTabNavigator (
    {
      Date: Date,
      Mood: Mood,
      Lucidity: Lucidity,
      Rating: Rating,
    },
    {
      initialRouteName: 'Date',
      tabBarPosition: 'top',
      swipeEnabled: true,
      backBehavior: 'none',
      lazy: false,
      animationEnabled: true,
      tabBarOptions: {
        upperCaseLabel: false,
        scrollEnabled: true,
        pressColor: 'gray',
        activeTintColor: 'white',
        inactiveTintColor: '#a295d2',
        indicatorStyle: {
          backgroundColor: theme.PRIMARY_COLOR,
          width: Dimensions.get ('window').width / 4,
          alignSelf: 'center',
          height: 5,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        labelStyle: {
          fontFamily: theme.FONT_SEMI_BOLD,
          fontSize: 13,
          alignSelf: 'center',
        },
        tabStyle: {
          // height:40,
          width: Dimensions.get ('window').width / 4,
          //width:Dimensions.get('window').width / 4
        },
        style: {
          backgroundColor: 'transparent',
        },
      },
    }
  )
);

export default class DreamReview extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  componentDidMount = () => {
    DeviceEventEmitter.removeAllListeners ('hardwareBackPress');
    DeviceEventEmitter.addListener ('hardwareBackPress', () => {
      this.props.navigation.goBack ();
      return true;
    });
  };

  componentWillUnmount = () => {
    DeviceEventEmitter.removeListener ('hardwareBackPress');
    //this.backPressSubscriptions.clear()
  };

  render () {
    return (
      <ImageBackground
        source={Static_Images.image_bg}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
        }}
      >
        <SafeAreaView style={{flex: 1}}>
          <StatusBar translucent={true} backgroundColor={'transparent'} />
          <View
            style={{
              paddingHorizontal: '5%',
              paddingTop: Platform.OS === 'ios' ? 25 : '10%',
            }}
          >
            <View style={{flexDirection: 'row', marginBottom: '5%'}}>
              <View style={{flex: 0.2, alignItems: 'flex-start'}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack ()}
                >
                  <Image
                    source={Static_Images.image_back_arrow}
                    style={{width: 30, height: 30}}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 0.6, alignItems: 'center'}}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: theme.FONT_SEMI_BOLD,
                    fontSize: 18,
                  }}
                >
                  Dream review
                </Text>
              </View>
              <View style={{flex: 0.2, alignItems: 'flex-end'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchScreen')}>
                  <Image
                    source={Static_Images.image_search}
                    style={{width: 24, height: 24}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Tabs />
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
