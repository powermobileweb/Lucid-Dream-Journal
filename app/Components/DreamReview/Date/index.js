import React, { Component } from "react";
import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Static_Images } from "../../../Constants";
import CustomFlatlist from "../../CustomFlatlist";

import theme from "../../../Theme";
import styles from '../../Dashboard/style'

import { openDatabase } from "react-native-sqlite-storage";
var db = openDatabase({ name: "UserDatabase.db" });

export default class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [], //Sqlite flatlist data
      visible_flatlist:true,

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
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: "5%"}}>
        <Calendar
          // Collection of dates that have to be marked. Default = {}
          current={new Date()}
          hideExtraDays={false}
          disableMonthChange={true}
          renderArrow={direction => this.Arrow(direction)}
          onPressArrowLeft={substractMonth => substractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          markingType={"custom"}
          markedDates={{
            "2019-05-30": {
              customStyles: {
                container: {
                  backgroundColor: "#7447bb"
                },
                text: {
                  color: "white"
                }
              }
            },
            "2019-05-25": {
              customStyles: {
                container: {
                  backgroundColor: "transparent",
                  borderWidth: 2,
                  borderColor: "#7447bb"
                },
                text: {
                  color: "white"
                }
              }
            },
            "2019-05-20": {
              customStyles: {
                container: {
                  backgroundColor: "transparent",
                  borderWidth: 2,
                  borderColor: "#7447bb"
                },
                text: {
                  color: "white"
                }
              }
            },
            "2019-05-27": {
              customStyles: {
                container: {
                  backgroundColor: "transparent",
                  borderWidth: 2,
                  borderColor: "#7447bb"
                },
                text: {
                  color: "white"
                }
              }
            },
            "2019-05-31": { disabled: true, disableTouchEvent: true }
          }}
          theme={{
            arrowColor: "white",
            backgroundColor: "transparent",
            calendarBackground: "transparent",
            textSectionTitleColor: "#ffffff",
            selectedDayBackgroundColor: "#ffffff",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#ffffff",
            dayTextColor: "#ffffff",
            textDisabledColor: "#8379bc",
            dotColor: "#00adf5",
            selectedDotColor: "#ffffff",
            monthTextColor: "white",
            indicatorColor: "white",
            textDayFontFamily: theme.FONT_CURVED,
            textMonthFontFamily: theme.FONT_CURVED,
            textDayHeaderFontFamily: theme.FONT_CURVED,
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300"
            //textDayFontSize: 16,
            //textMonthFontSize: 16,
            //textDayHeaderFontSize: 16,
          }}
        />

          <ScrollView showsVerticalScrollIndicator={false}>
            <CustomFlatlist 
              style={{paddingBottom: 50}}
              data={this.state.FlatListItems} 
              keyExtractor={item => item.title}
            />
          </ScrollView>
        </View>
        </ScrollView>
      </View>
  
    );
  }

  Arrow = direction => {
    if (direction === "left") {
      return (
        <Image
          source={Static_Images.image_left_arrow}
          style={{ width: 24, height: 24 }}
        />
      );
    } else {
      return (
        <Image
          source={Static_Images.image_right_arrow}
          style={{ width: 24, height: 24, opacity: 0.3 }}
        />
      );
    }
  };
}
