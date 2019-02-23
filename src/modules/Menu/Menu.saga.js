import { takeEvery, put, call } from "redux-saga/effects";
import { LOAD_EXERCISE, LOAD_EXERCISE_SUCCESS } from "./Menu.actions";
import * as queries from "./Menu.queries";
function* loadExercise() {
  try {
    const response = yield call(queries.loadingExerciseMenu);

    yield put({ type: LOAD_EXERCISE_SUCCESS, response });
  } catch (e) {
    console.log(e);
  }
}

export function* exerciseMenuSaga() {
  yield takeEvery(LOAD_EXERCISE, loadExercise);
}
