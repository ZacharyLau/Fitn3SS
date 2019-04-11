import React, { PureComponent } from "react";
import _ from "lodash";

import { GridMenu } from "../gridMenu/GridMenu";
import { connect } from "react-redux";

///import { actions } from "../../../modules/Menu/Menu.actions";

const numColumns = 2;
var data = [];
class liftingTab extends PureComponent {
  gridCellOnPress = () => {
    this.props.chooseExercise(this.props.selectedExercise);
  };
  componentWillMount() {
    data = convertExerciseJsonToArray(this.props.exercises);
  }

  render() {
    return (
      <GridMenu
        items={data}
        numColumns={numColumns}
        onPress={this.gridCellOnPress.bind(this)}
      />
    );
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
    state.menuReducer.exercises.payload.lifting,
    exercises => {
      return { ...exercises };
    }
  );

  return { exercises };
};

export default connect(
  mapStateToProps,
  null
)(liftingTab);
