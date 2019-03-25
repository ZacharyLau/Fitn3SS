import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { actions } from "../../modules/Exercising/Exercising.actions";

import exerciseSelector from "../../modules/Exercising/Exercising.selectors";

var selectedExerciseName;
var exerciseType;

class ExerciseSettingScreen extends Component {
  componentWillMount() {
    // const { navigation } = this.props;
    // selectedExerciseName = navigation.getParam("key").key;
    // exerciseType = navigation.getParam("type").type;
    //this.props.exerciseSelected({ selectedExerciseName, exerciseType });

    console.log(this.props.exercise);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    return (
      <View>
        <Text>somt</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps");
  return {
    exercise: exerciseSelector(state)
  };
};

const settingMenu = connect(
  mapStateToProps,
  actions
)(ExerciseSettingScreen);

export default settingMenu;
