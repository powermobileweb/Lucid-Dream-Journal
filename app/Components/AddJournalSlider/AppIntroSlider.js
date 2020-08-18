import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
  Alert,
  Image,
  I18nManager,
  AsyncStorage
} from "react-native";
import DefaultSlide from "./DefaultSlide";
import { Static_Images } from "../../Constants";
import { withNavigation } from "react-navigation";

import { openDatabase } from "react-native-sqlite-storage";
var db = openDatabase({ name: "UserDatabase.db" });
import moment from "moment";

const { width, height } = Dimensions.get("window");

const isIphoneX =
  Platform.OS === "ios" &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (height === 812 || width === 812);

const isAndroidRTL = I18nManager.isRTL && Platform.OS === "android";

class AppIntroSlider extends React.Component {
  static defaultProps = {
    activeDotStyle: {
      backgroundColor: "#7e66e2"
    },
    dotStyle: {
      backgroundColor: "#5c49ae"
    },
    skipLabel: "Skip",
    doneLabel: "Done",
    nextLabel: "Next",
    prevLabel: "Back",
    buttonStyle: null,
    buttonTextStyle: null,
    paginationStyle: null,
    showDoneButton: true,
    showNextButton: true
  };
  state = {
    width,
    height,
    activeIndex: 0,

    title: "",
    description: "",
    rating: "",
    first_answer: "",
    second_answer: "",
    type: "",
    fifth_answer: "",
    date:"",
    time:"",
    tags:"",
  };

  //Sqlite Insert Items
  _OnSubmitData = () => {
    let self = this;
    //alert('Ok')
    const { title } = self.state;
    const { description } = self.state;
    const { rating } = self.state;
    const { first_answer } = self.state;
    const { second_answer } = self.state;
    const { type } = self.state;
    const { fifth_answer } = self.state;
    const { tags } = self.state;

    //alert(tags)

    if (title) {
      if (description) {
        if (rating) {
          if (first_answer) {
            if (second_answer) {
              if (type) {
                if (fifth_answer) {
                  db.transaction(function(tx) {
                    tx.executeSql(
                      "INSERT INTO table_user (date, time, title, description, rating, first_answer, second_answer, type, fifth_answer, tags) VALUES (?,?,?,?,?,?,?,?,?,?)",
                      [moment().format("MMM DD"), moment().format("LT"), title, description, rating, first_answer, second_answer, type, fifth_answer, tags],
                      (tx, results) => {
                        console.log("Results", results.rowsAffected);
                        if (results.rowsAffected > 0) {
                          Alert.alert(
                            "Success",
                            "Dream added Successfully",
                            [
                              {
                                text: "Ok",
                                onPress: () =>
                                  self.props.navigation.navigate("Dashboard")
                              }
                            ],
                            { cancelable: false }
                          );
                        } else {
                          Alert.alert("Failed");
                        }
                      }
                    );
                  });
                } else {
                  Alert.alert("Please select Fifth Question");
                }
              } else {
                Alert.alert("Please select Lucid or Not lucid");
              }
            } else {
              Alert.alert("Please select Second Question");
            }
          } else {
            Alert.alert("Please select First Question");
          }
        } else {
          Alert.alert("Ratings","Please give Ratings");
        }
      } else {
        Alert.alert("Add description","Please enter Story");
      }
    } else {
      Alert.alert("Add description",
      "Please enter Title");
    }
  };

  goToSlide = pageNum => {
    this.setState({ activeIndex: pageNum });
    this.flatList.scrollToOffset({
      offset: this._rtlSafeIndex(pageNum) * this.state.width
    });
  };

  // Get the list ref
  getListRef = () => this.flatList;

