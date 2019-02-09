import { takeEvery, put, call } from "redux-saga/effects";
import { LOGIN_USER, LOGIN_SUCCESS } from "./User.actions";
import * as queries from "./User.queries"; //firebase queries

function* loginUser(action) {
  try {
    const response = yield call(
      queries.login,
      action.payload.email,
      action.payload.password
    );
    yield put({
      type: LOGIN_SUCCESS,
      payload: response.user.uid
    });
    console.log(response);
  } catch (e) {
    console.log(e);
    debugger;
  }
}

export function* userSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
}
