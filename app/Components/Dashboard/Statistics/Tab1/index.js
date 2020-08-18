import React, { Component } from "react";
import { View, Text, Dimensions, ScrollView, Image } from "react-native";
import { LineChart } from "react-native-chart-kit";

import {
  AreaChart,
  XAxis,
  YAxis,
  Grid,
  ProgressCircle
} from "react-native-svg-charts";
import { Circle, Path } from "react-native-svg";
import * as shape from "d3-shape";
import moment from "moment";

import LinearGradient from "react-native-linear-gradient";
import Carousel, { Pagination } from "react-native-snap-carousel";

import theme from "../../../../Theme";
import { Static_Images } from "../../../../Constants";

export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
          title: "One",
          lucid: "Lucid dreams",
          percentage_lucid: 12.6,
          notlucid: "Not lucid dreams",
          percentage_notlucid: 87.4
        },
        { 
          title: "Two",
          avg_ratings: 3.7,
        },
        { title: "Three" }
      ],
      activeSlide: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#413298" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 25 }}>
            <Carousel
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={Dimensions.get("window").width}
              itemWidth={Dimensions.get("window").width - 40}
              onSnapToItem={index => this.setState({ activeSlide: index })}
            />
            {this.pagination}
          </View>
          <View style={{ marginHorizontal: 20, paddingBottom: 80 }}>
            <View style={{ marginBottom: 10 }}>
              <LinearGradient
                colors={["#6446c5", "#543aab"]}
                style={{
                  height: 250,
                  width: "100%",
                  padding: 15,
                  borderRadius: 15
                }}
              >
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontFamily: theme.FONT_SEMI_BOLD,
                      marginBottom: 10
                    }}
                  >
                    Sleep quality
                  </Text>
                  <View
                    style={{ height: 180, padding: 5, flexDirection: "row" }}
                  >
                    <YAxis
                      data={sleep_data}
                      style={{ marginBottom: xAxisHeight }}
                      contentInset={verticalContentInset}
                      svg={axesSvg}
                      numberOfTicks={5}
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                      <AreaChart
                        style={{ flex: 1 }}
                        data={sleep_data}
                        curve={shape.curveNatural}
                        //svg={{ fill: "#6446c5" }}
                        contentInset={{ top: 20, bottom: 30 }}
                      >
                        <SleepLine />
                        {/* <Decorator /> */}
                      </AreaChart>
                      {/* <XAxis
                        style={{ height: xAxisHeight, marginTop: 5 }}
                        data={sleep_data}
                        formatLabel={(value, index) => value}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                        numberOfTicks={sleep_data.length}
                      /> */}
                      <HorizontalDates />
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>

            <View style={{ marginVertical: 10 }}>
              <LinearGradient
                colors={["#6446c5", "#543aab"]}
                style={{
                  height: 250,
                  width: "100%",
                  padding: 15,
                  borderRadius: 15
                }}
              >
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontFamily: theme.FONT_SEMI_BOLD,
                      marginBottom: 10
                    }}
                  >
                    Dream clarity
                  </Text>
                  <View
                    style={{ height: 180, padding: 5, flexDirection: "row" }}
                  >
                    <YAxis
                      data={clarity_data}
                      style={{ marginBottom: xAxisHeight }}
                      contentInset={verticalContentInset}
                      svg={axesSvg}
                      numberOfTicks={5}
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                      <AreaChart
                        style={{ flex: 1 }}
                        data={clarity_data}
                        curve={shape.curveNatural}
                        //svg={{ fill: "#6446c5" }}
                        contentInset={{ top: 20, bottom: 30 }}
                      >
                        <ClarityLine />
                        {/* <Decorator /> */}
                      </AreaChart>
                      {/* <XAxis
                        style={{ height: xAxisHeight, marginTop: 5 }}
                        data={clarity_data}
                        formatLabel={(value, index) => value}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                        numberOfTicks={clarity_data.length}
                      /> */}
                      <HorizontalDates />
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>

            <View style={{ marginVertical: 10 }}>
              <LinearGradient
                colors={["#6446c5", "#543aab"]}
                style={{
                  height: 250,
                  width: "100%",
                  padding: 15,
                  borderRadius: 15
                }}
              >
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontFamily: theme.FONT_SEMI_BOLD,
                      marginBottom: 10
                    }}
                  >
                    Dream mood
                  </Text>
                  <View
                    style={{ height: 180, padding: 5, flexDirection: "row" }}
                  >
                    <YAxis
                      data={mood_data}
                      style={{ marginBottom: xAxisHeight }}
                      contentInset={verticalContentInset}
                      svg={axesSvg}
                      numberOfTicks={5}
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                      <AreaChart
                        style={{ flex: 1 }}
                        data={mood_data}
                        curve={shape.curveNatural}
                        //svg={{ fill: "#6446c5" }}
                        contentInset={{ top: 20, bottom: 30 }}
                      >
                        <MoodLine />
                        {/* <Decorator /> */}
                      </AreaChart>
                      {/* <XAxis
                        style={{ height: xAxisHeight, marginTop: 5 }}
                        data={mood_data}
                        formatLabel={(value, index) => value}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                        numberOfTicks={mood_data.length}
                      /> */}
                      <HorizontalDates />
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  _renderItem({ item, index }) {
    if (index === 0) {
      return (
        <LinearGradient
          colors={["#6446c5", "#543aab"]}
          style={{
            paddingVertical: 20,
            paddingHorizontal: 30,
            backgroundColor: "transparent",
            borderRadius: 15,
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 1.2 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 15 / 2,
                  marginEnd: 10,
                  backgroundColor: "#07e9ff"
                }}
              />
              <View>
                <Text
                  style={{
                    color: "white",
                    opacity: 0.7,
                    fontSize: 12,
                    fontFamily: theme.FONT_SEMI_BOLD
                  }}
                >
                  {item.lucid}
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 13,
                    fontFamily: theme.FONT_SEMI_BOLD
                  }}
                >
                  {item.percentage_lucid}%
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 15 / 2,
                  marginEnd: 10,
                  backgroundColor: "#ff07ed"
                }}
              />
              <View>
                <Text
                  style={{
                    color: "white",
                    opacity: 0.7,
                    fontSize: 12,
                    fontFamily: theme.FONT_SEMI_BOLD
                  }}
                >
                  {item.notlucid}
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 13,
                    fontFamily: theme.FONT_SEMI_BOLD
                  }}
                >
                  {item.percentage_notlucid}%
                </Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 0.8 }}>
            <ProgressCircle
              style={{ height: 80 }}
              progress={0.1}
              progressColor={"#07e9ff"}
              strokeWidth={8}
              backgroundColor={"#ff07ed"}
              cornerRadius={0}
            />
          </View>
        </LinearGradient>
      );
    }

    if (index === 1) {
      return (
        <LinearGradient
          colors={["#6446c5", "#543aab"]}
          style={{
            paddingVertical: 20,
            paddingHorizontal: 30,
            backgroundColor: "transparent",
            borderRadius: 15,
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 1.4 }}>
            <Image source={Static_Images.image_avg_ratings} style={{width:80,height:80,resizeMode:'contain'}}/>
          </View>

          <View
            style={{
              flex: 0.6,
              height: 80,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View>
              <Text style={{color:'white',fontSize:35,fontFamily:theme.FONT_SEMI_BOLD}}>{item.avg_ratings}</Text>
              <Text style={{color:'white',fontSize:13,fontFamily:theme.FONT_MEDIUM,opacity:0.7}}>AVG rating</Text>
            </View>
          </View>
        </LinearGradient>
      );
    }

    if (index === 2) {
      return (
        <LinearGradient
          colors={["#6446c5", "#543aab"]}
          style={{
            paddingVertical: 20,
            paddingHorizontal: 30,
            backgroundColor: "transparent",
            borderRadius: 15,
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 1 }}>
           
          </View>

          <View style={{ flex: 1, height: 80 }}>
            
          </View>
        </LinearGradient>
      );
    }
  }

  get pagination() {
    const { entries, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: "transparent", marginVertical: -15 }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 4,
          marginHorizontal: 0,
          backgroundColor: theme.PRIMARY_COLOR
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
}

const HorizontalDates = () => {
  return (
    <View
      style={{
        height: xAxisHeight,
        flexDirection: "row",
        opacity: 0.8
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: theme.FONT_MEDIUM
          }}
        >
          {today}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            fontFamily: theme.FONT_REGULAR
          }}
        >
          {month}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: theme.FONT_MEDIUM
          }}
        >
          {nextDay}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            fontFamily: theme.FONT_REGULAR
          }}
        >
          Jun
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: theme.FONT_MEDIUM
          }}
        >
          {SecondnextDay}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            fontFamily: theme.FONT_REGULAR
          }}
        >
          Jun
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: theme.FONT_MEDIUM
          }}
        >
          {ThirdnextDay}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            fontFamily: theme.FONT_REGULAR
          }}
        >
          Jun
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: theme.FONT_MEDIUM
          }}
        >
          {FourthnextDay}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            fontFamily: theme.FONT_REGULAR
          }}
        >
          Jun
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: theme.FONT_MEDIUM
          }}
        >
          {FifthnextDay}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            fontFamily: theme.FONT_REGULAR
          }}
        >
          Jun
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: theme.FONT_MEDIUM
          }}
        >
          {SixthnextDay}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            fontFamily: theme.FONT_REGULAR
          }}
        >
          Jun
        </Text>
      </View>
    </View>
  );
};

