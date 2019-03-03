import React, { Component } from "react";
import _ from "lodash";

import { GridMenu } from "../../../components/common/gridMenu/GridMenu";
import { connect } from "react-redux";
import { actions } from "../../../modules/Menu/Menu.actions";

const numColumns = 2;
var data = [];
class cardioTab extends Component {
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
    state.menuReducer.exercises.payload.cardio,
    (exercises, exerciseName) => {
      return { ...exercises, exerciseName };
    }
  );

  return { exercises };
};

export default connect(
  mapStateToProps,
  actions
)(cardioTab);
