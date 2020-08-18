import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Sound from 'react-native-sound';


export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  playTrack = () => {
    const sound = new Sound('http://www.noiseaddicts.com/samples_1w72b820/2558.mp3', null, (error) => {
        if (error) {
            alert('error...')
        }
        alert(sound.getDuration())
        // play when loaded
        sound.play();
    });
  }

  render() {
    console.log("CCCCC", JSON.stringify(Sound));
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Button title="play me" onPress={this.playTrack} />
      </View>
    );
  }
}
