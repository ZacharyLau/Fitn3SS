import React, { Component } from "react";
import { View, Text } from "react-native";

var selectedExerciseName;

class ExerciseSettingScreen extends Component {
  componentWillMount() {
    const { navigation } = this.props;
    selectedExerciseName = navigation.getParam("key");
  }
  render() {
    return (
      <View>
        <Text>{selectedExerciseName.key}</Text>
      </View>
    );
  }
}

export default ExerciseSettingScreen;
