import React, { Component } from "react";
import { GridMenu } from "../../components/common/gridMenu/GridMenu";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";

const data = [
  {
    key: "Bench Press",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fitn3ss-3790e.appspot.com/o/exercises%2Fbench_press.jpeg?alt=media&token=5fd9c10e-9db9-4089-93da-f2b3a881d649"
  }
  // { key: "Chin Up", image: require("../../pic/chin_up.jpeg") },
  // { key: "Shoulder Press", image: require("../../pic/shoulder_press.jpeg") },
  // { key: "Squats", image: require("../../pic/squats.jpeg") },
  // { key: "Dead Lift", image: require("../../pic/dead_lift.jpeg") }
];

const numColumns = 2;

export class Menu extends Component {
  render() {
    return <GridMenu items={data} numColumns={numColumns} />;
  }
}

export class shit extends Component {
  render() {
    return (
      <View>
        <Text>shit</Text>
      </View>
    );
  }
}

export default createMaterialTopTabNavigator({
  Menu: { screen: Menu },
  shit: { screen: shit }
});
