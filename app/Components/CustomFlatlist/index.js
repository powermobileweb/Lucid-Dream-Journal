import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { my_journal_data, Static_Icons, Static_Images } from "../../Constants";
import theme from "../../Theme";
import styles from "../../Components/Dashboard/style";
import StarRating from "react-native-star-rating";
import Tags from "react-native-tags";

const CustomFlatlist = props => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={props.style}
      data={props.data}
      extraData={this.state}
      keyExtractor={props.keyExtractor}
      renderItem={this._renderItem}
      //numColumns={1}
    />
  );
};

_renderItem = ({ item }) => (
  <TouchableOpacity activeOpacity={1}>
    <View
      key={item.id}
      style={{
        flexDirection: "row",
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 13,
        borderColor: theme.PRIMARY_COLOR
      }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: "5%",
          paddingVertical: "2%"
        }}
      >
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
          <Text numberOfLine={1} style={styles.component_text}>
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
                  {/* onPress={onPress} */}
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
                height: "auto" }}
            />
          </View>
        ) : null}
    </View>
  </TouchableOpacity>
);

export default CustomFlatlist;
