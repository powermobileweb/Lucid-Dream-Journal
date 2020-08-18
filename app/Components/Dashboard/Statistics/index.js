import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  Platform,
  TouchableOpacity,
} from 'react-native';

import Modal from '../../CustomModal';
import LinearGradient from 'react-native-linear-gradient';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import theme from '../../../Theme'
import {Static_Images, Static_Icons} from '../../../Constants'

import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

var screen = Dimensions.get('window');

export default class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {

      statistic_count:1,

      isOpen: false,
      isDisabled: false,

    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        {this.state.statistic_count===0?(
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={() => this.refs.modal3.open()}>
              <View style={{alignItems:'center'}}>
            <Image source={Static_Images.image_stats_locked} style={{width:50,height:50,tintColor:'white'}}/>
            <Text style={{color:'white',fontSize:18,fontFamily:theme.FONT_DISPLAY_BOLD,letterSpacing:0.5,marginTop:'5%'}}> We need more </Text>
            <Text style={{color:'white',fontSize:12,fontFamily:theme.FONT_SEMI_BOLD,opacity:0.6,textAlign:'center',paddingHorizontal:'28%',marginTop:'2%'}}>Analyzing your dreams is a great way to gain better self knowledge</Text>
            {/* <Button onPress={() => this.refs.modal3.open()} style={styles.btn}
            title="MODAL"/> */}
            </View>
            </TouchableOpacity>

            <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
              <View style={{width:'100%',height:'100%'}}>
                <LinearGradient colors={['#817DE8', '#9E68F0']} style={{width:'100%',height:'82%',borderTopLeftRadius:10,borderTopRightRadius:10}}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>

                    </View>
                    <TouchableOpacity style={{alignSelf:'flex-end',paddingHorizontal:'5%',paddingVertical:'4%'}} onPress={() => this.refs.modal3.close()}>
                    <Image source={Static_Icons.icon_close} style={{width:12,height:12}}/>
                    </TouchableOpacity>
                  </View>
                  <View style={{padding:'8%',alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:24,fontFamily:theme.FONT_DISPLAY_BOLD,textAlign:'center',letterSpacing:0.5}}>Subscribe to Lucid dreams app</Text>
                    <Text style={{color:'white',fontSize:14,fontFamily:theme.FONT_MEDIUM,opacity:0.6,textAlign:'center',letterSpacing:0.5,marginVertical:'5%'}}>Remove ads, unlock full dream statistics and all application features</Text>
                    <Text style={{color:'white',fontSize:30,fontFamily:theme.FONT_DISPLAY_BOLD,marginTop:'2%'}}>6.99 {'\u20AC'}</Text>
                    <Text style={{color:'white',fontSize:16,fontFamily:theme.FONT_MEDIUM,opacity:0.8,letterSpacing:0.5}}>per month</Text>
                  </View>
                </LinearGradient>
                <View style={{flex:1,height:'18%',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:theme.PRIMARY_COLOR,fontFamily:theme.FONT_SEMI_BOLD,fontSize:18}}>Subscribe now</Text>
                </View>
              </View>
            </Modal>
          </View>
        ):(
          <View style={{flex:1}}>
            <View style={{alignItems:'center',paddingTop:Platform.OS==='ios'?25:'10%',paddingBottom:Platform.OS==='ios'?10:"3%"}}>
                <Text style={{color:'white',fontFamily:theme.FONT_SEMI_BOLD,fontSize:18,letterSpacing:0.5}}>Statistics</Text>
            </View>
            <Tabs/>
          </View>
        )}
      </View>
      
    );
  }
}

const Tabs= createAppContainer(

  createMaterialTopTabNavigator(
    {
      'Last 7 days': Tab1,
      'Last 30 days': Tab2,
      'All time':Tab3,
    },
    {
      initialRouteName:'Last 7 days',
      tabBarPosition: 'top',
      swipeEnabled:true,
      backBehavior:'none',
      lazy:false,
      animationEnabled:true,
      tabBarOptions: {
        upperCaseLabel:false,
        scrollEnabled:false,
        pressColor:'gray',
        activeTintColor:'white',
        inactiveTintColor:'#a295d2',
        indicatorStyle:{
          backgroundColor:theme.PRIMARY_COLOR,
          width:Dimensions.get('window').width / 3,
          alignSelf:'center',
          height:5,
          borderTopLeftRadius:30,
          borderTopRightRadius:30,
        },
        labelStyle: {
          fontFamily:theme.FONT_SEMI_BOLD,
          fontSize:13,
          alignSelf:'center',
        },
        tabStyle: {
          // height:40,
          width:Dimensions.get('window').width / 3,
          //width:Dimensions.get('window').width / 4
        },
        style: {
          backgroundColor: 'transparent',
        },
      }
    }
  )
);



const styles = StyleSheet.create({


  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal3: {
    height: '55%',
    width: '80%',
    borderRadius: 10,
  },

  text: {
    color: "black",
    fontSize: 22
  }

});
