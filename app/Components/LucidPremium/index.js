import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  DeviceEventEmitter,
  Platform,
} from 'react-native';
import Modal from '../CustomModal';
import LinearGradient from 'react-native-linear-gradient';

import {Static_Images, Static_Icons} from '../../Constants';
import styles from './style';
import theme from '../../Theme';
import GradientButton from '../GradientButton';

export default class LucidPremium extends Component {
  constructor (props) {
    super (props);
    this.state = {
      t_and_c_text: "Lucid Premium membership offers €2.99/monthly subscription after 3-day free trial for unlocking all features, premium functionality and removing ads. Payment will be charged to your iTunes Account at confirmation of purchase. Subscription automatically renews unless auto-renewal is turned off at least 24-hours before the end of the current period, and identify the cost of the renewal. Subscriptions may be managed by the user and auto-renewal may be turned off by going to the user's Account Settings after purchase. Any unused portion of a free trial period, if offered, will be forfeited when the user purchases a subscription to that publication, where applicable",
    };
  }

  componentDidMount = () => {
    DeviceEventEmitter.removeAllListeners ('hardwareBackPress');
    DeviceEventEmitter.addListener ('hardwareBackPress', () => {
      this.props.navigation.goBack ();
      return true;
    });
  };

  componentWillUnmount = () => {
    DeviceEventEmitter.removeAllListeners ('hardwareBackPress');
  };

  render () {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={Static_Images.image_intro2_bg}
          style={{top: 0, bottom: 0, left: 0, right: 0, position: 'absolute'}}
          // resizeMode="stretch"
        >

          <TouchableOpacity
            onPress={() => this.props.navigation.goBack ()}
            style={{
              width: 24,
              height: 24,
              alignSelf: 'flex-end',
              flexDirection: 'row',
              flex: 1,
              padding: '7%',
              marginEnd: Platform.OS === 'ios' ? 20 : 10,
              marginTop: Platform.OS === 'ios' ? 15 : 5,
              opacity: 0.6,
            }}
          >
            <Image
              source={Static_Icons.icon_close}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex: 1}}>

              <View style={styles.container}>

                {/* <View style={{ paddingHorizontal: '8%' }}> */}
                <Text style={[styles.titleText, {marginBottom: '2%'}]}>
                  Lucid Premium
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: Platform.OS === 'ios' ? 14 : '5%',
                  }}
                >
                  <Image
                    source={Static_Images.image_plus}
                    style={styles.plusImage}
                  />
                  <Text style={styles.simpleText}>Disable ads</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: Platform.OS === 'ios' ? 14 : '5%',
                  }}
                >
                  <Image
                    source={Static_Images.image_plus}
                    style={styles.plusImage}
                  />
                  <Text style={styles.simpleText}>
                    Backup everything on cloud
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: Platform.OS === 'ios' ? 14 : '5%',
                  }}
                >
                  <Image
                    source={Static_Images.image_plus}
                    style={styles.plusImage}
                  />
                  <Text style={styles.simpleText}>
                    Gain access to full statistics
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: Platform.OS === 'ios' ? 14 : '5%',
                  }}
                >
                  <Image
                    source={Static_Images.image_plus}
                    style={styles.plusImage}
                  />
                  <Text style={styles.simpleText}>Support app development</Text>
                </View>

                <View
                  style={{
                    paddingVertical: Platform.OS === 'ios' ? 10 : '6%',
                    marginVertical: Platform.OS === 'ios' ? 10 : 0,
                  }}
                >
                  <GradientButton
                    style={{fontSize: 16, fontFamily: theme.FONT_SEMI_BOLD}}
                    title="Start Free Trial"
                    customClick={() => this.refs.modal3.open ()}
                  />
                </View>

                <View>
                  <Text
                    style={{
                      fontFamily: theme.FONT_REGULAR,
                      color: 'white',
                      textAlign: 'center',
                      letterSpacing: 0.8,
                      fontSize: 14,
                    }}
                  >
                    First 7 days for free, 2.99$ per month afterwards
                  </Text>
                </View>

                <View style={{paddingVertical: '4%'}}>
                  <Text style={[styles.privacyText, {lineHeight: 18}]}>
                    {this.state.t_and_c_text}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 20,
                  }}
                >
                  <TouchableOpacity>
                    <Text style={styles.privacyText}>Terms of Service</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.privacyText}>Privacy Policy</Text>
                  </TouchableOpacity>
                </View>

                {/* </View> */}
              </View>

            </View>
          </ScrollView>
          <Modal
            style={[styles.modal, styles.modal3]}
            position={'center'}
            ref={'modal3'}
            isDisabled={this.state.isDisabled}
          >
            <View style={{width: '100%', height: '100%'}}>
              <LinearGradient
                colors={['#817DE8', '#9E68F0']}
                style={{
                  width: '100%',
                  height: '82%',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              >
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1}} />
                  <TouchableOpacity
                    style={{
                      alignSelf: 'flex-end',
                      paddingHorizontal: '5%',
                      paddingVertical: '4%',
                    }}
                    onPress={() => this.refs.modal3.close ()}
                  >
                    <Image
                      source={Static_Icons.icon_close}
                      style={{width: 12, height: 12}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{padding: '8%', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 24,
                      fontFamily: theme.FONT_DISPLAY_BOLD,
                      textAlign: 'center',
                      letterSpacing: 0.5,
                    }}
                  >
                    Subscribe to Lucid dreams app
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      fontFamily: theme.FONT_MEDIUM,
                      opacity: 0.6,
                      textAlign: 'center',
                      letterSpacing: 0.5,
                      marginVertical: '5%',
                    }}
                  >
                    Remove ads, unlock full dream statistics and all application
                    features
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 30,
                      fontFamily: theme.FONT_DISPLAY_BOLD,
                      marginTop: '2%',
                    }}
                  >
                    6.99 {'\u20AC'}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontFamily: theme.FONT_MEDIUM,
                      opacity: 0.8,
                      letterSpacing: 0.5,
                    }}
                  >
                    per month
                  </Text>
                </View>
              </LinearGradient>
              <View
                style={{
                  flex: 1,
                  height: '18%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    color: theme.PRIMARY_COLOR,
                    fontFamily: theme.FONT_SEMI_BOLD,
                    fontSize: 18,
                  }}
                >
                  Subscribe now
                </Text>
              </View>
            </View>
          </Modal>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