const today = moment().format("DD");
const month = moment().format("MMM");
const nextDay = moment()
  .add(1, "days")
  .format("DD");
const SecondnextDay = moment()
  .add(2, "days")
  .format("DD");
const ThirdnextDay = moment()
  .add(3, "days")
  .format("DD");
const FourthnextDay = moment()
  .add(4, "days")
  .format("DD");
const FifthnextDay = moment()
  .add(5, "days")
  .format("DD");
const SixthnextDay = moment()
  .add(6, "days")
  .format("DD");

const sleep_data = [4, 2, 5, 4, 5, 1, 3, 1.5];
const clarity_data = [1.5, 3.3, 1, 5, 3.5, 5, 2.2, 4];
const mood_data = [4.5, 2.8, 5, 1, 2.5, 1.1, 4, 2.5];

const Decorator = ({ x, y, data }) => {
  return data.map((value, index) => (
    <Circle
      key={index}
      cx={x(index)}
      cy={y(value)}
      r={2}
      stroke={"white"}
      fill={"white"}
    />
  ));
};

const SleepLine = ({ line }) => (
  <Path d={line} stroke={"#9E68F0"} fill={"none"} strokeWidth={3} />
);

const ClarityLine = ({ line }) => (
  <Path d={line} stroke={"#e2c88d"} fill={"none"} strokeWidth={3} />
);

const MoodLine = ({ line }) => (
  <Path d={line} stroke={"#84cdc0"} fill={"none"} strokeWidth={3} />
);

const axesSvg = {
  fontSize: 12,
  fill: "white",
  fontFamily: theme.FONT_MEDIUM,
  opacity: 0.8
};
const verticalContentInset = { top: 10, bottom: 10 };
const xAxisHeight = 40;

{
  /* <Text style={{ color: "white" }}>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["01", "02", "03", "04", "05", "06"],
      datasets: [
        {
          data: [
            Math.random() * 5,
            Math.random() * 5,
            Math.random() * 5,
            Math.random() * 5,
            Math.random() * 5,
            Math.random() * 5
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width - 40} // from react-native
    height={220}
    yAxisLabel={""}
    withOuterLines={false}
    withInnerLines={false}
    withDots={false}
    withShadow={false}
    chartConfig={{
      // backgroundColor: "#e26a00",
      backgroundGradientFrom: "#6446c5",
      backgroundGradientTo: "#543aab",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 15
    }}
  /> */
}
