import React, { Component } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { connect } from "react-redux";
import { actions } from "../../modules/ExerciseSetting/ExerciseSetting.actions";

import exerciseSelector from "../../modules/ExerciseSetting/ExerciseSetting.selectors";

// var selectedExerciseName;
// var exerciseType;

class ExerciseSettingScreen extends Component {
  componentWillMount() {
    //*********************** sample of taking attributes from the previous screen */
    // const { navigation } = this.props;
    // selectedExerciseName = navigation.getParam("key").key;
    // exerciseType = navigation.getParam("type").type;
    //this.props.exerciseSelected({ selectedExerciseName, exerciseType });
    //*********************** sample of taking attributes from the previous screen */

    console.log(this.props.exercise);
  }

  //set exercise name to the top of the navigation bar

  componentDidMount() {
    //console.log("componentDidMount");
  }
  render() {
    const {
      exercisePic,
      exerciseName,
      exerciseDescription
    } = this.props.exercise;
    const {
      headerImageStyle,
      discriptionTextStyle,
      settingPickerContainerStyle
    } = styles;
    return (
      <View>
        <Image source={{ url: exercisePic }} style={headerImageStyle} />
        <Text style={discriptionTextStyle}>{exerciseDescription}</Text>
        <View style={settingPickerContainerStyle} />
      </View>
    );
  }
}

const styles = {
  headerImageStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width * 0.6
    //backgroundColor: "#4D243D",
    //alignSelf: "stretch",
    //flex: 1
  },

  discriptionTextStyle: {
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative",
    alignSelf: "baseline",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 16,
    color: "black"
  },

  settingPickerContainerStyle: {
    justifyContent: "flex-start",
    flexDirection: "column",
    position: "relative"
  }
};
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
