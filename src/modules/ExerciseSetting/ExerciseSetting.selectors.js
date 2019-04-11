import { createSelector, createStructuredSelector } from "reselect";
import _ from "lodash";

const cardioSelector = state => state.menuReducer.exercises.payload.cardio;
const liftingSelector = state => state.menuReducer.exercises.payload.lifting;
const selectedExercise = state => state.exerciseSettingReducer.selectedExercise;

const getSelectedExercise = (
  cardioSelector,
  liftingSelector,
  selectedExercise
) => {
  let exerciseDetail;
  switch (selectedExercise.type) {
    case "lifting":
      exerciseDetail = _.find(liftingSelector, function(exe) {
        if (exe.exerciseName === selectedExercise.key) {
          return exe;
        }
      }); //the second param of _.find should be a function that defines the matching criteria
      return exerciseDetail;

    case "cardio":
      exerciseDetail = _.find(cardioSelector, function(exe) {
        if (exe.exerciseName === selectedExercise.key) {
          return exe;
        }
      }); //the second param of _.find should be a function that defines the matching criteria
      return exerciseDetail;
  }
};

// *************************  structure selector instead of normal selector *************************
//import { createSelector, createStructuredSelector } from "reselect";

// export default createStructuredSelector({
//   cardioExercises: cardioSelector,
//   liftingExercises: liftingSelector,
//   selectedExercise,
//   selectedExerciseWithDetails: getSelectedExercise
// });
// *************************  structure selector instead of normal selector *************************
// *************************************  End of the template ***************************************

export default createSelector(
  cardioSelector,
  liftingSelector,
  selectedExercise,
  getSelectedExercise
);
