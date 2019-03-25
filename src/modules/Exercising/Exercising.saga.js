import { takeEvery, put, call, take } from "redux-saga/effects";
import NavigationService from "../../modules/Navigation/NavigationService";
import { CHOOSE_EXERCISE, EXERCISE_SELECTED } from "./Exercising.actions";

function* chooseExercise() {
  //   yield call(console.log, selectedExercise);
  //   yield put({ type: EXERCISE_SELECTED, payload: selectedExercise });
  //yield call(NavigationService.navigate("ExerciseSetting"));
}

export function* exercisingSaga() {
  takeEvery(CHOOSE_EXERCISE, chooseExercise);
}
