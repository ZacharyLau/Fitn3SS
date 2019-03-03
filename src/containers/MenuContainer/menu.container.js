import React, { Component } from "react";
import { GridMenu } from "../../components/common/gridMenu/GridMenu";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import tabs from "./menu.tabs";
import { actions } from "../../modules/Menu/Menu.actions";
import { createAppContainer } from "react-navigation";
const data = [
  {
    key: "Bench Press",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fitn3ss-3790e.appspot.com/o/exercises%2Fbench_press.jpeg?alt=media&token=5fd9c10e-9db9-4089-93da-f2b3a881d649"
  }
];
// { key: "Chin Up", image: require("../../pic/chin_up.jpeg") },
// { key: "Shoulder Press", image: require("../../pic/shoulder_press.jpeg") },
// { key: "Squats", image: require("../../pic/squats.jpeg") },
// { key: "Dead Lift", image: require("../../pic/dead_lift.jpeg") }

const numColumns = 2;
const MenuTabs = createAppContainer(tabs);

class Menu extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MenuTabs />
      </View>
    );
  }
}

export default Menu;

// export class LiftingTab extends Component {
//   render() {
//     return <GridMenu items={data} numColumns={numColumns} />;
//   }
// }

// export class cardioTab extends Component {
//   render() {
//     return (
//       <View>
//         <Text>cardio</Text>
//       </View>
//     );
//   }
// }

// // const cardioTab = Tab(data, numColumns);
// // const LiftingTab = Tab(data, numColumns);

// export default createMaterialTopTabNavigator({
//   Lifting: { screen: LiftingTab },
//   Cardio: { screen: cardioTab }
// });
