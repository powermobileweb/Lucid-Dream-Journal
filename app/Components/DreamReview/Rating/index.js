import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import theme from "../../../Theme";
import styles from "../../Dashboard/style";
import CustomFlatlist from "../../CustomFlatlist";
import { Static_Images, my_journal_data } from "../../../Constants";
import LinearGradient from "react-native-linear-gradient";

import { openDatabase } from "react-native-sqlite-storage";
var db = openDatabase({ name: "UserDatabase.db" });

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [], //Sqlite flatlist data
      visible_flatlist:true,

      star1: false,
      star2: false,
      star3: false,
      star4: false,
      star5: false
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

  searchRating = text => {    
    const newData = this.arrayholder.filter(item => {      
      const itemData = `${item.rating}`;
      // ${item.date.toUpperCase()} ${item.time.toUpperCase()}
      
       const textData = text;
        
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
                paddingHorizontal:'2%',
                alignItems: "center",
                marginTop: 20,
                marginBottom: 10
              }}
            >
              {this.state.star1 ? (
                <LinearGradient
                  colors={["#817DE8", "#9E68F0"]}
                  style={[styles.subView,{borderColor:'transparent'}]}
                >
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    onPress={() => this.setState({ star1: true })}
                  >
                    <Text style={styles.numbers}>1</Text>
                    <Image
                      source={Static_Images.image_full_star}
                      style={{ width: 15, height: 15 }}
                    />
                  </TouchableOpacity>
                </LinearGradient>
              ) : (
                <TouchableOpacity
                  style={styles.subView}
                  onPress={() => {this.searchRating(1);this.setState({ star1: true,star2:false,star3:false,star4:false,star5:false })}}
                >
                  <Text style={styles.numbers}>1</Text>
                  <Image
                    source={Static_Images.image_full_star}
                    style={{ width: 15, height: 15 }}
                  />
                </TouchableOpacity>
              )}

              {this.state.star2 ? (
                <LinearGradient
                  colors={["#817DE8", "#9E68F0"]}
                  style={[styles.subView,{borderColor:'transparent'}]}
                >
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    onPress={() => this.setState({ star2: true })}
                  >
                    <Text style={styles.numbers}>2</Text>
                    <Image
                      source={Static_Images.image_full_star}
                      style={{ width: 15, height: 15 }}
                    />
                  </TouchableOpacity>
                </LinearGradient>
              ) : (
                <TouchableOpacity
                  style={styles.subView}
                  onPress={() => {this.searchRating(2);this.setState({ star2: true,star1:false,star3:false,star4:false,star5:false })}}
                >
                  <Text style={styles.numbers}>2</Text>
                  <Image
                    source={Static_Images.image_full_star}
                    style={{ width: 15, height: 15 }}
                  />
                </TouchableOpacity>
              )}

              {this.state.star3 ? (
                <LinearGradient
                  colors={["#817DE8", "#9E68F0"]}
                  style={[styles.subView,{borderColor:'transparent'}]}
                >
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    onPress={() => this.setState({ star3: true })}
                  >
                    <Text style={styles.numbers}>3</Text>
                    <Image
                      source={Static_Images.image_full_star}
                      style={{ width: 15, height: 15 }}
                    />
                  </TouchableOpacity>
                </LinearGradient>
              ) : (
                <TouchableOpacity
                  style={styles.subView}
                  onPress={() => {this.searchRating(3);this.setState({ star3: true,star1:false,star2:false,star4:false,star5:false })}}
                >
                  <Text style={styles.numbers}>3</Text>
                  <Image
                    source={Static_Images.image_full_star}
                    style={{ width: 15, height: 15 }}
                  />
                </TouchableOpacity>
              )}

              {this.state.star4 ? (
                <LinearGradient
                  colors={["#817DE8", "#9E68F0"]}
                  style={[styles.subView,{borderColor:'transparent'}]}
                >
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    onPress={() => this.setState({ star4: true })}
                  >
                    <Text style={styles.numbers}>4</Text>
                    <Image
                      source={Static_Images.image_full_star}
                      style={{ width: 15, height: 15 }}
                    />
                  </TouchableOpacity>
                </LinearGradient>
              ) : (
                <TouchableOpacity
                  style={styles.subView}
                  onPress={() => {this.searchRating(4);this.setState({ star4: true,star1:false,star2:false,star3:false,star5:false })}}
                >
                  <Text style={styles.numbers}>4</Text>
                  <Image
                    source={Static_Images.image_full_star}
                    style={{ width: 15, height: 15 }}
                  />
                </TouchableOpacity>
              )}

              {this.state.star5 ? (
                <LinearGradient
                  colors={["#817DE8", "#9E68F0"]}
                  style={[styles.subView,{borderColor:'transparent'}]}
                >
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    onPress={() => this.setState({ star5: true })}
                  >
                    <Text style={styles.numbers}>5</Text>
                    <Image
                      source={Static_Images.image_full_star}
                      style={{ width: 15, height: 15 }}
                    />
                  </TouchableOpacity>
                </LinearGradient>
              ) : (
                <TouchableOpacity
                  style={styles.subView}
                  onPress={() => {this.searchRating(5);this.setState({ star5: true,star1:false,star2:false,star3:false,star4:false })}}
                >
                  <Text style={styles.numbers}>5</Text>
                  <Image
                    source={Static_Images.image_full_star}
                    style={{ width: 15, height: 15 }}
                  />
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
                <Image source={Static_Images.image_go_pro} style={{width:70,height:70,marginBottom:10}}/>
                <Text style={styles.component_text}>No Items Available</Text>
              </View>
            )}
            
          </View>
          ):(
            <View style={{flex:1,alignItems:'center',justifyContent:'center',opacity:0.6}}>
                <Image source={Static_Images.image_go_pro} style={{width:70,height:70}}/>
                <Text style={[styles.component_text,{marginVertical:10}]}>Rating Data Unavailable!</Text>
            </View>
            
          )}
      </View>
    );
  }
}