  _onDonePress = () => {
    this.props.onDone && this.props.onDone;
    AsyncStorage.multiGet([
      "ans1",
      "ans2",
      "ans3",
      "ans4title",
      "ans4story",
      "ans5",
      "ans6",
      "TagsKey",
    ]).then(response => {
      //alert(response[0][1]+ ", " + response[1][1]+ ", " + response[2][1])

      this.setState({
        title: response[3][1],
        description: response[4][1],
        rating: response[6][1],
        first_answer: response[0][1],
        second_answer: response[1][1],
        type: response[2][1],
        fifth_answer: response[5][1],
        tags: response[7][1],
      });

      //alert(this.state.tags)
      this._OnSubmitData();
      // let Answers = [
      //   {ans1:this.state.first_answer},
      //   {ans2:this.state.second_answer},
      //   {ans3:this.state.type},
      //   {ans4title:this.state.title},
      //   {ans4story:this.state.description},
      //   {ans5:this.state.fifth_answer},
      //   {ans6:this.state.rating},
      //   {tags:this.state.tags}
      // ];

      // alert(Answers)
      // Alert.alert(
      //   "Success",
      //   JSON.stringify(Answers),
      //   [
      //     {
      //       text: "Ok",
      //       onPress: () =>
      //         this.props.navigation.navigate("SavedFirstEntry")
      //     }
      //   ],
      //   { cancelable: false }
      // );

    });

    //alert('Done')
    //this.props.navigation.navigate('SavedFirstEntry')
  };

  _onNextPress = () => {
    this.goToSlide(this.state.activeIndex + 1);
    this.props.onSlideChange &&
      this.props.onSlideChange(
        this.state.activeIndex + 1,
        this.state.activeIndex
      );
  };
  _onPrevPress = () => {
    this.goToSlide(this.state.activeIndex - 1);
    this.props.onSlideChange &&
      this.props.onSlideChange(
        this.state.activeIndex - 1,
        this.state.activeIndex
      );
  };

  _OnBackButtonPress = () => {
    if (this.state.activeIndex < 1) {
      this.props.navigation.goBack();
    }

    this.goToSlide(this.state.activeIndex - 1);
    this.props.onSlideChange &&
      this.props.onSlideChange(
        this.state.activeIndex - 1,
        this.state.activeIndex
      );
  };

  _renderItem = item => {
    const { width, height } = this.state;
    const props = { ...item.item, width, height };
    return (
      <View style={{ width: this.state.width, height: this.state.height }}>
        {this.props.renderItem ? (
          this.props.renderItem(props)
        ) : (
          <DefaultSlide bottomButton={this.props.bottomButton} {...props} />
        )}
      </View>
    );
  };

  _renderButton = (name, onPress) => {
    const show = this.props[`show${name}Button`];
    const content = this.props[`render${name}Button`]
      ? this.props[`render${name}Button`]()
      : this._renderDefaultButton(name);
    return show && this._renderOuterButton(content, name, onPress);
  };

  _renderDefaultButton = name => {
    let content = (
      <Text style={[styles.buttonText, this.props.buttonTextStyle]}>
        {this.props[`${name.toLowerCase()}Label`]}
      </Text>
    );
    if (this.props.bottomButton) {
      content = (
        <View
          style={[
            styles.bottomButton,
            (name === "Skip" || name === "Prev") && {
              backgroundColor: "transparent"
            },
            this.props.buttonStyle
          ]}
        >
          {content}
        </View>
      );
    }
    return content;
  };

  _renderOuterButton = (content, name, onPress) => {
    const style =
      name === "Skip" || name === "Prev"
        ? styles.leftButtonContainer
        : styles.rightButtonContainer;
    return (
      <View style={!this.props.bottomButton && style}>
        <TouchableOpacity
          onPress={onPress}
          style={
            this.props.bottomButton ? styles.flexOne : this.props.buttonStyle
          }
        >
          {content}
        </TouchableOpacity>
      </View>
    );
  };

  _renderNextButton = () => this._renderButton("Next", this._onNextPress);

  _renderPrevButton = () => this._renderButton("Prev", this._onPrevPress);

  _renderDoneButton = () => this._renderButton("Done", this._onDonePress);

  _renderSkipButton = () =>
    // scrollToEnd does not work in RTL so use goToSlide instead
    this._renderButton("Skip", () =>
      this.props.onSkip
        ? this.props.onSkip()
        : this.goToSlide(this.props.slides.length - 1)
    );

