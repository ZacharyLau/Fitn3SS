import { takeEvery, put, call, take } from "redux-saga/effects";
import NavigationService from "../Navigation/NavigationService";
import { CHOOSE_EXERCISE, EXERCISE_SELECTED } from "./ExerciseSetting.actions";

function* chooseExercise() {
  //   yield call(console.log, selectedExercise);
  //   yield put({ type: EXERCISE_SELECTED, payload: selectedExercise });
  //yield call(NavigationService.navigate("ExerciseSetting"));
}

export function* exerciseSettingSaga() {
  takeEvery(CHOOSE_EXERCISE, chooseExercise);
}
