import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  ImageBackground
} from "react-native";
import React, { Component } from "react";
import Svg, { Path, G } from "react-native-svg";

import { Home } from "../Dashboard";
import LinearGradient from 'react-native-linear-gradient';

let { width } = Dimensions.get("window");

function initialIndexDetector(length) {
  if (length === 1) {
    return 1;
  } else if (length === 2) {
    return 1;
  } else if (length === 3) {
    return 2;
  } else if (length === 4) {
    return 1;
  } else if (length === 5) {
    return 3;
  }
}

export default class AwesomeTabbarTwo extends Component {
  constructor(props) {
    super(props);
    let initialIndex = 3;
    initialIndex = initialIndexDetector(props.icons.length);
    let xValue = 0;
    if (props.icons.length === 2) {
      xValue = -(width / props.icons.length / 2);
    } else if (props.icons.length === 4) {
      xValue = -(width / props.icons.length + width / props.icons.length / 2);
    }
    this.offsetX = new Animated.Value(xValue);

    this.oneOffsetY = new Animated.Value(initialIndex === 1 ? -20 : 0);
    this.twoOffsetY = new Animated.Value(initialIndex === 2 ? -20 : 0);
    this.threeOffsetY = new Animated.Value(initialIndex === 3 ? -20 : 0);
    this.fourOffsetY = new Animated.Value(initialIndex === 4 ? -20 : 0);
    this.fiveOffsetY = new Animated.Value(initialIndex === 5 ? -20 : 0);

    moveSelected = moveSelected.bind(this);
    animateIcon = animateIcon.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            { transform: [{ translateX: this.offsetX }] },
            styles.background
          ]}
        >
        <LinearGradient colors={['#817DE8', '#817DE8', '#9E68F0']} style={{
              position: "absolute",
              width: 50,
              height: 50,
              backgroundColor: this.props.backgroundColor,
              borderRadius: 25,
              bottom: 24
            }}>
         
          </LinearGradient>
          {/* This is for Left side view including two tabs */}
          <View
            style={{
              position: "absolute",
              left: 0,
              width: (width / 2 - 47),
              height: 60,
              backgroundColor: this.props.backgroundColor,
              borderWidth: 0
            }}
          />
         
           {/* This is for Center view including two tabs */}
          <View style={{ width: 96, height: 60, alignSelf: "center" }}>
            <Svg
              version="1.0"
              style={{ height: 96, width: 60 }}
              width="96"
              height="60"
              viewBox="0 0 96 60"
              preserveAspectRatio="xMidYMid meet"
            >
              <Path
                fill={this.props.backgroundColor}
                //d="M0 2999 l0 -3000 298 3 298 3 76 38 c169 83 268 243 268 431 0 104 -14 153 -88 306 -141 292 -225 626 -240 951 -22 463 60 861 262 1274 134 272 283 480 498 692 424 420 963 678 1553 743 129 14 421 14 550 0 590 -65 1129 -323 1553 -743 215 -212 364 -420 498 -692 202 -413 284 -811 262 -1274 -15 -327 -97 -650 -243 -961 -75 -158 -89 -212 -83 -329 3 -75 9 -97 43 -166 50 -104 136 -192 232 -238 l68 -32 298 -3 297 -3 0 3000 0 3001 -3600 0 -3600 0 0 -3001z"
                //d="M0,7.10323728e-18 L5.53675949,-3.85185989e-34 C12.7168849,-9.21154961e-18 18.5375267,5.81151324 18.5375267,13.0063652 L18.5375267,12.0156408 C18.5375267,28.0329253 31.5139704,41.0175 47.5446334,41.0175 L48.494705,41.0175 C64.5148877,41.0175 77.5018117,28.0393066 77.5018117,12.0156408 L77.5018117,13.0063652 C77.5018117,5.82314803 83.329364,2.75014681e-13 90.5000173,2.80222574e-13 L96,2.84217094e-13 L96,80 L0,80 L0,7.10323728e-18 Z"
                d="M-1.13686838e-13,7.10323728e-18 L5.53675949,0 C12.7168849,-9.21154961e-18 18.5375267,5.81151324 18.5375267,13.0063652 L18.5375267,12.0156408 C18.5375267,28.0329253 31.5139704,41.0175 47.5446334,41.0175 L48.494705,41.0175 C64.5148877,41.0175 77.5018117,28.0393066 77.5018117,12.0156408 L77.5018117,13.0063652 C77.5018117,5.82314803 83.329364,2.75014681e-13 90.5000173,2.80222574e-13 L96,2.84217094e-13 L96,60 L-1.13686838e-13,60 L-1.13686838e-13,7.10323728e-18 Z"

              />
            </Svg>
          </View>
          {/* This is for right side view including two tabs */}
          <View
            style={{
              position: "absolute",
              right: 0,
              width: (width / 2 - 47),
              height: 60,
              backgroundColor: this.props.backgroundColor
            }}
          />
        </Animated.View>
        <View style={styles.tabBar}>
          {this.props.icons[0] && (
            <TouchableOpacity
              onPress={() => {
                this.props.onSelect(1);
                //moveSelected(1)
              }}
              style={{
                width: width / this.props.icons.length,
                height: 56,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Animated.View
                style={{ transform: [{ translateY: this.oneOffsetY }] }}
              >
                {this.props.icons[0]}
              </Animated.View>
            </TouchableOpacity>
          )}
          {this.props.icons[1] && (
            <TouchableOpacity
              onPress={() => {
                this.props.onSelect(2);
                //moveSelected(2)
              }}
              style={{
                width: width / this.props.icons.length,
                height: 56,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Animated.View
                style={{ transform: [{ translateY: this.twoOffsetY }] }}
              >
                {this.props.icons[1]}
              </Animated.View>
            </TouchableOpacity>
          )}
          {this.props.icons[2] && (
            <TouchableOpacity
              onPress={() => {
                this.props.onSelect(3);
                // moveSelected(3);
              }}
              style={{
                width: width / this.props.icons.length,
                height: 56,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
            
              <Animated.View
                style={{ transform: [{ translateY: this.threeOffsetY }] }}
              >
              
                {this.props.icons[2]}
                
              </Animated.View>
           
            </TouchableOpacity>
            
          )}
          {this.props.icons[3] && (
             
            <TouchableOpacity
              onPress={() => {
                this.props.onSelect(4);
                //moveSelected(4)
              }}
              style={{
                width: width / this.props.icons.length,
                height: 56,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Animated.View
                style={{ transform: [{ translateY: this.fourOffsetY }] }}
              >
              
                {this.props.icons[3]}
  
              </Animated.View>
            </TouchableOpacity>
            
          )}
          {this.props.icons[4] && (
            <TouchableOpacity
              onPress={() => {
                this.props.onSelect(5);
                //moveSelected(5)
              }}
              style={{
                width: width / this.props.icons.length,
                height: 56,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Animated.View
                style={{ transform: [{ translateY: this.fiveOffsetY }] }}
              >
                {this.props.icons[4]}
              </Animated.View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: width,
    position: "absolute",
    bottom: 0,
    flexDirection: "row"
  },
  background: {
    width: width,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  tabBarBack: {
    width: width,
    height: 56,
    alignSelf: "center",
    flexDirection: "row",
    position: "absolute"
  },
  tabBar: {
    width: width,
    height: 56,
    alignSelf: "center",
    flexDirection: "row",
    borderWidth: 0
  },
  curveContainer: {
    alignSelf: "center",
    position: "absolute",
    top: -22,
    right: -35
  },
  content: {
    flexDirection: "column",
    zIndex: 0,
    width: Dimensions.get("window").width - 30,
    marginBottom: "4%",
    left: "4%",
    right: "4%"
  },
  selectedContainer: {
    width: 56,
    height: 56,
    position: "absolute",
    alignSelf: "center",
    bottom: 50
  },
  roundedButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    top: 4
  },
  subContent: {
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    zIndex: 1,
    position: "absolute",
    bottom: 5
  },
  navItem: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 6,
    alignItems: "center",
    zIndex: 0
  },
  navImage: {
    width: 45,
    height: 45
  },
  circle: {
    bottom: 18
  }
});

export function moveSelected(index) {
  let value = 0;
  value = detectNewOffset(index, this.props.icons.length);
  animateIcon(-1);

  Animated.parallel([
    Animated.timing(this.offsetX, {
      toValue: value,
      duration: 300
    })
  ]).start(() => animateIcon(index));
}

function detectNewOffset(index, length) {
  if (length === 1) {
    return 0;
  } else {
    let value = 0;
    console.log(index);
    switch (index) {
      case 1: {
        if (length === 5) {
          value = -2 * (width / length);
        } else if (length === 2) {
          value = -(width / length / 2);
        } else if (length === 4) {
          value = -(width / length + width / length / 2);
        } else if (length === 3) {
          value = -(width / length);
        }
        break;
      }
      case 2: {
        if (length === 5) {
          value = -(width / length);
        } else if (length === 2) {
          value = width / length - width / length / 2;
        } else if (length === 4) {
          value = -(width / length + width / length / 2) + width / length;
        } else if (length === 3) {
          value = 0;
        }
        break;
      }
      case 3: {
        if (length === 5) {
          value = 0;
        } else if (length === 4) {
          value = -(width / length + width / length / 2) + 2 * (width / length);
        } else if (length === 3) {
          value = width / length;
        }
        break;
      }
      case 4: {
        if (length === 5) {
          value = width / length;
        } else if (length === 4) {
          value = -(width / length + width / length / 2) + 3 * (width / length);
        }
        break;
      }
      case 5: {
        if (length === 5) {
          value = 2 * (width / length);
        }
        break;
      }
    }
    return value;
  }
}

export function animateIcon(index) {
  Animated.parallel([
    Animated.timing(this.oneOffsetY, {
      toValue: index === 1 ? -6 : 0,
      duration: 100,
      useNativeDriver: true
    }),
    Animated.timing(this.twoOffsetY, {
      toValue: index === 2 ? -6 : 0,
      duration: 100,
      useNativeDriver: true
    }),
    Animated.timing(this.threeOffsetY, {
      toValue: index === 3 ? -6 : 0,
      duration: 100,
      useNativeDriver: true
    }),
    Animated.timing(this.fourOffsetY, {
      toValue: index === 4 ? -6 : 0,
      duration: 100,
      useNativeDriver: true
    }),
    Animated.timing(this.fiveOffsetY, {
      toValue: index === 5 ? -6 : 0,
      duration: 100,
      useNativeDriver: true
    })
  ]).start();
}
