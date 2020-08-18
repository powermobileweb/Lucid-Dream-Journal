import React, { Component } from "react";
import {
  Platform,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity
} from "react-native";
import Modal from "../../CustomModal";
import theme from "../../../Theme";
import styles from "../style";
import {
  my_journal_data,
  Static_Images,
  Static_Icons
} from "../../../Constants";
//import checkIfFirstLaunch from '../../../Utils/CheckForFirstTime';
// import { Rating,AirbnbRating, colors } from 'react-native-elements';
import Switch from "react-native-switch-pro";
import * as Animatable from "react-native-animatable";
import BlurOverlay, {
  closeOverlay,
  openOverlay
} from "react-native-blur-overlay";
import StarRating from "react-native-star-rating";
import Tags from "react-native-tags";
import { withNavigation } from "react-navigation";

import { openDatabase } from "react-native-sqlite-storage";
var db = openDatabase({ name: "UserDatabase.db" });

class Journal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //starCount: 3.5
      FlatListItems: [], //Sqlite flatlist data
      isFirstLaunch: false,
      hasCheckedAsyncStorage: false,
      titleText1: "Unlock your dream statistics",
      detailText1:
        "Add 6 more entries to track and analyze your sleep patterns over time",
      titleText2: "Show up",
      detailText2:
        "The real magic starts when you're persistant. We'll help you by sending you a nudge. ",
      first_visible: true,
      second_visible: true,
      value: false,
      viewRef: null,

      modal_title: "",
      modal_desc: "",
      modal_date: "",
      modal_time: "",
      modal_rating: "",
      modal_dream_type: "",
      modal_how_was_sleep: "",
      modal_clarity: "",
      modal_mood: "",
      modal_tags: "",
      modal_music: ""
    };

    db.transaction(tx => {
      tx.executeSql("SELECT * FROM table_user", [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp
        });
      });
    });
  }

  onDreamReview = () => {
    this.props.navigation.navigate("DreamReview");
  };

  handleViewRef = ref => (this.first = ref);
  handleSecondRef = ref => (this.second = ref);
  handleMyDream = ref => (this.dream = ref);

  fadeOut = () => {
    this.first
      .slideOutLeft(500)
      .then(endState =>
        console.log(
          endState.finished ? this.AnimateBottomFirst() : "fadeOut cancelled"
        )
      );
  };

  fadeOutSecond = () => {
    this.second
      .slideOutRight(500)
      .then(endState =>
        console.log(
          endState.finished ? this.AnimateBottomSecond() : "fadeOut cancelled"
        )
      );
  };

  slideUp = () => {
    this.dream
      .slideInUp(900)
      .then(endState =>
        console.log(
          endState.finished ? "SlideUp finished" : "SlideUp cancelled"
        )
      );
  };

  AnimateBottomSecond = () => {
    this.setState({ second_visible: false });
    this.slideUp();
  };

  AnimateBottomFirst = () => {
    this.setState({ first_visible: false });
    this.slideUp();
    this.second
      .slideInUp(800)
      .then(endState =>
        console.log(
          endState.finished ? "SlideUp finished" : "SlideUp cancelled"
        )
      );
  };

  toggleSwitch = value => {
    this.setState({ switchValue: value });
  };

  openBottomSheet(item) {
    //alert(item.title)
    this.setState({
      modal_title: item.title,
      modal_desc: item.description,
      modal_date: item.date,
      modal_time: item.time,
      modal_rating: item.rating,
      modal_dream_type: item.type,
      modal_how_was_sleep: item.first_answer,
      modal_clarity: item.second_answer,
      modal_mood: item.fifth_answer,
      modal_tags: JSON.parse(item.tags)
    });
    this.refs.modal4.open();
    //openOverlay();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <BlurOverlay
              radius={20}
              downsampling={10}
              brightness={20}
              onPress={() => {
                  closeOverlay();
              }}
              // customStyles={{alignItems: 'center', justifyContent: 'center'}}
              // blurStyle="extraLight"
              //children={this.renderBlurChilds()}
            /> */}
          <View style={{ padding: "5%" }}>
            <View style={{ marginBottom: "2%", marginTop: "5%" }}>
              <TouchableOpacity
                onPress={this.onDreamReview}
                style={styles.calendar_Img}
              >
                <Image
                  source={Static_Images.image_calendar}
                  style={styles.calendar_Img}
                />
              </TouchableOpacity>
            </View>

            {this.state.first_visible == true ? (
              <Animatable.View
                ref={this.handleViewRef}
                style={styles.componentContainer}
              >
                <View style={{ padding: "5%" }}>
                  <Image
                    style={styles.image_lock}
                    source={Static_Images.image_lock}
                  />
                </View>

                <View style={{ flex: 1, marginVertical: "3.5%" }}>
                  <Text style={styles.component_text}>
                    {this.state.titleText1}
                  </Text>
                  <Text style={styles.component_detailText}>
                    {this.state.detailText1}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={this.fadeOut}
                  style={{
                    width: 40,
                    height: 40,
                    margin: "2%"
                  }}
                >
                  <Image
                    style={styles.image_close}
                    source={Static_Icons.icon_close}
                  />
                </TouchableOpacity>
              </Animatable.View>
            ) : null}

            {this.state.second_visible == true ? (
              <Animatable.View
                ref={this.handleSecondRef}
                style={{
                  flex: 1,
                  flexDirection: "column",
                  marginTop: "5%",
                  borderRadius: 10,
                  borderWidth: 1.5,
                  borderColor: "#715cd2",
                  justifyContent: "space-between"
                }}
              >
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ padding: "5%" }}>
                    <Image
                      style={styles.image_lock}
                      source={Static_Images.image_time}
                    />
                  </View>

                  <View style={{ flex: 1, marginVertical: "3.5%" }}>
                    <Text style={styles.component_text}>
                      {this.state.titleText2}
                    </Text>
                    <Text style={styles.component_detailText}>
                      {this.state.detailText2}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={this.fadeOutSecond}
                    style={{
                      width: 40,
                      height: 40,
                      margin: "2%"
                    }}
                  >
                    <Image
                      style={styles.image_close}
                      source={Static_Icons.icon_close}
                    />
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    borderBottomColor: "#715cd2",
                    borderBottomWidth: 1
                  }}
                />

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      alignSelf: "center",
                      marginStart: "5%",
                      letterSpacing: 0.5,
                      opacity: 0.9,
                      fontSize: 16,
                      fontFamily: theme.FONT_SEMI_BOLD
                    }}
                  >
                    Enable notifications
                  </Text>

                  <View style={{ paddingVertical: "2%", paddingEnd: "6%" }}>
                    <Switch
                      width={58}
                      height={32}
                      style={{
                        borderColor: "white",
                        borderWidth: 1,
                        opacity: 0.8
                      }}
                      circleStyle={{
                        height: 25,
                        width: 25,
                        margin: 2
                      }}
                      backgroundInactive="transparent"
                      backgroundActive="transparent"
                      circleColorActive="#817DE8"
                      value={this.state.value}
                      // onAsyncPress={(callback) => {
                      // setTimeout(() => callback(true))
                      // }}
                    />
                  </View>
                </View>
              </Animatable.View>
            ) : null}

            {this.state.FlatListItems != "" ? (
              <Animatable.View
                ref={this.handleMyDream}
                // duration={700}
                // animation="slideInUp"
                // iterationCount={1}
              >
                <ScrollView showsVerticalScrollIndicator={false}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ paddingBottom: 50 }}
                    data={this.state.FlatListItems}
                    extraData={this.state}
                    //onRefresh={() => this.onRefresh()}
                    //refreshing={this.state.isFetching}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this._renderItem}
                    numColumns={1}
                  />
                </ScrollView>
              </Animatable.View>
            ) : (
              <View
                style={{
                  height: 250,
                  justifyContent: "center",
                  alignItems: "center",
                  opacity:0.6
                }}
              >
                {/* <Image
                  source={Static_Images.image_stats_locked}
                  style={{ width: 70, height: 70, tintColor: "white" }}
                />
                <Text style={[styles.component_text, { marginVertical: 10 }]}>
                  Add Your Dream Now
                </Text> */}
              </View>
            )}
          </View>
        </ScrollView>
        {this.BottomSheet()}
      </View>
    );
  }

  BottomSheet() {
    return (
      <Modal
        style={[styles.modal, styles.modal4]}
        position={"bottom"}
        ref={"modal4"}
        backButtonClose={true}
        backdropColor="black"
        backdropOpacity={0.6}
        //onClosed={closeOverlay}
        //onClosingState={closeOverlay}
        animationDuration={400}
      >
        {this.ModalView()}
      </Modal>
    );
  }

  ModalView() {
    return (
      <View
        style={{
          backgroundColor: "#6346C4",
          width: "100%",
          height: "100%",
          paddingHorizontal: "5%",
          paddingTop: "5%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30
        }}
      >
        <View
          style={{
            height: 6,
            width: 60,
            backgroundColor: "white",
            opacity: 0.2,
            borderRadius: 6 / 2,
            alignSelf: "center",
            marginBottom: "5%"
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity activeOpacity={1}>
            <Text style={styles.text_date_time}>
              {this.state.modal_date}, {this.state.modal_time}
            </Text>
            <Text
              style={{
                color: "white",
                letterSpacing: 0.5,
                fontWeight: "bold",
                fontSize: 16,
                fontFamily: theme.FONT_CURVED,
                marginVertical: "3%"
              }}
            >
              {this.state.modal_title}
            </Text>
            <Text
              style={{
                color: "white",
                letterSpacing: 0.5,
                fontFamily: theme.FONT_CURVED_LIGHT,
                marginBottom: "5%"
              }}
            >
              {this.state.modal_desc}
            </Text>

            {this.state.modal_tags === null ? null : (
              <View style={{ marginBottom: "5%" }}>
                <Tags
                  readonly={true}
                  initialText="monkey"
                  initialTags={this.state.modal_tags}
                  onChangeTags={tags => console.log(tags)}
                  // onTagPress={(index, tagLabel, event, deleted) =>
                  //   console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                  // }
                  containerStyle={{ alignItems: "center", paddingEnd: 5 }}
                  //inputStyle={{ backgroundColor: "white" }}
                  renderTag={({
                    tag,
                    index,
                    onPress,
                    deleteTagOnPress,
                    readonly
                  }) => (
                    <TouchableOpacity
                      key={`${tag}-${index}`}
                      style={{
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        margin: 2,
                        backgroundColor: theme.PRIMARY_COLOR,
                        borderRadius: 6
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontFamily: theme.FONT_SEMI_BOLD,
                          fontSize: 12
                        }}
                      >
                        {tag}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}

            {this.state.modal_music === "" ? null : (
              <View
                style={{
                  marginBottom: "3%",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Image
                    source={Static_Images.image_play}
                    style={{ width: 50, height: 50 }}
                  />
                </View>
                <View style={{ flex: 1, margin: "5%" }}>
                  <Image
                    style={{
                      height: 20,
                      width: "100%",
                      alignSelf: "center",
                      marginEnd: 10,
                      opacity: 0.5
                    }}
                    source={Static_Images.image_record_audio}
                  />
                  <Text
                    style={{
                      color: "white",
                      alignSelf: "baseline",
                      marginTop: 8,
                      fontSize: 12,
                      fontFamily: theme.FONT_NORMAL
                    }}
                  >
                    3:59
                  </Text>
                </View>
              </View>
            )}

            {/* How was the sleep */}
            <View
              style={{
                flexDirection: "row",
                borderTopWidth: 0.5,
                borderColor: theme.PRIMARY_COLOR,
                padding: 15
              }}
            >
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text
                  style={{
                    color: "white",
                    opacity: 0.8,
                    fontFamily: theme.FONT_NORMAL
                  }}
                >
                  How was the sleep
                </Text>
              </View>
              <View>
                {this.state.modal_how_was_sleep === "Very bad" ? (
                  <Image
                    source={Static_Icons.icon_sleep_very_bad}
                    style={{ width: 24, height: 24 }}
                  />
                ) : null}
                {this.state.modal_how_was_sleep === "Meh" ? (
                  <Image
                    source={Static_Icons.icon_sleep_meh}
                    style={{ width: 24, height: 24 }}
                  />
                ) : null}
                {this.state.modal_how_was_sleep === "Normal" ? (
                  <Image
                    source={Static_Icons.icon_sleep_normal}
                    style={{ width: 24, height: 24 }}
                  />
                ) : null}
                {this.state.modal_how_was_sleep === "Great" ? (
                  <Image
                    source={Static_Icons.icon_sleep_great}
                    style={{ width: 24, height: 24 }}
                  />
                ) : null}
                {this.state.modal_how_was_sleep === "Supa dupa" ? (
                  <Image
                    source={Static_Icons.icon_sleep_supa_dupa}
                    style={{ width: 24, height: 24 }}
                  />
                ) : null}
              </View>
            </View>

            {/* Clarity */}
            <View
              style={{
                flexDirection: "row",
                borderTopWidth: 0.5,
                borderColor: theme.PRIMARY_COLOR,
                padding: 15
              }}
            >
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text
                  style={{
                    color: "white",
                    opacity: 0.8,
                    fontFamily: theme.FONT_NORMAL
                  }}
                >
                  Clarity
                </Text>
              </View>
              <View>
                {this.state.modal_clarity === "I didn't dream" ? (
                  <Image
                    source={Static_Icons.icon_clarity_didnt_dream}
                    style={{ width: 24, height: 24 }}
                  />
                ) : null}
                {this.state.modal_clarity === "Cloudy" ? (
                  <Image
                    source={Static_Icons.icon_clarity_cloudy}
                    style={{ width: 24, height: 24 }}
                  />
                ) : null}
                {this.state.modal_clarity === "Normal" ? (
                  <Image
                    source={Static_Icons.icon_clarity_normal}
                    style={{ width: 24, height: 24 }}
                  />
                ) : null}
                {this.state.modal_clarity === "Clear" ? (
                  <Image
                    source={Static_Icons.icon_clarity_clear}
                    style={{ width: 24, height: 24 }}
                  />
                ) : null}
                {this.state.modal_clarity === "Super clear" ? (
                  <Image
                    source={Static_Icons.icon_clarity_super_clear}
                    style={{ width: 24, height: 24 }}
                  />
                ) : null}
              </View>
            </View>

            {/* Lucid or not */}
            <View
              style={{
                flexDirection: "row",
                borderTopWidth: 0.5,
                borderColor: theme.PRIMARY_COLOR,
                padding: 15
              }}
            >
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text
                  style={{
                    color: "white",
                    opacity: 0.8,
                    fontFamily: theme.FONT_NORMAL
                  }}
                >
                  Lucid or not
                </Text>
              </View>
              <View style={{ paddingEnd: 2 }}>
                {this.state.modal_dream_type === "lucid" ? (
                  <Image
                    source={Static_Icons.icon_lucid}
                    style={{ width: 19, height: 19 }}
                  />
                ) : ( 
                  <Image
                    source={Static_Images.image_not_lucid}
                    style={{ width: 19, height: 19 }}
                  />
                )}
              </View>
            </View>

            {/* Overal mood */}
            <View
              style={{
                flexDirection: "row",
                borderTopWidth: 0.5,
                borderColor: theme.PRIMARY_COLOR,
                padding: 15
              }}
            >
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text
                  style={{
                    color: "white",
                    opacity: 0.8,
                    fontFamily: theme.FONT_NORMAL
                  }}
                >
                  Overal mood
                </Text>
              </View>
              <View>
                {this.state.modal_mood === "Super Negative" ? (
                  <Image
                    source={Static_Icons.icon_mood_super_naegative}
                    style={{ width: 24, height: 24 }}
                  />
                ) : null}
                {this.state.modal_mood === "Negative" ? (
                  <Image
                    source={Static_Icons.icon_mood_negative}
                    style={{ width: 24, height: 24 }}
                  />
                ) : null}
                {this.state.modal_mood === "Normal" ? (
                  <Image
                    source={Static_Icons.icon_mood_normal}
                    style={{ width: 24, height: 24 }}
                  />
                ) : null}
                {this.state.modal_mood === "Nice" ? (
                  <Image
                    source={Static_Icons.icon_mood_nice}
                    style={{ width: 24, height: 24 }}
                  />
                ) : null}
                {this.state.modal_mood === "Woop woop" ? (
                  <Image
                    source={Static_Icons.icon_mood_woop_woop}
                    style={{ width: 24, height: 24 }}
                  />
                ) : null}
              </View>
            </View>

            {/* Ratings */}
            <View
              style={{
                flexDirection: "row",
                paddingBottom: Platform.OS === "ios" ? 30 : 30,
                borderTopWidth: 0.5,
                borderColor: theme.PRIMARY_COLOR,
                padding: 15
              }}
            >
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text
                  style={{
                    color: "white",
                    opacity: 0.8,
                    fontFamily: theme.FONT_NORMAL
                  }}
                >
                  Rating
                </Text>
              </View>
              <View>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={this.state.modal_rating}
                  fullStarColor={"#c3a484"}
                  halfStarColor={"#c3a484"}
                  starSize={15}
                  starStyle={{ padding: 2 }}
                  selectedStar={rating => this.onStarRatingPress(rating)}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => this.openBottomSheet(item)}
    >
      <Animatable.View
        // animation="lightSpeedIn"
        // duration={700}
        // iterationCount={1}
        key={item.id}
        style={{
          flexDirection: "row",
          marginTop: 20,
          borderWidth: 1,
          borderRadius: 12,
          borderColor: theme.PRIMARY_COLOR
        }}
      >
        <View
          style={{ flex: 1, paddingHorizontal: "5%", paddingVertical: "2%" }}
        >
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.text_date_time}>{item.date},</Text>
              <Text style={styles.text_date_time}>{item.time}</Text>
              {/* <AirbnbRating
              count={5}
              reviews={["1", "2", "3", "4", "5"]}
              defaultRating={item.rating}
              size={15}
              showRating={false}
            /> */}

              <StarRating
                disabled={true}
                maxStars={5}
                rating={item.rating}
                fullStarColor={"#c3a484"}
                halfStarColor={"#c3a484"}
                starSize={15}
                starStyle={{ padding: 2 }}
                selectedStar={rating => this.onStarRatingPress(rating)}
              />
            </View>

            <View style={{ marginVertical: "2%" }}>
              <Text numberOfLines={1} style={styles.component_text}>
                {item.title}
              </Text>
              <Text numberOfLines={2} style={styles.component_detailText}>
                {item.description}
              </Text>
            </View>

            <View>
              {JSON.parse(item.tags) === null ? null : (
                <Tags
                  readonly={true}
                  initialText="monkey"
                  initialTags={JSON.parse(item.tags)}
                  onChangeTags={tags => console.log(tags)}
                  // onTagPress={(index, tagLabel, event, deleted) =>
                  //   console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                  // }
                  containerStyle={{ alignItems: "center", paddingEnd: 5 }}
                  //inputStyle={{ backgroundColor: "white" }}
                  renderTag={({
                    tag,
                    index,
                    onPress,
                    deleteTagOnPress,
                    readonly
                  }) => (
                    <View
                      key={`${tag}-${index}`}
                      style={{
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        margin: 2,
                        backgroundColor: theme.PRIMARY_COLOR,
                        borderRadius: 6
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontFamily: theme.FONT_SEMI_BOLD,
                          fontSize: 12
                        }}
                      >
                        {tag}
                      </Text>
                    </View>
                  )}
                />
              )}
            </View>

            {item.music === "yes" ? (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "baseline",
                  marginTop: "4%"
                }}
              >
                <View style={{ flex: 1 }}>
                  <Image
                    source={Static_Images.image_record_audio}
                    style={{ width: "100%", height: 15 }}
                  />
                </View>
                <View style={{ marginStart: 10 }}>
                  <Text style={styles.text_date_time}>{item.duration}</Text>
                </View>
              </View>
            ) : null}
          </View>
        </View>

        {item.type === "lucid" ? (
          <View
            style={{
              alignItems: "flex-end",
              width: 15,
              borderBottomRightRadius: 12,
              borderTopRightRadius: 12,
              right: -1,
              top: 0,
              bottom: 0,
              overflow: "hidden"
            }}
          >
            <Image
              source={Static_Images.image_side_lucid}
              style={{
                flex: 1,
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                height: "auto"
              }}
            />
          </View>
        ) : null}
      </Animatable.View>
    </TouchableOpacity>
  );
}

export default withNavigation(Journal);
