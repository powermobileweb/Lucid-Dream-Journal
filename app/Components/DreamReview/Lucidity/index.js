import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import CustomFlatlist from "../../CustomFlatlist";
import {
  my_journal_data,
  Static_Images,
  Static_Icons
} from "../../../Constants";
import LinearGradient from "react-native-linear-gradient";
import styles from "../../Dashboard/style";
import theme from "../../../Theme";

import { openDatabase } from "react-native-sqlite-storage";
import { ScrollView } from "react-native-gesture-handler";
var db = openDatabase({ name: "UserDatabase.db" });

export default class Lucidity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [], //Sqlite flatlist data
      visible_flatlist:true,

      lucid: false,
      notlucid:false,
    };
    this.arrayholder = [];

    db.transaction(tx => {
      tx.executeSql("SELECT * FROM table_user", [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp
        });
        this.arrayholder = temp;
      });
    });
  }

  searchLucidity = text => {    
    const newData = this.arrayholder.filter(item => {      
      const itemData = `${item.type.toUpperCase()}`;
      // ${item.date.toUpperCase()} ${item.time.toUpperCase()}
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });

    if(newData != ""){
    this.setState({ visible_flatlist:true, FlatListItems: newData });  
    }else{
      this.setState({visible_flatlist:false})
    }
  };

  render() {
    return (
      <View style={{ flex: 1, paddingHorizontal: "5%" }}>
        {this.state.FlatListItems != "" ? (
          <View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: "2%",
                alignItems: "center",
                marginTop: 20,
                marginBottom: 10
              }}
            >
              {this.state.notlucid ? (
                <LinearGradient
                  colors={["#817DE8", "#9E68F0"]}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: 'transparent',
                    borderRadius: 30,
                    marginHorizontal: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5
                  }}
                >
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    onPress={() => {this.searchLucidity("not");this.setState({ notlucid: true,lucid:false })}}
                  >
                    <Text style={styles.numbers}>Not Lucid</Text>
                  </TouchableOpacity>
                </LinearGradient>
              ) : (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: theme.PRIMARY_COLOR,
                    borderRadius: 30,
                    marginHorizontal: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5
                  }}
                  onPress={() => {this.searchLucidity("not");this.setState({ notlucid: true,lucid:false })}}
                >
                  <Text style={styles.numbers}>Not Lucid</Text>
                </TouchableOpacity>
              )}

              {this.state.lucid ? (
                <LinearGradient
                  colors={["#817DE8", "#9E68F0"]}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: 'transparent',
                    borderRadius: 30,
                    marginHorizontal: 10,
                    paddingHorizontal: 20,
                    paddingVertical: 5
                  }}
                >
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    onPress={() => {this.searchLucidity("lucid");this.setState({ lucid: true,notlucid:false })}}
                  >
                    <Text style={styles.numbers}>Lucid</Text>
                  </TouchableOpacity>
                </LinearGradient>
              ) : (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: theme.PRIMARY_COLOR,
                    borderRadius: 30,
                    marginHorizontal: 10,
                    paddingHorizontal: 20,
                    paddingVertical: 5
                  }}
                  onPress={() => {this.searchLucidity("lucid");this.setState({ lucid: true,notlucid:false })}}
                >
                  <Text style={styles.numbers}>Lucid</Text>
                </TouchableOpacity>
              )}
            </View>
            {this.state.visible_flatlist?(
              <ScrollView showsVerticalScrollIndicator={false}>
                <CustomFlatlist
                  style={{paddingBottom: 100}}
                  data={this.state.FlatListItems}
                  keyExtractor={item => item.title}
                />
              </ScrollView>
             ):(
                <View style={{height:400,alignItems:'center',justifyContent:'center',opacity:0.6}}>
                  <Image source={Static_Images.image_first_icon} style={{width:70,height:70,resizeMode:'contain',marginBottom:10}}/>
                  <Text style={styles.component_text}>No Items Available</Text>
                </View>
              )}
          </View>
          ):(
            <View style={{flex:1,alignItems:'center',justifyContent:'center',opacity:0.6}}>
                <Image source={Static_Images.image_first_icon} style={{width:70,height:70,resizeMode:'stretch'}}/>
                <Text style={[styles.component_text,{marginVertical:10}]}>Lucidity Data Unavailable!</Text>
            </View>
            
          )}
      </View>
    );
  }
}
