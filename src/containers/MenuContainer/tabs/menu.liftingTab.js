import React, { Component } from "react";
import _ from "lodash";

import { GridMenu } from "../gridMenu/GridMenu";
import { connect } from "react-redux";

const numColumns = 2;
var data = [];
class liftingTab extends Component {
  componentWillMount() {
    data = convertExerciseJsonToArray(this.props.exercises);
    console.log(data);
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
      image: `${exercise.exerciseMenuPic}`
    };
    array.push(arrayItem);
  });

  return array;
};

const mapStateToProps = state => {
  const exercises = _.map(
    state.menuReducer.exercises.payload.lifting,
    (exercises, exerciseName) => {
      return { ...exercises, exerciseName };
    }
  );

  return { exercises };
};

export default connect(mapStateToProps)(liftingTab);
