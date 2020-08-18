import React, { Component } from "react";
import { View, Text, ScrollView, AsyncStorage } from "react-native";

import styles from "../NewJournal/style";

import StarRating from "react-native-star-rating";

export default class Question6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "How would you rate this dream?",
      starCount: 0
    };

  }
  

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
    AsyncStorage.setItem('ans6',JSON.stringify(rating))
  }

  render() {
    return (
      <ScrollView>
        <View>
          <View style={{ marginTop: "24%" }}>
            <View
              style={{
                alignSelf: "center",
                marginVertical: "8%",
                marginHorizontal: "14%",
                lineHeight: 20
              }}
            >
              <Text
                style={[
                  styles.titleText,
                  { textAlign: "center", fontSize: 30 }
                ]}
              >
                {this.state.title}
              </Text>
            </View>

            <View style={{ marginHorizontal: "15%", marginVertical: "5%" }}>
              <View
                style={{
                  margin: "5%",
                  flexDirection: "row",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={this.state.starCount}
                  fullStarColor={"#c3a484"}
                  halfStarColor={"#c3a484"}
                  starSize={40}
                  selectedStar={rating => this.onStarRatingPress(rating)}
                  starStyle={{ padding: 15 }}
                  emptyStarColor="#e3b583"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
