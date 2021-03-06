import { takeEvery, put, call, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import NavigationService from "../../modules/Navigation/NavigationService";

import { LOAD_EXERCISE, LOAD_EXERCISE_SUCCESS } from "./Menu.actions";
import * as queries from "./Menu.queries";

function* loadExercise() {
  try {
    const exerciseQueryListener = eventChannel(emitter =>
      queries.loadingExerciseMenu(emitter)
    );
    while (true) {
      const queryData = yield take(exerciseQueryListener);

      yield put({ type: LOAD_EXERCISE_SUCCESS, payload: queryData });
    }
  } catch (e) {
    console.log(e);
  }
}

function* loadExerciseSuccess() {
  yield call(NavigationService.navigate, "Menu");
}

export function* exerciseMenuSaga() {
  yield takeEvery(LOAD_EXERCISE, loadExercise);
  yield takeEvery(LOAD_EXERCISE_SUCCESS, loadExerciseSuccess);
}
