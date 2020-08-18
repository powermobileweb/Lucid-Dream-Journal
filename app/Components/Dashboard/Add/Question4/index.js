import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  AsyncStorage,
  PermissionsAndroid,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from "react-native-animatable";
import Sound from 'react-native-sound';
import {AudioRecorder, AudioUtils} from 'react-native-audio';

import GradientButton from "../../../GradientButton";
import Tags from "../../../Tags";
import styles from "../NewJournal/style";
import theme from "../../../../Theme";
import { Static_Images, Static_Icons } from "../../../../Constants";

export default class Question4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      story: "",
      tags_visible: false,
      recording: false,
      paused: false,
      stoppedRecording: false,
      finished: false,
      audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',
      hasPermission: undefined,

      recording_visible:false,

      play_icon: true, //change icons play and stop
      text_recording: "Recording",

      //Recording timer
      timer: null,
      minutes_Counter: "00",
      seconds_Counter: "00",

      border_color_1: "#886cca",
      border_color_2: "#886cca"
    };
  }
  prepareRecordingPath(audioPath){
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: "Low",
      AudioEncoding: "aac",
      AudioEncodingBitRate: 32000
    });
  }

  componentDidMount() {
    AudioRecorder.requestAuthorization().then((isAuthorised) => {
      this.setState({ hasPermission: isAuthorised });

      if (!isAuthorised) return;

      this.prepareRecordingPath(this.state.audioPath);

      AudioRecorder.onProgress = (data) => {
        //this.setState({timer: Math.floor(data.timer)});
      };

      AudioRecorder.onFinished = (data) => {
        // Android callback comes in the form of a promise instead.
        if (Platform.OS === 'ios') {
          this._finishRecording(data.tags_visible === "OK", data.audioFileURL, data.audioFileSize);
        }
      };
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
    this._stop();
  }

  async _resume() {
    if (!this.state.paused) {
      console.warn('Can\'t resume, not paused!');
      return;
    }

    try {
      await AudioRecorder.resumeRecording();
      this.setState({paused: false});
    } catch (error) {
      console.error(error);
    }
  }

  async _pause() {
    if (!this.state.recording) {
      console.warn('Can\'t pause, not recording!');
      return;
    }

    try {
      const filePath = await AudioRecorder.pauseRecording();
      this.setState({paused: true});
    } catch (error) {
      console.error(error);
    }
  }

  async _record() {
    if (this.state.recording) {
      console.warn('Already recording!');
      return;
    }

    if (!this.state.hasPermission) {
      console.warn('Can\'t record, no permission granted!');
      return;
    }

    if(this.state.stoppedRecording){
      this.prepareRecordingPath(this.state.audioPath);
    }

    this.setState({recording: true, paused: false});

    try {
      const filePath = await AudioRecorder.startRecording();
    } catch (error) {
      console.error(error);
    }
  }

  async _stop() {
    if (!this.state.recording) {
      console.warn('Can\'t stop, not recording!');
      return;
    }

    this.setState({stoppedRecording: true, recording: false, paused: false});

    try {
      const filePath = await AudioRecorder.stopRecording();

      if (Platform.OS === 'android') {
        this._finishRecording(true, filePath);
      }
      return filePath;
    } catch (error) {
      console.error(error);
    }
  }

  async _play() {
    if (this.state.recording) {
      await this._stop();
    }

    // These timeouts are a hacky workaround for some issues with react-native-sound.
    // See https://github.com/zmxv/react-native-sound/issues/89.
    setTimeout(() => {
      var sound = new Sound(this.state.audioPath, '', (error) => {
        if (error) {
          console.log('failed to load the sound', error);
        }
      });

      setTimeout(() => {
        sound.play((success) => {
          if (success) {
            alert('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      }, 100);
    }, 100);
  }


  _finishRecording(didSucceed, filePath, fileSize) {
    this.setState({ finished: didSucceed });
    console.log(`Finished recording of duration ${this.state.timer} seconds at path: ${filePath} and size of ${fileSize || 0} bytes`);
  }

  onButtonStart = () => {

    if(this.state.recording===false){
      this.setState({ recording: true, recording_visible:true });
      this._record()
      this.onStartTimer()
    }
  };

  onStartTimer(){
    let timer = setInterval(() => {
      var num = (Number(this.state.seconds_Counter) + 1).toString(),
        count = this.state.minutes_Counter;

      if (Number(this.state.seconds_Counter) == 59) {
        count = (Number(this.state.minutes_Counter) + 1).toString();
        num = "00";
      }

      this.setState({
        minutes_Counter: count.length == 1 ? "0" + count : count,
        seconds_Counter: num.length == 1 ? "0" + num : num
      });
    }, 1000);
    this.setState({ timer });
  }

  onStopPress() {
    if (this.state.play_icon) {
      clearInterval(this.state.timer);
      this.setState({ play_icon: false, text_recording: "Stopped" });
      this._pause()
    }
    if (this.state.play_icon === false) {
      this.setState({ play_icon: true, text_recording: "Recording",});
      this.onStartTimer()
      this._resume()
    }
  }

  handleTitle = text => {

    this.setState({ title: text });
    if(this.state.title===""){
      AsyncStorage.removeItem('ans4title')
    }
    AsyncStorage.setItem('ans4title',text)

    
  };

  handleStory = text => {

    this.setState({ story: text });
    if(this.state.story===""){
      AsyncStorage.removeItem('ans4story')
    }
    AsyncStorage.setItem('ans4story',text)
    

  };

  onTouchTitle() {
    this.setState({ border_color_1: "white", border_color_2: "#886cca" });
  }

  onTouchStory() {
    this.setState({ border_color_1: "#886cca", border_color_2: "white" });
  }

  ShowHideTextComponentView = () => {
    if (this.state.tags_visible == false) {
      this.setState({
        tags_visible: true,
        border_color_1: "#886cca",
        border_color_2: "#886cca"
      });
    } else {
      
      //alert('Add more')
    }
  };

  

  render() {
    var icon_play = this.state.play_icon
      ? Static_Icons.icon_stop
      : Static_Images.image_play;
    return (
        <ScrollView>
      <KeyboardAvoidingView 
      behavior={Platform.OS==='ios'?'position':null}>
          <View style={{ marginTop: "24%", paddingBottom:Platform.OS==='ios'?0: "45%" }}>
            <View style={{ marginHorizontal: "8%" }}>
              <View style={{ paddingBottom: "5%" }}>
                <Text style={styles.addDescriptionText}>Add description</Text>
              </View>

              <View>
                <View>
                  <Text style={styles.descriptionTitleText}>Title</Text>
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    style={[
                      styles.titleTextInput,
                      {
                        paddingTop: Platform.OS === "ios" ? 12 : 10,
                        paddingBottom: Platform.OS === "ios" ? 12 : 10,
                        borderColor: this.state.border_color_1
                      }
                    ]}
                    underlineColorAndroid="transparent"
                    placeholder="Give your dream a title"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onTouchEndCapture={() => this.onTouchTitle()}
                    onChangeText={this.handleTitle}
                  />
                </View>
              </View>

              <View>
                <View>
                  <Text style={styles.descriptionTitleText}>Story</Text>
                </View>
                <View style={styles.textInputContainer}>
                  <TextInput
                    style={[
                      styles.titleTextInput,
                      {
                        textAlignVertical: "top",
                        paddingTop: Platform.OS === "ios" ? 12 : 15,
                        paddingBottom: Platform.OS === "ios" ? 12 : 15,
                        borderColor: this.state.border_color_2
                      }
                    ]}
                    underlineColorAndroid="transparent"
                    placeholder="Describe your dream in details. Where are you? Who are you with? What are you doing? How Do you feel?"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    multiline={true}
                    editable={true}
                    onTouchEndCapture={() => this.onTouchStory()}
                    onChangeText={this.handleStory}
                  />
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop:5
                }}
              >
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Image
                    source={Static_Images.image_play}
                    style={{ width: 70, height: 70 }}
                  />
                </View>
                <View style={{ flex: 1, margin: "5%" }}>
                  <Image
                    style={{
                      height: 15,
                      width: "100%",
                      alignSelf: "center",
                      marginEnd: 10,
                      opacity: 0.5,
                      resizeMode: "stretch"
                    }}
                    source={Static_Images.image_record_audio}
                  />
                  <Text
                    style={{
                      color: "white",
                      alignSelf: "baseline",
                      marginTop: 8,
                      fontSize: 12,
                      fontFamily: theme.FONT_MEDIUM
                    }}
                  >
                    3:59
                  </Text>
                </View>
              </View>

              {this.state.recording_visible ? (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row"
                  }}
                >
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <TouchableOpacity onPress={() => this.onStopPress()}>
                      <Image
                        source={icon_play}
                        style={{ width: 70, height: 70 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1, margin: "5%" }}>
                    <Image
                      style={{
                        height: 15,
                        width: "100%",
                        alignSelf: "center",
                        marginEnd: 10,
                        opacity: 0.5,
                        resizeMode: "stretch"
                      }}
                      source={Static_Images.image_record_audio}
                    />
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center"
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          alignSelf: "baseline",
                          marginTop: 8,
                          fontSize: 12,
                          fontFamily: theme.FONT_MEDIUM
                        }}
                      >
                        {this.state.minutes_Counter}:
                        {this.state.seconds_Counter}
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          alignSelf: "baseline",
                          marginTop: 8,
                          fontSize: 12,
                          fontFamily: theme.FONT_REGULAR,
                          marginHorizontal: 5
                        }}
                      >
                        {this.state.text_recording}
                      </Text>
                      {this.state.play_icon ? (
                        <Animatable.View
                          animation="bounceIn"
                          easing="ease-out"
                          iterationCount="infinite"
                          style={{
                            width: 12,
                            height: 12,
                            borderRadius: 12 / 2,
                            backgroundColor: "red",
                            marginTop: 25,
                            marginLeft: 3
                          }}
                        />
                      ) : (
                        <View
                          style={{
                            width: 12,
                            height: 12,
                            marginTop: 25,
                            marginLeft: 3
                          }}
                        />
                      )}
                    </View>
                  </View>
                </View>
              ) : null}

              <View>
                {this.state.tags_visible === true ? (
                  <View style={{ marginBottom: "5%" }}>
                    {/* <View>
                      <Text style={styles.descriptionTitleText}>New Tag</Text>
                    </View> */}
                    <View>
                      <Tags
                        textInputProps={{
                          placeholder: "Write new tag e.g. Family",
                          color: "white",
                          placeholderTextColor: "white"
                        }}
                        inputContainerStyle={{
                          backgroundColor: "transparent",
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: "#886cca"
                        }}
                        renderTag={({ tag, index, onPress }) => (
                          <TouchableOpacity
                            key={`${tag}-${index}`}
                            style={{
                              marginHorizontal: "2%",
                              marginVertical: "1%"
                            }}
                          >
                            <View
                              style={{
                                flexDirection: "row",
                                backgroundColor: theme.PRIMARY_COLOR,
                                justifyContent: "space-between",
                                borderRadius: 6,
                                paddingVertical: 5,
                                paddingHorizontal: 10
                              }}
                            >
                              <View style={{ padding: "1%", marginEnd: "1%" }}>
                                <Text
                                  style={{
                                    color: "white",
                                    fontFamily: theme.FONT_SEMI_BOLD
                                  }}
                                >
                                  {tag}
                                </Text>
                              </View>
                              <View style={{ alignSelf: "center" }}>
                                <TouchableOpacity
                                  onPress={onPress}
                                  style={{ padding: 5 }}
                                >
                                  <Image
                                    source={Static_Icons.icon_close}
                                    style={{
                                      height: 10,
                                      width: 10,
                                      opacity: 0.6
                                    }}
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                          </TouchableOpacity>
                        )}
                      />
                    </View>
                  </View>
                ) : null}
                <View style={{ flexDirection: "row",marginTop:10 }}>
                  <GradientButton
                    title="+ Add tags"
                    customClick={this.ShowHideTextComponentView}
                  />

                  <View style={{ marginStart: 15 }}>
                    <TouchableOpacity onPress={this.onButtonStart}>
                      <LinearGradient
                        colors={["#817DE8", "#9E68F0"]}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "transparent",
                          color: "#ffffff",
                          paddingVertical: 15,
                          paddingHorizontal: 25,
                          borderRadius: 30,
                          borderWidth: 0
                        }}
                      >
                        <Text
                          style={{
                            color: "#ffffff",
                            fontFamily: theme.FONT_SEMI_BOLD,
                            fontSize: 16,
                            letterSpacing: 0.3,
                            opacity: 0.9,
                            textAlign: "center"
                          }}
                        >
                          +
                        </Text>
                        <Image
                          source={Static_Icons.icon_microphone}
                          style={{
                            width: 22,
                            height: 22,
                            marginStart: 3,
                            resizeMode: "contain"
                          }}
                        />
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
  }
}
