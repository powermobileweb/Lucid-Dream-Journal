import React, {Component} from 'react';

import AppIntroSlider from '../../../AddJournalSlider/AppIntroSlider';
import {Static_Images} from './../../../../Constants';

import Question1 from '../Question1';
import Question2 from '../Question2';
import Question3 from '../Question3';
import Question4 from '../Question4';
import Question5 from '../Question5';
import Question6 from '../Question6';

import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  BackHandler,
  AsyncStorage,
  DeviceEventEmitter,
} from 'react-native';

const slides = [
  {
    key: 'FirstScreen',
  },
  {
    key: 'SecondScreen',
  },
  {
    key: 'ThirdScreen',
  },
  {
    key: 'FourthScreen',
  },
  {
    key: 'FifthScreen',
  },
  {
    key: 'SixthScreen',
  },
];

export default class NewJournal extends Component {
  constructor (props) {
    super (props);
   
    this.state = {};
  }

  componentDidMount = () => {
    AsyncStorage.multiRemove(["ans1","ans2","ans3","ans4title","ans4story","ans5","ans6","TagsKey"])
    DeviceEventEmitter.removeAllListeners ('hardwareBackPress');
    DeviceEventEmitter.addListener ('hardwareBackPress', () => {
      this.props.navigation.goBack ();
      return true;
    });
  };

  componentWillUnmount = () => {
    DeviceEventEmitter.removeAllListeners ('hardwareBackPress');
    //this.backPressSubscriptions.clear()
  };

  _onSelected = text => {
    // alert(text)
    this.setState ({
      selection: text,
      border_Width: 3,
    });
  };

  _lucidityCheck = text => {
    alert (text);
  };

  handleTitle = text => {
    this.setState ({title: text});
  };
  handleStory = text => {
    this.setState ({story: text});
  };

  _renderItem = item => {
    if (item.key == 'FirstScreen') {
      return <Question1 />;
    }

    if (item.key == 'SecondScreen') {
      return <Question2 />;
    }

    if (item.key == 'ThirdScreen') {
      return <Question3 />;
    }

    if (item.key == 'FourthScreen') {
      return <Question4 />;
    }

    if (item.key == 'FifthScreen') {
      return <Question5 />;
    }

    if (item.key == 'SixthScreen') {
      return <Question6 />;
    }
  };

  render () {
    return (
      <ImageBackground
        source={Static_Images.image_bg}
        style={{height: '100%', width: '100%'}}
      >
        <SafeAreaView />
        <AppIntroSlider renderItem={this._renderItem} slides={slides} />
      </ImageBackground>
    );
  }
}
