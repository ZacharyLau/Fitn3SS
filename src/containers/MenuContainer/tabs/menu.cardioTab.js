import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";

//import { actions } from "../../../modules/ExerciseSetting/ExerciseSetting.actions";
import { GridMenu } from "../gridMenu/GridMenu";

const numColumns = 2;

var data = [];
class cardioTab extends Component {
  onGridCellPress(exerciseName) {
    this.props.chooseExercise(exerciseName);
  }

  componentWillMount() {
    data = convertExerciseJsonToArray(this.props.exercises);
  }

  render() {
    return <GridMenu items={data} numColumns={numColumns} />;
  }
}

const convertExerciseJsonToArray = exercises => {
  var array = [];

  _.forEach(exercises, function(exercise) {
    arrayItem = {
      key: `${exercise.exerciseName}`,
      image: `${exercise.exerciseMenuPic}`,
      type: `${exercise.exerciseType}`
    };
    array.push(arrayItem);
  });

  return array;
};

const mapStateToProps = state => {
  const exercises = _.map(
    state.menuReducer.exercises.payload.cardio,
    (exercises, exerciseName) => {
      return { ...exercises, exerciseName };
    }
  );

  return { exercises };
};

export default connect(
  mapStateToProps,
  null
)(cardioTab);
