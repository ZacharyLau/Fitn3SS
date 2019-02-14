import { takeEvery, put, call } from "redux-saga/effects";
import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAIL } from "./User.actions";
import * as queries from "./User.queries"; //firebase queries
import NavigationService from "../../modules/Navigation/NavigationService";

function* loginUser(action) {
  try {
    const response = yield call(
      queries.login,
      action.payload.email,
      action.payload.password
    );
    put({ type: LOGIN_USER });

    yield put({
      type: LOGIN_SUCCESS,
      payload: response.user
    });

    yield call(NavigationService.navigate, "Pokemon");
  } catch (e) {
    yield put({ type: LOGIN_FAIL, payload: e.message });
    //debugger;
  }
}

export function* userSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  //yield takeEvery(LOGIN_SUCCESS, loginSuccess);
}
