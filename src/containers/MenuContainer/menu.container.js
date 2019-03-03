import React, { Component } from "react";
import { View } from "react-native";
import tabs from "./menu.tabs";
import { createAppContainer } from "react-navigation";
// const testingData = [
//   {
//     key: "Bench Press",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/fitn3ss-3790e.appspot.com/o/exercises%2Fbench_press.jpeg?alt=media&token=5fd9c10e-9db9-4089-93da-f2b3a881d649"
//   }
// ];

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