  _renderPagination = () => {
    const isLastSlide = this.state.activeIndex === this.props.slides.length - 1;
    const isFirstSlide = this.state.activeIndex === 0;

    const skipBtn =
      (!isFirstSlide && this._renderPrevButton()) ||
      (!isLastSlide && this._renderSkipButton());
    const btn = isLastSlide
      ? this._renderDoneButton()
      : this._renderNextButton();

    return (
      <View style={[styles.paginationContainer, this.props.paginationStyle]}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <View style={{ flex: 0.2, paddingLeft: "3%" }}>
            <TouchableOpacity onPress={() => this._OnBackButtonPress()}>
              <Image
                source={Static_Images.image_back_arrow}
                style={{
                  height: 30,
                  width: 30,
                  alignItems: "center",
                  alignSelf: "flex-start"
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.paginationDots}>
            {this.props.slides.length > 1 &&
              this.props.slides.map((_, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.dot,
                    this._rtlSafeIndex(i) === this.state.activeIndex
                      ? this.props.activeDotStyle
                      : this.props.dotStyle
                  ]}
                  onPress={() => this.goToSlide(i)}
                />
              ))}
          </View>
          <View style={{ flex: 0.2 }} />
        </View>
        {btn}
        {skipBtn}
      </View>
    );
  };

  _rtlSafeIndex = i => (isAndroidRTL ? this.props.slides.length - 1 - i : i);

  _onMomentumScrollEnd = e => {
    const offset = e.nativeEvent.contentOffset.x;
    // Touching very very quickly and continuous brings about
    // a variation close to - but not quite - the width.
    // That's why we round the number.
    // Also, Android phones and their weird numbers
    const newIndex = this._rtlSafeIndex(Math.round(offset / this.state.width));
    if (newIndex === this.state.activeIndex) {
      // No page change, don't do anything
      return;
    }
    const lastIndex = this.state.activeIndex;
    this.setState({ activeIndex: newIndex });
    this.props.onSlideChange && this.props.onSlideChange(newIndex, lastIndex);
  };

  _onLayout = () => {
    const { width, height } = Dimensions.get("window");
    if (width !== this.state.width || height !== this.state.height) {
      // Set new width to update rendering of pages
      this.setState({ width, height });
      // Set new scroll position
      const func = () => {
        this.flatList.scrollToOffset({
          offset: this._rtlSafeIndex(this.state.activeIndex) * width,
          animated: false
        });
      };
      Platform.OS === "android" ? setTimeout(func, 0) : func();
    }
  };

  render() {
    // Separate props used by the component to props passed to FlatList
    const {
      hidePagination,
      activeDotStyle,
      dotStyle,
      skipLabel,
      doneLabel,
      nextLabel,
      prevLabel,
      buttonStyle,
      buttonTextStyle,
      renderItem,
      data,
      ...otherProps
    } = this.props;

    return (
      <View style={styles.flexOne}>
        <FlatList
          ref={ref => (this.flatList = ref)}
          data={this.props.slides}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          style={styles.flatList}
          renderItem={this._renderItem}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          extraData={this.state.width}
          onLayout={this._onLayout}
          {...otherProps}
        />
        {!hidePagination && this._renderPagination()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1
  },
  flatList: {
    flex: 1,
    flexDirection: isAndroidRTL ? "row-reverse" : "row"
  },
  paginationContainer: {
    alignItems: "center",
    position: "absolute",
    top: 25,
    left: 16,
    right: 16
  },
  paginationDots: {
    flex: 0.6,
    height: 16,
    margin: 16,
    flexDirection: isAndroidRTL ? "row-reverse" : "row",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center"
  },
  dot: {
    width: 7.5,
    height: 7.5,
    borderRadius: 5,
    marginHorizontal: 4
  },
  leftButtonContainer: {
    position: "absolute",
    left: 0
  },
  rightButtonContainer: {
    position: "absolute",
    right: 0
  },
  bottomButton: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, .3)",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    backgroundColor: "transparent",
    color: "#a57ef2",
    fontSize: 18,
    padding: 12
  }
});

export default withNavigation(AppIntroSlider);
