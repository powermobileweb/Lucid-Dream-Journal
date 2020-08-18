import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity,ScrollView } from "react-native";
import CustomFlatlist from "../../CustomFlatlist";
import {
  my_journal_data,
  Static_Images,
  Static_Icons
} from "../../../Constants";
import LinearGradient from "react-native-linear-gradient";
import styles from "../../Dashboard/style";

import { openDatabase } from "react-native-sqlite-storage";
var db = openDatabase({ name: "UserDatabase.db" });

export default class Mood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [], //Sqlite flatlist data
      visible_flatlist:true,

      mood1: false,
      mood2: false,
      mood3: false,
      mood4: false,
      mood5: false
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

  searchMood = text => {    
    const newData = this.arrayholder.filter(item => {      
      const itemData = `${item.fifth_answer.toUpperCase()}`;
      // ${item.date.toUpperCase()} ${item.time.toUpperCase()}
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    
    if(newData != ""){
      this.setState({ visible_flatlist:true,FlatListItems: newData });  
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
            {this.state.mood1 ? (
              <LinearGradient
                colors={["#817DE8", "#9E68F0"]}
                style={[styles.subView, { borderColor: "transparent" }]}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onPress={() => this.setState({ mood1: false })}
                >
                  <Text style={styles.numbers}>1</Text>
                  <Image
                    source={Static_Icons.icon_mood_super_naegative}
                    style={{ width: 15, height: 15 }}
                  />
                </TouchableOpacity>
              </LinearGradient>
            ) : (
              <TouchableOpacity
                style={styles.subView}
                onPress={() => {this.searchMood("Super Negative");this.setState({mood1:true,mood2:false,mood3:false,mood4:false,mood5:false})}}
              >
                <Text style={styles.numbers}>1</Text>
                <Image
                  source={Static_Icons.icon_mood_super_naegative}
                  style={{ width: 15, height: 15 }}
                />
              </TouchableOpacity>
            )}

            {this.state.mood2 ? (
              <LinearGradient
                colors={["#817DE8", "#9E68F0"]}
                style={[styles.subView, { borderColor: "transparent" }]}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onPress={() => this.setState({ mood2: false })}
                >
                  <Text style={styles.numbers}>2</Text>
                  <Image
                    source={Static_Icons.icon_mood_negative}
                    style={{ width: 15, height: 15 }}
                  />
                </TouchableOpacity>
              </LinearGradient>
            ) : (
              <TouchableOpacity
                style={styles.subView}
                onPress={() => {this.searchMood("Negative");this.setState({ mood2: true,mood1:false,mood3:false,mood4:false,mood5:false })}}
              >
                <Text style={styles.numbers}>2</Text>
                <Image
                  source={Static_Icons.icon_mood_negative}
                  style={{ width: 15, height: 15 }}
                />
              </TouchableOpacity>
            )}

            {this.state.mood3 ? (
              <LinearGradient
                colors={["#817DE8", "#9E68F0"]}
                style={[styles.subView, { borderColor: "transparent" }]}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onPress={() => this.setState({ mood3: false })}
                >
                  <Text style={styles.numbers}>3</Text>
                  <Image
                    source={Static_Icons.icon_mood_normal}
                    style={{ width: 15, height: 15 }}
                  />
                </TouchableOpacity>
              </LinearGradient>
            ) : (
              <TouchableOpacity
                style={styles.subView}
                onPress={() => {this.searchMood("Normal");this.setState({ mood3: true,mood1:false,mood2:false,mood4:false,mood5:false })}}
              >
                <Text style={styles.numbers}>3</Text>
                <Image
                  source={Static_Icons.icon_mood_normal}
                  style={{ width: 15, height: 15 }}
                />
              </TouchableOpacity>
            )}

            {this.state.mood4 ? (
              <LinearGradient
                colors={["#817DE8", "#9E68F0"]}
                style={[styles.subView, { borderColor: "transparent" }]}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onPress={() => this.setState({ mood4: false })}
                >
                  <Text style={styles.numbers}>4</Text>
                  <Image
                    source={Static_Icons.icon_mood_nice}
                    style={{ width: 15, height: 15 }}
                  />
                </TouchableOpacity>
              </LinearGradient>
            ) : (
              <TouchableOpacity
                style={styles.subView}
                onPress={() => {this.searchMood("Nice");this.setState({ mood4: true,mood1:false,mood2:false,mood3:false,mood5:false })}}
              >
                <Text style={styles.numbers}>4</Text>
                <Image
                  source={Static_Icons.icon_mood_nice}
                  style={{ width: 15, height: 15 }}
                />
              </TouchableOpacity>
            )}

            {this.state.mood5 ? (
              <LinearGradient
                colors={["#817DE8", "#9E68F0"]}
                style={[styles.subView, { borderColor: "transparent" }]}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onPress={() => this.setState({ mood5: false })}
                >
                  <Text style={styles.numbers}>5</Text>
                  <Image
                    source={Static_Icons.icon_mood_woop_woop}
                    style={{ width: 15, height: 15 }}
                  />
                </TouchableOpacity>
              </LinearGradient>
            ) : (
              <TouchableOpacity
                style={styles.subView}
                onPress={() => {this.searchMood("Woop woop");this.setState({ mood5: true,mood1:false,mood2:false,mood3:false,mood4:false })}}
              >
                <Text style={styles.numbers}>5</Text>
                <Image
                  source={Static_Icons.icon_mood_woop_woop}
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
              <Image source={Static_Icons.icon_sleep_normal} style={{width:70,height:70,marginBottom:10}}/>
              <Text style={styles.component_text}>No Items Available</Text>
            </View>
          )}
        </View>
   
        ):(
          <View style={{flex:1,alignItems:'center',justifyContent:'center',opacity:0.6}}>
              <Image source={Static_Icons.icon_sleep_normal} style={{width:70,height:70}}/>
              <Text style={[styles.component_text,{marginVertical:10}]}>Mood Data Unavailable!</Text>
          </View>
           
        )}
      </View>
    );
  }
}
